<template>
  <b-container>
    <b-row class="mt-100 freelancer-wrap mb-50 offer-wrap">
      <b-col cols="12" class="text-center">
        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto mb-4">
          <circle cx="50.1072" cy="50.8887" r="50" fill="#F2613C"/>
          <g clip-path="url(#clip0_4105_21319)">
          <path d="M67.7139 33.4102H64.7842V36.3398H67.7139V33.4102Z" fill="white"/>
          <path d="M35.6176 33.4102H32.6879V36.3398H35.6176V33.4102Z" fill="white"/>
          <path d="M75.1951 40.0774L73.1235 38.0059L66.2609 44.8685H56.8741V60.4012L50.2743 56.375L43.5278 60.3573V44.8685H34.141L27.2784 38.0059L25.2068 40.0774L32.0694 46.94V75.5H68.3325V46.94L75.1951 40.0774Z" fill="white"/>
          <path d="M46.4575 55.2267L50.2991 52.9591L53.9444 55.1829V44.8691H46.4575V55.2267Z" fill="white"/>
          <path d="M47.232 39.143L56.4174 25.6914H53.1699L43.9843 39.143H47.232Z" fill="white"/>
          <path d="M51.5557 35.589C51.5557 37.9911 53.093 39.3362 55.13 39.3362C57.1671 39.3362 58.7044 37.9911 58.7044 35.589C58.7044 33.2062 57.1671 31.8418 55.13 31.8418C53.093 31.8418 51.5557 33.2061 51.5557 35.589ZM55.9755 35.589C55.9755 36.8766 55.5528 37.2608 55.13 37.2608C54.7073 37.2608 54.2845 36.8766 54.2845 35.589C54.2845 34.3015 54.7073 33.9172 55.13 33.9172C55.5528 33.9172 55.9755 34.3015 55.9755 35.589Z" fill="white"/>
          <path d="M45.2719 32.9944C47.3089 32.9944 48.8463 31.6492 48.8463 29.2472C48.8463 26.8644 47.309 25.5 45.2719 25.5C43.2349 25.5 41.6976 26.8644 41.6976 29.2472C41.6976 31.6493 43.2349 32.9944 45.2719 32.9944ZM45.2719 27.5754C45.6947 27.5754 46.1175 27.9597 46.1175 29.2472C46.1175 30.5348 45.6947 30.919 45.2719 30.919C44.8492 30.919 44.4264 30.5347 44.4264 29.2472C44.4263 27.9598 44.8491 27.5754 45.2719 27.5754Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_4105_21319">
          <rect width="50" height="50" fill="white" transform="translate(25.2009 25.5)"/>
          </clipPath>
          </defs>
        </svg>
        <h4 class="fz-34 fw-600 text-black">{{offerData.userDetails.first_name+' '+offerData.userDetails.last_name}}, you received an offer!</h4>
        <p class="fz-18 fw-400 text-muted">Review the contract terms for your fixed-price offer from Fides Engineering</p>
      </b-col>
      <b-col cols="12" class="mb-3">
        <template>
          <b-card-group deck>
            <b-card class="p-0 bg-white">
              <b-row>
                <b-col lg="9" md="12" class="pt-0">
                  <div class="bordered-right py-5 px-5">
                    <h4 class="text-black fw-600 fz-24 mb-5">Job for {{offerData.userDetails.first_name}}</h4>
                    <b-list-group>
                      <b-list-group-item v-for="(milestone, index) in offerData.milestone " :key="index" class="d-flex justify-content-between align-items-center border-none py-2 px-0">
                        <h4 class="text-black fz-18 fw-600">
                          {{milestone.description}} <br> 
                          <p class="text-muted fz-16 fw-400">( {{milestone.dueDates}} )</p>
                        </h4>
                        <span class="text-black fz-20 fw-600">${{milestone.amount}}</span>
                      </b-list-group-item>
                      <hr>
                      <b-list-group-item class="d-flex justify-content-between align-items-center border-none py-2 px-0">
                        <h4 class="text-black fz-18 fw-600">
                          Qapin Service Fee <br> 
                          <p class="text-muted fz-18 fw-400">( Learn more about service fee )</p>
                        </h4>
                        <span class="text-black fz-20 fw-600">-${{serviceFee}}</span>
                      </b-list-group-item>
                    </b-list-group>
                  </div>
                </b-col>
                <b-col lg="3" md="12" class="p-0">
                  <div class="py-5 px-5">
                    <div class="d-flex align-items-center py-4 px-4">
                      <div class="mr-2">
                        <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <rect x="0.817871" width="90" height="90" rx="44.6571" fill="url(#pattern0)"/>
                          <defs>
                          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_3055_22088" transform="scale(0.00444444)"/>
                          </pattern>
                          <image id="image0_3055_22088" width="225" height="225" :href="offerData.jobDetails.profile_picture_path"/>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <b-card-text class="text-black fz-18 fw-600 mb-2">{{offerData.jobDetails.first_name+' '+offerData.jobDetails.last_name}}</b-card-text>
                        <b-card-text class="text-muted fz-16">Client</b-card-text>
                        <b-card-text class="text-muted fz-16">{{offerData.jobDetails.job_title}}</b-card-text>
                      </div>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-outline-theme m-auto text-center" @click="$router.push({'name':'chat','path':'/chat',query: {chatroom: encodedid(JSON.stringify(chatroomId))}})">Chat with {{offerData.jobDetails.first_name+' '+offerData.jobDetails.last_name}}</button>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>  
        </template>
      </b-col>
      <b-col cols="12" class="mb-3">
        <template>
          <b-card-group deck>
            <b-card class="p-0 bg-white">
              <b-row>
                <b-col lg="12" md="12" class="pt-0">
                  <div class="bordered-right py-5 px-5">
                    <b-list-group>
                      <b-list-group-item class="d-flex justify-content-between align-items-center border-none py-2 px-0 pb-5">
                        <div>
                          <p class="text-muted fz-18 fw-400 mb-4">Expected Amount You’ll Receive</p>
                          <h4 class="text-black fz-18 fw-400">
                            Verification of the website check the files and suitable <br> disk space need avoid damage of files etc
                          </h4>
                        </div>
                        <div>
                          <span class="text-black fz-20 fw-600">${{totalAmount - serviceFee}}</span><br>
                          <span class="text-muted fz-18 fw-400" v-if="offerData.milestone.length > 0">The First milestone has been funded (${{offerData.milestone[0].amount}})</span>
                        </div>
                      </b-list-group-item>

                      <b-list-group-item class="border-none py-2 px-0" v-if="offerData.jobDetails.attachmentName!=''">
                        <div>
                          <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="offerData.jobDetails.attachment" style="padding: 6px 0px;">
                            <template v-for="(attc, index) in offerData.jobDetails.attachment">
                              <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                                <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                <a :href="offerData.jobDetails.attachmentUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                              </li>
                            </template>
                          </ul>
                        </div>
                      </b-list-group-item>
                    </b-list-group>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>  
        </template>
      </b-col>
      <b-col cols="12" class="mb-3">
        <div class="border-none py-0 px-0 d-flex align-items-center justify-content-space-between">
          <p class="text-black fz-18 fw-400">Once you accept, you can begin working right away.</p>
          <p class="text-muted fz-18 fw-400">This offer expires {{offerData.proposal.offer_expire}}</p>
        </div>
        <button type="button" class="btn btn-theme mr-2" v-b-modal.modal-acceptOffer >Accept Offer</button>
        <button type="button" class="btn btn-theme mr-2" v-b-modal.decline-modal >Decline Offer</button>
      </b-col>
    </b-row>
    <!-- model for confirm reject -->
    <b-modal id="modal-rejectOffer" title="Reject Offer" centered hide-footer size="md" no-close-on-backdrop> 
        <template>
          <div class="p-5 text-center m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            <h5 class="mt-4">Are you sure, Want to Decline this Offer?</h5>
          </div>
          <hr>
          <div>
              <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-rejectOffer')">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="updateOffer('reject',8)">Confirm</b-button>
              </div>
          </div>
        </template>
    </b-modal>
    <!-- model for Accept offer -->
    <b-modal id="modal-acceptOffer" title="Accept Offer" centered hide-footer size="md" no-close-on-backdrop> 
        <template>
          <div class="p-5 text-center m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#F2613C" class="bi bi-envelope-check m-auto" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
            </svg>
            <h5 class="mt-4">Are you sure, Want to Accept this Offer?</h5>
          </div>
          <hr>
          <div>
              <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-acceptOffer')">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="updateOffer('accept',2)">Confirm</b-button>
              </div>
          </div>
        </template>
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
            ></b-form-textarea>
            <hr>
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
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  export default {
    mixins: [validationMixin],
    validations: {
      addDecline:{
          decline_reason_id: {required},
      },
    },
    data() {
      return {
        job_id:'',
        user_id:'',
        chatroomId:'',
        offerData:{
          userDetails:'',
          jobDetails:'',
          milestone:[],
          proposal:'',
        },
        declineReason:[],
        addDecline:{
            decline_reason_id: '',
            decline_reason: '',
            application_status:8,
            decline_by:'',
        },
      }
    },
    methods:{
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for to add flag on user
      async submitDeclineData(){
        this.$v.addDecline.$touch();
        if (!this.$v.addDecline.$invalid) {
            this.addDecline.user_id = this.offerData.userDetails.user_id;
            this.addDecline.decline_by = this.offerData.userDetails.user_id;
            this.addDecline.jobs_id = this.offerData.jobDetails.jobs_id;
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "updateJobApply",
                params: this.addDecline
            });
            if(res){
              this.$toastr.s('Offer Decline Successfully');
              this.$bvModal.hide('decline-modal');
              this.$router.push({path:'freelancer/my-proposals',name:'myProposals'});       
            }
        }
      },
      //this fun is for to get flagging reason
      async getdeclineReason(){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "getdeclineReason",
          params: {'type':'freelancer'}
        });
        if(res){
            this.declineReason  =res;
        }
      },
      // this  fun is for to acceptor reject offer
      async updateOffer(_s,_v){
        await this.genericAPIPOSTRequest({
          requestUrl: "job/addHire",
          params: { "jobData": {
            user_id:this.user_id,
            jobs_id:this.offerData.jobDetails.jobs_id,
          }, "action": _v }
        });
        if(_s == "accept"){

          this.$toastr.s('Offer Accepted Successfully');
          this.$bvModal.hide('modal-acceptOffer');          
        }else{
          this.$toastr.s('Offer Decline Successfully');
          this.$bvModal.hide('modal-rejectOffer');
        }
        this.$router.push({path:'freelancer/all-contracts',name:'myProposals'});
      },
      // this fun is for to get offer data
      async getOfferdata(){
        var getUserdetails = await this.genericAPIPOSTRequest({
              requestUrl: "user/getUserDetails",
              params: {'user_id':this.user_id},
          });
        if (getUserdetails!="") {
          this.offerData.userDetails = getUserdetails;
        }

        var getPostedData = await this.genericAPIPOSTRequest({
              requestUrl: "getJobDetails_new",
              params: {'poid':this.job_id},
          });
        if (getPostedData.length > 0 ) {
          this.offerData.jobDetails= getPostedData[0];
        }

        var getMilestoneData = await this.genericAPIPOSTRequest({
              requestUrl: "getCreatedMilestone",
              params: {
                "job_id": this.offerData.jobDetails.jobs_id,
                "user_id": this.user_id
              },
          });
        if (getMilestoneData.milestone.length > 0 ) {
          this.offerData.milestone = getMilestoneData.milestone;
          this.offerData.proposal = getMilestoneData.proposal;
        }
        // this fun is for to get user chat
        this.getChatlist();
      },
        // this fun is for to get user chat
      async getChatlist(){
          var  param={};
          if(this.$store.state.accountType == 'freelancer'){
              param={'user_id':this.user_id,'client_id':this.offerData.jobDetails.client_id, 'job_id': this.offerData.jobDetails.jobs_id,'userType': this.$store.state.accountType};
          }else{
              param={'user_id':this.user_id,'agency_id':this.offerData.proposal.agency_id,'client_id':this.offerData.jobDetails.client_id, 'job_id': this.offerData.jobDetails.jobs_id,'userType': this.$store.state.accountType};
          }
          var res = await this.genericAPIPOSTRequest({
              requestUrl:'getchatroom',
              params: param,
          });
          if (res.length > 0) {
              this.chatroomId = res[0]; 
          }
      },
    },
    mounted(){
      if(this.$route.params.pid!="" && this.$route.params.uid!=""){
        this.job_id = this.$route.params.pid;
        this.user_id = this.decodeId(this.$route.params.uid);
        // this fun is for to get offer data
        this.getOfferdata();
        //this fun is for to get decline reason
        this.getdeclineReason();
      }else{
        this.$router.push('freelancer/my-proposals');
      }
    },
    computed:{
      // this fun is for to calculate total amount
      totalAmount(){
        var sumamount = 0;
        this.offerData.milestone.filter(data=>{
          sumamount += parseInt(data.amount);
        });
        return sumamount;
      },
      // this fun is for to calculate total service fees
      serviceFee(){
        let sum = parseInt(0)
        sum = (this.totalAmount*20) / 100;
        return sum;
      },
      // this fun is for to calculate first milstone amount 
      firstMilestone(){
        var cost = 0;
        var actualcost = 0;
        this.offerData.milestone.filter((data,index)=>{
          if(index == 0){
            actualcost = data.amount;
          }
        });
        var serviceFee =(actualcost*20) / 100 ;
        cost = (actualcost-serviceFee);
        return cost;
      },
      declineReason_id() {
          const errors = []
          if (!this.$v.addDecline.decline_reason_id.$dirty) return errors 
          !this.$v.addDecline.decline_reason_id.required && errors.push('Please Select Reason is required')
          return errors
      },
    }
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
  .bordered-right{border-right: 1px solid #EBEBEB;}
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .freelancer-wrap .nav-pills .nav-link.active, .nav-pills .show > .nav-link{background-color:#fff!important;color:#F2613B!important;font-weight:600;border-bottom: 3px solid #f2613b;border-radius: 0px;}
  .freelancer-wrap .nav-pills .badge{border-radius: 50%;padding: 8px 7px;background-color:#eee;color:#000;}
  .freelancer-wrap .nav-pills .nav-link{color:#999999;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link:hover{color:#F2613B!important;;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link.active .badge, .nav-pills .show > .nav-link .badge{background-color: #F2613B!important;border-radius: 50%;font-size: 10px!important;padding: 7px 6px;color:#fff!important;}
  .freelancer-wrap .br-50{border-radius:50%!important;}
  .freelancer-wrap .fz-14{font-size:14px;}
  .freelancer-wrap .card{border-radius: 20px!important;}
  .freelancer-wrap .card-body{border-radius: 20px;}
  .freelancer-wrap .card-body{border-radius:0 0 20px 20px;}
  .freelancer-wrap .card-header{border-radius:20px 20px 0 0!important;}
  .freelancer-wrap .my-proposal ul{margin-left:-32px;}
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fz-24{font-size:24px;}
  .fw-600{font-weight:600;}
  .mb-23{margin-bottom:23px;}
  .no-bottom-border{border-bottom:0px!important;}
  .border-top-0{border-top:0px!important;}
  .fz-34{font-size:34px;}
  .offer-wrap .card-body{padding:0px;}
  .mb-50{margin-bottom:50px!important;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  hr {margin: 1rem 0!important;}  
  .fz-30{font-size:26px!important;}
</style>
