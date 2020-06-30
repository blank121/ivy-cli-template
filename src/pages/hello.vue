<template>
  <h2>
    {{text}}
    <h3 @click="add">点击增加计数</h3>
    {{count}}
  </h2>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class App extends Vue {
  text: string = 'hello'
  count: number = 0
  async created() {
    console.log('hello')
  }
  add() {
    this.count++
  }
}
</script>
<style lang="less">
</style>
