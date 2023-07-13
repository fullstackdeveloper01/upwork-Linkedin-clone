<template>
  <div>
    <h5 class="text-black fz-24 fw-500"><b>Get Paid</b></h5>
    <b-card-group deck>
      <b-card class="mb-3">
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <h5 class="text-black fz-22 fw-600 mb-5">Balance</h5>
              <div class="pb-0 d-md-flex align-items-center">
                <span class="fz-18 fw-500 text-muted">Your balance is <b class="text-black">$0.00</b></span>
                <div class="ml-auto">
                  <b-button type="submit" class="mr-2 btn btn-theme">Get Paid Now</b-button>
                </div>
              </div>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card class="mb-3">
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <span v-if="paymentScheduleData!=''">
                <div class="pb-0 d-md-flex align-items-center mb-5">
                  <span class="fz-22 fw-600 text-black">Payment Details</span>
                  <div class="ml-auto">
                    <b-button type="submit" class="mr-2 btn btn-outline-theme" v-b-modal.schedule-paid-modal >Edit Schedule</b-button>
                  </div>
                </div>
                <h5 class="fz-16 fw-600 text-black mb-1">{{paymentScheduleData.preferred_payment_schedule}} to wire transfer (USD) - Account is {{getPaidList[0].account.replace(/.(?=.{4})/g, 'x')}}.</h5>
                <h5 class="fz-14 fw-500 text-muted mb-2">Only when balance is {{paymentScheduleData.minimum_balance_withdraw}}.</h5>
                <h5 class="fz-16 fw-500 text-muted mb-0">Active {{getPaidList[0].created_at}}</h5>
                <hr>
              </span>
              <div class="pb-0 d-md-flex align-items-center mb-5">
                <span class="fz-22 fw-600 text-black">Payment Methods</span>
                <div class="ml-auto">
                  <b-button type="submit" class="mr-2 btn btn-outline-theme" v-b-modal.get-paid-modal >Add Method</b-button>
                </div>
              </div>
              <span v-if="paymentScheduleData!=''">
                <h5 class="fz-16 fw-600 text-black mb-2">Preffered</h5>
                <hr>
                <div class="pb-0 d-md-flex align-items-center mb-5" v-for="(acc, index) in getPaidList" :key="index">
                  <div class="d-md-flex align-items-center">
                    <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/university.png" class="img-fluid w-20">
                    <div class="ml-2">
                      <span class="fz-16 fw-600 text-black">Wire Transfer (USD) - Account is {{acc.account.replace(/.(?=.{4})/g, 'x')}}</span><br>
                      <span class="fz-16 fw-600 text-muted">Active {{acc.created_at}}</span>
                    </div>
                  </div>
                  <div class="ml-auto">
                    <b-dropdown size="lg" right  variant="link" toggle-class="text-decoration-none" no-caret>
                      <template #button-content>
                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                        </svg>
                      </template>
                      <b-dropdown-item href="javascript:void(0);" @click="$router.push({name:'updateWiretransfer',path:'/update-wire-transfer/',params: {aid:encodedid(acc.get_paid_id)}}).href">
                        <div class="d-flex align-items-center">
                          Edit
                        </div>
                      </b-dropdown-item>
                      
                      <b-dropdown-item href="javascript:void(0);" v-b-modal.confirm-modal @click="removeAccountId = acc.get_paid_id">
                        <div class="d-flex align-items-center">
                          Remove
                        </div>
                      </b-dropdown-item>
                      
                    </b-dropdown>
                  </div>
                </div>
              </span>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
    <!-- model for add payment method -->
    <b-modal centered no-close-on-backdrop hide-footer id="get-paid-modal" size="lg" title="Add a payment method">
      <div class="text-left add-payment-method">
        <h5 class="fz-20 fw-600 text-black border-bottom pb-2">Recommended for india</h5>
        <div class="d-flex align-items-center">
          <div class="svg-holder mr-4">
            <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/direct-globe.png" class="img-fluid">
          </div>
          <div>
            <h6 class="text-black">Direct to Local Bank (INR)</h6>
            <ul class="custom-padding mb-0">
              <li class="text-muteed">$0.99 USD per withdrawal</li>
              <li class="text-muteed">Deposit to your local bank account in INR</li>
            </ul>
          </div>
          
          <div class="ml-auto">
              <b-button variant="success" size="sm">Comming Soon</b-button>
          </div>
        </div>
        <h5 class="fz-20 fw-600 text-black border-bottom pb-2">Also Available</h5>
        <div class="d-flex align-items-center border-bottom">
          <div class="svg-holder mr-4">
            <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/paypal.png" class="img-fluid">
          </div>
          <div>
            <h6 class="text-black">Direct to Local Bank (INR)</h6>
            <ul class="custom-padding mb-0">
              <li class="text-muteed">$0.99 USD per withdrawal</li>
              <li class="text-muteed">Deposit to your local bank account in INR</li>
            </ul>
          </div>
          
          <div class="ml-auto">
              <b-button variant="success" size="sm">Comming Soon</b-button>
          </div>
        </div> 

        <div class="d-flex align-items-center border-bottom">
          <div class="svg-holder mr-4">
            <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/university.png" class="img-fluid">
          </div>
          <div>
            <h6 class="text-black">Wire Transfer (USD)</h6>
            <ul class="custom-padding mb-0">
              <li class="text-muteed">$0.99 USD per withdrawal</li>
              <li class="text-muteed">Deposit to your local bank account in INR</li>
            </ul>
          </div>
          
          <div class="ml-auto">
              <b-button variant="success" size="sm"  @click="$router.push({name:'addWiretransfer',path:'/add-wire-transfer'})" >Set Up</b-button>
          </div>
        </div>   

        <div class="d-flex align-items-center">
          <div class="svg-holder mr-4">
            <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/university.png" class="img-fluid">
          </div>
          <div>
            <h6 class="text-black">Direct to U.S. Bank (USD)</h6>
            <ul class="custom-padding mb-0">
              <li class="text-muteed">$0.99 USD per withdrawal</li>
              <li class="text-muteed">Deposit to your local bank account in INR</li>
            </ul>
          </div>
          
          <div class="ml-auto">
              <b-button variant="success" size="sm">Comming Soon</b-button>
          </div>
        </div> 
      </div>
    </b-modal>

    <!-- model for Edit Schedule payment method -->
    <b-modal centered no-close-on-backdrop hide-footer id="schedule-paid-modal" size="lg" title="Edit payment schedule">
      <template #header>
          <div>
          <h4 class="mb-0 text-black fz-24 fw-500">
              <b>Set up payment schedule</b>
          </h4>
          </div>
      </template>
      <b-row>
          <b-col cols="12" class="px-4 py-4">
          <section class="card-section">
              <h5 class="fz-20 fw-600">Payment Method</h5>
              <!-- <h5 class="fz-16 fw-600 mb-0">{{swiftData.bank.name}} account number is {{bankDetails.account}} (USD)</h5> -->
              <p class="fz-14 fw-500 text-muted mb-4">Earnings will be sent here according to the following schedule</p>
              
              <h5 class="fz-16 fw-600 mb-0">Withdraw Fee</h5>
              <p class="fz-14 fw-500 text-muted mb-4">$30.00 per payment</p>

              <h5 class="fz-16 fw-600 mb-0">Preferred Payment Schedule</h5>
              <p class="fz-14 fw-500 text-muted mb-4">Earnings will be released upon your request</p>

              <b-form-radio
                  v-model="bankDetailsSetting.preferred_payment_schedule"
                  name="schedule"
                  :value="schedule.value"
                  class="d-flex align-items-center fz-14"
                  v-for="(schedule, index) in paymentSchedule"
                  :key="index"
                  @input="$v.bankDetailsSetting.preferred_payment_schedule.$touch()"
                  @blur="$v.bankDetailsSetting.preferred_payment_schedule.$touch()"
              >
              {{schedule.value}}</b-form-radio>
              <p class="text-danger" v-if="bankDetailsscheduleErrors[0]">{{bankDetailsscheduleErrors[0]}}</p>



              <b-form-group class="mb-4">
              <label class="fz-16 fw-600 mb-0">Only when balance is</label><br>
              <b-form-select
                  v-model="bankDetailsSetting.minimum_balance_withdraw"
                  :options="balanceWithdraw"
                  value-field="value"
                  text-field="value"
                  @input="$v.bankDetailsSetting.minimum_balance_withdraw.$touch()"
                  @blur="$v.bankDetailsSetting.minimum_balance_withdraw.$touch()"
              ></b-form-select><br>
              <small>Minimize withdrawal fees by choosing larger amounts.</small>
              <p class="text-danger" v-if="bankDetailsminimumErrors[0]">{{bankDetailsminimumErrors[0]}}</p>

              </b-form-group>

              <b-form-group class="mb-4">
              <label class="fz-16 fw-600 mb-0">Maintain A reserve balance</label><br>
              <b-form-select
                  v-model="bankDetailsSetting.maintain_balance"
                  :options="maintainBalance"
                  value-field="value"
                  text-field="value"
                  @input="$v.bankDetailsSetting.maintain_balance.$touch()"
                  @blur="$v.bankDetailsSetting.maintain_balance.$touch()"
              ></b-form-select>
              <p class="text-danger" v-if="bankDetailsmaintainErrors[0]">{{bankDetailsmaintainErrors[0]}}</p>

              </b-form-group>

              <!-- <h5 class="fz-16 fw-600 mb-0">Next Payment <small>(based on your schedule)</small></h5>
              <p class="fz-14 fw-500 text-muted mb-4">December 7, 2022</p> -->

              <div class="d-md-flex align-items-center">
              <!-- <b-button class="btn-outline-theme">Back</b-button> -->
              <div class="ml-auto">
                  <a href="javascript:void(0);" class="text-theme mr-4" @click="$bvModal.hide('schedule-paid-modal')">Close</a>
                  <b-button class="btn-theme" @click="updateSchedule">Save</b-button>
              </div>
              </div>
          </section>
          </b-col>
      </b-row>
    </b-modal>

    <!-- model for confirm Remove Account -->
    <b-modal id="confirm-modal" title="Remove Account" centered hide-footer size="md" no-close-on-backdrop> 
        <template>
        <div class="p-5 text-center m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            <h5 class="mt-4">Are you sure, Want to Remove this Account?</h5>
        </div>
        <hr>
        <div>
            <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('confirm-modal')">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="removeAccount(removeAccountId)">Confirm</b-button>
            </div>
        </div>
        </template>
    </b-modal>
  </div>
