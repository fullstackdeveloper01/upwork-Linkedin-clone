<template>
  <div class="search-filter-wrapper border-bottom pb-0 br-20 bg-white freelancer-wrap mt-12">
    <b-row>
      <b-col xl="12" lg="12" md="12" class="pb-0">
        <template v-if="proposalData.length > 0">
          <b-row class="profile-wrap mb-0 px-4 pt-0 py-4 pos-rel job-card" v-for="(proposal, id) in proposalData" :key="id">
            <b-col cols="8" class="pb-0">
              <div class="d-md-flex align-items-center mb-2">
                <div class="img-wrapper mr-3 pos-rel">
                  <img :src="proposal.profile_picture_path" class="img-fluid">
                  <span class="online"></span>
                </div>
                <div class="content">
                  <h5 class="text-black fw-600 mb-1" v-b-toggle.sidebar-message @click="messageModel(proposal)">{{shortName(proposal.first_name,proposal.last_name)}}</h5>
                  <ul class="align-items-center fz-14 post text-muted mb-0" v-if="proposal.tagline">
                    <li class="fz-16 text-black" >{{proposal.tagline}}</li>
                  </ul>
                  <ul class="d-flex align-items-center fz-14 post text-muted mb-0"  >
                    <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"></path></svg> </li>
                    <li class="ml-1 fz-16 text-black">
                      {{(proposal.country_name!='' && proposal.country_name!= null)?proposal.country_name: ''}}
                      {{(proposal.state_name!='' && proposal.state_name!= null)?','+proposal.state_name: ''}}
                      {{(proposal.city_name!='' && proposal.city_name!= null)?','+proposal.city_name: ''}}
                      {{ (proposal.role_name!=''&& proposal.role_name != null)?' | '+proposal.role_name: '' }}
                    </li> 
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
              <div class="action-btn d-flex align-items-center top-13">
                <div class="mr-3 text-center"><b>${{proposal.cost}}</b></div>
              <button type="button" class="btn btn-theme mr-3" @click="$router.push({'name':'contractDetails','path':'/client/jobpostreview/contract-detail/','params':{pid:proposal.uniq_id,uid:encodedid(proposal.user_id)}})">View Contract</button>
              </div>
            </b-col>
            <div class="pl-30 mb-3">
              <b-row>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0"><b>${{proposal.hourly_rate}}.00</b> /Day</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="proposal.totalEarn >0"><b>${{proposal.totalEarn}}</b> earned</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="proposal.jobSuccessRate > 0"><b>{{proposal.jobSuccessRate}}%</b> Job Success</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12" v-if="proposal.talent_id > 0">
                    <TalentBage :talentQualilty="talentQualilty" :talent_id="proposal.talent_id"/>
                  </b-col>
              </b-row>
            </div>
            <b-col cols="12" class="pt-0 pb-0">
              <!-- <p class="text-black fz-16 fw-500 pl-30">Cover Letter -  -->
                <!-- <vue-read-more-smooth :lines="2" class="mt-2"> <span class="fz-16 text-muted">{{proposal.cover_letter}}</span></vue-read-more-smooth> -->
                <!-- <span class="fz-16 text-muted"><read-more more-str="Read more" :text="proposal.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></span> -->
              <!-- </p> -->
              <template v-if="proposal.cover_letter">
                <p class="search-description fz-16 text-muted pl-30" v-html="proposal.cover_letter"> </p>
              </template>
              
              <div class="skill-slider-wrapper mt-3 pl-30" v-if="proposal.skillNameCertificate.length > 0">
                <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0 ml--35" style="margin-left:-32px!important;" >
                    <slider-frame :slides-per-view="5" >
                      <div>
                          <a href="javascript:void(0)" class="prev-btn text-theme" @click="SlideSkill('topSkill_'+id,'left',id)" style="display:none" :id="'prev_'+id"><i class="fa fa-chevron-left"></i></a>
                          <slider-slides :id="'topSkill_'+id" >
                            <slider-slide v-for="(skill,ix) in proposal.skillNameCertificate" :key="ix">
                                <li class="mr-1 inline-block align-items-center">{{skill.name}}</li>
                            </slider-slide>
                          </slider-slides>
                          <a href="javascript:void(0)" class="next-btn text-theme" v-if="proposal.skillNameCertificate.length > 1" @click="SlideSkill('topSkill_'+id,'right',id)" :id="'next_'+id"><i class="fa fa-chevron-right"></i></a>
                      </div>
                    </slider-frame>
                </ul>
              </div>
            </b-col>
            <div class="pl-30" >
              <b-row v-if="proposal.agency_id > 0">
                <b-col xl="6" lg="6" sm="12" v-if="proposal.agency_id > 0">
                  <div class="d-flex align-items-normal border br-20 p-2 mt-0" >
                    <div>
                      <div class="shadow-lg">
                        <img v-if="proposal.agencyData.profile_picture_path !=''" :src="proposal.agencyData.profile_picture_path_url" alt="" class="rounded-md shadow w-10 h-10">
                        <img v-else :src="$store.state.baseUrlImg+'upload/profile_image/company.svg'" alt="" class="rounded-md shadow w-10 h-10">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h6 class="text-black fw-600 mb-1">Apply with Agency</h6>
                      <p class="mb-0 fz-14 text-muted">{{proposal.agencyData.first_name}} {{(proposal.agencyData.last_name!='')?proposal.agencyData.last_name:''}}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-row>
        </template>
        <template v-else>
          <div class="text-center py-4 text-theme" v-if="loaderStatus">
            <b-spinner type="border" medium></b-spinner>
          </div>
          <div class="text-center px-4 py-4" v-else>
            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
              <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
              <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
            </svg>
            <h4 class="fz-20 fw-600 text-black">You don't have any hires yet</h4>
            <p class="fz-14 fw-500 text-black mb-0">Interview promising candidates and make them an offer.</p>
          </div>
        </template>

      
        <MessageDetails v-if="modelopenclose" ref="handleMessageDetailspage" :jobDetails='jobDetails' :jobId="jobId" :messageData="messageData"  @getProposalData="getProposalData" @applicationStatus="updatecountStatus" />

      </b-col>
    </b-row>
  </div>
