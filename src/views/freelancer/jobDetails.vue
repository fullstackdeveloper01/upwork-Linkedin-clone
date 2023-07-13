<template>
  <div class="container">
    
    <b-row class="mt-100 freelancer-wrap freelancer-job-detail">
      <b-card-group deck v-if="!proposal_btn">
        <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
          <b-row>
            <b-col md="12" lg="12" xl="12" class="p-0">
              <div class="bordered">
                <div class="d-md-flex align-items-normal py-4 px-4">
                  <i class="fa fa-star mr-4 mt-1" aria-hidden="true"></i>
                  <div>
                    <h4 class="mb-1 fz-18"> You have already submitted a proposal for yourself. However, you can submit additional proposals for other agency freelancers by switching to your agency account</h4>
                    <a href="javascript:void(0);" class="text-theme mb-0" @click="$router.push('/'+$store.state.accountType+'/my-proposals')" >View Proposal</a>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
      <b-card-group deck v-if="inviteData !=''">
        <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
          <b-row>
            <b-col md="12" lg="12" xl="12" class="p-0">
              <div class="bordered">
                <div class="d-md-flex align-items-normal py-4 px-4">
                  <span style="width:25px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.02 8.979a6.01 6.01 0 10-10.517 4.007 6.01 6.01 0 011.502 4.007v1.002h6.01v-.952a5.92 5.92 0 011.443-4.007 6.01 6.01 0 001.563-4.057zM9.005 21h6.01"></path></svg>

                  </span>
                  <div>
                    <h4 class="mb-1 fz-18">You have been invited to this job</h4>
                    <a href="javascript:void(0);" class="text-theme mb-0" @click="$router.push({name: $store.state.accountType+'invitationDetail',path:'/'+$store.state.accountType+'/invitation-detail',params:{pid:'A'+encodedid(jobDetailsWithClientData.jobDetails.jobs_id)}})">View Invitation</a>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
      <b-col>
        <h4 class="mb-5 fz-30 fw-500 text-black"><b>Job Detail</b></h4>
        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>{{jobDetailsWithClientData.jobDetails.job_title}}</b></h4>
            </template>
            <b-row>
              <b-col md="12" lg="9" xl="9" class="p-0">
                <div class="bordered">
                  <div class="d-md-flex align-items-center py-4 px-4">
                    <div>
                      <b-card-text class="text-theme fz-16 fw-600 mb-0">{{jobDetailsWithClientData.jobDetails.quality_inspector}}</b-card-text>
                      <b-card-text class="text-muted fz-14 mb-0">Posted {{jobDetailsWithClientData.jobDetails.time}}</b-card-text>
                    </div>
                    <b-card-text class="ml-auto ml-1 mb-0 d-flex align-items-center">
                      <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 5.28027C8.37764 5.28027 5.40918 8.40136 5.40918 12.2748C5.40918 14.3585 6.46842 16.8771 8.23787 19.6617C8.85278 20.6294 9.51552 21.5658 10.1854 22.4404C10.6054 22.9889 10.952 23.4148 11.1785 23.6801C11.6242 24.202 12.3759 24.2018 12.8214 23.68C13.0479 23.4148 13.3945 22.9889 13.8145 22.4404C14.4844 21.5658 15.1471 20.6294 15.762 19.6617C17.5315 16.8771 18.5907 14.3585 18.5907 12.2748C18.5906 8.40135 15.6222 5.28027 11.9999 5.28027ZM9.18859 18.847C7.55932 16.283 6.59072 13.9799 6.59072 12.2748C6.59072 9.19124 9.00544 6.65236 11.9999 6.65236C14.9944 6.65236 17.4091 9.19123 17.4092 12.2748C17.4092 13.9799 16.4406 16.283 14.8113 18.847C13.7963 20.4444 12.7477 21.8156 11.9999 22.6934C11.2521 21.8155 10.2036 20.4443 9.18859 18.847ZM12 14.7608C10.7673 14.7608 9.77138 13.5702 9.77138 12.1142C9.77138 10.6582 10.7673 9.4677 12 9.4677C13.2326 9.4677 14.2285 10.6582 14.2285 12.1142C14.2285 13.5703 13.2326 14.7608 12 14.7608ZM12 13.5663C12.6578 13.5663 13.1999 12.9182 13.1999 12.1142C13.1999 11.3103 12.6578 10.6621 12 10.6621C11.3421 10.6621 10.7999 11.3103 10.7999 12.1142C10.7999 12.9182 11.3421 13.5663 12 13.5663Z" fill="#999999"/>
                      </svg>
                      {{jobDetailsWithClientData.jobDetails.country_name+', '+jobDetailsWithClientData.jobDetails.state_name+', '+jobDetailsWithClientData.jobDetails.city_name}}
                    </b-card-text>
                  </div>
                </div>
                <div class="border-bottom border-right p-4">
                  <b-card-text class="text-muted mb-0" v-html="jobDetailsWithClientData.jobDetails.scope_of_work"></b-card-text>
                </div>
                <div class="border-bottom border-right p-4 pt-5 pb-5">
                  <b-row>
                    <b-col xl="6" lg="6" md="12">
                      <div class="d-flex align-items-center">
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
                          <b-card-text class="text-black fz-16 mb-2 fw-600">{{(jobDetailsWithClientData.jobDetails.budget_type=="A")?'Day Rate':'Monthly Rate'}}</b-card-text>
                          <b-card-text class="text-muted fz-14 mb-0">{{jobDetailsWithClientData.jobDetails.budget}} {{(jobDetailsWithClientData.jobDetails.budget_type=="A")?'Per Day':'Per Month'}}</b-card-text>
                        </div>
                      </div>
                    </b-col>
                    <b-col xl="6" lg="6" md="12">
                      <div class="d-flex align-items-center">
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
                          <b-card-text class="text-black fz-16 mb-2 fw-600">{{jobDetailsWithClientData.jobDetails.employment_Text}}</b-card-text>
                          <b-card-text class="text-muted fz-14 mb-0">{{jobDetailsWithClientData.jobDetails.employment_Name}}</b-card-text>
                        </div>
                      </div>
                    </b-col>
                    <b-col xl="6" lg="6" md="12">
                      <div class="d-flex align-items-center">
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
                        <div class="content ml-2">
                          <b-card-text class="text-black fz-16 mb-2 fw-600">{{jobDetailsWithClientData.jobDetails.experience_level_title}}</b-card-text>
                          <b-card-text class="text-muted fz-14 mb-0">{{jobDetailsWithClientData.jobDetails.experience_level_description}}</b-card-text>
                        </div>
                      </div>
                    </b-col>
                    <b-col xl="6" lg="6" md="12">
                      <div class="d-flex align-items-center">
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
                        <div class="content ml-2">
                          <b-card-text class="text-black fz-16 mb-2 fw-600">Scope</b-card-text>
                          <b-card-text class="text-muted fz-14 mb-0">{{jobDetailsWithClientData.jobDetails.project_type}}, {{ jobDetailsWithClientData.jobDetails.project_length_title }}</b-card-text>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <div class="bordered p-4" v-if="jobDetailsWithClientData.jobDetails.attachment.length > 0">
                  <h4 class="fz-18 fw-600 text-black">Attachment</h4>
                  <div class="d-flex align-items-center">
                    <!-- <ul  class="ml-2 mt-4 attachment "  v-if="jobDetailsWithClientData.jobDetails.attachment" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                      <i class="fa fa-file border-none"></i>
                      <li class="attatchment-wrap mr-5 mb-2" v-for="(attc, index) in jobDetailsWithClientData.jobDetails.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                        <a :href="jobDetailsWithClientData.jobDetails.attachmentUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                        <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index)"></i>
                      </li>
                    </ul> -->
                    <ul  class="ml-2 pl-0 mt-4 attachment"  v-if="jobDetailsWithClientData.jobDetails.attachment.length > 0" style="padding: 6px 0px;">
                      <template v-for="(attc, index) in jobDetailsWithClientData.jobDetails.attachment">
                        <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                          <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                          <a :href="jobDetailsWithClientData.jobDetails.attachmentUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
                <!-- <div class="border-bottom p-4">
                  <b-card-text class="text-black fz-18 mb-4 fw-600">You will be asked to answer the following questions when submitting a proposal</b-card-text>
                  <b-card-text class="text-muted fz-14 mb-3">Do you have an apple developer account?</b-card-text>
                  <b-card-text class="text-muted fz-14 mb-0">Describe your approach to build and ios app from the flutter</b-card-text>
                </div> -->
                <div class="p-4 mb-2 border-right last-child" v-if="jobDetailsWithClientData.jobDetails.preference_questions">
                  <b-row>
                    <!-- <b-col>
                      <b-card-text class="text-black fz-18 mb-4 fw-600">Preferred Qualifications</b-card-text>
                      <b-card-text class="text-muted fz-14 mb-1">{{jobDetailsWithClientData.jobDetails.minimum_certification}}</b-card-text>
                    </b-col> -->
                    <b-col xl="12" lg="12" md="12">
                      <div class="mb-2 mb-sm-0">
                        <b-row>
                          <b-col xl="12" lg="12" sm="12" class="pt-sm-0">
                            <b-card-text class="text-black fz-18 mb-4 fw-600">You will be asked to answer the following questions when submitting a proposal:</b-card-text>
                            <div class="card-section">
                              <p class="text-muted mb-1" v-for="(ques,id) in jobDetailsWithClientData.jobDetails.preference_questions" :key="id">{{id+1}}. {{ques.text}}</p>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                    <b-col xl="6" lg="6" md="6">
                      <b-card-text class="text-black fz-18 mb-4 fw-600">Preferred Qualification</b-card-text>
                      <b-card-text class="text-muted mb-1" v-if="jobDetailsWithClientData.jobDetails.preference_languages_arr.length >0">Other languages: <span class="fz-14 mb-1 fw-600" v-for="(other_lang, id) in jobDetailsWithClientData.jobDetails.preference_languages_arr" :key="id">{{(id!=0)?', ':' '}}{{other_lang.value}}</span></b-card-text>
                      <b-card-text class="text-muted mb-1">English: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobDetails.english_level}}</span></b-card-text>
                    </b-col>
                    <b-col xl="6" lg="6" md="6">
                      <b-card-text class="text-black fz-18 mb-4 fw-600">Activity on this job</b-card-text>
                      <b-card-text class="text-muted mb-1">Total Applicants: {{jobDetailsWithClientData.jobActivities.total_application}}</b-card-text>
                      <b-card-text class="text-muted fz-16 mb-1 fw-600">Last Viewed by client: <span class="fz-14 mb-1 fw-600">3 days ago</span></b-card-text>
                      <b-card-text class="text-muted fz-16 mb-1 fw-600">Interviewing: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobActivities.interviewing}}</span></b-card-text>
                      <b-card-text class="text-muted fz-16 mb-1 fw-600">Invites Sent: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobActivities.send_invites}}</span></b-card-text>
                      <b-card-text class="text-muted fz-16 mb-1 fw-600">Unanswed invites: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobActivities.unanswerd_invites}}</span></b-card-text>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col md="12" lg="3" xl="3" class="p-0" >
                <div class="bordered py-3 px-20 text-center">
                  <b-button class="btn-theme btn-block mb-2 w-100" v-if="proposal_btn && inviteData=='' || inviteData.action == 1" @click="submitProposal(jobDetailsWithClientData.jobDetails.jobs_id)">Submit a Proposal</b-button><br>
                  <b-button class="btn-outline-theme btn-block w-100" v-on:click="savePost(jobDetailsWithClientData.jobDetails,0)" >Save Job</b-button>
                </div>
                <div class="bordered py-4 px-4">
                  <h5 class="fz-18 fw-600">About the client</h5>
                  <div class="star-rating mb-3">
                    <label for="5-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 1)?'active':''">&#9733;</label>
                    <label for="4-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 2)?'active':''">&#9733;</label>
                    <label for="3-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 3)?'active':''">&#9733;</label>
                    <label for="2-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 4)?'active':''">&#9733;</label>
                    <label for="1-star" class="star" :class="(jobDetailsWithClientData.clientrating.rating == 5)?'active':''">&#9733;</label>
                  </div>
                  <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.nationality}}</h5>

                  <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.postedJob}} Jobs Posted</h5>
                  <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hireRate}}% Hire Rate, {{jobDetailsWithClientData.clientFullDetails.openJob}} Open Jobs</p>

                  <h5 class="fz-18 fw-600">${{changeAmountvalue(jobDetailsWithClientData.clientFullDetails.totalSpent)}} Total Spent</h5>
                  <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hired}} {{(jobDetailsWithClientData.clientFullDetails.hired > 0)?"Hire's":'Hire'}}</p>

                  <p class="r-about fz-16 mb-0">Member Since {{jobDetailsWithClientData.clientFullDetails.member_since}} </p>
                </div>
                <div class="bordered py-4 px-4 no-bottom-border no-border-right">
                  <h5 class="fz-18 fw-600">Job Link</h5>
                  <input type="text" class="form-control" v-on:focus="$event.target.select()" 
                    ref="clone" 
                    readonly 
                      :value="jobLink"/>
                  <a href="javascript:void(0);" v-on:click="copyClipboad" class="text-theme mb-4 d-block"><small>Copy link</small></a>

                  <h5 class="fz-18 fw-600">Skills</h5> 
                  <ul class="inline-block fz-14 post tags mb-4">
                    <li class="mr-1 inline-flex" v-for="(skill,ids) in jobDetailsWithClientData.jobDetails.skill_name" :key="ids"> {{skill}}  </li>
                  </ul>

                  <h5 class="fz-18 fw-600">Project Schedule</h5>
                  <p class="r-about fz-16">{{jobDetailsWithClientData.jobDetails.from_date_full}}  -  {{jobDetailsWithClientData.jobDetails.to_date_full}}</p>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>                   
      </b-col>
    </b-row>
    <b-row class="mt-3 freelancer-wrap freelancer-job-detail" v-if="similarJobsData.length > 0" >
      <b-col>
        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>Similar Jobs on Qapin</b></h4>
            </template>
            <b-row>
              <b-col cols="12" class="py-4 px-4">
                <ul class="similar-jobs">
                  <li class="mb-3" v-for="(similarJob,id) in similarJobsData" :key="id"><a :href="$router.resolve({name: $store.state.accountType+'jobDetails',  path:'/'+$store.state.accountType+'/job-details', query: {jobDetailsWithClientData: similarJob.jobs_id}}).href"><span class="text-theme">{{similarJob.job_title}}</span></a> | <span> {{similarJob.country_name+', '+similarJob.state_name+', '+similarJob.city_name}}.</span>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <b-row class="mt-3 freelancer-wrap freelancer-job-detail" v-if="jobDetailsWithClientData.clientJobsData.length > 0">
      <b-col>
        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>Other Open Jobs by this Client</b></h4>
            </template>
            <b-row>
              <b-col cols="12" class="py-4 px-4">
                <ul class="similar-jobs">
                  <span  v-for="(clientJobs,ids) in jobDetailsWithClientData.clientJobsData" :key="ids">
                  <li class="mb-3" v-if="ids <= 4"><a :href="$router.resolve({name: $store.state.accountType+'jobDetails',  path:'/'+$store.state.accountType+'/job-details', query: {jobDetailsWithClientData: clientJobs.jobs_id}}).href"><span class="text-theme" >{{clientJobs.job_title}}.</span></a> | <span>{{clientJobs.employment_Name}} | {{clientJobs.country_name+', '+clientJobs.state_name+', '+clientJobs.city_name}}.</span></li>
                  </span>
                </ul>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import axios from 'axios'
