<template>
  <b-container>
    <b-row class="mt-100 settings-wrap mb-50">
      <b-col cols="12">
        <h4 class="mb-5 text-black fz-30 fw-500"><b>Settings</b></h4>
        <!-- freelancer settings -->
        <b-card no-body v-if="$store.state.accountType=='freelancer'">
          <b-tabs v-model="currentPage" pills card vertical>
            
            <b-tab title="Contact Info" @click="updateUrl(0);" :key="1"> 
              <contact-info />
            </b-tab> 

            <b-tab title="Tax Information" @click="getTaxData();updateUrl(1)" v-if="!$store.state.currentUserData.is_exclusive">
              <TaxInformation ref="taxinfo" />
            </b-tab> 

            <b-tab title="My Profile" @click="$router.push('/my-profile')" ></b-tab>

            <b-tab title="Profile Settings" @click="updateUrl(3)">
              <profile-settings />
            </b-tab>
            
            <b-tab title="Get Paid" @click="updateUrl(4)" v-if="!$store.state.currentUserData.is_exclusive">
              <Getpaid/>
            </b-tab>
            <b-tab title="Password & Security" @click="updateUrl(5)">
              <change-password />
            </b-tab>
             
            <b-tab title="Notifications" @click="updateUrl(6)">
              <notifications />
            </b-tab>
          </b-tabs>
        </b-card>

        <!-- client settings -->
        <b-card no-body v-if="$store.state.accountType=='client'">
          <b-tabs v-model="currentPage" pills card vertical> 
            
            <b-tab title="My Info" @click="updateUrl(0)" v-if="isPermissionForClient('myinfo')" :key="0"> 
              <contact-info />
            </b-tab>  

            <b-tab title="Billing & Payments " @click="updateUrl(1)" v-if="isPermissionForClient('BillingPayments')" :key="1" >
              <BillingPayments />
            </b-tab>
            
            <b-tab title="Password & Security" @click="updateUrl(2)" v-if="isPermissionForClient('passwordSecurity')" :key="2">
              <change-password />
            </b-tab>

            <b-tab title="Notification Settings" @click="updateUrl(3)" v-if="isPermissionForClient('notificationSetting')" :key="3">
              <notifications />
            </b-tab>
            
            <b-tab title="Members & Permission" @click="getMemberpermission();updateUrl(4)" v-if="isPermissionForClient('memberPermission')" :key="4">
              <MemberPermission ref="memberPermission"/>
            </b-tab>

            <b-tab title="Tax Information"  @click="getTaxData(); updateUrl(5)" v-if="isPermissionForClient('taxInformation')" :key="5">
              <TaxInformation ref="taxinfo" />
            </b-tab> 

          </b-tabs>
        </b-card>

        <!--  agency settings -->
        <b-card no-body  v-if="$store.state.accountType=='agency'">
          <b-tabs v-model="currentPage" pills card vertical>

            <b-tab title="Agency Settings" @click="getCompanydata();updateUrl(0)" active v-if="isPermissionForAgency('agencySetting')">
              <AgencySettings ref="agencydata"/>
            </b-tab>

            <b-tab title="Members & Permission" @click="getMemberpermission();updateUrl(1)" v-if="isPermissionForAgency('memberPermission')">
              <MemberPermission ref="memberPermission"/>
            </b-tab>

            <b-tab title="Tax Information"  @click="getTaxData();updateUrl(2)" v-if="isPermissionForAgency('taxInformation')" >
              <TaxInformation ref="taxinfo" />
            </b-tab> 

            <b-tab title="Contact Info" @click="updateUrl(3)" v-if="isPermissionForAgency('contactInfo')"> 
              <contact-info />
            </b-tab> 

            <b-tab title="My Profile" @click="$router.push('/agency-profile')" v-if="isPermissionForAgency('myprofile')"></b-tab>

            <b-tab title="Profile Settings" @click="updateUrl(5)" v-if="isPermissionForAgency('profileSetting')">
              <profile-settings />
            </b-tab>

            <b-tab title="Get Paid" @click="updateUrl(6)" v-if="isPermissionForAgency('getPaid')">
              <Getpaid/>
            </b-tab>

            <b-tab title="Password & Security" @click="updateUrl(7)" v-if="isPermissionForAgency('passwordSecurity')">
              <change-password />
            </b-tab>
            
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import ChangePassword from './ChangePassword.vue'
import Getpaid from './GetPaid.vue' 
import AgencySettings from './AgencySettings.vue'  
import ContactInfo from './ContactInfo.vue'
import Notifications from './Notifications.vue'
import ProfileSettings from './ProfileSettings.vue'
import BillingPayments from './BillingPayments.vue'

