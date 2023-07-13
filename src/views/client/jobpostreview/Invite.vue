<template>
  <b-card-text>
    <b-tabs content-class="mt-3">
      <b-tab active @click="gettabData('search')">
        <template #title>
          <span class="mt-3 d-block">Search</span>
        </template>
        <b-card no-body class="freelancer-wrap mt-12 br-20 bg-white">
          <searchUser v-if="currentTab == 'search'" :jobDetails='jobDetails' ref="searchTabData" :talentQualilty="talentQualilty" :pageType="'inviteSearch'" />
        </b-card>
      </b-tab>
      <b-tab @click="gettabData('invited')">
        <template #title>
          <span class="mt-3 d-block">Invited Freelancer</span>
        </template>
        <b-card no-body class="freelancer-wrap mt-12 br-20 bg-white">
         <invitedUser v-if="currentTab == 'invited'" :jobDetails='jobDetails' ref="invitedTabData" :talentQualilty="talentQualilty" :pageType="'invitedUser'"/>
        </b-card>
      </b-tab>
      <b-tab @click="gettabData('hired')">
        <template #title>
          <span class="mt-3 d-block">My Hires</span>
        </template>
        <b-card no-body class="freelancer-wrap mt-12 br-20 bg-white">
          <!-- <hiredUser v-if="currentTab == 'hired'" :jobDetails='jobDetails' ref="hiredTabData" :talentQualilty="talentQualilty" :pageType="'inviteHired'"/> -->
          <hiredUser ref="hiredTabData" v-if="currentTab == 'hired'" :pageType="'inviteHired'" :talentQualilty="talentQualilty" :jobDetails="jobDetails" />
        </b-card>
      </b-tab>
      <b-tab @click="gettabData('saved')">
        <template #title>
          <span class="mt-3 d-block">Saved</span>
        </template>
        <b-card no-body class="freelancer-wrap mt-12 br-20 bg-white">
          <savedUser v-if="currentTab == 'saved'" :jobDetails='jobDetails' ref="savedTabData" :talentQualilty="talentQualilty" :pageType="'invitedSaved'" />
        </b-card>
      </b-tab>
    </b-tabs>
  </b-card-text>
</template>
<script>
  import savedUser from '@/components/client-search/saved-user.vue';
  import hiredUser from '@/components/client-search/hired-user.vue';
  import invitedUser from '@/components/client-search/invited-user.vue';
  import searchUser from '@/components/client-search/search-user.vue';
  export default {
    components: {
      savedUser,
      hiredUser,
      invitedUser,
      searchUser
    },
    props:['jobDetails','talentQualilty'],
    data() {
      return {
        currentTab:'search',
      } 
    },
    methods: {
      toggleDropdown (event) {
        event.currentTarget.classList.toggle('is-active')
      },
      gettabData(_v){
        this.currentTab = _v;
          if(this.currentTab == 'search'){
            setTimeout(() => {
              this.$refs.searchTabData.sidebarStatus = false;
              this.$refs.searchTabData.getsearchTab();
              this.$refs.searchTabData.getfilterData();
              // this.$refs.searchTabData.getpostedJobs();
              this.$refs.searchTabData.sidebarStatus = true;  
            }, 200);
          }
          if (this.currentTab == 'invited') {
            setTimeout(() => {
              this.$refs.invitedTabData.sidebarStatus = false;
              this.$refs.invitedTabData.getinvitedtab();
              this.$refs.invitedTabData.sidebarStatus = true;
            }, 200);
          }
          if (this.currentTab == 'hired') {
            setTimeout(() => {
              this.$refs.hiredTabData.updateSidebarStatus = false;
              this.$refs.hiredTabData.gethiredtab();
              this.$refs.hiredTabData.sidebarStatus = true;
            }, 200);
          }
          if (this.currentTab == 'saved') {
            // setTimeout(() => {
              this.$refs.savedTabData.sidebarStatus = false;
              this.$refs.savedTabData.getsavedtab();
              this.$refs.savedTabData.sidebarStatus = true;
            // }, 200);
          }
      },
    },

    computed:{
    },
    mounted(){
      // this.gettabData(this.currentTab);
    }

  }
</script>
<style>
  #modal-invite-job .img-wrapper {
    box-shadow: 0px 10px 25px rgb(0 0 0 / 25%);
    border-radius: 10px;
    height: 50px;
    width: 50px;
    position:relative;
  }
  #modal-invite-job .img-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .circle-live{position:absolute;top:6px;right:-5px;color: #6cc82f!important;font-size:12px!important;}
</style>
