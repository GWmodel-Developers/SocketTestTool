<template>
  <q-card class="q-ma-sm">
    <q-item>
      <q-item-side>
        <q-chip square tag class="q-mr-sm" color="primary">{{ index }}</q-chip>
      </q-item-side>
      <q-item-main>
        <q-item-tile label>{{ title }}</q-item-tile>
        <q-item-tile sublabel>{{ typeLabel }}</q-item-tile>
      </q-item-main>
      <q-item-side right tag>
        <q-btn icon="edit" round flat></q-btn>
      </q-item-side>
    </q-item>
    <q-card-separator></q-card-separator>
    <q-card-main>
      <span class="text-bold text-tt">{{ content }}</span>
    </q-card-main>
    <q-card-separator></q-card-separator>
    <q-card-actions class="row justify-between">
      <q-btn-group flat>
        <q-btn size="sm" color="secondary" flat icon="settings" label="触发"></q-btn>
      </q-btn-group>
      <q-btn-group flat>
        <q-btn size="sm" color="primary" flat icon="file_copy"></q-btn>
        <q-btn size="sm" color="primary" flat icon-right="send" label="发送"></q-btn>
      </q-btn-group>
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
