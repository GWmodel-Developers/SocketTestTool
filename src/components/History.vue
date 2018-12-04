<template>
  <q-scroll-area>
    <q-card class="q-ma-sm">
      <q-card-title>
        历史记录
        <span slot="subtitle">开始时间</span>
        <q-btn slot="right" icon="delete" size="md" round color="secondary"></q-btn>
      </q-card-title>
      <q-list>
        <q-item v-for="i in 100" :key="`history-item-${i}`" highlight inset-separator>
          <q-item-side icon="call_received"></q-item-side>
          <q-item-main>
            <q-item-tile class="text-tt text-bold">68 09 09 68 02 00 00 00 00 29 8C 01 00 B8 16</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-card>
  </q-scroll-area>
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
.text-tt {
  font-family: monospace;
}
</style>
