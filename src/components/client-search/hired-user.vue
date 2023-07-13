<template>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
        v-infinite-scroll="getData"
        :infinite-scroll-disabled="busy"
        infinite-scroll-distance="5"
        >
            <div class="search-filter-wrapper px-4 border-bottom pb-3 pt-3">
              <b-row>
                <b-col xl="12" lg="12" md="12">
                  <div class="d-flex align-items-center justify-content-space-between search-input">
                    <b-input-group class="mt-0">
                      <template #append>
                        <b-input-group-text class="bg-theme border-theme">
                          <svg width="27" height="28" viewBox="0 0 27 28" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6212 5C14.6569 5 16.5707 5.79274 18.0102 7.23221C19.4496 8.67165 20.2424 10.5855 20.2424 12.6212C20.2424 14.6569 19.4496 16.5707 18.0102 18.0102C16.5707 19.4496 14.6569 20.2424 12.6212 20.2424C10.5855 20.2424 8.67165 19.4496 7.23221 18.0102C5.79274 16.5707 5 14.6569 5 12.6212C5 10.5855 5.79274 8.67165 7.23221 7.23221C8.67165 5.79274 10.5855 5 12.6212 5ZM6.4542 12.6212C6.4542 16.0217 9.22068 18.7881 12.6212 18.7881C16.0217 18.7881 18.7881 16.0217 18.7881 12.6212C18.7881 9.22068 16.0217 6.4542 12.6212 6.4542C9.22072 6.4542 6.4542 9.22068 6.4542 12.6212Z" fill="#FFF"/>
                            <path d="M22.7868 21.7585L18.0069 16.9786C17.7229 16.6946 17.2625 16.6946 16.9786 16.9786C16.6946 17.2625 16.6946 17.7229 16.9786 18.0069L21.7584 22.7868C21.9004 22.9288 22.0865 22.9997 22.2726 22.9997C22.4587 22.9997 22.6448 22.9288 22.7868 22.7868C23.0707 22.5028 23.0707 22.0424 22.7868 21.7585Z" fill="#FFF"/>
                          </svg>
                        </b-input-group-text>
                      </template>
                      <b-form-input v-model="titleSearch" @keyup="filterByData()" placeholder="Search Hired User"></b-form-input>
                    </b-input-group>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div v-if="dataStatus">
            <div class="job-card py-2 px-4 pb-4 mb-0 text-theme-hover"  v-for="(data,index) in userData" :key="index" :id="data.jobs_id">
                <div class="action-btn d-flex align-items-center">
                <a href="javascript:void(0);" 
                    class="btn btn-secondary br-50 mr-2"
                    :class="(data.favorite_id!= null)?'saved-btn':''"
                    @click="addFavorite(data.login_master_id)"  
                    :id="'favorite-'+data.login_master_id"
                >
                    <i class="fa fa-heart text-secondary" aria-hidden="true"></i>
                </a>
                <a target="_blank" :href="$router.resolve({name: 'hireFreelancer',  path:'/client/hire-freelancer/', params: {uid: 'A'+encodedid(data.login_master_id)}}).href" class="btn btn-theme btn-block mb-2 mr-2 btn-secondary" > Rehire </a>
                <button type="button" v-if="jobDetails.is_delete == 0" class="btn btn-theme btn-block mb-2 mr-2 btn-secondary" :disabled="(data.invited_job > 0 ) ? true : false"  v-b-modal.invite-job-modal-3 @click="inviteModelData(data)"> Invite to Job </button>
                </div>
                <div class="d-flex align-items-normal">
                  <div>
                      <div class="shadow-lg">
                      <img :src="data.profile_picture_path" alt="" class="rounded-md shadow w-14 h-14">
                      </div>
                  </div>
                  <div class="ml-2">
                      <h5 class="text-black fw-600 mb-1"  v-b-toggle.sidebar-right  @click="sideBarData.jobDetails = jobDetails ;sideBarData.userDetails = data; $refs.getUserDetailsData.getSidebarDatas()">{{shortName(data.first_name,data.last_name)}}</h5>
                      <ul class=" align-items-center fz-14 post text-muted mb-2"  v-b-toggle.sidebar-right @click="sideBarData.jobDetails = jobDetails ;sideBarData.userDetails = data; $refs.getUserDetailsData.getSidebarDatas()">
                      <li>{{data.tagline}}</li> 
                      <li>
                          {{(data.country_name!='' && data.country_name!= null)?data.country_name: ''}}
                          {{(data.state_name!='' && data.state_name!= null)?', '+data.state_name: ''}}
                          {{(data.city_name!='' && data.city_name!= null)?', '+data.city_name: ''}}
                          {{ (data.role_name!=''&& data.role_name != null)?' | '+data.role_name: '' }}
                      </li> 
                      </ul>
                  </div>
                </div>
                <b-row v-if="data.job_title">
                  <p class="text-black m-0"><b>CONTRACTS</b></p>
                  <b-col class="pt-0 pb-0" xl="12" lg="12" md="12" sm="12" v-for="(title,index) in data.job_title" :key="index">
                    <hr>
                    <p class="text-black mb-0"><b>{{title}}</b>  {{ (data.application_status[index]==2)?'Active':'Ended' }}</p>
                  </b-col>
                </b-row>
                
            </div>
            <div class="text-center py-4 text-theme" v-if="loaderStatus">
                <b-spinner type="border" medium></b-spinner>
            </div>
            </div>
            <div v-else>
            <div class="job-card py-8 px-4 pb-4 mb-2 text-center dashboard-empty">
                <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2 m-auto">
                <path d="M66.1246 6.34896C71.2699 2.78071 78.0895 2.78071 83.2348 6.34896C86.5425 8.64289 90.6329 9.51233 94.5877 8.76211C100.74 7.59512 106.97 10.3689 110.219 15.7214C112.307 19.1624 115.691 21.6204 119.609 22.5436C125.703 23.9797 130.266 29.0476 131.057 35.2589C131.566 39.252 133.657 42.8736 136.861 45.3106C141.844 49.1014 143.952 55.5872 142.148 61.5833C140.989 65.438 141.426 69.5969 143.361 73.1263C146.372 78.6164 145.659 85.3986 141.573 90.1427C138.946 93.1926 137.653 97.1697 137.986 101.181C138.504 107.421 135.094 113.327 129.431 115.999C125.791 117.717 122.992 120.824 121.665 124.624C119.6 130.536 114.082 134.544 107.822 134.682C103.798 134.77 99.9778 136.471 97.2192 139.402C92.9283 143.962 86.2577 145.38 80.483 142.96C76.7706 141.404 72.5888 141.404 68.8764 142.96C63.1017 145.38 56.4311 143.962 52.1401 139.402C49.3816 136.471 45.5613 134.77 41.537 134.682C35.277 134.544 29.7598 130.536 27.6946 124.624C26.3669 120.824 23.5687 117.717 19.9282 115.999C14.2654 113.327 10.8556 107.421 11.3732 101.181C11.7059 97.1697 10.4136 93.1926 7.78652 90.1427C3.7 85.3986 2.98715 78.6164 5.99803 73.1263C7.93364 69.5969 8.37075 65.438 7.21125 61.5833C5.40762 55.5872 7.51499 49.1014 12.4986 45.3106C15.7024 42.8736 17.7933 39.252 18.3019 35.2589C19.093 29.0476 23.6562 23.9797 29.7508 22.5436C33.6688 21.6204 37.052 19.1624 39.1407 15.7214C42.3898 10.3689 48.6199 7.59512 54.7716 8.76211C58.7264 9.51233 62.8169 8.64289 66.1246 6.34896Z" fill="#F2613C"/>
                <path d="M68.7901 83.7077H76.827L84.2389 55.3104L86.8286 44.0586H74.5945L72.8978 55.3104L68.7901 83.7077ZM68.8794 104.961C74.0587 104.961 77.6307 100.496 77.6307 96.0311C77.6307 92.1912 75.1303 89.3336 71.2904 89.3336C66.1111 89.3336 62.5391 93.9772 62.5391 98.3529C62.5391 102.282 65.0395 104.961 68.8794 104.961Z" fill="white"/>
                </svg>
                <p class="fz-20 fw-600 text-black mb-0">You haven’t Hired anyone yet</p>
            </div>
            </div>
            <!-- right side bar  -->
            <b-sidebar v-if="sidebarStatus" id="sidebar-right" ref="mySidebar" title="" shadow right backdrop class="sidebar-message"
                no-close-on-backdrop>
                <UserDetails ref="getUserDetailsData" :urlStatus="showPostjobList" :pageType="pageType" :sideBarData="sideBarData" :talentQualilty="talentQualilty" ></UserDetails>
            </b-sidebar>

            <!-- modal for job invitation -->
            <b-modal centered no-close-on-backdrop id="invite-job-modal-3" size="lg" title="Invite to job" >
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
                <div class="form-group" v-if="PostJobList.length > 0 && showPostjobList">
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
                <!-- <b-button
                    v-if="PostJobList.length > 0 || showPostjobList== false"
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
                </b-button> -->
                <b-button
                  v-if="PostJobList.length > 0 && !postnewJob"
                  size="lg"
                  class="btn btn-theme"
                  @click="sendInvitation"
                  :disabled="(invitationAlreadySend == true ) ? true : false "
                >Save
                </b-button>
                <b-button
                  v-else-if="postnewJob"
                  size="lg"
                  class="btn btn-theme"
                  @click="$router.push({name:'postJobInvite',path:'/client/post-job-invite/',params:{uid:'A'+encodedid(inviteModelDatas.user_id)}})"
                  
                  >Complete Your Job Post
                </b-button>
                <b-button
                  v-else
                  size="lg"
                  class="btn btn-theme"
                  @click="$router.push({name:'postJobInvite',path:'/client/post-job-invite/',params:{uid:'A'+encodedid(inviteModelDatas.user_id)}})"
                  
                  >Complete Your Job Post
                </b-button>
              </div>
            </template>
            </b-modal>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  // import VueReadMoreSmooth from "vue-read-more-smooth"
  import { mapGetters,mapActions } from "vuex";
  // import {SliderFrame, SliderSlides, SliderSlide} from 'vue-dynamic-slider';
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
      // VueReadMoreSmooth,
      // SliderSlide,
      // SliderSlides,
      // SliderFrame,
      UserDetails
    },
    props:['pageType','jobDetails','talentQualilty'],
    data() {
      return {
        busy:false,
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
        filtersValue: {
          title:'',
          start_limit:0,
          end_limit:3,
        },
        sidebarStatus:false,
        showPostjobList:true,
        job_id:'',

      }
    },
    created() {
    },
    watch: {
        priceFrom() {
          if(parseInt(this.priceFrom) > 0){
            if(parseInt(this.priceFrom) >= parseInt(this.priceTo)){
              this.priceTo = (parseInt(this.priceFrom)+1);
            }
          }else{
            this.priceFrom=1;
          }
          this.filterByData();
        },
        priceTo() {
          if(parseInt(this.priceTo) > 2){
            if(parseInt(this.priceTo) <= parseInt(this.priceFrom)){
              this.priceFrom = (parseInt(this.priceTo)-1);
            }
          }else{
            this.priceTo = 2;
            this.priceFrom=1;
          }
          this.filterByData();
        }
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest","fetchLanguageList","fetchExperienceLevelList","fetchCertificationList"]),
      ...mapActions("global",["fetchQpRoleMasterList"]),
      // this fun is for to reset invitation model
      resetInvitationModel(){
        this.$bvModal.hide('invite-job-modal-3');
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
        if(_i == 'newpost'){
          this.invitationAlreadySend = false;
          this.postnewJob=true;
          return false;
        }
        this.postnewJob=false;

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
        // if(this.showPostjobList == false){
        //   this.inviteModelDatas.job_id = this.job_id;
        // }
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
        this.getpostedJobs();
        this.inviteModelDatas.user_id = _v.login_master_id;
        this.inviteModelDatas.image = _v.profile_picture_path;
        this.inviteModelDatas.userType = (_v.profileType == 3)?'Freelancer':'Agency';
        this.inviteModelDatas.name = (_v.first_name!= null && _v.last_name != null)?_v.first_name+' '+_v.last_name:(_v.first_name != null && _v.last_name== null)?_v.first_name:(_v.first_name == null && _v.last_name!= null)?_v.last_name:'';
        if (this.showPostjobList == false) {
          this.checkInvitationsent(this.job_id);
        }
      },

      // this fun is for to get posted Jobs
      async getpostedJobs() {
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "getUserPostedJob",
            params: {'filter':1},
        });  
        this.PostJobList = res;
        this.PostJobList.push({'job_title':'Post new Job','jobs_id':'newpost'});
      },

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
            //   document.getElementById('favorites-' + _i).classList.add("saved-btn");
              this.$toastr.s('Added to Favorite');
          } else if (res == "remove") {
              document.getElementById('favorite-' + _i).classList.remove("saved-btn");
            //   document.getElementById('favorites-' + _i).classList.remove("saved-btn");
              this.$toastr.s('Remove From Favorite');
          }
          this.filterByData();
      },
      
      // this fun is for slide skills
      SlideSkill(id,direction,_i){
        var slider_width = document.querySelector('#'+id).parentElement.scrollWidth;
        var main_width = document.querySelector('#'+id).scrollWidth;
        if(direction =='right'){
          if(this.sliderScrollData[_i] > 0){
            this.sliderScrollData[_i] = this.sliderScrollData[_i]+parseInt(slider_width);
          }else{
            this.sliderScrollData[_i] = parseInt(slider_width);
          }
          if(main_width > this.sliderScrollData[_i]){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft += slider_width;
            // console.log('sliderScrollData',this.sliderScrollData[_i]);
            // console.log('main_width',main_width);
            if(this.sliderScrollData[_i] == main_width){
              document.getElementById('next_'+_i).style.display = 'none';
            }
            document.getElementById('prev_'+_i).style.display = 'block';
          }else if(this.sliderScrollData[_i] >= main_width){
            this.sliderScrollData[_i] = this.sliderScrollData[_i]-parseInt(slider_width);
            document.getElementById('next_'+_i).style.display = 'none';
          }
        }else{
          // currentSlide_position-=slider_width
          this.sliderScrollData[_i] = this.sliderScrollData[_i]-parseInt(slider_width);
          if(this.sliderScrollData[_i] >= 0){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft -= slider_width;
            if(conent.scrollLeft==0){
              document.getElementById('prev_'+_i).style.display = 'none';
            }
            document.getElementById('next_'+_i).style.display = 'block';
          }else if(this.sliderScrollData[_i] < 0){
            document.getElementById('prev_'+_i).style.display = 'none';
            this.sliderScrollData[_i] = this.sliderScrollData[_i]+parseInt(slider_width);
          }
          
        }
        
      },
      // this fun is for to get filter name
      filterName(_t,_i){
        var name;
        if(_t == 'quality'){
          this.talentQualilty.map(data=>{
            if(data.talent_id == _i){
              name = data.talent_title;
              return false;
            }
          });
        }
        return name;
      },
      
      // this fun is for to get filter data
      // async getfilterData(){
      //   this.fetchTalentList({params:{"talent_type":"Badges"}});
      //   this.talentQualilty = this.getTalentListdata;
      // },
      
      //  this fun for to get post data 
      async getData(){
        if(this.busy)return true;
        this.busy=true;
        this.filtersValue.job_id = this.job_id;
        this.loaderStatus= true;
        var  passApidata= {
          'type':'hired',
          'search':this.filtersValue
        };
        axios.post(this.$store.state.baseUrl+'getFreelancerUser',passApidata,{headers: this.headToken}).then((response)=>{
            if(response.data.status ==  true){
            var that=this;
            response.data.result.map(function(item){ return  that.userData.push(item)  } );
            this.filtersValue.start_limit=this.userData.length;
            this.busy=false;
            if(this.userData.length > 0){
              this.dataStatus= true;
            }
          }else if(response.data.status ==  false && this.userData.length > 0){
            this.dataStatus= true;
          }else{
            this.userData=[];
            this.dataStatus= false;
          }
          this.loaderStatus= false;
        });

      },

      // this function is for to get filter data
      async filterByData(){
          this.filtersValue.start_limit=0;
          this.filtersValue.title=this.titleSearch;
          this.filtersValue.job_id = this.job_id;
          this.loaderStatus= true;
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getFreelancerUser",
              params: {
                'type':'hired',
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

      // this fun is for to get data when it call from parent component
      gethiredtab(){
          this.userData=[];
          this.filtersValue= {
            title:'',
            start_limit:0,
            end_limit:3,
          };
          this.busy=false;
          this.getData();
      },

      updateSidebarStatus(){
        // alert('sdds');
        this.sidebarStatus=!this.sidebarStatus;
      }
      
    },
    computed:{
      ...mapGetters("global", ["getQrRoleMasterList"]),
      ...mapGetters(["getLanguageListdata","getExperienceLevelListdata","getCertificationListdata"]),
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
      if(this.$route.params.pid!='' && this.$route.params.pid != undefined){
        this.showPostjobList = false;
        this.job_id = this.$route.params.pid;
      }
      // this is header for api
      this.headToken = { "Authorization": 'Bearer '+this.$store.state.currentUserData.token };
      
      // this fun is for to get filter data
      // this.getfilterData();

      if(this.$router.currentRoute.name == 'hiredUser'){
        // alert('asd')
        this.gethiredtab();
        this.sidebarStatus=true;
      }
      // this function is for to get all active jobs
      // this.getData();

      //this fun is for to get posted job data
    //   this.getpostedJobs();
    },  
  }
