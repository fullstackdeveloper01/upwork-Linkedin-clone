<template>
    <b-container>
        <div class="msgdetails mt-100">
            <div class="px-3 py-2">
                <b-card-group deck>
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                    <b-row>
                        <b-col lg="12" xl="12" sm="12" class="p-0">
                        <div class="bordered">
                            <div class="d-flex align-items-start py-4 px-4">
                            <div class="d-flex align-items-center text-left">
                                <div class="img-wrapper mr-3">
                                <img :src="messageData.userDetails.profile_picture_path_url" class="img-fluid">
                                </div>
                                <div class="content ml-2">
                                <h4 class="fz-20 fw-600 text-black mr-2 mb-0">{{messageData.userDetails.first_name+' '+messageData.userDetails.last_name}}</h4>
                                <ul class="mb-0 d-flex align-items-center minus-margin">
                                    <li>
                                    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 5.28027C8.37764 5.28027 5.40918 8.40136 5.40918 12.2748C5.40918 14.3585 6.46842 16.8771 8.23787 19.6617C8.85278 20.6294 9.51552 21.5658 10.1854 22.4404C10.6054 22.9889 10.952 23.4148 11.1785 23.6801C11.6242 24.202 12.3759 24.2018 12.8214 23.68C13.0479 23.4148 13.3945 22.9889 13.8145 22.4404C14.4844 21.5658 15.1471 20.6294 15.762 19.6617C17.5315 16.8771 18.5907 14.3585 18.5907 12.2748C18.5906 8.40135 15.6222 5.28027 11.9999 5.28027ZM9.18859 18.847C7.55932 16.283 6.59072 13.9799 6.59072 12.2748C6.59072 9.19124 9.00544 6.65236 11.9999 6.65236C14.9944 6.65236 17.4091 9.19123 17.4092 12.2748C17.4092 13.9799 16.4406 16.283 14.8113 18.847C13.7963 20.4444 12.7477 21.8156 11.9999 22.6934C11.2521 21.8155 10.2036 20.4443 9.18859 18.847ZM12 14.7608C10.7673 14.7608 9.77138 13.5702 9.77138 12.1142C9.77138 10.6582 10.7673 9.4677 12 9.4677C13.2326 9.4677 14.2285 10.6582 14.2285 12.1142C14.2285 13.5703 13.2326 14.7608 12 14.7608ZM12 13.5663C12.6578 13.5663 13.1999 12.9182 13.1999 12.1142C13.1999 11.3103 12.6578 10.6621 12 10.6621C11.3421 10.6621 10.7999 11.3103 10.7999 12.1142C10.7999 12.9182 11.3421 13.5663 12 13.5663Z" fill="#999999"/>
                                    </svg>
                                    </li>
                                    <li>{{messageData.userDetails.country_name+', '+messageData.userDetails.state_name+', '+messageData.userDetails.city_name }}<!-- - 10:52 am local time--></li>
                                </ul>
                                <!-- <h6 class="mb-0"><a href="javascript:void(0);" class="text-theme">View Profile</a></h6> -->
                                <h6 class="mb-0"><a class="text-theme" href="javascript:void(0);" @click="$router.push({name:'ViewProfile',path:'/client/jobpostreview/ViewProfile',params:{pid:job_id,uid:messageData.userDetails.user_id}}).href">View Profile</a></h6>
                                <div class="weightage-wrap">
                                    <h6 class="mb-0">{{messageData.userDetails.profileSucessRate}}%</h6>
                                    <b-progress variant="success" :striped="striped" height="10px" :value="messageData.userDetails.profileSucessRate" :max="max" show-progress animated></b-progress>
                                    <span class="mb-0 text-success" v-if="messageData.userDetails.profileSucessRate < 20">Incomplete</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 50">Success</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 75">Success</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 90">Success</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate == 100">Completed</span>
                                </div>
                                </div>
                            </div>
                            <div class="ml-auto d-flex align-items-center">
                                <b-dropdown size="md" right class="mr-2 mt-0 t-0" variant="outline-secondary" toggle-class="text-decoration-none" no-caret>
                                    <template #button-content>
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </template>
                                    <b-dropdown-item href="javascript:void(0);">
                                        <div class="d-flex align-items-center" v-b-modal.notemodal>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals mr-2" viewBox="0 0 16 16">
                                                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
                                                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
                                            </svg>
                                            Add notes
                                        </div>
                                    </b-dropdown-item>
                                    <!-- <b-dropdown-item href="javascript:void(0);" @click="proposalDislike(messageData.proposalDetails,4)" v-if="messageData.proposalDetails.application_status !=8">
                                        <div class="d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-zip mr-2" viewBox="0 0 16 16">
                                                <path d="M5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.11 0l-.929-.62a1 1 0 0 1-.415-1.074L5 8.438V7.5zm2 0H6v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 0 1 7 8.438V7.5z"/>
                                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1h-2v1h-1v1h1v1h-1v1h1v1H6V5H5V4h1V3H5V2h1V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                            </svg>
                                            Archived
                                        </div>
                                    </b-dropdown-item> -->
                                    <b-dropdown-item href="javascript:void(0);">
                                        <div class="d-flex align-items-center" v-b-modal.decline-modal>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon mr-2" viewBox="0 0 16 16">
                                                <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                            Decline Candidate 
                                        </div>
                                    </b-dropdown-item>
                                    <b-dropdown-item href="javascript:void(0);">
                                        <div class="d-flex align-items-center" v-b-modal.flagging-modal>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle mr-2" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"/>
                                            </svg>
                                            Flag as inappropriate
                                        </div>
                                    </b-dropdown-item>
                                </b-dropdown>
                                <span v-if="messageData.proposalDetails.application_status !=2 && messageData.proposalDetails.application_status > 4">
                                    <b-button class="mr-2 btn-outline-theme" v-if="messageData.proposalDetails.application_status != 3" @click="proposalLike(3)">Shortlist</b-button>
                                    <b-button class="mr-2 btn-outline-theme" v-else>Shortlisted</b-button>
                                </span>
                                <!-- <b-button class="mr-2 btn-outline-theme" @click="proposalLike(3)">Shortlist</b-button> -->
                                <a class="mr-2 btn-theme" target="_blank" :href="$router.resolve({name:'hiredetails',path:'/client/hire-details',params:{ pid:job_id,uid:messageData.userDetails.user_id}}).href">Hire Freelancer</a>
                                <!-- <b-button variant="outline-secondary"><i class="fa fa-heart-o" aria-hidden="true"></i></b-button> -->
                                <b-button variant="outline-secondary" :class="(messageData.favorite.length>0)?'saved-btn':''" :id="'favorite-'+messageData.userDetails.user_id" @click="addFavorite(messageData.userDetails.user_id)"><i class="fa fa-heart-o" aria-hidden="true"></i></b-button>
                            </div>
                            </div>
                        </div>
                        </b-col>
                        <b-col lg="4" xl="4" sm="12" class="p-0">
                        <div class="border-bottom text-left py-4 px-4">
                            <h6 class="fw-500"><b>Applicant</b></h6>
                            <p>{{messageData.userDetails.first_name+' '+messageData.userDetails.last_name}} has applied to or been invited to your or your company's <i>{{messageData.jobDetails.job_title}}</i></p>
                        </div>  
                        <div class="border-bottom text-left py-4 px-4">
                            <h5><b>How they match</b></h5>
                            <p>Worked on <a href="javascript:void(0);" class="text-theme">{{messageData.similarjobHistory.length}}jobs</a> like yours</p>
                        </div>
                        <!-- <div class="border-right text-left py-4 px-4">
                            <h6 class="fw-500">Get a second opinion</h6>
                            <p>Invite coworkers to help you review freelancers</p>
                            <b-button class="btn-outline-theme">Invite</b-button>
                        </div>   -->
                        </b-col>
                        <b-col lg="8" xl="8" sm="12" class="p-0">
                        <div class="border-left text-left py-4 px-4">
                            <div class="d-md-flex align-items-center">
                            <h4 class="mb-4 fz-24 fw-500 text-black"><b>Proposal Details</b></h4>
                            <div class="ml-auto">
                                <h5 class="mb-0">$ {{messageData.proposalDetails.cost}}</h5>
                                <p class="mb-0 fz-14">Proposed Bid</p>
                            </div>
                            </div>
                            <h5 class="mb-4">Cover letter</h5>
                            <span v-if="messageData.proposalDetails.cover_letter!=''">
                                <read-more more-str="Read more" :text="messageData.proposalDetails.cover_letter" link="#" less-str="Read less" :max-chars="500"></read-more>

                            </span>
                            <hr>
                            <div class="thanks-wrap mb-4">
                                <div class="d-flex align-items-center">
                                    <!-- <ul  class="ml-2 mt-4 attachment "  v-if="messageData.proposalDetails.attachment.length > 0" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                                    <i class="fa fa-file border-none"></i>
                                    <li class="attatchment-wrap mr-5 mb-2" v-for="(attc, index) in messageData.proposalDetails.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                                        <a :href="messageData.proposalDetails.attachmentwithUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                                        <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index)"></i>
                                    </li>
                                    </ul> -->
                                    <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="messageData.proposalDetails.attachment" style="padding: 6px 0px;">
                                        <template v-for="(attc, index) in messageData.proposalDetails.attachment">
                                        <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                                            <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                            <a :href="messageData.proposalDetails.attachmentwithUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                                        </li>
                                        </template>
                                    </ul>
                                </div>
                                <!-- <div  class="d-flex align-items-center ml-2 mt-4 attachment "  v-if="messageData.proposalDetails.attachment.length > 0" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                                    <i class="fa fa-file border-none"></i>
                                    <span class="attatchment-wrap mr-5" v-for="(attc, index) in messageData.proposalDetails.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;">
                                        <a :href="messageData.proposalDetails.attachmentwithUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                                    </span>
                                </div> -->
                                <!-- <h6>Hi,</h6>
                                <h6>Thanks for sending invite.</h6> -->
                            </div>
                            <hr>
                            <span v-if="messageData.proposalDetails.question">
                                <span v-for="(ques,index) in messageData.proposalDetails.question" :key="index" >
                                    <h6>{{ques.text}}</h6>
                                    <p>{{ques.answer}}</p>
                                <hr>
                                </span>
                            </span>
                            
                            <div class="chat-wrap" style="height:500px;">
                            <h5>Chat with {{messageData.userDetails.first_name+' '+messageData.userDetails.last_name}}.</h5>

                            </div>
                        </div> 
                        </b-col>
                    </b-row>
                    </b-card>
                </b-card-group>
                <b-card-group deck>
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                    <b-row>
                        <b-col lg="4" xl="4" sm="12" class="p-0">
                        <div class="border-bottom text-left py-4 px-4 d-flex align-items-center justify-content-space-between">
                            <div>
                            <h6><b>${{totalEarning}}</b></h6>
                            <p class="fz-14">Total Earnings</p>
                            </div>
                            <div>
                            <h6><b>{{messageData.jobHistory.length}}</b></h6>
                            <p class="fz-14">Project Completed</p>
                            </div>
                        </div> 
                        <div class="border-bottom text-left py-4 px-4">
                            <h5><b>Hours per week</b></h5>
                            <p class="mb-4">{{(messageData.userDetails.availabilityName!='' && messageData.userDetails.availabilityName!=null)?messageData.userDetails.availabilityName:'Not Found'}}<br> <!--<i class="fa fa-chevron-left fz-14" aria-hidden="true"></i> 24 hrs response time--></p>

                            <h5><b>Languages</b></h5>
                            <p class="mb-4"><span>{{messageData.userDetails.language}}:</span>
                                <span v-if="messageData.userDetails.proficiency_id == 1">Basic</span>
                                <span v-if="messageData.userDetails.proficiency_id == 2">Conversational</span>
                                <span v-if="messageData.userDetails.proficiency_id == 3">Fluent</span>
                                <span v-if="messageData.userDetails.proficiency_id == 4">Native or Bilingual</span>
                                <span v-if="messageData.userDetails.proficiency_id == '' && messageData.userDetails.proficiency_id == null">Not Found</span>
                            </p>

                            <h5><b>Verification</b></h5>
                            <p class="mb-4"><b>ID:</b> Verified</p>

                            <h5><b>Education</b></h5>
                            <span v-if="messageData.education.length > 0">
                                <div class="edu-wrap mb-4" v-for="(education,index) in messageData.education" :key="index">
                                    <p class="mb-1">{{education.university_name}}</p>
                                    <p class="mb-0">{{education.course_name}}</p>
                                    <p class="mb-0">
                                        <read-more more-str="Read more" :text="education.education_description" link="#" less-str="Read less" :max-chars="150"></read-more>
                                        <!-- {{education.education_description}} -->
                                    </p>
                                    <p class="mb-0">{{education.start_year+'-'+education.end_year}}</p>
                                </div>
                            </span>
                            <span v-else>
                                <p class="mb-1">Not Found</p>
                            </span>
                        
                        </div> 
                        </b-col>
                        <b-col lg="8" xl="8" sm="12" class="p-0">
                        <div class="border-left border-bottom text-left py-4 px-4">
                            <div class="d-md-flex align-items-center">
                            <h4 class="mb-4 fz-24 fw-500 text-black w-80"><b>{{messageData.userDetails.tagline}}</b></h4>
                            <div class="ml-auto">
                                <h5 class="mb-0">${{messageData.userDetails.hourly_rate}}/Day</h5>
                            </div>
                            </div>
                            <p class="mb-2" ><read-more more-str="Read more" :text="messageData.userDetails.about_self_desc" link="#" less-str="Read less" :max-chars="250"></read-more></p>
                            <!-- <vue-read-more-smooth :lines="3" class="mt-2">
                            <p class="mb-2" v-html="messageData.userDetails.about_self_desc"></p>
                            </vue-read-more-smooth> -->
                            <!-- <h6 class="mb-2">I have 4+ years of experience in development. I have also good khnowledge of javascript/ jQuery.</h6>
                            <h6 class="mb-2"><b>Skills:</b></h6>
                            <h6 class="mb-2">Google app script</h6>
                            <a href="javascript:void(0);" class="text-theme">More</a> -->
                        </div> 
                        <div class="border-left border-bottom text-left py-4 px-4" v-if="messageData.jobHistory.length>0 || messageData.jobUnderprocess.length>0">
                            <div class="d-md-flex align-items-center mb-3">
                            <h5 class="mr-2"><b>Work History</b></h5>
                            <!-- <b-button class="mr-2" variant="outline-secondary" size="sm"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></b-button> -->
                            <!-- <div class="ml-auto">
                                <h5 class="mb-0">${{messageData.userDetails.hourly_rate}}/Day</h5>
                            </div> -->
                            </div>
                            <div class="tabs-wrapper">
                            <b-tabs>
                                <b-tab :title="'Completed jobs ('+messageData.jobHistory.length+')' "  v-if="messageData.jobHistory.length>0" active>
                                    <span v-if="messageData.jobHistory.length>0">
                                        <b-card-text class="border-bottom" v-for="(history,index) in messageData.jobHistory" :key="index">
                                            <a href="javascript:void(0);" class="text-theme"><h6>{{history.job_title}}</h6></a>
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
                                            <p class="text-muted mt-2"><read-more more-str="Read more" :text="history.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></p>
                                            <!-- <vue-read-more-smooth :lines="2" class="mt-2">
                                                <p class="text-muted mt-2">{{history.cover_letter}}</p>
                                            </vue-read-more-smooth> -->
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
                                <b-tab :title="'In progress ('+messageData.jobUnderprocess.length+')'" v-if="messageData.jobUnderprocess.length>0">
                                    <span v-if="messageData.jobUnderprocess.length>0">
                                        <b-card-text class="border-bottom" v-for="(jobUnderprocess,index) in messageData.jobUnderprocess" :key="index">
                                            <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-1><h6>{{jobUnderprocess.job_title}}</h6></a>
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
                                                    <p class="fz-18 text-muted mb-4">Thank you</p>
                                                </div>
                                                <div class="job-details-wrapper">
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
                                                    <p class="fz-18 text-muted mb-4">Thank you</p>
                                                </div>
                                            </b-modal>
                                            <div class="d-flex align-items-center">
                                            <div class="star-rating mr-2">
                                                <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                                <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                                <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                                <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                                <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                            </div>
                                            <h6 class="mr-2 mb-0"><b>$ {{jobUnderprocess.cost}}</b></h6>
                                            <h6 class="mb-0">{{jobUnderprocess.from_date+' - '+jobUnderprocess.to_date}}</h6>
                                            </div>
                                            <p class="text-muted mt-2"><read-more more-str="Read more" :text="jobUnderprocess.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></p>
                                            <!-- <p class="text-muted mt-2">{{jobUnderprocess.cover_letter}}</p> -->
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
                        <div class="border-left border-bottom text-left py-4 px-4">
                            <h5 class="mr-2">Skills</h5>
                            <div class="tags-wrap">
                            <ul v-if="messageData.userDetails.allSkill_name!=''">
                                <li v-for="(catname,index) in messageData.userDetails.allSkill_name" :key="index">
                                <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                                    <span class="mr-2">{{catname.name}}</span>
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
                <b-card-group deck class="mt-4">
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="bg-white p-0">
                    <template  #header>
                        <div class="bordered border-right-none py-4 px-4">
                        <h4 class="mb-0 fz-24 fw-500 text-black text-left"><b>Employment History {{(messageData.similarjobHistory.length>0)?'('+messageData.similarjobHistory.length+')':''}}</b></h4>
                        </div>
                    </template>
                    <b-row>
                        <b-col lg="12" xl="12" sm="12" class="p-0">
                            <div class="border-left text-left py-4 px-4" v-if="messageData.similarjobHistory.length >0 ">
                                <span v-for="(history,index) in messageData.similarjobHistory" :key="index">
                                <h5>{{history.job_title }}</h5>
                                <h6>{{history.from_date+' - '+history.to_date }}</h6>
                                <hr>
                                </span>
                            </div>
                            <div class="border-left text-left py-4 px-4" v-else>
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
                <!-- Certification Start -->
                <CertificationList :getUserCertificationListArr="getUserCertificationListArr"></CertificationList>
     
            </div>
        </div>
        <!-- flagging model -->
        <b-modal id="flagging-modal" size="lg" title="Why are you flagging this?" hide-footer no-close-on-backdrop>
            <form @submit.prevent="submitFlaggingData">
                <b-form-group
                     class="mb-3"
                    >
                    <b-form-radio-group
                        class="fz-16"
                        :options="flaggingoptions"
                        value-field="id"
                        text-field="title" 
                        name="flavour-2a"
                        stacked
                        v-model="addFlagging.flagging_id"
                        :error-messages="flagflagging_id"
                        @input="$v.addFlagging.flagging_id.$touch()"
                        @blur="$v.addFlagging.flagging_id.$touch()"
                    ></b-form-radio-group>
                    <div class="error"  v-if="flagflagging_id[0]">{{flagflagging_id[0]}}</div>
                </b-form-group>
                
                <label class="fz-18 fw-600 mb-2">Please tell us more</label>
                <b-form-textarea
                    id="textarea"
                    placeholder="Share additional details"
                    rows="6"
                    max-rows="8"
                    v-model="addFlagging.report_content"
                    :error-messages="flagreport_content"
                    @input="$v.addFlagging.report_content.$touch()"
                    @blur="$v.addFlagging.report_content.$touch()"
                ></b-form-textarea>
                <div class="error"  v-if="flagreport_content[0]">{{flagreport_content[0]}}</div>

                <hr>
                <div class="text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('flagging-modal');">Cancel</a>
                    <b-button type="buttton" class="btn btn-theme">Submit</b-button>
                </div>
            </form>
        </b-modal>
        <!-- Decline Modal -->
        <b-modal id="decline-modal" size="lg" title="Decline" hide-footer no-close-on-backdrop>
            <h4 class="fz-18 text-black text-capitali">Select Decline to remove the freelancer from consideration for this job. Optionally, you can include a message to let the freelancer know why you're not interested.</h4>
            <form @submit.prevent="submitDeclineData">
                <label class="fz-18 fw-600 mb-2">Reason</label><br>
                <b-form-select 
                    v-model="addDecline.decline_reason_id"
                    :options="declineReason"
                    text-field="title"
                    value-field="id"
                    :error-messages="declineReason_id"
                    @input="$v.addDecline.decline_reason_id.$touch()"
                    @blur="$v.addDecline.decline_reason_id.$touch()"
                class="mb-4"></b-form-select>
                <div class="error"  v-if="declineReason_id[0]">{{declineReason_id[0]}}</div>
                
                <br>
                <label class="fz-18 fw-600 mb-2">Message (Optional)</label>
                <b-form-textarea
                    v-model="addDecline.decline_reason"
                    id="textarea"
                    rows="6"
                    max-rows="8"
                    :error-messages="declineReason_message"
                    @input="$v.addDecline.decline_reason.$touch()"
                    @blur="$v.addDecline.decline_reason.$touch()"
                ></b-form-textarea>
                <div class="error"  v-if="declineReason_message[0]">{{declineReason_message[0]}}</div>

                <hr>
                <div class="text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('decline-modal');">Cancel</a>
                    <b-button type="buttton" class="btn btn-theme">Decline</b-button>
                </div>
            </form>
        </b-modal>
        <!-- note model -->
        
        <b-modal id="notemodal" class="notemodal" size="lg" :title="'Note about '+messageData.userDetails.first_name+' '+messageData.userDetails.last_name+'.'" hide-footer no-close-on-backdrop>
            <form @submit.prevent="submitNoteData" >
                <label class="fz-18 fw-600 mb-2">Note</label><br>
                <b-form-textarea
                    id="textarea"
                    rows="6"
                    v-model="messageData.noteData.note"
                    max-rows="8" class="mb-2"
                    :error-messages="notedescription"
                    @input="$v.messageData.noteData.note.$touch()"
                    @blur="$v.messageData.noteData.note.$touch()"
                ></b-form-textarea>
                <div class="error"  v-if="notedescription[0]">{{notedescription[0]}}</div>
                <span><i class="fa fa-lock" aria-hidden="true"></i> The talent won't see anything you put here.</span><br>
                <label class="fz-18 fw-600 mb-2 mt-4">Soft Skills</label><br>
                <div class="tags-wrap mb-1 inline-block">
                    <div class="inline-block mr-2 pos-rel" v-for="(soft,index) in SoftSkill" :key="index" >
                        <input type="checkbox" class="pos-absolute" v-model="messageData.noteData.skill"  :id="'control_'+index" name="select" :value="soft.id" search>
                        <label :for="'control_'+index" class="tags-label">
                            <h4 class="mb-0 fw-600">{{soft.title}}</h4>
                        </label>
                    </div>
                </div> <br> 
                <label class="fz-18 fw-600 mb-2 mt-2" for="tags-pills">Custom Tags</label><br>
                 <b-form-tags
                    v-model="messageData.noteData.tags"
                    input-id="tags-pills"
                    tag-variant="primary"
                    tag-pills
                    separator=""
                    placeholder="Start typing"
                    remove-on-delete
                ></b-form-tags>
                <hr>
                <div class="text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('notemodal');">Cancel</a>
                    <b-button type="buttton" class="btn btn-theme">Save Note</b-button>
                </div>
            </form>
        </b-modal>
    </b-container>
