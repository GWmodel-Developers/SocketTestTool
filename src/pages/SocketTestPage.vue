<template>
  <q-page class="row">
    <!-- content -->
    <div class="flex-col group" style="width: 360px;">
      <div><socket-setting></socket-setting></div>
      <div><receive-setting></receive-setting></div>
      <div><send-setting></send-setting></div>
    </div>
    <socket-message-grid></socket-message-grid>
    <div class="flex-item-1" style="min-width: 360px;"><div>receive history</div></div>
  </q-page>
</template>

<script>
import SocketSetting from "../components/SocketSetting.vue";
import ReceiveSetting from "../components/ReceiveSetting.vue";
import SendSetting from "../components/SendSetting.vue";
import SocketMessageGrid from "../components/SocketMessageGrid.vue";
export default {
  // name: 'PageName',
  components: {
    "socket-setting": SocketSetting,
    "receive-setting": ReceiveSetting,
    "send-setting": SendSetting,
    "socket-message-grid": SocketMessageGrid
  }
}
</script>

<style>
</style>
