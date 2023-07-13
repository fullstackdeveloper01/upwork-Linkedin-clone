<template>
    <div>
        <b-card class="mb-3">
      <b-row>
        <b-col cols="12" class="px-4 py-4">
          <section class="card-section">
            <div class="pb-0 d-md-flex align-items-center mb-5">
              <span class="fz-22 fw-600 text-black">Members & Permissions</span>
              <div class="ml-auto">
                <a href="javascript:void(0);" class="btn btn-outline-theme"  v-b-modal.invite-user @click="exclusive_msg = ($store.state.currentUserData.exclusive_id>0)?true:false">
                  Invite New User
                </a>
              </div>
            </div>
            <h6 class="fw-600 text-muted mb-3">Owner:  {{ $store.state.currentUserData.freelancerFirstName }} {{ $store.state.currentUserData.freelancerLastName }} <span v-if="$store.state.currentUserData.freelancer_id == $store.state.listAccount.qp_user.user_id">(Me) <span class="text-theme" v-b-modal.edit-agency-role @click="openExclusiveModel($store.state.currentUserData.exclusive_id)">{{($store.state.currentUserData.exclusive_id>0)?'Exclusive':'Non-Exclusive'}}</span></span></h6>
          </section>
        </b-col>
      </b-row> 
    </b-card>
    <b-card class="mb-3">
      <b-row>
        <b-col cols="12" class="px-4 py-4">
          <section class="card-section members-container">
            <b-tabs pills card v-model="currenttab">
              <b-tab  title="Active Members" @click="getactiveMembers">
                <b-card-text>
                  <b-row class="search-container mt-2 pos-rel">
                    <b-col xl="12" lg="12" md="12">
                      <b-input-group>
                        <b-input-group-prepend>
                          <b-button variant="info" class="bg-white border-grey border-right-none br-0 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                          </b-button>
                        </b-input-group-prepend>
                        <b-form-input
                          v-model="filter.name"
                          placeholder="Search Name"
                          @keyup="applyFilters"
                        ></b-form-input>
                      </b-input-group>
                      <b-button class="btn-outline-theme d-flex align-items-center float-right text-center justify-content-center filter-btn" v-b-toggle.collapse-1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders mr-4" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                        </svg>
                        <span class="filter-text">Filters</span>
                      </b-button>
                      <b-col xl="12" lg="12" md="12" >
                        <span class="up-skill-badge inline-block align-items-center pt-1" v-if="filter.team!=''">
                            {{$store.state.currentUserData.first_name}}
                            <a href="javascript:" class="text-muted">
                                <div class="up-icon xs pt-1">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="filter.team=''"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                </div>
                            </a>
                        </span>

                        <span class="up-skill-badge inline-block align-items-center pt-1" v-if="filter.order_by!=''">
                            {{(filter.order_by=='ASC')?'(A-Z)':'(DESC)'}}
                            <a href="javascript:" class="text-muted">
                                <div class="up-icon xs pt-1">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="filter.order_by=''"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                </div>
                            </a>
                        </span>

                        <span v-if="filter.admin.length > 0">
                          <span class="up-skill-badge inline-block align-items-center pt-1" v-for="(admin,index) in filter.admin" :key="index">
                              {{(admin==1)?'None':(admin==2)?'Finance':'Full'}}
                              <a href="javascript:" class="text-muted">
                                  <div class="up-icon xs pt-1">
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr('admin',index)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                  </div>
                              </a>
                          </span>
                        </span>

                        <span v-if="filter.hiring.length > 0">
                          <span class="up-skill-badge inline-block align-items-center pt-1" v-for="(hiring,index) in filter.hiring" :key="index">
                              {{(hiring==1)?'None':(hiring==2)?'Source Talent Only':'Manager'}}
                              <a href="javascript:" class="text-muted">
                                  <div class="up-icon xs pt-1">
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr('hiring',index)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                  </div>
                              </a>
                          </span>
                        </span>

                        <span v-if="filter.business.length > 0">
                          <span class="up-skill-badge inline-block align-items-center pt-1" v-for="(business,index) in filter.business" :key="index">
                              {{(business==1)?'No':'Manager'}}
                              <a href="javascript:" class="text-muted">
                                  <div class="up-icon xs pt-1">
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr('business',index)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                  </div>
                              </a>
                          </span>
                        </span>

                        <span v-if="filter.agency_contract.length > 0">
                          <span class="up-skill-badge inline-block align-items-center pt-1" v-for="(agency_contract,index) in filter.agency_contract" :key="index">
                              {{(agency_contract==1)?'Exclusive':'Non Exclusive'}}
                              <a href="javascript:" class="text-muted">
                                  <div class="up-icon xs pt-1">
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr('agency_contract',index)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                  </div>
                              </a>
                          </span>
                        </span>

                        <span v-if="filter.view_work.length > 0">
                          <span class="up-skill-badge inline-block align-items-center pt-1" v-for="(view_work,index) in filter.view_work" :key="index">
                              {{(view_work==1)?'Individual':'Team'}}
                              <a href="javascript:" class="text-muted">
                                  <div class="up-icon xs pt-1">
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr('view_work',index)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                  </div>
                              </a>
                          </span>
                        </span>

                        <span v-if="filter.chat_with.length > 0">
                          <span class="up-skill-badge inline-block align-items-center pt-1" v-for="(chat_with,index) in filter.chat_with" :key="index">
                              {{(chat_with==1)?'No One':(chat_with==2)?'Team':'Company'}}
                              <a href="javascript:" class="text-muted">
                                  <div class="up-icon xs pt-1">
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr('chat_with',index)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                                  </div>
                              </a>
                          </span>
                        </span>

                      </b-col>
                      <b-collapse id="collapse-1" class="mt-2 collapse shadow border br-4">
                        <b-card>
                          <b-form>
                            <b-row>
                              <b-col xl="6" lg="6" md="12">
                                <b-form-group id="fieldset-1">
                                  <label class="fz-16 fw-600" for="team">Team</label><br>
                                  <b-form-select 
                                    v-model="filter.team"
                                    :options="inviteoptions"
                                    text-field="value"
                                    value-field="id"
                                    id="team" class="form-control"></b-form-select>
                                </b-form-group>
                              </b-col>
                              <b-col xl="6" lg="6" md="12">
                                <b-form-group id="fieldset-1">
                                  <label class="fz-16 fw-600" for="team">Sort By</label><br>
                                  <b-form-select
                                  :options="sortoptions"
                                  text-field="value"
                                  value-field="id"
                                  v-model="filter.order_by"
                                  id="team" class="form-control"></b-form-select>
                                </b-form-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col xl="4" lg="4" md="12">
                                <h4 class="fz-16 fw-600">Admin</h4>
                                <b-form-group>
                                  <b-form-checkbox-group
                                    v-model="filter.admin"
                                    :options="adminoptions"
                                    text-field="value"
                                    value-field="id"
                                    
                                  ></b-form-checkbox-group>
                                </b-form-group>
                              </b-col>
                              <b-col xl="4" lg="4" md="12" v-if="$store.state.accountType=='agency'">
                                <h4 class="fz-16 fw-600">Business</h4>
                                <b-form-checkbox-group
                                  v-model="filter.business"
                                  :options="businessoptions"
                                  text-field="value"
                                  value-field="id"
                                  
                                ></b-form-checkbox-group>
                              </b-col>
                              <b-col xl="4" lg="4" md="12" v-if="$store.state.accountType=='agency'">
                                <h4 class="fz-16 fw-600">Agency Contractor</h4>
                                <b-form-checkbox-group
                                  v-model="filter.agency_contract"
                                  :options="agencyoptions"
                                  text-field="value"
                                  value-field="id"
                                  
                                ></b-form-checkbox-group>
                              </b-col>
                              <b-col xl="4" lg="4" md="12" v-if="$store.state.accountType=='client'">
                                <h4 class="fz-16 fw-600">Hiring</h4>
                                <b-form-checkbox-group
                                  v-model="filter.hiring"
                                  :options="hiringoptions"
                                  text-field="value"
                                  value-field="id"
                                  
                                ></b-form-checkbox-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col xl="4" lg="4" md="12">
                                <h4 class="fz-16 fw-600">Work Diaries</h4>
                                <b-form-checkbox-group
                                  v-model="filter.view_work"
                                  :options="diariesoptions"
                                  text-field="value"
                                  value-field="id"
                                  
                                ></b-form-checkbox-group>
                              </b-col>
                              <b-col xl="4" lg="4" md="12">
                                <h4 class="fz-16 fw-600">Chat</h4>
                                <b-form-checkbox-group
                                  name="name"
                                  v-model="filter.chat_with"
                                  :options="chatoptions"
                                  text-field="value"
                                  value-field="id"
                                  
                                ></b-form-checkbox-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col xl="12" lg="12" md="12">
                                <div class="d-md-flex align-items-center">
                                  <b-button class="btn-theme mr-2" @click="applyFilters" >Apply Filters</b-button>
                                  <b-button class="btn-outline-theme mr-2" @click="clearFilter">Clear</b-button>
                                  <a href="javascript:void(0);" class="text-theme" v-b-toggle.collapse-1>Close</a>
                                </div>
                              </b-col>
                            </b-row>
                          </b-form>
                        </b-card>
                      </b-collapse>
                    </b-col>
                  </b-row>

                  <div class="data-container mt-4">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>
                              <b-form-checkbox id="checkbox"></b-form-checkbox>
                            </th>
                            <th>
                              
                            </th>
                            <th>
                              User Details
                            </th>
                            <th>
                              Permissions
                            </th>
                            <th>
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody v-if="activeUser.length > 0">
                          <tr v-for="(list,index) in activeUser" :key="index">
                            <td>
                              <b-form-checkbox id="checkbox-1"></b-form-checkbox>
                            </td>
                            <td>
                              <div class="img-container border shadow bg-white">
                                <img :src="$store.state.baseUrlImg+'/upload/profile_image/'+list.profile_picture_path" class="img-fluid w-100">
                              </div>
                            </td>
                            <td>
                              <h5 class="fz-16 fw-500"><b>Team:</b> {{list.team_firstname}} {{list.team_lastname}}.</h5>
                              <h5 class="fz-16 fw-500"><b>User:</b> {{list.first_name}} {{list.last_name}}.</h5>
                            </td>
                            <td>
                              <h5 class="fz-16 fw-500"><b>Admin:</b> {{(list.admin == 1)?'None':(list.admin == 2)?'Finanace Only':'Full'}}</h5>
                              <h5 class="fz-16 fw-500" v-if="list.business!=0"><b>Business:</b> {{(list.business == 1)?'No':'Managers'}}</h5>
                              <h5 class="fz-16 fw-500" v-if="list.agency_contract!=0"><b>Agency Contractor:</b> {{(list.agency_contract == 1)?'Exclusive':'Non Exclusive'}}</h5>
                              <h5 class="fz-16 fw-500" v-if="list.hiring!=0"><b>Hiring:</b> {{(list.hiring == 1)?'None':(list.hiring == 2)?'Source Talent Only':'Manager'}}</h5>
                            </td>
                            <td>
                              <b-dropdown size="lg" right  variant="link" toggle-class="text-decoration-none" no-caret>
                                <template #button-content>
                                  <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                                  </svg>
                                </template>
                                <b-dropdown-item href="javascript:void(0);">
                                  <div class="d-flex align-items-center" v-b-modal.edit-user @click="editActivemembers(list)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mr-2" viewBox="0 0 16 16">
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>
                                    Edit
                                  </div>
                                </b-dropdown-item>
                                <b-dropdown-item href="javascript:void(0);">
                                  <div class="d-flex align-items-center" @click="removeinvitationId = list.members_permission_id " v-b-modal.remove-members-modal>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock mr-2" viewBox="0 0 16 16" >
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                  </svg>
                                    Remove from Members
                                  </div>
                                </b-dropdown-item>
                              </b-dropdown>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-else >
                          <tr>
                            <p>No Invitation Accepted Found</p>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Invitations" @click="getInvitationsent">
                <b-card-text>
                  <div class="data-container mt-4">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <tbody v-if="invitedUser.length > 0">
                          <tr v-for="(list,index) in invitedUser" :key="index">
                            <td>
                              <h5 class="fz-18 fw-600 mb-0">{{list.email}}</h5>
                            </td>
                            <td>
                              <h5 class="fz-16 fw-500"><b>Admin:</b> {{(list.admin == 1)?'None':(list.admin == 2)?'Finanace Only':'Full'}}</h5>
                              <h5 class="fz-16 fw-500" v-if="list.business!=0"><b>Business:</b> {{(list.business == 1)?'No':'Managers'}}</h5>
                              <h5 class="fz-16 fw-500" v-if="list.agency_contract!=0"><b>Agency Contractor:</b> {{(list.agency_contract == 1)?'Exclusive':'Non Exclusive'}}</h5>
                              <h5 class="fz-16 fw-500" v-if="list.hiring!=0"><b>Hiring:</b> {{(list.hiring == 1)?'None':(list.hiring == 2)?'Source Talent Only':'Manager'}}</h5>
                              <!-- <h5 class="fz-16 fw-500"><b>Can Choose:</b> </h5>
                              <h5 class="fz-16 fw-500 text-muted">On Contract</h5> -->
                            </td>
                            <td>
                              <b-dropdown size="lg" right  variant="link" toggle-class="text-decoration-none" no-caret>
                                <template #button-content>
                                  <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                                  </svg>
                                </template>
                                <b-dropdown-item href="javascript:void(0);">
                                  <div class="d-flex align-items-center" @click="resendInvitation(list.members_permission_id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mr-2" viewBox="0 0 16 16">
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>
                                    Resend Invitation
                                  </div>
                                </b-dropdown-item>
                                <b-dropdown-item href="javascript:void(0);">
                                  <div class="d-flex align-items-center" @click="removeinvitationId = list.members_permission_id " v-b-modal.remove-invitation-modal>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock mr-2" viewBox="0 0 16 16" >
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                  </svg>
                                    Withdraw Invitation
                                  </div>
                                </b-dropdown-item>
                              </b-dropdown>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-else >
                          <tr>
                            <p>No Users Invited Found</p>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </section>
        </b-col>
      </b-row> 
    </b-card>

    <!-- model for Invite users -->
    <b-modal  centered no-close-on-backdrop id="edit-user" size="lg" title="Edit users" >
      <div class="text-left invite-member">
        <b-form>
          <b-row>
            <b-col xl="12" lg="12" md="12" class="border-bottom">
              <h4 class="mb-4">Admin</h4>
              <b-form-group>
                <b-form-radio v-model="invitationArr.admin" name="admin-radios" value="1" class="mb-1">
                  <h5 class="fz-16 fw-600">None</h5>
                </b-form-radio>
                <b-form-radio v-model="invitationArr.admin" name="admin-radios" value="2" class="mb-1">
                  <h5 class="fz-16 fw-600">Finanace Only</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-4 ml-6">Can access payments tab, manging payment methods, viewing financial reports and making deposits and withdrawals. Finance privileges are company-wide, even when Teams are in use.</h6>
                <b-form-radio v-model="invitationArr.admin" name="admin-radios" value="3" class="mb-0">
                  <h5 class="fz-16 fw-600">Full</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">In addition to finance privileges, can invite or remove team members, manage members permissions and edit organization information.</h6>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom" v-if="$store.state.accountType=='agency'">
              <h4 class="mb-2">Business</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Business managers can submit proposals on behalf of agency freelancers and view company timelogs and other reports.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.business" name="business-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600">No</h5>
                </b-form-radio>
                <b-form-radio v-model="invitationArr.business" name="business-radios" value="2" class="mb-2">
                  <h5 class="fz-16 fw-600">Managers</h5>
                </b-form-radio>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom" v-if="$store.state.accountType=='agency'">
              <h4 class="mb-2">Agency Contractor</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Agency Freelancers can apply jobs, work and earn money on behalf of this agency. Note: Any feedback accured by this freelancer will apply to tha agency as well.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.agency_contract" name="agency-radios" value="1" class="mb-1">
                  <h5 class="fz-16 fw-600">Exclusive</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-4 ml-6">For permanent freelancers angaged on an occasional basis. They will work exclusive for your agency and you will determine their profile rate and visibility.</h6>
                <b-form-radio v-model="invitationArr.agency_contract" name="agency-radios" value="2" class="mb-0">
                  <h5 class="fz-16 fw-600">Non Exclusive</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">For freelancers angaged on an occasional basis. They will retain the ability to work independently or with other agencies.</h6>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom" v-if="$store.state.accountType=='client'">
              <h4 class="mb-2">Hiring</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Agency Freelancers can apply jobs, work and earn money on behalf of this agency. Note: Any feedback accured by this freelancer will apply to tha agency as well.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.hiring" name="hiring-radios" value="1" class="mb-1">
                  <h5 class="fz-16 fw-600">None</h5>
                </b-form-radio>
                
                <b-form-radio v-model="invitationArr.hiring" name="hiring-radios" value="2" class="mb-0">
                  <h5 class="fz-16 fw-600">Source Talent Only</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">Can post jobs, invite freelancers to interview, and review proposals. Cannot hire, end contracts, give bonuses, or update contract terms.</h6>

                <b-form-radio v-model="invitationArr.hiring" name="hiring-radios" value="3" class="mb-0">
                  <h5 class="fz-16 fw-600">Manager</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">In addition to talent sourcing privileges hiring managers can make contract offers, give bonuses, increase rates, end contracts, submit freelancers feedback, and invite team members.</h6>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom">
              <h4 class="mb-2">View Work Diaries</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Those with team access can log time (with an active contract) and view Work Diaries and hours-only reports for all team members.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.view_work" name="work-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600">Individual</h5>
                </b-form-radio>
                <b-form-radio v-model="invitationArr.view_work" name="work-radios" value="2" class="mb-2">
                  <h5 class="fz-16 fw-600">Team</h5>
                </b-form-radio>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom">
              <h4 class="mb-2">Can Chat With</h4>
              <b-form-group>
                <b-form-radio v-model="invitationArr.chat_with" name="chat-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600">No One</h5>
                </b-form-radio>
                <b-form-radio v-model="invitationArr.chat_with" name="chat-radios" value="2" class="mb-1">
                  <h5 class="fz-16 fw-600">Team</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-4 ml-6">Can see and chat with anyone on the team.</h6>
                <b-form-radio v-model="invitationArr.chat_with" name="chat-radios" value="3" class="mb-0">
                  <h5 class="fz-16 fw-600">Company</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">Can see and chat with everyone in the company, across all teams.</h6>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </div>
      <template #modal-footer>
        <div class="w-100 text-right">
          <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('edit-user')">Cancel</a>
          <b-button
            size="lg"
            class="btn btn-theme"
            @click="updateActivemembers"
          >save
          </b-button>
        </div>
      </template>
    </b-modal>

    <!-- model for Invite users -->
    <b-modal  centered no-close-on-backdrop id="invite-user" size="lg" title="Invite users" >
      <div class="text-left invite-member">
        <b-form>
          <b-row>
            <!-- <b-col xl="6" lg="6" md="12">
              <b-form-group>
                <label class="fz-16 fw-600">Invite to Team</label><br>
                <b-form-select
                  v-model="invitationArr.invited_team_id"
                  :options="inviteoptions"
                  text-field="value"
                  value-field="id"
                  @input="$v.invitationArr.invited_team_id.$touch()"
                  @blur="$v.invitationArr.invited_team_id.$touch()"
                  ></b-form-select>
                  <p class="text-danger" v-if="inviteteamErr[0]">{{inviteteamErr[0]}}</p>
              </b-form-group>
            </b-col> -->
            <b-col xl="12" lg="12" md="12">
              <b-form-group>
                <label class="fz-16 fw-600">Enter Email Addresses or Usernames</label><br>
                <b-form-textarea
                  id="textarea"
                  v-model="invitationArr.email"
                  @input="$v.invitationArr.email.$touch()"
                  @blur="$v.invitationArr.email.$touch()"
                  @keyup="customEmail"
                  placeholder=""
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
                <p class="text-danger" v-if="inviteemailErr[0]">{{inviteemailErr[0]}}</p>
                <p class="text-danger" id="emailError"></p>
              </b-form-group>
              <span class="fz-12 text-muted">Separate email addresses and usernames with a comma.</span>
            </b-col>
            <b-col xl="12" lg="12" md="12" class="border-bottom">
              <b-form-group>
                <label class="fz-16 fw-600">Message to User (optional)</label><br>
                <b-form-textarea
                  id="textarea"
                  v-model="invitationArr.message"
                  @input="$v.invitationArr.message.$touch()"
                  @blur="$v.invitationArr.message.$touch()"
                  placeholder="Your message"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
                <p class="text-danger" v-if="invitemessageErr[0]">{{invitemessageErr[0]}}</p>
              </b-form-group>
              <span class="fz-12 text-muted">This message will be sent in the invitation.</span>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom">
              <h4 class="mb-4">Admin</h4>
              <b-form-group>
                <b-form-radio v-model="invitationArr.admin" name="admin-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">None</h5>
                </b-form-radio>
                <b-form-radio v-model="invitationArr.admin" name="admin-radios" value="2" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Finanace Only</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-2 ml-6">Can access payments tab, manging payment methods, viewing financial reports and making deposits and withdrawals. Finance privileges are company-wide, even when Teams are in use.</h6>
                <b-form-radio v-model="invitationArr.admin" name="admin-radios" value="3" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Full</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">In addition to finance privileges, can invite or remove team members, manage members permissions and edit organization information.</h6>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom" v-if="$store.state.accountType=='agency'">
              <h4 class="mb-2">Business</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Business managers can submit proposals on behalf of agency freelancers and view company timelogs and other reports.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.business" name="business-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600">No</h5>
                </b-form-radio>
                <b-form-radio v-model="invitationArr.business" name="business-radios" value="2" class="mb-2">
                  <h5 class="fz-16 fw-600">Managers</h5>
                </b-form-radio>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom" v-if="$store.state.accountType=='agency'">
              <h4 class="mb-2">Agency Contractor</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Agency Freelancers can apply jobs, work and earn money on behalf of this agency. Note: Any feedback accured by this freelancer will apply to tha agency as well.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.agency_contract" :disabled="exclusive_msg" name="agency-radios" value="1" class="mb-1">
                  <h5 class="fz-16 fw-600">Exclusive</h5>
                </b-form-radio>
                <p class="mb-2 ml-4 text-muted" v-if="exclusive_msg"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> The member has affiliation with another agency or active contracts/ proposals and can't be exclusive.</p>

                <h6 class="fz-16 fw-500 text-muted mb-4 ml-6">For permanent freelancers angaged on an occasional basis. They will work exclusive for your agency and you will determine their profile rate and visibility.</h6>
                <b-form-radio v-model="invitationArr.agency_contract" name="agency-radios" value="2" class="mb-0">
                  <h5 class="fz-16 fw-600">Non Exclusive</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">For freelancers angaged on an occasional basis. They will retain the ability to work independently or with other agencies.</h6>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom" v-if="$store.state.accountType=='client'">
              <h4 class="mb-2">Hiring</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Agency Freelancers can apply jobs, work and earn money on behalf of this agency. Note: Any feedback accured by this freelancer will apply to tha agency as well.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.hiring" name="hiring-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">None</h5>
                </b-form-radio>
                
                <b-form-radio v-model="invitationArr.hiring" name="hiring-radios" value="2" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Source Talent Only</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-2 ml-6">Can post jobs, invite freelancers to interview, and review proposals. Cannot hire, end contracts, give bonuses, or update contract terms.</h6>

                <b-form-radio v-model="invitationArr.hiring" name="hiring-radios" value="3" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Manager</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">In addition to talent sourcing privileges hiring managers can make contract offers, give bonuses, increase rates, end contracts, submit freelancers feedback, and invite team members.</h6>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom">
              <h4 class="mb-2">View Work Diaries</h4>
              <h6 class="fz-16 fw-600 text-muted mb-4">Those with team access can log time (with an active contract) and view Work Diaries and hours-only reports for all team members.</h6>
              <b-form-group>
                <b-form-radio v-model="invitationArr.view_work" name="work-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Individual</h5>
                </b-form-radio>
                <b-form-radio v-model="invitationArr.view_work" name="work-radios" value="2" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Team</h5>
                </b-form-radio>
              </b-form-group>
            </b-col>

            <b-col xl="12" lg="12" md="12" class="border-bottom">
              <h4 class="mb-2">Can Chat With</h4>
              <b-form-group>
                <b-form-radio v-model="invitationArr.chat_with" name="chat-radios" value="1" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">No One</h5>
                </b-form-radio>
                <!-- <b-form-radio v-model="invitationArr.chat_with" name="chat-radios" value="2" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Team</h5>
                </b-form-radio> -->
                <h6 class="fz-16 fw-500 text-muted mb-2 ml-6">Can see and chat with anyone on the team.</h6>
                <b-form-radio v-model="invitationArr.chat_with" name="chat-radios" value="3" class="mb-2">
                  <h5 class="fz-16 fw-600 mb-0">Company</h5>
                </b-form-radio>
                <h6 class="fz-16 fw-500 text-muted mb-0 ml-6">Can see and chat with everyone in the company, across all teams.</h6>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </div>
      <template #modal-footer>
        <div class="w-100 text-right">
          <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('invite-user')">Cancel</a>
          <b-button
            size="lg"
            class="btn btn-theme"
            @click="sendInvitation"
          >Invite
          </b-button>
        </div>
      </template>
    </b-modal>

    <!-- model for confirm reject -->
    <b-modal id="remove-invitation-modal" title="Remove Invitation" centered hide-footer size="md" no-close-on-backdrop> 
      <template>
        <div class="p-5 text-center m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            <h5 class="mt-4">Are you sure, Want to Remove this Invitation?</h5>
        </div>
        <hr>
        <div>
            <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('remove-invitation-modal')">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="removeInvitationMethod(removeinvitationId)">Confirm</b-button>
            </div>
        </div>
      </template>
    </b-modal>

    <!-- model for Remove Members -->
    <b-modal id="remove-members-modal" title="Remove Members" centered hide-footer size="md" no-close-on-backdrop> 
      <template>
        <div class="p-5 text-center m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            <h5 class="mt-4">Are you sure, Want to Remove this Member?</h5>
        </div>
        <hr>
        <div>
            <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('remove-members-modal')">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="removeInvitationMethod(removeinvitationId)">Confirm</b-button>
            </div>
        </div>
      </template>
    </b-modal>

    <!-- change excusivesetting -->
    <b-modal id="edit-agency-role" title="Edit agency role" centered hide-footer size="lg" no-close-on-backdrop> 
      <template>
        <div class="p-2 m-auto">
            <h5 class="fz-20 fw-600">Agency Contractor</h5>
            <p class="mb-3 fz-16">Agency freelancers can apply for jobs, work and earn money on behalf of this agency. <b>Note:</b> Anyfeedaback occcured by this freelancer will apply to the agency as well.</p>
            <b-form-group>
              <b-form-radio v-model="is_exclsive" name="some-radios" value="1" :disabled="exclusive_msg">Exclusive</b-form-radio>
              <p class="ml-4 text-muted fz-16">For permanent freelancers engaged full time with your agency. They will work exclusively for your agency and you will determine their profile rate and visibility</p>
              <p class="mb-2 ml-4 text-muted" v-if="exclusive_msg"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> The member has affiliation with another agency or active contracts/ proposals and can't be exclusive.</p>
              <b-form-radio v-model="is_exclsive" name="some-radios" value="2">Non-Exclusive</b-form-radio>
              <p class="ml-4 text-muted fz-16">For permanent freelancers engaged on an occassional basis. They will retain the ability to work independently or with other agencies.</p>
            </b-form-group>
        </div>
        <hr>
        <div>
            <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2"  @click="closeAgencyRoleModel($store.state.currentUserData.exclusive_id)">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="changeAgencyRole">Save</b-button>
            </div>
        </div>
      </template>
    </b-modal>
    </div>
