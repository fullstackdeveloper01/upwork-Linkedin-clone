<template>
  <div class="search-filter-wrapper border-bottom pb-0 br-20 bg-white freelancer-wrap mt-12">
    <b-row>
      <b-col xl="12" lg="12" md="12" class="pb-0">
        <FilterReviewproposal :searchData="searchData" :pageName="'archived'" @filterByData="getProposalData"/>

        <template v-if="proposalData.Withdrawn.length > 0 || proposalData.archived.length > 0 || proposalData.decline.length > 0">
          <h5 class="fz-18 fw-600 text-theme mt-4 ml-6 mr-6" v-if="proposalData.Withdrawn.length > 0">{{proposalData.Withdrawn.length}} Proposal Withdrawn by freelancer</h5>
          <b-row class="profile-wrap mb-0 px-4 pt-0 py-4 pos-rel job-card" v-for="(withdraw, id) in proposalData.Withdrawn" :key="id">
            <b-col cols="8" class="pb-0">
              <div class="d-md-flex align-items-center">
                <div class="img-wrapper mr-3 pos-rel">
                  <img :src="withdraw.profile_picture_path" class="img-fluid">
                  <span class="online"></span>
                </div>
                <div class="content">
                  <h5 class="text-black fw-600 mb-1" v-b-toggle.sidebar-message @click="messageModel(withdraw)">{{shortName(withdraw.first_name,withdraw.last_name)}}</h5>
                  <!-- <h4 class="fz-20 fw-600 text-black mr-2 mb-0" v-b-toggle.sidebar-message @click="messageModel(withdraw)">{{withdraw.first_name+' '+withdraw.last_name}}</h4> -->
                  <ul class="align-items-center fz-14 post text-muted mb-0" v-if="withdraw.tagline">
                    <li class="fz-16 text-black" >{{withdraw.tagline}}</li>
                  </ul>
                  <ul class="d-flex align-items-center fz-14 post text-muted mb-0"  >
                    <li class="mr-0"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"></path></svg> </li>
                    <li class="ml-1 fz-16 text-black">
                      {{(withdraw.country_name!='' && withdraw.country_name!= null)?withdraw.country_name: ''}}
                      {{(withdraw.state_name!='' && withdraw.state_name!= null)?', '+withdraw.state_name: ''}}
                      {{(withdraw.city_name!='' && withdraw.city_name!= null)?', '+withdraw.city_name: ''}}
                      {{ (withdraw.role_name!=''&& withdraw.role_name != null)?' | '+withdraw.role_name: '' }}
                    </li> 
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
              <div class="action-btn d-flex align-items-center top-13">
                <!-- <div class="mr-3 text-center">
                  <b>${{withdraw.cost}}</b><br>
                  <span>
                </span></div> -->
                <p>Withdrawn by freelancer</p>
              </div>
            </b-col>
            <div class="pl-30 mb-3">
              <b-row>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0"><b>${{withdraw.hourly_rate}}.00</b> /Day</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="withdraw.totalEarn >0"><b>${{withdraw.totalEarn}}</b> earned</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="withdraw.jobSuccessRate > 0"><b>{{withdraw.jobSuccessRate}}%</b> Job Success</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12"  v-if="withdraw.talent_id > 0">
                  <TalentBage :talentQualilty="searchData.talentQualilty" :talent_id="withdraw.talent_id"/>
                  </b-col>
              </b-row>
            </div>
            <b-col cols="12" class="pt-0 pb-0">
              <!-- <p class="text-black fz-16 fw-500 pl-30">Cover Letter -  -->
                <!-- <vue-read-more-smooth :lines="2" class="mt-2"> <span class="fz-16 text-muted">{{withdraw.cover_letter}}</span></vue-read-more-smooth> -->
                <!-- <span class="fz-16 text-muted"><read-more more-str="Read more" :text="withdraw.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></span>
              </p> -->
              <template v-if="withdraw.cover_letter">
                <p class="search-description fz-16 text-muted pl-30" v-html="withdraw.cover_letter"> </p>
              </template>
              
              <div class="skill-slider-wrapper mt-3 pl-30" v-if="withdraw.skillNameCertificate.length > 0">
                <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0 ml--35" style="margin-left:-32px!important;" >
                    <slider-frame :slides-per-view="5" >
                      <div>
                          <a href="javascript:void(0)" class="prev-btn text-theme" @click="withdrawSlideSkill('withdrawtopSkill_'+id,'left',id)" style="display:none" :id="'withdrawprev_'+id"><i class="fa fa-chevron-left"></i></a>
                          <slider-slides :id="'withdrawtopSkill_'+id" >
                            <slider-slide v-for="(skill,ix) in withdraw.skillNameCertificate" :key="ix">
                                <li class="mr-1 inline-block align-items-center">{{skill.name}}</li>
                            </slider-slide>
                          </slider-slides>
                          <a href="javascript:void(0)" class="next-btn text-theme" v-if="withdraw.skillNameCertificate.length > 1" @click="withdrawSlideSkill('withdrawtopSkill_'+id,'right',id)" :id="'withdrawnext_'+id"><i class="fa fa-chevron-right"></i></a>
                      </div>
                    </slider-frame>
                </ul>
              </div>
            </b-col>
            <!-- <div class="pl-30 pb-3" v-if="withdraw.agency_id > 0">
              <b-row>
                <b-col xl="6" lg="6" sm="12">
                  <div class="d-flex align-items-normal border br-20 p-2 mt-0" >
                    <div>
                      <div class="shadow-lg">
                        <img v-if="withdraw.agencyData.profile_picture_path !=''" :src="withdraw.agencyData.profile_picture_path_url" alt="" class="rounded-md shadow w-10 h-10">
                        <img v-else :src="$store.state.baseUrlImg+'upload/profile_image/company.svg'" alt="" class="rounded-md shadow w-10 h-10">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h6 class="text-black fw-600 mb-1">Apply with Agency</h6>
                      <p class="mb-0 fz-14 text-muted">{{withdraw.agencyData.first_name}} {{(withdraw.agencyData.last_name!='')?withdraw.agencyData.last_name:''}}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div> -->
            <div class="pl-30 pb-3" >
              <b-row v-if="withdraw.agency_id > 0">
                <b-col xl="6" lg="6" sm="12" v-if="withdraw.agency_id > 0">
                  <div class="d-flex align-items-normal border br-20 p-2 mt-0" >
                    <div>
                      <div class="shadow-lg">
                        <img v-if="withdraw.agencyData.profile_picture_path !=''" :src="withdraw.agencyData.profile_picture_path_url" alt="" class="rounded-md shadow w-10 h-10">
                        <img v-else :src="$store.state.baseUrlImg+'upload/profile_image/company.svg'" alt="" class="rounded-md shadow w-10 h-10">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h6 class="text-black fw-600 mb-1">Apply with Agency</h6>
                      <p class="mb-0 fz-14 text-muted">{{withdraw.agencyData.first_name}} {{(withdraw.agencyData.last_name!='')?withdraw.agencyData.last_name:''}}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-row>

          <h5 class="fz-18 fw-600 text-theme mt-4 ml-6 mr-6" v-if="proposalData.archived.length > 0">{{proposalData.archived.length}} Proposals Archived</h5>
          <b-row class="profile-wrap mb-0 px-4 pt-0 py-4 pos-rel job-card" v-for="(archive, id) in proposalData.archived" :key="id">
            <b-col cols="8" class="pb-0">
              <div class="d-md-flex align-items-center">
                <div class="img-wrapper mr-3 pos-rel">
                  <img :src="archive.profile_picture_path" class="img-fluid">
                  <!--<span class="icon-status active"></span>-->
                  <span class="offline"></span>
                  <!--<span class="icon-status deactive"></span>-->
                </div>
                <div class="content">
                  <h5 class="text-black fw-600 mb-1" v-b-toggle.sidebar-message @click="messageModel(archive)">{{shortName(archive.first_name,archive.last_name)}}</h5>
                  <!-- <h4 class="fz-20 fw-600 text-black mr-2 mb-0" v-b-toggle.sidebar-message @click="messageModel(archive)">{{archive.first_name+' '+archive.last_name}}</h4> -->
                  <ul class="align-items-center fz-14 post text-muted mb-0" v-if="archive.tagline">
                    <li class="fz-16 text-black" >{{archive.tagline}}</li>
                  </ul>
                  <ul class="d-flex align-items-center fz-14 post text-muted mb-0"  >
                    <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"></path></svg> </li>
                    <li class="ml-1 fz-16 text-black">
                      {{(archive.country_name!='' && archive.country_name!= null)?archive.country_name: ''}}
                      {{(archive.state_name!='' && archive.state_name!= null)?', '+archive.state_name: ''}}
                      {{(archive.city_name!='' && archive.city_name!= null)?', '+archive.city_name: ''}}
                      {{ (archive.role_name!=''&& archive.role_name != null)?' | '+archive.role_name: '' }}
                    </li> 
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
              <div class="action-btn d-flex align-items-center top-13">
                <!--<div class="mr-3 text-center"><b>${{archive.cost}}</b> <br><span>-->
                  <!-- Per Hour -->
                <!--</span></div>-->
                <!-- <button type="button" class="btn btn-outline-theme mr-3" v-b-toggle.sidebar-message @click="messageModel(archive)">Messages</button> -->
                <button type="button" class="btn btn-theme" @click="unArchived(archive,1)">Unarchived</button>
                <!-- Unarchived -->
              </div>
            </b-col>
            
            <div class="pl-30 mb-3">
              <b-row>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0"><b>${{archive.hourly_rate}}.00</b> /Day</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="archive.totalEarn >0"><b>${{archive.totalEarn}}</b> earned</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="archive.jobSuccessRate > 0"><b>{{archive.jobSuccessRate}}%</b> Job Success</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12"  v-if="archive.talent_id > 0">
                  <TalentBage :talentQualilty="searchData.talentQualilty" :talent_id="archive.talent_id"/>
                  </b-col>
              </b-row>
            </div>
            <b-col cols="12" class="pt-0 pb-0">
              <!-- <p class="text-black fz-16 fw-500 pl-30">Cover Letter -  -->
                <!-- <vue-read-more-smooth :lines="2" class="mt-2"> <span class="fz-16 text-muted">{{archive.cover_letter}}</span></vue-read-more-smooth> -->
                <!-- <span class="fz-16 text-muted pos-rel read-collapse-wrap"><read-more more-str="Read more" :text="archive.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></span> -->
              <!-- </p> -->
              <!-- <p class="text-black fz-16 fw-500 pl-30">CWI/PMP/ASNT UT MT/Railway engineer/</p> -->
              <template v-if="archive.cover_letter">
                <p class="search-description fz-16 text-muted pl-30" v-html="archive.cover_letter"> </p>
              </template>
              
              <div class="skill-slider-wrapper mt-3 pl-30" v-if="archive.skillNameCertificate.length > 0">
                <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0 ml--35" style="margin-left:-32px!important;" >
                    <slider-frame :slides-per-view="5" >
                      <div>
                          <a href="javascript:void(0)" class="prev-btn text-theme" @click="archiveSlideSkill('archivedtopSkill_'+id,'left',id)" style="display:none" :id="'archiveprev_'+id"><i class="fa fa-chevron-left"></i></a>
                          <slider-slides :id="'archivedtopSkill_'+id" >
                            <slider-slide v-for="(skill,ix) in archive.skillNameCertificate" :key="ix">
                                <li class="mr-1 inline-block align-items-center">{{skill.name}}</li>
                            </slider-slide>
                          </slider-slides>
                          <a href="javascript:void(0)" class="next-btn text-theme" v-if="archive.skillNameCertificate.length > 1" @click="archiveSlideSkill('archivedtopSkill_'+id,'right',id)" :id="'archivenext_'+id"><i class="fa fa-chevron-right"></i></a>
                      </div>
                    </slider-frame>
                </ul>
              </div>
            </b-col>
            <!-- <div class="pl-30 pb-3" v-if="archive.agency_id > 0">
              <b-row>
                <b-col xl="6" lg="6" sm="12">
                  <div class="d-flex align-items-normal border br-20 p-2 mt-0" >
                    <div>
                      <div class="shadow-lg">
                        <img v-if="archive.agencyData.profile_picture_path !=''" :src="archive.agencyData.profile_picture_path_url" alt="" class="rounded-md shadow w-10 h-10">
                        <img v-else :src="$store.state.baseUrlImg+'upload/profile_image/company.svg'" alt="" class="rounded-md shadow w-10 h-10">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h6 class="text-black fw-600 mb-1">Apply with Agency</h6>
                      <p class="mb-0 fz-14 text-muted">{{archive.agencyData.first_name}} {{(archive.agencyData.last_name!='')?archive.agencyData.last_name:''}}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div> -->
            <div class="pl-30 pb-3" >
              <b-row v-if="archive.agency_id > 0">
                <b-col xl="6" lg="6" sm="12" v-if="archive.agency_id > 0">
                  <div class="d-flex align-items-normal border br-20 p-2 mt-0" >
                    <div>
                      <div class="shadow-lg">
                        <img v-if="archive.agencyData.profile_picture_path !=''" :src="archive.agencyData.profile_picture_path_url" alt="" class="rounded-md shadow w-10 h-10">
                        <img v-else :src="$store.state.baseUrlImg+'upload/profile_image/company.svg'" alt="" class="rounded-md shadow w-10 h-10">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h6 class="text-black fw-600 mb-1">Apply with Agency</h6>
                      <p class="mb-0 fz-14 text-muted">{{archive.agencyData.first_name}} {{(archive.agencyData.last_name!='')?archive.agencyData.last_name:''}}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-row>
          
          <h5 class="fz-18 fw-600 text-theme mt-4 ml-6 mr-6" v-if="proposalData.decline.length > 0">{{proposalData.decline.length}} Declined by freelancer</h5>
          <b-row class="profile-wrap mb-0 px-4 pt-0 py-4 pos-rel job-card" v-for="(declined, id) in proposalData.decline" :key="id">
            <b-col cols="8" class="pb-0">
              <div class="d-md-flex align-items-center">
                <div class="img-wrapper mr-3 pos-rel">
                  <img :src="declined.profile_picture_path" class="img-fluid">
                  <span class="online"></span>
                  <!--<span class="icon-status inactive"></span>-->
                </div>
                <div class="content">
                  <h5 class="text-black fw-600 mb-1" v-b-toggle.sidebar-message @click="messageModel(declined)">{{shortName(declined.first_name,declined.last_name)}}</h5>
                    <!-- <h4 class="fz-20 fw-600 text-black mr-2 mb-0" v-b-toggle.sidebar-message @click="messageModel(declined)">{{declined.first_name+' '+declined.last_name}}</h4> -->
                  <ul class="align-items-center fz-14 post text-muted mb-0" v-if="declined.tagline">
                    <li class="fz-16 text-black" >{{declined.tagline}}</li>
                  </ul>
                  <ul class="d-flex align-items-center fz-14 post text-muted mb-0"  >
                    <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"></path></svg> </li>
                    <li class="ml-1 fz-16 text-black">
                      {{(declined.country_name!='' && declined.country_name!= null)?declined.country_name: ''}}
                      {{(declined.state_name!='' && declined.state_name!= null)?', '+declined.state_name: ''}}
                      {{(declined.city_name!='' && declined.city_name!= null)?', '+declined.city_name: ''}}
                      {{ (declined.role_name!=''&& declined.role_name != null)?' | '+declined.role_name: '' }}
                    </li> 
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col cols="4" class="text-right d-flex justify-content-end pb-0 pt-4">
              <div class="action-btn d-flex align-items-center top-13">
                <!-- <button type="button" class="btn btn-outline-theme mr-3" v-b-toggle.sidebar-message @click="messageModel(declined)">Messages</button> -->
                <!-- <button type="button" class="btn btn-theme" @click="unArchived(declined,1)">Undeclinedd</button> -->
                Declined
              </div>
            </b-col>
            
            <div class="pl-30 mb-3">
              <b-row>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0"><b>${{declined.hourly_rate}}.00</b> /Day</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="declined.totalEarn >0"><b>${{declined.totalEarn}}</b> earned</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0" v-if="declined.jobSuccessRate > 0"><b>{{declined.jobSuccessRate}}%</b> Job Success</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12"  v-if="declined.talent_id > 0">
                  <TalentBage :talentQualilty="searchData.talentQualilty" :talent_id="declined.talent_id"/>
                  </b-col>
              </b-row>
            </div>
            <b-col cols="12" class="pt-0 pb-0">
              <!-- <p class="text-black fz-16 fw-500 pl-30 mb-0">Cover Letter -  -->
                <!-- <vue-read-more-smooth :lines="2" class="mt-2"> <span class="fz-16 text-muted">{{declined.cover_letter}}</span></vue-read-more-smooth> -->
                <!-- <span class="fz-16 text-muted pos-rel read-collapse-wrap"><read-more more-str="Read more" :text="declined.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more></span> -->
              <!-- </p> -->
              <!-- <p class="text-black fz-16 fw-500 pl-30">CWI/PMP/ASNT UT MT/Railway engineer/</p> -->
              <template v-if="declined.cover_letter">
                <p class="search-description fz-16 text-muted pl-30" v-html="declined.cover_letter"> </p>
              </template>
              
              <div class="skill-slider-wrapper mt-3 pl-30" v-if="declined.skillNameCertificate.length > 0">
                <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0 ml--35" style="margin-left:-32px!important;" >
                    <slider-frame :slides-per-view="5" >
                      <div>
                          <a href="javascript:void(0)" class="prev-btn text-theme" @click="declinedSlideSkill('declinetopSkill_'+id,'left',id)" style="display:none" :id="'declinedprev_'+id"><i class="fa fa-chevron-left"></i></a>
                          <slider-slides :id="'declinetopSkill_'+id" >
                            <slider-slide v-for="(skill,ix) in declined.skillNameCertificate" :key="ix">
                                <li class="mr-1 inline-block align-items-center">{{skill.name}}</li>
                            </slider-slide>
                          </slider-slides>
                          <a href="javascript:void(0)" class="next-btn text-theme" v-if="declined.skillNameCertificate.length > 1" @click="declinedSlideSkill('declinetopSkill_'+id,'right',id)" :id="'declinednext_'+id"><i class="fa fa-chevron-right"></i></a>
                      </div>
                    </slider-frame>
                </ul>
              </div>
            </b-col>
            <!-- <div class="pl-30 pb-3" v-if="declined.agency_id > 0">
              <b-row>
                <b-col xl="6" lg="6" sm="12">
                  <div class="d-flex align-items-normal border br-20 p-2 mt-0" >
                    <div>
                      <div class="shadow-lg">
                        <img v-if="declined.agencyData.profile_picture_path !=''" :src="declined.agencyData.profile_picture_path_url" alt="" class="rounded-md shadow w-10 h-10">
                        <img v-else :src="$store.state.baseUrlImg+'upload/profile_image/company.svg'" alt="" class="rounded-md shadow w-10 h-10">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h6 class="text-black fw-600 mb-1">Apply with Agency</h6>
                      <p class="mb-0 fz-14 text-muted">{{declined.agencyData.first_name}} {{(declined.agencyData.last_name!='')?declined.agencyData.last_name:''}}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div> -->
            <div class="pl-30 pb-3" >
              <b-row v-if="declined.agency_id > 0">
                <b-col xl="6" lg="6" sm="12" v-if="declined.agency_id > 0">
                  <div class="d-flex align-items-normal border br-20 p-2 mt-0" >
                    <div>
                      <div class="shadow-lg">
                        <img v-if="declined.agencyData.profile_picture_path !=''" :src="declined.agencyData.profile_picture_path_url" alt="" class="rounded-md shadow w-10 h-10">
                        <img v-else :src="$store.state.baseUrlImg+'upload/profile_image/company.svg'" alt="" class="rounded-md shadow w-10 h-10">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h6 class="text-black fw-600 mb-1">Apply with Agency</h6>
                      <p class="mb-0 fz-14 text-muted">{{declined.agencyData.first_name}} {{(declined.agencyData.last_name!='')?declined.agencyData.last_name:''}}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-row>
        </template>
        <template v-else>
          <!-- <div class="text-center py-4 text-theme" v-if="loaderStatus">
            <b-spinner type="border" medium></b-spinner>
          </div> -->
          <div class="text-center px-4 py-4">
            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
              <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
              <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
            </svg>
            <h4 class="fz-20 fw-600 text-black">You don't have any Archived Proposal yet</h4>
            <p class="fz-14 fw-500 text-black mb-0">Interview promising candidates and make them an offer.</p>
          </div>
        </template>
        <MessageDetails v-if="modelopenclose" ref="handleMessageDetailspage" :jobDetails='jobDetails' :jobId="jobId" :messageData="messageData"  @getProposalData="getProposalData" @applicationStatus="updatecountStatus" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import { mapActions } from "vuex";
  import  MessageDetails from "./MessageDetails.vue";
  import TalentBage from "../../../components/common/TalentBage.vue";
  import FilterReviewproposal from "../../../components/common/FilterReviewproposal.vue";
  import {SliderFrame, SliderSlides, SliderSlide} from 'vue-dynamic-slider';

  // import VueReadMoreSmooth from "vue-read-more-smooth";
  export default {
    components : {
      MessageDetails,
      TalentBage,
      FilterReviewproposal,
      SliderSlide, SliderSlides, SliderFrame,

      // VueReadMoreSmooth
    },
    computed:{
    },
    props:['jobId','jobDetails','searchData'],
    data() {
      return {
        filterTab:false,
        proposals:[],
        proposalData:{
          Withdrawn:[],
          archived:[],
          decline:[],
        },
        selected:'',
        certificate:[],
        locations:[],
        languages:[],
        value:'',
        search:'',
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
        declinedsliderScrollData:[],
        withdrawsliderScrollData:[],
        archivesliderScrollData:[],
      } 
    },
    mounted(){
      // this.getProposalData();
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest"]),
      // this fun is for slide skills
      declinedSlideSkill(id,direction,_i){
        var slider_width = document.querySelector('#'+id).parentElement.scrollWidth;
        var main_width = document.querySelector('#'+id).scrollWidth;
        if(direction =='right'){
          if(this.declinedsliderScrollData[_i] > 0){
            this.declinedsliderScrollData[_i] = this.declinedsliderScrollData[_i]+parseInt(slider_width);
          }else{
            this.declinedsliderScrollData[_i] = parseInt(slider_width);
          }
          if(main_width > this.declinedsliderScrollData[_i]){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft += slider_width;
            // console.log('declinedsliderScrollData',this.declinedsliderScrollData[_i]);
            // console.log('main_width',main_width);
            if(this.declinedsliderScrollData[_i] == main_width){
              document.getElementById('declinednext_'+_i).style.display = 'none';
            }
            document.getElementById('declinedprev_'+_i).style.display = 'block';
          }else if(this.declinedsliderScrollData[_i] >= main_width){
            this.declinedsliderScrollData[_i] = this.declinedsliderScrollData[_i]-parseInt(slider_width);
            document.getElementById('declinednext_'+_i).style.display = 'none';
          }
        }else{
          // currentSlide_position-=slider_width
          this.declinedsliderScrollData[_i] = this.declinedsliderScrollData[_i]-parseInt(slider_width);
          if(this.declinedsliderScrollData[_i] >= 0){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft -= slider_width;
            if(conent.scrollLeft==0){
              document.getElementById('declinedprev_'+_i).style.display = 'none';
            }
            document.getElementById('declinednext_'+_i).style.display = 'block';
          }else if(this.declinedsliderScrollData[_i] < 0){
            document.getElementById('declinedprev_'+_i).style.display = 'none';
            this.declinedsliderScrollData[_i] = this.declinedsliderScrollData[_i]+parseInt(slider_width);
          }
          
        }
        
      },
      archiveSlideSkill(id,direction,_i){
        var slider_width = document.querySelector('#'+id).parentElement.scrollWidth;
        var main_width = document.querySelector('#'+id).scrollWidth;
        if(direction =='right'){
          if(this.archivesliderScrollData[_i] > 0){
            this.archivesliderScrollData[_i] = this.archivesliderScrollData[_i]+parseInt(slider_width);
          }else{
            this.archivesliderScrollData[_i] = parseInt(slider_width);
          }
          if(main_width > this.archivesliderScrollData[_i]){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft += slider_width;
            // console.log('archivesliderScrollData',this.archivesliderScrollData[_i]);
            // console.log('main_width',main_width);
            if(this.archivesliderScrollData[_i] == main_width){
              document.getElementById('archivenext_'+_i).style.display = 'none';
            }
            document.getElementById('archiveprev_'+_i).style.display = 'block';
          }else if(this.archivesliderScrollData[_i] >= main_width){
            this.archivesliderScrollData[_i] = this.archivesliderScrollData[_i]-parseInt(slider_width);
            document.getElementById('archivenext_'+_i).style.display = 'none';
          }
        }else{
          // currentSlide_position-=slider_width
          this.archivesliderScrollData[_i] = this.archivesliderScrollData[_i]-parseInt(slider_width);
          if(this.archivesliderScrollData[_i] >= 0){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft -= slider_width;
            if(conent.scrollLeft==0){
              document.getElementById('archiveprev_'+_i).style.display = 'none';
            }
            document.getElementById('archivenext_'+_i).style.display = 'block';
          }else if(this.archivesliderScrollData[_i] < 0){
            document.getElementById('archiveprev_'+_i).style.display = 'none';
            this.archivesliderScrollData[_i] = this.archivesliderScrollData[_i]+parseInt(slider_width);
          }
          
        }
        
      },
      withdrawSlideSkill(id,direction,_i){
        var slider_width = document.querySelector('#'+id).parentElement.scrollWidth;
        var main_width = document.querySelector('#'+id).scrollWidth;
        if(direction =='right'){
          if(this.withdrawsliderScrollData[_i] > 0){
            this.withdrawsliderScrollData[_i] = this.withdrawsliderScrollData[_i]+parseInt(slider_width);
          }else{
            this.withdrawsliderScrollData[_i] = parseInt(slider_width);
          }
          if(main_width > this.withdrawsliderScrollData[_i]){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft += slider_width;
            // console.log('withdrawsliderScrollData',this.withdrawsliderScrollData[_i]);
            // console.log('main_width',main_width);
            if(this.withdrawsliderScrollData[_i] == main_width){
              document.getElementById('withdrawnext_'+_i).style.display = 'none';
            }
            document.getElementById('withdrawprev_'+_i).style.display = 'block';
          }else if(this.withdrawsliderScrollData[_i] >= main_width){
            this.withdrawsliderScrollData[_i] = this.withdrawsliderScrollData[_i]-parseInt(slider_width);
            document.getElementById('withdrawnext_'+_i).style.display = 'none';
          }
        }else{
          // currentSlide_position-=slider_width
          this.withdrawsliderScrollData[_i] = this.withdrawsliderScrollData[_i]-parseInt(slider_width);
          if(this.withdrawsliderScrollData[_i] >= 0){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft -= slider_width;
            if(conent.scrollLeft==0){
              document.getElementById('withdrawprev_'+_i).style.display = 'none';
            }
            document.getElementById('withdrawnext_'+_i).style.display = 'block';
          }else if(this.withdrawsliderScrollData[_i] < 0){
            document.getElementById('withdrawprev_'+_i).style.display = 'none';
            this.withdrawsliderScrollData[_i] = this.withdrawsliderScrollData[_i]+parseInt(slider_width);
          }
          
        }
        
      },
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
      updatecountStatus(){
        this.$emit('applicationStatus4');
      },
      // this fun is for unarchived proposal
      async unArchived(_v,_i){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/addHire",
          params: { "jobData": _v, "action": _i }
        });
        if(res){
          this.getProposalData();
          this.$emit('applicationStatus4');
          this.$toastr.s('Unarchived Successfully');
        }else{
          this.$toastr.e('Unarchived Unsuccessfull');
        }
      },
      //this fun is for get proposal list
      async getProposalData(filter=null){
        this.proposalData.Withdrawn = [];
        this.proposalData.archived = [];
        this.proposalData.decline = [];
        var withdrawDatafilter={};
        withdrawDatafilter.jobsid = this.jobId;
        withdrawDatafilter.filter = 5;
        if(filter!=null){
          withdrawDatafilter.search = filter;
        }
        var withdrawData = await this.genericAPIPOSTRequest({
            requestUrl: "getjobApplicantList",
            params: withdrawDatafilter
        });
        if(withdrawData.length >0){
          this.proposalData.Withdrawn = withdrawData;
        }
        var archivedDatafilter={};
        archivedDatafilter.jobsid = this.jobId;
        archivedDatafilter.filter = 4;
        if(filter!=null){
          archivedDatafilter.search = filter;
        }
        var archivedData = await this.genericAPIPOSTRequest({
            requestUrl: "getjobApplicantList",
            params: archivedDatafilter
        });
        if(archivedData.length >0){
          this.proposalData.archived = archivedData;
        }
        var declineDatafilter={};
        declineDatafilter.jobsid = this.jobId;
        declineDatafilter.filter = 8;
        if(filter!=null){
          declineDatafilter.search = filter;
        }
        var declineData = await this.genericAPIPOSTRequest({
            requestUrl: "getjobApplicantList",
            params: declineDatafilter
        });
        if(declineData.length >0){
          this.proposalData.decline = declineData;
        }
      },
      toggleDropdown (event) {
        event.currentTarget.classList.toggle('is-active')
      }
    }
  }
