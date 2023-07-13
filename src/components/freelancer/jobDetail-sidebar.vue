<template>
    <b-sidebar id="sidebar-right" title="" right shadow  backdrop> 
        <div class="px-3 py-2">
        <b-card-group deck>
            <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
                <div class="d-md-flex align-items-center">
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>{{jobDetailsWithClientData.jobDetails.job_title}}</b></h4>
                <div class="ml-auto">
                    <a :href="$router.resolve({name: 'freelancerjobDetails',  path:'/freelancer/job-details', query: {jobDetailsWithClientData: jobDetailsWithClientData.jobDetails.jobs_id}}).href" target="_blank" class="d-flex align-items-center text-theme" >
                    <div class="up-icon w-3 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F2613C" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M12 7.252h2V14H0V0h6.602v2.014H2v9.971h10V7.252zM8.602 0v2.014h2.088L6.795 5.935l1.414 1.424L12 3.54v1.898h2V0H8.602z"></path></svg>
                    </div> 
                    <span>Open job in a new window</span>
                    </a>
                </div>
                </div>
            </template>
            <b-row>
                <b-col lg="12" xl="12" sm="12" v-if="inviteData !=''" >
                    <span class="d-flex" style="background-color: #fff;">
                        <div style="width:25px;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.02 8.979a6.01 6.01 0 10-10.517 4.007 6.01 6.01 0 011.502 4.007v1.002h6.01v-.952a5.92 5.92 0 011.443-4.007 6.01 6.01 0 001.563-4.057zM9.005 21h6.01"></path></svg>
                        </div>
                        <div>
                            <h5>You have been invited to this job</h5>
                            <a href="javascript:void(0);" class="text-theme mb-0" @click="$router.push({name:'freelancerinvitationDetail',path:'/freelancer/invitation-detail',params:{pid:'A'+encodedid(jobDetailsWithClientData.jobDetails.jobs_id)}})">View Invitation</a>
                        </div>

                    </span>
                </b-col>
                <b-col lg="9" xl="9" sm="12">
                <div class="bordered">
                    <div class="d-flex align-items-center py-4 px-4">
                    <div>
                        <b-card-text class="text-theme fz-16 fw-600 mb-1">{{jobDetailsWithClientData.jobDetails.quality_inspector}}</b-card-text>
                        <b-card-text class="text-muted fz-14 mb-1">Posted {{jobDetailsWithClientData.jobDetails.time}}</b-card-text>
                        <div class="mt-3 d-flex align-items-start">
                        <div class="up-icon">
                            <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 5.28027C8.37764 5.28027 5.40918 8.40136 5.40918 12.2748C5.40918 14.3585 6.46842 16.8771 8.23787 19.6617C8.85278 20.6294 9.51552 21.5658 10.1854 22.4404C10.6054 22.9889 10.952 23.4148 11.1785 23.6801C11.6242 24.202 12.3759 24.2018 12.8214 23.68C13.0479 23.4148 13.3945 22.9889 13.8145 22.4404C14.4844 21.5658 15.1471 20.6294 15.762 19.6617C17.5315 16.8771 18.5907 14.3585 18.5907 12.2748C18.5906 8.40135 15.6222 5.28027 11.9999 5.28027ZM9.18859 18.847C7.55932 16.283 6.59072 13.9799 6.59072 12.2748C6.59072 9.19124 9.00544 6.65236 11.9999 6.65236C14.9944 6.65236 17.4091 9.19123 17.4092 12.2748C17.4092 13.9799 16.4406 16.283 14.8113 18.847C13.7963 20.4444 12.7477 21.8156 11.9999 22.6934C11.2521 21.8155 10.2036 20.4443 9.18859 18.847ZM12 14.7608C10.7673 14.7608 9.77138 13.5702 9.77138 12.1142C9.77138 10.6582 10.7673 9.4677 12 9.4677C13.2326 9.4677 14.2285 10.6582 14.2285 12.1142C14.2285 13.5703 13.2326 14.7608 12 14.7608ZM12 13.5663C12.6578 13.5663 13.1999 12.9182 13.1999 12.1142C13.1999 11.3103 12.6578 10.6621 12 10.6621C11.3421 10.6621 10.7999 11.3103 10.7999 12.1142C10.7999 12.9182 11.3421 13.5663 12 13.5663Z" fill="#999999"/>
                            </svg>
                        </div>  
                        <span class="vertical-align-middle ml-2">
                            {{jobDetailsWithClientData.jobDetails.country_name+', '+jobDetailsWithClientData.jobDetails.state_name+', '+jobDetailsWithClientData.jobDetails.city_name }}
                        </span> 
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bordered p-4">
                    <b-card-text class="text-muted mb-0" v-html="jobDetailsWithClientData.jobDetails.scope_of_work"></b-card-text>
                </div>
                <div class="bordered p-4">
                    <b-row>
                    <b-col xl="12" lg="12" sm="12">
                        <ul class="cfe-ui-job-features p-0">
                        <li class="">
                            <div class="header">
                                <div class="icon up-icon" data-cy="clock-hourly">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#F2613C" viewBox="0 0 14 14" role="img">
                                    <g fill-rule="evenodd">
                                        <path d="M7 0a7 7 0 100 14A7 7 0 007 0m0 1.05A5.957 5.957 0 0112.95 7 5.957 5.957 0 017 12.95 5.957 5.957 0 011.05 7 5.957 5.957 0 017 1.05"></path>
                                        <path d="M7.5 2.106a.5.5 0 11-1 0 .5.5 0 011 0m-2.514.406a.5.5 0 11-.867.5.5.5 0 01.867-.5M3.012 4.12a.5.5 0 11-.5.866.5.5 0 01.5-.866M2.106 6.5a.5.5 0 110 1 .5.5 0 010-1m.406 2.514a.5.5 0 11.5.867.5.5 0 01-.5-.867m1.608 1.974a.5.5 0 11.866.5.5.5 0 01-.866-.5m2.38.906a.5.5 0 111 0 .5.5 0 01-1 0m2.514-.406a.5.5 0 11.867-.5.5.5 0 01-.867.5m1.974-1.608a.5.5 0 11.5-.866.5.5 0 01-.5.866m.906-2.38a.5.5 0 110-1 .5.5 0 010 1m-.406-2.514a.5.5 0 11-.5-.867.5.5 0 01.5.867M9.88 3.012a.5.5 0 11-.866-.5.5.5 0 01.866.5"></path>
                                        <polygon points="6.5 4.16 6.5 6.969 4.925 9.697 5.791 10.197 7.492 7.25 7.5 7.25 7.5 4.16"></polygon>
                                    </g>
                                    </svg>
                                </div>
                                <strong>{{(jobDetailsWithClientData.jobDetails.budget_type=="A")?'Day Rate':'Monthly Rate'}}</strong>
                            </div>
                            <small class="text-muted">{{jobDetailsWithClientData.jobDetails.budget}} {{(jobDetailsWithClientData.jobDetails.budget_type=="A")?'Per Day':'Per Month'}}</small>
                        </li>
                        <li class="">
                            <div class="header">
                                <div class="icon up-icon" data-cy="clock-hourly">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#F2613C" viewBox="0 0 14 14" role="img">
                                    <g fill-rule="evenodd">
                                        <path d="M7 0a7 7 0 100 14A7 7 0 007 0m0 1.05A5.957 5.957 0 0112.95 7 5.957 5.957 0 017 12.95 5.957 5.957 0 011.05 7 5.957 5.957 0 017 1.05"></path>
                                        <path d="M7.5 2.106a.5.5 0 11-1 0 .5.5 0 011 0m-2.514.406a.5.5 0 11-.867.5.5.5 0 01.867-.5M3.012 4.12a.5.5 0 11-.5.866.5.5 0 01.5-.866M2.106 6.5a.5.5 0 110 1 .5.5 0 010-1m.406 2.514a.5.5 0 11.5.867.5.5 0 01-.5-.867m1.608 1.974a.5.5 0 11.866.5.5.5 0 01-.866-.5m2.38.906a.5.5 0 111 0 .5.5 0 01-1 0m2.514-.406a.5.5 0 11.867-.5.5.5 0 01-.867.5m1.974-1.608a.5.5 0 11.5-.866.5.5 0 01-.5.866m.906-2.38a.5.5 0 110-1 .5.5 0 010 1m-.406-2.514a.5.5 0 11-.5-.867.5.5 0 01.5.867M9.88 3.012a.5.5 0 11-.866-.5.5.5 0 01.866.5"></path>
                                        <polygon points="6.5 4.16 6.5 6.969 4.925 9.697 5.791 10.197 7.492 7.25 7.5 7.25 7.5 4.16"></polygon>
                                    </g>
                                    </svg>
                                </div>
                                <strong>{{jobDetailsWithClientData.jobDetails.employment_Text}}</strong>
                            </div>
                            <small class="text-muted">{{jobDetailsWithClientData.jobDetails.employment_Name}}</small>
                        </li>
                        <li class="">
                            <div class="header">
                                <div class="icon up-icon" data-cy="calendar-under1month-alt">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#F2613C" viewBox="0 0 14 14" role="img">
                                    <g fill-rule="evenodd">
                                        <path d="M6.01 10.586V9.524l-2.058-.72 2.058-.72V7.028L2.926 8.282v1.05l3.084 1.254zM8.606 11h1.14V6.602h-.834l-1.272.366.222.906.6-.145.144-.035V11z"></path>
                                        <path d="M1 13V5h12v8H1zM11 1V0h-1v1H4V0H3v1H1.007C.45 1 0 1.447 0 1.999v11.003c0 .551.451.998 1.007.998h11.986c.557 0 1.007-.447 1.007-.998V1.999C14 1.448 13.549 1 12.993 1H11z"></path>
                                    </g>
                                    </svg>
                                </div>
                                <strong><span class="d-none d-lg-inline">Scope</span> <span class="d-lg-none">Scope</span></strong>
                            </div>
                            <small class="text-muted"><span class="d-none d-lg-inline">{{jobDetailsWithClientData.jobDetails.project_type+', '+jobDetailsWithClientData.jobDetails.project_length_title}}</span> <span class="d-lg-none">{{jobDetailsWithClientData.jobDetails.project_type+', '+jobDetailsWithClientData.jobDetails.project_length_title}}</span></small>
                        </li>
                        <li class="last-child">
                            <div class="header">
                                <div class="icon up-icon" data-cy="expertise">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#F2613C" viewBox="0 0 14 14" role="img">
                                    <path d="M12.8 8.4l-1.3-2.3v-.8C11.6 2.4 9.2 0 6.3 0S1.1 2.4 1.1 5.3c0 1.4.5 2.6 1.4 3.5v4.5c0 .4.3.7.7.7h5.3c.4 0 .7-.3.7-.7v-1h1.7c.4 0 .7-.3.7-.7V9h.9c.4 0 .5-.3.3-.6zM8.7 5.3v.4l.7.4c-.2.5-.4.9-.8 1.3L7.9 7c-.2.2-.5.3-.8.4v.8c-.2.1-.5.1-.8.1-.3 0-.5 0-.8-.1v-.8c-.2-.1-.5-.2-.7-.4l-.7.4c-.4-.4-.7-.8-.8-1.3l.7-.4v-.9l-.7-.4c.1-.5.4-1 .8-1.3l.7.4c.2-.2.5-.3.7-.4v-.8c.3-.1.5-.1.8-.1.3 0 .5 0 .8.1v.8c.3.1.5.2.8.4l.7-.4c.4.4.6.8.8 1.3l-.7.4v.5z"></path>
                                    <circle cx="6.3" cy="5.3" r=".9"></circle>
                                    </svg>
                                </div>
                                <strong>{{jobDetailsWithClientData.jobDetails.experience_level_title}}</strong>
                            </div>
                            <small class="text-muted"><span class="d-none d-lg-inline">{{jobDetailsWithClientData.jobDetails.experience_level_description}}</span> <span class="d-lg-none">{{jobDetailsWithClientData.jobDetails.experience_level_description}}</span></small>
                        </li>
                        
                        </ul>
                    </b-col>
                    </b-row>
                </div>
                <!-- <div class="bordered p-4">
                    <h4 class="fz-18 fw-600 text-black">Project Type:  <span class="fz-16 fw-300 text-black"> {{jobDetailsWithClientData.jobDetails.preferences_job_type}}</span></h4>
                </div> -->
                <div class="bordered p-4" v-if="jobDetailsWithClientData.jobDetails.attachmentName!=''">
                    <h4 class="fz-18 fw-600 text-black">Attachment</h4>
                    <!-- <a :href="jobDetailsWithClientData.jobDetails.attachment" class="d-flex align-items-start ml-2 mt-3 attachment " target="_blank" v-if="jobDetailsWithClientData.jobDetails.attachmentName!=''">
                    <i class="fa fa-file border-none"></i>
                    <p class="mb-0 text-theme cursor-pointer lb-anywhere"> {{jobDetailsWithClientData.jobDetails.attachmentName}}</p>
                    </a> -->
                    
                    <!-- <div class="d-flex align-items-center">
                        <ul  class="ml-2 mt-4 attachment "  v-if="jobDetailsWithClientData.jobDetails.attachment" style="border: 1px dashed #6666664d;padding: 6px 0px;">
                            <i class="fa fa-file border-none"></i>
                            <li class="attatchment-wrap mr-5 mb-2" v-for="(attc, index) in jobDetailsWithClientData.jobDetails.attachment" :key="index" style="border: 1px dashed #c1000057;border-radius: 20px;background-color: #c100000d;padding: 2px 10px;margin-right: 5px;display:inline-block;">
                            <a :href="jobDetailsWithClientData.jobDetails.attachmentUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                            </li>
                        </ul>
                    </div> -->

                    <div>
                        <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="jobDetailsWithClientData.jobDetails.attachment" style="padding: 6px 0px;">
                        <template v-for="(attc, index) in jobDetailsWithClientData.jobDetails.attachment">
                            <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                            <i class="fa fa-paperclip border-none text-black fz-18 rotate-45 text-theme"></i>
                            <a :href="jobDetailsWithClientData.jobDetails.attachmentUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                            </li>
                        </template>
                        </ul>
                    </div>
                </div>  
                
                <div class="bordered p-4 mb-2 mb-sm-0" v-if="jobDetailsWithClientData.jobDetails.preference_questions.length > 0 ">
                    <b-row>
                    <b-col xl="12" lg="12" sm="12" class="pt-sm-0">
                        <b-card-text class="text-black fz-18 mb-4 mb-sm-4 fw-600" >You will be asked to answer the following questions when submitting a proposal:</b-card-text>
                        <div class="card-section">
                        <p v-for="(ques,id) in jobDetailsWithClientData.jobDetails.preference_questions" :key="id">{{id+1}}. {{ques.text}}</p>
                        </div>
                    </b-col>
                    </b-row>
                </div>
                <div class="bordered p-4 mb-2 mb-sm-0">
                    <b-row>
                    <b-col xl="12" lg="12" sm="12" class="pt-sm-0">
                        <b-card-text class="text-black fz-18 mb-4 fw-600">Skills and Expertise</b-card-text>
                        <div class="card-section">
                        <div class="mb-30 tags inline-block">
                            <span class="up-skill-badge inline-block" v-for="(skill,ids) in jobDetailsWithClientData.jobDetails.skill_name" :key="ids"> {{skill}} </span>
                        </div>
                        </div>
                    </b-col>
                    </b-row>
                </div>
                <div class="border-right p-4 mb-2 mb-sm-0 sm-pb-0 sm-pb-0 activity-job">
                    <b-row>
                    <b-col class="pt-sm-0">
                        <b-card-text class="text-black fz-18 mb-4 fw-600">Preferred Qualification</b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600" v-if="jobDetailsWithClientData.jobDetails.preference_languages_arr.length > 0">Other languages: <span class="fz-14 mb-1 fw-600" v-for="(other_lang, id) in jobDetailsWithClientData.jobDetails.preference_languages_arr" :key="id">{{(id!=0)?', ':' '}}{{other_lang.value}}</span></b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">English: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobDetails.english_level}}</span></b-card-text>
                    </b-col>
                    <b-col class="pt-sm-0">
                        <b-card-text class="text-black fz-18 mb-4 fw-600">Activity on this job</b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">Proposals: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobApplicationStatus.jobApplicantCount}}</span></b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">Last Viewed by client: <span class="fz-14 mb-1 fw-600">3 days ago</span></b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">Interviewing: <span class="fz-14 mb-1 fw-600">0</span></b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">Invites Sent: <span class="fz-14 mb-1 fw-600">0</span></b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">Unanswed invites: <span class="fz-14 mb-1 fw-600">0</span></b-card-text>
                        <!-- <b-card-text class="text-muted fz-16 mb-1 fw-600">Hired Applicants: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobApplicationStatus.jobHireApplicantCount}}</span></b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">Shortlisted Applicants: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobApplicationStatus.jobShortlistedApplicantCount}}</span></b-card-text>
                        <b-card-text class="text-muted fz-16 mb-1 fw-600">Rejected Applicants: <span class="fz-14 mb-1 fw-600">{{jobDetailsWithClientData.jobApplicationStatus.jobRejectedApplicantCount}}</span></b-card-text> -->
                    </b-col>
                    </b-row>
                </div>
                </b-col>
                <b-col lg="3" xl="3" sm="12">
                <div class="px-2 py-2 py-sm-0 text-center">
                    <div class="btn-group-wrap">
                    <b-button class="btn-theme btn-block mb-2 mr-sm-2 w-100 w-sm-50 btn-submit-proposal" v-if="inviteData=='' || inviteData.action == 1" @click="submitProposal(jobDetailsWithClientData.jobDetails.jobs_id,proposal_url)">{{proposalbtn_text}}</b-button><br>
                    <b-button class="btn-outline-theme btn-block w-100 w-sm-50" v-if="jobDetailsWithClientData.jobDetails.action != 3" v-on:click="savePost(jobDetailsWithClientData.jobDetails,'detail')">Save Job</b-button>
                    </div>
                </div>
                <div class="py-4 px-2 sm-pb-0 about-client">
                    <h5 class="fz-18 fw-600">About the client</h5>
                    <div class="star-rating mb-3">
                    <label for="5-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 1)?'active':''"><i class="fa fa-star"></i></label>
                    <label for="4-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 2)?'active':''"><i class="fa fa-star"></i></label>
                    <label for="3-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 3)?'active':''"><i class="fa fa-star"></i></label>
                    <label for="2-stars" class="star" :class="(jobDetailsWithClientData.clientrating.rating >= 4)?'active':''"><i class="fa fa-star"></i></label>
                    <label for="1-star" class="star" :class="(jobDetailsWithClientData.clientrating.rating == 5)?'active':''"><i class="fa fa-star"></i></label>
                    </div>
                    <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.country_name}}</h5>
                    <!-- <p class="r-about fz-16">Suzhou 2:47 am</p> -->

                    <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.postedJob}} Jobs Posted</h5>
                    <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hireRate}}% Hire Rate, {{jobDetailsWithClientData.clientFullDetails.openJob}} Open Jobs</p>

                    <h5 class="fz-18 fw-600">${{changeAmountvalue(jobDetailsWithClientData.clientFullDetails.totalSpent)}} Total Spent</h5>
                    <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hired}} {{(jobDetailsWithClientData.clientFullDetails.hired > 0)?"Hire's":'Hire'}}</p>

                    <p class="r-about fz-16">Member Since {{jobDetailsWithClientData.clientFullDetails.member_since}} </p>
                </div>
                <div class="py-4 px-2 no-bottom-border sm-pb-0 job-link">
                    <h5 class="fz-18 fw-600">Job Link</h5>
                    <input type="text" class="form-control" v-on:focus="$event.target.select()" 
                    ref="clone" 
                    readonly 
                    :value="jobLink"/>
                    <a href="javascript:void(0);" @click="copyClipboad" class="text-theme mb-4 d-block"><small>Copy Link</small></a>
                </div>
                </b-col>
            </b-row>
            </b-card>
        </b-card-group> 

        <b-card-group deck class="mt-3" v-if="jobDetailsWithClientData.clientJobshistoryData.length > 0">
            <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>Client's recent history ({{jobDetailsWithClientData.clientJobshistoryData.slice(0,3).length}})</b></h4>
            </template>
            <b-row class="px-3 py-2" v-for="(clientJobshistory,ids) in jobDetailsWithClientData.clientJobshistoryData.slice(0,3)" :key="ids">
                <b-col xl="9" lg="9" sm="12">
                <h4 class="mb-0">
                    <span>
                    <a href="javascript:void(0);" target="_blank" class="mb-0 fz-18 fw-500 text-theme"><b>{{clientJobshistory.job_title}}.</b> | </a><span class="mb-0 fz-18 fw-500">{{clientJobshistory.employment_Name}} | {{clientJobshistory.country_name+', '+clientJobshistory.state_name+', '+clientJobshistory.city_name}}</span>
                    </span>
                </h4>
                <div>{{clientJobshistory.job_status}}</div>
                <div class="mt-1">
                    <span>
                    Freelancer
                    <span>
                        <a href="javascript:void(0);" target="_blank" class="text-theme">Bob T.</a>
                    </span>
                    </span>
                </div>
                </b-col>
                <b-col xl="3" lg="3" sm="12">
                <div>
                    {{clientJobshistory.to_date}}
                    <span>Expire</span>
                </div>
                <div data-cy="stats" class="mt-1">
                    <span>
                    <strong>
                    <!-- 4.5 hrs -->
                    <span>{{clientJobshistory.budget}}</span></strong>
                    </span>
                </div>
                </b-col>
            </b-row>
            </b-card>
        </b-card-group>

        <b-card-group deck class="mt-3" v-if="jobDetailsWithClientData.clientJobsData.length > 0">
            <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>Other open jobs by this Client ({{jobDetailsWithClientData.clientJobsData.slice(0,5).length}})</b></h4>
            </template>
            <b-row class="px-3 py-2">
                <b-col xl="12" lg="12" sm="12">
                <ul class="list-unstyled mb-0 ml--22">
                    <li v-for="(clientJobs,ids) in jobDetailsWithClientData.clientJobsData.slice(0,5)" :key="ids">
                    <a :href="$router.resolve({name: 'freelancerjobDetails',  path:'/freelancer/job-details', query: {jobDetailsWithClientData: clientJobs.jobs_id}}).href" target="_blank" class="text-theme">{{clientJobs.job_title}} | </a><span>{{clientJobs.employment_Name}} | {{clientJobs.country_name+', '+clientJobs.state_name+', '+clientJobs.city_name}}.</span>
                    <span class="type text-muted d-block d-md-inline">
                        <!-- Hourly -->
                    </span>
                    </li>
                    
                </ul>
                </b-col>
            </b-row>
            </b-card>
        </b-card-group> 

        <b-card-group deck class="mt-3" v-if="jobDetailsWithClientData.similarJobs.length > 0">
            <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
                <h4 class="mb-0 fz-24 fw-500 text-black"><b>Similar Jobs On Qapin</b></h4>
            </template>
            <b-row class="px-3 py-2">
                <b-col xl="12" lg="12" sm="12">
                <ul class="list-unstyled mb-0 ml--22">
                    <li v-for="(similarJobs,ids) in jobDetailsWithClientData.similarJobs.slice(0,5)" :key="ids">
                    <a :href="$router.resolve({name: 'freelancerjobDetails',  path:'/freelancer/job-details', query: {jobDetailsWithClientData: similarJobs.jobs_id}}).href" target="_blank" class="text-theme">{{similarJobs.job_title}} | </a><span> {{similarJobs.country_name+', '+similarJobs.state_name+', '+similarJobs.city_name}}.</span>
                    <span class="type text-muted d-block d-md-inline">
                        <!-- Hourly -->
                    </span>
                    </li>
                    
                </ul>
                </b-col>
            </b-row>
            </b-card>
        </b-card-group>
        </div>
    </b-sidebar>
