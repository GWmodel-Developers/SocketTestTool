<template>
  <q-card>
    <q-card-title>通信设置</q-card-title>
    <q-card-main>
      <q-field label="工作模式">
        <q-select v-model="socketSetting.mode" radio :options="selectOptions"/>
      </q-field>
      <q-field label="本地端口">
        <q-input v-model="socketSetting.localPort" type="number"></q-input>
      </q-field>
      <q-field label="远程地址">
        <q-input :disable="disableRemoteSetting" v-model="socketSetting.remoteAddress" type="text"></q-input>
      </q-field>
      <q-field label="远程端口">
        <q-input :disable="disableRemoteSetting" v-model="socketSetting.remotePort" type="number"></q-input>
      </q-field>
      <q-field label="自动重连">
        <q-toggle :disable="disableRemoteSetting" v-model="socketSetting.autoReconnect" :label="socketSetting.autoReconnect ? '是' : '否'"></q-toggle>
      </q-field>
    </q-card-main>
    <q-card-actions>
      <q-btn v-if="!isOpen" icon-right="cast" label="连接" color="primary" @click="connect"></q-btn>
      <q-btn v-else icon-right="close" label="关闭" color="secondary" @click="close"></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { ipcRenderer, remote } from "electron";
import electronMsg from "../../common/electronMsg";
export default {
  // name: 'ComponentName',
  data () {
    return {
      socketSetting: {
        mode: "TCP_SERVER",
        localPort: "",
        remoteAddress: "127.0.0.1",
        remotePort: "",
        autoReconnect: false
      },
      selectOptions: [{
        label: "TCP服务器",
        value: "TCP_SERVER"
      },{
        label: "TCP客户端",
        value: "TCP_CLIENT"
      },{
        label: "TCP服务器",
        value: "TCP_UDP"
      }],
      isOpen: false
    }
  },
  computed: {
    disableRemoteSetting: function () {
      return this.socketSetting.mode !== "TCP_CLIENT"
    }
  },
  methods: {
    connect () {
      let res = ipcRenderer.sendSync(electronMsg.OPEN_SOCKET, {
        mode: this.socketSetting.mode,
        localPort: parseInt(this.socketSetting.localPort),
        remoteAddress: this.socketSetting.remoteAddress,
        remotePort: parseInt(this.socketSetting.remotePort),
        autoReconnect: this.socketSetting.autoReconnect
      });
      if (res) {
        this.isOpen = true;
      } else {
        this.$q.notify({
          type: "negative",
          detail: "打开 Socket 失败",
          position: "top"
        });
      }
    },
    close () {
      let response = ipcRenderer.sendSync(electronMsg.CLOSE_SOCKET);
      if (response) {
        this.isOpen = false;
      }
    }
  }
}
</script>

<style>
</style>
