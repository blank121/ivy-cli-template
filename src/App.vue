<template>
  <div id="app"
       class="main-container">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script lang="ts">
import { wxConfigReady } from '@ivy/fts/weixin'
import { Component, Vue, Watch } from 'vue-property-decorator'
import config from './config'
@Component({})
export default class App extends Vue {
  async created() {
    await wxConfigReady()
  }
}
</script>
<style lang="less">
@import url(./project.less);
body {
  background-color: #ffffff;
}
.main-container {
  min-width: 320px;
  height: 100%;
  overflow: auto;
}
</style>
