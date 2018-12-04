<template>
  <q-page class="row">
    <!-- content -->
    <div class="col-auto group" style="width: 320px;">
      <div class="row-auto"><socket-setting></socket-setting></div>
      <div class="row-auto"><receive-setting></receive-setting></div>
      <div class="row-auto"><send-setting></send-setting></div>
    </div>
    <div class="col">
      Socket
    </div>
  </q-page>
</template>

<script>
import SocketSetting from "../components/SocketSetting.vue";
import ReceiveSetting from "../components/ReceiveSetting.vue";
import SendSetting from "../components/SendSetting.vue";
export default {
  // name: 'PageName',
  components: {
    "socket-setting": SocketSetting,
    "receive-setting": ReceiveSetting,
    "send-setting": SendSetting
  }
}
</script>

<style>
</style>
