<template>
    <b-container>
      <b-row class="mt-100 reviewpost-wrap">
        <b-col xl="12" lg="12" sm="12">
          <b-card-group deck>
            <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
              <template  #header>
                <div class="d-md-flex align-items-center">
                  <h4 class="mb-0 fz-24 fw-500 text-black"><b>Post a job and invite</b></h4>
                  <div class="ml-auto sm-mt-2">
                    <b-button class="btn btn-theme" @click="submitAsDraft" v-if="hideDraftbtn">Save As Draft</b-button>
                    &nbsp;
                    &nbsp;
                    <b-button class="btn btn-theme" @click="SubmitJobPost">Post Job & Invite</b-button>
                  </div>
                </div>
              </template>
              <b-row>
                <b-col cols="12" class="p-0 border-bottom">
                  <div>
                    <b-form>
                      <b-row>
                        <b-col xl="12" lg="12" sm="12">
                          <div class="border-bottom">
                            <div class="py-4 pt-0 px-4">
                                <div class="d-md-flex align-items-start text-left">
                                    <div class="img-wrapper mr-3">
                                        <img :src="UserDetails.profile_picture_path_url"
                                            class="img-fluid">
                                    </div>
                                    <div class="content ml-2">
                                        <h4 class="fz-20 fw-600 text-black mr-2 mb-0">{{UserDetails.first_name+' '+UserDetails.last_name.substr(0,1)}}</h4>
                                        <h5>{{ UserDetails.tagline }}</h5>
                                    </div>    
                                </div>
                                
                              <b-form-group>
                                <label class="fz-18 text-black fw-500 mb-2"><strong>Private message to {{ UserDetails.first_name+' '+UserDetails.last_name.substr(0,1) }}</strong></label>
                                <b-form-textarea
                                  :maxlength="2501"
                                  v-model="invitation.message"
                                  placeholder="This will only be sent to the freelancer.They will also see the job name and description you provide below"
                                  rows="8"
                                  max-rows="10"
                                  :error-messages="invitationmessageError"
                                  @input="$v.invitation.message.$touch()"
                                  @blur="$v.invitation.message.$touch()"
                                ></b-form-textarea>
                                  <!-- @keyup="descriptionLetterValid('description_Valid',$event.target.value)" -->

                                <div class="error" v-if="invitationmessageError[0]">{{invitationmessageError[0]}}</div>
  
                              </b-form-group>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl="12" lg="12" sm="12">
                            <div class="border-bottom">
                                <div class="py-4 px-4">
                                    <b-form-group>
                                    <label class="fz-18 text-black fw-500 mb-2">Your title</label>
                                    <b-form-input 
                                        :minlength="3" :maxlength="251"
                                        v-model="postData.job_title"
                                        :error-messages="postdataTitleError"
                                        @input="$v.postData.job_title.$touch()"
                                        @blur="$v.postData.job_title.$touch()"
                                    ></b-form-input>
                                    <div class="error" v-if="postdataTitleError[0]">{{postdataTitleError[0]}}</div>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-col>
                      </b-row>    
                      <b-row>
                        <b-col xl="12" lg="12" sm="12">
                          <div class="border-bottom">
                            <div class="py-4 pt-0 px-4">
                              <b-form-group>
                                <label class="fz-18 text-black fw-500 mb-2">Describe your job</label>
                                <p class="fz-14 fw-400 text-muted">This is how talent figures out what you need and why you’re great to work with !</p>
                                <p class="fz-14 fw-400 text-muted">Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique about your project, team or company. Here are several examples that illustrate best practices for effective job posts.</p>
                                <b-form-textarea
                                  :maxlength="2501"
                                  v-model="postData.scope_of_work"
                                  placeholder="Already have a job discription ? Paste it here!..."
                                  rows="8"
                                  max-rows="10"
                                  :error-messages="postdatadescriptionError"
                                  @input="$v.postData.scope_of_work.$touch()"
                                  @blur="$v.postData.scope_of_work.$touch()"
                                ></b-form-textarea>
                                <div class="error" v-if="postdatadescriptionError[0]">{{postdatadescriptionError[0]}}</div>

  
                                <div>
                                  <div style="margin-bottom:10px;">
                                    <input id="fileUpload" hidden type="file" @change="UploadFile" accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf" name="upload">
                                    <b-button class="btn btn-outline-theme d-flex align-items-center mt-3" @click="chooseFiles()">
                                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                                        <path d="M16.3146 1.67902C14.0712 -0.559672 10.4208 -0.559672 8.17702 1.67902L1.20173 8.63942C-0.400663 10.2386 -0.400558 12.8405 1.20194 14.4396C2.00325 15.2392 3.05548 15.639 4.10813 15.6389C5.1605 15.6388 6.21329 15.2391 7.01447 14.4396L13.4083 8.05921C13.8741 7.59445 14.1307 6.97649 14.1307 6.31921C14.1307 5.66188 13.8743 5.04396 13.4084 4.57906C12.4468 3.61962 10.8822 3.61965 9.9208 4.57924L5.73949 8.75154C5.41848 9.07184 5.41848 9.59122 5.73942 9.91158C6.0604 10.232 6.58088 10.2319 6.90193 9.91158L11.0833 5.73924C11.4038 5.4194 11.9252 5.41933 12.2458 5.73917C12.401 5.89409 12.4866 6.10009 12.4866 6.31917C12.4866 6.53825 12.4011 6.74418 12.2458 6.89917L5.85195 13.2795C4.89039 14.2389 3.32594 14.2391 2.36445 13.2796C1.40296 12.3201 1.40289 10.7589 2.36427 9.79936L9.33953 2.83905C10.9422 1.2399 13.5497 1.2399 15.1521 2.83905C15.9284 3.61365 16.356 4.64361 16.356 5.7391C16.356 6.83459 15.9284 7.86454 15.1521 8.63921L8.17691 15.5997C7.85593 15.9201 7.85593 16.4394 8.17698 16.7598C8.3375 16.92 8.54788 17 8.75822 17C8.96859 17 9.17897 16.9199 9.33949 16.7598L16.3145 9.79929C17.4014 8.71481 18 7.27289 18 5.73913C18 4.20541 17.4014 2.76349 16.3146 1.67902Z" fill="#F2613C"/>
                                      </svg>
                                      Attach File
                                    </b-button>
                                  </div>
                                  <div class=" align-items-center">
                                    <ul  class="ml-2 mt-4 attachment "  v-if="postData.attachment.length > 0" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                                      <i class="fa fa-file border-none"></i>
                                      <li class="attatchment-wrap mr-5 mb-2" v-for="(attc, index) in postData.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                                        <a :href="attachmentUrl+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                                        <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index)"></i>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </b-form-group>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl="12" lg="12" sm="12">
                          <div class="py-4 px-4 border-bottom">
                            <div class="form-group mb-4">
                              <label class="fz-18 text-black fw-600 d-flex">
                                Category
                                <a href="javascript:void(0);" class="pl-3" v-b-modal.modal-editcategory @click="temp_data_json.quality_inspector_id = postData.quality_inspector_id">
                                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                  </svg>
                                </a>
                              </label>
                              
                              <div class="align-items-center">
                                <span class="pr-3 span-name" v-if="postData.quality_inspector_id">{{getNameFromId(postData.quality_inspector_id,'category')}}</span>
                              </div>
                              <div class="error" v-if="postdataCategoryError[0]">{{postdataCategoryError[0]}}</div>
                              <!-- category model -->
                              <b-modal id="modal-editcategory" centered title="Edit Category" hide-footer size="md" no-close-on-backdrop>
                                <template>
                                  <div>
                                      <b-form-group id="category" label="Category" label-for="category">
                                        <b-form-select
                                          v-model="postData.quality_inspector_id"
                                          class="form-control mb-3"
                                          :options="categoryData"
                                          value-field="qp_role_master_id"
                                          text-field="role_name"
                                          :error-messages="postdataCategoryError"
                                          @input="$v.postData.quality_inspector_id.$touch()"
                                          @blur="$v.postData.quality_inspector_id.$touch()"
                                        >
                                        </b-form-select>
                                        <div class="error" v-if="postdataCategoryError[0]">{{postdataCategoryError[0]}}</div>

                                      </b-form-group>
                                      <hr>
                                      <div class="text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2" @click="postData.quality_inspector_id = temp_data_json.quality_inspector_id; $bvModal.hide('modal-editcategory')">Cancel</a>
                                        <b-button type="button" class="btn btn-theme" @click="temp_data_json.quality_inspector_id =''; $bvModal.hide('modal-editcategory')">Apply</b-button>
                                      </div>
                                  </div>
                                </template>
                              </b-modal>
                            </div>
                            <div class="form-group mb-4">
                              <label class="fz-18 text-black fw-600 d-flex">Skills
                                  <a href="javascript:void(0);" class="pl-3" v-b-modal.modal-editskills @click="openSkillModel();">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                    </svg>
                                  </a>
                              </label>
                              <div class="tags-wrap  align-items-start"> 
                                  <ul> 
                                      <li v-for="(skill , id) in postData.topSkill" :key="id">  
                                          <a href="javascript:void(0);" class="d-flex align-items-center"> 
                                              <span class="mr-2">{{getNameFromId(skill,'skill')}}</span> 
                                          </a> 
                                      </li> 
                                  </ul>
                                  <div class="error" v-if="postdataSkillError[0]">{{postdataSkillError[0]}}</div>
                                  <!-- skills model -->
                                  <b-modal id="modal-editskills" centered title="Edit Skills" hide-footer size="md" no-close-on-backdrop>
                                    <template>
                                      <div>
                                          <b-form-group label="Selected Skills" >
                                            <p>Select Upto 10 skills</p>
                                            <div class="selected-tags mb-2 mt-1">
                                              <div class="tags-wrap">
                                                  <ul>
                                                      <li v-for="(skill , id) in postData.topSkill" :key="id">
                                                          <a href="javascript:void(0);" class="d-flex align-items-center">
                                                              <span class="mr-2">{{getNameFromId(skill,'skill')}} </span>
                                                              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeSkills(id,skill)">
                                                                  <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                                  <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                              </svg>
                                                          </a>
                                                      </li>
                                                  </ul>
                                                  <!-- <span class="error" id="skill_error"></span> -->
                                                  <div class="error" v-if="postdataSkillError[0]">{{postdataSkillError[0]}}</div>

                                              </div>
                                            </div>
                                          </b-form-group>
                                          <hr>
                                          <span v-for="(cat_data,id ) in categoryData" :key="id">
                                          <b-form-group  :label="cat_data.role_name" v-if="cat_data.qp_role_master_id == postData.quality_inspector_id">
                                            <div class="mb-2 mt-1" >
                                              <div class="tags-wrap">
                                                <ul>
                                                  <li v-for="(skill,sid) in cat_data.skills" :key="sid" :class="CheckValueInarr(skill.qp_role_skill_master_id)" :id="'cat_'+skill.qp_role_skill_master_id">
                                                    <a href="javascript:void(0);" class="d-flex align-items-center" @click="selectSkill(skill)">
                                                      <span class="mr-2">{{skill.skill_name}}</span>
                                                      <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"></rect>
                                                        <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"></rect>
                                                      </svg>
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </b-form-group>
                                          </span>
                                          <hr>
                                          <div class="text-right">
                                            <a href="javascript:void(0);" class="text-theme mr-2" @click="closeSkillModel()">Cancel</a>
                                            <b-button type="buttton" class="btn btn-theme" @click="skillsUpdate();">Apply</b-button>
                                          </div>
                                      </div>
                                    </template>
                                  </b-modal>
                              </div>
                            </div>
                            <div class="form-group mb-4">
                              <label class="fz-18 text-black fw-600 d-flex">Scope
                                <a href="javascript:void(0);" class="pl-3" v-b-modal.modal-editscope @click="OpenScope(); temp_data_json.project_type = postData.project_type; temp_data_json.project_length = postData.project_length; temp_data_json.project_experience= postData.project_experience;">
                                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                  </svg>
                                </a>
                              </label>
                              <div class="d-flex align-items-center">
                                <span class="pr-3 span-name">{{ (postData.project_type != '') ? postData.project_type :'' }}{{ (postData.project_length != '') ? ', '+getNameFromId(postData.project_length,'project_length') : ''}}{{ (postData.project_experience!='')? ', '+getNameFromId(postData.project_experience,'project_experience') :''}}</span>
                              </div>
                              <div class="error" v-if="postdataProjectTypeError[0] && postdataProjectLengthError[0] && postdataProjectExperienceError[0]">Scope Is required</div>

                              <b-modal id="modal-editscope" centered title="Edit Scope" hide-footer size="md" no-close-on-backdrop>
                                <div class="row">
                                    <div class="col-lg-12 col-12">
                                      <span v-for="(s_Work,id) in scopeWork" :key="id">
                                        <b-form-group >
                                          <b-form-radio
                                           v-model="postData.project_type"
                                           name="project_type"
                                           :value="s_Work.value"
                                           class="text-black fz-20 fw-600"
                                           :error-messages="postdataProjectTypeError"
                                           @input="$v.postData.project_type.$touch()"
                                           @blur="$v.postData.project_type.$touch()"
                                           @change="changeScope()">{{s_Work.value}}</b-form-radio>
                                          <p class="text-muted fz-16 fw-500 ml-6">{{s_Work.description}}</p>
                                        </b-form-group>
                                        <div class="hidescope" id="largescope" v-if="postData.project_type == s_Work.value">
                                          <div class="row">
                                            <div class="col-lg-12 mb-2">
                                              <h2 class="fz-18 fw-500 text-black mb-4">How long will your work take?</h2>
                                              <b-form-group >
                                                <b-form-radio
                                                  v-model="postData.project_length"
                                                  name="project_length"
                                                  v-for="(pro_length, id) in  projectLengthData" :key="id" 
                                                  :value="pro_length.value"
                                                  :error-messages="postdataProjectLengthError"
                                                  @input="$v.postData.project_length.$touch()"
                                                  @blur="$v.postData.project_length.$touch()"
                                                  class="mb-4">{{pro_length.title}}</b-form-radio>
                                              </b-form-group>
                                            <div class="error" v-if="postdataProjectLengthError[0]">{{postdataProjectLengthError[0]}}</div>
                                            </div>

                                            <div class="col-lg-12 mb-5">
                                              <h2 class="fz-18 fw-500 text-black mb-0">What level of experience will it need?</h2>
                                              <p class="fz-14 fw-500 text-muteed mb-4">This won’t restrict any proposals, but helps match expertise to your budget.</p>
                                              <div class="form-check mb-2 pl-0" v-for="(exp_level, id) in ExperienceLevelData" :key="id">
                                                <b-form-group >
                                                  <b-form-radio
                                                    v-model="postData.project_experience"
                                                    name="project_experience"
                                                    :value="exp_level.value"
                                                    :error-messages="postdataProjectExperienceError"
                                                    @input="$v.postData.project_experience.$touch()"
                                                    @blur="$v.postData.project_experience.$touch()"
                                                    class="text-black fz-20 fw-600"> {{exp_level.title}}</b-form-radio>
                                                  <p class="text-muted fz-16 fw-500 ml-6">{{exp_level.description}}</p>
                                                </b-form-group>

                                              </div>
                                              <div class="error" v-if="postdataProjectExperienceError[0]">{{postdataProjectExperienceError[0]}}</div>

                                            </div>
                                            
                                          </div>
                                        </div>
                                      </span>
                                      <div class="error" v-if="postdataProjectTypeError[0]">{{postdataProjectTypeError[0]}}</div>
                                      <hr>
                                      <div class="text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2" @click="cancelScope()">Cancel</a>
                                        <b-button type="submit" class="btn btn-theme" @click="updateScope();">Apply</b-button>
                                      </div>
                                    </div>
                                  </div>
                              </b-modal>
                            </div>
                            <div class="form-group mb-4">
                              <label class="fz-18 text-black fw-600 d-flex">Budget
                                <a href="javascript:void(0);" class="pl-3" v-b-modal.modal-editbudgetModal @click="temp_data_json.budget_type = postData.budget_type; temp_data_json.budget = postData.budget">
                                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                  </svg>
                                </a>
                              </label>
                              <div class="d-flex align-items-center">
                                <span class="pr-3 span-name">{{(postData.budget_type=='B') ? 'Monthly Budget':(postData.budget_type=='A') ? 'Day Rate':''}} {{(postData.budget!='')?'$'+postData.budget:''}}</span>
                              </div>
                              <div class="error" v-if="postdataBudgetTypeError[0] && postdataBudgetError[0]">Budget Is required</div>

                              <!-- budget model -->
                              <b-modal id="modal-editbudgetModal" centered title="Edit Budget" hide-footer size="md" no-close-on-backdrop>
                                <template>
                                  <div>
                                    <b-form-group class="form-group budget-wrapper">
                                      <b-row>
                                        <b-col xl="6" lg="6" sm="12">
                                          <b-form-radio
                                           v-model="postData.budget_type"
                                           name="budget" value="A" 
                                           :error-messages="postdataBudgetTypeError"
                                           @input="$v.postData.budget_type.$touch()"
                                           @blur="$v.postData.budget_type.$touch()"
                                           @change="postData.budget=''">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle cx="34" cy="34" r="34" fill="#F8F8F8"/>
                                              <path d="M39.7012 36.8258L35.2395 33.4796V26.6632C35.2395 25.9778 34.6855 25.4238 34.0001 25.4238C33.3147 25.4238 32.7607 25.9778 32.7607 26.6632V34.0993C32.7607 34.4897 32.9442 34.8578 33.2565 35.0908L38.2139 38.8089C38.4369 38.9762 38.6972 39.0568 38.9562 39.0568C39.3342 39.0568 39.7061 38.887 39.949 38.5598C40.3606 38.0131 40.249 37.2361 39.7012 36.8258Z" fill="#F2613C"/>
                                              <path d="M34 18C25.1771 18 18 25.1771 18 34C18 42.8229 25.1771 50 34 50C42.8229 50 50 42.8229 50 34C50 25.1771 42.8229 18 34 18ZM34 47.5213C26.5453 47.5213 20.4787 41.4547 20.4787 34C20.4787 26.5453 26.5453 20.4787 34 20.4787C41.4559 20.4787 47.5213 26.5453 47.5213 34C47.5213 41.4547 41.4547 47.5213 34 47.5213Z" fill="#F2613C"/>
                                            </svg>
                                            <h5 class="fz-18 fw-500 text-black ml-4"><b>Day Rate</b></h5>
                                          </b-form-radio>
                                        </b-col>
                                        <b-col xl="6" lg="6" sm="12">
                                          <b-form-radio
                                           v-model="postData.budget_type"
                                           name="budget" 
                                           value="B" 
                                           :error-messages="postdataBudgetTypeError"
                                           @input="$v.postData.budget_type.$touch()"
                                           @blur="$v.postData.budget_type.$touch()"
                                           @change="postData.budget=''"> 
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle cx="34" cy="34" r="34" fill="#F8F8F8"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5554 31.207H21.79C21.238 31.207 20.79 30.759 20.79 30.207C20.79 29.655 21.238 29.207 21.79 29.207H45.5554C46.1074 29.207 46.5554 29.655 46.5554 30.207C46.5554 30.759 46.1074 31.207 45.5554 31.207" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6015 36.4141C39.0495 36.4141 38.5962 35.9661 38.5962 35.4141C38.5962 34.8621 39.0375 34.4141 39.5895 34.4141H39.6015C40.1535 34.4141 40.6015 34.8621 40.6015 35.4141C40.6015 35.9661 40.1535 36.4141 39.6015 36.4141" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M33.6845 36.4141C33.1325 36.4141 32.6792 35.9661 32.6792 35.4141C32.6792 34.8621 33.1205 34.4141 33.6725 34.4141H33.6845C34.2365 34.4141 34.6845 34.8621 34.6845 35.4141C34.6845 35.9661 34.2365 36.4141 33.6845 36.4141" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7557 36.4141C27.2037 36.4141 26.749 35.9661 26.749 35.4141C26.749 34.8621 27.1917 34.4141 27.7437 34.4141H27.7557C28.3077 34.4141 28.7557 34.8621 28.7557 35.4141C28.7557 35.9661 28.3077 36.4141 27.7557 36.4141" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6015 41.5957C39.0495 41.5957 38.5962 41.1477 38.5962 40.5957C38.5962 40.0437 39.0375 39.5957 39.5895 39.5957H39.6015C40.1535 39.5957 40.6015 40.0437 40.6015 40.5957C40.6015 41.1477 40.1535 41.5957 39.6015 41.5957" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M33.6845 41.5957C33.1325 41.5957 32.6792 41.1477 32.6792 40.5957C32.6792 40.0437 33.1205 39.5957 33.6725 39.5957H33.6845C34.2365 39.5957 34.6845 40.0437 34.6845 40.5957C34.6845 41.1477 34.2365 41.5957 33.6845 41.5957" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7557 41.5957C27.2037 41.5957 26.749 41.1477 26.749 40.5957C26.749 40.0437 27.1917 39.5957 27.7437 39.5957H27.7557C28.3077 39.5957 28.7557 40.0437 28.7557 40.5957C28.7557 41.1477 28.3077 41.5957 27.7557 41.5957" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0576 25.722C38.5056 25.722 38.0576 25.274 38.0576 24.722V20.334C38.0576 19.782 38.5056 19.334 39.0576 19.334C39.6096 19.334 40.0576 19.782 40.0576 20.334V24.722C40.0576 25.274 39.6096 25.722 39.0576 25.722" fill="#F2613C"/>
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2871 25.722C27.7351 25.722 27.2871 25.274 27.2871 24.722V20.334C27.2871 19.782 27.7351 19.334 28.2871 19.334C28.8391 19.334 29.2871 19.782 29.2871 20.334V24.722C29.2871 25.274 28.8391 25.722 28.2871 25.722" fill="#F2613C"/>
                                              <mask id="mask0_4749_21320" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="21" width="27" height="27">
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6665 21.4395H46.6665V48.0007H20.6665V21.4395Z" fill="white"/>
                                              </mask>
                                              <g mask="url(#mask0_4749_21320)">
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0278 23.4395C24.5705 23.4395 22.6665 25.2835 22.6665 28.6315V40.6968C22.6665 44.1181 24.5705 46.0008 28.0278 46.0008H39.3052C42.7625 46.0008 44.6665 44.1528 44.6665 40.7981V28.6315C44.6718 26.9848 44.2292 25.7048 43.3505 24.8248C42.4465 23.9181 41.0532 23.4395 39.3172 23.4395H28.0278ZM39.3052 48.0008H28.0278C23.4878 48.0008 20.6665 45.2021 20.6665 40.6968V28.6315C20.6665 24.1941 23.4878 21.4395 28.0278 21.4395H39.3172C41.5958 21.4395 43.4798 22.1221 44.7665 23.4115C46.0158 24.6661 46.6732 26.4701 46.6665 28.6341V40.7981C46.6665 45.2408 43.8452 48.0008 39.3052 48.0008V48.0008Z" fill="#F2613C"/>
                                              </g>
                                            </svg>
                                            <h5 class="fz-18 fw-500 text-black ml-4"><b>Monthly Rate</b></h5>
                                          </b-form-radio>
                                          <div class="error" v-if="postdataBudgetTypeError[0]">{{postdataBudgetTypeError[0]}}</div>

                                        </b-col>
                                      </b-row>
                                      <b-row>
                                        <b-col xl="12" lg="12" sm="12">
                                          <label class="mb-3">Maximum {{(postData.budget_type=='B') ? 'Monthly Rate':'Day Rate'}} ( USD )</label>
                                          <b-input-group size="lg" prepend="$">
                                            <b-form-input
                                            :error-messages="postdataBudgetError"
                                            @input="$v.postData.budget.$touch()"
                                            @blur="$v.postData.budget.$touch()"
                                            v-model="postData.budget" oninput="this.value=this.value.replace(/[^0-9.,]/g,'');" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"></b-form-input>
                                          </b-input-group>
                                          <div class="error" v-if="postdataBudgetError[0]">{{postdataBudgetError[0]}}</div>
                                        </b-col>
                                      </b-row>
                                      <hr>
                                      <div class="text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('modal-editbudgetModal'); postData.budget_type = temp_data_json.budget_type; postData.budget = temp_data_json.budget;">Cancel</a>
                                        <b-button type="button" class="btn btn-theme" @click="updateBudget()">Apply</b-button>
                                      </div>
                                    </b-form-group>
                                  </div>
                                </template>
                              </b-modal>
                            </div>
                            <div class="form-group mb-4 ">
                              <label class="fz-18 text-black fw-600 d-flex">
                                Project Schedules
                                <a href="javascript:void(0);" class="pl-3" v-b-modal.modal-editdate @click="temp_data_json.from_date = postData.from_date; temp_data_json.to_date = postData.to_date;">
                                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                  </svg>
                                </a>
                              </label>
                              <div class="d-flex align-items-center">
                                <span class="pr-3 span-name" v-if="postData.from_date">Start Date: {{postData.from_date}}</span>
                                <span class="pr-3 span-name ml-6" v-if="postData.to_date">End Date: {{postData.to_date}}</span>
                              </div>
                              <div class="error" v-if="postdataToDateError[0]">Project Schedules Is required</div>                                
                              <!-- project schedules model -->
                              <b-modal id="modal-editdate" title="Edit Project Date" centered hide-footer size="md" no-close-on-backdrop> 
                                <template>
                                  <div>
                                      <b-form-group class="mb-2">
                                        <label for="datepicker-placeholder" class="mb-2">Project Start Date</label>
                                        <b-form-datepicker
                                          v-model="postData.from_date" 
                                          :min="new Date().toISOString().substr(0, 10)"
                                          :error-messages="postdataFromDateError"
                                          @input="$v.postData.from_date.$touch()"
                                          @blur="$v.postData.from_date.$touch()" 
                                          class="mb-2"></b-form-datepicker>
                                        <div class="error" v-if="postdataFromDateError[0]">{{postdataFromDateError[0]}}</div>
                                      </b-form-group>
                                      <b-form-group>
                                        <label for="datepicker-placeholder" class="mb-2">Project End Date</label>
                                        <b-form-datepicker
                                          :error-messages="postdataToDateError"
                                          @input="$v.postData.to_date.$touch()"
                                          @blur="$v.postData.to_date.$touch()"
                                          v-model="postData.to_date" :min="new Date(postData.from_date).toISOString().substr(0, 10)"  locale="en"></b-form-datepicker>
                                        
                                          <div class="error" v-if="postdataToDateError[0]">{{postdataToDateError[0]}}</div>
                                        
                                      </b-form-group>
                                      <hr>
                                      <div class="text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-editdate'); postData.from_date = temp_data_json.from_date; postData.to_date = temp_data_json.to_date;">Cancel</a>
                                        <b-button type="button" class="btn btn-theme" @click="updateDate()">Apply</b-button>
                                      </div>
                                  </div>
                                </template>
                              </b-modal>
                            </div>
                            <div class="form-group mb-4 ">
                              <label class="fz-18 text-black fw-600 d-flex">Inspection Location
                                <a href="javascript:void(0);" class="pl-3" v-b-modal.modal-editlocation @click="getCountry(); temp_data_json.country_id = postData.country_id; temp_data_json.state_id = postData.state_id; temp_data_json.city_id = postData.city_id;">
                                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                  </svg>
                                </a>
                              </label>
                              <div class="d-flex align-items-center">
                                <span class="pr-3 span-name" v-if="postData.country_id">Country: {{getNameFromId(postData.country_id,'country')}},</span>
                                <span class="pr-3 span-name ml-1" v-if="postData.state_id">State: {{getNameFromId(postData.state_id,'state')}},</span>
                                <span class="pr-3 span-name ml-1" v-if="postData.city_id">City: {{getNameFromId(postData.city_id,'city')}}</span>
                                <div class="error" v-if="postdataCountryError[0] && postdataStateError[0] && postdataCityError[0]">Location is Required</div>
                                
                              </div>
                              <!-- location modal -->
                              <b-modal id="modal-editlocation" title="Edit Location" centered hide-footer size="md" no-close-on-backdrop>
                                <template>
                                  <div>
                                      <b-form-group id="country" label="Country" label-for="country">
                                        <b-form-select
                                          v-model="postData.country_id"
                                          class="form-control mb-3"
                                          :options="CountryData"
                                          value-field="country_id"
                                          text-field="country_name"
                                          :error-messages="postdataCountryError"
                                          @input="$v.postData.country_id.$touch()"
                                          @blur="$v.postData.country_id.$touch()" 
                                          @change="changecountry"
                                        ></b-form-select>
                                        <div class="error" v-if="postdataCountryError[0]">{{postdataCountryError[0]}}</div>
                                      </b-form-group>
                                      <b-form-group id="state" label="State" label-for="state">
                                        <b-form-select
                                          v-model="postData.state_id"
                                          class="form-control mb-3"
                                          :options="stateData"
                                          value-field="state_id"
                                          text-field="state_name"
                                          :error-messages="postdataStateError"
                                          @input="$v.postData.state_id.$touch()"
                                          @blur="$v.postData.state_id.$touch()" 
                                          @change="changestate"
                                        ></b-form-select>
                                        <div class="error" v-if="postdataStateError[0]">{{postdataStateError[0]}}</div>
                                      </b-form-group>
                                      <b-form-group id="city" label="City" label-for="city">
                                        <b-form-select
                                          v-model="postData.city_id"
                                          class="form-control mb-3"
                                          :options="cityData"
                                          value-field="city_id"
                                          text-field="city_name"
                                          :error-messages="postdataCityError"
                                          @input="$v.postData.city_id.$touch()"
                                          @blur="$v.postData.city_id.$touch()" 
                                        ></b-form-select>
                                        <div class="error" v-if="postdataCityError[0]">{{postdataCityError[0]}}</div>
                                      </b-form-group>
                                      <hr>
                                      <div class="text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2" @click="cancelLocation()">Cancel</a>
                                        <b-button type="submit" class="btn btn-theme" @click="updateLocation()">Apply</b-button>
                                      </div>
                                  </div>
                                </template>
                              </b-modal>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl="12" lg="12" sm="12">
                          <div class="py-4 px-4">
                            <template>
                              <div class="accordion p-0 border-none" role="tablist">
                                <b-card no-body class="mb-1">
                                  <b-card-header header-tag="header" class="bg-white p-0" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="light" class="bg-white border-none text-left w-100 py-4 pt-0 px-0">
                                      <h4 class="fz-20 text-black fw-600 mb-0">Screening questions (optional)</h4>
                                      <span class="fz-16 text-muted fw-300">Narrow down your candidates</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-chevron-down float-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                      </svg>
                                    </b-button>
                                  </b-card-header>
                                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body class="py-4 diabledCheckbox">
                                      <h4 class="fz-20 text-black fw-600 mb-3">Add up to {{(questionCount!=6)?((5-questionCount!=0)?5-questionCount:'Zero'):5}} more questions</h4>
                                      <b-button v-if="questionbtn" class="btn-outline-theme btn-sm mb-3" variant="light" @click="isEdit = false"><i class="fa fa-plus" aria-hidden="true"></i> Write your own question</b-button>
                                      <div class="d-flex align-items-start" v-if="isEdit == false">
                                        
                                        <textarea
                                          maxlength="500"
                                          v-model="Questions"
                                          id="textarea"
                                          rows="0"
                                          max-rows="6"
                                          v-autogrow
                                          class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                                          @keyup="questionLetterValid('question_Valid',$event.target.value)"
                                        >
                                        </textarea>
                                        
  
                                        <a href="javascript:void(0);" class="ml-2 delete-btn btn-success btn-sm"  @click="addQuestion('custom','')">
                                          <div class="up-icon">
                                              <i class="fa fa-check text-white"></i>
                                          </div>
                                        </a>
                                        <a href="javascript:void(0);" class="ml-2 delete-btn btn-danger btn-sm" @click="removeQuestion()">
                                          <div class="up-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-trash" viewBox="0 0 16 16">
                                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                              </svg>
                                          </div>
                                        </a>
                                      </div>
                                      <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'question_Valid'"></span>
  
                                      <h4 class="fz-20 text-black fw-600 mb-3" v-if="finalQuestion">Your questions</h4>
                                      <ul class="mb-3 ml-ul-custom">
                                        <span v-for="(ques, id) in finalQuestion" :key="id">
                                          <li class="d-flex align-items-center fs-subtitle mb-1 litextfeild" v-if="ques.status == 1" :id="'li_'+id">
                                            <span class="width-95">{{id+1}}. {{ques.text}}</span>
                                            <div class="ml-auto">
                                              <a href="javascript:void(0);" class="ml-2 btn btn-outline-theme btn-sm">
                                                <svg @click="editQuestion(ques,id)" width="17" height="18" viewBox="0 0 17 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" >
                                                    <path  d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"></path>
                                                </svg>
                                              </a>
                                            </div>
                                          </li>
                                          <div class="d-flex align-items-start" :id="'edit_'+id" v-if="showrditTextarea == id">                                            
                                              <textarea
                                                maxlength="500"
                                                v-model="UpdateQuestions"
                                                id="textarea"
                                                rows="0"
                                                max-rows="6"
                                                v-autogrow
                                                class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                                                @keyup="questionLetterValid('question_Valid_'+id,$event.target.value)"
                                              >
                                              </textarea>
  
                                              <a href="javascript:void(0);" class="ml-2 btn-success btn-sm"  @click="updateQuestion(id)">
                                                <i class="fa fa-check text-white"></i>
                                              </a>
                                              <a href="javascript:void(0);" class="ml-2 btn-danger btn-sm" @click="removeQuestion(id)">
                                                <i class="fa fa-trash text-white"></i>
                                              </a>
  
                                            </div>
                                            <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'question_Valid_'+id"></span>
                                        </span>
                                      </ul>
                                      <b-form-group
                                        v-slot="{ ariaDescribedby }"
                                        >
                                        <b-form-checkbox-group
                                          v-model="defaultQuestions"
                                          :options="questions"
                                          value-field="text"
                                          text-field="text"
                                          :aria-describedby="ariaDescribedby"
                                          @change="addQuestion('default')"
                                        ></b-form-checkbox-group>
                                      </b-form-group>
                                    </b-card-body>
                                  </b-collapse>
                                </b-card>
  
                                <b-card no-body class="mb-1">
                                  <b-card-header header-tag="header" class="bg-white p-0" role="tab">
                                    <b-button block v-b-toggle.accordion-2 variant="light" class="bg-white border-none text-left w-100 py-4 px-0">
                                      <h4 class="fz-20 text-black fw-600 mb-0">Advanced preferences (optional)</h4>
                                      <span class="fz-16 text-muted fw-300">Hours per week, hire date, and more</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-chevron-down float-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                      </svg>
                                    </b-button>
                                  </b-card-header>
                                  <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body class="py-4">
                                      <b-row>
                                        <b-col xl="6" lg="6" sm="12">
                                          <b-row>
                                            <b-col xl="12" lg="12" sm="12">
                                              <h4 class="fz-20 text-black fw-600 mb-3">English level</h4>
                                              <b-form-group
                                                v-slot="{ ariaDescribedby }"
                                                >
                                                <b-form-radio-group
                                                  v-model="postData.preference_english_level"
                                                  :options="englishLevel"
                                                  text-field="value" 
                                                  value-field="id"
                                                  :aria-describedby="ariaDescribedby"
                                                ></b-form-radio-group>
                                              </b-form-group>
                                            </b-col>
                                          </b-row>
                                          <b-row>
                                            <b-col xl="12" lg="12" sm="12">
                                              <b-form-group>
                                                <h4 class="fz-20 text-black fw-600 mb-3">Other languages</h4>
                                                <multiselect 
                                                  v-model="postData.preference_languages"
                                                  placeholder="Search or add languages"
                                                  label="value"
                                                  track-by="code"                                                
                                                  :options="languageData"
                                                  :multiple="true"
                                                  :taggable="true"
                                                ></multiselect>
                                              </b-form-group>
                                            </b-col>
                                          </b-row>
                                        </b-col>
                                        <b-col xl="6" lg="6" sm="12">
                                          <b-row>
                                            <b-col xl="12" lg="12" sm="12">
                                              <h4 class="fz-20 text-black fw-600 mb-3">Number of professional needed</h4>
                                              <b-form-group
                                                v-slot="{ ariaDescribedby }"
                                                >
                                                <b-form-radio-group
                                                  name="preference_no_professional"
                                                  v-model="preference_no_professional"
                                                  :options="professionals"
                                                  text-field="value"
                                                  value-field="id"
                                                  :aria-describedby="ariaDescribedby"
                                                  @change="numberOfProfessional()"
                                                ></b-form-radio-group>
                                                <b-form-input v-if="professional_input" v-model="postData.preference_no_professional" oninput="this.value=this.value.replace(/[^0-9.,]/g,'');" maxlength="12"></b-form-input>
                                              </b-form-group>
                                            </b-col>
                                          </b-row>
                                          <b-row>
                                            <b-col xl="12" lg="12" sm="12">
                                              <h4 class="fz-20 text-black fw-600 mb-3">Amount earned</h4>
                                              <b-form-group
                                                v-slot="{ ariaDescribedby }"
                                                >
                                                <b-form-radio-group
                                                  v-model="postData.preference_amount_earn"
                                                  :options="amountEarn"
                                                  text-field="value" 
                                                  value-field="id"
                                                  :aria-describedby="ariaDescribedby"
                                                ></b-form-radio-group>
                                              </b-form-group>
                                            </b-col>
                                          </b-row>
                                        </b-col>
                                      </b-row>
                                    </b-card-body>
                                  </b-collapse>
                                </b-card>
  
                                <b-card no-body class="mb-1">
                                  <b-card-header header-tag="header" class="bg-white p-0" role="tab">
                                    <b-button block v-b-toggle.accordion-3 variant="light" class="bg-white border-none text-left w-100 py-4 px-0">
                                      <h4 class="fz-20 text-black fw-600 mb-0">Job post preferences (optional)</h4>
                                      <span class="fz-16 text-muted fw-300">Adjust visiblility</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-chevron-down float-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                      </svg>
                                    </b-button>
                                  </b-card-header>
                                  <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body class="py-4">
                                      <h4 class="fz-20 text-black fw-600 mb-3">Job Type</h4>
                                      <b-form-group
                                        v-slot="{ ariaDescribedby }"
                                        >
                                        <b-form-radio-group
                                          v-model="postData.preferences_job_type"
                                          :options="jobtype"
                                          value-field="text"
                                          text-feild="value"
                                          :aria-describedby="ariaDescribedby"
                                        ></b-form-radio-group>
                                      </b-form-group>
                                    </b-card-body>
                                  </b-collapse>
                                </b-card>
                              </div>
                            </template>
                          </div>
                        </b-col>
                      </b-row>
                    </b-form>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group> 
        </b-col>
      </b-row>
    </b-container>
  </template>
  <script>
    import { mapActions } from "vuex";
    import $ from 'jquery'; 
    import Multiselect from 'vue-multiselect';
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, minLength,helpers } from 'vuelidate/lib/validators'
    export default {
      mixins: [validationMixin],
      validations: {
        postData:{
            job_title:{
              required,
              isNameValid: helpers.regex('isNameValid',/^[a-z0-9_ ]*$/i),
              maxLength: maxLength(250),
              minLength: minLength(2),
            },
            scope_of_work:{
              required,
              maxLength: maxLength(2500),
            },
            quality_inspector_id:{required},
            topSkill:{required},
            project_type:{required},
            project_length:{required},
            project_experience:{required},
            budget_type:{required},
            budget:{required},
            from_date:{required},
            to_date:{required},
            country_id:{required},
            state_id:{required},
            city_id:{required},
        },
        invitation:{
            invited_user_id:{required},
            message:{
              required,
              maxLength: maxLength(2500),
            },
          },
      },
      computed:{
        invitationmessageError() {
            const errors = [];
            if (!this.$v.invitation.message.$dirty) return errors;
            !this.$v.invitation.message.required && errors.push("Message is required");
            !this.$v.invitation.message.maxLength && errors.push("Maximum limit reached");
            return errors;
        },
        
        postdataTitleError() {
            const errors = [];
            if (!this.$v.postData.job_title.$dirty) return errors;
            !this.$v.postData.job_title.required && errors.push("Job Title is required");
            !this.$v.postData.job_title.isNameValid && errors.push("Alphabet is Allowed");
            !this.$v.postData.job_title.maxLength && errors.push("Maximum limit reached");
            !this.$v.postData.job_title.minLength && errors.push("Minimum 3 alphabet Required");
            return errors;
        },
        postdatadescriptionError() {
            const errors = [];
            if (!this.$v.postData.scope_of_work.$dirty) return errors;
            !this.$v.postData.scope_of_work.required && errors.push("Description is required");
            !this.$v.postData.scope_of_work.maxLength && errors.push("Maximum limit reached");
            return errors;
        },
        postdataCategoryError() {
            const errors = [];
            if (!this.$v.postData.quality_inspector_id.$dirty) return errors;
            !this.$v.postData.quality_inspector_id.required && errors.push("Category is required");
            return errors;
        },
        postdataSkillError() {
            const errors = [];
            if (!this.$v.postData.topSkill.$dirty) return errors;
            !this.$v.postData.topSkill.required && errors.push("Skills is required");
            return errors;
        },
        postdataProjectTypeError() {
            const errors = [];
            if (!this.$v.postData.project_type.$dirty) return errors;
            !this.$v.postData.project_type.required && errors.push("Project Type is required");
            return errors;
        },
        postdataProjectLengthError() {
            const errors = [];
            if (!this.$v.postData.project_length.$dirty) return errors;
            !this.$v.postData.project_length.required && errors.push("project Length is required");
            return errors;
        },
        postdataProjectExperienceError() {
            const errors = [];
            if (!this.$v.postData.project_experience.$dirty) return errors;
            !this.$v.postData.project_experience.required && errors.push("Project Experience is required");
            return errors;
        },
        postdataBudgetTypeError() {
            const errors = [];
            if (!this.$v.postData.budget_type.$dirty) return errors;
            !this.$v.postData.budget_type.required && errors.push("Budget Type is required");
            return errors;
        },
        postdataBudgetError() {
            const errors = [];
            if (!this.$v.postData.budget.$dirty) return errors;
            !this.$v.postData.budget.required && errors.push("Budget is required");
            return errors;
        },
        postdataFromDateError() {
            const errors = [];
            if (!this.$v.postData.from_date.$dirty) return errors;
            !this.$v.postData.from_date.required && errors.push("From Date is required");
            return errors;
        },
        postdataToDateError() {
            const errors = [];
            if (!this.$v.postData.to_date.$dirty) return errors;
            !this.$v.postData.to_date.required && errors.push("To Date is required");
            return errors;
        },
        postdataCountryError() {
            const errors = [];
            if (!this.$v.postData.country_id.$dirty) return errors;
            !this.$v.postData.country_id.required && errors.push("Country is required");
            return errors;
        },
        postdataStateError() {
            const errors = [];
            if (!this.$v.postData.state_id.$dirty) return errors;
            !this.$v.postData.state_id.required && errors.push("State is required");
            return errors;
        },
        postdataCityError() {
            const errors = [];
            if (!this.$v.postData.city_id.$dirty) return errors;
            !this.$v.postData.city_id.required && errors.push("City is required");
            return errors;
        },
        
      },
      components: {
        Multiselect
      },
      data() {
        return {
          user_id:'',
          UserDetails:'',
          postData:{
            employment_type_id: 1,
            user_id: this.$store.state.currentUserData.login_master_id,
            job_title:'',
            scope_of_work:'',
            attachment:[],
            quality_inspector_id:'',
            topSkill:[],
            project_type:'',
            project_length:'',
            project_experience:'',
            budget_type:'',
            budget:'',
            from_date:new Date().toISOString().substr(0, 10),
            to_date:'',
            country_id:'',
            state_id:'',
            city_id:'',
            preference_questions:[],
            preference_english_level:'1',
            preference_no_professional:'1',
            preference_languages:[],
            preference_amount_earn:'1',
            preferences_job_type:'Public',
          },
          temp_data:'',
          temp_data_json:{
            quality_inspector_id:'',
            topSkill:[],
            project_type:'',
            project_length:'',
            project_experience:'',
            budget_type:'',
            budget:'',
            from_date:'',
            to_date:'',
            country_id:'',
            state_id:'',
            city_id:'',
          },
          invitation:{
            invited_user_id:'',
            job_id:'',
            message:'',
          },
          professional_input:false,
          preference_no_professional:'a',
          isEdit: true,
          questions: [],
          englishLevel: [],
          languageData: [],
          scopeWork:[],
          projectLengthData:[],
          ExperienceLevelData:[],
          professionals: [{ value: 'One person', id: 'a' }, { value: 'More than one person', id: 'b' }],
          amountEarn: [],
          CountryData: [],
          stateData: [],
          cityData: [],
          categoryData:[],

          jobtype: [
            { text: 'Private', value: 'private' },
            { text: 'Public', value: 'public' },
          ],
          attachmentUrl:'',
          // old datas
          // value:'',
          

          
          attachmentbtn : false,
          UploadedFileurl:'',
          questionCount:0,
          Questions:'',
          UpdateQuestions:'',
          questionbtn:true,
          finalQuestion:[],
          defaultQuestions:[],
          showrditTextarea:6,
          hideDraftbtn:true,
        }
      },
      mounted(){
        this.headToken= {"Authorization": localStorage.getItem('token')};
        if(this.$route.params.uid != undefined){
          this.user_id = this.decodeId(this.$route.params.uid.slice(1));
          // this fun is for to get freelancer details
          this.getFreelancerDetails();
          //this fun is for to get languages
          this.getLanguage();
          // this fun is for to get category
          this.getCategory();
          // this fun is for to get Questions
          this.getQuestions();
          // this fun is for to get amount earn
          this.getamountEarn();
          // this fun is for to get english level
          this.getEnglishlevel();
        }else{
          this.$router.push({
                name: 'clientSearch',
                path:'/client/search',
              });
        }
        
      },
      methods:{
        // this fun is for to open skill model
        openSkillModel(){
          var that =this;
          that.temp_data_json.topSkill =[];
          that.postData.topSkill.filter(data=>{
            that.temp_data_json.topSkill.push(data);
          })
        },
        // this fun is for to close skill model
        closeSkillModel(){
          var that =this;
          that.postData.topSkill = [];
          if(that.temp_data_json.topSkill.length > 0){
            that.temp_data_json.topSkill.filter(data=>{
              that.postData.topSkill.push(data);
            })
          }else{
            that.postData.topSkill=[];
          }
          
          that.$bvModal.hide('modal-editskills');
        },
        // this fun is for to return the name of given id
        getNameFromId(_i,type){
          var name;
          var that =this;
          if(type=='category'){
            that.categoryData.filter(function(elem){
              if(elem.qp_role_master_id == _i) {
                name= elem.role_name;
                return false
              }
            });
          }else if(type=='skill'){
            that.categoryData.map(function(elem){
              if(elem.qp_role_master_id == that.postData.quality_inspector_id) {
                elem.skills.map(function(skill){
                  if(skill.qp_role_skill_master_id == _i){
                    name = skill.skill_name;
                  }
                });
              }
            });
          }else if(type== 'project_length'){
            that.projectLengthData.filter(function(elem){
                if(elem.value == _i){
                  name = elem.title;
                  return false;
                }
            });
            
          }else if(type == 'project_experience'){
            that.ExperienceLevelData.filter(function(elem){
                if(elem.value == _i){ 
                  name = elem.title;
                  return false
                }
            });
          }else if(type == 'country'){
            this.CountryData.filter(function(elem){
                if(elem.country_id == _i){
                  name = elem.country_name;
                  return false;
                } 
            });
            
          }else if(type == 'state'){
            that.stateData.filter(function(elem){
                if(elem.state_id == _i) {
                  name= elem.state_name;
                  return false;
                }
            });
            
          }else if(type == 'city'){
            that.cityData.filter(function(elem){
                if(elem.city_id == _i){
                  name = elem.city_name;
                  return false;
                } 
            });
          }
          return name;
        },
        // this fun is for freelancer details
        async getFreelancerDetails(){
            var clientDetails =   await this.genericAPIPOSTRequest({
                requestUrl: "user/getUserDetails",
                params: {
                    "user_id": this.user_id
                },
            });
            if(clientDetails !=''){
                console.log('clientDetails',clientDetails);
                this.UserDetails =  clientDetails;
            }
        },
        
        // this fun is for to =remove attachment
        removeAttachment(_i){
          this.postData.attachment.splice(_i,1);
          document.getElementById("fileUpload").value = "";
        },
        //this fun is for to validate question text
        questionLetterValid(_i,_v){
          var value = _v;
          var that = $('#'+_i);
          if(value.length == 500 ){
            that.html('Maximum Limit Reached')
          }else if(value.length == 0){
            that.html('');
          }else{
            that.html('Maximum 500 charachter Allow')
          }
        },
        // this fun is for to check number of professtional check 
        numberOfProfessional(){
          // console.log(this.preference_no_professional);
          if(this.preference_no_professional == 'b'){
            this.professional_input=true;
            this.postData.preference_no_professional = '2';
          }else{
            this.professional_input=false;
            this.postData.preference_no_professional = '1';
          }
        },
        // this fun to validate description limit
        descriptionLetterValid(_i,_v){
          var value = _v;
          if(value.length == 2500 ){
            $('#'+_i).html('Maximum Limit Reached')
          }else{
            $('#'+_i).html('Maximum 2500 charachter Allow')
          }
        },
        // this fun is for to add questions
        addQuestion(_v){
          if(_v=='custom'){
            if (this.questionCount >= 5) {
              this.checkQuestionlength();
            }else if(this.Questions!=""){
              var error = this.finalQuestion.filter(data=>{
                if(data.text == this.Questions){
                  return 1;
                }
              })
              if(error.length == 0){
                this.questionCount++;
                var arr = {'text':this.Questions,'status':1};
                this.finalQuestion.push(arr);
              }
              this.Questions = '';
              this.isEdit = true;
              if(this.questionCount >= 5){
                this.checkQuestionlength();
              }
              $('#question_Valid').html('');
            }else{
              this.$toastr.e('Please Enter Some Text');
              return false
            }
          }else{
            var ques_data = [];
            this.finalQuestion.forEach((data) => {
              if(data.status == 1){
                ques_data.push(data);
              }
            });
            this.finalQuestion = ques_data;
            this.questionCount = this.finalQuestion.length;
            this.defaultQuestions.forEach((ques)=>{
              if(this.finalQuestion.length >= 5){
                this.checkQuestionlength();
              }else if(this.finalQuestion.length < 5){
                var arr = {'text':ques,'status':0};
                this.finalQuestion.push(arr);
                this.checkQuestionlength();
              }
            });
            this.questionCount = this.finalQuestion.length;
          }
        },
        // this fun for to check questions length
        checkQuestionlength(){
          if(this.finalQuestion.length >= 5){
            $('.diabledCheckbox .custom-control-input').attr('disabled',true);
            this.questionbtn = false;
            this.isEdit = true;
            this.finalQuestion.forEach((data)=>{
              if(data.status == 0){
                $('.diabledCheckbox').children().find('[value="'+data.text+'"]').removeAttr('disabled');
              }
            });
          }else{
            this.questionbtn = true;
            $('.diabledCheckbox .custom-control-input').removeAttr('disabled');
          }
          this.postData.preference_questions = this.finalQuestion;
        },
        editQuestion(data,_i){
          this.UpdateQuestions = data.text;
          this.showrditTextarea = _i;
          // $('.litextfeild').removeClass('d-none');
          // $('.edittextfeild').addClass('d-none');
          $('#edit_'+_i).removeClass('d-none');
          $('#li_'+_i).addClass('d-none');
        },
        // this fun  for to remove question
        removeQuestion(_i=null){
          if(_i != null){
            $('#li_'+_i).removeClass('d-none');
            this.finalQuestion.splice(_i,1);
            this.questionCount--;
            this.showrditTextarea=6;
            this.checkQuestionlength();
          }else{
            this.Questions = '';
            this.isEdit=true
          }
        },
        // this fun is for to update question
        updateQuestion(_i){
          this.finalQuestion[_i].text = this.UpdateQuestions;
          this.showrditTextarea = 6;
          $('#li_'+_i).removeClass('d-none');
          $('#question_Valid_'+_i).html('');
        },
        // this fun is for to check input value is alpha
        isLetter(e,_i) {
          let char = String.fromCharCode(e.keyCode); // Get the character
          if(/^[a-zA-Z\s]*$/.test(char)) {
            $('#'+_i).html('');
            return true; // Match with regex 
          }
          else {
            e.preventDefault(); // If not match, don't add to input text
            $('#'+_i).html('Only Characters Allowed')
          }
        },
        // this fun is for to check selectSkill hide show
        CheckValueInarr(_i){
          for (let index = 0; index < this.postData.topSkill.length; index++) {
            if (this.postData.topSkill[index] == _i) {
              return 'hideSkill';
            }
          }
        },
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to get Project Length 
        async getProjectLength(){
          var projectData = await this.genericAPIPOSTRequest({
              requestUrl: "getOptionsMaster",
              params: {
                'type':'project_length',
              },
          });  
          
          if(projectData.length > 0 ){
            this.projectLengthData = projectData;
          }
        },
        // this fun is for to get Project Length 
        async getExperienceLevel(){
          var experienceData = await this.genericAPIPOSTRequest({
              requestUrl: "getOptionsMaster",
              params: {
                'type':'experience_level',
              },
          });
          
          if(experienceData.length > 0 ){
            this.ExperienceLevelData = experienceData;
          }
        },
        // this fun is for to get Country
        async getCountry(){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getCountryList",
              params: {},
          });  
          this.CountryData = res;
          this.changecountry('onload');   
          this.changestate('onload'); 
        },
        // this fun is for to get Question
        async getQuestions(){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getQuestionList",
              params: {},
          });  
          this.questions = res;
        },
        // THIS FUNCTIONIS FOR GET STATE DATA
        async changecountry(_v){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getStateList",
              params: { country_id: this.postData.country_id },
          });  
          this.stateData = res;
          if(_v !='onload'){
            this.postData.state_id ='';
            this.postData.city_id ='';
          }
        },
        // THIS FUNCTIONIS FOR GET CITY DATA
        async changestate(_v){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getCityList",
              params: { state_id: this.postData.state_id },
          });  
          this.cityData = res;
          if(_v !='onload'){
            this.postData.city_id = '';
          }
        },
        // this fun is for to get category
        async getCategory(){
          var res = await this.genericAPIPOSTRequest({
                requestUrl: "common/getQpRoleMasterList",
                params: {},
            });  
          this.categoryData = res; 
        },
        // this fun is for to get language
        async getLanguage(){
          var res = await this.genericAPIPOSTRequest({
                requestUrl: "getLanguageList",
                params: {},
            });  
          this.languageData = res; 
        },
        // this fun is for to get english level
        async getEnglishlevel(){
          var res = await this.genericAPIPOSTRequest({
                requestUrl: "getenglishLevelList",
                params: {},
            });  
          this.englishLevel = res; 
        },
        // this fun is for to get amount earn
        async getamountEarn(){
          var res = await this.genericAPIPOSTRequest({
                requestUrl: "getamountEarnList",
                params: {},
            });  
          this.amountEarn = res; 
        },
        
        // this fun is for to select skills
        selectSkill(_v){
          if(this.postData.topSkill.length < 10){
            this.postData.topSkill.push(_v.qp_role_skill_master_id);
            document.getElementById('cat_'+_v.qp_role_skill_master_id).classList.add("hideSkill");
          }
        },
        // this fun is for to Remove select skills
        removeSkills(index,_v){
          if(this.postData.topSkill.length > 1){
            this.postData.topSkill.splice(index, 1); 
            document.getElementById('cat_'+_v).classList.remove("hideSkill")
          }
        },
        // this fun is for to update skills
        skillsUpdate(){
          if(this.postData.topSkill.length > 0){
          // this is for to close the model
            this.$bvModal.hide('modal-editskills');
          }else{
            this.$toastr.e('Please Select Atleast one skills');
          }
        },
        
        //this fun is for to update budget price
        updateBudget(){
          if(this.postData.budget_type !='' && this.postData.budget!= '' && this.postData.budget > 0){
            this.$bvModal.hide('modal-editbudgetModal');
          }else if(this.postData.budget_type ==''){
            this.$toastr.e('Please Select Budget Type');
          }else if(this.postData.budget== '' || this.postData.budget < 0){
            this.$toastr.e('Please Enter budget');
          }
        },
        
        // this fun is for to update date 
        updateDate(){
          if(this.postData.to_date >= this.postData.from_date){
            // this is for to close the model
            this.$bvModal.hide('modal-editdate');
          }else{
            this.$toastr.e('End Date Should be greater or equal to Start Date');
          }
        },
       
        //this function is for to update location 
        updateLocation(){
          if (this.postData.country_id!="" && this.postData.country_id != undefined && this.postData.state_id!="" && this.postData.state_id != undefined && this.postData.city_id!="" && this.postData.city_id != undefined) {
            // this is for to close the model
            this.$bvModal.hide('modal-editlocation');
          }else if(this.postData.country_id=="" || this.postData.country_id == undefined){
            this.$toastr.e('Please Select Country');
          }else if(this.state_id=="" || this.state_id == undefined){
            this.$toastr.e('Please Select State');
          }else if(this.city_id=="" || this.city_id == undefined){
            this.$toastr.e('Please Select City');
          } else {
            this.$toastr.e('Please Select Country, State, City');
          }
        },
        // this fun is for to cancel location update
        cancelLocation(){
          this.postData.country_id =this.temp_data_json.country_id;
          this.postData.state_id =this.temp_data_json.state_id;
          this.postData.city_id =this.temp_data_json.city_id;
          this.getCountry();
          this.$bvModal.hide('modal-editlocation');
        },
        // this fun is for to open scope model
        async OpenScope(){
          var scopeWork = await this.genericAPIPOSTRequest({
              requestUrl: "getOptionsMaster",
              params: {
                'type':'scope_work',
              },
          }); 
          if(scopeWork.length >0 ){
            this.scopeWork = scopeWork;
          } 
          this.getProjectLength();
          this.getExperienceLevel();
        },
        // this fun for to change scope value
        changeScope(){
          this.postData.project_length='';
          this.postData.project_experience='';
        },
        //this fun for to update scope
        updateScope(){
          if(this.postData.project_type == ""){
            this.$toastr.e('Please Select Project Type');
            return false
          }else if(this.postData.project_length == "" ){
            this.$toastr.e('Please Select Project Length');
            return false
          }else if(this.postData.project_experience == ""){
            this.$toastr.e('Please Select Experience Level');
            return false
          }else{
            // this is for to close the model
            this.$bvModal.hide('modal-editscope');
          }
        },
        //this fun is for to cancel scope
        cancelScope(){
          this.postData.project_type = this.temp_data_json.project_type;
          this.postData.project_length = this.temp_data_json.project_length;
          this.postData.project_experience = this.temp_data_json.project_experience;
          this.temp_data_json.project_type = '';
          this.temp_data_json.project_length = '';
          this.temp_data_json.project_experience = '';
          this.$bvModal.hide('modal-editscope');
        },
        // this fun is for to submit job post
        async SubmitJobPost(){
          var language=[];
          this.invitation.invited_user_id = this.user_id;
          this.$v.postData.$touch();
          this.$v.invitation.$touch();
          console.log('data',this.postData);
          console.log('data',this.invitation);
          if (!this.$v.postData.$invalid && !this.$v.invitation.$invalid) {
            if(this.postData.preference_languages.length > 0){
              this.postData.preference_languages.filter(data=>{
                language.push(data.code);
              });
            }
            this.postData.preference_languages = language;
            this.postData.job_status = 1;
            this.postData.budget = '$'+this.postData.budget;
            
            var PostedData = await this.genericAPIPOSTRequest({
                requestUrl: "job/addJob",
                params: {'jobData':this.postData},
            });
            if (PostedData!=""){
              this.invitation.job_id = PostedData.jobs_id;
              // console.log(this.invitation);
              await this.genericAPIPOSTRequest({
                  requestUrl:'sendJobInvitation',
                  params:this.invitation
              });
              await this.postData.attachment.map(data=>{
                var source = this.attachmentUrl.split("upload");
                  this.genericAPIPOSTRequest({
                    requestUrl: "moveFile",
                    params: {
                      'from_path':'./upload'+source[1]+data,
                      'to_path':'./upload'+source[1]+PostedData.jobs_id+"/",
                    },
                  });
              });
              this.$router.push({
                name: 'clientDashboard',
                path:'/client/dashboard',
              });
              this.$toastr.s('Job post successfully Submitted');
            }
          }
        },
        // this fun is for to submit job post
        async submitAsDraft(){
          var language=[];
          if(this.postData.preference_languages.length > 0){
            this.postData.preference_languages.filter(data=>{
              language.push(data.code);
            });
          }
          this.postData.preference_languages = language;
          this.$v.postData.$touch();
          if (!this.$v.postData.$invalid) {
            this.postData.job_status = 2;
            this.postData.budget = '$'+this.postData.budget;
             var PostedData = await this.genericAPIPOSTRequest({
                requestUrl: "job/addJob",
                params: {'jobData':this.postData},
             });
             if (PostedData!=""){
              await this.postData.attachment.map(data=>{
                var source = this.attachmentUrl.split("upload");
                  this.genericAPIPOSTRequest({
                    requestUrl: "moveFile",
                    params: {
                      'from_path':'./upload'+source[1]+data,
                      'to_path':'./upload'+source[1]+PostedData.jobs_id+"/",
                    },
                  });
                });
              this.$router.push({
                name: 'clientSearch',
                path:'/client/search',
              });
              this.$toastr.s('Job Saved As Draft');
             }
          }
        },
        // this fun is for to choose file
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        // this function is for to upload attachment
        async UploadFile(e){
          
          var files=e.target.files[0];
          var ext = files.name.split('.').pop();
          if(ext=="pdf" || ext=="word" || ext=="png"|| ext=="jpeg"|| ext=="jpg"){
            const fileSize = files.size / 1024 / 1024; // in MiB
            if ( fileSize <= 40) {
            // if (fileSize >= 2 && fileSize <= 40) {
              const formData = new FormData();
              formData.append('image', files);
              formData.append('user_id', this.postData.user_id);
              var getData = await this.genericAPIPOSTRequest({
                  requestUrl: "uploadJobile",
                  params: formData,
              });
              if(getData.filename!=""){
                if(this.attachmentUrl ==''){
                  var source = getData.filename.split(getData.name);
                  this.attachmentUrl = source[0]
                }
                this.postData.attachment.push(getData.name);
                document.getElementById("fileUpload").value = "";
              }
              else{
                 this.$toastr.e('This file type not allow to upload');
              }
            }else if(fileSize < 2){
              this.$toastr.e('File Size Should be Greater Than 2 Mb');
            }else if(fileSize > 40 ){
              this.$toastr.e('File Size Should be Less Than 40 Mb');
            }else{
              this.$toastr.e('File Size Should between 2 Mb To 40 Mb');
            }
          } else{
            this.$toastr.e('Only Allow Files (PDF, Word, Png, Jpg, Jpeg)');
          }
          
        },
        
      }
    }
  </script>
  
  <style>
    .modal-header .close { display:none; }
     @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
    .attachment .fa-file{border: 1px dashed #6666664d;padding: 9px;border-radius: 4px;color: #666;}
    body{font-family: 'Source Sans Pro', sans-serif!important;}
    .text-muted{color:#979797!important;}
    .ralative {padding-bottom:0px;}
    .theme-bg{background-color: #FFF6F4!important;}
    .bg-none{background-color:transparent;}
    .bordered{border-bottom: 1px solid #EBEBEB!important;border-right: 1px solid #EBEBEB;}
    .br-20{border-radius: 20px;}
    .border-none{border:0px!important;}
    .fz-16{font-size:16px;}
    .fz-18{font-size:18px;}
    .fw-600{font-weight:600;}
    .mb-23{margin-bottom:23px;}
    .no-bottom-border{border-bottom:0px!important;}
    .border-top-0{border-top:0px!important;}
    .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
    p {margin-top: 0!important;margin-bottom: 1rem!important;}
    h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
    dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
    ol, ul {padding-left: 2rem!important;}
    .fz-30{font-size:26px!important;}
    @media only screen and (min-width: 320px) and (max-width: 815px) {
      .sm-mt-2{margin-top:2rem!important;}
    }
    .b-calendar-grid .btn-primary.disabled {background-color: #F2613C!important;}
    .b-calendar-grid .btn-outline-primary {color: #F2613C!important;}
    .b-calendar-grid .btn-primary.active{background-color: #F2613C!important;}
    .multiselect__option--highlight{background: #f2613b!important;}
    .multiselect__option--highlight:after{background: #f2613b!important;}
    .multiselect__tag{background: #f2613b!important;}
    .multiselect__tag .multiselect__tag-icon:after{color:#fff!important;}
    .multiselect__tag-icon:hover{background: #f2613b!important;}
    .width-95{width:95%;}
    .ml-ul-custom{margin-left:-30px!important;}
    .reviewpost-wrap .card{border-radius:20px;}  
    .reviewpost-wrap .card-header{border-radius:20px 20px 0 0!important;}
    .reviewpost-wrap .card-body{border-radius:0 0 20px 20px;    padding: 0 12px;}
    .reviewpost-wrap .card-footer{border-radius:0 0 20px 20px!important;background-color:#fff;}
    .tags-wrap ul{margin-bottom:0px!important;}
    a{text-decoration:none!important;}
    #modal-editbudget .custom-radio{padding-left: 0rem;}
    #modal-editbudget input ~ label:before{right: 0;left:auto;}
    #modal-editbudget input[type=radio] ~ label{padding: 18px 10px;}
    .accordion .btn{text-align:left!important;}
    .accordion .btn-check:focus + .btn-light, .accordion .btn-light:focus{box-shadow:none!important;}
    .accordion .custom-control-label span{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 18px;line-height: 28px;color: #979797;}
    .reviewpost-wrap .border-bottom:last-child{border-bottom:1px solid #dee2e6 !important}
    .hideSkill{display:none !important};
    
  </style>
  