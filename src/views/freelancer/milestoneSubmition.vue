<template>
  <b-container>
    <b-row class="mt-100 transaction-wrap">
      <b-col cols="12">
        <h4 class="mb-5 fz-30 fw-500 text-black"><b>Milestone Submition</b></h4>
      </b-col>
    </b-row>

    <b-card-group deck>
      <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white custom-br" class="mt-3 br-20 submit-milestone">
        <template  #header>
          <h4 class="mb-0 fz-24 fw-500 text-black"><b>Submit work or request payment for a milestone  </b></h4>
        </template>
        <template>
          <div>
            <b-form @submit="onSubmit">
              <b-row>
                <b-col sm="12" lg="5" class="px-4">
                  <p class="mb-0 fz-16 fw-400 text-black">Use this firm to request approval for the work you’ve completed. Your payment will be released upon approval.</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" lg="5" class="px-4">
                  <label class="fz-18 fw-600 text-black">Milestone</label>
                  <p class="mb-0 fz-16 fw-400 text-muted">For discuss ( Due Feb 24 )</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" lg="5" class="px-4">
                  <label class="fz-18 fw-600 text-black">Description</label>
                  <p class="mb-0 fz-16 fw-400 text-muted">Verification of the website check the files and suitable disk space need avoid damage of files etc</p>
                </b-col>
              <b-row>
              </b-row>
                <b-col sm="12" lg="2" class="px-4">
                  <label class="fz-18 fw-600 text-black">Amount</label>
                  <b-input-group size="lg" prepend="$">
                    <b-form-input></b-form-input>
                  </b-input-group>  
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" lg="6" class="px-4">
                  <label class="fz-18 fw-600 text-black">Message</label>
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
                    rows="5"
                    max-rows="5"
                  ></b-form-textarea>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" lg="6" class="px-4">
                  <button type="submit" class="btn btn-theme mr-2">Submit</button>
                  <a htef="javascript:void(0);">Cancel</a>
                </b-col>
              </b-row>
            </b-form>
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
</style>
