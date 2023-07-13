<template>
    <div>
      <h5 class="text-black fz-24 fw-500"><b>Owner Settings</b></h5>
      <b-card-group deck>
        <b-card class="mb-3">
          <b-row>
            <b-col cols="12" class="px-4 py-4">
              <section class="card-section">
                <h5 class="text-black fz-22 fw-600 mb-5">Company Owner</h5>
                <h6 class="text-muted fw-600"> {{ $store.state.currentUserData.freelancerFirstName }} {{ $store.state.currentUserData.freelancerLastName }} </h6>
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
                <div class="pb-0 d-md-flex align-items-center mb-5">
                  <span class="fz-22 fw-600 text-black">Phone Number</span>
                  <div class="ml-auto">
                    <a href="javascript:void(0);" class="mr-2" v-b-modal.setting-modal>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2613C" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <h6 class="text-muted fw-600">{{companyDetails.phone}}</h6>

                <div>
                  
                </div>
              </section>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>

      <!-- <b-button class="btn-outline-theme">Close my Agency</b-button> -->
      <b-modal id="setting-modal" title="Edit Agency Setting" centered hide-footer no-close-on-backdrop> 
        <vue-tel-input
            v-bind="bindProps"
            v-model="updateData.phone"
            :country="updateData.phone_code"
            @country-changed="countryChanges"
            class="form-control"
            @input="$v.updateData.phone.$touch()"
            @blur="$v.updateData.phone.$touch()"
        ></vue-tel-input>
        <p class="text-danger" v-if="updateDataPhoneErrors[0]">{{updateDataPhoneErrors[0]}}</p>
        <hr>
        <div class="text-right d-flex align-items-center float-right">
          <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('setting-modal')">Cancel</a>
          <a title="Save" class="ankaCropper__saveButton btn btn-theme visibility-hidden" v-on:click="uploadAgencySetting()">Save</a>
        </div>
      </b-modal>
    </div>
  </template>
  
  <script>
   
  import { validationMixin } from 'vuelidate'; 
  import { required } from 'vuelidate/lib/validators'
  import { mapActions,mapGetters } from "vuex";
  // const number = helpers.regex("serial",/^[0-9]+$/);
  export default {
    mixins: [validationMixin],
    validations: {
      updateData: { 
        phone:{ required },
        phone_code:{ required },
      },
    },
    data() {
      return { 
        bindProps: {
            mode: "international",
            placeholder: "Enter a phone number",
            required: true,
            enabledCountryCode: true,
            enabledFlags: true,
            autocomplete: "off",
            name: "telephone",
            maxLen: 15,
            inputOptions: {
                showDialCode: true
            },
            validCharactersOnly:true,
        },
        companyDetails:'',
        updateData:{
          company_details_id:'',
          phone:'',
          phone_code:'',
        }
      };
    },
    computed: { 
      updateDataPhoneErrors() {
        const errors = [];
        if (!this.$v.updateData.phone.$dirty) return errors;
        !this.$v.updateData.phone.required && errors.push("Phone number is required");
        // !this.$v.updateData.phone.number && errors.push("Only Number is Allow");
        return errors;
      },
      ...mapGetters({
          userInfo: "settings/getUserDetails",
        }),
    }, 
    mounted() {

    },
    methods: {
      countryChanges(e) {
        this.updateData.phone_code = e.dialCode;
      },
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for to get company details
      async getCompanyDetails(){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "getCompnayDetails",
          params: {},
        });
        if(res){
          this.companyDetails = res;
          this.updateData.phone = res.phone;
          this.updateData.phone_code = res.phone_code;
        }
      },
      // this fun is for to upload agency setting
      async uploadAgencySetting(){
        this.$v.$touch();
        if(!this.$v.updateData.$invalid){
          this.updateData.company_details_id = this.companyDetails.company_details_id;
          var res = await this.genericAPIPOSTRequest({
            requestUrl: "updateCompnayDetails",
            params: this.updateData,
          });
          if(res){
            this.companyDetails = res;
            this.getCompanyDetails()
            this.$toastr.s("Agency Setting successfully Updated");
            this.$bvModal.hide('setting-modal');
          }
        }
      },
    }
  };
  </script>
  