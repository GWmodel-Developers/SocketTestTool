<template>
  <q-page class="row">
    <!-- content -->
    <q-scroll-area style="width: 360px;">
      <div class="flex-col q-ma-sm">
        <div class="group"><socket-setting></socket-setting></div>
        <div class="group"><receive-setting></receive-setting></div>
        <div class="group"><send-setting></send-setting></div>
      </div>
    </q-scroll-area>
    <q-scroll-area class="col">
      <socket-message-grid></socket-message-grid>
    </q-scroll-area>
    <div class="flex-row group" style="width: 360px;">
      <socket-history class="flex-item-fill"></socket-history>
    </div>
  </q-page>
</template>

<script>
import SocketSetting from "../components/SocketSetting.vue";
import ReceiveSetting from "../components/ReceiveSetting.vue";
import SendSetting from "../components/SendSetting.vue";
import SocketMessageGrid from "../components/SocketMessageGrid.vue";
import SocketHistory from "../components/History.vue";
export default {
  // name: 'PageName',
  components: {
    "socket-setting": SocketSetting,
    "receive-setting": ReceiveSetting,
    "send-setting": SendSetting,
    "socket-message-grid": SocketMessageGrid,
    "socket-history": SocketHistory
  }
}
</script>

<style>
</style>
