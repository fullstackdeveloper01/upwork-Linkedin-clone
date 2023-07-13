<template>
   <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <h4 class="mb-0 text-black fz-24 fw-500">
            <b>Billing & Payments</b>
          </h4>
        </template>
          <b-row>
              <b-col xl="12" lg="12" sm="12" id="listDiv" style="display:none;">
                  <div class="left-card p-3">
                  <div class="d-flex align-items-center">
                      <div>
                      <h4 class="fz-22 fw-600 text-black mb-0">Select a billing method</h4>
                      </div>
                      <div class="ml-auto">
                      <b-button class="btn-theme" @click="addBillingDiv">Add a new billing method</b-button>
                      </div>
                  </div>
                  <h6 class="mb-3 mt-2 fw-600 border-bottom pb-3 text-muted">This will be your primary billing method acress all contracts, account activity and subscriptions.</h6>
                  <div class="pay-method-wrap" v-if="savedBillings.length > 0">
                      <b-form-group class="mb-0" v-for="(bill,index) in savedBillings" :key="index">
                        <div class="d-md-flex align-items-center">
                            <b-form-radio 
                                name="radio"
                                :value="bill.pay_method_id"
                                @change="checkoutdataFun(bill)"
                            >
                                <p class="fz-14 text-muted mb-0" @click="checkoutdataFun(bill)">{{bill.card.brand+', '+bill.card.funding+' '+bill.type+', '+bill.card.last4}}</p>    
                            </b-form-radio>
                            <div class="ml-auto">
                                <a href="javascript:void(0);" v-b-modal.confirm-modal @click="removeBillId = bill.id">
                                    <i class="fa fa-trash text-danger"></i>
                                </a>
                            </div>
                        </div>
                      </b-form-group>
                  </div>
                  </div>
              </b-col>
              <b-col xl="12" lg="12" sm="12" id="addList" >
                  <div class="left-card p-3 border-right">
                      <div class="d-flex align-items-center">
                          <div>
                              <h4 class="mb-0 fw-600">Billing method</h4>
                          </div>
                          <div class="ml-auto">
                              <b-button class="btn-outline-theme" @click="listBillingDiv">Cancel</b-button>
                          </div>
                      </div>
                      <form @submit.prevent="handleForm" class="my-form" id="payment-form">
                          <div class="pay-method-wrap mt-4">
                              <b-form-group class="mb-0">
                                  <b-form-radio
                                      value="card"
                                      v-model="addBilling.method_type"
                                  >
                                      Payment Card
                                  </b-form-radio>
                                  <h6 class="fw-600 text-muted">Visa, Mastercard, American Express, Discover, Diners</h6>
                              </b-form-group>
                              <hr>
                          </div>
                          <b-row>
                              <b-col xl="6" lg="6" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">First Name</label>
                                      <b-form-input v-model="addBilling.first_name" :maxlength="30"  size="sm" placeholder="Enter first name" class="inp-person-first-name custom-select"></b-form-input>
                                      <div class="error" v-if="billing_firstname[0]">{{billing_firstname[0]}}</div>
                                  </b-form-group>
                              </b-col>
                              <b-col xl="6" lg="6" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">Last Name</label>
                                      <b-form-input v-model="addBilling.last_name"  size="sm" placeholder="Enter last name" class="inp-person-last-name custom-select"></b-form-input>
                                      <div class="error" v-if="billing_lastname[0]">{{billing_lastname[0]}}</div>

                                  </b-form-group>
                              </b-col>
                              <b-col xl="12" lg="12" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">Email</label>
                                      <b-form-input v-model="addBilling.email"  size="sm" placeholder="Enter Email" class="inp-person-email custom-select"></b-form-input>
                                      <div class="error" v-if="billing_email[0]">{{billing_email[0]}}</div>

                                  </b-form-group>
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col xl="12" lg="12" sm="12">
                                  <b-form-group class="mb-0" id="card-num">
                                      <label class="text-black fz-16">Card Number</label>
                                      <!-- <b-form-input v-model="addBilling.cardnumber" size="sm" placeholder="Enter card number" class="custom-select"></b-form-input> -->
                                      <div id="card-number"></div>
                                  </b-form-group>
                              </b-col>
                          
                              <b-col xl="6" lg="6" sm="12">
                                  <b-row>
                                      <b-col xl="12" lg="12" sm="12" class="py-0">
                                      <b-form-group class="mb-0">
                                          <label class="text-black fz-16">Expires On</label>
                                          <!-- <b-form-input v-model="addBilling.expire" size="sm" placeholder="Enter Month" class="custom-select"></b-form-input> -->
                                          <div id="card-expiry"></div>
                                      </b-form-group>
                                      </b-col>
                                      <!-- <b-col xl="6" lg="6" sm="12">
                                      <b-form-group class="mb-0 mt-3">
                                          <b-form-input size="sm" placeholder="Enter Year" class="custom-select mt-1"></b-form-input>
                                      </b-form-group>
                                      </b-col> -->
                                  </b-row>
                              </b-col>
                              <b-col xl="6" lg="6" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">Security Code</label>
                                      <!-- <b-form-input size="sm" placeholder="Enter code" class="custom-select"></b-form-input> -->
                                      <div id="card-cvc"></div>
                                  </b-form-group>
                              </b-col>
                              <div id="card-error"></div>
                          </b-row>
                          <b-row>
                              <b-col xl="12" lg="12" sm="12">
                                  <h4 class="mb-0 fw-600 mt-4">Billing Address</h4>
                              </b-col>
                              <b-col xl="6" lg="6" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">Country</label><br>
                                      <b-form-select 
                                          v-model="addBilling.country"
                                          :options="CountryData" 
                                          value-field="country_id"
                                          text-field="country_name"
                                          v-on:change="changecountry($event)"
                                          
                                          class="form-control"></b-form-select>
                                      <div class="error" v-if="billing_country[0]">{{billing_country[0]}}</div>

                                  </b-form-group>
                              </b-col>
                              <b-col xl="6" lg="6" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">State</label><br>
                                      <b-form-select
                                          v-model="addBilling.state"
                                          :options="stateData"
                                          value-field="state_id"
                                          text-field="state_name"
                                          v-on:change="changestate($event)"
                                          
                                          class="form-control"></b-form-select>
                                      <div class="error" v-if="billing_state[0]">{{billing_state[0]}}</div>

                                  </b-form-group>
                              </b-col>
                              <b-col xl="6" lg="6" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">City</label><br>
                                      <b-form-select
                                          v-model="addBilling.city"
                                          :options="cityData"
                                          value-field="city_id"
                                          text-field="city_name"
                                          
                                          class="form-control"></b-form-select>
                                      <div class="error" v-if="billing_city[0]">{{billing_city[0]}}</div>

                                  </b-form-group>
                              </b-col>
                              <b-col xl="6" lg="6" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">Postal Code</label><br>
                                      <b-form-input  maxlength="10" v-model="addBilling.zipcode"  size="sm" placeholder="Enter postal code" class="custom-select inp-person-zipcode"></b-form-input>
                                      <div class="error" v-if="billing_zipcode[0]">{{billing_zipcode[0]}}</div>

                                  </b-form-group>
                              </b-col>
                              <b-col xl="12" lg="12" sm="12">
                                  <b-form-group class="mb-0">
                                      <label class="text-black fz-16">Address</label><br>
                                      <b-form-input v-model="addBilling.address1" maxlength="250"  size="sm" placeholder="Enter address1" class="custom-select inp-person-line1"></b-form-input>
                                      <b-form-input v-model="addBilling.address2" maxlength="250"  size="sm" placeholder="Enter address2" class="custom-select inp-person-line2"></b-form-input>
                                      <div class="error" v-if="billing_address1[0]">{{billing_address1[0]}}</div>
                                  </b-form-group>
                              </b-col>
                              
                              <b-col xl="12" lg="12" sm="12" class="text-right">
                                  <b-button type="submit" class="btn-theme w-15 mb-2">Save</b-button>
                              </b-col>
                          </b-row>
                      </form>
                  </div>
              </b-col>
              
          </b-row>
        </b-card>

        <!-- model for confirm reject -->
        <b-modal id="confirm-modal" title="Remove Billing" centered hide-footer size="md" no-close-on-backdrop> 
            <template>
            <div class="p-5 text-center m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                <h5 class="mt-4">Are you sure, Want to Remove this Billing?</h5>
            </div>
            <hr>
            <div>
                <div class="text-right">
                    <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('confirm-modal')">Cancel</a>
                    <b-button type="button" class="btn btn-theme" @click="removeBillingMethod(removeBillId)">Confirm</b-button>
                </div>
            </div>
            </template>
        </b-modal>
    </b-card-group>