</template>
  
<script>
   
  import { validationMixin } from 'vuelidate'; 
  import { required } from 'vuelidate/lib/validators'

  import { mapActions } from "vuex";
  export default {
    mixins: [validationMixin],
    validations: {
      bankDetailsSetting:{
          preferred_payment_schedule:{required},
          minimum_balance_withdraw:{required},
          maintain_balance:{required},
      }
    },
    data() {
      return { 
        paymentSchedule:[
            {'value':'Quarterly'},
            {'value':'Monthly (last Wednesday of each month)'},
            {'value':'Twice per month (1st and 3rd Wednesday of each month)'},
            {'value':'Weekly (every Wednesday)'},
        ],
        balanceWithdraw:[
            {'value':'$100.00 or more'},
            {'value':'$200.00 or more'},
            {'value':'$300.00 or more'},
            {'value':'$400.00 or more'},
            {'value':'$500.00 or more'},
            {'value':'$600.00 or more'},
            {'value':'$700.00 or more'},
            {'value':'$800.00 or more'},
            {'value':'$900.00 or more'},
            {'value':'$1000.00 or more'}
        ],
        maintainBalance:[
            {'value':'$0.00'},
            {'value':'$5.00'},
            {'value':'$10.00'},
            {'value':'$15.00'},
        ],
        bankDetailsSetting:{
            preferred_payment_schedule:'',
            minimum_balance_withdraw:'',
            maintain_balance:'',
            get_paid_setting_id:'',
        },
        CountryData:[],
        paymentScheduleData:'',
        getPaidList:[],
        removeAccountId:'',
      };
    },
    computed: { 
      bankDetailsscheduleErrors() {
        const errors = [];
        if (!this.$v.bankDetailsSetting.preferred_payment_schedule.$dirty) return errors;
        !this.$v.bankDetailsSetting.preferred_payment_schedule.required && errors.push("Payment Schedule is required");
        return errors;
      },

      bankDetailsminimumErrors() {
        const errors = [];
        if (!this.$v.bankDetailsSetting.minimum_balance_withdraw.$dirty) return errors;
        !this.$v.bankDetailsSetting.minimum_balance_withdraw.required && errors.push("Balance Withdraw is required");
        return errors;
      },

      bankDetailsmaintainErrors() {
        const errors = [];
        if (!this.$v.bankDetailsSetting.maintain_balance.$dirty) return errors;
        !this.$v.bankDetailsSetting.maintain_balance.required && errors.push("Maintain Balance is required");
        return errors;
      },
    }, 
    mounted() {
      this.getCountry();
      this.getPaidSettings();
      this.getPaidlist();
    },
    methods: {
      
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for to update schedule data
      async updateSchedule(){
        this.$v.$touch();
        if(!this.$v.bankDetailsSetting.$invalid){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "updategetPaidsettings",
              params: this.bankDetailsSetting,
          });  
          if (res) {
              this.$bvModal.hide('schedule-paid-modal')
              this.getPaidSettings();
              this.$toastr.s('Payment Schedule Updated')
          }
        }
      },
      // this fun is for to remove billing details
      async removeAccount(_i){
          var removeaccount = await this.genericAPIPOSTRequest({
              requestUrl: "removeGetpaid",
              params: {
                  'get_paid_id':_i
              },
          });
          // consaole.log('response',removeaccount)
          if (removeaccount) {
              this.$bvModal.hide('confirm-modal')
              this.getPaidSettings();
              this.getPaidlist();
              this.$toastr.s('Account removed Successfully')
          }
      },
      // this fun is for to get Country
      async getCountry(){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getCountryList",
              params: {},
          });  
          this.CountryData = res;
      },
      // this fun is for to get paid setttings
      async getPaidSettings(){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getPaidsettings",
              params: {},
          });  
          this.paymentScheduleData = res;
          this.bankDetailsSetting.preferred_payment_schedule=res.preferred_payment_schedule;
          this.bankDetailsSetting.minimum_balance_withdraw=res.minimum_balance_withdraw;
          this.bankDetailsSetting.maintain_balance=res.maintain_balance;
          this.bankDetailsSetting.get_paid_setting_id=res.get_paid_setting_id;
          
      },
      // this fun is for to get paid setttings
      async getPaidlist(){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getPaidList",
              params: {},
          });  
          this.getPaidList = res;
      },
    }
  };
</script>
  <style scoped>
.add-payment-method ul{margin-left:-32px;}
.add-payment-method .svg-holder{width: 150px;height: 150px;}
.add-payment-method .svg-holder img{width: 10%;}
  </style>