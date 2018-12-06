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
      msgs: [{
        title: "巡检应答",
        content: "68 09 09 68 02 00 00 00 00 29 8C 01 00 B8 16",
        type: "HEX"
      },{
        title: "手动报警按钮报警",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 01 01 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 BD 16",
        type: "HEX"
      },{
        title: "手动报警按钮故障",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 04 01 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C0 16",
        type: "HEX"
      },{
        title: "手动报警按钮消除",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 01 00 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 BC 16",
        type: "HEX"
      },{
        title: "视频火灾探测器报警",
        content: "68 2E 2E 68 71 00 00 00 00 29 87 01 02 84 01 01 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 14 16",
        type: "HEX"
      },{
        title: "视频火灾探测器报警消除",
        content: "68 2E 2E 68 71 00 00 00 00 29 87 01 02 84 01 00 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 13 16",
        type: "HEX"
      },{
        title: "视频火灾探测器屏蔽",
        content: "68 2E 2E 68 71 00 00 00 00 29 87 01 02 87 0B 01 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 21 16",
        type: "HEX"
      },{
        title: "视频火灾探测器屏蔽消除",
        content: "68 2E 2E 68 71 00 00 00 00 29 87 01 02 87 0B 00 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 20 16",
        type: "HEX"
      },{
        title: "屏蔽",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 0B 01 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C7 16",
        type: "HEX"
      },{
        title: "屏蔽消除",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 0B 00 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C6 16",
        type: "HEX"
      },{
        title: "故障",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 04 01 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C0 16",
        type: "HEX"
      },{
        title: "故障消除",
        content: "68 2E 2E 68 6f 00 00 00 00 29 87 01 01 30 04 00 08 55 2A 01 01 00 01 38 A6 00 01 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 BF 16",
        type: "HEX"
      },{
        title: "主机复位",
        content: "68 0A 0A 68 6F 00 00 00 00 29 8B 01 01 02 27 16",
        type: "HEX"
      },{
        title: "气体灭火控制器#1-转台 主电故障",
        content: "68 0D 0D 68 70 00 00 00 00 29 8D 01 29 00 00 09 09 62 16",
        type: "HEX"
      },{
        title: "气体灭火控制器#1-转台 主电故障取消",
        content: "68 0D 0D 68 70 00 00 00 00 29 8D 01 A9 00 00 09 09 E2 16",
        type: "HEX"
      },{
        title: "气体灭火控制器#2-转台 主电故障",
        content: "68 0D 0D 68 71 00 00 00 00 29 8D 01 29 00 00 09 09 63 16",
        type: "HEX"
      },{
        title: "气体灭火控制器#2-转台 主电故障取消",
        content: "68 0D 0D 68 71 00 00 00 00 29 8D 01 A9 00 00 09 09 E3 16",
        type: "HEX"
      },{
        title: "火灾报警控制器 主电故障",
        content: "68 0D 0D 68 6F 00 00 00 00 29 8D 01 28 00 00 08 05 5B 16",
        type: "HEX"
      },{
        title: "火灾报警控制器 主电故障取消",
        content: "68 0D 0D 68 6F 00 00 00 00 29 8D 01 A8 00 00 08 05 DB 16",
        type: "HEX"
      }]
    }
  }
}
</script>

<style>
.text-tt {
  font-family: monospace;
}
</style>
