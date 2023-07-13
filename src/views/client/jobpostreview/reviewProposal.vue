<template>
  <b-card-text>
    <b-tabs content-class="mt-3 view-proposal-wrapper">
      <b-tab active @click="getproposal('allproposal')">
        <template #title>
          <span class="mt-3 d-block">All Proposals <span class="badge badge-theme">{{statusCount.jobApplyCount}}</span></span>
        </template>
        <allProposals :jobId="jobId" :jobDetails='jobDetails' :searchData="searchData" @applicationStatus1="applicationStatus" ref="allproposal"/>
      </b-tab>
      <b-tab @click="getproposal('shortlisted')">
        <template #title>
          <span class="mt-3 d-block">Shortlisted <span class="badge badge-theme">{{statusCount.jobShortlistedApplicantCount}}</span></span>
        </template>
        <Shortlisted :jobId="jobId" :jobDetails='jobDetails' :searchData="searchData" @applicationStatus2="applicationStatus"  ref="shortlisted"/>
      </b-tab>
      <b-tab @click="getproposal('messaged')">
        <template #title>
          <span class="mt-3 d-block">Messaged <span class="badge badge-theme">{{statusCount.jobmessageCount}}</span></span>
        </template>
        <Messaged  :jobId="jobId" :jobDetails='jobDetails' :searchData="searchData" @applicationStatus3="applicationStatus"  ref="messaged"/>
      </b-tab>
      <b-tab @click="getproposal('archeived')">
        <template #title>
          <span class="mt-3 d-block">Archived <span class="badge badge-theme">{{statusCount.jobarcheivedCount}}</span></span>
        </template>
        <Archived :jobId="jobId" :jobDetails='jobDetails' :searchData="searchData" @applicationStatus4="applicationStatus" ref="archeived" />
      </b-tab>
    </b-tabs>
  </b-card-text>
</template>
<script>
  import allProposals from "./allProposals.vue";
  import Shortlisted from "./Shortlisted.vue";
  import Messaged from "./Messaged.vue";
  import Archived from "./Archived.vue";
  import { mapActions,mapGetters } from "vuex";

  export default {
    components: {
      allProposals,
      Shortlisted,
      Messaged,
      Archived,
    },
    props:['jobId','jobDetails','talentQualilty'],
    data() {
      return {
        statusCount:'',
        currentTab:'allProposal',
        searchData:{
          categoryData:[],
          languageData:[],
          experienceLevelData:[],
          certificationData:[],
          certificationTypeData:[],
          talentType:[],
          successtype:[],
          earntype:[],
          hourstype:[],
          englishtype:[],
          talentQualilty:[],
          skillData:[],
          locationData:[],
        }
      } 
    },
    computed:{
        ...mapGetters("global", ["getQrRoleMasterList"]),
        ...mapGetters(["getLanguageListdata","getExperienceLevelListdata","getCertificationListdata"]),
    },
    mounted(){
      // this.applicationStatus();
      
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest","fetchCertificationList","fetchLanguageList","fetchExperienceLevelList"]),
      ...mapActions("global",["fetchQpRoleMasterList"]),

      // this fun is for to get data of other pages
      getproposal(_v){
        this.currentTab = _v;
        if(this.currentTab  =='allproposal'){
          setTimeout(() => {
            this.$refs.allproposal.getProposalData();
            this.$refs.allproposal.modelopenclose = false;
          }, 200);

        }else if(this.currentTab =='shortlisted'){
          setTimeout(() => {
            this.$refs.shortlisted.getProposalData();
            this.$refs.shortlisted.modelopenclose = false;
          }, 200);

        }else if(this.currentTab =='messaged'){
          setTimeout(() => {
            this.$refs.messaged.getProposalData();
            this.$refs.messaged.modelopenclose = false;
          }, 200);

        }else if(this.currentTab =='archeived'){
          setTimeout(() => {
            this.$refs.archeived.getProposalData();
            this.$refs.archeived.modelopenclose = false;
          }, 200);

        }
      },
      // this fun is for to check the application count status
      async applicationStatus(){ 
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "getJobApplicantStatus",
              params: { "jobsid": this.jobId },
          });  
        this.statusCount = res;
      },
      // this fun is for to get filter data
      async getfilterData(){
          this.fetchQpRoleMasterList();
          this.fetchLanguageList();
          this.fetchExperienceLevelList();
          // this.fetchCertificationList();
          this.searchData.categoryData = this.getQrRoleMasterList;
          this.searchData.languageData = this.getLanguageListdata;
          this.searchData.experienceLevelData = this.getExperienceLevelListdata;
          this.searchData.talentQualilty=this.talentQualilty;
          this.searchData.certificationData = this.getCertificationListdata;
  
          var certificationType = await this.genericAPIPOSTRequest({
              requestUrl: "user/getCertificationType",
              params: {},
          });
          
          this.searchData.certificationTypeData = certificationType;
          var res = await this.genericAPIPOSTRequest({
                requestUrl: "getOptionsMaster",
                params: {},
            });  
          if(res){
            res.map(data=>{
              if(data.type == 'talent'){
                this.searchData.talentType.push(data);
              }else if (data.type == 'job_success') {
                this.searchData.successtype.push(data);
              }else if (data.type == 'earn_amount') {
                this.searchData.earntype.push(data);
              }else if (data.type == 'hours') {
                this.searchData.hourstype.push(data);
              }else if (data.type == 'english_level') {
                this.searchData.englishtype.push(data);
              }
            });
          }else{
            this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
          } 
        },
      toggleDropdown (event) {
        event.currentTarget.classList.toggle('is-active')
      }
    }
  }
</script>
<style>
  .view-proposal-wrapper .dropdown{top:-50px;}
  .view-proposal-wrapper input[type=radio]{opacity:1;}
</style>
