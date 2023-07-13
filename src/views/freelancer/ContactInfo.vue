<template>
  <div>
    <h5 class="text-black fz-24 fw-500"><b>Contact Info</b></h5>
    <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <div class="d-flex align-items-center">
            <h4 class="mb-0 text-black fz-24 fw-500">
              <b>Account</b>
            </h4>
            <div class="ml-auto">
              <a href="javascript:void(0);" @click="isEdit = true">
                <PencilEditIcon />
              </a>
            </div>
          </div>
        </template>
        <b-row v-if="userInfo">
          <b-col cols="12" class="px-4 py-4">
            <div class="alert alert-success p-4" v-if="newChangeEmail">
              <h4 class="text-black mb-4">Email change request pending</h4>
              <div class="d-md-flex align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
                  </svg>
                  <div class="ml-2">
                      <p class="mb-0 text-black">you have a pending request to change your email address <span class="text-theme">{{newChangeEmail}}</span> To complete this request, please check your inbox at that email address to confirm ownership of that account.</p>
                  </div>
              </div>
              <div class="d-md-flex align-items-center">
                  <h6 class="mb-0 text-black" @click="cancelEmailChangeRequest()">Cancel change request</h6>
                  <button class="btn btn-success btn-sm ml-2" @click="resendEmail()" >Resend Email</button>
              </div>
            </div>
            <section class="card-section" v-if="isEdit == false">
              <div class="p-3">
                <div class="div-company-logo text-center m-auto w-20">
                  <img :src="$store.state.baseUrlImg+'upload/profile_image/'+userInfo.profile_picture_path" class="img-fluid br-50 shadow">
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">First Name</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.first_name }}
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Last Name</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.last_name }}
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Email</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.email_id }}
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Gender</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{(userInfo.gender=='M' ? 'Male' : 'Female')}}
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Phone</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                 {{ userInfo.phone }}
                </div>
              </div>
            </section>

            <section class="card-section" v-if="isEdit == true">
              <!-- <div class="p-3">
                <div class="div-company-logo text-center m-auto w-20">
                  <img :src="userInfo.profile_picture_path_url" class="img-fluid br-50 shadow">
                </div>
              </div> -->
              <div class="p-3">
                <div class="div-company-logo text-center m-auto w-20">
                  <img :src="$store.state.baseUrlImg+'upload/profile_image/'+userInfo.profile_picture_path" v-if="userInfo.profile_picture_path_url!=''" class="img-fluid br-50 shadow" v-b-modal.img-modal-1>
                  <img :src="$store.state.baseUrlImg+'upload/profile_image/user.png'" v-else class="img-fluid br-50 shadow" v-b-modal.img-modal-1>
                </div>
              </div>
              <b-form action="" @submit.prevent="updateAccountInfo">
                <b-form-group class="mb-2">
                  <label class="text-black fz-18 fw-600">Full Name</label>
                  <b-form-input
                    v-model="userInfo.first_name"
                    type="text"
                    placeholder="Enter name"  
                    :error-messages="firstName"
                    @input="$v.userInfo.first_name.$touch()"
                    @blur="$v.userInfo.first_name.$touch()"
                    
                  ></b-form-input>
                  <p class="text-danger" v-if="firstName[0]">{{firstName[0]}}</p>
                </b-form-group>

                <b-form-group class="mb-2">
                  <label class="text-black fz-18 fw-600">Last Name</label>
                  <b-form-input
                    v-model="userInfo.last_name"
                    type="text"
                    placeholder="Enter name" 
                    :error-messages="lastName"
                    @input="$v.userInfo.last_name.$touch()"
                    @blur="$v.userInfo.last_name.$touch()"
                    
                  ></b-form-input>
                  <p class="text-danger" v-if="lastName[0]">{{lastName[0]}}</p>
                </b-form-group>
   
                <b-form-group class="mb-2">
                  <label class="text-black fz-18 fw-600">Email</label>
                  <b-form-input
                    v-model="userInfo.email_id"
                    type="email" 
                  ></b-form-input>
                </b-form-group>

                <b-row>

                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="Phone" label-for="Phone">
                      <label class="text-black fz-18 fw-600">Phone</label>
                     
                      <vue-tel-input
                        v-bind="bindProps"
                        v-model="userInfo.phone"
                        :country="userInfo.phone_code"
                        @country-changed="countryChanges" class="form-control"
                      ></vue-tel-input>
                    </b-form-group>
                  </b-col>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="Gender" label-for="Gender">
                      <label class="text-black fz-18 fw-600">Gender</label>
                      <b-form-select
                        v-model="userInfo.gender"
                        :options="genders"
                        class="form-control"
                        :error-messages="genderErrors"
                        @select="$v.userInfo.gender.$touch()"
                        @blur="$v.userInfo.gender.$touch()"
                      >
                      </b-form-select>
                      <span v-if="!$v.userInfo.gender.required && $v.userInfo.gender.$error" class="error-msg">Gender is required</span>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-form-group class="mt-4">
                  <b-button type="submit" class="mr-2 btn btn-theme"
                    >Update</b-button
                  >
                  <a
                    href="javascript:void(0);"
                    @click="isEdit = false; fetchUserDetails({params : {data : this.loginUserId}})"
                    class="text-theme"
                    >Cancel</a
                  >
                </b-form-group>
              </b-form>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <b-card-group deck v-if="$store.state.accountType=='client'">
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <div class="d-flex align-items-center">
            <h4 class="mb-0 text-black fz-24 fw-500">
              <b>Company Details</b>
            </h4>
            <div class="ml-auto" v-if="isPermissionForClient('companyEdit')">
              <a href="javascript:void(0);" v-if="!companyEdit" @click="companyEdit = true">
                <PencilEditIcon />
              </a>
            </div>
          </div>
        </template>
        <b-row>
          <b-col cols="12" class="px-4 py-4" v-if="companyEdit">
            <div class="company-details-modal p-0">
            <div class="p-3">
              <div class="div-company-logo text-center m-auto w-20">
                <img :src="$store.state.baseUrlImg+'upload/profile_image/'+companyDetails.image" v-if="companyDetails.image!=''" class="img-fluid br-50 shadow" v-b-modal.img-modal>
                <img :src="$store.state.baseUrlImg+'upload/profile_image/user.png'" v-else class="img-fluid br-50 shadow" v-b-modal.img-modal>
              </div>
            </div>
          
            <b-form @submit.prevent="submitCompanyDetails">
              <b-form-group class="mb-3">
                <label class="fz-16 fw-600 mb-2">Company name</label>
                <b-form-input
                  v-model="companyDetails.company_name"
                  placeholder="Enter Company Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group class="mb-3">
                <label class="fz-16 fw-600 mb-2">Website</label>
                <b-form-input v-model="companyDetails.website" @keyup="isUrlValid" placeholder="Enter Website"></b-form-input>
                <p class="text-danger" id='websiteError'></p>

              </b-form-group>
              <b-form-group class="mb-3">
                <label class="fz-16 fw-600 mb-2">Add your industry</label>
                <b-form-select v-model="companyDetails.industry" :options="industryoptions" value-field="company_type_master_id" 
                                  text-field="company_type" class="form-control"></b-form-select>
              </b-form-group>
              <b-form-group class="mb-3">
                <label class="fz-16 fw-600 mb-2">How many people are in your company?</label>
                <b-form-radio-group
                  v-model="companyDetails.size"
                  :options="companySize"
                  text-field='text'
                  value-field='text'
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
              <b-form-group class="mb-3">
                <label class="fz-16 fw-600 mb-2">Tagline</label>
                <b-form-input v-model="companyDetails.tagline" placeholder="Enter Tagline"></b-form-input>
              </b-form-group>
              <b-form-group class="mb-3">
                <label class="fz-16 fw-600 mb-2">Description</label>
                <b-form-textarea id="textarea" v-model="companyDetails.description" placeholder="Enter Description..." rows="3" max-rows="6"></b-form-textarea>
              </b-form-group>
              <div class="w-100 text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="companyEdit=false">Cancel</a>
                <b-button
                  type="submit"
                  size="lg"
                  class="btn btn-theme"
                >
                  Save
                </b-button>
              </div>
            </b-form>
          </div>
          </b-col>
          <b-col cols="12" class="px-4 py-4" v-else>
            <div class="p-3">
              <div class="div-company-logo text-center m-auto w-20">
                <img :src="$store.state.baseUrlImg+'upload/profile_image/'+companyDetails.image" v-if="companyDetails.image!=''" class="img-fluid br-50 shadow">
                <img :src="$store.state.baseUrlImg+'upload/profile_image/user.png'" v-else class="img-fluid br-50 shadow">
              </div>
            </div>
            <div class="pb-3">
              <div>
                <label class="text-black fz-18 fw-600" v-if='companyDetails.company_name!=""'>{{companyDetails.company_name}}</label>
              </div>
              <div class="text-muted fz-16 fw-600" v-if='companyDetails.website!=""'>
                <a :href='companyDetails.website' target='_blank' class="text-theme">{{ companyDetails.website }}</a>
              </div>
            </div>
            <div class="pb-3" v-if='companyDetails.industry!=""'>
              <div>
                <label class="text-black fz-18 fw-600">Industry</label>
              </div>
              <div class="text-muted fz-16 fw-600">
                {{findInsdutryCategory(companyDetails.industry)}}
              </div>
            </div>
            <div class="pb-3" v-if='companyDetails.size!=""'>
              <div>
                <label class="text-black fz-18 fw-600">Size</label>
              </div>
              <div class="text-muted fz-16 fw-600">
                {{ companyDetails.size }}
              </div>
            </div>
            <div class="pb-3" v-if='companyDetails.tagline!=""'>
              <div>
                <label class="text-black fz-18 fw-600">Tagline</label>
              </div>
              <div class="text-muted fz-16 fw-600">
                {{companyDetails.tagline}}
              </div>
            </div>
            <div class="pb-3" v-if='companyDetails.description!=""'>
              <div>
                <label class="text-black fz-18 fw-600">Description</label>
              </div>
              <div class="text-muted fz-16 fw-600">
                {{ companyDetails.description }}
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <h4 class="mb-0 text-black fz-24 fw-500">
            <b>Additional Accounts</b>
          </h4>
          <h6 class="text-muted fz-16 fw-600">
            Creating a new account allow you to use Qapin in different ways,
            while still having just one login.
          </h6>
        </template>
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              

              <b-row v-if="!$store.state.listAccount.qp_user">
                <b-col xl="9" lg="9" md="12">
                  <h4 class="mb-0 fz-18 fw-500">
                    <strong>Freelancer Account</strong>
                  </h4>
                  <p class="mb-0 text-muted">
                    Hire, manage and pay as a different company. Each client
                    company has its own freelancers, payment methods and
                    reports.
                  </p>
                </b-col>
                <b-col xl="3" lg="3" md="12">
                  <b-button
                    class="btn btn-outline-theme btn-block w-100 w-sm-auto"
                    @click="$router.push('/settings/addfreelancer')"
                  >
                    New Freelancer Account
                  </b-button>
                </b-col>
              </b-row>

              <b-row v-if="$store.state.listAccount.qp_user">
                <b-col xl="11" lg="11" md="12">
                  <h4 class="mb-0 fz-18 fw-500">
                    <strong
                      >{{ $store.state.listAccount.qp_user.first_name }}
                      {{ $store.state.listAccount.qp_user.last_name }}
                    </strong>
                  </h4>
                  <p class="text-muted fz-16 fw-600 mb-0">Freelancer</p>
                </b-col>
                <!-- <b-col xl="1" lg="1" md="12" class="text-right">
                  <b-button class="btn btn-outline-theme" v-b-modal.delete-modal 
                  @click="deleteAccount('Are You Sure, Want To Delete The Freelancer Account?')">
                    <i class="fa fa-trash"></i>
                  </b-button>
                </b-col> -->
              </b-row>

              <b-row class="mt-2" v-if="$store.state.listAccount.company == '' && $store.state.accountType != 'client' ">
                <b-col xl="9" lg="9" md="12">
                  <h4 class="mb-0 fz-18 fw-500">
                    <strong>Agency Account</strong>
                  </h4>
                  <p class="text-muted fz-16 fw-600 mb-0">
                    Find jobs and earn money as manager of a team of
                    freelancers.
                  </p>
                </b-col>
                <b-col xl="3" lg="3" md="12" v-if="!$store.state.currentUserData.is_exclusive && $store.state.currentUserData.exclusive_id == 0">
                  <b-button
                    class="btn btn-outline-theme btn-block w-100 w-sm-auto"
                    @click="$router.push('/add-agency-account')"
                  >
                    New Agency Account
                  </b-button>
                </b-col>
              </b-row>

              <b-row v-else>
                <b-col xl="11" lg="11" md="12">
                  <h4 class="mb-0 fz-18 fw-500">
                    <strong
                      >{{ $store.state.listAccount.company[0].company_name }}
                    </strong
                    >
                  </h4>
                  <p class="text-muted fz-16 fw-600 mb-0">Agency</p>
                </b-col>
                <!-- <b-col xl="1" lg="1" md="12" class="text-right">
                  <b-button class="btn btn-outline-theme" v-b-modal.delete-modal 
                  @click="deleteAccount('Are You Sure, Want To Delete The Agency Account?')">
                    <i class="fa fa-trash"></i>
                  </b-button>
                </b-col> -->
              </b-row>


              <b-row v-if="!$store.state.listAccount.user">
                <b-col xl="9" lg="9" md="12">
                  <h4 class="mb-0 fz-18 fw-500">
                    <strong>Client Account</strong>
                  </h4>
                  <p class="text-muted fz-16 fw-600 mb-0">
                    Hire, manage and pay as a different company. Each client
                    company has its own freelancers, payment methods and
                    reports.
                  </p>
                </b-col>
                <b-col xl="3" lg="3" md="12">
                  <b-button
                    class="btn btn-outline-theme btn-block w-100 w-sm-auto"
                    @click="$router.push('/add-client-account')"
                  >
                    New Client Account
                  </b-button>
                </b-col>
              </b-row>

              <b-row v-if="$store.state.listAccount.user">
                <!-- <b-col xl="1" lg="1" md="12">
                    <div class="image-wrapper">
                    <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" alt="John" class="img-fluid w-100">
                  </div>
                  <div class="shadow initials-wrapper">
                    <span>EG</span>
                  </div>
                </b-col> -->
                <b-col xl="11" lg="11" md="12">
                  <h4 class="mb-0 fz-18 fw-500">
                    <strong
                      >{{ $store.state.listAccount.user.first_name }}
                      {{ $store.state.listAccount.user.last_name }}</strong
                    >
                  </h4>
                  <p class="text-muted fz-16 fw-600 mb-0">Client</p>
                </b-col>
                <!-- <b-col xl="1" lg="1" md="12" class="text-right">
                  <b-button
                    class="btn btn-outline-theme"
                    v-b-modal.delete-modal @click="deleteAccount('Are You Sure, Want To Delete The client Account?')"
                  >
                    <i class="fa fa-trash"></i>
                  </b-button>
                 
                </b-col> -->
              </b-row>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <div class="d-flex align-items-center">
            <h4 class="mb-0 text-black fz-24 fw-500">
              <b>Location</b>
            </h4>
            <div class="ml-auto" @click="getLocationInfo()">
              <a href="javascript:void(0);" @click="isLocationedit = true">
                <PencilEditIcon />
              </a>
            </div>
          </div>
        </template>
        <b-row v-if="userInfo">
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section" v-if="isLocationedit == false">
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Time Zone</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.timezone_name }}
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Location</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.country_name }}, {{ userInfo.state_name }},
                  {{ userInfo.city_name }}
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Street Address</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.address1 }}
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.address2 }}
                </div>
              </div>
              <div class="pb-3">
                <div>
                  <label class="text-black fz-18 fw-600">Zip / Postal Code</label>
                </div>
                <div class="text-muted fz-16 fw-600">
                  {{ userInfo.zipcode }}
                </div>
              </div>
              
            </section>
            <section class="card-section" v-if="isLocationedit == true">
              <b-form action="" @submit.prevent="updateLocationInfo">
                <b-row>
                  <b-col xl="12" lg="12" sm="12">
                    <b-form-group id="times" label-for="times">
                      <label class="text-black fz-16 fw-600">Time Zone</label>
                      <b-form-select
                        v-model="userLocation.timezone"
                        :options="timezoneList"
                        class="form-control"
                        id="times"
                        value-field="timezone_id"
                        text-field="name"
                        :error-messages="timezoneErrors"
                        @input="$v.userLocation.timezone.$touch()"
                        @blur="$v.userLocation.timezone.$touch()"
                      ></b-form-select>
                    </b-form-group>
                    <p class="text-danger" v-if="timezoneErrors[0]">{{timezoneErrors[0]}}</p>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="country" label-for="country">
                      <label class="text-black fz-16 fw-600">Country</label>
                      <b-form-select
                        v-model="userLocation.country_id"
                        :options="countryList"
                        value-field="country_id"
                        text-field="country_name"
                        class="form-control"
                        id="country"
                        label-field="Select option"
                        :error-messages="country_idErrors"
                        @input="$v.userLocation.country_id.$touch()"
                        @blur="$v.userLocation.country_id.$touch()"
                        @change="changecountry(userLocation.country_id)"
                      ></b-form-select>
                    </b-form-group>
                    <p class="text-danger" v-if="country_idErrors[0]">{{country_idErrors[0]}}</p>
                  </b-col>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="state" label-for="state">
                      <label class="text-black fz-16 fw-600">state</label>
                      <b-form-select
                        v-model="userLocation.state_id"
                        :options="stateList"
                        class="form-control"
                        id="state"
                        value-field="state_id"
                        text-field="state_name"
                        label-field="Select option"
                        @change="changestate(userLocation.state_id)"
                        :error-messages="state_idErrors"
                        @input="$v.userLocation.state_id.$touch()"
                        @blur="$v.userLocation.state_id.$touch()"
                      ></b-form-select>
                      <p class="text-danger" v-if="state_idErrors[0]">{{state_idErrors[0]}}</p>
                    </b-form-group>
                  </b-col>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="city" label-for="city">
                      <label class="text-black fz-16 fw-600">city</label>
                      <b-form-select
                        v-model="userLocation.city_id"
                        :options="cityList"
                        class="form-control"
                        id="city"
                        value-field="city_id"
                        text-field="city_name"
                        label-field="Select option"
                        :error-messages="city_idErrors"
                        @input="$v.userLocation.city_id.$touch()"
                        @blur="$v.userLocation.city_id.$touch()"
                      ></b-form-select>
                      <p class="text-danger" v-if="city_idErrors[0]">{{city_idErrors[0]}}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="12" lg="12" sm="12">
                    <b-form-group id="address" label-for="address">
                      <label class="text-black fz-16 fw-600"
                        >Street Address</label
                      >
                      <b-form-input
                        v-model="userLocation.address1"
                        id="address"
                        placeholder="202 Classic Harmoni Building 17 Kaipana Lok Nagar"
                        :error-messages="address1Errors"
                        @input="$v.userLocation.address1.$touch()"
                        @blur="$v.userLocation.address1.$touch()"
                      ></b-form-input>
                      <p class="text-danger" v-if="address1Errors[0]">{{address1Errors[0]}}</p>
                    </b-form-group>
                  </b-col>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="address" label-for="address">
                      <b-form-input
                        v-model="userLocation.address2"
                        id="address"
                        placeholder="Apt/ Suite"
                        :error-messages="address2Errors"
                        @input="$v.userLocation.address2.$touch()"
                        @blur="$v.userLocation.address2.$touch()"
                      ></b-form-input>
                      <p class="text-danger" v-if="address2Errors[0]">{{address2Errors[0]}}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="zip" label-for="zip">
                      <label class="text-black fz-16 fw-600"
                        >Zip / Postal Code</label
                      >
                      <b-form-input
                        v-model="userLocation.zipcode"
                        id="zip"
                        type="text"
                        placeholder="452018"
                        :error-messages="zipcodeErrors"
                        @input="$v.userLocation.zipcode.$touch()"
                        @blur="$v.userLocation.zipcode.$touch()"
                      ></b-form-input>
                      <p class="text-danger" v-if="zipcodeErrors[0]">{{zipcodeErrors[0]}}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="6" lg="6" sm="12">
                    <b-form-group class="mt-4">
                      <button type="submit" class="mr-2 btn btn-theme">
                        Update
                      </button>
                      <a
                        href="javascript:void(0);"
                        class="text-theme"
                        @click="isLocationedit = false; fetchUserDetails({params : {data : this.loginUserId}}); $v.$reset()"
                        >Cancel</a
                      >
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <b-modal id="delete-modal" size="md" title="Confirm Deletion">
        <div class="py-4 text-center">
          <p class="text-black fz-20 fw-600">
            {{deletConfirmmessage}}
          </p>
        </div>
        <template #modal-footer>
          <div class="text-right w-100">
            <a href="javascript:void(0);" class="mr-2 text-theme" @click="$bvModal.hide('delete-modal')"
              >Cancel</a
            >
            <b-button
              size="lg"
              class="btn btn-theme"
              @click="show = false"
            >
              Confirm
            </b-button>
          </div>
        </template>
    </b-modal>

    <b-modal id="img-modal" title="Edit photo" centered hide-footer no-close-on-backdrop> 
      <vue-anka-cropper
        :options="{
            aspectRatio: 1,
            closeOnSave: true,
            cropArea: 'box',
            croppedHeight: 400,
            croppedWidth: 400,
            cropperHeight: false,
            dropareaMessage: 'Drop file here or use the button below.',
            frameLineDash: [5,3],
            frameStrokeColor: 'rgba(255, 255, 255, 0.8)',
            handleFillColor: 'rgba(255, 255, 255, 0.2)',
            handleHoverFillColor: 'rgba(255, 255, 255, 0.4)',
            handleHoverStrokeColor: 'rgba(255, 255, 255, 1)',
            handleSize: 10,
            handleStrokeColor: 'rgba(255, 255, 255, 0.8)',
            layoutBreakpoint: 850,
            maxCropperHeight: 768,
            maxFileSize: 8000000,
            overlayFill: 'rgba(0, 0, 0, 0.5)',
            previewOnDrag: true,
            previewQuality: 0.65,
            resultQuality: 0.8,
            resultMimeType: 'image/jpeg',
            selectButtonLabel: 'Select Files',
            showPreview: true,
            skin: 'light',
            uploadData: {},
            uploadTo: false}"
          @cropper-error="someAction(errorMessage)"
          @cropper-file-selected="someAction(file)"
          @cropper-preview="someAction(imageSource)"
          @cropper-saved="UploadFile($event)"
          @cropper-cancelled="someAction()"
          @cropper-uploaded="someAction(serverResponse)"></vue-anka-cropper>

      <hr>
      <div class="text-right btn-group d-flex align-items-center">
        <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('img-modal')">Cancel</a>
        <a title="Save" class="ankaCropper__saveButton btn btn-theme visibility-hidden" v-on:click="uploadProfile()">Save</a>
      </div>
    </b-modal>

    <b-modal id="img-modal-1" title="Edit photo" centered hide-footer no-close-on-backdrop> 
      <vue-anka-cropper
        :options="{
            aspectRatio: 1,
            closeOnSave: true,
            cropArea: 'box',
            croppedHeight: 400,
            croppedWidth: 400,
            cropperHeight: false,
            dropareaMessage: 'Drop file here or use the button below.',
            frameLineDash: [5,3],
            frameStrokeColor: 'rgba(255, 255, 255, 0.8)',
            handleFillColor: 'rgba(255, 255, 255, 0.2)',
            handleHoverFillColor: 'rgba(255, 255, 255, 0.4)',
            handleHoverStrokeColor: 'rgba(255, 255, 255, 1)',
            handleSize: 10,
            handleStrokeColor: 'rgba(255, 255, 255, 0.8)',
            layoutBreakpoint: 850,
            maxCropperHeight: 768,
            maxFileSize: 8000000,
            overlayFill: 'rgba(0, 0, 0, 0.5)',
            previewOnDrag: true,
            previewQuality: 0.65,
            resultQuality: 0.8,
            resultMimeType: 'image/jpeg',
            selectButtonLabel: 'Select Files',
            showPreview: true,
            skin: 'light',
            uploadData: {},
            uploadTo: false}"
          @cropper-error="someAction(errorMessage)"
          @cropper-file-selected="someAction(file)"
          @cropper-preview="someAction(imageSource)"
          @cropper-saved="accountUploadFile($event)"
          @cropper-cancelled="someAction()"
          @cropper-uploaded="someAction(serverResponse)"></vue-anka-cropper>

      <hr>
      <div class="text-right btn-group d-flex align-items-center">
        <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('img-modal-1')">Cancel</a>
        <a title="Save" class="ankaCropper__saveButton btn btn-theme visibility-hidden" v-on:click="uploadProfile()">Save</a>
      </div>
    </b-modal>
    
  </div>
