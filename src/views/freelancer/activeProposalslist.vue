<template>
  <b-container>
    <b-row class="mt-100 freelancer-wrap my-proposals">
      <b-col>
        <h4 class="mb-3 fz-30 fw-500 text-black"><b>All Active Proposals</b></h4>
        <div>
          <b-tabs content-class="mt-3">
            <b-card-group deck>
                <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white" class="mb-3">
                  <template  #header>
                    <div class="d-flex align-items-center justify-content-space-between">
                      <h4 class="mb-0 fz-24 fw-500 text-black"><b>Active Proposals</b><span class="text-muted"> ({{jobactiveProposalData.length}})</span></h4>
                    </div>
                  </template>
                  <b-row>
                    <b-col cols="12" v-if="jobactiveProposalData.length > 0">
                      <div class="invitation-list border-bottom py-4 px-2" v-for="(activeProposal,id) in jobactiveProposalData" :key="id">
                        <h5 class="fz-20 fw-600"><a :href="$router.resolve({name: 'proposalDetails',  path:'/freelancer/proposal-details', query: {jobDetailsWithClientData: activeProposal.jobs_id}}).href" class="text-black">{{activeProposal.job_title}}</a></h5>
                        <p class="fz-16 fw-400 mb-0"><a :href="$router.resolve({name: 'proposalDetails',  path:'/freelancer/proposal-details', query: {jobDetailsWithClientData: activeProposal.jobs_id}}).href" class="text-muted">Initiated {{activeProposal.showDate}}</a></p>
                      </div>
                    </b-col>
                    <b-col cols="12" v-else>
                      <div class="invitation-list border-bottom py-4 px-2">
                        <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2 m-auto">
                          <path d="M66.1246 6.34896C71.2699 2.78071 78.0895 2.78071 83.2348 6.34896C86.5425 8.64289 90.6329 9.51233 94.5877 8.76211C100.74 7.59512 106.97 10.3689 110.219 15.7214C112.307 19.1624 115.691 21.6204 119.609 22.5436C125.703 23.9797 130.266 29.0476 131.057 35.2589C131.566 39.252 133.657 42.8736 136.861 45.3106C141.844 49.1014 143.952 55.5872 142.148 61.5833C140.989 65.438 141.426 69.5969 143.361 73.1263C146.372 78.6164 145.659 85.3986 141.573 90.1427C138.946 93.1926 137.653 97.1697 137.986 101.181C138.504 107.421 135.094 113.327 129.431 115.999C125.791 117.717 122.992 120.824 121.665 124.624C119.6 130.536 114.082 134.544 107.822 134.682C103.798 134.77 99.9778 136.471 97.2192 139.402C92.9283 143.962 86.2577 145.38 80.483 142.96C76.7706 141.404 72.5888 141.404 68.8764 142.96C63.1017 145.38 56.4311 143.962 52.1401 139.402C49.3816 136.471 45.5613 134.77 41.537 134.682C35.277 134.544 29.7598 130.536 27.6946 124.624C26.3669 120.824 23.5687 117.717 19.9282 115.999C14.2654 113.327 10.8556 107.421 11.3732 101.181C11.7059 97.1697 10.4136 93.1926 7.78652 90.1427C3.7 85.3986 2.98715 78.6164 5.99803 73.1263C7.93364 69.5969 8.37075 65.438 7.21125 61.5833C5.40762 55.5872 7.51499 49.1014 12.4986 45.3106C15.7024 42.8736 17.7933 39.252 18.3019 35.2589C19.093 29.0476 23.6562 23.9797 29.7508 22.5436C33.6688 21.6204 37.052 19.1624 39.1407 15.7214C42.3898 10.3689 48.6199 7.59512 54.7716 8.76211C58.7264 9.51233 62.8169 8.64289 66.1246 6.34896Z" fill="#F2613C"/>
                          <path d="M68.7901 83.7077H76.827L84.2389 55.3104L86.8286 44.0586H74.5945L72.8978 55.3104L68.7901 83.7077ZM68.8794 104.961C74.0587 104.961 77.6307 100.496 77.6307 96.0311C77.6307 92.1912 75.1303 89.3336 71.2904 89.3336C66.1111 89.3336 62.5391 93.9772 62.5391 98.3529C62.5391 102.282 65.0395 104.961 68.8794 104.961Z" fill="white"/>
                        </svg>
                        <p class="fz-20 fw-600 text-black mb-0 text-center">No Data Available</p>
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
    jobactiveProposalData:'',
  }),
  methods:{
    
  },
  mounted(){
      var userdata = localStorage.getItem('loginUserData');
      userdata = JSON.parse(userdata);
      this.user_id = userdata.user_id;
      // this is header for api
      this.headToken= {"Authorization": localStorage.getItem('token')};
      // this fun is for to get active Proposal data
      var getactiveProposalData = {
        "filter": "11",
        "from": "search"
      };
      axios.post(base_url+'api/getJobsList',getactiveProposalData,{headers: this.headToken}).then((response)=>{
        if(response.data.status==true){
            this.jobactiveProposalData =response.data.result;
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
  .icon-wrapper-header svg{
    width: 16px;
    height: 16px;
    color: #b0b0b0;
  }
</style>