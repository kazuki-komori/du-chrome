<template>
  <div v-if="notices" class="c-notice">
    <p class="">hello</p>
    <div v-for="(notice, idx) in notices" :key="idx">
      <div
          v-for="(n, idx2) in notice"
          :key="idx2"
          class="c-notice__contents"
      >
        <a :href="`https://eclass.doshisha.ac.jp/webclass/course.php/${idx}/`"
           class="c-notice__texts"
        >
          <p class="c-notice__className">{{n.className}}</p>
          <section class="c-notice__content" style="display: flex;">
            <p class="c-notice__content--des">{{n.description}}</p>
            <p class="c-notice__content--type">{{n.type}}</p>
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
    retBgColor(type) {
      if (type === "danger") {
        return {
          "background-image": "linear-gradient(135deg, #9A0004 10%, #FB1218 100%)"
        }
      } else if (type === "warning") {
        return {
          "background-image": "linear-gradient(135deg, #FF5815 10%, #FFDB14 100%)"
        }
      } else if (type === "primary") {
        return {
          "background-image": "linear-gradient( 135deg, #32CCBC 10%, #90f7ec 100%)"
        }
      } else if (type === "done") {
        return {
          "background-image": "linear-gradient( 135deg, ##28C76F 10%, #81FBB8 100%)"
        }
      }
    }
  }
}
</script>
<style scoped>
.c-notice__contents {
  background-image: linear-gradient(135deg, #9A0004 10%, #FB1218 100%);
  /*background-color: #0396FF;*/
  transition: all 0.5s;
  margin: 5px 0;
  padding: 5px;
}

.c-notice__contents:hover {
  opacity: 0.7;
}

.c-notice__texts {
  letter-spacing: 0.1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
}

.c-notice__className {
  margin: 5px 0;
}

.c-notice__content {
  display: flex;
}

.c-notice__content--des {
  margin: 5px 0;
}

.c-notice__content--type {
  margin: 5px 0;
  text-align: right
}
</style>