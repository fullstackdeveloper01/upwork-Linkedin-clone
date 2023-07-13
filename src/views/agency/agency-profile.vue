<template>
  <b-container>
    <b-row class="mb-4 mt-100 freelancer-wrap mb-50 profile-wrap">
      <b-col xl="8" lg="8" sm="12">
        <div class="mb-2 d-md-flex align-items-center">
          <div class="mr-3 img-wrapper profile pos-rel">
            <span class="online"></span>
            <img
              :src="profileImg"
              class="img-fluid" v-b-modal.img-modal
            />
            <div class="edit-icon"><i aria-hidden="true" class="fa fa-pencil"></i></div>
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
          </div>
          <div class="content">
            <div class="d-md-flex align-items-center">
              <h4 class="mb-0 mr-2 text-black fz-34 fw-600">
                {{userFullDetails.company_settings.company_name}}  
                
              </h4>
              <label class="mr-2 badge badge-theme">TOP RATED</label>
              <!-- <a href="javascript:void(0);" class="text-theme">
                <PencilEditIcon />
              </a> -->
            </div>

            <ul class="mb-2">
              <li>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z"
                    fill="#999999"
                  />
                </svg>
              </li>
              <li>{{userFullDetails.country_name}}, {{userFullDetails.state_name}}, {{userFullDetails.city_name}}</li>
              <li class="d-flex align-items-center">
                    <ClockSmallIcon/> 
                    <span class="ml-2">{{timeClock}}</span>
                </li>
            </ul>
            <br />
            <ul class="mb-0">
              <li>
                <div class="star-rating">
                  <input type="radio" id="5-stars" name="rating" value="5" />
                  <label for="5-stars" class="star" :class="(userFullDetails.rating >= 1)?'active':''">&#9733;</label>
                  <input type="radio" id="4-stars" name="rating" value="4" />
                  <label for="4-stars" class="star" :class="(userFullDetails.rating >= 2)?'active':''">&#9733;</label>
                  <input type="radio" id="3-stars" name="rating" value="3" />
                  <label for="3-stars" class="star" :class="(userFullDetails.rating >= 3)?'active':''">&#9733;</label>
                  <input type="radio" id="2-stars" name="rating" value="2" />
                  <label for="2-stars" class="star" :class="(userFullDetails.rating >= 4)?'active':''">&#9733;</label>
                  <input type="radio" id="1-star" name="rating" value="1" />
                  <label for="1-star" class="star" :class="(userFullDetails.rating == 5)?'active':''">&#9733;</label>
                </div>
              </li>
              <li>{{userFullDetails.countRate}} reviews</li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col  xl="4" lg="4" sm="12" class="text-right text-sm-center">
         
        <button type="button" class="btn btn-theme" target="_blank" @click="$router.push('/agency-public-profile/'+encodedid(login_master_id))">See Public View</button>
      </b-col>
      <b-col cols="12" class="mb-3">
        <template>
          <b-card-group deck>
            <b-card class="p-0 bg-white">
              <b-row>
                <b-col lg="3" md="12" class="p-0">
                  <div class="px-4 py-4 border-bottom">
                    <b-card-text class="mb-0 text-black fz-24 fw-600"
                      >
                      <div class="d-md-flex align-items-center">
                        Office Locations 
                        <div class="ml-auto">
                          <a href="javascript:void(0);" v-b-modal.edit-location-modal @click="addLocationModel();locationModelTitle = 'Add Location'">
                            <i class="fa fa-plus text-theme fz-18 fw-400"></i>
                          </a>
                        </div>
                      </div>
                      <b-modal  centered no-close-on-backdrop hide-footer id="edit-location-modal" size="lg" :title="locationModelTitle" >
                        <div class="text-left">
                          <p class="fz-14 fw-500 text-black">The primary location is linked to your agency's Qapin account, and is used for administrative and financial purposes . Only the city and country is displayed on your agency profile.</p>
                          <form @submit.prevent="addupdateLocation()">
                            <b-form-group class="mb-4 pos-rel">
                              <label>Country</label>
                              <b-form-select 
                                v-model="addlocation.country_id"
                                :options="CountryData"
                                value-field="country_id" 
                                text-field="country_name"
                                @change="changecountry($event)"
                                @input="$v.addlocation.country_id.$touch()"
                                @blur="$v.addlocation.country_id.$touch()"
                                class="form-control">
                              </b-form-select>
                              <p class="text-danger" v-if="locationCountryErrors[0]">{{locationCountryErrors[0]}}</p>
                            </b-form-group>
                            <b-form-group class="mb-4 pos-rel">
                              <label>State</label>
                              <b-form-select
                              v-model="addlocation.state_id"
                              :options="stateData"
                              value-field="state_id" 
                              text-field="state_name"
                              @change="changestate($event)"
                              @input="$v.addlocation.state_id.$touch()"
                              @blur="$v.addlocation.state_id.$touch()"
                              class="form-control"></b-form-select>
                              <p class="text-danger" v-if="locationStateErrors[0]">{{locationStateErrors[0]}}</p>
                            </b-form-group>
                            <b-form-group class="mb-4 pos-rel">
                              <label>City</label>
                              <b-form-select
                              v-model="addlocation.city_id"
                              :options="cityData"
                              value-field="city_id" 
                              text-field="city_name"
                              @input="$v.addlocation.city_id.$touch()"
                              @blur="$v.addlocation.city_id.$touch()"
                              class="form-control"></b-form-select>
                              <p class="text-danger" v-if="locationCityErrors[0]">{{locationCityErrors[0]}}</p>
                            </b-form-group>
                            <b-form-group class="mb-4 pos-rel">
                              <label>Postal Code</label>
                              <b-form-input
                              maxlength="10" 
                              v-model="addlocation.zip_code"
                              @input="$v.addlocation.zip_code.$touch()"
                              @blur="$v.addlocation.zip_code.$touch()"
                              placeholder="Enter postal code"></b-form-input>
                              <p class="text-danger" v-if="locationZipcodeErrors[0]">{{locationZipcodeErrors[0]}}</p>

                            </b-form-group>
                            <b-form-group class="mb-4 pos-rel">
                              <label>Address</label>
                              <b-form-textarea id="textarea"
                              v-model="addlocation.address"
                              @input="$v.addlocation.address.$touch()"
                              @blur="$v.addlocation.address.$touch()"
                              placeholder="Enter something..."
                              rows="3"
                              max-rows="6"></b-form-textarea>
                              <p class="text-danger" v-if="locationAddressErrors[0]">{{locationAddressErrors[0]}}</p>

                            </b-form-group>
                            <b-form-group v-if="hideLocationpriOption">
                              <b-form-checkbox v-model="addlocation.is_head_office" value="1" class="d-flex align-items-center text-muted">Make Address as Primay </b-form-checkbox>
                            </b-form-group>
                            <hr>
                            <div class="w-100 text-right">
                              <a href="javascript:void(0);" class="text-theme mr-2" @click=" hideLocationpriOption = true; $bvModal.hide('edit-location-modal')">Cancel</a>
                              <b-button
                                type="submit"
                                size="lg"
                                class="btn btn-theme">
                                Save
                              </b-button>
                            </div>
                          </form>
                        </div>
                      </b-modal>
                    </b-card-text>
                  </div>
                  <div class="px-4 pt-5 pb-2 office-locations-scroll">
                    <b-list-group>
                      <b-list-group-item class="p-0 mb-3 border-0">
                        <div class="d-md-flex align-items-center" v-if="locationData.branch_primary!= undefined && locationData.branch_primary!=''">
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="border mr-2 mb-2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999" />
                          </svg>
                          <span class="mr-2 fz-18 fw-600 mb-2">{{(locationData.branch_primary.country_name!='')?locationData.branch_primary.country_name:''}}</span>
                          <div class="ml-auto">
                            <a href="javascript:void(0);" class="text-theme"   @click="editLocationmodel(locationData.branch_primary); locationModelTitle = 'Edit Location'" >
                              <PencilEditIcon />
                            </a>
                          </div>
                        </div>
                        <p class="fz-16 fw-600 text-muted"  v-if="locationData.branch_primary!= undefined && locationData.branch_primary!=''">
                          <span>
                            
                            {{locationData.branch_primary.state_name}}, {{locationData.branch_primary.city_name}}
                          </span>
                          {{locationData.branch_primary.zip_code}}
                          <br>
                          {{locationData.branch_primary.address}}

                        </p>
                        
                      </b-list-group-item>
                      <span v-if="locationData.head != undefined && locationData.head.length > 0">
                        <b-list-group-item class="p-0 mb-3 border-0" v-for="(loc,index) in locationData.head" :key="index">
                          <div class="d-md-flex align-items-center">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="border mr-2 mb-2">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999" />
                            </svg>
                            <span class="mr-2 fz-18 fw-600 mb-2">
                              {{(loc.country_name!='')?loc.country_name:''}}
                            </span>
                            <div class="ml-auto d-md-flex align-items-center">
                              <a href="javascript:void(0);" class="text-theme mr-2"   @click="editLocationmodel(loc); locationModelTitle = 'Edit Location'" >
                                <PencilEditIcon />
                              </a>
                              <a href="javascript:void(0);" v-b-modal.confirm-modal @click="removeLocationlId = loc.company_location_id">
                                <i class="fa fa-trash text-theme fz-18"></i>
                              </a>
                            </div>
                          </div>
                          <p class="fz-16 fw-600 text-muted"  v-if="loc!=''">
                            <span>
                              {{loc.state_name}}, {{loc.city_name}}
                            </span>
                            {{loc.zip_code}}
                            <br>
                            {{loc.address}}
                          </p>
                        </b-list-group-item>
                      </span>
                    </b-list-group>
                  </div>
                  <hr>
                  <div class="px-4 py-2 border-bottom">
                    <b-card-text class="mb-2 text-black fz-24 fw-600"
                      >Company Information</b-card-text>
                  </div>
                  <div class="px-4 pt-5 pb-2">
                    <b-list-group>
                      <b-list-group-item class="p-0 mb-3 border-0">
                        <div class="d-md-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600 mb-0">Agency Size </span>
                          <div class="ml-auto">
                            <a href="javascript:void(0);" class="text-theme"  v-b-modal.modal-editcompanySize @click="getCompanysize(); companySizevalue = companySettingData.company_size;" >
                            <PencilEditIcon />
                            </a>
                          </div>
                        </div>
                        <p class="fz-16 fw-600 text-muted"  v-if="companySettingData.company_size">{{companySettingData.company_size}} Workers</p>
                        <b-modal id="modal-editcompanySize" centered hide-footer no-close-on-backdrop title="Edit Agency Size" size="md">
                          <template>
                            <div>
                              <form @submit.prevent="addupdateagencySize" class="text-left">
                                <b-form-group id="Agency-size" label="Agency-size" label-for="Agency-size">
                                  <b-form-select
                                    id="Agency-size"
                                    class="form-control mb-3"
                                    :options="companysize"
                                    value-field="title" 
                                    text-field="title"
                                    value="Select an option" 
                                    v-model="companySizevalue"
                                    @input="$v.companySizevalue.$touch()"
                                    @blur="$v.companySizevalue.$touch()"
                                  ></b-form-select>
                                </b-form-group>
                                <p class="text-danger" v-if="agencySizeErrors[0]">{{agencySizeErrors[0]}}</p>
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('modal-editcompanySize')">Cancel</a>
                                  <b-button type="submit"  class="btn btn-theme">Save</b-button>
                                </div>
                              </form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item>
                      <b-list-group-item class="p-0 mb-3 border-0">
                        <div class="d-md-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Year Founded </span>
                          <div class="ml-auto">
                            <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-editFounded @click="companyfounded = companySettingData.company_founded">
                              <PencilEditIcon />
                            </a>
                          </div>
                        </div>
                        <p class="fz-16 fw-600 text-muted" v-if="companySettingData.company_founded">{{companySettingData.company_founded}} Year</p>

                        <b-modal id="modal-editFounded"  centered hide-footer no-close-on-backdrop  title="Add Year founded" size="md">
                          <template>
                            <div>
                              <form @submit.prevent="addupdateFounded" class="text-left">
                                <b-form-group id="founded" label="What year was the agency founded?" label-for="founded">
                                  <b-form-input
                                    id="founded"
                                    class="form-control mb-3"
                                    v-model="companyfounded"
                                    minlength="4"
                                    maxlength="4"
                                    oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"
                                    @input="$v.companyfounded.$touch()"
                                    @blur="$v.companyfounded.$touch()"
                                    :error-messages="foundedErrors"
                                    aria-placeholder="Enter Year of founded"
                                  ></b-form-input>
                                  <p style="color: #b7a7a7;margin-bottom: 0px!important;">Hint:- {{new Date().getFullYear()}}</p>
                                </b-form-group>
                                <p class="text-danger" v-if="foundedErrors[0]">{{foundedErrors[0]}}</p>
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-editFounded')" >Cancel</a>
                                  <b-button  type="submit" class="btn btn-theme">Save</b-button>
                                </div>
                              </form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item> 
                      <b-list-group-item class="p-0 mb-3 border-0">
                        <div class="d-md-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Language </span>
                          <div class="ml-auto">
                            <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-editlanguage @click="setLanguage()" >
                              <PencilEditIcon />
                            </a>
                          </div>
                        </div>
                        <span v-if="userFullDetails.language_arr.length > 0">
                          <p class="fz-16 fw-600 text-muted" v-for="(lang,index) in userFullDetails.language_arr" :key="index">
                              {{lang}} : {{_proficiency(userFullDetails.proficiency_id[index])}}
                          </p>
                        </span>
                        <b-modal id="modal-editlanguage"  title="Add Languages" centered hide-footer no-close-on-backdrop size="lg" >
                          <template>
                            <div>
                              <b-form @submit.prevent="updateUserProfile('language')">
                                <b-row v-for="(v,index) in proficiencyVal" :key="index">
                                  <b-col xl="5" lg="5" sm="12" :class="v">
                                    <b-form-group id="language" label="Language" label-for="language" >
                                      <b-form-select
                                        id="language"
                                        class="form-control mb-3"
                                        :options="languageData"
                                        text-field="value"
                                        value-field="id"
                                        required
                                        v-model="languageVal[index]"
                                        v-if="index == 0"
                                        disabled=""
                                      ></b-form-select>
                                      <b-form-select
                                        id="language"
                                        class="form-control mb-3"
                                        :options="languageData"
                                        text-field="value"
                                        value-field="id"
                                        required
                                        v-model="languageVal[index]"
                                        v-else
                                      ></b-form-select>
                                    </b-form-group>
                                  </b-col>
                                  <b-col xl="5" lg="5" sm="12">
                                    <b-form-group id="proficiency" label="Proficiency Level" label-for="proficiency level">
                                      <b-form-select
                                        id="proficiency"
                                        class="form-control mb-3"
                                        :options="proficiency"
                                        required
                                        v-model="proficiencyVal[index]"
                                        v-if="index == 0"
                                        
                                      ></b-form-select>
                                      <b-form-select
                                        id="proficiency"
                                        class="form-control mb-3"
                                        :options="proficiency"
                                        required
                                        v-model="proficiencyVal[index]"
                                        v-else
                                      ></b-form-select>
                                    </b-form-group>
                                  </b-col>
                                  <b-col xl="2" lg="2" sm="12" v-if="index == 0">
                                    <button type="button" class="btn btn-theme" @click="addLanguage()"><i class="fa fa-plus"></i></button>
                                  </b-col>
                                  <b-col xl="2" lg="2" sm="12" v-else>
                                    <button type="button" class="btn btn-danger" @click="removeLanguage(index)"><i class="fa fa-close"></i></button>
                                  </b-col>
                                </b-row>
                                <hr>
                                <b-col xl="12" lg="12" sm="12">
                                  <div class="text-right">
                                    <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('modal-editlanguage')">Cancel</a>
                                    <b-button  type="submit" class="btn btn-theme">Save</b-button>
                                  </div>
                                </b-col>
                              </b-form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item>
                    </b-list-group> 
                    <AgencyPriceRange :companyData='userFullDetails.company_settings'></AgencyPriceRange>
                  </div>

                  <!-- <hr> -->
                  <!-- <div class="px-4 py-2 border-bottom">
                    <b-card-text class="mb-2 text-black fz-24 fw-600">
                      <div class="d-md-flex align-items-center">
                        Skills 
                        <div class="ml-auto">
                          <a href="javascript:void(0);" v-b-modal.modal-addSkills @click="getSkills()">
                            <i class="fa fa-plus text-theme fz-18 fw-400"></i>
                          </a>
                        </div>
                      </div>
                    </b-card-text>
                  </div>
                  <div class="px-4 pt-5 pb-2" v-if="companySettingData.company_skills">
                    <b-list-group>
                      <b-list-group-item class="p-0 mb-3 border-0">
                        <div class="d-md-flex align-items-center" v-if="companySettingData.company_skills">
                          <i v-for="(catName,cids) in companySettingData.company_skills" :key="cids">
                              <span class="up-skill-badge inline-block align-items-center">
                                  {{catName.skill_name}}
                                  <a href="javascript:" class="text-muted">
                                      <div class="up-icon xs pt-1">
                                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr(cids)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                      </div>
                                  </a>
                              </span>
                              
                          </i>
                        </div>
                        <b-modal id="modal-addSkills" centered hide-footer no-close-on-backdrop :title="(addskills)?'Edit Skills':'Add Skills'" size="md">
                          <template>
                            <div>
                              <form @submit.prevent="addSkillData" class="text-left">
                                <b-form-group id="Agency-size" label="" label-for="Agency-size">
                                  <multiselect 
                                    v-model="addskills"
                                    placeholder="Search & add SKills"
                                    label="skill_name"
                                    track-by="skill_name"                                                
                                    :options="skillsData"
                                    :multiple="true"
                                    :taggable="true"
                                  ></multiselect>
                                </b-form-group>
                                <p class="text-danger" v-if="agencySizeErrors[0]">{{agencySizeErrors[0]}}</p>
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('modal-addSkills')">Cancel</a>
                                  <b-button type="submit"  class="btn btn-theme">Save</b-button>
                                </div>
                              </form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item>
                      
                    </b-list-group>
                  </div> -->
                  
                </b-col>
                <b-col lg="9" md="12" class="p-0 border-left">

                  <div class="px-5 py-5 border-bottom">

                    <div class="text-center"  v-if="tagLineVal == '' || tagLineVal == null">
                      <div class="pro-img-wrapper">
                        <img
                          :src="$store.state.baseUrlImg+'upload/freelancer/about.png'"
                          class="m-auto img-fluid"
                        />
                      </div>
                      <div class="pro-content">
                        <h4 class="mt-2 mb-0 text-black fz-24 fw-600">Tag Line</h4>
                        <p class="fz-16 fw-600 text-muted">
                          No Details Available
                        </p>
                        <a
                          href="javascript:void(0);"
                          class="text-theme fz-20 fw-600"
                          v-b-modal.add-tagLine
                          >+ Add</a
                        >
                        
                      </div>
                    </div>

                    <div class="profile-filled"  v-else>
                      <b-row>
                        <b-col xl="12" lg="12">
                          <div class="d-flex align-items-start">
                            <div>
                              <h4 class="mt-2 mb-4 text-black fz-24 fw-600"> Tag Line </h4>
                              <vue-read-more-smooth :lines="3">
                                <p class="fz-16 fw-600 text-muted line-break-anywhere">
                                  {{tagLineVal}}
                                </p>
                              </vue-read-more-smooth>
                            </div>
                            <div class="ml-auto">
                              <button class="mr-2 btn btn-outline-theme" @click="setTagLine()" v-b-modal.add-tagLine>
                                <i class="fa fa-pencil"></i>
                              </button>
                              <!-- <button class="btn btn-theme" @click="removeAboutUs()">
                                <i class="fa fa-trash"></i>
                              </button> -->
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>

                    <b-modal id="add-tagLine" centered  no-close-on-backdrop size="lg" title="Tag Line" >
                        <form @submit.prevent="addTagLine" class="text-left">
                        <b-row>
                          <b-col lg="12" sm="12">
                            <div class="form-group">
                              <label>Tag Line</label>
                              <b-form-input
                                id="textarea"
                                v-model="tagLineself"
                                placeholder="Tag Line.."
                                rows="3"
                                max-rows="3"
                                :error-messages="tagLineselfError"
                                required
                                @input="$v.tagLineself.$touch()"
                                @blur="$v.tagLineself.$touch()"
                              ></b-form-input>
                              <p class="text-danger" v-if="tagLineselfError[0]">{{tagLineselfError[0]}}</p>
                            </div>
                          </b-col>
                        </b-row>
                      </form>
                      <template #modal-footer>
                        <div class="text-right w-100">
                          <a
                            href="javascript:void(0);"
                            class="mr-2 text-theme" @click="$bvModal.hide('add-tagLine')"
                            >Cancel</a
                          >
                          <b-button
                            size="lg"
                            class="btn btn-theme"
                            @click="addTagLine()"
                          >
                            Save
                          </b-button>
                        </div>
                      </template>
                    </b-modal>
                  </div>

                  <div class="px-5 py-5 border-bottom">
                    <div class="text-center"  v-if="aboutYourselfVal == '' || aboutYourselfVal == null">
                      <div class="pro-img-wrapper">
                        <img
                          :src="$store.state.baseUrlImg+'/upload/freelancer/about.png'"
                          class="m-auto img-fluid"
                        />
                      </div>
                      <div class="pro-content">
                        <h4 class="mt-2 mb-0 text-black fz-24 fw-600">Overview</h4>
                        <p class="fz-16 fw-600 text-muted">
                          No Details Available
                        </p>
                        <a
                          href="javascript:void(0);"
                          class="text-theme fz-20 fw-600"
                          v-b-modal.add-about
                          >+ Add</a
                        >
                        
                      </div>
                    </div>

                    <div class="profile-filled"  v-else>
                      <b-row>
                        <b-col xl="12" lg="12">
                          <div class="d-flex align-items-start">
                            <div>
                              <h4 class="mt-2 mb-4 text-black fz-24 fw-600"> Overview </h4>
                              <vue-read-more-smooth :lines="3">
                                <p class="fz-16 fw-600 text-muted line-break-anywhere" v-html="getHtmlContent(aboutYourselfVal)">
                                  
                                </p>
                              </vue-read-more-smooth>
                            </div>
                            <div class="ml-auto">
                              <button class="mr-2 btn btn-outline-theme" @click="setAbout()" v-b-modal.add-about>
                                <i class="fa fa-pencil"></i>
                              </button>
                              <!-- <button class="btn btn-theme" @click="removeAboutUs()">
                                <i class="fa fa-trash"></i>
                              </button> -->
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>

                    <b-modal id="add-about" centered no-close-on-backdrop size="lg" title="Overview" >
                      <div>
                        <p class="mb-md-20">Use this space to show clients you have the skills and experience they're looking for.</p>
                        <ul class="list-style-disc">
                          <li>Describe your strengths and skills</li> 
                          <li>Highlight projects, accomplishments and education</li> 
                          <li>Keep it short and make sure it's error-free</li>
                        </ul> 
                      </div>
                      <!-- <a target="_blank" rel="noopener" href="javascript:void(0);" class="py-20 text-theme">Learn more</a>  -->
                      <form action="" class="text-left">
                        <b-row>
                          <b-col lg="12" sm="12">
                            <div class="form-group">
                              <label>Describe Yourself</label>
                              <b-form-textarea
                                id="textarea"
                                v-model="aboutYourself"
                                placeholder="Description here.."
                                rows="3"
                                max-rows="6"
                                :error-messages="aboutYourselfError"
                                required
                                @input="$v.aboutYourself.$touch()"
                                @blur="$v.aboutYourself.$touch()"
                              ></b-form-textarea>
                              <p class="text-danger" v-if="aboutYourselfError[0]">{{aboutYourselfError[0]}}</p>
                            </div>
                          </b-col>
                        </b-row>
                      </form>
                      <template #modal-footer>
                        <div class="text-right w-100">
                          <a
                            href="javascript:void(0);"
                            class="mr-2 text-theme" @click="$bvModal.hide('add-about')"
                            >Cancel</a
                          >
                          <b-button
                            size="lg"
                            class="btn btn-theme"
                            @click="addAbout()"
                          >
                            Save
                          </b-button>
                        </div>
                      </template>
                    </b-modal>
                  </div>
                  
                  <div class="px-5 py-5 border-bottom">
                    <div class="px-0 py-2 ">
                      <b-card-text class="mb-2 text-black fz-24 fw-600">
                        <div class="d-md-flex align-items-center">
                          Skills 
                          <div class="ml-auto">
                            <a href="javascript:void(0);" v-b-modal.modal-addSkills @click="getSkills()">
                              <i class="fa fa-plus text-theme fz-18 fw-400"></i>
                            </a>
                          </div>
                        </div>
                      </b-card-text>
                    </div>
                    <div class="px-0 pt-5 pb-2" v-if="companySettingData.company_skills">
                      <b-list-group>
                        <b-list-group-item class="p-0 mb-3 border-0">
                          <div class="d-inline align-items-center" v-if="companySettingData.company_skills">
                            <!-- <i> -->
                            <i v-for="(catName,cids) in companySettingData.company_skills" :key="cids">
                                <span class="up-skill-badge inline-block align-items-center px-2 py-1 fw-500">
                                    {{catName.skill_name}}
                                    <a href="javascript:" class="text-muted">
                                        <div class="up-icon xs pt-1">
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1" v-on:click="removefromCategoryarr(cids)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                        </div>
                                    </a>
                                </span>
                                
                            </i>
                          </div>
                          <b-modal id="modal-addSkills" centered hide-footer no-close-on-backdrop :title="(addskills)?'Edit Skills':'Add Skills'" size="md">
                            <template>
                              <div>
                                <form @submit.prevent="addSkillData" class="text-left">
                                  <b-form-group id="Agency-size" label="" label-for="Agency-size">
                                    <multiselect 
                                      v-model="addskills"
                                      placeholder="Search & add SKills"
                                      label="skill_name"
                                      track-by="skill_name"                                                
                                      :options="skillsData"
                                      :multiple="true"
                                      :taggable="true"
                                    ></multiselect>
                                  </b-form-group>
                                  <p class="text-danger" v-if="agencySizeErrors[0]">{{agencySizeErrors[0]}}</p>
                                  <hr>
                                  <div class="text-right">
                                    <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('modal-addSkills')">Cancel</a>
                                    <b-button type="submit"  class="btn btn-theme">Save</b-button>
                                  </div>
                                </form>
                              </div>
                            </template>
                          </b-modal>
                        </b-list-group-item>
                        
                      </b-list-group>
                    </div>
                  </div>
                  <div class="px-5 py-5 border-bottom">
                    <div class="text-center" v-if="getClientContractList.length==0">
                      <div class="pro-img-wrapper">
                        <img
                          :src="$store.state.baseUrlImg+'upload/freelancer/work-history.png'"
                          class="m-auto img-fluid"
                        />
                      </div>
                      <div class="pro-content">
                        <h4 class="mt-2 mb-0 text-black fz-24 fw-600">
                          Work History
                        </h4>
                        <p class="fz-16 fw-600 text-muted">
                          No Details Available
                        </p>
                      </div>
                    </div>

                    <div class="work-filled" v-else >
                      <b-row>
                        <b-col xl="12" lg="12">
                          <h4 class="mt-2 mb-4 text-black fz-24 fw-600">
                            Work History
                          </h4>
                          <div class="pb-4 mb-4 work-section" v-for="(contract , ind) in  getClientContractList" :key="ind">
                            <div class="d-flex align-items-center"  >
                              <div>
                                <h4 class="mb-1 fz-20 fw-600 text-theme"  >
                                 <a href="javascript:void(0)" class="text-theme" @click="$router.push({name:'contractDetail',path:'/freelancer/contract-detail/',params:{pid:contract.uniq_id}})"> {{contract.job_title}}
                                  </a>
                                </h4>
                                <h5 class="mb-0 fz-16 fw-400 text-muted">
                                  {{contract.from_date}}  {{contract.to_date}}
                                </h5>
                              </div>
                              <div class="ml-auto d-flex align-items-center">
                                <div class="star-rating">
                                  <input
                                    type="radio"
                                    id="5-stars"
                                    name="rating"
                                    value="5"
                                  />
                                  <label for="5-stars" class="star active"
                                    >&#9733;</label
                                  >
                                  <input
                                    type="radio"
                                    id="4-stars"
                                    name="rating"
                                    value="4"
                                  />
                                  <label for="4-stars" class="star active"
                                    >&#9733;</label
                                  >
                                  <input
                                    type="radio"
                                    id="3-stars"
                                    name="rating"
                                    value="3"
                                  />
                                  <label for="3-stars" class="star active"
                                    >&#9733;</label
                                  >
                                  <input
                                    type="radio"
                                    id="2-stars"
                                    name="rating"
                                    value="2"
                                  />
                                  <label for="2-stars" class="star active"
                                    >&#9733;</label
                                  >
                                  <input
                                    type="radio"
                                    id="1-star"
                                    name="rating"
                                    value="1"
                                  />
                                  <label for="1-star" class="star"
                                    >&#9733;</label
                                  >
                                </div>
                                <span class="ml-2 text-black fz-18 fw-600"
                                  >{{contract.rating}}</span
                                >
                              </div>
                            </div>
                            <vue-read-more-smooth :lines="4">
                              <p class="mt-4 text-black fz-16 fw-500" v-html="contract.scope_of_work">
                                
                              </p>
                            </vue-read-more-smooth>
                            <b-row>
                              <b-col xl="3" lg="3" sm="12">
                                <span class="text-black fz-20 fw-600"
                                  >{{contract.burget}}</span
                                >
                              </b-col>
                              <b-col xl="3" lg="3" sm="12">
                                <span class="text-black fz-20 fw-600"
                                  >Fixed Price</span
                                >
                              </b-col>
                            </b-row>
                          </div>
                      
                          <b-button v-if="$store.state.accountType=='freelancer'"
                            class="float-right btn btn-outline-theme"
                            v-b-toggle.sidebar-backdrop
                            @click="$router.push({name:'allContracts',path:'/freelancer/all-contracts'})"
                            >View More</b-button
                          >

                          <b-button
                          v-if="$store.state.accountType=='client'"
                            class="float-right btn btn-outline-theme"
                            v-b-toggle.sidebar-backdrop
                            @click="$router.push({name:'ClientContracts',path:'/client/all-contracts'})"
                            >View More</b-button
                          >
                          <b-sidebar
                            id="sidebar-backdrop"
                            title=""
                            
                            backdrop
                            shadow
                            right
                          >
                            <div class="px-3 py-2">
                              <b-card-group deck>
                                <b-card
                                  title-class="text-theme font-14"
                                  header-tag="header"
                                  footer-tag="footer"
                                  header-class="px-4 py-4 bg-white"
                                >
                                  <template #header>
                                    <div class="d-flex align-items-center">
                                      <h4 class="mb-0 text-black fz-24 fw-500">
                                        <b></b>
                                      </h4>
                                      <div class="ml-auto">
                                        <a
                                          href="javascript:void(0);"
                                          class="d-flex align-items-center text-theme"
                                          @click="gotojobDetails()"
                                        >
                                          <div class="w-3 mr-2 up-icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="#F2613C"
                                              aria-hidden="true"
                                              viewBox="0 0 14 14"
                                              role="img"
                                            >
                                              <path
                                                d="M12 7.252h2V14H0V0h6.602v2.014H2v9.971h10V7.252zM8.602 0v2.014h2.088L6.795 5.935l1.414 1.424L12 3.54v1.898h2V0H8.602z"
                                              ></path>
                                            </svg>
                                          </div>
                                          <span>Open in new window</span>
                                        </a>
                                      </div>
                                    </div>
                                  </template>
                                  <b-row>
                                    <b-col lg="12" xl="12" sm="12">
                                      <div
                                        class="px-4 py-4 pb-4 mb-4 work-section"
                                      >
                                        <div class="d-flex align-items-center">
                                          <div>
                                            <h4
                                              class="mb-1 fz-20 fw-600 text-theme"
                                            >
                                              Flutter Mobile Application
                                            </h4>
                                            <h5
                                              class="mb-0 fz-16 fw-400 text-muted"
                                            >
                                              03 Jan 2022 - 27 Jan 2022
                                            </h5>
                                          </div>
                                          <div
                                            class="ml-auto d-flex align-items-center"
                                          >
                                            <div class="star-rating">
                                              <input
                                                type="radio"
                                                id="5-stars"
                                                name="rating"
                                                value="5"
                                              />
                                              <label
                                                for="5-stars"
                                                class="star active"
                                                >&#9733;</label
                                              >
                                              <input
                                                type="radio"
                                                id="4-stars"
                                                name="rating"
                                                value="4"
                                              />
                                              <label
                                                for="4-stars"
                                                class="star active"
                                                >&#9733;</label
                                              >
                                              <input
                                                type="radio"
                                                id="3-stars"
                                                name="rating"
                                                value="3"
                                              />
                                              <label
                                                for="3-stars"
                                                class="star active"
                                                >&#9733;</label
                                              >
                                              <input
                                                type="radio"
                                                id="2-stars"
                                                name="rating"
                                                value="2"
                                              />
                                              <label
                                                for="2-stars"
                                                class="star active"
                                                >&#9733;</label
                                              >
                                              <input
                                                type="radio"
                                                id="1-star"
                                                name="rating"
                                                value="1"
                                              />
                                              <label for="1-star" class="star"
                                                >&#9733;</label
                                              >
                                            </div>
                                            <span
                                              class="ml-2 text-black fz-18 fw-600"
                                              >4.00</span
                                            >
                                          </div>
                                        </div>
                                        <p class="mt-4 text-black fz-16 fw-500">
                                          We regularly need Freelance Inspectors
                                          based in Jiangsu Province China for
                                          occasional Inspection of Mooring
                                          Chains, Valves, Forgings, Castings,
                                          etc. Candidates must possess a degree
                                          in Mechanical Engineering or
                                          Metallurgy and hold valid Level NDT
                                          Certificates in RT, UT & MT.
                                        </p>
                                        <b-row>
                                          <b-col xl="3" lg="3" sm="12">
                                            <span
                                              class="text-black fz-20 fw-600"
                                              >$800.00</span
                                            >
                                          </b-col>
                                          <b-col xl="3" lg="3" sm="12">
                                            <span
                                              class="text-black fz-20 fw-600"
                                              >Fixed Price</span
                                            >
                                          </b-col>
                                        </b-row>
                                      </div>
                                      
                                    </b-col>
                                  </b-row>
                                </b-card>
                              </b-card-group>
                            </div>
                          </b-sidebar>
                        </b-col>
                      </b-row>
                    </div>
                  </div>

                  <div class="px-5 py-5">
                    <div v-if="associatedFreelancerData.length > 0">
                      <div class="manager-details" >
                        <b-row v-if="agencyManagerCount > 0 ">
                          <b-col cols="12">
                            <h4 class="mt-2 mb-0 text-black fz-24 fw-600">
                              Bussiness Managers
                            </h4>
                          </b-col>
                        </b-row>
                        <b-row class="d-flex">
                          <template v-for="(manager,index) in associatedFreelancerData">
                            <b-col cols="4" class="py-1 d-flex align-items-center border br-20 mr-2 col-4 mt-2" :key="index" v-if="manager.business == 2">
                              <div class="manager-img-wrap mr-2">
                                <img :src="manager.profile_picture_path">
                              </div>
                              <div>
                                <h4 class="fz-18 fw-600 cursor-pointer mb-0" @click="$router.push('/public-profile/'+manager.login_master_id)">
                                  {{manager.first_name}} {{manager.last_name}}</h4>
                                  <label class="badge mr-2 d-flex text-black align-items-center fz-14 px-0 fw-500 pb-0" v-if="manager.talent_id > 0"><img :src="getTalentImg(manager.talent_id)" width="20" height="20" style="margin-right:10px;"><b>{{filterName(manager.talent_id)}}</b></label>
                                  <span class="fw-600 fz-14 mb-0 theme-border text-theme" v-if="manager.jobSuccessRate > 0">{{manager.jobSuccessRate}}% Job Success</span><br>
                              </div>
                            </b-col>
                          </template>
                        </b-row>
                        
                        <b-row v-if="agencyMemberCount > 0 ">
                          <b-col cols="12">
                            <h4 class="mt-2 mb-0 text-black fz-24 fw-600">
                              Agency Members
                            </h4>
                          </b-col>
                        </b-row>
                        <b-row class="d-flex">
                          <template v-for="(manager,index) in associatedFreelancerData" class="d-flex">
                            <b-col cols="4" class="py-1 d-flex align-items-center border br-20 mr-2 col-4 mt-2" :key="index" v-if="manager.business == 1">
                              <div class="manager-img-wrap mr-2">
                                <img :src="manager.profile_picture_path">
                              </div>
                              <div>
                                <h4 class="fz-18 fw-600 cursor-pointer mb-0" @click="$router.push('/public-profile/'+manager.login_master_id)">
                                  {{manager.first_name}} {{manager.last_name}}</h4>
                                  <label class="badge mr-2 d-flex text-black align-items-center fz-14 px-0 fw-500 pb-0" v-if="manager.talent_id > 0"><img :src="getTalentImg(manager.talent_id)" width="20" height="20" style="margin-right:10px;"><b>{{filterName(manager.talent_id)}}</b></label>
                                  <span class="fw-600 fz-14 mb-0 theme-border text-theme" v-if="manager.jobSuccessRate > 0">{{manager.jobSuccessRate}}% Job Success</span><br>
                              </div>
                            </b-col>
                          </template>
                        </b-row>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>

          <AgencyService></AgencyService>
          <AgencyProject editProject="1"></AgencyProject>
        </template>
      </b-col>
      <!-- model for confirm reject -->
      <b-modal id="confirm-modal" title="Remove Location" centered hide-footer size="md" no-close-on-backdrop> 
          <template>
          <div class="p-5 text-center m-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
              <h5 class="mt-4">Are you sure, Want to Remove this Location?</h5>
          </div>
          <hr>
          <div>
              <div class="text-right">
                  <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('confirm-modal')">Cancel</a>
                  <b-button type="button" class="btn btn-theme" @click="removeLocation(removeLocationlId)">Confirm</b-button>
              </div>
          </div>
          </template>
      </b-modal>
    </b-row>
  </b-container>
  