</template>
<script src="https://js.stripe.com/v3/"></script> 
<script>
  
  var stripe = Stripe(`pk_test_51JdqlfBCeXjCoMqA9kvCfL3NeJ1S3QD3ICvbmB66GwjwIvi9XafbWxFVEZqDUq0YENdHJY4OEhxM0QG5sb2HgRmi00ZPTT890M`);
    var elements = stripe.elements();
    var card;
    var card1;
    var card2;
    // Custom styling can be passed to options when creating an Element.
    var style = {
        base: {
            // Add your base input styles here. For example:
            fontFamily: 'sans-serif',
            lineHeight: '36px',
            fontSize: '14px',
            '::placeholder': {
                color: '#aaa',
            },
            ':-webkit-autofill': {
                color: '#e39f48',
            },
        },
    };
    // elements.on('change', function(event) {
    //     if (event.complete) {
    //         // enable payment button
    //         alert(event.complete)

    //     } else if (event.error) {
    //         // show validation to customer
    //         alert(event.error)
    //     }
    // });
    // elements.on('change', function(event) {
    //     alert('asdas');
    //     var displayError = document.getElementById('card-errors');
    //     if (event.error) {
    //         displayError.textContent = event.error.message;
    //     } else {
    //         displayError.textContent = '';
    //     }
    // });
    import $ from 'jquery';
    import axios from 'axios'
    import { validationMixin } from 'vuelidate'
    import { required , email, helpers } from 'vuelidate/lib/validators'
    import { mapActions} from "vuex";
    const char = helpers.regex('alphaNumAndDot', /^[a-zA-Z\s]*$/);
    export default {
        props:['contractDetails','currentpayment_arr'],
        mixins: [validationMixin],
        validations: {
            addBilling: {
                method_type:{ required },
                first_name:{ required , char },
                last_name:{ required, char },
                email:{ required ,email },
                country:{ required },
                state:{ required },
                city:{ required },
                zipcode:{ required },
                address1:{ required },
            },
        },
        computed:{
            // this fun id for validate for first name
            billing_firstname() {
                const errors = []
                if (!this.$v.addBilling.first_name.$dirty) return errors
                !this.$v.addBilling.first_name.required && errors.push('First Name is required')
                !this.$v.addBilling.first_name.char && errors.push('Only character allowed')
                return errors
            },
            // this fun id for validate for last name
            billing_lastname() {
                const errors = []
                if (!this.$v.addBilling.last_name.$dirty) return errors
                !this.$v.addBilling.last_name.required && errors.push('Last Name is required')
                !this.$v.addBilling.last_name.char && errors.push('Only character allowed')

                return errors
            },
            // this fun id for validate for first name
            billing_email() {
                const errors = []
                if (!this.$v.addBilling.email.$dirty) return errors
                !this.$v.addBilling.email.email && errors.push("Must be valid e-mail");
                !this.$v.addBilling.email.required && errors.push('Email is required')
                return errors
            },
            // this fun id for validate for first name
            billing_country() {
                const errors = []
                if (!this.$v.addBilling.country.$dirty) return errors
                !this.$v.addBilling.country.required && errors.push('Country is required')
                return errors
            },
            // this fun id for validate for first name
            billing_state() {
                const errors = []
                if (!this.$v.addBilling.state.$dirty) return errors
                !this.$v.addBilling.state.required && errors.push('State is required')
                return errors
            },
            // this fun id for validate for first name
            billing_city() {
                const errors = []
                if (!this.$v.addBilling.city.$dirty) return errors
                !this.$v.addBilling.city.required && errors.push('Cityis required')
                return errors
            },
            // this fun id for validate for first name
            billing_zipcode() {
                const errors = []
                if (!this.$v.addBilling.zipcode.$dirty) return errors
                !this.$v.addBilling.zipcode.required && errors.push('Zipcode is required')
                return errors
            },
            // this fun id for validate for first name
            billing_address1() {
                const errors = []
                if (!this.$v.addBilling.address1.$dirty) return errors
                !this.$v.addBilling.address1.required && errors.push('Address is required')
                return errors
            },
            
        },
        data(){
            return{
                cardNumber:'',
                cardExpiry:'',
                cardCvc:'',
                billingForm:true,
                CountryData:[],
                stateData:[],
                cityData:[],
                addBilling:{
                    method_type:'card',
                    first_name:'',
                    last_name:'',
                    email:'',
                    country:'',
                    state:'',
                    city:'',
                    zipcode:'',
                    address1:'',
                    address2:'',
                    payment_method:'',
                },
                savedBillings:[],
                checkoutdata:'',
                removeBillId:'',
            }
        },
        mounted: function () { 
           
            elements._elements = [];
            // Create an instance of the card Element.
            card = elements.create('cardNumber', {style: style});
            // Add an instance of the card Element into the `card-element` <div>.
            card.mount('#card-number');
            // card.mount(this.$refs.card);
            card1 = elements.create('cardExpiry', {style: style});
            // Add an instance of the card Element into the `card-element` <div>.
            card1.mount('#card-expiry');

            card2 = elements.create('cardCvc', {style: style});
            card2.mount('#card-cvc');
            this.getBillings();
            this.listBillingDiv();
            this.getCountry();
          
        },
        methods:{
            // this fun is for to assgin select payment method
            checkoutdataFun(_v){
                this.checkoutdata =_v.id;
            },
            
            // this fun is for to add billing method 
            async handleForm(event) {
                var submtiData=this.addBilling;
                var country_name;
                this.CountryData.filter(data=>{
                    if(data.country_id == this.addBilling.country){
                        country_name=data.sortname
                    }
                })
                var city_name;
                this.cityData.filter(data=>{
                    if(data.city_id == this.addBilling.city){
                        city_name=data.city_name
                    }
                })
                const paymentmethod = await stripe.createPaymentMethod({
                    type: 'card',
                    card: card,
                    billing_details: {
                        name: this.addBilling.first_name+' '+this.addBilling.last_name,
                        email: this.addBilling.email,
                        address: {
                            city:city_name,
                            country:country_name,
                            line1:this.addBilling.address1,
                            line2:this.addBilling.address2,
                            postal_code:this.addBilling.zipcode,
                        }
                    },
                }).then(function(result) {
                    // console.log('result',typeof result.error);
                    // Handle result.error or result.paymentMethod
                    if (typeof result.error != 'undefined' && result.error != '') {
                        $('#card-error').show();
                        document.getElementById('card-error').innerHTML =result.error.message
                    }else{
                        submtiData.payment_method=result.paymentMethod.id;
                        $('#card-error').hide();
                    }
                });
                this.$v.addBilling.$touch();
                if (!this.$v.addBilling.$invalid) {
                    
                    // console.log('paymentmethod',paymentmethod)
                    // submtiData.payment_method=paymentmethod.paymentMethod.id;
                    if (submtiData.payment_method != '') {
                        submtiData.country=country_name;
                        submtiData.city=city_name;
                        // console.log('submitdata',submtiData);
                        // return false;
                        var res = await this.genericAPIPOSTRequest({
                            requestUrl: "createStripecustomrer",
                            params: submtiData,
                        }); 
                        if (res) {
                            this.getBillings();
                            this.$toastr.s('New Billing details Added Successfully');
                            this.listBillingDiv();

                        }else{
                            this.$toastr.e('New Billing details Not Added');
                            return false;
                        }    
                    }else{
                        this.$toastr.e('New Billing details Not Added');
                        return false;
                    }
                }
                 
            },
            // this fun is for to hide show
            addBillingDiv(){
                // listDiv to hide
                document.getElementById("listDiv").style.display = "none";
                // addList to show
                document.getElementById("addList").style.display = "block";

            },
            // this fun is for to hide show
            listBillingDiv(){
                // listDiv to show
                document.getElementById("listDiv").style.display = "block";
                // addList to hide
                document.getElementById("addList").style.display = "none";
            },
            ...mapActions(["genericAPIPOSTRequest"]),
            
            async submitForPay(token) {
                if (this.checkoutdata !='') {
                    this.$emit('hideLoader');
                    // Insert the token ID into the form so it gets submitted to the server
                    var res = await  this.genericAPIPOSTRequest({
                        requestUrl: "paymentSubmit",
                        params: {
                            'amount' : this.currentpayment_arr.amount,
                            'currency' : 'usd',
                            'description' : this.currentpayment_arr.description,
                            'payment_method' : this.checkoutdata,
                            'job_id':this.currentpayment_arr.job_id,
                            'user_id':this.currentpayment_arr.user_id,
                            'job_milestone_id':this.currentpayment_arr.job_milestone_id,
                        },
                    });  
                    if (res) {
                        // this.$toastr.s('payment Successfully done');
                        this.$emit('milseStoneDatarefresh');
                        this.$emit('closeModal');
                        this.$emit('hideLoader');
                        this.$emit('thankYouModal')
                    }else{
                        this.$toastr.e('payment Not done');
                    }
                }else{
                    this.$toastr.e('Please Select Billing Method');
                    return false;
                }
            },
            integrategateway(){
                // Create an instance of the card Element.
                card = elements.create('cardNumber', {style: style});
                // Add an instance of the card Element into the `card-element` <div>.
                card.mount('#card-number');
                // card.mount(this.$refs.card);
                card1 = elements.create('cardExpiry', {style: style});
                // Add an instance of the card Element into the `card-element` <div>.
                card1.mount('#card-expiry');

                card2 = elements.create('cardCvc', {style: style});
                card2.mount('#card-cvc');
            },
            // this fun is for to get Country
            async getCountry(){
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "common/getCountryList",
                    params: {},
                });  
                this.CountryData = res;
                this.addBilling.country = '';
                this.addBilling.state = '';
                this.addBilling.city = '';
            },
            // THIS FUNCTIONIS FOR GET STATE DATA
            async changecountry(event){
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "common/getStateList",
                    params: { country_id: event },
                });  
                if(res.length > 0){
                    this.stateData = res;
                }
                this.cityData =[];
                this.addBilling.state = '';
                this.addBilling.city = '';
            },
            // THIS FUNCTIONIS FOR GET CITY DATA
            async changestate(event){
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "common/getCityList",
                    params: { state_id: event },
                });  
                this.cityData = res;
                this.addBilling.city = '';
            },
            //this fun is for to get billing methods
            async getBillings(){
                var savebilling = await this.genericAPIPOSTRequest({
                    requestUrl: "getBillingMethod",
                    params: {},
                });
                if (savebilling.length>0) {
                    // console.log('savebilling',savebilling)
                    this.savedBillings = savebilling;
                }
            },
            // this fun is for to remove billing details
            async removeBillingMethod(_i){
                this.$emit('hideLoader');
                var removebilling = await this.genericAPIPOSTRequest({
                    requestUrl: "removeBillingMethod",
                    params: {
                        'payment_id':_i
                    },
                });
                // consaole.log('response',removebilling)
                if (removebilling) {
                    this.$bvModal.hide('confirm-modal')
                    this.getBillings();
                    this.$toastr.s('Billing details removed Successfully')
                }
                this.$emit('hideLoader');
            },
        }
    };
