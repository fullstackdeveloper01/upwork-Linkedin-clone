  <template>
    <div class="container">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet" />
      <b-row class="mt-100 mb-50 client-wrapper">
        <b-col cols="12">
          <div class="fxt-bg-color">
            <div class="fxt-content" v-if="step==1">
              <div class="fxt-form">
                <template>
                  <div>
                    <b-card-group deck>
                      <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                        <template  #header>
                          <h4 class="mb-0 fz-24 fw-500 text-black"><b>Getting started</b></h4>
                        </template>
                        <b-row>
                          <b-col cols="12" class="p-0 border-bottom">
                            <div>
                              <div class="py-4 px-4">
                                <b-card-text>
                                  <h4 class="fz-20 fw-500 text-black">What would you like to do?</h4>
                                </b-card-text>

                                <b-row>
                                  <b-col xl="4" lg="4" md="12">
                                    <b-form-group>
                                      <b-form-radio class="pos-rel"  v-model="jobType" name="jobType" value="A" @change="checkJObSelectType()"> Create a new job post</b-form-radio>
                                    </b-form-group>
                                  </b-col>
                                </b-row>

                                <b-form-group  class="form-group create-job" v-if="jobType=='A'">
                                  <b-row v-if="employmentTypeData.length > 0">
                                    <b-col xl="4" lg="4" sm="12" v-for="(emp_type,id) in employmentTypeData" :key="id">
                                      <b-form-radio  v-model="job.employment_type_id" name="employment_type_id" :value="emp_type.employment_id">
                                        <userIcon v-if="emp_type.icon == 'user'" />
                                        <clockIcon v-if="emp_type.icon == 'clock'" />
                                        
                                        <h4 class="fz-20 fw-500 text-theme text-uppercase"><b>{{emp_type.title}}</b></h4>
                                        <p class="fz-16 fw-400 text-muteed mb-2">{{emp_type.text}}</p>
                                        <!--<h5 class="fz-18 fw-500 text-black"><b>{{emp_type.value}}</b></h5>-->
                                      </b-form-radio>
                                    </b-col>
                                  </b-row>
                                </b-form-group>
                                
                                <b-row>
                                  <b-col xl="4" lg="4" md="12">
                                    <b-form-group class="existing-job">
                                      <b-form-radio class="pos-rel" v-model="jobType" name="jobType" value="b" @change="checkJObSelectType()"> Edit an existing draft</b-form-radio>
                                      <!-- <b-form-select v-model="selectedDraftJobs" :options="draftedJobs" text-field="job_title" value-field="jobs_id" class="mb-2" v-if="jobType == 'b'"></b-form-select> -->
                                      <select class="form-control mb-2" name="template" v-model="selectedDraftJobs" v-if="jobType == 'b'">
                                          <option v-for="(item,id) in draftedJobs" :key="id" v-bind:value="item.uniq_id">
                                            {{(selectedDraftJobs == item.jobs_id) ? '&#xf00c;' :''}} {{ item.job_title }}
                                          </option>
                                      </select>
                                    </b-form-group>
                                  </b-col>
                                </b-row>

                                <b-row>
                                  <b-col xl="4" lg="4" md="12">
                                    <b-form-group class="reuse-job">
                                      <b-form-radio class="pos-rel" v-model="jobType" name="jobType" value="c" @change="checkJObSelectType()"> Reuse a previous job post</b-form-radio>
                                      <!-- <b-form-select v-model="selectedpostedJobs" :options="postedJobs" text-field="job_title" value-field="jobs_id" class="mb-2"  v-if="jobType == 'c'"></b-form-select> -->
                                      <select class="form-control mb-2" name="template" v-model="selectedpostedJobs" v-if="jobType == 'c'">
                                          <option v-for="(item,id) in postedJobs" :key="id" v-bind:value="item.uniq_id">
                                            {{(selectedpostedJobs == item.jobs_id) ? '&#xf00c;' :''}} {{ item.job_title }}
                                          </option>
                                      </select>
                                    </b-form-group>
                                  </b-col>
                                </b-row>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                        <template #footer class="bg-white">
                          <div class="text-right py-4">
                            <button 
                              type="button"    
                              @click="hasHistory() 
                                ? $router.go(-1) 
                                : $router.push('/post-job')" class="btn btn-outline-theme mr-2">
                              Back
                            </button>
                            <button
                              type="submit"
                              class="btn btn-theme"
                              @click="next(2)"
                            >
                              Continue
                            </button>
                          </div>
                        </template>
                      </b-card>
                    </b-card-group> 
                  </div>
                </template>
              </div>
            </div>

            <div class="fxt-content step2" v-if="step==2">
              <div class="fxt-form">
                <template>
                  <div>
                    <b-card-group deck>
                      <b-card title-class="text-theme font-14" footer-tag="footer">
                        <b-row>
                          <b-col xl="4" lg="4" sm="12" class="p-0 mobile-hidden">
                            <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://qapin_mvp5.manageprojects.in/assets/img/union-white.png);
                            background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;border-radius: 20px 0 0 20px;height:98.8%;">
                                <!-- progressbar -->
                                <ul id="progress-bar" class="progressbar">
                                    <li class="active">Title</li>
                                    <li>Skills</li>
                                    <li>Scope</li>
                                    <li>Budget</li>
                                </ul><br>
                                <div class="text w-100 text-left">
                                  <div class="step-left-1">
                                      <h1 class="mb-4 text-white">Let's start with a strong title.</h1>
                                      <p class="text-white">This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!</p>
                                  </div>
                                </div>
                            </div>
                          </b-col>
                          <b-col xl="8" lg="8" sm="12" class="p-0 pos-rel">
                            <div class="py-4 px-4">
                              <div class="content-right-wrap mb-sm-6">
                                <h2 class="fs-title">Write a title for your job post</h2>
                                <b-form-input v-on:keypress="checkTitle($event,'title_ids')" :minlength="3" :maxlength="250"  v-model="job.job_title" placeholder="Eg- Pressure Vessel Inspector required" class="mb-4"></b-form-input>
                                <span class="fz-12 fw-400 text-theme no-border mt-0 p-0"  href="javascript:void(0);" :id="'title_ids'"></span>
                                <div v-if="job.job_title==''">
                                  <h2 class="mb-3 fs-title">Example Titles</h2> 
                                  <ul class="example-wrap mb-4">
                                    <li>
                                      Looking for INDIAN inspectors who are in CHINA now.
                                    </li>
                                    <li>
                                      Need a double coating inspector (E&I Inspector).
                                    </li>
                                    <li>
                                      Pressure vessel inspector required.
                                    </li>
                                  </ul>
                                </div>
                                <div class="category-wrap">
                                  <h2 class="mb-3 fs-title">Quality Professional Category</h2>
                                  <b-row>
                                    <b-col xl="6" lg="6" sm="12">
                                     
                                      <b-form-radio-group 
                                        v-model="job.quality_inspector_id" 
                                        :options="categoryData" 
                                        value-field="qp_role_master_id"
                                        text-field="role_name" 
                                        @change="SelectedCategory()"
                                        class="category-radio"
                                      ></b-form-radio-group>
                                       
                                    </b-col>
                                  </b-row>
                                </div>
                                <div class="text-right py-4 btn-wrap">
                                  <button
                                    type="submit"
                                    class="btn btn-outline-theme mr-2"
                                    @click="next(1)"
                                    v-if="hidepreviousBtn_step2"
                                  >
                                  Previous
                                  </button>
                                  <button
                                    type="submit"
                                    class="btn btn-theme"
                                    @click="next(3)"
                                  >
                                    Continue
                                  </button>
                                </div>
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

            <div class="fxt-content step3" v-if="step==3">
              <div class="fxt-form">
                <template>
                  <div>
                    <b-card-group deck>
                      <b-card title-class="text-theme font-14" footer-tag="footer">
                        <b-row>
                          <b-col xl="4" lg="4" sm="12" class="p-0 mobile-hidden">
                            <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://qapin_mvp5.manageprojects.in/assets/img/union-white.png);
                            background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;border-radius: 20px 0 0 20px;height:98.8%;">
                                <!-- progressbar -->
                                <ul id="progress-bar" class="progressbar">
                                    <li class="active">Title</li>
                                    <li class="active">Skills</li>
                                    <li>Scope</li>
                                    <li>Budget</li>
                                </ul><br>
                                <div class="text w-100 text-left">
                                  
                                  <div class="step-left-2 ">
                                      <h1 class="mb-4 text-white">What skills does your work require?</h1>
                                      <p class="text-white">This helps your job post stand out to the right candidates. it’s the first thing they’ll see, so make it count!</p>
                                  </div>
                                  
                                </div>
                            </div>
                          </b-col>
                          <b-col xl="8" lg="8" sm="12" class="p-0 pos-rel">
                            <div class="py-4 px-4">
                              <div class="content-right-wrap">
                                <!-- <h2 class="fs-title">Search skills or add your own</h2>
                                <b-input-group class="mt-3 mb-5">
                                  <template #append>
                                    <b-input-group-text><i class="fa fa-search"></i></b-input-group-text>
                                  </template>
                                  <b-form-input placeholder="Search your skills here..." v-model="job.minimum_certification" ></b-form-input>
                                </b-input-group> -->
                                <div class="skills-wrap" >
                                    <div class="selected-tags" v-if="selectedSkills.length > 0">
                                        <div class="tags-wrap">
                                            <h2 class="fs-title">Selected Skills</h2>
                                            <p>Select Upto 10 skills</p>
                                            <ul>
                                                <li v-for="(sel_skill,id) in selectedSkills" :key="id">
                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                    <span class="mr-2">{{sel_skill.name}}</span>
                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeCategory(id,sel_skill)">
                                                        <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"/>
                                                        <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"/>
                                                    </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <span class="error" id="skill_error"></span>
                                        </div>
                                    </div>
                                    <div class="accordion border-none" role="tablist">
                                      <b-card no-body class="mb-1" v-for="(cateData, i) of categoryData" :key="i" >
                                        <div v-if="job.quality_inspector_id == cateData.qp_role_master_id">
                                        <b-card-header header-tag="header" class="p-1" role="tab" >
                                          <b-button block v-b-toggle.accordion-1 class="bg-white fz-20 fw-500 p-0">{{cateData.role_name}}</b-button>
                                        </b-card-header>
                                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel" >
                                          <b-card-body class="p-0">
                                            <div class="tags-wrap mt-2">
                                              <ul>
                                                <li v-for="(skill, ski) of cateData.skills" :key="ski" :class="CheckValueInarr(skill.qp_role_skill_master_id)" :id="job.quality_inspector_id+'cat_'+skill.qp_role_skill_master_id">
                                                  <a href="javascript:void(0);" class="d-flex align-items-center" @click="selectSkill(skill)">
                                                    <span class="mr-2">{{skill.skill_name}}</span>
                                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                      <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                    </svg>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </b-card-body>
                                        </b-collapse>
                                        </div>
                                      </b-card>
 
                                    </div>
                                    <a href="javascript:void(0);" v-b-modal.edit-category-modal class="text-theme mb-5 d-flex align-items-center" @click="OpencatModel()">
                                      <span class="pr-2" data-toggle="modal" data-target="#editcategoryModal">Change your skill category </span>
                                      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                      </svg>
                                    </a>
                                    <b-modal v-model="categoryModelshow" centered id="edit-category-modal" size="lg" title="Edit Category" >
                                      <div class="text-left">
                                        <h5 class="fz-20 fw-600 text-black">Change Your Category</h5>
                                        <div class="fz-14 tags mb-0">
                                          <!-- <b-form-select 
                                            v-model="changeCategory"
                                            :options="categoryData"
                                            value-field="qp_role_master_id"
                                            text-field="role_name"
                                            class="w-100"></b-form-select> -->
                                            <select class="form-control w-100" name="template" v-model="changeCategory">
                                                <option v-for="(item,id) in categoryData" :key="id" v-bind:value="item.qp_role_master_id">
                                                  {{(changeCategory == item.qp_role_master_id) ? '&#xf00c;' :''}} {{ item.role_name }}
                                                </option>
                                            </select>

                                        </div>
                                      </div>
                                      <template #modal-footer>
                                        <div class="w-100 text-right">
                                          <a href="javascript:void(0);" class="text-theme mr-2" @click="categoryModelshow = false">Cancel</a>
                                          <b-button
                                            size="lg"
                                            class="btn btn-theme"
                                            @click="updateCategory()"
                                          >
                                            Save
                                          </b-button>
                                        </div>
                                      </template>
                                    </b-modal>
                                    <div class="location-wrap mb-5">
                                      <h2 class="fs-title mb-3">Inspection Location</h2>
                                      <div class="row">
                                        <div class="col-lg-4">
                                          <label class="text-black fz-16">Country</label><br>
                                          <b-form-select 
                                          v-model="job.country_id"
                                          :options="CountryData" 
                                          value-field="country_id"
                                          text-field="country_name"
                                          v-on:change="changecountry($event)"
                                          class="w-100"></b-form-select>
                                        </div>
                                        <div class="col-lg-4">
                                          <label class="text-black fz-16">States</label><br>
                                          <b-form-select
                                          v-model="job.state_id"
                                          :options="stateData"
                                          value-field="state_id"
                                          text-field="state_name"
                                          v-on:change="changestate($event)"
                                          class="w-100"></b-form-select>
                                        </div>
                                        <div class="col-lg-4">
                                          <label class="text-black fz-16">City</label><br>
                                          <b-form-select
                                          v-model="job.city_id"
                                          :options="cityData"
                                          value-field="city_id"
                                          text-field="city_name"
                                          class="w-100"></b-form-select>
                                        </div>
                                      </div>
                                    </div>  
                                    <div class="location-wrap mb-5">
                                        <h2 class="fs-title mb-3">Project Date</h2>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label class="text-black fz-16">Start Date</label>
                                                <div class="input-group">
                                                    <b-form-datepicker  v-model="job.from_date" :value="job.from_date" :min="mindate"  required class="mb-2"></b-form-datepicker>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label class="text-black fz-16">End Date</label>
                                                <div class="input-group mb-sm-4">
                                                    <b-form-datepicker  v-model="job.to_date" :value="job.to_date" :min="new Date(job.from_date).toISOString().substr(0, 10)" required class="mb-2"></b-form-datepicker>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                                <div class="text-right py-4 btn-wrap">
                                  <button
                                    type="submit"
                                    class="btn btn-outline-theme mr-2"
                                    @click="next(2)"
                                  >
                                  Previous
                                  </button>
                                  <button
                                    type="submit"
                                    class="btn btn-theme"
                                    @click="next(4)"
                                  >
                                    Continue
                                  </button>
                                </div>
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

            <div class="fxt-content step4" v-if="step==4">
              <div class="fxt-form">
                <template>
                  <div>
                    <b-card-group deck>
                      <b-card title-class="text-theme font-14" footer-tag="footer">
                        <b-row>
                          <b-col xl="4" lg="4" sm="12" class="p-0 mobile-hidden">
                            <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://qapin_mvp5.manageprojects.in/assets/img/union-white.png);
                            background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;border-radius: 20px 0 0 20px;height:98.8%;">
                                <!-- progressbar -->
                                <ul id="progress-bar" class="progressbar">
                                    <li class="active">Title</li>
                                    <li class="active">Skills</li>
                                    <li class="active">Scope</li>
                                    <li>Budget</li>
                                </ul><br>
                                <div class="text w-100 text-left">
                                  
                                  <div class="step-left-3 ">
                                      <h1 class="mb-4 text-white">Next, estimate the scope of your work.</h1>
                                      <p class="text-white">These aren’t final answers, but this information helps us recommend the right talent for what you need.</p>
                                  </div>
                                  
                                </div>
                            </div>
                          </b-col>
                          <b-col xl="8" lg="8" sm="12" class="p-0 pos-rel">
                            <div class="py-4 px-4">
                              <div class="content-right-wrap p-4 p-md-5 mb-sm-5">
                                <div class="row">
                                  <div class="col-lg-12 col-12">
                                    <span v-for="(s_Work,id) in scopeWork" :key="id">
                                      <b-form-group >
                                        <b-form-radio class="text-black fz-20 fw-600 pos-rel" v-model="job.project_type"  name="project_type"  :value="s_Work.value" @change="changeScope()">{{s_Work.value}}</b-form-radio>
                                        <p class="text-muted fz-16 fw-500 ml-6">{{s_Work.description}}</p>
                                      </b-form-group>
                                      <div class="hidescope" id="largescope" v-if="job.project_type == s_Work.value">
                                        <div class="row">
                                          <div class="col-lg-12 mb-2">
                                            <h2 class="fz-18 fw-500 text-black mb-4">How long will your work take?</h2>
                                            <b-form-group >
                                              <b-form-radio class="mb-4 pos-rel" v-model="job.project_length" v-for="(pro_length, id) in  projectLengthData" :key="id"  :value="pro_length.project_length_id">{{pro_length.title}}</b-form-radio>
                                            </b-form-group>
                                          </div>
                                          <div class="col-lg-12 mb-5">
                                            <h2 class="fz-18 fw-500 text-black mb-0">What level of experience will it need?</h2>
                                            <p class="fz-14 fw-500 text-muteed mb-4">This won’t restrict any proposals, but helps match expertise to your budget.</p>
                                            <div class="form-check mb-2 pl-0" v-for="(exp_level, id) in ExperienceLevelData" :key="id">
                                              <b-form-group >
                                                <b-form-radio class="text-black fz-20 fw-600 pos-rel" v-model="job.project_experience"  :value="exp_level.experience_id" > {{exp_level.title}}</b-form-radio>
                                                <p class="text-muted fz-16 fw-500 ml-6">{{exp_level.description}}</p>
                                              </b-form-group>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div class="text-right py-4 btn-wrap">
                                  <button
                                    type="submit"
                                    class="btn btn-outline-theme mr-2"
                                    @click="next(3)"
                                  >
                                  Previous
                                  </button>
                                  <button
                                    type="submit"
                                    class="btn btn-theme"
                                    @click="next(5)"
                                  >
                                    Continue
                                  </button>
                                </div>
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

            <div class="fxt-content step5" v-if="step==5">
              <div class="fxt-form">
                <template>
                  <div>
                    <b-card-group deck>
                      <b-card title-class="text-theme font-14" footer-tag="footer">
                        <b-row>
                          <b-col xl="4" lg="4" sm="12" class="p-0 mobile-hidden">
                            <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://qapin_mvp5.manageprojects.in/assets/img/union-white.png);
                            background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;border-radius: 20px 0 0 20px;height:98.8%;">
                                <!-- progressbar -->
                                <ul id="progress-bar" class="progressbar">
                                    <li class="active">Title</li>
                                    <li class="active">Skills</li>
                                    <li class="active">Scope</li>
                                    <li class="active">Budget</li>
                                </ul><br>
                                <div class="text w-100 text-left">
                                  <div class="step-left-4 ">
                                    <h1 class="mb-4 text-white">Please, tell us about your budget.</h1>
                                    <p class="text-white">This will help us match you to talent within your range.</p>
                                  </div>
                                </div>
                            </div>
                          </b-col>
                          <b-col xl="8" lg="8" sm="12" class="p-0 pos-rel">
                            <div class="py-4 px-4 content-right-wrap">
                              <b-form-group  class="form-group budget-wrapper">
                                <b-row>
                                  <b-col xl="6" lg="6" sm="12">
                                    <b-form-radio  v-model="job.budget_type" name="budget" value="A" @change="job.budget=''">
                                      <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="34" cy="34" r="34" fill="#F8F8F8"/>
                                        <path d="M39.7012 36.8258L35.2395 33.4796V26.6632C35.2395 25.9778 34.6855 25.4238 34.0001 25.4238C33.3147 25.4238 32.7607 25.9778 32.7607 26.6632V34.0993C32.7607 34.4897 32.9442 34.8578 33.2565 35.0908L38.2139 38.8089C38.4369 38.9762 38.6972 39.0568 38.9562 39.0568C39.3342 39.0568 39.7061 38.887 39.949 38.5598C40.3606 38.0131 40.249 37.2361 39.7012 36.8258Z" fill="#F2613C"/>
                                        <path d="M34 18C25.1771 18 18 25.1771 18 34C18 42.8229 25.1771 50 34 50C42.8229 50 50 42.8229 50 34C50 25.1771 42.8229 18 34 18ZM34 47.5213C26.5453 47.5213 20.4787 41.4547 20.4787 34C20.4787 26.5453 26.5453 20.4787 34 20.4787C41.4559 20.4787 47.5213 26.5453 47.5213 34C47.5213 41.4547 41.4547 47.5213 34 47.5213Z" fill="#F2613C"/>
                                      </svg>
                                      <h5 class="fz-18 fw-500 text-black ml-4"><b>Day Rate</b></h5>
                                    </b-form-radio>
                                  </b-col>
                                  <b-col xl="6" lg="6" sm="12">
                                    <b-form-radio  v-model="job.budget_type" name="budget" value="B" @change="job.budget=''"> 
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
                                  <b-col xl="6" lg="6" sm="12">
                                    <label class="mb-3">Maximum {{(job.budget_type=='B') ? 'Monthly Rate':'Day Rate'}} ( USD )</label>
                                    <b-input-group  size="lg" prepend="$">
                                      <b-form-input v-model="job.budget" oninput="this.value=this.value.replace(/[^0-9.,]/g,'');" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" ></b-form-input>
                                    </b-input-group>
                                    <p class="text-muted fz-16 fw-500 text-muted mt-2">You will have the option to create milestones which divide your project into manageable phases.</p>
                                  </b-col>
                                </b-row>
                              </b-form-group>
                              <div class="text-right py-4 btn-wrap">
                                <button
                                  type="submit"
                                  class="btn btn-outline-theme mr-2"
                                  @click="next(4)"
                                >Previous
                                </button>
                                <button
                                  type="submit"
                                  class="btn btn-theme"
                                  @click="SaveDraft()"
                                >Review Job Post
                                </button>
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
  </template>
  <script>
  
  import userIcon from "../../components/icons/userIcon.vue"; 
  import clockIcon from "../../components/icons/clockIcon.vue";
  import { mapActions } from "vuex";
  import $ from 'jquery'; 
  export default {
    components: {
      userIcon,
      clockIcon,
    },
    data() {
      return { 
        mindate:new Date().toISOString().substr(0, 10),
        selected:'',
        jobType:'',
        selectedDraftJobs:'',
        selectedpostedJobs:'',
        attachmenturl:'',
        job:{
          employment_type_id:'',
          attachment:'',
          job_title:'',
          quality_inspector_id:'',
          topSkill:[],
          country_id:'',
          state_id:'',
          city_id:'',
          from_date:'',
          to_date:'',
          project_type:'',
          project_length:'',
          project_experience:'',
          budget_type:'',
          budget:'',
          scope_of_work:'',
          job_status:'',
          preferences_job_type:'Public',
          preference_questions:[],
          preference_english_level:'1',
          preference_no_professional:'1',
          preference_amount_earn:'1',
          preference_languages:[],
          // year_of_experience:'',
          // minimum_certification:'',
          // nationality_id:'',
        },
        categoryData:[],
        step:1,
        draftedJobs: [
          { value: null, job_title: 'No Data Found' },
        ],
        postedJobs: [
          { value: null, job_title: 'No Data Found' },
        ],
        scopeWork:[
          { value:'Large',description:'Longer term or complex initiatives Required good communication skills to deal with different parties (ex. Managing Team, Client and Vendor etc.)'},
          { value:'Medium', description:'Well-defined projects (ex. Follow strictly the project requirements etc.)'},
          { value:'Small', description:'Quick and straight forward tasks (ex. Provide support as per requirements)'},
        ],
        CountryData: [],
        stateData: [],
        cityData: [],
        projectLengthData:[],
        ExperienceLevelData:[],
        selectedSkills:[],
        changeCategory:'',
        categoryModelshow:false,
        employmentTypeData:'',
        hidepreviousBtn_step2:true,
      }
    },
    async mounted() {  
      //this fun for get category
      var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getQpRoleMasterList",
            params: {},
        });  
      this.categoryData = res;

      //this fun for get employment types
      this.getemploymentType();
      
      // this fun for to get project length
      this.getProjectLength();

      // this fun is for to get Project Length 
      this.getExperienceLevel();
      if(this.$route.params.pid !="" && this.$route.params.pid != undefined){
        if(this.$route.params.pid != "POID"){
          this.getJobData(this.$route.params.pid);
          this.step=2;
          this.jobType='c';
          this.selectedpostedJobs=this.$route.params.pid;
          this.hidepreviousBtn_step2=false;
        }
      }else{
        this.$router.push("client/dashboard");
      }
        
      // this fun for to get user posted jobs
      this.getProstedJobs('');
      // this fun for to get user drafted jobs
      this.getProstedJobs('2');
    },
    methods: {
      //this fun is for to check job select type
      checkJObSelectType(){
        // console.log('res',this.jobType);
        if(this.jobType=='A'){
          this.selectedpostedJobs='';
          this.selectedDraftJobs='';
          this.job.jobs_id='';
          this.job.uniq_id= '';
          this.job.job_title = '';
          this.job.quality_inspector_id = '';
          this.job.topSkill = '';
          this.job.country_id = '';
          this.job.state_id = '';
          this.job.city_id = '';
          this.job.from_date = new Date().toISOString().substr(0, 10);
          this.job.to_date = '';
          this.job.project_type = '';
          this.job.project_length = '';
          this.job.project_experience = '';
          this.job.budget_type = '';
          this.job.budget = '';
          this.job.scope_of_work = '';
          this.job.job_status = '';
          this.job.employment_type_id='';
        }else if(this.jobType=='b'){
          this.selectedpostedJobs='';
          this.job.employment_type_id='';
          this.job.jobs_id='';
          this.job.uniq_id= '';
          this.job.job_title = '';
          this.job.quality_inspector_id = '';
          this.job.topSkill = '';
          this.job.country_id = '';
          this.job.state_id = '';
          this.job.city_id = '';
          this.job.from_date = new Date().toISOString().substr(0, 10);
          this.job.to_date = '';
          this.job.project_type = '';
          this.job.project_length = '';
          this.job.project_experience = '';
          this.job.budget_type = '';
          this.job.budget = '';
          this.job.scope_of_work = '';
          this.job.job_status = '';
        }else if(this.jobType=='c'){
          this.job.employment_type_id='';
          this.selectedDraftJobs='';
          this.job.jobs_id='';
          this.job.uniq_id= '';
          this.job.job_title = '';
          this.job.quality_inspector_id = '';
          this.job.topSkill = '';
          this.job.country_id = '';
          this.job.state_id = '';
          this.job.city_id = '';
          this.job.from_date = new Date().toISOString().substr(0, 10);
          this.job.to_date = '';
          this.job.project_type = '';
          this.job.project_length = '';
          this.job.project_experience = '';
          this.job.budget_type = '';
          this.job.budget = '';
          this.job.scope_of_work = '';
          this.job.job_status = '';
        }
      },
      // this fun for to change budget
      changeBugetType(){ this.job.budget='';},
      // this fun for to get back url
      hasHistory () { return window.history.length > 2 },
      // this fun for to change scope value
      changeScope(){
        this.job.project_length='';
        this.job.project_experience='';
      },
      // this fun is for to check selectSkill hide show
      CheckValueInarr(_i){
        for (let index = 0; index < this.selectedSkills.length; index++) {
          if (this.selectedSkills[index].id == _i) {
            return 'hideSkill';
          }
        }
      },
      checkTitle(e,_i){
        let char = String.fromCharCode(e.keyCode); // Get the character
        let that = $('#'+_i);
          if(/^[a-zA-Z\s]*$/.test(char)) {
            if(this.job.job_title.length == 499){
              that.html('Maximum limit reached')
            }else{
              that.html('')
            }
            return true; // Match with regex 
          }else{
            e.preventDefault(); // If not match, don't add to input text
            that.html('Only Characters Allowed')
          }
      },
      // this fun is for to check input value is alpha
      isLetter(e,_i) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        let that = $('#'+_i);
        if(/^[a-zA-Z\s]*$/.test(char)) {
            that.html('')
            return true; // Match with regex 
        }
        else {
          e.preventDefault(); // If not match, don't add to input text
          that.html('Only Characters Allowed')
        }
      },
      
      // this fun is for to save job AS DRAFT
      async SaveDraft(){
        if(this.job.budget!="" && this.job.budget_type!=""){
          
          this.job.budget = '$'+this.job.budget;
          // console.log('insertdata',this.job);
          // return false;
          var PostedData='';
          if(this.jobType == 'b'){
             await this.genericAPIPOSTRequest({
                requestUrl: "job/addJob",
                params: {
                  'jobData' :this.job,
                  'data'    :this.getLoginUserIdRequest()
                },
            });
            PostedData = this.job.uniq_id;
          }else{
            this.job.job_status = 6;
            var response = await this.genericAPIPOSTRequest({
                requestUrl: "job/addJob",
                params: {
                  'jobData' :this.job,
                  'data'    :this.getLoginUserIdRequest()
                },
            });
            if(this.job.attachment.length > 0 && response.jobs_id!=''){
              var source = this.attachmenturl.split("upload");
              await this.job.attachment.map(data=>{
                this.genericAPIPOSTRequest({
                  requestUrl: "copyPostfile",
                  params: {
                    'from_path':'./upload'+source[1]+'/'+data,
                    'to_path':"./upload/jobs/"+response.user_id+"/"+response.jobs_id+"/"+data,
                  },
                });
              });
              
            }
            PostedData= response.uniq_id;
          }
          if (PostedData!="" ){
            this.$router.push({
              name: 'postReview',
              path:'/client/post-review',
              params: {pid: PostedData}
            });
          }
        }else if(this.job.budget!="" && this.job.budget_type ==""){
          this.$toastr.e('Please Select Budget Type');
          return false;
        }else if(this.job.budget =="" && this.job.budget_type !=""){
          this.$toastr.e('Please Enter Budget');
          return false;
        }else{
          this.$toastr.e('Please Select All Fields');
          return false;
        }
      },
      // this fun is for to get selected category
      SelectedCategory(){
        this.selectedSkills=[];
        this.job.topSkill=[];
      },
      // this fun is for to open category moodel
      OpencatModel(){
        this.changeCategory = this.job.quality_inspector_id;
      },
      // this fun is for updateCategory
      updateCategory(){
        this.job.quality_inspector_id = this.changeCategory;
        this.job.topSkill = [];
        this.selectedSkills = [];
        this.categoryModelshow=false;
        this.getCategory();
      },
      // this fun is for to select category
      selectSkill(_v){
        var arr ={'id':_v.qp_role_skill_master_id,'name':_v.skill_name};
        if(this.job.topSkill.length < 10){
          if(!this.job.topSkill.some(data => data ===_v.qp_role_skill_master_id)){
              this.job.topSkill.push(_v.qp_role_skill_master_id);     
          }
          if(!this.selectedSkills.some(data => data.id === _v.qp_role_skill_master_id)){
              this.selectedSkills.push(arr);     
          }
          document.getElementById(this.job.quality_inspector_id+'cat_'+_v.qp_role_skill_master_id).classList.add("hideSkill")
          document.getElementById('skill_error').innerHTML ='';
        }
      },
      // this fun is for to Remove select category
      removeCategory(index,_v){
        if(this.job.topSkill.length > 1){
          this.job.topSkill.splice(index, 1); 
          this.selectedSkills.splice(index, 1); 
          document.getElementById(this.job.quality_inspector_id+'cat_'+_v.id).classList.remove("hideSkill")
          document.getElementById('skill_error').innerHTML ='';
        }else{
          document.getElementById('skill_error').innerHTML ='Minimum one skill is required';
        }
      },
       ...mapActions(["genericAPIPOSTRequest"]),
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
      // this fun is for to get category
      async getCategory(){
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getQpRoleMasterList",
              params: {},
          });  
        this.categoryData = res; 
      },
      // this fun is for to get Country
      async getCountry(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getCountryList",
            params: {},
        });  
        this.CountryData = res;
      },
      // THIS FUNCTIONIS FOR GET STATE DATA
      async changecountry(event,status = null){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getStateList",
            params: { country_id: event },
        });  
        this.stateData = res;
        if(status==null){
          this.job.state_id ='';
          this.job.city_id ='';
        }
      },
      // THIS FUNCTIONIS FOR GET CITY DATA
      async changestate(event,status = null){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getCityList",
            params: { state_id: event },
        });  
        this.cityData = res;
        if(status==null){
          this.job.city_id = '';
        }
      },
      //this fun for get employment types 
      async getemploymentType(){
        var employmentType = await this.genericAPIPOSTRequest({
            requestUrl: "employmentType",
            params: {},
        }); 
        if(employmentType.length > 0 ){
          this.employmentTypeData = employmentType;
        }
      },
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
      // this fun 
      async getJobData(_v){
        var getPostedData1 = await this.genericAPIPOSTRequest({
            requestUrl: "getJobDetail",
            params: {'poid':_v},
        });
        if(getPostedData1.length > 0){
            var data = getPostedData1[0];
            // console.log('data',data);
            this.selectedSkills=[];
            var category_data = this.categoryData.filter(data_d => { 
              if(data_d.qp_role_master_id == data.quality_inspector_id){
                return data_d;
              }else{
                return '';
              }
            });
            for (let index = 0; index < data.skill_ids.length; index++) {
              category_data[0].skills.filter(skill_data=>{
                if(skill_data.qp_role_skill_master_id == data.skill_ids[index]){
                  this.selectedSkills.push({'id':data.skill_ids[index],'name':skill_data.skill_name});
                }
              });
            }
            if (data.job_current_status == 2) {
              this.job.jobs_id=data.jobs_id;
              this.job.uniq_id= data.uniq_id;
            }
            // this.attachmenturl = data.attachment;
            // this.job.attachment = data.attachmentName;
            this.attachmenturl = data.attachmentUrl;
            this.job.attachment = data.attachment;
            this.job.employment_type_id = data.employment_type_id;
            this.job.job_title = data.job_title;
            this.job.quality_inspector_id = data.quality_inspector_id;
            this.job.topSkill = data.skill_ids;
            this.job.country_id = data.country_id;
            this.job.state_id = data.state_id;
            this.job.city_id = data.city_id;
            this.job.from_date = data.from_date_full;
            this.job.to_date = data.to_date_full;
            this.job.project_type = data.project_type;
            this.job.project_length = data.project_length;
            this.job.project_experience = data.project_experience;
            this.job.budget_type = data.budget_type;
            this.job.budget = data.budget.replace('$','');
            this.job.scope_of_work = data.scope_of_work;
            this.job.job_status = 2;
            this.job.preferences_job_type = (data.preferences_job_type!="" && data.preferences_job_type!= null)?data.preferences_job_type:'Public';
            this.job.preference_questions = (data.preference_questions!="" && data.preference_questions!= null)?data.preference_questions:[];
            this.job.preference_english_level = (data.preference_english_level!="" && data.preference_english_level!= null)?data.preference_english_level:'1';
            this.job.preference_amount_earn = (data.preference_amount_earn!="" && data.preference_amount_earn!= null)?data.preference_amount_earn:'1';
            this.job.preference_no_professional = (data.preference_no_professional!="" && data.preference_no_professional!= null)?data.preference_no_professional:'1';
            this.job.preference_languages = (data.preference_languages!="" && data.preference_languages!= null)?data.preference_languages:[];
        }
      },
      // this fun is for to get Project Length 
      async getProstedJobs(_v){
        var getDatas = await this.genericAPIPOSTRequest({
            requestUrl: "getUserPostedJob",
            params: {
                "filter": _v,
                "search": {}
            },
        }); 
        if(getDatas.length > 0 ){
          if (_v=='') {
            this.postedJobs = getDatas;
          } else {
            this.draftedJobs = getDatas;
          }
        }
      },
      // this fun is for step form with conditions
      async next(step){
          if(step==1){
            this.image = "http://qapin_mvp5.manageprojects.in/upload/freelancer/register1-bg.png";
          }
          if(step==2){
            if(this.jobType!=""){
              if(this.jobType == 'A'){
                if(this.job.employment_type_id == ''){
                  this.$toastr.e('Please Select New Job type');
                  return false;
                }
              }else if(this.jobType == 'b'){
                if(this.selectedDraftJobs == '' || this.selectedDraftJobs == null){
                  this.$toastr.e('Please Select Existing Draft');
                  return false;
                }else{
                  this.getJobData(this.selectedDraftJobs);
                }
              }else if(this.jobType == 'c'){
                if(this.selectedpostedJobs == '' || this.selectedpostedJobs == null){
                  this.$toastr.e('Please Select Prvious Jobs');
                  return false;
                }else{
                  this.getJobData(this.selectedpostedJobs);
                }
              }
              this.image = "http://qapin_mvp5.manageprojects.in/upload/freelancer/register1-bg.png";
            }else{
              this.$toastr.e('Please Select post type');
              return false;
            }
          }
          if(step==3){
            if(this.job.job_title.replace(/^\s*/, "") !="" && this.job.quality_inspector_id!="" && this.job.job_title.replace(/^\s*/, "").length >= 3){
              this.getCountry();
              if(this.job.country_id !=""){
                this.changecountry(this.job.country_id,1);
                this.changestate(this.job.state_id,1);
              }
              this.image = "http://qapin_mvp5.manageprojects.in/upload/freelancer/register2-bg.png";
            }else if(this.job.job_title.replace(/^\s*/, "") =="" && this.job.quality_inspector_id=="" && this.job.job_title.replace(/^\s*/, "").length < 3){
              this.$toastr.e('Please Fill All data');
              return false
            }else if(this.job.job_title.replace(/^\s*/, "") =="" ){
              this.$toastr.e('Please Add The Job Title');
              return false
            }else if( this.job.quality_inspector_id==""){
              this.$toastr.e('Please Select Category');
              return false
            }else if(this.job.job_title.replace(/^\s*/, "").length < 3){
              this.$toastr.e('Please Enter Title Minimum 3 Characters');
              return false
            }
          }
          if(step==4){
            if (this.job.topSkill.length > 0 && this.job.country_id!="" && this.job.state_id!="" && this.job.city_id !="" && this.job.from_date!="" && this.job.to_date!="" && this.job.to_date >= this.job.from_date) {
              this.image = "http://qapin_mvp5.manageprojects.in/upload/freelancer/register2-bg.png";
            }else if(this.job.topSkill.length > 0 && this.job.country_id!="" && this.job.state_id!="" && this.job.city_id !="" && this.job.from_date!="" && this.job.to_date=="" ){
              this.$toastr.e('Please Select End Date');
              return false
            }else if(this.job.topSkill.length > 0 && this.job.country_id!="" && this.job.state_id!="" && this.job.city_id !="" && this.job.from_date=="" && this.job.to_date!=""){
              this.$toastr.e('Please Select Start Date');
              return false
            }else if(this.job.topSkill.length > 0 && this.job.country_id!="" && this.job.state_id!="" && this.job.city_id =="" || this.job.city_id == undefined && this.job.from_date!="" && this.job.to_date!=""){
              this.$toastr.e('Please Select City');
              return false
            }else if(this.job.topSkill.length > 0 && this.job.country_id!="" && this.job.state_id=="" && this.job.city_id !="" && this.job.from_date!="" && this.job.to_date!=""){
              this.$toastr.e('Please Select State');
              return false
            }else if(this.job.topSkill.length > 0 && this.job.country_id=="" && this.job.state_id!="" && this.job.city_id !="" && this.job.from_date!="" && this.job.to_date!=""){
              this.$toastr.e('Please Select Country');
              return false
            }else if(this.job.topSkill.length == 0 && this.job.country_id!="" && this.job.state_id!="" && this.job.city_id !="" && this.job.from_date!="" && this.job.to_date!=""){
              this.$toastr.e('Please Select Skill');
              return false
            }else if(this.job.to_date < this.job.from_date && this.job.topSkill.length > 0 && this.job.country_id!="" && this.job.state_id!="" && this.job.city_id !="" && this.job.from_date!="" && this.job.to_date!=""){
              this.$toastr.e('End Date Should be greater or equal to Start Date');
              return false
            }else {
              this.$toastr.e('Please Select All Fields');
              return false
            }
          
          }
          if(step==5){
            if (this.job.project_type!="" && this.job.project_length!="" && this.job.project_experience!="" ) {
              this.image = "http://qapin_mvp5.manageprojects.in/upload/freelancer/register2-bg.png";
            }else if(this.job.project_type == "" ){
              this.$toastr.e('Please Select Project Type');
              return false
            }else if(this.job.project_length == "" ){
              this.$toastr.e('Please Select Project Length');
              return false
            }else if(this.job.project_experience == ""){
              this.$toastr.e('Please Select Experience Level');
              return false
            }else {
              this.$toastr.e('Please Select Any One Field ');
              return false
            }
          }
          window.scrollTo(0,0);
          this.step = step;
      },
      // this fun for to go previous in stgep form
      pre(step){
        this.image = "https://picsum.photos/200/300";
        this.step = step;
        // console.log(step)
      }
    },
  }
  </script>
  <style>
    .error{color:red};
    .hideSkill{display:none !important};

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
     

    .client-wrapper .card-body{border-radius:0 0 20px 20px;    padding: 0 12px;}
    .client-wrapper .card-footer{border-radius:0 0 20px 20px!important;background-color:#fff;}
    .client-wrapper .step2 input{position:relative;top: 0px;right: 0px;}
    .client-wrapper .step2 .custom-control{width: auto;height: auto;border: 0px;padding: 0px;}
    .client-wrapper .example-wrap{margin-left:0px;}
    .client-wrapper .content-right-wrap{margin-bottom: 0px;max-height: 780px;min-height: 780px;}
    .client-wrapper .btn-wrap{position: absolute;bottom: 12px;right: 0px;border-top: 1px solid #dfdfdf;width: 100%;background-color: #fff;border-radius: 0 0 20px 20px;padding-right: 30px;z-index:1;}
    .client-wrapper .accordion{padding:0px;}
    .client-wrapper .accordion .card-header{background-color: transparent;border: 0;}
    .client-wrapper .step4 .custom-radio label{font-weight: 500;font-size: 18px;}
    .client-wrapper .step4 .custom-control{z-index:0;}
    .client-wrapper .category-wrap .custom-control-label:before{left: -1.2rem!important;}
    .client-wrapper .category-radio .custom-radio{display:flex;align-items:center;}

    .custom-control-label{background-color:#ffffff;}
    .existing-job .custom-select{width:100%;}
    .reuse-job .custom-select{width:100%;}
    .create-job input[type=radio]{position: absolute;opacity: 0;}
    .create-job .custom-radio{display:block!important;text-align:center;height: 100%;}
    .create-job input[type=radio] ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 45px 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;width:100%;}
    .create-job input ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;
    }
    .create-job input ~ label:before {position: absolute;display: block;top: 15px!important;left: 15px;content: '';width: 2em;background: transparent;border-radius: 50%;height: 2em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .create-job input:checked ~ label {color: #777;border: 1.5px solid #f2613d;}
    .create-job .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;top: 15px!important;}
    .create-job .custom-radio{margin-bottom:10px;}
    .create-job .custom-control-label{display:block!important;}

    .budget-wrapper input[type=radio]{position: absolute;opacity: 0;}
    .budget-wrapper .custom-radio{display:flex!important;text-align:center;height: 100%;}
    .budget-wrapper input[type=radio] ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 45px 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;width:100%;justify-content:center;}
    .budget-wrapper input ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;
    }
    .budget-wrapper input ~ label:before {position: absolute;display: block;top: 15px!important;left: 15px!important;content: '';width: 2em;background: transparent;border-radius: 50%;height: 2em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .budget-wrapper input:checked ~ label {color: #777;border: 1.5px solid #f2613d;}
    .budget-wrapper .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;top:15px!important;left:15px!important;}
    .budget-wrapper .custom-radio{margin-bottom:10px;}
    .budget-wrapper .input-group-text {height: 48px;border-radius: 0.25rem 0 0 0.25rem;}
    .budget-wrapper label{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;color: #000000;}

    input[type=radio] {position: absolute;opacity: 0;}
    .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;}
    .custom-radio{margin-bottom:10px;}
    input ~ label:before {display: block;content: '';width: 1.5em;background: transparent;border-radius: 50%;height: 1.5em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .custom-control-label{display: flex;align-items: center;cursor:pointer;}
    input ~ label:before{margin-right:10px;}
    .budget-wrapper input[type=radio] {
      position: absolute!important;
      opacity: 0;
      z-index: 1;
      left: 10px;
      top: 17px;
    }
    .create-job input[type=radio] {
      position: absolute!important;
      opacity: 0;
      z-index: 1;
      left: 17px;
      top: 17px;
    }
    @media only screen and (min-width: 320px) and (max-width: 815px) {
      .mobile-hidden{display:none;}
      .content-right-wrap{padding:1rem!important;}
    }
  </style>
