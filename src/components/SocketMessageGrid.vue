<template>
  <div class="col group flex-col">
    <div class="flex-item-fill flex-col" v-if="msgs.length > 0">
      <div class="row">
        <div class="col-xl-4 col-12" v-for="(msg, i) in msgs" :key="`msg-${i}`">
          <socket-message :index="i + 1" :title="msg.title" :type="msg.type" :content="msg.content"></socket-message>
        </div>
      </div>  
    </div>
    <div v-else>
      <q-alert type="info">没有消息卡片</q-alert>
    </div>
  </div>
</template>

<script>
import SocketMessage from "./SocketMessage.vue";
export default {
  // name: 'ComponentName',
  components: {
    "socket-message": SocketMessage
  },
  data () {
    return {
      msgs: []
    }
  }
}
</script>

<style>
.text-tt {
  font-family: monospace;
}
</style>
