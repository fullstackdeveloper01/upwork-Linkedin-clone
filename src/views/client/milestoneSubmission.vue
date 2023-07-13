<template>
  <b-container>
    <b-row class="mt-100 transaction-wrap">
      <b-col cols="12">
        <h4 class="mb-4 fz-30 fw-500 text-black"><b>Freelance Inspector- China- Mooring Chain, Valves</b></h4>
      </b-col>
    </b-row>

    <b-card-group deck>
      <b-card class="mt-3 br-20 submit-milestone px-4 py-4">
        <template>
          <div>
            <b-row>
              <b-col xl="3" lg="3" sm="12" class="p-0">
                <span class="fz-16 fw-600 text-black">Description</span>
              </b-col>
              <b-col xl="9" lg="9" sm="12" class="p-0">
                <span class="fz-16 fw-500 text-muteed">We regularly need Freelance Inspectors based in Jiangsu Province China for occasional Inspection 
                of Mooring Chains, Valves, Forgings, Castings, etc. Candidates must possess a degree in Mechanical Engineering or Metallurgy and hold valid Level NDT Certificates in RT, UT & MT. </span>
              </b-col>
            </b-row>
            <b-row>
              <b-col xl="3" lg="3" sm="12" class="p-0">
                <span class="fz-16 fw-600 text-black">Due Date</span>
              </b-col>
              <b-col xl="9" lg="9" sm="12" class="p-0">
                <span class="fz-16 fw-500 text-muteed">April 16, 2022</span>
              </b-col>
            </b-row>
          </div>
        </template>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white custom-br" class="mt-3 br-20 submit-milestone">
        <template  #header>
          <h4 class="mb-0 fz-24 fw-500 text-black"><b>Payment</b></h4>
        </template>
        <template>
          <div>
            <ul>
              <li class="mb-4 d-flex align-items-center fz-16 fw-500 text-muteed">
                <span class="fz-16 text-black fw-600 w-21 d-block">Status </span> Payment Requested
              </li>
              <li class="mb-4 d-flex align-items-center fz-16 fw-500 text-muteed">
                <span class="fz-16 text-black fw-600 w-21 d-block">Amount in Exrow</span> $50.00 paid from visa ending in 1950 on april 5
              </li>
              <li class="mb-4 d-flex align-items-center fz-16 fw-500 text-muteed">
                <span class="fz-16 text-black fw-600 w-21 d-block">Original Amount</span> $50.00 
              </li>
              <li class="mb-4 d-flex align-items-center fz-16 fw-500 text-muteed">
                <span class="fz-16 text-black fw-600 w-21 d-block">Amount Requested</span> $50.00
              </li>
            </ul>
            <b-button class="btn btn-theme mr-2">Aproove & Pay</b-button>
            <b-button class="btn btn-outline-theme">Request Change</b-button>
          </div>
        </template>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white custom-br" class="mt-3 br-20 submit-milestone">
        <template  #header>
          <h4 class="mb-0 fz-24 fw-500 text-black"><b>Work Submission</b></h4>
        </template>
        <template>
          <div>
            <ul>
              <li class="mb-4 d-flex align-items-center fz-16 fw-500 text-muteed">
                <span class="fz-16 text-black fw-600 w-21 d-block">Submitted </span> 05 Min ago
              </li>
              <li class="mb-4 d-flex align-items-center fz-16 fw-500 text-muteed">
                <span class="fz-16 text-black fw-600 w-21 d-block">Message</span> We regularly need Freelance Inspectors based in Jiangsu Province China for occasional Inspection of Mooring Chains, Valves, Forgings, Castings, etc. Candidates must possess a degree in Mechanical Engineering or Metallurgy and hold valid Level NDT Certificates in RT, UT & MT. 
              </li>
              
            </ul>
          </div>
        </template>
      </b-card>
    </b-card-group>
  </b-container>
</template>
<script>
  export default {
    data() {
      return {
        
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
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fw-600{font-weight:600;}
  .mb-23{margin-bottom:23px;}
  .no-bottom-border{border-bottom:0px!important;}
  .border-top-0{border-top:0px!important;}
  .transaction-wrap .box{background: #FFFFFF;border: 1px solid #CECECE;border-radius: 6px;padding:15px;}
  .transaction-wrap .box h4{font-family: 'Source Sans Pro';font-style: normal;font-weight: 700;font-size: 26px;line-height: 40px;text-align: center;text-transform: capitalize;color: #F2613C;}
  .transaction-wrap .box p{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 20px;line-height: 30px;text-align: center;text-transform: capitalize;color: #000000;margin-bottom: 0px;}
  .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
  table th{background-color: #000!important;color:#fff;padding:10px 12px!important;}
  table td{padding:16px 12px!important;}
  table tbody{border:1px solid #0000001f!important;}
  .submit-milestone{border-radius:20px!important;}
  .submit-milestone .input-group input{height: 38px;}
  .submit-milestone .card-body{border-radius:0 0 20px 20px;}
  .submit-milestone .card-header{border-radius:20px 20px 0 0!important;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  .fz-30{font-size:26px!important;}
  .w-21{width:21rem;}
</style>
