<template>
  <b-container>
    <b-row class="mt-100 freelancer-wrap my-proposals">
      <b-col>
        <h4 class="mb-3 fz-30 fw-500 text-black"><b>All Submit Proposals</b></h4>
        <div>
          <b-tabs content-class="mt-3">
            <b-card-group deck id="submit-Proposal">
                <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white" class="mb-3">
                  <template  #header>
                    <div class="d-flex align-items-center justify-content-space-between">
                      <h4 class="mb-0 fz-24 fw-500 text-black"><b>Submit Proposals</b><span class="text-muted"> ({{submitProposalData.length}}) </span></h4>
                    </div>
                  </template>
                  <b-row>
                    <b-col cols="12" v-if="submitProposalData.length > 0 ">
                      <div class="invitation-list border-bottom py-4 px-2" v-for="(submitProposal, id) in submitProposalData" :key="id">
                        <h5 class="fz-20 fw-600"><a :href="$router.resolve({name: 'proposalDetails',  path:'/freelancer/proposal-details', query: {jobDetailsWithClientData: submitProposal.jobs_id}}).href" class="text-black">{{submitProposal.job_title}}</a></h5>
                        <p class="fz-16 fw-400 mb-0"><a :href="$router.resolve({name: 'proposalDetails',  path:'/freelancer/proposal-details', query: {jobDetailsWithClientData: submitProposal.jobs_id}}).href" class="text-muted">Initiated {{submitProposal.showDate}}</a></p>
                      </div>
                      
                    </b-col>
                    <b-col cols="12" v-else>
                      <div class="invitation-list border-bottom py-4 px-2">
                        <h5 class="fz-20 fw-600">No Data Found</h5>
                      </div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-card-group>
          </b-tabs>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'
let base_url = "http://qapin_mvp5.manageprojects.in/";
export default {
  name: 'Qapin || Freelancer',

  data: () => ({
    user_id:'',
    headToken:'',
    submitProposalData:'',
  }),
  methods:{
    
  },
  mounted(){
      var userdata = localStorage.getItem('loginUserData');
      userdata = JSON.parse(userdata);
      this.user_id = userdata.user_id;
      // this is header for api
      this.headToken= {"Authorization": localStorage.getItem('token')};
      // this fun is for to check milestone data
      var getmilestoneData = {
        // "user_id": this.user_id
        "filter": "4",
        "from": "search"
      };
      axios.post(base_url+'api/getJobsList',getmilestoneData,{headers: this.headToken}).then((response)=>{
      // axios.post(base_url+'api/getsbmitProposal',getmilestoneData,{headers: this.headToken}).then((response)=>{
        if(response.data.status==true){
          this.submitProposalData =response.data.result;
        }
      });
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
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .freelancer-wrap .nav-pills .nav-link.active, .nav-pills .show > .nav-link{background-color:#fff!important;color:#F2613B!important;font-weight:600;border-bottom: 3px solid #f2613b;border-radius: 0px;}
  .freelancer-wrap .nav-pills .badge{border-radius: 50%;padding: 8px 7px;background-color:#eee;color:#000;}
  .freelancer-wrap .nav-pills .nav-link{color:#999999;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link:hover{color:#F2613B!important;;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link.active .badge, .nav-pills .show > .nav-link .badge{background-color: #F2613B!important;border-radius: 50%;font-size: 10px!important;padding: 7px 6px;color:#fff!important;}
  .freelancer-wrap .br-50{border-radius:50%!important;}
  .freelancer-wrap .fz-14{font-size:14px;}
  .freelancer-wrap .card{border-radius: 20px!important;}
  .freelancer-wrap .card-body{border-radius: 20px;}
  .freelancer-wrap .card-body{border-radius:0 0 20px 20px;}
  .freelancer-wrap .card-header{border-radius:20px 20px 0 0!important;}
  .freelancer-wrap .my-proposal ul{margin-left:-32px;}
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fw-600{font-weight:600;}
  .mb-23{margin-bottom:23px;}
  .no-bottom-border{border-bottom:0px!important;}
  .border-top-0{border-top:0px!important;}
  .my-proposals .nav-tabs{border-bottom: 1px solid transparent;margin-bottom: 2rem;}
  .my-proposals .nav-tabs .nav-link.active{color: #000;background-color: transparent;border-color: transparent;font-size: 16px;font-weight: 700;border-bottom: 2px solid #f2613d!important;}
  .my-proposals .nav-tabs .nav-link{color: #999999;background-color: transparent;border-color: transparent;font-size: 16px;font-weight: 700;}
  .btn-view{padding:6px 40px!important;}
  .btn-view:hover{padding:6px 40px!important;}
  .invitation-list h5 a:hover{color:#F2613C!important}
  .invitation-list:last-child.border-bottom{border-bottom:0px!important}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  hr {margin: 1rem 0!important;}
  .fz-30{font-size:26px!important;}
  .w-90{width:90px;}
  .h-90{height:90px;}
  .object-scale-down{object-fit:scale-down;}
  .overflow-hidden{overflow:hidden;}
</style>