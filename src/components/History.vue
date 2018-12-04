<template>
  <q-scroll-area>
    <div class="q-ma-md">
      <q-chat-message v-for="i in 100" :key="`history-item-${i}`" size="11"
        :sent="i % 2 === 0"
        :text="['68 09 09 68 02 00 00 00 00 29 8C 01 00 B8 16']"
        :stamp="`${i} minutes ago`"
      />
    </div>
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
