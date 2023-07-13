<template>
  <div class="container"
    v-infinite-scroll="getDataOnScroll"
    :infinite-scroll-disabled="busy"
    infinite-scroll-distance="1"
  >
    <div class="row mt-100 mb-50 freelancer-wrap">
      <div class="col-md-12 col-lg-9 col-xl-9">
        <div class="left-content">
          <div class="card theme-bg br-20 bordered mb-3">
            <div class="card-body d-md-flex align-items-center p-5 bg-none">
              <div class="content">
                <h6 class="fz-20 fw-600 text-black">{{todayDate}}{{dateOrdinal(todayday)}}</h6>
                <h2 class="fz-34 fw-600 text-black" v-if="todayMessage < 12 ">Good Morning <span class="name">{{userFullDetails.first_name}}</span></h2>
                <h2 class="fz-34 fw-600 text-black" v-else-if="todayMessage < 18 ">Good Afternoon <span class="name">{{userFullDetails.first_name}}</span></h2>
                <h2 class="fz-34 fw-600 text-black" v-else>Good Evening <span class="name">{{userFullDetails.first_name}}</span></h2>
              </div>
              <div class="img-holder ml-auto">
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M78.0257 0.0629322C77.7128 0.0787382 77.4031 0.134386 77.1041 0.228531L3.38386 22.3468C2.65618 22.5704 2.01555 23.0137 1.54994 23.616C1.08433 24.2183 0.816577 24.9499 0.783441 25.7104C0.750306 26.471 0.953414 27.2231 1.36488 27.8636C1.77634 28.5041 2.37598 29.0015 3.08147 29.2875L34.754 41.9738L46.0796 30.6483C46.7455 29.9628 47.6516 29.5627 48.6068 29.5323C49.3457 29.5151 50.0727 29.7203 50.6936 30.1214C51.3144 30.5225 51.8003 31.101 52.0883 31.7817C52.3763 32.4624 52.453 33.214 52.3085 33.9389C52.164 34.6637 51.8049 35.3284 51.2779 35.8467L39.9524 47.1722L52.6387 78.8448C52.9247 79.5503 53.4222 80.1499 54.0626 80.5614C54.7031 80.9728 55.4553 81.1759 56.2158 81.1428C56.9763 81.1097 57.708 80.8419 58.3102 80.3763C58.9125 79.9107 59.3559 79.2701 59.5795 78.5424L81.6977 4.8221C81.8693 4.25924 81.9038 3.66348 81.7981 3.08461C81.6924 2.50574 81.4496 1.96058 81.0902 1.49469C80.7307 1.0288 80.265 0.655726 79.7318 0.406642C79.1987 0.157558 78.6137 0.0397047 78.0257 0.0629322ZM15.4366 40.5843C14.4814 40.6146 13.5753 41.0148 12.9094 41.7002L1.82868 52.745C1.13551 53.4381 0.746094 54.3783 0.746094 55.3585C0.746094 56.3388 1.13551 57.279 1.82867 57.9721C2.52184 58.6653 3.46197 59.0547 4.44226 59.0547C5.42254 59.0547 6.36267 58.6653 7.05584 57.9721L18.1078 46.9202C18.6426 46.4033 19.0085 45.7367 19.1575 45.008C19.3065 44.2793 19.2316 43.5225 18.9427 42.8372C18.6537 42.1518 18.1642 41.5699 17.5385 41.1678C16.9128 40.7657 16.18 40.5623 15.4366 40.5843ZM30.1893 47.957C29.2215 47.9781 28.3008 48.3789 27.6261 49.073L1.82868 74.8704C1.48545 75.2136 1.2132 75.6211 1.02745 76.0695C0.841699 76.518 0.746095 76.9986 0.746095 77.484C0.746095 77.9694 0.8417 78.45 1.02745 78.8985C1.2132 79.3469 1.48546 79.7544 1.82868 80.0976C2.1719 80.4408 2.57936 80.7131 3.0278 80.8988C3.47624 81.0846 3.95687 81.1802 4.44226 81.1802C5.42254 81.1802 6.36267 80.7907 7.05584 80.0976L32.8533 54.3002C33.3902 53.7841 33.7582 53.1176 33.9089 52.3883C34.0596 51.659 33.986 50.9012 33.6976 50.2146C33.4093 49.528 32.9197 48.9448 32.2935 48.5418C31.6672 48.1388 30.9336 47.9349 30.1893 47.957ZM37.5332 62.7025C36.578 62.7329 35.672 63.133 35.006 63.8185L23.9541 74.8704C23.6109 75.2136 23.3386 75.6211 23.1529 76.0695C22.9671 76.518 22.8715 76.9986 22.8715 77.484C22.8715 77.9694 22.9671 78.45 23.1529 78.8985C23.3386 79.3469 23.6109 79.7544 23.9541 80.0976C24.2973 80.4408 24.7048 80.7131 25.1532 80.8988C25.6017 81.0846 26.0823 81.1802 26.5677 81.1802C27.0531 81.1802 27.5337 81.0846 27.9822 80.8988C28.4306 80.7131 28.8381 80.4408 29.1813 80.0976L40.226 69.0169C40.7519 68.4969 41.1093 67.8308 41.2518 67.1051C41.3942 66.3794 41.3151 65.6276 41.0247 64.9475C40.7343 64.2673 40.2461 63.6902 39.6234 63.2911C39.0008 62.8921 38.2725 62.6895 37.5332 62.7097V62.7025Z" fill="#F2613C" fill-opacity="0.4"/>
                </svg>
              </div>

            </div>
          </div>

          <!-- Right Side Content Starts -->
          <div class="dashboard-desktop">
            <div class="card text-center profile mb-3">
              <div class="card-body progress-wrap">
                <div class="img-holder br-10 mb-4 relative">
                  <span class="online" v-if="userFullDetails.loginstatus == 1"></span>
                  <img :src="$store.state.baseUrlImg+'upload/profile_image/'+$store.state.currentUserData.profile_picture_path" class="img-fluid">
                </div>
                <h4 class="fz-20 fw-600 text-black">{{userFullDetails.first_name+' '+userFullDetails.last_name}}</h4>
                <ul class="d-md-flex align-items-center justify-content-center fz-14 post text-muted mb-2">
                </ul>
                <p class="fz-14 text-muted">Main Category</p>
                <p class="fz-14 text-muted"><a class="text-black" href="javascript:void(0);" @click="$router.push('settings')">{{userFullDetails.mainCategory_Name}}</a></p>
                <b-progress  variant="success" :striped="striped" height="10px" :value="userFullDetails.profileSucessRate" max="0" animated></b-progress>
              </div>
            </div>
            <div class="card my-proposal p-4 mb-3">
              <div class="card-body">
                <!-- <h4 class="fz-20 fw-600 text-black">Availbility Badge</h4>
                <div class="d-flex align-items-center mb-3">
                  <span class="mr-2 available-span">Available Now</span>
                  <a href="javascript:void(0);" v-b-modal.availability-modal>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0469 17.229C12.7019 17.229 12.4219 16.949 12.4219 16.604C12.4219 16.259 12.7019 15.979 13.0469 15.979H13.0475C13.0475 15.634 13.3269 15.354 13.6722 15.354C14.0175 15.354 14.2969 15.634 14.2969 15.979C14.2969 16.6684 13.7363 17.229 13.0469 17.229Z" fill="#F2613C"/>
                      <path d="M13.6719 16.6038C13.3269 16.6038 13.0469 16.3238 13.0469 15.9788V9.84912C13.0469 9.50412 13.3269 9.22412 13.6719 9.22412C14.0169 9.22412 14.2969 9.50412 14.2969 9.84912V15.9788C14.2969 16.3238 14.0169 16.6038 13.6719 16.6038Z" fill="#F2613C"/>
                      <path d="M13.0469 17.229H1.79688C1.45188 17.229 1.17188 16.949 1.17188 16.604C1.17188 16.259 1.45188 15.979 1.79688 15.979H13.0469C13.3919 15.979 13.6719 16.259 13.6719 16.604C13.6719 16.949 13.3919 17.229 13.0469 17.229Z" fill="#F2613C"/>
                      <path d="M1.79688 17.229C1.1075 17.229 0.546875 16.6684 0.546875 15.979C0.546875 15.634 0.826875 15.354 1.17188 15.354C1.51687 15.354 1.79688 15.634 1.79688 15.979V15.9799C2.14188 15.9799 2.42188 16.2593 2.42188 16.6043C2.42188 16.9493 2.14188 17.229 1.79688 17.229Z" fill="#F2613C"/>
                      <path d="M1.17188 16.604C0.826875 16.604 0.546875 16.324 0.546875 15.979V4.729C0.546875 4.384 0.826875 4.104 1.17188 4.104C1.51687 4.104 1.79688 4.384 1.79688 4.729V15.979C1.79688 16.324 1.51687 16.604 1.17188 16.604Z" fill="#F2613C"/>
                      <path d="M1.17156 5.354C0.82625 5.354 0.546875 5.074 0.546875 4.729C0.546875 4.03963 1.1075 3.479 1.79688 3.479C2.14188 3.479 2.42188 3.759 2.42188 4.104C2.42188 4.449 2.14188 4.729 1.79688 4.729H1.79625C1.79625 5.074 1.51688 5.354 1.17156 5.354Z" fill="#F2613C"/>
                      <path d="M7.92656 4.729H1.79688C1.45188 4.729 1.17188 4.449 1.17188 4.104C1.17188 3.759 1.45188 3.479 1.79688 3.479H7.92656C8.27156 3.479 8.55156 3.759 8.55156 4.104C8.55156 4.449 8.27187 4.729 7.92656 4.729Z" fill="#F2613C"/>
                      <path d="M7.40031 8.79099C7.24031 8.79099 7.08031 8.73006 6.95844 8.60787C6.71437 8.36381 6.71437 7.96818 6.95844 7.72412L13.0625 1.62006C13.3063 1.376 13.7025 1.376 13.9463 1.62006C14.1903 1.86412 14.1903 2.25975 13.9463 2.50381L7.84219 8.60787C7.72031 8.73006 7.56 8.79099 7.40031 8.79099Z" fill="#F2613C"/>
                      <path d="M6.7975 11.604C6.75406 11.604 6.71 11.5997 6.66594 11.59C6.32844 11.5178 6.11344 11.1853 6.18594 10.8481L6.78937 8.03498C6.86156 7.69716 7.19468 7.48123 7.53156 7.55498C7.86906 7.62716 8.08406 7.95966 8.01156 8.29685L7.40812 11.11C7.345 11.4034 7.08593 11.604 6.7975 11.604Z" fill="#F2613C"/>
                      <path d="M9.61027 11.0005C9.45027 11.0005 9.29027 10.9395 9.1684 10.8173C8.92434 10.5733 8.92434 10.1777 9.1684 9.9336L15.2725 3.82953C15.5162 3.58547 15.9125 3.58547 16.1562 3.82953C16.4003 4.07359 16.4003 4.46922 16.1562 4.71328L10.0521 10.8173C9.93027 10.9395 9.77027 11.0005 9.61027 11.0005Z" fill="#F2613C"/>
                      <path d="M6.79647 11.604C6.50803 11.604 6.24897 11.4034 6.18584 11.1102C6.11366 10.7727 6.32834 10.4402 6.66584 10.368L9.47897 9.76429C9.81554 9.69272 10.1487 9.90648 10.2212 10.244C10.2934 10.5815 10.0787 10.914 9.74116 10.9862L6.92803 11.5899C6.88397 11.5993 6.83991 11.604 6.79647 11.604Z" fill="#F2613C"/>
                      <path d="M14.609 6.00111C14.449 6.00111 14.289 5.94018 14.1671 5.81799L11.9575 3.6083C11.7134 3.36424 11.7134 2.96861 11.9575 2.72455C12.2012 2.48049 12.5975 2.48049 12.8412 2.72455L15.0509 4.93424C15.295 5.1783 15.295 5.57393 15.0509 5.81799C14.929 5.94018 14.769 6.00111 14.609 6.00111Z" fill="#F2613C"/>
                      <path d="M15.714 4.89611C15.554 4.89611 15.394 4.83518 15.2718 4.71299C15.0278 4.46893 15.0278 4.07299 15.2718 3.82893C15.445 3.65611 15.5403 3.42049 15.5403 3.16643C15.5403 2.91236 15.445 2.67674 15.2718 2.50393C14.925 2.15674 14.2921 2.15705 13.9459 2.50361C13.7018 2.74768 13.3062 2.74768 13.0618 2.50393C12.8178 2.25986 12.8178 1.86393 13.0618 1.61986C13.4712 1.21018 14.0206 0.984863 14.6087 0.984863C15.1968 0.984863 15.7465 1.21049 16.1556 1.61986C16.5646 2.02893 16.7899 2.57799 16.7899 3.16643C16.7899 3.75486 16.5646 4.30424 16.1553 4.7133C16.034 4.83518 15.874 4.89611 15.714 4.89611Z" fill="#F2613C"/>
                    </svg>
                  </a>
                  <b-modal id="availability-modal" size="lg" title="Turn on availability badge">
                    <div class="text-left">
                      <div class="up-form-message d-flex mt-0 mb-2 text-left">
                        <div class="text-theme up-icon mr-2 p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2613C" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                          </svg>
                        </div> 
                        <p class="fz-14 fw-400 text-muted">
                          You had no profile views in the last 7 days. It is up to you when and whether to use the availability badge,
                          but freelancers with significant profile views seem to get the best use out of this feature.
                        </p>
                      </div>
                      <p class="fz-14 fw-400 text-black text-left">The price to turn on the badge may go up or down depending on how many people have it on. We’ll turn the badge off automatically if the price exceeds your maximum. How does this work?</p>
                      <b-form @submit="onSubmit">
                        <b-row>
                          <b-col lg="12" sm="12">
                            <b-form-group id="input-group-1">
                              <label class="fz-16 text-black fw-600">Current price</label><br>
                              <span class="fz-16 text-muted fw-400">6 Connects per week</span>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="12" sm="12">
                            <b-form-group id="input-group-2">
                              <label class="fz-16 text-black fw-600 mb-0" for="demo-sb">My Maximum Limit</label><br>
                              <small class="fz-12 text-muted">( Set the limit you're willing to spend per week. We'll turn the badge off automatically if the price exceeds this number )</small><br>
                              <div class="d-flex align-items-center">
                                <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100" class="w-25 mr-2"></b-form-spinbutton> Connects per week
                              </div>
                            </b-form-group>
                          </b-col>
                        </b-row>
                      </b-form>
                    </div>
                    <template #modal-footer>
                      <div class="w-100 text-right">
                        <a href="javascript:void(0);" class="text-theme mr-2">Cancel</a>
                        <b-button
                          size="lg"
                          class="btn btn-theme"
                          @click="show=false"
                        >
                          Turn On
                        </b-button>
                      </div>
                    </template>
                  </b-modal>
                </div> -->
                <h4 class="fz-20 fw-600 text-black">Profile Visibility</h4>
                <div class="d-flex align-items-center mb-3">
                  <span class="mr-2 text-muted" v-if="userFullDetails.profile_visibility == 0">Public</span>
                  <span class="mr-2 text-muted" v-else-if="userFullDetails.profile_visibility == 1">Qapin Users Only</span>
                  <span class="mr-2 text-muted" v-else-if="userFullDetails.profile_visibility == 2">Private</span>
                  <a href="javascript:void(0);" @click="profileModelshow=true" v-b-modal.visibility-modal>
                    <PencilEditIcon />
                  </a>
                  <b-modal v-model="profileModelshow" id="visibility-modal" size="lg" title="Edit Profile Visibility" centered no-close-on-backdrop hide-footer>
                    <b-form  @submit.prevent="profileSubmit" >
                      <div class="text-left">
                        <p class="fz-14 fw-600 text-black">Who do you want to see your profile? Simply select an option to control your visibility and searchability. Market your profile when and where you want.</p>
                          <b-row>
                            <b-col lg="12" sm="12">
                              <b-form-group v-slot="{ ariaDescribedby }" class="mb-3">
                                <b-form-radio :aria-describedby="ariaDescribedby" 
                              
                                :error-messages="profileVisibilityErrors"
                                @input="$v.profileVisibility.$touch()"
                                @blur="$v.profileVisibility.$touch()" 
                                v-model="profileVisibility" 
                                value="0" 
                                class="mb-0">
                                Public
                                </b-form-radio>
                                <small class="fz-14 fw-400 text-muted">Your profile is visible to the general public and will show up in search engine results</small>
                              </b-form-group>
                              <b-form-group v-slot="{ ariaDescribedby }" class="mb-3">
                                <b-form-radio
                                :checked="userFullDetails.profile_visibility == 1"
                                :aria-describedby="ariaDescribedby" v-model="profileVisibility" value="1" class="mb-0">Qapin Users Only</b-form-radio>
                                <small class="fz-14 fw-400 text-muted">Only logged in Qapin users will see your profile</small>
                              </b-form-group>
                              <b-form-group v-slot="{ ariaDescribedby }" class="mb-3">
                                <b-form-radio
                                :checked="userFullDetails.profile_visibility == 2"
                                :aria-describedby="ariaDescribedby" v-model="profileVisibility" value="2" class="mb-0">Private</b-form-radio>
                                <small class="fz-14 fw-400 text-muted">Your profile will not appear in search results on Qapin or search engines. It will not be visible via a direct link for non-Qapin users. Qapin users who have a direct link to your profile will see limited information. Clients you have worked with or submitted a proposal to will see your full profile.</small>
                              </b-form-group>
                            </b-col>
                          </b-row>
                          <div class="w-100 text-right border-top py-3">
                            <a href="javascript:void(0);" class="text-theme mr-2" @click="profileModelclose()">Cancel</a>
                            <b-button
                              size="lg"
                              class="btn btn-theme"
                              type="submit"
                            >
                              Save
                            </b-button>
                          </div>
                      </div>
                      
                    </b-form>
                  </b-modal>
                </div>
                <hr>
                <div class="d-flex align-items-center mb-3">
                  <h4 class="fz-20 fw-600 text-black mb-0 mr-2">My Categories</h4>
                  <a href="javascript:void(0);" v-b-modal.edit-category-modal v-on:click="getCategory">
                     <PencilEditIcon />
                  </a>
                  
                </div>
                <ul>
                  <li class="mb-1" v-for="(category,cids) in userFullDetails.Category_Name" :key="cids"><a href="javascript:void(0);" class="text-theme mb-1">{{category.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card my-proposal p-4 mb-3">
              <div class="card-body">
                <h4 class="fz-20 fw-600 text-black">Proposals</h4>
                <h6 class="text-muted">My Proposals</h6>
                <hr>
                <ul>
                  <li class="mb-1"><a href="javascript:void(0);" class="text-theme mb-1">{{proposalDetails.job_assign_to_me}} Invite to interview</a></li>
                  <li class="mb-1"><a href="javascript:void(0);" class="text-theme mb-1">{{proposalDetails.active_job}} Active proposal</a></li>
                  <li class="mb-1"><a href="javascript:void(0);" class="text-theme mb-1">{{proposalDetails.applied_job}} Submitted proposal</a></li>
                </ul>
              </div>
            </div>
            <div class="card p-4 my-proposal mb-3">
              <div class="card-body">
                <ul>
                  <li class="mb-1"><a href="javascript:void(0);" class="text-black mb-1 fz-20 fw-600">Get Paid <i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                  <li><hr></li>
                  <li class="mb-1"><a href="javascript:void(0);" class="text-black mb-1 fz-20 fw-600">Qapin Blogs <i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                  <li><hr></li>
                  <li class="mb-1"><a href="javascript:void(0);" class="text-black mb-1 fz-20 fw-600">Help Center <i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Right Side Content Starts -->

          <div class="input-group mb-3 search-bar">
            <input type="text" class="form-control border-none" v-model="search" @keyup="getSearchData()" placeholder="Search for Job, people, groups and more... " aria-describedby="basic-addon2">
            <span class="input-group-text bg-white cursor-pointer bg-hover-theme" id="basic-addon2" @click="openSearch()">
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9689 5.13525C16.0046 5.13525 17.9184 5.92799 19.3579 7.36746C20.7973 8.8069 21.59 10.7207 21.5901 12.7564C21.5901 14.7921 20.7973 16.706 19.3579 18.1454C17.9184 19.5849 16.0046 20.3776 13.9689 20.3776C11.9332 20.3776 10.0193 19.5849 8.57987 18.1454C7.14039 16.706 6.34766 14.7921 6.34766 12.7564C6.34766 10.7207 7.14039 8.8069 8.57987 7.36746C10.0193 5.92799 11.9331 5.13525 13.9689 5.13525ZM7.80186 12.7564C7.80186 16.1569 10.5683 18.9234 13.9688 18.9234C17.3693 18.9234 20.1358 16.1569 20.1358 12.7564C20.1358 9.35594 17.3694 6.58946 13.9689 6.58946C10.5684 6.58946 7.80186 9.35594 7.80186 12.7564Z" fill="#F2613C"/>
                <path d="M24.1347 21.8942L19.3548 17.1143C19.0708 16.8304 18.6104 16.8304 18.3265 17.1143C18.0425 17.3983 18.0425 17.8587 18.3265 18.1426L23.1063 22.9225C23.2483 23.0645 23.4344 23.1355 23.6205 23.1355C23.8066 23.1355 23.9927 23.0645 24.1347 22.9225C24.4186 22.6385 24.4186 22.1782 24.1347 21.8942Z" fill="#F2613C"/>
              </svg>
            </span>
          </div>
          <div class="card like-jobs">
            <div class="card-header py-4 px-4 bg-white">
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>Jobs you might like</b></h4>
            </div>
            <div class="card-body p-0">
              <ul class="nav nav-pills mb-3 py-2 px-4" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-home" aria-selected="true" v-on:click="getDataOnchange('')" >Recent Jobs <span class="badge badge-theme br-50"  v-html="(proposalDetails.recent_job > 0 )?proposalDetails.recent_job:''"></span></button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" v-on:click="getDataOnchange(3)">Saved Jobs <span class="badge badge-secondary br-50" v-html="(proposalDetails.saved_job > 0 )?proposalDetails.saved_job:''"></span></button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" v-on:click="getDataOnchange(10)">Dislike Jobs <span class="badge badge-secondary br-50" v-html="(proposalDetails.dislike_job > 0 )?proposalDetails.dislike_job:''"></span></button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div v-if="dataStatus">
                    <div class="job-card py-2 px-4 pb-4 mb-2 cursor-pointer text-theme-hover"  v-for="( pdata, index) in postData" :key="index" :class="(pdata.readStatus!=1)?'unread-bg':''" :id="pdata.jobs_id" >
                    <!-- <div class="job-card py-2 px-4 pb-4 mb-2 cursor-pointer text-theme-hover"  v-for="pdata in postData" :key="pdata.id" :class="(pdata.readStatus!=1)?'unread-bg':''" :id="pdata.jobs_id" v-b-toggle.sidebar-right v-on:click="postDetailsclick(pdata.jobs_id)"> -->
                      <div class="action-btn">
                        <button type="button" v-if="filterValue!=10" class="btn btn-secondary br-50 mr-1 btn-like" v-on:click="dislikePost(pdata.jobs_id)">
                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2511_17183)">
                            <path d="M17.3943 5.88297C17.7631 6.35349 17.9401 6.85788 17.9175 7.37733C17.8949 7.94947 17.6389 8.3974 17.4281 8.67218C17.6728 9.28197 17.7669 10.2418 16.9501 10.9871C16.3516 11.5329 15.3353 11.7776 13.9275 11.7098C12.9376 11.6647 12.1094 11.4802 12.0756 11.4727H12.0718C11.8836 11.4388 11.6841 11.3974 11.4808 11.3522C11.4658 11.5931 11.5072 12.1916 11.9514 13.5392C12.4783 15.1427 12.4482 16.3698 11.8535 17.1904C11.2286 18.0524 10.2312 18.1201 9.93755 18.1201C9.65524 18.1201 9.39552 18.0034 9.21108 17.7889C8.79326 17.3033 8.8422 16.4074 8.89489 15.9934C8.39803 14.6609 7.00531 11.3936 5.82714 10.4865C5.80456 10.4714 5.78574 10.4526 5.76692 10.4338C5.42062 10.0687 5.18724 9.67344 5.02915 9.32714C4.80707 9.44759 4.55487 9.51535 4.28385 9.51535H1.98775C1.122 9.51535 0.421875 8.81146 0.421875 7.94947V1.83278C0.421875 0.967037 1.12576 0.266912 1.98775 0.266912H4.28385C4.61886 0.266912 4.93128 0.372307 5.18724 0.552984L6.07181 0.44759C6.20732 0.428768 8.61635 0.123875 11.0894 0.17281C11.5373 0.138931 11.9589 0.12011 12.3504 0.12011C13.0241 0.12011 13.6113 0.172808 14.1007 0.278204C15.2525 0.522871 16.0392 1.01221 16.4382 1.73115C16.7431 2.28071 16.7431 2.82651 16.6941 3.17281C17.4432 3.85035 17.5749 4.59941 17.5486 5.12639C17.5335 5.43128 17.4658 5.691 17.3943 5.88297ZM1.98775 1.28322C1.68285 1.28322 1.43819 1.53165 1.43819 1.83278V7.95324C1.43819 8.25813 1.68662 8.5028 1.98775 8.5028H4.28385C4.58875 8.5028 4.83342 8.25437 4.83342 7.95324V1.83655C4.83342 1.53165 4.58498 1.28699 4.28385 1.28699H1.98775V1.28322ZM16.4306 6.32338C16.2726 6.15775 16.2424 5.90556 16.3629 5.70982C16.3629 5.70606 16.5172 5.44257 16.536 5.08122C16.5624 4.58812 16.3253 4.15148 15.8284 3.77883C15.6515 3.64332 15.58 3.40995 15.6552 3.19916C15.6552 3.19539 15.8171 2.69853 15.5536 2.22802C15.3014 1.77632 14.7406 1.45261 13.8899 1.27193C13.2086 1.12513 12.2826 1.09878 11.1458 1.18912C11.1308 1.18912 11.112 1.18912 11.0931 1.18912C8.67281 1.13642 6.22614 1.45261 6.19979 1.45637H6.19602L5.81585 1.50154C5.83843 1.60694 5.84973 1.71986 5.84973 1.83278V7.95324C5.84973 8.11509 5.82338 8.27319 5.77821 8.41999C5.84596 8.67218 6.03417 9.23304 6.47833 9.71108C8.16842 11.0511 9.82086 15.5718 9.89238 15.7675C9.9225 15.8466 9.93002 15.9332 9.91497 16.0197C9.85098 16.4413 9.87356 16.957 9.9639 17.1113C10.1634 17.1076 10.7017 17.0511 11.0254 16.6032C11.4093 16.0724 11.3943 15.1239 10.9802 13.8667C10.3478 11.9507 10.2951 10.9419 10.7958 10.4978C11.0442 10.2757 11.3754 10.2644 11.6163 10.351C11.846 10.4037 12.0643 10.4488 12.2713 10.4827C12.2864 10.4865 12.3052 10.4903 12.3202 10.494C13.4758 10.7462 15.5461 10.9005 16.265 10.2456C16.8748 9.6885 16.4419 8.95073 16.393 8.87168C16.2537 8.66089 16.2951 8.38611 16.4833 8.21673C16.4871 8.21296 16.8823 7.84031 16.9012 7.33969C16.9162 7.00468 16.7581 6.66215 16.4306 6.32338Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2511_17183">
                            <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0.171875 18.1201)"/>
                            </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <button type="button" v-if="pdata.action == 3" class="btn btn-secondary br-50 btn-archive saved-btn" :id="'res_'+pdata.jobs_id" v-on:click="savePost(pdata,index)">
                          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.82903 0.620117H11.997C12.6246 0.620117 13.1542 1.12649 13.1542 1.77727L13.1542 16.8113C13.1542 16.8115 13.1542 16.8116 13.1542 16.8118C13.1524 17.5271 12.2615 17.9031 11.7348 17.3707L11.7329 17.3688L7.8604 13.4974C7.35368 12.9738 6.47239 12.9738 5.96568 13.4974L2.0932 17.3688L2.09124 17.3707C1.56473 17.903 0.67387 17.5274 0.671875 16.8118V1.77727C0.671875 1.12649 1.20151 0.620117 1.82903 0.620117Z" stroke="black"/>
                          </svg>
                        </button>
                        <button type="button" v-else class="btn btn-secondary br-50 btn-archive" :id="'res_'+pdata.jobs_id" v-on:click="savePost(pdata,index)">
                          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.82903 0.620117H11.997C12.6246 0.620117 13.1542 1.12649 13.1542 1.77727L13.1542 16.8113C13.1542 16.8115 13.1542 16.8116 13.1542 16.8118C13.1524 17.5271 12.2615 17.9031 11.7348 17.3707L11.7329 17.3688L7.8604 13.4974C7.35368 12.9738 6.47239 12.9738 5.96568 13.4974L2.0932 17.3688L2.09124 17.3707C1.56473 17.903 0.67387 17.5274 0.671875 16.8118V1.77727C0.671875 1.12649 1.20151 0.620117 1.82903 0.620117Z" stroke="black"/>
                          </svg>
                        </button>
                      </div>
                      <h5 class="text-black fw-600 cursor-pointer text-theme-hover title-h5" v-b-toggle.sidebar-right v-on:click="postDetailsclick(pdata.jobs_id)">{{pdata.job_title}}</h5>
                      
                      <ul class="d-md-flex align-items-center fz-14 post text-muted mb-2" v-b-toggle.sidebar-right v-on:click="postDetailsclick(pdata.jobs_id)">
                        <li>Category-{{pdata.quality_inspector}}</li> 
                        <li class="d-none d-sm-none d-md-block d-lg-block d-lg-block">|</li> 
                        <li>Location- {{pdata.country_name+', '+pdata.state_name+', '+pdata.city_name}}</li> 
                        <li class="d-none d-sm-none d-md-block d-lg-block d-lg-block">|</li> 
                        <li>Posted {{pdata.time}}</li>
                      </ul>
                      <vue-read-more-smooth :lines="2" class="mt-2">

                      <p class="fz-14 text-black mb-2"  v-html="pdata.scope_of_work" v-b-toggle.sidebar-right v-on:click="postDetailsclick(pdata.jobs_id)"></p>

                      </vue-read-more-smooth>
                      
                      <p class="fz-14 text-black mt-4" v-b-toggle.sidebar-right v-on:click="postDetailsclick(pdata.jobs_id)">Client Location - <span class="text-muted">{{pdata.client_country}}</span></p>
                      <div class="skill-slider-wrapper">
                        <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0" style="margin-left:0px!important;">
                          <!-- <li class="mr-1 inline-block align-items-center" v-for="skill in pdata.skill_name" :key="skill.id"> {{skill}} </li> -->
                          <slider-frame :slides-per-view="5" >
                            <div>
                              <!-- With the exposed variables and methods it's simple to make your own pagination -->
                              <a href="javascript:void(0)" class="prev-btn text-theme" @click="SlideSkill('topSkill_'+index,'left',index)" style="display:none" :id="'prev_'+index"><i class="fa fa-chevron-left"></i></a>
                              <slider-slides :id="'topSkill_'+index" >
                                <!-- SliderSlide is currently needed for even sizing, but seems redundant so will likely be replaced with Flexbox CSS -->
                                <slider-slide :key="ix" v-for="(skill,ix) in pdata.skill_name"   >
                                  <li class="mr-1 inline-block align-items-center">{{skill}}</li>
                                </slider-slide>
                              </slider-slides>
                              <a href="javascript:void(0)" class="next-btn text-theme" v-if="pdata.skill_name.length > 4" @click="SlideSkill('topSkill_'+index,'right',index)" :id="'next_'+index"><i class="fa fa-chevron-right"></i></a>
                            </div>
                          </slider-frame>
                          
                        </ul>
                      </div>
                      <!--<div class="up-skill-container">
                          <button data-cy="left-arrow" type="button" class="up-btn up-btn-link up-btn-prev" style="">
                            <span class="sr-only">
                              Previous skills
                            </span> 
                            <div class="up-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                                <polygon fill-rule="evenodd" points="3 7 10.433 14 12 12.524 6.134 7 12 1.476 10.433 0"></polygon>
                              </svg>
                            </div>
                          </button>
                          <div class="up-skill-wrapper">
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=1110580541408137216" tabindex="0" data-test="attr-item">Database Architecture</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=1031626795181916160" tabindex="0" data-test="attr-item">Web Design</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=1110580737240190976" tabindex="0" data-test="attr-item">Web Application</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=1031626782364123136" tabindex="0" data-test="attr-item">SQL</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=996364628025274385" tabindex="0" data-test="attr-item">PHP</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=1110580482322976768" tabindex="0" data-test="attr-item">API</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=996364628025274383" tabindex="0" data-test="attr-item">JavaScript</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=996364627995914247" tabindex="0" data-test="attr-item">MySQL</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=1110580682663907328" tabindex="0" data-test="attr-item">RESTful API</a>
                            <a data-v-b655caf0="" class="up-skill-badge" href="/nx/jobs/search/?ontology_skill_uid=1031626753368899584" tabindex="0" data-test="attr-item">Laravel</a>
                          </div>

                          <button data-cy="right-arrow" type="button" class="up-btn up-btn-link up-btn-next" style="">
                            <span class="sr-only">
                              Next skills
                            </span> 
                            <div class="up-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                                <polygon fill-rule="evenodd" points="11.5 7 4.067 0 2.5 1.476 8.366 7 2.5 12.524 4.067 14"></polygon>
                              </svg>
                            </div>
                          </button>
                        </div>-->
                    </div>
                  </div>
                  <div v-else>
                    <div class="job-card py-8 px-4 pb-4 mb-2 text-center dashboard-empty">
                      <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2 m-auto">
                        <path d="M66.1246 6.34896C71.2699 2.78071 78.0895 2.78071 83.2348 6.34896C86.5425 8.64289 90.6329 9.51233 94.5877 8.76211C100.74 7.59512 106.97 10.3689 110.219 15.7214C112.307 19.1624 115.691 21.6204 119.609 22.5436C125.703 23.9797 130.266 29.0476 131.057 35.2589C131.566 39.252 133.657 42.8736 136.861 45.3106C141.844 49.1014 143.952 55.5872 142.148 61.5833C140.989 65.438 141.426 69.5969 143.361 73.1263C146.372 78.6164 145.659 85.3986 141.573 90.1427C138.946 93.1926 137.653 97.1697 137.986 101.181C138.504 107.421 135.094 113.327 129.431 115.999C125.791 117.717 122.992 120.824 121.665 124.624C119.6 130.536 114.082 134.544 107.822 134.682C103.798 134.77 99.9778 136.471 97.2192 139.402C92.9283 143.962 86.2577 145.38 80.483 142.96C76.7706 141.404 72.5888 141.404 68.8764 142.96C63.1017 145.38 56.4311 143.962 52.1401 139.402C49.3816 136.471 45.5613 134.77 41.537 134.682C35.277 134.544 29.7598 130.536 27.6946 124.624C26.3669 120.824 23.5687 117.717 19.9282 115.999C14.2654 113.327 10.8556 107.421 11.3732 101.181C11.7059 97.1697 10.4136 93.1926 7.78652 90.1427C3.7 85.3986 2.98715 78.6164 5.99803 73.1263C7.93364 69.5969 8.37075 65.438 7.21125 61.5833C5.40762 55.5872 7.51499 49.1014 12.4986 45.3106C15.7024 42.8736 17.7933 39.252 18.3019 35.2589C19.093 29.0476 23.6562 23.9797 29.7508 22.5436C33.6688 21.6204 37.052 19.1624 39.1407 15.7214C42.3898 10.3689 48.6199 7.59512 54.7716 8.76211C58.7264 9.51233 62.8169 8.64289 66.1246 6.34896Z" fill="#F2613C"/>
                        <path d="M68.7901 83.7077H76.827L84.2389 55.3104L86.8286 44.0586H74.5945L72.8978 55.3104L68.7901 83.7077ZM68.8794 104.961C74.0587 104.961 77.6307 100.496 77.6307 96.0311C77.6307 92.1912 75.1303 89.3336 71.2904 89.3336C66.1111 89.3336 62.5391 93.9772 62.5391 98.3529C62.5391 102.282 65.0395 104.961 68.8794 104.961Z" fill="white"/>
                      </svg>
                      <p class="fz-20 fw-600 text-black mb-0">No Post Available</p>
                    </div>
                  </div>
                </div>
                <!-- right side bar  -->
                <sidebar ref="postDetailsc"></sidebar>
              </div>
            </div>
          </div>
          <div class="text-center py-4 text-theme" v-if="loaderStatus">
            <b-spinner type="border" medium></b-spinner>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-3 col-md-3">
        <div class="right-content dashboard-mobile">
          <div class="card text-center profile mb-3">
            <div class="card-body progress-wrap">
              <div class="img-holder br-10 mb-4 relative">
                <span class="online" v-if="userFullDetails.loginstatus == 1"></span>
                <img :src="$store.state.baseUrlImg+'upload/profile_image/'+$store.state.currentUserData.profile_picture_path" class="img-fluid">
              </div>
              <h4 class="fz-20 fw-600 text-black">{{(userFullDetails.first_name!='') ? userFullDetails.first_name:''}} {{ (userFullDetails.last_name!=''&& userFullDetails.last_name!=null) ? userFullDetails.last_name.slice(0,1) :'' }}.</h4>
              <ul class="d-md-flex align-items-center justify-content-center fz-14 post text-muted mb-2">
              </ul>
              <p class="fz-14 text-muted">Main Category</p>
              <p class="fz-14 text-muted"><a class="text-black" href="javascript:void(0);" @click="$router.push('settings')">{{userFullDetails.mainCategory_Name}}</a></p>
              <b-progress variant="success" :striped="striped" height="10px" :value="userFullDetails.profileSucessRate" max="0" animated></b-progress>

            </div>
          </div>
          
          <div class="card my-proposal p-4 mb-3">
            <div class="card-body">
              
              <h4 class="fz-20 fw-600 text-black">Profile Visibility</h4>
              <div class="d-flex align-items-center mb-3">
                <span class="mr-2 text-muted" v-if="userFullDetails.profile_visibility == 0">Public</span>
                <span class="mr-2 text-muted" v-else-if="userFullDetails.profile_visibility == 1">Qapin Users Only</span>
                <span class="mr-2 text-muted" v-else-if="userFullDetails.profile_visibility == 2">Private</span>
                <a href="javascript:void(0);" @click="profileModelshow=true" v-b-modal.visibility-modal>
                  <PencilEditIcon />
                </a>
              </div>
              <hr>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fz-20 fw-600 text-black mb-0 mr-2">My Categories</h4>
                <a href="javascript:void(0);" v-b-modal.edit-category-modal v-on:click="getCategory">
                  <PencilEditIcon />
                </a>
              </div>
              <ul>
                <li class="mb-1" v-for="(category,cids) in userFullDetails.Category_Name" :key="cids"><a href="javascript:void(0);" class="text-theme mb-1">{{category.name}}</a></li>
              </ul>
            </div>
          </div>
          <div class="card my-proposal p-4 mb-3">
            <div class="card-body">
              <h4 class="fz-20 fw-600 text-black">Proposals</h4>
              <h6 class="text-muted">My Proposals</h6>
              <div class="wrapper-employment_Text">
                <h4 class="mb-0 text-black">enquiry setting</h4>
                <p class="'text-muted mb-0">Lerel ipsum is the industry text by default.</p>
              </div>  
              <hr>
              <ul>
                <li class="mb-1"><a href="javascript:void(0);" class="text-theme mb-1">{{proposalDetails.job_assign_to_me}} Invite to interview</a></li>
                <li class="mb-1"><a href="javascript:void(0);" class="text-theme mb-1">{{proposalDetails.active_job}} Active proposal</a></li>
                <li class="mb-1"><a href="javascript:void(0);" class="text-theme mb-1">{{proposalDetails.applied_job}} Submitted proposal</a></li>
              </ul>
            </div>
          </div>
          <div class="card p-4 my-proposal mb-3">
            <div class="card-body">
              <ul>
                <li class="mb-1"><a href="javascript:void(0);" class="text-black mb-1 fz-20 fw-600">Get Paid <i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                <li><hr></li>
                <li class="mb-1"><a href="javascript:void(0);" class="text-black mb-1 fz-20 fw-600">Qapin Blogs <i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                <li><hr></li>
                <li class="mb-1"><a href="javascript:void(0);" class="text-black mb-1 fz-20 fw-600">Help Center <i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- model for edit category -->
    <b-modal v-model="categoryModelshow" centered no-close-on-backdrop id="edit-category-modal" size="lg" title="Edit Categories" >
      <div class="text-left">
        <h5 class="fz-20 fw-600 text-black">What are the main services you offer to clients?</h5>
        <p class="fz-14 fw-400 text-muted">Select up to 10 categories.</p>
        <div class="fz-14 tags mb-0">
          <span class="up-skill-badge inline-block align-items-center" v-for="(catName,cids) in category_data" :key="cids">
            {{catName.name}} 
            <a href="javascript:" class="text-muted">
              <div class="up-icon xs pt-1">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr(cids)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
              </div>
            </a>
          </span>
        </div>
        <div class="accordion mt-3">
          <div  v-for="(category,id) in categoryData" :key="id">
            <b-button  class="d-block mb-0" v-b-toggle="`collapse-${id}`" v-on:click="addCategoryArr(category.qp_role_master_id,category.role_name)">{{category.role_name }}
            <!-- <i class="fa fa-chevron-down float-right fw-400 text-muted fz-12"></i> -->
            </b-button>
            <!-- <b-collapse :id="`collapse-${id}`">
              <b-card>
                <div class="mb-30 tags">
                  <span class="up-skill-badge" v-for="(skill,skid) in category.skills" :key="skid">
                    {{skill.skill_name}}
                  </span>
                </div>
              </b-card>
            </b-collapse> -->
          </div>
        </div>
      </div>
      <template #modal-footer>
        <div class="w-100 text-right">
          <a href="javascript:void(0);" class="text-theme mr-2" @click="closecategoryModal()">Cancel</a>
          <b-button
            size="lg"
            class="btn btn-theme"
            @click="updateCategory()"
          >
            Save
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
  