</script>
<!-- <style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
  .bottom-0{bottom:0px;}
  .right-0{right:0px;}
  .irs--round .irs-bar {
    background-color: #00C2C0;
  }

  .irs--round .irs-handle {
    background-color: #00C2C0;
    border-color: #00C2C0;
    box-shadow: 0px 0px 0px 5px rgba(0, 194, 192, 0.2);
  }

  .irs--round .irs-handle.state_hover, 
  .irs--round .irs-handle:hover {
    background-color: #00C2C0;
  }

  .irs--round .irs-handle {
    width: 16px;
    height: 16px;
    top: 29px
  }

  .irs--round .irs-from, 
  .irs--round .irs-to, 
  .irs--round .irs-single {
    background-color: transparent;
    color: #666666;
  }

  .irs--round .irs-from:before, 
  .irs--round .irs-to:before, 
  .irs--round .irs-single:before,
  .irs--round .irs-min, 
  .irs--round .irs-max {
    display: none;
  }
  .slider-tooltip{background-color: #F2613B!important; border: #F2613B!important;}
  .slider-process{background-color: #F2613B!important; border: #F2613B!important;}
  .bg-white{background-color: #fff;}
  body{font-family: 'Source Sans Pro', sans-serif!important;}
  .text-muted{color:#979797!important;}
  .ralative {padding-bottom:0px;}
  .theme-bg{background-color: #FFF6F4!important;}
  .bg-none{background-color:transparent;}
  .bordered{border-bottom: 1px solid #EBEBEB!important;border-right: 1px solid #EBEBEB;}
  .bordered-right{border-right: 1px solid #EBEBEB;}
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .search-wrap .br-50{border-radius:50%!important;}
  .search-wrap .fz-14{font-size:14px;}
  .search-wrap .card{border-radius: 20px!important;border: 0px;background-color: transparent;}
  .search-wrap .card-body{border-radius: 20px;}
  .search-wrap .card-body{border-radius:0 0 20px 20px;padding:0px;}
  .search-wrap .card-header{border-radius:0!important;background-color: transparent;text-align: left;border-radius:20px 20px 0 0!important;}
  .search-wrap .my-proposal ul{margin-left:-32px;}
  .search-wrap .tabs .card{border-radius: 20px!important;border: 0px;background-color: #fff;}
  .search-wrap .card-section select{-webkit-appearance: menulist !important; /* override vuetify style */-moze-appearance: menulist !important; /* override vuetify style */appearance: menulist !important; /* override vuetify style */}
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
  .card-section .post {margin-left: -32px;}
  .card-section .tags span {background: #FCFCFC;border: 1px solid #d8d8d8;border-radius: 100px;padding: 1px 15px!important;font-size: 14px;--skill-height: 30px;margin: 0 5px 10px 0;padding: 0 10px;background-color: var(--skill-bg);border-radius: 12px;font-size: 12px;line-height: 2;cursor: default;}
  .btn-edit:hover{padding:8px 16px!important;background-color: #f2613da6!important;}
  .card-section .btn-social{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 14px;line-height: 18px;text-align: center;color: #000000;background: #FFFFFF;border: 1px solid #000000;border-radius: 100px;text-align:center;width:100%;}
  .search-wrap .custom-control-label{background-color:transparent;}
  .border-none{border:0px;}
  .bg-theme{background-color:#F2613C!important;}
  .pos-relative{position:relative;}
  .search-bar .bordered{border:1px solid #D3D3D3!important;border-radius:4px!important;}
  .unread-bg{background-color: #eeeeee66!important;}
  /*.freelancer-wrap .job-card:hover h5{color:#F2613C!important;}*/
  .freelancer-wrap .job-card:hover {background-color: #eeeeee66!important;}
  .up-skill-container {
      --token-btn-gradient: transparent,var(--scroll-gradient-base,var(--semi-transparent-inverse));
      display: grid;
      align-items: center;
  }
  .bg-hover-theme:hover{background-color:#FFF6F4!important;}
  .up-skill-container {
      --token-btn-gradient: transparent,var(--scroll-gradient-base,var(--semi-transparent-inverse));
      display: grid;
      align-items: center;
  }
  .up-skill-wrapper {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 5px 0 15px;
      scrollbar-width: none;
  }
  .up-skill-container .up-btn, .up-skill-container .up-skill-wrapper {
      grid-row: 1/-1;
  }
  .up-skill-badge {
      margin-bottom: 0;
      flex: none;
      cursor: pointer;
  }
  .up-skill-badge {
      --skill-height: 30px;
      --skill-color:#000;
      --skill-bg: #fff;
      display: inline-flex;
      align-items: center;
      height: var(--skill-height);
      margin: 0 5px 10px 0;
      padding: 0 10px;
      color: #000;
      background-color: #fff;
      border-radius: 15px;
      font-size: 13px;
      line-height: 1;
      cursor: default;
      border:1px solid #F2613C;
      cursor:pointer;
  }
  .up-skill-container .up-btn:before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 100%;
      width: var(--ws-lg);
  }
  .up-skill-container .up-btn.up-btn-next {
      padding-left: 10px;
  }
  .up-skill-container .up-btn {
      position: relative;
      margin: 4px 0 15px;
      height: 100%;
      padding: 0;
  }
  .up-btn-link {
      padding: var(--btn-link-padding);
      background-color: transparent;
      color: var(--link-color);
      text-transform: none;
      font-weight: var(--btn-weight);
      line-height: var(--font-size-base);
      box-shadow: none!important;
      border-color: transparent;
      border-radius: 0;
      max-height: unset;
  }
  .up-card-section {
      --card-padding-y: 20px;
  }
  .skill-slider-wrapper{
      position: relative;
  }
  .skill-slider-wrapper .prev-btn{
      position: absolute;
      top: -6px;
      z-index: 1;
      background-color: #fff;
      padding: 8px;
      left: 0px;
  }
  .skill-slider-wrapper .next-btn{
      position: absolute;
      top: -6px;
      z-index: 1;
      background-color: #fff;
      padding: 8px;
      right: 0px;
  }
  .skill-slider-wrapper .dynamic-slider-slide{
      margin:0 5px;text-align:center;
  }
</style> -->