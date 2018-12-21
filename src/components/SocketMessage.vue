<template>
  <q-card class="q-ma-sm">
    <q-item>
      <q-item-side>
        <q-chip square tag class="q-mr-sm" color="primary">{{ index }}</q-chip>
      </q-item-side>
      <q-item-main>
        <q-item-tile label class="text-bold">{{ title }}</q-item-tile>
        <q-item-tile sublabel>{{ typeLabel(type) }}</q-item-tile>
      </q-item-main>
      <q-item-side right tag>
        <q-btn icon="edit" round flat></q-btn>
      </q-item-side>
    </q-item>
    <q-card-separator></q-card-separator>
    <q-card-main>
      <span class="text-bold text-tt">{{ content }}</span>
    </q-card-main>
    <q-card-separator></q-card-separator>
    <q-card-actions class="row justify-between">
      <q-btn-group flat>
        <q-btn size="sm" color="secondary" flat icon="settings">
          <q-popover>
            <q-list>
              <q-list-header>触发方式</q-list-header>
              <q-item link tag="label">
                <q-item-side>
                  <q-radio v-model="trigger.type" val="NONE"></q-radio>
                </q-item-side>
                <q-item-main>无</q-item-main>
              </q-item>
              <q-item link tag="label">
                <q-item-side>
                  <q-radio v-model="trigger.type" val="RECEIVE"></q-radio>
                </q-item-side>
                <q-item-main>收到指定消息时发送</q-item-main>
              </q-item>
              <q-item link tag="label">
                <q-item-side>
                  <q-radio v-model="trigger.type" val="TIMEOUT"></q-radio>
                </q-item-side>
                <q-item-main>定时发送</q-item-main>
              </q-item>
              <template v-if="trigger.type !== 'NONE'">
                <q-list-header>参数</q-list-header>
                <template v-if="trigger.type === 'RECEIVE'">
                  <q-item>
                    <q-field label="数据" orientation="vertical">
                      <q-input v-model="trigger.params.message" type="textarea"></q-input>
                    </q-field>
                  </q-item>
                  <q-item>
                    <q-item-main>
                      <q-field label="消息类型">
                        <q-toggle v-model="trigger.params.type" true-value="HEX" false-value="TEXT" :label="typeLabel(trigger.params.type)"></q-toggle>
                      </q-field>
                    </q-item-main>
                  </q-item>
                  <q-item>
                    <q-btn icon="check" flat round color="primary" size="sm" @click="saveReceiveTriggerParams"></q-btn>
                  </q-item>
                </template>
                <template v-if="trigger.type === 'TIMEOUT'">
                  <q-item>
                    <q-item-main>
                      <q-field label="发送间隔">
                        <div class="row no-wrap">
                          <q-input type="number" v-model="trigger.params.delay" align="right" suffix="秒" prefix="每" style="width: 70px;"></q-input>
                          <q-input type="number" v-model="trigger.params.times" align="right" suffix="次" style="width: 60px;"></q-input>
                        </div>
                      </q-field>
                    </q-item-main>
                    <q-item-side right>
                      <q-btn icon="check" round size="sm" flat color="primary" @click="setTimmer"></q-btn>
                    </q-item-side>
                  </q-item>
                </template>
              </template>
            </q-list>
          </q-popover>
        </q-btn>
      </q-btn-group>
      <q-btn-group flat>
        <q-btn size="sm" color="primary" flat icon="delete" @click="delChip"></q-btn>
        <q-btn size="sm" color="primary" flat icon="file_copy"></q-btn>
        <q-btn size="sm" color="primary" flat icon="send" @click="sendMsg"></q-btn>
      </q-btn-group>
    </q-card-actions>
  </q-card>
</template>

<script>
import { ipcRenderer } from 'electron';
import electronMsg from "../../common/ElectronMsg";
import triggerType from "../../common/TriggerType";
export default {
  // name: 'ComponentName',
  props: {
    index: Number,
  },
  data () {
    return {
      title: "",
      type: "",
      content: "",
      trigger: {
        type: triggerType.NONE,
        params: {
          message: "",
          type: "TEXT",
          times: undefined,
          delay: undefined
        }
      },
      timmer: undefined
    }
  },
  computed: {
    typeLabel: function () {
      return function (type) {
        let typeDict = {
          "HEX": "十六进制",
          "TEXT": "文本"
        };
        return typeDict[type]
      }
    }
  },
  methods: {
    sendMsg () {
      console.log("Send Message.")
      ipcRenderer.send(electronMsg.SEND_MESSAGE, {
        content: this.content,
        type: this.type
      });
    },
    delChip () {
      this.$store.dispatch("delChip", this.index - 1);
    },
    setChip (chip) {
      this.title = chip.title;
      this.type = chip.type;
      this.content = chip.content;
      this.trigger = chip.trigger || this.trigger;
      console.log("set chip", chip, this.title, this.type, this.content, this.trigger);
    },
    updateChip () {
      let self = this;
      this.$store.dispatch("updateChip", {
        chipIndex: this.index - 1,
        chip: {
          title: this.title,
          type: this.type,
          content: this.content,
          trigger: this.trigger.type === triggerType.NONE ? undefined : {
            type: this.trigger.type,
            params: this.trigger.params
          }
        }
      });
    },
    onTriggerChanged (trigger, oldTrigger) {
      if (trigger !== triggerType.TIMEOUT && oldTrigger === triggerType.TIMEOUT) {
        clearInterval(this.timmer);
      }
      if (trigger === triggerType.RECEIVE) {
        this.$set(this.trigger.params, "message", this.trigger.params.message || "");
        this.$set(this.trigger.params, "type", this.trigger.params.type || "TEXT");
      } else if (trigger === triggerType.TIMEOUT) {
        this.$set(this.trigger.params, "times", this.trigger.params.times || 1);
        this.$set(this.trigger.params, "delay", this.trigger.params.delay || 1);
      }
      this.updateChip();
    },
    setTimmer () {
      let params = this.trigger.params;
      if (params.delay > 0 && params.times > 0) {
        clearInterval(this.timmer);
        this.timmer = setInterval(() => {
          this.sendMsg();
        }, params.delay / params.times * 1000);
      }
      this.updateChip();
    },
    saveReceiveTriggerParams () {
      this.updateChip();
    },
    onReceiveMessage (event, message) {
      console.log("receive message")
      if (this.trigger.type === triggerType.RECEIVE) {
        let realMsg;
        let params = this.trigger.params;
        if (params.type === "HEX") {
          let msgBuffer = new Buffer(message);
          realMsg = msgBuffer.map(item => item.toString(16)).join(" ");
        } else {
          realMsg = message;
        }
        if (realMsg) {
          this.sendMsg();
        }
      }
    }
  },
  watch: {
    index (newIndex) {
      let chip = this.$store.getters.getChipAt(newIndex - 1);
      this.setChip(chip)
    }
  },
  mounted () {
    let chip = this.$store.getters.getChipAt(this.index - 1);
    this.setChip(chip);
    this.$watch("trigger.type", this.onTriggerChanged);
    ipcRenderer.on(electronMsg.RECEIVE_SOCKET, this.onReceiveMessage)
  }
}
</script>

<style>
</style>