</template>
<script>

import { validationMixin } from 'vuelidate';
import { required,maxValue,maxLength,minLength } from 'vuelidate/lib/validators';
import VueReadMoreSmooth from "vue-read-more-smooth";
import vueAnkaCropper from 'vue-anka-cropper'
import PencilEditIcon from "../../components/icons/PencilEditIcon.vue"; 
import ClockSmallIcon from "../../components/icons/ClockSmall_Icon.vue"; 
import $ from 'jquery'; 
import { mapActions, mapGetters} from "vuex";
// import Multiselect from '@vueform/multiselect';
import Multiselect from 'vue-multiselect';
import AgencyPriceRange from "../../components/profile/agencyPriceRange.vue"; 
import AgencyProject from "../../components/profile/agency-project.vue"; 
import AgencyService from "../../components/profile/agencyService.vue";

// const number = helpers.regex("serial",/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/);
export default {
  mixins: [validationMixin],
  validations: { 
    aboutYourself: { 
      required,
      maxLength: maxLength(2000),
      minLength: minLength(200) 
    },
    tagLineself: { 
      required,
      maxLength: maxLength(100),
      minLength: minLength(20) 
    },
    
    addlocation:{
      country_id:{ required },
      state_id:{ required },
      city_id:{ required },
      address:{ required },
      zip_code:{ required },
    },

    companyfounded:{ 
      required,
      minLength: minLength(4),
      maxLength: maxLength(4), 
      maxValue: maxValue(new Date().getFullYear()),
    },
    companySizevalue:{ required },
  },
  components: { 
     VueReadMoreSmooth,
     PencilEditIcon,
     ClockSmallIcon,
     vueAnkaCropper,
     Multiselect,
     AgencyPriceRange,
     AgencyProject,
     AgencyService
  },
  data() {
    return { 
      timeClock:'',
      login_master_id:'',
      //new for test
      file:'',
      errorMessage:'',
      imageSource:'',
      cropData:'',
      serverResponse:'',
      //test
      is_primary:false,
      yearOfExperience:'',
      availabilityVal:'',
      languageVal:[],
      proficiencyVal:[],
      nationalityVal:'',
      tagLineVal:'',
      tagLineself:'',
      profileImg:'',
      userFullDetails:{
        language_arr:{},
        company_settings:{
          company_name:'',
        }
      },
      categoryData:[],
      getClientContractList:[],
      availabilityArr:[
        { value: null, text: 'Select availability' },
        { value: '1', text: 'Adhoc - Less than 30 hrs/week' },
        { value: '2', text: 'Residence - More than 40 hrs/week' },
      ],
      isAdd: false,
      aboutYourself: '',
      aboutYourselfVal:'',
      languages: [
        { value: null, text: 'Select Language' },
        { value: '1', text: 'English' },
        { value: '2', text: 'Chinese' },
      ],
      proficiency: [
        { value: null, text: 'Select Proficiency Level' },
        { value: '1', text: 'Basic' },
        { value: '2', text: 'Conversational' }, 
        { value: '3', text: 'Fluent' }, 
        { value: '4', text: 'Native or Bilingual' },
      ],
      nationalityArray:[],
      languageData:[],
      companysize: [],
      companySettingData:[],
      companySizevalue:'',
      companyfounded:'',
      locationModelTitle:'',
      CountryData:[],
      stateData:[],
      cityData:[],
      addlocation:{
        country_id:'',
        state_id:'',
        city_id:'',
        address:'',
        zip_code:'',
        is_head_office :'',
        company_location_id:''
      },
      locationData:[],
      removeLocationlId:'',
      hideLocationpriOption:true,
      skillsData:[],
      addskills:[],
      associatedFreelancerData:[],
      agencyManagerCount:0,
      agencyMemberCount:0,
      talentQualilty:[],
    }
  },
  computed:{
    ...mapGetters(["getTalentListdata"]),
    tagLineselfError(){
      const errors = []
      if (!this.$v.tagLineself.$dirty) return errors 
      !this.$v.tagLineself.required && errors.push('Tag line is required')
      !this.$v.tagLineself.maxLength && errors.push('Too long. Use at least 100 characters or less')
      !this.$v.tagLineself.minLength && errors.push('Tag line must be minimum 20 characters')
      return errors
    },
    aboutYourselfError() {
        const errors = []
        if (!this.$v.aboutYourself.$dirty) return errors 
        !this.$v.aboutYourself.required && errors.push('Overview is required')
        !this.$v.aboutYourself.maxLength && errors.push('Too long. Use at least 2000 characters or less')
        !this.$v.aboutYourself.minLength && errors.push('Overview must be minimum 200 characters')
        
        return errors
    },
     
    foundedErrors(){
      const errors = []
      if (!this.$v.companyfounded.$dirty) return errors 
      !this.$v.companyfounded.required && errors.push('Company founded is required')
      !this.$v.companyfounded.maxLength && errors.push('Too long. Use at least 4 characters')
      !this.$v.companyfounded.minLength && errors.push('Too short. Use at least 4 characters')
      !this.$v.companyfounded.maxValue && errors.push('Not Allow Greater Year than current')
        return errors
    },
    agencySizeErrors(){
      const errors = []
      if (!this.$v.companySizevalue.$dirty) return errors 
      !this.$v.companySizevalue.required && errors.push('Agency Size is required')
        return errors
    },

    locationCountryErrors(){
      const errors = []
      if (!this.$v.addlocation.country_id.$dirty) return errors 
      !this.$v.addlocation.country_id.required && errors.push('Country is required')
        return errors
    },

    locationStateErrors(){
      const errors = []
      if (!this.$v.addlocation.state_id.$dirty) return errors 
      !this.$v.addlocation.state_id.required && errors.push('State is required')
        return errors
    },

    locationCityErrors(){
      const errors = []
      if (!this.$v.addlocation.city_id.$dirty) return errors 
      !this.$v.addlocation.city_id.required && errors.push('City is required')
        return errors
    },

    locationAddressErrors(){
      const errors = []
      if (!this.$v.addlocation.address.$dirty) return errors 
      !this.$v.addlocation.address.required && errors.push('Address is required')
        return errors
    },
    locationZipcodeErrors(){
      const errors = []
      if (!this.$v.addlocation.zip_code.$dirty) return errors 
      !this.$v.addlocation.zip_code.required && errors.push('Zipcode is required')
        return errors
    },
      
  },
  async mounted() {
    this.getSocial();
    this.getClientContract();
    this.getUserDetails();
    this.getAssociatedFreelancer();
    this.getLocation();
    this.getLanguage();
    var UserData = JSON.parse(localStorage.getItem("loginUserData"));
    this.login_master_id = UserData.login_master_id;
    this.startTime();
  },
  methods: {
    // this fun is for to get filter name
    filterName(_i){
      var name;
      this.talentQualilty.map(data=>{
        if(data.talent_id == _i){
          name = data.talent_title;
          return false;
        }
      });
      return name;
    },
    // this fun is for to get the talent tag 
    getTalentImg(_i){
      var name;

      this.talentQualilty.map(data=>{
        if(data.talent_id==_i){
          name = data.img
          return false;
        }
      });
      return name;
    },
    // this fun is for to get the data of associated with agency
    async getAssociatedFreelancer() {
        var res =  await this.genericAPIPOSTRequest({
            requestUrl: "associatedFreelancer",
            params: {},
        });
        if(res){
          this.associatedFreelancerData = res;
          this.associatedFreelancerData.filter(data=>{
            if(data.business == 2){
              this.agencyManagerCount++;
            }else if(data.business != 2){
              this.agencyMemberCount++;
            }
          });
        }
        var tatentdata = await this.fetchTalentList({params:{"talent_type":"Badges"}});
        if(tatentdata.data.status == true){
          this.talentQualilty = tatentdata.data.result;
        }
    },
    // this fun is for to open add location model
    async addLocationModel(){
      this.getCountry();
      this.addlocation={
        country_id:'',
        state_id:'',
        city_id:'',
        address:'',
        zip_code:'',
        is_head_office :'',
        company_location_id:''
      };
    },
    // this fun is for to edit location 
    async editLocationmodel(data){
      console.log('data',data)
      var country = await this.genericAPIPOSTRequest({
          requestUrl: "common/getCountryList",
          params: {},
      });  
      this.CountryData = country;
      var state = await this.genericAPIPOSTRequest({
          requestUrl: "common/getStateList",
          params: { country_id: data.country_id },
      });  
      if(state.length > 0){
          this.stateData = state;
      }
      var city = await this.genericAPIPOSTRequest({
          requestUrl: "common/getCityList",
          params: { state_id: data.state_id },
      }); 
      if(city.length > 0){ 
          this.cityData = city;
      }
      this.addlocation.country_id=data.country_id;
      this.addlocation.state_id=data.state_id;
      this.addlocation.city_id=data.city_id;
      this.addlocation.address=data.address;
      this.addlocation.zip_code=data.zip_code
      this.addlocation.is_head_office=data.is_head_office;
      this.addlocation.company_location_id=data.company_location_id
      if (data.is_head_office == 1) {
        this.hideLocationpriOption = false;
      }else{
        this.hideLocationpriOption = true;
      }
      this.$bvModal.show('edit-location-modal');
    },
    
    ...mapActions(["genericAPIPOSTRequest","fetchTalentList"]),
    addLanguage(){
      this.proficiencyVal.push('');
      this.languageVal.push('');
    },
    removeLanguage(_i){
      this.proficiencyVal.splice(_i,1);
      this.languageVal.splice(_i,1);
    },
    // this fun is for to get language
    async getLanguage(){
      var res = await this.genericAPIPOSTRequest({
            requestUrl: "getLanguageList",
            params: {},
        });  
      this.languageData = res; 
    },
    startTime() {
      var timezone_name =  this.userFullDetails.timezone_name;
      if(timezone_name!='' && timezone_name != undefined){
          let options = {
              timeZone: timezone_name, 
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
          },
          formatter = new Intl.DateTimeFormat([], options);
          this.timeClock = formatter.format(new Date());
      }else{ 
          const today = new Date();
          let h = today.getHours();
          let m = today.getMinutes();
          let s = today.getSeconds();
          m = this.checkTime(m);
          s = this.checkTime(s);
          this.timeClock =  h + ":" + m + ":" + s;
      }
      setTimeout(this.startTime, 1000);
  }, 
    checkTime(i) {
        if (i < 10) {i = "0" + i}// add zero in front of numbers < 10
        return i;
    },
    uploadProfile(){
      $('.ankaCropper__saveButton').trigger( "click" );
    },
    // this fun for upload file
    async UploadFile(e){ 
      var getData = await this.genericAPIPOSTRequest({
          requestUrl: "uploadimageBase",
          params: {'url':e.croppedImageURI},
      });

      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
                    
      this.profileImg = getData.file+'?'+dateTime;
      this.$bvModal.hide('img-modal');
    },
    someAction(_v){
      console.log('data',_v);
    },
    async addAbout(){
      this.$v.aboutYourself.$touch()
          if (!this.$v.aboutYourself.$invalid) {  
            await this.genericAPIPOSTRequest({
                requestUrl: "user/addUpdateAboutYourself",
                params: {
                        aboutYourself: this.aboutYourself, 
                },
            });
            this.$bvModal.hide('add-about');
            this.getSocial();
          }   
    },
    async  getSocial(){
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "user/getSocial",
              params: {},
        }); 
        this.aboutYourselfVal = res.about_self_desc;
        this.tagLineVal       = res.tagline;
    },
    async  getNationality(){
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getNationality",
              params: {},
        }); 
        this.nationalityArray = res;
        this.nationalityVal = this.userFullDetails.nationality_id;
    }, 
    async  getClientContract(){
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "getClientContractList",
              params: {
                'filter':6,
                'user':this.$store.state.accountType,
                "search":{"limit":2}
              },
          });  
        this.getClientContractList = res;
    },
    // this fun is for to get user details
    async getUserDetails(){
      var userdata = JSON.parse(localStorage.getItem('loginUserData'));
      this.profileImg = this.$store.state.baseUrlImg+'/upload/profile_image/'+userdata.profile_picture_path;
      var response = await this.genericAPIPOSTRequest({
          requestUrl: "user/getUserDetails",
          params: {"data":[userdata.first_name+'-'+userdata.last_name+'-'+userdata.uuid,'miniProfileUrn'+userdata.uuid]},
      });
      this.userFullDetails = response;
      this.companySettingData =this.userFullDetails.company_settings;
      this.addskills = this.companySettingData.company_skills;
      this.languageCount = this.userFullDetails.language_id;
      this.profileImg = this.$store.state.baseUrlImg+'/upload/profile_image/'+response.profile_picture_path;
      this.getUserReviewCal();
      this.$store.dispatch("profileImg", this.profileImg); 
    },
    getuserDetail(value){
        this.userFullDetails = value;
    },
    async getUserReviewCal(){
      var res = await this.genericAPIPOSTRequest({
            requestUrl: "getUserReviewCal",
            params: {},
      });
      this.userFullDetails.ratingSum =   res.ratingSum;
      this.userFullDetails.countRate =   res.countRate;
      this.userFullDetails.rating    =   res.rating;
    },
    Availability: function(user) {
        if (user) {
            if (user.availability == 1) {
                return 'Adhoc - Less than 30 hrs/week';
            } else if (user.availability == 2) {
                return 'Residence - More than 40 hrs/week';
            }  
        }
    },
    setAvailability(){
      this.availabilityVal  = this.userFullDetails.availability
    },
    async removeAboutUs(){
      this.aboutYourself = '';
      this.addAbout();
    },
    async updateUserProfile(name){
      var data = {};
      if(name=='companySize'){
        data = {'company_size':this.companySizevalue};
      }
      if(name=='founded'){
        data = {'company_founded':this.companyfounded};
      } 

      if(name=='language'){
        // data = {'language_id':this.languageVal,'proficiency_id':this.proficiencyVal};
        var updatedata=[];
        for (let index = 0; index < this.languageVal.length; index++) {
          updatedata.push({
            'language_id':this.languageVal[index],
            'proficiency_id':this.proficiencyVal[index],
            'is_primary': (index == 0)?'Y':'N'
          })
        }
        console.log('updatedata',updatedata);
        await this.genericAPIPOSTRequest({
              requestUrl: "updateUserLanguage",
              params: updatedata,
        });
        this.$bvModal.hide('modal-editlanguage'); 
        this.getUserDetails();
        return false;
      } 
      if(name=='yearOfExperience'){
        data = {'year_of_experience':this.yearOfExperience};
      } 
     
      if(name=='companySize' || name=='founded'){
        data.company_details_id = this.companySettingData.company_details_id;
        data.data = this.getCurrentUserIdRequest();
        await this.genericAPIPOSTRequest({
          requestUrl: "updateCompanydata",
          params: data,
        });
      }else{
        await this.genericAPIPOSTRequest({
          requestUrl: "user/updateUserData",
          params: data,
        });
      }
      
      this.$bvModal.hide('modal-editcompanySize');
      this.$bvModal.hide('modal-editlanguage'); 
      this.$bvModal.hide('modal-editFounded');
      this.$bvModal.hide('modal-editYearsofExperience');  
      
      this.getUserDetails();
    },
      
    setLanguage(){
      this.proficiencyVal = this.userFullDetails.proficiency_id;
      this.languageVal = this.userFullDetails.language_id;
    }, 
    setPrimary(status){
      this.is_primary = status;
    },
    setAbout(){ 
      this.aboutYourself = this.userFullDetails.about_self_desc;
    },
    async addTagLine(){
        this.$v.tagLineself.$touch()
        if (!this.$v.tagLineself.$invalid) {  
          await this.genericAPIPOSTRequest({
              requestUrl: "user/addUpdateTagLine",
              params: {
                tagLineself: this.tagLineself, 
              },
          });
          this.$bvModal.hide('add-tagLine');
          this.getSocial();
        }   
    },
    setTagLine(){
      this.tagLineself = this.userFullDetails.tagline;
    },
    // this fun is for to get company size
    async getCompanysize(){ 
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "getCompanysize",
            params: {},
        });  
        this.companysize  = res;
    } ,
    // this fun is for to add or update Company founded
    async addupdateFounded(){
        this.$v.companyfounded.$touch()
        if (!this.$v.companyfounded.$invalid) {  
          this.updateUserProfile('founded');
        }   
    },
    // this fun is for to add or update agency size
    async addupdateagencySize(){
        this.$v.companySizevalue.$touch()
        if (!this.$v.companySizevalue.$invalid) {  
          this.updateUserProfile('companySize');
        }   
    },
    // this fun is for to get location data
    async getLocation(){
      var res = await this.genericAPIPOSTRequest({
          requestUrl: "getCompanyLocation",
          params: {},
      });  
      if(res){
        this.locationData = res;
      }
    },
    // this fun is for to get Country
    async getCountry(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getCountryList",
            params: {},
        });  
        this.CountryData = res;
        this.addlocation.country_id = '';
        this.addlocation.state_id = '';
        this.addlocation.city_id = '';
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
        this.addlocation.state_id = '';
        this.addlocation.city_id = '';
    },
    // THIS FUNCTIONIS FOR GET CITY DATA
    async changestate(event){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getCityList",
            params: { state_id: event },
        });  
        this.cityData = res;
        this.addlocation.city_id = '';
    },

    // this fun is for add update location
    async addupdateLocation(){
      this.$v.addlocation.$touch()
        if (!this.$v.addlocation.$invalid) {
          // console.log('response',this.addlocation);
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "addUpdateCompnayLocations",
              params: {
                location : this.addlocation,
              },
          }); 
          // console.log('rersponse',res);
          if (res) {
            this.getUserDetails();
            this.getLocation();
            if (this.locationModelTitle=='Add Location') {
              this.$toastr.s('Location successfully Added');
            } else {
              this.$toastr.s('Location successfully Updated');
            }
            this.hideLocationpriOption = true;
            this.$bvModal.hide('edit-location-modal');
          }
        }

    },
    // this fun is for to remove loacation 
    async removeLocation(_i){
      var res = await this.genericAPIPOSTRequest({
          requestUrl: "removeCompnayLocations",
          params: {
            company_location_id : _i,
            status : '1',
          },
      }); 
      if (res) {
        this.getUserDetails();
        this.getLocation();
        this.$toastr.s('Location Removed successfully');
        this.$bvModal.hide('confirm-modal');
      }
    },
    // this fun is for to remove skills
    removefromCategoryarr(index){
      if(this.companySettingData.company_skills){
        this.companySettingData.company_skills.splice(index, 1); 
        this.addskills= this.companySettingData.company_skills;
        this.addSkillData();
        // \\OR   
        // this.$delete(this.category_data,index);
        // \\both will do the same
      }
    },
    // this fun is for to get skills data
    async getSkills(){
      var res = await this.genericAPIPOSTRequest({
          requestUrl:'common/getSkills',
          params:{}
      });
      if(res.length > 0 ){
        this.skillsData = res
      }
    },

    // this fun is for to add skills

    async addSkillData(){
      if(this.addskills.length > 0){
        console.log('data',this.addskills)
        var res = await this.genericAPIPOSTRequest({
          requestUrl:'updateCompanydata',
          params:{
            company_skills: this.addskills,
            company_details_id: this.companySettingData.company_details_id,
            data:this.getCurrentUserIdRequest()
          }
        });
        if(res){
          this.getUserDetails();
          this.$toastr.s('Skill Added Successfully');
          this.$bvModal.hide('modal-addSkills');
        }
      }
    },
  },
}
</script>
<!-- <style src="@vueform/multiselect/themes/default.css"></style> -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
  .btn-small{padding: 4px 8px!important;}
  .btn-small:hover{padding: 4px 8px!important;}
  .ankaCropper__saveButton{
    /* display:none!important; */
  }
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
  .freelancer-wrap .br-50 {
    border-radius: 50% !important;
  }
  .freelancer-wrap .fz-14 {
    font-size: 14px;
  }
  .freelancer-wrap .card {
    border-radius: 20px !important;
  }
  .freelancer-wrap .card-body {
    border-radius: 20px;
  }
  .freelancer-wrap .card-body {
    border-radius: 0 0 20px 20px;
  }
  .freelancer-wrap .card-header {
    border-radius: 20px 20px 0 0 !important;
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
  .mb-50 {
    margin-bottom: 50px !important;
  }
  .profile-wrap .img-wrapper {
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 110px;
    width: 110px;
  }
  /* .profile-wrap .img-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  } */
  .profile-wrap .content ul {
    margin-left: -35px;
    display: inline-flex;
    align-items: center;
  }
  .profile-wrap .content ul li {
    margin-right: 5px;
  }
  .profile-wrap .star-rating {
    display: flex;
    font-size: 1.5em;
    justify-content: space-between;
    padding: 0;
    text-align: center;
    width: 4em;
  }
  .profile-wrap .star-rating input {
    display: none;
  }
  .profile-wrap .star-rating label {
    color: #d4d5cf;
  }
  .profile-wrap .star-rating label.active {
    color: #f2613c;
  }
  .profile-wrap input ~ label:before {
    display: none;
  }
  .badge-theme {
    background: rgba(242, 97, 60, 0.1);
    border-radius: 6px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    color: #f2613c !important;
    padding: 6px 12px !important;
  }
  .profile-wrap .card-body {
    padding-top: 0px !important;
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
  .pro-content {
    max-width: 700px;
    margin: 0 auto;
  }
  .border-bottom:last-child {
    border-bottom: none !important;
  }
  .full-width-wrapper .card-body {
    padding: 0px;
  }
  .work-filled .star-rating label.active {
    color: #ffd260 !important;
  }
  .border-left {
    border-left: 1px solid #dee2e6 !important;
  }
  .work-filled .work-section {
    border-bottom: 1px solid #dee2e6 !important;
  }
  .work-filled .work-section:last-child {
    border-bottom: 0px !important;
  }
  
  .modal select {
    -webkit-appearance: menulist !important; /* override vuetify style */
    -moze-appearance: menulist !important; /* override vuetify style */
    appearance: menulist !important; /* override vuetify style */
  }
  .other-information .tags span {
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 100px;
    padding: 6px 15px !important;
    font-size: 14px;
    --skill-height: 30px;
    margin: 0 5px 10px 0;
    padding: 0 10px;
    border-radius: 15px;
    font-size: 12px;
    line-height: 1.5;
    cursor: default;
    color: #666666;
    display: inline-block;
    font-weight: 600;
  }
  .education-section .details {
    margin-left: 87px;
  }
  .accordion {
    border: 1px solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 12px;
  }
  .accordion .btn-secondary {
    color: #000 !important;
    background-color: #fff !important;
    width: 100%;
    text-align: left;
    border: 0px;
    padding: 10px 10px;
  }
  .accordion .btn-check:focus + .accordion .btn-secondary,
  .accordion .btn-secondary:focus {
    box-shadow: none;
    border-color: transparent;
  }
  .accordion .card-body {
    padding: 0 10px;
  }
  .list-style-disc{list-style: disc;}
  /*.list-group-item:first-child{padding-bottom:.8rem!important;}*/
  .line-break-anywhere{line-break:anywhere;}
  .ankaCropper.light {
      background: #0f1114;
      color: #eee;
  }
  
  .ankaCropper.light .ankaCropper__droparea {
      border: 2px dashed #3e424b;
      background-color: #fff;
      color: #000;
      text-align: center;
      padding: 50px;
  }
  
  .ankaCropper.light .ankaCropper__saveButton{
    background: #334f90;
      color: #fff;
      float: right;
      padding: 10px;
      align-items: center;
      display:flex;
  }
  .ankaCropper.light .ankaCropper__selectButton {
      background: #fff;
      color: #334f90;
      font-weight: 600;
  }
  
  .ankaCropper.light .ankaCropper__selectButton:hover{
    background: #fff;
      color: #334f90;
      font-weight: 600;
  }
  
  .ankaCropper.light .ankaCropper__saveButton:hover {
      background: #335dbe;
      display:inline-flex;
      align-items-center:center;
  }
  
  .ankaCropper.light .ankaCropper__navigation {
      background: #1d2227;
      display: inline-block;
      width: 100%;
  }
  
  .ankaCropper.light .ankaCropper__navButton {
      background: #272c31;
      display: inline-block;
      padding: 14px;
  }
  
  .ankaCropper.light .ankaCropper__navButton svg {
      stroke: #eee;
  }
  
  .ankaCropper.light .ankaCropper__navButton:hover {
      background: #000;
  }
  .ankaCropper__mainArea div:first-child{width:100%!important;}
  .ankaCropper__mainArea div canvas{width:100%!important;}
  .ankaCropper__previewArea{
    width:150px!important;height:100px!important;padding:6px 12px!important;    margin-top: 30px;
  }
  .ankaCropper__previewArea img{
    width:100%!important;height:100%!important;border-radius:13px!important;
  }
  .btn-group{
    float: right;
    margin-top: 86px;
  }
  .ankaCropper.light .ankaCropper__saveButton {
      background: #334f90;
      color: #fff;
      float: right;
      padding: 10px;
      align-items: center;
      display: flex;
      border-radius: 6px!important;
      background-color: #F2613C!important;
      box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%)!important;
      border: 1px solid #F2613C!important;
      color: #ffffff!important;
      font-family: "Source Sans Pro"!important;
      font-size: 14px!important;
      font-weight: 600!important;
      line-height: 20px!important;
      text-align: center!important;
      padding: 8px 12px!important;
      position: absolute;
      bottom: 22px;
      right: 16px;
      z-index: 1;
  }
  .ankaCropper__saveButton svg{display:none;}
  .remove-btn-pop{ margin-top: 30px!important; padding: 11px 12px!important;}
  /*@media only screen and (min-width: 320px) and (max-width: 815px) {
    .text-sm-right{text-align:left!important;}
    .text-sm-center{text-align:center!important;}
    .m-sm-auto{margin:auto!important;}
    .top-rated-edit svg{margin:auto;}
  }*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  .office-locations-scroll{
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .multiselect__content{
    padding-left: 0px !important;
  }
</style>
