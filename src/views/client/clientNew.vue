<template>
  <div>
    <div class="container">
      <b-row class="mt-100 mb-50 client-wrapper">
        <b-col cols="12">
          <div class="fxt-bg-color">
            <div class="fxt-content">
              <div class="fxt-form">
                <template>
                  <div>
                    <b-card-group deck>
                      <b-card title-class="text-theme font-14" footer-tag="footer">
                        <b-row>
                          <b-col xl="4" lg="4" sm="12" class="p-0">
                            <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://qapin_mvp5.manageprojects.in/assets/img/union-white.png);
                            background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;height: auto;border-radius: 20px 0 0 20px;height:76vh;">
                              <div class="text w-100 text-center">
                                <div class="step-left-1 ">
                                  <h1 class="text-white mb-0">Create Client Account</h1>
                                  <p class="fz-18 fw-500 text-white">Hire, manage and pay as a different company. Each client company has its own freelancers, payment methods and reports.</p>
                                </div>
                              </div>
                            </div>
                          </b-col>
                          <b-col xl="8" lg="8" sm="12" class="p-0 pos-rel">
                            <div class="py-4 px-4">
                              <div class="content-right-wrap right-side-c">
                                <b-form @submit.prevent="updateUserProfile">
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Client First Name" label-for="client-first-name">
                                        <b-form-input 
                                          id="client-name" 
                                          type="text"
                                          v-model="adduser.first_name"
                                          placeholder="Enter name"  
                                          :error-messages="firstName"
                                          @input="$v.adduser.first_name.$touch()"
                                          @blur="$v.adduser.first_name.$touch()"
                                          ></b-form-input>
                                      </b-form-group>
                                      <span class="text-danger fz-12" v-if="firstName[0]">{{firstName[0]}}</span>
                                    </b-col>
                                  </b-row>
                                  <!-- <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Client last Name" label-for="client-last-name">
                                        <b-form-input 
                                          id="client-name" 
                                          type="text"
                                          v-model="adduser.last_name"
                                          placeholder="Enter name" 
                                          :error-messages="lastName"
                                          @input="$v.adduser.last_name.$touch()"
                                          @blur="$v.adduser.last_name.$touch()"
                                        ></b-form-input>
                                        
                                      </b-form-group>
                                      <span class="text-danger fz-12" v-if="lastName[0]">{{lastName[0]}}</span>
                                    </b-col>
                                  </b-row> -->
                                    
                                  <!-- <b-row>
                                    <h5 class="fz-16 fw-600 text-black">Location</h5>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Country" label-for="country">
                                        <b-form-select id="country" 
                                        :options="country"
                                         value-field="country_id" 
                                         text-field="country_name" 
                                         value="Select an option" 
                                         class="w-100"   
                                         v-on:change="countryChange"
                                         v-model="adduser.country_id"
                                        :error-messages="countryId"
                                        @input="$v.adduser.country_id.$touch()"
                                        @blur="$v.adduser.country_id.$touch()"
                                         ></b-form-select>
                                      </b-form-group>
                                      <span class="text-danger fz-12" v-if="countryId[0]">{{countryId[0]}}</span>
                                    </b-col>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="State" label-for="state">
                                        <b-form-select id="state" 
                                        :options="state" 
                                        value-field="state_id" 
                                        text-field="state_name" 
                                        value="Select an option" 
                                        class="w-100" 
                                       
                                        v-on:change="stateChange"
                                        v-model="adduser.state_id"
                                        :error-messages="stateId"
                                        @input="$v.adduser.state_id.$touch()"
                                        @blur="$v.adduser.state_id.$touch()"
                                        ></b-form-select>
                                      </b-form-group>
                                      <span class="text-danger fz-12" v-if="stateId[0]">{{stateId[0]}}</span>
                                    </b-col>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="City" label-for="city">
                                        <b-form-select id="city"
                                         :options="city" 
                                         value-field="city_id" 
                                         text-field="city_name" 
                                         value="Select an option" 
                                         class="w-100"
                                          v-model="adduser.city_id"
                                        :error-messages="cityId"
                                        @input="$v.adduser.city_id.$touch()"
                                        @blur="$v.adduser.city_id.$touch()"
                                          ></b-form-select>
                                      </b-form-group>
                                      <span class="text-danger fz-12" v-if="cityId[0]">{{cityId[0]}}</span>
                                    </b-col>
                                  </b-row> -->
                                  <div class="text-right py-4 btn-wrap">
                                    <button
                                      type="submit"
                                      class="btn btn-outline-theme mr-2"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      class="btn btn-theme"
                                    >
                                      Create Client Account
                                    </button>
                                  </div>
                                </b-form>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-card-group> 
                  </div>
                </template>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>

  import { validationMixin } from 'vuelidate'
  import { required, alpha,maxLength } from 'vuelidate/lib/validators'
  import { mapActions } from "vuex";
  export default {
    mixins: [validationMixin],
    validations: { 
        adduser: {
            first_name:{ required, alpha,maxLength: maxLength(30)  },
            // last_name:{ required, alpha,maxLength: maxLength(30) }, 
            // country_id: { required },
            // state_id: { required },
            // city_id: { required } 
        }, 
    },
    data() {
      return {
        existing: [],
        skills: [],
        country: [],
        state: [],
        city: [],
        adduser:{
          first_name: '', 
          // last_name: '', 
          // country_id: '',
          // state_id: '',
          // city_id: ''
        },
      }
    },
    computed: {
      firstName() {
        const errors = []
        if (!this.$v.adduser.first_name.$dirty) return errors 
        !this.$v.adduser.first_name.required && errors.push('First name is required')
        !this.$v.adduser.first_name.alpha && errors.push('Only character is allow')
        !this.$v.adduser.first_name.maxLength && errors.push("Too long. Use at least 30 characters or less");
        return errors
      },
       lastName() {
        const errors = []
        if (!this.$v.adduser.last_name.$dirty) return errors 
        !this.$v.adduser.last_name.required && errors.push('First name is required')
        !this.$v.adduser.last_name.alpha && errors.push('Only character is allow')
        !this.$v.adduser.first_name.maxLength && errors.push("Too long. Use at least 30 characters or less");
        return errors
      },
       
      cityId() {
        const errors = []
        if (!this.$v.adduser.city_id.$dirty) return errors 
        !this.$v.adduser.city_id.required && errors.push('City is required') 
        return errors
      }, 
      stateId() {
        const errors = []
        if (!this.$v.adduser.state_id.$dirty) return errors 
        !this.$v.adduser.state_id.required && errors.push('State is required') 
        return errors
      }, 
      countryId() {
        const errors = []
        if (!this.$v.adduser.country_id.$dirty) return errors 
        !this.$v.adduser.country_id.required && errors.push('Country is required') 
        return errors
      }, 
      
       
    },
   methods:{
    ...mapActions(["genericAPIPOSTRequest"]),
    // this fun is for to check user account already created 
    async checkuserList(){
      var res = await this.genericAPIPOSTRequest({
        requestUrl: "company/getCompanyCount",
        params: {data:this.getLoginUserIdRequest()},
      });
      if(res.user!='' && res.user != null){
        window.history.back();
      }
    },
    // async getRole(){
    //   var res =  await this.genericAPIPOSTRequest({
    //           requestUrl: "common/getQpRoleMasterList",
    //       });
    //   this.skills = res;
    // },
    // async getcountry(){
    //   var res =  await this.genericAPIPOSTRequest({
    //           requestUrl: "common/getCountryList",
    //       });
    //   this.country = res;
    // },
    // // THIS FUNCTIONIS FOR GET STATE DATA
    // async  countryChange(event){
    //     var res =  await this.genericAPIPOSTRequest({
    //           requestUrl: "common/getStateList",
    //           params: { country_id: event },
    //       });
    //     this.state = res;
    //   },
    //   // THIS FUNCTIONIS FOR GET CITY DATA
    // async  stateChange(event){
    //     var res =  await this.genericAPIPOSTRequest({
    //           requestUrl: "common/getCityList",
    //           params: { state_id: event },
    //       });
    //     this.city = res;
    //     console.log(this.city);
    //   },
      async  updateUserProfile(){
        this.$v.adduser.$touch()
        var data = {
              "first_name"                  : this.adduser.first_name,
              "last_name"                   : this.adduser.last_name,
              "country_id"                  : this.adduser.country_id,
							"state_id"                    : this.adduser.state_id,
							"city_id"                     : this.adduser.city_id,
              "quality_professional_flag"   :'N',
              "addNew"                      : 'addNew'

            }
        if (!this.$v.adduser.$invalid) {      
          var res =  await this.genericAPIPOSTRequest({
              requestUrl: "user/addclient",
              params:data
          });
          // console.log('res',res);
          if(res){
            window.scrollTo(0, 0);
            // localStorage.setItem(
            //   "token",
            //   "Bearer " + res.token
            // );
            this.$store.dispatch("accountType", 'client'); 
            localStorage.setItem("accountType","client"); 
            this.$store.dispatch("currentUserData", res);

            // this.getCompanyCount();
            this.switchaccount(2,res.uuid)
            // window.location.href = "client/dashboard";
          }else{
            return false;
          }
        }  
      },

      async getCompanyCount(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "company/getCompanyCount",
            params: {data:this.getLoginUserIdRequest()},
        });  
        this.$store.dispatch("listAccount", res); 
      },

      async switchaccount(accountType,uuid){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "user/switchAccount",
            params: {account:accountType,'uuid':uuid,data:this.getLoginUserIdRequest()},
        });
        // console.log('response',res)
        localStorage.setItem(
          "token",
          "Bearer " + res.token
        );
        localStorage.setItem(
          "loginUserData",
          JSON.stringify(res)
        );
        this.$store.commit("setcurrentUserData", res);
        setTimeout(() => {
          // this.$router.push("client/dashboard")
          window.location.href = "client/dashboard";
        }, 3000);
      },
      

   } 
    ,
    mounted(){
      window.scrollTo(0, 0);
      this.checkuserList();
      // this.getRole();
      // this.getcountry();
    }
  }
  </script>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
    .custom-control-label{background-color:#ffffff;}
    .existing-job .custom-select{width:100%;}
    .reuse-job .custom-select{width:100%;}
    .create-job input[type=radio]{position: absolute;opacity: 0;}
    .create-job .custom-radio{display:block!important;text-align:center;height: 100%;}
    .create-job input[type=radio] ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 45px 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;width:100%;}
    .create-job input ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;
    }
    .create-job input ~ label:before {position: absolute;display: block;top: 15px;right: 15px;content: '';width: 2em;background: transparent;border-radius: 50%;height: 2em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .create-job input:checked ~ label {color: #777;border: 1.5px solid #f2613d;}
    .create-job .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;}
    .create-job .custom-radio{margin-bottom:10px;}
    .create-job .custom-control-label{display:block!important;}

    .budget-wrapper input[type=radio]{position: absolute;opacity: 0;}
    .budget-wrapper .custom-radio{display:flex!important;text-align:center;height: 100%;}
    .budget-wrapper input[type=radio] ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 45px 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;width:100%;}
    .budget-wrapper input ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;
    }
    .budget-wrapper input ~ label:before {position: absolute;display: block;top: 15px;right: 15px;content: '';width: 2em;background: transparent;border-radius: 50%;height: 2em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .budget-wrapper input:checked ~ label {color: #777;border: 1.5px solid #f2613d;}
    .budget-wrapper .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;}
    .budget-wrapper .custom-radio{margin-bottom:10px;}
    .budget-wrapper .input-group-text {height: 48px;border-radius: 0.25rem 0 0 0.25rem;}
    .budget-wrapper label{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;color: #000000;}

    input[type=radio] {position: absolute;opacity: 0;}
    .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;}
    .custom-radio{margin-bottom:10px;}
    input ~ label:before {display: block;content: '';width: 1.5em;background: transparent;border-radius: 50%;height: 1.5em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .custom-control-label{display: flex;align-items: center;cursor:pointer;}
    input ~ label:before{margin-right:10px;}
    /* .right-side{overflow-y:hidden!important;max-height: 700px!important;min-height: 700px!important;} */
    .right-side-c{    overflow-y: hidden!important;
    max-height: 350px!important;
    min-height: 343px!important;}
  </style>