</template>
<script>
import { mapActions } from "vuex";

export default {
    data(){
        return{
            login_user_id:'',
            headToken:'',
            proposalbtn_text:'Submit a Proposal',
            jobLink:'',
            jobDetailsWithClientData:{
                jobDetails:{
                preference_questions:[],
                preference_languages_arr:[],
                },
                jobApplicationStatus:'',
                clientJobsData : '',
                clientJobshistoryData : '',
                clientFullDetails : '',
                clientrating : '',
                similarJobs:[],
            },
            inviteData:'',
        }
    },
    props:[],
    methods:{
    ...mapActions(["genericAPIPOSTRequest"]),
    
    // this fun for to go job proposal
    submitProposal(datas,proposal_uri) {
      var route='';
      if (proposal_uri == 0 ) {
        route = this.$router.resolve({
          name: this.$store.state.accountType+'submitProposal',
          path:'/'+this.$store.state.accountType+'/submit-proposal',
          query: {jobDetailsWithClientData: datas}
          });  
      }else{
        route = this.$router.resolve({
          name: 'proposalDetails',
          path:'/freelancer/proposal-details',
          query: {jobDetailsWithClientData: datas}
          });
          // route = this.$router.resolve({
          // name: 'myProposals',
          // path:'/freelancer/my-proposals#submit-Proposal',
          // // query: {jobDetails: datas}
          // });
      }
      window.open(route.href);
    },
        // this fun for to save & unsave post
        async savePost(jobdata){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "job/addBookmark",
                params: {
                    "action":3,
                    "jobData":jobdata
                },
            });
            if(res){
                if(jobdata.action == 3){
                    this.jobDetailsWithClientData.jobDetails.action=null;
                    this.$toastr.s('Post UnSaved Successfull');
                }else{
                    this.jobDetailsWithClientData.jobDetails.action = 3;
                    this.$toastr.s('Post Saved Successfull');
                }
            }
        },
        // this fun is for copy url
        copyClipboad(){
            this.$refs.clone.focus();
            document.execCommand('copy');
        },
        // this function is for get post details
        async postDetails(data){
            var jobDetailsres = await this.genericAPIPOSTRequest({
                requestUrl: "getJobDetail",
                params: {
                    'jobsid':[data]
                },
            });
            if(jobDetailsres.length>0){
                this.jobDetailsWithClientData.jobDetails =jobDetailsres[0];
                this.jobLink= window.location.origin+'/freelancer/job-details?jobDetailsWithClientData='+this.jobDetailsWithClientData.jobDetails.jobs_id;
                var applicationStatus = await this.genericAPIPOSTRequest({
                    requestUrl: "getJobApplicantStatus",
                    params: { "jobsid": this.jobId },
                });  
                if(applicationStatus){
                    this.jobDetailsWithClientData.jobApplicationStatus =  applicationStatus;
                }
                var UserPostedjobData = await this.genericAPIPOSTRequest({
                    requestUrl: "getUserPostedJob",
                    params: {
                        "filter": "",
                        "search": {},
                        "user_id": this.jobDetailsWithClientData.jobDetails.user_id
                    },
                });  
                if(UserPostedjobData.length > 0 ){
                    this.jobDetailsWithClientData.clientJobsData =  UserPostedjobData;
                    this.jobDetailsWithClientData.clientJobsData.filter((jobdaata,id)=>{
                        if(jobdaata.jobs_id == data){
                        this.jobDetailsWithClientData.clientJobsData.splice(id,1);
                        }
                    });
                }
                var clientDetails =   await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserDetails",
                    params: {
                        "user_id": this.jobDetailsWithClientData.jobDetails.user_id
                    },
                });
                if(clientDetails !=''){
                    this.jobDetailsWithClientData.clientFullDetails =  clientDetails;
                }

                var clientReview = await this.genericAPIPOSTRequest({
                    requestUrl: "getUserReviewCal",
                    params: {
                        "user_id": this.jobDetailsWithClientData.jobDetails.user_id
                    },
                });
                if(clientReview){
                    this.jobDetailsWithClientData.clientrating =  clientReview;
                }

                var clientJobshistorydata =   await this.genericAPIPOSTRequest({
                    requestUrl: "getUserPostedJob",
                    params: {
                        "filter": 4,
                        "search": {},
                        "user_id": this.jobDetailsWithClientData.jobDetails.user_id
                    },
                });
                if(clientJobshistorydata !=''){
                    this.jobDetailsWithClientData.clientJobshistoryData =  clientJobshistorydata;
                }

                var getMilestoneData = await this.genericAPIPOSTRequest({
                        requestUrl: "getCreatedMilestone",
                        params: {
                        "job_id":data,
                        "user_id": this.login_user_id
                        },
                    });
                if (getMilestoneData.milestone.length > 0 ) {
                    this.proposal_url = 1;
                    this.proposalbtn_text = "Proposal Details";
                }else{
                    this.proposal_url = 0;
                    this.proposalbtn_text = "Submit a Proposal";
                }

                var getsimilarjobData =   await this.genericAPIPOSTRequest({
                    requestUrl: "getJobsList",
                    params: {
                        "user_id": this.login_user_id,
                        "search": {"category_id":this.jobDetailsWithClientData.jobDetails.quality_inspector_id}
                    },
                });
                if(getsimilarjobData !=''){
                    this.jobDetailsWithClientData.similarJobs = getsimilarjobData;
                    this.jobDetailsWithClientData.similarJobs.filter((jobdaata,id)=>{
                        if(jobdaata.jobs_id == data){
                        this.jobDetailsWithClientData.similarJobs.splice(id,1);
                        }
                    })
                }
                this.getInviteDetails(data);
            }
            
            // var apiData ={
            //     'jobsid':[data]
            // };
            // axios.post(this.$store.state.baseUrl+'getJobDetail',apiData,{"headers":this.headToken}).then((response)=>{
            //     if(response.data.status == true){
            //     this.jobDetailsWithClientData.jobDetails =  response.data.result[0];
            //     this.jobLink= window.location.origin+'/freelancer/job-details?jobDetailsWithClientData='+this.jobDetailsWithClientData.jobDetails.jobs_id;
            //     // var jobApplicationStatus = {
            //     //     "jobsid": data,
            //     //     "user_id":this.jobDetailsWithClientData.jobDetails.user_id
            //     // };
            //     // axios.post(this.$store.state.baseUrl+'getJobApplicantStatus',jobApplicationStatus,{"headers":this.headToken}).then((response)=>{
            //     //     if(response.data.status == true){
            //     //     this.jobDetailsWithClientData.jobApplicationStatus =  response.data.result;
            //     //     }else{
            //     //     this.jobDetailsWithClientData.jobApplicationStatus =  '';
            //     //     }
            //     // });
            //     // var clientJobsapi = {
            //     //     "filter": "",
            //     //     "search": {},
            //     //     "user_id": this.jobDetailsWithClientData.jobDetails.user_id
            //     // }
            //     // axios.post(this.$store.state.baseUrl+'getUserPostedJob',clientJobsapi,{'headers':this.headToken}).then((response)=>{
            //     //     if (response.data.status==true) {
            //     //     this.jobDetailsWithClientData.clientJobsData =  response.data.result;
            //     //     this.jobDetailsWithClientData.clientJobsData.filter((jobdaata,id)=>{
            //     //         if(jobdaata.jobs_id == data){
            //     //         this.jobDetailsWithClientData.clientJobsData.splice(id,1);
            //     //         }
            //     //     })
            //     //     }else{
            //     //     this.jobDetailsWithClientData.clientJobsData =  [];
            //     //     }
            //     // });
            //     // var clientDetailsapi = {
            //     //     "user_id": this.jobDetailsWithClientData.jobDetails.user_id
            //     // }
            //     // axios.post(this.$store.state.baseUrl+'user/getUserDetails',clientDetailsapi,{headers: this.headToken}).then((response)=>{
            //     //     if(response.data.status ==  true){
            //     //     this.jobDetailsWithClientData.clientFullDetails =  response.data.result;
            //     //     }else{
            //     //     this.jobDetailsWithClientData.clientFullDetails =  '';
            //     //     }
            //     // });

            //     // var clientRatingsapi = {
            //     //     "user_id": this.jobDetailsWithClientData.jobDetails.user_id
            //     // }
            //     // axios.post(this.$store.state.baseUrl+'getUserReviewCal',clientRatingsapi,{headers: this.headToken}).then((response)=>{
            //     //     if(response.data.status ==  true){
            //     //     this.jobDetailsWithClientData.clientrating =  response.data.result;
            //     //     }else{
            //     //     this.jobDetailsWithClientData.clientrating =  '';
            //     //     }
            //     // });

            //     // var clientJobshistoryapi = {
            //     //     "filter": 4,
            //     //     "search": {},
            //     //     "user_id": this.jobDetailsWithClientData.jobDetails.user_id
            //     // }
            //     // axios.post(this.$store.state.baseUrl+'getUserPostedJob',clientJobshistoryapi,{'headers':this.headToken}).then((response)=>{
            //     //     if (response.data.status==true) {
            //     //     this.jobDetailsWithClientData.clientJobshistoryData =  response.data.result;
            //     //     }else{
            //     //     this.jobDetailsWithClientData.clientJobshistoryData =  [];
            //     //     }
            //     // });

            //     // this fun is for to check milestone data
            //     // var getmilestoneData = {
            //     //   "job_id":data,
            //     //   "user_id": this.login_user_id
            //     // };
            //     // axios.post(this.$store.state.baseUrl+'getCreatedMilestone',getmilestoneData,{headers: this.headToken}).then((response)=>{
            //     //   if(response.data.status==true){
            //     //     this.proposal_url = 1;
            //     //     this.proposalbtn_text = "Proposal Details";
            //     //   }else{
            //     //     this.proposal_url = 0;
            //     //     this.proposalbtn_text = "Submit a Proposal";

            //     //   }
            //     // });

            //     // var getMilestoneData = this.genericAPIPOSTRequest({
            //     //         requestUrl: "getCreatedMilestone",
            //     //         params: {
            //     //         "job_id":data,
            //     //         "user_id": this.login_user_id
            //     //         },
            //     //     });
            //     // console.log('getMilestoneData',getMilestoneData)
            //     // if (getMilestoneData.milestone.length > 0 ) {
            //     //     this.proposal_url = 1;
            //     //     this.proposalbtn_text = "Proposal Details";
            //     // }else{
            //     //     this.proposal_url = 0;
            //     //     this.proposalbtn_text = "Submit a Proposal";

            //     // }

            //     // this fun is for similar jobs
            //     var getsimilarjobData = {
            //         "user_id": this.login_user_id,
            //         "search": {"category_id":this.jobDetailsWithClientData.jobDetails.quality_inspector_id}
            //     };
            //     axios.post(this.$store.state.baseUrl+'getJobsList',getsimilarjobData,{headers: this.headToken}).then((response)=>{
            //         if(response.data.status==true){
            //         this.jobDetailsWithClientData.similarJobs=response.data.result;
            //         this.jobDetailsWithClientData.similarJobs.filter((jobdaata,id)=>{
            //             if(jobdaata.jobs_id == data){
            //             this.jobDetailsWithClientData.similarJobs.splice(id,1);
            //             }
            //         })
            //         }
            //     });          
            //     }
            // });
        },
        // this fun is for to get job details
        async getInviteDetails(_i){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getJobInvitation",
                params: {
                "job_id": _i,
                },
            });
            if(res){
                this.inviteData = res;
            }
        },
    },
    mounted() {
        this.login_user_id = this.$store.state.currentUserData.login_master_id;
        this.headToken = { "Authorization": 'Bearer '+this.$store.state.currentUserData.token };
    }, 
}
</script>