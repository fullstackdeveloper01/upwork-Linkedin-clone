<template>
  <b-container>
    <b-row class="mt-100 reviewpost-wrap">
      <b-col xl="12" lg="12" sm="12">
        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
              <div class="d-md-flex align-items-center">
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>Now just finish and review your job post</b></h4>
                <div class="ml-auto sm-mt-2">
                  <b-button class="btn btn-theme" @click="submitAsDraft" v-if="hideDraftbtn">Save As Draft</b-button>
                  &nbsp;
                  &nbsp;
                  <b-button class="btn btn-theme" @click="SubmitJobPost">Post Your Job Now</b-button>
                </div>
              </div>
            </template>
            <b-row>
              <b-col cols="12" class="p-0 border-bottom">
                <div>
                  <b-form>
                    <b-row>
                      <b-col xl="12" lg="12" sm="12">
                        <div class="py-4 px-4">
                          <b-form-group>
                            <label class="fz-18 text-black fw-500 mb-2">Your title</label>
                            <b-form-input 
                              :minlength="3" :maxlength="250"
                              v-model="job.job_title"
                              v-on:keypress="isLetter($event,'title_ids')"
                              v-on:keyup="checktitlelength('title_ids')"
                              required
                            ></b-form-input>
                            <span class="fz-12 fw-400 text-theme no-border mt-0 p-0"  href="javascript:void(0);" :id="'title_ids'"></span>
                          </b-form-group>
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
                                :maxlength="2500"
                                v-model="job.scope_of_work"
                                placeholder="Already have a job discription ? Paste it here!..."
                                rows="8"
                                max-rows="10"
                                @keyup="descriptionLetterValid('description_Valid',$event.target.value)"
                              ></b-form-textarea>
                              <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'description_Valid'"></span>

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
                                <!-- <div  class="ml-2 mt-3 attachment "  v-if="job.attachment.length > 0" style="border: 1px dashed #6666664d;padding: 6px 15px;display: table-row-group;">
                                  <i class="fa fa-file border-none"></i>
                                  <span class="attatchment-wrap mr-5" v-for="(attc, index) in job.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;">
                                    <a :href="UploadedFileurl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                                    <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index)"></i>
                                  </span>
                                </div> -->
                                <!-- <div class=" align-items-center">
                                  <ul  class="ml-2 mt-4 attachment "  v-if="job.attachment.length > 0" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                                    <i class="fa fa-file border-none"></i>
                                    <li class="attatchment-wrap mr-5 mb-2" v-for="(attc, index) in job.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                                      <a :href="UploadedFileurl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                                      <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index)"></i>
                                    </li>
                                  </ul>
                                </div> -->
                                <div>
                                  <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="job.attachment.length > 0" style="padding: 6px 0px;">
                                    <template v-for="(attc, index) in job.attachment">
                                      <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                                        <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                        <a :href="UploadedFileurl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                                        <i class="fa fa-trash border-none fz-18 text-danger cursor-pointer pl-2" @click="removeAttachment(index)"></i>
                                      </li>
                                    </template>
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
                          <div class="form-group mb-4 pb-4">
                            <label class="fz-18 text-black fw-600 ">Category</label>
                            <div class="d-flex align-items-center">
                              <span class="pr-3 span-name">{{job.quality_inspector}}</span>
                              <a href="javascript:void(0);" class="text-muted d-flex align-items-center" v-b-modal.modal-editcategory>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                </svg>
                              </a>
                            </div>
                            <b-modal id="modal-editcategory" centered title="Edit Category" hide-footer size="md" no-close-on-backdrop>
                              <template>
                                <div>
                                    <b-form-group id="category" label="Category" label-for="category">
                                      <b-form-select
                                        v-model="job.quality_inspector_id"
                                        class="form-control mb-3"
                                        :options="categoryData"
                                        value-field="qp_role_master_id"
                                        text-field="role_name"
                                        required
                                      >
                                      </b-form-select>
                                    </b-form-group>
                                    <hr>
                                    <div class="text-right">
                                      <a href="javascript:void(0);" class="text-theme mr-2" @click="cancelCategory()">Cancel</a>
                                      <b-button type="button" class="btn btn-theme" @click="updateCategory()">Apply</b-button>
                                    </div>
                                </div>
                              </template>
                            </b-modal>
                          </div>
                          <div class="form-group mb-4 pb-4">
                            <label class="fz-18 text-black fw-600 ">Skills</label>
                            <div class="tags-wrap d-flex align-items-start"> 
                                <ul> 
                                    <li v-for="(skill , id) in selectedSkills" :key="id">  
                                        <a href="javascript:void(0);" class="d-flex align-items-center"> 
                                            <span class="mr-2">{{skill.skill_name}}</span> 
                                        </a> 
                                    </li> 
                                </ul>
                                <a href="javascript:void(0);" class="pl-3" v-b-modal.modal-editskills >
                                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                  </svg>
                                </a>
                                <b-modal id="modal-editskills" centered title="Edit Skills" hide-footer size="md" no-close-on-backdrop>
                                  <template>
                                    <div>
                                        <!-- <b-form-group id="skills" label="Search skills or add your own" label-for="skills">
                                          <div class="input-group mb-3 search-bar">
                                            <input type="text" class="form-control border-none" v-model="search" placeholder="Search for Job, people, groups and more... " aria-describedby="basic-addon2">
                                            <span class="input-group-text bg-white" id="basic-addon2" @click="openSearch()">
                                              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9689 5.13525C16.0046 5.13525 17.9184 5.92799 19.3579 7.36746C20.7973 8.8069 21.59 10.7207 21.5901 12.7564C21.5901 14.7921 20.7973 16.706 19.3579 18.1454C17.9184 19.5849 16.0046 20.3776 13.9689 20.3776C11.9332 20.3776 10.0193 19.5849 8.57987 18.1454C7.14039 16.706 6.34766 14.7921 6.34766 12.7564C6.34766 10.7207 7.14039 8.8069 8.57987 7.36746C10.0193 5.92799 11.9331 5.13525 13.9689 5.13525ZM7.80186 12.7564C7.80186 16.1569 10.5683 18.9234 13.9688 18.9234C17.3693 18.9234 20.1358 16.1569 20.1358 12.7564C20.1358 9.35594 17.3694 6.58946 13.9689 6.58946C10.5684 6.58946 7.80186 9.35594 7.80186 12.7564Z" fill="#F2613C"/>
                                                <path d="M24.1347 21.8942L19.3548 17.1143C19.0708 16.8304 18.6104 16.8304 18.3265 17.1143C18.0425 17.3983 18.0425 17.8587 18.3265 18.1426L23.1063 22.9225C23.2483 23.0645 23.4344 23.1355 23.6205 23.1355C23.8066 23.1355 23.9927 23.0645 24.1347 22.9225C24.4186 22.6385 24.4186 22.1782 24.1347 21.8942Z" fill="#F2613C"/>
                                              </svg>
                                            </span>
                                          </div>
                                        </b-form-group> -->

                                        <b-form-group label="Selected Skills" >
                                          <div class="selected-tags mb-2 mt-1">
                                            <div class="tags-wrap">
                                                <ul>
                                                    <li  v-for="(skill , id) in selectedSkills" :key="id">
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">{{skill.skill_name}} </span>
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeSkills(id,skill)">
                                                                <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                                <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <span class="error" id="skill_error"></span>
                                            </div>
                                          </div>
                                        </b-form-group>
                                        <hr>
                                        <span v-for="(cat_data,id ) in categoryData" :key="id">
                                        <b-form-group  :label="cat_data.role_name" v-if="cat_data.qp_role_master_id == job.quality_inspector_id">
                                          <div class="mb-2 mt-1" >
                                            <div class="tags-wrap">
                                              <ul>
                                                <li v-for="(skill,sid) in cat_data.skills" :key="sid" :class="CheckValueInarr(skill.qp_role_skill_master_id)" :id="job.quality_inspector_id+'cat_'+skill.qp_role_skill_master_id">
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
                                          <a href="javascript:void(0);" class="text-theme mr-2" @click="cancelSkills()">Cancel</a>
                                          <b-button type="buttton" class="btn btn-theme" @click="skillsUpdate()">Apply</b-button>
                                        </div>
                                    </div>
                                  </template>
                                </b-modal>
                            </div>
                          </div>
                          <div class="form-group mb-4 pb-4">
                            <label class="fz-18 text-black fw-600 ">Scope</label>
                            <div class="d-flex align-items-center">
                              <span class="pr-3 span-name">{{job.project_type +', '+ job.project_length_title +', '+ job.experience_level_title}}</span>
                              <a href="javascript:void(0);" class="text-muted d-flex align-items-center" v-b-modal.modal-editscope @click="OpenScope()">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                </svg>
                              </a>
                            </div>
                            <b-modal id="modal-editscope" centered title="Edit Scope" hide-footer size="md" no-close-on-backdrop>
                              <div class="row">
                                  <div class="col-lg-12 col-12">
                                    <span v-for="(s_Work,id) in scopeWork" :key="id">
                                      <b-form-group >
                                        <b-form-radio v-model="project_type"  name="project_type"  :value="s_Work.value" class="text-black fz-20 fw-600" @change="changeScope()">{{s_Work.value}}</b-form-radio>
                                        <p class="text-muted fz-16 fw-500 ml-6">{{s_Work.description}}</p>
                                      </b-form-group>
                                      <div class="hidescope" id="largescope" v-if="project_type == s_Work.value">
                                        <div class="row">
                                          <div class="col-lg-12 mb-2">
                                            <h2 class="fz-18 fw-500 text-black mb-4">How long will your work take?</h2>
                                            <b-form-group >
                                              <b-form-radio v-model="project_length" v-for="(pro_length, id) in  projectLengthData" :key="id"  :value="pro_length.project_length_id" class="mb-4">{{pro_length.title}}</b-form-radio>
                                            </b-form-group>
                                          </div>
                                          <div class="col-lg-12 mb-5">
                                            <h2 class="fz-18 fw-500 text-black mb-0">What level of experience will it need?</h2>
                                            <p class="fz-14 fw-500 text-muteed mb-4">This won’t restrict any proposals, but helps match expertise to your budget.</p>
                                            <div class="form-check mb-2 pl-0" v-for="(exp_level, id) in ExperienceLevelData" :key="id">
                                              <b-form-group >
                                                <b-form-radio v-model="project_experience"  :value="exp_level.experience_id" class="text-black fz-20 fw-600"> {{exp_level.title}}</b-form-radio>
                                                <p class="text-muted fz-16 fw-500 ml-6">{{exp_level.description}}</p>
                                              </b-form-group>
                                            </div>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </span>
                                    <hr>
                                    <div class="text-right">
                                      <a href="javascript:void(0);" class="text-theme mr-2" @click="cancelScope()">Cancel</a>
                                      <b-button type="submit" class="btn btn-theme" @click="updateScope()">Apply</b-button>
                                    </div>
                                  </div>
                                </div>
                            </b-modal>
                          </div>
                          <div class="form-group mb-4 pb-4">
                            <label class="fz-18 text-black fw-600 ">Budget</label>
                            <div class="d-flex align-items-center">
                              <span class="pr-3 span-name">{{(job.budget_type=='B') ? 'Monthly Budget':'Day Rate'}} {{job.budget}}</span>
                              <a href="javascript:void(0);" class="text-muted d-flex align-items-center" v-b-modal.modal-editbudgetModal>

                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                </svg>
                              </a>
                            </div>
                            <b-modal id="modal-editbudgetModal" centered title="Edit Budget" hide-footer size="md" no-close-on-backdrop>
                              <template>
                                <div>
                                  <b-form-group class="form-group budget-wrapper">
                                    <b-row>
                                      <b-col xl="6" lg="6" sm="12">
                                        <b-form-radio v-model="updatedBuget_type" name="budget" value="A" @change="updatedBuget=''">
                                          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="34" cy="34" r="34" fill="#F8F8F8"/>
                                            <path d="M39.7012 36.8258L35.2395 33.4796V26.6632C35.2395 25.9778 34.6855 25.4238 34.0001 25.4238C33.3147 25.4238 32.7607 25.9778 32.7607 26.6632V34.0993C32.7607 34.4897 32.9442 34.8578 33.2565 35.0908L38.2139 38.8089C38.4369 38.9762 38.6972 39.0568 38.9562 39.0568C39.3342 39.0568 39.7061 38.887 39.949 38.5598C40.3606 38.0131 40.249 37.2361 39.7012 36.8258Z" fill="#F2613C"/>
                                            <path d="M34 18C25.1771 18 18 25.1771 18 34C18 42.8229 25.1771 50 34 50C42.8229 50 50 42.8229 50 34C50 25.1771 42.8229 18 34 18ZM34 47.5213C26.5453 47.5213 20.4787 41.4547 20.4787 34C20.4787 26.5453 26.5453 20.4787 34 20.4787C41.4559 20.4787 47.5213 26.5453 47.5213 34C47.5213 41.4547 41.4547 47.5213 34 47.5213Z" fill="#F2613C"/>
                                          </svg>
                                          <h5 class="fz-18 fw-500 text-black ml-4"><b>Day Rate</b></h5>
                                        </b-form-radio>
                                      </b-col>
                                      <b-col xl="6" lg="6" sm="12">
                                        <b-form-radio v-model="updatedBuget_type" name="budget" value="B" @change="updatedBuget=''"> 
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
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col xl="12" lg="12" sm="12">
                                        <label class="mb-3">Maximum {{(updatedBuget_type=='B') ? 'Monthly Rate':'Day Rate'}} ( USD )</label>
                                        <b-input-group size="lg" prepend="$">
                                          <b-form-input  v-model="updatedBuget" oninput="this.value=this.value.replace(/[^0-9.,]/g,'');" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"></b-form-input>
                                        </b-input-group>
                                      </b-col>
                                    </b-row>
                                    <hr>
                                    <div class="text-right">
                                      <a href="javascript:void(0);" class="text-theme mr-2"  @click="cancelBudget()">Cancel</a>
                                      <b-button type="button" class="btn btn-theme" @click="updateBudget()">Apply</b-button>
                                    </div>
                                  </b-form-group>
                                </div>
                              </template>
                            </b-modal>
                          </div>
                          <div class="form-group mb-4 pb-4">
                            <label class="fz-18 text-black fw-600 ">Project Schedules</label>
                            <div class="d-flex align-items-center">
                                <span class="pr-3 span-name">Project Start Date: {{job.from_date}}</span>
                                <span class="pr-3 span-name ml-6">Project End Date: {{job.to_date}}</span>
                              <a href="javascript:void(0);" class="text-muted" v-b-modal.modal-editdate>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                </svg>
                              </a>
                              <b-modal id="modal-editdate" title="Edit Project Date" centered hide-footer size="md" no-close-on-backdrop> 
                                <template>
                                  <div>
                                      <b-form-group class="mb-2">
                                        <label for="datepicker-placeholder" class="mb-2">Project Start Date</label>
                                        <!-- <b-form-datepicker id="datepicker-placeholder" placeholder="Choose a date" locale="en"></b-form-datepicker> -->
                                        <b-form-datepicker  v-model="from_date" :min="new Date().toISOString().substr(0, 10)"  required class="mb-2"></b-form-datepicker>
                                      </b-form-group>
                                      <b-form-group>
                                        <label for="datepicker-placeholder" class="mb-2">Project End Date</label>
                                        <b-form-datepicker v-model="to_date" :min="new Date(from_date).toISOString().substr(0, 10)"  locale="en"></b-form-datepicker>
                                      </b-form-group>
                                      <hr>
                                      <div class="text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2" @click="cancelPojectDate()">Cancel</a>
                                        <b-button type="button" class="btn btn-theme" @click="updateDate()">Apply</b-button>
                                      </div>
                                  </div>
                                </template>
                              </b-modal>
                            </div>
                          </div>
                          <div class="form-group mb-2 pb-2">
                            <label class="fz-18 text-black fw-600 ">Inspection Location</label>
                            <div class="d-flex align-items-center">
                              <span class="pr-3 span-name">Country: {{job.country_name}},</span>
                              <span class="pr-3 span-name ml-1">State: {{job.state_name}},</span>
                              <span class="pr-3 span-name ml-1">City: {{job.city_name}}</span>
                              <a href="javascript:void(0);" class="text-muted d-flex align-items-center" v-b-modal.modal-editlocation @click="getCountry()">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                </svg>
                              </a>
                            </div>
                            <b-modal id="modal-editlocation" title="Edit Location" centered hide-footer size="md" no-close-on-backdrop>
                              <template>
                                <div>
                                    <b-form-group id="country" label="Country" label-for="country">
                                      <b-form-select
                                        v-model="country_id"
                                        class="form-control mb-3"
                                        :options="CountryData"
                                        value-field="country_id"
                                        text-field="country_name"
                                        required
                                        @change="changecountry"
                                      ></b-form-select>
                                    </b-form-group>
                                    <b-form-group id="state" label="State" label-for="state">
                                      <b-form-select
                                        v-model="state_id"
                                        class="form-control mb-3"
                                        :options="stateData"
                                        value-field="state_id"
                                        text-field="state_name"
                                        required
                                        @change="changestate"
                                      ></b-form-select>
                                    </b-form-group>
                                    <b-form-group id="city" label="City" label-for="city">
                                      <b-form-select
                                        v-model="city_id"
                                        class="form-control mb-3"
                                        :options="cityData"
                                        value-field="city_id"
                                        text-field="city_name"
                                        required
                                      ></b-form-select>
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
                                                v-model="job.preference_english_level"
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
                                                v-model="job.preference_languages"
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
                                              <b-form-input v-if="professional_input" v-model="job.preference_no_professional" oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"  maxlength="12"></b-form-input>
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
                                                v-model="job.preference_amount_earn"
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
                                        v-model="job.preferences_job_type"
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
  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        professional_input:false,
        preference_no_professional:'a',
        value:'',
        isEdit: true,
        questions: [],
        englishLevel: [],
        languageData: [],
        professionals: [{ value: 'One person', id: 'a' }, { value: 'More than one person', id: 'b' }],
        amountEarn: [],
        jobtype: [
          { text: 'Private', value: 'private' },
          { text: 'Public', value: 'public' },
        ],
        scopeWork:[
          { value:'Large',description:'Longer term or complex initiatives Required good communication skills to deal with different parties ( ex. Managing Team, Client and Vendor etc. )'},
          { value:'Medium', description:'Well-defined projects ( ex., Follow strictly the project requirements etc. )'},
          { value:'Small', description:'Quick and straight forward tasks ( ex. Provide support as per reuirements)'},
        ],
        projectLengthData:[],
        ExperienceLevelData:[],
        job:{
          quality_inspector_id:'',
          job_title:'',
          topSkill:[],
          country_id:'',
          state_id:'',
          city_id:'',
          from_date:'',
          to_date:'',
          project_type:'',
          project_length:'',
          project_experience:'',
          budget:'',
          scope_of_work:'',
          job_status:'1',
          attachment:[],
          preferences_job_type:'Public',
          preference_questions:[],
          preference_english_level:'1',
          preference_no_professional:'1',
          preference_amount_earn:'1',
          preference_languages:[],
        },
        CountryData: [],
        stateData: [],
        cityData: [],
        uniqe_id:'',
        categoryData:'',
        selectedNewCategory:'',
        updatedBuget:'',
        updatedBuget_type:'',
        selectedSkills:[],
        selectedSkills_id:[],
        selectedSkills_value:[],
        text:'',
        attachmentbtn : false,
        UploadedFileurl:'',
        questionCount:0,
        Questions:'',
        UpdateQuestions:'',
        questionbtn:true,
        finalQuestion:[],
        defaultQuestions:[],
        showrditTextarea:6,
        project_type:'',
        project_length:'',
        project_experience:'',
        from_date:new Date().toISOString().substr(0, 10),
        to_date:'',
        country_id:'',
        state_id:'',
        city_id:'',
        hideDraftbtn:true,
      }
    },
    mounted(){
      this.headToken= {"Authorization": localStorage.getItem('token')};
      if(this.$route.params.pid != undefined){
          //this fun is for to get languages
          this.getLanguage();
          this.uniqe_id = this.$route.params.pid;
          this.getPostdetails(this.$route.params.pid);
      }else{
        this.$router.push('jobPosting');
      }
      // this fun is for to get category
      this.getCategory();
      // this fun is for to get Country
      // this.getCountry();
      // // this fun is for to get Questions
      this.getQuestions();
      //this fun is for to get languages
      this.getLanguage();
      // this fun is for to get amount earn
      this.getamountEarn();
      // this fun is for to get english level
      this.getEnglishlevel();
    },
    methods:{
      // this fun is for to =remove attachment
      removeAttachment(_i){
        this.job.attachment.splice(_i,1);
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
        console.log(this.preference_no_professional);
        if(this.preference_no_professional == 'b'){
          this.professional_input=true;
          this.job.preference_no_professional = '2';
        }else{
          this.professional_input=false;
          this.job.preference_no_professional = '1';
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
        this.job.preference_questions = this.finalQuestion;
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
      checktitlelength(_i){
        if(this.job.job_title==""){
          $('#'+_i).html('Title Is Required')
        }
      },
      // this fun is for to check selectSkill hide show
      CheckValueInarr(_i){
        for (let index = 0; index < this.selectedSkills.length; index++) {
          if (this.selectedSkills[index].qp_role_skill_master_id == _i) {
            return 'hideSkill';
          }
        }
      },
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for to get Project Length 
      async getProjectLength(){
        var projectData = await this.genericAPIPOSTRequest({
            requestUrl: "getProjectLengths",
            params: {},
        }); 
        if(projectData.length > 0 ){
          this.projectLengthData = projectData;
        }
      },
      // this fun is for to get Project Length 
      async getExperienceLevel(){
        var experienceData = await this.genericAPIPOSTRequest({
            requestUrl: "getExperienceLevel",
            params: {},
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
            params: { country_id: this.country_id },
        });  
        this.stateData = res;
        if(_v !='onload'){
          this.state_id ='';
          this.city_id ='';
        }
      },
      // THIS FUNCTIONIS FOR GET CITY DATA
      async changestate(_v){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getCityList",
            params: { state_id: this.state_id },
        });  
        this.cityData = res;
        if(_v !='onload'){
          this.city_id = '';
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
      // this fun is for to update category 
      updateCategory(){
        var cid= this.job.quality_inspector_id
        this.selectedNewCategory = cid;
        var categoryData = this.categoryData.filter(function(elem){
            if(elem.qp_role_master_id == cid) return elem.role_name;
        });
        this.job.quality_inspector =categoryData[0].role_name;
        this.job.topSkill=[];
        this.job.skill_name=[];
        this.selectedSkills=[];
        // this is for to close the model
        this.$bvModal.hide('modal-editcategory');
      },
      //this fun for to cancel update category
      cancelCategory(){
        this.job.quality_inspector_id = this.selectedNewCategory;
        this.$bvModal.hide('modal-editcategory')
      },
      // this fun is for to select skills
      selectSkill(_v){
        var arr = {'qp_role_skill_master_id':_v.qp_role_skill_master_id,'skill_name':_v.skill_name};
        if(!this.selectedSkills.some(data => data.qp_role_skill_master_id === _v.qp_role_skill_master_id)){
          this.selectedSkills.push(arr);     
        }
        document.getElementById(this.job.quality_inspector_id+'cat_'+_v.qp_role_skill_master_id).classList.add("hideSkill");
        document.getElementById('skill_error').innerHTML ='';

      },
      // this fun is for to Remove select skills
      removeSkills(index,_v){
        if(this.selectedSkills.length > 1){
          this.selectedSkills.splice(index, 1); 
          document.getElementById(this.job.quality_inspector_id+'cat_'+_v.qp_role_skill_master_id).classList.remove("hideSkill")
          document.getElementById('skill_error').innerHTML ='';
        }else{
          document.getElementById('skill_error').innerHTML ='Minimum one skill is required';
        }
      },
      // this fun is for to update skills
      skillsUpdate(){
        if(this.selectedSkills.length > 0){
          this.job.topSkill=[];
          this.job.skill_name=[];
          for (let index = 0; index < this.selectedSkills.length; index++) {
            this.job.topSkill.push(this.selectedSkills[index]['qp_role_skill_master_id']);
            this.job.skill_name.push(this.selectedSkills[index]['skill_name']);
          }
        // this is for to close the model
          this.$bvModal.hide('modal-editskills');
        }else{
          this.$toastr.e('Please Select Atleast one skills');
        }
      },
      // this fun is for cancel skill
      cancelSkills(){
        var skill_arr =[];
        for (let index = 0; index < this.job.topSkill.length; index++) {
          skill_arr.push({'qp_role_skill_master_id':this.job.topSkill[index],'skill_name':this.job.skill_name[index]});
        }
        this.selectedSkills = skill_arr;
        this.$bvModal.hide('modal-editskills')
      },
      //this fun is for to update budget price
      updateBudget(){
        this.job.budget_type = this.updatedBuget_type;
        this.job.budget = '$'+this.updatedBuget;
        // this is for to close the model
        this.$bvModal.hide('modal-editbudgetModal');
      },
      // this fun for to cancel budget
      cancelBudget(){
        this.updatedBuget_type = this.job.budget_type;
        this.updatedBuget = this.job.budget.replace('$', '');
        this.$bvModal.hide('modal-editbudgetModal');
      },
      // this fun is for to update date 
      updateDate(){
        if(this.to_date >= this.from_date){
          this.job.from_date=this.from_date;
          this.job.to_date=this.to_date;
          // this is for to close the model
          this.$bvModal.hide('modal-editdate');
        }else{
          this.$toastr.e('End Date Should be greater or equal to Start Date');
        }
      },
      //this fun for to cancel project date
      cancelPojectDate(){
        this.from_date = this.job.from_date;
        this.to_date =this.job.to_date;
        this.$bvModal.hide('modal-editdate');
      },
      //this function is for to update location 
      updateLocation(){
        if (this.state_id!="" && this.state_id != undefined && this.city_id!="" && this.city_id != undefined) {
          var cid= this.country_id
          var sid= this.state_id
          var c_id= this.city_id
          this.job.country_id = this.country_id;
          this.job.state_id = this.state_id;
          this.job.city_id = this.city_id;
          var CountryData = this.CountryData.filter(function(elem){
              if(elem.country_id == cid) return elem.country_name;
          });
          var stateData = this.stateData.filter(function(elem){
              if(elem.state_id == sid) return elem.state_name;
          });
          var cityData = this.cityData.filter(function(elem){
              if(elem.city_id == c_id) return elem.city_name;
          });
          this.job.country_name = CountryData[0].country_name;
          this.job.state_name  = stateData[0].state_name;
          this.job.city_name = cityData[0].city_name;
          // this is for to close the model
          this.$bvModal.hide('modal-editlocation');
        }else if(this.state_id=="" || this.state_id == undefined){
          this.$toastr.e('Please Select State');
        }else if(this.city_id=="" || this.city_id == undefined){
          this.$toastr.e('Please Select City');
        } else {
          this.$toastr.e('Please Select State, City');
        }
      },
      // this fun is for to cancel location update
      cancelLocation(){
        this.country_id =this.job.country_id;
        this.state_id =this.job.state_id;
        this.city_id =this.job.city_id;
        this.getCountry();
        this.$bvModal.hide('modal-editlocation');
      },
      // this fun is for to open scope model
      OpenScope(){
        this.getProjectLength();
        this.getExperienceLevel();
      },
      // this fun for to change scope value
      changeScope(){
        this.project_length='';
        this.project_experience='';
      },
      //this fun for to update scope
      updateScope(){
        if(this.project_length == "" ){
          this.$toastr.e('Please Select Project Length');
          return false
        }else if(this.project_experience == ""){
          this.$toastr.e('Please Select Experience Level');
          return false
        }else{
          this.job.project_type=this.project_type;
          this.job.project_length = this.project_length;
          this.job.project_experience = this.project_experience
          var p_length_id = this.project_length;
          var p_length = this.projectLengthData.filter(function(elem){
              if(elem.project_length_id == p_length_id) return elem.title;
          });
          this.job.project_length_title=p_length[0].title;

          var p_exp_id = this.project_experience;
          var p_exp = this.ExperienceLevelData.filter(function(elem){
              if(elem.experience_id == p_exp_id) return elem.title;
          });
          
          this.job.experience_level_title=p_exp[0].title;
          // this is for to close the model
          this.$bvModal.hide('modal-editscope');
        }
      },
      //this fun is for to cancel scope
      cancelScope(){
        this.project_type = this.job.project_type;
        this.project_length = this.job.project_length;
        this.project_experience = this.job.project_experience;
        this.$bvModal.hide('modal-editscope');
      },
      // this fun is for to submit job post
      async SubmitJobPost(){
        this.job.uniq_id =this.uniqe_id;
        if(this.job.uniq_id!="" && this.job.job_title.replace(/^\s*/, "") !="" && this.job.job_title.replace(/^\s*/, "").length > 3 && this.job.scope_of_work!="" && this.job.scope_of_work.length > 199 && this.job.quality_inspector_id!="" && this.job.topSkill.length > 0 && this.job.project_type!="" && this.job.project_length!="" && this.job.project_experience!="" && this.job.budget!="" && this.job.from_date!="" && this.job.to_date!="" && this.job.country_id!="" && this.job.state_id!="" && this.job.city_id!="" ){
          var language=[];
          if(this.job.preference_languages.length > 0){
            this.job.preference_languages.filter(data=>{
              language.push(data.code);
            });
          }
          
          this.job.preference_languages = language;
          var updatedata = {};
           updatedata.jobs_id=this.job.jobs_id;
           updatedata.job_title =this.job.job_title;
           updatedata.topSkill =this.job.topSkill;
           updatedata.country_id =this.job.country_id;
           updatedata.state_id =this.job.state_id;
           updatedata.city_id =this.job.city_id;
           updatedata.from_date =this.job.from_date;
           updatedata.to_date =this.job.to_date;
           updatedata.project_type =this.job.project_type;
           updatedata.project_length =this.job.project_length;
           updatedata.project_experience =this.job.project_experience;
           updatedata.budget =this.job.budget;
           updatedata.quality_inspector_id =this.job.quality_inspector_id;
           updatedata.attachment =(this.job.attachment.length > 0) ? this.job.attachment :[];
           updatedata.employment_type_id = this.job.employment_type_id;
           updatedata.scope_of_work = this.job.scope_of_work;
           updatedata.budget_type=this.job.budget_type;
           updatedata.preferences_job_type = (this.job.preferences_job_type!="" && this.job.preferences_job_type!= 'undefined') ? this.job.preferences_job_type :'';
           updatedata.preference_questions = (this.job.preference_questions!="" && this.job.preference_questions!= 'undefined') ? this.job.preference_questions :'';
           updatedata.preference_english_level = (this.job.preference_english_level!="" && this.job.preference_english_level!= 'undefined') ? this.job.preference_english_level:'';
           updatedata.preference_amount_earn = (this.job.preference_amount_earn!="" && this.job.preference_amount_earn!= 'undefined') ? this.job.preference_amount_earn:'';
           updatedata.preference_no_professional = (this.job.preference_no_professional!="" && this.job.preference_no_professional!= 'undefined') ? this.job.preference_no_professional:'';
           updatedata.preference_languages = (this.job.preference_languages!="" && this.job.preference_languages!= 'undefined') ?  this.job.preference_languages:[];
           updatedata.job_status = 1;
           var PostedData = await this.genericAPIPOSTRequest({
              requestUrl: "job/addJob",
              params: {
                'jobData' :updatedata,
                'data'    :this.getLoginUserIdRequest()
              },
          });
          if (PostedData!=""){
            this.$router.push({
              name: 'clientDashboard',
              path:'/client/dashboard',
            });
            this.$toastr.s('Job post successfully Submitted');
          }
        }else if(this.job.job_title.replace(/^\s*/, "").length < 3){
          this.$toastr.e('Please Enter Minimum 3 Characters');
          return false
        }else if(this.job.uniq_id==""){
          this.$toastr.e('Job Id Missing');
          return false;
        }else if(this.job.job_title==""){
          this.$toastr.e('Please Enter Job Title');
          return false;
        }else if(this.job.scope_of_work==""){
          this.$toastr.e('Please Enter Description');
          return false;
        }else if(this.job.scope_of_work.length < 200){
          this.$toastr.e('Enter Description At least 200 Words');
          return false;
        }else if(this.job.quality_inspector_id==""){
          this.$toastr.e('Please select Category');
          return false;
        }else if(this.job.topSkill.length == 0){
          this.$toastr.e('Please select skill');
          return false;
        }else if(this.job.project_type==""){
          this.$toastr.e('Please select project type');
          return false;
        }else if(this.job.project_length==""){
          this.$toastr.e('Please select Project Length');
          return false;
        }else if(this.job.project_experience==""){
          this.$toastr.e('Please select Experience');
          return false;
        }else if(this.job.budget==""){
          this.$toastr.e('Enter Budget');
          return false;
        }else if(this.job.from_date==""){
          this.$toastr.e('Select Start Date');
          return false;
        }else if(this.job.to_date==""){
          this.$toastr.e('Select End date');
          return false;
        }else if(this.job.country_id==""){
          this.$toastr.e('PLease Select Country');
          return false;
        }else if(this.job.state_id==""){
          this.$toastr.e('Please Select State');
          return false;
        }else if(this.job.city_id==""){
          this.$toastr.e('Please Select City');
          return false;
        }else{
          this.$toastr.e('Please Select All Details');
          return false;
        }
      },
      // this fun is for to submit job post
      async submitAsDraft(){
        this.job.uniq_id =this.uniqe_id;
        var language=[];
        if(this.job.preference_languages.length > 0){
          this.job.preference_languages.filter(data=>{
            language.push(data.code);
          });
        }
        this.job.preference_languages = language;
        if(this.job.uniq_id!="" && this.job.job_title !=""){
           var updatedata = {};
           updatedata.jobs_id=this.job.jobs_id;
           updatedata.job_title =this.job.job_title;
           updatedata.topSkill =this.job.topSkill;
           updatedata.country_id =this.job.country_id;
           updatedata.state_id =this.job.state_id;
           updatedata.city_id =this.job.city_id;
           updatedata.from_date =this.job.from_date;
           updatedata.to_date =this.job.to_date;
           updatedata.project_type =this.job.project_type;
           updatedata.project_length =this.job.project_length;
           updatedata.project_experience =this.job.project_experience;
           updatedata.budget =this.job.budget;
           updatedata.quality_inspector_id =this.job.quality_inspector_id;
           updatedata.attachment =(this.job.attachment.length > 0) ? this.job.attachment :[];
           updatedata.employment_type_id = this.job.employment_type_id;
           updatedata.scope_of_work = this.job.scope_of_work;
           updatedata.budget_type=this.job.budget_type;
           updatedata.preferences_job_type = (this.job.preferences_job_type!="" && this.job.preferences_job_type!= 'undefined') ? this.job.preferences_job_type :'';
           updatedata.preference_questions = (this.job.preference_questions!="" && this.job.preference_questions!= 'undefined') ? this.job.preference_questions :'';
           updatedata.preference_english_level = (this.job.preference_english_level!="" && this.job.preference_english_level!= 'undefined') ? this.job.preference_english_level:'';
           updatedata.preference_amount_earn = (this.job.preference_amount_earn!="" && this.job.preference_amount_earn!= 'undefined') ? this.job.preference_amount_earn:'';
           updatedata.preference_no_professional = (this.job.preference_no_professional!="" && this.job.preference_no_professional!= 'undefined') ? this.job.preference_no_professional:'';
           updatedata.preference_languages = (this.job.preference_languages!="" && this.job.preference_languages!= 'undefined') ?  this.job.preference_languages:[];
           updatedata.job_status = 2;

           var PostedData = await this.genericAPIPOSTRequest({
              requestUrl: "job/addJob",
              params: {
                'jobData' :updatedata,
                'data'    :this.getLoginUserIdRequest()
              },
           });
           if (PostedData!=""){
            this.$router.push({
              name: 'clientDashboard',
              path:'/client/dashboard',
            });
            this.$toastr.s('Job Saved As Draft');
           }
        }else{
          if(this.job.uniq_id==""){
            this.$toastr.e('Job Id Missing');
          }
          return false;
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
            formData.append('user_id', this.job.user_id);
            formData.append('jobs_id', this.job.jobs_id);
            var getData = await this.genericAPIPOSTRequest({
                requestUrl: "uploadJobile",
                params: formData,
            });
            if(getData.filename!=""){
              // this.job.attachment = getData.filename;
              // this.attachmentbtn= true;
              // this.UploadedFileurl = getData.name
              // this.job.attachment = getData.name;
              this.job.attachment.push(getData.name);
              // this.attachmentbtn= true;
              // this.UploadedFileurl = getData.filename
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
      // this fun is for to get post details 
      async getPostdetails(_v){
        var getPostedData = await this.genericAPIPOSTRequest({
              requestUrl: "getJobDetails_new",
              params: {'poid':_v},
          });
        if (getPostedData.length > 0 ) {
          this.job = getPostedData[0];
          // console.log('data',this.job);
          if(this.job.job_status == 'Active'){
            this.hideDraftbtn = false;
          }
          this.UploadedFileurl =this.job.attachmentUrl;
          // if(this.job.attachment.length > 0){
            // this.job.attachment = this.job.attachment;
            // this.attachmentbtn=true;
          // }
          this.selectedNewCategory = this.job.quality_inspector_id;
          this.project_type = this.job.project_type;
          this.project_length = this.job.project_length;
          this.project_experience = this.job.project_experience;
          this.from_date = this.job.from_date;
          this.to_date = this.job.to_date;
          this.updatedBuget = this.job.budget.replace('$', '');
          this.updatedBuget_type = this.job.budget_type;
          this.country_id=this.job.country_id;
          this.state_id=this.job.state_id;
          this.city_id=this.job.city_id;
          //this section for skills
          var skill_arr =[];
          for (let index = 0; index < getPostedData[0].topSkill.length; index++) {
            skill_arr.push({'qp_role_skill_master_id':getPostedData[0].topSkill[index],'skill_name':getPostedData[0].skill_name[index]});
          }
          this.selectedSkills = skill_arr;
          // this section for question 
          this.finalQuestion = (getPostedData[0].preference_questions != "" && getPostedData[0].preference_questions != null) ? getPostedData[0].preference_questions:[];
          this.questionCount = this.finalQuestion.length;
          if(this.questionCount > 0){
            getPostedData[0].preference_questions.filter((res)=>{
              if(res.status == 0){
                this.defaultQuestions.push(res.text)
              }
            });
          }
          this.checkQuestionlength();
          if(getPostedData[0].preference_no_professional > 1){
            this.preference_no_professional='b';
            this.professional_input=true;
          }
        }else{
          this.$router.push('jobPosting');
        }
      }
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
