<template>
  <div
    v-if="(isAuth && this.$route.name != 'Login' && this.$route.name != 'BasicInfo' && this.$route.name != 'ExpireLink' && this.$route.name != 'ForgotPassword' && this.$route.name != 'update-profile') || this.$route.name == 'agencyPublicProfile' || this.$route.name == 'freelancerProfile'"
    class="fixed top-0 flex items-center justify-between w-full px-4 transition-all ease-in bg-white shadow-sm duration-600 navbar-main sm:px-6">
    <!-- Logo -->
    <div class="h-full mr-4">
      <router-link :to="($store.state.accountType=='freelancer')?'/freelancer':($store.state.accountType == 'client')?'/client':'/agency/search'">
        <WebLogo class="mt-4 lg:w-full lg:h-full" />
      </router-link>
    </div>

    <!-- Search Bar  -->
    <div class="hidden md:block lg:block" v-if="isAuth">
      <div class="relative flex justify-start ml-4 rounded-sm">
        <a>
          <form @submit.prevent="openSearch">
            <input v-model="searchValue" type="text" name="search" id="search" placeholder="Search..."
              class="w-full px-2 py-2 mr-3 border border-gray-400 h-9 rounded-l-md focus:outline-border focus:outline-none lg:w-56 sm:w-60 hover:border-indigo-500" />
            <button type="submit"
              class="absolute top-0 w-10 px-2 py-1 transition-all ease-in bg-gray-100 border border-gray-400 cursor-pointer duration-600 rounded-r-md h-9 -right-6 hover:bg-gray-400">
              <SearchIcon class="absolute w-5 h-5 text-gray-600 top-2 right-2.5" />
            </button>
          </form>
        </a>
      </div>
    </div>

    <WebMenuBar></WebMenuBar>

    <!-- Mobile Sidebar Menu-->
    <div class="block xl:hidden sm:block lg:hidden">
      <b-sidebar body-class="p-0 bg-primary-500" id="sidebar-no-header" aria-labelledby="sidebar-no-header-title"
        no-header :backdrop-variant="'variant'" backdrop shadow>
        <template #default="{ hide }">
          <div class="">
            <div class="absolute cursor-pointer right-4 top-4" block @click="hide"
              style="padding: 11px;background-color: #000;border-radius: 12px;    top: 0.5rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-x icon-wrapper-header" viewBox="0 0 16 16">
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>

            </div>

            <nav class="mb-3">
              <ul class="list-none mt-14" v-if="isAuth" style="padding: 0;margin-left:-32px;">
                <li style="padding: 18px"
                  class="text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-100 hover:text-gray-900">
                  Dashboard
                </li>
                <li style="padding: 18px"
                  class="text-sm font-medium text-gray-900 bg-gray-100 cursor-pointer hover:bg-gray-100 hover:text-gray-900">
                  News Feed
                </li>
                <li style="padding: 18px"
                  class="text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-100 hover:text-gray-900">
                  Find a Job
                </li>
                <li style="padding: 18px"
                  class="text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-100 hover:text-gray-900">
                  Post a Job
                </li>
              </ul>
            </nav>

            <div class="absolute bottom-0 left-0 flex items-center w-full px-4 py-2 bg-white">
              <button @click="logout" style="border: 1px solid #f2613c"
                class="px-3 py-2 text-base font-semibold transition-all duration-500 ease-in-out rounded-3xl hover:bg-primary-500 hover:bg-opacity-50">
                Sign out
              </button>
              <div class="flex justify-end cursor-pointer hover:shadow-xl">
                <img v-if="$store.state.currentUserData.profile_picture_path"
                  :src="$store.state.baseUrlImg + 'upload/profile_image/' + $store.state.currentUserData.profile_picture_path"
                  class="w-12 h-12 rounded-full shadow-md" alt="" />
              </div>
            </div>
          </div>
        </template>
      </b-sidebar>
    </div>

    <!-- Login& & SignUp Resources -->
    <div class="hidden sm:hidden md:block lg:block">
      <div class="flex items-center justify-end" v-if="!isAuth">
        <label v-if="$route.path === '/login'"
          class="flex justify-end mr-5 text-sm font-medium text-gray-500 no-underline transition-all duration-300 ease-in-out w-96">
          New to Qapin ?
        </label>

        <label v-if="$route.path === '/sign-up'"
          class="flex justify-end mr-5 text-sm font-medium text-gray-500 no-underline transition-all duration-300 ease-in-out w-96">
          Already a member?
        </label>

        <router-link v-if="$route.path === '/forgot-password' || $route.path === '/reset-link'
          " to="/login"
          class="flex justify-end p-2 text-sm font-medium text-gray-500 no-underline transition-all duration-300 ease-in-out border-white border-solid rounded-md cursor-pointer hoveer:rounded-md hover:bg-gray-100 hover:border hover:border-primary-500 hover:shadow-lg hover:text-primary-500 hovr:border-solid w-max">
          Back To Login
        </router-link>

        <div class="">
          <router-link to="/sign-up" type="button" v-if="$route.path === '/login'"
            class="w-32 px-4 py-2 text-sm font-semibold text-center text-gray-900 no-underline transition-all duration-300 ease-in border border-gray-400 rounded-md shadow-sm cursor-pointer flex-inline hover:text-primary-500 hover:bg-gray-200">
            Sign Up
          </router-link>

          <router-link to="/login" type="button" v-if="$route.path === '/sign-up'"
            class="px-4 py-2 text-sm font-semibold text-gray-900 no-underline transition-all duration-300 ease-in border border-gray-400 rounded-md shadow-sm cursor-pointer hover:text-primary-500 hover:bg-gray-200">
            Login
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SearchIcon
} from "@vue-hero-icons/solid";
//import XIcon from "./icons/XIcon.vue";
import WebLogo from "./icons/WebLogo.vue";
import WebMenuBar from "../components/menu-bar/web-menu-bar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    SearchIcon,
    WebLogo,
    WebMenuBar,
  },

  data() {
    return {
      isOpen: false,
      isAccount: false,
      isMessage: false,
      isNotification: false,
      currentUser: null,
      isAuth: null,
      searchValue: '',
    };
  },

  computed: {
    ...mapGetters("global", ["refreshNewsFeed"]),
    // ...mapGetters("index", ["listAccount"]),
  },

  mounted() {
    // this.$store.dispatch("accountType",localStorage.getItem("accountType")); 
    // this.listAccount = this.listAccount();
    this.isAuth = this.$store.state.currentUserData.token;
    if (this.$route.name == "ExpireLink") {
      this.isAuth = null;
    }
    this.getCompanyCount();
    this.getCurrentUserDetails();

  },

  methods: {
    // this fun is for to open search page
    openSearch() {
      var rName = 'Search';
      if (this.$store.state.accountType == 'client') {
        rName = 'clientSearch';
      } else if (this.$store.state.accountType == 'agency') {
        rName = 'agencySearch';
      }
      this.$router.push({
        name: rName,
        // path:'/freelancer/search',
        params: { input: this.searchValue }
      });
      this.searchValue = '';
    },
    ...mapActions(["genericAPIPOSTRequest"]),

    logout() {
      this.$store.dispatch("currentUserData", '');
      this.$store.dispatch("currentUserOwnerData", '');
      this.$store.dispatch("accountType", '');
      this.$store.dispatch("currentUserLoginUuid", '');
      this.$store.dispatch("profileImg", '');
      localStorage.removeItem("token");
      localStorage.removeItem("accountType");
      localStorage.removeItem("loginUserData");
      this.$router.push("/login");
      // window.location.reload();
      this.$toastr.s("Logout successfully.");
    },
    async getCompanyCount() {
      var res = await this.genericAPIPOSTRequest({
        requestUrl: "company/getCompanyCount",
        params: { data: this.getLoginUserIdRequest() },
      });
      this.$store.dispatch("listAccount", res);
    },
    getCurrentUserDetails() {
      const loginData = JSON.parse(localStorage.getItem("loginUserData"));
      this.currentUser = loginData;
    },
  },
};
</script>

