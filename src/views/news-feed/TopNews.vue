<template>
  <div class="px-10 sm:px-0">
    <div class="fixed left-0 right-0 px-10 text-center sm:px-0 xl:top-24" style="z-index: 11;" v-if="$store.state.lastpostId!=0">
      <button class="btn btn-theme br-50 new-post-btn" @click="getNewsFeed"><i class="fa fa-long-arrow-up mr-2" ></i>New Posts</button>
    </div>
    <div class="absolute left-0 right-0 px-10 text-center sm:px-0 xl:top-24">
      <h1 class="mt-4 text-lg font-semibold text-center text-gray-900 fz-700">
        Qapin Suspended Operations in Russia and Belarus -
        <span
          style="margin-left: 4px"
          class="text-lg font-semibold cursor-pointer text-primary-500 hover:text-gray-500 fz-700"
        >
          Know more..
        </span>
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters("global", ["refreshNewsFeed"]),
  },
  
  methods: {
    getNewsFeed() {  
       this.$store.commit("lastpostId",0);
      window.scrollTo(0,0);
      if (window.location.pathname !== "/news-feed") {
        this.$router.push("/news-feed");
      } else {
        if (this.refreshNewsFeed) {
          this.refreshNewsFeed();
        }
      }
    },
 
  },
}
</script>
<style scoped>
  .new-post-btn:hover{
    border-radius:50px!important;
  }
</style>
