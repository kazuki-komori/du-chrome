<template>
  <div>
    <p>hello</p>
    <div v-for="(idx, notice) in notices" :key="idx" style="border: red solid 2px">
      <p>{{notice}}</p>
    </div>
    <button @click="StorageClear">storage clear</button>
  </div>
</template>
<script>
import {StorageService} from "@/services/Chrome/StorageService.ts";

export default {
  data() {
    return {
      notices: []
    }
  },
  async mounted() {
    const Storage = new StorageService()
    this.notices = await Storage.getAllData()
    console.log(this.notices)
    // this.notices = Storage.getAllData()
    // console.log(this.notices)
  },
  methods: {
    StorageClear() {
      const Storage = new StorageService()
      Storage.clearStorage()
    }
  },
  computed: {
  }
}
</script>
<style scoped>
.contents {
  border: red 2px solid;
}
</style>