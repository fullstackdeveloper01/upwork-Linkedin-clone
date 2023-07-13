<template>
  <b-container>
    <b-row class="mt-100 transaction-wrap">
      <b-col cols="12">
        <h4 class="mb-5 text-theme fw-600">Transaction History</h4>
      </b-col>
      <b-col lg="4" md="12">
        <div class="box text-center">
          <h4>$6000</h4>
          <p>Upcoming payments</p>
        </div>
      </b-col>
      <b-col lg="4" md="12">
        <div class="box text-center">
          <h4>$6000</h4>
          <p>Upcoming payments</p>
        </div>
      </b-col>
      <b-col lg="4" md="12">
        <div class="box text-center">
          <h4>$6000</h4>
          <p>Upcoming payments</p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col cols="12">
        <div class="theme-bg-box">
          <b-row>
            <b-col cols="3" class="pt-0">
              <b-form-group
                id="fieldset-1"
                label-for="input-1"
                valid-feedback="Thank you!"
                :invalid-feedback="invalidFeedback"
                :state="state"
                class="fz-14 fw-600"
                placeholder="DD - MM - YYYY"
              >
                <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col cols="12">
        <template>
          <div>
            <b-form-select v-model="selected" :options="transaction" class="mr-2"></b-form-select>
            <b-form-select v-model="selected" :options="freelancer" size="sm" class="mt-3 mr-2"></b-form-select>
            <b-button class="btn btn-theme">Go</b-button>
          </div>
        </template>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col cols="12">
        <template>
          <div>
            <b-table striped hover :items="items"></b-table>
          </div>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  export default {
    data() {
      return {
        selected: null,
        transaction: [
          { value: null, text: 'All Transaction' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        freelancer: [
          { value: null, text: 'All Freelancer' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        items: [
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' },
          { Date: '26-Jun-2017', Type: 'Fixed Price', Description: 'Invoice for manual data processing : milestone 1 manual data processing', Freelancer: 'John Doe', Amount: '($12.00)', Balance: '$0.00', RefId: '139358358' }
        ]
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
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  .fz-30{font-size:26px!important;}
</style>
