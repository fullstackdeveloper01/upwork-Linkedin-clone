<template>
  <div class="container">
    <b-row class="mt-100 freelancer-wrap freelancer-job-detail proposal-details">
      <b-col>
        <h4 class="mb-5 fz-30 fw-500 text-black"><b>Submitted a Proposal</b></h4>
        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>{{jobDetailsWithClientData.jobDetails.job_title}}</b></h4>
            </template>
            <b-row>
              <b-col cols="12" class="p-0">
                <div class="bordered">
                  <div class="d-md-flex align-items-center py-4 px-4">
                    <div>
                      <b-card-text class="text-theme fz-16 fw-600 mb-23 mb-sm-0">{{jobDetailsWithClientData.jobDetails.quality_inspector}}</b-card-text>
                      <b-card-text class="text-muted fz-14 mb-0 mt-sm-2">Posted {{jobDetailsWithClientData.jobDetails.time}}</b-card-text>
                    </div>
                    <b-card-text class="ml-auto ml-1 d-flex align-items-center mb-0">
                      <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 5.28027C8.37764 5.28027 5.40918 8.40136 5.40918 12.2748C5.40918 14.3585 6.46842 16.8771 8.23787 19.6617C8.85278 20.6294 9.51552 21.5658 10.1854 22.4404C10.6054 22.9889 10.952 23.4148 11.1785 23.6801C11.6242 24.202 12.3759 24.2018 12.8214 23.68C13.0479 23.4148 13.3945 22.9889 13.8145 22.4404C14.4844 21.5658 15.1471 20.6294 15.762 19.6617C17.5315 16.8771 18.5907 14.3585 18.5907 12.2748C18.5906 8.40135 15.6222 5.28027 11.9999 5.28027ZM9.18859 18.847C7.55932 16.283 6.59072 13.9799 6.59072 12.2748C6.59072 9.19124 9.00544 6.65236 11.9999 6.65236C14.9944 6.65236 17.4091 9.19123 17.4092 12.2748C17.4092 13.9799 16.4406 16.283 14.8113 18.847C13.7963 20.4444 12.7477 21.8156 11.9999 22.6934C11.2521 21.8155 10.2036 20.4443 9.18859 18.847ZM12 14.7608C10.7673 14.7608 9.77138 13.5702 9.77138 12.1142C9.77138 10.6582 10.7673 9.4677 12 9.4677C13.2326 9.4677 14.2285 10.6582 14.2285 12.1142C14.2285 13.5703 13.2326 14.7608 12 14.7608ZM12 13.5663C12.6578 13.5663 13.1999 12.9182 13.1999 12.1142C13.1999 11.3103 12.6578 10.6621 12 10.6621C11.3421 10.6621 10.7999 11.3103 10.7999 12.1142C10.7999 12.9182 11.3421 13.5663 12 13.5663Z" fill="#999999"/>
                      </svg>
                      {{jobDetailsWithClientData.jobDetails.country_name+', '+jobDetailsWithClientData.jobDetails.state_name+', '+jobDetailsWithClientData.jobDetails.city_name}}
                    </b-card-text>
                  </div>
                </div>
              </b-col>
              <b-col xl="9" lg="9" sm="12" class="p-0">
                <div class="bordered p-4 no-bottom-border about-client sm-pb-0">
                  <!-- <vue-read-more-smooth :lines="3" class="mt-2"> -->

                        
                  <b-card-text class="text-muted fz-16 mb-3" v-if="jobDetailsWithClientData.jobDetails!=''">
                    <read-more more-str="Read more" :text="jobDetailsWithClientData.jobDetails.scope_of_work" link="#" less-str="Read less" :max-chars="250"></read-more>
                  </b-card-text>
                  <!-- </vue-read-more-smooth> -->
                  <a :href="$router.resolve({name: $store.state.accountType+'jobDetails',  path:$store.state.accountType+'/job-details', query: {jobDetailsWithClientData: jobDetailsWithClientData.jobDetails.jobs_id}}).href" class="btn btn-theme mb-3 mt-3">View Job Post</a>

                  <h5 class="fz-18 fw-600 mb-3">Skills</h5> 
                  <ul class="align-items-center fz-14 post tags mb-4 inline-block">
                    <li class="mr-1 align-items-center inline-flex" v-for="(skill,ids) in jobDetailsWithClientData.jobDetails.skill_name" :key="ids"> {{skill}}</li>
                  </ul>
                </div>
              </b-col>
              <b-col class="p-0" xl="3" lg="3" sm="12">
                <div class="bordered py-4 px-4 no-bottom-border about-wrapper">
                  <h5 class="fz-18 fw-600">About the client</h5>
                  <div class="star-rating mb-3">
                    <label for="5-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 1)?'active':''">&#9733;</label>
                    <label for="4-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 2)?'active':''">&#9733;</label>
                    <label for="3-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 3)?'active':''">&#9733;</label>
                    <label for="2-stars" class="star " :class="(jobDetailsWithClientData.clientrating.rating >= 4)?'active':''">&#9733;</label>
                    <label for="1-star" class="star" :class="(jobDetailsWithClientData.clientrating.rating == 5)?'active':''">&#9733;</label>
                  </div>
                  <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.nationality}}</h5>
                  <!-- <p class="r-about fz-16">Suzhou 2:47 am</p> -->

                  <h5 class="fz-18 fw-600">{{jobDetailsWithClientData.clientFullDetails.postedJob}} Jobs Posted</h5>
                  <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hireRate}}% Hire Rate, {{jobDetailsWithClientData.clientFullDetails.openJob}} Open Jobs</p>

                  <h5 class="fz-18 fw-600">${{changeAmountvalue(jobDetailsWithClientData.clientFullDetails.totalSpent)}} Total Spent</h5>
                  <p class="r-about fz-16">{{jobDetailsWithClientData.clientFullDetails.hired}} {{(jobDetailsWithClientData.clientFullDetails.hired > 0)?"Hire's":'Hire'}}</p>

                  <p class="r-about fz-16">Member Since {{jobDetailsWithClientData.clientFullDetails.member_since}} </p>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>                   
      </b-col>
    </b-row>
    <b-form @submit.prevent="submitProposal">
      <b-row class="mt-50 freelancer-wrap freelancer-job-detail">
        <b-col>
          <b-card-group deck>
            <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
              <template  #header>
                <div class="d-md-flex align-items-center">
                  <h4 class="mb-0 fz-24 fw-500 text-black"><b>Withdraw Proposals</b></h4>
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
                      <b-card-text class="text-muted fz-14 mb-0">{{jobDetailsWithClientData.jobDetails.budget}} {{(jobDetailsWithClientData.jobDetails.budget_type == 'A')?'Per Day':'Per Month'}}</b-card-text>
                      
                    </div>
                  </div>
                </div>
              </template>
              <b-row>
                <b-col cols="12" class="p-0">

                  <div class="bordered p-4">
                    <b-row>
                      <b-col xl="1" lg="1" sm="1">
                        <h5 class="fz-16 fw-600 text-black mb-0">S.no</h5>
                      </b-col>
                      <b-col xl="6" lg="6" sm="6">
                        <h5 class="fz-16 fw-600 text-black mb-0">Description</h5>
                      </b-col>
                      <b-col xl="2" lg="2" sm="2" class="text-right text-sm-left">
                        <h5 class="fz-16 fw-600 text-black mb-0">Due</h5>
                      </b-col>
                      <b-col xl="2" lg="2" sm="2" class="text-right text-sm-left">
                        <h5 class="fz-16 fw-600 text-black mb-0">Amount</h5>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="p-0">
                  <div class="bordered p-4" v-for="(proposal,id) in $v.proposal.$each.$iter" :key="id">
                    <b-row>
                      <b-col xl="1" lg="1" sm="1">
                        <h5 class="fz-16 fw-600 text-black">{{parseInt(id)+1}}</h5>
                      </b-col>
                      <b-col xl="6" lg="6" sm="6">
                        <p class="fz-16 fw-600 text-black" v-if="!showInput">{{proposal.description.$model}}</p>
                        <span v-else>
                          <textarea class="form-control"  v-model.trim="proposal.description.$model"></textarea>
                          <div class="error"  v-if="!proposal.description.required">Description is required.</div>
                          <div class="error"  v-if="!proposal.description.maxLength ">Maximum 200 Charachter Allow Required.</div>
                        </span>
                      </b-col>
                      <b-col xl="2" lg="2" sm="2" class="px-2 text-right text-sm-left">
                        <p class="fz-16 fw-600 text-muteed" v-if="!showInput">{{proposal.dueDates.$model}}</p>
                        <span v-else>
                          <b-form-datepicker  v-model.trim="proposal.dueDate.$model" :min="mindate" class="mb-2"></b-form-datepicker>
                          <div class="error"  v-if="!proposal.dueDate.required">Due Date is required.</div>
                        </span>
                        
                      </b-col>
                      <b-col xl="2" lg="2" sm="2" class="px-2 text-right text-sm-left">
                        <p class="fz-16 fw-600 text-muteed" v-if="!showInput">${{proposal.amount.$model}}</p>
                        <span v-else>
                          <b-form-input
                          id="input-1" 
                          maxlength="5"
                          minlength="1"
                          oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"
                          v-model.trim="proposal.amount.$model" 
                          autocomplete="nope" 
                          onselectstart="return false" 
                          onpaste="return false" 
                          onCopy="return false" 
                          onCut="return false" 
                          onDrag="return false" 
                          onDrop="return false" ></b-form-input>
                          <div class="error"  v-if="!proposal.amount.required">Minimum $5 is required.</div>
                          <div class="error"  v-if="!proposal.amount.between">Minimum $5 & Maximum $50000 is Allow.</div>
                        </span>
                      </b-col>
                      <b-col xl="1" lg="1" md="1" sm="1" class="px-4 text-right" v-if="showInput">
                        <button type="button" class=" btn btn-theme mr-4 btn-secondary" v-if="id == 0 && editMilstoneData != 'project'" v-on:click="addMilestone() ; $v.$reset();">Add</button>
                        <button type="button" class=" btn btn-theme mr-4 btn-secondary" v-if="id > 0" v-on:click="removeMilestone(id)">Remove</button>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col cols="12" class="p-0">
                  <div class="bordered no-bottom-border">
                    <table class="table w-100">
                      <tr class="no-border border-top-0">
                        <td class="pt-4 pb-2 px-4">
                          <h5 class="fz-18 fw-600 no-border p-0">Total Price of Project</h5>
                          <p class="fz-16 fw-400 text-muted no-border p-0 mb-2">This includes all milestones, and is the amount your client will see.</p>
                          <p class="fz-16 fw-400 text-theme mb-0 no-border p-0">$<span id="total_amount">{{totalAmount}}</span></p>
                        </td>
                      </tr>
                      <tr style="border-top: 1px solid #EBEBEB!important;">
                        <td class="pt-1 pb-2 px-4">
                          <h5 class="fz-18 fw-600 no-border mb-0 p-0 mt-2">Qapin Service Fee</h5>
                          <a href="javascript:void(0);" class="fz-16 fw-400 text-muted no-border p-0 mb-2">Learn more about service fee</a>
                          <p class="fz-16 fw-400 text-theme mb-0 no-border p-0">${{serviceFee}}</p>
                        </td>
                      </tr>
                      <tr style="border-top: 1px solid #EBEBEB!important;">
                        <td class="pt-1 pb-2 px-4">
                          <h5 class="fz-18 fw-600 no-border mb-0 p-0 mt-2">You’ll Receive</h5>
                          <p class="fz-16 fw-400 text-muted no-border p-0 mb-2">The estimated payment, after service fees</p>
                          <p class="fz-16 fw-400 text-theme mb-0 no-border p-0">${{totalAmount-serviceFee}}</p>
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
      <div v-if="checkMilstoneAnyUpdate==0 && jobApplicationData.application_status == 1">
        <a class="btn btn-theme mr-4" v-on:click="editMilstone()" v-if="!showInput">Change Terms</a>
        <b-button class="btn btn-theme mr-4" type="submit" :disabled="btndisabled"  v-else>Update</b-button>
        <b-button class="btn btn-outline-theme mr-4 mt-4 mb-4" v-b-modal.withdraw v-if="!showInput">Withdraw Proposal</b-button>
        <b-button class="btn btn-outline-theme mr-4 mt-4 mb-4" v-else v-on:click="cancelUpdate()">Cancel</b-button>
      </div>
      
      <b-row class="mt-50 freelancer-wrap freelancer-job-detail" v-if="jobApplicationData.question !=''">
        <b-col class="pt-0">
          <b-card-group deck>
            <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
              <b-row>
                <b-col cols="12" class="py-4">
                  <div class="p-4">
                    <h5 class="fw-500 fz-24 mb-4 text-black"><b>Questions</b></h5>
                    <span v-for="(ques,id) in jobApplicationData.question" :key="id">
                    <h6 class="fz-16 fw-400 mb-2">{{id+1}}. {{ques.text}}</h6> 
                    <p class="fz-16 fw-400 mb-2"><i class="fa fa-angle-double-right"></i>  {{ques.answer}}</p> 
                    </span>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
      <b-row class="mt-2 mb-50 freelancer-wrap">
        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black" style="text-transform:uppercase;"><b>Cover Letter</b></h4>
            </template>
            <b-row v-if="jobApplicationData!=''">
              <b-col cols="12" class="p-0">
                <div class="">
                  <div class="py-4 px-4 pre-formatted-cover">
                    <div>
                      <b-card-text class="fz-16 fw-600 mb-23  ">
                        <!-- <vue-read-more-smooth :lines="3" class="mt-2">
                          <span class="fz-16 text-muted">{{jobApplicationData.cover_letter}}</span>
                        </vue-read-more-smooth> -->
                        <read-more more-str="Read more" :text="jobApplicationData.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more>
                        </b-card-text>
                      <div class="py-4 px-0" v-if="jobApplicationData.attachment!=''">
                        <h4 class="fz-18 fw-600 text-black">Attachment</h4>
                        <div class="d-flex align-items-center">
                          <ul  class="ml-2 mt-4 attachment "  v-if="jobApplicationData.attachment.length > 0" >
                            <template v-for="(attc, index) in jobApplicationData.attachment">
                              <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                                  <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                  <a :href="jobApplicationData.attachmentwithUrl+'/'+attc" target="_blank"><span class="ml-2 text-theme">{{attc}}</span></a>
                              </li>
                            </template>
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>                   
      </b-row>
    </b-form>
    <!-- modal for witdraw proposal -->
    <b-modal id="withdraw" size="lg" title="Withdraw Proposal" hide-footer centered>
        <p class="fz-16 fw-500 text-muted">We will politely notify the client that you are noty interested. The client will be able to view the reason you've withdrawn the proposal.</p>
        <h4 class="fz-18 text-black fw-600">Reason</h4>
        <b-form-group
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox
            v-for="option in options"
            v-model="withdrawData.reason"
            :key="option.value"
            :value="option.value"
            :aria-describedby="ariaDescribedby"
            name="flavour-3a"
            class="fz-16 fw-600"
          >
            {{ option.text }}
          </b-form-checkbox>
        </b-form-group>
        <h4 class="fz-18 text-black fw-600 mt-2 mb-0">Message</h4>
        <span class="fz-14 fw-500 text-muted">Add an optional message to share with the client when we notify them that this proposal has been withdrawn.</span>
        <b-form-textarea
          id="textarea"
          v-model="withdrawData.message"
          placeholder="Message here..."
          rows="3"
          max-rows="6" class="mt-2"
        ></b-form-textarea>
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          class="mt-2"
          v-model="withdrawData.block"
        >
          Block future invitations from this client.
        </b-form-checkbox>
        <div class="flex items-center justify-end space-x-2">
          <button
            class="text-theme"
            block
            @click="$bvModal.hide('withdraw')"
          >
            Cancel
          </button>
          <button type="button"
            class="w-40 btn btn-theme" v-on:click="withDrawProposal()"
          >
            Withdraw Proposal
          </button>
        </div>
    </b-modal>
  </div>
