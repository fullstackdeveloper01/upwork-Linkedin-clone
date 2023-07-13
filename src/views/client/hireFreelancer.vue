<template>
    <b-container>
      <b-row class="mt-100 hire-wrap">
        <b-col xl="12" lg="12" sm="12">
          <div class="d-flex align-items-center w-100 mb-4">
            <div>
              <h4 class="fz-24 fw-600 text-black">Send an Offer</h4>
            </div>
            <div class="ml-auto d-flex align-items-center">
              <!-- <b-button class="btn btn-theme">Back</b-button> -->
            </div>
          </div>
          <b-card no-body>
            <div class="view-wrapper mb-4">
              <div class="px-4 py-4 hire-profile-wrap border-bottom">
                <div class="d-md-flex align-items-normal">
                  <div class="img-wrapper mt-3">
                    <img :src="userDetails.profile_picture_path_url" class="img-fluid mr-2">
                    <span class="dot"></span>
                  </div>
                  <div class="ml-6 ml-sm-0 mt-sm-4 width-80">
                    <a href="javascript:void(0);" class="text-theme"><h4>{{userDetails.first_name+' '+userDetails.last_name}}</h4></a>
                    <h5>{{userDetails.tagline}}</h5>
                    <!-- <p >{{userDetails.about_self_desc}}</p> -->
                    <div class="hire-profile-details d-flex align-items-flex-start ml-2 ml-sm-0 mt-8">
                      <div class="d-flex align-items-center mr-6">
                        <img :src="$store.state.baseUrlImg+'/upload/location.png'" class="img-fluid mr-2 w-12">
                        <h5 class="mb-0">{{userDetails.country_name+', '+userDetails.state_name+', '+userDetails.city_name}}</h5>
                        <!-- <h6>1:26 pm local time</h6> -->
                      </div>
                      <div class="d-flex align-items-center">
                        <img :src="$store.state.baseUrlImg+'/upload/job-success.png'" class="img-fluid mr-2 w-12">
                        <h5 class="mb-0">{{userDetails.jobSuccessRate}}% Job Success</h5>
                      </div>
                      <!-- <div class="d-flex align-items-center">
                        <img :src="$store.state.baseUrlImg+'/upload/top-rated.png'" class="img-fluid w-12 mr-2">
                        <h5 class="mb-0">Top Rated Plus</h5>
                      </div> -->
                    </div>
                  </div>
                </div><hr>
                <div class="d-flex align-items-normal border br-20 p-2 mt-4" v-for="(ass, index) in userDetails.associated" :key="index">
                  <div>
                    <div class="shadow-lg">
                      <img :src="ass.profile_picture_path" alt="" class="rounded-md shadow w-10 h-10">
                    </div>
                  </div>
                  <div class="ml-2">
                    <h6 class="text-black fw-600 mb-1">Associated with</h6>
                    <p class="mb-0 fz-14 text-muted">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</p>
                    <!-- <p class="mb-0 fz-14 text-muted"><a :href="$router.resolve({name:'agencyPublicProfile', path:'/agency-public-profile', params:{uid:encodedid(ass.login_master_id)}}).href" target="_blank">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</a></p> -->
                  </div>
                </div>
              </div>
            </div>
          </b-card>
          <b-card no-body>
            <div class="view-wrapper mb-4">
                <div class="view-wrapper mb-4">
                <div>
                  <div class="header px-4 py-4">
                    <div class="d-flex align-items-center w-100">
                      <div>
                        <h4 class="fz-24 fw-600 text-black mb-0">Job Details</h4>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4">
                    <div>
                        <!-- <label class="fz-18 fw-600 mb-2">Hiring Team</label><br />
                        <b-form-select
                            v-model="hiringdata.team_id"
                            :options="teamData"
                            text-field="name"
                            value-field="id"
                            class="mb-4"
                            disabled=""
                            :error-messages="hiringdataTeamError"
                            @input="$v.hiringdata.team_id.$touch()"
                            @blur="$v.hiringdata.team_id.$touch()"
                        ></b-form-select>
                        <div class="error" v-if="hiringdataTeamError[0]">{{hiringdataTeamError[0]}}</div> -->

                        <!-- <br /> -->
                        <label class="fz-18 fw-600 mb-2">Job Posting</label><br />
                        <b-form-select
                            v-model="hiringdata.job_id"
                            :options="postJobList"
                            text-field="job_title"
                            value-field="jobs_id"
                            class="mb-4"
                            disaled="true"
                            @change="getContractDetails()"
                            :error-messages="hiringdataJobError"
                            @input="$v.hiringdata.job_id.$touch()"
                            @blur="$v.hiringdata.job_id.$touch()"
                        ></b-form-select>
                        <div class="error" v-if="hiringdataJobError[0]">{{hiringdataJobError[0]}}</div>
                        <br />
                        <label class="fz-18 fw-600 mb-2">Contract Title</label><br />
                        <b-form-input
                            v-model="hiringdata.contract_title"
                            class="mb-4"
                            disaled="true"
                            :error-messages="hiringdataContractError"
                            @input="$v.hiringdata.contract_title.$touch()"
                            @blur="$v.hiringdata.contract_title.$touch()"
                        ></b-form-input>
                        <div class="error" v-if="hiringdataContractError[0]">{{hiringdataContractError[0]}}</div>

                    </div>
                  </div>
                </div>
            </div>
            </div>
          </b-card>
          <form @submit.prevent="submitProposal" v-if="hiringdata.job_id !='' && showForm">
            <b-card no-body>
              <div class="view-wrapper mb-4">
                <div>
                  <div class="header px-4 py-4">
                    <div class="d-flex align-items-center w-100">
                      <div>
                        <h4 class="fz-24 fw-600 text-black mb-0">Contract Terms</h4>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4">
                    <h4 class="fz-18 fw-500 text-black mb-4">You're protected by <a href="javascript:void(0);" class="text-theme">Qapin Payment Protection.</a> Only pay for the work you authorize.</h4>
  
                    <h4 class="fz-20 fw-600 d-flex align-items-center cursor-pointer">Payment Option <span class="ml-2" @click="(projectTypestatus == true)?projectTypestatus=false:projectTypestatus=true" v-if="canEditMilestone"><PencilEditIcon /></span></h4>
                    <h4 class="fz-18 fw-600 mb-4" >{{(projectType == 1) ? 'Month Wise':'Day Wise'}}</h4>
                    <!-- <h4 class="fz-20 fw-600 mb-4">{{(proposalData[0].milstone_type == 1) ? 'Month Wise':'Day Wise'}}<PencilEditIcon /></h4> -->
                    <b-form-group class="form-group budget-wrapper" v-if="projectTypestatus">
                      <b-row>
                        <b-col xl="3" lg="3" sm="12">
                          <b-form-radio v-model="projectType" name="budget" value="0" v-on:change="selectPaid('one')">
                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="34" cy="34" r="34" fill="#F8F8F8"/>
                              <path d="M39.7012 36.8258L35.2395 33.4796V26.6632C35.2395 25.9778 34.6855 25.4238 34.0001 25.4238C33.3147 25.4238 32.7607 25.9778 32.7607 26.6632V34.0993C32.7607 34.4897 32.9442 34.8578 33.2565 35.0908L38.2139 38.8089C38.4369 38.9762 38.6972 39.0568 38.9562 39.0568C39.3342 39.0568 39.7061 38.887 39.949 38.5598C40.3606 38.0131 40.249 37.2361 39.7012 36.8258Z" fill="#F2613C"/>
                              <path d="M34 18C25.1771 18 18 25.1771 18 34C18 42.8229 25.1771 50 34 50C42.8229 50 50 42.8229 50 34C50 25.1771 42.8229 18 34 18ZM34 47.5213C26.5453 47.5213 20.4787 41.4547 20.4787 34C20.4787 26.5453 26.5453 20.4787 34 20.4787C41.4559 20.4787 47.5213 26.5453 47.5213 34C47.5213 41.4547 41.4547 47.5213 34 47.5213Z" fill="#F2613C"/>
                            </svg>
                            <!-- by project == day wise -->
                            <h5 class="fz-18 fw-500 text-black ml-4"><b>Day Wise</b></h5>
                          </b-form-radio>
                        </b-col>
                        <b-col xl="3" lg="3" sm="12">
                          <b-form-radio v-model="projectType" name="budget" value="1" v-on:change="selectPaid('two')"> 
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
                            <!-- by milestone == month wise -->
                            <h5 class="fz-18 fw-500 text-black ml-4"><b>Month Wise</b></h5>
                          </b-form-radio>
                        </b-col>
                      </b-row>
                      <hr>
                    </b-form-group>
  
                    <h4 class="fz-18 fw-600">Pay a {{(projectType == 1) ? 'Month Wise':'Day Wise'}} for your project</h4>
                    <h4 class="fz-20 fw-600 mb-4">${{totalAmount}}</h4>
  
                    <p class="fz-16 fw-600 mb-4 text-muted">This is the price you and {{userDetails.first_name+' '+userDetails.last_name}} have agreed upon</p>
  
                    <hr>
  
                    <h4 class="fz-20 fw-600 mb-2">Project Milestones</h4>
                    <p class="fz-18 fw-500 mb-4 text-muted">Add project milestones and pay in installments as each milestone is completed to your satisfaction. Due dates will be set in Coordinated universal Time (UTC).</p>
  
                    <div class="milestone-table table-responsive table-milestone no-border">
                      <table class="table no-border">
                        <tbody class="no-border">
                          <tr>
                            <!-- <th></th> -->
                            <th>Milestone Description</th>
                            <th>Due Date</th>
                            <th>Deposit Amount</th>
                            <th></th>
                          </tr>
                          <tr v-for="(milestone, ids) in $v.proposalData.$each.$iter" :key="ids">
                            <!-- <td>
                              {{ids}}
                            </td> -->
                            <td>
                              <b-form-group>
                                <b-form-input
                                v-model.trim="milestone.description.$model"
                                class="w-100"
                                @input="$v.proposalData.$each[ids].description.$touch()"
                                @blur="$v.proposalData.$each[ids].description.$touch()"
                                @keyup="milstoneChangestatus=false"
                                @keypress="milstoneChangestatus=false"
                                maxlength="200"
                                ></b-form-input>
                              </b-form-group>
                              <div class="error"  v-if="errorMessageshow && !milestone.description.required">Description is required.</div>
                              <!-- <div class="error"  v-if="!milestone.description.minLength">Minimum 50 Charachter Required.</div> -->
                              <div class="error"  v-if="errorMessageshow && !milestone.description.maxLength">Maximum 200 Charachter Allow Required.</div>
                            </td>
                            <td>
                              <b-form-group>
                                <b-form-datepicker
                                v-model.trim="milestone.dueDate.$model"
                                @input="$v.proposalData.$each[ids].dueDate.$touch(),milstoneChangestatus=false"
                                @blur="$v.proposalData.$each[ids].dueDate.$touch()"
                                required
                                :placeholder="milestone.dueDates.$model" class="mb-2"
                                :min="new Date().toISOString().substr(0, 10)"
                                ></b-form-datepicker>
                              </b-form-group>
                              <div class="error"  v-if="errorMessageshow && !milestone.dueDate.required">Due Date is required.</div>
  
                            </td>
                            <td>
                              <b-input-group size="md" prepend="$">
                                <b-form-input
                                v-model.trim="milestone.amount.$model"
                                @input="$v.proposalData.$each[ids].amount.$touch()"
                                @blur="$v.proposalData.$each[ids].amount.$touch()"
                                oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"
                                @keyup="milstoneChangestatus=false"
                                maxlength="10"
                                minlength="1"
                                autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" ></b-form-input>
                              </b-input-group>
                              <div class="error"  v-if="errorMessageshow && !milestone.amount.required">Minimum $1 is required.</div>
                              <div class="error"  v-if="errorMessageshow && !milestone.amount.between">Minimum $1 Value is required.</div>
  
                            </td>
                            <td v-if="canEditMilestone && projectType == 1 ">
                              <button type="button" class=" btn btn-theme mr-4 btn-secondary" v-if="ids == 0" v-on:click="addMilestone()">Add</button>
                              <button type="button" class=" btn btn-theme mr-4 btn-secondary" v-if="ids > 0" v-on:click="removeMilestone(ids)">Remove</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- <a href="javascript:void(0);" class="text-theme mt-3"><i class="fa fa-plus" aria-hidden="true" v-on:click="addMilestone()"> Add Milestone</i></a> -->
                  </div>
                  <div class="footer px-4 py-4">
                    <div class="d-flex align-items-center">
                      <b-button v-b-toggle.collapse-1 variant="primary">How do fixed price contracts work?</b-button>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down rotate" aria-hidden="true"></i>
                      </div>
                    </div>
                    <b-collapse id="collapse-1" class="mt-2">
                      <b-card>
                        <p class="card-text">Before work begins, agree on milestones with your freelancer. Milestones help to break up larger projects into manageable chunks. Pre-fund milestones by depositing money into escrow. Once the work has been delivered, you can release your payment to the freelancer.</p>
                        <p class="card-text">Over the course of the contract, your freelancer will submit milestones for review and the funds in escrow will be released upon your approval. Failing to respond to a milestone submission within 14 days is deemed approval and the escrowed funds will be automatically released to your freelancer.</p>
                      </b-card>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </b-card>
            <b-card no-body>
              <div class="view-wrapper mb-4">
                <div>
                  <div class="header px-4 py-4">
                    <div class="d-flex align-items-center w-100">
                      <div>
                        <h4 class="fz-24 fw-600 text-black mb-0">Work Description</h4>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4">
                    <div class="contract-title-wrap">
                      <div class="d-md-flex align-items-center">
                        <h4 class="fz-20 fw-600">Add a description of the work</h4>
                        <div class="ml-auto">
                          <a href="javascript:void(0);" @click="desEdit = (desEdit==true)?false:true">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5312 20.5527C16.1345 20.5527 15.8125 20.2447 15.8125 19.8652C15.8125 19.4857 16.1345 19.1777 16.5312 19.1777H16.532C16.532 18.7982 16.8532 18.4902 17.2504 18.4902C17.6475 18.4902 17.9688 18.7982 17.9688 19.1777C17.9688 19.936 17.324 20.5527 16.5312 20.5527Z" fill="#F2613C"></path><path d="M17.25 19.8638C16.8532 19.8638 16.5312 19.5558 16.5312 19.1763V12.4336C16.5312 12.0541 16.8532 11.7461 17.25 11.7461C17.6467 11.7461 17.9688 12.0541 17.9688 12.4336V19.1763C17.9688 19.5558 17.6467 19.8638 17.25 19.8638Z" fill="#F2613C"></path><path d="M16.5312 20.5527H3.59375C3.197 20.5527 2.875 20.2447 2.875 19.8652C2.875 19.4857 3.197 19.1777 3.59375 19.1777H16.5312C16.928 19.1777 17.25 19.4857 17.25 19.8652C17.25 20.2447 16.928 20.5527 16.5312 20.5527Z" fill="#F2613C"></path><path d="M3.59375 20.5527C2.80097 20.5527 2.15625 19.936 2.15625 19.1777C2.15625 18.7982 2.47825 18.4902 2.875 18.4902C3.27175 18.4902 3.59375 18.7982 3.59375 19.1777V19.1788C3.9905 19.1788 4.3125 19.4861 4.3125 19.8656C4.3125 20.2451 3.9905 20.5527 3.59375 20.5527Z" fill="#F2613C"></path><path d="M2.875 19.8652C2.47825 19.8652 2.15625 19.5572 2.15625 19.1777V6.80273C2.15625 6.42323 2.47825 6.11523 2.875 6.11523C3.27175 6.11523 3.59375 6.42323 3.59375 6.80273V19.1777C3.59375 19.5572 3.27175 19.8652 2.875 19.8652Z" fill="#F2613C"></path><path d="M2.87464 7.49023C2.47753 7.49023 2.15625 7.18223 2.15625 6.80273C2.15625 6.04442 2.80097 5.42773 3.59375 5.42773C3.9905 5.42773 4.3125 5.73573 4.3125 6.11523C4.3125 6.49473 3.9905 6.80273 3.59375 6.80273H3.59303C3.59303 7.18223 3.27175 7.49023 2.87464 7.49023Z" fill="#F2613C"></path><path d="M10.6429 6.80273H3.59375C3.197 6.80273 2.875 6.49473 2.875 6.11523C2.875 5.73573 3.197 5.42773 3.59375 5.42773H10.6429C11.0396 5.42773 11.3616 5.73573 11.3616 6.11523C11.3616 6.49473 11.04 6.80273 10.6429 6.80273Z" fill="#F2613C"></path><path d="M10.0351 11.271C9.85107 11.271 9.66707 11.204 9.52691 11.0696C9.24624 10.8011 9.24624 10.3659 9.52691 10.0975L16.5466 3.38299C16.8269 3.11452 17.2826 3.11452 17.5629 3.38299C17.8436 3.65146 17.8436 4.08665 17.5629 4.35512L10.5432 11.0696C10.4031 11.204 10.2187 11.271 10.0351 11.271Z" fill="#F2613C"></path><path d="M9.34447 14.3644C9.29451 14.3644 9.24384 14.3596 9.19317 14.3489C8.80505 14.2695 8.5578 13.9038 8.64117 13.5329L9.33512 10.4384C9.41814 10.0668 9.80123 9.8293 10.1886 9.91042C10.5768 9.98983 10.824 10.3556 10.7406 10.7265L10.0467 13.8209C9.97409 14.1437 9.67617 14.3644 9.34447 14.3644Z" fill="#F2613C"></path><path d="M12.578 13.7007C12.394 13.7007 12.21 13.6337 12.0699 13.4993C11.7892 13.2308 11.7892 12.7956 12.0699 12.5272L19.0895 5.81268C19.3699 5.54421 19.8255 5.54421 20.1059 5.81268C20.3865 6.08115 20.3865 6.51634 20.1059 6.78481L13.0862 13.4993C12.946 13.6337 12.762 13.7007 12.578 13.7007Z" fill="#F2613C"></path><path d="M9.34328 14.365C9.01158 14.365 8.71366 14.1443 8.64106 13.8219C8.55805 13.4506 8.80494 13.0849 9.19307 13.0055L12.4282 12.3414C12.8152 12.2626 13.1983 12.4978 13.2817 12.869C13.3647 13.2403 13.1178 13.606 12.7297 13.6854L9.49458 14.3496C9.44391 14.3599 9.39324 14.365 9.34328 14.365Z" fill="#F2613C"></path><path d="M18.3262 8.20205C18.1422 8.20205 17.9582 8.13502 17.818 8.00062L15.2769 5.56996C14.9962 5.30149 14.9962 4.8663 15.2769 4.59784C15.5572 4.32937 16.0129 4.32937 16.2932 4.59784L18.8344 7.02849C19.115 7.29696 19.115 7.73215 18.8344 8.00062C18.6942 8.13502 18.5102 8.20205 18.3262 8.20205Z" fill="#F2613C"></path><path d="M19.5965 6.98597C19.4125 6.98597 19.2285 6.91894 19.0879 6.78453C18.8073 6.51606 18.8073 6.08053 19.0879 5.81206C19.287 5.62197 19.3966 5.36278 19.3966 5.08331C19.3966 4.80384 19.287 4.54466 19.0879 4.35456C18.689 3.97266 17.9613 3.973 17.5631 4.35422C17.2824 4.62269 16.8275 4.62269 16.5464 4.35456C16.2658 4.08609 16.2658 3.65056 16.5464 3.38209C17.0172 2.93144 17.649 2.68359 18.3253 2.68359C19.0017 2.68359 19.6338 2.93178 20.1042 3.38209C20.5747 3.83206 20.8338 4.43603 20.8338 5.08331C20.8338 5.73059 20.5747 6.33491 20.1039 6.78488C19.9644 6.91894 19.7805 6.98597 19.5965 6.98597Z" fill="#F2613C"></path></svg>
                          </a>
                        </div>
                      </div>
                    
                      <span class="fz-18 fw-400 mb-4 text-black text-muted" v-if="!desEdit" v-html="hiringdata.description"></span>
                      <b-form-textarea
                      v-else
                      id="textarea"
                      v-model="hiringdata.description"
                      placeholder="Write somthing here..."
                      rows="3"
                      max-rows="6"
                      :error-messages="hiringdataDescriptionError"
                      @input="$v.hiringdata.description.$touch()"
                      @blur="$v.hiringdata.description.$touch()"
                      ></b-form-textarea>
                      <div class="error" v-if="hiringdataDescriptionError[0]">{{hiringdataDescriptionError[0]}}</div>
                    </div>
                    <div class="contarct-description-wrapper">
                      <div class="d-md-flex align-items-center">
                        <div>
                          <input id="fileUpload" hidden type="file" @change="UploadFile" accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf" name="upload">
                          <b-button class="btn btn-outline-theme d-flex align-items-center mt-3" @click="chooseFiles()">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                              <path d="M16.3146 1.67902C14.0712 -0.559672 10.4208 -0.559672 8.17702 1.67902L1.20173 8.63942C-0.400663 10.2386 -0.400558 12.8405 1.20194 14.4396C2.00325 15.2392 3.05548 15.639 4.10813 15.6389C5.1605 15.6388 6.21329 15.2391 7.01447 14.4396L13.4083 8.05921C13.8741 7.59445 14.1307 6.97649 14.1307 6.31921C14.1307 5.66188 13.8743 5.04396 13.4084 4.57906C12.4468 3.61962 10.8822 3.61965 9.9208 4.57924L5.73949 8.75154C5.41848 9.07184 5.41848 9.59122 5.73942 9.91158C6.0604 10.232 6.58088 10.2319 6.90193 9.91158L11.0833 5.73924C11.4038 5.4194 11.9252 5.41933 12.2458 5.73917C12.401 5.89409 12.4866 6.10009 12.4866 6.31917C12.4866 6.53825 12.4011 6.74418 12.2458 6.89917L5.85195 13.2795C4.89039 14.2389 3.32594 14.2391 2.36445 13.2796C1.40296 12.3201 1.40289 10.7589 2.36427 9.79936L9.33953 2.83905C10.9422 1.2399 13.5497 1.2399 15.1521 2.83905C15.9284 3.61365 16.356 4.64361 16.356 5.7391C16.356 6.83459 15.9284 7.86454 15.1521 8.63921L8.17691 15.5997C7.85593 15.9201 7.85593 16.4394 8.17698 16.7598C8.3375 16.92 8.54788 17 8.75822 17C8.96859 17 9.17897 16.9199 9.33949 16.7598L16.3145 9.79929C17.4014 8.71481 18 7.27289 18 5.73913C18 4.20541 17.4014 2.76349 16.3146 1.67902Z" fill="#F2613C"/>
                            </svg>
                            AttachFile
                          </b-button>
                        </div>
                        <div class="d-flex align-items-center">
                          <ul  class="ml-2 mt-4 attachment "  v-if="userJobApply.length > 0 || jobDetails.attachment" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                            <i class="fa fa-file border-none"></i>
                            <li class="attatchment-wrap mr-5 mb-2" v-for="(uattc, index) in jobDetails.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                              <a :href="jobDetails.attachmentUrl+uattc" target="_blank"><span class="ml-2 text-theme">{{uattc}}</span></a>
                              <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index,'jobAttachment')"></i>
                            </li>
                            <li class="attatchment-wrap mr-5 mb-2" v-for="(attc, indexs) in userJobApply" :key="indexs" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                              <a :href="jobDetails.attachmentUrl+attc.name" target="_blank"><span class="ml-2 text-theme">{{attc.name}}</span></a>
                              <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(indexs,'contractAttachment')"></i>
                            </li>
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
            <b-card no-body>
              <div class="view-wrapper mb-4">
                <div>
                  <div class="px-4 py-4">
                    <b-form-group class="d-flex align-items-center">
                      <b-form-checkbox
                        v-model="hiringdata.privacyoptions"
                        value="1"
                        class="d-flex align-items-center terms-checkbox"
                        required
                        @change="CheckTermsCondition()"
                        :error-messages="hiringdataPolicyError"
                        @input="$v.hiringdata.privacyoptions.$touch()"
                        @blur="$v.hiringdata.privacyoptions.$touch()"
                      >
                        Yes, I understand & agree to the Qapin Terms of Service, including the &nbsp;<a href="javascript:void(0);" class="text-theme"> User Agreement  &nbsp;</a> and &nbsp;<a href="javascript:void(0);" class="text-theme"> Privacy Policy.</a>
                      </b-form-checkbox>
                      <div class="error" v-if="hiringdataPolicyError[0]">{{hiringdataPolicyError[0]}}</div>
                    </b-form-group>
  
                  </div>
                  <div class="footer px-4 py-4">
                    <div class="text-right">
                      <a href="javascript:void(0);" class="text-theme mr-4" @click="closeWindow()">Cancel</a>
                      <span v-if="canEditMilestone">
                        <!-- <b-button class="btn btn-theme" v-if="milstoneChangestatus" @click="SendOffer(7)">Accept</b-button> -->
                        <b-button type="submit" class="btn btn-theme">Send</b-button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </template>
  <script>
    import { mapActions } from "vuex";
    import { validationMixin } from 'vuelidate';
    import { required, maxLength, between} from 'vuelidate/lib/validators';
    import PencilEditIcon from "@/components/icons/PencilEditIcon.vue"; 
    export default {
      mixins: [validationMixin],
      data() {
        return {
            teamData:[
                {'id':this.$store.state.currentUserData.login_master_id,'name':this.$store.state.currentUserData.first_name+' '+this.$store.state.currentUserData.last_name}
            ],
            hiringdata:{
                team_id:this.$store.state.currentUserData.login_master_id,
                job_id:'',
                contract_title:'',
                description:'',
                privacyoptions:'',
                attachment:[],
            },
            jobDetails:[],
            proposalData:[],
            user_id:'',
            job_id:'',
            projectTypestatus:false,
            projectType:0,
            userDetails:'',
            milstoneChangestatus:true,
            term_condition:false,
            canEditMilestone:true,
            userJobApply:[],
            desEdit:false,
            errorMessageshow:false,
            postJobList:[],
            POID_data:'',
            showForm:false,
        }
      },
      validations: { 
          proposalData: {
            $each: {
              description:{ 
                required,
                maxLength: maxLength(200),
              },
              amount:{ 
                required,
                maxLength: maxLength(10),
                between:between(1 , 1000000000)
              },
              dueDate:{ required },
              dueDates:{},
            }
          },
          hiringdata:{
            team_id:{ required },
            job_id:{ required },
            contract_title:{ required },
            description:{ required },
            privacyoptions:{ required },
          },
      },
      components:{
        PencilEditIcon
      },
      computed:{
        hiringdataTeamError() {
          const errors = [];
          if (!this.$v.hiringdata.team_id.$dirty) return errors;
          !this.$v.hiringdata.team_id.required && errors.push("Please Select Team is required");
          return errors;
        },
        hiringdataJobError() {
          const errors = [];
          if (!this.$v.hiringdata.job_id.$dirty) return errors;
          !this.$v.hiringdata.job_id.required && errors.push("Please Select Job is required");
          return errors;
        },
        hiringdataContractError() {
          const errors = [];
          if (!this.$v.hiringdata.contract_title.$dirty) return errors;
          !this.$v.hiringdata.contract_title.required && errors.push("Contract Title is required");
          return errors;
        },
        hiringdataDescriptionError() {
          const errors = [];
          if (!this.$v.hiringdata.description.$dirty) return errors;
          !this.$v.hiringdata.description.required && errors.push("Description is required");
          return errors;
        },
        hiringdataPolicyError() {
          const errors = [];
          if (!this.$v.hiringdata.privacyoptions.$dirty) return errors;
          !this.$v.hiringdata.privacyoptions.required && errors.push("Terms & Policy is required");
          return errors;
        },
        // this fun is for to calculate total amount
        totalAmount(){
          let sum = parseInt(0);
          this.proposalData.filter((item) => {
            if(item["amount"]==""){
              return 0;
            }
            sum = parseInt(sum) + parseInt(item["amount"])
          });
          return sum;
        },
        
      },
      methods:{
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to get contract title from job list
        async getContractDetails(){
            var that =this;
            that.postJobList.filter((data)=>{
                if(data.jobs_id == that.hiringdata.job_id){
                    that.hiringdata.contract_title = data.job_title;
                    that.POID_data=data.uniq_id;
                    return false;
                }
            })
            var getPostedData = await this.genericAPIPOSTRequest({
                requestUrl: "getJobDetails_new",
                params: {
                  'poid':this.POID_data,
                  'user_id':this.$store.state.currentUserData.login_master_id,
                },
            });
          if (getPostedData.length > 0 ) {
            this.jobDetails = getPostedData[0];
            this.hiringdata.description = this.jobDetails.scope_of_work;
            this.job_id= this.jobDetails.jobs_id;
            this.getMilestonedetails();
          }
        },
        //this fun is for to get milestone data
        async getMilestonedetails(){
          var getMilestoneData = await this.genericAPIPOSTRequest({
                requestUrl: "getCreatedMilestone",
                params: {
                  "job_id": this.job_id,
                  "user_id": this.user_id
                },
            });
          if (getMilestoneData.milestone.length > 0 ) {
            this.showForm = false;
            this.$toastr.e('already Offer Sent');
            this.proposalData=[];
          }else{
            this.showForm=true;
            this.proposalData.push({
              milstone_type: this.projectType,
              description:'',
              acceptStatus: 7,
              dueDate:'',
              amount:'',
              job_id: this.job_id,
              user_id: this.user_id,
              created_by:this.$store.state.currentUserData.login_master_id,
            });
          }
        },
        // this fun is for to get posted Jobs
        async getpostedJobs() {
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getUserPostedJob",
                params: {'filter':1},
            }); 
            if(res.length > 0){
              this.postJobList = res;
            } else{
              this.$toastr.e('No Post Job Found');
              this.$router.push({name:'post-job',path:'/client/post-job/',params:{pid:'POID'}});
            }
        },
        
        // this fun is for to =remove attachment
        removeAttachment(_i,type){
          // alert('asdas')
          if (type == 'jobAttachment') {
            this.jobDetails.attachment.splice(_i,1);
            document.getElementById("fileUpload").value = "";
          } else {
            this.userJobApply.splice(_i,1);
            document.getElementById("fileUpload").value = "";
          }
          
        },
        // this fun is for to close window
        closeWindow(){
          window.top.close();
        },
        // this fun is for to check term &condition
        CheckTermsCondition(){
          if(this.hiringdata.privacyoptions != 1) this.term_condition=true;
          else this.term_condition=false;
        },
        // this fun is for to choose file
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        // this fun is for to upload files
        async UploadFile(e){ 
          var files=e.target.files[0];
          var ext = files.name.split('.').pop();
          if(ext=="pdf" || ext=="word" || ext=="png"|| ext=="jpeg"|| ext=="jpg"){
            const fileSize = files.size / 1024 / 1024; // in MiB
            if ( fileSize <= 40) {
            // if (fileSize >= 2 && fileSize <= 40) {
              const formData = new FormData();
              formData.append('image', files);
              // formData.append('user_id', this.user_id);
              formData.append('jobs_id', this.job_id);
              var getData = await this.genericAPIPOSTRequest({
                  requestUrl: "milestone/uplaodData",
                  params: formData,
              });
              if(getData.filename!=""){
                this.userJobApply.push({'name':getData.name})
                // this.UploadedFileName.push(getData.filename)
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
          document.getElementById("fileUpload").value = "";
        },
        // this fun is for update milstone
        async submitProposal() {
          this.errorMessageshow = true;
          this.$v.hiringdata.$touch(); 
          this.$v.proposalData.$touch(); 
          if (!this.$v.proposalData.$invalid && !this.$v.hiringdata.$invalid) {
            var jobAttachments = this.jobDetails.attachment;
            var response = await this.genericAPIPOSTRequest({
                requestUrl: "hireFreelancer",
                params: {
                  "jobData": {
                    jobs_id:this.job_id,
                    user_id:this.user_id,
                    created_by: this.$store.state.currentUserData.login_master_id,
                    created_user_type:this.$store.state.accountType,
                    cost:this.totalAmount,
                    paid_type:(this.projectType==0)?'project':'milstone',
                    application_status:7,
                  }
                }
            });
            if (response!='') {
              var res = await this.genericAPIPOSTRequest({
                requestUrl: "addUpdateMilestoneNew",
                params: {
                    milestone : this.proposalData,
                    data: this.getLoginUserIdRequest(),
                  }
              });
              if (res) {
                var jobAttachment=[];
                this.jobDetails.attachment.filter(data=>{
                  jobAttachment.push(data);
                })
                this.userJobApply.filter(data=>{
                  jobAttachment.push(data.name);
                })
                await this.genericAPIPOSTRequest({
                  requestUrl: "addupdateUser_job_apply",
                  params: {
                      "from_user_id": this.$store.state.currentUserData.login_master_id,
                      "job_application_id" : response,
                      "job_id" : this.hiringdata.job_id,
                      "title" : this.hiringdata.contract_title,
                      "description" : this.hiringdata.description,
                      "attachment" : jobAttachment,
                      "user_id" : this.user_id,
                    }
                });
                if(jobAttachments.length > 0){
                  var source = this.jobDetails.attachmentUrl.split("upload");
                  await jobAttachments.map(data=>{
                    this.genericAPIPOSTRequest({
                      requestUrl: "copyPostfile",
                      params: {
                        'from_path':'./upload'+source[1]+'/'+data,
                        'to_path':"./upload/proposal/"+this.$store.state.currentUserData.login_master_id+"/"+this.job_id+"/"+data,
                      },
                    });
                  });
                  this.$toastr.s('Offer Sent Successfully');
                  this.$router.push({ name: 'index', path:'/client/jobpostreview/', params: {pid: this.POID_data},query:{current:3} });
                }
              }
            }
          }
        },
        // this fun is for to get post details
        async getPostdetails(_i){
          var getPostedData = await this.genericAPIPOSTRequest({
                requestUrl: "getJobDetails_new",
                params: {
                  'poid':_i,
                  'user_id':this.$store.state.currentUserData.login_master_id,
                  'data': this.getCurrentUserIdRequest,
                },
            });
          if (getPostedData.length > 0 ) {
            this.jobDetails = getPostedData[0];
            
            var userJobApply = await this.genericAPIPOSTRequest({
              requestUrl:'getUser_job_apply',
              params:{
                'job_id':this.jobDetails.jobs_id,
                'user_id':this.$route.params.uid
              }
            });
            if (userJobApply) {
                this.userJobApply = userJobApply;
            } else this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
          }else this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
        },
        //this fun is for to get user data
        async getUserDetail(_i){
          var getUserdetails = await this.genericAPIPOSTRequest({
                requestUrl: "user/getUserDetails",
                params: {'user_id':_i},
            });
          if (getUserdetails!="") {
            this.userDetails = getUserdetails;
            // this.job_id= this.jobDetails.jobs_id;
          }else this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
  
        },
        // this fun is for Add milestone
        addMilestone(){
          this.proposalData.push(
            {
            milstone_type: this.projectType,
            description:'',
            acceptStatus: 7,
            dueDate:'',
            amount:'',
            job_id: this.job_id,
            user_id: this.user_id,
            created_by:this.$store.state.currentUserData.login_master_id
            }
          )
        },
        // this fun is for remove milestone
        removeMilestone(_i){
          this.proposalData.splice(_i, 1);
        },
        // this fun is for select proposal type
        selectPaid(_v){
          this.errorMessageshow=false;
          this.projectTypestatus=false;
          this.milstoneChangestatus=false;
          if(this.hiringdata.job_id !=''){
            if(_v == 'two'){
              this.proposalData = [{ 
                milstone_type:this.projectType,
                description:'',
                acceptStatus: 7,
                dueDate:'',
                amount:'',
                job_id: this.job_id,
                user_id: this.user_id,
                created_by:this.$store.state.currentUserData.login_master_id

              }];
            }else{
              this.proposalData = [{ 
                milstone_type:this.projectType,
                description:'',
                acceptStatus: 7,
                dueDate:'',
                amount:'',
                job_id: this.job_id,
                user_id: this.user_id,
                created_by:this.$store.state.currentUserData.login_master_id
              }];
            }
          }
          
        },
      },
      async mounted() {
        //this is for to check id
          if(this.$route.params.uid != undefined){
            var id = this.decodeId(this.$route.params.uid.slice(1));
            // this.getPostdetails(this.$route.params.pid);
            this.getUserDetail(id);
            this.getpostedJobs();
            this.user_id = id;
          }else this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
      }
    }
  </script>
  <style>
    .milestone-table{overflow-x: unset!important;}
    .error{color:red}
    @media only screen and (min-width: 320px) and (max-width: 815px) {
      .milestone-table{overflow-x: auto!important;}
      .filename{
        display: block;
        max-width: 50%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  
  </style>
  
  
  