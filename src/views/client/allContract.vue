<template>
  <b-container >
    <div 
    v-infinite-scroll="getAllcontracts"
    :infinite-scroll-disabled="busy"
    infinite-scroll-distance="5">
      <b-row class="mt-100 posting-wrap" >
        <b-col xl="12" lg="12" sm="12">
          <div class="d-md-flex align-items-center mb-3">
            <h4 class="mb-0 fz-24 fw-500 text-black"><b>All Contract</b></h4>
            <div class="ml-auto">
              <a class="btn btn-theme" @click="$router.push({name:'post-job',path:'/client/post-job/',params:{pid:'POID'}})">Post a Job</a>
            </div>
          </div>
          
          <b-card-group deck>
            <b-card title-class="text-theme font-14" class="py-4 px-4 mt-4 border-bottom pb-5" >
              <div class="border-bottom pb-5 pt-3">
                <template>
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
                      <b-form-input v-model="filtersValue.title" placeholder="Search for Contract..." @keyup="filterData()"></b-form-input>
                    </b-input-group>
                    <button type="button" class="btn btn-theme-outline d-flex align-items-center no-focus" @click="filterTab = !filterTab; frontFilterShow=!frontFilterShow">
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15625 4.625V9.625C9.15625 9.97018 8.87643 10.25 8.53125 10.25C8.18607 10.25 7.90625 9.97018 7.90625 9.625V4.625C7.90625 4.27982 8.18607 4 8.53125 4C8.87643 4 9.15625 4.27982 9.15625 4.625ZM11.6562 17.125C11.6562 18.8509 10.2571 20.25 8.53125 20.25C6.80536 20.25 5.40625 18.8509 5.40625 17.125C5.40625 15.3991 6.80536 14 8.53125 14C10.2571 14 11.6562 15.3991 11.6562 17.125ZM9.15625 21.4557V23.375C9.15625 23.7202 8.87643 24 8.53125 24C8.18607 24 7.90625 23.7202 7.90625 23.375V21.4557C5.78607 21.1524 4.15625 19.329 4.15625 17.125C4.15625 14.7088 6.115 12.75 8.53125 12.75C10.9475 12.75 12.9062 14.7088 12.9062 17.125C12.9062 19.329 11.2764 21.1524 9.15625 21.4557ZM20.1562 23.375C20.1562 23.7202 20.4361 24 20.7812 24C21.1264 24 21.4062 23.7202 21.4062 23.375V18.375C21.4062 18.0298 21.1264 17.75 20.7812 17.75C20.4361 17.75 20.1562 18.0298 20.1562 18.375V23.375ZM20.1562 6.54431V4.625C20.1562 4.27982 20.4361 4 20.7812 4C21.1264 4 21.4062 4.27982 21.4062 4.625V6.54431C23.5264 6.84757 25.1562 8.67096 25.1562 10.875C25.1562 13.2912 23.1975 15.25 20.7812 15.25C18.365 15.25 16.4062 13.2912 16.4062 10.875C16.4062 8.67096 18.0361 6.84757 20.1562 6.54431ZM20.7812 7.75C22.5071 7.75 23.9062 9.14911 23.9062 10.875C23.9062 12.6009 22.5071 14 20.7812 14C19.0554 14 17.6562 12.6009 17.6562 10.875C17.6562 9.14911 19.0554 7.75 20.7812 7.75Z" fill="#666666"/>
                      </svg>
                      <span class="text-theme fz-16 fw-600" >Filter</span>
                    </button>
                  </div>
                  <div class="bg-white p-0 mt-3"  v-if="frontFilterShow">
                    <div class="selected-tags mb-2 mt-2">
                      <div class="tags-wrap">
                        <ul class="d-flex align-items-center fz-14 tags mb-0 mt-2">
                          <template v-if="filtersValue.contract_status">
                            <li v-for="(cdata,cindex) in filtersValue.contract_status" :key="cindex">
                              <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span class="mr-2 fz-12">Contract Status: {{(cdata==7)?'Pending':(cdata==2)?'Active':(cdata==6)?'Ended':''}}</span>
                                <svg @click="filtersValue.contract_status.splice(cindex,1);contract_statusAll=false;filterData()" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                              </a>
                            </li>
                          </template>
                          <template v-if="filtersValue.milestone_status">
                            <li v-for="(mdata,mindex) in filtersValue.milestone_status" :key="mindex">
                              <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span class="mr-2 fz-12">Milestone Status: {{(mdata == 1)?'Active':(mdata == 2)?'Awaiting Funding':(mdata == 3)?'Payment Requested':''}}</span>
                                <svg @click="filtersValue.milestone_status.splice(mindex,1);milestone_statusAll=false;filterData()" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                              </a>
                            </li>
                          </template>
                          <a href="javascript:void(0);" v-if="filtersValue.contract_status.length > 0 || filtersValue.milestone_status > 0" class="text-black fz-14" @click="clearFilter('remove')">
                            Clear all
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <b-row v-if="filterTab">
                    <b-col cols="12">
                      <div class="bg-white p-0">
                        <div class="selected-tags mt-2">
                          <div class="tags-wrap">
                            <ul>
                              <template v-if="filtersValue.contract_status">
                                <li v-for="(cdata,cindex) in filtersValue.contract_status" :key="cindex">
                                  <a href="javascript:void(0);" class="d-flex align-items-center">
                                    <span class="mr-2 fz-12">Contract: {{(cdata==7)?'Pending':(cdata==2)?'Active':(cdata==6)?'Ended':''}}</span>
                                    <svg @click="filtersValue.contract_status.splice(cindex,1);contract_statusAll=false" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                                  </a>
                                </li>
                              </template>
                              <template v-if="filtersValue.milestone_status">
                                <li v-for="(mdata,mindex) in filtersValue.milestone_status" :key="mindex">
                                  <a href="javascript:void(0);" class="d-flex align-items-center">
                                    <span class="mr-2 fz-12">Milestone: {{(mdata == 1)?'Active':(mdata == 2)?'Awaiting Funding':(mdata == 3)?'Payment Requested':''}}</span>
                                    <svg @click="filtersValue.milestone_status.splice(mindex,1);milestone_statusAll=false" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                                  </a>
                                </li>
                              </template>
                              <a href="javascript:void(0);" v-if="filtersValue.contract_status.length > 0 || filtersValue.milestone_status > 0" class="text-black fz-14" @click="clearFilter()">
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
                              <b-form-checkbox v-model="contract_statusAll" value="true" @change="filtersValue.contract_status = (contract_statusAll)?[7,2,6]:[]" class="fz-16 fw-400 text-black">All</b-form-checkbox>
                              <b-form-checkbox v-model="filtersValue.contract_status" value="7" @change="(filtersValue.contract_status.length == 3)?contract_statusAll=true:contract_statusAll=false;" class="fz-16 fw-400 text-black">Pending</b-form-checkbox>
                              <b-form-checkbox v-model="filtersValue.contract_status" value="2" @change="(filtersValue.contract_status.length == 3)?contract_statusAll=true:contract_statusAll=false;" class="fz-16 fw-400 text-black">Active</b-form-checkbox>
                              <b-form-checkbox v-model="filtersValue.contract_status" value="6" @change="(filtersValue.contract_status.length == 3)?contract_statusAll=true:contract_statusAll=false;" class="fz-16 fw-400 text-black">Ended</b-form-checkbox>
                            </b-form-group>
                          </b-col>
                          <b-col xl="3" lg="3" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Milestone Status</label>
                            <b-form-group>
                              <b-form-checkbox v-model="milestone_statusAll" value="true" @change="filtersValue.milestone_status = (milestone_statusAll)?[1,2,3]:[]" class="fz-16 fw-400 text-black">All</b-form-checkbox>
                              <b-form-checkbox v-model="filtersValue.milestone_status" value="1" @change="(filtersValue.milestone_status.length == 3)?milestone_statusAll=true:milestone_statusAll=false;" class="fz-16 fw-400 text-black">Active</b-form-checkbox>
                              <b-form-checkbox v-model="filtersValue.milestone_status" value="2" @change="(filtersValue.milestone_status.length == 3)?milestone_statusAll=true:milestone_statusAll=false;" class="fz-16 fw-400 text-black">Awaiting Funding</b-form-checkbox>
                              <b-form-checkbox v-model="filtersValue.milestone_status" value="3" @change="(filtersValue.milestone_status.length == 3)?milestone_statusAll=true:milestone_statusAll=false;" class="fz-16 fw-400 text-black">Payment Requested</b-form-checkbox>
                            </b-form-group>
                          </b-col>
                          <b-col xl="6" lg="6" sm="12">
                            <b-row>
                              <b-col xl="12" lg="12" sm="12" class="py-0">
                                <label class="fz-18 fw-600 text-black mb-4">Contract Start Date</label>
                                <div class="d-flex align-items-center">

                                  <b-form-group id="fieldset-1" class="fz-14 fw-600 w-50" >
                                    <b-form-datepicker v-model="filtersValue.contract_start_from" id="example-datepicker1" @input="filtersValue.contract_start_to = '';filtersValue.contract_end_from = '';filtersValue.contract_end_to = '';" class="mb-2"></b-form-datepicker>
                                  </b-form-group>

                                  <span class="ml-2 mr-2">To</span>

                                  <b-form-group id="fieldset-2" class="fz-14 fw-600 w-50" >
                                    <b-form-datepicker v-model="filtersValue.contract_start_to" :min="startFromDate"  id="example-datepicker2" class="mb-2"></b-form-datepicker>
                                  </b-form-group>
                                </div>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col xl="12" lg="12" sm="12" class="py-0">
                                <label class="fz-18 fw-600 text-black mb-4 mt-2">Contract End Date</label>
                                <div class="d-flex align-items-center">
                                  <b-form-group id="fieldset-3" class="fz-14 fw-600 w-50" >
                                    <b-form-datepicker v-model="filtersValue.contract_end_from" :min="startFromDate" @input="filtersValue.contract_end_to = '';" id="example-datepicker3" class="mb-2"></b-form-datepicker>
                                  </b-form-group>
                                  
                                  <span class="ml-2 mr-2">To</span>

                                  <b-form-group id="fieldset-4" class="fz-14 fw-600 w-50" >
                                    <b-form-datepicker v-model="filtersValue.contract_end_to" :min="endFromDate" id="example-datepicker4" class="mb-2"></b-form-datepicker>
                                  </b-form-group>
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                        <hr>
                        <b-button class="btn btn-theme mr-2" @click="filterData(); filterTab = !filterTab; frontFilterShow=true">Apply Filter</b-button>
                        <b-button class="btn btn-outline-theme" @click="filterTab = !filterTab">Cancel</b-button>
                      </div>
                    </b-col>
                  </b-row>
                </template>
                <!-- <b-row>
                  <b-col cols="4">
                    <template>
                      <div class="d-flex align-items-center filter-wrap p-0 mt-4">
                        <label class="mr-2 w-25 fz-16">Sorted by</label>
                        <b-form-select v-model="selected" :options="filter" class="form-control fz-16"></b-form-select>
                      </div>
                    </template>
                  </b-col>
                </b-row> -->
              </div>
              <span v-if="contractList.length > 0">
                <div class="posted-job-wrapper border-bottom" v-for="(data,index) in contractList" :key="index" >
                  <div>
                    <div class="d-flex align-items-center mt-4">
                      <h5 class="fz-18 fw-600">{{data.job_title}}</h5>
                      <div class="ml-auto" v-if="data.application_status == 2 || data.application_status == 6">
                        <b-dropdown size="lg" id="dropdown-right" right text="Right align" variant="link" toggle-class="text-decoration-none" no-caret>
                          <template #button-content>
                            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                            </svg>
                          </template>
                          <b-dropdown-item @click="$router.push({'name':'contractDetails','path':'/client/jobpostreview/contract-detail/','params':{pid:data.uniq_id,uid:encodedid(data.freelancer_id)},query:{'current':'overview'}})">View Milestones & payments</b-dropdown-item>
                          <b-dropdown-item @click="$router.push({'name':'contractDetails','path':'/client/jobpostreview/contract-detail/','params':{pid:data.uniq_id,uid:encodedid(data.freelancer_id)},query:{'current':'message'}})">Send Message</b-dropdown-item>
                          <b-dropdown-item @click="$router.push({'name':'contractDetails','path':'/client/jobpostreview/contract-detail/','params':{pid:data.uniq_id,uid:encodedid(data.freelancer_id)},query:{'current':'overview'}})">View terms & setting</b-dropdown-item>
                          <b-dropdown-item @click="$router.push({'name':'contractDetails','path':'/client/jobpostreview/contract-detail/','params':{pid:data.uniq_id,uid:encodedid(data.freelancer_id)},query:{'current':'bonus'}})">Give bonus</b-dropdown-item>
                          <b-dropdown-item @click="$router.push({name:'freelancerProfile',path:'/client/freelancer-Profile/',params:{uid:encodedid(data.freelancer_id)}})">View Profile</b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </div>
                    <b-row class="mt-2">
                      <b-col xl="6" lg="6" sm="12">
                        <div class="d-md-flex align-items-center mb-2">
                          <div class="img-wrapper mr-3 w-12 h-12 br-50 border">
                            <img :src="data.profile_picture_path" class="img-fluid br-50 w-100 h-100">
                          </div>
                          <div>
                            <h4 class="fz-18 fw-600 text-theme mb-0"><a href="javascript:void(0);" class="text-theme">{{shortName(data.first_name,data.last_name)}}</a></h4>
                            <p class="fz-14 fw-600 text-muteed mb-0">{{data.localTime}} Local Time</p>
                          </div>
                        </div> 
                      </b-col>
                      <b-col xl="3" lg="3" sm="12">
                        <h5 class="fz-18 fw-600 text-black mr-2" v-if="data.application_status == 7">Pending: waiting for {{shortName(data.first_name,data.last_name)}} to approve</h5>

                        <span class="d-flex">
                          <h4 class="fz-18 fw-600 text-black mr-2" v-if="data.application_status == 2"> {{ (data.button == 'Review & Pay')?'Active: Request for payment':(data.button == 'Fund Milestone')?'Active: Fund new Milestone':(data.milestoneName!='')?'Active: '+data.milestoneName:'' }}</h4>
                          <h4 class="fz-18 fw-600 text-black mr-2" v-else-if="data.application_status == 6">{{'Completed'}}</h4>
                          <div class="star-rating mr-2 file" v-if="data.application_status == 6 && data.from_rating !='' && data.to_rating!='' && data.from_rating !=null && data.to_rating!=null">
                              <i class="fa fa-star  fz-14" :class="(data.to_rating >=1 )?'text-theme':''" aria-hidden="true"></i>
                              <i class="fa fa-star  fz-14" :class="(data.to_rating >=2 )?'text-theme':''" aria-hidden="true"></i>
                              <i class="fa fa-star  fz-14" :class="(data.to_rating >=3 )?'text-theme':''" aria-hidden="true"></i>
                              <i class="fa fa-star  fz-14" :class="(data.to_rating >=4 )?'text-theme':''" aria-hidden="true"></i>
                              <i class="fa fa-star  fz-14" :class="(data.to_rating ==5 )?'text-theme':''" aria-hidden="true"></i>
                          </div>
                        </span>
                        <h5 v-if="data.application_status != 7" class="fz-18 fw-600 text-black mr-2">${{data.burget}} Budget</h5>
                        <p v-else class="fz-18 fw-600 text-black mr-2">Offer sent {{ data.time }}</p>
                      </b-col>
                      <b-col xl="3" lg="3" sm="12" class="text-right">
                        <b-button class="btn btn-theme" v-if="data.application_status == 7" @click="$router.push({name:'offerdeatils',path:'/client/offer-details',params:{ pid:data.uniq_id,uid:encodedid(data.freelancer_id)}}).href">See Offer</b-button>
                        <b-button class="btn btn-theme" v-else-if="data.application_status == 2" @click="$router.push({'name':'contractDetails','path':'/client/jobpostreview/contract-detail/','params':{pid:data.uniq_id,uid:encodedid(data.freelancer_id)}})">{{data.button}}</b-button>
                        <b-button class="btn btn-theme" v-else-if="data.application_status == 6" @click="$router.push({name: 'hireFreelancer',  path:'/client/hire-freelancer/', params: {uid: 'A'+encodedid(data.freelancer_id)}}).href">Rehire</b-button>
                        <p class="fz-14 text-black fw-600 text-right mt-3" v-if="data.application_status==2 || data.application_status == 6">{{data.contractStart}}  {{(data.contractStart!='' && data.contractEnd!='')?'- '+data.contractEnd:(data.contractStart!='')?'- Present':''}}</p>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </span>
              <div class="posted-job-wrapper border-bottom" v-else>
                <div>
                  <div class="text-center py-8 px-4" >
                    <svg width="172" height="173" viewBox="0 0 172 173" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                      <path d="M75.4142 9.1442C81.305 5.05891 89.1128 5.05891 95.0036 9.1442V9.1442C98.7906 11.7705 103.474 12.7659 108.002 11.907V11.907C115.045 10.5709 122.178 13.7466 125.897 19.8747V19.8747C128.289 23.8143 132.162 26.6285 136.648 27.6855V27.6855C143.626 29.3296 148.85 35.1319 149.756 42.2433V42.2433C150.338 46.8149 152.732 50.9612 156.4 53.7514V53.7514C162.106 58.0914 164.519 65.5171 162.454 72.382V72.382C161.126 76.7953 161.626 81.5568 163.843 85.5976V85.5976C167.29 91.8832 166.474 99.6482 161.795 105.08V105.08C158.787 108.571 157.308 113.125 157.689 117.718V117.718C158.281 124.862 154.377 131.624 147.894 134.683V134.683C143.726 136.649 140.522 140.207 139.002 144.558V144.558C136.638 151.326 130.321 155.915 123.154 156.072V156.072C118.547 156.174 114.173 158.121 111.014 161.477V161.477C106.102 166.698 98.4646 168.321 91.8531 165.55V165.55C87.6028 163.768 82.815 163.768 78.5647 165.55V165.55C71.9532 168.321 64.3161 166.698 59.4034 161.477V161.477C56.2451 158.121 51.8713 156.174 47.2638 156.072V156.072C40.0967 155.915 33.7801 151.326 31.4156 144.558V144.558C29.8955 140.207 26.6919 136.649 22.5239 134.683V134.683C16.0405 131.624 12.1367 124.862 12.7292 117.718V117.718C13.1101 113.125 11.6307 108.571 8.62286 105.08V105.08C3.94419 99.6482 3.12806 91.8832 6.57521 85.5976V85.5976C8.79129 81.5568 9.29175 76.7953 7.96423 72.382V72.382C5.89925 65.5171 8.31199 58.0914 14.0177 53.7514V53.7514C17.6857 50.9612 20.0796 46.8149 20.6619 42.2433V42.2433C21.5677 35.1319 26.7921 29.3296 33.7698 27.6855V27.6855C38.2555 26.6285 42.1289 23.8143 44.5203 19.8747V19.8747C48.2402 13.7466 55.373 10.5709 62.4161 11.907V11.907C66.944 12.7659 71.6271 11.7705 75.4142 9.1442V9.1442Z" fill="#F2613C"/>
                      <path d="M151.782 22.2932C152.296 22.3179 152.821 22.1463 153.232 21.7722L170.866 5.75467C171.689 5.0068 171.751 3.73304 171.003 2.90997C170.255 2.08663 168.981 2.02545 168.158 2.77334L150.524 18.7909C149.701 19.5387 149.64 20.8125 150.388 21.6356C150.761 22.0471 151.267 22.2684 151.782 22.2932Z" fill="#F2613C"/>
                      <path d="M170.199 30.5101C169.958 29.4243 168.883 28.7393 167.796 28.9804L159.273 30.8714C158.187 31.1123 157.502 32.1878 157.743 33.2737C157.945 34.1799 158.727 34.807 159.612 34.8495C159.787 34.8579 159.966 34.8434 160.146 34.8034L168.669 32.9124C169.755 32.6717 170.44 31.596 170.199 30.5101V30.5101Z" fill="#F2613C"/>
                      <path d="M139.33 13.1927C139.505 13.2498 139.682 13.2814 139.857 13.2898C140.742 13.3323 141.581 12.783 141.868 11.9003L144.567 3.59766C144.911 2.53991 144.332 1.40345 143.275 1.05988C142.217 0.715239 141.081 1.29458 140.737 2.35232L138.038 10.6549C137.693 11.7127 138.272 12.8489 139.33 13.1927V13.1927Z" fill="#F2613C"/>
                      <g clip-path="url(#clip0_3226_22395)">
                      <path d="M124.138 60.6055C122.008 60.6055 120.275 62.3384 120.275 64.4685C120.275 66.5986 122.008 68.3315 124.138 68.3315C126.268 68.3315 128.001 66.5986 128.001 64.4685C128.001 62.3384 126.268 60.6055 124.138 60.6055ZM124.138 65.8657C123.368 65.8657 122.741 65.2389 122.741 64.4685C122.741 63.698 123.368 63.0712 124.138 63.0712C124.909 63.0712 125.536 63.698 125.536 64.4685C125.536 65.2389 124.909 65.8657 124.138 65.8657Z" fill="white"/>
                      <path d="M47.865 105.318C45.7349 105.318 44.002 107.051 44.002 109.181C44.002 111.311 45.7349 113.044 47.865 113.044C49.995 113.044 51.728 111.311 51.728 109.181C51.728 107.051 49.995 105.318 47.865 105.318ZM47.865 110.579C47.0945 110.579 46.4677 109.952 46.4677 109.181C46.4677 108.411 47.0945 107.784 47.865 107.784C48.6354 107.784 49.2622 108.411 49.2622 109.181C49.2622 109.952 48.6354 110.579 47.865 110.579Z" fill="white"/>
                      <path d="M112.386 59.2088H114.852V56.4964H117.564V54.0307H114.852V51.3184H112.386V54.0307H109.674V56.4964H112.386V59.2088Z" fill="white"/>
                      <path d="M63.5628 110.496H61.0971V113.208H58.3848V115.674H61.0971V118.387H63.5628V115.674H66.2752V113.208H63.5628V110.496Z" fill="white"/>
                      <path d="M112.221 61.9217H77.4565L72.1963 54.0312H51.8926V103.839H70.2213V101.374H54.7045L61.9785 72.2778H117.3L110.026 101.374H105.728V103.839H111.951L120.458 69.8121H112.221V61.9217ZM70.8766 56.497L74.493 61.9217H54.3583V56.497H70.8766ZM60.0534 69.8121L54.3583 92.5917V64.3874H109.756V69.8121H60.0534Z" fill="white"/>
                      <path d="M86.0015 80.332C79.5206 80.332 74.248 85.6046 74.248 92.0854C74.248 98.5663 79.5206 103.839 86.0015 103.839C92.4823 103.839 97.7549 98.5663 97.7549 92.0854C97.7549 85.6046 92.4823 80.332 86.0015 80.332ZM86.0015 101.373C80.8803 101.373 76.7138 97.2066 76.7138 92.0854C76.7138 86.9642 80.8803 82.7978 86.0015 82.7978C91.1227 82.7978 95.2891 86.9642 95.2891 92.0854C95.2891 97.2066 91.1227 101.373 86.0015 101.373Z" fill="white"/>
                      <path d="M103.016 92.086C103.016 82.7046 95.3833 75.0723 86.002 75.0723C76.6206 75.0723 68.9883 82.7044 68.9883 92.086C68.9883 101.467 76.6206 109.1 86.002 109.1C89.2379 109.1 92.2656 108.191 94.8438 106.617L109.673 121.446L115.362 115.757L100.532 100.928C102.107 98.3495 103.016 95.3219 103.016 92.086ZM71.454 92.086C71.454 84.0642 77.9802 77.538 86.002 77.538C94.0237 77.538 100.55 84.0642 100.55 92.086C100.55 100.108 94.0237 106.634 86.002 106.634C77.9802 106.634 71.454 100.108 71.454 92.086ZM109.673 117.959L100.896 109.182L103.098 106.98L111.875 115.757L109.673 117.959ZM101.354 105.237L99.1527 107.438L96.8755 105.161C97.6744 104.495 98.4115 103.758 99.077 102.959L101.354 105.237Z" fill="white"/>
                      <path d="M86.1827 85.596C85.1157 85.5472 84.1044 85.9251 83.3339 86.661C82.5745 87.3865 82.1387 88.4048 82.1387 89.4549H84.6044C84.6044 89.0694 84.7581 88.7106 85.0369 88.4443C85.3154 88.1783 85.6836 88.0405 86.0692 88.0593C86.7694 88.0915 87.3651 88.6872 87.3973 89.3873C87.4192 89.8618 87.2028 90.3108 86.8187 90.5887C85.5352 91.5168 84.7688 93.0595 84.7688 94.7152H87.2346C87.2346 93.8484 87.6192 93.0526 88.2636 92.5867C89.3237 91.8201 89.9208 90.5818 89.8606 89.2741C89.7699 87.3023 88.1543 85.6866 86.1827 85.596V85.596Z" fill="white"/>
                      <path d="M84.7695 96.0312H87.2353V98.6614H84.7695V96.0312Z" fill="white"/>
                      <path d="M57.0703 57.9766H59.7004V60.4423H57.0703V57.9766Z" fill="white"/>
                      <path d="M62.3301 57.9766H64.9602V60.4423H62.3301V57.9766Z" fill="white"/>
                      <path d="M67.5918 57.9766H70.2219V60.4423H67.5918V57.9766Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_3226_22395">
                      <rect width="84" height="84" fill="white" transform="translate(44.002 44.3828)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <h4 class="fz-20 fw-600 text-black">No Contracts Found</h4>
                  </div>
                </div>
              </div>
            </b-card>
            
            <div class="text-center py-4 text-theme" v-if="loaderStatus">
              <b-spinner type="border" medium></b-spinner>
            </div>
          </b-card-group> 
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
  import { mapActions } from "vuex";
  export default {
    components: {
    },
    computed: {
      startFromDate(){
        return (this.filtersValue.contract_start_from=='')?new Date().toISOString().substr(0, 10):this.filtersValue.contract_start_from;
      },
      endFromDate(){
        return (this.filtersValue.contract_end_from=='')?new Date().toISOString().substr(0, 10):this.filtersValue.contract_end_from;
      }
    },
    data() {
      return {
        filterTab               : false,
        selected                : null,
        contractList            : [],
        busy                    : false,
        loaderStatus            : false,
        contract_statusAll      : false,
        milestone_statusAll     : false,
        frontFilterShow         : true,
        filtersValue            : {
          title                 : '',
          start_limit           : 0,
          end_limit             : 3,
          contract_status       : [],
          milestone_status      : [],
          contract_start_from   : '',
          contract_start_to     : '',
          contract_end_from     : '',
          contract_end_to       : '',
        },
      }
    },
    methods: {
      ...mapActions(['genericAPIPOSTRequest']),
      // this fun is for to clear all filter value
      clearFilter(_v=null){
        this.filtersValue = {
          title                 : '',
          start_limit           : 0,
          end_limit             : 3,
          contract_status       : [],
          milestone_status      : [],
          contract_start_from   : '',
          contract_start_to     : '',
          contract_end_from     : '',
          contract_end_to       : '',
        };
        if(_v!=null){
          this.frontFilterShow = false;
          this.filterData();
        }
      },
      // this fun is for to filter the data
      filterData(){
        this.contractList                       = [];
        this.filtersValue.start_limit           = 0;
        this.filtersValue.end_limit             = 3;
        this.busy                               = false;
        this.getAllcontracts();
      },
      
      // this fun for active contract
      async getAllcontracts(){
        if(this.busy)return true;
        this.busy                   = true;
        this.loaderStatus           = true;
        var res                     = await this.genericAPIPOSTRequest({
            requestUrl: "getClientContractList",
            params                : {
              'filter'            : '2,6,7',
              'search'            : this.filtersValue
            },
        });  
        if(res!=""){
          var that                = this;
          res.map(function(item){ return  that.contractList.push(item)  } );
          this.filtersValue.start_limit=this.contractList.length;
          this.busy               = false;
        }
        this.loaderStatus         = false;
      },
      // toggleDropdown (event) {
      //   event.currentTarget.classList.toggle('is-active')
      //   // console.log('event',event.toggleClass('dropdown-content'));
      // }
    },
    mounted(){
      this.getAllcontracts();
      window.scrollTo(0, 0);
      if(this.isPermissionForClient('all-contract')!= true){
        history.go(-1)
      }
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
  .border-bottom{border-bottom: 1px solid #EBEBEB!important;}
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fw-600{font-weight:600;}
  .fw-500{font-weight:500;}
  .fw-400{font-weight:400;}
  .mb-23{margin-bottom:23px;}
  .no-bottom-border{border-bottom:0px!important;}
  .border-top-0{border-top:0px!important;}
  .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  .fz-30{font-size:26px!important;}

  .posting-wrap .card{border-radius:20px;}  
  .posting-wrap .card-header{border-radius:20px 20px 0 0!important;}
  .posting-wrap .card-body{border-radius:0 0 20px 20px;    padding: 0 12px;}
  .posting-wrap .card-footer{border-radius:0 0 20px 20px!important;background-color:#fff;}
  .tags-wrap ul{margin-bottom:0px!important;}
  a{text-decoration:none!important;}
  .posted-job-wrapper{padding-bottom:15px;margin-bottom:15px;}
  .posted-job-wrapper.border-bottom:last-child{border-bottom:0!important;}
  .posted-job-wrapper .dropdown-menu{padding-left:0px!important;}

  .dropdown-header {cursor: pointer;line-height: 50px;padding-left: 10px;padding-right: 50px;position: relative;text-overflow: ellipsis;}
  .dropdown-header i.fa {position: absolute;right: 10px;top: 50%;transform: translateY(-50%);transition: opacity 0.3s;}
  .dropdown-header i.fa.fa-angle-up {opacity: 0;}
  .dropdown-header.is-active i.fa.fa-angle-up {opacity: 1;}
  .dropdown-header.is-active i.fa.fa-angle-down {opacity: 0;}
  .dropdown-header.is-active + .dropdown-content {height: auto;opacity: 1;visibility: visible;display:block;}
  .dropdown-content {height: 0;opacity: 0;overflow: hidden;padding: 20px;transition: opacity 0.3s;visibility: hidden;background-color:#fff;    border-radius: 8px;margin-bottom: 20px;display:none;}
  .dropdown-content .custom-control label{font-weight:500;font-size:16px;color:#333;}
  .w-15 {width: 4.5rem;}
  .h-15 {height: 4.5rem;}
  .object-fit-scale-down{object-fit:scale-down;}
</style>
