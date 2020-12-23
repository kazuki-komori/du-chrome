<template>
  <div v-if="notices">
    <p class="contents">hello</p>
    <div v-for="(notice, idx) in notices" :key="idx">
      <div
          v-for="(n, idx2) in notice"
          :key="idx2"
          style="background-image: linear-gradient(135deg, #90F7EC 10%, #32CCBC 100%); margin: 5px 0; padding: 5px"
      >
        <a :href="`https://eclass.doshisha.ac.jp/webclass/course.php/${idx}/?acs_=${(Math.random()*0xFFFFFFFF<<0).toString(16)}#${n.id}`">
          <p style="margin: 5px 0;">{{n.className}}</p>
          <section style="display: flex;">
            <p style="margin: 5px 0;">{{n.description}}</p>
            <p style="margin: 5px 0; text-align: right">{{n.type}}</p>
          </section>
        </a>
      </div>
    </div>
    <button @click="StorageClear">storage clear</button>
  </div>
</template>
<script>
import {StorageService} from "@/services/Chrome/StorageService.ts";

export default {
  data() {
    return {
      notices: null,
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
    retAcs() {
    }
  }
}
</script>
<style scoped>
.contents {
  color: red;
}
</style>