<template>
  <b-container>
    <b-row class="mt-100">
      <b-col xl="12" lg="12" sm="12">
        <b-card no-body class="br-20 mb-1 bg-light-theme px-4 py-4 offer-details-wrap">
          <div class="d-md-flex align-items-center">
            <div class="img-wrapper">
              <img :src="offerData.userDetails.profile_picture_path_url" class="img-fluid">
              <span class="dot"></span>
            </div>
            <div class="content ml-2">
              <h4 class="fz-20 fw-600 text-black mr-2 mb-1">{{offerData.userDetails.first_name+' '+offerData.userDetails.last_name}}</h4> 
              <p class="mb-1 text-black fz-16">{{offerData.userDetails.country_name+', '+offerData.userDetails.state_name+', '+offerData.userDetails.city_name}}</p>
            </div>
            <div class="ml-auto">
              <b-button class="btn-outline-theme mr-2" v-b-modal.withdraw  @click="getwithdrawreason()">Withdraw Offer</b-button>
              <!-- <b-button class="btn btn-outline-theme text-theme"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></b-button> -->
              <!-- withdraw offer model -->
              <b-modal id="withdraw" size="lg" title="Withdraw Offer" hide-footer centered>
                <h4 class="fz-18 text-black fw-600">Reason</h4>
                <form @submit.prevent="withdrawOffer">
                  <b-form-group
                    v-slot="{ ariaDescribedby }"
                  >
                  <b-form-select 
                    :aria-describedby="ariaDescribedby"
                    v-model="withdrawData.reason" 
                    :options="withDrawreason" 
                    text-field="title"
                    value-field="id" 
                    :error-messages="widthDrawreason"
                    @input="$v.withdrawData.reason.$touch()" 
                    @blur="$v.withdrawData.reason.$touch()"
                    class="mb-4"
                  ></b-form-select>
                  <div class="error" v-if="widthDrawreason[0]">{{widthDrawreason[0]}}</div>
                  <h4 class="fz-18 text-black fw-600 mt-2 mb-0">Message</h4>
                  </b-form-group>
                  
                  <b-form-textarea
                    id="textarea"
                    v-model="withdrawData.message"
                    placeholder="Message here..."
                    rows="3"
                    max-rows="6" class="mt-2"
                    :error-messages="widthDrawmessage"
                    @input="$v.withdrawData.message.$touch()" 
                    @blur="$v.withdrawData.message.$touch()"
                  ></b-form-textarea>
                  <div class="error" v-if="widthDrawmessage[0]">{{widthDrawmessage[0]}}</div>
                  <hr>
                  <div class="flex items-center justify-end space-x-2 mt-3">
                    <button type="button"  class="text-theme" @click="closemodel"> Cancel </button>
                    <button type="submit" class="w-40 btn btn-theme"  > Withdraw Proposal </button>
                  </div>
                </form>
              </b-modal>
            </div>
          </div>
          <p class="mt-4 fw-600">{{offerData.jobDetails.job_title}}</p>
        </b-card>
      </b-col>
      <b-col xl="9" lg="9" sm="12" v-if="offerData.jobDetails!=''">
        <b-card no-body class="br-20 mb-4">
          <div class="px-4 py-4 offer-details-wrap">
            <h3 class="fw-600 fz-22 mb-4">Offer Description</h3>
            <!-- <vue-read-more-smooth :lines="2" class="mt-2"> -->
                        
              <p class="fw-500 fz-16 mb-3"><read-more more-str="Read more" :text="offerData.jobDetails.scope_of_work" link="#" less-str="Read less" :max-chars="250"></read-more></p>
            <!-- </vue-read-more-smooth> -->
          </div>
        </b-card>
        <b-card no-body class="br-20 mb-4">
          <div class="px-4 py-4 offer-details-wrap">
            <h3 class="fw-600 fz-22 mb-4">Contract Details</h3>
            <b-row>
              <b-col xl="6" lg="6" sm="12" class="mb-4">
                <p class="fw-500 fz-16 mb-1 text-muted">Status</p>
                <h3 class="fw-500 fz-18 mb-0 text-black"><b>{{(offerData.proposalDetails.application_status == 7)?'Pending':'Accept'}}</b> expires on {{offerData.jobDetails.expire_date}}</h3>
              </b-col>
              <b-col xl="6" lg="6" sm="12" class="mb-4">
                <p class="fw-500 fz-16 mb-1 text-muted">Offer Made By</p>
                <h3 class="fw-500 fz-18 mb-0 text-black"><b>{{offerData.jobDetails.first_name+' '+offerData.jobDetails.last_name}}</b></h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col xl="6" lg="6" sm="12" class="mb-4">
                <p class="fw-500 fz-16 mb-1 text-muted">Job Category</p>
                <h3 class="fw-500 fz-18 mb-0 text-black"><b>{{offerData.jobDetails.jobCategory}}</b></h3>
              </b-col>
              <b-col xl="6" lg="6" sm="12" class="mb-4">
                <p class="fw-500 fz-16 mb-1 text-muted">Offer Expires</p>
                <h3 class="fw-500 fz-18 mb-0 text-black"><b>{{offerData.jobDetails.expire_date}}</b></h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col xl="6" lg="6" sm="12" class="mb-4">
                <p class="fw-500 fz-16 mb-1 text-muted">Offer Date</p>
                <h3 class="fw-500 fz-18 mb-0 text-black"><b>{{offerData.proposalDetails.update_timestamp}}</b></h3>
              </b-col>
              <b-col xl="6" lg="6" sm="12" class="mb-4">
                <p class="fw-500 fz-16 mb-1 text-muted">Total Amount</p>
                <h3 class="fw-500 fz-18 mb-0 text-black"><b>${{offerData.proposalDetails.cost}}</b></h3>
              </b-col>
            </b-row>
          </div>
        </b-card>

        <b-card no-body class="br-20 mb-4">
          <div class="px-4 py-4 offer-details-wrap">
            <h3 class="fw-600 fz-22 mb-4">Milestones</h3>
            <b-row>
                <b-col xl="8" lg="8" sm="8">
                    <strong>Milestone</strong>
                </b-col>
                <b-col xl="2" lg="2" sm="2">
                    <strong>Amount</strong>
                </b-col>
                <b-col xl="2" lg="2" sm="2">
                    <strong>Due Date</strong>
                </b-col>
            </b-row>
            <template v-if="offerData.milestone.length > 0" >
                <b-row v-for="(milestone, index) in offerData.milestone" :key="index">
                    <b-col xl="8" lg="8" sm="8">
                        {{ milestone.description }}
                    </b-col>
                    <b-col xl="2" lg="2" sm="2">
                        {{ milestone.amount }}
                    </b-col>
                    <b-col xl="2" lg="2" sm="2">
                        {{ milestone.dueDate }}
                    </b-col>
                    <hr>
                </b-row>
            </template>
          </div>
        </b-card>
      </b-col>
      <b-col xl="3" lg="3" sm="12">
        <b-card no-body class="br-20 mb-4">
          <div class="px-4 py-4 offer-details-wrap">
            <h3 class="fw-600 fz-22 mb-4">About the Talent</h3>
            <div class="d-md-flex align-items-start">
              <div class="img-wrapper">
                <img :src="offerData.userDetails.profile_picture_path_url" class="img-fluid">
                <span class="dot"></span>
              </div>
              <div class="content ml-2">
                <h4 class="fz-20 fw-600 text-black mr-2 mb-1">{{offerData.userDetails.first_name+' '+offerData.userDetails.last_name}}</h4> 
                <p class="mb-1 text-black fz-16 mb-4 fz-14" v-if="offerData.userDetails!=''"><read-more more-str="Read more" :text="offerData.userDetails.about_self_desc" link="#" less-str="Read less" :max-chars="100"></read-more></p>
                <p class="mb-1 text-black fz-16 mt-4 pt-4">{{offerData.userDetails.country_name+', '+offerData.userDetails.state_name+', '+offerData.userDetails.city_name}}</p>
                <p class="mb-1 text-black fz-16"><b>{{offerData.jobHistory.length}} Jobs</b></p>
                <p class="mb-1 text-black fz-16"><b>${{totalEarning}} total earned</b></p>
                <!-- <p class="mb-1 text-black fz-16"><b>5,979 hours worked</b></p> -->
              </div>
            </div>
            <div class="text-center">
              <b-button class="btn btn-outline-theme w-100 mt-3" @click="$router.push({'name':'chat','path':'/chat',query: {chatroom: encodedid(JSON.stringify(chatroomId))}})">Chat with {{offerData.userDetails.first_name}}</b-button>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  import { validationMixin } from 'vuelidate';
  import { required } from 'vuelidate/lib/validators';
  import { mapActions } from "vuex";
  // import VueReadMoreSmooth from "vue-read-more-smooth"
  export default {
    mixins: [validationMixin],
    validations: {
      withdrawData: {
        reason: { required },
        message: { required },
      },
    },
    data(){
      return {
        freelancer_id:'',
        job_id:'',
        offerData:{
          userDetails:'',
          jobHistory:'',
          jobDetails:'',
          proposalDetails:'',
          milestone:[],
        },
        withDrawreason:[],
        withdrawData:{
          reason:'',
          message:''
        },
        chatroomId:'',

      }
    },
    components : {
        // VueReadMoreSmooth,
    },
    mounted(){
      if(this.$route.params.pid!="" && this.$route.params.uid !=""){
        this.freelancer_id = this.decodeId(this.$route.params.uid);
        this.job_id = this.$route.params.pid;
        // this fun is for to get Offer Details
        this.getOfferDetails();
      }else{
        this.router.resolve('client/dashboard').href;
      }
    },
    computed:{
      // function to total burget amount
      totalEarning() {
            var amount = 0;
            if(this.offerData.jobHistory.length > 0){
              this.offerData.jobHistory.map(data => {
                  amount += parseInt(data.cost);
              });
            }
            return amount;
        },
        widthDrawreason() {
            const errors = []
            if (!this.$v.withdrawData.reason.$dirty) return errors
            !this.$v.withdrawData.reason.required && errors.push('Reason is required')
            return errors
        },
        widthDrawmessage() {
            const errors = []
            if (!this.$v.withdrawData.message.$dirty) return errors
            !this.$v.withdrawData.message.required && errors.push('Message is required')
            return errors
        },
    },
    methods:{
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for to close model
      closemodel(){
        this.$bvModal.hide('withdraw');
      },
      // this fun is for to submit withdraw request
      async withdrawOffer(){
        this.$v.withdrawData.$touch();
        if (!this.$v.withdrawData.$invalid) {
          this.withdrawData.user_id = this.freelancer_id;
          this.withdrawData.jobs_id = this.offerData.jobDetails.jobs_id;
          this.withdrawData.status = 1;
          var withDrawreason = await this.genericAPIPOSTRequest({
            requestUrl: "withdrawProposal",
            params: this.withdrawData,
          });
          if(withDrawreason){
            this.$toastr.s('Withdraw Offer Succesfully');
            this.$router.push({name:'index',path:'/client/jobpostreview',params:{pid:this.job_id},query:{current:2}}).href;
          }
        }
      },
      // this fun is for to get withdraw reason
      async getwithdrawreason(){
        var withDrawreason = await this.genericAPIPOSTRequest({
            requestUrl: "getWithdrawreason",
            params: {"type":'client'},
        });
        if(withDrawreason){
          this.withDrawreason = withDrawreason;
        }
      },
      // this fun is for to get Offer Details
      async getOfferDetails(){
        var userDetails = await this.genericAPIPOSTRequest({
            requestUrl: "user/getUserDetails",
            params: {"user_id":this.freelancer_id},
        });
        if(userDetails){
          this.offerData.userDetails = userDetails;
        }
        
        var GetJobDetails = await this.genericAPIPOSTRequest({
            requestUrl: "getJobDetails_new",
            params: {
              'poid':this.job_id,
              'user_id':this.$store.state.currentUserData.login_master_id,
              'data': this.getCurrentUserIdRequest,
            },
        });
        if(GetJobDetails.length > 0){
          this.offerData.jobDetails = GetJobDetails[0];
        }else this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
        
        
        // var proposalDetails = await this.genericAPIPOSTRequest({
        //     requestUrl: "getProposalDetail",
        //     params: {"user_id":this.freelancer_id,"job_id":this.offerData.jobDetails.jobs_id},
        // });
        // if(proposalDetails){
        //   if (proposalDetails.application_status == 2) {
        //     window.history.back();
        //   }
        //   this.offerData.proposalDetails = proposalDetails;
        // }else window.history.back();

        var getMilestoneData = await this.genericAPIPOSTRequest({
              requestUrl: "getCreatedMilestone",
              params: {"user_id":this.freelancer_id,"job_id":this.offerData.jobDetails.jobs_id},
          });
        
        if(getMilestoneData.proposal){
          this.offerData.milestone = getMilestoneData.milestone;
          this.offerData.proposalDetails = getMilestoneData.proposal;
          if (this.offerData.proposalDetails.application_status == 2) {
            window.history.back();
          }
        }else window.history.back();

        var jobHistory = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id":this.freelancer_id,"filter":6},
        });
        if(jobHistory){
          this.offerData.jobHistory = jobHistory;  
        }

        this.getChatlist();
      },
      // this fun is for to get user chat
      async getChatlist(){
        var  param = {'user_id':this.freelancer_id,'client_id':this.offerData.jobDetails.client_id, 'job_id': this.offerData.jobDetails.jobs_id,'userType': this.$store.state.accountType};
        var res = await this.genericAPIPOSTRequest({
            requestUrl:'getchatroom',
            params: param,
        });
        if (res.length > 0) {
            this.chatroomId = res[0]; 
        }
      },
    }
  }
</script>
<style>
  .offer-details-wrap .card{border: 1px solid rgba(0, 0, 0, 0.125)!important;} 
  .offer-details-wrap .card-body{padding:12px;}
  .offer-details-wrap .w-80{width:80%!important;}
  .offer-details-wrap .tabs-wrapper{min-height:327px;}
  .offer-details-wrap .tags-wrap ul{margin-left:-32px;}
  .offer-details-wrap .img-wrapper{width:72px;height:72px;border-radius:50%;position:relative;box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);padding: 5px;}
  .offer-details-wrap .img-wrapper img{width:100%;height:100%;border-radius:50%;}
  .offer-details-wrap .img-wrapper .dot{position:absolute;width:15px;height:15px;background-color:#48c048;border-radius:50%;top:5px;right:0px;border: 2px solid #d0caca;}
  .bg-light-theme {background-color: #f2613c12!important;border: 1px solid #f2613b1f;}
  .offer-details-wrap .content{width:80%;}
</style>

