<template>
    <b-container>
        <b-row class="mt-100">
            <h3><b>{{(inviteData.action == 2) ? 'Decline':''}} Invitation to interview</b></h3>
        </b-row>
        <b-row >
          <b-col xl="10" lg="10" md="12">
            <div class="card interview-invitation">
              <div class="card-header py-4 px-4 bg-white">
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>Job details</b></h4>
              </div>
              <div class="card-body p-0">
                <div class="py-8 px-4 pb-4 mb-2 border-bottmo">
                  <b-row>
                    <b-col xl="9" lg="9" md="12" class="border-right">
                      <h5 class="mb-3">{{jobDetails.job_title}}</h5>
                      <div class="d-flex align-items-center mb-3">
                        <b-col xl="6" lg="6" md="12">
                            <span>{{jobDetails.quality_inspector}} Posted {{jobDetails.time}}</span>
                            <div class="ml-3 text-muted fz-14">
                            
                            </div>
                        </b-col>
                        <b-col xl="6" lg="6" md="12" style="text-align:right;">
                            {{jobDetails.country_name+', '+jobDetails.state_name+', '+jobDetails.city_name}}
                        </b-col>
                      </div>
                      <!-- <ul class="ml--30">
                        <li>Position Title: {{jobDetails.job_title}}</li>
                        <li>Experience : 5 to 18 yrs</li>
                      </ul> -->
                      <div class="role-scope">
                        <h5 class="mb-2 fz-16">Scope of the role:</h5>
                        <h5 class="fz-14 text-black mb-2" v-html="jobDetails.scope_of_work"> </h5>

                        <!-- <vue-read-more-smooth :lines="1" class="mt-2">
                            <h5 class="fz-14 text-black mb-2" v-html="jobDetails.scope_of_work"> </h5>
                        </vue-read-more-smooth> -->
                        <!-- <h5 class="fz-14 text-black mb-2" v-if="jobDetails.scope_of_work!=''">
                            <read-more more-str="Read more" :text="jobDetails.scope_of_work" link="#" less-str="Read less" :max-chars="50"></read-more>
                        </h5> -->
                        <a target="_blank" :href="$router.resolve({name: 'freelancerjobDetails',  path:'/freelancer/job-details', query: {'jobDetailsWithClientData': jobDetails.jobs_id}}).href" class="text-theme">View job posting</a>
                      </div>
                    </b-col>
                    <b-col xl="3" lg="3" md="12">
                      <div class="column">
                        <div class="d-flex align-items-normal">
                          <div class="icon-wrap">
                            <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="18.0008" cy="17.9998" r="17.034" fill="#F2613C"/>
                                <g clip-path="url(#clip0_3020_21604)">
                                <path d="M22.4166 11.5H17.9139C17.6161 11.5 17.1998 11.6726 16.9893 11.8829L10.8161 18.056C10.3946 18.477 10.3946 19.1673 10.8161 19.5879L15.4126 24.1841C15.8331 24.6052 16.5228 24.6052 16.944 24.1837L23.1171 18.0115C23.3274 17.8012 23.5 17.3842 23.5 17.087V12.5834C23.5 11.9877 23.0123 11.5 22.4166 11.5ZM20.2498 15.8334C19.6515 15.8334 19.1665 15.3478 19.1665 14.75C19.1665 14.1512 19.6515 13.6666 20.2498 13.6666C20.8482 13.6666 21.3334 14.1512 21.3334 14.75C21.3334 15.3478 20.8482 15.8334 20.2498 15.8334Z" fill="#F2613C"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3020_21604">
                                <rect width="13" height="13" fill="white" transform="translate(10.5 11.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                          </div>
                          <div class="ml-3 text-muted fz-14">
                            <h5 class="mb-0 fz-16 text-black">{{(jobDetails.budget_type=="A")?'Day Rate':'Monthly Rate'}}</h5>
                            <p class="text-muted mb-0">{{jobDetails.budget}} {{(jobDetails.budget_type=="A")?'Per Day':'Per Month'}}</p>
                          </div>
                        </div>
                        <div class="d-flex align-items-normal">
                          <div class="icon-wrap">
                            <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="18.0008" cy="17.9998" r="17.034" fill="#F2613C"/>
                                <g clip-path="url(#clip0_3020_21604)">
                                <path d="M22.4166 11.5H17.9139C17.6161 11.5 17.1998 11.6726 16.9893 11.8829L10.8161 18.056C10.3946 18.477 10.3946 19.1673 10.8161 19.5879L15.4126 24.1841C15.8331 24.6052 16.5228 24.6052 16.944 24.1837L23.1171 18.0115C23.3274 17.8012 23.5 17.3842 23.5 17.087V12.5834C23.5 11.9877 23.0123 11.5 22.4166 11.5ZM20.2498 15.8334C19.6515 15.8334 19.1665 15.3478 19.1665 14.75C19.1665 14.1512 19.6515 13.6666 20.2498 13.6666C20.8482 13.6666 21.3334 14.1512 21.3334 14.75C21.3334 15.3478 20.8482 15.8334 20.2498 15.8334Z" fill="#F2613C"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3020_21604">
                                <rect width="13" height="13" fill="white" transform="translate(10.5 11.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                          </div>
                          <div class="ml-3 text-muted fz-14">
                            <h5 class="mb-0 fz-16 text-black">{{jobDetails.employment_Text}}</h5>
                            <p class="text-muted mb-0">{{jobDetails.employment_Name}}</p>
                          </div>
                        </div>
                        <div class="d-flex align-items-normal mb-3">
                          <div class="icon-wrap">
                            <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="18.0281" cy="17.9998" r="17.034" fill="#F2613C"/>
                                <path d="M20.6562 21.25H20.3242C20.3242 22.4562 19.2816 23.4375 18 23.4375C16.7184 23.4375 15.6758 22.4562 15.6758 21.25H15.3438C13.2383 21.25 11.5254 22.8622 11.5254 24.8438V25.5312C11.5254 25.7901 11.7484 26 12.0234 26H23.9766C24.2516 26 24.4746 25.7901 24.4746 25.5312V24.8438C24.4746 22.8622 22.7617 21.25 20.6562 21.25Z" fill="#F2613C"/>
                                <path d="M16.6719 20.7812V21.25C16.6719 21.9403 17.2665 22.5 18 22.5C18.7335 22.5 19.3281 21.9403 19.3281 21.25V20.7812H16.6719Z" fill="#F2613C"/>
                                <path d="M18 11.875C18.2751 11.875 18.498 11.6651 18.498 11.4062V10.4688C18.498 10.2099 18.2751 10 18 10C17.7249 10 17.502 10.2099 17.502 10.4688V11.4062C17.502 11.6651 17.7249 11.875 18 11.875Z" fill="#F2613C"/>
                                <path d="M14.2465 11.5406L14.7445 12.3525C14.8821 12.5767 15.1867 12.6535 15.4249 12.5241C15.6631 12.3946 15.7447 12.1079 15.6072 11.8837L15.1091 11.0718C14.9716 10.8477 14.667 10.7708 14.4288 10.9003C14.1906 11.0297 14.109 11.3164 14.2465 11.5406Z" fill="#F2613C"/>
                                <path d="M11.9991 13.9998L12.8617 14.4685C13.0999 14.5979 13.4045 14.5211 13.5421 14.2969C13.6796 14.0728 13.598 13.7861 13.3598 13.6566L12.4971 13.1879C12.2589 13.0584 11.9543 13.1353 11.8168 13.3594C11.6793 13.5836 11.7609 13.8703 11.9991 13.9998Z" fill="#F2613C"/>
                                <path d="M23.5004 13.1879L22.6378 13.6566C22.3996 13.7861 22.318 14.0728 22.4555 14.2969C22.593 14.5211 22.8976 14.5979 23.1358 14.4685L23.9985 13.9998C24.2366 13.8703 24.3183 13.5836 24.1807 13.3594C24.0432 13.1353 23.7386 13.0584 23.5004 13.1879Z" fill="#F2613C"/>
                                <path d="M20.5714 12.5241C20.8096 12.6535 21.1142 12.5767 21.2517 12.3525L21.7497 11.5406C21.8873 11.3164 21.8056 11.0297 21.5674 10.9003C21.3292 10.7708 21.0246 10.8477 20.8871 11.0718L20.3891 11.8837C20.2515 12.1079 20.3332 12.3946 20.5714 12.5241Z" fill="#F2613C"/>
                                <path d="M18 12.8125C15.9829 12.8125 14.3477 14.3515 14.3477 16.25C14.3477 17.4717 15.0259 18.5423 16.0465 19.1513C16.3202 19.3146 16.5191 19.561 16.6124 19.8438H17.502V17.3817L16.6517 16.5815C16.4572 16.3984 16.4572 16.1016 16.6517 15.9186C16.8462 15.7355 17.1616 15.7355 17.3561 15.9186L18 16.5246L18.6439 15.9186C18.8384 15.7355 19.1537 15.7355 19.3482 15.9186C19.5427 16.1016 19.5427 16.3984 19.3482 16.5815L18.498 17.3817V19.8438H19.3876C19.4809 19.561 19.6799 19.3146 19.9535 19.1513C20.9741 18.5423 21.6523 17.4717 21.6523 16.25C21.6523 14.3515 20.0171 12.8125 18 12.8125Z" fill="#F2613C"/>
                            </svg>
                          </div>
                          <div class="ml-3 text-muted fz-14">
                            <h5 class="mb-0 fz-16 text-black">{{jobDetails.experience_level_title}}</h5>
                            <p class="text-muted mb-0">{{jobDetails.experience_level_description}}</p>
                          </div>
                        </div>
                        <div class="d-flex align-items-normal mb-3">
                          <div class="icon-wrap">
                            <svg width="45" height="45" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="17.5574" cy="17.9998" r="17.034" fill="#F2613C"/>
                                <g clip-path="url(#clip0_3020_21606)">
                                <path d="M19.3183 18.44C19.3183 19.6523 18.332 20.6386 17.1197 20.6386C15.9073 20.6386 14.921 19.6523 14.921 18.44C14.921 17.2276 15.9073 16.2413 17.1197 16.2413C17.5672 16.2413 17.9838 16.376 18.3315 16.6066L19.6066 15.3316C19.5778 15.3105 19.5489 15.2896 19.5195 15.269C18.6548 14.6648 17.7886 14.3594 16.9413 14.3594C16.8637 14.3594 16.7863 14.3619 16.709 14.3671C15.6866 14.4366 14.7342 14.8918 14.0278 15.6485C13.3196 16.406 12.9297 17.3972 12.9297 18.44C12.9297 19.5588 13.3656 20.6109 14.1572 21.4024C14.9488 22.194 16.0008 22.6299 17.1196 22.6299C18.2384 22.6299 19.2905 22.194 20.0821 21.4024C20.8737 20.6108 21.3096 19.5588 21.3096 18.44C21.3096 17.519 20.9377 16.6349 20.2662 15.9148L18.9529 17.2281C19.1836 17.5758 19.3183 17.9924 19.3183 18.44Z" fill="#F2613C"/>
                                <path d="M16.8078 18.1292L17.6877 17.2493C17.5152 17.1666 17.3222 17.1201 17.1186 17.1201C16.3909 17.1201 15.7988 17.7122 15.7988 18.4399C15.7988 19.1676 16.3909 19.7596 17.1186 19.7596C17.8463 19.7596 18.4383 19.1676 18.4383 18.4399C18.4383 18.2362 18.3919 18.0432 18.3091 17.8708L17.4293 18.7506L16.8078 18.1292Z" fill="#F2613C"/>
                                <path d="M21.4341 14.7462L20.8873 15.293C21.7235 16.1784 22.1876 17.2818 22.1876 18.4401C22.1876 19.7937 21.6603 21.0664 20.7027 22.024C19.7451 22.9816 18.4723 23.509 17.1188 23.509C15.7652 23.509 14.4924 22.9816 13.5348 22.024C12.5772 21.0664 12.0499 19.7936 12.0499 18.4401C12.0499 17.1736 12.524 15.9692 13.3847 15.0486C14.2434 14.1286 15.4029 13.575 16.6492 13.4902C17.7757 13.4158 18.9101 13.7717 20.022 14.5487C20.0942 14.5992 20.1644 14.6511 20.2333 14.7041L20.8127 14.1247L20.9054 12.4785C19.7841 11.7632 18.481 11.3799 17.1188 11.3799C15.233 11.3799 13.46 12.1143 12.1265 13.4477C10.793 14.7812 10.0586 16.5542 10.0586 18.44C10.0586 20.3259 10.793 22.0989 12.1265 23.4324C13.46 24.7658 15.2329 25.5002 17.1188 25.5002C19.0046 25.5002 20.7776 24.7659 22.1111 23.4324C23.4446 22.0988 24.179 20.3259 24.179 18.44C24.179 17.0779 23.7956 15.7747 23.0803 14.6534L21.4341 14.7462Z" fill="#F2613C"/>
                                <path d="M21.709 13.8502L23.5048 13.749L25.0592 12.1946L23.3646 10.5L21.8102 12.0544L21.709 13.8502Z" fill="#F2613C"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3020_21606">
                                <rect width="15" height="15" fill="white" transform="translate(10.0586 10.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                          </div>
                          <div class="ml-3 text-muted fz-14">
                            <h5 class="mb-0 fz-16 text-black">Scope</h5>
                            <p class="text-muted mb-0">{{jobDetails.project_type}}, {{ jobDetails.project_length_title }}</p>
                          </div>
                        </div>
                        
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col xl="12" lg="12" md="12" class="border-top">
                      <h5 class="mb-3">Skills and expertise</h5>
                      <div class="mb-30 tags inline-block">
                        <span class="up-skill-badge inline-block" v-for="(skill,ids) in jobDetails.skill_name" :key="ids">  {{skill}}  </span>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
          <b-col xl="2" lg="2" md="12">
            <div class="right-details py-4 px-0 pb-4 mb-2 ">
              <h5 class="mb-3">Frelancer: {{$store.state.currentUserData.first_name }} {{$store.state.currentUserData.last_name }}</h5>
              <span>Intrested in discussing this job?</span>
              <div class="btns mt-3" v-if="inviteData.action ==0">
                <b-button class="btn-theme mb-3 btn-block w-100" v-b-toggle.sidebar-right>Accept Interview</b-button>
                <b-button class="btn-outline-theme mb-2 btn-block w-100" v-b-modal.decline-modal @click="getdeclineReason(); addDecline.invited_job =inviteData.invited_job">Decline Interview</b-button>
              </div>
              <h5 class="mb-0 mt-3 text-black">About the client</h5>  
              <!-- <p class="text-muted mb-3 fz-16">Payment method verified</p> -->
              <div class="d-flex align-items-center mb-3 ">
                <label class="star" :class="(clientrating.rating >= 1)?'active':''">&#9733;</label>
                <label class="star" :class="(clientrating.rating >= 2)?'active':''">&#9733;</label>
                <label class="star" :class="(clientrating.rating >= 3)?'active':''">&#9733;</label>
                <label class="star" :class="(clientrating.rating >= 4)?'active':''">&#9733;</label>
                <label class="star" :class="(clientrating.rating == 5)?'active':''">&#9733;</label>
              </div>
              <h5 class="mb-0 text-black">Location</h5>  
              <p class="text-muted mb-0">{{clientFullDetails.country_name}}</p>
              <p class="text-muted mb-0 fz-16">{{clientFullDetails.state_name}}, {{clientFullDetails.city_name}}</p>
              <p class="text-muted mb-0 fz-16">Member Since {{clientFullDetails.member_since}}</p>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col xl="10" lg="10" md="12">
            <div class="card activity-job">
              <div class="card-header py-4 px-4 bg-white">
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>Activity on this job</b></h4>
              </div>
              <div class="card-body p-0">
                <div class="py-8 px-4 pb-4 mb-2 border-bottmo">
                  <b-row>
                    <b-col xl="12" lg="12" md="12" >
                      <ul>
                        <li>Total Applicants: {{ jobActivities.total_application }}</li>
                        <li>Interviewing: {{ jobActivities.interviewing }}</li>
                        <li>Invites Sent: {{ jobActivities.send_invites }}</li>
                        <li>Unanswed invites: {{ jobActivities.unanswerd_invites }}</li>
                      </ul>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col xl="10" lg="10" md="12">
            <div class="card activity-job">
              <div class="card-header py-4 px-4 bg-white">
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>Original message from client</b></h4>
              </div>
              <div class="card-body p-0">
                <div class="py-8 px-4 pb-4 mb-2 border-bottmo">
                  <b-row>
                    <b-col xl="12" lg="12" md="12">
                      <p>{{inviteData.message}}</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <!-- right side bar  -->
        <b-sidebar id="sidebar-right" ref="sidebar" title="" right shadow  backdrop> 
          <div class="px-3 py-2">
            <b-card-group deck>
              <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                <template  #header>
                  <div class=" align-items-center">
                    <h4 class="mb-0 fz-24 fw-500 text-black"><b>Accept Interview</b></h4>
                    <p class="ml-auto">
                      Accept an interview for this job by replying and proposing terms. After you click Submit, this Invitation to Interview will become an "Active Interview". You will discuss the job and the client will decide whether to hire you.
                    </p>
                  </div>
                </template>
                
              </b-card>
            </b-card-group> 
            <b-row >
              <b-col xl="12" lg="12" md="12">
                <div class="card interview-invitation">
                  <div class="card-header py-4 px-4 bg-white">
                    <h4 class="mb-0 fz-24 fw-500 text-black"><b>Job details</b></h4>
                  </div>
                  <div class="card-body p-0">
                    <div class="py-8 px-4 pb-4 mb-2 border-bottmo">
                      <b-row>
                        <b-col xl="9" lg="9" md="12" class="border-right">
                          <h5 class="mb-3">{{jobDetails.job_title}}</h5>
                          <div class="d-flex align-items-center mb-3">
                            <b-col xl="6" lg="6" md="12">
                                <span>{{jobDetails.quality_inspector}} Posted {{jobDetails.time}}</span>
                                <div class="ml-3 text-muted fz-14">
                                
                                </div>
                            </b-col>
                            <b-col xl="6" lg="6" md="12" style="text-align:right;">
                                {{jobDetails.country_name+', '+jobDetails.state_name+', '+jobDetails.city_name}}
                            </b-col>
                          </div>
                          <!-- <ul class="ml--30">
                            <li>Position Title: {{jobDetails.job_title}}</li>
                            <li>Experience : 5 to 18 yrs</li>
                          </ul> -->
                          <div class="role-scope">
                            <h5 class="mb-2 fz-16">Scope of the role:</h5>
                            <h5 class="fz-14 text-black mb-2" v-html="jobDetails.scope_of_work"> </h5>

                            <!-- <vue-read-more-smooth :lines="1" class="mt-2">
                                <h5 class="fz-14 text-black mb-2" v-html="jobDetails.scope_of_work"> </h5>
                            </vue-read-more-smooth> -->
                            <!-- <h5 class="fz-14 text-black mb-2" v-if="jobDetails.scope_of_work!=''">
                                <read-more more-str="Read more" :text="jobDetails.scope_of_work" link="#" less-str="Read less" :max-chars="50"></read-more>
                            </h5> -->
                            <a target="_blank" :href="$router.resolve({name: 'freelancerjobDetails',  path:'/freelancer/job-details', query: {'jobDetailsWithClientData': jobDetails.jobs_id}}).href" class="text-theme">View job posting</a>
                          </div>
                        </b-col>
                        <b-col xl="3" lg="3" md="12">
                          <div class="column">
                            <div class="d-flex align-items-normal">
                              <div class="icon-wrap">
                                <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="18.0008" cy="17.9998" r="17.034" fill="#F2613C"/>
                                    <g clip-path="url(#clip0_3020_21604)">
                                    <path d="M22.4166 11.5H17.9139C17.6161 11.5 17.1998 11.6726 16.9893 11.8829L10.8161 18.056C10.3946 18.477 10.3946 19.1673 10.8161 19.5879L15.4126 24.1841C15.8331 24.6052 16.5228 24.6052 16.944 24.1837L23.1171 18.0115C23.3274 17.8012 23.5 17.3842 23.5 17.087V12.5834C23.5 11.9877 23.0123 11.5 22.4166 11.5ZM20.2498 15.8334C19.6515 15.8334 19.1665 15.3478 19.1665 14.75C19.1665 14.1512 19.6515 13.6666 20.2498 13.6666C20.8482 13.6666 21.3334 14.1512 21.3334 14.75C21.3334 15.3478 20.8482 15.8334 20.2498 15.8334Z" fill="#F2613C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_3020_21604">
                                    <rect width="13" height="13" fill="white" transform="translate(10.5 11.5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                              </div>
                              <div class="ml-3 text-muted fz-14">
                                <h5 class="mb-0 fz-16 text-black">{{(jobDetails.budget_type=="A")?'Day Rate':'Monthly Rate'}}</h5>
                                <p class="text-muted mb-0">{{jobDetails.budget}} {{(jobDetails.budget_type=="A")?'Per Day':'Per Month'}}</p>
                              </div>
                            </div>
                            <div class="d-flex align-items-normal">
                              <div class="icon-wrap">
                                <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="18.0008" cy="17.9998" r="17.034" fill="#F2613C"/>
                                    <g clip-path="url(#clip0_3020_21604)">
                                    <path d="M22.4166 11.5H17.9139C17.6161 11.5 17.1998 11.6726 16.9893 11.8829L10.8161 18.056C10.3946 18.477 10.3946 19.1673 10.8161 19.5879L15.4126 24.1841C15.8331 24.6052 16.5228 24.6052 16.944 24.1837L23.1171 18.0115C23.3274 17.8012 23.5 17.3842 23.5 17.087V12.5834C23.5 11.9877 23.0123 11.5 22.4166 11.5ZM20.2498 15.8334C19.6515 15.8334 19.1665 15.3478 19.1665 14.75C19.1665 14.1512 19.6515 13.6666 20.2498 13.6666C20.8482 13.6666 21.3334 14.1512 21.3334 14.75C21.3334 15.3478 20.8482 15.8334 20.2498 15.8334Z" fill="#F2613C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_3020_21604">
                                    <rect width="13" height="13" fill="white" transform="translate(10.5 11.5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                              </div>
                              <div class="ml-3 text-muted fz-14">
                                <h5 class="mb-0 fz-16 text-black">{{jobDetails.employment_Text}}</h5>
                                <p class="text-muted mb-0">{{jobDetails.employment_Name}}</p>
                              </div>
                            </div>
                            <div class="d-flex align-items-normal mb-3">
                              <div class="icon-wrap">
                                <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="18.0281" cy="17.9998" r="17.034" fill="#F2613C"/>
                                    <path d="M20.6562 21.25H20.3242C20.3242 22.4562 19.2816 23.4375 18 23.4375C16.7184 23.4375 15.6758 22.4562 15.6758 21.25H15.3438C13.2383 21.25 11.5254 22.8622 11.5254 24.8438V25.5312C11.5254 25.7901 11.7484 26 12.0234 26H23.9766C24.2516 26 24.4746 25.7901 24.4746 25.5312V24.8438C24.4746 22.8622 22.7617 21.25 20.6562 21.25Z" fill="#F2613C"/>
                                    <path d="M16.6719 20.7812V21.25C16.6719 21.9403 17.2665 22.5 18 22.5C18.7335 22.5 19.3281 21.9403 19.3281 21.25V20.7812H16.6719Z" fill="#F2613C"/>
                                    <path d="M18 11.875C18.2751 11.875 18.498 11.6651 18.498 11.4062V10.4688C18.498 10.2099 18.2751 10 18 10C17.7249 10 17.502 10.2099 17.502 10.4688V11.4062C17.502 11.6651 17.7249 11.875 18 11.875Z" fill="#F2613C"/>
                                    <path d="M14.2465 11.5406L14.7445 12.3525C14.8821 12.5767 15.1867 12.6535 15.4249 12.5241C15.6631 12.3946 15.7447 12.1079 15.6072 11.8837L15.1091 11.0718C14.9716 10.8477 14.667 10.7708 14.4288 10.9003C14.1906 11.0297 14.109 11.3164 14.2465 11.5406Z" fill="#F2613C"/>
                                    <path d="M11.9991 13.9998L12.8617 14.4685C13.0999 14.5979 13.4045 14.5211 13.5421 14.2969C13.6796 14.0728 13.598 13.7861 13.3598 13.6566L12.4971 13.1879C12.2589 13.0584 11.9543 13.1353 11.8168 13.3594C11.6793 13.5836 11.7609 13.8703 11.9991 13.9998Z" fill="#F2613C"/>
                                    <path d="M23.5004 13.1879L22.6378 13.6566C22.3996 13.7861 22.318 14.0728 22.4555 14.2969C22.593 14.5211 22.8976 14.5979 23.1358 14.4685L23.9985 13.9998C24.2366 13.8703 24.3183 13.5836 24.1807 13.3594C24.0432 13.1353 23.7386 13.0584 23.5004 13.1879Z" fill="#F2613C"/>
                                    <path d="M20.5714 12.5241C20.8096 12.6535 21.1142 12.5767 21.2517 12.3525L21.7497 11.5406C21.8873 11.3164 21.8056 11.0297 21.5674 10.9003C21.3292 10.7708 21.0246 10.8477 20.8871 11.0718L20.3891 11.8837C20.2515 12.1079 20.3332 12.3946 20.5714 12.5241Z" fill="#F2613C"/>
                                    <path d="M18 12.8125C15.9829 12.8125 14.3477 14.3515 14.3477 16.25C14.3477 17.4717 15.0259 18.5423 16.0465 19.1513C16.3202 19.3146 16.5191 19.561 16.6124 19.8438H17.502V17.3817L16.6517 16.5815C16.4572 16.3984 16.4572 16.1016 16.6517 15.9186C16.8462 15.7355 17.1616 15.7355 17.3561 15.9186L18 16.5246L18.6439 15.9186C18.8384 15.7355 19.1537 15.7355 19.3482 15.9186C19.5427 16.1016 19.5427 16.3984 19.3482 16.5815L18.498 17.3817V19.8438H19.3876C19.4809 19.561 19.6799 19.3146 19.9535 19.1513C20.9741 18.5423 21.6523 17.4717 21.6523 16.25C21.6523 14.3515 20.0171 12.8125 18 12.8125Z" fill="#F2613C"/>
                                </svg>
                              </div>
                              <div class="ml-3 text-muted fz-14">
                                <h5 class="mb-0 fz-16 text-black">{{jobDetails.experience_level_title}}</h5>
                                <p class="text-muted mb-0">{{jobDetails.experience_level_description}}</p>
                              </div>
                            </div>
                            <div class="d-flex align-items-normal mb-3">
                              <div class="icon-wrap">
                                <svg width="45" height="45" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="17.5574" cy="17.9998" r="17.034" fill="#F2613C"/>
                                    <g clip-path="url(#clip0_3020_21606)">
                                    <path d="M19.3183 18.44C19.3183 19.6523 18.332 20.6386 17.1197 20.6386C15.9073 20.6386 14.921 19.6523 14.921 18.44C14.921 17.2276 15.9073 16.2413 17.1197 16.2413C17.5672 16.2413 17.9838 16.376 18.3315 16.6066L19.6066 15.3316C19.5778 15.3105 19.5489 15.2896 19.5195 15.269C18.6548 14.6648 17.7886 14.3594 16.9413 14.3594C16.8637 14.3594 16.7863 14.3619 16.709 14.3671C15.6866 14.4366 14.7342 14.8918 14.0278 15.6485C13.3196 16.406 12.9297 17.3972 12.9297 18.44C12.9297 19.5588 13.3656 20.6109 14.1572 21.4024C14.9488 22.194 16.0008 22.6299 17.1196 22.6299C18.2384 22.6299 19.2905 22.194 20.0821 21.4024C20.8737 20.6108 21.3096 19.5588 21.3096 18.44C21.3096 17.519 20.9377 16.6349 20.2662 15.9148L18.9529 17.2281C19.1836 17.5758 19.3183 17.9924 19.3183 18.44Z" fill="#F2613C"/>
                                    <path d="M16.8078 18.1292L17.6877 17.2493C17.5152 17.1666 17.3222 17.1201 17.1186 17.1201C16.3909 17.1201 15.7988 17.7122 15.7988 18.4399C15.7988 19.1676 16.3909 19.7596 17.1186 19.7596C17.8463 19.7596 18.4383 19.1676 18.4383 18.4399C18.4383 18.2362 18.3919 18.0432 18.3091 17.8708L17.4293 18.7506L16.8078 18.1292Z" fill="#F2613C"/>
                                    <path d="M21.4341 14.7462L20.8873 15.293C21.7235 16.1784 22.1876 17.2818 22.1876 18.4401C22.1876 19.7937 21.6603 21.0664 20.7027 22.024C19.7451 22.9816 18.4723 23.509 17.1188 23.509C15.7652 23.509 14.4924 22.9816 13.5348 22.024C12.5772 21.0664 12.0499 19.7936 12.0499 18.4401C12.0499 17.1736 12.524 15.9692 13.3847 15.0486C14.2434 14.1286 15.4029 13.575 16.6492 13.4902C17.7757 13.4158 18.9101 13.7717 20.022 14.5487C20.0942 14.5992 20.1644 14.6511 20.2333 14.7041L20.8127 14.1247L20.9054 12.4785C19.7841 11.7632 18.481 11.3799 17.1188 11.3799C15.233 11.3799 13.46 12.1143 12.1265 13.4477C10.793 14.7812 10.0586 16.5542 10.0586 18.44C10.0586 20.3259 10.793 22.0989 12.1265 23.4324C13.46 24.7658 15.2329 25.5002 17.1188 25.5002C19.0046 25.5002 20.7776 24.7659 22.1111 23.4324C23.4446 22.0988 24.179 20.3259 24.179 18.44C24.179 17.0779 23.7956 15.7747 23.0803 14.6534L21.4341 14.7462Z" fill="#F2613C"/>
                                    <path d="M21.709 13.8502L23.5048 13.749L25.0592 12.1946L23.3646 10.5L21.8102 12.0544L21.709 13.8502Z" fill="#F2613C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_3020_21606">
                                    <rect width="15" height="15" fill="white" transform="translate(10.0586 10.5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                              </div>
                              <div class="ml-3 text-muted fz-14">
                                <h5 class="mb-0 fz-16 text-black">Scope</h5>
                                <p class="text-muted mb-0">{{jobDetails.project_type}}, {{ jobDetails.project_length_title }}</p>
                              </div>
                            </div>
                            
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl="12" lg="12" md="12" class="border-top">
                          <h5 class="mb-3">Skills and expertise</h5>
                          <div class="mb-30 tags inline-block">
                            <span class="up-skill-badge inline-block" v-for="(skill,ids) in jobDetails.skill_name" :key="ids">  {{skill}}  </span>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>

            <b-form @submit.prevent="submitProposal">
              <b-row class="mt-50 freelancer-wrap freelancer-job-detail">
                <b-col>
                  <b-card-group deck>
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                      <template  #header>
                        <div class="d-md-flex align-items-center">
                          <h4 class="mb-0 fz-24 fw-500 text-black"><b>Terms</b></h4>
                          <div class="ml-auto d-flex align-items-center">
                            <svg width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.1" cx="18.0008" cy="17.9998" r="17.034" fill="#F2613C"/>
                              <g clip-path="url(#clip0_3020_21604)">
                              <path d="M22.4166 11.5H17.9139C17.6161 11.5 17.1998 11.6726 16.9893 11.8829L10.8161 18.056C10.3946 18.477 10.3946 19.1673 10.8161 19.5879L15.4126 24.1841C15.8331 24.6052 16.5228 24.6052 16.944 24.1837L23.1171 18.0115C23.3274 17.8012 23.5 17.3842 23.5 17.087V12.5834C23.5 11.9877 23.0123 11.5 22.4166 11.5ZM20.2498 15.8334C19.6515 15.8334 19.1665 15.3478 19.1665 14.75C19.1665 14.1512 19.6515 13.6666 20.2498 13.6666C20.8482 13.6666 21.3334 14.1512 21.3334 14.75C21.3334 15.3478 20.8482 15.8334 20.2498 15.8334Z" fill="#F2613C"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_3020_21604">
                              <rect width="13" height="13" fill="white" transform="translate(10.5 11.5)"/>
                              </clipPath>
                              </defs>
                            </svg>
                            <div class="content ml-2">
                              <b-card-text class="text-black fz-16 mb-1 fw-600">Client Budget</b-card-text>
                              <b-card-text class="text-muted fz-14 mb-0">{{jobDetails.budget }} {{(jobDetails.budget_type == 'A')?'Per Day':'Per Month'}}</b-card-text>
                              
                            </div>
                          </div>
                        </div>
                      </template>
                      <b-row v-if="createdByData.length > 0">
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
                      <b-row >
                        <b-col cols="12" class="p-0">
                          <div class="bordered p-4">
                            <h5 class="fw-600 fz-18 mb-4">How do yo want to be paid?</h5>
                            <b-form-group >
                            <div >
                              <b-form-radio v-model="paidType" value="milstone" v-on:change="selectPaid('one'); showError=false" ><span class="ml-2 fw-600 fz-16" v-on:click="selectPaid('one')" >By Milestone</span></b-form-radio>
                              <p class="ml-8 text-muted fz-14 fw-400">On fixed price jobs, simply divide the project into smaller segments ( called milestone). As each milestone <br> is met, you’ll be paid for that specific work...</p>
                            </div>
                            <div >
                              <b-form-radio v-model="paidType" value="project" v-on:change="selectPaid('two'); showError=false "><span class="ml-2 fw-600 fz-16" v-on:click="selectPaid('two')" >By Project</span></b-form-radio>
                              <p class="ml-8 text-muted fz-14 fw-400">Get your entire payment at the end when, all the work has been delivered.</p>
                            </div>
                            </b-form-group>
                          </div>
                          <div class="bordered p-4" v-if="paidTypeStatus== 'one'">
                            <h5 class="fw-600 fz-18 mb-4">How many milestone do you want to include?</h5>
                              <b-row>
                                <b-col xl="1" lg="1" sm="12">
                                  <b-form-group
                                    id="fieldset-0"
                                    label="S.No"
                                    label-for="input-1"
                                    class="fz-14 fw-600"
                                  >
                                  </b-form-group>
                                </b-col>
                                <b-col xl="4" lg="3" sm="12">
                                  <b-form-group
                                    id="fieldset-1"
                                    label="Milestone Description"
                                    label-for="input-1"
                                    valid-feedback="Thank you!"
                                    class="fz-14 fw-600"
                                    placeholder="What is the task ?"
                                  >
                                  </b-form-group>
                                </b-col>
                                <b-col xl="3" lg="3" sm="12">
                                  <b-form-group
                                    id="fieldset-1"
                                    label="Due Date"
                                    label-for="input-1"
                                    valid-feedback="Thank you!"
                                    class="fz-14 fw-600"
                                    placeholder="DD - MM - YYYY"
                                  >
                                  </b-form-group>
                                </b-col>
                                <b-col xl="3" lg="2" sm="12">
                                  <b-form-group
                                    id="fieldset-1"
                                    label="Amount"
                                    label-for="input-1"
                                    valid-feedback="Thank you!"
                                    class="fz-14 fw-600"
                                  >
                                  </b-form-group>
                                </b-col>
                              </b-row>
                              <b-row v-for="(milstonedata, id) in $v.proposal.$each.$iter" :key="id">
                                <b-col xl="1" lg="1" sm="12">
                                  {{parseInt(id)+1}}
                                </b-col>
                                <b-col xl="4" lg="3" sm="12">
                                    <b-form-input class="form-control"
                                      maxlength="201" 
                                      v-model.trim="milstonedata.description.$model"
                                      trim />
                                    <div class="error"  v-if="!milstonedata.description.required && showError">Description is required.</div>
                                    <div class="error"  v-if="!milstonedata.description.maxLength ">Maximum 200 Charachter Allow.</div>
                                </b-col>
                                <b-col  xl="3" lg="3" sm="12">
                                    <b-form-datepicker  
                                    v-model.trim="milstonedata.dueDate.$model" 
                                    :min="new Date().toISOString().substr(0, 10)" 
                                    class="mb-2"></b-form-datepicker>
                                    <div class="error"  v-if="!milstonedata.dueDate.required && showError">Due Date is required.</div>
                                </b-col>
                                <b-col  xl="2" lg="3" sm="12">
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
                                      onDrop="return false" trim></b-form-input>
                                    <!-- <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'amt_Valid_'+id">Minmum of $1 Required</span> -->
                                    <div class="error"  v-if="!milstonedata.amount.required && showError">Minimum $5 is required.</div>
                                    <div class="error"  v-if="!milstonedata.amount.between ">Minimum $5 & Maximum $50000 is Allow.</div>
                                </b-col>
                                <b-col  xl="1" lg="1" sm="12" v-if="id > 0">
                                  <button class="btn btn-outline-theme  d-flex align-items-center" type="button" v-on:click="removeMilestone(id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2613C" class="bi bi-trash" viewBox="0 0 16 16">
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                  </button>
                                </b-col>
                              </b-row>
                              <button class="btn btn-outline-theme mt-4 d-flex align-items-center" type="button" v-on:click="addMilestone()">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.70966 11.4814V6.94542H0.413656V4.92942H4.70966V0.393421H6.79766V4.92942H11.0937V6.94542H6.79766V11.4814H4.70966Z" fill="#F2613C"/>
                                </svg>
                                <span class="ml-2">Add Milestone</span>
                              </button>
                          </div>
                          <div class="bordered p-4" v-else-if="paidTypeStatus== 'two'">
                            <h5 class="fw-600 fz-18 mb-4"></h5>
                            <b-form>
                              <b-row v-for="(milstonedata, id) in $v.proposal.$each.$iter" :key="id">
                                <b-col cols="1">
                                  <b-form-group
                                    id="fieldset-1"
                                    label="S.No"
                                    label-for="input-1"
                                    class="fz-14 fw-600"
                                  ></b-form-group>
                                  1
                                </b-col>
                                <b-col cols="4">
                                  <b-form-group
                                    id="fieldset-1"
                                    label="Description"
                                    label-for="input-1"
                                    valid-feedback="Thank you!"
                                    class="fz-14 fw-600"
                                    placeholder="What is the task ?"
                                  >
                                    <b-form-input id="input-1"
                                    maxlength="500"
                                    v-model.trim="milstonedata.description.$model"
                                    trim></b-form-input>
                                    <div class="error"  v-if="!milstonedata.description.required && showError">Description is required.</div>
                                    <div class="error"  v-if="!milstonedata.description.maxLength ">Maximum 200 Charachter Allow Required.</div>
                                  </b-form-group>
                                </b-col>
                                <b-col cols="3">
                                  <b-form-group
                                    id="fieldset-1"
                                    label="Due Date"
                                    label-for="input-1"
                                    valid-feedback="Thank you!"
                                    class="fz-14 fw-600"
                                    placeholder="DD - MM - YYYY"
                                  >
                                    <!-- <input type="date" class="form-control mb-2" v-model="milstonedata.dueDate" required  /> -->
                                    <b-form-datepicker 
                                    v-model.trim="milstonedata.dueDate.$model"
                                    :min="new Date().toISOString().substr(0, 10)"
                                    class="mb-2"></b-form-datepicker>
                                    <div class="error"  v-if="!milstonedata.dueDate.required && showError">Due Date is required.</div>
                                  </b-form-group>
                                </b-col>
                                <b-col cols="3">
                                  <b-form-group
                                    id="fieldset-1"
                                    label="Amount"
                                    label-for="input-1"
                                    valid-feedback="Thank you!"
                                    class="fz-14 fw-600"
                                    placeholder="$ 00.00"
                                  >
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
                                    onDrop="return false" ></b-form-input>
                                  <!-- <span class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);" :id="'amt_Valid_'+id">Minmum of $1 Required</span> -->
                                  <div class="error"  v-if="!milstonedata.amount.required && showError">Minimum $5 is required.</div>
                                  <div class="error"  v-if="!milstonedata.amount.between">Minimum $5 & Maximum $50000 is Allow.</div>

                                  </b-form-group>
                                </b-col>
                              </b-row>
                            </b-form>
                          </div>
                          
                        </b-col>
                      </b-row>
                      
                      <b-row >
                        <b-col class="p-0" xl="6" lg="6" sm="12">
                          <div class="text-center bordered no-bottom-border py-13">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                              <circle cx="50" cy="50" r="50" fill="#F2613C"/>
                              <g clip-path="url(#clip0_3736_21321)">
                              <path d="M62.3418 42.1875C52.5684 42.1875 44.6172 49.9942 44.6172 59.5898C44.6172 69.1855 52.5684 76.9922 62.3418 76.9922C72.1151 76.9922 80.0664 69.1855 80.0664 59.5898C80.0664 49.9942 72.1151 42.1875 62.3418 42.1875ZM62.3418 58.0078C65.0074 58.0078 67.1758 60.1368 67.1758 62.7539C67.1758 64.8137 65.8246 66.5533 63.9531 67.2086V70.6641H60.7305V67.2086C58.859 66.5533 57.5078 64.8137 57.5078 62.7539H60.7305C60.7305 63.6268 61.4528 64.3359 62.3418 64.3359C63.2308 64.3359 63.9531 63.6268 63.9531 62.7539C63.9531 61.881 63.2308 61.1719 62.3418 61.1719C59.6762 61.1719 57.5078 59.0429 57.5078 56.4258C57.5078 54.366 58.859 52.6264 60.7305 51.9711V48.5156H63.9531V51.9711C65.8246 52.6264 67.1758 54.366 67.1758 56.4258H63.9531C63.9531 55.5529 63.2308 54.8438 62.3418 54.8438C61.4528 54.8438 60.7305 55.5529 60.7305 56.4258C60.7305 57.2986 61.4528 58.0078 62.3418 58.0078Z" fill="white"/>
                              <path d="M43.0059 42.1875C52.9445 42.1875 60.7305 38.0177 60.7305 32.6953C60.7305 27.3729 52.9445 22.9922 43.0059 22.9922C33.0672 22.9922 25.0664 27.3729 25.0664 32.6953C25.0664 38.0177 33.0672 42.1875 43.0059 42.1875Z" fill="white"/>
                              <path d="M25.0664 58.5938V61.1715C25.0664 66.4939 33.0672 70.6637 43.0059 70.6637C43.5696 70.6637 44.1158 70.6128 44.6709 70.5861C43.4349 68.678 42.5131 66.5609 41.9703 64.2975C34.7833 64.1027 28.5428 61.9344 25.0664 58.5938Z" fill="white"/>
                              <path d="M41.472 61.0909C41.435 60.5933 41.3945 60.0963 41.3945 59.5895C41.3945 57.9403 41.6146 56.3441 41.99 54.8062C34.794 54.6147 28.5459 52.4452 25.0664 49.1016V51.6793C25.0664 56.7194 32.2918 60.6802 41.472 61.0909Z" fill="white"/>
                              <path d="M43.0059 51.6793C43.0076 51.6793 43.009 51.6791 43.0108 51.6791C44.0735 49.1854 45.6184 46.9374 47.5368 45.054C46.0816 45.2346 44.5777 45.3512 43.0059 45.3512C35.3556 45.3512 28.7108 43.1114 25.0664 39.6094V42.1871C25.0664 47.5095 33.0672 51.6793 43.0059 51.6793Z" fill="white"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_3736_21321">
                              <rect width="55" height="54" fill="white" transform="translate(25.0664 22.9922)"/>
                              </clipPath>
                              </defs>
                            </svg><br>
                            <h5 class="fz-18 fw-400 p-0 d-block">Includes Fixed-Price</h5>
                          </div>
                        </b-col>
                        <b-col xl="6" lg="6" sm="12" class="p-0">
                          <div class="bordered no-bottom-border">
                            <table class="table w-100">
                              <tr class="no-border border-top-0">
                                <td class="pt-4 pb-2 px-4">
                                  <h5 class="fz-18 fw-600 no-border p-0">Total Price of Project</h5>
                                  <p class="fz-16 fw-400 text-muted no-border p-0">This includes all milestones, and this is 
                                  the amount your client will see.</p>
                                </td>
                                <td style="vertical-align:top;" class="pt-4 pb-2 px-4">
                                  <p class="fz-16 fw-400 text-muted mb-0 no-border d-flex align-items-center">$<span id="total_amount">{{totalAmount}}</span></p>
                                </td>
                              </tr>
                              <tr class="no-border border-top-0">
                                <td class="pt-1 pb-2 px-4">
                                  <h5 class="fz-18 fw-600 no-border mb-0 p-0">Qapin Service Fee</h5>
                                  <a class="fz-12 fw-400 text-theme no-border mt-0 p-0" href="javascript:void(0);">Learn more about service fee</a>
                                </td>
                                <td style="vertical-align:top;" class="pt-1 pb-2 px-4">
                                  <p class="fz-16 fw-400 text-muted mb-0 no-border" >${{serviceFee}}</p>
                                </td>
                              </tr>
                              <tr style="border-top: 1px solid #adb1b6!important;">
                                <td class="pt-1 pb-2 px-4">
                                  <h5 class="fz-18 fw-600 no-border mb-0 p-0">You’ll Receive</h5>
                                </td>
                                <td style="vertical-align:top;" class="pt-1 pb-4 px-4">
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
              <b-row class="mt-50 freelancer-wrap freelancer-job-detail" v-if="showQuesAns">
                <b-col>
                  <b-card-group deck>
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                      <b-row>
                        <b-col cols="12" class="py-4">
                          <div class="p-4">
                            <h5 class="fw-500 fz-24 mb-4 text-black"><b>Questions</b></h5>
                            <span v-for="(ques,id) in jobDetails.preference_questions" :key="id">
                            <h6 class="fz-16 fw-400 mb-2 mt-4">{{id+1}}. {{ques.text}}</h6> 
                            <textarea
                              maxlength="500"
                              v-model="questionAnswer[id].answer"
                              id="textarea"
                              rows="0"
                              max-rows="8"
                              v-autogrow
                              class="mt-2 block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                              @keyup="answerValidation('answer_'+id,$event.target.value)"
                              @input="answerValidation('answer_'+id,$event.target.valued)"
                            ></textarea>
                            <div class="error" :id="'answer_'+id" ></div>
                            </span>
                          </div>
                        </b-col>
                      </b-row>
                    </b-card>
                  </b-card-group>
                </b-col>
              </b-row>
              <b-row class="mt-50 freelancer-wrap freelancer-job-detail">
                <b-col>
                  <b-card-group deck>
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                      <b-row>
                        <b-col cols="12" class="py-4">
                          <div class="p-4">
                            <h5 class="fw-500 fz-24 mb-4 text-black"><b>Cover Letter</b></h5>
                            <textarea
                              maxlength="5001"
                              v-model="cover_letter"
                              id="textarea"
                              rows="0"
                              max-rows="8"
                              v-autogrow
                              class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                              @input="$v.cover_letter.$touch()"
                              @blur="$v.cover_letter.$touch()"
                            >
                            </textarea>
                            <!-- <div class="error"  v-if="!cover_letter.required && cover_letter == '' && showError">Cover Letter is required.</div> -->
                            <!-- <div class="error"  v-if="!cover_letter.maxLength && cover_letter != ''">Maximum 5000 Charachter Allow.</div> -->
                            <div class="error"  v-if="coverLetterError[0]">{{ coverLetterError[0] }}</div>
                            <!-- <div class="error"  :id="'cover_Valid'"></div>coverLetterError -->

                            <div class=" align-items-center justify-content-end mt-4">
                              <div class=" align-items-center">
                                <div>
                                  <input id="fileUpload" hidden type="file" @change="UploadFile" accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf" name="upload">
                                  <button type="button" class="btn btn-outline-theme d-flex align-items-center" @click="chooseFiles()">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.8146 1.76691C14.5712 -0.471781 10.9208 -0.471781 8.67702 1.76691L1.70173 8.72731C0.0993369 10.3265 0.0994423 12.9284 1.70194 14.5275C2.50325 15.3271 3.55548 15.7269 4.60813 15.7268C5.6605 15.7267 6.71329 15.327 7.51447 14.5275L13.9083 8.1471C14.3741 7.68234 14.6307 7.06438 14.6307 6.4071C14.6307 5.74977 14.3743 5.13185 13.9084 4.66695C12.9468 3.70751 11.3822 3.70754 10.4208 4.66713L6.23949 8.83943C5.91848 9.15973 5.91848 9.67911 6.23942 9.99947C6.5604 10.3199 7.08088 10.3198 7.40193 9.99947L11.5833 5.82713C11.9038 5.50729 12.4252 5.50722 12.7458 5.82706C12.901 5.98198 12.9866 6.18798 12.9866 6.40706C12.9866 6.62614 12.9011 6.83207 12.7458 6.98706L6.35195 13.3674C5.39039 14.3268 3.82594 14.3269 2.86445 13.3675C1.90296 12.408 1.90289 10.8468 2.86427 9.88725L9.83953 2.92695C11.4422 1.32779 14.0497 1.32779 15.6521 2.92695C16.4284 3.70154 16.856 4.7315 16.856 5.82699C16.856 6.92248 16.4284 7.95243 15.6521 8.7271L8.67691 15.6876C8.35593 16.0079 8.35593 16.5273 8.67698 16.8477C8.8375 17.0079 9.04788 17.0879 9.25822 17.0879C9.46859 17.0879 9.67897 17.0078 9.83949 16.8477L16.8145 9.88718C17.9014 8.8027 18.5 7.36079 18.5 5.82702C18.5 4.2933 17.9014 2.85138 16.8146 1.76691Z" fill="#F2613C"/>
                                    </svg>
                                    <span class="ml-1">Attach File</span>
                                  </button>
                                  <span class="fz-12 text-muted">Upload Project Files Max size : 40 MB</span>  
                                </div>
                                <!-- <div>
                                  <div class=" align-items-center">
                                    <ul  class="ml-2 mt-4 attachment "  v-if="UploadedFileName.length > 0" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                                      <i class="fa fa-file border-none"></i>
                                      <li class="attatchment-wrap mr-5 mb-2" v-for="(attc, index) in UploadedFileName" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                                        <a :href="attc" target="_blank"><span class="ml-2 text-theme">{{attachment[index]}}</span></a>
                                        <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index)"></i>
                                      </li>
                                    </ul>
                                  </div>
                                </div> -->
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
                              <div class="ml-auto  align-items-center mt-4" >
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
      </b-sidebar>
        <!-- Decline Modal -->
        <b-modal id="decline-modal" size="lg" title="Decline Invitation" hide-footer no-close-on-backdrop>
            <form @submit.prevent="submitDeclineData">
                <label class="fz-18 fw-600 mb-2">Let the client know why you’re declining this invite</label><br />
                <b-form-select
                    v-model="addDecline.decline_reason"
                    :options="declineReason"
                    text-field="title"
                    value-field="title"
                    :error-messages="declineReasons"
                    @input="$v.addDecline.decline_reason.$touch()"
                    @blur="$v.addDecline.decline_reason.$touch()"
                    class="mb-4"
                ></b-form-select>
                <div class="error" v-if="declineReasons[0]">{{declineReasons[0]}}</div>

                <br />
                <label class="fz-18 fw-600 mb-2">Message to client (Optional)</label>
                <b-form-textarea
                    v-model="addDecline.decline_message"
                    id="textarea"
                    rows="6"
                    max-rows="8"
                    :error-messages="declineMessage"
                    @input="$v.addDecline.decline_message.$touch()"
                    @blur="$v.addDecline.decline_message.$touch()"
                ></b-form-textarea>
                <div class="error" v-if="declineMessage[0]">{{declineMessage[0]}}</div>

                <hr />
                <div class="text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('decline-modal');">Cancel</a>
                    <b-button type="buttton" class="btn btn-theme">Decline</b-button>
                </div>
            </form>
        </b-modal>
    </b-container>
  </template>
  <script>
  import { mapActions } from "vuex";
