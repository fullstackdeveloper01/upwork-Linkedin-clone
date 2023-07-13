<template>
    <b-sidebar class="submission-details" id="review-sidebar-modal" :backdrop-variant="'variant'" no-close-on-backdrop  shadow right >
        <b-card-group deck class="p-4">
            <div class="main-body mb-4">
                <h4 class="mb-4 fw-600">Submission details</h4>
                <h5 class="mb-0">Verification of current flow</h5>
                <div class="text-muted mb-4">
                    <i class="fa fa-calander"></i> Due {{reviewWork.dueDates}}
                </div>
                <template v-if="reviewWork.submittedWork.length > 0">
                    <template v-for="(submitWork,index) in reviewWork.submittedWork">
                        <div class="user-msg mt-4" v-if="index <= 2 && !showHideSubmittedWork"  :key="index">
                            
                            <div class="d-flex align-items-normal">
                                <div class="img-wrapper pos-rel">
                                    <img :src="submitWork.profile" alt="" class="rounded-md shadow w-14 h-14">
                                    <span class="online"></span>
                                </div>
                                <div class="ml-3">
                                    <h5 class="fz-18 fw-600 mb-0 mt-3">{{shortName(submitWork.first_name,submitWork.last_name)}}. <span class="text-muted fz-16">{{submitWork.time}}</span></h5>
                                    <!--<p class="fz-14 text-muted mb-0">1 File</p>-->
                                    <h4 class="text-center text-muted fz-14 fw-500">{{submitWork.createdDate}}</h4>
                                </div>
                            </div>
                            <h6 class="fw-600 mb-0 text-black mt-3">Message from {{shortName(submitWork.first_name,submitWork.last_name)}}</h6>
                            <p class="mb-0">{{submitWork.message}}</p>
                            <template v-if="submitWork.attachment.length>0">
                                <b-row>
                                    <b-col xl="6" lg="6" sm="12" v-for="(attr,index) in submitWork.attachment" :key="index">
                                        <div class="file-wrap  mt-3" >
                                            <div class="d-flex align-items-center">
                                                <div class="file-img-holder">
                                                    <i class="fa fa-file text-black" aria-hidden="true"></i>
                                                </div>
                                                <div class="ml-3">
                                                    <h5 class="fz-18 fw-600 mb-0 file-name">{{attr}}</h5>
                                                    <!-- <p class="fz-14 text-muted mb-0">235.56kb</p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </template>
                        </div>
                        <div class="user-msg mt-4" v-if="showHideSubmittedWork"  :key="index">
                            <div class="d-flex align-items-normal">
                                <div class="img-wrapper pos-rel">
                                    <img :src="submitWork.profile" alt="" class="rounded-md shadow w-14 h-14">
                                    <span class="online"></span>
                                </div>
                                <div class="ml-3">
                                    <h5 class="fz-18 fw-600 mb-0 mt-3">{{shortName(submitWork.first_name,submitWork.last_name)}}. <span class="text-muted fz-16">{{submitWork.time}}</span></h5>
                                    <!--<p class="fz-14 text-muted mb-0">1 File</p>-->
                                    <h4 class="text-center text-muted fz-14 fw-500">{{submitWork.createdDate}}</h4>
                                </div>
                            </div>
                            <h6 class="fw-600 mb-0 text-black mt-3">Message from {{shortName(submitWork.first_name,submitWork.last_name)}}</h6>
                            <p class="mb-0">{{submitWork.message}}</p>
                            <template v-if="submitWork.attachment.length>0">
                                <b-row>
                                    <b-col xl="6" lg="6" sm="12" v-for="(attr,index) in submitWork.attachment" :key="index">
                                        <div class="file-wrap  mt-3" >
                                            <div class="d-flex align-items-center">
                                                <div class="file-img-holder">
                                                    <i class="fa fa-file text-black" aria-hidden="true"></i>
                                                </div>
                                                <div class="ml-3">
                                                    <h5 class="fz-18 fw-600 mb-0 file-name">{{attr}}</h5>
                                                    <!-- <p class="fz-14 text-muted mb-0">235.56kb</p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </template>
                        </div>
                    </template>
                    <b-button class="btn btn-outline-theme mt-4" v-if="reviewWork.submittedWork.length > 3" @click="showHideSubmittedWork = !showHideSubmittedWork">{{ (!showHideSubmittedWork) ? 'Show More Work':'Show Less Work'}}</b-button>
                </template>
                
            </div>
            <div class="payment-status">
            <h4 class="mb-4 fw-600">Payment</h4>
            <ul>
                <li class="d-flex align-items-normal">
                    <label>Status</label> 
                    <h6>Payment requested</h6>
                </li>
                <li class="d-flex align-items-normal">
                    <label>Amount in Escrow</label> 
                    <h6>${{reviewWork.amount}} paid from Marketplace Fee for Red ID 5857358597 {{reviewWork.amount}} USD*5.00% = 1.50 ending in USD on May 23</h6>
                </li>
                <li class="d-flex align-items-normal">
                    <label>Original amount</label> 
                    <h6>${{reviewWork.amount}}</h6>
                </li>
                <li class="d-flex align-items-normal" v-if="requestedAmount(reviewWork) > 0">
                    <label>Amount requested</label> 
                    <h6>$ {{ requestedAmount(reviewWork)}}</h6>
                    <!-- {{(reviewWork.request_amount > 0) ? reviewWork.request_amount : reviewWork.amount}} -->
                </li>
            </ul>
            <template v-if="$store.state.accountType == 'client'">
                <h5 class="fz-14 fw-600 text-muteed mb-3" v-if="checkWorkstatuss(reviewWork) == 1">You have 14 days from the submission of work to make a payment or request changes. If neither action is taken by June 6, the {{reviewWork.amount}} held in escrow for this milestine will be automatically released to {{shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}}.</h5>
                <b-button class="btn btn-theme mr-2" v-if="checkWorkstatuss(reviewWork) == 1" v-b-modal.approve-pay-modal @click="updateSubmitWork(reviewWork, 2, '1')">Approve & Pay</b-button>
                <b-button class="btn btn-outline-theme" v-if="checkWorkstatuss(reviewWork) == 1" v-b-modal.request-change-modal @click="updateSubmitWork(reviewWork, 3, '0')">Request Changes</b-button>
                <b-button class="btn btn-outline-theme" v-if="checkWorkstatuss(reviewWork) == 3" v-b-modal.approve-pay-modal @click="updateSubmitWork(reviewWork, 2, '1')">Pay Now</b-button>
                <b-button class="btn btn-outline-theme" v-else-if="reviewWork.paymentStatus == 1 && reviewWork.milestone_status == 0 && checkWorkstatuss(reviewWork) == null" v-b-modal.approve-pay-modal @click="payNowWithoutreq(reviewWork,1)">Pay Now</b-button>

            </template>
            </div>
        </b-card-group>
        <!-- // this is approve & pay model -->
        <ApprovePay :reviewWork="reviewWork" :updateSubmitData="updateSubmitData" @controlparent="controlparent"  />
        <!-- this is for to request for rework -->
        <RequestChange :updateSubmitData="updateSubmitData" @controlparent="controlparent" :contractDetails="contractDetails" />
    </b-sidebar>
