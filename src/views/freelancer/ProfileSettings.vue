<template>
  <div>
    <h5 class="text-black fz-24 fw-500"><b>Profile Setting</b></h5>
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
              <b>My Profile</b>
            </h4>
            <div class="ml-auto">
              <button class="btn btn-outline-theme"  @click="$router.push('/public-profile/'+login_master_id)">Preview Profile</button>
            </div>
          </div>
        </template>

        <!-- Profile Visibility section -->
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <b-form>
                <b-form-group>
                  <b-row>
                    <b-col xl="6" lg="6" sm="12">
                      <label class="text-black fz-16 fw-600">Visibility</label
                      ><br />
                      <b-form-select
                        v-model="selectedVisibility"
                        class="form-control"
                        @change="updateVisibility"
                      >
                        <option :value="null" disabled>
                          -- Please select an option --
                        </option>
                        <option
                          v-for="(visibility, visibilityIndex) in visibilityOptions"
                          :key="visibilityIndex"
                          :value="visibility.value"
                        >
                          {{ visibility.key }}
                        </option>
                      </b-form-select>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group>
                  <b-row>
                    <b-col xl="6" lg="6" sm="12">
                      <label class="text-black fz-16 fw-600">
                        Project Preference </label
                      ><br />
                      <span class="fz-12 text-muted fw-400"
                        >Don't worry, your selection won't affect how or when we
                        display your profile to clients.</span
                      >
                      <b-form-select
                        v-model="selectedProjectPref"
                        class="form-control"
                        @change="updatePrefrence"
                      >
                        <option :value="null" disabled>
                          -- Please select an option --
                        </option>
                        <option
                          v-for="(preference, preferenceIndex)  in projectPrefOptions"
                          :key="preferenceIndex"
                          :value="preference.value"
                        >
                          {{ preference.key }}
                        </option>
                      </b-form-select>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-form>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <!-- Experience Level section -->
    <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <h4 class="mb-0 text-black fz-24 fw-500">
            <b>Experience level</b>
          </h4>
        </template>
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <div class="subscription-container">
                <span class="ex-level-wrap" v-for="(exp_level, id) in ExperienceLevelData" :key="id">
                  <input
                    v-model="selectedEntry"
                    type="radio"
                    name="radio"
                    :id="'entry_'+id"
                    :value="exp_level.experience_id"
                    checked="checked"
                    @change="updateExperience(exp_level.experience_id)"
                  />
                  <label :for="'entry_'+id" class="subscription__button">
                    <h3 class="text-black title fz-20 fw-600">{{exp_level.title}}</h3>
                    <h3 class="fz-16 fw-400 text-muted">
                      {{exp_level.description}}
                    </h3>
                  </label>
                </span>
                
              </div>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <!-- Categories section -->
    <b-card-group deck>
      <b-card
        v-if="qrRoleMasterList"
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <div class="d-flex align-items-center">
            <h4 class="mb-0 text-black fz-24 fw-500">
              <b>Categories</b>
            </h4>
            <div class="ml-auto">
              <a
                href="javascript:void(0);"
                @click="openEditModel"
              >
                <PencilEditIcon />
              </a>
            </div>
            <b-modal ref="edit-category-modal" size="lg" title="Categories" class="edit-category-modal" centered>
              <div class="text-left">
                <h5 class="text-black fz-20 fw-600">
                  What are the main services you offer to clients?
                </h5>
                <p class="fz-14 fw-400 text-muted">
                  Select up to 10 categories.
                </p>
                <div class="card-section">
                  <div class="mb-0 fz-14 tags">
                    <span
                      v-for="(tag, tagIndex) in filterTags"
                      :key="tagIndex"
                      class="up-skill-badge inline-block"
                    >
                      <div class="d-flex align-items-center">
                        {{ tag.skill_name }}
                        <a href="javascript:" class="text-muted d-inline-flex">
                          <div class="up-icon xs" @click="removeSkill(tagIndex,tag)">
                            <x-icon />
                          </div>
                        </a>
                      </div>
                    </span>
                    
                  </div>
                  <div
                    v-for="(role, index) in qrRoleMasterList"
                    :key="index"
                    class="mt-3 accordion"
                  >
                    <b-button
                      v-b-toggle="[`collapse-${index}`]"
                      class="mb-0 d-block"
                      >{{ role.role_name }}
                      <i
                        class="float-right fa fa-chevron-down fw-400 text-muted fz-12"
                      ></i
                    ></b-button>
                    <b-collapse :id="`collapse-${index}`">
                      <b-card>
                        <div class="mb-30 tags">
                          <span
                            class="cursor-pointer up-skill-badge hover:bg-gray-100 inline-block"
                            v-for="(skill, index1) in role.skills"
                            :key="index1"
                            @click="selectedSkills(skill)"
                            :id="'cat_'+skill.qp_role_skill_master_id"
                          >
                            {{ skill.skill_name }}
                          </span>
                        </div>
                      </b-card>
                    </b-collapse>
                  </div>
                </div>
              </div>
              <template #modal-footer>
                <div class="text-right w-100">
                  <a
                    href="javascript:void(0);"
                    @click="$refs['edit-category-modal'].hide();"
                    class="mr-2 text-theme"
                  >
                    Cancel
                  </a>
                  <b-button
                    size="lg"
                    class="btn btn-theme"
                    @click="submitQrRole"
                  >
                    Save
                  </b-button>
                </div>
              </template>
            </b-modal>
          </div>
        </template>

        <!-- Display selected categories & skills in card -->
        <b-row v-if="selectedCategories">
          <b-col cols="12" class="px-4 py-4">
            <section
              v-for="(role, roleIndex) in selectedCategories"
              :key="roleIndex"
              class="mb-4 card-section"
            >
              <div class="d-flex align-items-center">
                <h4 class="text-black fz-20 fw-600 ">{{ role.role_name }}</h4>
                <div class="ml-auto">
                  <b-button class="btn-outline-theme btn-sm" @click="removeCategory(role.role_id)">
                    <i class="fa fa-trash text-theme fz-16" aria-hidden="true"></i>
                  </b-button>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="card-section">
                  <span v-for="(skill, skillIndex) in role.skills"
                      :key="skillIndex">
                    <div
                      v-if="skill.skill_name !='' && skill.skill_name != Null"
                      class="mb-30 tags  inline-block"
                    >
                      <span class="up-skill-badge inline-block"> {{ skill.skill_name }} </span>
                    </div>
                  </span>
                </div>
              </div>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <!-- <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <h4 class="mb-0 text-black fz-24 fw-500">
            <b>Specialized Profiles</b>
          </h4>
          <span class="fz-14 text-muted fw-400">2 out of 2 published</span>
        </template>
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <p class="mb-0 fz-16 text-muted fw-400">
              Create up to two different versions of your profile to more
              effectively highlight your individual specialities.
            </p>
            <a href="javascript:void(0);" class="text-theme">Learn More</a>
            <section class="card-section">
              <div
                class="mt-3 d-flex align-items-center justify-content-space-between"
              >
                <h4 class="mb-0 text-black fz-18 fw-600">
                  Social Media Marketing - Published
                </h4>
                <a href="javascript:void(0);">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.55469"
                      y="0.945312"
                      width="42.5"
                      height="42.5"
                      rx="21.25"
                      fill="white"
                      stroke="#E2E2E2"
                      stroke-width="1.5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.8047 22.1953C17.8047 23.2999 16.9093 24.1953 15.8047 24.1953C14.7001 24.1953 13.8047 23.2999 13.8047 22.1953C13.8047 21.0907 14.7001 20.1953 15.8047 20.1953C16.9093 20.1953 17.8047 21.0907 17.8047 22.1953ZM24.8047 22.1953C24.8047 23.2999 23.9093 24.1953 22.8047 24.1953C21.7001 24.1953 20.8047 23.2999 20.8047 22.1953C20.8047 21.0907 21.7001 20.1953 22.8047 20.1953C23.9093 20.1953 24.8047 21.0907 24.8047 22.1953ZM29.8047 24.1953C30.9093 24.1953 31.8047 23.2999 31.8047 22.1953C31.8047 21.0907 30.9093 20.1953 29.8047 20.1953C28.7001 20.1953 27.8047 21.0907 27.8047 22.1953C27.8047 23.2999 28.7001 24.1953 29.8047 24.1953Z"
                      fill="#666666"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="mt-3 d-flex align-items-center justify-content-space-between"
              >
                <h4 class="mb-0 text-black fz-18 fw-600">
                  Social Media Marketing - Published
                </h4>
                <a href="javascript:void(0);">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.55469"
                      y="0.945312"
                      width="42.5"
                      height="42.5"
                      rx="21.25"
                      fill="white"
                      stroke="#E2E2E2"
                      stroke-width="1.5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.8047 22.1953C17.8047 23.2999 16.9093 24.1953 15.8047 24.1953C14.7001 24.1953 13.8047 23.2999 13.8047 22.1953C13.8047 21.0907 14.7001 20.1953 15.8047 20.1953C16.9093 20.1953 17.8047 21.0907 17.8047 22.1953ZM24.8047 22.1953C24.8047 23.2999 23.9093 24.1953 22.8047 24.1953C21.7001 24.1953 20.8047 23.2999 20.8047 22.1953C20.8047 21.0907 21.7001 20.1953 22.8047 20.1953C23.9093 20.1953 24.8047 21.0907 24.8047 22.1953ZM29.8047 24.1953C30.9093 24.1953 31.8047 23.2999 31.8047 22.1953C31.8047 21.0907 30.9093 20.1953 29.8047 20.1953C28.7001 20.1953 27.8047 21.0907 27.8047 22.1953C27.8047 23.2999 28.7001 24.1953 29.8047 24.1953Z"
                      fill="#666666"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group> -->

    <!-- Social Linked account section  -->
    <b-card-group deck>
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="px-4 py-4 bg-white"
        class="mb-3"
      >
        <template #header>
          <h4 class="mb-0 text-black fz-24 fw-500">
            <b>Linked Accounts</b>
          </h4>
        </template>
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <b-row>
                <b-modal
                  ref="add-link-modal"
                  size="md"
                  title="Authorise qapin to access your account"
                >
                  <div class="text-left">
                    <b-row>
                      <b-col lg="12" sm="12" xl="12" v-if="facebook">
                        <b-form-group>
                          <label for="link" class="mb-2">Enter Facebook Link </label>
                          <b-form-input
                            v-model="facebookLink"
                            
                            type="text"
                            placeholder="Enter link here (Eg.: https://www.facebook.com/)"
                            :error-messages="facebookErrors"
                              @input="$v.facebookLink.$touch()"
                              @blur="$v.facebookLink.$touch()"
                          ></b-form-input>
                          <span class="text-danger fz-12" v-if="facebookErrors[0]">{{facebookErrors[0]}}</span>
                        </b-form-group>
                      </b-col>

                        

                      <b-col lg="12" sm="12" xl="12" v-if="twitter">
                        <b-form-group>
                          <label for="link" class="mb-2">Enter Twitter Link </label>
                          <b-form-input
                            v-model="twitterLink"
                            
                            type="text"
                            placeholder="Enter link here (Eg.: https://www.twitter.com/)"
                            :error-messages="twitterErrors"
                              @input="$v.twitterLink.$touch()"
                              @blur="$v.twitterLink.$touch()"
                          ></b-form-input>
                          <span class="text-danger fz-12" v-if="twitterErrors[0]">{{twitterErrors[0]}}</span>
                        </b-form-group>
                      </b-col>


                      <b-col lg="12" sm="12" xl="12" v-if="linkedIn">
                        <b-form-group>
                          <label for="link" class="mb-2">Enter Linkedin Link </label>
                          <b-form-input
                            v-model="linkedinLink"
                            
                            type="text"
                            placeholder="Enter link here (Eg.: https://www.linkedin.com/)"
                            :error-messages="linkedInErrors"
                              @input="$v.linkedinLink.$touch()"
                              @blur="$v.linkedinLink.$touch()"
                          ></b-form-input>
                          <span class="text-danger fz-12" v-if="linkedInErrors[0]">{{linkedInErrors[0]}}</span>
                        </b-form-group>
                      </b-col>


                      <b-col lg="12" sm="12" xl="12" v-if="googlePlus">
                        <b-form-group>
                          <label for="link" class="mb-2">Enter googlePlus Link </label>
                          <b-form-input
                            v-model="googlePlusLink"
                            
                            type="text"
                            placeholder="Enter link here (Eg.: https://www.plus.google.com/)"
                            :error-messages="googlePlusErrors"
                              @input="$v.googlePlusLink.$touch()"
                              @blur="$v.googlePlusLink.$touch()"
                          ></b-form-input>
                          <span class="text-danger fz-12" v-if="googlePlusErrors[0]">{{googlePlusErrors[0]}}</span>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </div>
                  <template #modal-footer>
                    <div class="text-right w-100">
                      <a
                        href="javascript:void(0);"
                        class="mr-2 text-theme"
                        @click="
                          $refs['add-link-modal'].hide(),
                            (linkedIn = false),
                            (facebook = false),
                            (twitter = false),
                            (googlePlus = false)
                            
                        "
                        >Cancel</a
                      >
                      <b-button
                        size="lg"
                        class="btn btn-theme"
                        @click="submitLink"
                      >
                        Update
                      </b-button>
                    </div>
                  </template>
                </b-modal>
                <b-col lg="3" sm="6">
                  <a
                    href="javascript:void(0);"
                    :class="[
                      { 'twitter-active': social.twitter },
                      'btn btn-social btn-block',
                    ]"
                    @click="
                      $refs['add-link-modal'].show(),
                      (facebook = false),
                        (linkedIn = false),
                        (twitter = true),
                        (googlePlus = false),
                        (twitterLink  = social.twitter)
                    "
                    >{{ social.twitter ? social.twitter : "Twitter" }}</a
                  >
                </b-col>
                <b-col lg="3" sm="6">
                  <a
                    href="javascript:void(0);"
                    :class="[
                      { 'twitter-active': social.facebook },
                      'btn btn-social btn-block',
                    ]"
                    @click="
                      $refs['add-link-modal'].show(),
                        (facebook = true),
                        (linkedIn = false),
                        (twitter = false),
                        (googlePlus = false),
                        (facebookLink  = social.facebook)
                    "
                    >{{ social.facebook ? social.facebook : "Facebook" }}</a
                  >
                </b-col>
                <b-col lg="3" sm="6">
                  <a
                    href="javascript:void(0);"
                    :class="[
                      { 'twitter-active': social.linkedIn },
                      'btn btn-social btn-block',
                    ]"
                    @click="
                      $refs['add-link-modal'].show(),
                        (linkedIn = true),
                        (facebook = false),
                        (twitter = false),
                        (googlePlus = false),
                        (linkedinLink  = social.linkedIn)
                    "
                    >{{ social.linkedIn ? social.linkedIn : "LinkedIn" }}</a
                  >
                </b-col>
                <b-col lg="3" sm="6">
                  <a
                    href="javascript:void(0);"
                    :class="[
                      { 'twitter-active': social.googlePlus },
                      'btn btn-social btn-block',
                    ]"
                    @click="
                      $refs['add-link-modal'].show(),
                        (facebook = false),
                        (linkedIn = false),
                        (twitter = false),
                        (googlePlus = true),
                        (googlePlusLink  = social.googlePlus)
                        "
                    >{{
                      social.googlePlus ? social.googlePlus : "Google Plus"
                    }}</a
                  >
                </b-col>
              </b-row>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>