import TaxInformation from './TaxInformation.vue' 
import MemberPermission from './MemberPermission.vue'
// import NewFreelancer from '../../components/client/NewFreelancer.vue'


export default { 
  components: { Notifications, ChangePassword, ProfileSettings, ContactInfo,Getpaid,AgencySettings,BillingPayments,TaxInformation,MemberPermission },
  data() {
    return {
      currentPage:2,
    }
  },
  mounted() {
    setTimeout(() => {
      this.currentPage = (this.$route.query.current == undefined) ? 0 : parseInt(this.$route.query.current);
      if(this.currentPage == 0){
        var new_url = "?current=0";
        window.history.pushState('data', 'title', new_url);
      }
    }, 100);

    this.getOwnerDetail();
    if(this.$store.state.accountType=='agency'){
      this.$refs.agencydata.getCompanyDetails();
    }
    
    // if(this.$route.query.current == 'getPaid' && this.$store.state.accountType=='freelancer'){
    //   setTimeout(() => {
    //     this.currentPage = 4;
    //   }, 100);
    // }else if(this.$route.query.current == 'getPaid' && this.$store.state.accountType=='agency'){
    //   setTimeout(() => {
    //     this.currentPage = 6;
    //   }, 100);
    // }
    
  },
  methods:{
    updateUrl(_v){
      this.currentPage=_v;
      var new_url = "?current="+_v+"";
      console.log('new_url',new_url);
      window.history.pushState('data', 'title', new_url);
    },
    // call agency setting page function
    getCompanydata(){
      this.$refs.agencydata.getCompanyDetails();
    },

    // call member permission data
    getMemberpermission(){
      this.$refs.memberPermission.getCompanyDetails();
    },

    // call tax info page function
    getTaxData(){
      this.$refs.taxinfo.fetchTaxAddressDetails();
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
body {
  font-family: 'Source Sans Pro', sans-serif !important;
}
.text-muted {
  color: #979797 !important;
}
.ralative {
  padding-bottom: 0px;
}
.theme-bg {
  background-color: #fff6f4 !important;
}
.bg-none {
  background-color: transparent;
}
.bordered {
  border-bottom: 1px solid #ebebeb !important;
  border-right: 1px solid #ebebeb;
}
.bordered-right {
  border-right: 1px solid #ebebeb;
}
.br-20 {
  border-radius: 20px;
}
.border-none {
  border: 0px !important;
}
.settings-wrap .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: transparent !important;
  color: #000 !important;
  font-weight: 600;
  border-left: 3px solid #f2613b;
  border-radius: 0px;
  font-size: 18px;
}
.settings-wrap .nav-pills .badge {
  border-radius: 50%;
  padding: 8px 7px;
  background-color: #eee;
  color: #000;
}
.settings-wrap .nav-pills .nav-link {
  color: #999999;
  font-weight: 600;
  font-size: 18px;
}
.settings-wrap .nav-pills .nav-link:hover {
  color: #f2613b !important;
  font-weight: 600;
}
.settings-wrap .nav-pills .nav-link.active .badge,
.nav-pills .show > .nav-link .badge {
  background-color: #f2613b !important;
  border-radius: 50%;
  font-size: 10px !important;
  padding: 7px 6px;
  color: #fff !important;
}
.settings-wrap .br-50 {
  border-radius: 50% !important;
}
.settings-wrap .fz-14 {
  font-size: 14px;
}
.settings-wrap .card {
  border-radius: 20px !important;
  border: 0px;
  background-color: transparent;
}
.settings-wrap .card-body {
  border-radius: 20px;
}
.settings-wrap .card-body {
  border-radius: 0 0 20px 20px;
}
.settings-wrap .card-header {
  border-radius: 0 !important;
  background-color: transparent;
  text-align: left;
  border-radius: 20px 20px 0 0 !important;
}
.settings-wrap .my-proposal ul {
  margin-left: -32px;
}
.settings-wrap .nav-pills {
  margin-left: -32px;
}
.settings-wrap .tabs .card {
  border-radius: 20px !important;
  border: 0px;
  background-color: #fff;
}
.settings-wrap .card-section select {
  -webkit-appearance: menulist !important; /* override vuetify style */
  -moze-appearance: menulist !important; /* override vuetify style */
  appearance: menulist !important; /* override vuetify style */
}

.subscription-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  text-align: center;
}
.subscription__title,
.subscription__main-feature,
.subscription__price {
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  color: #85a9c1;
}
.subscription__main-feature {
  font-size: 50px;
}
.subscription__price {
  text-transform: lowercase;
}
.subscription__button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  margin: 5px 0;
  padding: 20px 0;
  border-radius: 5px;
  border: solid 3px white;
  background: white;
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s;
  cursor: pointer;
}
.subscription__button:before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 10px;
  border: solid 3px #f8a28d;
  transform: translateY(-30%);
  position: absolute;
  right: 0px;
  top: 7px;
}

