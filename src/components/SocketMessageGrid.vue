<template>
  <div class="col group flex-col">
    <div class="flex-item-fill flex-col">
      <div class="row">
        <div class="col-xl-4 col-12" v-for="(msg, i) in msgs" :key="`msg-${i}`">
          <socket-message :index="i + 1" :title="msg.title" :type="msg.type" :content="msg.content"></socket-message>
        </div>
      </div>  
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
      msgs: (new Array(10)).fill({
        title: "手动报警按钮消除",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 01 00 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 BC 16",
        type: "HEX"
      })
    }
  }
}
</script>

<style>
.text-tt {
  font-family: monospace;
}
</style>