//   import VueReadMoreSmooth from "vue-read-more-smooth"
  import { validationMixin } from 'vuelidate'
  import { required,maxLength,between } from 'vuelidate/lib/validators'
  import $ from 'jquery'; 

  export default {
    mixins: [validationMixin],
    validations: {    
      addDecline: {
          decline_reason: { required },
          decline_message: { required },
      },
      proposal: {
        $each: {
            description:{ 
              required,
              maxLength: maxLength(200),
            },
            amount:{ 
              required,
              maxLength: maxLength(5),
              between:between(5 , 50000),
              
            },
            dueDate:{ required },
            dueDates:{},
        },
      },
      cover_letter: {
        maxLength: maxLength(5000),
        required
      },
      createdBy:{
        required,
      }
    },
    data() {
        return {
            user_id:'',
            job_id:'',
            jobDetails:'',
            inviteData:'',
            jobActivities:'',
            clientFullDetails:'',
            clientrating:'',
            declineReason:[
                {id:'',title:'No Data Found'}
            ],
            addDecline: {
                decline_reason: "",
                decline_message: "",
                invited_job:"",
                action: 2,
            },
            paidType:'milstone',
            paidTypeStatus: 'one',
            cover_letter:'',
            proposal:[
              {
                milstone_type: 1,
                description:'',
                acceptStatus: 0,
                dueDate:'',
                amount:'',
                job_id:'',
                created_by:'',
              }
            ],
            questionAnswer:[],
            showError:false,
            amount:{
              totalAmounts : 0,
              serviceFee : 0,
              amountRecive : 0
            },
            attachment:[],
            UploadedFileName:[],
            milestoneBtn:true,
            btndisabled:false,
            showQuesAns: false,
            createdByData:[],
            createdBy: "",
        }
    },
    components : {
    //   VueReadMoreSmooth,
    },
    methods:{
        ...mapActions(["genericAPIPOSTRequest","fetchApis"]),
        // this fun is for to get associate with agency list
        async getAssociateWithagency() {
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "associateWithagency",
                params: {},
            });
            if(res){
              this.createdByData = res;
            }
        },
        // this fun is for to get associate with freelancer list
        async getAssociatedFreelancer() {
            var res =  await this.genericAPIPOSTRequest({
                requestUrl: "associatedFreelancer",
                params: {},
            });
            if(res){
              this.createdByData = res;
            }
        },
        // this fun for upload file
        async UploadFile(e){ 
          var files=e.target.files[0];
          var ext = files.name.split('.').pop();
          if(ext=="pdf" || ext=="word" || ext=="png"|| ext=="jpeg"|| ext=="jpg"){
            const fileSize = files.size / 1024 / 1024; // in MiB
            if ( fileSize <= 40) {
            // if (fileSize >= 2 && fileSize <= 40) {
              const formData = new FormData();
              formData.append('image', files);
              formData.append('user_id', this.user_id);
              formData.append('jobs_id', this.job_id);
              var getData = await this.genericAPIPOSTRequest({
                  requestUrl: "milestone/uplaodData",
                  params: formData,
              });
              if(getData.filename!=""){
                this.attachment.push(getData.name)
                this.UploadedFileName.push(getData.filename)
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
        // this fun for to open choose file
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        // this fun is for to submit proposal
        async submitProposal(){
          this.showError = true;
          var error = 0;
          if(this.createdByData.length == 0){
            this.createdBy = this.user_id;
          }
          this.$v.createdBy.$touch();
          this.$v.proposal.$touch(); 
          this.$v.cover_letter.$touch(); 
          if(this.questionAnswer.length > 0){
            this.questionAnswer.filter((ans,ids) => {
              if(typeof ans.answer == 'undefined'){
                $('#answer_'+ids).html('Answer Required');
                error++;
              }else{
                $('#answer_'+ids).html('');
              }
            });
          }
          
          if (!this.$v.proposal.$invalid && !this.$v.cover_letter.$invalid && !this.$v.createdBy.$invalid && error == 0) {
            this.btndisabled=true;
            var data = this.jobDetails;
            var jobAttachment = this.jobDetails.attachment;
            data.paidType = this.paidType;
            data.application_status = 1;
            data.cost = (document.getElementById('total_amount').textContent);
            data.cover_letter = this.cover_letter;
            data.attachment = this.attachment;
            data.question= this.questionAnswer;
            data.created_by = this.createdBy;
            data.created_user_type = this.$store.state.accountType;
            var response = await this.fetchApis({
                requestUrl: "job/applyJob",
                params: {
                  jobData: data,
                  data: this.getLoginUserIdRequest(),
                }
            });
            // console.log('response',response);
            if(response.data.status == true){
              response = response.data.result;
              this.proposal.map((data)=>{
                  data.job_application_id = response;
                  data.created_by = this.createdBy;
                  data.created_user_type = this.$store.state.accountType;
              })
              console.log('this.proposal',this.proposal);
              var res = await this.genericAPIPOSTRequest({
                requestUrl: "addUpdateMilestoneNew",
                params: {
                    milestone: this.proposal,
                    data: this.getLoginUserIdRequest(),
                  }
              });
              setTimeout(() => {
                this.btndisabled=false;
              }, 1000);
              // console.log('res',res);
              if(res){
                await this.genericAPIPOSTRequest({
                  requestUrl: "addupdateUser_job_apply",
                  params: {
                      "from_user_id": this.jobDetails.user_id,
                      "job_application_id" : response,
                      "job_id" : this.jobDetails.jobs_id,
                      "title" : this.jobDetails.job_title,
                      "description" : this.jobDetails.scope_of_work,
                      "attachment" : jobAttachment,
                    }
                });
                var acceptInvite = await this.genericAPIPOSTRequest({
                    requestUrl: "upateJobInvitation",
                    params: {
                      invited_job:this.inviteData.invited_job,
                      action: 1,
                      action_updated_by:this.$store.state.currentUserData.login_master_id
                    },
                });
                if(acceptInvite){
                  this.inviteData.action =1;
                }
                if(jobAttachment.length > 0){
                  var source = this.jobDetails.attachmentUrl.split("upload");
                  await jobAttachment.map(data=>{
                    this.genericAPIPOSTRequest({
                      requestUrl: "copyPostfile",
                      params: {
                        'from_path':'./upload'+source[1]+'/'+data,
                        'to_path':"./upload/proposal/"+this.jobDetails.user_id+"/"+this.jobDetails.jobs_id+"/"+data,
                      },
                    });
                  });
                  
                }
                this.$toastr.s('Invitation accepted Succesfully');
                // this.$bvModal.hide('sidebar-right')
                this.$refs.sidebar.hide();
              }else{
                setTimeout(() => {
                  this.btndisabled=false;
                }, 1000);
                this.$toastr.e('Invitation accepted Unsuccessfull');
              }
            }else{
              this.$toastr.e(response.data.message);
              return false;
            } 
          }else{
            return false
          }
        },
        // this fun is for select proposal type
        selectPaid(_v){
          this.milestoneBtn=true;
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
        addMilestone(){
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
        removeMilestone(_i){
          this.proposal.splice(_i, 1);
        },
        // this fun is for to remove billing details
        async submitDeclineData(){
          this.$v.addDecline.$touch();
          if (!this.$v.addDecline.$invalid) {
              // console.log('data',this.addDecline);
              // return false;
              var decline = await this.genericAPIPOSTRequest({
                  requestUrl: "upateJobInvitation",
                  params: this.addDecline,
              });
              // consaole.log('response',decline)
              if (decline) {
                  this.inviteData.action = 2;
                  this.$bvModal.hide('decline-modal')
                  this.$toastr.s('Invitation Declined Successfully')
              }
          }
        },
        //this fun is for to get flagging reason
        async getdeclineReason() {
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getdeclineReason",
                params: {'type':'freelancer'},
            });
            if (res) {
                this.declineReason = res;
            }
        },
        
        // this fun is for to get job details
        async getJobDetails(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getJobDetail",
                params: {
                "jobsid": this.job_id,
                },
            });
            if(res.length > 0){
                this.jobDetails = res[0];
                if (this.jobDetails.preference_questions.length > 0 ) {
                  this.questionAnswer=this.jobDetails.preference_questions;
                  this.showQuesAns=true;
                }
                this.getJobActivities();
                this.getInviteDetails();
                this.getClientDetails();
                this.getClietratings();
            }else{
                this.$router.push({name:'myProposals',path:'/freelancer/my-proposals'});
            }
        },
        // this fun is for to get job details
        async getInviteDetails(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getJobInvitation",
                params: {
                "job_id": this.job_id,
                },
            });
            if(res){
                this.inviteData = res;
            }
        },
        // this fun is for to get job acrtivities
        async getJobActivities(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getJobsActivity",
                params: {
                "job_id": [this.job_id],
                },
            });
            if(res){
                this.jobActivities = res[0];
            }
        },
        // this fun is for to get client details
        async getClientDetails(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "/user/getUserDetails",
                params: {
                    "user_id": this.jobDetails.user_id,
                },
            });
            if(res){
                this.clientFullDetails =  res;
            }
        },
        // this fun is for to get client ratings
        async getClietratings(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "/getUserReviewCal",
                params: {
                    "user_id": this.jobDetails.user_id,
                },
            });
            if(res){
                this.clientrating =  res;
            }
        },
    },
    mounted(){
      this.$v.$reset();
        if(this.$route.params.pid != undefined){
            var id = this.decodeId(this.$route.params.pid.slice(1));
            console.log('id',id)
            this.job_id = id;
            this.user_id = this.$store.state.currentUserData.login_master_id;
            this.proposal[0].job_id= this.job_id,
            this.proposal[0].created_by=this.user_id
            this.getJobDetails();
            if(this.$store.state.accountType == 'freelancer'){
              this.getAssociateWithagency();
            }else{
              this.getAssociatedFreelancer();
            }
        }else{
            this.$router.push({name:'myProposals',path:'/freelancer/my-proposals'});
        }
    },
    computed:{
      // this fun is for to calculate total service fees
      serviceFee(){
        let sum = parseInt(0)
        sum = (this.totalAmount*20) / 100;
        return sum;
      },
      // this fun is for to calculate total amount
      totalAmount(){
        let sum = parseInt(0)
        this.proposal.map((item) => {
          if(item["amount"]==""){
            return 0;
          }
          sum = parseInt(sum) + parseInt(item["amount"])
        });
        return sum;
      },
      declineReasons() {
          const errors = [];
          if (!this.$v.addDecline.decline_reason.$dirty) return errors;
          !this.$v.addDecline.decline_reason.required && errors.push("Please Select Reason is required");
          return errors;
      },
      declineMessage() {
          const errors = [];
          if (!this.$v.addDecline.decline_message.$dirty) return errors;
          !this.$v.addDecline.decline_message.required && errors.push("Message is required");
          return errors;
      },
      coverLetterError() {
          const errors = [];
          if (!this.$v.cover_letter.$dirty) return errors;
          !this.$v.cover_letter.required && errors.push("Cover Letter is required");
          !this.$v.cover_letter.maxLength && errors.push("Maximum 5000 Charachter allow");
          return errors;
      },
      
    }
  }
  </script>

  <style>
    .interview-invitation .tags span{padding:6px 12px;}
    .ml--30{margin-left:-30px;}
    .card.interview-invitation {border-radius:20px;}
    .card.interview-invitation  .card-header{border-radius:20px 20px 0 0;}

    .card.activity-job {border-radius:20px;}
    .card.activity-job  .card-header{border-radius:20px 20px 0 0;}
  </style>