<template>
    <b-container>
        <b-row class="mt-100 post-review-wrap">
            <b-col xl="12" lg="12" sm="12">
                <b-card no-body>
                    <b-col xl="12" lg="12" sm="12">
                        <div class="title-wrap">
                        <h3 class="fz-24 text-black fw-600 mb-0">Job Details</h3>
                        </div>
                    </b-col>
                    <b-card-text>
                        <b-row class="mb-20">
                            <b-col xl="12" lg="12" sm="12">
                            <div class="view-wrapper">
                                <b-row>
                                <b-col xl="9" lg="9" sm="12" class="left">
                                    <div class="header px-4 py-4">
                                    <div class="d-flex align-items-center w-100">
                                        <div>
                                        <h5 class="mb-3 text-theme">{{jobDetails.job_title}}</h5>
                                        <p class="mb-0 fz-16">Posted {{jobDetails.time}}</p>
                                        </div>
                                        <div class="ml-auto d-flex align-items-center">
                                        <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0009 5.28052C8.37861 5.28052 5.41016 8.40161 5.41016 12.2751C5.41016 14.3588 6.46939 16.8773 8.23885 19.662C8.85375 20.6296 9.51649 21.566 10.1864 22.4407C10.6064 22.9891 10.953 23.4151 11.1795 23.6803C11.6252 24.2023 12.3769 24.202 12.8224 23.6803C13.0489 23.4151 13.3955 22.9891 13.8155 22.4407C14.4854 21.566 15.1481 20.6296 15.763 19.662C17.5325 16.8773 18.5917 14.3588 18.5917 12.2751C18.5916 8.40159 15.6232 5.28052 12.0009 5.28052ZM9.18957 18.8473C7.5603 16.2832 6.59169 13.9802 6.59169 12.2751C6.59169 9.19148 9.00641 6.6526 12.0009 6.6526C14.9954 6.6526 17.4101 9.19148 17.4102 12.2751C17.4102 13.9802 16.4416 16.2832 14.8123 18.8473C13.7973 20.4446 12.7487 21.8158 12.0009 22.6936C11.2531 21.8158 10.2046 20.4446 9.18957 18.8473ZM12.0009 14.761C10.7682 14.761 9.77235 13.5705 9.77235 12.1145C9.77235 10.6584 10.7683 9.46794 12.0009 9.46794C13.2336 9.46794 14.2295 10.6585 14.2295 12.1145C14.2295 13.5705 13.2336 14.761 12.0009 14.761ZM12.0009 13.5665C12.6588 13.5665 13.2009 12.9184 13.2009 12.1145C13.2009 11.3105 12.6588 10.6624 12.0009 10.6624C11.3431 10.6624 10.8009 11.3105 10.8009 12.1145C10.8009 12.9184 11.3431 13.5665 12.0009 13.5665Z" fill="#999999"/>
                                        </svg>
                                        <p class="mb-0 fz-16">{{jobDetails.country_name+', '+jobDetails.state_name+', '+jobDetails.city_name}}</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="content px-4 py-4">
                                    <p class="fw-400 mb-0" v-html="jobDetails.scope_of_work"></p>
                                    <div class="d-flex align-items-center" v-if="jobDetails.attachmentName!=''">
                                        <a target="_blank" :href="jobDetails.attachment">
                                            <i class="fa fa-paperclip text-black mr-2 pt-1" aria-hidden="true"></i>
                                            <span class="text-theme fz-16">
                                                {{jobDetails.attachmentName}}
                                            </span>
                                        </a>
                                    </div>
                                    </div>
                                    <div class="job-scope px-4 py-4">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12">
                                        <div class="box-wrapper d-flex align-items-center">
                                            <div class="img-wrapper mr-2">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1073_14916)">
                                                <path d="M12.4166 0.500244H7.91394C7.61608 0.500244 7.19977 0.672804 6.98932 0.8831L0.816135 7.05625C0.394622 7.47728 0.394622 8.16759 0.816135 8.58811L5.41257 13.1844C5.83313 13.6054 6.52277 13.6054 6.94396 13.1839L13.1171 7.01172C13.3274 6.80145 13.5 6.38448 13.5 6.08725V1.58362C13.5 0.987899 13.0123 0.500244 12.4166 0.500244ZM10.2498 4.8336C9.6515 4.8336 9.16645 4.34804 9.16645 3.75022C9.16645 3.15142 9.6515 2.66684 10.2498 2.66684C10.8482 2.66684 11.3334 3.15142 11.3334 3.75022C11.3334 4.34804 10.8482 4.8336 10.2498 4.8336Z" fill="#F2613C"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1073_14916">
                                                <rect width="13" height="13" fill="white" transform="translate(0.5 0.5)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            </div>
                                            <div class="box-content">
                                            <h5 class="sub-title fz-18 fw-600">{{(jobDetails.budget_type=='A')?'Daily Rate':'Monthly Rate'}}</h5>
                                            <p class="mb-0 fz-16">{{jobDetails.budget}} {{(jobDetails.budget_type=='A')?'Per Day':'Per Month'}}</p>
                                            </div>
                                        </div>  
                                        </div>
                    
                                        <div class="col-lg-6 col-md-12">
                                        <div class="box-wrapper d-flex align-items-center">
                                            <div class="img-wrapper mr-2">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1073_14916)">
                                                <path d="M12.4166 0.500244H7.91394C7.61608 0.500244 7.19977 0.672804 6.98932 0.8831L0.816135 7.05625C0.394622 7.47728 0.394622 8.16759 0.816135 8.58811L5.41257 13.1844C5.83313 13.6054 6.52277 13.6054 6.94396 13.1839L13.1171 7.01172C13.3274 6.80145 13.5 6.38448 13.5 6.08725V1.58362C13.5 0.987899 13.0123 0.500244 12.4166 0.500244ZM10.2498 4.8336C9.6515 4.8336 9.16645 4.34804 9.16645 3.75022C9.16645 3.15142 9.6515 2.66684 10.2498 2.66684C10.8482 2.66684 11.3334 3.15142 11.3334 3.75022C11.3334 4.34804 10.8482 4.8336 10.2498 4.8336Z" fill="#F2613C"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1073_14916">
                                                <rect width="13" height="13" fill="white" transform="translate(0.5 0.5)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            </div>
                                            <div class="box-content">
                                            <h5 class="sub-title fz-18 fw-600">{{jobDetails.employment_Text}}</h5>
                                            <p class="mb-0 fz-16">{{jobDetails.employment_Name}}</p>
                                            </div>
                                        </div>  
                                        </div>
                                        
                                        <div class="col-lg-6 col-md-12">
                                        <div class="box-wrapper d-flex align-items-center">
                                            <div class="img-wrapper mr-2">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1073_14884)">
                                                <path d="M9.31831 8.43972C9.31831 9.65205 8.332 10.6384 7.11967 10.6384C5.90733 10.6384 4.92102 9.65205 4.92102 8.43972C4.92102 7.22735 5.90733 6.24102 7.11967 6.24102C7.56724 6.24102 7.98378 6.37578 8.3315 6.60638L9.60656 5.33132C9.57779 5.31028 9.54888 5.28934 9.51946 5.26877C8.65476 4.66452 7.78857 4.35913 6.94128 4.35913C6.86367 4.35913 6.78627 4.36168 6.70898 4.36681C5.68664 4.43639 4.7342 4.89151 4.02776 5.64828C3.31957 6.40572 2.92969 7.39695 2.92969 8.43972C2.92969 9.55851 3.36562 10.6106 4.15717 11.4022C4.94877 12.1938 6.00085 12.6297 7.11964 12.6297C8.23843 12.6297 9.29054 12.1937 10.0821 11.4022C10.8737 10.6106 11.3096 9.55851 11.3096 8.43972C11.3096 7.5188 10.9377 6.63468 10.2662 5.91453L8.95289 7.22785C9.18357 7.57558 9.31831 7.99215 9.31831 8.43972Z" fill="#F2613C"/>
                                                <path d="M6.80781 8.12916L7.68766 7.24932C7.51524 7.16655 7.32224 7.12012 7.11856 7.12012C6.39086 7.12012 5.79883 7.71218 5.79883 8.43991C5.79883 9.16762 6.39086 9.75965 7.11856 9.75965C7.84627 9.75965 8.4383 9.16762 8.4383 8.43991C8.4383 8.23624 8.39187 8.0432 8.30913 7.87079L7.42932 8.75061L6.80781 8.12916Z" fill="#F2613C"/>
                                                <path d="M11.4341 4.74597L10.8873 5.29276C11.7235 6.17815 12.1876 7.28158 12.1876 8.43984C12.1876 9.79341 11.6603 11.0662 10.7027 12.0238C9.74514 12.9813 8.47233 13.5087 7.11879 13.5087C5.76524 13.5087 4.49244 12.9813 3.53484 12.0238C2.57725 11.0662 2.0499 9.79338 2.0499 8.43984C2.0499 7.17339 2.52396 5.96897 3.38467 5.0484C4.24345 4.12836 5.40293 3.5748 6.64919 3.48998C7.77568 3.41554 8.91006 3.77141 10.022 4.54848C10.0942 4.59893 10.1644 4.6509 10.2333 4.70381L10.8127 4.12449L10.9054 2.47827C9.78413 1.76296 8.48098 1.37964 7.11882 1.37964C5.23298 1.37964 3.45999 2.11402 2.12651 3.4475C0.792978 4.78098 0.0585938 6.55397 0.0585938 8.43981C0.0585938 10.3256 0.792979 12.0986 2.12648 13.4321C3.45999 14.7656 5.23295 15.5 7.11879 15.5C9.00463 15.5 10.7776 14.7656 12.1111 13.4321C13.4446 12.0986 14.179 10.3256 14.179 8.43981C14.179 7.07765 13.7956 5.77449 13.0803 4.65318L11.4341 4.74597Z" fill="#F2613C"/>
                                                <path d="M11.709 3.85021L13.5048 3.74899L15.0592 2.19459L13.3646 0.5L11.8102 2.05437L11.709 3.85021Z" fill="#F2613C"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1073_14884">
                                                <rect width="15" height="15" fill="white" transform="translate(0.0585938 0.5)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            </div>
                                            <div class="box-content">
                                            <h5 class="sub-title fz-18 fw-600">Scope</h5>
                                            <p class="mb-0 fz-16">{{jobDetails.project_type+', '+jobDetails.project_length_title}}</p>
                                            </div>
                                        </div>  
                                        </div>
                    
                                        <div class="col-lg-6 col-md-12">
                                        <div class="box-wrapper d-flex align-items-center">
                                            <div class="img-wrapper mr-2">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6562 11.25H11.3242C11.3242 12.4562 10.2816 13.4375 9 13.4375C7.71843 13.4375 6.67578 12.4562 6.67578 11.25H6.34375C4.23831 11.25 2.52539 12.8622 2.52539 14.8438V15.5312C2.52539 15.7901 2.74838 16 3.02344 16H14.9766C15.2516 16 15.4746 15.7901 15.4746 15.5312V14.8438C15.4746 12.8622 13.7617 11.25 11.6562 11.25Z" fill="#F2613C"/>
                                                <path d="M7.67188 10.7812V11.25C7.67188 11.9403 8.26651 12.5 9 12.5C9.73349 12.5 10.3281 11.9403 10.3281 11.25V10.7812H7.67188Z" fill="#F2613C"/>
                                                <path d="M9 1.875C9.27505 1.875 9.49805 1.66513 9.49805 1.40625V0.46875C9.49805 0.209875 9.27505 0 9 0C8.72495 0 8.50195 0.209875 8.50195 0.46875V1.40625C8.50195 1.66513 8.72495 1.875 9 1.875Z" fill="#F2613C"/>
                                                <path d="M5.24649 1.54035L5.74454 2.35225C5.88207 2.57644 6.18668 2.65325 6.42488 2.52382C6.66308 2.39438 6.74469 2.10769 6.60716 1.8835L6.10911 1.0716C5.97159 0.847411 5.66698 0.770598 5.42878 0.900036C5.19058 1.02947 5.10897 1.31616 5.24649 1.54035Z" fill="#F2613C"/>
                                                <path d="M2.99909 3.99975L3.86174 4.4685C4.09994 4.59794 4.40455 4.52113 4.54207 4.29694C4.6796 4.07275 4.59799 3.78607 4.35979 3.65663L3.49714 3.18788C3.25894 3.05844 2.95433 3.13525 2.81681 3.35944C2.67928 3.58363 2.76089 3.87032 2.99909 3.99975Z" fill="#F2613C"/>
                                                <path d="M14.5004 3.18788L13.6378 3.65663C13.3996 3.78607 13.318 4.07275 13.4555 4.29694C13.593 4.52113 13.8976 4.59794 14.1358 4.4685L14.9985 3.99975C15.2366 3.87032 15.3183 3.58363 15.1807 3.35944C15.0432 3.13525 14.7386 3.05844 14.5004 3.18788Z" fill="#F2613C"/>
                                                <path d="M11.5714 2.52382C11.8096 2.65325 12.1142 2.57644 12.2517 2.35225L12.7497 1.54035C12.8873 1.31616 12.8056 1.02947 12.5674 0.900036C12.3292 0.770598 12.0246 0.847411 11.8871 1.0716L11.3891 1.8835C11.2515 2.10769 11.3332 2.39438 11.5714 2.52382Z" fill="#F2613C"/>
                                                <path d="M9 2.8125C6.98288 2.8125 5.34766 4.35153 5.34766 6.25C5.34766 7.47166 6.02586 8.54234 7.04649 9.15131C7.32015 9.31459 7.51914 9.56103 7.61241 9.84375H8.50195V7.38166L7.65172 6.58147C7.45722 6.39841 7.45722 6.10162 7.65172 5.91856C7.84622 5.7355 8.16155 5.7355 8.35606 5.91856L9 6.52459L9.64391 5.91856C9.83841 5.7355 10.1537 5.7355 10.3482 5.91856C10.5427 6.10162 10.5427 6.39841 10.3482 6.58147L9.49805 7.38166V9.84375H10.3876C10.4809 9.56103 10.6799 9.31459 10.9535 9.15131C11.9741 8.54234 12.6523 7.47166 12.6523 6.25C12.6523 4.35153 11.0171 2.8125 9 2.8125Z" fill="#F2613C"/>
                                            </svg>
                                            </div>
                                            <div class="box-content">
                                            <h5 class="sub-title fz-18 fw-600">{{jobDetails.experience_level_title}}</h5>
                                            <p class="mb-0 fz-16">{{jobDetails.experience_level_description}}</p>
                                            </div>
                                        </div>  
                                        </div>
                                    </div>
                                    </div>
                                    <div class="proposal px-4 py-4" >
                                    <!-- <div class="proposal px-4 py-4" v-if="jobDetails.preference_questions.length > 0"> -->
                                    <h5 class="mb-3 fz-18 fw-600">You will be asked to answer the following questions when submitting a proposal:</h5>
                                    <p class="mb-3 fz-16" v-for="(ques,ids) in jobDetails.preference_questions" :key="ids">{{ids+1}}. {{ques.text}}</p>
                                    </div>
                                    <div class="row px-4 py-4 activity">
                                    <div class="col-lg-4 col-md-12">
                                        <h5 class="mb-3 fz-18 fw-600">Preferred Qualifications</h5>
                                        <ul class="custom-margin">
                                        <li class="fz-16 fw-500 text-black"><span class="text-muted fz-16 fw-500">Other lang:</span></li>
                                        <li class="fz-16 fw-500 text-black"><span class="fz-16 fw-500 text-black" v-for="(other_lang, id) in jobDetails.preference_languages_arr" :key="id">{{(id!=0)?', ':' '}}{{other_lang.value}}</span></li>
                                        <li class="fz-16 fw-500 text-black"><span class="text-muted fz-16 fw-500">English:</span> {{jobDetails.english_level}}</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4 col-md-12">
                                        <h5 class="mb-3 fz-18 fw-600">Activity on this job</h5>  
                                        <ul class="custom-margin">
                                        <li class="fz-16 fw-500 text-black"><span class="text-muted fz-16 fw-500">Proposals:</span>  {{jobApplicationStatus.jobApplicantCount}}</li>
                                        <li class="fz-16 fw-500 text-black"><span class="text-muted fz-16 fw-500">Interviewing:</span>  {{jobApplicationStatus.jobHireApplicantCount}}</li>
                                        <li class="fz-16 fw-500 text-black"><span class="text-muted fz-16 fw-500">Invites sent:</span>  {{jobApplicationStatus.jobShortlistedApplicantCount}}</li>
                                        <li class="fz-16 fw-500 text-black"><span class="text-muted fz-16 fw-500">Unanswered invites:</span>  {{jobApplicationStatus.jobRejectedApplicantCount}}</li>
                                        </ul>
                                    </div>
                                    <div class="job-inner mb-5">
                                        <h4 class="fz-18 fw-600 mb-3">Skills</h4>
                                        <div class="tags-wrap">
                                        <ul class="custom-margin">
                                            <li v-for="(skill,ids) in jobDetails.skill_name" :key="ids">
                                            <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                                                <span class="mr-2">{{skill}}</span> 
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </b-col>
                                <b-col xl="3" lg="3" sm="12" class="right">
                                    <div class="options px-4 py-4">
                                    <ul>
                                        <li class="mb-3">
                                            <a href="javascript:void(0);" class="text-theme d-flex align-items-center" @click="$router.push({ name:'post-job',path:'/client/post-job', params:{ pid:jobDetails.uniq_id}})">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.874743 11.7141L1.90377 10.4402C2.0576 10.2498 2.32541 10.205 2.53064 10.3354L3.88919 11.1989C4.11553 11.3429 4.1849 11.647 4.04414 11.8785C3.90351 12.11 3.60592 12.181 3.37957 12.037L2.94775 11.7625C3.30618 13.1267 4.07783 14.3527 5.18264 15.2875C6.74113 16.6061 8.80346 17.024 10.6994 16.4054C11.8779 16.0209 12.8731 15.3606 13.6574 14.4431C14.3865 13.5905 14.8953 12.5426 15.1292 11.4125C15.1844 11.146 15.4406 10.9755 15.7013 11.032C15.962 11.0884 16.1287 11.3503 16.0734 11.6169C15.5076 14.3506 13.6083 16.4921 10.9927 17.3455C10.3185 17.5655 9.62651 17.6733 8.93869 17.6733C7.37177 17.6733 5.8271 17.1137 4.56733 16.0477C3.27212 14.9519 2.37769 13.5035 1.98307 11.8917L1.61887 12.3426C1.52348 12.4607 1.38561 12.5217 1.24649 12.5217C1.13841 12.5217 1.02945 12.4847 0.939466 12.4088C0.734113 12.2353 0.705082 11.9242 0.874743 11.7141Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.5"/>
                                                <path d="M15.7245 8.57001C15.6354 8.57001 15.5458 8.54379 15.47 8.4956L14.1114 7.63206C13.8851 7.48827 13.8157 7.18397 13.9564 6.95254C14.0971 6.72111 14.3947 6.65004 14.6211 6.79397L15.0663 7.07693C14.758 5.84112 14.1162 4.72944 13.1777 3.81938C12.3437 3.01071 11.3159 2.4611 10.2056 2.23031C9.09475 1.99939 7.94998 2.09795 6.89507 2.51533C5.82771 2.93746 4.927 3.59771 4.21782 4.4777C3.55501 5.30012 3.088 6.29602 2.86732 7.35797C2.81189 7.62461 2.55564 7.79488 2.29499 7.73808C2.03422 7.68141 1.86782 7.41939 1.92325 7.15288C2.17598 5.93634 2.71198 4.79433 3.47294 3.85009C4.28882 2.83775 5.323 2.07894 6.5467 1.59487C7.77416 1.10938 9.10581 0.994757 10.3979 1.2632C11.6855 1.53087 12.8764 2.16722 13.8419 3.10323C14.5351 3.77556 15.0916 4.55352 15.4956 5.41577C15.758 5.97566 15.9233 6.41386 16.0291 6.92478L16.3816 6.48839C16.5514 6.27829 16.8556 6.2486 17.061 6.42221C17.2665 6.59569 17.2955 6.90679 17.1259 7.1169L16.0969 8.39087C16.0022 8.50807 15.8644 8.57001 15.7245 8.57001Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.5"/>
                                                </svg>
                                                <span class="ml-2 fz-18 fw-500">Reuse Posting</span>
                                            </a>
                                        </li>
                                        <li class="mb-3">
                                            <a href="javascript:void(0);" class="text-theme d-flex align-items-center" @click="$router.push({name: 'index',path:'/client/jobpostreview/',params: {pid: jobDetails.uniq_id},query:{current:2}}).href">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.3223 18.625C14.9773 18.625 14.6973 18.345 14.6973 18C14.6973 17.655 14.9773 17.375 15.3223 17.375H15.3229C15.3229 17.03 15.6023 16.75 15.9476 16.75C16.2929 16.75 16.5723 17.03 16.5723 17.375C16.5723 18.0644 16.0116 18.625 15.3223 18.625Z" fill="#F2613C"/>
                                                <path d="M15.9473 17.9998C15.6023 17.9998 15.3223 17.7198 15.3223 17.3748V11.2451C15.3223 10.9001 15.6023 10.6201 15.9473 10.6201C16.2923 10.6201 16.5723 10.9001 16.5723 11.2451V17.3748C16.5723 17.7198 16.2923 17.9998 15.9473 17.9998Z" fill="#F2613C"/>
                                                <path d="M15.3223 18.625H4.07227C3.72727 18.625 3.44727 18.345 3.44727 18C3.44727 17.655 3.72727 17.375 4.07227 17.375H15.3223C15.6673 17.375 15.9473 17.655 15.9473 18C15.9473 18.345 15.6673 18.625 15.3223 18.625Z" fill="#F2613C"/>
                                                <path d="M4.07227 18.625C3.38289 18.625 2.82227 18.0644 2.82227 17.375C2.82227 17.03 3.10227 16.75 3.44727 16.75C3.79227 16.75 4.07227 17.03 4.07227 17.375V17.3759C4.41727 17.3759 4.69727 17.6553 4.69727 18.0003C4.69727 18.3453 4.41727 18.625 4.07227 18.625Z" fill="#F2613C"/>
                                                <path d="M3.44727 18C3.10227 18 2.82227 17.72 2.82227 17.375V6.125C2.82227 5.78 3.10227 5.5 3.44727 5.5C3.79227 5.5 4.07227 5.78 4.07227 6.125V17.375C4.07227 17.72 3.79227 18 3.44727 18Z" fill="#F2613C"/>
                                                <path d="M3.44695 6.75C3.10164 6.75 2.82227 6.47 2.82227 6.125C2.82227 5.43562 3.38289 4.875 4.07227 4.875C4.41727 4.875 4.69727 5.155 4.69727 5.5C4.69727 5.845 4.41727 6.125 4.07227 6.125H4.07164C4.07164 6.47 3.79227 6.75 3.44695 6.75Z" fill="#F2613C"/>
                                                <path d="M10.202 6.125H4.07227C3.72727 6.125 3.44727 5.845 3.44727 5.5C3.44727 5.155 3.72727 4.875 4.07227 4.875H10.202C10.547 4.875 10.827 5.155 10.827 5.5C10.827 5.845 10.5473 6.125 10.202 6.125Z" fill="#F2613C"/>
                                                <path d="M9.6757 10.1867C9.5157 10.1867 9.3557 10.1258 9.23383 10.0036C8.98977 9.75956 8.98977 9.36393 9.23383 9.11987L15.3379 3.01581C15.5817 2.77175 15.9779 2.77175 16.2217 3.01581C16.4657 3.25987 16.4657 3.6555 16.2217 3.89956L10.1176 10.0036C9.9957 10.1258 9.83539 10.1867 9.6757 10.1867Z" fill="#F2613C"/>
                                                <path d="M9.07289 13C9.02945 13 8.98539 12.9957 8.94133 12.986C8.60383 12.9138 8.38883 12.5813 8.46133 12.2441L9.06476 9.43097C9.13695 9.09316 9.47007 8.87722 9.80695 8.95097C10.1444 9.02316 10.3594 9.35566 10.2869 9.69285L9.68351 12.506C9.62039 12.7994 9.36133 13 9.07289 13Z" fill="#F2613C"/>
                                                <path d="M11.8866 12.3962C11.7266 12.3962 11.5666 12.3353 11.4448 12.2131C11.2007 11.969 11.2007 11.5734 11.4448 11.3294L17.5488 5.22528C17.7926 4.98122 18.1888 4.98122 18.4326 5.22528C18.6766 5.46935 18.6766 5.86497 18.4326 6.10903L12.3285 12.2131C12.2066 12.3353 12.0466 12.3962 11.8866 12.3962Z" fill="#F2613C"/>
                                                <path d="M9.07186 13C8.78342 13 8.52436 12.7994 8.46124 12.5062C8.38905 12.1687 8.60374 11.8362 8.94124 11.764L11.7544 11.1603C12.0909 11.0887 12.4241 11.3025 12.4966 11.64C12.5687 11.9775 12.3541 12.31 12.0166 12.3822L9.20342 12.9859C9.15936 12.9953 9.1153 13 9.07186 13Z" fill="#F2613C"/>
                                                <path d="M16.8854 7.39711C16.7254 7.39711 16.5654 7.33617 16.4435 7.21398L14.2338 5.0043C13.9898 4.76023 13.9898 4.36461 14.2338 4.12055C14.4776 3.87648 14.8738 3.87648 15.1176 4.12055L17.3273 6.33023C17.5713 6.5743 17.5713 6.96992 17.3273 7.21398C17.2054 7.33617 17.0454 7.39711 16.8854 7.39711Z" fill="#F2613C"/>
                                                <path d="M17.9895 6.29211C17.8295 6.29211 17.6695 6.23117 17.5473 6.10898C17.3033 5.86492 17.3033 5.46898 17.5473 5.22492C17.7205 5.05211 17.8158 4.81648 17.8158 4.56242C17.8158 4.30836 17.7205 4.07273 17.5473 3.89992C17.2005 3.55273 16.5677 3.55305 16.2214 3.89961C15.9773 4.14367 15.5817 4.14367 15.3373 3.89992C15.0933 3.65586 15.0933 3.25992 15.3373 3.01586C15.7467 2.60617 16.2961 2.38086 16.8842 2.38086C17.4723 2.38086 18.022 2.60648 18.4311 3.01586C18.8401 3.42492 19.0655 3.97398 19.0655 4.56242C19.0655 5.15086 18.8401 5.70023 18.4308 6.1093C18.3095 6.23117 18.1495 6.29211 17.9895 6.29211Z" fill="#F2613C"/>
                                                </svg>
                                                <span class="ml-2 fz-18 fw-500">View Proposals</span>
                                            </a>
                                        </li>
                                        <li class="mb-3">
                                        <a href="javascript:void(0);" class="text-theme d-flex align-items-center" @click="$router.push({name: 'index',path:'/client/jobpostreview/',params: {pid: jobDetails.uniq_id},query:{current:3}}).href">
                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1073_14957)">
                                            <path d="M29.5745 25.422C29.192 25.6179 28.7212 25.4681 28.5237 25.0836H28.5237C27.3258 22.7492 24.1453 19.4025 20 19.4025C16.2823 19.4025 12.9785 22.1561 11.4763 25.0836C11.2786 25.4667 10.808 25.6179 10.4246 25.421C10.0413 25.224 9.88953 24.7543 10.0859 24.3707C11.8119 21.0003 15.6076 17.84 20 17.84C25.0093 17.84 28.5971 21.7991 29.914 24.3707C30.1106 24.7547 29.9586 25.2255 29.5745 25.422ZM10.3036 17.0314L12.0436 18.6011C12.3658 18.8918 12.8597 18.8627 13.147 18.5443C13.4359 18.2239 13.4105 17.7299 13.0902 17.4409L11.3502 15.8712C11.0299 15.5823 10.5359 15.6076 10.2468 15.928C9.95778 16.2484 9.98317 16.7424 10.3036 17.0314ZM27.9563 18.6011L29.6963 17.0314C30.0167 16.7424 30.0421 16.2484 29.7531 15.928C29.4641 15.6077 28.9701 15.5822 28.6497 15.8712L26.9097 17.4409C26.5893 17.7299 26.5639 18.2239 26.8529 18.5443C27.1405 18.8631 27.6345 18.8915 27.9563 18.6011ZM19.9999 15.4865C20.4314 15.4865 20.7812 15.1367 20.7812 14.7052V12.3594C20.7812 11.9279 20.4314 11.5781 19.9999 11.5781C19.5684 11.5781 19.2187 11.9279 19.2187 12.3594V14.7052C19.2187 15.1367 19.5685 15.4865 19.9999 15.4865ZM23.8378 24.7266C23.8378 26.846 22.1161 28.5703 20 28.5703C17.8838 28.5703 16.1621 26.846 16.1621 24.7266C16.1621 22.6072 17.8838 20.8829 20 20.8829C22.1161 20.8829 23.8378 22.6072 23.8378 24.7266ZM22.2754 24.7266C22.2754 23.4688 21.2546 22.4454 20 22.4454C18.7454 22.4454 17.7246 23.4688 17.7246 24.7266C17.7246 25.9845 18.7453 27.0078 20 27.0078C21.2546 27.0078 22.2754 25.9845 22.2754 24.7266Z" fill="#F2613C"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_1073_14957">
                                            <rect width="20" height="20" fill="white" transform="translate(10 10.0742)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                            <span class="ml-2 fz-18 fw-500">View Hires</span>
                                        </a>
                                        </li>
                                        
                                        
                                        
                                    </ul>
                                    </div>
                                    <b-modal id="modal-postdelete" title="Delete Post" centered hide-footer size="md" no-close-on-backdrop> 
                                    <template>
                                        <div class="p-5 text-center m-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#c10000" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                        <h5 class="mt-4">Are you sure, want to delete this draft?</h5>
                                        </div>
                                        <hr>
                                        <div>
                                            <div class="text-right">
                                            <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-postdelete')">Cancel</a>
                                            <b-button type="button" class="btn btn-theme" @click="ConfirmDelete()">Confirm</b-button>
                                            </div>
                                        </div>
                                    </template>
                                    </b-modal>
                                    <div class="summary px-4 py-4">
                                    <div class="summary-inner mb-4">
                                        <h4 class="fz-18 fw-600">About the client</h4>
                                        <div class="star-rating mb-3">
                                        <label for="5-stars" class="star" :class="(ratingsData >= 1)?'active':''"><i class="fa fa-star"></i></label>
                                        <label for="4-stars" class="star" :class="(ratingsData >= 2)?'active':''"><i class="fa fa-star"></i></label>
                                        <label for="3-stars" class="star" :class="(ratingsData >= 3)?'active':''"><i class="fa fa-star"></i></label>
                                        <label for="2-stars" class="star" :class="(ratingsData >= 4)?'active':''"><i class="fa fa-star"></i></label>
                                        <label for="1-star" class="star" :class="(ratingsData == 5)?'active':''"><i class="fa fa-star"></i></label>
                                        </div>
                                    </div>
                                    <div class="summary-inner mb-4">
                                        <h4 class="fz-16 fw-600">{{userDetails.country_name}}</h4>
                                        <!-- <p class="fz-16 fw-500">Suzhou 2:47 am</p> -->
                                    </div>
                                    <div class="summary-inner mb-4">
                                        <h4 class="fz-16 fw-600">{{userDetails.postedJob}}  Jobs Posted</h4>
                                        <p class="fz-16 fw-500">{{userDetails.hireRate}}% Hire Rate, {{userDetails.openJob}} Open Jobs</p>
                                    </div>
                                    <div class="summary-inner mb-4">
                                        <h4 class="fz-16 fw-600">${{changeAmountvalue(userDetails.totalSpent)}} Total Spent</h4>
                                        <p class="fz-16 fw-500">{{userDetails.hired}} {{(userDetails.hired > 0)?"Hire's":'Hire'}}</p>
                                    </div>
                                    <div class="summary-inner">
                                        <p class="mb-0 fz-16 fw-600">Member Since {{userDetails.member_since}} </p>
                                    </div>
                                    </div>
                                    <div class="about-job px-4 py-4">
                                    <div class="job-inner mb-5">
                                        <h4 class="fz-18 fw-600 mb-3">Job Link</h4>
                                        <input type="text" class="form-control" v-on:focus="$event.target.select()" 
                                        ref="clone" 
                                        readonly 
                                        :value="jobLink"
                                        />
                                        <a href="javascript:void(0);" @click="copyClipboad" class="text-theme mb-4 d-block"><small>Copy link</small></a>
                                    </div>
                                    
                                    <div class="job-inner">
                                        <h4 class="fz-18 fw-600 mb-3">Project Schedule</h4>
                                        <p class="mb-0 fz-16 fw-500">{{jobDetails.from_date_full}}  -  {{jobDetails.to_date_full}}</p>
                                    </div>
                                    </div>
                                </b-col>
                                </b-row>
                            </div>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
                <b-card-group deck class="mt-3" v-if="clientRecentHistory.length > 0">
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                    <template  #header>
                        <h4 class="mb-0 fz-24 fw-500 text-black"><b>Client's recent history ({{clientRecentHistory.slice(0,3).length}})</b></h4>
                        <b-row class="px-3 py-2" v-for="(clientJobshistory,ids) in clientRecentHistory.slice(0,3)" :key="ids">
                        <b-col xl="9" lg="9" sm="12">
                        <h4 class="mb-0">
                            <span>
                            <a :href="$router.resolve({name: 'index',path:'/client/jobpostreview/',params: {pid: clientJobshistory.uniq_id}}).href" target="_blank" class="mb-0 fz-18 fw-500 text-theme"><b>{{clientJobshistory.job_title}}.</b></a><span>{{clientJobshistory.employment_Name}} | {{clientJobshistory.country_name+', '+clientJobshistory.state_name+', '+clientJobshistory.city_name}}</span>
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
                    </template>
                    
                    </b-card>
                </b-card-group>

                <b-card-group deck class="mt-3" v-if="otheropenJobs.length > 0">
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                        <template  #header>
                            <h4 class="mb-0 fz-24 fw-500 text-black"><b>Other open jobs by this Client ({{otheropenJobs.slice(0,5).length}})</b></h4>
                            <b-row class="px-3 py-2">
                            <b-col xl="12" lg="12" sm="12">
                            <ul class="list-unstyled mb-0 ml-custom custom-margin">
                                <li v-for="(clientJobs,ids) in otheropenJobs.slice(0,5)" :key="ids">
                                <strong>
                                    <a :href="$router.resolve({name: 'index',path:'/client/jobpostreview/',params: {pid: clientJobs.uniq_id}}).href" target="_blank" class="text-theme">{{clientJobs.job_title}} | </a><span>{{clientJobs.employment_Name}} | {{clientJobs.country_name+', '+clientJobs.state_name+', '+clientJobs.city_name}}.</span>
                                </strong> 
                                <span class="type text-muted d-block d-md-inline">
                                    <!-- Hourly -->
                                </span>
                                </li>
                                
                            </ul>
                            </b-col>
                        </b-row>
                        </template>
                        
                    </b-card>
                </b-card-group> 
            </b-col>
        </b-row>
    </b-container>
  </template>
  <script>
    import { mapActions } from "vuex";
    export default {
      props:[],
      data() {
        return {
            jobDetails:[],
            ratingsData: 0,
            userDetails:'',
            jobApplicationStatus:'',
            clientRecentHistory:'',
            otheropenJobs:'',
            jobLink:'',
            selected: null,
            transaction: [
                { value: null, text: 'All Transaction' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ]
        } 
      },
      methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for copy url
        copyClipboad(){
          this.$refs.clone.focus();
          document.execCommand('copy');
        },
        //this fun for delete posts
        async ConfirmDelete(){
            await this.genericAPIPOSTRequest({
              requestUrl: "deletePostJob",
              params: {
                "jobData":{"jobs_id":this.jobDetails.jobs_id}
              },
            });  
            this.$router.push({ name: 'clientDashboard', path:'/client/dashboard'});
        },
         // this fun is for make job public private
        async makePrivatepublic(_v,job_id){
          var updateValue;
          if (_v=='Private') {
            updateValue='Public';
            this.jobDetails.preferences_job_type = updateValue;
          }else{
            updateValue='Private';
            this.jobDetails.preferences_job_type = updateValue;
          }
          await this.genericAPIPOSTRequest({
            requestUrl: "updateJob",
            params: {
              "jobs_id":job_id,
              "preferences_job_type":updateValue
            },
          });
        },
        // this fun is for to get job details
        async getPostdetails(_i){
            var getPostedData = await this.genericAPIPOSTRequest({
                requestUrl: "getJobDetails_new",
                params: {'poid':_i},
            });
            if (getPostedData.length > 0 ) {
                this.jobDetails = getPostedData[0];
                this.jobId = this.jobDetails.jobs_id
                //this fun is for get job application
                var jobApplicationStatus = await this.genericAPIPOSTRequest({
                    requestUrl: "getJobApplicantStatus",
                    params: {
                        "jobsid": this.jobDetails.jobs_id,
                        "user_id":this.jobDetails.user_id
                    },
                });
                if(jobApplicationStatus){
                    this.jobApplicationStatus =  jobApplicationStatus;
                }
                //this fun is for get user details
                var clientDetailsapi = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserDetails",
                    params: {},
                }); 
                if(clientDetailsapi){
                    this.userDetails =  clientDetailsapi;
                }      
                //this fun is for to get userreview calculation
                var clientRatingsapi = await this.genericAPIPOSTRequest({
                    requestUrl: "getUserReviewCal",
                    params: {},
                });

                if(clientRatingsapi){ 
                    this.ratingsData =  clientRatingsapi.rating;
                }
                //this fun is for to get client job history
                var clientjobhistory = await this.genericAPIPOSTRequest({
                    requestUrl: "getUserPostedJob",
                    params: {"filter":4},
                });
                if(clientjobhistory){
                    this.clientRecentHistory = clientjobhistory;
                }
                
                //this fun is for to get other open job by client
                var otheropenJobs = await this.genericAPIPOSTRequest({
                    requestUrl: "getUserPostedJob",
                    params: {'filter':1},
                });
                
                if(otheropenJobs){
                    this.otheropenJobs = otheropenJobs;
                    this.otheropenJobs.filter((jobdaata,id)=>{
                        if(jobdaata.uniq_id == _i){
                            this.otheropenJobs.splice(id,1);
                        }
                    })
                }
            }else{
                this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
            }
        },
      },
      mounted() {
        if(this.$route.params.pid != undefined){
        //   this.uniqe_id = this.$route.params.pid;
          this.getPostdetails(this.$route.params.pid)
          this.jobLink = window.location.origin+'/client/jobpostreview/'+this.$route.params.pid;
        }else{
          this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
        }
      }
    }
  </script>
  
  