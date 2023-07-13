<template>
  <b-container>
    <b-card-text>
      <proposalDetails />
    </b-card-text>

    <b-card-text>
      <viewProfile />
    </b-card-text>
    
    <b-card-text>
      <viewHistory />
    </b-card-text>
  </b-container>
</template>
<script>
  import proposalDetails from "./proposalDetails.vue";
  import viewProfile from "./viewProfile.vue";
  import viewHistory from "./viewHistory.vue";
  export default {
    components: {
      proposalDetails,
      viewProfile,
      viewHistory,
    },
    data() {
      return {
        
      } 
    },
    methods: {
      
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
  .invite-details-wrap .dropdown .dropdown-toggle:after, .work-filled .dropdown .dropdown-toggle:after{display:none;}
  .bg-none {background-color: transparent;}
  .bordered {border-bottom: 1px solid #ebebeb !important;border-right: 1px solid #ebebeb;}
  .bordered-right {border-right: 1px solid #ebebeb;}
  .br-20 {border-radius: 20px;}
  .border-none {border: 0px !important;}
  .freelancer-wrap .br-50 {border-radius: 50% !important;}
  .freelancer-wrap .fz-14 {font-size: 14px;}
  .freelancer-wrap .card {border-radius: 20px !important;}
  .freelancer-wrap .card-body {border-radius: 20px;}
  .freelancer-wrap .card-body {border-radius: 0 0 20px 20px;}
  .freelancer-wrap .card-header {border-radius: 20px 20px 0 0 !important;}
  .border-left-theme{border-left:3px solid #F2613C;}
</style>

