<template>
  <div class="search-filter-wrapper border-bottom pb-0 br-20 bg-white freelancer-wrap mt-12">
    <b-row>
      <b-col xl="12" lg="12" md="12" class="pb-0">
        <FilterReviewproposal :searchData="searchData" :pageName="'shortlisted'" @filterByData="getProposalData"/>
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
                    <li class="mr-0"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"></path></svg> </li>
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
                <div class="mr-3 text-center"><b>$ {{proposal.cost}}</b> <br><span>
                  <!-- Per Hour -->
                </span></div>
                <button type="button" class="btn btn-outline-secondary br-50 mr-3 btn-like" :class="(proposal.application_status == 3)?'saved-btn':''" @click="proposalLike(proposal,1)">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1073_19285)">
                    <path d="M17.6833 13.159C18.0522 12.6885 18.2291 12.1841 18.2065 11.6647C18.184 11.0925 17.928 10.6446 17.7172 10.3698C17.9619 9.76002 18.056 8.80017 17.2392 8.05488C16.6407 7.50908 15.6244 7.26441 14.2166 7.33217C13.2266 7.37734 12.3985 7.56178 12.3646 7.56931H12.3609C12.1727 7.60318 11.9732 7.64459 11.7699 7.68976C11.7548 7.44885 11.7963 6.85036 12.2404 5.5028C12.7674 3.89929 12.7373 2.67219 12.1425 1.85161C11.5177 0.989629 10.5202 0.921875 10.2266 0.921875C9.94431 0.921875 9.68458 1.03856 9.50014 1.25312C9.08232 1.73869 9.13126 2.63455 9.18396 3.0486C8.68709 4.3811 7.29437 7.64835 6.1162 8.5555C6.09362 8.57056 6.0748 8.58938 6.05598 8.6082C5.70968 8.97332 5.4763 9.36855 5.31821 9.71485C5.09613 9.5944 4.84393 9.52665 4.57292 9.52665H2.27681C1.41106 9.52665 0.710938 10.2305 0.710938 11.0925V17.2092C0.710938 18.075 1.41483 18.7751 2.27681 18.7751H4.57292C4.90792 18.7751 5.22034 18.6697 5.4763 18.489L6.36087 18.5944C6.49638 18.6132 8.90541 18.9181 11.3784 18.8692C11.8264 18.9031 12.2479 18.9219 12.6394 18.9219C13.3132 18.9219 13.9004 18.8692 14.3897 18.7638C15.5415 18.5191 16.3282 18.0298 16.7272 17.3108C17.0321 16.7613 17.0321 16.2155 16.9832 15.8692C17.7323 15.1916 17.864 14.4426 17.8377 13.9156C17.8226 13.6107 17.7548 13.351 17.6833 13.159ZM2.27681 17.7588C1.97192 17.7588 1.72725 17.5103 1.72725 17.2092V11.0888C1.72725 10.7839 1.97568 10.5392 2.27681 10.5392H4.57292C4.87781 10.5392 5.12248 10.7876 5.12248 11.0888V17.2054C5.12248 17.5103 4.87405 17.755 4.57292 17.755H2.27681V17.7588ZM16.7197 12.7186C16.5616 12.8842 16.5315 13.1364 16.652 13.3322C16.652 13.3359 16.8063 13.5994 16.8251 13.9608C16.8515 14.4539 16.6143 14.8905 16.1175 15.2632C15.9405 15.3987 15.869 15.632 15.9443 15.8428C15.9443 15.8466 16.1062 16.3435 15.8427 16.814C15.5905 17.2657 15.0296 17.5894 14.1789 17.7701C13.4976 17.9169 12.5717 17.9432 11.4349 17.8529C11.4198 17.8529 11.401 17.8529 11.3822 17.8529C8.96187 17.9056 6.5152 17.5894 6.48885 17.5856H6.48509L6.10491 17.5405C6.1275 17.4351 6.13879 17.3221 6.13879 17.2092V11.0888C6.13879 10.9269 6.11244 10.7688 6.06727 10.622C6.13502 10.3698 6.32323 9.80895 6.7674 9.33091C8.45748 7.99089 10.1099 3.47018 10.1814 3.27445C10.2116 3.1954 10.2191 3.10883 10.204 3.02225C10.14 2.60067 10.1626 2.08499 10.253 1.93066C10.4525 1.93442 10.9907 1.99088 11.3144 2.43881C11.6984 2.96955 11.6833 3.91811 11.2693 5.17533C10.6369 7.09126 10.5842 8.10005 11.0848 8.54421C11.3333 8.76629 11.6645 8.77759 11.9054 8.69101C12.135 8.63831 12.3533 8.59314 12.5604 8.55927C12.5754 8.5555 12.5942 8.55174 12.6093 8.54798C13.7649 8.29578 15.8351 8.14145 16.5541 8.79641C17.1639 9.3535 16.731 10.0913 16.6821 10.1703C16.5428 10.3811 16.5842 10.6559 16.7724 10.8253C16.7762 10.829 17.1714 11.2017 17.1902 11.7023C17.2053 12.0373 17.0472 12.3798 16.7197 12.7186Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1073_19285">
                    <rect width="18" height="18" fill="white" transform="translate(0.460938 0.921875)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </button>
                <button type="button" class="btn btn-outline-secondary br-50 mr-3 btn-like" :class="(proposal.application_status == 4)?'saved-btn':''" @click="proposalDislike(proposal,4)">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2511_17183)"><path d="M17.3943 5.88297C17.7631 6.35349 17.9401 6.85788 17.9175 7.37733C17.8949 7.94947 17.6389 8.3974 17.4281 8.67218C17.6728 9.28197 17.7669 10.2418 16.9501 10.9871C16.3516 11.5329 15.3353 11.7776 13.9275 11.7098C12.9376 11.6647 12.1094 11.4802 12.0756 11.4727H12.0718C11.8836 11.4388 11.6841 11.3974 11.4808 11.3522C11.4658 11.5931 11.5072 12.1916 11.9514 13.5392C12.4783 15.1427 12.4482 16.3698 11.8535 17.1904C11.2286 18.0524 10.2312 18.1201 9.93755 18.1201C9.65524 18.1201 9.39552 18.0034 9.21108 17.7889C8.79326 17.3033 8.8422 16.4074 8.89489 15.9934C8.39803 14.6609 7.00531 11.3936 5.82714 10.4865C5.80456 10.4714 5.78574 10.4526 5.76692 10.4338C5.42062 10.0687 5.18724 9.67344 5.02915 9.32714C4.80707 9.44759 4.55487 9.51535 4.28385 9.51535H1.98775C1.122 9.51535 0.421875 8.81146 0.421875 7.94947V1.83278C0.421875 0.967037 1.12576 0.266912 1.98775 0.266912H4.28385C4.61886 0.266912 4.93128 0.372307 5.18724 0.552984L6.07181 0.44759C6.20732 0.428768 8.61635 0.123875 11.0894 0.17281C11.5373 0.138931 11.9589 0.12011 12.3504 0.12011C13.0241 0.12011 13.6113 0.172808 14.1007 0.278204C15.2525 0.522871 16.0392 1.01221 16.4382 1.73115C16.7431 2.28071 16.7431 2.82651 16.6941 3.17281C17.4432 3.85035 17.5749 4.59941 17.5486 5.12639C17.5335 5.43128 17.4658 5.691 17.3943 5.88297ZM1.98775 1.28322C1.68285 1.28322 1.43819 1.53165 1.43819 1.83278V7.95324C1.43819 8.25813 1.68662 8.5028 1.98775 8.5028H4.28385C4.58875 8.5028 4.83342 8.25437 4.83342 7.95324V1.83655C4.83342 1.53165 4.58498 1.28699 4.28385 1.28699H1.98775V1.28322ZM16.4306 6.32338C16.2726 6.15775 16.2424 5.90556 16.3629 5.70982C16.3629 5.70606 16.5172 5.44257 16.536 5.08122C16.5624 4.58812 16.3253 4.15148 15.8284 3.77883C15.6515 3.64332 15.58 3.40995 15.6552 3.19916C15.6552 3.19539 15.8171 2.69853 15.5536 2.22802C15.3014 1.77632 14.7406 1.45261 13.8899 1.27193C13.2086 1.12513 12.2826 1.09878 11.1458 1.18912C11.1308 1.18912 11.112 1.18912 11.0931 1.18912C8.67281 1.13642 6.22614 1.45261 6.19979 1.45637H6.19602L5.81585 1.50154C5.83843 1.60694 5.84973 1.71986 5.84973 1.83278V7.95324C5.84973 8.11509 5.82338 8.27319 5.77821 8.41999C5.84596 8.67218 6.03417 9.23304 6.47833 9.71108C8.16842 11.0511 9.82086 15.5718 9.89238 15.7675C9.9225 15.8466 9.93002 15.9332 9.91497 16.0197C9.85098 16.4413 9.87356 16.957 9.9639 17.1113C10.1634 17.1076 10.7017 17.0511 11.0254 16.6032C11.4093 16.0724 11.3943 15.1239 10.9802 13.8667C10.3478 11.9507 10.2951 10.9419 10.7958 10.4978C11.0442 10.2757 11.3754 10.2644 11.6163 10.351C11.846 10.4037 12.0643 10.4488 12.2713 10.4827C12.2864 10.4865 12.3052 10.4903 12.3202 10.494C13.4758 10.7462 15.5461 10.9005 16.265 10.2456C16.8748 9.6885 16.4419 8.95073 16.393 8.87168C16.2537 8.66089 16.2951 8.38611 16.4833 8.21673C16.4871 8.21296 16.8823 7.84031 16.9012 7.33969C16.9162 7.00468 16.7581 6.66215 16.4306 6.32338Z" fill="black"></path></g><defs><clipPath id="clip0_2511_17183"><rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0.171875 18.1201)"></rect></clipPath></defs></svg>
                </button>
                <button type="button" class="btn btn-outline-theme mr-3" v-b-toggle.sidebar-message @click="messageModel(proposal)">Messages</button>
                <a class="btn btn-theme" target="_blank" :href="$router.resolve({name:'hiredetails',path:'/client/hire-details',params:{ pid:proposal.uniq_id,uid:encodedid(proposal.user_id)}}).href">Hire</a>

                <!-- <button type="button" class="btn btn-theme" @click="proposalHire(proposal,2)">Hire</button> -->
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
                    <TalentBage :talentQualilty="searchData.talentQualilty" :talent_id="proposal.talent_id"/>
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
            <h4 class="fz-20 fw-600 text-black">You don't have any Shortlisted yet</h4>
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
  // import VueReadMoreSmooth from "vue-read-more-smooth";
  import TalentBage from "../../../components/common/TalentBage.vue";
  import FilterReviewproposal from "../../../components/common/FilterReviewproposal.vue";
  import {SliderFrame, SliderSlides, SliderSlide} from 'vue-dynamic-slider';

  export default {
    components : {
      MessageDetails,
      TalentBage,
      FilterReviewproposal,
      SliderSlide, SliderSlides, SliderFrame,

      // VueReadMoreSmooth
    },
    props:['jobId','jobDetails','searchData'],
    computed:{
    },
    data() {
      return {
        filterTab:false,
        proposals:[],
        proposalData:[],
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
        sliderScrollDataa:[],

      } 
    },
    mounted(){
      // this.getProposalData();
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest","fetchTalentList"]),
      // this fun is for slide skills
      SlideSkill(id,direction,_i){
          var slider_width = document.querySelector('#'+id).parentElement.scrollWidth;
          var main_width = document.querySelector('#'+id).scrollWidth;
          if(direction =='right'){
            if(this.sliderScrollDataa[_i] > 0){
              this.sliderScrollDataa[_i] = this.sliderScrollDataa[_i]+parseInt(slider_width);
            }else{
              this.sliderScrollDataa[_i] = parseInt(slider_width);
            }
            if(main_width > this.sliderScrollDataa[_i]){
              const conent = document.querySelector('#'+id);
              conent.scrollLeft += slider_width;
              // console.log('sliderScrollDataa',this.sliderScrollDataa[_i]);
              // console.log('main_width',main_width);
              if(this.sliderScrollDataa[_i] == main_width){
                document.getElementById('next_'+_i).style.display = 'none';
              }
              document.getElementById('prev_'+_i).style.display = 'block';
            }else if(this.sliderScrollDataa[_i] >= main_width){
              this.sliderScrollDataa[_i] = this.sliderScrollDataa[_i]-parseInt(slider_width);
              document.getElementById('next_'+_i).style.display = 'none';
            }
          }else{
            // currentSlide_position-=slider_width
            this.sliderScrollDataa[_i] = this.sliderScrollDataa[_i]-parseInt(slider_width);
            if(this.sliderScrollDataa[_i] >= 0){
              const conent = document.querySelector('#'+id);
              conent.scrollLeft -= slider_width;
              if(conent.scrollLeft==0){
                document.getElementById('prev_'+_i).style.display = 'none';
              }
              document.getElementById('next_'+_i).style.display = 'block';
            }else if(this.sliderScrollDataa[_i] < 0){
              document.getElementById('prev_'+_i).style.display = 'none';
              this.sliderScrollDataa[_i] = this.sliderScrollDataa[_i]+parseInt(slider_width);
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
        this.$emit('applicationStatus2');
      },
      //this fun is for to like the post
      async proposalLike(_v,_i){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/addHire",
          params: { "jobData": _v, "action": _i }
        });
        if(res){
          this.getProposalData();
          this.$emit('applicationStatus2');
          this.$toastr.s('Proposal Remove from Shortlisted Successfully');
        }else{
          this.$toastr.e('Proposal Like Unsuccessfull');
        }
      },
      //this fun is for to dislike the post
      async proposalDislike(_v,_i){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/addHire",
          params: { "jobData": _v, "action": _i }
        });
        if(res){
          this.getProposalData();
          this.$emit('applicationStatus2');
          this.$toastr.s('Proposal Archived Successfully');
        }else{
          this.$toastr.e('Proposal DisLike Unsuccessfull');
        }
      },
      //this fun is for to dislike the post
      async proposalHire(_v,_i){
        var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/addHire",
          params: { "jobData": _v, "action": _i }
        });
        if(res){
          this.getProposalData();
          this.$emit('applicationStatus2');
          this.$toastr.s('Hired Successfully');
        }else{
          this.$toastr.e('Hired Unsuccessfull');
        }
      },
      //this fun is for get proposal list
      async getProposalData(filter=null){
        this.loaderStatus= true;
        var requestData={};
        requestData.jobsid = this.jobId;
        requestData.filter = 3;
        if(filter!=null){
          requestData.search = filter;
        }
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "getjobApplicantList",
              params: requestData
          });  
        this.proposalData = [];
        if(res.length > 0){
          this.proposalData = res;
          this.loaderStatus= false;
        }else{
          this.loaderStatus= false;
        }
      },
      toggleDropdown (event) {
        event.currentTarget.classList.toggle('is-active')
      }
    }
  }
</script>

