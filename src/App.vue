<template>
  <div id="app " class="" style="float: left; width: 100%; position: relative; background: #f2f2f2" >
    <!-- Site Header  -->
    <div>
      <MainHeader/>
    </div>

    <!-- Main Content -->
    <div class="relative" style="height: auto; width: 100%">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Site Footer  -->
    <div>
      <the-site-footer />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/header/MainHeader.vue'
import TheSiteFooter from './components/TheSiteFooter.vue'
export default {
  components: {
    MainHeader,
    TheSiteFooter,
  },
  data() {
    return {
      isShow: false,
      refreshNewsFeed: null,
    }
  },

  mounted() {
    
  },

  methods: {},
}
</script>

<style scoped lang="css">
@import './assets/css/global.css';

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
.body {
  background-color: #f2f2f2;
  font-family: 'Source Sans Pro', sans-serif !important;
}
.fade-enter {
  opacity: 0.5;
  transition: 0.9s all ease;
}

.fade-enter-to {
  opacity: 1;
  transition: 0.9s all ease;
}

.fade-leave-to {
  opacity: 0;
  transition: 0.5s all ease-out;
}
</style>