<style scoped>
.icon-wrapper-header {
  width: 18px;
  height: 18px;
  padding: 1px;
}

.icon-wrapper-header svg {
  width: 16px;
  height: 16px;
  color: #b0b0b0;
}

.account-dropdown-enter-active,
.account-dropdown-leave-active {
  transition: all 0.5s;
}

.account-dropdown-enter,
.account-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-110px);
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
  transform: translateY(20px);
}

.list-enter,
.list-leave-to .list-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}

.navbar-main {
  height: 80px;
}

@media only screen and (max-width: 1165px) {
  .navbar-main {
    height: 80px;
  }
}

.menu-items-list {
  /*padding-right: 250px;*/
  padding-right: 0px;
  margin-left: 10px;
}

@media only screen and (max-width: 1870px) {
  .menu-items-list {
    padding-right: 250px;
  }
}

@media only screen and (max-width: 1400px) {
  .menu-items-list {
    padding-right: 0px;
  }
}

@media only screen and (max-width: 1450px) {
  .menu-items-list {
    padding-right: 0px;
  }
}

@media only screen and (max-width: 1112px) {
  .menu-items-list {
    padding-right: 0px;
    margin-left: 0px;
  }
}

@media only screen and (max-width: 1269px) {
  .toggle-switch {
    display: none;
  }
}


.text-muted {
  color: #999999 !important;
}

.text-grey {
  color: #979797 !important;
}

.fz-14 {
  font-size: 14px;
}

.fz-30 {
  font-size: 26px !important;
}

.fz-16 {
  font-size: 16px;
}

fw-600 {
  font-weight: 600;
}

.w-14 {
  width: 3rem;
}

.h-14 {
  height: 3rem;
}

.badge-theme {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: capitalize;
  color: #ffffff !important;
  background: #f2613c;
  border-radius: 10px;
}

.text-decoration-none {
  text-decoration: none !important;
}

.menu {
  text-decoration: none !important;
  color: #000;
}

.menu:hover {
  color: #f2613c;
}

.active-profile {
  background-color: #FFF6F4 !important;
}
</style>