import { validationMixin } from 'vuelidate';
import {required,helpers } from 'vuelidate/lib/validators';
import PencilEditIcon from "../../components/icons/PencilEditIcon.vue";
import { mapActions, mapGetters } from "vuex";
import XIcon from "../../components/icons/X_icon.vue";
import axios from "axios";
let base_url = " "; 

const facebookLink = helpers.regex('facebookLink',/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/);
const twitterLink = helpers.regex('twitterLink',/^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/);
const linkedinLink = helpers.regex('linkedinLink',/^(https?:\/\/)?((w{3}\.)?)linkedin.com\/.*/);
const googlePlusLink = helpers.regex('googlePlusLink',/^(https?:\/\/)?((w{3}\.)?)plus.google.com\/.*/); 
 
export default {
  mixins: [validationMixin],
  validations: { 
    facebookLink:{required,facebookLink},
    twitterLink:{required,twitterLink},
    linkedinLink:{required,linkedinLink},
    googlePlusLink:{required,googlePlusLink}
   },
  components: {
    PencilEditIcon,
    XIcon,
  },

  data() {
    return { 
      ExperienceLevelData:[],
      selectedTags: [],
      selectedVisibility: null,
      selectedProjectPref: null,
      selectedEntry: '', 
      visibilityOptions: [
        { value: "0", key: "Public" },
        { value: "1", key: "Only Qapin Users" },
        { value: "2", key: "Private" },
      ],
      projectPrefOptions: [
        { value: "0", key: "Both short term and long term projects" },
        { value: "1", key: "Short term projects (less than 3 months)" },
        { value: "2", key: "Long term projects (3+ months)" },
      ],
     
      qrRoleMasterList: [],

      category_data: {},
      role: {},

      googlePlus: false,
      facebook: false,
      twitter: false,
      linkedIn: false,

      social: {
        facebook: null,
        twitter: null,
        linkedIn: null,
        googlePlus: null,
      },
      facebookLink:{},
      twitterLink:{},
      linkedinLink:{},
      googlePlusLink:{}, 
      login_master_id:'',
    };
  },

  computed: {
    ...mapGetters({ selectedCategories: "settings/getSelectedCategories" }),
    filterTags() {
      return Array.from(new Set(this.selectedTags.map(JSON.stringify))).map(
        JSON.parse
      );
    },
    facebookErrors() {
      const errors = []
      if (!this.$v.facebookLink.$dirty) return errors 
      !this.$v.facebookLink.required && errors.push('facebook  is required')
      !this.$v.facebookLink.facebookLink && errors.push('facebook link not valid')
      return errors
    },
    twitterErrors() {
      const errors = []
      if (!this.$v.twitterLink.$dirty) return errors 
      !this.$v.twitterLink.required && errors.push('Twitter Link is required')
      !this.$v.twitterLink.twitterLink && errors.push('Twitter link not valid')
      return errors
    },
    linkedInErrors() {
      const errors = []
      if (!this.$v.linkedinLink.$dirty) return errors 
      !this.$v.linkedinLink.required && errors.push('LinkedIn Link is required')
      !this.$v.linkedinLink.linkedinLink && errors.push('LinkedIn link not valid')
      return errors
    },
    googlePlusErrors() {
      const errors = []
      if (!this.$v.googlePlusLink.$dirty) return errors 
      !this.$v.googlePlusLink.required && errors.push('Google plus link  is required')
      !this.$v.googlePlusLink.googlePlusLink && errors.push('Google plus link not valid')
      return errors
    },
    
  },

  mounted() {
    this.fetchData();
    this.getExperienceLevel();
    var UserData = JSON.parse(localStorage.getItem("loginUserData"));
    this.login_master_id = UserData.login_master_id;
   
  },

  methods: {
    ...mapActions("settings", [
      "updateUserConfig",
      "fetchUserDetails",
      "UpdateSocialLink",
      "updateCategory",
      "fetchSelectedCategories",
    ]),
    ...mapActions(["genericAPIPOSTRequest"]),
    async removeCategory(_i){
      var removeCategory = await this.genericAPIPOSTRequest({
        requestUrl: "removeCategory",
        params: {
          'role_id':_i,
        },
      });
      if (removeCategory) {
        this.fetchSelectedCategories();
        this.$toastr.s('Category Removewd Successfully');
      }
      
    },
    async getExperienceLevel(){
        var experienceData = await this.genericAPIPOSTRequest({
            requestUrl: "getExperienceLevel",
            params: {},
        }); 
        if(experienceData.length > 0 ){
          this.ExperienceLevelData = experienceData;
        }
      },
    openEditModel(){
      
      this.$refs['edit-category-modal'].show();
      setTimeout(() => {
        this.selectedTags.map(data=>{
          document.getElementById('cat_'+data.qp_role_skill_master_id).classList.add("hideCategory");
        })
      }, 600);
    },
    fetchData() {
      this.fetchSelectedCategories();
      axios
        .get(`${base_url}common/getQpRoleMasterList`)
        .then((response) => {
          if (response.data.result) {
            this.qrRoleMasterList = response.data.result;
          }
        })
        .catch((err) => {
          console.log(err);
        });

      let headToken = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };

      axios
        .get(`${base_url}user/getUserDetails`, { headers: headToken })
        .then((response) => {
          if (response.data) {
            this.selectedEntry = response.data.result.experience_level; 
            this.selectedVisibility = response.data.result.profile_visibility;
            this.selectedProjectPref = response.data.result.project_prefrence;
            this.social.facebook = response.data.result.facebook;
            this.social.twitter = response.data.result.twitter;
            this.social.googlePlus = response.data.result.googlePlus;
            this.social.linkedIn = response.data.result.linkedin; 
            this.qrRoleMasterList.forEach((role) => {
              this.selectedCategories.forEach((selectedRole) => {
                if (role.qp_role_master_id === selectedRole.role_id) {
                  role.skills.forEach((skill) => {
                    selectedRole.skills.forEach((selectedSkill) => {
                      if (
                        skill.qp_role_skill_master_id === selectedSkill.skill_id
                      ) {
                        this.selectedTags.push(skill);
                      }
                    });
                  });
                }
              });
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateVisibility() {
      this.updateUserConfig({
        key: "profile_visibility",
        value: this.selectedVisibility,
      })
        .then((res) => {
          this.fetchUserDetails();
          if (res) {
            this.$toastr.s("Profile visibility updated successfully");
          }
        })
        .catch((err) => console.log(err));
    },

    updatePrefrence() {
      this.updateUserConfig({
        key: "project_prefrence",
        value: this.selectedProjectPref,
      })
        .then((res) => {
          this.fetchUserDetails();
          if (res) {
            this.$toastr.s("Project Preference updated successfully");
          }
        })
        .catch((err) => console.log(err));
    },

    // Handle Experience method
    updateExperience(val) {
      this.updateUserConfig({ key: "experience_level", value: val })
        .then((res) => {
          this.fetchUserDetails();
          if (res) {
            this.$toastr.s("Experience Level updated successfully");
          }
        })
        .catch((err) => console.log(err));
    },

    // Categories Handling method

    selectedSkills(skill) {
      if(!this.selectedTags.some(data => data.qp_role_skill_master_id === skill.qp_role_skill_master_id)){
            this.selectedTags.push(skill);
            document.getElementById('cat_'+skill.qp_role_skill_master_id).classList.add("hideCategory")
        }
    },

    removeSkill(index,_v) {
      this.selectedTags.splice(index, 1);
      document.getElementById('cat_'+_v.qp_role_skill_master_id).classList.remove("hideCategory")
    },

    submitQrRole() {
      // Arrang array to role_id and skill_id
      var arrangeTagArray = [];
      for (const obj of this.selectedTags) {
        const newobj = { id: obj.role_id, elements: [] };
        newobj.elements.push(obj.qp_role_skill_master_id);
        arrangeTagArray.push(newobj);
      }

      // Reduced the array which having same id
      if (arrangeTagArray.length) {
        const finalTagArray = arrangeTagArray.reduce((obj, item) => {
          obj[item.id]
            ? obj[item.id].elements.push(...item.elements)
            : (obj[item.id] = { ...item });
          return obj;
        }, {});

        // Merge final array
        let mergedArray = Object.values(finalTagArray);

        // Set array into category data
        for (const role of mergedArray) {
          this.category_data[role.id] = role.elements;
        }
      }
      let data = {
        category_data: this.category_data,
      };
      this.updateCategory(data)
        .then((res) => {
          if (res.data.status == true) {
            this.$toastr.s("Categories updated successfully");
            this.fetchUserDetails();
            this.fetchSelectedCategories();
            this.qrRoleMasterList.forEach((role) => {
              this.selectedCategories.forEach((selectedRole) => {
                if (role.qp_role_master_id === selectedRole.role_id) {
                  role.skills.forEach((skill) => {
                    selectedRole.skills.forEach((selectedSkill) => {
                      if (
                        skill.qp_role_skill_master_id === selectedSkill.skill_id
                      ) {
                        this.selectedTags.push(skill);
                      }
                    });
                  });
                }
              });
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e("Something went wrong please try again!");
        });

      this.$refs["edit-category-modal"].hide();
    },

    submitLink() {
      let data = {};
      
      if (this.facebook == true) {
        this.$v.facebookLink.$touch();
        data.facebook = this.facebookLink;
        if (this.$v.facebookLink.$invalid) {  
          return false;
        } 
      } 
      if (this.twitter == true) {
        this.$v.twitterLink.$touch();
        data.twitter = this.twitterLink;
        if (this.$v.twitterLink.$invalid) {  
          return false;
        } 
      }  
      if (this.googlePlus == true) {
        this.$v.googlePlusLink.$touch();
        data.googlePlus = this.googlePlusLink;
        if (this.$v.googlePlusLink.$invalid) {  
          return false;
        } 
      } 
      if (this.linkedIn == true) {
        this.$v.linkedinLink.$touch();
        data.linkedIn = this.linkedinLink;
        if (this.$v.linkedinLink.$invalid) {  
          return false;
        } 
      }
                   
      this.UpdateSocialLink(data)
        .then((res) => {
          if (res.data.status === true) {
            this.$toastr.s("Link added successfully");

            this.facebook = false;
            this.linkedIn = false;
            this.twitter = false;
            this.googlePlus = false;
          }
          this.fetchData();
          this.$refs["add-link-modal"].hide();
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e("Something went wrong please try again!");
          this.$refs["add-link-modal"].hide();
        });
    },
  },
};
</script>
<style>
  .edit-category-modal{

  }
  .hideCategory{
    display: none !important;
  }
  
  .subscription-container .ex-level-wrap{cursor:pointer;position:relative;width: 33.3333%;padding: 0 5px;}
  .subscription-container input + label{border: solid 1px #cecece;background: white;transform: translateY(-10%);transition: transform .5s;padding: 40px 20px;    width: 100%;border-radius:6px;cursor:pointer;position:relative;}
  .subscription-container input:checked + label:before{background: #f2613d;font-size: 50px;position: absolute;right: 0px;top: 7px;}
  .subscription-container input:checked + label{border: solid 1px #f2613d;background: white;transform: translateY(-10%);transition: transform .5s;padding: 40px 20px;    width: 100%;border-radius:6px;cursor:pointer;}
</style>
