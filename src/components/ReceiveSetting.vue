<template>
  <q-card>
    <q-card-title>接收设置</q-card-title>
    <q-card-main>
      <q-field label="十六进制接收">
        <q-toggle v-model="autoReconnect" :label="autoReconnect ? '是' : '否'"></q-toggle>
      </q-field>
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
</style>