</template> 
<script>
// import VueReadMoreSmooth from "vue-read-more-smooth";
import { mapActions } from "vuex";
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import CertificationList from "@/components/public-profile/public-certification.vue";
export default {
    mixins: [validationMixin],
    validations: {
        addFlagging:{
            flagging_id: {required},
            report_content: {required},
        },
        addDecline:{
            decline_reason_id: {required},
            decline_reason: {required},
        },
        messageData:{
            noteData:{
            note:{required},
            }
        },
    },
    components : {
        CertificationList
    //   VueReadMoreSmooth
    },
    // props:['messageData','jobtitle','proposal','jobId'],
    data() {
      return {
        value: new Date().toISOString().substr(0, 10),
        striped:true,
        max: 0,
        job_id:'',
        user_id:'',
        messageData:{
            jobDetails:'',
            userDetails:'',
            proposalDetails:'',
            education:'',
            similarjobHistory:'',
            jobUnderprocess:'',
            jobHistory:[],
            favorite:'',
            noteData:{
                note:'',
                skill:[],
                tags:[],
            },
        },
        jobtitle:'',
        jobId:'',
        flaggingoptions: [],
        declineReason:[],
        addFlagging:{
            flagging_id:'',
            report_content: '',
        },
        addDecline:{
            decline_reason_id: '',
            decline_reason: '',
            application_status:8,
            decline_by:'',
        },
        SoftSkill:[], 
        getUserCertificationListArr: [],
      } 
    },
    methods:{
      ...mapActions(["genericAPIPOSTRequest"]),
      async getUserCertificationList() {
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "user/getUserCertificationList",
            params: { user_id: this.user_id },
        });
        this.getUserCertificationListArr = res;
    },
      // this fun is for to add note for user
      async submitNoteData(){
        this.$v.messageData.noteData.$touch();
        if (!this.$v.messageData.noteData.$invalid) {
            this.messageData.noteData.to_user_id = this.messageData.userDetails.user_id;
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "addNote",
                params: this.messageData.noteData
            });
            if(res){
                this.$toastr.s('Note Added Successfully');
                this.getNotedata(this.messageData.userDetails.user_id);
                this.$bvModal.hide('notemodal');
            }
        }
      },
      async getNotedata(_v){
        var response = await this.genericAPIPOSTRequest({
            requestUrl: "getNote",
            params: {'to_user_id': _v}
        });
        if(response){
            this.messageData.noteData = response;
        }
      },
      // this fun is for to add flag on user
      async submitDeclineData(){
        this.$v.addDecline.$touch();
        if (!this.$v.addDecline.$invalid) {
            this.addDecline.user_id=this.messageData.userDetails.user_id;
            this.addDecline.jobs_id = this.messageData.jobDetails.jobs_id;
            this.addDecline.decline_by = this.messageData.jobDetails.user_id;
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "updateJobApply",
                params: this.addDecline
            });
            if(res){
                this.$toastr.s('Proposal Decline Done');
                this.$bvModal.hide('decline-modal');
            }
        }
      },
      // this fun is for to add flag on user
      async submitFlaggingData(){
        this.$v.addFlagging.$touch();
        if (!this.$v.addFlagging.$invalid) {
            this.addFlagging.report_user_id=this.messageData.userDetails.user_id;
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "addUserflag",
                params: this.addFlagging
            });
            if(res){
                this.$toastr.s('Flag as inappropriate Done');
                this.$bvModal.hide('flagging-modal');
            }
        }
      },
      //this fun is for to get flagging reason
      async getdeclineReason(){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "getdeclineReason",
          params: {'type':'client'}
        });
        if(res){
            this.declineReason  =res;
        }
      },
      //this fun is for to get flagging reason
      async getflagging(){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/getflagginglist",
          params: { }
        });
        if(res){
            this.flaggingoptions=res;
        }
      },
      // this fun is for to add to favorite
      async addFavorite(_i){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "addremovefavorite",
          params: { 
                'favorite_user_id':_i
            }
        });
        if(res =="added"){
            document.getElementById('favorite-'+_i).classList.add("saved-btn");
            this.$toastr.s('Added to Favorite');
        }else if(res =="remove"){
            document.getElementById('favorite-'+_i).classList.remove("saved-btn");
            this.$toastr.s('Remove From Favorite');
        }
      },
      // this fun is for to get message page details
      async messageModel(){
        var GetJobDetails = await this.genericAPIPOSTRequest({
            requestUrl: "getJobDetails_new",
            params: {'poid':this.job_id},
        });
        this.messageData.jobDetails = GetJobDetails[0];
        var userDetails = await this.genericAPIPOSTRequest({
            requestUrl: "user/getUserDetails",
            params: {"user_id":this.user_id},
        });
        if(userDetails){
          this.messageData.userDetails = userDetails;
        }
        var proposalDetails = await this.genericAPIPOSTRequest({
            requestUrl: "getProposalDetail",
            params: {"user_id":this.user_id,"job_id":this.messageData.jobDetails.jobs_id},
        });
        if(proposalDetails){
          this.messageData.proposalDetails = proposalDetails;
        }
        var similarjobHistory = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id":this.user_id,"filter":6,search:{category:this.messageData.jobDetails.topSkill}},
        });
        if(similarjobHistory){
          this.messageData.similarjobHistory = similarjobHistory;  
        }
        var jobUnderprocess = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id":this.user_id,"filter":2},
        });
        if(jobUnderprocess){
          this.messageData.jobUnderprocess = jobUnderprocess;
        }
        var jobHistory = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id":this.user_id,"filter":6},
        });
        if(jobHistory){
          this.messageData.jobHistory = jobHistory;  
        }
        var education = await this.genericAPIPOSTRequest({
          requestUrl: "user/getUserEducation",
          params: { "user_id" :this.user_id }
        });
        if(education){
          this.messageData.education = education;
        }
        var favorite = await this.genericAPIPOSTRequest({
          requestUrl: "getfavoritelist",
          params: { "favorite_user_id" :this.user_id }
        });
        if(favorite){
          this.messageData.favorite = favorite;
        }

        var note = await this.genericAPIPOSTRequest({
            requestUrl: "getNote",
            params: {'to_user_id': this.user_id}
        });
        if(note){
            this.messageData.noteData = note;
        }
      },
      //this fun is for to get Soft Skill
      async getSoftSkill(){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "getSoftSkill",
          params: { }
        });
        if(res){
            this.SoftSkill = res;
        }
      },
      //this fun is for to like the post
      async proposalLike(_i){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/addHire",
          params: { 
            "jobData": {
                'user_id':this.messageData.userDetails.user_id,
                'jobs_id':this.jobId
            },
            "action": _i }
        });
        if(res){
            this.messageData.proposalDetails.application_status = 3;
            //   this.$refs.mysidebar.hide();
            this.$toastr.s('Proposal Shortlisted Successfully');
        }else{
            this.$toastr.e('Proposal Like Unsuccessfull');
        }
      },

      //this fun is for to dislike the post
      async proposalDislike(_v,_i){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/addHire",
          params: { "jobData": _v, "action": _i }
        });
        if(res){
            this.$toastr.s('Proposal Archived Successfully');
        }else{
            this.$toastr.e('Proposal DisLike Unsuccessfull');
        }
      },
    
    },
    computed:{
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
        declineReason_id() {
            const errors = []
            if (!this.$v.addDecline.decline_reason_id.$dirty) return errors 
            !this.$v.addDecline.decline_reason_id.required && errors.push('Please Select Reason is required')
            return errors
        },
        declineReason_message() {
            const errors = []
            if (!this.$v.addDecline.decline_reason.$dirty) return errors 
            !this.$v.addDecline.decline_reason.required && errors.push('Message is required')
            return errors
        },
        notedescription() {
            const errors = []
            if (!this.$v.messageData.noteData.note.$dirty) return errors 
            !this.$v.messageData.noteData.note.required && errors.push('Note is required')
            return errors
        },
        // function to total burget amount
        totalEarning(){
            var amount=0;
            this.messageData.jobHistory.map(data => {
                amount+=parseInt(data.cost);
            });
            return amount;
        },
    },
    mounted(){
        this.job_id = this.$route.params.pid;
        this.user_id = this.$route.params.uid;
        this.messageModel();
        //this fun is for to get flagging reason
        this.getflagging();
        //this fun is for to get decline reason
        this.getdeclineReason();
        //this fun is for to get Soft Skill
        this.getSoftSkill();
        // Get  User Certification
        this.getUserCertificationList();
    }
}
</script>
<style>
    .msgdetails .card{border: 1px solid rgba(0, 0, 0, 0.125)!important;} 
    .msgdetails .card-body{padding:12px;}
    .msgdetails .w-80{width:80%!important;}
    .msgdetails .tabs-wrapper{min-height:327px;}
    .msgdetails .tags-wrap ul{margin-left:-32px;}
    .msgdetails .img-wrapper{width:145px;height:150px;border-radius:50%;position:relative;box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);padding: 5px;}
    .msgdetails .img-wrapper img{width:100%;height:100%;border-radius:50%;}
    .msgdetails .img-wrapper .dot{position:absolute;width:15px;height:15px;background-color:#48c048;border-radius:50%;top:5px;right:22px;border: 2px solid #d0caca;}
    .msgdetails .img-wrap{width:10%;}
    .msgdetails .minus-margin{margin-left:-32px;}
    .justify-content-space-around{justify-content:space-around;}
    .width-80{width:80%;}
    .t-0{top:0px!important;}
    .t-0.dropdown ul{padding-left:0px!important;} 
    .custom-margin{margin-left:-32px;}
</style>