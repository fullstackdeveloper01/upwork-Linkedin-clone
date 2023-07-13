<template>
  <div class="w-full px-2 py-3 mx-auto bg-white lg:px-0 max-w-7xl xl:py-0 xl:px-0" :class="{
    'bg-black shadow-lg sm:bg-white  xl:shadow-lg transition-all duration-700 transform ease-in-out':
      isHeader,
  }" id="header">
    <div class="flex w-full">
      <!-- Site logo -->
      <div class="flex items-center justify-between xl:justify-start">
        <router-link to="/">
          <WebLogo class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-90" />
        </router-link>

        <!-- Humbarger Navbar Toggle -->
        <button @click="isMobileMenu = !isMobileMenu">
          <HumbergarIcon v-if="!isMobileMenu"
            class="block w-10 p-1.5 hover:text-black text-white rounded-md shadow-md sm:hidden transition-all duration-500 ease-linear transform cursor-pointer xl:hidden bg-primary-500 hover:bg-opacity-50 hover:scale-90" />
          <XIcon v-else
            class="block w-10 h-11 p-2.5 text-white transition-all duration-500 ease-linear transform rounded-md shadow-md cursor-pointer hover:rotate-180 hover:text-black sm:hidden xl:hidden bg-primary-500 hover:bg-opacity-50 hover:scale-90" />
        </button>
      </div>

      <!-- Web version Navbar -->
      <div class="hidden md:block sm:block lg:block">
        <div class="flex items-center justify-end w-full space-x-6">
          <div>
            <ul style="padding: 0" class="flex items-center mt-3 space-x-10 text-base text-gray-900">
              <li @click="$router.push('/news-feed')"
                class="text-gray-400 transition-all duration-500 ease-in-out transform cursor-pointer fw-600 hover:scale-110 hover:text-primary-500">
                NewsFeed
              </li>
              <li @click="$router.push('/how-it-works')"
                class="text-gray-400 transition-all duration-500 ease-in-out transform cursor-pointer fw-600 hover:scale-110 hover:text-primary-500">
                How it Works
              </li>

              <li @click="$router.push('/find-job')"
                class="text-gray-400 transition-all duration-500 ease-in-out transform cursor-pointer fw-600 hover:scale-110 hover:text-primary-500">
                Find a Job
              </li>
              <!-- <li
                @click="$router.push('/about')"
                class="text-gray-400 transition-all duration-500 ease-in-out transform cursor-pointer fw-600 hover:scale-110 hover:text-primary-500"
              >
                About Us
              </li> -->
            </ul>
          </div>
          <div class="space-x-4">
            <button @click="$router.push('/login')"
              class="px-4 py-2 text-base text-black transition-all duration-700 ease-in-out border-solid rounded-md shadow-sm cursor-pointer border-1 hover:text-white border-primary-500 hover:bg-primary-500 hover:shadow-lg">
              Login
            </button>
            <button @click="$router.push('/sign-up')"
              class="px-4 py-2 text-base text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer hover:opacity-50 bg-primary-500 hover:shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile First view Menubar -->
    <transition name="slide">
      <div v-if="isMobileMenu"
        class="block h-full py-4 mt-1.5 rounded-md sm:hidden shadow-md md:hidden lg:hidden bg-primary-500">
        <div>
          <ul style="padding: 0" class="mt-3 space-y-10 text-sm text-white">
            <li
              class="transition-all duration-500 ease-in-out transform cursor-pointer text-gray-200w fw-600 hover:translate-x-150 hover:text-black">
              NewsFeed
            </li>
            <li
              class="transition-all duration-500 ease-in-out transform cursor-pointer text-gray-200w fw-600 hover:translate-x-110 hover:text-black">
              How it Works
            </li>

            <li
              class="transition-all duration-500 ease-in-out transform cursor-pointer text-gray-200w fw-600 hover:translate-x-110 hover:text-black">
              Find a Job
            </li>

          </ul>
        </div>

        <div class="px-4 mt-10 space-y-4">
          <button @click="$router.push('/login')"
            class="z-10 w-full px-4 py-2 text-base text-white transition-all duration-700 ease-in-out border-white border-solid rounded-md shadow-sm cursor-pointer fw-400 group border-1 group-hover:text-gray-900 hover:bg-gray-200 hover:shadow-lg">
            Login
          </button>
          <br />
          <button @click="$router.push('/sign-up')"
            class="w-full px-4 py-2 text-base text-black transition-all duration-500 ease-in-out bg-white rounded-md shadow-sm cursor-pointer fw-400 hover:opacity-50 hover:shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import HumbergarIcon from "./icons/HumbergarIcon.vue";
import XIcon from "./icons/XIcon.vue";
import WebLogo from "./icons/WebLogo.vue";
import $ from 'jquery';
export default {
  components: { WebLogo, HumbergarIcon, XIcon },

  data() {
    return {
      isMobileMenu: false,
      isHeader: false,
    };
  },

  mounted() {
    $(window).scroll(function () {
      if ($(document.get).scrollTop() > 200) {
        $("nav").addClass("transparent ");
      } else {
        $("nav").removeClass("transparent");
      }
    });
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.9s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
