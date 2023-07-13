<template>
  <div class="container">
      <b-row class="mt-100 freelancer-wrap freelancer-job-detail">
          <b-col>
              <h4 class="mb-5 fz-30 fw-500 text-black" v-if="mileStoneStatus"><b>Submit a Proposal</b></h4>
              <h4 class="mb-5 fz-30 fw-500 text-black" v-else><b>Proposal Already Submitted</b></h4>
              <b-card-group deck v-if="createdByData.length > 0">
                  <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                      <template #header>
                          <h4 class="mb-0 fz-24 fw-500 text-black"><b>Proposal Settings</b></h4>
                      </template>
                      <b-row>
                          <b-col cols="12" class="p-0">
                              <div class="bordered">
                                  <div class="d-sm-flex align-items-center py-4 px-4">
                                      <b-row>
                                          <b-col xl="6" lg="6" sm="12">
                                              <b-form-group class="mb-0">
                                                  <label class="text-black fz-16">{{($store.state.accountType == 'freelancer') ? 'Associate Agency':'Freelancers'}}</label><br />
                                                  <b-form-select v-model="createdBy" :options="createdByData" value-field="login_master_id" text-field="first_name"  class="form-control"></b-form-select>
                                                  <div class="error" v-if="!createdBy.required && createdBy == '' && showError">{{($store.state.accountType == 'freelancer') ? 'Associate Agency':'Freelancers'}} is required.</div>
                                              </b-form-group>
                                          </b-col>
                                      </b-row>
                                  </div>
                              </div>
                          </b-col>
                      </b-row>
                  </b-card>
              </b-card-group>
              <b-card-group deck>
                  <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                      <template #header>
                          <h4 class="mb-0 fz-24 fw-500 text-black"><b>{{ jobDetailsWithClientData.jobDetails.job_title }}</b></h4>
                      </template>
                      <b-row>
                          <b-col cols="12" class="p-0">
                              <div class="bordered">
                                  <div class="d-sm-flex align-items-center py-4 px-4">
                                      <div>
                                          <b-card-text class="text-theme fz-16 fw-600 mb-23 mb-sm-0">{{jobDetailsWithClientData.jobDetails.quality_inspector}}</b-card-text>
                                          <b-card-text class="text-muted fz-14 mb-0">Posted {{jobDetailsWithClientData.jobDetails.time}}</b-card-text>
                                      </div>
                                      <b-card-text class="ml-auto ml-1 d-flex align-items-center mb-0 mt-sm-2">
                                          <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  fill-rule="evenodd"
                                                  clip-rule="evenodd"
                                                  d="M11.9999 5.28027C8.37764 5.28027 5.40918 8.40136 5.40918 12.2748C5.40918 14.3585 6.46842 16.8771 8.23787 19.6617C8.85278 20.6294 9.51552 21.5658 10.1854 22.4404C10.6054 22.9889 10.952 23.4148 11.1785 23.6801C11.6242 24.202 12.3759 24.2018 12.8214 23.68C13.0479 23.4148 13.3945 22.9889 13.8145 22.4404C14.4844 21.5658 15.1471 20.6294 15.762 19.6617C17.5315 16.8771 18.5907 14.3585 18.5907 12.2748C18.5906 8.40135 15.6222 5.28027 11.9999 5.28027ZM9.18859 18.847C7.55932 16.283 6.59072 13.9799 6.59072 12.2748C6.59072 9.19124 9.00544 6.65236 11.9999 6.65236C14.9944 6.65236 17.4091 9.19123 17.4092 12.2748C17.4092 13.9799 16.4406 16.283 14.8113 18.847C13.7963 20.4444 12.7477 21.8156 11.9999 22.6934C11.2521 21.8155 10.2036 20.4443 9.18859 18.847ZM12 14.7608C10.7673 14.7608 9.77138 13.5702 9.77138 12.1142C9.77138 10.6582 10.7673 9.4677 12 9.4677C13.2326 9.4677 14.2285 10.6582 14.2285 12.1142C14.2285 13.5703 13.2326 14.7608 12 14.7608ZM12 13.5663C12.6578 13.5663 13.1999 12.9182 13.1999 12.1142C13.1999 11.3103 12.6578 10.6621 12 10.6621C11.3421 10.6621 10.7999 11.3103 10.7999 12.1142C10.7999 12.9182 11.3421 13.5663 12 13.5663Z"
                                                  fill="#999999"
                                              />
                                          </svg>
                                          {{jobDetailsWithClientData.jobDetails.country_name+', '+jobDetailsWithClientData.jobDetails.state_name+', '+jobDetailsWithClientData.jobDetails.city_name}}
                                      </b-card-text>
                                  </div>
                              </div>
                          </b-col>
                          <b-col xl="9" lg="9" sm="12" class="p-0">
                              <div class="bordered p-4 no-bottom-border">
                                  <vue-read-more-smooth :lines="3" class="mt-2">
                                      <b-card-text class="text-muted fz-14 mb-3" v-html="jobDetailsWithClientData.jobDetails.scope_of_work"></b-card-text>
                                  </vue-read-more-smooth>

                                  <h5 class="fz-18 fw-600 mb-3">Skills</h5>
                                  <ul class="align-items-center fz-14 post tags mb-4 inline-block">
                                      <li class="mr-1 align-items-center inline-block" v-for="(skill,ids) in jobDetailsWithClientData.jobDetails.skill_name" :key="ids">{{skill}}</li>
                                  </ul>
                                  <br />
                                  <a
                                      :href="$router.resolve({name: $store.state.accountType+'jobDetails',  path:'/'+$store.state.accountType+'/job-details', query: {jobDetailsWithClientData: jobDetailsWithClientData.jobDetails.jobs_id}}).href"
                                      class="btn btn-theme mb-3"
                                  >
                                      View Job Post
                                  </a>
                              </div>
                          </b-col>
                          <b-col class="p-0" xl="3" lg="3" sm="12">
                              <div class="bordered py-4 px-4 no-bottom-border about-wrapper">
                                  <h5 class="fz-18 fw-600">About the client</h5>
                                  <div class="star-rating mb-3">
                                      <label for="5-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 1)?'active':''">&#9733;</label>
                                      <label for="4-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 2)?'active':''">&#9733;</label>
                                      <label for="3-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 3)?'active':''">&#9733;</label>
                                      <label for="2-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 4)?'active':''">&#9733;</label>
                                      <label for="1-star" class="star" :class="(jobDetailsWithClientData.clientrating.rating == 5)?'active':''">&#9733;</label>
                                  </div>
                                  <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.nationality}}</h5>
                                  <!-- <p class="r-about fz-16">Suzhou 2:47 am</p> -->

                                  <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.postedJob}} Jobs Posted</h5>
                                  <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hireRate}}% Hire Rate, {{jobDetailsWithClientData.clientFullDetails.openJob}} Open Jobs</p>

                                  <h5 class="fz-18 fw-600">${{changeAmountvalue(jobDetailsWithClientData.clientFullDetails.totalSpent)}} Total Spent</h5>
                                  <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hired}} {{(jobDetailsWithClientData.clientFullDetails.hired > 0)?"Hire's":'Hire'}}</p>

                                  <p class="r-about fz-16">Member since {{jobDetailsWithClientData.clientFullDetails.member_since}}</p>
                              </div>
                          </b-col>
                      </b-row>
                  </b-card>
              </b-card-group>
          </b-col>
      </b-row>
      <b-form @submit.prevent="submitProposal">
          <b-row class="mt-50 freelancer-wrap freelancer-job-detail" v-if="mileStoneStatus">
              <b-col>
                  <b-card-group deck>
                      <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                          <template #header>
                              <div class="d-md-flex align-items-center">
                                  <h4 class="mb-0 fz-24 fw-500 text-black"><b>Submit Proposals</b></h4>
                                  <div class="ml-auto d-flex align-items-center">
                                      <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <circle opacity="0.1" cx="18.0008" cy="17.9998" r="17.034" fill="#F2613C" />
                                          <g clip-path="url(#clip0_3020_21604)">
                                              <path
                                                  d="M22.4166 11.5H17.9139C17.6161 11.5 17.1998 11.6726 16.9893 11.8829L10.8161 18.056C10.3946 18.477 10.3946 19.1673 10.8161 19.5879L15.4126 24.1841C15.8331 24.6052 16.5228 24.6052 16.944 24.1837L23.1171 18.0115C23.3274 17.8012 23.5 17.3842 23.5 17.087V12.5834C23.5 11.9877 23.0123 11.5 22.4166 11.5ZM20.2498 15.8334C19.6515 15.8334 19.1665 15.3478 19.1665 14.75C19.1665 14.1512 19.6515 13.6666 20.2498 13.6666C20.8482 13.6666 21.3334 14.1512 21.3334 14.75C21.3334 15.3478 20.8482 15.8334 20.2498 15.8334Z"
                                                  fill="#F2613C"
                                              />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_3020_21604">
                                                  <rect width="13" height="13" fill="white" transform="translate(10.5 11.5)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                      <div class="content ml-2">
                                          <b-card-text class="text-black fz-16 mb-1 fw-600">Client Budget</b-card-text>
                                          <b-card-text class="text-muted fz-14 mb-0">{{jobDetailsWithClientData.jobDetails.budget }} {{(jobDetailsWithClientData.jobDetails.budget_type == 'A')?'Per Day':'Per Month'}}</b-card-text>
                                      </div>
                                  </div>
                              </div>
                          </template>
                          <b-row>
                              <b-col cols="12" class="p-0">
                                  <div class="bordered p-4">
                                      <h5 class="fw-600 fz-18 mb-4">How do yo want to be paid?</h5>
                                      <b-form-group v-slot="{ ariaDescribedby }">
                                          <div>
                                              <b-form-radio v-model="paidType" :aria-describedby="ariaDescribedby" value="milstone" v-on:change="selectPaid('one'); showError=false">
                                                  <span class="ml-2 fw-600 fz-16" v-on:click="selectPaid('one')">By Milestone</span>
                                              </b-form-radio>
                                              <p class="ml-8 text-muted fz-14 fw-400">
                                                  On fixed price jobs, simply divide the project into smaller segments ( called milestone). As each milestone <br />
                                                  is met, you’ll be paid for that specific work...
                                              </p>
                                          </div>
                                          <div>
                                              <b-form-radio v-model="paidType" :aria-describedby="ariaDescribedby" value="project" v-on:change="selectPaid('two'); showError=false ">
                                                  <span class="ml-2 fw-600 fz-16" v-on:click="selectPaid('two')">By Project</span>
                                              </b-form-radio>
                                              <p class="ml-8 text-muted fz-14 fw-400">Get your entire payment at the end when, all the work has been delivered.</p>
                                          </div>
                                      </b-form-group>
                                  </div>
                                  <div class="bordered p-4" v-if="paidTypeStatus== 'one'">
                                      <h5 class="fw-600 fz-18 mb-4">How many milestone do you want to include?</h5>
                                      <b-row>
                                          <b-col xl="1" lg="1" sm="12">
                                              <b-form-group id="fieldset-0" label="S.No" label-for="input-1" class="fz-14 fw-600"> </b-form-group>
                                          </b-col>
                                          <b-col xl="4" lg="3" sm="12">
                                              <b-form-group id="fieldset-1" label="Milestone Description" label-for="input-1" valid-feedback="Thank you!" class="fz-14 fw-600" placeholder="What is the task ?"> </b-form-group>
                                          </b-col>
                                          <b-col xl="3" lg="3" sm="12">
                                              <b-form-group id="fieldset-1" label="Due Date" label-for="input-1" valid-feedback="Thank you!" class="fz-14 fw-600" placeholder="DD - MM - YYYY"> </b-form-group>
                                          </b-col>
                                          <b-col xl="3" lg="2" sm="12">
                                              <b-form-group id="fieldset-1" label="Amount" label-for="input-1" valid-feedback="Thank you!" class="fz-14 fw-600"> </b-form-group>
                                          </b-col>
                                      </b-row>
                                      <b-row v-for="(milstonedata, id) in $v.proposal.$each.$iter" :key="id">
                                          <b-col xl="1" lg="1" sm="12">
                                              {{parseInt(id)+1}}
                                          </b-col>
                                          <b-col xl="4" lg="3" sm="12">
                                              <b-form-input class="form-control" maxlength="201" v-model.trim="milstonedata.description.$model" trim />
                                              <!-- @keyup="descriptionValidation('des_Valid_'+id,$event.target.value)" -->

                                              <!-- <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'des_Valid_'+id">Description required</span> -->
                                              <div class="error" v-if="!milstonedata.description.required && showError">Description is required.</div>
                                              <div class="error" v-if="!milstonedata.description.maxLength ">Maximum 200 Charachter Allow.</div>
                                          </b-col>
                                          <b-col xl="3" lg="3" sm="12">
                                              <b-form-datepicker v-model.trim="milstonedata.dueDate.$model" :min="new Date().toISOString().substr(0, 10)" class="mb-2"></b-form-datepicker>
                                              <div class="error" v-if="!milstonedata.dueDate.required && showError">Due Date is required.</div>
                                          </b-col>
                                          <b-col xl="2" lg="3" sm="12">
                                              <b-form-input
                                                  v-model.trim="milstonedata.amount.$model"
                                                  oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"
                                                  maxlength="5"
                                                  minlength="1"
                                                  autocomplete="nope"
                                                  onselectstart="return false"
                                                  onpaste="return false"
                                                  onCopy="return false"
                                                  onCut="return false"
                                                  onDrag="return false"
                                                  onDrop="return false"
                                                  trim
                                              ></b-form-input>
                                              <!-- <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'amt_Valid_'+id">Minmum of $1 Required</span> -->
                                              <div class="error" v-if="!milstonedata.amount.required && showError">Minimum $5 is required.</div>
                                              <div class="error" v-if="!milstonedata.amount.between ">Minimum $5 & Maximum $50000 is Allow.</div>
                                          </b-col>
                                          <b-col xl="1" lg="1" sm="12" v-if="id > 0">
                                              <button class="btn btn-outline-theme d-flex align-items-center" type="button" v-on:click="removeMilestone(id)">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2613C" class="bi bi-trash" viewBox="0 0 16 16">
                                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                      <path
                                                          fill-rule="evenodd"
                                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                      />
                                                  </svg>
                                                  <span class="ml-2">Remove</span>
                                              </button>
                                          </b-col>
                                      </b-row>
                                      <button class="btn btn-outline-theme mt-4 d-flex align-items-center" type="button" v-on:click="addMilestone()">
                                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M4.70966 11.4814V6.94542H0.413656V4.92942H4.70966V0.393421H6.79766V4.92942H11.0937V6.94542H6.79766V11.4814H4.70966Z" fill="#F2613C" />
                                          </svg>
                                          <span class="ml-2">Add Milestone</span>
                                      </button>
                                  </div>
                                  <div class="bordered p-4" v-else-if="paidTypeStatus== 'two'">
                                      <h5 class="fw-600 fz-18 mb-4"></h5>
                                      <b-form>
                                          <b-row v-for="(milstonedata, id) in $v.proposal.$each.$iter" :key="id">
                                              <b-col cols="1">
                                                  <b-form-group id="fieldset-1" label="S.No" label-for="input-1" class="fz-14 fw-600"></b-form-group>
                                                  1
                                              </b-col>
                                              <b-col cols="4">
                                                  <b-form-group id="fieldset-1" label="Description" label-for="input-1" valid-feedback="Thank you!" class="fz-14 fw-600" placeholder="What is the task ?">
                                                      <b-form-input id="input-1" maxlength="200" v-model.trim="milstonedata.description.$model" @keyup="descriptionValidation('des_Valid_'+id,$event.target.value)" trim></b-form-input>
                                                      <!-- <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'des_Valid_'+id">Description required</span> -->
                                                      <div class="error" v-if="!milstonedata.description.required && showError">Description is required.</div>
                                                      <div class="error" v-if="!milstonedata.description.maxLength ">Maximum 200 Charachter Allow Required.</div>
                                                  </b-form-group>
                                              </b-col>
                                              <b-col cols="3">
                                                  <b-form-group id="fieldset-1" label="Due Date" label-for="input-1" valid-feedback="Thank you!" class="fz-14 fw-600" placeholder="DD - MM - YYYY">
                                                      <!-- <input type="date" class="form-control mb-2" v-model="milstonedata.dueDate" required  /> -->
                                                      <b-form-datepicker v-model.trim="milstonedata.dueDate.$model" :min="new Date().toISOString().substr(0, 10)" class="mb-2"></b-form-datepicker>
                                                      <div class="error" v-if="!milstonedata.dueDate.required && showError">Due Date is required.</div>
                                                  </b-form-group>
                                              </b-col>
                                              <b-col cols="3">
                                                  <b-form-group id="fieldset-1" label="Amount" label-for="input-1" valid-feedback="Thank you!" class="fz-14 fw-600" placeholder="$ 00.00">
                                                      <b-form-input
                                                          id="input-1"
                                                          maxlength="5"
                                                          minlength="1"
                                                          oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"
                                                          v-model.trim="milstonedata.amount.$model"
                                                          autocomplete="nope"
                                                          onselectstart="return false"
                                                          onpaste="return false"
                                                          onCopy="return false"
                                                          onCut="return false"
                                                          onDrag="return false"
                                                          onDrop="return false"
                                                      ></b-form-input>
                                                      <!-- <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'amt_Valid_'+id">Minmum of $1 Required</span> -->
                                                      <div class="error" v-if="!milstonedata.amount.required && showError">Minimum $5 is required.</div>
                                                      <div class="error" v-if="!milstonedata.amount.between">Minimum $5 & Maximum $50000 is Allow.</div>
                                                  </b-form-group>
                                              </b-col>
                                          </b-row>
                                      </b-form>
                                  </div>
                              </b-col>
                          </b-row>

                          <b-row>
                              <b-col class="p-0" xl="6" lg="6" sm="12">
                                  <div class="text-center bordered no-bottom-border py-13">
                                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                                          <circle cx="50" cy="50" r="50" fill="#F2613C" />
                                          <g clip-path="url(#clip0_3736_21321)">
                                              <path
                                                  d="M62.3418 42.1875C52.5684 42.1875 44.6172 49.9942 44.6172 59.5898C44.6172 69.1855 52.5684 76.9922 62.3418 76.9922C72.1151 76.9922 80.0664 69.1855 80.0664 59.5898C80.0664 49.9942 72.1151 42.1875 62.3418 42.1875ZM62.3418 58.0078C65.0074 58.0078 67.1758 60.1368 67.1758 62.7539C67.1758 64.8137 65.8246 66.5533 63.9531 67.2086V70.6641H60.7305V67.2086C58.859 66.5533 57.5078 64.8137 57.5078 62.7539H60.7305C60.7305 63.6268 61.4528 64.3359 62.3418 64.3359C63.2308 64.3359 63.9531 63.6268 63.9531 62.7539C63.9531 61.881 63.2308 61.1719 62.3418 61.1719C59.6762 61.1719 57.5078 59.0429 57.5078 56.4258C57.5078 54.366 58.859 52.6264 60.7305 51.9711V48.5156H63.9531V51.9711C65.8246 52.6264 67.1758 54.366 67.1758 56.4258H63.9531C63.9531 55.5529 63.2308 54.8438 62.3418 54.8438C61.4528 54.8438 60.7305 55.5529 60.7305 56.4258C60.7305 57.2986 61.4528 58.0078 62.3418 58.0078Z"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M43.0059 42.1875C52.9445 42.1875 60.7305 38.0177 60.7305 32.6953C60.7305 27.3729 52.9445 22.9922 43.0059 22.9922C33.0672 22.9922 25.0664 27.3729 25.0664 32.6953C25.0664 38.0177 33.0672 42.1875 43.0059 42.1875Z"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M25.0664 58.5938V61.1715C25.0664 66.4939 33.0672 70.6637 43.0059 70.6637C43.5696 70.6637 44.1158 70.6128 44.6709 70.5861C43.4349 68.678 42.5131 66.5609 41.9703 64.2975C34.7833 64.1027 28.5428 61.9344 25.0664 58.5938Z"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M41.472 61.0909C41.435 60.5933 41.3945 60.0963 41.3945 59.5895C41.3945 57.9403 41.6146 56.3441 41.99 54.8062C34.794 54.6147 28.5459 52.4452 25.0664 49.1016V51.6793C25.0664 56.7194 32.2918 60.6802 41.472 61.0909Z"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M43.0059 51.6793C43.0076 51.6793 43.009 51.6791 43.0108 51.6791C44.0735 49.1854 45.6184 46.9374 47.5368 45.054C46.0816 45.2346 44.5777 45.3512 43.0059 45.3512C35.3556 45.3512 28.7108 43.1114 25.0664 39.6094V42.1871C25.0664 47.5095 33.0672 51.6793 43.0059 51.6793Z"
                                                  fill="white"
                                              />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_3736_21321">
                                                  <rect width="55" height="54" fill="white" transform="translate(25.0664 22.9922)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                      <br />
                                      <h5 class="fz-18 fw-400 p-0 d-block">Includes Fixed-Price</h5>
                                  </div>
                              </b-col>
                              <b-col xl="6" lg="6" sm="12" class="p-0">
                                  <div class="bordered no-bottom-border">
                                      <table class="table w-100">
                                          <tr class="no-border border-top-0">
                                              <td class="pt-4 pb-2 px-4">
                                                  <h5 class="fz-18 fw-600 no-border p-0">Total Price of Project</h5>
                                                  <p class="fz-16 fw-400 text-muted no-border p-0">This includes all milestones, and this is the amount your client will see.</p>
                                              </td>
                                              <td style="vertical-align: top;" class="pt-4 pb-2 px-4">
                                                  <p class="fz-16 fw-400 text-muted mb-0 no-border d-flex align-items-center">$<span id="total_amount">{{totalAmount}}</span></p>
                                              </td>
                                          </tr>
                                          <tr class="no-border border-top-0">
                                              <td class="pt-1 pb-2 px-4">
                                                  <h5 class="fz-18 fw-600 no-border mb-0 p-0">Qapin Service Fee</h5>
                                                  <a class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);">Learn more about service fee</a>
                                              </td>
                                              <td style="vertical-align: top;" class="pt-1 pb-2 px-4">
                                                  <p class="fz-16 fw-400 text-muted mb-0 no-border">${{serviceFee}}</p>
                                              </td>
                                          </tr>
                                          <tr style="border-top: 1px solid #adb1b6 !important;">
                                              <td class="pt-1 pb-2 px-4">
                                                  <h5 class="fz-18 fw-600 no-border mb-0 p-0">You’ll Receive</h5>
                                              </td>
                                              <td style="vertical-align: top;" class="pt-1 pb-4 px-4">
                                                  <p class="fz-16 fw-600 text-muted mb-0 no-border">${{totalAmount-serviceFee}}</p>
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
                              </b-col>
                          </b-row>
                      </b-card>
                  </b-card-group>
              </b-col>
          </b-row>
          <b-row class="mt-50 freelancer-wrap freelancer-job-detail" v-if="QuestionCount">
              <b-col>
                  <b-card-group deck>
                      <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                          <b-row>
                              <b-col cols="12" class="py-4">
                                  <div class="p-4">
                                      <h5 class="fw-500 fz-24 mb-4 text-black"><b>Questions</b></h5>
                                      <span v-for="(ques,id) in jobDetailsWithClientData.jobDetails.preference_questions" :key="id">
                                          <h6 class="fz-16 fw-400 mb-2 mt-4">{{id+1}}. {{ques.text}}</h6>
                                          <textarea
                                              v-if="mileStoneStatus"
                                              maxlength="500"
                                              v-model.trim="questionAnswer[id].answer"
                                              id="textarea"
                                              rows="0"
                                              max-rows="8"
                                              v-autogrow
                                              class="mt-2 block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                                              @keyup="answerValidation('answer_'+id,$event.target.value)"
                                              @input="answerValidation('answer_'+id,$event.target.value)"
                                          ></textarea>
                                          <div class="error"  :id="'answer_'+id"></div>
                                      </span>
                                  </div>
                              </b-col>
                          </b-row>
                      </b-card>
                  </b-card-group>
              </b-col>
          </b-row>
          <b-row class="mt-50 freelancer-wrap freelancer-job-detail" v-if="mileStoneStatus">
              <b-col>
                  <b-card-group deck>
                      <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                          <b-row>
                              <b-col cols="12" class="py-4">
                                  <div class="p-4">
                                      <h5 class="fw-500 fz-24 mb-4 text-black"><b>Cover Letter</b></h5>
                                      <textarea
                                          maxlength="5000"
                                          v-model.trim="cover_letter"
                                          id="textarea"
                                          rows="0"
                                          max-rows="8"
                                          v-autogrow
                                          class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                                          @keyup="coverLetterValid('cover_Valid',$event.target.value)"
                                          @input="coverLetterValid('cover_Valid',$event.target.value)"
                                      >
                <!-- @keyup="coverLetterValid('cover_Valid',$event.target.value)" -->


                                      </textarea>
                                      <!-- <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'cover_Valid'"></span> -->
                                      <div class="error" v-if="!cover_letter.required && cover_letter == '' && showError">Cover Letter is required.</div>
                                      <div class="error" :id="'cover_Valid'"></div>

                                      <div class="align-items-center justify-content-end mt-4">
                                          <div class="align-items-center">
                                              <div>
                                                  <input id="fileUpload" hidden type="file" @change="UploadFile" accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf" name="upload" />
                                                  <button type="button" class="btn btn-outline-theme d-flex align-items-center" @click="chooseFiles()">
                                                      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path
                                                              d="M16.8146 1.76691C14.5712 -0.471781 10.9208 -0.471781 8.67702 1.76691L1.70173 8.72731C0.0993369 10.3265 0.0994423 12.9284 1.70194 14.5275C2.50325 15.3271 3.55548 15.7269 4.60813 15.7268C5.6605 15.7267 6.71329 15.327 7.51447 14.5275L13.9083 8.1471C14.3741 7.68234 14.6307 7.06438 14.6307 6.4071C14.6307 5.74977 14.3743 5.13185 13.9084 4.66695C12.9468 3.70751 11.3822 3.70754 10.4208 4.66713L6.23949 8.83943C5.91848 9.15973 5.91848 9.67911 6.23942 9.99947C6.5604 10.3199 7.08088 10.3198 7.40193 9.99947L11.5833 5.82713C11.9038 5.50729 12.4252 5.50722 12.7458 5.82706C12.901 5.98198 12.9866 6.18798 12.9866 6.40706C12.9866 6.62614 12.9011 6.83207 12.7458 6.98706L6.35195 13.3674C5.39039 14.3268 3.82594 14.3269 2.86445 13.3675C1.90296 12.408 1.90289 10.8468 2.86427 9.88725L9.83953 2.92695C11.4422 1.32779 14.0497 1.32779 15.6521 2.92695C16.4284 3.70154 16.856 4.7315 16.856 5.82699C16.856 6.92248 16.4284 7.95243 15.6521 8.7271L8.67691 15.6876C8.35593 16.0079 8.35593 16.5273 8.67698 16.8477C8.8375 17.0079 9.04788 17.0879 9.25822 17.0879C9.46859 17.0879 9.67897 17.0078 9.83949 16.8477L16.8145 9.88718C17.9014 8.8027 18.5 7.36079 18.5 5.82702C18.5 4.2933 17.9014 2.85138 16.8146 1.76691Z"
                                                              fill="#F2613C"
                                                          />
                                                      </svg>
                                                      <span class="ml-1">Attach File</span>
                                                  </button>
                                                  <span class="fz-12 text-muted">Upload Project Files Max size : 40 MB</span>
                                              </div>
                                              <div>
                                                <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="UploadedFileName.length > 0" style="padding: 6px 0px;">
                                                    <template v-for="(attc, index) in UploadedFileName">
                                                    <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                                                        <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                                        <a :href="attc" target="_blank"><span class="ml-2 text-theme">{{attachment[index]}}</span></a>
                                                        <i class="fa fa-trash border-none fz-18 text-danger cursor-pointer pl-2" @click="removeAttachment(index)"></i>
                                                    </li>
                                                    </template>
                                                </ul>
                                              </div>
                                          </div>
                                          <div class="ml-auto align-items-center mt-4">
                                              <button class="btn btn-theme mr-1" :disabled="btndisabled" v-if="milestoneBtn" type="submit">Submit a Proposal</button>
                                          </div>
                                      </div>
                                  </div>
                              </b-col>
                          </b-row>
                      </b-card>
                  </b-card-group>
              </b-col>
          </b-row>
      </b-form>
  </div>
