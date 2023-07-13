<template>
  <b-card-text>
    <b-tabs v-model="currentPage" content-class="mt-3">
      <b-tab active @click="getproposal('offer')">
        <template #title>
          <span class="mt-3 d-block">Offers <span class="badge badge-theme">{{statusCount.jobofferedCount}}</span></span>
        </template>
        <Offers v-if="currentTab == 'offer'" :jobId="jobId" ref="offer" :jobDetails='jobDetails' :talentQualilty="talentQualilty"/>
      </b-tab>
      <b-tab @click="getproposal('hired')">
        <template #title>
          <span class="mt-3 d-block">Hired <span class="badge badge-theme">{{statusCount.jobHireApplicantCount}}</span></span>
        </template>
        <Hired v-if="currentTab == 'hired'" :jobId="jobId" ref="hired" :jobDetails='jobDetails' :talentQualilty="talentQualilty" />
      </b-tab>
    </b-tabs>
  </b-card-text>
</template>
<script>
  import { mapActions } from "vuex";
  import Hired from './Hired.vue';
  import Offers from './Offers.vue';
  export default {
    components:{
      Hired,
      Offers
    },
    props:['jobId','jobDetails','talentQualilty'],
    data() {
      return {
        statusCount:'',
        currentPage:0,
        currentTab:'offer',
      } 
    },
    mounted(){
      setTimeout(() => {
        this.currentPage = parseInt(this.$route.query.tab);
      }, 100);
      this.applicationStatus();
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest"]),
      getproposal(_v){
        this.currentTab =_v;
        if(this.currentTab=='offer'){
          setTimeout(() => {
            this.$refs.offer.getProposalData();
          }, 200);
        }
        if(this.currentTab=='hired'){
          setTimeout(() => {
            this.$refs.hired.getProposalData();
          }, 200);
        }
        this.applicationStatus();
      },
      async applicationStatus(){ 
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "getJobApplicantStatus",
              params: { "jobsid": this.jobId },
          });  
        this.statusCount = res;
      },
      toggleDropdown (event) {
        event.currentTarget.classList.toggle('is-active')
      }
    }
  }
</script>

