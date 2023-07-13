<template>
  <b-card-text>
    <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <h4 class="mb-0 text-black fz-24 fw-500">
            <b>Notifications</b>
          </h4>
        </template>
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <div class="notify-wrap">
              <!--<div class="mb-3 form-check form-switch  border-bottom pb-3">-->
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="jobinvitations"
                  >Job Invitations</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="jobinvitations" 
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.JobInvitationsNotification"
                  @change="UpdateNotification('JobInvitationsNotification',userConfig.JobInvitationsNotification)"
                />
              </div>
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for=" hiredetails"
                  >Job Hire Details</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id=" hiredetails" 
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.JobHireDetailsNotification"
                  @change="UpdateNotification('JobHireDetailsNotification',userConfig.JobHireDetailsNotification)"
                />
              </div>
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="promotions"
                  >Qapin Promotions</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="promotions"
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.QapinPromotionsNotification"
                  @change="UpdateNotification('QapinPromotionsNotification',userConfig.QapinPromotionsNotification)"
                />
              </div>
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="paymentinfo"
                  >Payment Related Info</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="paymentinfo"
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.PaymentRelatedInfoNotification"
                  @change="UpdateNotification('PaymentRelatedInfoNotification',userConfig.PaymentRelatedInfoNotification)"
                />
              </div>
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="calendarbook"
                  >Calendar Book</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="calendarbook"
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.CalendarBookNotification"
                  @change="UpdateNotification('CalendarBookNotification',userConfig.CalendarBookNotification)"
                />
              </div>
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="searchupdate"
                  >Saved Searches Updates</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="searchupdate"
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.SavedSearchesUpdatesNotification"
                  @change="UpdateNotification('SavedSearchesUpdatesNotification',userConfig.SavedSearchesUpdatesNotification)"
                />
              </div>
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="subscriptionupdate"
                  >Subscriptions Updates</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="subscriptionupdate"
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.SubscriptionsUpdatesNotification"
                  @change="UpdateNotification('SubscriptionsUpdatesNotification',userConfig.SubscriptionsUpdatesNotification)"
                />
              </div>
              <div class="mb-3 form-check border-bottom pb-3">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="newsletters"
                  >Qapin Newsletters</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="newsletters"
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.QapinNewslettersNotification"
                  @change="UpdateNotification('QapinNewslettersNotification',userConfig.QapinNewslettersNotification)"
                />
              </div>
              <div class="form-check">
                <label
                  class="cursor-pointer form-check-label fz-16"
                  for="productupdate"
                  >Qapin Product Updates</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="productupdate"
                  true-value="1"
                  false-value="0"
                  v-model="userConfig.QapinProductUpdatesNotification"
                  @change="UpdateNotification('QapinProductUpdatesNotification',userConfig.QapinProductUpdatesNotification)"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </b-card-text>
</template>
<script>
 
import { validationMixin } from 'vuelidate';
import {required,minLength,sameAs } from 'vuelidate/lib/validators';
import { mapActions } from "vuex";
export default {
  mixins: [validationMixin],
  validations: { 
      user: {
        oldpassword: { required  },
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAsPassword: sameAs('password') }
      }
   },
  data() {
    return {
      userConfig: { 
      }
    };
  },
  computed: {
    
  }, 
  mounted() {
    
    this.getUserConfig();
  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
    
      async getUserConfig(){
          this.userConfig = await this.genericAPIPOSTRequest({
              requestUrl: "setting/userConfig",
              params: {data:this.getLoginUserIdRequest()},
          }); 
          console.log(this.userConfig);
           
      },
      async UpdateNotification(key,val){
          await this.genericAPIPOSTRequest({
              requestUrl: "setting/updateUserConfig",
              params: {'key':key,'value':val,data:this.getLoginUserIdRequest()},
          }); 
          this.getUserConfig();
 
      },
   }
};
</script>