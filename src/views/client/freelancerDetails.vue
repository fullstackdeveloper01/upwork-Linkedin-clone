<template>
    <div>
        <UserDetails ref="getUserDetailsData" :pageType="'freelancerDetails'" :urlStatus="true" :sideBarData="sideBarData" :talentQualilty="talentQualilty" @inviteModelData="inviteModelData"></UserDetails>

        <!-- modal for job invitation -->
        <b-modal centered no-close-on-backdrop id="invite-job-modal" size="lg" title="Invite to job" >
            <div class="flex items-center py-2 mb-4">
                <a class="flex items-center">
                <div class="shadow-lg br-50 p-1 pos-rel">
                    <img :src="inviteModelDatas.image" alt="" class="rounded-md shadow w-14 h-14 br-50">
                    <i class="fa fa-circle text-success pos-absolute top-0 right-0 fz-14" aria-hidden="true"></i>
                </div>
                <div class="ml-3 cursor-pointer">
                    <h3 class="mb-0 text-black fz-18 fw-600"> {{inviteModelDatas.name}} </h3>
                    <p class="mb-0 fz-16 fw-400 text-muted" style="padding: 0px;"> {{inviteModelDatas.userType}} </p>
                </div>
                </a>
            </div>
            <div class="message-wrap">
                <div class="form-group mb-2">
                <label class="fz-18 fw-600 mb-2">Message</label>
                <b-form-textarea
                    id="textarea"
                    v-model="inviteModelDatas.message"
                    placeholder="Hello there!"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                <div class="error" v-if="invitation_message[0]">{{invitation_message[0]}}</div>
                </div>
                <div class="form-group" v-if="PostJobList.length > 0">
                <label class="fz-18 fw-600 mb-1">Choose a job</label><br>
                <b-form-select
                    v-model="inviteModelDatas.job_id"
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
                    v-if="PostJobList.length > 0"
                    size="lg"
                    class="btn btn-theme"
                    @click="sendInvitation"
                    :disabled="(invitationAlreadySend == true ) ? true : false "
                >Save
                </b-button>
                <b-button
                    v-else
                    size="lg"
                    class="btn btn-theme"
                    @click="$router.push({name:'post-job',path:'/client/post-job/',params:{pid:'POID'}})"
                    >Complete Your Job Post
                </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  import { mapActions,mapGetters } from "vuex";
  import UserDetails from '../../components/client-search/UserDetails.vue';

  export default {

    mixins: [validationMixin],

    validations: {
      inviteModelDatas:{
          'message':{required},
          'job_id':{required},
      },
    },
    components : {
      UserDetails
    },
    data() {
      return {
        headToken:'',
        userData:[],
        dataStatus: false,
        loaderStatus: true,
        search:'',
        location:'',
        locationData:'',
        hideClearBtn:false,
        titleSearch:'',
        sliderScrollData:[],
        // NEW DATAS 
        categoryData:[],
        skillData:[],
        priceFrom:10,
        priceTo:100,
        filtersValue: {
          talentQualilty:[],
          price:[10,100],
          categoryData:'',
          skillData:'',
          experience:'',
          certification:'',
          talentType:null,
          successtype:null,
          earntype:null,
          hourstype:null,
          englishtype:null,
          locationData:[],
          otherLang:[],
          title:'',
          start_limit:0,
          end_limit:3,
        },
        talentType:[],
        successtype:[],
        earntype:[],
        hourstype:[],
        englishtype:[],
        talentQualilty:[],
        searchLang:'',
        languageData:[],
        experienceLevelData:[],
        certificationData:[],
        inviteModelDatas:{
          'image':'',
          'name':'',
          'userType':'',
          'message':'',
          'job_id':'',
          'user_id':''
        },
        PostJobList:[],
        invitationAlreadySend:false,
        sideBarData:{
          userDetails:[],
          proposalDetails:[], 
          favorite:[],
          jobDetails:[],
          similarjobHistory:[],
          totalEarning:0,
          jobHistory:[],
          education:[],
          jobUnderprocess:[],
          employmentData:[],
          noteData:{
            note:'',
            skill:'',
            tags:[],
          },
        },
        striped: true,
        max: 0,
        SoftSkill: [],

      }
    },
    created() {
      this.formatter = value => `$${value}`
    },
    watch: {
        
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to get user details
        async getUserDetails(_i){
            var response = await this.genericAPIPOSTRequest({
                requestUrl: "user/getUserDetails",
                params: {"user_id":_i},
            });
            this.sideBarData.userDetails = response;
            this.sideBarData.userDetails.profile_picture_path= response.profile_picture_path_url;
            this.sideBarData.userDetails.associate = response.associated;
            this.$refs.getUserDetailsData.getSidebarDatas()
            this.talentQualilty = this.getTalentListdata;
            var skillname=[];
            response.allSkill_name.filter(data=>{
                skillname.push(data.name); 
            })
            // console.log('skillname',skillname)
            this.sideBarData.userDetails.skillName = skillname;
        },
        
        // this fun is for to reset invitation model
        resetInvitationModel(){
        this.$bvModal.hide('invite-job-modal');
        this.$v.$reset();
        this.invitationAlreadySend = false;
        this.inviteModelDatas={
            'image':'',
            'name':'',
            'userType':'',
            'message':'',
            'job_id':'',
            'user_id':''
        };
        },
        // this fun is for to check invitation send to user or not 
        async checkInvitationsent(_i){
        var res = await this.genericAPIPOSTRequest({
            requestUrl:'checkInvitationJob',
            params:{
            job_id:_i,
            invited_user_id:this.inviteModelDatas.user_id
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
        this.$v.inviteModelDatas.$touch();
        if (!this.$v.inviteModelDatas.$invalid) {
            var res  = await this.genericAPIPOSTRequest({
            requestUrl:'sendJobInvitation',
            params:{
                invited_user_id:this.inviteModelDatas.user_id,
                job_id:this.inviteModelDatas.job_id,
                message:this.inviteModelDatas.message
            }
            });
            if(res){
            this.$toastr.s('Invitation Sent Successfully');
            this.resetInvitationModel();
            }
        }
        },
        // this fun is for to assgin modal value
        inviteModelData(_v){
        this.inviteModelDatas.user_id = _v.login_master_id;
        this.inviteModelDatas.image = _v.profile_picture_path;
        this.inviteModelDatas.userType = (_v.profileType == 3)?'Freelancer':'Agency';
        this.inviteModelDatas.name = (_v.first_name!= null && _v.last_name != null)?_v.first_name+' '+_v.last_name:(_v.first_name != null && _v.last_name== null)?_v.first_name:(_v.first_name == null && _v.last_name!= null)?_v.last_name:'';
        
        },
        // // this fun is for to get posted Jobs
        // async getpostedJobs() {
        // var res = await this.genericAPIPOSTRequest({
        //     requestUrl: "getUserPostedJob",
        //     params: {},
        // });  
        // this.PostJobList = res;
        // },
        // this fun is for to add to favorite
        async addFavorite(_i) {
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "addremovefavorite",
                params: {
                    'favorite_user_id': _i
                }
            });
            if (res == "added") {
                document.getElementById('favorite-' + _i).classList.add("saved-btn");
                document.getElementById('favorites-' + _i).classList.add("saved-btn");
                
                this.$toastr.s('Added to Favorite');
            } else if (res == "remove") {
                document.getElementById('favorite-' + _i).classList.remove("saved-btn");
                document.getElementById('favorites-' + _i).classList.remove("saved-btn");
                this.$toastr.s('Remove From Favorite');
            }
        },
        // this fun is for to get the talent tag 
        getTalentImg(_i){
        var name;
        this.talentQualilty.filter(data=>{
            if(data.talent_id==_i){
            name = data.img
            return false;
            }
        });
        return name;
        },
        // this function is for to get filter data
        async filterByData(){
            this.filtersValue.price = [this.priceFrom,this.priceTo];
            this.filtersValue.start_limit=0;
            this.hideClearBtn= this.checkFilterdata(); 
            this.filtersValue.title=this.titleSearch;
            this.loaderStatus= true;
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "getclientsearch",
                params: {
                'search':this.filtersValue,
                },
            });  
            this.userData = [];
            if(res.length > 0){
            var that =this;
            res.map(function(item){ return that.userData.push(item) });
            this.filtersValue.start_limit=this.userData.length;
            this.busy=false;
            this.loaderStatus= false;
            this.dataStatus= true;
            }else{
            this.busy=true;
            this.loaderStatus= false;
            if(this.userData.length == 0) this.dataStatus= false;
            }
        },
      
    },
    computed:{
        ...mapGetters(["getTalentListdata"]),
      invitation_message() {
          const errors = []
          if (!this.$v.inviteModelDatas.message.$dirty) return errors
          !this.$v.inviteModelDatas.message.required && errors.push('Message is required')
          return errors
      },
      invitation_job_id() {
          const errors = []
          if (!this.$v.inviteModelDatas.job_id.$dirty) return errors
          !this.$v.inviteModelDatas.job_id.required && errors.push('Job is required')
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
    mounted() {
        var id = this.decodeId(this.$route.params.uid.slice(1));
        if(id != undefined){
            this.getUserDetails(id);
            // this.getpostedJobs();
        }else{
            window.close();
        }
    },  
  }
</script>
<style>
    .img-wrapper {
        width: 145px;
        height: 150px;
        border-radius: 50%;
        position: relative;
        box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
        padding: 5px;
    }
</style>