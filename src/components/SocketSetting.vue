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
        <q-input v-model="socketSetting.remoteAddress" type="number"></q-input>
      </q-field>
      <q-field label="远程端口">
        <q-input v-model="socketSetting.remotePort" type="number"></q-input>
      </q-field>
      <q-field label="自动重连">
        <q-toggle v-model="socketSetting.autoReconnect" :label="socketSetting.autoReconnect ? '是' : '否'"></q-toggle>
      </q-field>
    </q-card-main>
    <q-card-actions>
      <q-btn v-if="!isOpen" icon-right="cast" label="连接" color="primary" @click.native="connect"></q-btn>
      <q-btn v-else icon-right="close" label="关闭" color="secondary"></q-btn>
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
        localPort: "65535",
        remoteAddress: "127.0.0.1",
        remotePort: "65535",
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
  methods: {
    connect () {
      ipcRenderer.send(electronMsg.OPEN_SOCKET, {
        mode: this.socketSetting.mode,
        localPort: parseInt(this.socketSetting.localPort),
        remoteAddress: this.socketSetting.remoteAddress,
        remotePort: parseInt(this.socketSetting.remotePort),
        autoReconnect: this.socketSetting.autoReconnect
      });
    }
  }
}
</script>

<style>
</style>
