  <template>
    <b-container>
      <b-row class="mt-100 freelancer-wrap my-proposals">
        <b-col xl="12" lg="12" sm="12">
          <div class="d-md-flex align-items-center">
            <div>
              <h4 class="mb-3 fz-24 fw-500 text-black"><b>Freelance Inspector- China- Mooring Chain, Valves</b></h4>
              <p class="mb-0">Active since Feb 19,2022</p>
            </div>
            <div class="ml-auto">
              <div class="client-wrap d-flex align-items-center">
                <div class="w-15 h-15 pos-relative">
                  <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid w-100 h-100 br-20">
                  <i class="fa fa-circle text-success pos-absolute"></i>
                </div>
                <div class="ml-2">
                  <b-card-text class="text-black fz-18 fw-600 mb-0">Tanmay Sasvadkar</b-card-text>
                  <b-card-text class="text-muted fz-16 mb-0">E&I Inspector</b-card-text>
                  <b-card-text class="text-muted fz-16 mb-0">Freelancer</b-card-text>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="d-md-flex align-items-center">
            <div class="ml-auto">
              <b-button class="btn btn-theme mr-2">Review & Pay</b-button>
              <b-button class="btn btn-outline-theme">Cancel Contract</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-tabs class="tabs-wrap pos-rel">
            <b-tab title="Milestones & Earnings" active @click="isHiddenSearch(false)">
              <b-card-group deck>
                <b-card title-class="text-theme font-14" class="bg-white">
                  <ul class="w-100 stats-ul px-4 py-4 border-bottom">
                    <li>
                      <p>Budget</p>
                      <h4>$600.00</h4>
                    </li>
                    <li>
                      <p>in escrow</p>
                      <h4>$300.00</h4>
                    </li>
                    <li>
                      <p>Milestones Paid</p>
                      <h4>$0.00</h4>
                    </li>
                    <li>
                      <p>Remaining</p>
                      <h4>$600.00</h4>
                    </li>
                    <li>
                      <p>Total Earning</p>
                      <h4>$0.00</h4>
                    </li>
                  </ul>
                  <div class="remaining-milestone-wrap px-4 py-4 border-bottom">  
                    <div class="d-flex align-items-center mb-4">
                      <h4 class="fz-24 fw-600 text-black mb-0">Remaining Milestones</h4>
                      <div class="ml-auto">
                        <button class="btn btn-outline-theme" v-b-toggle.sidebar-footer>Add or Edit Milestone</button>
                        <!--<b-modal id="edit-milestone" size="md" title="Edit Milestone">
                          <form action="" class="text-left">
                            <b-row>
                              <b-col lg="12" sm="12">
                                <div class="form-group">
                                  <label>Name of Milestone</label>
                                  <b-form-input v-model="text" placeholder="Test Server Milestone"></b-form-input>
                                </div>
                              </b-col>
                              <b-col lg="6" sm="12">
                                <div class="form-group">
                                  <label>Due Date UTC</label>
                                  <b-form-group
                                    id="fieldset-1"
                                    label-for="input-1"
                                    valid-feedback="Thank you!"
                                    :invalid-feedback="invalidFeedback"
                                    :state="state"
                                    class="fz-14 fw-600"
                                    placeholder="DD - MM - YYYY"
                                  >
                                    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                                  </b-form-group>
                                </div>
                              </b-col>
                              <b-col lg="6" sm="12">
                                <div class="form-group">
                                  <label>Deposit Amount</label>
                                  <b-input-group size="sm" prepend="$">
                                    <b-form-input></b-form-input>
                                  </b-input-group>
                                </div>
                              </b-col>
                              <b-col lg="12" sm="12">
                                <div class="form-group">
                                  <label>Description (Optional)</label>
                                  <b-form-textarea
                                    id="textarea"
                                    v-model="text"
                                    placeholder="Let the client know why you’re adding or editing milestones"
                                    rows="3"
                                    max-rows="6"
                                  ></b-form-textarea>
                                </div>
                              </b-col>
                            </b-row>
                          </form>
                          <template #modal-footer>
                            <div class="w-100 text-right">
                              <a href="javascript:void(0);" class="text-theme mr-2">Cancel</a>
                              <b-button
                                size="lg"
                                class="btn btn-theme"
                                @click="show=false"
                              >
                                Send Request
                              </b-button>
                            </div>
                          </template>
                        </b-modal>-->
                        <b-sidebar id="sidebar-footer" title="" backdrop right shadow>
                          <template #footer="{ hide }">
                            <div class="d-flex align-items-center px-3 py-2 float-right">
                              <a href="javascript:void(0);" class="text-theme mr-2" @click="hide">Cancel</a>
                              <b-button
                                size="lg"
                                class="btn btn-theme"
                                @click="show=false"
                              >
                                Send Request
                              </b-button>
                            </div>
                          </template>
                          <div class="px-3 py-2">
                            <h4 class="fz-24 fw-500 text-black"><b>Milestone change request</b></h4>
                            <div class="list-group-item bg-transparent d-md-flex align-items-center p-0 border-bottom pb-4 mb-4">
                              <div>
                                <div class="d-md-flex align-items-center">
                                  <span class="fz-20 fw-600 text-theme">
                                    3. <span class="ml-3">Test Server Milestone</span>
                                  </span>
                                </div>
                                <ul class="d-md-flex align-items-center mb-0">
                                  <li>$300.00 ( Funded )</li>
                                  <li class="mr-2 ml-2">•</li>
                                  <li>Due Mar 03</li>
                                </ul>
                              </div>
                              <div class="ml-auto">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="background: #F2613C;" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0762 16.6836C12.7312 16.6836 12.4512 16.4036 12.4512 16.0586C12.4512 15.7136 12.7312 15.4336 13.0762 15.4336H13.0768C13.0768 15.0886 13.3562 14.8086 13.7015 14.8086C14.0468 14.8086 14.3262 15.0886 14.3262 15.4336C14.3262 16.123 13.7655 16.6836 13.0762 16.6836Z" fill="#F2613C"/>
                                <path d="M13.7012 16.0594C13.3562 16.0594 13.0762 15.7794 13.0762 15.4344V9.30469C13.0762 8.95969 13.3562 8.67969 13.7012 8.67969C14.0462 8.67969 14.3262 8.95969 14.3262 9.30469V15.4344C14.3262 15.7794 14.0462 16.0594 13.7012 16.0594Z" fill="#F2613C"/>
                                <path d="M13.0762 16.6836H1.82617C1.48117 16.6836 1.20117 16.4036 1.20117 16.0586C1.20117 15.7136 1.48117 15.4336 1.82617 15.4336H13.0762C13.4212 15.4336 13.7012 15.7136 13.7012 16.0586C13.7012 16.4036 13.4212 16.6836 13.0762 16.6836Z" fill="#F2613C"/>
                                <path d="M1.82617 16.6836C1.1368 16.6836 0.576172 16.123 0.576172 15.4336C0.576172 15.0886 0.856172 14.8086 1.20117 14.8086C1.54617 14.8086 1.82617 15.0886 1.82617 15.4336V15.4345C2.17117 15.4345 2.45117 15.7139 2.45117 16.0589C2.45117 16.4039 2.17117 16.6836 1.82617 16.6836Z" fill="#F2613C"/>
                                <path d="M1.20117 16.0586C0.856172 16.0586 0.576172 15.7786 0.576172 15.4336V4.18359C0.576172 3.83859 0.856172 3.55859 1.20117 3.55859C1.54617 3.55859 1.82617 3.83859 1.82617 4.18359V15.4336C1.82617 15.7786 1.54617 16.0586 1.20117 16.0586Z" fill="#F2613C"/>
                                <path d="M1.20086 4.80859C0.855547 4.80859 0.576172 4.52859 0.576172 4.18359C0.576172 3.49422 1.1368 2.93359 1.82617 2.93359C2.17117 2.93359 2.45117 3.21359 2.45117 3.55859C2.45117 3.90359 2.17117 4.18359 1.82617 4.18359H1.82555C1.82555 4.52859 1.54617 4.80859 1.20086 4.80859Z" fill="#F2613C"/>
                                <path d="M7.95586 4.18359H1.82617C1.48117 4.18359 1.20117 3.90359 1.20117 3.55859C1.20117 3.21359 1.48117 2.93359 1.82617 2.93359H7.95586C8.30086 2.93359 8.58086 3.21359 8.58086 3.55859C8.58086 3.90359 8.30117 4.18359 7.95586 4.18359Z" fill="#F2613C"/>
                                <path d="M7.42766 8.24461C7.26766 8.24461 7.10766 8.18367 6.98578 8.06148C6.74172 7.81742 6.74172 7.42179 6.98578 7.17773L13.0899 1.07367C13.3336 0.829609 13.7299 0.829609 13.9736 1.07367C14.2177 1.31773 14.2177 1.71336 13.9736 1.95742L7.86953 8.06148C7.74766 8.18367 7.58734 8.24461 7.42766 8.24461Z" fill="#F2613C"/>
                                <path d="M6.82679 11.0596C6.78336 11.0596 6.73929 11.0552 6.69523 11.0455C6.35773 10.9734 6.14273 10.6409 6.21523 10.3037L6.81867 7.49054C6.89086 7.15273 7.22398 6.93679 7.56085 7.01054C7.89835 7.08273 8.11335 7.41523 8.04085 7.75242L7.43742 10.5655C7.37429 10.859 7.11523 11.0596 6.82679 11.0596Z" fill="#F2613C"/>
                                <path d="M9.63859 10.4556C9.47859 10.4556 9.31859 10.3946 9.19672 10.2724C8.95266 10.0284 8.95266 9.63274 9.19672 9.38868L15.3008 3.28461C15.5445 3.04055 15.9408 3.04055 16.1845 3.28461C16.4286 3.52867 16.4286 3.9243 16.1845 4.16836L10.0805 10.2724C9.95859 10.3946 9.79859 10.4556 9.63859 10.4556Z" fill="#F2613C"/>
                                <path d="M6.82577 11.0586C6.53733 11.0586 6.27827 10.8579 6.21514 10.5648C6.14295 10.2273 6.35764 9.89482 6.69514 9.82263L9.50827 9.21888C9.84483 9.14731 10.178 9.36107 10.2505 9.69857C10.3226 10.0361 10.108 10.3686 9.77046 10.4408L6.95733 11.0445C6.91327 11.0539 6.8692 11.0586 6.82577 11.0586Z" fill="#F2613C"/>
                                <path d="M14.6373 5.4557C14.4773 5.4557 14.3173 5.39476 14.1955 5.27258L11.9858 3.06289C11.7417 2.81883 11.7417 2.4232 11.9858 2.17914C12.2295 1.93508 12.6258 1.93508 12.8695 2.17914L15.0792 4.38883C15.3233 4.63289 15.3233 5.02851 15.0792 5.27258C14.9573 5.39476 14.7973 5.4557 14.6373 5.4557Z" fill="#F2613C"/>
                                <path d="M15.7434 4.3507C15.5834 4.3507 15.4234 4.28977 15.3012 4.16758C15.0572 3.92352 15.0572 3.52758 15.3012 3.28352C15.4744 3.1107 15.5697 2.87508 15.5697 2.62102C15.5697 2.36695 15.4744 2.13133 15.3012 1.95852C14.9544 1.61133 14.3216 1.61164 13.9753 1.9582C13.7312 2.20227 13.3356 2.20227 13.0912 1.95852C12.8472 1.71445 12.8472 1.31852 13.0912 1.07445C13.5006 0.664766 14.05 0.439453 14.6381 0.439453C15.2262 0.439453 15.7759 0.665078 16.185 1.07445C16.5941 1.48352 16.8194 2.03258 16.8194 2.62102C16.8194 3.20945 16.5941 3.75883 16.1847 4.16789C16.0634 4.28977 15.9034 4.3507 15.7434 4.3507Z" fill="#F2613C"/>
                                </svg>
                              </div>
                            </div>
                            <div class="list-group-item bg-transparent d-md-flex align-items-center p-0 border-bottom pb-4 mb-4">
                              <div>
                                <div class="d-md-flex align-items-center">
                                  <span class="fz-20 fw-600 text-theme">
                                    3. <span class="ml-3">Finalisation</span>
                                  </span>
                                </div>
                                <ul class="d-md-flex align-items-center mb-0">
                                  <li>$300.00 ( Funded )</li>
                                  <li class="mr-2 ml-2">•</li>
                                  <li>Due Mar 03</li>
                                </ul>
                              </div>
                              <div class="ml-auto">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="background: #F2613C;" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0762 16.6836C12.7312 16.6836 12.4512 16.4036 12.4512 16.0586C12.4512 15.7136 12.7312 15.4336 13.0762 15.4336H13.0768C13.0768 15.0886 13.3562 14.8086 13.7015 14.8086C14.0468 14.8086 14.3262 15.0886 14.3262 15.4336C14.3262 16.123 13.7655 16.6836 13.0762 16.6836Z" fill="#F2613C"/>
                                <path d="M13.7012 16.0594C13.3562 16.0594 13.0762 15.7794 13.0762 15.4344V9.30469C13.0762 8.95969 13.3562 8.67969 13.7012 8.67969C14.0462 8.67969 14.3262 8.95969 14.3262 9.30469V15.4344C14.3262 15.7794 14.0462 16.0594 13.7012 16.0594Z" fill="#F2613C"/>
                                <path d="M13.0762 16.6836H1.82617C1.48117 16.6836 1.20117 16.4036 1.20117 16.0586C1.20117 15.7136 1.48117 15.4336 1.82617 15.4336H13.0762C13.4212 15.4336 13.7012 15.7136 13.7012 16.0586C13.7012 16.4036 13.4212 16.6836 13.0762 16.6836Z" fill="#F2613C"/>
                                <path d="M1.82617 16.6836C1.1368 16.6836 0.576172 16.123 0.576172 15.4336C0.576172 15.0886 0.856172 14.8086 1.20117 14.8086C1.54617 14.8086 1.82617 15.0886 1.82617 15.4336V15.4345C2.17117 15.4345 2.45117 15.7139 2.45117 16.0589C2.45117 16.4039 2.17117 16.6836 1.82617 16.6836Z" fill="#F2613C"/>
                                <path d="M1.20117 16.0586C0.856172 16.0586 0.576172 15.7786 0.576172 15.4336V4.18359C0.576172 3.83859 0.856172 3.55859 1.20117 3.55859C1.54617 3.55859 1.82617 3.83859 1.82617 4.18359V15.4336C1.82617 15.7786 1.54617 16.0586 1.20117 16.0586Z" fill="#F2613C"/>
                                <path d="M1.20086 4.80859C0.855547 4.80859 0.576172 4.52859 0.576172 4.18359C0.576172 3.49422 1.1368 2.93359 1.82617 2.93359C2.17117 2.93359 2.45117 3.21359 2.45117 3.55859C2.45117 3.90359 2.17117 4.18359 1.82617 4.18359H1.82555C1.82555 4.52859 1.54617 4.80859 1.20086 4.80859Z" fill="#F2613C"/>
                                <path d="M7.95586 4.18359H1.82617C1.48117 4.18359 1.20117 3.90359 1.20117 3.55859C1.20117 3.21359 1.48117 2.93359 1.82617 2.93359H7.95586C8.30086 2.93359 8.58086 3.21359 8.58086 3.55859C8.58086 3.90359 8.30117 4.18359 7.95586 4.18359Z" fill="#F2613C"/>
                                <path d="M7.42766 8.24461C7.26766 8.24461 7.10766 8.18367 6.98578 8.06148C6.74172 7.81742 6.74172 7.42179 6.98578 7.17773L13.0899 1.07367C13.3336 0.829609 13.7299 0.829609 13.9736 1.07367C14.2177 1.31773 14.2177 1.71336 13.9736 1.95742L7.86953 8.06148C7.74766 8.18367 7.58734 8.24461 7.42766 8.24461Z" fill="#F2613C"/>
                                <path d="M6.82679 11.0596C6.78336 11.0596 6.73929 11.0552 6.69523 11.0455C6.35773 10.9734 6.14273 10.6409 6.21523 10.3037L6.81867 7.49054C6.89086 7.15273 7.22398 6.93679 7.56085 7.01054C7.89835 7.08273 8.11335 7.41523 8.04085 7.75242L7.43742 10.5655C7.37429 10.859 7.11523 11.0596 6.82679 11.0596Z" fill="#F2613C"/>
                                <path d="M9.63859 10.4556C9.47859 10.4556 9.31859 10.3946 9.19672 10.2724C8.95266 10.0284 8.95266 9.63274 9.19672 9.38868L15.3008 3.28461C15.5445 3.04055 15.9408 3.04055 16.1845 3.28461C16.4286 3.52867 16.4286 3.9243 16.1845 4.16836L10.0805 10.2724C9.95859 10.3946 9.79859 10.4556 9.63859 10.4556Z" fill="#F2613C"/>
                                <path d="M6.82577 11.0586C6.53733 11.0586 6.27827 10.8579 6.21514 10.5648C6.14295 10.2273 6.35764 9.89482 6.69514 9.82263L9.50827 9.21888C9.84483 9.14731 10.178 9.36107 10.2505 9.69857C10.3226 10.0361 10.108 10.3686 9.77046 10.4408L6.95733 11.0445C6.91327 11.0539 6.8692 11.0586 6.82577 11.0586Z" fill="#F2613C"/>
                                <path d="M14.6373 5.4557C14.4773 5.4557 14.3173 5.39476 14.1955 5.27258L11.9858 3.06289C11.7417 2.81883 11.7417 2.4232 11.9858 2.17914C12.2295 1.93508 12.6258 1.93508 12.8695 2.17914L15.0792 4.38883C15.3233 4.63289 15.3233 5.02851 15.0792 5.27258C14.9573 5.39476 14.7973 5.4557 14.6373 5.4557Z" fill="#F2613C"/>
                                <path d="M15.7434 4.3507C15.5834 4.3507 15.4234 4.28977 15.3012 4.16758C15.0572 3.92352 15.0572 3.52758 15.3012 3.28352C15.4744 3.1107 15.5697 2.87508 15.5697 2.62102C15.5697 2.36695 15.4744 2.13133 15.3012 1.95852C14.9544 1.61133 14.3216 1.61164 13.9753 1.9582C13.7312 2.20227 13.3356 2.20227 13.0912 1.95852C12.8472 1.71445 12.8472 1.31852 13.0912 1.07445C13.5006 0.664766 14.05 0.439453 14.6381 0.439453C15.2262 0.439453 15.7759 0.665078 16.185 1.07445C16.5941 1.48352 16.8194 2.03258 16.8194 2.62102C16.8194 3.20945 16.5941 3.75883 16.1847 4.16789C16.0634 4.28977 15.9034 4.3507 15.7434 4.3507Z" fill="#F2613C"/>
                                </svg>
                              </div>
                            </div>
                            <b-button class="btn btn-outline-theme mb-4">+ Add Milestone</b-button>
                            <b-form-textarea
                              id="textarea"
                              v-model="text"
                              placeholder="Let the client know why you’re adding or editing milestones"
                              rows="6"
                              max-rows="6"
                            ></b-form-textarea>
                          </div>
                        </b-sidebar>
                      </div>
                    </div>
                    <b-list-group>
                      <b-list-group-item class="d-md-flex align-items-center p-0 border-bottom pb-4 mb-4">
                        <div>
                          <div class="d-md-flex align-items-center">
                            <span class="fz-20 fw-600 text-theme">3. <span class="ml-3">Test Server Milestone</span></span>
                            <label class="badge badge-active ml-2">Active</label>
                          </div>
                          <ul class="d-md-flex align-items-center mb-0">
                            <li>$300.00 ( Funded )</li>     
                            <li class="mr-2 ml-2">•</li>     
                            <li>Due Mar 03</li>
                          </ul>
                        </div>
                        <div class="ml-auto">
                          <button type="button" class="btn-theme" v-b-modal.submit-milestone-modal>Submit Work for Payment</button>
                          <b-modal id="submit-milestone-modal" size="lg" title="Submit work or request payment for a milestone">
                            <div class="text-left">
                              <b-row>
                                <b-col sm="12" lg="12" class="px-4">
                                  <p class="mb-0 fz-16 fw-400 text-black">Use this firm to request approval for the work you’ve completed. Your payment will be released upon approval.</p>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" class="px-4">
                                  <label class="fz-18 fw-600 text-black">Milestone</label>
                                  <p class="mb-0 fz-16 fw-400 text-muted">For discuss ( Due Feb 24 )</p>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" class="px-4">
                                  <label class="fz-18 fw-600 text-black">Description</label>
                                  <p class="mb-0 fz-16 fw-400 text-muted">Verification of the website check the files and suitable disk space need avoid damage of files etc</p>
                                </b-col>
                              <b-row>
                              </b-row>
                                <b-col sm="12" lg="4" class="px-4">
                                  <label class="fz-18 fw-600 text-black">Amount</label>
                                  <b-input-group size="lg" prepend="$">
                                    <b-form-input></b-form-input>
                                  </b-input-group>  
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" class="px-4">
                                  <label class="fz-18 fw-600 text-black">Message</label>
                                  <b-form-textarea
                                    id="textarea"
                                    v-model="text"
                                    placeholder="Enter something..."
                                    rows="5"
                                    max-rows="5"
                                  ></b-form-textarea>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" class="px-4">
                                  <label class="fz-16 fw-600 text-muted">Attaching work is recommended, but not required if you've already delivered work.</label><br>
                                  <b-button class="btn btn-outline-theme d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                                  </svg>
                                  Attach File
                                  </b-button>
                                </b-col>
                              </b-row>
                            </div>
                            <template #modal-footer>
                              <div class="w-100 text-right">
                                <a href="javascript:void(0);" class="text-theme mr-2">Cancel</a>
                                <b-button
                                  size="lg"
                                  class="btn btn-theme"
                                  @click="show=false"
                                >
                                  Submit
                                </b-button>
                              </div>
                            </template>
                          </b-modal>
                        </div>
                      </b-list-group-item>

                      <b-list-group-item class="d-md-flex align-items-center p-0">
                        <div>
                          <div class="d-md-flex align-items-center">
                            <span class="fz-20 fw-600 text-theme">4. <span class="ml-3">Finalisation</span></span>
                          </div>
                          <ul class="d-md-flex align-items-center mb-0">
                            <li>$300.00</li>     
                            <li class="mr-2 ml-2">•</li>     
                            <li>Due Mar 03</li>
                          </ul>
                        </div>
                      </b-list-group-item>
                    </b-list-group>
                  </div>
                  <div class="completed-milestone-wrap px-4 py-4">  
                    <div class="mb-4">
                      <h4 class="fz-24 fw-600 text-black mb-0">Completed Milestones</h4>
                    </div>
                    <b-list-group>
                      <b-list-group-item class="d-md-flex align-items-center p-0 border-bottom pb-4 mb-4">
                        <div>
                          <div>
                            <span class="fz-20 fw-600 text-theme" v-b-toggle.sidebar-right>1. <span class="ml-3">Advance payment</span></span>
                          </div>
                          <ul class="d-md-flex align-items-center mb-0">
                            <li>$300.00 ( Paid )</li>     
                            <li class="mr-2 ml-2">•</li>     
                            <li>Completed Apr  19</li>
                          </ul>
                        </div>
                      </b-list-group-item>

                      <b-list-group-item class="d-md-flex align-items-center p-0">
                        <div>
                          <div>
                            <span class="fz-20 fw-600 text-theme" v-b-toggle.sidebar-right>2. <span class="ml-3">Finalisation work scope </span></span>
                          </div>
                          <ul class="d-md-flex align-items-center mb-0">
                            <li>$300.00 ( Paid ) </li>     
                            <li class="mr-2 ml-2">•</li>     
                            <li>Completed Apr  19</li>
                          </ul>
                        </div>
                      </b-list-group-item>
                    </b-list-group>
                    <b-sidebar id="sidebar-right" title="" right shadow backdrop>
                      <div class="px-4 py-3">
                        <h4 class="fz-24 fw-500 text-black mb-4"><b>Check AWS current plan and update suitably</b></h4>
                        <b-card-group deck class="mb-3">
                          <b-card title-class="text-theme font-14" class="py-4 px-4 bg-white">
                            <b-row>
                              <b-col xl="3" lg="3" sm="12">
                                <span class="mb-0 fz-16 fw-500 text-black">Description</span>
                              </b-col>
                              <b-col xl="9" lg="9" sm="12">
                                <span class="mb-0 fz-16 fw-500 text-muted">Our website is running in EC2 but no load and no much visitors, still getting lot  of bills hence looking for .. <a href="javascript:void(0);" class="text-theme">more</a></span>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col xl="3" lg="3" sm="12">
                                <span class="mb-0 fz-16 fw-500 text-black">Due Date</span>
                              </b-col>
                              <b-col xl="9" lg="9" sm="12">
                                <span class="mb-0 fz-16 fw-500 text-muted">April 16,2022</span>
                              </b-col>
                            </b-row>
                          </b-card>
                        </b-card-group>
                        <b-card-group deck class="mb-3">
                          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                            <template  #header>
                              <div class="d-flex align-items-center">
                                <h4 class="mb-0 fz-20 fw-500 text-black"><b>Payment</b></h4>
                                <div class="ml-auto d-flex align-items-center justify-content-space-between w-50">
                                  <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                    <img src="http://qapin_mvp5.manageprojects.in/upload/freelancer/document.png" class="img-fluid">
                                    Invoice
                                  </a>
                                  <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                    <img src="http://qapin_mvp5.manageprojects.in/upload/freelancer/money-bag.png" class="img-fluid">
                                    Request A Refund
                                  </a>
                                </div>
                              </div>
                            </template>
                            <div class="py-4 px-4">
                              <b-row>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-black">Status</span>
                                </b-col>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-muted">Paid</span>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-black">Amount in Escrow</span>
                                </b-col>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-muted">$50.00 paid on Apr 5</span>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-black">Amount Requested</span>
                                </b-col>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-muted">$50.00</span>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-black">Amount released</span>
                                </b-col>
                                <b-col xl="6" lg="6" sm="12">
                                  <span class="mb-0 fz-16 fw-500 text-muted">$50.00 released to freelancer on Apr 5</span>
                                </b-col>
                              </b-row>
                            </div>
                          </b-card>
                        </b-card-group>
                        <b-card-group deck>
                          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                            <template  #header>
                              <h4 class="mb-0 fz-20 fw-500 text-black"><b>Work Submissions</b></h4>
                            </template>
                            <b-row>
                              <b-col cols="12" class="py-4 px-4">
                                <b-table striped hover :items="items" :fields="fields"></b-table>
                              </b-col>
                            </b-row>
                          </b-card>
                        </b-card-group>
                      </div>
                    </b-sidebar>
                  </div>
                </b-card>
              </b-card-group>
            </b-tab>

            <b-tab title="Messages & Files" @click="isHiddenSearch(true)" >
              <b-card-group deck>
                <b-card title-class="text-theme font-14" header-tag="header" header-class="py-4 px-4 bg-white" class="mb-3">
                  <b-row>
                    <b-col cols="12" class="pt-0">
                      <div class="details-wrapper px-4 py-4">
                        <div class="d-flex">
                          <div class="img-wrapper w-20 h-20 mr-3">
                            <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid w-100 h-100">
                          </div>
                          <div class="content">
                            <h4 class="fz-20 fw-600 text-black">Johnson Maxico <span class="fz-14 text-muted fw-400 ml-3">Approved the final milestone</span></h4>
                            <ul class="milestone-details">
                              <li><span>Milestone  01 </span>: Test Server Finalisation</li>
                              <li><span>Due </span>: Thursday, 03 March 2022</li>
                              <li><span>Amount Paid </span>: $300.00</li>
                              <li><span>Amount </span>: $300.00</li>
                            </ul>
                          </div>
                          <div class="ml-auto">
                            <button type="button" class="btn btn-outline-theme">View Detail</button>
                            <span class="text-muted fz-16 fw-400 d-block text-right">03 Mar 22</span>
                          </div>
                        </div>
                      </div>
                      <div class="details-wrapper px-4 py-4">
                        <div class="d-flex">
                          <div class="img-wrapper w-20 h-20 mr-3">
                            <img src="http://qapin_mvp5.manageprojects.in/upload/profile_image/profile_213.jpg" class="img-fluid w-100 h-100">
                          </div>
                          <div class="content">
                            <h4 class="fz-20 fw-600 text-black">Johnson Maxico <span class="fz-14 text-muted fw-400 ml-3">Approved the final milestone</span></h4>
                            <ul class="milestone-details">
                              <li><span>Milestone  01 </span>: Test Server Finalisation</li>
                              <li><span>Due </span>: Thursday, 03 March 2022</li>
                              <li><span>Amount Paid </span>: $300.00</li>
                              <li><span>Amount </span>: $300.00</li>
                            </ul>
                          </div>
                          <div class="ml-auto">
                            <button type="button" class="btn btn-outline-theme">View Detail</button>
                            <span class="text-muted fz-16 fw-400 d-block text-right">03 Mar 22</span>
                          </div>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <b-card-footer class="d-md-flex align-items-center"> 
                    <i class="fa fa-paperclip text-muted mr-2 mt-3" aria-hidden="true"></i>
                    <b-input-group class="mt-3">
                      <b-form-input></b-form-input>
                      <b-input-group-append>
                        <b-button class="btn btn-theme ml-3">Send</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-card-footer>
                </b-card>
              </b-card-group>
            </b-tab>

            <b-tab title="Terms & Settings" @click="isHiddenSearch(false)">
              <b-card-group deck>
                <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white" class="mb-3">
                  <b-row>
                    <b-col cols="12" lg="9" class="pt-0">
                      <b-row>
                        <b-col cols="12" class="pt-0">
                          <div class="px-4 py-4 border-bottom border-right">
                            <div class="d-md-flex align-items-center">
                              <h4 class="fz-20 fw-600 text-black">Contact Info</h4>
                              <div class="ml-auto">
                                <button type="button" class="btn btn-outline-theme">View History</button>
                              </div>
                            </div>
                            <ul class="time-details mt-4">
                              <li><span>Start Date </span>: 19 Feb 2022</li>
                            </ul>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="12" class="pt-0">
                          <div class="px-4 py-4 border-right">
                            <ul class="time-details">
                              <li class="mb-3"><span>Verified Name </span>: Alexender Mac</li>
                              <li class="mb-3"><span>Contract ID </span>: 1234567890</li>
                            </ul>
                          </div>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12" lg="3" class="p-0">
                      <b-row>
                        <b-col cols="12" class="p-0">
                          <div class="px-4 py-4 border-bottom">
                            <div class="description-wrapper">
                              <h4 class="fz-20 fw-600 text-black mb-3">Description of Work</h4>
                              <p class="fz-14 fw-400 text-muted">Hello, Dear Designer, <br>Greating of the day... <a href="javascript:void(0);" class="text-theme">more</a></p>
                            </div>
                          </div>
                          <div class="px-4 py-4 border-left">
                            <ul class="offer-wrapper">
                              <li>
                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
                                    <g clip-path="url(#clip0_4316_21319)">
                                    <path d="M30.0179 25.9513C29.6354 26.1471 29.1645 25.9974 28.9671 25.6129H28.967C27.7691 23.2785 24.5887 19.9318 20.4433 19.9318C16.7257 19.9318 13.4219 22.6854 11.9196 25.6129C11.722 25.996 11.2514 26.1472 10.868 25.9503C10.4846 25.7533 10.3329 25.2836 10.5293 24.9C12.2553 21.5296 16.0509 18.3693 20.4433 18.3693C25.4527 18.3693 29.0404 22.3284 30.3574 24.9C30.554 25.284 30.402 25.7548 30.0179 25.9513ZM10.7469 17.5607L12.4869 19.1304C12.8092 19.4211 13.303 19.392 13.5903 19.0736C13.8793 18.7532 13.8539 18.2592 13.5335 17.9702L11.7935 16.4005C11.4732 16.1116 10.9793 16.1369 10.6901 16.4573C10.4011 16.7777 10.4265 17.2717 10.7469 17.5607ZM28.3997 19.1304L30.1396 17.5607C30.46 17.2717 30.4854 16.7777 30.1964 16.4573C29.9074 16.137 29.4134 16.1115 29.093 16.4005L27.3531 17.9702C27.0327 18.2592 27.0073 18.7532 27.2963 19.0736C27.5839 19.3924 28.0778 19.4208 28.3997 19.1304ZM20.4433 16.0158C20.8748 16.0158 21.2245 15.666 21.2245 15.2345V12.8887C21.2245 12.4572 20.8748 12.1074 20.4433 12.1074C20.0118 12.1074 19.662 12.4572 19.662 12.8887V15.2345C19.6621 15.666 20.0118 16.0158 20.4433 16.0158ZM24.2812 25.2559C24.2812 27.3753 22.5595 29.0996 20.4433 29.0996C18.3271 29.0996 16.6055 27.3753 16.6055 25.2559C16.6055 23.1365 18.3271 21.4122 20.4433 21.4122C22.5595 21.4122 24.2812 23.1365 24.2812 25.2559ZM22.7187 25.2559C22.7187 23.998 21.698 22.9747 20.4434 22.9747C19.1887 22.9747 18.168 23.998 18.168 25.2559C18.168 26.5137 19.1887 27.5371 20.4433 27.5371C21.698 27.5371 22.7187 26.5137 22.7187 25.2559Z" fill="#F2613C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4316_21319">
                                    <rect width="20" height="20" fill="white" transform="translate(10.4434 10.6035)"/>
                                    </clipPath>
                                    </defs>
                                  </svg>
                                  View Offer
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
                                    <g clip-path="url(#clip0_4316_21319)">
                                    <path d="M30.0179 25.9513C29.6354 26.1471 29.1645 25.9974 28.9671 25.6129H28.967C27.7691 23.2785 24.5887 19.9318 20.4433 19.9318C16.7257 19.9318 13.4219 22.6854 11.9196 25.6129C11.722 25.996 11.2514 26.1472 10.868 25.9503C10.4846 25.7533 10.3329 25.2836 10.5293 24.9C12.2553 21.5296 16.0509 18.3693 20.4433 18.3693C25.4527 18.3693 29.0404 22.3284 30.3574 24.9C30.554 25.284 30.402 25.7548 30.0179 25.9513ZM10.7469 17.5607L12.4869 19.1304C12.8092 19.4211 13.303 19.392 13.5903 19.0736C13.8793 18.7532 13.8539 18.2592 13.5335 17.9702L11.7935 16.4005C11.4732 16.1116 10.9793 16.1369 10.6901 16.4573C10.4011 16.7777 10.4265 17.2717 10.7469 17.5607ZM28.3997 19.1304L30.1396 17.5607C30.46 17.2717 30.4854 16.7777 30.1964 16.4573C29.9074 16.137 29.4134 16.1115 29.093 16.4005L27.3531 17.9702C27.0327 18.2592 27.0073 18.7532 27.2963 19.0736C27.5839 19.3924 28.0778 19.4208 28.3997 19.1304ZM20.4433 16.0158C20.8748 16.0158 21.2245 15.666 21.2245 15.2345V12.8887C21.2245 12.4572 20.8748 12.1074 20.4433 12.1074C20.0118 12.1074 19.662 12.4572 19.662 12.8887V15.2345C19.6621 15.666 20.0118 16.0158 20.4433 16.0158ZM24.2812 25.2559C24.2812 27.3753 22.5595 29.0996 20.4433 29.0996C18.3271 29.0996 16.6055 27.3753 16.6055 25.2559C16.6055 23.1365 18.3271 21.4122 20.4433 21.4122C22.5595 21.4122 24.2812 23.1365 24.2812 25.2559ZM22.7187 25.2559C22.7187 23.998 21.698 22.9747 20.4434 22.9747C19.1887 22.9747 18.168 23.998 18.168 25.2559C18.168 26.5137 19.1887 27.5371 20.4433 27.5371C21.698 27.5371 22.7187 26.5137 22.7187 25.2559Z" fill="#F2613C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4316_21319">
                                    <rect width="20" height="20" fill="white" transform="translate(10.4434 10.6035)"/>
                                    </clipPath>
                                    </defs>
                                  </svg>
                                  View Original Job Posting
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
                                    <g clip-path="url(#clip0_4316_21319)">
                                    <path d="M30.0179 25.9513C29.6354 26.1471 29.1645 25.9974 28.9671 25.6129H28.967C27.7691 23.2785 24.5887 19.9318 20.4433 19.9318C16.7257 19.9318 13.4219 22.6854 11.9196 25.6129C11.722 25.996 11.2514 26.1472 10.868 25.9503C10.4846 25.7533 10.3329 25.2836 10.5293 24.9C12.2553 21.5296 16.0509 18.3693 20.4433 18.3693C25.4527 18.3693 29.0404 22.3284 30.3574 24.9C30.554 25.284 30.402 25.7548 30.0179 25.9513ZM10.7469 17.5607L12.4869 19.1304C12.8092 19.4211 13.303 19.392 13.5903 19.0736C13.8793 18.7532 13.8539 18.2592 13.5335 17.9702L11.7935 16.4005C11.4732 16.1116 10.9793 16.1369 10.6901 16.4573C10.4011 16.7777 10.4265 17.2717 10.7469 17.5607ZM28.3997 19.1304L30.1396 17.5607C30.46 17.2717 30.4854 16.7777 30.1964 16.4573C29.9074 16.137 29.4134 16.1115 29.093 16.4005L27.3531 17.9702C27.0327 18.2592 27.0073 18.7532 27.2963 19.0736C27.5839 19.3924 28.0778 19.4208 28.3997 19.1304ZM20.4433 16.0158C20.8748 16.0158 21.2245 15.666 21.2245 15.2345V12.8887C21.2245 12.4572 20.8748 12.1074 20.4433 12.1074C20.0118 12.1074 19.662 12.4572 19.662 12.8887V15.2345C19.6621 15.666 20.0118 16.0158 20.4433 16.0158ZM24.2812 25.2559C24.2812 27.3753 22.5595 29.0996 20.4433 29.0996C18.3271 29.0996 16.6055 27.3753 16.6055 25.2559C16.6055 23.1365 18.3271 21.4122 20.4433 21.4122C22.5595 21.4122 24.2812 23.1365 24.2812 25.2559ZM22.7187 25.2559C22.7187 23.998 21.698 22.9747 20.4434 22.9747C19.1887 22.9747 18.168 23.998 18.168 25.2559C18.168 26.5137 19.1887 27.5371 20.4433 27.5371C21.698 27.5371 22.7187 26.5137 22.7187 25.2559Z" fill="#F2613C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4316_21319">
                                    <rect width="20" height="20" fill="white" transform="translate(10.4434 10.6035)"/>
                                    </clipPath>
                                    </defs>
                                  </svg>
                                  View Original Proposal
                                </a>
                              </li>
                            </ul>
                          </div>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card>
              </b-card-group>
            </b-tab>

            <b-tab title="Feedback" @click="isHiddenSearch(false)">
              <b-card-group deck>
                <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white" class="mb-3">
                  <b-row>
                    <b-col lg="6" xl="6" sm="12" class="pt-0">
                      <div class="msg-wrapper py-20 px-20">
                        <h4 class="fz-20 text-black fw-600 ml-2 mb-4">Client’s Feedback to you</h4>
                        <div class="star-rating mb-3">
                          <label for="5-stars" class="star active">&#9733;</label>
                          <label for="4-stars" class="star active">&#9733;</label>
                          <label for="3-stars" class="star active">&#9733;</label>
                          <label for="2-stars" class="star active">&#9733;</label>
                          <label for="1-star" class="star">&#9733;</label>
                        </div>
                        <p class="fz-16 text-black fw-400 ml-2">We regularly need Freelance Inspectors based in Jiangsu Province-China for occasional Inspection of Mooring Chains, Valves, Forgings, Castings, etc. </p>
                        <a href="javascript:void(0);" class="text-theme ml-2">Enable Client to change feedback</a>
                      </div>
                    </b-col>
                    <b-col lg="6" xl="6" sm="12" class="pt-0">
                      <div class="msg-wrapper py-20 px-20">
                        <h4 class="fz-20 text-black fw-600 ml-2 mb-4">Your Feedback to client</h4>
                        <div class="star-rating mb-3">
                          <label for="5-stars" class="star active">&#9733;</label>
                          <label for="4-stars" class="star active">&#9733;</label>
                          <label for="3-stars" class="star active">&#9733;</label>
                          <label for="2-stars" class="star active">&#9733;</label>
                          <label for="1-star" class="star">&#9733;</label>
                        </div>
                        <p class="fz-16 text-black fw-400 ml-2">We regularly need Freelance Inspectors based in Jiangsu Province-China for occasional Inspection of Mooring Chains, Valves, Forgings, Castings, etc. Candidates must possess a degree in Mechanical Engineering or Metallurgy and hold valid Level NDT Certificates in RT, UT & MT.</p>
                      </div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-card-group>
            </b-tab>

            <div class="end-filter pos-absolute" @click="isHiddenSearch(false)">
              <b-dropdown id="dropdown-1" class="m-md-2">
                <b-dropdown-item v-b-modal.end-contract class="text-black fw-400">End Contract</b-dropdown-item>
              </b-dropdown>
              <b-modal id="end-contract" size="lg" title="End Contract">
                <div class="text-center">
                  <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2">
                    <path d="M66.3199 8.25326C71.4652 4.68501 78.2848 4.68501 83.4301 8.25326C86.7378 10.5472 90.8282 11.4166 94.7831 10.6664C100.935 9.49942 107.165 12.2732 110.414 17.6257C112.503 21.0667 115.886 23.5247 119.804 24.4479C125.898 25.884 130.462 30.9519 131.253 37.1632C131.761 41.1563 133.852 44.7779 137.056 47.2149C142.04 51.0057 144.147 57.4915 142.343 63.4876C141.184 67.3423 141.621 71.5012 143.557 75.0306C146.568 80.5207 145.855 87.3029 141.768 92.047C139.141 95.0969 137.849 99.074 138.182 103.086C138.699 109.326 135.289 115.232 129.626 117.903C125.986 119.621 123.188 122.729 121.86 126.529C119.795 132.44 114.278 136.448 108.018 136.586C103.993 136.674 100.173 138.375 97.4145 141.307C93.1236 145.867 86.453 147.285 80.6783 144.864C76.9659 143.308 72.7841 143.308 69.0717 144.864C63.297 147.285 56.6264 145.867 52.3355 141.307C49.5769 138.375 45.7566 136.674 41.7323 136.586C35.4723 136.448 29.9551 132.44 27.8899 126.529C26.5622 122.729 23.764 119.621 20.1235 117.903C14.4607 115.232 11.0509 109.326 11.5685 103.086C11.9012 99.074 10.609 95.0969 7.98184 92.047C3.89531 87.3029 3.18246 80.5207 6.19334 75.0306C8.12895 71.5012 8.56607 67.3423 7.40656 63.4876C5.60293 57.4915 7.7103 51.0057 12.6939 47.2149C15.8977 44.7779 17.9886 41.1563 18.4972 37.1632C19.2883 30.9519 23.8515 25.884 29.9461 24.4479C33.8642 23.5247 37.2473 21.0667 39.3361 17.6257C42.5852 12.2732 48.8152 9.49942 54.9669 10.6664C58.9218 11.4166 63.0122 10.5472 66.3199 8.25326Z" fill="#F2613C"/>
                    <path d="M68.9854 85.612H77.0223L84.4342 57.2147L87.0239 45.9629H74.7899L73.0932 57.2147L68.9854 85.612ZM69.0747 106.865C74.2541 106.865 77.826 102.4 77.826 97.9354C77.826 94.0955 75.3257 91.2379 71.4858 91.2379C66.3064 91.2379 62.7344 95.8815 62.7344 100.257C62.7344 104.186 65.2348 106.865 69.0747 106.865Z" fill="white"/>
                    <path d="M133.023 19.7399C133.472 19.7615 133.931 19.6116 134.29 19.2849L149.692 5.29456C150.411 4.64135 150.465 3.5288 149.811 2.8099C149.158 2.09076 148.046 2.03733 147.327 2.69055L131.925 16.6809C131.206 17.3341 131.152 18.4466 131.805 19.1655C132.132 19.525 132.573 19.7183 133.023 19.7399Z" fill="#F2613C"/>
                    <path d="M149.113 26.9153C148.903 25.9669 147.964 25.3686 147.015 25.5792L139.571 27.2309C138.622 27.4413 138.024 28.3806 138.235 29.3291C138.41 30.1206 139.094 30.6684 139.866 30.7055C140.019 30.7128 140.176 30.7002 140.333 30.6652L147.777 29.0135C148.726 28.8033 149.324 27.8637 149.113 26.9153Z" fill="#F2613C"/>
                    <path d="M122.151 11.7905C122.304 11.8404 122.458 11.868 122.612 11.8754C123.384 11.9125 124.117 11.4327 124.368 10.6617L126.725 3.40987C127.026 2.48599 126.52 1.49336 125.597 1.19328C124.673 0.892255 123.68 1.39827 123.38 2.32215L121.022 9.57397C120.722 10.4978 121.227 11.4902 122.151 11.7905Z" fill="#F2613C"/>
                  </svg>
                  <h4>Are you sure you want to end this contract</h4>
                  <p>Interview promising candidates and make them an offer.</p>
                </div>
                <template #modal-footer>
                  <div class="w-100 text-right">
                    <a href="javascript:void(0);" class="text-theme mr-2">Cancel</a>
                    <b-button
                      size="lg"
                      class="btn btn-theme"
                      @click="show=false"
                    >
                      End Contract
                    </b-button>
                  </div>
                </template>
              </b-modal>
            </div>

            <div class="search-wrapper" v-if="isHidden">
              <div class="d-flex align-items-center pos-rel">
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search here..."></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></b-button>
              </div>  
            </div>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </template>
  <script>
  export default {
    data() {
      return {
        isHidden: false,
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['Submitted', 'Message', 'Attachment'],
        items: [
          { isActive: true, Submitted: '14 Minutes ago', Message: 'While checking AWS services and found the utilization is nt that much so just reduced the RDS instance to. ago lower configuration and which can reduce the cost from 98.6 USD to 56 USD monthly after downgrading the RDS instance the CPU and RAM utlzation is under control. Regards Mushtaq' }
       ]
      }
      
    },
    methods:{
        isHiddenSearch(status){
          this.isHidden = status;
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
    .br-20{border-radius: 20px;}
    .border-none{border:0px!important;}
    .freelancer-wrap .nav-pills .nav-link.active, .nav-pills .show > .nav-link{background-color:#fff!important;color:#F2613B!important;font-weight:600;border-bottom: 3px solid #f2613b;border-radius: 0px;}
    .freelancer-wrap .nav-pills .badge{border-radius: 50%;padding: 8px 7px;background-color:#eee;color:#000;}
    .freelancer-wrap .nav-pills .nav-link{color:#999999;font-weight:600;}
    .freelancer-wrap .nav-pills .nav-link:hover{color:#F2613B!important;;font-weight:600;}
    .freelancer-wrap .nav-pills .nav-link.active .badge, .nav-pills .show > .nav-link .badge{background-color: #F2613B!important;border-radius: 50%;font-size: 10px!important;padding: 7px 6px;color:#fff!important;}
    .freelancer-wrap .br-50{border-radius:50%!important;}
    .freelancer-wrap .fz-14{font-size:14px;}
    .freelancer-wrap .card{border-radius: 20px!important;}
    .freelancer-wrap .card-body{border-radius: 20px;}
    .freelancer-wrap .card-body{border-radius:0 0 20px 20px;}
    .freelancer-wrap .card-header{border-radius:20px 20px 0 0!important;}
    .freelancer-wrap .my-proposal ul{margin-left:-32px;}
    .fz-14{font-size:14px;}
    .fz-16{font-size:16px;}
    .fz-18{font-size:18px;}
    .fw-600{font-weight:600;}
    .mb-23{margin-bottom:23px;}
    .no-bottom-border{border-bottom:0px!important;}
    .border-top-0{border-top:0px!important;}
    .my-proposals .nav-tabs{border-bottom: 1px solid transparent;margin-bottom: 2rem;}
    .my-proposals .nav-tabs .nav-link.active{color: #000;background-color: transparent;border-color: transparent;font-size: 16px;font-weight: 700;border-bottom: 2px solid #f2613d;}
    .my-proposals .nav-tabs .nav-link{color: #999999;background-color: transparent;border-color: transparent;font-size: 16px;font-weight: 700;}
    .client-wrap{border: 1.5px solid #D4D5CF;border-radius: 20px;padding:15px;max-width:300px;min-width:250px;background-color:#fff;}
    .tabs-wrap .nav-tabs{padding: 20px;background-color: #fff;border-radius: 20px 20px 0 0;border: 1.5px solid #EBEBEB;border-bottom: 0px;margin-bottom: 0px!important;}
    .tabs-wrap .card{border: 1.5px solid #EBEBEB!important;border-radius:0px;} 
    .tabs-wrap .nav-tabs .nav-link.active, .nav-tabs .show > .nav-link{background-color:#fff!important;color:#F2613B!important;font-weight:600;border-bottom: 3px solid #f2613b!important;border-radius: 0px;border:0px;}
    .tabs-wrap .nav-tabs .badge{border-radius: 50%;padding: 8px 7px;background-color:#eee;color:#000;}
    .tabs-wrap .nav-tabs .nav-link{color:#999999;font-weight:600;}
    .tabs-wrap .nav-tabs .nav-link:hover{color:#F2613B!important;;font-weight:600;}
    .tabs-wrap .nav-tabs .nav-link.active .badge, .nav-tabs .show > .nav-link .badge{background-color: #F2613B!important;border-radius: 50%;font-size: 10px!important;padding: 7px 6px;color:#fff!important;}
    .tabs-wrap .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {border-color: transparent;isolation: isolate;}
    .tabs-wrap .img-wrapper{background: #C4C4C4;box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);border-radius: 10px;}
    .tabs-wrap .img-wrapper img{border-radius: 10px;}
    .stats-ul{display: inline-flex;align-items: center;margin-bottom: 0px;}
    .stats-ul li{width:20%;}
    .stats-ul li:last-child{padding-left:50px;border-left:1px solid #E4E4E4;}
    .stats-ul p{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 14px;line-height: 22px;text-transform: uppercase;color: #000000;margin-bottom:5px;}
    .stats-ul h4{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 24px;line-height: 40px;color: #000000;margin-bottom:0px;}
    .tabs-wrap .card-body{padding:0px;}
    .list-group-item{border:0px!important;}
    .badge-active{background: #FFFFFF!important;border: 1.5px solid #979797!important;border-radius: 15px!important;font-family: 'Source Sans Pro';font-style: normal!important;font-weight: 600;font-size: 14px!important;line-height: 16px!important;text-align: center!important;color: #979797!important;}
    .details-wrapper:nth-child(even) {background: #FFFFFF}
    .details-wrapper:nth-child(odd) {background: #F8F8F8}
    .details-wrapper .content .milestone-details{margin-left:-32px;}
    .details-wrapper .content .milestone-details li{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 16px;line-height: 26px;color: #000000;}
    .details-wrapper .content .milestone-details li span{max-width: 110px;width: 90px;display: inline-block;}
    .time-details, .offer-wrapper{margin-left:-32px;}
    .time-details li span{max-width: 120px;width: 110px;display: inline-block;}
    .border-right{border-right:1.5px solid #EBEBEB!important;}
    .border-left{border-left:1.5px solid #EBEBEB!important;}
    .description-wrapper{margin-top:60px;}
    p {margin-top: 0!important;margin-bottom: 1rem!important;}
    h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
    dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
    ol, ul {padding-left: 2rem!important;}
    .modal-header{text-align:center;display: block!important;}
    .modal-header .modal-title{font-family: 'Source Sans Pro';font-style: normal;font-weight: 700!important;font-size: 24px;line-height: 25px;text-align: left;color: #000000;}
    .modal-header .close{position: absolute;right: -20px;top: -33px;color: #fff;font-size: 34px;font-weight: 500;}
    
    .modal-body h4{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 22px;line-height: 43px;text-transform: capitalize;color: #000000;}
    .modal-body p{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 16px;line-height: 20px;text-transform: capitalize;color: #000000;}
    
    p {margin-top: 0!important;margin-bottom: 1rem!important;}
    .end-filter{position: absolute;right: 53%;top: 18px;cursor: pointer;border-right: 1px solid #eee;padding-right: 20px;}
    .end-filter .dropdown ul{padding-left:0px!important;}
    .end-filter .dropdown-toggle{border: 1px solid #999;background-color: #fff;border-radius: 50%;}
    .end-filter .dropdown-toggle::after{content:'\f141';font-family: fontAwesome!important;vertical-align: 0;border:none;color: #999999;}
    .search-wrapper{position: absolute;right: 3%;top: 30px;cursor: pointer;}
    .search-wrapper .btn{position: absolute;right: 1px;background-color:#fff;border:0px;color:#F2613B;}
    .search-wrapper input{padding-right: 30px;}
    @media only screen and (min-width: 816px) and (max-width: 1366px) {
      .end-filter{position: absolute;right: 44%;top: 18px;cursor: pointer;border-right: 1px solid #eee;padding-right: 20px;}
    }
    @media only screen and (min-width: 320px) and (max-width: 815px) {
      .end-filter{position: absolute;left: 7%;top: 10px;cursor: pointer;border-right:0px;padding-right:0px;}
      .tabs-wrap .nav-tabs li{width:100%;text-align:center;}
      .stats-ul{display:block;}
      .stats-ul li{width: 100%;text-align: center;}
      .stats-ul li:last-child {padding-left: 0px;border-left: 0px;}
      .search-wrapper{display:none;}
    }
    .text-theme:hover {
      color: #f2613d;
    }
    .b-sidebar {width:1020px!important;}
    .b-sidebar .card{background-color:transparent!important;border-radius:20px!important;}
    .b-sidebar .card-body{background-color:transparent!important;border-radius:0 0 20px 20px!important;}
    .b-sidebar .card-header{background-color:transparent!important;border-radius:20px 20px 0 0!important;}
    .b-sidebar table th{background-color:#eee!important;color:#000!important}
    .b-sidebar table td{border:opx!important;}
    #submit-milestone-modal .modal-header .modal-title{text-align:left!important;}
    #submit-milestone-modal .input-group .form-control{height:38px;}
    .client-wrap .fa{top:10px;right:-5px;}
  </style>