</script>
<style>
  
  #bonus-modal .input-group .form-control{height:40px;}
    #bonus-modal .input-group-text{padding: 7px 12px;border-radius: 0.25rem 0 0 0.25rem;}
    
    #payment-form .StripeElement { 
        font-size: 15px!important;
        padding: 0px 12px!important;
        background: #FFFFFF;
        border: 1px solid #CECECE!important;
        border-radius:6px;
    }

    #payment-form .StripeElement:focus{box-shadow:0 0 0 0.25rem rgb(13 110 253 / 25%);}
    #payment-form .StripeElement iframe {height: 38px!important;} 
    #payment-form .ElementsApp input {    line-height: 45px!important;height: 64px!important;}
    #payment-modal .modal-body{padding:0px;}
    #payment-modal .img-wrapper{width:27%!important;height:75px!important;border-radius:50%;padding:5px;}
    #payment-modal .img-wrapper img{width:100%;border-radius:50%;}
    #payment-modal .pay-method-wrap .custom-control {margin-bottom:0px;} 
    .pay-method-wrap .custom-control{margin-bottom:0px;}
    #payment-modal .scroll { 
        /* min-height: 205px; */
        overflow-y: auto;overflow-x: hidden; max-height: 217px;}
    #payment-modal .custom-control-label:after, .custom-control-label:before{top:0.1rem!important;}
    .custom-radio .custom-control-input:checked~.custom-control-label::before{top: 0.3rem!important;}
</style> 