</script>
<style>
  .milestone-timeline-wrap .card {
    border: 1px solid rgba(0, 0, 0, 0.125) !important;
  }

  .milestone-timeline-wrap .card-body {
    padding: 12px;
  }

  .milestone-timeline-wrap .w-80 {
    width: 80% !important;
  }

  .milestone-timeline-wrap .tabs-wrapper {
    min-height: 327px;
  }

  .milestone-timeline-wrap .tags-wrap ul {
    margin-left: -32px;
  }

  .milestone-timeline-wrap .img-wrapper {
    width: 100px;
    height: 105px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
    padding: 5px;
  }

  .milestone-timeline-wrap .img-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .milestone-timeline-wrap .img-wrapper .dot {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #48c048;
    border-radius: 50%;
    top: 5px;
    right: 22px;
    border: 2px solid #d0caca;
  }

  .milestone-timeline-wrap .img-wrap {
    width: 10%;
  }

  .milestone-timeline-wrap .minus-margin {
    margin-left: -32px;
  }

  .milestone-timeline-wrap .timeline-block {
    width: -webkit-calc(50% + 8px);
    width: -moz-calc(50% + 8px);
    width: calc(50% + 8px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    clear: both;
  }
  .milestone-timeline-wrap .timeline-block-right {
    float: right;
  }
  .milestone-timeline-wrap .timeline-block-left {
    float: left;
    direction: rtl
  }
  .milestone-timeline-wrap .marker {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #F5F7FA;
    background: #b8b8b8;
    margin-top: 0px;
    z-index: 1;
    text-align:center;
    position: relative;
    left:4px;
  }
  .milestone-timeline-wrap .marker.active{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ff5526;
    left: 4px;
}
  .milestone-timeline-wrap .timeline-content {
    width: 95%;
    padding: 0 15px;
    color: #666
  }
  .milestone-timeline-wrap i.fa.fa-check{
    display:none;
  }
  .milestone-timeline-wrap i.fa.fa-check.active {
    display:block !important;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    height: 50%;
    color:#fff;
  }
  .milestone-timeline-wrap .timeline-content h3 {
    margin-top: 8px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500
  }
  .milestone-timeline-wrap .timeline-content span {
    font-size: 15px;
    color: #a4a4a4;
  }
  .milestone-timeline-wrap .timeline-content p {
    font-size: 14px;
    line-height: 1.5em;
    word-spacing: 1px;
    color: #888;
  }
  .milestone-timeline-wrap .timeline-block {
    width: 100%;
    margin-bottom: 30px;
  }
  .milestone-timeline-wrap .timeline-block-right {
    float: none;
  }
  .milestone-timeline-wrap .timeline-block-left {
    float: none;
    direction: ltr;
  }
  .milestone-timeline-wrap .timeline-container {
    position: relative;
    overflow: hidden;
  }
  .milestone-timeline-wrap .timeline-container:before {
    left: 19px;
    width: 2px;
  }
  .milestone-timeline-wrap .timeline-container:before {
    content: '';
    position: absolute;
    top: 0;
    left: 19px;
    margin-left: -1px;
    width: 2px;
    height: 100%;
    background: #CCD1D9;
    z-index: 1;
  }
  .br-200{border-radius:20px 20px 0 0!important;}
  .justify-content-space-around {
    justify-content: space-around;
  }
  .w-15{width:15%!important;}
  .w-70{width:70px!important;}
  .h-70{height:70px!important;}

  .width-80 {
    width: 80%;
  }
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
  .white-space-pre-line{white-space: pre-line;}
</style>