.subscription-container input[type='radio'] {
  display: none;
}

/*.subscription-container input + label {
  border: solid 1px #cecece;
  background: white;
  transform: translateY(-10%);
  transition: transform 0.5s;
  padding: 40px 20px;
  margin: 10px;
  width: 33.3333%;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
}

.subscription-container input:checked + label:before {
  background: #f2613d;
  font-size: 50px;
  position: absolute;
  right: 0px;
  top: 7px;
}
.subscription-container input:checked + label {
  border: solid 1px #f2613d;
  background: white;
  transform: translateY(-10%);
  transition: transform 0.5s;
  padding: 40px 20px;
  width: 33.3333%;
  border-radius: 6px;
  cursor: pointer;
}*/

@media only screen and (min-width: 320px) and (max-width: 815px) {
  .subscription-container{display:block;}
  .subscription-container input:checked + label {
    width: 100%;
  }
  .subscription-container input + label {
    width: 100%;
    margin:0px 0;
  }
  .certificate-section ul{
    margin-left:-32px;
  }
  .education-section .ml-auto{
    margin-left: 0px;
    margin-top:10px;
  }
  .education-section .details{
    margin-left: 0px;
    margin-top:10px;
  }
}

.subscription-container .subscription__title,
.subscription-container .subscription__main-feature,
.subscription-container .subscription__price {
  color: #6e8ca0;
}

.fz-16 {
  font-size: 16px;
}
.fz-18 {
  font-size: 18px;
}
.fz-24 {
  font-size: 24px;
}
.fw-600 {
  font-weight: 600;
}
.mb-23 {
  margin-bottom: 23px;
}
.no-bottom-border {
  border-bottom: 0px !important;
}
.border-top-0 {
  border-top: 0px !important;
}
.fz-34 {
  font-size: 34px;
}
.offer-wrap .card-body {
  padding: 0px;
}
.mb-50 {
  margin-bottom: 50px !important;
}
p {
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
}
h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
  font-weight: 500 !important;
  line-height: 1.2 !important;
}
dl,
ol,
ul {
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
}
ol,
ul {
  padding-left: 2rem !important;
}
hr {
  margin: 1rem 0 !important;
}
.fz-30 {
  font-size: 26px !important;
}
.card-section .post {
  margin-left: -32px;
}
.card-section .tags span {
  background: #fcfcfc;
  border: 1px solid #d8d8d8;
  border-radius: 100px;
  padding: 6px 15px !important;
  font-size: 14px;
  --skill-height: 30px;

  margin: 0 5px 10px 0;
  padding: 0 10px;
  qbackground-color: var(--skill-bg);
  border-radius: 12px;
  font-size: 12px;
  line-height: 2.8;
  cursor: pointer!important;
}
.btn-edit:hover {
  padding: 8px 16px !important;
  background-color: #f2613da6 !important;
}
.card-section .btn-social {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 100px;
  text-align: center;
  width: 100%;
}
#sidebar-twitter .b-sidebar-body {
  margin: 0 auto;
  width: 400px;
}
#sidebar-twitter .custom-control-label {
  background-color: transparent;
  font-size: 16px;
  color: #676767;
}
.twitter-active {
  background-color: rgb(29, 155, 240) !important;
  color: #fff !important;
  border: 1px solid #167dc3 !important;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
  white-space: nowrap;
}
.github-active {
  background-color: rgb(27 31 35) !important;
  color: #fff !important;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
  white-space: nowrap;
}
.stack-active {
  background-color: rgb(218 104 12) !important;
  color: #fff !important;
  border: 1px solid #b85a0e !important;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
  white-space: nowrap;
}
.dribble-active {
  background-color: rgb(227 74 132) !important;
  color: #fff !important;
  border: 1px solid #bf3066 !important;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
  white-space: nowrap;
}
.devian-active {
  background-color: rgb(0, 0, 0) !important;
  color: #fff !important;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
  white-space: nowrap;
}
.notify-wrap input ~ label:before {
  display: none;
}
.notify-wrap .form-check-input:checked {
  background-color: #f2613b;
  border-color: #d1512f;
}
.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgb(242 97 59 / 25%);
}
.vue-tel-input{border: 1px solid #CECECE!important;border-radius:0.25rem!important;margin-top: 6px;}
.vti__dropdown{padding:0px!important;}
</style>
