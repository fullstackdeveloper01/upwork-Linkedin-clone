  <template>
    <b-container>
      <b-row class="mt-100 posting-wrap" >
        <b-col xl="12" lg="12" sm="12" >
          <div class="d-md-flex align-items-center mb-3">
            <h4 class="mb-0 fz-24 fw-500 text-black"><b>Job Posting</b></h4>
            <div class="ml-auto">
              <b-button  @click="$router.push('/client/post-job')"  class="btn btn-theme">Post a Job</b-button>
            </div>
          </div>
          <b-card-group deck >
            <b-card title-class="text-theme font-14" class="py-4 px-4" >
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
                      <b-form-input v-model="filter.title" placeholder="Search for Jobs..." @keyup="FilterData()"></b-form-input>
                    </b-input-group>
                    <button type="button" class="btn btn-theme-outline d-flex align-items-center no-focus"  @click="filterTab = !filterTab">
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15625 4.625V9.625C9.15625 9.97018 8.87643 10.25 8.53125 10.25C8.18607 10.25 7.90625 9.97018 7.90625 9.625V4.625C7.90625 4.27982 8.18607 4 8.53125 4C8.87643 4 9.15625 4.27982 9.15625 4.625ZM11.6562 17.125C11.6562 18.8509 10.2571 20.25 8.53125 20.25C6.80536 20.25 5.40625 18.8509 5.40625 17.125C5.40625 15.3991 6.80536 14 8.53125 14C10.2571 14 11.6562 15.3991 11.6562 17.125ZM9.15625 21.4557V23.375C9.15625 23.7202 8.87643 24 8.53125 24C8.18607 24 7.90625 23.7202 7.90625 23.375V21.4557C5.78607 21.1524 4.15625 19.329 4.15625 17.125C4.15625 14.7088 6.115 12.75 8.53125 12.75C10.9475 12.75 12.9062 14.7088 12.9062 17.125C12.9062 19.329 11.2764 21.1524 9.15625 21.4557ZM20.1562 23.375C20.1562 23.7202 20.4361 24 20.7812 24C21.1264 24 21.4062 23.7202 21.4062 23.375V18.375C21.4062 18.0298 21.1264 17.75 20.7812 17.75C20.4361 17.75 20.1562 18.0298 20.1562 18.375V23.375ZM20.1562 6.54431V4.625C20.1562 4.27982 20.4361 4 20.7812 4C21.1264 4 21.4062 4.27982 21.4062 4.625V6.54431C23.5264 6.84757 25.1562 8.67096 25.1562 10.875C25.1562 13.2912 23.1975 15.25 20.7812 15.25C18.365 15.25 16.4062 13.2912 16.4062 10.875C16.4062 8.67096 18.0361 6.84757 20.1562 6.54431ZM20.7812 7.75C22.5071 7.75 23.9062 9.14911 23.9062 10.875C23.9062 12.6009 22.5071 14 20.7812 14C19.0554 14 17.6562 12.6009 17.6562 10.875C17.6562 9.14911 19.0554 7.75 20.7812 7.75Z" fill="#666666"/>
                      </svg>
                      <span class="text-theme fz-16 fw-600">Filter</span>
                    </button>
                  </div>
                  <div class="bg-white p-0" v-if="(filter.preferences_job_type !='' || filter.job_status.length > 0) && filterTab == false">
                    <div class="selected-tags mb-2 mt-2">
                      <div class="tags-wrap">
                        <ul>
                          <span v-if="filter.preferences_job_type !=''">
                            <li>
                              <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span class="mr-2 fz-12">{{filter.preferences_job_type}}</span>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeFilter('type')"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                              </a>
                            </li>
                          </span>
                          <span v-if="filter.job_status.length > 0">
                            <li v-for="(job_status,index) in filter.job_status" :key="index">
                              <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span class="mr-2 fz-12" v-if="job_status == 1">open</span>
                                <span class="mr-2 fz-12" v-else-if="job_status == 2">Draft</span>
                                <span class="mr-2 fz-12" v-else-if="job_status == 4">Closed</span>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeFilter('status',index)"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C" ></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                              </a>
                            </li>
                          </span>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <b-row v-if="filterTab">
                    <b-col cols="12">
                      <div class="dropdown-filter bg-white p-0">
                        <div class="selected-tags mb-2 mt-2">
                          <div class="tags-wrap">
                            <ul>
                              <span v-if="filter.preferences_job_type !=''">
                                <li>
                                  <a href="javascript:void(0);" class="d-flex align-items-center">
                                    <span class="mr-2 fz-12">{{filter.preferences_job_type}}</span>
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeFilter('type')"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                                  </a>
                                </li>
                              </span>
                              <span v-if="filter.job_status.length > 0">
                                <li v-for="(job_status,index) in filter.job_status" :key="index">
                                  <a href="javascript:void(0);" class="d-flex align-items-center">
                                    <span class="mr-2 fz-12" v-if="job_status == 1">open</span>
                                    <span class="mr-2 fz-12" v-else-if="job_status == 2">Draft</span>
                                    <span class="mr-2 fz-12" v-else-if="job_status == 4">Closed</span>
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeFilter('status',index)"><rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C" ></rect><rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect></svg>
                                  </a>
                                </li>
                              </span>
                            </ul>
                          </div>
                        </div>
                        <hr>
                        <b-row>
                          <b-col xl="3" lg="3" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Visibility</label>
                            <b-form-group>
                              <b-form-radio-group
                                v-model="filter.preferences_job_type"
                                :options="jobtype"
                                value-field="value"
                                text-feild="text"
                              ></b-form-radio-group>
                            </b-form-group>
                          </b-col>
                          <b-col xl="3" lg="3" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Job Status</label>
                            <b-form-group>
                              <b-form-checkbox v-model="job_statusAll" value="1"  class="fz-16 fw-400 text-black" @change="job_statusAllv()">All</b-form-checkbox>
                              <b-form-checkbox-group
                                v-model="filter.job_status"
                                :options="statusarr"
                                value-field="value"
                                text-feild="text"
                                class="fz-16 fw-400 text-black"
                              >
                              </b-form-checkbox-group>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <hr>
                        <b-button class="btn btn-theme mr-2" @click="FilterData(); filterTab = !filterTab">Apply Filter</b-button>
                        <b-button class="btn btn-outline-theme" @click="filterTab = !filterTab; filter.job_status=[]; filter.preferences_job_type=''">Clear</b-button>
                      </div>
                    </b-col>
                  </b-row>
                </template>
              </div>
              <template v-if="PostJobList.length > 0">
                <div class="posted-job-wrapper border-bottom" v-for="(postjobs, i) of PostJobList" :key="i"  >
                  <span v-if="postjobs.job_status != 'Draft'">
                    <div class="d-md-flex align-items-center mb-3">
                      <h4 class="mb-0 fz-18 fw-500 text-black"><a href="javascript:void(0);" class="text-black" @click="$router.push({name: 'index',path:'/client/jobpostreview/',params: {pid: postjobs.uniq_id}}).href"><b>{{postjobs.job_title}}</b></a></h4>
                      <br><span>{{ postjobs.createdby_Name+" "+postjobs.createdby_lastname }}</span>
                      <div class="ml-auto">
                        <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret id="dropdown-right" right text="Right align">
                          <template #button-content>
                            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                            </svg>
                            </template>
                              <b-dropdown-item href="javascript:void(0);" @click="$router.push({name: 'index',path:'/client/jobpostreview/',params: {pid: postjobs.uniq_id}}).href">
                                <div class="d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mr-2" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                  </svg>
                                  View Proposals
                                </div>
                              </b-dropdown-item>
                              <b-dropdown-item href="javascript:void(0);" v-if="postjobs.is_delete == 0" @click="makePrivatepublic(i,postjobs.preferences_job_type,postjobs.jobs_id)">
                                <div class="d-flex align-items-center">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="bi bi-unlock mr-2" xmlns="http://www.w3.org/2000/svg" v-if="postjobs.preferences_job_type == 'Private'">
                                    <g clip-path="url(#clip0_1073_15001)">
                                      <path d="M10.7646 0.780273C7.74988 0.780273 5.33812 3.19204 5.33812 6.20674V8.6185C4.31312 8.6185 3.5293 9.40232 3.5293 10.4273V18.2655C3.5293 19.2905 4.31312 20.0744 5.33812 20.0744H16.1911C17.216 20.0744 17.9999 19.2905 17.9999 18.2655V10.4273C17.9999 9.40232 17.216 8.6185 16.1911 8.6185V6.20674C16.1911 3.19204 13.7793 0.780273 10.7646 0.780273ZM16.794 10.4273V18.2655C16.794 18.6273 16.5528 18.8685 16.1911 18.8685H5.33812C4.97635 18.8685 4.73518 18.6273 4.73518 18.2655V10.4273C4.73518 10.0656 4.97635 9.82438 5.33812 9.82438H5.94106H15.5881H16.1911C16.5528 9.82438 16.794 10.0656 16.794 10.4273ZM6.544 8.6185V6.20674C6.544 3.85527 8.41312 1.98615 10.7646 1.98615C13.1161 1.98615 14.9852 3.85527 14.9852 6.20674V8.6185H6.544Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.2"/>
                                      <path d="M10.7658 11.6331C9.74085 11.6331 8.95703 12.4169 8.95703 13.4419C8.95703 14.2257 9.43938 14.8889 10.1629 15.1301V16.4566C10.1629 16.8183 10.4041 17.0595 10.7658 17.0595C11.1276 17.0595 11.3688 16.8183 11.3688 16.4566V15.1301C12.0923 14.8889 12.5747 14.2257 12.5747 13.4419C12.5747 12.4169 11.7908 11.6331 10.7658 11.6331ZM10.7658 14.0448C10.4041 14.0448 10.1629 13.8036 10.1629 13.4419C10.1629 13.0801 10.4041 12.8389 10.7658 12.8389C11.1276 12.8389 11.3688 13.0801 11.3688 13.4419C11.3688 13.8036 11.1276 14.0448 10.7658 14.0448Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.2"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1073_15001">
                                        <rect width="22" height="22" fill="white" transform="translate(0 0.0742188)"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-unlock mr-2" viewBox="0 0 16 16" v-else>
                                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
                                  </svg>
                                  Make {{(postjobs.preferences_job_type != 'Private') ?'Private' :'Public'}}
                                </div>
                              </b-dropdown-item>
                              <b-dropdown-item href="javascript:void(0);" @click="$router.push({name: 'index',path:'/client/jobpostreview/',params: {pid: postjobs.uniq_id}}).href">
                                <div class="d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-post mr-2" viewBox="0 0 16 16">
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                    <path d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5z"/>
                                  </svg>
                                  View Job Posting
                                </div>
                              </b-dropdown-item>
                              <b-dropdown-item href="javascript:void(0);" v-if="postjobs.is_delete == 0" @click="$router.push({ name: 'postReview', path:'/client/post-review', params: {pid: postjobs.uniq_id} });">
                                <div class="d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square mr-2" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                  </svg>
                                  Edit Posting
                                </div>
                              </b-dropdown-item>
                              <b-dropdown-item href="javascript:void(0);"  @click="$router.push({ name:'post-job',path:'/client/post-job', params:{ pid:postjobs.uniq_id}})">
                                <div class="d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stickies mr-2" viewBox="0 0 16 16">
                                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"/>
                                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"/>
                                  </svg>
                                  Reuse Posting
                                </div>
                              </b-dropdown-item>
                              <b-dropdown-item href="javascript:void(0);" v-if="postjobs.is_delete == 0" v-b-modal.modal-postdelete @click="removePostId =postjobs.jobs_id" >
                                <div class="d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mr-2" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                  </svg>
                                  Remove Posting
                                </div>
                              </b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </div>
                    <b-row> 
                      <b-col xl="4" lg="4" sm="12">
                        <p class="fz-16 fw-500 text-muted mb-1">{{postjobs.preferences_job_type}}</p>
                        <p class="fz-16 fw-500 text-muted mb-0">Posted {{postjobs.create_timestamp}}</p>
                      </b-col>
                      <b-col xl="2" lg="2" sm="12">
                        <p class="fz-16 fw-500 text-black mb-1">{{postjobs.appliedCount}} <span class="badge badge-theme" v-if="postjobs.UnseenProposals > 0">{{postjobs.UnseenProposals}} new</span></p>
                        <h4 class="fz-16 fw-500 text-muted mb-0">Proposals</h4>
                      </b-col>
                      <b-col xl="2" lg="2" sm="12">
                        <p class="fz-16 fw-500 text-black mb-1">{{postjobs.messagedCount}}</p>
                        <h4 class="fz-16 fw-500 text-muted mb-0">Messaged </h4>
                      </b-col>
                      <b-col xl="2" lg="2" sm="12">
                        <p class="fz-16 fw-500 text-black mb-1">{{postjobs.hiredCount}}</p>
                        <h4 class="fz-16 fw-500 text-muted mb-0">Hired</h4>
                      </b-col>
                      <b-col xl="2" lg="2" sm="12" class="text-right">
                        <!-- <b-button class="btn btn-theme">View Proposals</b-button> -->
                      </b-col>  
                    </b-row>
                  </span>
                  <span v-else>
                    <div class="d-md-flex align-items-center mb-3">
                      <h4 class="mb-0 fz-18 fw-500 text-black"><b>{{postjobs.job_title}}</b></h4>
                      <div class="ml-auto">
                        <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                          <template #button-content>
                            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                            </svg>
                          </template>
                          <b-dropdown-item href="javascript:void(0);" @click="$router.push({name: 'postReview', path:'/client/post-review',params: {pid: postjobs.uniq_id}}).href">Edit Draft</b-dropdown-item>
                          <b-dropdown-item href="javascript:void(0);" v-b-modal.modal-draftdelete @click="removePostId =postjobs.jobs_id">Remove Draft</b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </div>
                    <b-row> 
                      <b-col xl="4" lg="4" sm="12">
                        <p class="fz-16 fw-500 text-muted mb-1">{{postjobs.preferences_job_type}}</p>
                        <p class="fz-16 fw-500 text-muted mb-0">Posted {{postjobs.create_timestamp}}</p>
                      </b-col>
                      <!-- <b-col xl="2" lg="2" sm="12">
                        <p class="fz-16 fw-500 text-black mb-1">{{postjobs.appliedCount}} <span class="badge badge-theme" v-if="postjobs.notSeenAwarded > 0">{{postjobs.notSeenAwarded}} new</span></p>
                        <h4 class="fz-16 fw-500 text-muted mb-0">Proposals</h4>
                      </b-col>
                      <b-col xl="2" lg="2" sm="12">
                        <p class="fz-16 fw-500 text-black mb-1">00</p>
                        <h4 class="fz-16 fw-500 text-muted mb-0">Messaged </h4>
                      </b-col>
                      <b-col xl="2" lg="2" sm="12">
                        <p class="fz-16 fw-500 text-black mb-1">{{postjobs.awarded}}</p>
                        <h4 class="fz-16 fw-500 text-muted mb-0">Hired</h4>
                      </b-col> -->
                      <b-col xl="2" lg="2" sm="12" class="text-right">
                        <!-- <b-button class="btn btn-theme">View Proposals</b-button> -->
                      </b-col>  
                    </b-row>
                  </span>
                </div> 
              </template>
              <template v-else>
                <div class="text-center">
                  <svg width="140" height="140" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                    <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
                    <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
                  </svg>
                  <h4 class="fz-20 fw-600 text-black mt-2">No jobs found</h4>
                  <p class="fz-14 fw-500 text-black mb-0">You don't have any job postings yet.</p>
                  <b-button class="btn btn-theme text-center my-4">Post a Job</b-button>
                </div>
              </template>
            </b-card>
          </b-card-group> 

          <b-modal id="modal-postdelete" title="Delete Job Post" centered hide-footer size="md" no-close-on-backdrop> 
            <template>
              <div class="p-5 text-center m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#c10000" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                <h5 class="mt-4">Are you sure, Want to delete this Job Post?</h5>
              </div>
              <hr>
              <div>
                  <div class="text-right">
                    <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-postdelete')">Cancel</a>
                    <b-button type="button" class="btn btn-theme" @click="ConfirmDelete(removePostId)">Confirm</b-button>
                  </div>
              </div>
            </template>
          </b-modal>
          <b-modal id="modal-draftdelete" title="Delete Draft" centered hide-footer size="md" no-close-on-backdrop> 
            <template>
              <div class="p-5 text-center m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#c10000" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                <h5 class="mt-4">Are you sure, want to delete this draft?</h5>
              </div>
              <hr>
              <div>
                  <div class="text-right">
                    <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-draftdelete')">Cancel</a>
                    <b-button type="button" class="btn btn-theme" @click="ConfirmDelete(removePostId)">Confirm</b-button>
                  </div>
              </div>
            </template>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </template>
  <script>
   import { mapActions } from "vuex";
    export default {
      data() {
        return {
          filterTab:false,
          PostJobList:[],
          search:'',
          removePostId:'',
          job_statusAll:'',
          filterValue:[],
          filter:{
              title:'',
              preferences_job_type:'',
              job_status:[],
          },
          statusarr:[
            {value:"4", text:"Closed"},
            {value:"2", text:"Drafts"},
            {value:"1", text:"Open"},
          ],
          jobtype: [
            { text: 'All', value: '' },
            { text: 'Private', value: 'Private' },
            { text: 'Public', value: 'Public' },
          ],
        }
      },
       computed:{
        // PostJobListFiltered(){
        //   function compare(a, b) {
        //     if (a.job_title < b.job_title) return -1;
        //     if (a.job_title > b.job_title) return 1;
        //     return 0;
        //   }
        //   return this.PostJobList.filter(user => {
        //       return user.job_title.toLowerCase().includes(this.search.toLowerCase());
        //   }).sort(compare);
        // },
         
      },
      async mounted() {
        if(this.$route.params.pid =='post') this.filter.job_status =['1'];
        else this.filter.job_status =['2'];
         
        this.getPostedJob(''); 
      },
      methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        removeFilter(_v,_i= null){
          if (_v=='type') {
            this.filter.preferences_job_type='';
            this.getPostedJob();
          }else{
            this.filter.job_status.splice(_i,1);
            if(this.filter.job_status.length < 3 ) this.job_statusAll=false;
            this.getPostedJob();
          }
          
        },
        job_statusAllv(){
          if(this.job_statusAll == 1) this.filter.job_status=['4','2','1'];
          else  this.filter.job_status=[];
          this.FilterData();
        },
        async FilterData(){
          if(this.filter.job_status.length < 3 ) this.job_statusAll=false;
          else this.job_statusAll=1;
          this.getPostedJob();
        },
        // this fun is for make job public private
        async makePrivatepublic(_i,_v,job_id){
          var updateValue;
          if (_v=='Private') {
            updateValue='Public';
            this.PostJobList[_i].preferences_job_type = updateValue;
          }else{
            updateValue='Private';
            this.PostJobList[_i].preferences_job_type = updateValue;
          }
          await this.genericAPIPOSTRequest({
            requestUrl: "updateJob",
            params: {
              "jobs_id":job_id,
              "preferences_job_type":updateValue
            },
          });
          this.$toastr.s('Job type Updated to '+updateValue);
        },
        async getPostedJob(){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getUserPostedJob",
              params: {
                filter:'ALL',
                search:this.filter
              },
          });  
          this.PostJobList = res;
        },
        //this fun for delete posts
        async ConfirmDelete(_i){
          await this.genericAPIPOSTRequest({
            requestUrl: "deletePostJob",
            params: {
              "jobData":{"jobs_id":_i}
            },
          });  
          this.$bvModal.hide('modal-postdelete');
          this.getPostedJob();
        },
        toggleDropdown (event) {
          event.currentTarget.classList.toggle('is-active')
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
    posting-wrap .selected-tags{margin-bottom:3rem;}
    .posted-job-wrapper .btn-group{margin-top:0px!important;}
    @media only screen and (min-width: 320px) and (max-width: 815px) {
      posting-wrap .selected-tags{margin-bottom:1rem!important;}
    }
  </style>
