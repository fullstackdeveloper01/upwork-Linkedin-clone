<template>
  <b-container>
    <b-row class="mt-100 expan-team-wrap">
      <b-col xl="12" lg="12" sm="12">
        <h4 class="mb-4 fz-24 fw-500 text-black"><b>Expand Your Team</b></h4>
        <b-card-group deck>
          <b-card title-class="text-theme font-14" class="py-4 px-4 mt-4">
            <b-form>
              <b-row>
                <b-col xl="8" lg="8" sm="12">
                  <b-form-group>
                    <label class="fz-18 fw-600 text-black">Email address</label>
                    <b-form-input type="email" placeholder="Enter Email Address" required></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col xl="4" lg="4" sm="12">
                  <label class="fz-18 fw-600 text-black mt-12"></label>
                  <a href="javascript:void(0);" class="text-theme"> + Import Contact</a>
                </b-col>
              </b-row>
              <b-row>
                <b-col xl="6" lg="6" sm="12">
                  <b-form-group>
                    <label class="fz-18 fw-600 text-black">Assign to a team</label><br>
                    <b-form-select v-model="selected" :options="teamoptions" class="mt-0"></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col xl="8" lg="8" sm="12">
                  <b-form-group>
                    <label class="fz-18 fw-600 text-black">Add personal Message ( Optional )</label>
                    <b-form-textarea id="textarea" placeholder="Write something here..." rows="6" max-rows="6"></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col xl="12" lg="12" sm="12">
                  <b-form-checkbox>
                    Also allow these coworkers to hire and pay with this account
                  </b-form-checkbox>
                </b-col>
              </b-row>
              <b-row>
                <b-col xl="8" lg="8" sm="12">
                  <b-button type="submit" class="btn btn-theme mr-2">Invite</b-button>
                  <a href="javascript:void(0);" class="text-theme">Cancel</a>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-card-group> 
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  export default {
    data() {
      return {
        selected: null,
        teamoptions: [
          { value: null, text: 'All Transaction' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    },
    
  }
</script>

<!-- <style>
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
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fw-600{font-weight:600;}
  .fw-500{font-weight:500;}
  .fw-400{font-weight:400;}
  .mb-23{margin-bottom:23px;}
  .no-bottom-border{border-bottom:0px!important;}
  .border-top-0{border-top:0px!important;}
  .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  .fz-30{font-size:26px!important;}

  .expan-team-wrap .card{border-radius:20px;}  
  .expan-team-wrap .card-header{border-radius:20px 20px 0 0!important;}
  .expan-team-wrap .card-body{border-radius:0 0 20px 20px;    padding: 0 12px;}
  .expan-team-wrap .card-footer{border-radius:0 0 20px 20px!important;background-color:#fff;}
  .custom-control {position: relative;z-index: 1;display: block;min-height: 1.5rem;padding-left: 1.5rem;-webkit-print-color-adjust: exact;color-adjust: exact;display: flex;align-items: normal;}
  .custom-control-input {position: absolute;left: 0;z-index: -1;width: 1rem;height: 1.25rem;opacity: 0;}
  input[type=checkbox]{box-sizing: border-box;padding: 0;}
  .custom-control-label {position: relative;margin-bottom: 0;vertical-align: top;}
  .custom-checkbox .custom-control-label:before {border-radius: 0.25rem;}
  .custom-control-label:before{transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}
  .custom-control-label:after, .custom-control-label:before {position: absolute;top: 0.25rem;left: -1.5rem;display: block;width: 1rem;height: 1rem;content: "";}
  .custom-control-label:before {pointer-events: none;background-color: #fff;border: 1px solid #adb5bd;}
  .custom-control-label:after {background: 50%/50% 50% no-repeat;}
  .custom-control-input:checked~.custom-control-label:before {color: #fff;border-color: #F2613C;background-color: #F2613C;}
  .custom-checkbox .custom-control-input:checked~.custom-control-label:after {content: '\f00c';font-family: fontAwesome;color: #fff;font-weight: 100;font-size: 11px;padding: 0px 3px;}
</style> -->