</template>
    
<script>      
    import { mapActions,mapGetters } from "vuex";
    import { validationMixin } from 'vuelidate'
    import { required,} from 'vuelidate/lib/validators'
    import $ from 'jquery';
    // const checkemail = helpers.regex('multipleEmail', /^([A-Z0-9.%+-]+@@[A-Z0-9.-]+.[A-Z]{2,6})*([,;][\s]*([A-Z0-9.%+-]+@@[A-Z0-9.-]+.[A-Z]{2,6}))*$/i);
    export default {
      mixins: [validationMixin],
      validations: { 
        invitationArr:{
            invited_team_id:{ required},
            email:{ required},
            message:{ required},
            admin:{ required},
            hiring:{ required},
            view_work:{ required},
            chat_with:{ required}
          }
      },
      computed: {
        inviteteamErr(){
          const errors = []
          if (!this.$v.invitationArr.invited_team_id.$dirty) return errors
            !this.$v.invitationArr.invited_team_id.required && errors.push('Team is required')
          return errors
        },
        inviteemailErr(){
          const errors = []
          if (!this.$v.invitationArr.email.$dirty) return errors
            !this.$v.invitationArr.email.required && errors.push('Email is required')
          return errors
        },
        invitemessageErr(){
          const errors = []
          if (!this.$v.invitationArr.message.$dirty) return errors
            !this.$v.invitationArr.message.required && errors.push('Message is required')
          return errors
        },
        ...mapGetters({
          userInfo: "settings/getUserDetails",
        }),
      },
      data() {
        return { 
          is_exclsive : 2,
          exclusive_msg : false,
          applyFilter:false,
          currenttab:0,
          companyDetails:'',
          removeinvitationId:'',
          inviteoptions:[
            {id:this.$store.state.currentUserData.login_master_id,value: this.$store.state.currentUserData.first_name}
          ],
          userdetailApidata : this.getCurrentUserIdRequest(),
          sortoptions: [
            { id: 'ASC', value: '(A-Z)' },
            { id: 'DESC', value: '(Z-A)' },
          ],
          adminoptions: [
            { id: '1', value: 'None' },
            { id: '2', value: 'Finance' },
            { id: '3', value: 'Full' }
          ],
          businessoptions: [
            { id: '1', value: 'No' },
            { id: '2', value: 'manager' }
          ],
          agencyoptions: [
            { id: '1', value: 'Exclusive' },
            { id: '2', value: 'Non Exclusive' }
          ],
          hiringoptions: [
            { id: '1', value: 'None' },
            { id: '2', value: 'Source Talent Only' },
            { id: '3', value: 'Manager' },
          ],
          diariesoptions: [
            { id: '1', value: 'Individual' },
            { id: '2', value: 'Team' }
          ],
          chatoptions: [
            { id: '1', value: 'No One' },
            { id: '2', value: 'Team' },
            { id: '3', value: 'Company' }
          ],
          invitationArr:{
            invited_team_id: this.$store.state.currentUserData.login_master_id,
            email:'',
            message:'',
            admin:1,
            hiring:1,
            business:1,
            agency_contract:2,
            view_work:1,
            chat_with:1,
            invited_acc_type:'',
          },
          emailError:0,
          invitedUser:[],
          activeUser:[],
          filter:{
            data:this.userdetailApidata,
            name:'',
            team:'',
            order_by:'',
            admin:[],
            hiring:[],
            business:[],
            agency_contract:[],
            view_work:[],
            chat_with:[],
            status:1,
          },
        }
      },
      methods: { 
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to edit agency role
        async changeAgencyRole(){
          var res = await this.genericAPIPOSTRequest({
            requestUrl: "updateAgencyRole",
            params: {
              user_id : this.$store.state.currentUserData.freelancer_id,
              status  : this.is_exclsive,
            },
          });
          if (res) {
            this.$bvModal.hide('edit-agency-role');
          }
        },
        // this fun is for to open exclusive non exclusive model
        openExclusiveModel(_i){
          this.is_exclsive = (_i>0)?1:2;
        },
        // this fun is for to close agency role model
        closeAgencyRoleModel(_i){
          this.is_exclsive = (_i>0)?1:2;
          this.$bvModal.hide('edit-agency-role');
        },
        // this fun is for to apply filter  
        async applyFilters(){
          var res = await this.genericAPIPOSTRequest({
            requestUrl: "getsendUserInvitation",
            params: this.filter,
          });
          if (res) {
            this.activeUser = res; 
          }
        },
        // this fun is for to remove selected filter value
        removefromCategoryarr(type,index){
          if (type =='admin') {
            this.filter.admin.splice(index,1);
          } else if (type =='hiring') {
            this.filter.hiring.splice(index,1);
          } else if (type =='business') {
            this.filter.business.splice(index,1);
          } else if (type =='agency_contract') {
            this.filter.agency_contract.splice(index,1);
          } else if (type =='view_work') {
            this.filter.view_work.splice(index,1);
          } else if (type =='chat_with') {
            this.filter.chat_with.splice(index,1);
          }
          // this.filter.type.splice(index,1);
        },
        // this fun is for to clear filter
        clearFilter(){
          this.filter={
            team:'',
            order_by:'',
            admin:[],
            hiring:[],
            business:[],
            agency_contract:[],
            view_work:[],
            chat_with:[],
          }
        },
        // this fun is for to edit active member
        editActivemembers(_v){
          this.invitationArr={
            members_permission_id:_v.members_permission_id,
            invited_team_id:_v.invited_team_id,
            admin:_v.admin,
            hiring:_v.hiring,
            business:_v.business,
            agency_contract:_v.agency_contract,
            view_work:_v.view_work,
            chat_with:_v.chat_with,
          }
        },
        // this fun is for to update active members
        async updateActivemembers(){
          
          this.invitationArr.data = this.userdetailApidata;
          var res = await this.genericAPIPOSTRequest({
            requestUrl:'updatesendUserInvitation',
            params:this.invitationArr
          });
          if (res) {
            this.getactiveMembers();
            this.$toastr.s('member Updated Successfully');
            this.$bvModal.hide('edit-user');

          }
        },
        // this fun is for to resend invitation
        async resendInvitation(_i){
          var res = await this.genericAPIPOSTRequest({
            requestUrl:'resentInvitation',
            params:{
              members_permission_id:_i,
              data:this.userdetailApidata,
            }
          });
          if (res) {
            this.$toastr.s('Invtation Resend successfull');
          }else{
            this.$toastr.e('Invitation Not send');
          }
        },
        
        // this fun is for to withdraw invitation
        async removeInvitationMethod(_i){
          var res = await this.genericAPIPOSTRequest({
            requestUrl:'updatesendUserInvitation',
            params:{
              members_permission_id:_i,
              status:1,
              data:this.userdetailApidata,
            }
          });
          if(res){
            this.getactiveMembers();
            this.getInvitationsent();
            this.$bvModal.hide('remove-invitation-modal');
            this.$bvModal.hide('remove-members-modal');
            this.$toastr.s('Removed successfully');
          }
        },
        // this fun is for to check mulyiple email with comma seprated 
         customEmail() {
          if(!(/^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/.test(this.invitationArr.email))){
            $('#emailError').html('Invalid Input');
            this.emailError =1;
          }else{
            if(this.invitationArr.email!=''){
              $('#emailError').html('');
              this.emailError =0;
            }
          }
        },
        // this fun is for to get active members
        async getactiveMembers(){
          var res = await this.genericAPIPOSTRequest({
            requestUrl: "getsendUserInvitation",
            params: {
              status:1,
              data:this.userdetailApidata,
            },
          });
          if (res) {
            this.activeUser = res; 
          }
        },
        async getInvitationsent(){
          var res = await this.genericAPIPOSTRequest({
            requestUrl: "getsendUserInvitation",
            params: {
              status:0,
              data:this.userdetailApidata,
            },
          });
          if (res) {
            this.invitedUser = res;    
          }
        },
        // this fun is for to send invitation 
        async sendInvitation(){
          this.$v.invitationArr.$touch()
          if (!this.$v.invitationArr.$invalid && this.emailError == 0) {
            console.log('data',this.invitationArr);
            if (this.$store.state.accountType == 'agency') {
              this.invitationArr.invited_acc_type='1'
              this.invitationArr.hiring = 0;
            }else{
              this.invitationArr.invited_acc_type='2'
              this.invitationArr.business = 0;
              this.invitationArr.agency_contract = 0;
            }
            this.invitationArr.data = this.userdetailApidata;
            var res = await  this.genericAPIPOSTRequest({
                requestUrl: "sendUserInvitation",
                params: this.invitationArr
            });
            if(res!=''){
              this.invitationArr={
                invited_team_id:this.$store.state.currentUserData.login_master_id,
                email:'',
                message:'',
                admin:1,
                hiring:1,
                business:1,
                agency_contract:2,
                view_work:1,
                chat_with:1,
                invited_acc_type:'',
              };
              this.currenttab =1;
              this.$v.$reset();
              this.$toastr.s('Invitation send successfully');
            }else{
              this.$toastr.e('Invitation Not successfully');
            }
            this.getInvitationsent();
            this.$bvModal.hide('invite-user');
          }
        },
        // this fun is for to get company details
        getCompanyDetails(){
          this.getactiveMembers();
        },
      },
      mounted(){
        this.getactiveMembers();
      }
    };
  </script> 
  <style>
    .custom-radio .custom-control-input:checked~.custom-control-label::before {top: 0.1rem!important;}
    .members-container .nav-pills .nav-link.active, .members-container .nav-pills .show > .nav-link {
      border-bottom: 3px solid #f2613b!important;border-left: 0px!important;
    }
    .members-container .nav-pills{margin-left: -47px!important;margin-bottom:0px!important;}
    .members-container .card-header{padding:0rem 1rem!important;}
    .members-container .btn-info{padding: 10px 12px!important;border: 1px solid #ced4da;border-radius: 4px 0 0 4px!important;}
    .width-90{width:90%!important;}
    .width-10{width:10%!important;}
    .data-container .img-container{width: 60px;height: 60px;border-radius: 50%;padding: 5px;}
    .data-container .img-container img{object-fit: scale-down;height: 100%;border-radius: 50%;}
    .data-container td{vertical-align: middle;}
    .data-container .custom-control-label:after, .custom-control-label:before{top: 0.1rem!important;}
    .search-container .filter-btn{position: absolute;right: 12px;top: 12px;border-radius: 0 4px 4px 0!important;z-index:3!important;}
    .search-container .br-4{border-radius:4px;}
    .search-container .custom-control{align-items:center!important;}
    .search-container .custom-control-label:after, .search-container .custom-control-label:before{top:0.1rem!important;}
    .search-container .custom-control-label{color:#666;}
    .search-container .input-group-prepend input{padding-right:105px!important;}
    @media only screen and (min-width: 320px) and (max-width: 815px) {
      .search-container .collapse .mr-2{margin-right:0px!important;}
      .search-container .collapse .btn, .search-container .collapse a{width: 100%;margin-bottom: 5px;text-align: center!important;display: block;}
      .search-container .filter-text{display:none!important;}
      .search-container .filter-btn svg{margin-right:0px!important;}
      .search-container .input-group-prepend input{padding-right:48px!important;}
    }
  </style>