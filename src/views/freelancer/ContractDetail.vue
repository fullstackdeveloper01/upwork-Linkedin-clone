<template>
    <b-container>
        <b-card-text>
            <b-row class="milestone-timeline-wrap mt-100 contract-details">
                <b-col lg="12" xl="12" sm="12">
                    <b-card-group deck>
                    <b-card class="py-4 px-4 bg-white br-20">
                        <div class="d-md-flex align-items-center text-left mb-4">
                        <div class="img-wrapper mr-3 pos-rel">
                            <img :src="contractDetails.userDetails.profile_picture_path_url" class="img-fluid">
                            <span class="online"></span>
                        </div>
                        <div class="content ml-2">
                            <h4 class="fz-22 fw-600 text-black mr-2 mb-0">{{shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}}</h4>
                            <p class="fz-16 fw-500 text-muted mb-0">{{contractDetails.userDetails.country_name+', '+contractDetails.userDetails.state_name+', '+contractDetails.userDetails.city_name}}</p>
                        </div>
                        <div class="ml-auto d-flex align-items-center">
                            <b-dropdown size="md" right class="mr-2 mt-0 t-0"
                            variant="outline-secondary" toggle-class="text-decoration-none"
                            no-caret>
                                <template #button-content>
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </template>
                                <b-dropdown-item href="javascript:void(0);" @click="requestForfeedback" v-if="contractDetails.proposalDetails.application_status == 6 &&  contractDetails.proposalDetails.contract_ended_by == contractDetails.proposalDetails.current_user_id && feedbackRequest =='' && contractDetails.checkfeedbackgiven ==''">
                                    <div class="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-journals mr-2"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                        <path
                                            d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                    </svg>
                                    Request For Feedback
                                    </div>
                                </b-dropdown-item>
                                <b-dropdown-item href="javascript:void(0);" @click="$router.push({name:'endContractFeelancer',path:'/freelancer/end-contract',params:{pid:job_id}})" v-if="contractDetails.proposalDetails.application_status == 6 && contractDetails.proposalDetails.contract_ended_by != contractDetails.proposalDetails.current_user_id && contractDetails.checkfeedbackgiven ==''">
                                <!-- <b-dropdown-item href="javascript:void(0);" @click="requestForfeedback" v-if="contractDetails.proposalDetails.application_status == 6 && feedbackRequest == ''"> -->
                                    <div class="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-journals mr-2"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                        <path
                                            d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                    </svg>
                                    Send Feedback
                                    </div>
                                </b-dropdown-item>
                                <b-dropdown-item href="javascript:void(0);" v-b-modal.end-contract v-if="contractDetails.proposalDetails.application_status == 2">
                                    <div class="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-journals mr-2"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                        <path
                                            d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                    </svg>
                                    End Contract
                                    </div>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                        </div>
                        

                        <h4 class="fz-22 fw-600 text-black mr-2 mb-0">{{contractDetails.jobDetails.job_title}}</h4>
                        <div class="d-flex align-items-center text-left">
                        <p class="fz-16 fw-500 text-muted mb-0" v-if="contractDetails.proposalDetails.application_status == 6">Completed on {{contractDetails.proposalDetails.ended_date}}</p><br>
                        <div class="star-rating mb-0 ml-2 text-theme" v-if="contractDetails.proposalDetails.application_status == 6  && review.clientfeedBack !='' && review.freelancerfeedBack !=''">
                            <label for="5-stars" class="star " :class="(review.clientfeedBack.rating >= 1)?'text-theme':''">
                            <i class="fa fa-star"></i>
                            </label>
                            <label for="4-stars" class="star " :class="(review.clientfeedBack.rating >= 2)?'text-theme':''">
                            <i class="fa fa-star"></i>
                            </label>
                            <label for="3-stars" class="star" :class="(review.clientfeedBack.rating >= 3)?'text-theme':''">
                            <i class="fa fa-star"></i>
                            </label>
                            <label for="2-stars" class="star" :class="(review.clientfeedBack.rating >= 4)?'text-theme':''">
                            <i class="fa fa-star"></i>
                            </label>
                            <label for="1-star" class="star" :class="(review.clientfeedBack.rating == 5)?'text-theme':''">
                            <i class="fa fa-star"></i>
                            </label>
                        </div>
                        </div>
                    </b-card>
                    </b-card-group>
                </b-col>
                <b-col lg="12" xl="12" sm="12">
                    <b-tabs v-model="currentPage" content-class="mt-4">
                        <b-tab title="Overview" active>
                            <b-row v-if="feedbackRequest!='' && contractDetails.checkfeedbackgiven ==''">
                                <b-col lg="12" xl="12" sm="12">
                                    <div class="feedback-comment-wrapper border shadow bg-white p-2">
                                        <p class="mb-0 fz-16 d-flex align-items-center fw-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2613d" class="bi bi-star-fill mr-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            {{shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} has requested feedback on this contract. <a href="javascript:void(0);" @click="$router.push({name:'endContractFeelancer',path:'/freelancer/end-contract',params:{pid:job_id}})" class="text-theme ml-2">Give feedback</a>
                                        </p>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="9" xl="9" sm="12">
                                    <b-card-group deck>
                                    <b-card class="py-4 px-4 bg-white br-20 mt-2">
                                        <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Milestone Timeline</h4>
                                        <div class="alert-wrapper p-3 br-10 bg-grey mb-4" v-if="checkMilestoneIspending()">
                                                <h6 class="mb-0" >
                                                    <i class="fa fa-exclamation-circle text-warning" aria-hidden="true"></i>
                                                     You requested milestone changes 
                                                     <a href="javascript:void(0);" @click="manageMilestoneData();" v-b-toggle.sidebar-backdrop class="text-theme">View Changes</a>
                                                </h6>
                                            </div>
                                        <div class="timeline-container">
                                            <span v-for="(milestone,index) in contractDetails.MilestoneDetails" :key="index">
                                                <div class="timeline-block timeline-block-right"  v-if="milestone.status!=0 && milestone.active == 1">
                                                    <div class="marker" v-if="milestone.milestone_status == 0">{{index+1}}</div>

                                                    <div class="marker active" v-else><i class="fa fa-check active" aria-hidden="true"></i></div>

                                                    <div class="timeline-content">
                                                    <!-- <h3 class="mb-2 fz-18 text-black">First 15 days</h3> -->
                                                    <p class="mb-3 fz-16 text-black">{{milestone.description}}</p>
                                                    <h3 class="fw-600 fz-20 text-black mb-3">$ {{ (milestone.release_amount == 0)?milestone.amount:milestone.release_amount }}
                                                        <span class="badge badge-theme fz-14 fw-600 br-20" >{{ StatusLabel(milestone)}}</span>
                                                    </h3>
                                                    <p class="fz-16 text-muted fw-600 d-flex align-items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 mr-2" viewBox="0 0 16 16">
                                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                        </svg>
                                                        {{milestone.dueDates}}
                                                    </p>
                                                    <template v-if="milestone.milestone_status == 0">
                                                        <div class="submission-qa mb-4" v-for="(subWork,index) in milestone.submittedWork" :key="index">
                                                            <div class="d-flex align-items-normal mb-3" v-b-toggle.review-sidebar-modal v-on:click="reviewWork = milestone">
                                                                <div class="text-muted mt-2 ml-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                                                    </svg>
                                                                </div>
                                                                <span class="flex-1 ml-2">
                                                                    <button class="d-block mb-0 text-left text-black fw-600"> Work submitted for review </button>
                                                                    <small>
                                                                        <span class="text-muted date-created">{{subWork.createdDate}}</span>
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div class="d-flex align-items-normal mb-3" v-b-toggle.review-sidebar-modal v-if="subWork.status == 3" v-on:click="reviewWork = milestone">
                                                                <div class="text-muted mt-2 ml-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path>
                                                                    </svg>
                                                                </div>
                                                                <span class="flex-1 ml-2">
                                                                    <button class="d-block mb-0 text-left text-black fw-600"> Revision requested </button>
                                                                    <small>
                                                                        <span class="text-muted date-created">{{subWork.updatedDate}}</span>
                                                                    </small>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    <button class="btn btn-theme" v-b-modal.submitWork-modal @click="submitWorkmodal(milestone)" v-if="milestone.paymentStatus == 1 && milestone.milestone_status == 0">Submit {{(milestone.submittedWork.length > 0)? 'Revision':'Work'}}</button>
                                                    <!-- <button class="btn btn-theme" v-b-modal.submitWork-modal @click="submitWorkmodal(milestone)" v-if="(milestone.status == null || milestone.status == 3) && milestone.submitworkBtn == 1">Submit {{(milestone.submittedWork.length > 0)? 'Revision':'Work'}}</button> -->

                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                        <div class="timeline-block timeline-block-left" v-if="contractDetails.proposalDetails.application_status != 6 && !ContractEnded">
                                            <div class="marker activated disabled text-white" >
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                            </div>
                                            <div class="timeline-content">
                                                <a class="text-theme" href="javascript:void(0)" v-b-toggle.sidebar-backdrop v-b-Modal.add-milestone-modal v-if="!checkMilestoneIspending()" @click="manageMilestoneData()"><h3 class="mb-2 fz-18 text-black">Add new milestone</h3></a>
                                                <a class="text-theme disabled" href="javascript:void(0)" v-else><h3 class="mb-2 fz-18 text-black">Add new milestone</h3></a>
                                            </div>
                                        </div>
                                        <button v-b-toggle.sidebar-backdrop class="btn-theme mt-4" v-if="!checkMilestoneIspending() && contractDetails.proposalDetails.application_status != 6 && !ContractEnded" @click="manageMilestoneData()" >Manage Milestones</button>
                                        <button class="btn-theme mt-4 disabled" v-else >Manage Milestones</button>
                                    </b-card>
                                    </b-card-group>
                                </b-col>
                            </b-row>
                            <Recentfiles :contractDetails="contractDetails" @refreshRecentFiles="getRecentfileData" />
                            <!-- // this is submit work model -->
                            <SubmitWork :submitWorkPayment="submitWorkPayment" :contractDetails="contractDetails" :chatroomdata="chatroomdata" @refreshSubmittedwork="updatedMilestone" />
                            <!-- this is for to review work -->
                            <ReviewWorkVue :contractDetails="contractDetails" :reviewWork="reviewWork"/>
                            <!-- add-milestone-sidebar -->
                            <ManageMilestone ref="manageMilestoneFun" :sidebarMilestoneData.sync="sidebarDetails" :contractDetails="contractDetails" @manageParentController="updatedMilestone"/>
                            
                            <b-modal id="end-contract" size="lg" title="End Contract">
                                <div class="text-center">
                                    <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2">
                                    <path d="M66.3199 8.25326C71.4652 4.68501 78.2848 4.68501 83.4301 8.25326C86.7378 10.5472 90.8282 11.4166 94.7831 10.6664C100.935 9.49942 107.165 12.2732 110.414 17.6257C112.503 21.0667 115.886 23.5247 119.804 24.4479C125.898 25.884 130.462 30.9519 131.253 37.1632C131.761 41.1563 133.852 44.7779 137.056 47.2149C142.04 51.0057 144.147 57.4915 142.343 63.4876C141.184 67.3423 141.621 71.5012 143.557 75.0306C146.568 80.5207 145.855 87.3029 141.768 92.047C139.141 95.0969 137.849 99.074 138.182 103.086C138.699 109.326 135.289 115.232 129.626 117.903C125.986 119.621 123.188 122.729 121.86 126.529C119.795 132.44 114.278 136.448 108.018 136.586C103.993 136.674 100.173 138.375 97.4145 141.307C93.1236 145.867 86.453 147.285 80.6783 144.864C76.9659 143.308 72.7841 143.308 69.0717 144.864C63.297 147.285 56.6264 145.867 52.3355 141.307C49.5769 138.375 45.7566 136.674 41.7323 136.586C35.4723 136.448 29.9551 132.44 27.8899 126.529C26.5622 122.729 23.764 119.621 20.1235 117.903C14.4607 115.232 11.0509 109.326 11.5685 103.086C11.9012 99.074 10.609 95.0969 7.98184 92.047C3.89531 87.3029 3.18246 80.5207 6.19334 75.0306C8.12895 71.5012 8.56607 67.3423 7.40656 63.4876C5.60293 57.4915 7.7103 51.0057 12.6939 47.2149C15.8977 44.7779 17.9886 41.1563 18.4972 37.1632C19.2883 30.9519 23.8515 25.884 29.9461 24.4479C33.8642 23.5247 37.2473 21.0667 39.3361 17.6257C42.5852 12.2732 48.8152 9.49942 54.9669 10.6664C58.9218 11.4166 63.0122 10.5472 66.3199 8.25326Z" fill="#F2613C"/>
                                    <path d="M68.9854 85.612H77.0223L84.4342 57.2147L87.0239 45.9629H74.7899L73.0932 57.2147L68.9854 85.612ZM69.0747 106.865C74.2541 106.865 77.826 102.4 77.826 97.9354C77.826 94.0955 75.3257 91.2379 71.4858 91.2379C66.3064 91.2379 62.7344 95.8815 62.7344 100.257C62.7344 104.186 65.2348 106.865 69.0747 106.865Z" fill="white"/>
                                    <path d="M133.023 19.7399C133.472 19.7615 133.931 19.6116 134.29 19.2849L149.692 5.29456C150.411 4.64135 150.465 3.5288 149.811 2.8099C149.158 2.09076 148.046 2.03733 147.327 2.69055L131.925 16.6809C131.206 17.3341 131.152 18.4466 131.805 19.1655C132.132 19.525 132.573 19.7183 133.023 19.7399Z" fill="#F2613C"/>
                                    <path d="M149.113 26.9153C148.903 25.9669 147.964 25.3686 147.015 25.5792L139.571 27.2309C138.622 27.4413 138.024 28.3806 138.235 29.3291C138.41 30.1206 139.094 30.6684 139.866 30.7055C140.019 30.7128 140.176 30.7002 140.333 30.6652L147.777 29.0135C148.726 28.8033 149.324 27.8637 149.113 26.9153Z" fill="#F2613C"/>
                                    <path d="M122.151 11.7905C122.304 11.8404 122.458 11.868 122.612 11.8754C123.384 11.9125 124.117 11.4327 124.368 10.6617L126.725 3.40987C127.026 2.48599 126.52 1.49336 125.597 1.19328C124.673 0.892255 123.68 1.39827 123.38 2.32215L121.022 9.57397C120.722 10.4978 121.227 11.4902 122.151 11.7905Z" fill="#F2613C"/>
                                    </svg>
                                    <h4>Are you sure you want to end this contract?</h4>
                                    <p>You'll be promoted to provide feedback and make any final payment in the following steps.</p>
                                </div>
                                <template #modal-footer>
                                    <div class="w-100 text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('end-contract')">Cancel</a>
                                    <b-button
                                        size="lg"
                                        class="btn btn-theme"
                                        @click="$router.push({name:'endContractFeelancer',path:'/freelancer/end-contract',params:{pid:job_id}})"
                                    >
                                        End Contract
                                    </b-button>
                                    </div>
                                </template>
                            </b-modal>
                            <b-modal id="modal-draftdelete" title="End Contract" centered hide-footer size="md" no-close-on-backdrop> 
                                <template>
                                <div class="p-5 text-center m-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#c10000" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                    <h5 class="mt-4">Are you sure, want to end this Contract?</h5>
                                    <p>You'll be promoted to provide feedback and make any final payment in the following steps.</p>
                                </div>
                                <hr>
                                <div>
                                    <div class="text-right">
                                        <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-draftdelete')">Cancel</a>
                                        <b-button type="button" class="btn btn-theme" @click="$router.push({name:'endContractFeelancer',path:'/client/end-contract',params:{pid:job_id}})">End Contract</b-button>
                                    </div>
                                </div>
                                </template>
                            </b-modal>
                        </b-tab>
                        <b-tab title="Messages">
                            <b-row v-if="feedbackRequest!='' && contractDetails.checkfeedbackgiven ==''">
                                <b-col lg="12" xl="12" sm="12">
                                    <div class="feedback-comment-wrapper border shadow bg-white p-2">
                                        <p class="mb-0 fz-16 d-flex align-items-center fw-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2613d" class="bi bi-star-fill mr-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            {{shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} has requested feedback on this contract. <a href="javascript:void(0);" @click="$router.push({name:'endContractFeelancer',path:'/freelancer/end-contract',params:{pid:job_id}})" class="text-theme ml-2">Give feedback</a>
                                        </p>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                            <b-col lg="12" xl="12" sm="12">
                                <b-card-group deck>
                                    <b-card class="py-4 px-4 bg-white br-20 mt-2">
                                        <b-col xl="12" lg="12" sm="12" class="conversation">
                                            <b-row class="heading" v-if="$store.state.accountType=='client' && chatroomdata!=''">
                                                <b-col xl="12" lg="12" sm="12" class="py-1">
                                                    <div class="heading-avatar d-flex align-items-center">
                                                        <div class="width-98 d-flex align-items-center">
                                                            <div class="heading-name">
                                                                <a class="heading-name-meta mb-0 pt-0 fz-18 fw-600">{{ shortName(chatroomdata.user_first_name,chatroomdata.user_last_name) }}</a>
                                                                <p class="ml-1 mb-0 fz-14 text-black">12:09 AM EST <span class="heading-online text-muted mt-0 fz-14" @click="$router.push({'path':'client/jobpostreview','name':'index',params:{'pid':chatroomdata.uniq_id}})">{{ chatroomdata.job_title }}</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                            <chatBoxData ref="oprateChatbox" :chatroomdata="chatroomdata" :pageType="'contractpage'"  />
                                        </b-col>
                                    </b-card>
                                </b-card-group>
                            </b-col>
                            </b-row>
                        </b-tab>
                        <b-tab title="Details">
                            <b-row v-if="feedbackRequest!='' && contractDetails.checkfeedbackgiven ==''">
                                <b-col lg="12" xl="12" sm="12">
                                    <div class="feedback-comment-wrapper border shadow bg-white p-2">
                                        <p class="mb-0 fz-16 d-flex align-items-center fw-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2613d" class="bi bi-star-fill mr-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            {{shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} has requested feedback on this contract. <a href="javascript:void(0);" @click="$router.push({name:'endContractFeelancer',path:'/freelancer/end-contract',params:{pid:job_id}})" class="text-theme ml-2">Give feedback</a>
                                        </p>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                            <b-col lg="9" xl="9" sm="12">
                                <b-card-group deck>
                                <b-card class="py-4 px-4 bg-white br-20 mt-2">
                                    <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Summary</h4>
                                    <div class="payout-wrap">
                                        <div class="d-flex align-items-center mb-2">
                                            <span class="fz-16 fw-600 text-black mr-5 w-15">Contact type</span>
                                            <span class="fz-16 fw-500 text-muted">{{(contractDetails.jobDetails.budget_type =='A')? 'Day Wise':'Month Wise'}}</span>
                                        </div>
                                        <div class="d-flex align-items-center mb-2">
                                            <span class="fz-16 fw-600 text-black mr-5 w-15">Total spent</span>
                                            <span class="fz-16 fw-500 text-muted">{{totalamount}}</span>
                                        </div>
                                        <div class="d-flex align-items-center mb-2">
                                            <span class="fz-16 fw-600 text-black mr-5 w-15">Start date</span>
                                            <span class="fz-16 fw-500 text-muted">{{contractDetails.jobDetails.start_date}}</span>
                                        </div>
                                        <div class="d-flex align-items-center mb-2">
                                            <span class="fz-16 fw-600 text-black mr-5 w-15">Contact person</span>
                                            <span class="fz-16 fw-500 text-muted">{{shortName(contractDetails.jobDetails.first_name,contractDetails.jobDetails.last_name)}}</span>
                                        </div>
                                        <b-button class="btn btn-outline-theme mt-4" @click="summeryDetails = true" v-if="!summeryDetails">Show Details</b-button>
                                    </div>
                                    <span   v-if="summeryDetails">
                                        <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Details</h4>
                                        <div class="payout-wrap">
                                            <div class="d-flex align-items-center mb-2">
                                                <span class="fz-16 fw-600 text-black mr-5 w-15">Verified Name</span>
                                                <span class="fz-16 fw-500 text-muted">{{shortName(contractDetails.jobDetails.first_name,contractDetails.jobDetails.last_name)}}</span>
                                            </div>
                                            <div class="d-flex align-items-center mb-2">
                                                <span class="fz-16 fw-600 text-black mr-5 w-15">Hired By</span>
                                                <span class="fz-16 fw-500 text-muted">{{shortName(contractDetails.jobDetails.first_name,contractDetails.jobDetails.last_name)}}</span>
                                            </div>
                                            <div class="d-flex align-items-center mb-2">
                                                <span class="fz-16 fw-600 text-black mr-5 w-15">Contract Id</span>
                                                <span class="fz-16 fw-500 text-muted">{{contractDetails.proposalDetails.job_application_id}}</span>
                                            </div>
                                            <b-button class="btn btn-outline-theme mt-4" @click="summeryDetails = false" >Show Less</b-button>
                                        </div>
                                    </span>
                                </b-card>
                                </b-card-group>

                                <b-card-group deck>
                                <b-card class="py-4 px-4 bg-white br-20 mt-2">
                                    <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Description</h4>
                                    <p>{{contractDetails.jobDetails.scope_of_work}}</p>
                                    <!-- <a href="javascript:void(0);" class="text-theme d-block mb-0 cursor-pointer">View original job posting</a>
                                    <a href="javascript:void(0);" class="text-theme d-block mb-0 cursor-pointer">View original proposals</a> -->
                                </b-card>
                                </b-card-group>

                                <b-card-group deck>
                                    <b-card class="py-4 px-4 bg-white br-20 mt-2">
                                        <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Recent Activity</h4>
                                        <b-row>
                                            <b-col xl="3" lg="3" sm="3">
                                                <strong>Date</strong>
                                            </b-col>
                                            <b-col xl="9" lg="9" sm="9">
                                                <strong>Description</strong>
                                            </b-col>
                                        </b-row>
                                        <span v-for="(activities,index) in contractDetails.recentActivties" :key="index">
                                            <b-row v-if="index <= 3 && !showHideRecentActivity">
                                                <b-col xl="3" lg="3" sm="3">
                                                    {{activities.date}}
                                                </b-col>
                                                <b-col xl="9" lg="9" sm="9">
                                                    <p class="mb-0" v-if="activities.type=='SENDOFFER'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='FUNDFIRSTMILESTONE'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='ACCEPTOFFER'">{{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='SUBMITWORK'">{{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='FUNDEDMILESTONE'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='REJECTEDWORK'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='ACCEPTWORK'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='RELEASEFUND'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='CONTRACTENDEDBYFREELANCER'">
                                                        {{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} gave {{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} feedback.
                                                    </p>
                                                    <p class="mb-0" v-if="activities.type=='CONTRACTENDEDBYCLIENT'">
                                                        {{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} gave {{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} feedback.
                                                    </p>
                                                    <div class="star-rating mt-2 mb-2" v-if="activities.type=='CONTRACTENDEDBYFREELANCER' || activities.type=='CONTRACTENDEDBYCLIENT'">
                                                        <label :class="(activities.rating >= 1)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating >= 2)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating >= 3)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating >= 4)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating == 5)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                    </div>
                                                    <p class="mb-0" v-if="activities.type=='CONTRACTENDEDBYFREELANCER' || activities.type=='CONTRACTENDEDBYCLIENT'">{{activities.description}}</p>
                                                </b-col>
                                                <hr>
                                            </b-row>
                                            <b-row v-if="showHideRecentActivity">
                                                <b-col xl="3" lg="3" sm="3">
                                                    {{activities.date}}
                                                </b-col>
                                                <b-col xl="9" lg="9" sm="9">
                                                    <p class="mb-0" v-if="activities.type=='SENDOFFER'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='FUNDFIRSTMILESTONE'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='ACCEPTOFFER'">{{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='SUBMITWORK'">{{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='FUNDEDMILESTONE'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='REJECTEDWORK'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='ACCEPTWORK'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='RELEASEFUND'">{{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} {{activities.description}}</p>
                                                    <p class="mb-0" v-if="activities.type=='CONTRACTENDEDBYFREELANCER'">
                                                        {{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} gave {{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} feedback.
                                                    </p>
                                                    <p class="mb-0" v-if="activities.type=='CONTRACTENDEDBYCLIENT'">
                                                        {{(activities.freelancer_name!='')?activities.freelancer_name:''}} {{(activities.freelancer_lastname!='')?activities.freelancer_lastname:''}} gave {{(activities.client_name!='')?activities.client_name:''}} {{(activities.client_lastname!='')?activities.client_lastname:''}} feedback.
                                                    </p>
                                                    <div class="star-rating mt-2 mb-2" v-if="activities.type=='CONTRACTENDEDBYFREELANCER' || activities.type=='CONTRACTENDEDBYCLIENT'">
                                                        <label :class="(activities.rating >= 1)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating >= 2)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating >= 3)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating >= 4)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                        <label :class="(activities.rating == 5)?'active':''"><i class="fa fa-star" aria-hidden="true"></i></label>
                                                    </div>
                                                    <p class="mb-0" v-if="index > 3 && activities.type=='CONTRACTENDEDBYFREELANCER' || activities.type=='CONTRACTENDEDBYCLIENT'">{{activities.description}}</p>
                                                </b-col>
                                                <hr>
                                            </b-row>
                                        </span>
                                        
                                        <b-button class="btn btn-outline-theme mt-4" @click="showHideRecentActivity = !showHideRecentActivity">{{(!showHideRecentActivity)?'Show More Activity':'Show Less Activity'}}</b-button>
                                    </b-card>
                                </b-card-group>
                            </b-col>
                            <b-col lg="3" xl="3" sm="12">
                                <b-card-group deck v-if="contractDetails.proposalDetails.agencyData != '' && contractDetails.proposalDetails.agencyData != null && $store.state.accountType == 'freelancer'">
                                    <b-card class="py-4 px-3 bg-white br-20 mt-2 about-talent-wrapper">
                                        <h4 class="fz-20 fw-600 text-black mr-2 mb-3">Agency</h4>
                                        <div class="d-md-flex align-items-normal text-left mb-4">
                                            <div class="img-wrapper mr-3 w-70 h-70 br-10">
                                                <img :src="contractDetails.proposalDetails.agencyData.profile_picture_path"
                                                    class="img-fluid br-10">
                                            </div>
                                            <div class="ml-2">
                                                <h4 class="fz-18 fw-600 text-black mr-2 mb-0 cursor-pointer" @click="$router.push({name:'agencyPublicProfile',path:'agency-public-profile',params:{uid:encodedid(contractDetails.proposalDetails.agencyData.login_master_id)}}).href"> {{ shortName(contractDetails.proposalDetails.agencyData.first_name,contractDetails.proposalDetails.agencyData.last_name)}}</h4>
                                            </div>
                                        </div>
                                    </b-card>
                                </b-card-group>
                                <b-card-group deck v-if="$store.state.accountType == 'agency'">
                                    <b-card class="py-4 px-3 bg-white br-20 mt-2 about-talent-wrapper">
                                        <h4 class="fz-20 fw-600 text-black mr-2 mb-3">About the Talent</h4>
                                        <div class="d-md-flex align-items-normal text-left mb-4">
                                        <div class="img-wrapper mr-3 w-70 h-70">
                                            <img :src="contractDetails.proposalDetails.freelancerData.profile_picture_path"  class="img-fluid">
                                        </div>
                                        <div class="content ml-2" v-if="contractDetails.proposalDetails.freelancerData!=''">
                                            <h4 class="fz-18 fw-600 text-black mr-2 mb-0">{{shortName(contractDetails.proposalDetails.freelancerData.first_name,contractDetails.proposalDetails.freelancerData.last_name)}}</h4>
                                            <p class="fz-16 fw-500 text-muted mb-0 white-space-pre-line" v-if="contractDetails.proposalDetails.freelancerData.about_self_desc!=''">
                                                <read-more more-str="Read more" :text="contractDetails.proposalDetails.freelancerData.about_self_desc" link="#" less-str="Read less" :max-chars="150"></read-more>
                                            </p>
                                        </div>
                                        </div>
                                        <h5 class="fz-16 text-black fw-600">{{contractDetails.proposalDetails.freelancerData.country_name}}</h5>
                                        <h5 class="fz-16 text-muted fw-500">{{contractDetails.proposalDetails.freelancerData.city_name}}</h5>
                                        <h5 class="fz-16 text-black fw-600">{{contractDetails.jobHistory.length}} jobs</h5>
                                        <h5 class="fz-16 text-black fw-600">${{contractDetails.proposalDetails.freelancerData.totalEarn}} total earned</h5>
                                    </b-card>
                                </b-card-group>
                                <b-card-group deck>
                                <b-card class="py-4 px-3 bg-white br-20 mt-2">
                                    <h4 class="fz-20 fw-600 text-black mr-2 mb-3">Your Feedback to {{contractDetails.userDetails.first_name}}</h4>
                                    <span v-if="contractDetails.proposalDetails.application_status == 6 && review.clientfeedBack !='' && review.freelancerfeedBack !=''">
                                        <div class="star-rating mt-2 mb-2">
                                            <label for="5-stars" class="star " :class="(review.freelancerfeedBack.rating >= 1)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="4-stars" class="star " :class="(review.freelancerfeedBack.rating >= 2)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="3-stars" class="star" :class="(review.freelancerfeedBack.rating >= 3)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="2-stars" class="star" :class="(review.freelancerfeedBack.rating >= 4)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="1-star" class="star" :class="(review.freelancerfeedBack.rating == 5)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                        </div>
                                        <p class="fz-16 fw-500 text-black mb-0">{{review.freelancerfeedBack.review}}.</p>
                                    </span>
                                    <span v-else>
                                        <p class="fz-16 fw-500 text-black mb-0">No Feedback Found.</p>
                                    </span>
                                    <h4 class="fz-20 fw-600 text-black mr-2 mt-3 mb-3">{{contractDetails.userDetails.first_name}}'s Feedback to You</h4>

                                    <span v-if="contractDetails.proposalDetails.application_status == 6 && review.clientfeedBack !='' && review.freelancerfeedBack !=''">
                                        <div class="star-rating mt-2 mb-2">
                                            <label for="5-stars" class="star " :class="(review.clientfeedBack.rating >= 1)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="4-stars" class="star " :class="(review.clientfeedBack.rating >= 2)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="3-stars" class="star" :class="(review.clientfeedBack.rating >= 3)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="2-stars" class="star" :class="(review.clientfeedBack.rating >= 4)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                            <label for="1-star" class="star" :class="(review.clientfeedBack.rating == 5)?'text-theme':''">
                                            <i class="fa fa-star"></i>
                                            </label>
                                        </div>
                                        <p class="fz-16 fw-500 text-black mb-0">{{review.clientfeedBack.review}}.</p>
                                    </span>
                                    <span v-else>
                                        <p class="fz-16 fw-500 text-black mb-0">No Feedback Found.</p>
                                    </span>
                                </b-card>
                                </b-card-group>
                            </b-col>
                            </b-row>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>
        </b-card-text>
    </b-container>
</template>
<script>
import { mapActions }   from "vuex";
import Recentfiles      from "@/components/contract/Recentfiles.vue";
import chatBoxData      from '@/components/chat/chatBoxData.vue'
import SubmitWork       from '../../components/modal/SubmitWork.vue'
import ReviewWorkVue    from "../../components/modal/ReviewWork.vue";
import ManageMilestone  from "../../components/modal/ManageMilestone.vue";
export default {

 components: {
    Recentfiles,
    chatBoxData,
    SubmitWork,
    ReviewWorkVue,
    ManageMilestone
 },
 data(){
    return {
        job_id              : '',
        user_id             : '',
        contractDetails     : {
            userDetails         :'',
            jobDetails          :'',
            proposalDetails     : {
                agencyData      : '',
            },
            jobHistory          :[],
            MilestoneDetails    :[],
            checkfeedbackgiven  :'',
            recentActivties     :[],
            recentFiles         :[],
        },
        review              : {
            clientfeedBack      :'',
            freelancerfeedBack  :'',
        },
        summeryDetails      : false,
        feedbackRequest     : '',
        currentPage         : 0,
        UploadedFileName    : '',
        submitWorkPayment : {
            job_id          :'',
            milestone_id    :'',
            pay             :0,
            message         :'',
            attachment      :[],
            description     :'',
            dueDate         :'',
            amount          :'',
            other_amount    :0,
        },
        showHideRecentActivity : false,
        chatroomdata        :'',
        ContractEnded       : false,
        reviewWork : {
            submittedWork   : [],
        },
        sidebarData         : [],
        // sidebarData : {
        //     previous        : [],
        //     current         : [],
        // },
    }
 },
 computed:{
    sidebarDetails: {
        get() {
            return this.sidebarData;
        },
        set() {
            return this.sidebarData=[];
        },
    },
    // function to total burget amount
    totalEarning() {
        var amount = 0;
        if(this.contractDetails.jobHistory.length > 0){
            this.contractDetails.jobHistory.map(data => {
                amount += parseInt(data.cost);
            });
        }
        return amount;
    },
    totalamount() {
        var amount = 0;
        if(this.contractDetails.MilestoneDetails.length > 0){
            this.contractDetails.MilestoneDetails.map(data => {
                amount += parseInt(data.amount);
            });
        }
        return amount;
    },
 },
 mounted(){
    this.job_id     = this.$route.params.pid;
    var currentPage = this.$route.query.current;
    // this fun is for to get contractDetails
    this.getContractdetails();
    window.scrollTo(0,0);
    if(currentPage == 'message'){
        setTimeout(() => {
        this.currentPage = 1;
      }, 100);
    }
 },
 methods:{
    ...mapActions(['genericAPIPOSTRequest']),
    // this fun is for to check any new milestone request pending
    checkMilestoneIspending(){
        var status=false;
        this.contractDetails.MilestoneDetails.map((data)=>{
            if(data.active == 0){
                status = true;
            }
        })
        return status
    },
    // this fun is for to open manage milestone sidebar;
    manageMilestoneData(){
        this.sidebarData = this.contractDetails.MilestoneDetails;
        setTimeout(() => {
            this.$refs.manageMilestoneFun.assginSidebarData();    
        }, 1000);
    },
    // this fun id for to refresh milestone 
    async updatedMilestone(){
        this.getRecentfileData();
        var getMilestoneData = await this.genericAPIPOSTRequest({
            requestUrl  : "getCreatedMilestone",
            params      : {"user_id" : this.contractDetails.proposalDetails.user_id,"job_id" : this.contractDetails.jobDetails.jobs_id},
        });
        if (getMilestoneData.proposal.application_status == 6) {
            this.ContractEnded = true;
        } else {
            this.contractDetails.MilestoneDetails = getMilestoneData.milestone;
            this.contractDetails.proposalDetails  = getMilestoneData.proposal;
        }
    },
    //this fun is for to get status label 
    StatusLabel(_v){
        if(_v.milestone_status == 1){
            return 'Released';
        }else if(_v.active == 0){
            return 'Approve Pending';
        }else if(_v.paymentStatus == 0 && _v.active == 1){
            return 'Pending';
        }else if(_v.paymentStatus == 1 && _v.submittedWork.length == 0){
            return 'Funded';
        }else if(_v.submittedWork.length > 0){
            var index   = _v.submittedWork.length-1;
            var status  = _v.submittedWork[index].status;
            if(status == 1 || status == 3){
                return 'Active';
            }
        }
    },
    // this fun is for to check submitted work status
    checkWorkstatus(_v){
        if(_v.submittedWork.length > 0){
            var index = _v.submittedWork.length-1;
            return _v.submittedWork[index].status;
        }else{
            return null;
        }
    },
    // this fun is for to get chat user list
    async getChatlist(){
        this.chatroomdata   =[];
        var  param          ={};
        if(this.$store.state.accountType == 'freelancer'){
            param={'user_id':this.contractDetails.proposalDetails.user_id,'client_id':this.contractDetails.jobDetails.client_id, 'job_id': this.contractDetails.jobDetails.jobs_id,'userType': this.$store.state.accountType};
        }else{
            param={'user_id':this.contractDetails.proposalDetails.user_id,'agency_id':this.contractDetails.proposalDetails.agency_id,'client_id':this.contractDetails.jobDetails.client_id, 'job_id': this.contractDetails.jobDetails.jobs_id,'userType': this.$store.state.accountType};
        }
        var res = await this.genericAPIPOSTRequest({
            requestUrl:'getchatroom',
            params: param,
        });
        if (res.length > 0) {
            this.chatroomdata = res[0]; 
            // this.$refs.oprateChatbox.getselectedusermessage();
            setTimeout(() => {
                this.$refs.oprateChatbox.getselectedusermessage();
            }, 1000);
        }
    },
    // this fun is for to =remove attachment
    removeAttachment(_i){
        this.userJobApply.attachment.splice(_i,1);
    },
    // this fun is for to set the value in submit work model
    submitWorkmodal(_v){
        this.submitWorkPayment.job_id           = this.contractDetails.proposalDetails.jobs_id;
        this.submitWorkPayment.milestone_id     = _v.job_milestone_id;
        this.submitWorkPayment.pay              = _v.amount;
        this.submitWorkPayment.amount           = _v.amount;
        this.submitWorkPayment.description      = _v.description;
        this.submitWorkPayment.dueDate          = _v.dueDates;
    },
    //this fun is for to get feedback request
    async requestForfeedback(){
        var feedback = await this.genericAPIPOSTRequest({
            requestUrl  : "requestFeedback",
            params      : {'job_id' : this.contractDetails.jobDetails.jobs_id,'to_id' : this.contractDetails.jobDetails.client_id},
        });
        if(feedback){
            this.$toastr.s('Request submitted Successfull');
        }
    },
    // this fun is for to get contractDetails
    async getContractdetails(){
        
        var GetJobDetails = await this.genericAPIPOSTRequest({
            requestUrl  : "getJobDetails_new",
            params      : {'poid':this.job_id},
        });
        if(GetJobDetails){
            this.contractDetails.jobDetails = GetJobDetails[0];
        }

        var userDetails = await this.genericAPIPOSTRequest({
            requestUrl  : "user/getUserDetails",
            params      : {user_id:this.contractDetails.jobDetails.client_id},
        });
        if(userDetails){
          this.contractDetails.userDetails = userDetails;
        }
        var proposalDetails = await this.genericAPIPOSTRequest({
            requestUrl  : "getProposalDetail",
            params      : {"job_id":this.contractDetails.jobDetails.jobs_id,"type":this.$store.state.accountType},
        });
        if(proposalDetails){
          this.contractDetails.proposalDetails = proposalDetails;
          this.getRecentfileData();
        }

        var getMilestoneData = await this.genericAPIPOSTRequest({
            requestUrl  : "getCreatedMilestone",
            params      : {"user_id":this.contractDetails.proposalDetails.user_id,"job_id":this.contractDetails.jobDetails.jobs_id},
        });
        
        this.getChatlist();
        this.getRecentActivities();
        if (getMilestoneData.proposal.application_status == 6) {
            this.ContractEnded = true;
        } else{
            this.contractDetails.MilestoneDetails = getMilestoneData.milestone;
            this.contractDetails.proposalDetails  = getMilestoneData.proposal;
        }
        
        var jobHistory = await this.genericAPIPOSTRequest({
            requestUrl  : "getJobdataList",
            params      : {"filter":6},
        });
        if(jobHistory){
          this.contractDetails.jobHistory = jobHistory;  
        }

        var feedback = await this.genericAPIPOSTRequest({
            requestUrl  : "checkfeedbackRequest",
            params      : {"from_id":this.contractDetails.jobDetails.client_id,"job_id":this.contractDetails.jobDetails.jobs_id},
        });
        if(feedback){
          this.feedbackRequest = feedback;  
        }

        var checkfeedbackdata;
        if(this.contractDetails.proposalDetails.contract_ended_by == this.contractDetails.proposalDetails.current_user_id){
            checkfeedbackdata = {
                'job_id'    : this.contractDetails.jobDetails.jobs_id,
                'from_id'   : this.contractDetails.jobDetails.client_id,
            }
        }else{
            checkfeedbackdata = {
                'job_id'    : this.contractDetails.jobDetails.jobs_id,

            }
        }
        var checkfeedback = await this.genericAPIPOSTRequest({
            requestUrl  : "checkfeedbackGiven",
            params      : checkfeedbackdata,
        });
        if(checkfeedback){
            this.contractDetails.checkfeedbackgiven = checkfeedback;
        }

        var feedbackgiven_;

        // check review given or not
        if(this.contractDetails.proposalDetails.contract_ended_by == this.contractDetails.proposalDetails.current_user_id){
            // if contract end by client then this is the value of freelancer feedback
            this.review.clientfeedBack =this.contractDetails.checkfeedbackgiven;

            feedbackgiven_ = {
                'job_id'    : this.contractDetails.jobDetails.jobs_id,
            };
        }else{
            // if contract end by freelancer then this is the value of client feedback
            this.review.freelancerfeedBack =this.contractDetails.checkfeedbackgiven;

            feedbackgiven_ = {
                'job_id'    : this.contractDetails.jobDetails.jobs_id,
                'from_id'   : this.contractDetails.jobDetails.client_id,
            };
        }

        var checkfeedback_ = await this.genericAPIPOSTRequest({
            requestUrl  : "checkfeedbackGiven",
            params      : feedbackgiven_,
        });
        if(checkfeedback_){
            // check review given or not
            if(this.contractDetails.proposalDetails.contract_ended_by == this.contractDetails.proposalDetails.current_user_id){
                // if contract end by client then this is the value of client feedback
                this.review.freelancerfeedBack  = checkfeedback_;
            }else{
                // if contract end by freelancer then this is the value of freelancer feedback
                this.review.clientfeedBack      = checkfeedback_;
            }
        }

    },
    // this fun is for to get recentfile data
    async getRecentfileData(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl  : "getRecentFiles",
            params      : { "job_application_id": this.contractDetails.proposalDetails.job_application_id},
        });
        if(res){
            this.contractDetails.recentFiles = res;
        }else{
            this.contractDetails.recentFiles = [];
        }
    },
    // this fun is for to get all recent activities
    async getRecentActivities(){
        var recentActivties = await this.genericAPIPOSTRequest({
            requestUrl  : "getContractactivities",
            params      : {"job_id":this.contractDetails.jobDetails.jobs_id,"job_application":this.contractDetails.proposalDetails.job_application_id},
        });
        if(recentActivties.length > 0){
            this.contractDetails.recentActivties = recentActivties;
        }
    },
},
}
</script>
<style>
.about-talent-wrapper .img-wrapper {
    width: 27%!important;
    height: 75px!important;
    border-radius: 50%;
    position: relative;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
    padding: 5px;
  }
  .about-talent-wrapper .content{
    width: 70%;
  }
  /*.about-talent-wrapper p{
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }*/
  .contract-details .nav-tabs{border-bottom:0px;margin-left:-32px;}
    .contract-details .nav-tabs .nav-link.active, .contract-details .nav-tabs .nav-item.show .nav-link{
        color: #ffffff!important;
        background-color: #F2613C!important;
        border-color: #F2613C!important;
        border-radius: 5px;
        padding: 6px 12px;
    }
    .contract-details .nav-tabs .nav-link{
        color: #F2613C!important;
        background-color: #f2613c26!important;
        border-color: #F2613C!important;
        border-radius: 5px;
        margin-right:5px;
        padding: 6px 12px;
    }
</style>