let base_url = "http://qapin_mvp5.manageprojects.in/";
export default {
  data: () => ({
    job_id:'',
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
    headToken:'',
    similarJobsData:'',
    user_id:'',
    proposal_btn:true,
    jobDetailsWithClientData:{
      jobDetails:[],
      jobApplicationStatus:'',
      clientJobsData : '',
      clientJobshistoryData : '',
      clientFullDetails : '',
      clientrating : '',
      jobActivities:'',
    },
    jobLink:'',
    inviteData:'',
  }),
  // props: ['jobDetailsWithClientData'],
  methods:{
    ...mapActions(["genericAPIPOSTRequest"]),
    
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
    // this fun is for to get job activities
    async getJobActivities(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "getJobsActivity",
            params: {
            "job_id": [this.job_id],
            },
        });
        if(res){
            this.jobDetailsWithClientData.jobActivities = res[0];
        }
    },
    // this fun is for copy url
    copyClipboad(){
      this.$refs.clone.focus();
      document.execCommand('copy');
    },
    //this fun for to save & unsave post
    savePost(jobdata){
      var send_jobdata = {
        "action":3,
        "jobData":jobdata
      };
      axios.post(base_url+'api/job/addBookmark',send_jobdata,{headers: this.headToken}).then((response)=>{
        if(response.data.status ==  true){
          this.jobDetailsWithClientData.jobDetails.action = 3;
          this.$toastr.s('Post Saved Successfull');
        }else{
            this.$toastr.e('Post Save Unsuccessfull');
        }
      });
    },
    // this fun for to go job proposal
    submitProposal(datas) {
      this.$router.push({
          name: this.$store.state.accountType+'submitProposal',
          path:'/'+this.$store.state.accountType+'/submit-proposal',
          query: {jobDetailsWithClientData: datas}
          });

    },
    // this fun is for to get milestone data
    async getmilestoneData(){
      var getMilestoneData = await this.genericAPIPOSTRequest({
            requestUrl: "getCreatedMilestone",
            params: {
              "job_id":this.job_id,
              "user_id": this.user_id
            },
      });
      if (getMilestoneData.milestone.length > 0 ) {
        this.proposal_btn = false;
      }else{
        this.proposal_btn = true;
      }
    },
    // this fun is for to get similar job data
    async getsimilarJobData(){
      var similarjobs = await this.genericAPIPOSTRequest({
            requestUrl: "getJobsList",
            params: {
              // "user_id": this.login_user_id,
              "search": {"category_id":this.jobDetailsWithClientData.jobDetails.quality_inspector_id}
            },
      });
      if (similarjobs.length > 0 ) {
        this.similarJobsData = similarjobs;
      }
    }
  },
  mounted() {
    this.user_id = this.$store.state.currentUserData.login_master_id;
    // this is header for api
    this.headToken= {"Authorization": 'Bearer '+this.$store.state.currentUserData.token};

    // this is for get id from url
    var jobId = this.$route.query.jobDetailsWithClientData;
    this.job_id = jobId;
    // this function is for get post details
    var apiData ={
      'jobsid':[jobId]
    };
    axios.post(base_url+'api/getJobDetail',apiData,{"headers":this.headToken}).then((response)=>{
      if(response.data.status == true){
        this.jobDetailsWithClientData.jobDetails =  response.data.result[0];
        this.jobLink= window.location.origin+'/'+this.$store.state.accountType+'/job-details?jobDetailsWithClientData='+this.jobDetailsWithClientData.jobDetails.jobs_id;
        // this function is for get job Application Status
        var jobApplicationStatus = {
          "jobsid": jobId,
          "user_id":this.jobDetailsWithClientData.jobDetails.user_id
        };
        axios.post(base_url+'api/getJobApplicantStatus',jobApplicationStatus,{"headers":this.headToken}).then((response)=>{
          if(response.data.status == true){
            this.jobDetailsWithClientData.jobApplicationStatus =  response.data.result;
          }else{
            this.jobDetailsWithClientData.jobApplicationStatus =  '';
          }
        });
        // this function is for get Client jobs data
        var clientJobsapi = {
            "filter": "",
            "search": {},
            "user_id": this.jobDetailsWithClientData.jobDetails.user_id
        }
        axios.post(base_url+'api/getUserPostedJob',clientJobsapi,{'headers':this.headToken}).then((response)=>{
          if (response.data.status==true) {
            this.jobDetailsWithClientData.clientJobsData =  response.data.result;
            this.jobDetailsWithClientData.clientJobsData.filter((jobdaata,id)=>{
              if(jobdaata.jobs_id == jobId){
                this.jobDetailsWithClientData.clientJobsData.splice(id,1);
              }
            })
          }else{
            this.jobDetailsWithClientData.clientJobsData =  [];
          }
        });
        // this function is for get Client details
        var clientDetailsapi = {
            "user_id": this.jobDetailsWithClientData.jobDetails.user_id
        }
        axios.post(base_url+'api/user/getUserDetails',clientDetailsapi,{headers: this.headToken}).then((response)=>{
          if(response.data.status ==  true){
            this.jobDetailsWithClientData.clientFullDetails =  response.data.result;
          }else{
            this.jobDetailsWithClientData.clientFullDetails =  '';
          }
        });
        // this function is for get client rating
        var clientRatingsapi = {
            "user_id": this.jobDetailsWithClientData.jobDetails.user_id
        }
        axios.post(base_url+'api/getUserReviewCal',clientRatingsapi,{headers: this.headToken}).then((response)=>{
          if(response.data.status ==  true){
            this.jobDetailsWithClientData.clientrating =  response.data.result;
          }else{
            this.jobDetailsWithClientData.clientrating =  '';
          }
        });
        // this function is for get client Jobs history
        var clientJobshistoryapi = {
            "filter": 4,
            "search": {},
            "user_id": this.jobDetailsWithClientData.jobDetails.user_id
        }
        axios.post(base_url+'api/getUserPostedJob',clientJobshistoryapi,{'headers':this.headToken}).then((response)=>{
          if (response.data.status==true) {
            this.jobDetailsWithClientData.clientJobshistoryData =  response.data.result;
          }else{
            this.jobDetailsWithClientData.clientJobshistoryData =  [];
          }
        });
      }
    });

    // console.log('data',this.jobDetailsWithClientData);
    // ------------------------------- this is for to recent post data ------------------------------- 
    // var  similarjobsApidata= {
    // };
    // this fun is for similar jobs
    // var getsimilarjobData = {
    //     "user_id": this.login_user_id,
    //     "search": {"category_id":this.jobDetailsWithClientData.jobDetails.quality_inspector_id}
    //   };
    // axios.post(this.$store.state.baseUrl+'getJobsList',getsimilarjobData,{headers: this.headToken}).then((response)=>{
    // // axios.post(base_url+'api/getSimilarjob',similarjobsApidata,{headers: this.headToken}).then((response)=>{
    //   if(response.data.status ==  true){
    //     this.similarJobsData = response.data.result;
    //   }else{
    //     this.similarJobsData = [];
    //   }
    // })
    this.getsimilarJobData();
    // ------------------------------- this is for to recent post data end-----------------------------

    // this fun is for to check Proposal data
    // var getmilestoneData = {
    //   "job_id":jobId,
    //   "user_id": this.user_id
    // };
    // axios.post(base_url+'api/getCreatedMilestone',getmilestoneData,{headers: this.headToken}).then((response)=>{
    //   if(response.data.status==true){
    //     this.proposal_btn = false;
    //   }else{
    //     this.proposal_btn = true;
    //   }
    // })
    this.getJobActivities();
    this.getmilestoneData();
    this.getInviteDetails();
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
  body{font-family: 'Source Sans Pro', sans-serif!important;}
  .text-muted{color:#979797!important;}
  .ralative {padding-bottom:0px;}
  .theme-bg{background-color: #FFF6F4!important;}
  .bg-none{background-color:transparent;}
  .bordered{border-bottom: 1px solid #EBEBEB!important;border-right: 1px solid #EBEBEB;}
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .search-bar .input-group-text{border-left:0px!important;}
  .freelancer-wrap .nav-pills .nav-link.active, .nav-pills .show > .nav-link{background-color:#fff!important;color:#F2613B!important;font-weight:600;border-bottom: 3px solid #f2613b;border-radius: 0px;}
  .freelancer-wrap .nav-pills .badge{border-radius: 50%;padding: 8px 7px;background-color:#eee;color:#000;}
  .freelancer-wrap .nav-pills .nav-link{color:#999999;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link:hover{color:#F2613B!important;;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link.active .badge, .nav-pills .show > .nav-link .badge{background-color: #F2613B!important;border-radius: 50%;font-size: 10px!important;padding: 7px 6px;color:#fff!important;}
  .freelancer-wrap .post{margin-left:-32px;}
  .freelancer-wrap .post li{font-size:14px;}
  .freelancer-wrap .tags li{background: #FCFCFC;border: 1px solid #F2613C;border-radius: 100px;padding: 2px 15px;}
  .freelancer-wrap .job-card{border-bottom:1px solid #eee;padding-bottom:50px;margin-bottom:50px;}
  .freelancer-wrap .job-card:last-child{border-bottom:0px;}
  .freelancer-wrap .br-50{border-radius:50%!important;}
  .freelancer-wrap .btn-like{padding:10px!important;}
  .freelancer-wrap .btn-archive{padding:10px 13px!important;}
  .freelancer-wrap .action-btn{position: absolute;right: 25px;}
  .freelancer-wrap .fz-14{font-size:14px;}
  .freelancer-wrap .profile .img-holder{box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);border-radius: 10px;width:100px; height:100px;margin:0 auto;}
  .freelancer-wrap .profile .img-holder img{object-fit:scale-down;width:100%;height:100%;}
  .freelancer-wrap .profile span{position: absolute;background-color: #72e55f;width: 10px;height: 10px;border-radius: 50%;border: 1px solid #2dca14;right: -5px;top: 17px;}
  .freelancer-wrap .card{border-radius: 20px!important;}
  .freelancer-wrap .card-body{border-radius: 20px;}
  .freelancer-wrap .like-jobs .card{border-radius: 20px 20px 0 0!important;}
  .freelancer-wrap .like-jobs .card-header{border-radius: 20px 20px 0 0!important;}
  .freelancer-wrap .like-jobs .card-body{border-radius: 0 0 20px 20px !important;border:0px;}
  .freelancer-wrap .card-body{border-radius:0 0 20px 20px;}
  .freelancer-wrap .card-header{border-radius:20px 20px 0 0!important;}
  .freelancer-wrap .my-proposal ul{margin-left:-32px;}
  .freelancer-wrap a {text-decoration:none;}
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fw-600{font-weight:600;}
  .available-span{background: #FCFCFC;border: 1px solid #F2613C;border-radius: 100px;padding: 6px 12px;color: #F2613C;font-size: 16px;}
  .freelancer-job-detail .card-body{padding: 0px 11px;}
  .last-child{border-radius:0 0 0 20px;}
  .mb-23{margin-bottom:23px;}
  .star-rating {display:flex;font-size:1.5em;justify-content:space-between;padding:0;text-align:center;width:6em;}
  .star-rating input {display:none;}
  .star-rating label {color:#D4D5CF;}
  .star-rating label.active {color:#FF8E3C;}
  .r-about{color:#979797;}
  .no-bottom-border{border-bottom:0px!important;}
  .similar-jobs{margin-left:-32px;}
  .border-top-0{border-top:0px!important;}
  .py-13{padding-top: 3.2rem;padding-bottom: 3.2rem;}
  .table .last-child {border-top: 1px solid #adb1b6!important;}
  .table > :not(:first-child) {border-top: 0px!important;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  .fz-30{font-size:26px!important;}
  .inline-block{display:inline-block;}
  .inline-flex{display:inline-flex;}
  .no-border-right{border-right:0px!important;}
</style>
