<template>
  <!-- web menu bar -->
  <div class="flex items-center justify-end w-full transition-all duration-500 ease-in-out sm:mt-0" v-if="isAuth">
    <!-- Toggle Mobile Navigation -->
    <div class="block sm:block lg:hidden md:block xl:hidden">
      <div class="flex justify-end">
        <MenuAlt1Icon v-b-toggle.sidebar-no-header
          class="w-12 h-12 p-2 text-gray-300 transition-all ease-in rounded-full cursor-pointer duration-600 hover:text-primary-500 hover:bg-gray-100" />
      </div>
    </div>

    <div class="transition-all duration-500 ease-in-out" v-if="isAuth">
      <div class="flex items-center" style="padding: 0 0 7px">
        <!--  Desktop Menu Items  -->
        <div
          class="hidden w-full pr-0 transition-all ease-in-out menu-items-list duration-600 xl:mr-10 lg:block md:hidden xl:block">

          <div class="" v-if="isAuth">
            <ul class="flex items-center h-10 pb-0 mt-3 mb-2 space-x-4 text-xs font-semibold">
              <!-- Find Work Container -->
              <AppDropdown class="flex items-center justify-end h-full p-3" v-if="$store.state.accountType == 'freelancer'">
                <template slot="toggler">
                  <div
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted">
                    <a href="javascript:void(0);" class="text-muted text-decoration-none">Find Work</a>
                  </div>
                </template>
                <AppDropdownContent class="" dropdownTop="top-10" style="height: 505px">
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" @click="$router.push('/freelancer/search')" class="menu">Find Jobs</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/saved-jobs')">Saved Jobs</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu"
                      @click="$router.push('/freelancer/my-proposals')">Proposals</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" @click="$router.push('/my-profile')" class="menu">Profile</a>
                  </AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>

              <!-- My Job Container -->
              <AppDropdown class="flex items-center justify-end h-full p-3" v-if="$store.state.accountType == 'freelancer'">
                <template slot="toggler">
                  <div @click="isMessage = !isMessage"
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted">
                    My Jobs
                  </div>
                </template>
                <AppDropdownContent class="" dropdownTop="top-10" style="height: 505px">
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" @click="$router.push('/freelancer/my-jobs')" class="menu">My Jobs</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/freelancer/all-contracts')">All
                      Contracts</a>
                  </AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>

              <li @click="$router.push('/client/dashboard')" v-if="$store.state.accountType == 'freelancer'"
                class="p-3 transition-all duration-300 ease-in rounded-md cursor-pointer fz-16 fw-600 text-muted">
                Reports
              </li>

              <!-- Message Container FreeLancer -->
              <AppDropdown class="flex items-center justify-end h-full" v-if="$store.state.accountType == 'freelancer'">
                <template slot="toggler">
                  <!-- @click="isMessage = !isMessage" -->
                  <div @click="$router.push({ path: '/chat', name: 'chat' }).href"
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted p-3">
                    Messages
                  </div>
                </template>
              </AppDropdown>

              <!-- Find Work Container -->
              <AppDropdown class="flex items-center justify-end h-full p-3" v-if="$store.state.accountType == 'agency' && isPermissionForAgency('find-job')
                ">
                <template slot="toggler">
                  <div
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted">
                    <a href="javascript:void(0);" class="text-muted text-decoration-none">Find Work</a>
                  </div>
                </template>
                <AppDropdownContent class="" dropdownTop="top-10" style="height: 505px">
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" @click="$router.push('/agency/search')" class="menu">Find Jobs</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/saved-jobs')">Saved Jobs</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/agency/my-proposals')">Proposals</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" @click="$router.push('/agency-profile')" class="menu">Agency Profile</a>
                  </AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>

              <!-- My Job Container -->
              <AppDropdown class="flex items-center justify-end h-full p-3" v-if="$store.state.accountType == 'agency'">
                <template slot="toggler">
                  <div @click="isMessage = !isMessage"
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted">
                    My Jobs
                  </div>
                </template>
                <AppDropdownContent class="" dropdownTop="top-10" style="height: 505px">

                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/agency/all-contracts')">All
                      Contracts</a>
                  </AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>

              <!-- My Job Container -->
              <AppDropdown class="flex items-center justify-end h-full p-3" v-if="$store.state.accountType == 'agency'">
                <template slot="toggler">
                  <div @click="isMessage = !isMessage"
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted">
                    Reports
                  </div>
                </template>
                <AppDropdownContent class="" dropdownTop="top-10" style="height: 505px">

                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/agency/all-contracts')">My
                      Report</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/agency/all-contracts')">Transaction
                      History</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/agency/all-contracts')">Billing &
                      Earning</a>
                  </AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>

              <!-- Message Container Agecny -->
              <AppDropdown class="flex items-center justify-end h-full" v-if="$store.state.accountType == 'agency' && (isPermissionForAgency('message'))">
                <template slot="toggler">
                  <!-- @click="isMessage = !isMessage" -->

                  <div @click="$router.push({ name: 'chat', path: '/chat' }).href"
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted p-3">
                    Messages
                  </div>
                </template>
              </AppDropdown>

              <AppDropdown class="flex items-center justify-end h-full p-3" v-if="$store.state.accountType == 'client' && (isPermissionForClient('jobs'))">
                <template slot="toggler">
                  <div
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted">
                    <a href="javascript:void(0);" class="text-muted text-decoration-none">Jobs</a>
                  </div>
                </template>
                <AppDropdownContent class="" dropdownTop="top-10" style="height: 505px">
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600">
                    <a href="javascript:void(0);" @click="$router.push('/client/dashboard')" class="menu">My Jobs</a>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 14px 18px" class="text-black fz-16 fw-600"
                    v-if="isPermissionForClient('all-contract')">
                    <a href="javascript:void(0);" class="menu" @click="$router.push('/client/all-contracts')">All
                      Contracts</a>
                  </AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>

              <li v-if="$store.state.accountType == 'client'" @click="$router.push('/client/talent')"
                class="p-3 transition-all duration-300 ease-in rounded-md cursor-pointer fz-16 fw-600 text-muted">
                Talent
              </li>

              <li @click="$router.push('/client/dashboard')"  v-if="$store.state.accountType == 'client' && (isPermissionForClient('reports'))"
                class="p-3 transition-all duration-300 ease-in rounded-md cursor-pointer fz-16 fw-600 text-muted">
                Reports
              </li>

              <!-- Message Container Client -->
              <AppDropdown class="flex items-center justify-end h-full" v-if="$store.state.accountType == 'client' && (isPermissionForClient('message'))">
                <template slot="toggler">
                  <div @click="$router.push({ name: 'chat', path: '/chat' }).href"
                    class="transiçion-all duration-300 ease-in rounded-full -pl-4 cursor-pointer hover:rounded-full d-flex align-items-center fz-16 fw-600 text-muted p-3">
                    Messages
                  </div>
                </template>
              </AppDropdown>

              <!-- Newfeed -->
              <li @click="getNewsFeed" class="p-3 transition-all duration-300 ease-in rounded-md cursor-pointer hover:rounded-md fz-16 fw-600 text-muted">
                Newsfeed
              </li>
              
              <!-- Notification Container -->
              <AppDropdown class="flex items-center justify-end h-full">
                <template slot="toggler">
                  <div class="relative" @click="isNotification = !isNotification">
                    <BellIcon
                      class="p-3 text-gray-400 transition-all duration-300 ease-in rounded-full cursor-pointer w-14 h-14 hover:rounded-full hover:bg-gray-200 hover:text-primary-500" />
                    <div class="absolute w-4 h-4 text-xs text-center text-white rounded-full top-2 left-7 bg-primary-500">
                      0
                    </div>
                  </div>
                </template>
                <AppDropdownContent dropdownTop="top-10" dropdownwidth="w-96" style="height: 520px">
                  <AppDropdownItem>
                    <div class="group hover:text-primary-500">
                      <div class="flex items-center justify-between px-4 py-2 border-b border-gray-300">
                        <h6 class="font-medium text-gray-900 cursor-pointer hover:text-primary-500">
                          Setting
                        </h6>
                        <h6 class="font-medium text-gray-900 cursor-pointer hover:text-primary-500">
                          Clear all
                        </h6>
                      </div>
                    </div>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 10px 20px"
                    class="pb-0 text-sm font-medium text-gray-500 transition-all duration-500 ease-in border-b border-gray-200 rounded-md cursor-pointer hover:bg-gray-300 hover:rounded-md">
                    <span class="text-base font-bold text-gray-900 cursor-pointer">
                      Jassica William
                    </span>

                    Comment on your project.

                    <div
                      class="inline-flex items-center justify-between w-full mx-auto text-base font-medium text-gray-500 truncate">
                      <p class="text-xs font-medium text-gray-500 cursor-pointer w-96">
                        Project
                      </p>
                      <p class="text-xs font-medium text-gray-400 cursor-pointer">
                        2 min ago
                      </p>
                    </div>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 10px 20px"
                    class="pb-0 text-sm font-medium text-gray-500 transition-all duration-500 ease-in border-b border-gray-200 rounded-md cursor-pointer hover:bg-gray-300 hover:rounded-md">
                    <span class="text-base font-bold text-gray-900 cursor-pointer">
                      Jassica William
                    </span>

                    Comment on your project.

                    <div
                      class="inline-flex items-center justify-between w-full mx-auto text-base font-medium text-gray-500 truncate">
                      <p class="text-xs font-medium text-gray-500 cursor-pointer w-96">
                        Project
                      </p>
                      <p class="text-xs font-medium text-gray-400 cursor-pointer">
                        2 min ago
                      </p>
                    </div>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 10px 20px"
                    class="pb-0 text-sm font-medium text-gray-500 transition-all duration-500 ease-in border-b border-gray-200 rounded-md cursor-pointer hover:bg-gray-300 hover:rounded-md">
                    <span class="text-base font-bold text-gray-900 cursor-pointer">
                      Jassica William
                    </span>

                    Comment on your project.

                    <div
                      class="inline-flex items-center justify-between w-full mx-auto text-base font-medium text-gray-500 truncate">
                      <p class="text-xs font-medium text-gray-500 cursor-pointer w-96">
                        Project
                      </p>
                      <p class="text-xs font-medium text-gray-400 cursor-pointer">
                        2 min ago
                      </p>
                    </div>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 10px 20px"
                    class="pb-0 text-sm font-medium text-gray-500 transition-all duration-500 ease-in border-b border-gray-200 rounded-md cursor-pointer hover:bg-gray-300 hover:rounded-md">
                    <span class="text-base font-bold text-gray-900 cursor-pointer">
                      Jassica William
                    </span>

                    Comment on your project.

                    <div
                      class="inline-flex items-center justify-between w-full mx-auto text-base font-medium text-gray-500 truncate">
                      <p class="text-xs font-medium text-gray-500 cursor-pointer w-96">
                        Project
                      </p>
                      <p class="text-xs font-medium text-gray-400 cursor-pointer">
                        2 min ago
                      </p>
                    </div>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 10px 20px"
                    class="pb-0 text-sm font-medium text-gray-500 transition-all duration-500 ease-in border-b border-gray-200 rounded-md cursor-pointer hover:bg-gray-300 hover:rounded-md">
                    <span class="text-base font-bold text-gray-900 cursor-pointer">
                      Jassica William
                    </span>

                    Comment on your project.

                    <div
                      class="inline-flex items-center justify-between w-full mx-auto text-base font-medium text-gray-500 truncate">
                      <p class="text-xs font-medium text-gray-500 cursor-pointer w-96">
                        Project
                      </p>
                      <p class="text-xs font-medium text-gray-400 cursor-pointer">
                        2 min ago
                      </p>
                    </div>
                  </AppDropdownItem>
                  <AppDropdownItem style="padding: 10px 20px"
                    class="pb-0 text-sm font-medium text-gray-500 transition-all duration-500 ease-in border-b border-gray-200 rounded-md cursor-pointer hover:bg-gray-300 hover:rounded-md">
                    <span class="text-base font-bold text-gray-900 cursor-pointer">
                      Jassica William
                    </span>

                    Comment on your project.

                    <div
                      class="inline-flex items-center justify-between w-full mx-auto text-base font-medium text-gray-500 truncate">
                      <p class="text-xs font-medium text-gray-500 cursor-pointer w-96">
                        Project
                      </p>
                      <p class="text-xs font-medium text-gray-400 cursor-pointer">
                        2 min ago
                      </p>
                    </div>
                  </AppDropdownItem>
                  <AppDropdownItem class="absolute bottom-0 left-0 right-0" style="margin-top: px">
                    <button
                      class="w-full px-4 py-3 text-base text-white rounded-md shadow-sm cursor-pointer bg-primary-500 hover:bg-red-400">
                      View all Notification
                    </button>
                  </AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>
            </ul>
          </div>
        </div>

        <div v-if="isAuth"
          class="flex items-center justify-end px-2 py-6 space-x-6 lg:border-r lg:border-l md:border-gray-200 md:px-4 xl:px-7 lg:space-x-0 lg:justify-center">
          <!-- User Profile  Dropdown-->
          <div class="w-full">
            <AppDropdown>
              <template slot="toggler">
                <v-avatar class="hidden shadow-md cursor-pointer sm:hidden md:block lg:block">
                  <img v-if="$store.state.currentUserData.profile_picture_path"
                    :src="$store.state.baseUrlImg + `/upload/profile_image/` + $store.state.currentUserData.profile_picture_path"
                    alt="John" />
                </v-avatar>
              </template>

              <transition name="account-dropdown">
                <AppDropdownContent dropdownwidth="w-96" class="z-10">
                  <div class="user-status d-flex align-items-center p-2">
                    <b-button type="button" class="btn-theme w-50 mr-1">
                      Online
                    </b-button>
                    <b-button type="button" class="btn-outline-theme w-50">
                      Invisible
                    </b-button>
                  </div>
                  <AppDropdownItem class="flex items-center px-4 py-2 border-gray-200"
                    :class="[($store.state.accountType == 'freelancer' && $store.state.currentUserData.uuid == $store.state.listAccount.qp_user.uuid) ? 'active-profile' : 'active2']"
                    v-if="$store.state.listAccount.qp_user">
                    <a @click="getfreelancerProfile($store.state.listAccount.qp_user)" class="flex items-center">
                      <div class="shadow-lg">
                        <img
                          :src="$store.state.baseUrlImg + `upload/profile_image/` + $store.state.listAccount.qp_user.profile_picture_path"
                          class="rounded-md shadow w-14 h-14" alt="" @error="userDefault" />
                      </div>

                      <div class="ml-3 cursor-pointer">
                        <h3 class="mb-0 text-black fz-16 fw-600">
                          {{ $store.state.listAccount.qp_user.first_name }} {{ $store.state.listAccount.qp_user.last_name }}
                        </h3>
                        <p style="padding: 0" class="mb-0 fz-14 fw-400 text-muted">
                          Freelancer
                        </p>
                      </div>
                    </a>
                  </AppDropdownItem>

                  <AppDropdownItem class="flex items-center px-4 py-2 border-gray-200"
                    :class="[($store.state.accountType == 'agency' && $store.state.currentUserData.company_settings.company_details_id == $store.state.listAccount.company[0].company_details_id) ? 'active-profile' : 'active2']"
                    v-if="$store.state.listAccount.company"><a
                      @click="getAgentProfile($store.state.listAccount.company[0])" class="flex items-center">
                      <div class="shadow-lg">
                        <img
                          :src="$store.state.baseUrlImg + `upload/profile_image/` + $store.state.listAccount.company[0].company_picture_path"
                          class="rounded-md w-14 h-14 no-shadow" alt="" @error="companyDefault" />
                      </div>

                      <div class="ml-3 cursor-pointer">
                        <h3 class="mb-0 text-black fz-16 fw-600">
                          {{ $store.state.listAccount.company[0].company_name }}
                        </h3>
                        <p class="mb-0 fz-14 fw-400 text-muted">Agency</p>
                      </div>
                      <div class="ml-auto">
                        <span class="badge badge-theme">99+</span>
                      </div>
                    </a>
                  </AppDropdownItem>

                  <AppDropdownItem class="flex items-center px-4 py-2 border-gray-200"
                    :class="[($store.state.accountType == 'client' && $store.state.currentUserData.uuid == $store.state.listAccount.user.uuid) ? 'active-profile' : 'active2']"
                    v-if="$store.state.listAccount.user">
                    <a @click="getClientProfile($store.state.listAccount.user)" class="flex items-center">
                      <div class="shadow-lg">
                        <img
                          :src="$store.state.baseUrlImg + `upload/profile_image/` + $store.state.listAccount.user.profile_picture_path"
                          class="rounded-md w-14 h-14 no-shadow" alt="" @error="userDefault" />
                      </div>

                      <div class="ml-3 cursor-pointer">
                        <h3 class="mb-0 text-black fz-16 fw-600">
                          {{ $store.state.listAccount.user.first_name }} {{ $store.state.listAccount.user.last_name }}
                        </h3>
                        <p class="mb-0 fz-16 fw-400 text-muted">Client</p>
                      </div>
                      <div class="ml-auto">
                        <span class="badge badge-theme">27</span>
                      </div>
                    </a>
                  </AppDropdownItem>
                  <!-- Invited User -->

                  <AppDropdownItem class="flex items-center px-4 py-2 border-gray-200"
                    v-for="(user, index) in $store.state.listAccount.membersPermissionList" :key="'sidebar' + index"
                    :class="[$store.state.listAccount.membersPermissionList[index].uuid == $store.state.currentUserData.uuid ? 'active-profile' : 'active2']">
                    <a @click="invitedMemberSwitch(user, index)" class="flex items-center">
                      <div class="shadow-lg">
                        <img :src="$store.state.listAccount.membersPermissionList[index].profile_picture_path"
                          class="rounded-md shadow w-14 h-14" alt="" @error="userDefault" />
                      </div>

                      <div class="ml-3 cursor-pointer">
                        <h3 class="mb-0 text-black fz-16 fw-600">
                          {{ $store.state.listAccount.membersPermissionList[index].first_name }} {{
                            $store.state.listAccount.membersPermissionList[index].last_name }}
                        </h3>
                        <p style="padding: 0" class="mb-0 fz-14 fw-400 text-muted">
                          {{ $store.state.listAccount.membersPermissionList[index].profileType == 1 ? 'Agency' : 'Client' }}
                        </p>
                      </div>
                    </a>
                  </AppDropdownItem>

                  <!-- Setting -->
                  <AppDropdownItem style="padding: 10px 22px"
                    class="flex items-center font-semibold text-gray-900 transition-all duration-500 ease-in-out cursor-pointer sm group hover:text-primary-500 hover:bg-gray-100">
                    <span class="flex items-center" @click="$router.push('/settings?current=0')">
                      <CogIcon class="w-5 h-5 mr-3 text-theme" />
                      Settings
                    </span>

                  </AppDropdownItem>
                  <!-- Logout -->
                  <AppDropdownItem style="padding: 10px 22px"
                    class="flex items-center font-semibold text-gray-900 transition-all duration-500 ease-in-out cursor-pointer sm group hover:text-primary-500 hover:bg-gray-100">
                    <span @click="logout" class="flex items-center">
                      <PoweroffIcon class="w-4 h-4 mr-4 text-gray-500 group-hover:text-primary-500" />
                      Log Out
                    </span>

                  </AppDropdownItem>
                </AppDropdownContent>
              </transition>
            </AppDropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  BellIcon,
  MenuAlt1Icon,
  CogIcon,
} from "@vue-hero-icons/solid";
import PoweroffIcon from "@/components/icons/PoweroffIcon.vue";
import AppDropdown from "@/components/base/AppDropdown.vue";
import AppDropdownContent from "@/components/base/AddDropdownContent.vue";
import AppDropdownItem from "@/components/base/AppDropdownItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AppDropdown,
    AppDropdownContent,
    AppDropdownItem,
    MenuAlt1Icon,
    PoweroffIcon,
    BellIcon,
    //XIcon,
    CogIcon,
  },

  data() {
    return {
      isOpen: false,
      isAccount: false,
      isMessage: false,
      isNotification: false,
      isAuth: null,
      searchValue: '',
    };
  },

  computed: {
    ...mapGetters("global", ["refreshNewsFeed"]),
    ...mapGetters("index", ["listAccount"]),
  },

  mounted() {
    // this.$store.dispatch("accountType",localStorage.getItem("accountType")); 
    // this.listAccount = this.listAccount();
    this.isAuth = this.$store.state.currentUserData.token;
    // this.isAuth = localStorage.getItem("token");
    if (this.$route.name == "ExpireLink") {
      this.isAuth = null;
    }
    // this.getCompanyCount();

  },

  methods: {
    // this fun is for to open search page
    openSearch() {
      var rName = 'Search';
      if (this.$store.state.accountType == 'client') {
        rName = 'clientSearch';
      }
      this.$router.push({
        name: rName,
        // path:'/freelancer/search',
        params: { input: this.searchValue }
      });
      this.searchValue = '';
    },
    ...mapActions(["genericAPIPOSTRequest"]),
    setAltImg(event) {
      event.target.src = this.$store.state.baseUrlImg + "/upload/profile_image/user.png"
    },
    companyDefault(e) {
      e.target.src = this.$store.state.baseUrlImg + "/upload/company_image/company.png";
    },
    userDefault(e) {
      e.target.src = this.$store.state.baseUrlImg + "/upload/profile_image/user.png";
    },
    logout() {
      this.$store.dispatch("currentUserData", '');
      this.$store.dispatch("accountType", '');
      this.$store.state.ExperienceLevelData = [];
      this.$store.state.LanguageData = [];
      this.$store.state.canceltoken = '';
      this.$store.state.certificationList = [];
      this.$store.state.currentUserOwnerData = [];
      this.$store.state.listAccount = {
        company: '',
        qp_user: '',
        user: '',
      };
      this.$store.state.loginUserUuid = '';
      this.$store.state.profileImg = '';
      this.$store.state.swiftKey = '';
      this.$store.state.talentData = [];
      // console.log('country', this.$store.state.global.countryList)
      localStorage.removeItem("token");
      localStorage.removeItem("accountType");
      localStorage.removeItem("loginUserData");
      localStorage.removeItem("loginUserUuid");
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

    getNewsFeed() {
      window.scrollTo(0, 0);
      if (window.location.pathname !== "/news-feed") {
        this.$router.push("/news-feed");
      } else {
        if (this.refreshNewsFeed) {
          this.refreshNewsFeed();
        }
      }
    },
    getClientProfile(user) {
      // this.CloseOtherTabs(event);

      window.scrollTo(0, 0);
      //if (window.location.pathname !== "/client/dashboard") {
      this.$store.dispatch("accountType", 'client');
      localStorage.setItem("accountType", "client");
      var res = this.switchaccount(2, user.uuid)
      if (res) {
        this.redirectFn('client');
      }
      //}  
    },
    getAgentProfile(user) {
      // this.CloseOtherTabs(event);

      window.scrollTo(0, 0);
      //if (window.location.pathname !== "/agency") {
      localStorage.setItem("accountType", "agency");
      this.$store.dispatch("accountType", 'agency');
      var res = this.switchaccount(1, user.uuid);
      if (res) {
        this.redirectFn('agency/search');
      }

      //}  
    },
    CloseOtherTabs(event){
      // Get the current domain
      var currentDomain = window.location.hostname;
      var targetElement = event.target;

      // Get the domain of the target element
      var targetDomain = targetElement.hostname;

      // Check if the target domain is the same as the current domain
      if (targetDomain === currentDomain) {
        // Close all tabs within the same domain
        var openTabs = window.open('', '_self');
        openTabs.close();
      }
    },
    getfreelancerProfile(user) {
      // this.CloseOtherTabs(event);
      
      window.scrollTo(0, 0);
      //if (window.location.pathname !== "/freelancer") {
      localStorage.setItem("accountType", "freelancer");
      this.$store.dispatch("accountType", 'freelancer');
      var res = this.switchaccount(3, user.uuid);
      if (res) {
        this.redirectFn('freelancer');
      }
      //}  
    },
    invitedMemberSwitch(user) {
      // this.CloseOtherTabs(event);
      // console.log(index);
      window.scrollTo(0, 0);
      var account = '';
      if (user.profileType == 1) {
        account = 'agency';
      }
      if (user.profileType == 2) {
        account = 'client';
      }

      localStorage.setItem("accountType", account);
      this.$store.dispatch("accountType", account);
      var res = this.switchaccount(user.profileType, user.uuid)
      if (res) {
        if(account == 'agency'){
          this.redirectFn(account+'/search')
        }else{
          this.redirectFn(account)
        }
      }

    },
    redirectFn(account) {
      account
      setTimeout(() => {
        window.location.href = '/' + account;
      }, 3000);
    },
    async switchaccount(accountType, uuid = '') {
      var res = await this.genericAPIPOSTRequest({
        requestUrl: "user/switchAccount",
        params: { account: accountType, 'uuid': uuid, data: this.getLoginUserIdRequest() },
      });
      // console.log('response',res)
      localStorage.setItem(
        "token",
        "Bearer " + res.token
      );
      localStorage.setItem(
        "loginUserData",
        JSON.stringify(res)
      );

      // console.log('res====',res);
      this.$store.commit("setcurrentUserData", res);
    },
    checkClientPermision() {
      if (this.$store.state.currentUserData.permission == '' || this.$store.state.currentUserData.permission == undefined) {
        return false;
      }
      else if (this.$store.state.currentUserData.permission.admin != '1'
        && this.$store.state.currentUserData.permission.hiring != '1'
        && this.$store.state.currentUserData.permission.view_work != '1') {
        return true;
      }
      return false;
    }
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
  z-index: 1111;
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