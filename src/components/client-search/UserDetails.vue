
<template>
<div class="px-3 py-2 br-20 ">
    <b-card-group deck>
        <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" class="br-20 client-sidebar"
            header-class="py-4 px-4 bg-white br-20">
            <template #header>
                <div class="d-md-flex align-items-center">
                    <h4 class="mb-0 fz-24 fw-500 text-black"><b></b></h4>
                    <div class="ml-auto text-theme d-flex align-items-center">
                        <a class="d-flex align-items-center" :href="$router.resolve({name: 'freelancerDetails',  path:'/client/freelancer-detail', params: {uid: 'A'+encodedid(sideBarData.userDetails.login_master_id)}}).href"
                            target="_blank">
                            <div class="up-icon w-3 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#F2613C" aria-hidden="true"
                                    viewBox="0 0 14 14" role="img">
                                    <path
                                        d="M12 7.252h2V14H0V0h6.602v2.014H2v9.971h10V7.252zM8.602 0v2.014h2.088L6.795 5.935l1.414 1.424L12 3.54v1.898h2V0H8.602z">
                                    </path>
                                </svg>
                            </div>
                            <span class="text-theme">Open profile in a new window</span>
                        </a>
                    </div>
                </div>
            </template>
            <b-row>
                <b-col lg="12" xl="12" sm="12" class="p-0">
                    <div class="py-4 px-4">
                        <div class="d-md-flex align-items-start text-left">
                            <div class="img-wrapper mr-3 pos-rel">
                                <img :src="sideBarData.userDetails.profile_picture_path"
                                    class="img-fluid br--50">
                                <span class="online"></span>
                            </div>
                            <div class="content ml-2">
                                <h4 class="fz-20 fw-600 text-black mr-2 mb-0">
                                    {{shortName(sideBarData.userDetails.first_name,sideBarData.userDetails.last_name)}}</h4>
                                <ul class="mb-0 d-flex align-items-center minus-margin">
                                    <li>
                                        <svg width="24" height="29" viewBox="0 0 24 29" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M11.9999 5.28027C8.37764 5.28027 5.40918 8.40136 5.40918 12.2748C5.40918 14.3585 6.46842 16.8771 8.23787 19.6617C8.85278 20.6294 9.51552 21.5658 10.1854 22.4404C10.6054 22.9889 10.952 23.4148 11.1785 23.6801C11.6242 24.202 12.3759 24.2018 12.8214 23.68C13.0479 23.4148 13.3945 22.9889 13.8145 22.4404C14.4844 21.5658 15.1471 20.6294 15.762 19.6617C17.5315 16.8771 18.5907 14.3585 18.5907 12.2748C18.5906 8.40135 15.6222 5.28027 11.9999 5.28027ZM9.18859 18.847C7.55932 16.283 6.59072 13.9799 6.59072 12.2748C6.59072 9.19124 9.00544 6.65236 11.9999 6.65236C14.9944 6.65236 17.4091 9.19123 17.4092 12.2748C17.4092 13.9799 16.4406 16.283 14.8113 18.847C13.7963 20.4444 12.7477 21.8156 11.9999 22.6934C11.2521 21.8155 10.2036 20.4443 9.18859 18.847ZM12 14.7608C10.7673 14.7608 9.77138 13.5702 9.77138 12.1142C9.77138 10.6582 10.7673 9.4677 12 9.4677C13.2326 9.4677 14.2285 10.6582 14.2285 12.1142C14.2285 13.5703 13.2326 14.7608 12 14.7608ZM12 13.5663C12.6578 13.5663 13.1999 12.9182 13.1999 12.1142C13.1999 11.3103 12.6578 10.6621 12 10.6621C11.3421 10.6621 10.7999 11.3103 10.7999 12.1142C10.7999 12.9182 11.3421 13.5663 12 13.5663Z"
                                                fill="#999999" />
                                        </svg>
                                    </li>
                                    <li>{{sideBarData.userDetails.country_name+', '+sideBarData.userDetails.state_name+', '+sideBarData.userDetails.city_name }}
                                        <!-- - 10:52 am local time-->
                                    </li>
                                </ul>
                                <!-- <h6 class="mb-0"><a class="text-theme">View Profile</a></h6> -->
                                
                                <div class="weightage-wrap">
                                    <h5 class="text-theme d-flex" v-if="sideBarData.userDetails.talent_id > 0"><img :src="getTalentImgs(sideBarData.userDetails.talent_id)" width="22" height="16" style="margin-right:10px;"><b>{{filterNames('quality',sideBarData.userDetails.talent_id)}}</b></h5>
                                    <h6 class="mb-0">{{sideBarData.userDetails.jobSuccessRate}}%</h6>
                                    <b-progress variant="success" :striped="striped" height="5px"
                                        :value="parseInt(sideBarData.userDetails.jobSuccessRate)" :max="max"
                                        animated></b-progress>
                                    <span class="mb-0 text-success"
                                        v-if="sideBarData.userDetails.jobSuccessRate < 20">Not Success</span>
                                    <span class="mb-0 text-success"
                                        v-else-if="sideBarData.userDetails.jobSuccessRate < 50">Success</span>
                                    <span class="mb-0 text-success"
                                        v-else-if="sideBarData.userDetails.jobSuccessRate < 75">Success</span>
                                    <span class="mb-0 text-success"
                                        v-else-if="sideBarData.userDetails.jobSuccessRate < 90">Success</span>
                                    <span class="mb-0 text-success"
                                        v-else-if="sideBarData.userDetails.jobSuccessRate == 100">Completed</span>
                                </div>
                            </div>
                            <div class="ml-auto d-flex align-items-center">
                                <b-dropdown size="md" right class="mr-2 mt-0 t-0"
                                    variant="outline-secondary" toggle-class="text-decoration-none"
                                    no-caret>
                                    <template #button-content>
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </template>
                                    <b-dropdown-item href="javascript:void(0);">
                                        <div class="d-flex align-items-center" @click="$bvModal.show('notemodal'+pageType);getNotedata();getSoftSkill()">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-journals mr-2"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                                <path
                                                    d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                            </svg>
                                            Add notes
                                        </div>
                                    </b-dropdown-item>
                                    
                                    
                                    <b-dropdown-item href="javascript:void(0);">
                                        <div class="d-flex align-items-center" @click="getflagging();$bvModal.show('flagging-modal'+pageType);">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle mr-2" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"/>
                                            </svg>
                                            Flag as inappropriate
                                        </div>
                                    </b-dropdown-item>
                                </b-dropdown>
                                <a class="mr-2 btn-theme" target="_blank"
                                    :href="$router.resolve({name: 'hireFreelancer',  path:'/client/hire-freelancer/', params: {uid: 'A'+encodedid(sideBarData.userDetails.login_master_id)}}).href"
                                    v-if="pageType != 'invitedUser'"
                                    >{{ (pageType == 'inviteHired')?'Rehire':'Hire' }}
                                    </a>
                                <a class="mr-2 btn-theme" 
                                    v-else
                                    href="javascript:void(0)"
                                    v-b-modal.decline-modal-n @click="addDecline.invited_job = sideBarData.userDetails.invited_job" 
                                    >
                                    Decline
                                </a>
                                
                                <b-button class="mr-2 btn-theme" @click="inviteModelData(sideBarData.userDetails)"
                                    v-if="pageType != 'invitedUser' && sideBarData.jobDetails!='' && sideBarData.jobDetails.is_delete == 0"
                                    :disabled="(invitationAlreadybtn == true ) ? true : false "
                                >
                                    Invite to Job</b-button>
                                <a class="mr-2 btn-theme" target="_blank"
                                    :href="$router.resolve({name: 'hireFreelancer',  path:'/client/hire-freelancer/', params: {uid: 'A'+encodedid(sideBarData.userDetails.login_master_id)}}).href"
                                    v-else-if="sideBarData.jobDetails=='' && sideBarData.jobDetails.is_delete == 1"
                                    >
                                    Hire</a>
                                <b-button class="mr-2 btn-theme w-100" @click="inviteModelData(sideBarData.userDetails)"
                                    v-else-if ="pageType != 'invitedUser'"
                                    :disabled="(invitationAlreadybtn == true ) ? true : false "
                                >Invite to Job</b-button>

                                <b-button variant="outline-secondary"
                                    :class="(sideBarData.favorite!='')?'saved-btn':''"
                                    :id="'favorites-'+sideBarData.userDetails.login_master_id"
                                    @click="addFavorite(sideBarData.userDetails.login_master_id)"><i
                                    class="fa fa-heart-o" aria-hidden="true"></i>
                                </b-button>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer"
            header-class="py-4 px-4 bg-white" class="mt-4">
            <b-row>
                <b-col lg="4" xl="4" sm="12" class="p-0">
                    <div
                        class="border-bottom text-left py-4 px-4 d-flex align-items-center justify-content-space-between">
                        <div>
                            <h6><b>${{totalEarning}}</b></h6>
                            <p class="fz-14 fw-600">Total Earnings</p>
                        </div>
                        <div>
                            <h6><b>{{sideBarData.jobHistory.length}}</b></h6>
                            <p class="fz-14 fw-600">Project Completed</p>
                        </div>
                    </div>
                    <div class="border-bottom text-left py-4 px-4">
                        <h5><b>Hours per week</b></h5>
                        <p class="mb-4">{{(sideBarData.userDetails.availabilityName!='' && sideBarData.userDetails.availabilityName!=null)?sideBarData.userDetails.availabilityName:'Not Found'}}<br>
                        </p>

                        <h5><b>Languages</b></h5>
                        <p class="mb-4" v-if="sideBarData.userDetails.language_arr!=''">
                          <span v-for="(lang,index) in sideBarData.userDetails.language_arr" :key="index">
                            <span v-if="sideBarData.userDetails.proficiency_id[index] == 1">{{lang}} : Basic</span>
                            <span v-else-if="sideBarData.userDetails.proficiency_id[index] == 2">{{lang}} : Conversational</span>
                            <span v-else-if="sideBarData.userDetails.proficiency_id[index] == 3">{{lang}} : Fluent</span>
                            <span v-else-if="sideBarData.userDetails.proficiency_id[index] == 4">{{lang}} : Native or Bilingual</span>
                            <br>
                          </span>
                        </p>
                        <p class="mb-1" v-else>Not Found</p>

                        <h5><b>Verification</b></h5>
                        <p class="mb-4"><b>ID:</b> Verified</p>

                        <h5><b>Education</b></h5>
                        <span v-if="sideBarData.education.length > 0">
                            <div class="edu-wrap mb-4" v-for="(education,index) in sideBarData.education"
                                :key="index">
                                <p class="mb-1"><b>{{education.university_name}}</b></p>
                                <p class="mb-0">{{education.course_name+'('+education.start_year+'-'+education.end_year+')'}}</p>
                                <p class="mb-0" v-if="education.education_description!=''">
                                    <read-more more-str="Read more" :text="education.education_description" link="#" less-str="Read less" :max-chars="50"></read-more>
                                </p>
                                
                            </div>
                        </span>
                        <span v-else>
                            <p class="mb-1">Not Found</p>
                        </span>

                        <h5 v-if="sideBarData.userDetails.associate!='' "><b>Associated with</b></h5>
                        <div class="d-flex align-items-center mt-3" v-for="(ass, index) in sideBarData.userDetails.associate" :key="index">
                            <div class="img-associate">
                              <img :src="ass.profile_picture_path" alt="" class="rounded-md shadow w-10 h-10">
                            </div>
                            <div class="ml-2">
                                <a href="javascript:void(0);" @click="$router.push({'name':'agencyPublicProfile','path':'/agency-public-profile','params':{'uid':encodedid(ass.login_master_id)}})" class="d-flex text-black">
                                    <p class="mb-0">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col lg="8" xl="8" sm="12" class="p-0">
                    <div class="border-left border-bottom text-left py-4 px-4" v-if="sideBarData.userDetails!=''">
                        <div class="d-md-flex align-items-center">
                            <h4 class="mb-4 fz-24 fw-500 text-black "><b>{{sideBarData.userDetails.tagline}}</b></h4>
                            <div class="ml-auto">
                                <h5 class="mb-0">${{sideBarData.userDetails.hourly_rate}}/Day</h5>
                            </div>
                        </div>
                        <vue-read-more-smooth :lines="7" class="mt-2"  v-if="sideBarData.userDetails.about_self_desc!=''">
                            <p class="mb-2"> 
                                {{ sideBarData.userDetails.about_self_desc }}
                                <!-- <read-more more-str="Read more" :text="sideBarData.userDetails.about_self_desc" link="#" less-str="Read less" :max-chars="250"></read-more> -->
                            </p>
                        </vue-read-more-smooth>

                    </div>
                    <div class="border-left border-bottom text-left py-4 px-4" v-if="sideBarData.jobHistory.length > 0 || sideBarData.jobUnderprocess.length > 0">
                        <div class="d-md-flex align-items-center mb-3">
                            <h5 class="mr-2 mb-0 fw-600"><b>Work History</b></h5>
                            <!-- <b-button class="mr-2" variant="outline-secondary" size="sm"><i -->
                                    <!-- class="fa fa-ellipsis-h" aria-hidden="true"></i></b-button> -->

                        </div>
                        <div class="tabs-wrapper work-history-wrapper">
                            <b-tabs>
                                <b-tab :title="'Completed jobs ('+sideBarData.jobHistory.length+')' " v-if="sideBarData.jobHistory.length > 0"
                                    active>
                                    <span v-if="sideBarData.jobHistory.length>0">
                                        <b-card-text class="border-bottom"
                                            v-for="(history,index) in sideBarData.jobHistory" :key="index">
                                            <a href="javascript:void(0);" class="text-theme">
                                                <h6>{{history.job_title}}</h6>
                                            </a>
                                            <div class="d-flex align-items-center">
                                                <div class="star-rating mr-2" v-if="history.from_rating !='' && history.to_rating!='' && history.from_rating !=null && history.to_rating!=null">
                                                    <i class="fa fa-star  fz-14" :class="(history.to_rating >=1 )?'text-theme':''" aria-hidden="true"></i>
                                                    <i class="fa fa-star  fz-14" :class="(history.to_rating >=2 )?'text-theme':''" aria-hidden="true"></i>
                                                    <i class="fa fa-star  fz-14" :class="(history.to_rating >=3 )?'text-theme':''" aria-hidden="true"></i>
                                                    <i class="fa fa-star  fz-14" :class="(history.to_rating >=4 )?'text-theme':''" aria-hidden="true"></i>
                                                    <i class="fa fa-star  fz-14" :class="(history.to_rating ==5 )?'text-theme':''" aria-hidden="true"></i>
                                                </div>
                                                <h6 class="mr-2 mb-0"><b>${{history.cost}}</b></h6>
                                                <h6 class="mb-0">{{history.from_date+' - '+history.to_date}}</h6>
                                            </div>
                                            <vue-read-more-smooth :lines="2" class="mt-2" v-if="history.cover_letter!=''">
                                                <p class="text-muted mt-2">{{history.cover_letter}}</p>
                                            </vue-read-more-smooth>
                                            <!-- <p class="text-muted mt-2" v-if="history.cover_letter!=''"><read-more more-str="Read more" :text="history.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></p> -->

                                        </b-card-text>
                                    </span>
                                    <span v-else>
                                        <div class="text-center">
                                            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                                                <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
                                                <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
                                            </svg>
                                            <h4 class="fz-20 fw-600 text-black">You don't have any job history yet</h4>
                                        </div>
                                    </span>
                                </b-tab>
                                <b-tab :title="'In progress ('+sideBarData.jobUnderprocess.length+')'" v-if="sideBarData.jobUnderprocess.length > 0">
                                    <span v-if="sideBarData.jobUnderprocess.length > 0">
                                        <b-card-text class="border-bottom"
                                            v-for="(jobUnderprocess,index) in sideBarData.jobUnderprocess"
                                            :key="index">
                                            <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-1>
                                                <h6>{{jobUnderprocess.job_title}}</h6>
                                            </a>

                                            <div class="d-flex align-items-center">
                                                <h6 class="mr-2 mb-0"><b>$ {{jobUnderprocess.cost}}</b></h6>
                                                <h6 class="mb-0">{{jobUnderprocess.from_date+' - '+jobUnderprocess.to_date}}</h6>
                                            </div>
                                            <!-- <vue-read-more-smooth :lines="2" class="mt-2" v-if="jobUnderprocess.cover_letter">
                                                <p class="text-muted mt-2"> {{jobUnderprocess.cover_letter}}</p>
                                            </vue-read-more-smooth> -->
                                            <p class="text-muted mt-2" v-if="jobUnderprocess.cover_letter!=''"><read-more more-str="Read more" :text="jobUnderprocess.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></p>

                                        </b-card-text>
                                    </span>
                                    <span v-else>
                                        <div class="text-center">
                                            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                                                <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
                                                <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
                                            </svg>
                                            <h4 class="fz-20 fw-600 text-black">You don't have any job Under process yet</h4>
                                        </div>
                                    </span>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                    <b-modal id="modal-1" size="lg" title="Title">
                        <div class="d-md-flex align-items-center mb-4">
                            <ul class="d-flex align-items-center custom-margin fz-18 mb-0">
                                <li>Web Development</li>
                                <li class="ml-2 mr-2">|</li>
                                <li>May 14, 2022 - Sep 5, 2022</li>
                            </ul>
                            <div class="ml-auto">
                                <p class="fz-18 mb-0">Fixed Price</p>
                            </div>
                        </div>
                        <div class="feedback-wrapper">
                            <h4 class="fz-24 fw-600">Job Feedback</h4>
                            <hr>
                            <h5 class="fz-20 fw-600 mb-1">Client's Feedback</h5>
                            <p class="fz-18 text-muted mb-4">No feedback given</p>
                            <h5 class="fz-20 fw-600 mb-1">Freelancer's feedback to client</h5>
                            <ul class="d-flex align-items-center custom-margin">
                                <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                <li><i class="fa fa-star mr-1"></i></li>
                                <li><i class="fa fa-star mr-1"></i></li>
                            </ul>
                            <p class="fz-18 mb-4"><i>" Thank you "</i></p><br>
                        </div>
                        <div class="job-details-wrapper">
                            <h4 class="fz-24 fw-600">Job Details</h4>
                            <hr>
                            <b-row>
                                <b-col lg="6" xl="6" sm="12">
                                    <div class="freelancer-wrap">
                                        <h5 class="fz-20 fw-600 mb-1">Job Description</h5>
                                        <p class="fz-18 text-muted mb-4">Background:</p>
                                        <div class="kdfkjf000"></div>
                                        <p class="fz-18 text-muted mb-2">We are looking for experienced
                                            JavaScript engineers to...</p>
                                        <a href="javascript:void(0);" class="text-theme mb-3 d-block">more</a>
                                        <h5 class="fz-20 fw-600 mb-1">Skills Required</h5>
                                        <ul class="align-items-center fz-14 post tags mb-4 inline-block">
                                            <li class="mr-1 align-items-center inline-block"> Issues/NCR
                                                management</li>
                                            <li class="mr-1 align-items-center inline-block"> Fabrication
                                                schedule follow up</li>
                                            <li class="mr-1 align-items-center inline-block"> Effective
                                                Coordination</li>
                                        </ul>
                                        <div class="d-flex align-items-center">
                                            <div>
                                                <h5 class="fz-20 fw-600 mb-1">Fixed Price Job</h5>
                                                <p class="fz-18 text-muted mb-4">Deliver by: Jul 19, 2022</p>
                                            </div>
                                            <div class="ml-auto">
                                                <h5 class="fz-20 fw-600 mb-1">$14.00</h5>
                                                <p class="fz-18 text-muted mb-4">Budget</p>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0);" class="text-theme mb-3 d-block">View
                                            entire job post</a>
                                    </div>
                                </b-col>
                                <b-col lg="6" xl="6" sm="12">
                                    <div class="freelancer-wrap">
                                        <h5 class="fz-20 fw-600 mb-1">About the client</h5>
                                        <ul class="d-flex align-items-center custom-margin mb-0">
                                            <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                            <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                            <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                            <li><i class="fa fa-star mr-1"></i></li>
                                            <li><i class="fa fa-star mr-1"></i></li>
                                        </ul>
                                        <p class="fz-18 mb-4">4.963 of 8,733 reviews</p>
                                        <h5 class="fz-20 fw-600 mb-1">United Stats</h5>
                                        <p class="fz-18 text-muted mb-4">Santa Clara</p>
                                        <p class="fz-18 text-muted mb-4">13,917 Hires 370 Active</p>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-modal>
                    <div class="border-left border-bottom text-left py-4 px-4" v-if="sideBarData.userDetails.skillName!=''">
                        <h5 class="mr-2 fw-600">Skills</h5>
                        <div class="tags-wrap">
                            <ul v-if="sideBarData.userDetails.skillName!=''">
                                <li v-for="(catname,index) in sideBarData.userDetails.skillName"
                                    :key="index">
                                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                                        <span class="mr-2">{{catname}}</span>
                                    </a>
                                </li>
                            </ul>
                            <ul v-else>
                                <div class="text-center">
                                    <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                                        <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
                                        <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
                                    </svg>
                                    <h4 class="fz-20 fw-600 text-black">You don't have any Skills yet</h4>
                                </div>
                            </ul>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </b-card-group>

    <!-- Certification Start -->
    <CertificationList :getUserCertificationListArr="getUserCertificationListArr"></CertificationList>
    
    <!-- Industry Expersince Start -->
    <!-- <WorkExprincelist :workExprinceList="sideBarData.employmentData"></WorkExprincelist> -->

    <b-card-group deck class="mt-4" v-if="sideBarData.employmentData.length >0 ">
        <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer"
            header-class="bg-white p-0">
            <template #header>
                <div class="bordered border-right-none py-4 px-4">
                    <h4 class="mb-0 fz-24 fw-500 text-black text-left"><b>Employment History
                            {{(sideBarData.employmentData.length>0)?'('+sideBarData.employmentData.length+')':''}}</b></h4>
                </div>
            </template>
            <b-row>
                <b-col lg="12" xl="12" sm="12" class="p-0">
                    <div class=" text-left py-4 px-4" v-if="sideBarData.employmentData.length >0 ">
                        <span v-for="(employment,index) in sideBarData.employmentData" :key="index">
                            <b><h5 class="fw-500 text-black">{{employment.title+' | '+employment.company_name }}</h5>
                            <h6 class="fw-500 text-black">{{employment.from_date+' - '}}{{(employment.is_working == false) ? employment.to_date : 'Present'+' | '+employment.location}} </h6></b>
                            <ol>
                                <vue-read-more-smooth :lines="3">
                                    <li class="fz-18 text-muted fw-400" v-for="(response ,reIndex) in employment.responsibilities" :key="reIndex">
                                      {{response}}
                                    </li>
                                </vue-read-more-smooth>
                            </ol>
                            <hr>
                        </span>
                    </div>
                    <div class="text-left py-4 px-4" v-else>
                        <div class="text-center">
                            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                                <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
                                <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
                            </svg>
                            <h4 class="fz-20 fw-600 text-black">You don't have any history yet</h4>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </b-card-group>

    
                
    <!-- flagging model -->
    <b-modal :id="'flagging-modal'+pageType" size="lg" title="Why are you flagging this?" hide-footer no-close-on-backdrop>
        <form @submit.prevent="submitFlaggingData">
            <b-form-group class="mb-3">
                <b-form-radio-group class="fz-16" :options="flaggingoptions" value-field="id" text-field="title"
                    name="flavour-2a" stacked v-model="addFlagging.flagging_id" :error-messages="flagflagging_id"
                    @input="$v.addFlagging.flagging_id.$touch()" @blur="$v.addFlagging.flagging_id.$touch()">
                </b-form-radio-group>
                <div class="error" v-if="flagflagging_id[0]">{{flagflagging_id[0]}}</div>
            </b-form-group>

            <label class="fz-18 fw-600 mb-2">Please tell us more</label>
            <b-form-textarea id="textarea" placeholder="Share additional details" rows="6" max-rows="8"
                v-model="addFlagging.report_content" :error-messages="flagreport_content"
                @input="$v.addFlagging.report_content.$touch()" @blur="$v.addFlagging.report_content.$touch()">
            </b-form-textarea>
            <div class="error" v-if="flagreport_content[0]">{{flagreport_content[0]}}</div>

            <hr>
            <div class="text-right">
                <a href="javascript:void(0);" class="btn btn-outline-theme mr-2"
                    @click="$bvModal.hide('flagging-modal'+pageType);">Cancel</a>
                <b-button type="buttton" class="btn btn-theme">Submit</b-button>
            </div>
        </form>
    </b-modal>

    <!-- note model -->
    <b-modal :id="'notemodal'+pageType" class="notemodal" size="lg" :title="'Note about '+sideBarData.userDetails.first_name+' '+sideBarData.userDetails.last_name+'.'" hide-footer no-close-on-backdrop>
        <form @submit.prevent="submitNoteData">
            <label class="fz-18 fw-600 mb-2">Note</label><br>
            <b-form-textarea id="textarea" rows="6" v-model="sideBarData.noteData.note" max-rows="8" class="mb-2"
                :error-messages="notedescription" @input="$v.sideBarData.noteData.note.$touch()"
                @blur="$v.sideBarData.noteData.note.$touch()"></b-form-textarea>
            <div class="error" v-if="notedescription[0]">{{notedescription[0]}}</div>
            <span><i class="fa fa-lock" aria-hidden="true"></i> The talent won't see anything you put
                here.</span><br>
            <label class="fz-18 fw-600 mb-2 mt-4">Soft Skills</label><br>
            <div class="tags-wrap mb-1 inline-block">
                <div class="inline-block mr-2 pos-rel" v-for="(soft,index) in SoftSkill" :key="index">
                    <input type="checkbox" class="pos-absolute" v-model="sideBarData.noteData.skill"
                        :id="'control_'+index" name="select" :value="soft.id" search>
                    <label :for="'control_'+index" class="tags-label">
                        <h4 class="mb-0 fw-600">{{soft.title}}</h4>
                    </label>
                </div>
            </div> <br>
            <label class="fz-18 fw-600 mb-2 mt-2" for="tags-pills">Custom Tags</label><br>
            <b-form-tags v-model="sideBarData.noteData.tags" input-id="tags-pills" tag-variant="primary" tag-pills
                separator="" placeholder="Start typing" remove-on-delete></b-form-tags>
            <hr>
            <div class="text-right">
                <a href="javascript:void(0);" class="btn btn-outline-theme mr-2"
                    @click="$bvModal.hide('notemodal'+pageType);">Cancel</a>
                <b-button type="buttton" class="btn btn-theme">Save Note</b-button>
            </div>
        </form>
    </b-modal>

    <!-- modal for job invitation -->
    <b-modal centered no-close-on-backdrop :id="'invite-job-modal-'+pageType" size="lg" title="Invite to job" >
        <div class="flex items-center py-2 mb-4">
        <a class="flex items-center">
            <div class="shadow-lg br-50 p-1 pos-rel">
            <img :src="inviteDatas.image" alt="" class="rounded-md shadow w-14 h-14 br-50">
            <i class="fa fa-circle text-success pos-absolute top-0 right-0 fz-14" aria-hidden="true"></i>
            </div>
            <div class="ml-3 cursor-pointer">
            <h3 class="mb-0 text-black fz-18 fw-600"> {{inviteDatas.name}} </h3>
            <p class="mb-0 fz-16 fw-400 text-muted" style="padding: 0px;"> {{inviteDatas.userType}} </p>
            </div>
        </a>
        </div>
        <div class="message-wrap">
        <div class="form-group mb-2">
            <label class="fz-18 fw-600 mb-2">Message</label>
            <b-form-textarea
            id="textarea"
            v-model="inviteDatas.message"
            placeholder="Hello there!"
            rows="3"
            max-rows="6"
            ></b-form-textarea>
            <!-- :disabled="(PostJobList.length > 0) ? false : true" -->

            <div class="error" v-if="invitation_message[0]">{{invitation_message[0]}}</div>
        </div>
        <div class="form-group" v-if="PostJobList.length > 0">
            <label class="fz-18 fw-600 mb-1">Choose a job</label><br>
            <b-form-select
            v-model="inviteDatas.job_id"
            :options="PostJobList"
            text-field="job_title"
            value-field="jobs_id"
            @change="checkInvitationsent($event)"
            ></b-form-select>
            <div class="error" v-if="invitation_job_id[0]">{{invitation_job_id[0]}}</div>
        </div>
        <div class="flex items-center py-2 text-danger" v-if="invitationAlreadySend">
            <i class="fa fa-exclamation-circle mr-2" aria-hidden="true"></i> Interview in progress
        </div>
        </div>
        
        <template #modal-footer>
        <div class="w-100 text-right">
            <a href="javascript:void(0);" class="text-theme mr-2" @click="resetInvitationModel()">Cancel</a>
            <b-button
                v-if="(PostJobList.length > 0 || urlStatus == false) && postnewJob == false"
                size="lg"
                class="btn btn-theme"
                @click="sendInvitation"
                :disabled="(invitationAlreadySend == true ) ? true : false "
            >Save
            </b-button>
            <b-button
                v-else-if="postnewJob"
                size="lg"
                class="btn btn-theme"
                @click="$router.push({name:'postJobInvite',path:'/client/post-job-invite/',params:{uid:'A'+encodedid(sideBarData.userDetails.login_master_id)}})"
                
                >Complete Your Job Post
            </b-button>
            <b-button
            v-else
            size="lg"
            class="btn btn-theme"
            @click="$router.push({name:'postJobInvite',path:'/client/post-job-invite/',params:{uid:'A'+encodedids(sideBarData.userDetails.login_master_id)}})"
            >Complete Your Job Post
            </b-button>
        </div>
        </template>
    </b-modal>

    <!-- model for confirm reject -->
    <b-modal id="confirm-modal-n" title="Decline Invitation" centered hide-footer size="md" no-close-on-backdrop> 
        <template>
        <div class="p-5 text-center m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            <h5 class="mt-4">Are you sure, Want to Decline Invitation?</h5>
        </div>
        <hr>
        <div>
            <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('confirm-modal')">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="declineInvitation(declineInvitationId)">Confirm</b-button>
            </div>
        </div>
        </template>
    </b-modal>

    <!-- Decline Modal -->
    <b-modal id="decline-modal-n" size="lg" title="Decline" hide-footer no-close-on-backdrop>
        <h4 class="fz-18 text-black text-capitali">Select Decline to remove the freelancer from consideration for this job. Optionally, you can include a message to let the freelancer know why you're not interested.</h4>
        <form @submit.prevent="submitDeclineData">
            <label class="fz-18 fw-600 mb-2">Reason</label><br />
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
            <label class="fz-18 fw-600 mb-2">Message (Optional)</label>
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
                <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('decline-modal-n');">Cancel</a>
                <b-button type="buttton" class="btn btn-theme">Decline</b-button>
            </div>
        </form>
    </b-modal>
