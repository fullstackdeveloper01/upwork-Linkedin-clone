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
                            <div class="text-wrap p-4 p-lg-5 mg left-side-section pos-rel" style="background-image: url(http://qapin_mvp5.manageprojects.in/assets/img/union-white.png);
                            background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;height: auto;;border-radius: 20px 0 0 20px;height:83vh;">
                              <div class="text w-100 text-center top-10 left-0">
                                <div class="step-left-1 ">
                                  <h1 class="text-white mb-0">Create Agency Account</h1>
                                  <p class="fz-18 fw-500 text-white">Find jobs and earn money as manager of a team of freelancers.</p>
                                </div>
                              </div>
                            </div>
                          </b-col>
                          <b-col xl="8" lg="8" sm="12" class="p-0 pos-rel">
                            <div class="py-4 px-4">
                              <div class="content-right-wrap agency-right-side">
                                <b-form @submit.prevent="addUpdateCompany">
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Agency Name" label-for="agency-name">
                                        <b-form-input id="agency-name" 
                                            v-model="company.company_name" 
                                            :error-messages="companyName"
                                            type="text" 
                                            class="mt-2"
                                            placeholder="Enter agency name" 
                                            @input="$v.company.company_name.$touch()"
                                            @blur="$v.company.company_name.$touch()"
                                            required
                                            >
                                        </b-form-input>
                                        <span class="text-danger fz-12" v-if="companyName[0]">{{companyName[0]}}</span>
                                      </b-form-group>
                                      <span class="text-danger fz-12" v-if="company.company_name.length && !$v.company.company_name.required" >Name is required</span>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Category" label-for="category">
                                        <b-form-select id="category" :options="companytype" value="Select an option" v-model="company.company_type_id"  
                                              value-field="company_type_master_id"
                                              text-field="company_type" 
                                              class="w-100" 
                                              :error-messages="companyType"
                                              @input="$v.company.company_type_id.$touch()"
                                              @blur="$v.company.company_type_id.$touch()"
                                              >
                                        </b-form-select>
                                        <span class="text-danger fz-12" v-if="companyType[0]">{{companyType[0]}}</span>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col xl="6" lg="6" md="12">
                                      <b-form-group label="Select Agency Size" label-for="size">
                                        <b-form-select id="size" 
                                          :options="companysize"
                                          value-field="title" 
                                          text-field="title"
                                          value="Select an option" 
                                          v-model="company.company_size" 
                                          class="w-100" 
                                          :error-messages="companySize"
                                          @input="$v.company.company_size.$touch()"
                                          @blur="$v.company.company_size.$touch()"
                                          
                                          ></b-form-select>
                                          <span class="text-danger fz-12" v-if="companySize[0]">{{companySize[0]}}</span>
                                      </b-form-group>
                                    </b-col>
                                    <b-col xl="6" lg="6" md="12">
                                      <b-form-group label="Year of Experience" label-for="experience">
                                        <b-form-select id="experience" 
                                          :options="experience" 
                                          value="Select an Option" 
                                          v-model="company.yr_of_exp" 
                                          class="w-100" 
                                          :error-messages="yrOfExp"
                                          @input="$v.company.yr_of_exp.$touch()"
                                          @blur="$v.company.yr_of_exp.$touch()"
                                          
                                          
                                          ></b-form-select>
                                          <span class="text-danger fz-12" v-if="yrOfExp[0]">{{yrOfExp[0]}}</span>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Website URL" label-for="url">
                                        <b-form-input id="url" 
                                        type="text" 
                                        class="mt-2"
                                        placeholder="www.qapin.com" 
                                        v-model="company.website_url" 
                                        :error-messages="websiteUrl"
                                        @input="$v.company.website_url.$touch()"
                                        @blur="$v.company.website_url.$touch()"
                                        
                                        ></b-form-input>
                                        <span class="text-danger fz-12" v-if="websiteUrl[0]">{{websiteUrl[0]}}</span>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="About Agency" label-for="about">
                                        <b-form-textarea id="about" 
                                          placeholder="Type here..." 
                                          rows="3" 
                                          max-rows="6"  
                                          class="mt-2"
                                          v-model="company.about_company" 
                                          :error-messages="aboutCompany"
                                          @input="$v.company.about_company.$touch()"
                                          @blur="$v.company.about_company.$touch()"
                                          ></b-form-textarea>
                                          <span class="text-danger fz-12" v-if="aboutCompany[0]">{{aboutCompany[0]}}</span>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
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
                                      Create Agency Account
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
  import { required,maxLength,minLength,helpers} from 'vuelidate/lib/validators'
  import { mapActions } from "vuex";
  const alphaNumAndDotValidator = helpers.regex('alphaNumAndDot',/^[a-z0-9_ ]*$/i);
  export default {
    
    mixins: [validationMixin],

    validations: { 
        company: {
            company_name: { required, alphaNumAndDotValidator ,maxLength: maxLength(30) },
            company_type_id: { required },
            company_size: { required },
            website_url: { required },
            about_company:{ required ,maxLength: maxLength(2000),minLength: minLength(100)},
            yr_of_exp:{ required }, 
        }, 
    },
    data() {
      return {
         company: {
                company_name: '',
                company_type_id: '',
                company_size: '',
                website_url: '',
                page_name: '',
                about_company: '',
                request_verification: '',
                yr_of_exp:'', 
            },
        companytype:[],
        companysize: [],
        experience: [
          { value: null, text: 'Please select an option' },
          { value: '1', text: '1' },
          { value: '2', text: '2' },
          { value: '3', text: '3' },
          { value: '5', text: '5' },
          { value: '7', text: '7' },
          { value: '8', text: '8' },
          { value: '10', text: '10+' },
        ],
      }
    },
   computed: {
      companyName() {
        const errors = []
        if (!this.$v.company.company_name.$dirty) return errors 
        !this.$v.company.company_name.required && errors.push('Company name is required')
        !this.$v.company.company_name.alphaNumAndDotValidator && errors.push('Only character is allow')
        return errors
      },
      companyType() {
        const errors = []
        if (!this.$v.company.company_type_id.$dirty) return errors 
        !this.$v.company.company_type_id.required && errors.push('Company type is required') 
        return errors
      },
      companySize() {
        const errors = []
        if (!this.$v.company.company_size.$dirty) return errors 
        !this.$v.company.company_size.required && errors.push('Company size is required') 
        return errors
      }, 
      yrOfExp() {
        const errors = []
        if (!this.$v.company.yr_of_exp.$dirty) return errors 
        !this.$v.company.yr_of_exp.required && errors.push('Year of experience is required') 
        return errors
      },
      websiteUrl() {
        const errors = []
        if (!this.$v.company.website_url.$dirty) return errors 
        !this.$v.company.website_url.required && errors.push('Website url is required') 
        return errors
      },
      
      aboutCompany() {
        const errors = []
        if (!this.$v.company.about_company.$dirty) return errors 
        !this.$v.company.about_company.required && errors.push('about is required') 
        !this.$v.company.about_company.minLength && errors.push("About agency must be minimum 100 characters"); 
        !this.$v.company.about_company.maxLength && errors.push("About agency must be maximum 2000 characters");
        return errors
      },
      
       
    },

    mounted() {
      if(this.$store.state.currentUserData.is_exclusive && this.$store.state.currentUserData.exclusive_id > 0){
        this.$router.push({path: "/settings", name: "Settings",query:{current:'0'}});
      }
      window.scrollTo(0, 0);
      this.checkuserList();
      this.getCompanyCategory();
      this.getCompanysize();
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for to check user account already created 
      async checkuserList(){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "company/getCompanyCount",
          params: {data:this.getLoginUserIdRequest()},
        });
        if(res.company.length>0){
          window.history.back();
        }
      },
      // this fun is for to add company
      async addUpdateCompany(){ 
        this.$v.company.$touch()
        var data = {
              company_name: this.company.company_name,
              company_type_id: this.company.company_type_id,
              company_size: this.company.company_size,
              website_url: this.company.website_url,
              page_name: this.company.page_name,
              about_company: this.company.about_company,
              request_verification: this.company.request_verification,
              yr_of_exp: this.company.yr_of_exp,
            }
        if (!this.$v.company.$invalid) {
          var res =  await this.genericAPIPOSTRequest({
              requestUrl: "company/addCompany",
              params: data,
          });  
          
          if (res) {
            localStorage.setItem(
              "token",
              "Bearer " + res.token
            );
            localStorage.setItem(
              "loginUserData",
              JSON.stringify(res)
            );
            this.$store.dispatch("accountType", 'agency'); 
            this.$store.dispatch("currentUserData", res);
            localStorage.setItem("accountType","agency"); 
            this.getCompanyCount();
            this.switchaccount(1,res.uuid)
          }else{
            return false;
          }
          
          // setTimeout(() => {
          //   window.location.href = "agency";
          //   // this.$router.push("/agency")
          // }, 1000);
        }
      } ,

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
          this.$router.push("/agency/search")
          // window.location.href = "agency";
        }, 3000);
    
      },
      // this fun is for get company category
      async getCompanyCategory(){ 
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getCompanyCategory",
              params: {},
          });  
          this.companytype  = res;
      } ,
      // this fun is for to get company size
      async getCompanysize(){ 
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getCompanysize",
              params: {},
          });  
          this.companysize  = res;
      } ,
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
    .agency-right-side{overflow-y:hidden!important;max-height: 700px!important;min-height: 700px!important;}
    @media screen and (min-width: 320px) and (max-width: 815px) {
      .left-side-section {
        display:none;
      }
    }
  </style>
