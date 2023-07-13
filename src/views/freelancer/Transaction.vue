<template>
  <b-container>
    <b-row class="mt-100 transaction-wrap">
      <b-col cols="12">
        <h4 class="mb-2 text-theme fz-30 fw-600">Transaction History</h4>
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

    <b-row class="mb-0">
      <b-col cols="12">
        <div class="theme-bg-box">
          <b-row>
            <b-col cols="3" class="pt-0">
              <label>To</label>
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
            <b-col cols="3" class="pt-0">
              <label>From</label>
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
            <b-col cols="3" class="pt-0">
              <b-form-group>
                <button type="button" class="btn btn-theme mt-4">Go</button>
              </b-form-group>
            </b-col>
            <b-col cols="3" class="pt-0">
              <button type="button" class="btn btn-theme-outline d-flex align-items-center mt-4 float-right">
                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15625 4.625V9.625C9.15625 9.97018 8.87643 10.25 8.53125 10.25C8.18607 10.25 7.90625 9.97018 7.90625 9.625V4.625C7.90625 4.27982 8.18607 4 8.53125 4C8.87643 4 9.15625 4.27982 9.15625 4.625ZM11.6562 17.125C11.6562 18.8509 10.2571 20.25 8.53125 20.25C6.80536 20.25 5.40625 18.8509 5.40625 17.125C5.40625 15.3991 6.80536 14 8.53125 14C10.2571 14 11.6562 15.3991 11.6562 17.125ZM9.15625 21.4557V23.375C9.15625 23.7202 8.87643 24 8.53125 24C8.18607 24 7.90625 23.7202 7.90625 23.375V21.4557C5.78607 21.1524 4.15625 19.329 4.15625 17.125C4.15625 14.7088 6.115 12.75 8.53125 12.75C10.9475 12.75 12.9062 14.7088 12.9062 17.125C12.9062 19.329 11.2764 21.1524 9.15625 21.4557ZM20.1562 23.375C20.1562 23.7202 20.4361 24 20.7812 24C21.1264 24 21.4062 23.7202 21.4062 23.375V18.375C21.4062 18.0298 21.1264 17.75 20.7812 17.75C20.4361 17.75 20.1562 18.0298 20.1562 18.375V23.375ZM20.1562 6.54431V4.625C20.1562 4.27982 20.4361 4 20.7812 4C21.1264 4 21.4062 4.27982 21.4062 4.625V6.54431C23.5264 6.84757 25.1562 8.67096 25.1562 10.875C25.1562 13.2912 23.1975 15.25 20.7812 15.25C18.365 15.25 16.4062 13.2912 16.4062 10.875C16.4062 8.67096 18.0361 6.84757 20.1562 6.54431ZM20.7812 7.75C22.5071 7.75 23.9062 9.14911 23.9062 10.875C23.9062 12.6009 22.5071 14 20.7812 14C19.0554 14 17.6562 12.6009 17.6562 10.875C17.6562 9.14911 19.0554 7.75 20.7812 7.75Z" fill="#666666"/>
                </svg>
                <span class="text-theme fz-16 fw-600" @click="filterDropdown()">Filter</span>
              </button>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row v-if="filterTab" class="mt-0">
      <b-col cols="12">
        <div class="dropdown-filter bg-white p-4">
          <b-row>
            <b-col cols="3">
              <b-form-select v-model="selected" :options="transaction" class="mr-2 w-100"></b-form-select>
            </b-col>
            <b-col cols="3">
              <b-form-select v-model="selected" :options="clients" size="sm" class="mr-2 w-100"></b-form-select>
            </b-col>
            <b-col cols="6">
              <b-button class="btn btn-outline-theme mt-2">Apply</b-button>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <!--<b-row class="mb-3">
      <b-col cols="12">
        <template>
          <div>
            <b-form-select v-model="selected" :options="transaction" class="mr-2"></b-form-select>
            <b-form-select v-model="selected" :options="freelancer" size="sm" class="mt-3 mr-2"></b-form-select>
            <b-button class="btn btn-theme">Go</b-button>
          </div>
        </template>
      </b-col>
    </b-row>-->

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
        filterTab:false,
        selected: null,
        transaction: [
          { value: null, text: 'All Transaction' },
          { value: 'a', text: 'All Debits' },
          { value: 'b', text: 'All Credits' },
          { value: 'C', text: 'All Debits' },
          { value: 'd', text: 'Fixed Price'}
        ],
        clients: [
          { value: null, text: 'All Clients' },
          { value: 'a', text: 'United Security Services' },
          { value: 'b', text: 'Ngtax' },
          { value: 'C', text: 'UDL' }
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
    },
    methods: {
      filterDropdown(){
        if(this.filterTab){
          this.filterTab = false;
        }else{
          this.filterTab = true;
        }
      }
    },
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
  .transaction-wrap .box h4{font-family: 'Source Sans Pro';font-style: normal;font-weight: 700!important;font-size: 26px;line-height: 40px;text-align: center;text-transform: capitalize;color: #F2613C;}
  .transaction-wrap .box p{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 20px;line-height: 30px;text-align: center;text-transform: capitalize;color: #000000;margin-bottom: 0px;}
  .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
  table th{background-color: #000!important;color:#fff;padding:10px 12px!important;}
  table td{padding:16px 12px!important;}
  table tbody{border:1px solid #0000001f!important;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  hr {margin: 1rem 0!important;}
  .fz-30{font-size:26px!important;}
  .filter-wrap{border: 0px!important;background-color: transparent;color: #000;font-weight: 600;margin-top: 0px!important;}
  .filter-wrap .custom-select{border: 0px!important;background-color: transparent;color: #000;font-weight: 600;margin-top: 0px!important;border-radius: 3px;
  border: 1px solid #333333;padding-left: 3px;-webkit-appearance: menulist !important; /* override vuetify style */-moze-appearance: menulist !important; /* override vuetify style */appearance: menulist !important; /* override vuetify style */}
  .dropdown-filter{border-top: 1px solid #cecece;padding: 6px 12px;}
  .dropdown-filter .custom-control{margin-bottom:3px;}
  .dropdown-filter .custom-control-label{margin-left:5px;}
</style>
