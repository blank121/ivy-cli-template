<template>
  <h2>
    {{text}}
  </h2>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class App extends Vue {
  text: string = 'hello'
  async created() {
    console.log('hello')
  }
}
</script>
<style lang="less">
</style>
