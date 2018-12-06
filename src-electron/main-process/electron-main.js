import { app, BrowserWindow, ipcMain, net } from 'electron'
import electronMsg from "../../common/electronMsg";
import { Server, createServer, Socket } from 'net';

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

let mainWindow

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * @type Server
 */
let socket = null;
/**
 * @type Array<Socket>
 */
let clientList = [];
let socketMode = "TCP_SERVER";

ipcMain.on(electronMsg.OPEN_SOCKET, function (event, 
  {
    mode,
    localPort,
    remoteAddress,
    remotePort
  }
) {
  console.log(electronMsg.OPEN_SOCKET);
  if (socket) {
    socket.close();
  }
  socketMode = mode;
  try {
    switch (mode) {
      case "TCP_SERVER":
        openTcpServer(localPort);
        break;
      default:
        break;
    }
    event.returnValue = true;
  } catch (error) {
    event.returnValue = false;
  }
});

/**
 * 打开 TCP 服务器 Socket
 * @param {number} port 端口
 */
function openTcpServer(port) {
  socket = new createServer((client) => {
    console.log("CONNECTED", client.remoteAddress, client.remotePort, clientList.length + 1);
    clientList.push(client);

    client.on("close", function () {
      console.log('CLOSED: ', this.remoteAddress, this.remotePort);
      clientList.splice(clientList.indexOf(this), 1);
    });

    client.on("error", function (err) {
      console.log("ERRORED: ", this.remoteAddress, this.remotePort, err);
      this.end();
    });

    client.on("end", function () {
      clientList.splice(clientList.indexOf(this), 1);
    })
  }).listen(port);

  socket.on("error", function (err) {
    console.log("TCP Server Error: ", err);
  });
}

ipcMain.on(electronMsg.SEND_MESSAGE, function (event, {content, type}) {
  let msg = content;
  if (type == "HEX") {
    /**
     * @type Array<number>
     */
    let contentArray = content.split(" ").map(function (item) {
      return parseInt(item, 16);
    });
    msg = contentArray;
  }
  let buffer = Buffer.from(msg);
  clientList.forEach((client) => {
    if (client.writable) {
      client.write(buffer);
    } else {
      let i = clientList.indexOf(item);
      client.destroy();
      clientList.splice(i, 1);
      console.log("Client list", clientList.length, clientList.map(item => `${item.remoteAddress} : ${item.remotePort}`));
    }
  });
});

ipcMain.on(electronMsg.CLOSE_SOCKET, function (event) {
  try {
    socket.close();
    event.returnValue = true;
  } catch (error) {
    event.returnValue = false;
  }
})