</div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  import VueReadMoreSmooth from "vue-read-more-smooth"
  import CertificationList from "@/components/public-profile/public-certification.vue"; 
//   import WorkExprincelist from "@/components/public-profile/public-workExprinceList.vue";

  import { mapActions } from "vuex";
  export default {

    mixins: [validationMixin],

    validations: {
      inviteDatas:{
          'message':{required},
          'job_id':{required},
      },
      addFlagging: {
          flagging_id: { required },
          report_content: { required },
      },
      
      sideBarData: {
          noteData: {
              note: { required },
          }
      },
      addDecline: {
          decline_reason: { required },
          decline_message: { required },
      },
    },
    components : {
      VueReadMoreSmooth,
      CertificationList,
    //   WorkExprincelist
    },
    props:['sideBarData','talentQualilty','pageType','urlStatus'],
    computed:{
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
      notedescription() {
          const errors = []
          if (!this.$v.sideBarData.noteData.note.$dirty) return errors
          !this.$v.sideBarData.noteData.note.required && errors.push('Note is required')
          return errors
      },
      
      flagflagging_id() {
          const errors = []
          if (!this.$v.addFlagging.flagging_id.$dirty) return errors
          !this.$v.addFlagging.flagging_id.required && errors.push('Please Select Flag is required')
          return errors
      },
      flagreport_content() {
          const errors = []
          if (!this.$v.addFlagging.report_content.$dirty) return errors
          !this.$v.addFlagging.report_content.required && errors.push('Description is required')
          return errors
      },
      invitation_message() {
          const errors = []
          if (!this.$v.inviteDatas.message.$dirty) return errors
          !this.$v.inviteDatas.message.required && errors.push('Message is required')
          return errors
      },
      invitation_job_id() {
          const errors = []
          if (!this.$v.inviteDatas.job_id.$dirty) return errors
          !this.$v.inviteDatas.job_id.required && errors.push('Job is required')
          return errors
      },
      filterCategory(){
      // function to compare names
        function compare(a, b) {
          if (a.job_title < b.job_title) return -1;
          if (a.job_title > b.job_title) return 1;
          return 0;
        }
        return this.categoryData.filter(user => {
            return user.role_name.toLowerCase().includes(this.search.toLowerCase());
        }).sort(compare);
      },

      languagefilterData(){
      // function to compare names
        function compare(a, b) {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return 0;
        }
        if(this.languageData.length > 0){
          return this.languageData.filter(data => {
              return data.value.toLowerCase().includes(this.searchLang.toLowerCase());
          }).sort(compare);
        }else{
          return [];
        }
      },
      // function to total burget amount
      totalEarning(){
            var amount=0;
            this.sideBarData.jobHistory.map(data => {
                amount+=parseInt(data.cost);
            });
            return amount;
        },
    },
    data() {
      return {
        inviteDatas:{
          'image':'fldskfskdf',
          'name':'',
          'userType':'',
          'message':'',
          'job_id':this.job_id,
          'user_id':''
        },
        PostJobList:[],
        invitationAlreadySend:false,
        invitationAlreadybtn:false,
        striped: true,
        max: 0,
        addFlagging: {
            flagging_id: '',
            report_content: '',
        },
        flaggingoptions: [],
        SoftSkill: [],
        job_id:'',
        declineInvitationId:'',
        addDecline: {
            decline_reason: "",
            decline_message: "",
            invited_job:"",
            action: 2,
        },
        declineReason:'',
        postnewJob:false,
        getUserCertificationListArr: [],
      }
    },
    methods: {
        async getUserCertificationList(_i) {
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "user/getUserCertificationList",
                params: { user_id: _i },
            });
            this.getUserCertificationListArr = res;
        },
        // this fun is for to encode the id
        encodedids(id){
            return btoa(id);
        },
        //this fun is for to get flagging reason
        async getdeclineReason() {
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getdeclineReason",
                params: {'type':'client'},
            });
            if (res) {
                this.declineReason = res;
            }
        },
        // this fun is for to remove billing details
        async submitDeclineData(){
            this.$v.addDecline.$touch();
            if (!this.$v.addDecline.$invalid) {
                // console.log('data',this.addDecline);
                var decline = await this.genericAPIPOSTRequest({
                    requestUrl: "upateJobInvitation",
                    params: this.addDecline,
                });
                // consaole.log('response',decline)
                if (decline) {
                    this.$bvModal.hide('decline-modal-n')
                    this.$toastr.s('Invitation Declined Successfully')
                }
            }
        },
        // this fun is for to check invitation send to user or not 
        async checkInvitationsent(_i){
            if(_i == 'newpost'){
                this.invitationAlreadySend = false;
                this.postnewJob=true;
                return false;
            }
            this.postnewJob=false;
            var res = await this.genericAPIPOSTRequest({
            requestUrl:'checkInvitationJob',
            params:{
                job_id:_i,
                invited_user_id:this.inviteDatas.user_id
            }
            });
            if(res.length > 0){
                this.invitationAlreadySend = true;
            }else{
                this.invitationAlreadySend = false;
            }
        },
        // this fun is for to send invitation to user
        async sendInvitation(){
            // console.log('data',this.inviteDatas)
            this.$v.inviteDatas.$touch();
            if (!this.$v.inviteDatas.$invalid) {
            var res  = await this.genericAPIPOSTRequest({
                requestUrl:'sendJobInvitation',
                params:{
                    invited_user_id:this.inviteDatas.user_id,
                    job_id:this.inviteDatas.job_id,
                    message:this.inviteDatas.message
                }
            });
            if(res){
                this.$toastr.s('Invitation Sent Successfully');
                this.resetInvitationModel();
            }
            }
        },
        // this fun is for to reset invitation model
        resetInvitationModel(){
            this.$bvModal.hide('invite-job-modal-'+this.pageType);
            this.$v.$reset();
            this.invitationAlreadySend = false;
            this.inviteDatas={
            'image':'',
            'name':'',
            'userType':'',
            'message':'',
            'job_id':this.job_id,
            'user_id':''
            };
        },
        
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for to get posted Jobs
      async getpostedJobs() {
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "getUserPostedJob",
            params: {'filter':1},
        });  
        if(res.length > 0 ){
            this.PostJobList = res;
            this.PostJobList.push({'job_title':'Post new Job','jobs_id':'newpost'});

        }
      },
      // this fun is for to get note data
      async getNotedata(){
        var response = await this.genericAPIPOSTRequest({
            requestUrl: "getNote",
            params: { 'to_user_id': this.sideBarData.userDetails.login_master_id }
        });
        if (response) {
            this.sideBarData.noteData = response;
        }else{
          this.sideBarData.noteData = {
            note:'',
            skill:'',
            tags:[],
          }
        }
      },
      // this fun is for to get note data
      async getFavoritetedata(){
        var favorite = await this.genericAPIPOSTRequest({
          requestUrl: "getfavoritelist",
          params: { "favorite_user_id" :this.sideBarData.userDetails.login_master_id }
        });
        if(favorite.length > 0){
          this.sideBarData.favorite = favorite[0];
        }else{
          this.sideBarData.favorite ='';
        }
      },
      // this fun is for to get sidebar data
      async getSidebarDatas(){
        var user_id = this.sideBarData.userDetails.login_master_id;
        this.getFavoritetedata();
        this.getNotedata();
        this.getUserCertificationList(user_id);

        var education = await this.genericAPIPOSTRequest({
          requestUrl: "user/getUserEducation",
          params: { "user_id" : user_id }
        });
        if(education){
          this.sideBarData.education = education;
        }else{
          this.sideBarData.education ='';
        }

        var jobHistory = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id": user_id,"filter":6},
        });
        if(jobHistory){
          this.sideBarData.jobHistory = jobHistory;  
        }else{
          this.sideBarData.jobHistory = [];
        }

        // var jobUnderprocess = await this.genericAPIPOSTRequest({
        //     requestUrl: "getJobdataList",
        //     params: {"user_id": user_id,"filter":2},
        // });
        // if(jobUnderprocess){
        //   this.sideBarData.jobUnderprocess = jobUnderprocess;
        // }else{
        //   this.sideBarData.jobUnderprocess = [];
        // }

        var employmentData = await this.genericAPIPOSTRequest({
            requestUrl: "user/getWorkExprince",
            params: {user_id: user_id},
        }); 
        if(employmentData){
          this.sideBarData.employmentData = employmentData;
        }else{
          this.sideBarData.employmentData = [];
        }

        if(user_id!='' && this.job_id!=''){
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'checkInvitationJob',
                params:{
                    job_id:this.job_id,
                    invited_user_id: user_id
                }
            });
            if(res.length > 0){
                this.invitationAlreadybtn = true;
            }else{
                this.invitationAlreadybtn = false;
            }
        }
      },

      //this fun is for to get Soft Skill
      async getSoftSkill() {
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getSoftSkill",
              params: {}
          });
          if (res) {
              this.SoftSkill = res;
          }
      },

      //this fun is for to get flagging reason
      async getflagging() {
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "job/getflagginglist",
              params: {}
          });
          if (res) {
              this.flaggingoptions = res;
          }
      },
      // this fun is for to add note for user
      async submitNoteData() {
          this.$v.sideBarData.noteData.$touch();
          if (!this.$v.sideBarData.noteData.$invalid) {
              this.sideBarData.noteData.to_user_id = this.sideBarData.userDetails.login_master_id;
              var res = await this.genericAPIPOSTRequest({
                  requestUrl: "addNote",
                  params: this.sideBarData.noteData
              });
              if (res) {
                  this.$toastr.s('Note Added Successfully');
                  // this.getNotedata(this.sideBarData.userDetails.login_master_id);
                //   this.$bvModal.hide('notemodal'+this.pageType);
                  this.$bvModal.hide('notemodal'+this.pageType)
              }
          }
      },
      
      // this fun is for to add flag on user
      async submitFlaggingData() {
          this.$v.addFlagging.$touch();
          if (!this.$v.addFlagging.$invalid) {
              this.addFlagging.report_user_id = this.sideBarData.userDetails.login_master_id;
              var res = await this.genericAPIPOSTRequest({
                  requestUrl: "addUserflag",
                  params: this.addFlagging
              });
              if (res) {
                  this.$toastr.s('Flag as inappropriate Done');
                  this.$bvModal.hide('flagging-modal'+this.pageType);
              }
          }
      },
      
      // this fun is for to assgin modal value
      inviteModelData(_v){
        // this.$emit('inviteModelData',_v)
        this.inviteDatas.user_id = _v.login_master_id;
        this.inviteDatas.image = _v.profile_picture_path;
        this.inviteDatas.userType = (_v.profileType == 3)?'Freelancer':'Agency';
        this.inviteDatas.name = (_v.first_name!= null && _v.last_name != null)?_v.first_name+' '+_v.last_name:(_v.first_name != null && _v.last_name== null)?_v.first_name:(_v.first_name == null && _v.last_name!= null)?_v.last_name:'';
        this.$bvModal.show('invite-job-modal-'+this.pageType);
        if(this.urlStatus== false){
            this.checkInvitationsent(this.job_id);
        }
      },

      // this fun is for to add to favorite
      async addFavorite(_i) {
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "addremovefavorite",
              params: {
                  'favorite_user_id': _i
              }
          });
          if (res == "added") {
              this.$toastr.s('Added to Favorite');
          } else if (res == "remove") {
              this.$toastr.s('Remove From Favorite');
          }
          this.getFavoritetedata();
      },
      
      // this fun is for to get the talent tag 
      getTalentImgs(_i){
          var name;
          this.talentQualilty.filter(data=>{
            if(data.talent_id==_i){
              name = data.img
              return false;
            }
          });
          return name;
      },
      
      filterNames(_t,_i){
        var name;
        if(_t == 'quality'){
          this.talentQualilty.map(data=>{
            if(data.talent_id == _i){
              name = data.talent_title;
              return false;
            }
          });
        }
        return name;
      },
    },
    mounted() {

        if (this.urlStatus== true) {
            this.getpostedJobs();

        }else{
            this.job_id = this.$route.params.pid;
            this.inviteDatas.job_id = this.job_id;
        }
        if(this.pageType =='invitedUser'){
            this.getdeclineReason();
        }
    }
}
</script>