</template>
<script>

import { mapActions } from "vuex";
import ApprovePay from './ApprovePay.vue'
import RequestChange from'./RequestChange.vue';

export default {
    props:["reviewWork","contractDetails"], 
    data() {
        return {
            showHideSubmittedWork:false,
            updateSubmitData:{
                m_attach_id: '',
                status: '',
                user_id: '',
                milestone_status: ''
            },
        };
    },
    components: {
        ApprovePay,
        RequestChange,
    },
    computed: {
        
    },
    mounted() {
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to update payment without requested
        async payNowWithoutreq(_i,_e) {
            this.updateSubmitData.m_attach_id       = 0;
            this.updateSubmitData.milestone_id      = _i.job_milestone_id;
            this.updateSubmitData.user_id           = this.decodeId(this.$route.params.uid);
            this.updateSubmitData.milestone_status  = _e;
        },
        // this fun is for to check submitted work status
        checkWorkstatuss(_v){
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
        // this fun is for to update submitwork 
        async updateSubmitWork(_i, _v, _e) {
            var index = _i.submittedWork.length-1;
            this.updateSubmitData.m_attach_id       = _i.submittedWork[index].m_attach_id;
            this.updateSubmitData.milestone_id      = _i.submittedWork[index].milestone_id;
            this.updateSubmitData.status            = _v;
            this.updateSubmitData.user_id           = this.decodeId(this.$route.params.uid);
            this.updateSubmitData.milestone_status  = _e;
        },
        // //this fun is for to control child function
        controlparent(){
            this.$emit("controlparent");
            this.updateSubmitData = {
                m_attach_id: '',
                status: '',
                user_id: '',
                milestone_status: ''
            };
        },
        // this fun is for to show requested amount
        requestedAmount(_v = null) {
            var amount = 0;
            if(_v != null){
                if (_v.submittedWork.length > 0) {
                    var index = _v.submittedWork.length - 1;
                    amount = _v.submittedWork[index].other_amount
                }else{
                    amount = 0;
                }
            }
            return amount;
        },
    },
};
</script>