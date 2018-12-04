<template>
  <q-card>
    <q-card-title>通信设置</q-card-title>
    <q-card-main>
      <q-field label="工作模式">
        <q-select v-model="socketMode" radio :options="selectOptions"/>
      </q-field>
      <q-field label="本地端口">
        <q-input type="number"></q-input>
      </q-field>
      <q-field label="远程地址">
        <q-input type="number"></q-input>
      </q-field>
      <q-field label="远程端口">
        <q-input type="number"></q-input>
      </q-field>
      <q-field label="自动重连">
        <q-toggle v-model="autoReconnect" :label="autoReconnect ? '是' : '否'"></q-toggle>
      </q-field>
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      socketMode: "TCP_SERVER",
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
      autoReconnect: false
    }
  }
}
</script>

<style>
</style>
