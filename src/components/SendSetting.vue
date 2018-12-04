<template>
  <q-card>
    <q-card-title>消息设置</q-card-title>
    <q-card-main>
      <q-field label="名称">
        <q-input></q-input>
      </q-field>
      <q-field label="类型">
        <q-radio label="十六进制" value="HEX"></q-radio>
        <q-radio label="文本" value="TEXT"></q-radio>
      </q-field>
      <q-field label="内容" orientation="vertical">
        <q-input type="textarea"></q-input>
      </q-field>
    </q-card-main>
    <q-card-actions>
      <q-btn icon-right="add" label="添加" color="primary"></q-btn>
      <q-btn icon-right="send" label="发送" color="primary"></q-btn>
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
        type: "Text",
        content: ""
      }
    }
  }
}
</script>

<style>
</style>