</template>
<script>
  // import axios from 'axios'
  import { validationMixin } from "vuelidate";
  import { required, maxLength, between } from "vuelidate/lib/validators";
  import VueReadMoreSmooth from "vue-read-more-smooth";
  import { mapActions } from "vuex";
  import $ from "jquery";
  // const number = helpers.regex(
  //   "serial",
  //   /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  // )
  // let base_url = "http://qapin_mvp5.manageprojects.in/";
  export default {
      components: {
          VueReadMoreSmooth,
      },
      mixins: [validationMixin],
      validations: {
          proposal: {
              $each: {
                  description: {
                      required,
                      maxLength: maxLength(200),
                  },
                  amount: {
                      required,
                      maxLength: maxLength(5),
                      between: between(5, 50000),
                  },
                  dueDate: { required },
              },
          },
          cover_letter: {
              maxLength: maxLength(5000),
              required,
          },
          createdBy:{
            required,
          }

      },
      data: () => ({
          QuestionCount: false,
          drawer: false,
          group: null,
          user_id: "",
          job_id: "",
          showError: false,
          jobDetailsWithClientData: {
              jobDetails: "",
              clientJobsData: "",
              clientFullDetails: "",
              clientrating: "",
          },
          proposal: [
              {
                  milstone_type: 1,
                  description: "",
                  acceptStatus: 0,
                  dueDate: "",
                  amount: "",
                  job_id: "",
                  user_id: "",
                  job_application_id:"",
                  created_by : "",
                  created_user_type : "",
              },
          ],
          paidType: "milstone",
          paidTypeStatus: "one",
          milstoneData: "",
          mileStoneStatus: true,
          milestoneBtn: true,
          cover_letter: "",
          createdBy: "",
          attachment: [],
          UploadedFileName: [],
          file: "",
          amount: {
              totalAmounts: 0,
              serviceFee: 0,
              amountRecive: 0,
          },
          questionAnswer: [],
          btndisabled: false,
          associateWithagency: [],
          associatedFreelancer: [],
          createdByData:[],
      }),
      computed: {
          // this fun is for to calculate total amount
          totalAmount() {
              let sum = parseInt(0);
              this.proposal.map((item) => {
                  if (item["amount"] == "") {
                      return 0;
                  }
                  sum = parseInt(sum) + parseInt(item["amount"]);
              });
              return sum;
          },
          // this fun is for to calculate total service fees
          serviceFee() {
              let sum = parseInt(0);
              sum = (this.totalAmount * 20) / 100;
              return sum;
          },
          // descriptionError() {
          //   const errors = []
          //   if (!this.$v.proposal.description.$dirty) return errors
          //   !this.$v.proposal.description.required && errors.push('Description is required')
          //   return errors
          // },
      },
      methods: {
          // this fun is for to get details of
          async getAssociateWithagency() {
              var res = await this.genericAPIPOSTRequest({
                  requestUrl: "associateWithagency",
                  params: {},
              });
              if(res){
                this.createdByData = res;
              }
          },
          async getAssociatedFreelancer() {
              var res =  await this.genericAPIPOSTRequest({
                  requestUrl: "associatedFreelancer",
                  params: {},
              });
              if(res){
                this.createdByData = res;
              }
          },
          // this fun is for to =remove attachment
          removeAttachment(_i) {
              this.attachment.splice(_i, 1);
              this.UploadedFileName.splice(_i, 1);
              document.getElementById("fileUpload").value = "";
          },
          // this fun is for to check validation of answer
          answerValidation(_id, _v) {
              var that = $("#"+_id);
              if (_v.length < 500 && _v.length > 0) {
                  that.html("");
              } else if (_v.length >= 500) {
                  that.html("Maximum limit Reach");
              } else {
                  that.html("Answer Is required");
              }
          },
          // this fun is for to check validate description
          descriptionValidation(_i, _v) {
              var value = _v;
              var that = $("#" + _i);
              if (value.length == 200) {
                  that.html("Maximum Limit Reached");
              } else if (value.length < 200 && value.length > 0) {
                  that.html("Maximum 200 charachter Allow");
              } else {
                  that.html("Description Required");
              }
          },
          // this fun is for to validate cover letter
          coverLetterValid(_i, _v) {
              var value = _v;
              if (value.length == 5000) {
                  $("#" + _i).html("Maximum Limit Reached");
              } else {
                  $("#" + _i).html("");
              }
              // else{
              //   $('#'+_i).html('Maximum 5000 charachter Allow')
              // }
          },
          ...mapActions(["genericAPIPOSTRequest","fetchApis"]),
          
          // this fun for upload file
          async UploadFile(e) {
              var files = e.target.files[0];
              var ext = files.name.split(".").pop();
              if (ext == "pdf" || ext == "word" || ext == "png" || ext == "jpeg" || ext == "jpg") {
                  const fileSize = files.size / 1024 / 1024; // in MiB
                  if (fileSize <= 40) {
                      // if (fileSize >= 2 && fileSize <= 40) {
                      const formData = new FormData();
                      formData.append("image", files);
                      formData.append("user_id", this.user_id);
                      formData.append("jobs_id", this.job_id);
                      var getData = await this.genericAPIPOSTRequest({
                          requestUrl: "milestone/uplaodData",
                          params: formData,
                      });
                      if (getData.filename != "") {
                          this.attachment.push(getData.name);
                          this.UploadedFileName.push(getData.filename);
                      }
                  } else if (fileSize < 2) {
                      this.$toastr.e("File Size Should be Greater Than 2 Mb");
                  } else if (fileSize > 40) {
                      this.$toastr.e("File Size Should be Less Than 40 Mb");
                  } else {
                      this.$toastr.e("File Size Should between 2 Mb To 40 Mb");
                  }
              } else {
                  this.$toastr.e("Only Allow Files (PDF, Word, Png, Jpg, Jpeg)");
              }
              document.getElementById("fileUpload").value = "";
          },
          // this fun for to open choose file
          chooseFiles() {
              document.getElementById("fileUpload").click();
          },
          // this fun is for to submit proposal
          async submitProposal() {
              this.showError = true;
              var error = 0;
              if(this.createdByData.length == 0){
                this.createdBy = this.user_id;
              }
              // var err_message='';
              this.$v.createdBy.$touch();
              this.$v.proposal.$touch();
              this.$v.cover_letter.$touch();
              if (this.questionAnswer.length > 0) {
                  this.questionAnswer.filter((ans, ids) => {
                      if (typeof ans.answer == "undefined") {
                          $("#answer_" + ids).html("Answer Required");
                          error++;
                          // err_message="Please Enter Answer Of Questions";
                      } else {
                          $("#answer_" + ids).html("");
                      }
                  });
              }

              if (!this.$v.proposal.$invalid && !this.$v.cover_letter.$invalid && !this.$v.createdBy.$invalid && error == 0) {
                  this.btndisabled = true;
                  var data = this.jobDetailsWithClientData.jobDetails;
                  var jobAttachment = this.jobDetailsWithClientData.jobDetails.attachment;
                  data.paidType = this.paidType;
                  data.application_status = 1;
                  data.cost = document.getElementById("total_amount").textContent;
                  data.cover_letter = this.cover_letter;
                  data.attachment = this.attachment;
                  data.question = this.questionAnswer;
                  data.created_by = this.createdBy;
                  data.created_user_type = this.$store.state.accountType;
                  var response = await this.fetchApis({
                      requestUrl: "job/applyJob",
                      params: {
                          jobData: data,
                          data: this.getLoginUserIdRequest(),
                      },
                  });
                  if (response.data.status == true) {
                    response = response.data.result;
                    this.proposal.map((data)=>{
                        data.job_application_id = response;
                        data.created_by = this.createdBy;
                        data.created_user_type = this.$store.state.accountType;
                    })
                      var res = await this.genericAPIPOSTRequest({
                          requestUrl: "addUpdateMilestoneNew",
                          params: {
                              milestone: this.proposal,
                              data: this.getLoginUserIdRequest(),
                          },
                      });
                      setTimeout(() => {
                          this.btndisabled = false;
                      }, 1000);
                      // console.log('res',res);
                      if (res) {
                          await this.genericAPIPOSTRequest({
                              requestUrl: "addupdateUser_job_apply",
                              params: {
                                  from_user_id: this.jobDetailsWithClientData.jobDetails.user_id,
                                  job_application_id: response,
                                  job_id: this.jobDetailsWithClientData.jobDetails.jobs_id,
                                  title: this.jobDetailsWithClientData.jobDetails.job_title,
                                  description: this.jobDetailsWithClientData.jobDetails.scope_of_work,
                                  attachment: jobAttachment,
                              },
                          });
                          if (jobAttachment.length > 0) {
                              var source = this.jobDetailsWithClientData.jobDetails.attachmentUrl.split("upload");
                              await jobAttachment.map((data) => {
                                  this.genericAPIPOSTRequest({
                                      requestUrl: "copyPostfile",
                                      params: {
                                          from_path: "./upload" + source[1] + "/" + data,
                                          to_path: "./upload/proposal/" + this.jobDetailsWithClientData.jobDetails.user_id + "/" + this.jobDetailsWithClientData.jobDetails.jobs_id + "/" + data,
                                      },
                                  });
                              });
                          }
                          this.$toastr.s("Proposal successfull submit");
                          if(this.$store.state.accountType == 'freelancer'){
                            this.$router.push({
                                name: "myProposals",
                                path: "/freelancer/my-proposals",
                            });
                          }else{
                            this.$router.push({
                                name: "agencymyProposals",
                                path: "/agency/my-proposals",
                            });                                                                                                                                         
                          }
                          
                      } else {
                          setTimeout(() => {
                              this.btndisabled = false;
                          }, 1000);
                          this.$toastr.e("Proposal submit Unsuccessfull");
                      }
                  }else{
                    this.$toastr.e(response.data.message);
                    return false;
                  }  
              } else {
                  return false;
              }
          },
          // this fun is for select proposal type
          selectPaid(_v) {
              this.milestoneBtn = true;
              this.paidTypeStatus = _v;
              if (_v == "two") {
                  this.proposal = [
                      {
                          milstone_type: 0,
                          description: "",
                          acceptStatus: 0,
                          dueDate: "",
                          amount: "",
                          job_id: this.job_id,
                          job_application_id: "",
                          created_by : "",
                          created_user_type : "",
                      },
                  ];
              } else {
                  this.proposal = [
                      {
                          milstone_type: 1,
                          description: "",
                          acceptStatus: 0,
                          dueDate: "",
                          amount: "",
                          job_id: this.job_id,
                          job_application_id: "",
                          created_by : "",
                          created_user_type : "",
                      },
                  ];
              }
          },
          // this fun is for Add milestone
          addMilestone() {
              this.proposal.push({
                  milstone_type: 1,
                  description: "",
                  acceptStatus: 0,
                  dueDate: "",
                  amount: "",
                  job_id: this.job_id,
                  job_application_id:"",
                  created_by : "",
                  created_user_type : "",
              });
          },
          // this fun is for remove milestone
          removeMilestone(_i) {
              this.proposal.splice(_i, 1);
          },
          // this fun is for to get details of
          async getPostDetails() {
              var getData = await this.genericAPIPOSTRequest({
                  requestUrl: "getJobDetail",
                  params: {
                      jobsid: [this.job_id],
                  },
              });
              if (getData.length > 0) {
                  this.jobDetailsWithClientData.jobDetails = getData[0];
                  if (this.jobDetailsWithClientData.jobDetails.preference_questions == "") {
                      this.QuestionCount = false;
                  } else if (this.jobDetailsWithClientData.jobDetails.preference_questions.length > 0) {
                      this.QuestionCount = true;
                      this.questionAnswer = this.jobDetailsWithClientData.jobDetails.preference_questions;
                  }
                  var UserPostedJob = await this.genericAPIPOSTRequest({
                      requestUrl: "getUserPostedJob",
                      params: {
                          filter: "",
                          search: {},
                          user_id: this.jobDetailsWithClientData.jobDetails.user_id,
                      },
                  });
                  if (UserPostedJob != "") {
                      this.jobDetailsWithClientData.clientJobsData = UserPostedJob;
                  }

                  var userDetails = await this.genericAPIPOSTRequest({
                      requestUrl: "user/getUserDetails",
                      params: {
                          user_id: this.jobDetailsWithClientData.jobDetails.user_id,
                      },
                  });
                  if (userDetails) {
                      this.jobDetailsWithClientData.clientFullDetails = userDetails;
                  }

                  var reviewData = await this.genericAPIPOSTRequest({
                      requestUrl: "getUserReviewCal",
                      params: {
                          user_id: this.jobDetailsWithClientData.jobDetails.user_id,
                      },
                  });
                  if (reviewData) {
                      this.jobDetailsWithClientData.clientrating = reviewData;
                  }
              }
              // var apiData ={
              //   'jobsid':[this.job_id]
              // };
              // axios.post(base_url+'api/getJobDetail',apiData,{"headers":this.headToken}).then((response)=>{
              //   if(response.data.status == true){
              //     this.jobDetailsWithClientData.jobDetails =  response.data.result[0];
              //     if(this.jobDetailsWithClientData.jobDetails.preference_questions ==""){
              //       this.QuestionCount = false;
              //     }else if(this.jobDetailsWithClientData.jobDetails.preference_questions.length > 0){
              //       this.QuestionCount = true;
              //       this.questionAnswer=this.jobDetailsWithClientData.jobDetails.preference_questions;
              //     }
              //     // this function is for get Client jobs data
              //     var clientJobsapi = {
              //         "filter": "",
              //         "search": {},
              //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
              //     }
              //     axios.post(base_url+'api/getUserPostedJob',clientJobsapi,{'headers':this.headToken}).then((response)=>{
              //       if (response.data.status==true) {
              //         this.jobDetailsWithClientData.clientJobsData =  response.data.result;
              //       }else{
              //         this.jobDetailsWithClientData.clientJobsData =  [];
              //       }
              //     });

              //     // this function is for get Client details
              //     var clientDetailsapi = {
              //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
              //     }
              //     axios.post(base_url+'api/user/getUserDetails',clientDetailsapi,{headers: this.headToken}).then((response)=>{
              //       if(response.data.status ==  true){
              //         this.jobDetailsWithClientData.clientFullDetails =  response.data.result;
              //       }else{
              //         this.jobDetailsWithClientData.clientFullDetails =  '';
              //       }
              //     });

              //     // this function is for get client rating
              //     var clientRatingsapi = {
              //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
              //     }
              //     axios.post(base_url+'api/getUserReviewCal',clientRatingsapi,{headers: this.headToken}).then((response)=>{
              //       if(response.data.status ==  true){
              //         this.jobDetailsWithClientData.clientrating =  response.data.result;
              //       }else{
              //         this.jobDetailsWithClientData.clientrating =  '';
              //       }
              //     });
              //   }
              // });
          },
          // this fun is for to get milestone data
          async getMilestone() {
              var mileStone = await this.genericAPIPOSTRequest({
                  requestUrl: "getCreatedMilestone",
                  params: {
                      job_id: this.job_id,
                      user_id: this.user_id,
                  },
              });
              if (mileStone.milestone.length > 0) {
                  this.milstoneData = mileStone.milestone;
                  this.mileStoneStatus = false;
              } else {
                  this.milstoneData = "";
                  this.mileStoneStatus = true;
              }
          },
          // this fun is for to get job details
          async getInviteDetails() {
              var res = await this.genericAPIPOSTRequest({
                  requestUrl: "getJobInvitation",
                  params: {
                      job_id: this.job_id,
                  },
              });

              if (res.length > 0 && this.$store.state.accountType == "freelancer") {
                  this.$router.push({ name: this.$store.state.accountType+"invitationDetail", path: "/"+this.$store.state.accountType+"/invitation-detail", params: { pid: "A" + this.encodedid(this.job_id) } }).href;
              }
          },
          
      },
      mounted() {
          // this.$v.$reset();
          // var userdata = localStorage.getItem('loginUserData');
          // userdata = JSON.parse(userdata);
          // this.user_id = userdata.login_master_id;
          this.user_id = this.$store.state.currentUserData.login_master_id;
          // this is header for api
          this.headToken = { Authorization: "Bearer " + this.$store.state.currentUserData.token };

          // this is for get id from url
          // var jobId = this.$route.query.jobDetailsWithClientData;
          this.job_id = this.$route.query.jobDetailsWithClientData;

          this.proposal[0].job_id = this.job_id;
          this.getInviteDetails();
          // this function is for get post details
          this.getPostDetails();
          // this fun is for to check milestone data
          this.getMilestone();
         if(this.$store.state.accountType == 'freelancer'){
          this.getAssociateWithagency();
         }else{
          this.getAssociatedFreelancer();
         }
      },
      watch: {
          group() {
              this.drawer = false;
          },
      },
  };
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
      .col-md-9 {
          width: 100% !important;
      }
      .freelancer-job-detail .tags {
          display: inline-block !important;
      }
      .freelancer-job-detail .tags li {
          display: inline-block !important;
      }
  }
  .attachment .fa-file {
      border: 1px dashed #6666664d;
      padding: 9px;
      border-radius: 4px;
      color: #666;
  }
  body {
      font-family: "Source Sans Pro", sans-serif !important;
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
  .br-20 {
      border-radius: 20px;
  }
  .border-none {
      border: 0px !important;
  }
  .search-bar .input-group-text {
      border-left: 0px !important;
  }
  .freelancer-wrap .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
      background-color: #fff !important;
      color: #f2613b !important;
      font-weight: 600;
      border-bottom: 3px solid #f2613b;
      border-radius: 0px;
  }
  .freelancer-wrap .nav-pills .badge {
      border-radius: 50%;
      padding: 8px 7px;
      background-color: #eee;
      color: #000;
  }
  .freelancer-wrap .nav-pills .nav-link {
      color: #999999;
      font-weight: 600;
  }
  .freelancer-wrap .nav-pills .nav-link:hover {
      color: #f2613b !important;
      font-weight: 600;
  }
  .freelancer-wrap .nav-pills .nav-link.active .badge,
  .nav-pills .show > .nav-link .badge {
      background-color: #f2613b !important;
      border-radius: 50%;
      font-size: 10px !important;
      padding: 7px 6px;
      color: #fff !important;
  }
  .freelancer-wrap .post {
      margin-left: -32px;
  }
  .freelancer-wrap .post li {
      font-size: 14px;
  }
  .freelancer-wrap .tags li {
      background: #fcfcfc;
      border: 1px solid #f2613c;
      border-radius: 100px;
      padding: 2px 15px;
  }
  .freelancer-wrap .job-card {
      border-bottom: 1px solid #eee;
      padding-bottom: 50px;
      margin-bottom: 50px;
  }
  .freelancer-wrap .job-card:last-child {
      border-bottom: 0px;
  }
  .freelancer-wrap .br-50 {
      border-radius: 50% !important;
  }
  .freelancer-wrap .btn-like {
      padding: 10px !important;
  }
  .freelancer-wrap .btn-archive {
      padding: 10px 13px !important;
  }
  .freelancer-wrap .action-btn {
      position: absolute;
      right: 25px;
  }
  .freelancer-wrap .fz-14 {
      font-size: 14px;
  }
  .freelancer-wrap .profile .img-holder {
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      width: 100px;
      height: 100px;
      margin: 0 auto;
  }
  .freelancer-wrap .profile .img-holder img {
      object-fit: scale-down;
      width: 100%;
      height: 100%;
  }
  .freelancer-wrap .profile span {
      position: absolute;
      background-color: #72e55f;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #2dca14;
      right: -5px;
      top: 17px;
  }
  .freelancer-wrap .card {
      border-radius: 20px !important;
  }
  .freelancer-wrap .card-body {
      border-radius: 20px;
  }
  .freelancer-wrap .like-jobs .card {
      border-radius: 20px 20px 0 0 !important;
  }
  .freelancer-wrap .like-jobs .card-header {
      border-radius: 20px 20px 0 0 !important;
  }
  .freelancer-wrap .like-jobs .card-body {
      border-radius: 0 0 20px 20px !important;
      border: 0px;
  }
  .freelancer-wrap .card-body {
      border-radius: 0 0 20px 20px;
  }
  .freelancer-wrap .card-header {
      border-radius: 20px 20px 0 0 !important;
  }
  .freelancer-wrap .my-proposal ul {
      margin-left: -32px;
  }
  .freelancer-wrap a {
      text-decoration: none;
  }
  .fz-16 {
      font-size: 16px;
  }
  .fz-18 {
      font-size: 18px;
  }
  .fw-600 {
      font-weight: 600;
  }
  .available-span {
      background: #fcfcfc;
      border: 1px solid #f2613c;
      border-radius: 100px;
      padding: 6px 12px;
      color: #f2613c;
      font-size: 16px;
  }
  .freelancer-job-detail .card-body {
      padding: 0px 11px;
  }
  .last-child {
      border-radius: 0 0 0 20px;
  }
  .mb-23 {
      margin-bottom: 23px;
  }
  .star-rating {
      display: flex;
      font-size: 1.5em;
      justify-content: space-between;
      padding: 0;
      text-align: center;
      width: 6em;
  }
  .star-rating input {
      display: none;
  }
  .star-rating label {
      color: #d4d5cf;
  }
  .star-rating label.active {
      color: #ff8e3c;
  }
  .about-wrapper input ~ label:before {
      display: none;
  }
  .r-about {
      color: #979797;
  }
  .no-bottom-border {
      border-bottom: 0px !important;
  }
  .similar-jobs {
      margin-left: -32px;
  }
  .border-top-0 {
      border-top: 0px !important;
  }
  .py-13 {
      padding-top: 3.2rem;
      padding-bottom: 3.2rem;
  }
  .table .last-child {
      border-top: 1px solid #adb1b6 !important;
  }
  .table > :not(:first-child) {
      border-top: 0px !important;
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
  .inline-block {
      display: inline-block;
  }
  .inline-flex {
      display: inline-flex;
  }
  .hide {
      display: none;
  }
  .answer_error {
      color: red;
  }
  .table-milestone tr th {
      background-color: transparent !important;
      color: #000;
      border: 0px !important;
  }
  .table > :not(caption) > * > * {
      border-bottom-width: 0px !important;
  }
</style>
