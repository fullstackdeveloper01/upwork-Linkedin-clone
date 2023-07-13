<template>
    <b-container>
        <div v-if="loader" class="loader-wrapper" style="
                z-index: 1111; 
                position:absolute;
                background-color: #000000ed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                justify-content: center;
                width: 100%;
                height:100vh;
                display: flex;
                align-items: center;">
            <img :src="$store.state.baseUrlImg + 'upload/profile_image/loader.gif'" style="width:6%;">
        </div>
        <b-card-text>
            <!-- https://vuestripe.com/stripe-elements/separate-card-fields/ -->
            <b-row class="milestone-timeline-wrap mt-100  contract-details">
                <b-col lg="12" xl="12" sm="12">
                    <b-card-group deck>
                        <b-card class="py-4 px-4 bg-white br-20">
                            <div class="d-md-flex align-items-center text-left mb-4">
                                <div class="img-wrapper mr-3">
                                    <img :src="contractDetails.userDetails.profile_picture_path_url" class="img-fluid">
                                    <span class="online"></span>
                                </div>
                                <div class="content ml-2">
                                    <h4 class="fz-22 fw-600 text-black mr-2 mb-0">{{ shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}}</h4>
                                    <p class="fz-16 fw-500 text-muted mb-0">{{ contractDetails.userDetails.country_name + ', '+contractDetails.userDetails.state_name+', '+contractDetails.userDetails.city_name}}</p>
                                </div>
                                <div class="ml-auto d-flex align-items-center">
                                    <b-dropdown size="md" right class="mr-2 mt-0 t-0" variant="outline-secondary"
                                        toggle-class="text-decoration-none" no-caret>
                                        <template #button-content>
                                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                        </template>
                                        <b-dropdown-item href="javascript:void(0);" v-b-modal.bonus-modal>
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-coin mr-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path
                                                        d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                                </svg>
                                                Give Bonus
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="javascript:void(0);"
                                            @click="$router.push({ name: 'index', path: 'client/jobpostreview/', params: { pid: job_id }, query: { current: 2 } })">
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-file-earmark-text mr-2"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path
                                                        d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                                View Original Proposal
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="javascript:void(0);"
                                            @click="$router.push({ name: 'jobpostreview/job-details', path: '/client/jobpostreview/job-details/', params: { pid: job_id } })">
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-file-post mr-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" />
                                                    <path
                                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                                </svg>
                                                View Original Job Posting
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="javascript:void(0);"
                                            @click="$router.push({ name: 'freelancerProfile', path: '/client/freelancer-Profile/', params: { uid: user_id } })">
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-person mr-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                </svg>
                                                {{ contractDetails.userDetails.first_name }} Profile
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="javascript:void(0);" v-b-modal.refund-modal>
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-wallet2 mr-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                                                </svg>
                                                Request a refund
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="javascript:void(0);" v-b-modal.end-contract
                                            v-if="contractDetails.proposalDetails.application_status == 2">
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-journals mr-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                                    <path
                                                        d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                                </svg>
                                                End Contract
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="javascript:void(0);" @click="requestForfeedback"
                                            v-if="contractDetails.proposalDetails.application_status == 6 && contractDetails.proposalDetails.contract_ended_by == contractDetails.proposalDetails.current_user_id && feedbackRequest == '' && contractDetails.checkfeedbackgiven == ''">
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-journals mr-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                                    <path
                                                        d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                                </svg>
                                                Request For Feedback
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="javascript:void(0);"
                                            @click="$router.push({ name: 'endContractClient', path: '/client/end-contract', params: { pid: job_id, uid: encodedid(user_id) } })"
                                            v-if="contractDetails.proposalDetails.application_status == 6 && contractDetails.proposalDetails.contract_ended_by != contractDetails.proposalDetails.current_user_id && contractDetails.checkfeedbackgiven == ''">
                                            <!-- <b-dropdown-item href="javascript:void(0);" @click="requestForfeedback" v-if="contractDetails.proposalDetails.application_status == 6 && feedbackRequest == ''"> -->
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-journals mr-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                                    <path
                                                        d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                                </svg>
                                                Send Feedback
                                            </div>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>
                                <!-- end contract modal -->
                                <b-modal id="end-contract" size="lg" title="End Contract">
                                    <div class="text-center">
                                        <svg width="151" height="151" viewBox="0 0 151 151" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" class="mb-2">
                                            <path
                                                d="M66.3199 8.25326C71.4652 4.68501 78.2848 4.68501 83.4301 8.25326C86.7378 10.5472 90.8282 11.4166 94.7831 10.6664C100.935 9.49942 107.165 12.2732 110.414 17.6257C112.503 21.0667 115.886 23.5247 119.804 24.4479C125.898 25.884 130.462 30.9519 131.253 37.1632C131.761 41.1563 133.852 44.7779 137.056 47.2149C142.04 51.0057 144.147 57.4915 142.343 63.4876C141.184 67.3423 141.621 71.5012 143.557 75.0306C146.568 80.5207 145.855 87.3029 141.768 92.047C139.141 95.0969 137.849 99.074 138.182 103.086C138.699 109.326 135.289 115.232 129.626 117.903C125.986 119.621 123.188 122.729 121.86 126.529C119.795 132.44 114.278 136.448 108.018 136.586C103.993 136.674 100.173 138.375 97.4145 141.307C93.1236 145.867 86.453 147.285 80.6783 144.864C76.9659 143.308 72.7841 143.308 69.0717 144.864C63.297 147.285 56.6264 145.867 52.3355 141.307C49.5769 138.375 45.7566 136.674 41.7323 136.586C35.4723 136.448 29.9551 132.44 27.8899 126.529C26.5622 122.729 23.764 119.621 20.1235 117.903C14.4607 115.232 11.0509 109.326 11.5685 103.086C11.9012 99.074 10.609 95.0969 7.98184 92.047C3.89531 87.3029 3.18246 80.5207 6.19334 75.0306C8.12895 71.5012 8.56607 67.3423 7.40656 63.4876C5.60293 57.4915 7.7103 51.0057 12.6939 47.2149C15.8977 44.7779 17.9886 41.1563 18.4972 37.1632C19.2883 30.9519 23.8515 25.884 29.9461 24.4479C33.8642 23.5247 37.2473 21.0667 39.3361 17.6257C42.5852 12.2732 48.8152 9.49942 54.9669 10.6664C58.9218 11.4166 63.0122 10.5472 66.3199 8.25326Z"
                                                fill="#F2613C" />
                                            <path
                                                d="M68.9854 85.612H77.0223L84.4342 57.2147L87.0239 45.9629H74.7899L73.0932 57.2147L68.9854 85.612ZM69.0747 106.865C74.2541 106.865 77.826 102.4 77.826 97.9354C77.826 94.0955 75.3257 91.2379 71.4858 91.2379C66.3064 91.2379 62.7344 95.8815 62.7344 100.257C62.7344 104.186 65.2348 106.865 69.0747 106.865Z"
                                                fill="white" />
                                            <path
                                                d="M133.023 19.7399C133.472 19.7615 133.931 19.6116 134.29 19.2849L149.692 5.29456C150.411 4.64135 150.465 3.5288 149.811 2.8099C149.158 2.09076 148.046 2.03733 147.327 2.69055L131.925 16.6809C131.206 17.3341 131.152 18.4466 131.805 19.1655C132.132 19.525 132.573 19.7183 133.023 19.7399Z"
                                                fill="#F2613C" />
                                            <path
                                                d="M149.113 26.9153C148.903 25.9669 147.964 25.3686 147.015 25.5792L139.571 27.2309C138.622 27.4413 138.024 28.3806 138.235 29.3291C138.41 30.1206 139.094 30.6684 139.866 30.7055C140.019 30.7128 140.176 30.7002 140.333 30.6652L147.777 29.0135C148.726 28.8033 149.324 27.8637 149.113 26.9153Z"
                                                fill="#F2613C" />
                                            <path
                                                d="M122.151 11.7905C122.304 11.8404 122.458 11.868 122.612 11.8754C123.384 11.9125 124.117 11.4327 124.368 10.6617L126.725 3.40987C127.026 2.48599 126.52 1.49336 125.597 1.19328C124.673 0.892255 123.68 1.39827 123.38 2.32215L121.022 9.57397C120.722 10.4978 121.227 11.4902 122.151 11.7905Z"
                                                fill="#F2613C" />
                                        </svg>
                                        <h4>Are you sure you want to end this contract?</h4>
                                        <p>You'll be promoted to provide feedback and make any final payment in the
                                            following steps.</p>
                                    </div>
                                    <template #modal-footer>
                                        <div class="w-100 text-right">
                                            <a href="javascript:void(0);" class="text-theme mr-2"
                                                @click="$bvModal.hide('end-contract')">Cancel</a>
                                            <b-button size="lg" class="btn btn-theme"
                                                @click="$router.push({ name: 'endContractClient', path: '/client/end-contract', params: { pid: job_id, uid: encodedid(user_id) } })">
                                                End Contract
                                            </b-button>
                                        </div>
                                    </template>
                                </b-modal>
                            </div>
                            <h4 class="fz-22 fw-600 text-black mr-2 mb-0">{{ contractDetails.jobDetails.job_title }}</h4>
                            <div class="d-flex align-items-center text-left">
                                <p class="fz-16 fw-500 text-muted mb-0"
                                    v-if="contractDetails.proposalDetails.application_status == 6">Completed on
                                    {{ contractDetails.proposalDetails.ended_date }}</p>
                                <div class="star-rating mb-0 ml-2"
                                    v-if="contractDetails.proposalDetails.application_status == 6 && review.clientfeedBack != '' && review.freelancerfeedBack != ''">
                                    <label for="5-stars" class="star "
                                        :class="(review.freelancerfeedBack.rating >= 1) ? 'text-theme' : ''">
                                        <i class="fa fa-star"></i>
                                    </label>
                                    <label for="4-stars" class="star "
                                        :class="(review.freelancerfeedBack.rating >= 2) ? 'text-theme' : ''">
                                        <i class="fa fa-star"></i>
                                    </label>
                                    <label for="3-stars" class="star"
                                        :class="(review.freelancerfeedBack.rating >= 3) ? 'text-theme' : ''">
                                        <i class="fa fa-star"></i>
                                    </label>
                                    <label for="2-stars" class="star"
                                        :class="(review.freelancerfeedBack.rating >= 4) ? 'text-theme' : ''">
                                        <i class="fa fa-star"></i>
                                    </label>
                                    <label for="1-star" class="star"
                                        :class="(review.freelancerfeedBack.rating == 5) ? 'text-theme' : ''">
                                        <i class="fa fa-star"></i>
                                    </label>
                                </div>
                            </div>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col lg="12" xl="12" sm="12">
                    <b-tabs v-model="currentPage" content-class="mt-0">
                        <b-tab title="Overview" active>
                            <b-row v-if="feedbackRequest != '' && contractDetails.checkfeedbackgiven == ''">
                                <b-col lg="12" xl="12" sm="12">
                                    <div class="feedback-comment-wrapper border shadow bg-white p-2">
                                        <p class="mb-0 fz-16 d-flex align-items-center fw-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2613d"
                                                class="bi bi-star-fill mr-2" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            {{ shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} has requested feedback on this
                                            contract. <a href="javascript:void(0);"
                                                @click="$router.push({ name: 'endContractClient', path: '/client/end-contract', params: { pid: job_id, uid: user_id } })"
                                                class="text-theme ml-2">Give feedback</a>
                                        </p>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="9" xl="9" sm="12">
                                    <b-card-group deck>
                                        <b-card class="py-4 px-4 bg-white br-20 mt-0">
                                            <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Milestone Timeline</h4>
                                            <div class="alert-wrapper p-3 br-10 bg-grey mb-4" v-if="checkMilestoneIspending()">
                                                <h6 class="mb-0" >
                                                    <i class="fa fa-exclamation-circle text-warning" aria-hidden="true"></i>
                                                     {{ shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} requested milestone changes 
                                                     <a href="javascript:void(0);" @click="manageMilestoneData();" v-b-toggle.sidebar-backdrop class="text-theme">View Changes</a>
                                                </h6>
                                            </div>
                                            <div class="timeline-container">
                                                <template v-for="(milestone, index) in contractDetails.MilestoneDetails">
                                                    <div class="timeline-block timeline-block-right"
                                                        v-if="milestone.active == 1" :key="index">
                                                        <div class="marker" v-if="milestone.milestone_status == 0">{{index+1}}</div>
                                                        <div class="marker active" v-else><i class="fa fa-check active"></i></div>
                                                        <div class="timeline-content">
                                                            <p class="mb-3 fz-16 text-black">{{ milestone.description }}</p>
                                                            <h3 class="fw-600 fz-20 text-black mb-3">$ {{ (milestone.release_amount == 0)?milestone.amount:milestone.release_amount }}
                                                                <span class="badge badge-theme fz-14 fw-600 br-20" v-if="milestone.milestone_status == 0 && milestone.showmileStonebtn == 0">{{'Pending'}}</span>
                                                                <span class="badge badge-theme fz-14 fw-600 br-20" v-else-if="milestone.paymentStatus != null">{{(milestone.paymentStatus == 1 && milestone.milestone_status == 0 && checkWorkstatus(milestone) == null ) ? 'Funded' : (milestone.paymentStatus == 1 && milestone.milestone_status == 1) ? 'Released' : (milestone.paymentStatus == 1 && milestone.milestone_status == 0 ) ? 'Active & Funded' : '' }}</span>
                                                            </h3>
                                                            <p class="fz-16 text-muted fw-600 d-flex align-items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    class="bi bi-calendar3 mr-2" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                                                    <path
                                                                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                                </svg>
                                                                {{ milestone.dueDates }}
                                                            </p>
                                                            <template v-if="milestone.milestone_status == 0">
                                                                <div class="submission-qa mb-4" v-for="(subWork,index) in milestone.submittedWork" :key="index">
                                                                    <div class="d-flex align-items-normal mb-3" @click="reviewWork = milestone" v-b-toggle.review-sidebar-modal>
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
                                                                    <div class="d-flex align-items-normal mb-3" v-if="subWork.status == 3" @click="reviewWork = milestone" v-b-toggle.review-sidebar-modal>
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
                                                            <template v-if="!ContractEnded">
                                                                <button class="btn btn-theme" v-if="milestone.paymentStatus == 1 && milestone.milestone_status == 0 && checkWorkstatus(milestone) == null"
                                                                    v-b-toggle.review-sidebar-modal @click="reviewWork = milestone;">{{'Pay Now'}}</button>
                                                                
                                                                <button class="btn btn-theme mb-2" v-else-if="milestone.milestone_status == 0 && milestone.showmileStonebtn == 0 && !ContractEnded"
                                                                    @click="openPaymentModel(milestone)">{{'Fund Milestone'}}</button>

                                                                <button type="button" class="btn btn-theme" v-else-if="milestone.milestone_status == 0 && (checkWorkstatus(milestone) == 1 || checkWorkstatus(milestone) == 3)" 
                                                                    v-b-toggle.review-sidebar-modal @click="reviewWork = milestone">{{ (checkWorkstatus(milestone) == 1)?'Review Work':'Pay Now' }}</button>
                                                            </template>
                                                            
                                                            <p v-if="milestone.milestone_status == 0  && (checkWorkstatus(milestone) == 1 || checkWorkstatus(milestone) == 3)">
                                                                {{ shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} Submitted {{ milestone.submittedWork.length }} revisions
                                                            </p>
                                                        </div>
                                                    </div>
                                                </template>
                                            </div>
                                            <div class="timeline-block timeline-block-left" v-if="contractDetails.proposalDetails.application_status != 6 && !ContractEnded">
                                                <div class="marker activated text-white" >
                                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                                </div>
                                                <div class="timeline-content">
                                                    <a class="text-theme" href="javascript:void(0)" v-b-toggle.sidebar-backdrop v-b-Modal.add-milestone-modal @click="manageMilestoneData();"><h3 class="mb-2 fz-18 text-black">Add new milestone</h3></a>
                                                </div>
                                            </div>
                                            <button v-b-toggle.sidebar-backdrop v-if="contractDetails.proposalDetails.application_status != 6 && !ContractEnded" class="btn-theme mt-4" @click="manageMilestoneData();">Manage Milestones</button>
                                        </b-card>
                                    </b-card-group>
                                </b-col>
                                <b-col lg="3" xl="3" sm="12">
                                    <b-card-group deck>
                                        <b-card class="py-4 px-3 bg-white br-20 mt-2">
                                            <h4 class="fz-20 fw-600 text-black mr-2 mb-3">Billings</h4>
                                            <b-progress :value="100" variant="theme" class="mb-3"></b-progress>
                                            <div class="payout-wrap">
                                                <div class="d-flex align-items-center mb-2">
                                                    <span class="fz-16 fw-600 text-black"><i
                                                            class="fa fa-circle text-theme"></i> Paid Out</span>
                                                    <span class="ml-auto fz-16 fw-600 text-black">${{ReleaseFund}}</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <span class="fz-16 fw-600 text-black"><i
                                                            class="fa fa-circle text-success"></i> Funded (Escrow
                                                        Protection)</span>
                                                    <span class="ml-auto fz-16 fw-600 text-black">${{ paidAmount }}</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <span class="fz-16 fw-600 text-black"><i
                                                            class="fa fa-circle text-secondary"></i> Project Price</span>
                                                    <span class="ml-auto fz-16 fw-600 text-black">${{ totalamount }}</span>
                                                </div>
                                            </div>
                                            <!-- <hr> -->
                                            <!-- <b-button class="btn btn-outline-theme w-100">Rehire Pavan</b-button> -->
                                        </b-card>
                                    </b-card-group>
                                </b-col>
                            </b-row>
                            <Recentfiles :contractDetails="contractDetails" @refreshRecentFiles="getRecentfileData" />
                        </b-tab>
                        <b-tab title="Messages">
                            <b-row v-if="feedbackRequest != '' && contractDetails.checkfeedbackgiven == ''">
                                <b-col lg="12" xl="12" sm="12">
                                    <div class="feedback-comment-wrapper border shadow bg-white p-2">
                                        <p class="mb-0 fz-16 d-flex align-items-center fw-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2613d"
                                                class="bi bi-star-fill mr-2" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            {{ shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} has requested feedback on this
                                            contract. <a href="javascript:void(0);"
                                                @click="$router.push({ name: 'endContractClient', path: '/client/end-contract', params: { pid: job_id, uid: user_id } })"
                                                class="text-theme ml-2">Give feedback</a>
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
                            <b-row v-if="feedbackRequest != '' && contractDetails.checkfeedbackgiven == ''">
                                <b-col lg="12" xl="12" sm="12">
                                    <div class="feedback-comment-wrapper border shadow bg-white p-2">
                                        <p class="mb-0 fz-16 d-flex align-items-center fw-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2613d"
                                                class="bi bi-star-fill mr-2" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            {{ shortName(contractDetails.userDetails.first_name ,contractDetails.userDetails.last_name)}} has requested feedback on this
                                            contract. <a href="javascript:void(0);"
                                                @click="$router.push({ name: 'endContractClient', path: '/client/end-contract', params: { pid: job_id, uid: user_id } })"
                                                class="text-theme ml-2">Give feedback</a>
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
                                                    <span
                                                        class="fz-16 fw-500 text-muted">{{ (contractDetails.jobDetails.budget_type
                                                            == 'A') ? 'Day Wise' : 'Month Wise' }}</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <span class="fz-16 fw-600 text-black mr-5 w-15">Total spent</span>
                                                    <span
                                                        class="fz-16 fw-500 text-muted">{{ changeAmountvalue(totalamount) }}</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <span class="fz-16 fw-600 text-black mr-5 w-15">Start date</span>
                                                    <span
                                                        class="fz-16 fw-500 text-muted">{{ contractDetails.jobDetails.start_date }}</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <span class="fz-16 fw-600 text-black mr-5 w-15">Contact person</span>
                                                    <span
                                                        class="fz-16 fw-500 text-muted">{{ shortName(contractDetails.jobDetails.first_name,contractDetails.jobDetails.last_name)}}</span>
                                                </div>
                                                <b-button class="btn btn-outline-theme mt-4" @click="summeryDetails = true"
                                                    v-if="!summeryDetails">Show Details</b-button>
                                            </div>
                                            <span v-if="summeryDetails">
                                                <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Details</h4>
                                                <div class="payout-wrap">
                                                    <div class="d-flex align-items-center mb-2">
                                                        <span class="fz-16 fw-600 text-black mr-5 w-15">Verified Name</span>
                                                        <span
                                                            class="fz-16 fw-500 text-muted">{{ shortName(contractDetails.jobDetails.first_name,contractDetails.jobDetails.last_name)}}</span>
                                                    </div>
                                                    <div class="d-flex align-items-center mb-2">
                                                        <span class="fz-16 fw-600 text-black mr-5 w-15">Hired By</span>
                                                        <span
                                                            class="fz-16 fw-500 text-muted">{{ shortName(contractDetails.jobDetails.first_name,contractDetails.jobDetails.last_name)}}</span>
                                                    </div>
                                                    <div class="d-flex align-items-center mb-2">
                                                        <span class="fz-16 fw-600 text-black mr-5 w-15">Contract Id</span>
                                                        <span
                                                            class="fz-16 fw-500 text-muted">{{ contractDetails.proposalDetails.job_application_id }}</span>
                                                    </div>
                                                    <b-button class="btn btn-outline-theme mt-4"
                                                        @click="summeryDetails = false">Show Less</b-button>
                                                </div>
                                            </span>
                                        </b-card>
                                    </b-card-group>

                                    <b-card-group deck>
                                        <b-card class="py-4 px-4 bg-white br-20 mt-2">
                                            <h4 class="fz-20 fw-600 text-black mr-2 mb-4">Description</h4>
                                            <p>{{ userJobApply.description }}</p>
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
                                            <span v-for="(activities, index) in contractDetails.recentActivties"
                                                :key="index">
                                                <b-row v-if="index <= 3 && !showHideRecentActivity">
                                                    <b-col xl="3" lg="3" sm="3">
                                                        {{ activities.date }}
                                                    </b-col>
                                                    <b-col xl="9" lg="9" sm="9">
                                                        <p class="mb-0" v-if="activities.type == 'SENDOFFER'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'FUNDFIRSTMILESTONE'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'ACCEPTOFFER'">
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'SUBMITWORK'">
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'FUNDEDMILESTONE'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'REJECTEDWORK'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'ACCEPTWORK'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'RELEASEFUND'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'CONTRACTENDEDBYFREELANCER'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            gave
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            feedback.
                                                        </p>
                                                        <p class="mb-0" v-if="activities.type == 'CONTRACTENDEDBYCLIENT'">
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            gave {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            feedback.
                                                        </p>
                                                        <div class="star-rating mt-2 mb-2"
                                                            v-if="activities.type == 'CONTRACTENDEDBYFREELANCER' || activities.type == 'CONTRACTENDEDBYCLIENT'">
                                                            <label :class="(activities.rating >= 1) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating >= 2) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating >= 3) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating >= 4) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating == 5) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                        </div>
                                                        <p class="mb-0"
                                                            v-if="activities.type == 'CONTRACTENDEDBYFREELANCER' || activities.type == 'CONTRACTENDEDBYCLIENT'">
                                                            {{ activities.description }}</p>
                                                    </b-col>
                                                    <hr>
                                                </b-row>
                                                <b-row v-if="showHideRecentActivity">
                                                    <b-col xl="3" lg="3" sm="3">
                                                        {{ activities.date }}
                                                    </b-col>
                                                    <b-col xl="9" lg="9" sm="9">
                                                        <p class="mb-0" v-if="activities.type == 'SENDOFFER'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'FUNDFIRSTMILESTONE'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'ACCEPTOFFER'">
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'SUBMITWORK'">
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'FUNDEDMILESTONE'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'REJECTEDWORK'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'ACCEPTWORK'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'RELEASEFUND'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            {{ activities.description }}</p>
                                                        <p class="mb-0" v-if="activities.type == 'CONTRACTENDEDBYFREELANCER'">
                                                            {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            gave
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            feedback.
                                                        </p>
                                                        <p class="mb-0" v-if="activities.type == 'CONTRACTENDEDBYCLIENT'">
                                                            {{ (activities.freelancer_name != '') ? activities.freelancer_name : '' }}
                                                            {{ (activities.freelancer_lastname != '') ? activities.freelancer_lastname : '' }}
                                                            gave {{ (activities.client_name != '') ? activities.client_name : '' }}
                                                            {{ (activities.client_lastname != '') ? activities.client_lastname : '' }}
                                                            feedback.
                                                        </p>
                                                        <div class="star-rating mt-2 mb-2"
                                                            v-if="activities.type == 'CONTRACTENDEDBYFREELANCER' || activities.type == 'CONTRACTENDEDBYCLIENT'">
                                                            <label :class="(activities.rating >= 1) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating >= 2) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating >= 3) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating >= 4) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                            <label :class="(activities.rating == 5) ? 'active' : ''"><i
                                                                    class="fa fa-star" aria-hidden="true"></i></label>
                                                        </div>
                                                        <p class="mb-0"
                                                            v-if="index > 3 && activities.type == 'CONTRACTENDEDBYFREELANCER' || activities.type == 'CONTRACTENDEDBYCLIENT'">
                                                            {{ activities.description }}</p>
                                                    </b-col>
                                                    <hr>
                                                </b-row>
                                            </span>

                                            <b-button class="btn btn-outline-theme mt-4" v-if="contractDetails.recentActivties.length > 4"
                                                @click="showHideRecentActivity = !showHideRecentActivity">{{ (!showHideRecentActivity) ? 'Show More Activity':'Show Less Activity'}}</b-button>
                                        </b-card>
                                    </b-card-group>
                                </b-col>
                                <b-col lg="3" xl="3" sm="12">
                                    <b-card-group deck>
                                        <b-card class="py-4 px-3 bg-white br-20 mt-2 about-talent-wrapper">
                                            <h4 class="fz-20 fw-600 text-black mr-2 mb-3">About the Talent</h4>
                                            <div class="d-md-flex align-items-normal text-left mb-4">
                                                <div class="img-wrapper mr-3 w-70 h-70">
                                                    <img :src="contractDetails.userDetails.profile_picture_path_url"
                                                        class="img-fluid">
                                                </div>
                                                <div class="content ml-2" v-if="contractDetails.userDetails != ''">
                                                    <h4 class="fz-18 fw-600 text-black mr-2 mb-0">
                                                        {{ shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}}</h4>
                                                    <p class="fz-16 fw-500 text-muted mb-0 white-space-pre-line" v-if="contractDetails.userDetails.about_self_desc !=''">
                                                        {{ contractDetails.userDetails.about_self_desc }}
                                                        <!-- <read-more more-str="Read more"
                                                            :text="contractDetails.userDetails.about_self_desc" link="#"
                                                            less-str="Read less" :max-chars="150"></read-more> -->
                                                    </p>
                                                </div>
                                            </div>
                                            <h5 class="fz-16 text-black fw-600">{{ contractDetails.userDetails.country_name }}
                                            </h5>
                                            <h5 class="fz-16 text-muted fw-500">{{ contractDetails.userDetails.city_name }}
                                            </h5>
                                            <h5 class="fz-16 text-black fw-600">{{ contractDetails.jobHistory.length }} jobs
                                            </h5>
                                            <h5 class="fz-16 text-black fw-600">${{ totalEarning }} total earned</h5>
                                        </b-card>
                                    </b-card-group>

                                    <b-card-group deck v-if="contractDetails.proposalDetails.agencyData != '' || contractDetails.proposalDetails.agencyData == null">
                                        <b-card class="py-4 px-3 bg-white br-20 mt-2 about-talent-wrapper">
                                            <h4 class="fz-20 fw-600 text-black mr-2 mb-3">Agency</h4>
                                            <div class="d-md-flex align-items-normal text-left mb-4">
                                                <div class="img-wrapper mr-3 w-70 h-70 br-10">
                                                    <img :src="contractDetails.proposalDetails.agencyData.profile_picture_path"
                                                        class="img-fluid br-10" v-if="contractDetails.proposalDetails.agencyData.profile_picture_path!=''">
                                                </div>
                                                <div class="ml-2" v-if="contractDetails.userDetails != ''">
                                                    <h4 class="fz-18 fw-600 text-black mr-2 mb-0 cursor-pointer" @click="$router.push({name:'agencyPublicProfile',path:'agency-public-profile',params:{uid:encodedid(contractDetails.proposalDetails.agencyData.login_master_id)}}).href"> {{ shortName(contractDetails.proposalDetails.agencyData.first_name,contractDetails.proposalDetails.agencyData.last_name)}}</h4>
                                                </div>
                                            </div>
                                        </b-card>
                                    </b-card-group>

                                    <b-card-group deck>
                                        <b-card class="py-4 px-3 bg-white br-20 mt-2">
                                            <h4 class="fz-20 fw-600 text-black mr-2 mb-3">Your Feedback to
                                                {{ contractDetails.userDetails.first_name }}</h4>
                                            <span
                                                v-if="contractDetails.proposalDetails.application_status == 6 && review.clientfeedBack != '' && review.freelancerfeedBack != ''">
                                                <div class="star-rating mt-2 mb-2">
                                                    <label for="5-stars" class="star "
                                                        :class="(review.clientfeedBack.rating >= 1) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="4-stars" class="star "
                                                        :class="(review.clientfeedBack.rating >= 2) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="3-stars" class="star"
                                                        :class="(review.clientfeedBack.rating >= 3) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="2-stars" class="star"
                                                        :class="(review.clientfeedBack.rating >= 4) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="1-star" class="star"
                                                        :class="(review.clientfeedBack.rating == 5) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                </div>
                                                <p class="fz-16 fw-500 text-black mb-0">{{ review.clientfeedBack.review }}.
                                                </p>
                                            </span>
                                            <span v-else>
                                                <p class="fz-16 fw-500 text-black mb-0">No Feedback Found.</p>
                                            </span>
                                            <h4 class="fz-20 fw-600 text-black mr-2 mt-3 mb-3">
                                                {{ contractDetails.userDetails.first_name }}'s Feedback to You</h4>

                                            <span
                                                v-if="contractDetails.proposalDetails.application_status == 6 && review.clientfeedBack != '' && review.freelancerfeedBack != ''">
                                                <div class="star-rating mt-2 mb-2">
                                                    <label for="5-stars" class="star "
                                                        :class="(review.freelancerfeedBack.rating >= 1) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="4-stars" class="star "
                                                        :class="(review.freelancerfeedBack.rating >= 2) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="3-stars" class="star"
                                                        :class="(review.freelancerfeedBack.rating >= 3) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="2-stars" class="star"
                                                        :class="(review.freelancerfeedBack.rating >= 4) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                    <label for="1-star" class="star"
                                                        :class="(review.freelancerfeedBack.rating == 5) ? 'text-theme' : ''">
                                                        <i class="fa fa-star"></i>
                                                    </label>
                                                </div>
                                                <p class="fz-16 fw-500 text-black mb-0">
                                                    {{ review.freelancerfeedBack.review }}.</p>
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
            <!-- review sidebar -->
            <ReviewWorkVue :contractDetails="contractDetails" :reviewWork="reviewWork" @controlparent="controlparent"/>
            <!-- add-milestone-sidebar -->
            <ManageMilestone ref="manageMilestoneFun" :sidebarMilestoneData.sync="sidebarDetails" :contractDetails="contractDetails" @manageParentController="getCreatedmilsetone"/>
            
            <!-- bonus model -->
            <b-modal id="bonus-modal" size="lg" title="Give bonus or expense reimbursement" class="bonus-modal" centered
                hide-footer no-close-on-backdrop>
                <b-form @submit.prevent="addBonus">
                    <div class="text-left">
                        <div class="card-section">
                            <b-row>
                                <b-col xl="8" lg="8" sm="12">
                                    <b-row>
                                        <b-col xl="6" lg="6" sm="12">
                                            <label class="mb-2 fz-16 fw-600">Amount</label>
                                            <b-input-group size="lg" prepend="$">
                                                <b-form-input v-model="bonusData.amount" :error-messages="bonus_amount"
                                                    @input="$v.bonusData.amount.$touch()"
                                                    @blur="$v.bonusData.amount.$touch()" oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"
                                                    maxlength="12" autocomplete="nope" onselectstart="return false"
                                                    onpaste="return false" onCopy="return false" onCut="return false"
                                                    onDrag="return false" onDrop="return false"></b-form-input>
                                            </b-input-group>
                                            <div class="error" v-if="bonus_amount[0]">{{ bonus_amount[0] }}</div>
                                        </b-col>
                                        <b-col xl="6" lg="6" sm="12">
                                            <label class="fz-16 fw-600">Reason</label>
                                            <b-form-group id="input-group-3" label-for="reason">
                                                <b-form-select v-model="bonusData.reason" id="reason" :options="reason"
                                                    text-field="text" value-field="value" :error-messages="bonus_reason"
                                                    @input="$v.bonusData.reason.$touch()"
                                                    @blur="$v.bonusData.reason.$touch()"
                                                    class="form-control"></b-form-select>
                                            </b-form-group>
                                            <div class="error" v-if="bonus_reason[0]">{{ bonus_reason[0] }}</div>

                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col xl="12" lg="12" sm="12">
                                            <label class="fz-16 fw-600">Description</label><br>
                                            <span class="text-muted mb-2 fz-14">This description will be sent to the
                                                freelancer along with your payment</span>
                                            <b-form-textarea id="textarea" v-model="bonusData.description" rows="3"
                                                max-rows="6" :error-messages="bonus_description"
                                                @input="$v.bonusData.description.$touch()"
                                                @blur="$v.bonusData.description.$touch()"></b-form-textarea>
                                            <div class="error" v-if="bonus_description[0]">{{ bonus_description[0] }}</div>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col xl="12" lg="12" sm="12">
                                            <label class="fz-16 fw-600">Private Note (Optional)</label><br>
                                            <span class="text-muted mb-2 fz-14">This note will be available in trasaction
                                                details for peronal reference. The freelancer will not see this note.</span>
                                            <b-form-textarea id="textarea" v-model="bonusData.private_note" rows="3"
                                                max-rows="6" :error-messages="bonus_private_note"
                                                @input="$v.bonusData.private_note.$touch()"
                                                @blur="$v.bonusData.private_note.$touch()"></b-form-textarea>
                                            <div class="error" v-if="bonus_private_note[0]">{{ bonus_private_note[0] }}</div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col xl="4" lg="4" sm="12">
                                    <div class="right-msg border-left pl-4 h-100">
                                        <h5 class="text-black fz-16 fw-500 mb-4">When you send a bonus or expense
                                            reimbursement, your account will be charged within 24 hours.</h5>
                                        <h5 class="text-black fz-16 fw-500 mb-4">The freelancer will receive funds after the
                                            standard hold period.</h5>
                                        <a href="javascript:void(0);" class="text-theme fz-16 fw-500">Taxes & fees will
                                            appply</a>
                                    </div>
                                </b-col>
                                <b-col xl="12" lg="12" sm="12">
                                    <div class="text-right w-100 border-top pt-3">
                                        <a href="javascript:void(0);" class="mr-2 text-theme"
                                            @click="$bvModal.hide('bonus-modal')">
                                            Close
                                        </a>
                                        <b-button type="submit" size="lg" class="btn btn-theme">
                                            Make Payment
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </div>

                </b-form>
            </b-modal>
            <!-- refund model -->
            <b-modal id="refund-modal" size="lg" title="Request Refund" class="bonus-modal" centered hide-footer
                no-close-on-backdrop>
                <div class="text-left">
                    <div class="card-section">
                        <b-form @submit.prevent="addRefund">
                            <b-row>
                                <b-col xl="8" lg="8" sm="12">
                                    <b-row>
                                        <b-col xl="12" lg="12" sm="12">
                                            <label class="fz-16 fw-600">Invoice</label><br>
                                            <b-form-group id="input-group-3" label-for="invoice">
                                                <b-form-select id="invoice" v-model="refundData.invoice_id"
                                                    :options="contractDetails.MilestoneDetails" text-field="description"
                                                    value-field="job_milestone_id" @change="getInvoicevalue()"
                                                    :error-messages="refund_invoice"
                                                    @input="$v.refundData.invoice_id.$touch()"
                                                    @blur="$v.refundData.invoice_id.$touch()"
                                                    class="form-control"></b-form-select>
                                            </b-form-group>
                                            <div class="error" v-if="refund_invoice[0] && $v.refundData.invoice_id.$error">
                                                {{ refund_invoice[0] }}</div>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col xl="12" lg="12" sm="12">
                                            <b-form-radio v-model="invoiceRadio" value="A" checked
                                                @change="amountInput = false, refundData.amount = totalInvoiceAmount">Total
                                                invoice amount (${{ totalInvoiceAmount }})</b-form-radio>
                                            <b-form-radio v-model="invoiceRadio" value="B" @change="amountInput = true">Other
                                                amount</b-form-radio>
                                            <b-form-input type="text" v-model="refundData.amount"
                                                oninput="this.value=this.value.replace(/[^0-9.,]/g,'');" maxlength="12" autocomplete="nope"
                                                onselectstart="return false" onpaste="return false" onCopy="return false"
                                                onCut="return false" onDrag="return false" onDrop="return false"
                                                v-if="amountInput" :error-messages="refund_amount"
                                                @input="$v.refundData.amount.$touch()"
                                                @blur="$v.refundData.amount.$touch()"></b-form-input>
                                            <div class="error" v-if="refund_amount[0]">{{ refund_amount[0] }}</div>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col xl="12" lg="12" sm="12">
                                            <label class="fz-16 fw-600">Message</label><br>
                                            <b-form-textarea id="textarea" v-model="refundData.message" rows="3"
                                                max-rows="6"
                                                placeholder="Please explain to the freelancer the reason for this requset"
                                                :error-messages="refund_message" @input="$v.refundData.message.$touch()"
                                                @blur="$v.refundData.message.$touch()"></b-form-textarea>
                                            <div class="error" v-if="refund_message[0]">{{ refund_message[0] }}</div>

                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col xl="12" lg="12" sm="12">
                                            <input id="fileUpload" hidden type="file" @change="UploadFile"
                                                accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf"
                                                :error-messages="refund_attachment"
                                                @input="$v.refundData.attachment.$touch()"
                                                @blur="$v.refundData.attachment.$touch()">
                                            <b-button class="btn-outline-theme d-flex align-items-center"
                                                @click="chooseFiles()">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                                </svg>
                                                Attach File
                                            </b-button>
                                            <small>Up to 25 MB</small>
                                            <div class="error" v-if="refund_attachment[0]">{{ refund_attachment[0] }}</div>
                                            <div>
                                                <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="UploadedFileName" style="padding: 6px 0px;">
                                                    <li class="attatchment-wrap mr-5 mb-2" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                                                        <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                                        <a :href="UploadedFileName" target="_blank"><span class="ml-2 text-theme">{{refundData.attachment}}</span></a>
                                                        <i class="fa fa-trash border-none fz-18 text-danger cursor-pointer pl-2" @click="refundData.attachment = ''; UploadedFileName =''"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- <a :href="UploadedFileName"
                                                class="d-flex align-items-center ml-2 mt-3 attachment " target="_blank"
                                                v-if="attachmentbtn">
                                                <i class="fa fa-file"></i>
                                                <span class="ml-2 text-theme">{{ refundData.attachment }}</span>
                                            </a> -->
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col xl="4" lg="4" sm="12">
                                    <div class="right-msg border-left pl-4 h-100">
                                        <h5 class="text-black fz-18 fw-600 mb-4">Requesting an escrow refund</h5>
                                        <h5 class="text-black fz-16 fw-500 mb-4">If your funds are currently in escrow,
                                            follow the <a href="javascript:void(0);" class="text-theme">escrow refund
                                                process</a> to request a refund.</h5>
                                        <h5 class="text-black fz-16 fw-500 mb-4">If your funds have been released from
                                            escrow, use this for to request a refund from your freelancer.</h5>
                                    </div>
                                </b-col>
                                <b-col xl="12" lg="12" sm="12">
                                    <div class="text-right w-100 border-top pt-3">
                                        <a href="javascript:void(0);" class="mr-2 text-theme"
                                            @click="$bvModal.hide('refund-modal')">
                                            Cancel
                                        </a>
                                        <b-button type="submit" size="lg" class="btn btn-theme">
                                            Send Request
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </div>
                </div>
            </b-modal>
            <!-- refund model -->
            <b-modal id="payment1-modal" size="lg" title="Payment" class="bonus-modal" centered hide-footer
                no-close-on-backdrop>
                <div class="text-left">
                    <div class="card-section">
                        <div class="d-md-flex align-items-center text-left">
                            <div class="img-wrapper mr-3">
                                <img :src="contractDetails.userDetails.profile_picture_path_url" class="img-fluid">
                            </div>
                            <div class="content ml-2">
                                <h4 class="fz-20 fw-600 text-black mr-2 mb-0">{{ shortName(contractDetails.userDetails.first_name ,contractDetails.userDetails.last_name)}}</h4>
                            </div>
                        </div>
                        <!-- <Vuepaymentgateway :proposalDetails="contractDetails.proposalDetails" @closePaymentModal="closePaymentModal" ></Vuepaymentgateway> -->
                    </div>
                </div>
            </b-modal>
            <!-- submit for payment -->
            <b-modal id="payment-modal" size="xl" title="Payment Details" centered hide-footer no-close-on-backdrop>
                <template #modal-header>
                    <div class="w-100 text-right">
                        <a href="javascript:void(0);" class="text-theme mr-2" @click="closePaymentModal()"><i
                                class="fa fa-close text-theme"></i></a>
                    </div>
                </template>
                <Paymentgateway ref="childComponentfun" :contractDetails="contractDetails"
                    :currentpayment_arr="currentpayment_arr" @hideLoader="loaderHideshow" @closeModal="closePaymentModal"
                    @milseStoneDatarefresh="getCreatedmilsetone" @thankYouModal="$bvModal.show('thankyou-modal')">
                </Paymentgateway>
                <!-- <Vuepaymentgateway></Vuepaymentgateway> -->
                <template #modal-footer>
                    <div class="w-100 text-right">
                        <a href="javascript:void(0);" class="text-theme mr-2">Cancel</a>
                        <b-button size="lg" class="btn btn-theme">
                            Save
                        </b-button>
                    </div>
                </template>
            </b-modal>
            <!-- thank you modal -->
            <b-modal id="thankyou-modal" title="Payment Successfull" centered hide-footer size="md" no-close-on-backdrop>
                <template>
                    <div class="p-5 text-center m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#F2613C"
                            class="bi bi-envelope-check m-auto" viewBox="0 0 16 16">
                            <path
                                d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                            <path
                                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                        </svg>
                        <h5 class="mt-4">Your Payment Successfull Done</h5>
                    </div>
                    <hr>
                    <div>
                        <div class="text-right">
                            <a href="javascript:void(0);" class="text-theme mr-2"
                                @click="$bvModal.hide('thankyou-modal')">close</a>
                        </div>
                    </div>
                </template>
            </b-modal>
        </b-card-text>
    </b-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import Paymentgateway from '@/components/Paymentgateway.vue'
import Recentfiles from "@/components/contract/Recentfiles.vue";
import chatBoxData from '@/components/chat/chatBoxData.vue';
import ReviewWorkVue from "../../components/modal/ReviewWork.vue";
import ManageMilestone from "../../components/modal/ManageMilestone.vue";
export default {
    mounted() {
        this.job_id = this.$route.params.pid;
        this.user_id = this.decodeId(this.$route.params.uid);
        // this fun is for to get contractDetails
        this.getContractdetails();
        window.scrollTo(0, 0);
        if (this.$route.query.current == 'bonus') {
            this.$bvModal.show('bonus-modal');
            this.currentPage = 0;
        } else if (this.$route.query.current == 'message') {
            setTimeout(() => {
                this.currentPage = 1;
            }, 100);
        } else if (this.$route.query.current == 'overview') {
            this.currentPage = 0;
        }
    },
    mixins: [validationMixin],
    components: {
        Paymentgateway,
        Recentfiles,
        chatBoxData,
        ReviewWorkVue,
        ManageMilestone,
    },
    validations: {
        bonusData: {
            amount: { required },
            reason: { required },
            description: { required },
            private_note: { required },
        },
        refundData: {
            invoice_id: { required },
            amount: { required },
            message: { required },
            attachment: { required },
        },
        
        
    },
    data() {
        return {
            chatroomdata:'',
            job_id: '',
            user_id: '',
            reason: [
                { 'text': 'Bonus', 'value': 'bonus' },
                { 'text': 'Expence Reimbursement', 'value': 'expence reimbursement' },
                { 'text': 'Miscellaneous Payment', 'value': 'miscellaneous payment' },
            ],
            contractDetails: {
                userDetails: {about_self_desc:''},
                jobDetails: '',
                proposalDetails: {agencyData:''},
                jobHistory: [],
                MilestoneDetails: [],
                checkfeedbackgiven: '',
                recentActivties: [],
                recentFiles:[],
            },
            bonusData: {
                job_id: '',
                amount: '',
                reason: '',
                description: '',
                private_note: '',
            },
            refundData: {
                job_id: '',
                to_id: '',
                invoice_id: '',
                amount: '',
                message: '',
                attachment: '',
            },
            review: {
                clientfeedBack: '',
                freelancerfeedBack: '',
            },
            summeryDetails: false,
            UploadedFileName: '',
            attachmentbtn: false,
            amountInput: false,
            totalInvoiceAmount: 0,
            invoiceRadio: 'A',
            feedbackRequest: '',
            currentPage: '',
            currentpayment_arr: [],
            userJobApply: [],
            loader: false,
            ContractEnded: false,
            showHideRecentActivity: false,
            
            sidebarData:[],
            reviewWork:{
                submittedWork:[],
            },
            
        }
    },
    computed: {
        ...mapGetters(["getTempData"]),
        sidebarDetails: {
            get() {
                return this.sidebarData;
            },
            set() {
                return this.sidebarData=[];
            },
        },
        // stripeElements () {
        //   return this.$stripe.elements();
        // },
        
        
        // this fun id for validate of field
        bonus_amount() {
            const errors = []
            if (!this.$v.bonusData.amount.$dirty) return errors
            !this.$v.bonusData.amount.required && errors.push('Amount is required')
            return errors
        },
        // this fun id for validate of field

        bonus_reason() {
            const errors = []
            if (!this.$v.bonusData.reason.$dirty) return errors
            !this.$v.bonusData.reason.required && errors.push('Reason is required')
            return errors
        },
        // this fun id for validate of field

        bonus_description() {
            const errors = []
            if (!this.$v.bonusData.description.$dirty) return errors
            !this.$v.bonusData.description.required && errors.push('Reason is required')
            return errors
        },
        // this fun id for validate of field

        bonus_private_note() {
            const errors = []
            if (!this.$v.bonusData.private_note.$dirty) return errors
            !this.$v.bonusData.private_note.required && errors.push('Reason is required')
            return errors
        },

        // this fun id for validate of field

        refund_invoice() {
            const errors = []
            if (!this.$v.refundData.invoice_id.$dirty) return errors
            !this.$v.refundData.invoice_id.required && errors.push('Invoice is required')
            return errors
        },
        // this fun id for validate of field

        refund_amount() {
            const errors = []
            if (!this.$v.refundData.amount.$dirty) return errors
            !this.$v.refundData.amount.required && errors.push('Amount is required')
            return errors
        },
        // this fun id for validate of field

        refund_message() {
            const errors = []
            if (!this.$v.refundData.message.$dirty) return errors
            !this.$v.refundData.message.required && errors.push('Message is required')
            return errors
        },
        // this fun id for validate of field

        refund_attachment() {
            const errors = []
            if (!this.$v.refundData.attachment.$dirty) return errors
            !this.$v.refundData.attachment.required && errors.push('Attachment is required')
            return errors
        },

        // function to total burget amount
        totalEarning() {
            var amount = 0;
            if (this.contractDetails.jobHistory.length > 0) {
                this.contractDetails.jobHistory.map(data => {
                    amount += parseInt(data.cost);
                });
            }
            return amount;
        },
        totalamount() {
            var amount = 0;
            if (this.contractDetails.MilestoneDetails.length > 0) {
                this.contractDetails.MilestoneDetails.map(data => {
                    amount += parseInt(data.amount);
                });
            }
            return amount;
        },
        // this fun is for to calculate escrow amount
        paidAmount() {
            var amount = 0;
            if (this.contractDetails.MilestoneDetails.length > 0) {
                this.contractDetails.MilestoneDetails.map(data => {
                    if (data.paymentStatus == 1 && data.milestone_status == 0) {
                        amount += parseInt(data.amount);
                    }else if(data.paymentStatus == 1 && data.milestone_status == 1){
                        if(data.amount < data.release_amount){
                            amount += (parseInt(data.amount)-parseInt(data.release_amount))
                        }
                    }
                });
            }
            return amount;
        },
        // this fun is for to calculate the released amount
        ReleaseFund() {
            var amount = 0;
            if (this.contractDetails.MilestoneDetails.length > 0) {
                this.contractDetails.MilestoneDetails.map(data => {
                    if (data.paymentStatus == 1 && data.milestone_status == 1) {
                        amount += parseInt(data.release_amount);
                    }
                });
            }
            return amount;
        },
        
    },
    methods: {
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
        //this fun is for to control child function
        controlparent(){
            this.getCreatedmilsetone();
        },
        
        
        // this fun is for to check submitted work status
        checkWorkstatus(_v){
            // console.log('_v',_v)
            if(_v!=''){
                if(_v.submittedWork.length > 0){
                    var index = _v.submittedWork.length-1;
                    return _v.submittedWork[index].status;
                }else{
                    return null;
                }
            }else{
                return null;
            }
            
        },
        
        // this fun is for to get chat user list
        async getChatlist(){
            this.chatroomdata=[];
            var  param={'user_id':this.user_id,'client_id':this.$store.state.currentUserData.login_master_id, "job_id": this.contractDetails.jobDetails.jobs_id,'userType': this.$store.state.accountType};
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
        //this fun is for to open thanku modal
        openThankuModal() {
            this.$bvModal.show('thankyou-modal');
        },
        //this fun is for to show hide loader
        loaderHideshow() {
            this.loader = (this.loader == false) ? true : false;
        },
        // this fun is for to open paymentmodel
        openPaymentModel(data) {
            this.currentpayment_arr = data;
            this.$bvModal.show('payment-modal');
            setTimeout(() => {

                this.$refs.childComponentfun.getBillings()
            }, 1000);

        },
        
        // this fun is for to request for feedback
        async requestForfeedback() {
            var feedback = await this.genericAPIPOSTRequest({
                requestUrl: "requestFeedback",
                params: { 'job_id': this.contractDetails.jobDetails.jobs_id, 'to_id': this.user_id },
            });
            if (feedback) {
                this.$toastr.s('Request submitted Successfull');
            }
        },
        // this fun is for to get invoice value
        getInvoicevalue() {
            this.contractDetails.MilestoneDetails.filter(data => {
                if (data.job_milestone_id == this.refundData.invoice_id) {
                    this.refundData.amount = data.amount;
                    this.totalInvoiceAmount = data.amount;
                }
            })
        },
        // this fun is for to send refund status
        async addRefund() {
            this.$v.refundData.$touch();
            if (!this.$v.refundData.$invalid) {
                this.refundData.job_id = this.contractDetails.jobDetails.jobs_id;
                this.refundData.to_id = this.user_id;
                var userDetails = await this.genericAPIPOSTRequest({
                    requestUrl: "addRefundrequest",
                    params: this.refundData,
                });
                if (userDetails) {
                    this.$toastr.s("refund Request submited Successfully");
                    this.refundData = {
                        job_id: '',
                        to_id: '',
                        invoice_id: '',
                        amount: '',
                        message: '',
                        attachment: '',
                    }
                } else {
                    this.$toastr.e("refund Request Not submited");
                }
                this.$bvModal.hide('refund-modal');
            }
            return false
        },
        // this fun is for to choose file
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        // this function is for to upload attachment
        async UploadFile(e) {
            var files = e.target.files[0];
            var ext = files.name.split('.').pop();
            if (ext == "pdf" || ext == "word" || ext == "png" || ext == "jpeg" || ext == "jpg") {
                const fileSize = files.size / 1024 / 1024; // in MiB
                if (fileSize <= 25) {
                    // if (fileSize >= 2 && fileSize <= 40) {
                    const formData = new FormData();
                    formData.append('image', files);
                    formData.append('job_id', this.contractDetails.jobDetails.jobs_id);
                    var getData = await this.genericAPIPOSTRequest({
                        requestUrl: "uploadrefundFile",
                        params: formData,
                    });
                    if (getData.filename != "") {
                        this.refundData.attachment = getData.name;
                        this.attachmentbtn = true;
                        this.UploadedFileName = getData.filename
                    } else {
                        this.refundData.attachment = '';
                    }
                } else {
                    this.$toastr.e('File Size Should be Less Than 25 Mb');
                }
            } else {
                this.$toastr.e('Only Allow Files (PDF, Word, Png, Jpg, Jpeg)');
            }

        },
        // this fun is for to add bonus
        async addBonus() {
            this.$v.bonusData.$touch();
            if (!this.$v.bonusData.$invalid) {
                this.bonusData.job_id = this.contractDetails.jobDetails.jobs_id;
                this.bonusData.to_id = this.user_id;
                var userDetails = await this.genericAPIPOSTRequest({
                    requestUrl: "addBonus",
                    params: this.bonusData,
                });
                if (userDetails) {
                    this.$toastr.s("Bonus added Successfully");
                } else {
                    this.$toastr.e("Bonus Not added");
                }
                this.$bvModal.hide('bonus-modal');
            }
            return false
        },
        // this fun is for to get contract details
        async getContractdetails() {
            var userDetails = await this.genericAPIPOSTRequest({
                requestUrl: "user/getUserDetails",
                params: { "user_id": this.user_id },
            });
            if (userDetails) {
                this.contractDetails.userDetails = userDetails;
            }
            var GetJobDetails = await this.genericAPIPOSTRequest({
                requestUrl: "getJobDetails_new",
                params: {
                    'poid': this.job_id,
                    'user_id': this.$store.state.currentUserData.login_master_id,
                    'data': this.getCurrentUserIdRequest,
                },
            });
            if (GetJobDetails.length > 0) {
                this.contractDetails.jobDetails = GetJobDetails[0];
            } else this.$router.push({ name: "clientDashboard", path: "/client/dashboard" }).href;
            this.getChatlist();
            var getMilestoneData = await this.genericAPIPOSTRequest({
                requestUrl: "getCreatedMilestone",
                params: { "user_id": this.user_id, "job_id": this.contractDetails.jobDetails.jobs_id },
            });
            if (getMilestoneData.milestone.length > 0) {
                this.contractDetails.MilestoneDetails = getMilestoneData.milestone;
                this.contractDetails.proposalDetails = getMilestoneData.proposal;
                this.getRecentfileData();
                var checkmilestonePayment = 0;
                if (getMilestoneData.proposal.application_status == 6) {
                    this.ContractEnded = true;
                } else {
                    this.contractDetails.MilestoneDetails.map((data,index) => {
                        if (data.paymentStatus == 0 && data.milestone_status == 0 && checkmilestonePayment == 0) {
                            if(data.active == 1){
                                var parentIndex = index-1;
                                if(this.contractDetails.MilestoneDetails[parentIndex].paymentStatus == 1 && this.contractDetails.MilestoneDetails[parentIndex].milestone_status == 1 && this.contractDetails.MilestoneDetails[parentIndex].milestone_status == 1){
                                    checkmilestonePayment++;
                                    data.showmileStonebtn = 0;
                                }else if(this.contractDetails.MilestoneDetails[parentIndex].active == 0){
                                    checkmilestonePayment++;
                                    data.showmileStonebtn = 0;
                                }else{
                                    var childIndex = this.contractDetails.MilestoneDetails[parentIndex].submittedWork.length - 1;
                                    if(this.contractDetails.MilestoneDetails[parentIndex].submittedWork.length > 0  && this.contractDetails.MilestoneDetails[parentIndex].submittedWork[childIndex].status == 2){
                                        this.currentpayment_arr = data;
                                        checkmilestonePayment++;
                                        data.showmileStonebtn = 0;
                                    // this.$bvModal.show('payment-modal');
                                    }else{
                                        data.showmileStonebtn = 1;
                                    }
                                }
                            }else{
                                data.showmileStonebtn = 1;
                            }
                        } else {
                            data.showmileStonebtn = 1;
                        }
                    });
                }
            }
            var userJobApply = await this.genericAPIPOSTRequest({
                requestUrl: 'getUser_job_apply',
                params: {
                    'job_id': this.contractDetails.jobDetails.jobs_id,
                    'user_id': this.user_id
                }
            });
            if (userJobApply) {
                this.userJobApply = userJobApply;
            } else this.$router.push({ name: "clientDashboard", path: "/client/dashboard" }).href;

            // var proposalDetails = await this.genericAPIPOSTRequest({
            //     requestUrl: "getProposalDetail",
            //     params: {"user_id":this.user_id,"job_id":this.contractDetails.jobDetails.jobs_id},
            // });
            if (this.contractDetails.proposalDetails) {
                // this.contractDetails.proposalDetails = proposalDetails;
                // if (this.contractDetails.proposalDetails.paymentStatus==1) {
                //     this.$bvModal.show('payment-modal');
                // }
                this.getRecentActivities();

                var jobHistory = await this.genericAPIPOSTRequest({
                    requestUrl: "getJobdataList",
                    params: { "user_id": this.user_id, "filter": 6 },
                });
                if (jobHistory) {
                    this.contractDetails.jobHistory = jobHistory;
                }

                var feedback = await this.genericAPIPOSTRequest({
                    requestUrl: "checkfeedbackRequest",
                    params: { "from_id": this.user_id, "job_id": this.contractDetails.jobDetails.jobs_id },
                });
                if (feedback) {
                    this.feedbackRequest = feedback;
                }

                var checkfeedbackdata;
                // check contract ended by client it self
                if (this.contractDetails.proposalDetails.contract_ended_by == this.contractDetails.proposalDetails.current_user_id) {
                    checkfeedbackdata = {
                        'job_id': this.contractDetails.jobDetails.jobs_id,
                        'from_id': this.user_id,
                    };
                } else {
                    checkfeedbackdata = {
                        'job_id': this.contractDetails.jobDetails.jobs_id,
                    };
                }

                var checkfeedback = await this.genericAPIPOSTRequest({
                    requestUrl: "checkfeedbackGiven",
                    params: checkfeedbackdata,
                });
                if (checkfeedback) {
                    this.contractDetails.checkfeedbackgiven = checkfeedback;
                }

                var feedbackgiven_;
                // check review given or not
                if (this.contractDetails.proposalDetails.contract_ended_by == this.contractDetails.proposalDetails.current_user_id) {
                    // if contract end by client then this is the value of freelancer feedback
                    this.review.freelancerfeedBack = this.contractDetails.checkfeedbackgiven;
                    feedbackgiven_ = {
                        'job_id': this.contractDetails.jobDetails.jobs_id,
                    };
                } else {
                    // if contract end by freelancer then this is the value of client feedback
                    this.review.clientfeedBack = this.contractDetails.checkfeedbackgiven;
                    feedbackgiven_ = {
                        'job_id': this.contractDetails.jobDetails.jobs_id,
                        'from_id': this.user_id,
                    };
                }

                var checkfeedback_ = await this.genericAPIPOSTRequest({
                    requestUrl: "checkfeedbackGiven",
                    params: feedbackgiven_,
                });
                if (checkfeedback_) {
                    // check review given or not
                    if (this.contractDetails.proposalDetails.contract_ended_by == this.contractDetails.proposalDetails.current_user_id) {
                        // if contract end by client then this is the value of client feedback
                        this.review.clientfeedBack = checkfeedback_;
                    } else {
                        // if contract end by freelancer then this is the value of freelancer feedback
                        this.review.freelancerfeedBack = checkfeedback_;
                    }
                }

                // this.getBillings();
            } else {
                this.$router.push({ name: 'ClientContracts', path: 'client/all-contracts' }).href;
            }
        },
        // this fun is for to get recentfile data
        async getRecentfileData(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getRecentFiles",
                params: { "job_application_id": this.contractDetails.proposalDetails.job_application_id},
            });
            if(res){
                this.contractDetails.recentFiles = res;
            }else{
                this.contractDetails.recentFiles = [];
            }
        },
        // this fun is for to get all recent activities
        async getRecentActivities() {
            var recentActivties = await this.genericAPIPOSTRequest({
                requestUrl: "getContractactivities",
                params: { "job_id": this.contractDetails.jobDetails.jobs_id, "job_application": this.contractDetails.proposalDetails.job_application_id },
            });
            if (recentActivties.length > 0) {
                this.contractDetails.recentActivties = recentActivties;
            }
        },
        // this fun is for to close the payment model
        closePaymentModal() {
            // $('#payment-modal').hide();
            this.$bvModal.hide('payment-modal');
        },
        // this fun is for to get created milestone data
        async getCreatedmilsetone(){
            var getMilestoneData = await this.genericAPIPOSTRequest({
                requestUrl: "getCreatedMilestone",
                params: { "user_id": this.user_id, "job_id": this.contractDetails.jobDetails.jobs_id },
            });
            if (getMilestoneData.milestone.length > 0) {
                this.contractDetails.MilestoneDetails = getMilestoneData.milestone;
                this.contractDetails.proposalDetails = getMilestoneData.proposal;
                this.getRecentfileData();
                var checkmilestonePayment = 0;
                if (getMilestoneData.proposal.application_status == 6) {
                    this.ContractEnded = true;
                } else {
                    this.contractDetails.MilestoneDetails.map((data,index) => {
                        if (data.paymentStatus == 0 && data.milestone_status == 0 && checkmilestonePayment == 0) {
                            if(data.active == 1){
                                var parentIndex = index-1;
                                if(this.contractDetails.MilestoneDetails[parentIndex].paymentStatus == 1 && this.contractDetails.MilestoneDetails[parentIndex].milestone_status == 1 && this.contractDetails.MilestoneDetails[parentIndex].milestone_status == 1){
                                    this.currentpayment_arr = data;
                                    checkmilestonePayment++;
                                    data.showmileStonebtn = 0;
                                }else if(this.contractDetails.MilestoneDetails[parentIndex].active == 0){
                                    this.currentpayment_arr = data;
                                    checkmilestonePayment++;
                                    data.showmileStonebtn = 0;
                                }else{
                                    var childIndex = this.contractDetails.MilestoneDetails[parentIndex].submittedWork.length - 1;
                                    if(this.contractDetails.MilestoneDetails[parentIndex].submittedWork.length > 0  && this.contractDetails.MilestoneDetails[parentIndex].submittedWork[childIndex].status == 2){
                                        this.currentpayment_arr = data;
                                        checkmilestonePayment++;
                                        data.showmileStonebtn = 0;
                                    // this.$bvModal.show('payment-modal');
                                    }else{
                                        data.showmileStonebtn = 1;
                                    }
                                }
                            }else{
                                data.showmileStonebtn = 1;
                            }
                        } else {
                            data.showmileStonebtn = 1;
                        }
                    });
                }
            }
        }
    },
}
</script>
<style>
#bonus-modal .input-group .form-control {
    height: 40px;
}

#bonus-modal .input-group-text {
    padding: 7px 12px;
    border-radius: 0.25rem 0 0 0.25rem;
}

#payment-modal .img-wrapper {
    width: 275 !important;
    height: 75px !important;
    border-radius: 50%;
    position: relative;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
    padding: 5px;
}

#payment-modal .img-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.contract-details .nav-tabs {
    border-bottom: 0px;
    margin-left: -32px;
}

.contract-details .nav-tabs .nav-link.active,
.contract-details .nav-tabs .nav-item.show .nav-link {
    color: #ffffff !important;
    background-color: #F2613C !important;
    border-color: #F2613C !important;
    border-radius: 5px;
    padding: 6px 12px;
}

.contract-details .nav-tabs .nav-link {
    color: #F2613C !important;
    background-color: #f2613c26 !important;
    border-color: #F2613C !important;
    border-radius: 5px;
    margin-right: 5px;
    padding: 6px 12px;
}


#payment-modal .modal-body {
    padding: 0px;
}

#payment-modal .img-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 5px;
}

#payment-modal .img-wrapper img {
    width: 100%;
    border-radius: 50%;
}

#payment-modal .pay-method-wrap .custom-control {
    margin-bottom: 0px;
}

#payment-modal .modal-header .close {
    display: block !important;
}

.milestone-timeline-wrap .timeline-container .fa-check:before {
    content: "\f00c";
    top: -0.1rem;
    position: relative;
}

table th {
    background-color: #efefef !important;
    color: #fff;
}
</style>