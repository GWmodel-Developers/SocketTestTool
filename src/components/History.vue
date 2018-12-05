<template>
  <q-scroll-area>
    <div class="q-ma-md" v-if="history.length > 0">
      <q-chat-message v-for="(item, i) in history" :key="`history-item-${i}`" size="11"
        :sent="i % 2 === 0"
        :text="item.content"
        :stamp="item.time"
      />
    </div>
    <div v-else>
      <q-alert type="info">历史记录为空</q-alert>
    </div>
  </q-scroll-area>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      history: []
    }
  }
}
</script>

<style>
.text-tt {
  font-family: monospace;
}
</style>
