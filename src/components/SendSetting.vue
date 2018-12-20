<template>
  <q-card>
    <q-card-title>消息设置</q-card-title>
    <q-card-main>
      <q-field label="名称">
        <q-input v-model="msg.title"></q-input>
      </q-field>
      <q-field label="类型">
        <q-radio v-model="msg.type" label="文本" val="TEXT"></q-radio>
        <q-radio v-model="msg.type" label="十六进制" val="HEX"></q-radio>
      </q-field>
      <q-field label="内容" orientation="vertical">
        <q-input type="textarea" v-model="msg.content"></q-input>
      </q-field>
    </q-card-main>
    <q-card-actions>
      <q-btn icon-right="add" label="添加" color="secondary" @click="addChip"></q-btn>
      <q-btn icon-right="send" label="发送" color="primary" @click="sendMessage"></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      msg: {
        title: "",
        type: "TEXT",
        content: ""
      }
    }
  },
  methods: {
    addChip () {
      this.$store.dispatch("addChip", {...this.msg});
    },
    sendMessage () {
      ipcRenderer.send(electronMsg.SEND_MESSAGE, {
        content: this.msg.content,
        type: this.msg.type
      });
    },
  }
}
</script>

<style>
</style>