</template>
<script>
// import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, maxLength, between } from 'vuelidate/lib/validators'
import { mapActions } from "vuex";
// import VueReadMoreSmooth from "vue-read-more-smooth";
// let base_url = "http://qapin_mvp5.manageprojects.in/";
  export default {
    components: {
      // VueReadMoreSmooth
    },
    mixins: [validationMixin],
    validations: { 
        proposal: {
          $each: {
            description:{ 
              required,
              maxLength: maxLength(200),
            },
            amount:{ 
              required,
              maxLength: maxLength(5),
              between:between(5 ,50000),
              
            },
            dueDate:{ required },
            dueDates:{},
          },
        },
    },
    data: () => ({
      mindate:new Date().toISOString().substr(0, 10),
      options: [
          { text: 'Applied by mistake', value: 'Applied by mistake' },
          { text: 'Rate too low', value: 'Rate too low' },
          { text: 'Scheduling conflict with client', value: 'Scheduling conflict with client' },
          { text: 'Unresponsive client', value: 'Unresponsive client' },
          { text: 'Inappropriate client behaviour', value: 'Inappropriate client behaviour' },
          { text: 'Other', value: 'Other' },
        ],
      drawer: false,
      group: null,
      user_id:'',
      job_id:'',
      jobDetailsWithClientData:{
        jobDetails:'',
        clientJobsData : '',
        clientFullDetails : '',
        clientrating : '',
      },
      proposal:[],
      paidType:'',
      paidTypeStatus: '',
      milestoneBtn:false,
      jobApplicationData:'',
      editMilstoneData:'',
      showInput:false,
      withdrawData:{
        jobs_id:'',
        reason:'',
        message:'',
        block:''
      },
      btndisabled:false,
    }),
    computed:{
      
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
      // this fun is for to calculate total service fees
      serviceFee(){
        let sum = parseInt(0)
        sum = (this.totalAmount*20) / 100;
        return sum;
      },
      descriptionError() {
        const errors = []
        if (!this.$v.proposal.description.$dirty) return errors
        !this.$v.proposal.description.required && errors.push('Description is required')
        return errors
      },
      
      checkMilstoneAnyUpdate(){
        var sum=0;
        this.proposal.map((item) => {
          if(item["acceptStatus"] > 0){
            sum++;
          }
        });
        return sum;
      },
    },
    methods:{
      ...mapActions(["genericAPIPOSTRequest"]),

       // this function id for to update milestones
      async withDrawProposal(){
        var error = 0;
        
        if( this.withdrawData.reason == '' || this.withdrawData.message == '' ){
          this.$toastr.e('Please Fill All Inputs');
          error++;
        }
        if (error == 0) {
          var withdraw = await this.genericAPIPOSTRequest({
              requestUrl: "job/withdrawProposal",
              params: {
                "reason": this.withdrawData.reason,
                "message": this.withdrawData.message,
                "jobs_id": this.job_id,
                "block_id": (this.withdrawData.block == true)? this.jobDetailsWithClientData.jobDetails.user_id:'',
                "status": 5,
              },
          });
          if(withdraw){
            this.$toastr.s('Proposal Withdraw successfull');
            this.$router.push({
              name: 'myProposals',
              path:'/freelancer/my-proposals',
            });
          }else{
            this.$toastr.e('Proposal Withdraw Unsuccessfull');
          }
          // var applyJobData = {
          //   "reason": this.withdrawData.reason,
          //   "message": this.withdrawData.message,
          //   "jobs_id": this.job_id,
          //   "block_id": (this.withdrawData.block == true)? this.jobDetailsWithClientData.jobDetails.user_id:'',
          //   "status": 5,
          // };
          
          // axios.post(base_url+'api/job/withdrawProposal',applyJobData,{headers: this.headToken}).then((response)=>{
          //   if(response.data.status == true){
          //     this.$toastr.s('Proposal Withdraw successfull');
          //     this.$router.push({
          //       name: 'myProposals',
          //       path:'/freelancer/my-proposals',
          //     });
          //   }else{
          //     this.$toastr.e('Proposal Withdraw Unsuccessfull');
          //   }
          // });
        }
      },
      // this fun is for to cancel update
      async cancelUpdate(){
        this.btndisabled=false;
        this. showInput = false;
        // this fun is for to check milestone data
        var getMilestoneData = await this.genericAPIPOSTRequest({
                requestUrl: "getCreatedMilestone",
                params: {
                  "job_id":this.job_id,
                  "user_id": this.user_id,
                  "type" : this.$store.state.accountType,
                },
            });
        if (getMilestoneData.milestone.length > 0 ) {
          this.proposal =getMilestoneData.milestone;
          this.jobApplicationData=getMilestoneData.proposal;
        }
        // var getmilestoneData = {
        //   "job_id":this.job_id,
        //   "user_id": this.user_id
        // };
        // axios.post(base_url+'api/getCreatedMilestone',getmilestoneData,{headers: this.headToken}).then((response)=>{
        //   if(response.data.status==true){
        //     this.proposal =response.data.result.milestone;
        //   }else{
        //     this.proposal = [{milstone_type: 1,
        //       description:'',
        //       acceptStatus: 0,
        //       dueDate:'',
        //       amount:'',
        //       job_id:'',
        //       user_id:''}];
        //   }
        //   this.jobApplicationData=response.data.proposal;
          
        // })
      },
      // this function id for to get updated milestones
      editMilstone(){
        this.showInput=true;
        if(this.proposal[0].milstone_type == 0){
          this.editMilstoneData = 'project';
        }else{
          this.editMilstoneData = 'milestone';
        }
      },
      // this function id for to update milestones
      async submitProposal(){
        var error = 0;
        // for(var i=0; i < this.proposal.length; i++){
        //   // console.log('data',this.proposal[i].description ,'786',this.proposal[i].dueDate ,'786', this.proposal[i].amount);
        //   if( this.proposal[i].description == '' && this.proposal[i].dueDate == ''  && this.proposal[i].amount == '' ){
        //     this.$toastr.e('Please Fill All Inputs');
        //     error++;
        //   }
        // }
        this.$v.proposal.$touch();
        if (!this.$v.proposal.$invalid && error == 0) {
          this.btndisabled = true;
          var response = await this.genericAPIPOSTRequest({
                  requestUrl: "UpdateMilestone",
                  params: { 
                    "jobs_id":this.job_id,
                    // "user_id":this.user_id,
                    "milestone":this.proposal,
                    "data": this.getLoginUserIdRequest(),
                    "type":this.$store.state.accountType,
                  },
          });
          if(response){
            setTimeout(() => {
              this.btndisabled=false;
            }, 1000);
            this.$toastr.s('Proposal Update Unsuccessfull');
            this.$router.push({
              name: 'myProposals',
              path:'/freelancer/my-proposals',
            });
          }else{
            this.$toastr.e('Proposal Update Unsuccessfull');
          }
          // console.log(response);
          // return false
          // var applyJobData = {
          //   "cost": document.getElementById('total_amount').textContent,
          //   "jobs_id": this.job_id
          // };
          // axios.post(base_url+'api/job/updateApplyJob',applyJobData,{headers: this.headToken}).then((response)=>{
          //   if(response.data.status){
          //     // var addupdateMilestone = {
          //     //   "milestone" : this.proposal
          //     // };
          //     // axios.post(base_url+'api/addUpdateMilestone',addupdateMilestone,{headers: this.headToken}).then((response)=>{
          //     //   if(response.data.status==true){
          //     //     this.$toastr.s('Proposal successfully Updated');
          //     //     this.$router.push({
          //     //       name: 'myProposals',
          //     //       path:'/freelancer/my-proposals',
          //     //     });
                  
          //     //   }else{
          //     //     this.$toastr.e('Proposal Update Unsuccessfull');
          //     //   }
          //     // });
          //   }else{
          //     this.$toastr.s('Proposal Update Unsuccessfull');
          //   }
          // });
        }
        this.btndisabled=false;
      },
      // this fun is for Add milestone
      addMilestone(){
        this.proposal.push(
          {
            milstone_type: 1,
            description:'',
            acceptStatus: 0,
            dueDate:'',
            amount:'',
            job_id: this.job_id,
            user_id: this.user_id,
            created_by: (this.$store.state.accountType == 'freelancer') ? this.proposal[0].agency_id: this.proposal[0].user_id,
            created_user_type : this.$store.state.accountType,
            job_application_id: this.proposal[0].job_application_id,
          }
        )
      },
      // this fun is for remove milestone
      removeMilestone(_i){
        this.proposal.splice(_i, 1);
      },
      // this fun is for to get on load data
      async getdatOnload(_i){
        var that = this;
        // this fun is for to get job details
        var getJobDetail = await that.genericAPIPOSTRequest({
          requestUrl: "getJobDetail",
          params: {'jobsid':[_i]},
        });
        if (getJobDetail!='') {
          that.jobDetailsWithClientData.jobDetails =  getJobDetail[0];
          // this fun is for to get user posted job details
          var getUserPostedJob = await that.genericAPIPOSTRequest({
            requestUrl: "getUserPostedJob",
            params: {
              "user_id": that.jobDetailsWithClientData.jobDetails.user_id
            },
          });
          if (getUserPostedJob!='') {
            that.jobDetailsWithClientData.clientJobsData =  getUserPostedJob;
          }else that.$router.push({path: "/freelancer/my-proposals",name: "myProposals"}).href;
          
          // this function is for get Client details
          var clientFullDetails = await that.genericAPIPOSTRequest({
            requestUrl: "user/getUserDetails",
            params: {
              "user_id": that.jobDetailsWithClientData.jobDetails.user_id
            },
          });
          if (clientFullDetails!='') {
            that.jobDetailsWithClientData.clientFullDetails = clientFullDetails;
          }else that.$router.push({path: "/freelancer/my-proposals",name: "myProposals"}).href;

          // this function is for get Client details
          var clientrating = await that.genericAPIPOSTRequest({
            requestUrl: "getUserReviewCal",
            params: {
              "user_id": that.jobDetailsWithClientData.jobDetails.user_id
            },
          });
          if (clientrating!='') {
            that.jobDetailsWithClientData.clientrating = clientrating;
          }else that.$router.push({path: "/freelancer/my-proposals",name: "myProposals"}).href;

          // this function is for get Client details
          var getMilestoneData = await that.genericAPIPOSTRequest({
                requestUrl: "getCreatedMilestone",
                params: {
                  "job_id":that.job_id,
                  "type" : that.$store.state.accountType,
                },
            });
          if (getMilestoneData.milestone.length > 0 ) {
            that.proposal = getMilestoneData.milestone;
          }else{
            that.$router.push({path: "/freelancer/my-proposals",name: "myProposals"}).href;
          }
          // return false;
          that.jobApplicationData = getMilestoneData.proposal;

          // var getmilestoneData = {
          //   "job_id":this.job_id,
          //   // "user_id": this.user_id
          // };
          // axios.post(base_url+'api/getCreatedMilestone',getmilestoneData,{headers: this.headToken}).then((response)=>{
          //   if(response.data.status==true){
          //     this.proposal =response.data.result.milestone;
          //   }else{
          //     this.proposal = [{milstone_type: 1,
          //       description:'',
          //       acceptStatus: 0,
          //       dueDate:'',
          //       amount:'',
          //       job_id:'',
          //       user_id:''}];
          //       that.$router.push({path: "/freelancer/my-proposals",name: "myProposals"}).href;
          //   }
          //   this.jobApplicationData=response.data.proposal;
          // })
        }else that.$router.push({path: "/freelancer/my-proposals",name: "myProposals"}).href;
      }
    },
    mounted() {
      // current user login id
      this.user_id = this.$store.state.currentUserData.login_master_id;
      // this is header for api
      this.headToken= {"Authorization": 'Bearer '+this.$store.state.currentUserData.token};

      // this is for get id from url
      var jobId = this.$route.query.jobDetailsWithClientData;
      this.job_id=jobId;
      // this fun is for to get data onload
      this.getdatOnload(jobId);






      // this function is for get post details
      // var apiData ={
      //   'jobsid':[jobId]
      // };
      // axios.post(base_url+'api/getJobDetail',apiData,{"headers":this.headToken}).then((response)=>{
      //   if(response.data.status == true){
      //     this.jobDetailsWithClientData.jobDetails =  response.data.result[0];
      //     // this function is for get Client jobs data
      //     var clientJobsapi = {
      //         "filter": "",
      //         "search": {},
      //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
      //     }
      //     axios.post(base_url+'api/getUserPostedJob',clientJobsapi,{'headers':this.headToken}).then((response)=>{
      //       if (response.data.status==true) {
      //         this.jobDetailsWithClientData.clientJobsData =  response.data.result;
      //       }else{
      //         this.jobDetailsWithClientData.clientJobsData =  [];
      //       }
      //     });

      //     // this function is for get Client details
      //     var clientDetailsapi = {
      //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
      //     }
      //     axios.post(base_url+'api/user/getUserDetails',clientDetailsapi,{headers: this.headToken}).then((response)=>{
      //       if(response.data.status ==  true){
      //         this.jobDetailsWithClientData.clientFullDetails =  response.data.result;
      //       }else{
      //         this.jobDetailsWithClientData.clientFullDetails =  '';
      //       }
      //     });

      //     // this function is for get client rating
      //     var clientRatingsapi = {
      //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
      //     }
      //     axios.post(base_url+'api/getUserReviewCal',clientRatingsapi,{headers: this.headToken}).then((response)=>{
      //       if(response.data.status ==  true){
      //         this.jobDetailsWithClientData.clientrating =  response.data.result;
      //       }else{
      //         this.jobDetailsWithClientData.clientrating =  '';
      //       }
      //     });
      //   }
      // });
      // this fun is for to check milestone data
      // var getmilestoneData = {
      //   "job_id":this.job_id,
      //   // "user_id": this.user_id
      // };
      // axios.post(base_url+'api/getCreatedMilestone',getmilestoneData,{headers: this.headToken}).then((response)=>{
      //   if(response.data.status==true){
      //     this.proposal =response.data.result;
      //   }else{
      //     this.proposal = [{milstone_type: 1,
      //       description:'',
      //       acceptStatus: 0,
      //       dueDate:'',
      //       amount:'',
      //       job_id:'',
      //       user_id:''}];
      //   }
      //   this.jobApplicationData=response.data.proposal;
      // })
    },
    
    watch: {
      group () {
        this.drawer = false
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
  .freelancer-wrap .tags li{background: #FCFCFC;border: 1px solid #d8d8d8;border-radius: 100px;padding: 2px 15px;}
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
  .about-wrapper input ~ label:before{display:none;}
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
  hr {margin: 1rem 0!important;}
  .fz-30{font-size:26px!important;}
  .inline-block{display:inline-block;}
  .inline-flex{display:inline-flex;}
  .proposal-details .text-overflow.expanded .button-read-more{ position: relative!important;bottom: 0px!important;}
  .pre-formatted-cover .card-text{
    white-space: pre-line;
  }
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    .col-md-9{width:100%!important;}
    .text-sm-left{text-align:left!important;}
    .py-0{padding-top: 0.5rem!important;padding-top: 0.5rem!important;}
  }
</style>
