<template>
  <b-container>
    <b-row class="mb-4 mt-100 freelancer-wrap mb-50 profile-wrap">
      <b-col xl="8" lg="8" sm="12">
        <div class="mb-2 d-md-flex align-items-center">
          <div class="mr-3 img-wrapper profile pos-rel">
            <span class="online"></span>
            <img
              :src="$store.state.baseUrlImg+'/upload/profile_image/'+$store.state.currentUserData.profile_picture_path"
              class="img-fluid" v-b-modal.img-modal
            />
            <div class="edit-icon" v-b-modal.img-modal>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </div>
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
                {{userFullDetails.first_name}} {{ (userFullDetails.last_name!=''&& userFullDetails.last_name!=null) ? userFullDetails.last_name.slice(0,1) :'' }}.
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
        <button
          type="button"
          class="mr-2 btn btn-outline-theme"
          @click="$router.push('/settings')"
        >
          Profile Setting
        </button>
        <button type="button" class="btn btn-theme" target="_blank" @click="$router.push('/public-profile/'+login_master_id)">See Public View</button>
      </b-col>
      <b-col cols="12" class="mb-3">
        <template>
          <b-card-group deck>
            <b-card class="p-0 bg-white">
              <b-row>
                <b-col lg="3" md="12" class="p-0">
                  <div class="px-5 py-5 border-bottom">
                    <b-card-text class="mb-2 text-black fz-24 fw-600"
                      >View Profile</b-card-text
                    >
                  </div>
                  <div class="px-5 pt-5 pb-2">
                    <b-list-group>
                      <b-list-group-item class="p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Main Category </span>
                          <a href="javascript:void(0);" class="text-theme"  v-b-modal.edit-category-modal   @click ="setPrimary(true)">
                            <PencilEditIcon />
                          </a>
                        </div>
                        <p class="fz-18 fw-400 text-muted" v-if="userFullDetails.mainCategory_Name" > <span  > {{userFullDetails.mainCategory_Name}}  </span></p>
                      </b-list-group-item>


                      <!-- <b-list-group-item class="p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Category </span>
                          <a href="javascript:void(0);" class="text-theme"  v-b-modal.edit-category-modal   @click ="setPrimary(false)">
                            <PencilEditIcon />
                          </a>
                        </div>
                        <p class="fz-18 fw-400 text-muted" > <span v-for="(category,cids) in userFullDetails.qp_role" :key="cids"> {{(category.is_primary=='Y')?' ':category.name +','}} </span></p>
                      </b-list-group-item> -->
                      <b-list-group-item class="p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Nationality </span>
                          <a href="javascript:void(0);" class="text-theme"  v-b-modal.modal-editNationality @click="getNationality()" >
                           <PencilEditIcon />
                          </a>
                        </div>
                        <p class="fz-18 fw-400 text-muted" v-if="userFullDetails.nationality">{{userFullDetails.nationality}}</p>
                        <b-modal id="modal-editNationality" centered hide-footer no-close-on-backdrop title="Edit Nationality" size="md">
                          <template>
                            <div>
                              <b-form>
                                <b-form-group id="Nationality" label="Nationality" label-for="Nationality">
                                  <b-form-select
                                    id="Nationality"
                                    class="form-control mb-3"
                                    :options="nationalityArray"
                                    value-field="nationality_id"
                                    text-field="nationality"
                                    v-model="nationalityVal"
                                    required
                                  ></b-form-select>
                                </b-form-group>
                                
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('modal-editNationality')">Cancel</a>
                                  <b-button  class="btn btn-theme" v-on:click="updateUserProfile('nationality')">Save</b-button>
                                </div>
                              </b-form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item>
                      <b-list-group-item class="p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Language </span>
                          <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-editlanguage @click="setLanguage()" >
                            <PencilEditIcon />
                          </a>
                        </div>
                        <span v-if="userFullDetails.language_arr.length > 0">
                          <p class="fz-18 fw-400 text-muted" v-for="(lang,index) in userFullDetails.language_arr" :key="index">
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
                                    <a href="javascript:void(0);" class="text-theme mr-2"  @click="getUserDetails() ;$bvModal.hide('modal-editlanguage')">Cancel</a>
                                    <b-button  type="submit" class="btn btn-theme">Save</b-button>
                                  </div>
                                </b-col>
                              </b-form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item>
                      <b-list-group-item class="p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Availability </span>
                          <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-editAvailability @click="setAvailability()">
                            <PencilEditIcon />
                          </a>
                        </div>
                        <p class="fz-18 fw-400 text-muted">{{Availability(userFullDetails)}}</p>

                        <b-modal id="modal-editAvailability"  centered hide-footer no-close-on-backdrop  title="Add Availability" size="md">
                          <template>
                            <div>
                              <b-form>
                                <b-form-group id="Availability" label="Availability" label-for="Availability">
                                  <b-form-select
                                    id="Availability"
                                    class="form-control mb-3"
                                    :options="availabilityArr"
                                    v-model="availabilityVal"
                                    required
                                  ></b-form-select>
                                </b-form-group>
                                
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-editAvailability')" >Cancel</a>
                                  <b-button   class="btn btn-theme" v-on:click="updateUserProfile('availability')">Save</b-button>
                                </div>
                              </b-form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item>
                      <!-- <b-list-group-item class="p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600"
                            >Years of Experience
                          </span>
                          <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-editYearsofExperience>
                           <PencilEditIcon />
                          </a>
                        </div>  
                        <p class="fz-18 fw-400 text-muted">{{userFullDetails.year_of_experience}} Years</p>  
                          <b-modal id="modal-editYearsofExperience" centered title="Edit Years of Experience" hide-footer size="md">
                          <template>
                            <div>
                              <b-form>
                                <b-form-group id="YearsofExperience" label="Years of Experience" label-for="Years of Experience">
                                  <b-form-input
                                    id="editYearsofExperience"
                                    class="form-control mb-3"
                                    v-model="yearOfExperience"
                                  ></b-form-input>
                                </b-form-group>
                                
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-editYearsofExperience')">Cancel</a>
                                  <b-button   class="btn btn-theme" v-on:click="updateUserProfile('yearOfExperience')">Save</b-button>
                                </div>
                              </b-form>
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item> -->
                      <b-list-group-item class="p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                          <span class="mr-2 fz-18 fw-600">Rate</span>
                          <a href="javascript:void(0);" class="text-theme"  v-b-modal.editrate  @click="setRate()">
                            <PencilEditIcon />
                          </a>
                          
                        </div>
                        <p class="fz-18 fw-400 text-muted">
                           $ {{userFullDetails.hourly_rate}} / Day
                          </p>
                        <b-modal id="editrate" centered hide-footer no-close-on-backdrop title="Change hourly Rate" size="lg">
                          <template>
                            <div>
                              <p class="fz-18 fw-500 text-black">Please note that your new per day rate will only apply to new contracts.</p>
                              <p class="fz-18 fw-500 text-black">The Qapin Service Fee is 20%  </p>

                              <p class="fz-18 fw-500 text-muted mb-4">Your profile rate: ${{hourlyRate}} /Day</p>
                              
                              <b-form>
                                <div class="d-md-flex align-items-center mb-4">
                                  <div class="flex-1 mb-10 mb-md-0">
                                    <div>
                                      <strong class="d-block fz-18">Day Rate</strong>
                                    </div>
                                    <div>
                                      <small class="d-block">Total amount the client will see</small>
                                    </div>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    <div class="up-input-group">
                                      <b-input-group size="md" prepend="$" id="hourlyRate">
                                        <b-form-input
                                          id="editHourlyRate"
                                          class="form-control"
                                          v-model="hourlyRate"
                                          @change="setServiceCharge()"
                                          @input="$v.hourlyRate.$touch()"
                                          @blur="$v.hourlyRate.$touch()"
                                          :error-messages="hourlyRateErrors"
                                          maxlength=10
                                          type="number"
                                        ></b-form-input>
                                      </b-input-group>
                                      <p class="text-danger" v-if="hourlyRateErrors[0]">{{hourlyRateErrors[0]}}</p>
                                    </div>
                                    <div class="ml-5"><strong> /Day </strong></div>
                                  </div>
                                </div>
                                <hr>
                                <div class="d-md-flex align-items-center mb-4">
                                  <div class="flex-1 mb-10 mb-md-0">
                                    <div>
                                      <strong class="d-block fz-18">20% Qapin Service Fee </strong>
                                    </div>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    <div class="up-input-group">
                                      <b-input-group size="md" prepend="$" id="QapinServices">
                                        <b-form-input
                                          id="QapinServices"
                                          class="form-control"
                                          v-model="QapinServices"
                                          readonly
                                          maxlength=10
                                          type="number"
                                        ></b-form-input>
                                      </b-input-group>
                                    </div>
                                    <div class="ml-5"><strong> /Day </strong></div>
                                  </div>
                                </div>
                                <hr>
                                <div class="d-md-flex align-items-center mb-4">
                                  <div class="flex-1 mb-10 mb-md-0">
                                    <div>
                                      <strong class="d-block fz-18">You'll Receive</strong>
                                    </div>
                                    <div>
                                      <small class="d-block">The estimated amount you'll receive after service fees</small>
                                    </div>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    <div class="up-input-group">
                                      <b-input-group size="md" prepend="$" id="willReceive">
                                        <b-form-input
                                          id="willReceive"
                                          class="form-control"
                                          v-model="willReceive"
                                          @change="setReceiveCharge()"
                                          maxlength=10
                                          type="number"
                                          readonly
                                        ></b-form-input>
                                      </b-input-group>
                                    </div>
                                    <div class="ml-5"><strong> Day </strong></div>
                                  </div>
                                </div>
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('editrate')">Cancel</a>
                                  <b-button   class="btn btn-theme" v-on:click="updateUserProfile('editrate')">Save</b-button>
                                </div>
                              </b-form>

                              <!--<b-form>
                                <b-form-group id="hourlyRate" label="Hourly Rate" label-for="Hourly Rate">
                                  <b-form-input
                                    id="editHourlyRate"
                                    class="form-control mb-3"
                                    v-model="hourlyRate"
                                    @change="setServiceCharge()"
                                  ></b-form-input>
                                </b-form-group>
 
                                <b-form-group id="QapinServices" label="20% Qapin Service Fee" label-for="20% Qapin Service Fee">
                                  <b-form-input
                                    id="QapinServices"
                                    class="form-control mb-3"
                                    v-model="QapinServices"
                                    readonly
                                  ></b-form-input>
                                </b-form-group>

                                <b-form-group id="willReceive" label="You'll Receive" label-for="You'll Receive">
                                  <b-form-input
                                    id="willReceive"
                                    class="form-control mb-3"
                                    v-model="willReceive"
                                    @change="setReceiveCharge()"
                                    
                                  ></b-form-input>
                                </b-form-group>
                                
                                <hr>
                                <div class="text-right">
                                  <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('editrate')">Cancel</a>
                                  <b-button   class="btn btn-theme" v-on:click="updateUserProfile('editrate')">Save</b-button>
                                </div>
                              </b-form>-->
                            </div>
                          </template>
                        </b-modal>
                      </b-list-group-item>
                    </b-list-group>
                  </div>
                </b-col>
                <b-col lg="9" md="12" class="p-0 border-left">
                  <div class="px-5 py-5 border-bottom">
                    <div class="text-center"  v-if="tagLineVal == '' || tagLineVal == null">
                      <div class="pro-img-wrapper">
                        <img
                          src="http://qapin_mvp5.manageprojects.in/upload/freelancer/about.png"
                          class="m-auto img-fluid"
                        />
                      </div>
                      <div class="pro-content">
                        <h4 class="mt-2 mb-0 text-black fz-24 fw-600">Tag Line</h4>
                        <p class="fz-18 fw-400 text-muted">
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
                                <p class="fz-18 fw-500 text-muted line-break-anywhere">
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
                            class="mr-2 text-theme" @click="$bvModal.hide('add-tagLine'); $v.$reset()"
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
                          src="http://qapin_mvp5.manageprojects.in/upload/freelancer/about.png"
                          class="m-auto img-fluid"
                        />
                      </div>
                      <div class="pro-content">
                        <h4 class="mt-2 mb-0 text-black fz-24 fw-600">About</h4>
                        <p class="fz-18 fw-400 text-muted">
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
                              <h4 class="mt-2 mb-4 text-black fz-24 fw-600"> About </h4>
                              <vue-read-more-smooth :lines="3">
                                <p class="fz-18 fw-500 text-muted line-break-anywhere" v-html="getHtmlContent(aboutYourselfVal)">
                                  
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
                            class="mr-2 text-theme" @click="$bvModal.hide('add-about');$v.$reset()"
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

                  <div class="px-5 py-5">
                    <div class="text-center" v-if="getClientContractList.length==0">
                      <div class="pro-img-wrapper">
                        <img
                          src="http://qapin_mvp5.manageprojects.in/upload/freelancer/work-history.png"
                          class="m-auto img-fluid"
                        />
                      </div>
                      <div class="pro-content">
                        <h4 class="mt-2 mb-0 text-black fz-24 fw-600">
                          Work History
                        </h4>
                        <p class="fz-18 fw-400 text-muted">
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
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
        </template>
      </b-col>
      <b-col cols="12" class="mb-3 full-width-wrapper">
        <template>
          <b-card-group deck>
            <b-card class="p-0 bg-white">
              <!-- Certification Start -->
              <certifications v-if="$store.state.accountType=='freelancer'"></certifications>
              <!-- Certification End -->
              <!-- Industry Start -->
              <industry v-if="$store.state.accountType=='freelancer'"></industry>
              <!-- Industry End -->
              <!-- <commodity :user="userFullDetails"></commodity>  -->
              <Mycategory @userDetail="getuserDetail" :is_primary="is_primary" :category_data="userFullDetails.qp_role"/>

              <education v-if="$store.state.accountType=='freelancer'"></education>
              <accreditation v-if="$store.state.accountType=='agency'"></accreditation>
            </b-card>
          </b-card-group>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

