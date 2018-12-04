<template>
  <q-page class="row">
    <!-- content -->
    <q-scroll-area style="width: 360px;">
      <div class="flex-col group" >
        <div><socket-setting></socket-setting></div>
        <div><receive-setting></receive-setting></div>
        <div><send-setting></send-setting></div>
      </div>
    </q-scroll-area>
    <q-scroll-area class="col">
      <socket-message-grid></socket-message-grid>
    </q-scroll-area>
    <q-scroll-area class="flex-item-1" style="min-width: 360px;">
      
    </q-scroll-area>
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
