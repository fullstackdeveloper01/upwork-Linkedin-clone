<template>
  <b-container>
    <b-row class="mt-100 post-review-wrap">
      <b-col xl="12" lg="12" sm="12">
        <b-card no-body>
          <b-col md="12" lg="12" xl="12" class="p-0" v-if="jobDetails.is_delete == 1">
              <div class="p-4 notice-alert theme-bg d-flex align-items-center br-20 fz-18">
                <i class="fa fa-exclamation-circle mr-3" aria-hidden="true"></i> This post is closed and is no longer accepting proposals.
              </div>
          </b-col>

          <b-col xl="12" lg="12" sm="12">
            <div class="title-wrap">
              <h3 class="fz-24 text-black fw-600 mb-0">{{jobDetails.job_title}}</h3>
            </div>
          </b-col>
          <b-tabs v-model="currentPage" pills card justified>
            <b-tab class="first-pill" @click="changeCurrentPage(0)">
              <template #title>
                <span class="mt-3 d-block">View Job Post</span>
              </template>
              <template v-if="currentPage==0">
                <ViewJobPost :jobDetails='jobDetails' :ratingsData='ratingsData' :userDetails='userDetails' :jobApplicationStatus='jobApplicationStatus' ref="viewJobPostData"/>
              </template>
            </b-tab>
            <b-tab @click="changeCurrentPage(1)">
              <template #title>
                <span class="mt-3 d-block">Invite Freelancers</span>
              </template>
              <template v-if="currentPage==1">
                <Invite :jobDetails='jobDetails' :talentQualilty="talentQualilty" ref="InviteData" />
              </template>
            </b-tab>
            <b-tab @click="changeCurrentPage(2)">
              <template #title >
                <span class="mt-3 d-block">Review Proposal</span>
              </template>
              <template v-if="jobId && currentPage==2">
                <reviewProposal :jobId="jobId" :jobDetails='jobDetails' :talentQualilty="talentQualilty" ref="reviewProposalData"/>
              </template>
            </b-tab>
            <b-tab class="last-pill" @click="changeCurrentPage(3)">
              <template #title >
                <span class="mt-3 d-block">Hire</span>
              </template>
              <template v-if="jobId && currentPage==3">
                <Hire :jobId="jobId" :jobDetails='jobDetails' :talentQualilty="talentQualilty" ref="offerlist" />
              </template>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  import { mapActions,mapGetters } from "vuex";
  import ViewJobPost from "./ViewJobPost.vue";
  import Invite from "./Invite.vue";
  import reviewProposal from "./reviewProposal.vue";
  import Hire from "./Hire.vue";
  export default {
    computed:{
      ...mapGetters(["getTalentListdata"]),
    },
    components: {
      ViewJobPost,
      Invite,
      reviewProposal,
      Hire,
    },
    data() {
      return {
        jobDetails:[],
        ratingsData: 0,
        userDetails:'',
        jobApplicationStatus:'',
        jobId:'',
        selected: null,
        transaction: [
          { value: null, text: 'All Transaction' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        currentPage:0,
        talentQualilty:[],
      } 
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest","fetchTalentList"]),
      changeCurrentPage(_v){
        var new_url = "?current="+_v+"";
        window.history.pushState('data', 'title', new_url);
        if(_v == 1){
          setTimeout(() => {
            this.$refs.InviteData.gettabData('search');
          }, 1000);
        }
        if(_v == 2){
          setTimeout(() => {
            this.$refs.reviewProposalData.applicationStatus();
            this.$refs.reviewProposalData.getproposal('allproposal');
            this.$refs.reviewProposalData.getfilterData();
          }, 1000);
        }
        if(_v == 3){
          setTimeout(() => {
            this.$refs.offerlist.getproposal('offer');
          }, 1000);
        }
      },
      async getPostdetails(_i){
        var getPostedData = await this.genericAPIPOSTRequest({
              requestUrl: "getJobDetails_new",
              params: {
                'poid':_i,
                'user_id':this.$store.state.currentUserData.login_master_id,
                'data': this.getCurrentUserIdRequest,
              },
          });
        if (getPostedData.length > 0 ) {
          
          this.jobDetails = getPostedData[0];
          this.jobId = this.jobDetails.jobs_id
          var jobApplicationStatus = await this.genericAPIPOSTRequest({
              requestUrl: "getJobApplicantStatus",
              params: {
                "jobsid": this.jobDetails.jobs_id,
                "user_id":this.jobDetails.user_id
              },
          });
          if(jobApplicationStatus){
            this.jobApplicationStatus =  jobApplicationStatus;
          }else{
            this.jobApplicationStatus =  '';
          }
          var clientDetailsapi = await this.genericAPIPOSTRequest({
              requestUrl: "user/getUserDetails",
              params: {},
          }); 
          if(clientDetailsapi){
            this.userDetails =  clientDetailsapi;
          }else{
            this.userDetails =  '';
          }         
          
          var clientRatingsapi = await this.genericAPIPOSTRequest({
              requestUrl: "getUserReviewCal",
              params: {},
          });

          if(clientRatingsapi){ 
            this.ratingsData =  clientRatingsapi.rating;
          }else{
            this.ratingsData =  '';
          }   
        }else{
          this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
        }
      },
      // toggleDropdown (event) {
      //   event.currentTarget.classList.toggle('is-active')
      // }
    },
    mounted() {
      if(this.$route.params.pid != undefined){
          window.scrollTo(0,0);
          this.getPostdetails(this.$route.params.pid);
          this.fetchTalentList({params:{"talent_type":"Badges"}});
          this.talentQualilty = this.getTalentListdata;
          setTimeout(() => {
            this.currentPage = parseInt(this.$route.query.current);
            this.changeCurrentPage(this.currentPage)
          }, 100);
      }else{
        this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
      }
      
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
  body{font-family: 'Source Sans Pro', sans-serif!important;}
  .text-muted{color:#979797!important;}
  .ralative {padding-bottom:0px;}
  .theme-bg{background-color: #FFF6F4!important;}
  .bg-none{background-color:transparent;}
  .bordered{border-bottom: 1px solid #EBEBEB!important;border-right: 1px solid #EBEBEB;}
  .border-bottom{border-bottom: 1px solid #EBEBEB!important;}
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .fz-14{font-size:14px!important;}
  .fz-16{font-size:16px!important;}
  .fz-18{font-size:18px!important;}
  .fw-600{font-weight:600!important;}
  .fw-500{font-weight:500!important;}
  .fw-400{font-weight:400!important;}
  .mb-23{margin-bottom:23px;}
  .no-bottom-border{border-bottom:0px!important;}
  .border-top-0{border-top:0px!important;}
  .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  .fz-30{font-size:26px!important;}

  .post-review-wrap .card{background-color: transparent;border: 0px;}
  .post-review-wrap .card-header{background-color: transparent;border: 0px;}
  .post-review-wrap .card-header-pills{margin-left:-40px;}
  .post-review-wrap .nav-pills .nav-link{border-radius: 0px;border: 1px solid #dfdfdf;color: #333;background-color: #fff;padding: 10px 5px;font-weight: 600;    height: 75px;}
  .post-review-wrap .nav-pills .nav-link.active{background-color: #f2613b;border: 1px solid #f2613b;color: #fff;}
  .post-review-wrap .nav-tabs .tab-content{background-color: #fff;margin: 9px;border-radius:20px;}
  .post-review-wrap .nav-pills .nav-item{background-color: #fff;}
  .post-review-wrap .nav-tabs .nav-link .badge-theme{background-color:#9c9c9c;color:#fff!important;border-radius: 50%;width: 25px;height: 25px;padding: 6px 6px!important;}
  .post-review-wrap .nav-tabs .nav-link.active .badge-theme{background-color:#f2613b;color:#fff;border-radius: 50%;width: 25px;height: 25px;padding: 6px 6px!important;}
  .post-review-wrap .nav-pills .nav-link.active .badge-theme{background-color: #fff;color:#f2613b;}
  .post-review-wrap .nav-tabs {border-bottom: 0;margin-left:-40px;}
  .post-review-wrap .nav-tabs .nav-link{font-size: 16px;color: #999999;font-weight:500;}
  .post-review-wrap .nav-tabs .nav-link.active{color: #000;background-color: transparent;border-color: #dee2e6 #dee2e6 #fff;border: 0;border-bottom: 2px solid #f2613b;font-weight: 600;}
  .post-review-wrap input ~ label:before{display:none;}
  @media only screen and (min-width: 320px) and (max-width: 815px) {
    .post-review-wrap .right .options a{display: flex!important;align-items: center;}/*justify-content: start;*/
    #sidebar-message .content {margin-left:0rem !important}
    #sidebar-message .content ul{margin-top:0.5rem !important}
    #sidebar-message .content h6{margin-top:0.5rem !important;text-align:left!important;}
    #sidebar-message .content .weightage-wrap{margin-top:0.5rem !important}
    .post-review-wrap .right .options .custom-margin a{display: flex!important;align-items: center;justify-content: flex-start;}
  }
  .br-20{border-radius:20px!important;}
  .ml-30{margin-left:8rem;}
  .pl-30{margin-left:8rem;}
  .post-review-wrap .custom-control {
    position: relative;
    z-index: 1;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: flex;
    align-items: normal;
  }
  .post-review-wrap input {
    position: relative;
    top: 0px;
    right: 0px;
  }
  .post-review-wrap .custom-radio label {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
  .post-review-wrap .custom-control-label:before {
    pointer-events: none!important;
    background-color: #fff!important;
    border: 1px solid #adb5bd!important;
  }
  .post-review-wrap .custom-control-label:after, .custom-control-label:before {
    /*position: absolute;*/
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
  }
  .post-review-wrap .custom-control-label:before {
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;
  }
  .post-review-wrap .custom-control-label:after {
    background: 50%/50% 50% no-repeat;
  } 
  .hire-wrap .card {
    background-color: transparent!important;
    border: 0px!important;
  }
  .hire-wrap .view-wrapper .header {
    border-bottom: 1.5px solid #EBEBEB!important;
  }
  .hire-wrap .view-wrapper .footer {
    border-top: 1.5px solid #EBEBEB!important;
  }
  .hire-wrap .view-wrapper .footer {
    border-top: 1.5px solid #EBEBEB!important;
  }
  .hire-wrap .view-wrapper .footer .btn-primary  {
    border:0px;
    background-color:transparent;
    color:#000;
    font-size:20px;
    width:100%;
    text-align:left;
    padding:0px;  
  }
  .hire-wrap .view-wrapper .footer .btn-primary:focus{
    box-shadow:none;
  }
  .hire-wrap .view-wrapper .footer .rotate {
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;
  }
  .hire-wrap .view-wrapper .footer .rotate.down {
      -moz-transform:rotate(180deg);
      -webkit-transform:rotate(180deg);
      transform:rotate(180deg);
  }
  .hire-wrap .view-wrapper .custom-control-label span{
    font-size:18px;
    font-weight:500;
  }
  .sidebar-message .card{border: 1px solid rgba(0, 0, 0, 0.125)!important;} 
  .sidebar-message .card-body{padding:12px;}
  .sidebar-message .w-80{width:80%!important;}
  .sidebar-message .tabs-wrapper{min-height:327px;}
  .sidebar-message .tags-wrap ul{margin-left:-32px;}
  #sidebar-message .dropdown-menu{margin-top:.5rem!important;}
  .hire-profile-wrap .img-wrapper{width:100px;height:105px;border-radius:50%;position:relative;box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);padding: 5px;}
  .hire-profile-wrap .img-wrapper img{width:100%;height:100%;border-radius:50%;}
  .hire-profile-wrap .img-wrapper .dot{position:absolute;width:15px;height:15px;background-color:#48c048;border-radius:50%;top:0px;right:17px;border: 2px solid #ffffff;}
  .terms-checkbox .custom-control-label:after, .terms-checkbox .custom-control-label:before{top: 0.1rem!important;}
  .hire-profile-wrap .img-wrap{width:10%;}
  .justify-content-space-around{justify-content:space-around;}
  .width-80{width:80%;}
</style>
