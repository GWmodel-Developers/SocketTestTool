<template>
  <q-card class="q-ma-sm">
    <q-card-title>
      <q-chip class="q-mr-sm" small color="primary">{{ index }}</q-chip>
      <span>{{ title }}</span>
      <span slot="subtitle">{{ typeLabel }}</span>
      <q-btn slot="right" icon="edit" round flat></q-btn>
    </q-card-title>
    <q-card-main>
      <span class="text-bold text-tt">{{ content }}</span>
    </q-card-main>
    <q-card-separator></q-card-separator>
    <q-card-actions>
      <q-btn size="sm" color="primary" flat round icon="file_copy"></q-btn>
      <q-btn size="sm" color="secondary" icon-right="settings" label="触发"></q-btn>
      <q-btn size="sm" color="primary" icon-right="send" label="发送"></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    index: Number,
    title: String,
    type: String,
    content: String,
  },
  data () {
    return {}
  },
  computed: {
    typeLabel: function () {
      let typeDict = {
        "HEX": "十六进制",
        "TEXT": "文本"
      };
      return typeDict[this.type]
    }
  }
}
</script>

<style>
</style>
