<template>
  <b-card-text>
    <b-row>
      <b-col xl="4" lg="4" sm="12">
        <b-form-input type="text" v-model="search" placeholder="Search for Job, people, groups and more... "></b-form-input>
      </b-col>
      <b-col xl="8" lg="8" sm="12">
        <div class="dropdown">
          <div class="dropdown-header" @click="toggleDropdown($event)">
            <div class="d-flex align-items-center justify-content-end">
              <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15625 4.625V9.625C9.15625 9.97018 8.87643 10.25 8.53125 10.25C8.18607 10.25 7.90625 9.97018 7.90625 9.625V4.625C7.90625 4.27982 8.18607 4 8.53125 4C8.87643 4 9.15625 4.27982 9.15625 4.625ZM11.6562 17.125C11.6562 18.8509 10.2571 20.25 8.53125 20.25C6.80536 20.25 5.40625 18.8509 5.40625 17.125C5.40625 15.3991 6.80536 14 8.53125 14C10.2571 14 11.6562 15.3991 11.6562 17.125ZM9.15625 21.4557V23.375C9.15625 23.7202 8.87643 24 8.53125 24C8.18607 24 7.90625 23.7202 7.90625 23.375V21.4557C5.78607 21.1524 4.15625 19.329 4.15625 17.125C4.15625 14.7088 6.115 12.75 8.53125 12.75C10.9475 12.75 12.9062 14.7088 12.9062 17.125C12.9062 19.329 11.2764 21.1524 9.15625 21.4557ZM20.1562 23.375C20.1562 23.7202 20.4361 24 20.7812 24C21.1264 24 21.4062 23.7202 21.4062 23.375V18.375C21.4062 18.0298 21.1264 17.75 20.7812 17.75C20.4361 17.75 20.1562 18.0298 20.1562 18.375V23.375ZM20.1562 6.54431V4.625C20.1562 4.27982 20.4361 4 20.7812 4C21.1264 4 21.4062 4.27982 21.4062 4.625V6.54431C23.5264 6.84757 25.1562 8.67096 25.1562 10.875C25.1562 13.2912 23.1975 15.25 20.7812 15.25C18.365 15.25 16.4062 13.2912 16.4062 10.875C16.4062 8.67096 18.0361 6.84757 20.1562 6.54431ZM20.7812 7.75C22.5071 7.75 23.9062 9.14911 23.9062 10.875C23.9062 12.6009 22.5071 14 20.7812 14C19.0554 14 17.6562 12.6009 17.6562 10.875C17.6562 9.14911 19.0554 7.75 20.7812 7.75Z" fill="#666666"/>
              </svg>
              <span class="text-theme fz-16 fw-600">Filter</span>
            </div>
          </div>
            
          <div class="dropdown-content shadow border">
            <div class="selected-tags mb-2 mt-2">
              <div class="tags-wrap">
                <ul>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center">
                      <span class="mr-2 fz-12">Wordpress</span>
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center">
                      <span class="mr-2 fz-12">Wordpress</span>
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center">
                      <span class="mr-2 fz-12">Wordpress</span>
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                    </a>
                  </li>
                  <a href="javascript:void(0);" class="text-black fz-14">
                    Clear all
                  </a>
                </ul>
              </div>
            </div>
            <hr>
            <b-row>
              <b-col xl="3" lg="3" sm="12">
                <label class="fz-18 fw-600 text-black mb-4">Contract Status</label>
                <b-form-group>
                  <b-form-radio  name="contact" value="A" class="fz-16 fw-400 text-black">All</b-form-radio>
                  <b-form-radio  name="contact" value="B" class="fz-16 fw-400 text-black">Pending</b-form-radio>
                  <b-form-radio  name="contact" value="C" class="fz-16 fw-400 text-black">Active</b-form-radio>
                  <b-form-radio  name="contact" value="D" class="fz-16 fw-400 text-black">Ended</b-form-radio>
                  <b-form-radio  name="contact" value="E" class="fz-16 fw-400 text-black">Paused</b-form-radio>
                </b-form-group>
              </b-col>
              <b-col xl="3" lg="3" sm="12">
                <label class="fz-18 fw-600 text-black mb-4">Milestone Status</label>
                <b-form-group>
                  <b-form-radio  name="milestone" value="A" class="fz-16 fw-400 text-black">All</b-form-radio>
                  <b-form-radio  name="milestone" value="B" class="fz-16 fw-400 text-black">Active</b-form-radio>
                  <b-form-radio  name="milestone" value="C" class="fz-16 fw-400 text-black">Awaiting Funding</b-form-radio>
                  <b-form-radio  name="milestone" value="D" class="fz-16 fw-400 text-black">Payment Requested</b-form-radio>
                </b-form-group>
              </b-col>
              <b-col xl="6" lg="6" sm="12">
                <b-row>
                  <b-col xl="12" lg="12" sm="12" class="py-0">
                    <label class="fz-18 fw-600 text-black mb-4">Contract Start Date</label>
                    <div class="d-flex align-items-center">
                      <b-form-group
                        id="fieldset-1"
                        valid-feedback="Thank you!"
                        class="fz-14 fw-600 w-50"
                        placeholder="DD - MM - YYYY"
                      >
                        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                      </b-form-group>
                      <span class="ml-2 mr-2">To</span>
                      <b-form-group
                        id="fieldset-2"
                        valid-feedback="Thank you!"
                        class="fz-14 fw-600 w-50"
                        placeholder="DD - MM - YYYY"
                      >
                        <b-form-datepicker id="example-datepicker1" v-model="value" class="mb-2"></b-form-datepicker>
                      </b-form-group>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="12" lg="12" sm="12" class="py-0">
                    <label class="fz-18 fw-600 text-black mb-4 mt-2">Contract End Date</label>
                    <div class="d-flex align-items-center">
                      <b-form-group
                        id="fieldset-3"
                        valid-feedback="Thank you!"
                        class="fz-14 fw-600 w-50"
                        placeholder="DD - MM - YYYY"
                      >
                        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                      </b-form-group>
                      <span class="ml-2 mr-2">To</span>
                      <b-form-group
                        id="fieldset-4"
                        valid-feedback="Thank you!"
                        class="fz-14 fw-600 w-50"
                        placeholder="DD - MM - YYYY"
                      >
                        <b-form-datepicker id="example-datepicker1" v-model="value" class="mb-2"></b-form-datepicker>
                      </b-form-group>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <b-button class="btn btn-theme mr-2">Apply Filter</b-button>
            <b-button class="btn btn-outline-theme">Cancel</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-card-group deck>
      <b-card title-class="text-theme font-14" class="py-4 px-4 bg-white br-20">
        <b-row class="profile-wrap mb-4">
          <b-col cols="8" class="pb-0">
            <div class="d-md-flex align-items-center mb-2">
              <div class="img-wrapper mr-3">
                <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid">
              </div>
              <div class="content">
                <div class="d-flex align-items-center mb-2">
                  <h4 class="fz-20 fw-600 text-black mr-2 mb-0">Lewis Caldwell MKP</h4>
                  <label class="badge badge-theme mr-2">TOP RATED</label>
                </div>
                <ul class="mb-2">
                  <li>E&I Inspector</li>  
                  <li>
                    <div class="star-rating">
                      <input type="radio" id="5-stars" name="rating" value="5" />
                      <label for="5-stars" class="star active">&#9733;</label>
                      <input type="radio" id="4-stars" name="rating" value="4" />
                      <label for="4-stars" class="star active">&#9733;</label>
                      <input type="radio" id="3-stars" name="rating" value="3" />
                      <label for="3-stars" class="star active">&#9733;</label>
                      <input type="radio" id="2-stars" name="rating" value="2" />
                      <label for="2-stars" class="star active">&#9733;</label>
                      <input type="radio" id="1-star" name="rating" value="1" />
                      <label for="1-star" class="star">&#9733;</label>
                    </div>
                  </li>
                </ul><br>
                <ul class="mb-2">
                  <li>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"/>
                    </svg>
                  </li>
                  <li>India, Madhya Pradesh, Indore</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
            <div class="mr-2 text-center"><b>$ 15.00</b> <br><span>Per Hour</span></div>
            <button type="button" class="btn btn-outline-theme mr-2">Invite to job</button>
            <button type="button" class="btn btn-theme">Hire</button>
          </b-col>
          <b-col cols="12" class="ml-30 pt-0">
            <p class="text-black fz-16 text-black fw-500">CWI/PMP/ASNT UT MT/Railway engineer/</p>
            <div class="selected-tags">
              <div class="tags-wrap">
                <ul>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
        <hr>
        <b-row class="profile-wrap mb-4">
          <b-col cols="8" class="pb-0">
            <div class="d-md-flex align-items-center mb-2">
              <div class="img-wrapper mr-3">
                <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid">
              </div>
              <div class="content">
                <div class="d-flex align-items-center mb-2">
                  <h4 class="fz-20 fw-600 text-black mr-2 mb-0">Lewis Caldwell MKP</h4>
                  <label class="badge badge-theme mr-2">TOP RATED</label>
                </div>
                <ul class="mb-2">
                  <li>E&I Inspector</li>  
                  <li>
                    <div class="star-rating">
                      <input type="radio" id="5-stars" name="rating" value="5" />
                      <label for="5-stars" class="star active">&#9733;</label>
                      <input type="radio" id="4-stars" name="rating" value="4" />
                      <label for="4-stars" class="star active">&#9733;</label>
                      <input type="radio" id="3-stars" name="rating" value="3" />
                      <label for="3-stars" class="star active">&#9733;</label>
                      <input type="radio" id="2-stars" name="rating" value="2" />
                      <label for="2-stars" class="star active">&#9733;</label>
                      <input type="radio" id="1-star" name="rating" value="1" />
                      <label for="1-star" class="star">&#9733;</label>
                    </div>
                  </li>
                </ul><br>
                <ul class="mb-2">
                  <li>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"/>
                    </svg>
                  </li>
                  <li>India, Madhya Pradesh, Indore</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
            <div class="mr-2 text-center"><b>$ 15.00</b> <br><span>Per Hour</span></div>
            <button type="button" class="btn btn-outline-theme mr-2">Invite to job</button>
            <button type="button" class="btn btn-theme">Hire</button>
          </b-col>
          <b-col cols="12" class="ml-30 pt-0">
            <p class="text-black fz-16 text-black fw-500">CWI/PMP/ASNT UT MT/Railway engineer/</p>
            <div class="selected-tags">
              <div class="tags-wrap">
                <ul>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
        <hr>
        <b-row class="profile-wrap mb-4">
          <b-col cols="8" class="pb-0">
            <div class="d-md-flex align-items-center mb-2">
              <div class="img-wrapper mr-3">
                <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid">
              </div>
              <div class="content">
                <div class="d-flex align-items-center mb-2">
                  <h4 class="fz-20 fw-600 text-black mr-2 mb-0">Lewis Caldwell MKP</h4>
                  <label class="badge badge-theme mr-2">TOP RATED</label>
                </div>
                <ul class="mb-2">
                  <li>E&I Inspector</li>  
                  <li>
                    <div class="star-rating">
                      <input type="radio" id="5-stars" name="rating" value="5" />
                      <label for="5-stars" class="star active">&#9733;</label>
                      <input type="radio" id="4-stars" name="rating" value="4" />
                      <label for="4-stars" class="star active">&#9733;</label>
                      <input type="radio" id="3-stars" name="rating" value="3" />
                      <label for="3-stars" class="star active">&#9733;</label>
                      <input type="radio" id="2-stars" name="rating" value="2" />
                      <label for="2-stars" class="star active">&#9733;</label>
                      <input type="radio" id="1-star" name="rating" value="1" />
                      <label for="1-star" class="star">&#9733;</label>
                    </div>
                  </li>
                </ul><br>
                <ul class="mb-2">
                  <li>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"/>
                    </svg>
                  </li>
                  <li>India, Madhya Pradesh, Indore</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
            <div class="mr-2 text-center"><b>$ 15.00</b> <br><span>Per Hour</span></div>
            <button type="button" class="btn btn-outline-theme mr-2">Invite to job</button>
            <button type="button" class="btn btn-theme">Hire</button>
          </b-col>
          <b-col cols="12" class="ml-30 pt-0">
            <p class="text-black fz-16 text-black fw-500">CWI/PMP/ASNT UT MT/Railway engineer/</p>
            <div class="selected-tags">
              <div class="tags-wrap">
                <ul>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
        <hr>
        <b-row class="profile-wrap mb-4">
          <b-col cols="8" class="pb-0">
            <div class="d-md-flex align-items-center mb-2">
              <div class="img-wrapper mr-3">
                <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid">
              </div>
              <div class="content">
                <div class="d-flex align-items-center mb-2">
                  <h4 class="fz-20 fw-600 text-black mr-2 mb-0">Lewis Caldwell MKP</h4>
                  <label class="badge badge-theme mr-2">TOP RATED</label>
                </div>
                <ul class="mb-2">
                  <li>E&I Inspector</li>  
                  <li>
                    <div class="star-rating">
                      <input type="radio" id="5-stars" name="rating" value="5" />
                      <label for="5-stars" class="star active">&#9733;</label>
                      <input type="radio" id="4-stars" name="rating" value="4" />
                      <label for="4-stars" class="star active">&#9733;</label>
                      <input type="radio" id="3-stars" name="rating" value="3" />
                      <label for="3-stars" class="star active">&#9733;</label>
                      <input type="radio" id="2-stars" name="rating" value="2" />
                      <label for="2-stars" class="star active">&#9733;</label>
                      <input type="radio" id="1-star" name="rating" value="1" />
                      <label for="1-star" class="star">&#9733;</label>
                    </div>
                  </li>
                </ul><br>
                <ul class="mb-2">
                  <li>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"/>
                    </svg>
                  </li>
                  <li>India, Madhya Pradesh, Indore</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
            <div class="mr-2 text-center"><b>$ 15.00</b> <br><span>Per Hour</span></div>
            <button type="button" class="btn btn-outline-theme mr-2">Invite to job</button>
            <button type="button" class="btn btn-theme">Hire</button>
          </b-col>
          <b-col cols="12" class="ml-30 pt-0">
            <p class="text-black fz-16 text-black fw-500">CWI/PMP/ASNT UT MT/Railway engineer/</p>
            <div class="selected-tags">
              <div class="tags-wrap">
                <ul>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
        <hr>
        <b-row class="profile-wrap mb-4">
          <b-col cols="8" class="pb-0">
            <div class="d-md-flex align-items-center mb-2">
              <div class="img-wrapper mr-3">
                <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid">
              </div>
              <div class="content">
                <div class="d-flex align-items-center mb-2">
                  <h4 class="fz-20 fw-600 text-black mr-2 mb-0">Lewis Caldwell MKP</h4>
                  <label class="badge badge-theme mr-2">TOP RATED</label>
                </div>
                <ul class="mb-2">
                  <li>E&I Inspector</li>  
                  <li>
                    <div class="star-rating">
                      <input type="radio" id="5-stars" name="rating" value="5" />
                      <label for="5-stars" class="star active">&#9733;</label>
                      <input type="radio" id="4-stars" name="rating" value="4" />
                      <label for="4-stars" class="star active">&#9733;</label>
                      <input type="radio" id="3-stars" name="rating" value="3" />
                      <label for="3-stars" class="star active">&#9733;</label>
                      <input type="radio" id="2-stars" name="rating" value="2" />
                      <label for="2-stars" class="star active">&#9733;</label>
                      <input type="radio" id="1-star" name="rating" value="1" />
                      <label for="1-star" class="star">&#9733;</label>
                    </div>
                  </li>
                </ul><br>
                <ul class="mb-2">
                  <li>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"/>
                    </svg>
                  </li>
                  <li>India, Madhya Pradesh, Indore</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="text-right d-flex align-items-center justify-content-end pb-0">
            <div class="mr-2 text-center"><b>$ 15.00</b> <br><span>Per Hour</span></div>
            <button type="button" class="btn btn-outline-theme mr-2">Invite to job</button>
            <button type="button" class="btn btn-theme">Hire</button>
          </b-col>
          <b-col cols="12" class="ml-30 pt-0">
            <p class="text-black fz-16 text-black fw-500">CWI/PMP/ASNT UT MT/Railway engineer/</p>
            <div class="selected-tags">
              <div class="tags-wrap">
                <ul>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Boilers</span> 
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                      <span class="mr-2">Industrial Valves</span> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </b-card-text>
</template>
<script>
  export default {
    data() {
      return {
        search:'',
        value:'',
      } 
    },
    methods: {
      toggleDropdown (event) {
        event.currentTarget.classList.toggle('is-active')
      }
    }
  }
</script>