import { validationMixin } from 'vuelidate';
import { required,maxLength,minLength } from 'vuelidate/lib/validators';
import education from "../../components/profile/education.vue";
import certifications from "../../components/profile/certifications.vue";
import industry from "../../components/profile/industry.vue";  
import accreditation from "../../components/profile/accreditation.vue"; 
//import commodity from "../../components/profile/commodity.vue";
import VueReadMoreSmooth from "vue-read-more-smooth";
import vueAnkaCropper from 'vue-anka-cropper'
import PencilEditIcon from "../../components/icons/PencilEditIcon.vue"; 
import ClockSmallIcon from "../../components/icons/ClockSmall_Icon.vue";
import Mycategory from "../../components/modal/Mycategory.vue";  
import $ from 'jquery'; 
import { mapActions} from "vuex";
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
    hourlyRate:{ 
      required,
      maxLength: maxLength(10), 
    },
  },
  components: {
     education,
     certifications,
     industry,
     //commodity,
     accreditation,
     VueReadMoreSmooth,
     PencilEditIcon,
     ClockSmallIcon,
     Mycategory,
     vueAnkaCropper

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
      hourlyRate:'',
      QapinServices:'',
      willReceive:'',
      yearOfExperience:'',
      availabilityVal:'',
      languageVal:[],
      proficiencyVal:[],
      nationalityVal:'',
      tagLineVal:'',
      tagLineself:'',
      profileImg:'',
      userFullDetails:[
      ],
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
    }
  },
  computed: {
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
        !this.$v.aboutYourself.required && errors.push('About is required')
        !this.$v.aboutYourself.maxLength && errors.push('Too long. Use at least 2000 characters or less')
        !this.$v.aboutYourself.minLength && errors.push('About must be minimum 200 characters')
        
        return errors
      },
      hourlyRateErrors(){
        const errors = []
        if (!this.$v.hourlyRate.$dirty) return errors 
        !this.$v.hourlyRate.required && errors.push('Hourly Rate is required')
        !this.$v.hourlyRate.maxLength && errors.push('Too long. Use at least 10 characters or less')
         return errors
      }
      
  },
  async mounted() {
    this.getSocial();
    this.getClientContract();
    this.getUserDetails();
    this.getLanguage();
    var UserData = JSON.parse(localStorage.getItem("loginUserData"));
    this.login_master_id = UserData.login_master_id;
    this.startTime();
  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
    ddLanguage(){
      this.proficiencyVal.push('');
      this.languageVal.push('');
    },
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
      this.getUserDetails();
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
       
      async getUserDetails(){
        // var userdata = JSON.parse(localStorage.getItem('loginUserData'));
        // this.profileImg = 'http://qapin_mvp5.manageprojects.in/upload/profile_image/'+userdata.profile_picture_path;
        var response = await this.genericAPIPOSTRequest({
            requestUrl: "user/getUserDetails",
            params: {
              "data":[
                this.$store.state.currentUserData.first_name+'-'+this.$store.state.currentUserData.last_name+'-'+this.$store.state.currentUserData.uuid,
                'miniProfileUrn'+this.$store.state.currentUserData.uuid
              ]
            },
        });
        this.userFullDetails = response;
        this.languageCount = this.userFullDetails.language_id;
        this.profileImg = this.$store.state.baseUrlImg+'/upload/profile_image/'+response.profile_picture_path;
        this.getUserReviewCal();
        this.$store.state.currentUserData.profile_picture_path = response.profile_picture_path;
        this.$store.dispatch("profileImg", this.profileImg);
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "company/getCompanyCount",
            params: {data:this.getLoginUserIdRequest()},
        });  
        this.$store.dispatch("listAccount", res); 
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
        if(name=='nationality'){
          // console.log('image');
          data = {'nationality_id':this.nationalityVal};
        }
        if(name=='language'){
          var updatedata=[];
          for (let index = 0; index < this.languageVal.length; index++) {
            updatedata.push({
              'language_id':this.languageVal[index],
              'proficiency_id':this.proficiencyVal[index],
              'is_primary': (index == 0)?'Y':'N'
            })
          }
          // console.log('updatedata',updatedata);
          await this.genericAPIPOSTRequest({
                requestUrl: "updateUserLanguage",
                params: updatedata,
          });
          this.$bvModal.hide('modal-editlanguage'); 
          this.getUserDetails();
          return false;
        }
        if(name=='availability'){
          data = {'availability':this.availabilityVal};
        } 
        
        if(name=='yearOfExperience'){
          data = {'year_of_experience':this.yearOfExperience};
        } 
        if(name=='editrate'){
          data = {'hourly_rate':this.hourlyRate,'QapinServicesCharge':this.QapinServices,'willReceive':this.willReceive};
        }
        await this.genericAPIPOSTRequest({
              requestUrl: "user/updateUserData",
              params: data,
        });
        this.$bvModal.hide('modal-editNationality');
        this.$bvModal.hide('modal-editlanguage'); 
        this.$bvModal.hide('modal-editAvailability');
        this.$bvModal.hide('modal-editYearsofExperience'); 
        this.$bvModal.hide('editrate');
        
        this.getUserDetails();
      },
      setServiceCharge(){
        this.QapinServices  = this.hourlyRate*20/100;
        this.willReceive  =  this.hourlyRate-this.QapinServices;
      },
      setReceiveCharge(){
        // this.QapinServices  = this.willReceive*20/100;
        // this.hourlyRate  =  parseInt(this.hourlyRate)+parseInt(this.QapinServices);
      },
      setLanguage(){
        this.proficiencyVal = this.userFullDetails.proficiency_id;
        this.languageVal = this.userFullDetails.language_id;
      },
      setRate(){
        this.QapinServices =  this.userFullDetails.QapinServicesCharge;
        this.willReceive   =  this.userFullDetails.willReceive;
        this.hourlyRate    =  this.userFullDetails.hourly_rate;
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
      }
      
      
   },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
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
.industry-section .content ul {
  margin-left: -32px !important;
}
.industry-section .content ol {
  margin-left: -32px !important;
}
.industry-section {
  border-bottom: 1px solid #dee2e6 !important;
}
.industry-section:last-child {
  border-bottom:0px !important;
  padding-bottom:0px!important;
  margin-bottom:0px!important;
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

#industry-modal .custom-control-label:after {
    border-radius:4px;
    border:1px solid #F2613C;
    background-color: #FFFFFF;
}
#industry-modal .custom-checkbox .custom-control-input:checked~.custom-control-label:after{
    color:#F2613C!important;
}
.freelancer-wrap .profile .edit-icon{
  position: absolute;
  top: -10px;
  left: -10px;
  background: #f2613c !important;
  padding: 0px 8px 0px 8px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor:pointer;
}
.freelancer-wrap .profile .edit-icon .fa{
  font-size: 10px;
  position: relative;
  top: -2px;
}
</style>