</template>
<script>
  import  MessageDetails from "./MessageDetails.vue";
  import { mapActions } from "vuex";
  import TalentBage from "../../../components/common/TalentBage.vue";
  import {SliderFrame, SliderSlides, SliderSlide} from 'vue-dynamic-slider';

  // import VueReadMoreSmooth from "vue-read-more-smooth";
  export default {
    components : {
      MessageDetails,
      TalentBage,
      SliderSlide, SliderSlides, SliderFrame,

      // VueReadMoreSmooth
    },
    props:['jobId','jobDetails','talentQualilty'],
    data() {
      return {
        proposalData:[],
        messageData:{
          userDetails:'',
          proposalDetails:'',
          education:'',
          similarjobHistory:'',
          jobUnderprocess:'',
          jobHistory:[],
          favorite:'',
          noteData:{
            note:'',
            skill:[],
            tags:[],
          },
        },
        modelopenclose:false,
        loaderStatus: true,
        sliderScrollDataa:[],
      } 
    },
    computed:{
    },
    mounted(){
      // this.getProposalData();
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest"]),
      async messageModel(_v){
        // proposal.user_id,proposal.uniq_id
        this.modelopenclose=true;
        this.job_id=_v.uniq_id;
        var userDetails = await this.genericAPIPOSTRequest({
            requestUrl: "user/getUserDetails",
            params: {"user_id":_v.user_id},
        });
        if(userDetails){
          this.messageData.userDetails = userDetails;
          this.$refs.handleMessageDetailspage.getChatlist();

        }
        var proposalDetails = await this.genericAPIPOSTRequest({
            requestUrl: "getProposalDetail",
            params: {"user_id":_v.user_id,"job_id":this.jobId},
        });
        if(proposalDetails){
          this.messageData.proposalDetails = proposalDetails;
        }
        var similarjobHistory = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id":_v.user_id,"filter":6,search:{category:_v.skill_id}},
        });
        if(similarjobHistory){
          this.messageData.similarjobHistory = similarjobHistory;  
        }
        var jobUnderprocess = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id":_v.user_id,"filter":2},
        });
        if(jobUnderprocess){
          this.messageData.jobUnderprocess = jobUnderprocess;
        }
        var jobHistory = await this.genericAPIPOSTRequest({
            requestUrl: "getJobdataList",
            params: {"user_id":_v.user_id,"filter":6},
        });
        if(jobHistory){
          this.messageData.jobHistory = jobHistory;  
        }
        var education = await this.genericAPIPOSTRequest({
          requestUrl: "user/getUserEducation",
          params: { "user_id" :_v.user_id }
        });
        if(education){
          this.messageData.education = education;
        }
        var favorite = await this.genericAPIPOSTRequest({
          requestUrl: "getfavoritelist",
          params: { "favorite_user_id" :_v.user_id }
        });
        if(favorite){
          this.messageData.favorite = favorite;
        }
        var note = await this.genericAPIPOSTRequest({
            requestUrl: "getNote",
            params: {'to_user_id': _v.user_id}
        });
        if(note){
            this.messageData.noteData = note;
        }
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
      //this fun is for get proposal list
      async getProposalData(){
        this.loaderStatus= true;

        var res = await this.genericAPIPOSTRequest({
              requestUrl: "getjobApplicantList",
              params: { "jobsid": this.jobId, "filter": "2","application_status": "6" }
          });
          if(res.length > 0){
          this.proposalData = res;
          this.loaderStatus= false;
        }else{
          this.loaderStatus= false;
        }  
      },
      // toggleDropdown (event) {
      //   event.currentTarget.classList.toggle('is-active')
      // }
    }
  }
</script>