</template>
<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import VueReadMoreSmooth from "vue-read-more-smooth";
import PencilEditIcon from "../../components/icons/PencilEditIcon.vue"; 
import { mapActions } from "vuex";
import {SliderFrame, SliderSlides, SliderSlide} from 'vue-dynamic-slider';
import sidebar from  "@/components/freelancer/jobDetail-sidebar";
// let base_url = "http://qapin_mvp5.manageprojects.in/";

export default {
  components: {
    VueReadMoreSmooth, PencilEditIcon, SliderSlide, SliderSlides, SliderFrame,sidebar
  },   
  mixins: [validationMixin],

  validations: {
    profileVisibility:{ required},
  },

  data() {
    return {
      striped:true,
      busy:false,
      isHidden: true,
      headToken:'',
      profileImg:'',
      postCounts:'',
      postData:[],
      dataStatus: false,
      loaderStatus: true,
      filterValue:'',
      todayMessage:'',
      todayDate:'',
      jobDetails:[],
      userFullDetails:'',
      categoryData:'',
      variant:'',
      value:'',
      search:'',
      showFullText:false,
      proposalDetails:'',
      profileVisibility:'',
      profileModelshow:false,
      category_data:[],
      category_ids:[],
      clientJobsData:[],
      jobApplicationStatus:[],
      jobPostCount:0,
      categoryModelshow:false,
      startstatus:false,
      clientrating:false,
      clientFullDetails:'',
      login_user_id:'',
      proposal_url:0,
      proposalbtn_text:'Submit a Proposal',
      jobLink:'',
      getDataType:'recent',
      start_limit:0,
      end_limit:3,
      todayday:'',
      sliderScrollData:[],

    }
  },
  methods: {
    closecategoryModal(){
      this.getUserDetails(this.userFullDetails);
      this.$bvModal.hide('edit-category-modal');
    },
    profileModelclose(){
      this.getUserDetails(this.userFullDetails);
      this.$bvModal.hide('visibility-modal');
    },
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
          console.log('sliderScrollData',this.sliderScrollData[_i]);
          console.log('main_width',main_width);
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
        
        // console.log('left', conent.scrollLeft);
        // console.log('main_width', main_width,_i);
      }
      
    },
    getSearchData(){
      this.postData=[];
      this.start_limit=0;
      this.busy = false;
      if(this.getDataType == 'recent'){
        this.getData();
      }else if(this.getDataType == 'saved'){
        this.getData(3);
      }else if(this.getDataType == 'dislike'){
        this.getData(10);
      }
    },
    // this fun is for to change data tab
    getDataOnchange(_v){
      if(_v == ''){          
        this.getDataType='recent';
      }else if(_v == 3){
        this.getDataType='saved';
      }else if(_v == 10){
        this.getDataType='dislike';
      }
      this.postData=[];
      this.start_limit=0;
      this.busy = false;
      this.getData(_v);
    },
    // this fun for to get data on scroll
    getDataOnScroll(){
      if(this.getDataType == 'recent'){
        this.getData();
      }else if(this.getDataType == 'saved'){
        this.getData(3);
      }else if(this.getDataType == 'dislike'){
        this.getData(10);
      }
    },
    // this fun for to get post data
    getData(filter){
      if(this.busy) return true;
      this.busy = true;
      this.filterValue=filter;
      this.loaderStatus= true;
      this.dataStatus= true;
      var  passApidata= {
          "user_id": this.login_user_id,
          "filter": filter,
          "from": "search",
          "search":{"title":this.search,"location": [], "locationDis": [], "cid": [],"start_limit":this.start_limit,"end_limit":this.end_limit}
      };
      axios.post(this.$store.state.baseUrl+'getJobsList',passApidata,{headers: this.headToken}).then((response)=>{
        if(response.data.status ==  true){
          var that  = this;
          response.data.result.map(function(item){ return    that.postData.push( item)  } );
          this.start_limit=this.postData.length;
          this.proposalDetails=response.data.dashboard;
          this.loaderStatus= false;
          this.busy = false;
          if (this.filterValue == '') {
              if (this.proposalDetails.recent_job > 0) this.dataStatus = true;
              else this.dataStatus = false;
          }
          else if(this.filterValue == 3){
              if (this.proposalDetails.saved_job > 0) this.dataStatus= true;
              else this.dataStatus= false;
          }else if(this.filterValue == 10){
              if (this.proposalDetails.dislike_job > 0) this.dataStatus= true;
              else this.dataStatus= false;
          }
        }else if(response.data.status ==  false && this.postData.length > 0){
          this.loaderStatus= false;
          this.dataStatus= true;
        }else{
          this.loaderStatus= false;
          this.dataStatus= false;
        }
      });
    },
    // this is for to recent post data
    recentApidata(){
      var  recentApidata= {
          "user_id": this.login_user_id,
          "filter": "",
          "from": "search",
          "search":{"location": [], "locationDis": [], "cid": [],"start_limit":this.start_limit,"end_limit":this.end_limit}
      };
      axios.post(this.$store.state.baseUrl+'getJobsList',recentApidata,{headers: this.headToken}).then((response)=>{
        if(response.data.status ==  true){
          var that  = this;
          response.data.result.map(function(item){ return that.postData.push( item)  } );
          this.start_limit = this.postData.length;
          this.proposalDetails=response.data.dashboard;
          this.loaderStatus= false;
          if (this.proposalDetails.recent_job > 0) this.dataStatus= true;
          else this.dataStatus= false;  
        }else{
          this.loaderStatus= true;
          this.dataStatus= false;
        }
      })
    },     
    ...mapActions(["genericAPIPOSTRequest"]),
    // this fun is for to open search page
    openSearch(){
      this.$router.push({
        name: 'Search',
        // path:'/freelancer/search',
        params: {input: this.search}
      });
    },
    // this fun is for updateCategory
    updateCategory(){
      var apiData = {'role_id':this.category_ids};
      axios.post(this.$store.state.baseUrl+'updateCategory',apiData,{'headers':this.headToken}).then((response)=>{
        // console.log('response',response);
          // var userdata = JSON.parse(localStorage.getItem('loginUserData'));
          var userdata = this.$store.state.currentUserData;
          var  userdetailApidata= {
            "data":[userdata.first_name+'-'+userdata.last_name+'-'+userdata.uuid,'miniProfileUrn'+userdata.uuid]
          };
          axios.post(this.$store.state.baseUrl+'user/getUserDetails',userdetailApidata,{headers: this.headToken}).then((response)=>{
            if(response.data.status ==  true){
              this.userFullDetails = response.data.result;
              this.profileVisibility = this.userFullDetails.profile_visibility;
              this.category_data=response.data.result.Category_Name;
              this.category_ids=response.data.result.Category_ids;
            }
          });

          if(response.data.status == true){
            this.categoryModelshow=false;
            this.$toastr.s('categorys successfully Updated');
          }else{
            this.categoryModelshow=false;
            this.$toastr.e('Categorys Not Updated');
          }
      });
    },
    // this fun is for to Remove select category
    removefromCategoryarr(index){
      if(this.category_data.length > 1){
        this.category_data.splice(index, 1); 
        this.category_ids.splice(index, 1); 
        console.log('data',this.category_ids);
        // \\OR   
        // this.$delete(this.category_data,index);
        // \\both will do the same
      }
    },
    // this fun is for to select category
    addCategoryArr(_i,_v){
      var arr ={'id':_i,'name':_v};
      if(!this.category_data.some(data => data.id === _i)){
          this.category_data.push(arr);     
      }
      if(!this.category_ids.some(data => data === _i)){
          this.category_ids.push(_i);     
      }
    },
    // this function is for dislike the post
    dislikePost(post){
      var  passApidata= { "post_id": post, "dislike_reason": "Not Interested"};
      axios.post(this.$store.state.baseUrl+'postDislike',passApidata,{headers: this.headToken}).then((response)=>{
        if(response.data.status ==  true){
          var  passApidata= {
              "user_id": this.login_user_id,
              "filter": this.filterValue,
              "from": "search",
              "search":{"location": [], "locationDis": [], "cid": []}
          };
          axios.post(this.$store.state.baseUrl+'getJobsList',passApidata,{headers: this.headToken}).then((response)=>{
            if(response.data.status ==  true){
              this.postData = response.data.result;
              this.proposalDetails=response.data.dashboard;
              this.loaderStatus= false;
              if (this.filterValue == '') {
                if (this.proposalDetails.recent_job > 0) this.dataStatus = true;
                else this.dataStatus = false;
              }
              else if(this.filterValue == 3){
                if (this.proposalDetails.saved_job > 0) this.dataStatus= true;
                else this.dataStatus= false;
              }else{
                if (this.proposalDetails.dislike_job > 0) this.dataStatus= true;
                else this.dataStatus= false;
              }
            }else{
              this.loaderStatus= false;
              this.dataStatus= false;
            }
          });
          this.$toastr.s('Post Disliked successfull');
        }else{
          this.$toastr.e('Post Not Disliked');
        }
      });
    },
    // this function is for profile status update
    profileSubmit(){
      this.$v.profileVisibility.$touch();
      //this code is for checking form value
      if (!this.$v.profileVisibility.$invalid) {
        var profiledata={"key": "profile_visibility",'value':this.profileVisibility};
        axios.post(this.$store.state.baseUrl+'setting/updateUserConfig',profiledata,{headers: this.headToken}).then((response)=>{
          if(response.data.status == true){
            this.userFullDetails.profile_visibility = this.profileVisibility;
            this.profileModelshow = false;
            this.$toastr.s('Profile Visibility successfully Updated');
          }else{
            this.$toastr.e('Profile Visibility Not Updated');
          }
        });
      }
    },
    // this function is for get category's skill 
    getCategory(){
      this.categoryModelshow=false;
      axios.post(this.$store.state.baseUrl+'common/getQpRoleMasterList',{headers: this.headToken}).then((response)=>{
        if(response.data.status == true){
          this.categoryData =response.data.result;
        }
      });
    },
    //this fun is for to read jobpost
    async addJobRead(data){
      await this.genericAPIPOSTRequest({
          requestUrl: "addJobread",
          params: {"user_id":this.login_user_id,'job_id': data},
      });
      return true;
    },
    // this function is for get post details
    async postDetailsclick(data){
      this.$refs.postDetailsc.postDetails(data);
      //this fun is for to read jobpost
      this.addJobRead(data);
      document.getElementById(data).classList.remove("unread-bg");

      // var apiData ={
      //   'jobsid':[data]
      // };
      // axios.post(this.$store.state.baseUrl+'getJobDetail',apiData,{"headers":this.headToken}).then((response)=>{
      //   if(response.data.status == true){
      //     this.jobDetailsWithClientData.jobDetails =  response.data.result[0];
      //     this.jobLink= window.location.origin+'/freelancer/job-details?jobDetailsWithClientData='+this.jobDetailsWithClientData.jobDetails.jobs_id;
      //     var jobApplicationStatus = {
      //       "jobsid": data,
      //       "user_id":this.jobDetailsWithClientData.jobDetails.user_id
      //     };
      //     axios.post(this.$store.state.baseUrl+'getJobApplicantStatus',jobApplicationStatus,{"headers":this.headToken}).then((response)=>{
      //       if(response.data.status == true){
      //         this.jobDetailsWithClientData.jobApplicationStatus =  response.data.result;
      //       }else{
      //         this.jobDetailsWithClientData.jobApplicationStatus =  '';
      //       }
      //     });
      //     var clientJobsapi = {
      //         "filter": "",
      //         "search": {},
      //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
      //     }
      //     axios.post(this.$store.state.baseUrl+'getUserPostedJob',clientJobsapi,{'headers':this.headToken}).then((response)=>{
      //       if (response.data.status==true) {
      //         this.jobDetailsWithClientData.clientJobsData =  response.data.result;
      //         this.jobDetailsWithClientData.clientJobsData.filter((jobdaata,id)=>{
      //           if(jobdaata.jobs_id == data){
      //             this.jobDetailsWithClientData.clientJobsData.splice(id,1);
      //           }
      //         })
      //       }else{
      //         this.jobDetailsWithClientData.clientJobsData =  [];
      //       }
      //     });
      //     var clientDetailsapi = {
      //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
      //     }
      //     axios.post(this.$store.state.baseUrl+'user/getUserDetails',clientDetailsapi,{headers: this.headToken}).then((response)=>{
      //       if(response.data.status ==  true){
      //         this.jobDetailsWithClientData.clientFullDetails =  response.data.result;
      //       }else{
      //         this.jobDetailsWithClientData.clientFullDetails =  '';
      //       }
      //     });

      //     var clientRatingsapi = {
      //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
      //     }
      //     axios.post(this.$store.state.baseUrl+'getUserReviewCal',clientRatingsapi,{headers: this.headToken}).then((response)=>{
      //       if(response.data.status ==  true){
      //         this.jobDetailsWithClientData.clientrating =  response.data.result;
      //       }else{
      //         this.jobDetailsWithClientData.clientrating =  '';
      //       }
      //     });

      //     var clientJobshistoryapi = {
      //         "filter": 4,
      //         "search": {},
      //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
      //     }
      //     axios.post(this.$store.state.baseUrl+'getUserPostedJob',clientJobshistoryapi,{'headers':this.headToken}).then((response)=>{
      //       if (response.data.status==true) {
      //         this.jobDetailsWithClientData.clientJobshistoryData =  response.data.result;
      //       }else{
      //         this.jobDetailsWithClientData.clientJobshistoryData =  [];
      //       }
      //     });

      //     // this fun is for to check milestone data
      //     // var getmilestoneData = {
      //     //   "job_id":data,
      //     //   "user_id": this.login_user_id
      //     // };
      //     // axios.post(this.$store.state.baseUrl+'getCreatedMilestone',getmilestoneData,{headers: this.headToken}).then((response)=>{
      //     //   if(response.data.status==true){
      //     //     this.proposal_url = 1;
      //     //     this.proposalbtn_text = "Proposal Details";
      //     //   }else{
      //     //     this.proposal_url = 0;
      //     //     this.proposalbtn_text = "Submit a Proposal";

      //     //   }
      //     // });

      //     var getMilestoneData = this.genericAPIPOSTRequest({
      //           requestUrl: "getCreatedMilestone",
      //           params: {
      //             "job_id":data,
      //             "user_id": this.login_user_id
      //           },
      //         });
      //     if (getMilestoneData.milestone.length > 0 ) {
      //       this.proposal_url = 1;
      //       this.proposalbtn_text = "Proposal Details";
      //     }else{
      //       this.proposal_url = 0;
      //       this.proposalbtn_text = "Submit a Proposal";

      //     }

      //     // this fun is for similar jobs
      //     var getsimilarjobData = {
      //       "user_id": this.login_user_id,
      //       "search": {"category_id":this.jobDetailsWithClientData.jobDetails.quality_inspector_id}
      //     };
      //     axios.post(this.$store.state.baseUrl+'getJobsList',getsimilarjobData,{headers: this.headToken}).then((response)=>{
      //       if(response.data.status==true){
      //         this.jobDetailsWithClientData.similarJobs=response.data.result;
      //         this.jobDetailsWithClientData.similarJobs.filter((jobdaata,id)=>{
      //           if(jobdaata.jobs_id == data){
      //             this.jobDetailsWithClientData.similarJobs.splice(id,1);
      //           }
      //         })
      //       }
      //     });          
      //   }
      // });
    },
     
    // this fun for to save & unsave post
    async savePost(jobdata,_i=null){
      var send_jobdata = {
        "action":3,
        "jobData":jobdata
      };
      var res = await this.genericAPIPOSTRequest({
          requestUrl: "job/addBookmark",
          params: send_jobdata,
      });
      if(res){
        if(jobdata.action == 3){
          // if(_i == 'detail') this.jobDetailsWithClientData.jobDetails.action=null;
          // else
           this.postData[_i].action=null;
          document.getElementById('res_'+jobdata.jobs_id).classList.remove("saved-btn");
          this.$toastr.s('Post UnSaved Successfull');
        }else{
          // if(_i == 'detail') this.jobDetailsWithClientData.jobDetails.action = 3;
          //else 
          this.postData[_i].action=3;
          document.getElementById('res_'+jobdata.jobs_id).classList.add("saved-btn");
          this.$toastr.s('Post Saved Successfull');
        }
      }else{
          this.$toastr.e('Post Save Unsuccessfull');
          this.loaderStatus = false;
          this.dataStatus = false;
      }
    },
    
    async getUserDetails(userdata){
      var response = await this.genericAPIPOSTRequest({
          requestUrl: "user/getUserDetails",
          params: {"data":[userdata.first_name+'-'+userdata.last_name+'-'+userdata.uuid,'miniProfileUrn'+userdata.uuid]},
      });
      // console.log('data',response);
      this.userFullDetails = response;
      this.profileVisibility = this.userFullDetails.profile_visibility;
      this.category_data=response.Category_Name;
      this.category_ids=response.Category_ids;
    },
    dateOrdinal(d){
        return (31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th");
    },
  },
  computed:{
    profileVisibilityErrors() {
      const errors = []
      if (!this.$v.profileVisibility.$dirty) return errors
      !this.$v.profileVisibility.required && errors.push('Click is required')
      return errors
    },
    // filteredAndSorted(){
    // // function to compare names
    //   function compare(a, b) {
    //     if (a.job_title < b.job_title) return -1;
    //     if (a.job_title > b.job_title) return 1;
    //     return 0;
    //   }
    //   return this.postData.filter(user => {
    //       return user.job_title.toLowerCase().includes(this.search.toLowerCase());
    //   }).sort(compare);
    // },
    // readMoreText() {
    //   return this.showFullText ? 'less' : 'more'
    // },
  },
  mounted() {
    // console.log('freelancer-token',this.$store.state.currentUserData.token);
    // var userdata = JSON.parse(localStorage.getItem('loginUserData'));
    // this.profileImg = this.$store.state.baseUrlImg+'upload/profile_image/'+userdata.profile_picture_path;
    this.login_user_id = this.$store.state.currentUserData.login_master_id;
    
    // ------------------------ this is for current date and time ------------------------ 
    var today = new Date();
    // console.log('date suffix',moment(today).format("Do MMMM YYYY"))
    this.todayMessage = today.getHours();
    this.todayDate = today.toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"});
    this.todayday = today.toLocaleDateString('en-us', { day:"numeric" });

    // -------------------------------this is header for -----------------------------
    // this.headToken= {"Authorization": localStorage.getItem('token')};
    this.headToken = { "Authorization": 'Bearer '+this.$store.state.currentUserData.token };
    // -------------------------------this is for user detail data ------------------------------------
    this.getUserDetails(this.$store.state.currentUserData);
    // -------------------------------this is for user detail data end --------------------------------
    //  this is for to recent post data
    this.recentApidata();
  },  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
  body{font-family: 'Source Sans Pro', sans-serif!important;}
  .unread-bg{background-color: #eeeeee26!important;}
  .text-muted{color:#979797!important;}
  .ralative {padding-bottom:0px;}
  .theme-bg{background-color: #FFF6F4!important;}
  .bg-none{background-color:transparent;}
  .bordered{border-bottom: 1px solid #EBEBEB!important;border-right: 1px solid #EBEBEB;}
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .search-bar .input-group-text{border-left:0px!important;}
  .freelancer-wrap .nav-pills .nav-link.active, .nav-pills .show > .nav-link{background-color:#fff!important;color:#F2613B!important;font-weight:600;border-bottom: 3px solid #f2613b;border-radius: 0px;}
  .freelancer-wrap .nav-pills .badge{border-radius: 50%;padding: 8px 10px!important;background-color:#eee;color:#000!important;}
  .freelancer-wrap .nav-pills .nav-link{color:#999999;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link:hover{color:#F2613B!important;;font-weight:600;}
  .freelancer-wrap .nav-pills .nav-link.active .badge, .nav-pills .show > .nav-link .badge{background-color: #F2613B!important;border-radius: 50%;font-size: 11px!important;padding: 3px 9px!important;color:#fff!important;}
  .freelancer-wrap .post{margin-left:-32px;}
  .freelancer-wrap .post li{font-size:14px;}  
  .freelancer-wrap .tags li{background: #FCFCFC;border: 1px solid #F2613C;border-radius: 100px;padding: 2px 15px;margin-bottom:2px;}
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
  .r-about{color:#979797;}
  .no-bottom-border{border-bottom:0px!important;}
  .similar-jobs{margin-left:-32px;}
  .border-top-0{border-top:0px!important;}
  .py-13{padding-top: 3.2rem;padding-bottom: 3.2rem;}
  .table .last-child {border-top: 1px solid #adb1b6!important;}
  .table > :not(:first-child) {border-top: 0px!important;}
  .my-proposal .fa-chevron-right{float: right;font-size: 14px;margin-top: 10px;}
  .mb-50{margin-bottom:50px;}
  .text-theme-hover:hover{color:#f2613b!important;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  hr {margin: 1rem 0!important;}
  .modal-header{text-align:center;display: block!important;}
  .modal-header .modal-title{font-family: 'Source Sans Pro';font-style: normal;font-weight: 700!important;font-size: 24px;line-height: 25px;text-align: left;color: #000000;}
  .modal-header .close{position: absolute;right: -20px;top: -33px;color: #fff;font-size: 34px;font-weight: 500;}
  .modal-body h4{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 22px;line-height: 43px;text-transform: capitalize;color: #000000;}
  .modal-body p{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 16px;line-height: 20px;text-transform: capitalize;color: #000000;}
  #edit-category-modal .post {margin-left: -32px;}
  #edit-category-modal .tags span {background: #FCFCFC;border: 1px solid #F2613C;border-radius: 100px;padding: 6px 15px!important;font-size: 14px;--skill-height: 30px;
    margin: 0 5px 10px 0;
    padding: 0 10px;
    background-color: var(--skill-bg);
    border-radius: 12px;
    font-size: 12px;
    line-height: 1.2;
    cursor: default;
    display: inline-block;
}
.lb-anywhere{line-break:anywhere;}
.accordion{border: 1px solid #e4e4e4;border-radius: 0.25rem;padding: 12px}
.accordion .btn-secondary{color: #000!important;background-color: #fff!important;width: 100%;text-align: left;border: 0px;padding: 10px 10px;font-size:20px;}
.accordion .btn-check:focus + .accordion .btn-secondary, .accordion .btn-secondary:focus{box-shadow:none;border-color:transparent;}
.accordion .card-body{padding: 0 10px;}
.fz-12{font-size:12px!important;}
.b-sidebar{width: 1020px!important;}
.b-sidebar .card-body {padding:0px;}
ul.cfe-ui-job-features {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}
ul.cfe-ui-job-features>li {
    width: 50%;
    padding-right: 10px;
    padding-left: 30px;
    padding-bottom: 20px;
}
ul.cfe-ui-job-features>li>.header {
    display: flex;
    align-items: center;
    margin-left: -30px;
}
ul.cfe-ui-job-features>li .icon {
    width: 25px;
    margin: 0 5px 0 0;
}
.up-icon {
    --size: 14px;
    display: inline-block;
    width: var(--size);
    height: var(--size);
}
.dashboard-desktop{display:none!important;}
@media only screen and (min-width: 320px) and (max-width: 815px) {
  .dashboard-desktop{display:block!important;}
  .dashboard-mobile{display:none;}
  .col-md-9{width:100%!important;}
  .text-overflow.expanded .read-more-button{bottom:10px;}
  .title-h5{overflow: hidden;max-width: 200px;text-overflow: ellipsis;}
  .b-sidebar .btn-submit-proposal{margin-bottom:0.5rem;}
  .inline-block{display:inline-block!important;}
  ul.cfe-ui-job-features{display: block;}
  ul.cfe-ui-job-features li{width:100%;}
  ul.cfe-ui-job-features li.last-child{padding-bottom:0px;}
  .ml-custom{margin-left: -23px;}
  .card-text.mb-sm-4{margin-bottom:0px!important;}
  .sm-pb-0.job-link{padding-bottom:0px!important;}
  .sm-pb-0.about-client{padding-bottom:0px!important;}
  .sm-pb-0.activity-job{padding-bottom:0px!important;}
  .post-review-wrap a{display: flex!important;align-items: center;justify-content: center;}
  .post-review-wrap .nav-pills span{margin-top:0px!important;font-size:14px;}
  .post-review-wrap .tab-content .tabs ul li{width: 50%;}
  .post-review-wrap .view-proposal-wrapper .dropdown {top: 0px!important;}
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation:portrait){
  .dashboard-desktop{display:block!important;}
  .dashboard-mobile{display:none;}
  .col-md-9{width:100%!important;}
  .text-overflow.expanded .read-more-button{bottom:10px;}
  .title-h5{overflow: hidden;max-width: 200px;text-overflow: ellipsis;}
  .b-sidebar-right .d-md-flex{display:block!important;}
  .b-sidebar .w-sm-50{width:50%!important;}
  .b-sidebar .btn-group-wrap{display:flex;}
  .b-sidebar .mr-sm-2{margin-right:2rem;}
  .inline-block{display:inline-block!important;}
  .b-sidebar .btn-submit-proposal{margin-bottom:0rem!important;}
}
.fw-300{font-weight:300;}
.b-sidebar .card-body{border-radius:0 0 20px 20px!important;}
.up-slider-backdrop{position: fixed;top: 0;left: 0;bottom: 0;right: 0;background-color: #000f12;opacity: 0.5;z-index: 111;overflow: hidden;}
.saved-btn{border: 1px solid #F2613B!important;}
.saved-btn svg{color: #F2613B!important;stroke-width: 0px;stroke: #F2613B;fill: #F2613B;}
.saved-btn:hover {color: #fff!important;background-color: #f2613b24!important;border-color: #F2613B!important;}
.saved-btn:active{color: #fff!important;background-color: #f2613b24!important;border-color: #F2613B!important;}
.btn-check:focus + .saved-btn, .saved-btn:focus{color: #fff!important;background-color: #f2613b24!important;border-color: #F2613B!important;box-shadow:0 0 0 0.25rem #f2613b45!important;}
.inline-block{display:inline-block;}
.button-read-more{position: absolute;right: 0;bottom: -10px;width: 100%;background: inherit;left: 0;}
.text-overflow.expanded .button-read-more{bottom:-10px;}
.read-more-button{width:100%!important;}
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
  background-image: linear-gradient(to right, #f2613d30 0%, #eeeeee66 100%);
}
.skill-slider-wrapper .next-btn{
  position: absolute;
  top: -6px;
  z-index: 1;
  background-color: #fff;
  padding: 8px;
  right: 0px;
  background-image: linear-gradient(to left, #f2613d30 0%, #eeeeee66 100%);
}
.skill-slider-wrapper .dynamic-slider-slide{
  margin:0 5px;text-align:center;
}
.skill-slider-wrapper .dynamic-slider-slide li{width: 100%;max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.read-more-button span{background:transparent!important;}
.hide{ display:none;}
.ml--22{margin-left:-22px;}
.progress-wrap .progress { margin:0 auto}
</style>