</template>
<script>
  
import { validationMixin } from 'vuelidate'
import { required, alpha,maxLength} from 'vuelidate/lib/validators'
import PencilEditIcon from "../../components/icons/PencilEditIcon.vue";
import { mapActions, mapGetters } from "vuex";
import vueAnkaCropper from 'vue-anka-cropper';
let base_url = " ";
let headToken = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("token"),
};
import axios from "axios";

export default {
  mixins: [validationMixin],

  validations: { 
    userInfo: {
          first_name: { required, alpha,maxLength: maxLength(30) },
          last_name: { required, alpha,maxLength: maxLength(30)},
          gender: { required},
          phone: { required}, 
      },
      userLocation:{
          timezone: { required},
          country_id: { required},
          state_id: { required},
          city_id: { required},
          address1: { required,maxLength: maxLength(200) },
          address2: { required},
          zipcode: { required,maxLength: maxLength(12) },
      },
      // companyDetails:{
      //   company_name:{ required},
      //   website:{ required},
      //   industry:{ required},
      //   employess:{ required},
      //   tagline:{ required},
      //   description:{ required},
      // },
  },

  components: {
    PencilEditIcon,
    vueAnkaCropper
  },
  data() {
    return {
      newChangeEmail:'',
      userLocation:{},
      deletConfirmmessage:"",
      isEdit: false,
      companyEdit:false,
      isLocationedit: false,
      selected: null,
      option: [
        { value: null, text: "Select an option" },
        { value: "1", text: "UTC (Coordinated Universal Time)" },
        { value: "1", text: "UTC Azores, Cape Verde Island" },
        { value: "1", text: "UTC+01:00 (Coordinated Universal Time) Dublin, Edinburgh, London" },
      ],
      companySize:[
        {text:"It's just me"},
        {text:"2-9 employees"},
        {text:"10-99 employees"},
        {text:"100-1000 employees"},
        {text:"More than 1000 employees"},
      ],
      text: null,
      cityList: [{ value: null, text: "Please select an option" }],
      stateList: [{ value: null, text: "Please select an option" }],

      genders: [
        { value: null, text: "Please select an option" },
        { value: "M", text: "Male" },
        { value: "F", text: "Female" },
      ],
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
      industryoptions:[],
      companyDetails:{
        image:'',
        company_name:'',
        website:'',
        industry:'',
        size:'',
        tagline:'',
        description:'',
      },
      submitCompanystatus:true,
      loginUserId:'',
    };
  },
  computed: {
     
      firstName() {
        const errors = []
        if (!this.$v.userInfo.first_name.$dirty) return errors 
        !this.$v.userInfo.first_name.required && errors.push('First name is required')
        !this.$v.userInfo.first_name.alpha && errors.push('Only character is allow')
        !this.$v.userInfo.first_name.maxLength && errors.push("Too long. Use at least 30 characters or less");
        return errors
      },
       lastName() {
        const errors = []
        if (!this.$v.userInfo.last_name.$dirty) return errors 
        !this.$v.userInfo.last_name.required && errors.push('First name is required')
        !this.$v.userInfo.last_name.alpha && errors.push('Only character is allow')
        !this.$v.userInfo.first_name.maxLength && errors.push("Too long. Use at least 30 characters or less"); 
        return errors
      },
      genderErrors(){
        const errors = []
        if (!this.$v.userInfo.gender.$dirty) return errors
        !this.$v.userInfo.gender.required && errors.push('Select Gender is required')
        return errors
      },
      timezoneErrors(){
        const errors = []
        if (!this.$v.userLocation.timezone.$dirty) return errors
        !this.$v.userLocation.timezone.required && errors.push('Select timezone is required')
        return errors
      },
      
      country_idErrors(){
        const errors = []
        if (!this.$v.userLocation.country_id.$dirty) return errors
        !this.$v.userLocation.country_id.required && errors.push('Select country id is required')
        return errors
      },
      state_idErrors(){
        const errors = []
        if (!this.$v.userLocation.state_id.$dirty) return errors
        !this.$v.userLocation.state_id.required && errors.push('Select state id is required')
        return errors
      },
      city_idErrors(){
        const errors = []
        if (!this.$v.userLocation.city_id.$dirty) return errors
        !this.$v.userLocation.city_id.required && errors.push('Select city id is required')
        return errors
      },
      address1Errors(){
        const errors = []
        if (!this.$v.userLocation.address1.$dirty) return errors
        !this.$v.userLocation.address1.required && errors.push('Select address line one is required')
        !this.$v.userLocation.address1.maxLength && errors.push("Too long. Use at least 200 characters or less"); 
        return errors
      },
      address2Errors(){
        const errors = []
        if (!this.$v.userLocation.address2.$dirty) return errors
        !this.$v.userLocation.address2.required && errors.push('Select address line two is required')
        return errors
      },
      zipcodeErrors(){
        const errors = []
        if (!this.$v.userLocation.zipcode.$dirty) return errors
        !this.$v.userLocation.zipcode.required && errors.push('zipcode is required')
        !this.$v.userLocation.zipcode.maxLength && errors.push("Too long. Use at least 12 characters or less"); 
        return errors
      },
      
       
    ...mapGetters({
      countryList: "global/getCountryList",
      timezoneList: "global/getTimeZone",
      // cityList: 'global/getCityList',
      // stateList: 'global/getStateList',
    }),
    ...mapGetters({
      userInfo: "settings/getUserDetails",
    }),
  },
  mounted() {
    this.loginUserId = this.getLoginUserIdRequest();
    this.fetchUserDetails({params : {data : this.loginUserId}});
    this.fetchData();
    this.getEmailChangeRequestPendingRequest();
    this.companyCategory();
    this.getClientCompany();
  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
    ...mapActions("global", [
      "fetchCountryList",
      "fetchCityList",
      "fetchStateList",
      "fetchTimeZone",
    ]),
    ...mapActions("settings", ["fetchUserDetails", "updateProfile"]),
    fetchData() {
      this.fetchCountryList();
      this.fetchTimeZone();
      axios
        .get(`${base_url}user/getUserDetails`, { headers: headToken })
        .then((response) => {
          if (response.data.result) {
            this.changecountry(response.data.result.country_id);
            this.changestate(response.data.result.state_id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // this fun is for to check url
    isUrlValid() {
      if (this.companyDetails.website =='') {
        this.submitCompanystatus = true;
        document.getElementById('websiteError').innerHTML='';
      }else{
        var res = this.companyDetails.website.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
        if(res == null){
            this.submitCompanystatus = false;
            document.getElementById('websiteError').innerHTML='Invalid Website';
        }else{
          document.getElementById('websiteError').innerHTML='';
          this.submitCompanystatus = true;
        }
      }
    },
    // this fun is for to submit client company data 
    async submitCompanyDetails(){
      if(this.companyDetails.website != ''){
        if(this.submitCompanystatus != true) return false;
      }
      var res = await this.genericAPIPOSTRequest({
        requestUrl:'addUpdateClientcompany',
        params:this.companyDetails
      })
      if(res){
        this.getClientCompany();
        this.companyEdit = false;
        this.$toastr.s('Company details updated');
      }
    },
    // this fun is for to get company category
    async companyCategory(){
      var res  = await this.genericAPIPOSTRequest({
        requestUrl:"common/getCompanyCategory",
        params:{}
      });
      this.industryoptions = res;
    },
    // this fun is for to get client company details
    async getClientCompany(){
      var res = await this.genericAPIPOSTRequest({
        requestUrl:'getClientcompany',
        params:{}
      });
      if(res!=''){
        this.companyDetails = res;
      }
    },
    // this fun for upload file
    async accountUploadFile(e){ 
      var getData = await this.genericAPIPOSTRequest({
          requestUrl: "uploadimageBase",
          params: {'url':e.croppedImageURI,'type':'clientCompany'},
      });
      // this.companyDetails.image = getData.img;
      this.userInfo.profile_picture_path = getData.img;
      // await this.updateProfile({'profile_picture_path' : getData.img}).then((res) => {
      //   if (res) {
      //     this.fetchUserDetails();
      //   }
      // });
      // await this.genericAPIPOSTRequest({
      //   requestUrl:'addUpdateClientcompany',
      //   params:{
      //     client_detail_id:this.companyDetails.client_detail_id,
      //     image: this.companyDetails.image
      //   }
      // });

      await this.genericAPIPOSTRequest({
            requestUrl: "user/updateUserData",
            params: {
              'profile_picture_path':this.userInfo.profile_picture_path,
              'data' : this.loginUserId
            },
      });
      this.$toastr.s('Profile Updated Successfully');
      this.$bvModal.hide('img-modal-1');
    },
    // this fun for upload file
    async UploadFile(e){ 
      var getData = await this.genericAPIPOSTRequest({
          requestUrl: "uploadimageBase",
          params: {'url':e.croppedImageURI,'type':'clientCompany'},
      });
      this.companyDetails.image = getData.img;

      // await this.genericAPIPOSTRequest({
      //   requestUrl:'addUpdateClientcompany',
      //   params:{
      //     client_detail_id:this.companyDetails.client_detail_id,
      //     image: this.companyDetails.image
      //   }
      // });
      this.$toastr.s('Profile Updated Successfully');
      this.$bvModal.hide('img-modal');
    },
    // this fun is for to find industry name
    findInsdutryCategory(_i){
      var res;
       this.industryoptions.find(data => {
        if(data.company_type_master_id == _i){
          res= data.company_type;
          return false
        }
      })
      return res;
    },
    changecountry(event) {
      this.cityList  = [];
      this.cityList.push({ city_id: null, city_name: "Please select an option" });
      axios
        .post(base_url + "common/getStateList", {
          country_id: event,
        })
        .then((response) => {
          if (response.data.status == true) {
            this.stateList = response.data.result;
          } else if (response.data.status == false) {
            this.stateList = response.data.result;
          }
        });
    },

    changestate(event) {
      axios
        .post(base_url + "common/getCityList", { state_id: event })
        .then((response) => {
          if (response.data.status == true) {
            this.cityList = response.data.result;
          } else if (response.data.status == false) {
            this.cityList = response.data.result;
          }
        });
    },
    countryChanges(e) {
      this.userInfo.phone_code = e.dialCode;
    },

    async updateAccountInfo() {
      this.$v.userInfo.$touch()
      if (!this.$v.userInfo.$invalid) { 
        this.userInfo.data = this.loginUserId;
        await this.updateProfile(this.userInfo).then((res) => {
            if (res) {
              this.isEdit = false;
              this.isLocationedit = false;
              this.fetchUserDetails({params : {data : this.loginUserId}});
              this.getEmailChangeRequestPendingRequest();
              if (res) {
                this.$toastr.s("Contact Info updated successfully");
              }
            }
          });
      }
    },
    async updateLocationInfo() {
      this.$v.userLocation.$touch()
      if (!this.$v.userLocation.$invalid) { 
        this.userLocation.data = this.loginUserId;
        await this.updateProfile(this.userLocation).then((res) => {
            if (res) {
              this.isEdit = false;
              this.isLocationedit = false;
              this.fetchUserDetails({params : {data : this.loginUserId}});
              if (res) {
                this.$toastr.s("Contact Info updated successfully");
              }
            }
          });
      }
    },
    deleteAccount(message){
      this.deletConfirmmessage = message;
    },
    getLocationInfo(){
      this.userLocation = this.userInfo;
    },
    async getEmailChangeRequestPendingRequest(){ 
      var res = await this.genericAPIPOSTRequest({
            requestUrl: "user/getEmailChangeRequestPendingRequest",
            params: {},
        }); 
      this.newChangeEmail = res.email;
    },
    async cancelEmailChangeRequest(){ 
      await this.genericAPIPOSTRequest({
            requestUrl: "user/cancelEmailChangeRequest",
            params: {},
        }); 
      this.newChangeEmail = '';
    },
    async resendEmail(){ 
        await this.genericAPIPOSTRequest({
            requestUrl: "user/resendEmail",
            params: {},
        });
        this.$toastr.s("Mail send successfully");
    }

  },
};
</script>
<style>
@media screen and (min-width: 320px) and (max-width: 1024px) {
  .w-sm-auto{width:auto!important;}
}
.gstin-section .custom-control-label:before{top: 0.35rem!important;}
.gstin-section .custom-control-label{color: #6c757d !important;font-weight:400;font-size:16px;}
</style>