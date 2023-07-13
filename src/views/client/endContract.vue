<template>
  <div class="container">
    <b-row class="mt-100 freelancer-wrap mb-50">
      <b-col cols="12">
        <h4 class="mb-5 fz-30 fw-500 text-black"><b>End Contract</b></h4>
        <b-card-group deck>
          <b-card class="py-4 px-2 bg-white mb-2 br-20">
            <b-row>
              <b-col cols="12">
                <h4 class="fz-20 text-black fz-600">Client Name</h4>
                <p class="fz-16 text-black fz-400">{{data.userDetails.first_name+' '+data.userDetails.last_name}}</p>
              </b-col>  
            </b-row>
            <b-row>
              <b-col cols="12">
                <h4 class="fz-20 text-black fz-600">Contract Title</h4>
                <p class="fz-16 text-black fz-400">{{data.jobDetails.job_title}}</p>
              </b-col>  
            </b-row>
          </b-card>
        </b-card-group>

        <!-- <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white custom-br" class="mt-3 br-20">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>Refund to client</b></h4>
            </template>
            <b-row>
              <b-col cols="12">
                <div class="py-2 px-2">
                  <p>You haven't submitted work and therefore the $5.00 in escrow will be returned to your client. Upload your work files to get your client's approval and avoid this refund.</p>
                  <p>Once approved, the client will release the funds in escrow to you or if they are unresponsive, you will receive the funds held in escrow after 14 days.</p>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group> -->

        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white custom-br" class="mt-3 br-20">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>Private Feedback</b></h4>
              <p class="mb-0">This feedback will be kept anonymous and never shared directly with the client. <a href="javascript:void(0);">Learn More</a></p>
            </template>
            <b-row>
              <b-col cols="5">
                <div class="py-2 px-2">
                  <template>
                    <div>
                      <b-form>
                        <b-form-group id="input-group-3" label-for="input-3">
                          <label>Reason for ending contract</label><br>
                          <b-form-select
                            id="input-3"
                            v-model="submitReview.reason_for_ending"
                            class="form-control"
                            :options="reason"
                            text-field="title"
                            value-field="id"
                            @change="dislike_reasonhide = true"
                            :error-messages="review_reason_for_ending"
                            @input="$v.submitReview.reason_for_ending.$touch()"
                            @blur="$v.submitReview.reason_for_ending.$touch()"
                            required
                          ></b-form-select>
                        </b-form-group>
                        <div class="error" v-if="review_reason_for_ending[0]">{{review_reason_for_ending[0]}}</div>

                        <h5 class="fz-16 fw-600 text-black mt-4">How Likely are you to recommended this Client to a friend or a colleague ?</h5>
                        <div class="d-flex align-items-center recommendation-wrap">
                          <div class="recommend-wrap">
                            <div class="d-flex align-items-center justify-content-space-between">
                              <h6>Not at all likely</h6>
                              <h6>Extremely Likely</h6>
                            </div>
                            <div class="radios">
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">1</div>
                                <input type="radio" id="radio1" v-model="submitReview.client_recommended" :value="1" name="radio_client_recommended"  class="text-center" @click="checkRecommendedVal(1)">
                                <label for="radio1"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">2</div>
                                <input type="radio" id="radio2" v-model="submitReview.client_recommended" :value="2" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(2)">
                                <label for="radio2"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">3</div>
                                <input type="radio" id="radio3" v-model="submitReview.client_recommended" :value="3" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(3)">
                                <label for="radio3"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">4</div>
                                <input type="radio" id="radio4" v-model="submitReview.client_recommended" :value="4" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(4)">
                                <label for="radio4"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">5</div>
                                <input type="radio" id="radio5" v-model="submitReview.client_recommended" :value="5" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(5)">
                                <label for="radio5"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">6</div>
                                <input type="radio" id="radio6" v-model="submitReview.client_recommended" :value="6" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(6)">
                                <label for="radio6"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">7</div>
                                <input type="radio" id="radio7" v-model="submitReview.client_recommended" :value="7" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(7)">
                                <label for="radio7"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">8</div>
                                <input type="radio" id="radio8" v-model="submitReview.client_recommended" :value="8" name="radio_client_recommended" class="tex-center" @click="checkRecommendedVal(8)">
                                <label for="radio8"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">9</div>
                                <input type="radio" id="radio9" v-model="submitReview.client_recommended" :value="9" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(9)">
                                <label for="radio9"></label>
                              </div>
                              <div class="radio-wrap text-center">
                                <div class="radio-label-fake text-center">10</div>
                                <input type="radio" id="radio10" v-model="submitReview.client_recommended" :value="10" name="radio_client_recommended" class="text-center" @click="checkRecommendedVal(10)">
                                <label for="radio10"></label>
                              </div>
                            </div>
                            <div class="error" v-if="review_client_recommended[0]">{{review_client_recommended[0]}}</div>

                          </div>
                          
                        </div>
                        <span v-if="dislike_reasonhide">
                          <h5 class="fz-16 fw-600 text-black mt-4 mb-4">Whats went wrong? (Select all that apply) (optional)</h5>
                          <b-form-group>
                            <b-form-checkbox v-model="submitReview.dislike_reason" name="some-radios" value="Unclear requirements"> Unclear requirements</b-form-checkbox>
                            <b-form-checkbox v-model="submitReview.dislike_reason" name="some-radios" value="Poor Communication"> Poor Communication</b-form-checkbox>
                            <b-form-checkbox v-model="submitReview.dislike_reason" name="some-radios" value="Something elsec"> Something else</b-form-checkbox>
                          </b-form-group>
                        </span>
                      </b-form>
                    </div>
                  </template>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>

        <b-card-group deck>
          <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white custom-br" class="feedback-wrap mt-3 br-20">
            <template  #header>
              <h4 class="mb-0 fz-24 fw-500 text-black"><b>Public Feedback</b></h4>
              <p class="mb-0">This feedback will be shared on your client's profileonly after they've left feedback for you. Learn more</p>
            </template>
            <div class="py-4 px-4">
              <h5 class="fz-24 text-black fw-500 mb-4">Feedback to client</h5>
              <div class="d-flex align-items-center mb-3">
                <div id="full-stars-example-two">
                  <div class="rating-group">
                      <input disabled checked class="rating__input rating__input--none" name="skill" id="skill-none" value="0" type="radio">
                      <label aria-label="1 star" class="rating__label" for="skill-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="skill" id="skill-1" value="1" type="radio" @click="getSkillcount('skill',1)">
                      <label aria-label="2 stars" class="rating__label" for="skill-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="skill" id="skill-2" value="2" type="radio" @click="getSkillcount('skill',2)">
                      <label aria-label="3 stars" class="rating__label" for="skill-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="skill" id="skill-3" value="3" type="radio" @click="getSkillcount('skill',3)">
                      <label aria-label="4 stars" class="rating__label" for="skill-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="skill" id="skill-4" value="4" type="radio" @click="getSkillcount('skill',4)">
                      <label aria-label="5 stars" class="rating__label" for="skill-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="skill" id="skill-5" value="5" type="radio" @click="getSkillcount('skill',5)">
                  </div>
                </div>
                <span class="ml-2">Skills</span>
              </div>
              <div class="error" v-if="review_skills[0]">{{review_skills[0]}}</div>

              <div class="d-flex align-items-center mb-3">
                <div id="full-stars-example-two">
                  <div class="rating-group">
                      <input disabled checked class="rating__input rating__input--none" name="quality" id="quality-none" value="0" type="radio">
                      <label aria-label="1 star" class="rating__label" for="quality-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="quality" id="quality-1" value="1" type="radio" @click="getSkillcount('quality',1)">
                      <label aria-label="2 stars" class="rating__label" for="quality-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="quality" id="quality-2" value="2" type="radio" @click="getSkillcount('quality',2)">
                      <label aria-label="3 stars" class="rating__label" for="quality-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="quality" id="quality-3" value="3" type="radio" @click="getSkillcount('quality',3)">
                      <label aria-label="4 stars" class="rating__label" for="quality-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="quality" id="quality-4" value="4" type="radio" @click="getSkillcount('quality',4)">
                      <label aria-label="5 stars" class="rating__label" for="quality-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="quality" id="quality-5" value="5" type="radio" @click="getSkillcount('quality',5)">
                  </div>
                </div>
                <span class="ml-2">Quality of requirements</span>
              </div>
              <div class="error" v-if="review_quality_reqirement[0]">{{review_quality_reqirement[0]}}</div>


              <div class="d-flex align-items-center mb-3">
                <div id="full-stars-example-two">
                  <div class="rating-group">
                      <input disabled checked class="rating__input rating__input--none" name="avaibility" id="avaibility-none" value="0" type="radio">
                      <label aria-label="1 star" class="rating__label" for="avaibility-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="avaibility" id="avaibility-1" value="1" type="radio" @click="getSkillcount('avaibility',1)">
                      <label aria-label="2 stars" class="rating__label" for="avaibility-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="avaibility" id="avaibility-2" value="2" type="radio" @click="getSkillcount('avaibility',2)">
                      <label aria-label="3 stars" class="rating__label" for="avaibility-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="avaibility" id="avaibility-3" value="3" type="radio" @click="getSkillcount('avaibility',3)">
                      <label aria-label="4 stars" class="rating__label" for="avaibility-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="avaibility" id="avaibility-4" value="4" type="radio" @click="getSkillcount('avaibility',4)">
                      <label aria-label="5 stars" class="rating__label" for="avaibility-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="avaibility" id="avaibility-5" value="5" type="radio" @click="getSkillcount('avaibility',5)">
                  </div>
                </div>
                <span class="ml-2">Availability</span>
              </div>
              <div class="error" v-if="review_avaibility[0]">{{review_avaibility[0]}}</div>


              <div class="d-flex align-items-center mb-3">
                <div id="full-stars-example-two">
                  <div class="rating-group">
                      <input disabled checked class="rating__input rating__input--none" name="deadline" id="deadline-none" value="0" type="radio">
                      <label aria-label="1 star" class="rating__label" for="deadline-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="deadline" id="deadline-1" value="1" type="radio" @click="getSkillcount('deadline',1)">
                      <label aria-label="2 stars" class="rating__label" for="deadline-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="deadline" id="deadline-2" value="2" type="radio" @click="getSkillcount('deadline',2)">
                      <label aria-label="3 stars" class="rating__label" for="deadline-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="deadline" id="deadline-3" value="3" type="radio" @click="getSkillcount('deadline',3)">
                      <label aria-label="4 stars" class="rating__label" for="deadline-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="deadline" id="deadline-4" value="4" type="radio" @click="getSkillcount('deadline',4)">
                      <label aria-label="5 stars" class="rating__label" for="deadline-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="deadline" id="deadline-5" value="5" type="radio" @click="getSkillcount('deadline',5)">
                  </div>
                </div>
                <span class="ml-2">Set Reasonable Deadlines</span>
              </div>
              <div class="error" v-if="review_reasonable_deadline[0]">{{review_reasonable_deadline[0]}}</div>


              <div class="d-flex align-items-center mb-3">
                <div id="full-stars-example-two">
                  <div class="rating-group">
                      <input disabled checked class="rating__input rating__input--none" name="communication" id="communication-none" value="0" type="radio">
                      <label aria-label="1 star" class="rating__label" for="communication-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="communication" id="communication-1" value="1" type="radio" @click="getSkillcount('communication',1)">
                      <label aria-label="2 stars" class="rating__label" for="communication-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="communication" id="communication-2" value="2" type="radio" @click="getSkillcount('communication',2)">
                      <label aria-label="3 stars" class="rating__label" for="communication-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="communication" id="communication-3" value="3" type="radio" @click="getSkillcount('communication',3)">
                      <label aria-label="4 stars" class="rating__label" for="communication-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="communication" id="communication-4" value="4" type="radio" @click="getSkillcount('communication',4)">
                      <label aria-label="5 stars" class="rating__label" for="communication-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="communication" id="communication-5" value="5" type="radio" @click="getSkillcount('communication',5)">
                  </div>
                </div>
                <span class="ml-2">Communication</span>
              </div>
              <div class="error" v-if="review_communication[0]">{{review_communication[0]}}</div>


              <div class="d-flex align-items-center mb-3">
                <div id="full-stars-example-two">
                  <div class="rating-group">
                      <input disabled checked class="rating__input rating__input--none" name="cooperation" id="cooperation-none" value="0" type="radio">
                      <label aria-label="1 star" class="rating__label" for="cooperation-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="cooperation" id="cooperation-1" value="1" type="radio" @click="getSkillcount('cooperation',1)">
                      <label aria-label="2 stars" class="rating__label" for="cooperation-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="cooperation" id="cooperation-2" value="2" type="radio" @click="getSkillcount('cooperation',2)">
                      <label aria-label="3 stars" class="rating__label" for="cooperation-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="cooperation" id="cooperation-3" value="3" type="radio" @click="getSkillcount('cooperation',3)">
                      <label aria-label="4 stars" class="rating__label" for="cooperation-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="cooperation" id="cooperation-4" value="4" type="radio" @click="getSkillcount('cooperation',4)">
                      <label aria-label="5 stars" class="rating__label" for="cooperation-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                      <input class="rating__input" name="cooperation" id="cooperation-5" value="5" type="radio" @click="getSkillcount('cooperation',5)">
                  </div>
                </div>
                <span class="ml-2">Cooperation</span>
              </div>
              <div class="error" v-if="review_cooperation[0]">{{review_cooperation[0]}}</div>

              
              <div class="d-flex align-items-center mb-3">
                <h4 class="fz-20 fw-400 text-black mb-0">Total Score :</h4>
                <span class="ml-2 score-count">{{totalrating.toFixed(1)}}</span>
              </div>
            </div>
            <hr>
            <div class="py-4 px-4">
              <h4 class="text-black fz-24 fw-500 text-black mb-4"><b>Share your experience with this client:</b></h4>
              <b-form-textarea
                id="textarea"
                v-model="submitReview.review"
                placeholder="write somthing here..."
                rows="6"
                max-rows="6"
                :error-messages="review_review"
                @input="$v.submitReview.review.$touch()"
                @blur="$v.submitReview.review.$touch()"
              ></b-form-textarea>
              <div class="error" v-if="review_review[0]">{{review_review[0]}}</div>
              <div class="form-group d-md-flex align-items-center">
                <button
                  type="submit"
                  class="btn btn-theme mt-4 mr-2" variant="primary" 
                  @click="submitEndcontract"
                >
                End Contract
                </button>
                
                <a href="javascript:void(0);"
                  class="text-theme mt-4"
                  @click="$router.push({name:'contractDetail',path:'/freelancer/contract-detail/',params:{pid:job_id}})"
                >
                Cancel
                </a> 
              </div>
            </div>
          </b-card>
        </b-card-group>
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
              <a href="javascript:void(0);" @click="$bvModal.hide('end-contract')" class="text-theme mr-2">Cancel</a>
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
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    submitReview:{
        reason_for_ending:{required},
        client_recommended:{required},
        skills:{required},
        quality_reqirement:{required},
        avaibility:{required},
        reasonable_deadline:{required},
        communication:{required},
        cooperation:{required},
        review:{required},
      },
  },
  computed:{
    // this fun id for validate of field
    review_reason_for_ending() {
        const errors = []
        if (!this.$v.submitReview.reason_for_ending.$dirty) return errors
        !this.$v.submitReview.reason_for_ending.required && errors.push('Reason is required')
        return errors
    },

    // this fun id for validate of field
    review_client_recommended() {
        const errors = []
        if (!this.$v.submitReview.client_recommended.$dirty) return errors
        !this.$v.submitReview.client_recommended.required && errors.push('Client Recommended is required')
        return errors
    },

    // this fun id for validate of field
    review_skills() {
        const errors = []
        if (!this.$v.submitReview.skills.$dirty) return errors
        !this.$v.submitReview.skills.required && errors.push('Skills is required')
        return errors
    },

    // this fun id for validate of field
    review_quality_reqirement() {
        const errors = []
        if (!this.$v.submitReview.quality_reqirement.$dirty) return errors
        !this.$v.submitReview.quality_reqirement.required && errors.push('Quality is required')
        return errors
    },

    // this fun id for validate of field
    review_avaibility() {
        const errors = []
        if (!this.$v.submitReview.avaibility.$dirty) return errors
        !this.$v.submitReview.avaibility.required && errors.push('Reason is required')
        return errors
    },

    // this fun id for validate of field
    review_reasonable_deadline() {
        const errors = []
        if (!this.$v.submitReview.reasonable_deadline.$dirty) return errors
        !this.$v.submitReview.reasonable_deadline.required && errors.push('Deadline is required')
        return errors
    },

    // this fun id for validate of field
    review_communication() {
        const errors = []
        if (!this.$v.submitReview.communication.$dirty) return errors
        !this.$v.submitReview.communication.required && errors.push('Communication is required')
        return errors
    },
    // this fun id for validate of field
    review_cooperation() {
        const errors = []
        if (!this.$v.submitReview.cooperation.$dirty) return errors
        !this.$v.submitReview.cooperation.required && errors.push('Cooperation is required')
        return errors
    },
    // this fun id for validate of field
    review_review() {
        const errors = []
        if (!this.$v.submitReview.review.$dirty) return errors
        !this.$v.submitReview.review.required && errors.push('Review is required')
        return errors
    },
    // function to total burget amount
    totalrating() {
        var amount = 0;
        if(this.submitReview.skills!=""){
          amount  += (parseInt(this.submitReview.skills)*0.166);
        }
        if(this.submitReview.quality_reqirement!=""){
          amount  += (parseInt(this.submitReview.quality_reqirement)*0.166);
        }
        if(this.submitReview.avaibility!=""){
          amount  += (parseInt(this.submitReview.avaibility)*0.166);
        }
        if(this.submitReview.reasonable_deadline!=""){
          amount  += (parseInt(this.submitReview.reasonable_deadline)*0.166);
        }
        if(this.submitReview.communication!=""){
          amount  += (parseInt(this.submitReview.communication)*0.166);
        }
        if(this.submitReview.cooperation!=""){
          amount  += (parseInt(this.submitReview.cooperation)*0.166);
        }
        return amount;
    }
 },
  data() {
    return {
      reason: [],
      job_id:'',
      user_id:'',
      data:{
          userDetails:'',
          jobDetails:'',
          proposalDetails:'',
      },
      submitReview:{
        job_id:'',
        user_id:'',
        reason_for_ending:'',
        client_recommended:'',
        dislike_reason:[],
        skills:'',
        quality_reqirement:'',
        avaibility:'',
        reasonable_deadline:'',
        communication:'',
        cooperation:'',
        rating:'',
        review:'',
      },
      dislike_reasonhide:false,
    }
  },
  
  mounted(){
    this.job_id = this.$route.params.pid;
    this.user_id = this.decodeId(this.$route.params.uid);

    // this fun is for to get contractDetails
    this.getContractdetails();
    // this fun is for to get end contract list
    this.getendcontractReason();
 },
 methods:{
    
    ...mapActions(['genericAPIPOSTRequest']),
    // this fun is for to submit feedback and end the contract
    async submitEndcontract(){
      this.$v.submitReview.$touch();
      if (!this.$v.submitReview.$invalid) {
        if(this.data.proposalDetails.application_status == 2){
          var reason;
          this.reason.map(data=>{
            if(this.submitReview.reason_for_ending == data.id){
              reason=data.title;
            }
          })
          var res = await this.genericAPIPOSTRequest({
            requestUrl: "updateJobapplication",
            params: {
              jobData:{
                user_id:this.user_id,
                jobs_id:this.data.jobDetails.jobs_id,
              },
              updateData:{
                action:6,
                ended_date:new Date().toLocaleString(),
                end_reason:reason
              },
            },
          })
          if (res!="") {
            // console.log('res',res)
            this.addFeedback();
          }
        }else{
          this.addFeedback();
        }
        // var reason;
        // this.reason.map(data=>{
        //   if(this.submitReview.reason_for_ending == data.id){
        //     reason=data.title;
        //   }
        // })
        // var res = await this.genericAPIPOSTRequest({
        //   requestUrl: "updateJobapplication",
        //   params: {
        //     jobData:{
        //       user_id:this.data.jobDetails.client_id,
        //       jobs_id:this.data.jobDetails.jobs_id,
        //     },
        //     updateData:{
        //       action:6,
        //       ended_date:new Date().toLocaleString(),
        //       end_reason:reason
        //     },
        //   },
        // })
        // if (res!="") {
        //   this.submitReview.job_id=this.data.jobDetails.jobs_id;
        //   this.submitReview.user_id=this.data.jobDetails.client_id;
        //   this.submitReview.rating=this.totalrating.toFixed(1);
        //   await this.genericAPIPOSTRequest({
        //       requestUrl: "addFeedback",
        //       params: this.submitReview,
        //   });
        //   this.$toastr.s('Contract Ended Successfully');
        //   this.$router.push({name:'contractDetail',path:'/freelancer/contract-detail/',params:{pid:this.job_id}});
        // }
      }
    },
    // this fun is for to add feed back
    async addFeedback(){
        this.submitReview.job_id=this.data.jobDetails.jobs_id;
        this.submitReview.user_id=this.user_id;
        this.submitReview.rating=this.totalrating.toFixed(1);
        this.submitReview.user_type = this.$store.state.accountType;
        await this.genericAPIPOSTRequest({
            requestUrl: "addFeedback",
            params: this.submitReview,
        });
        this.$toastr.s('Contract Ended Successfully');
        this.$router.push({name:'contractDetails',path:'/client/jobpostreview/contract-detail',params:{pid:this.job_id,uid:this.user_id}});
    },
    // this fun is for to calculate rating
    getSkillcount(_i,_v){
      if (_i == 'skill') {
        this.submitReview.skills = _v
      } else if(_i == 'quality') {
        this.submitReview.quality_reqirement = _v
      } else if(_i == 'avaibility') {
        this.submitReview.avaibility = _v
      } else if(_i == 'deadline') {
        this.submitReview.reasonable_deadline = _v
      } else if(_i == 'communication') {
        this.submitReview.communication = _v
      } else if(_i == 'cooperation') {
        this.submitReview.cooperation = _v
      }
    },
    // this fun is for to check recommendation
    checkRecommendedVal(_v){
      this.submitReview.client_recommended=_v;
      if(_v >= 5){
        this.dislike_reasonhide=false;
        this.submitReview.dislike_reason=[];
      }else{
        this.dislike_reasonhide=true;
      }
    },
    // this fun is for to get end contract list
    async getendcontractReason(){
      var data = await this.genericAPIPOSTRequest({
          requestUrl: "endcontractReason",
          params: {},
      });
      if(data){
          this.reason = data;
      }
    },
    // this fun is for to get contractDetails
    async getContractdetails(){
      var userDetails = await this.genericAPIPOSTRequest({
            requestUrl: "user/getUserDetails",
            params: {"user_id":this.user_id},
        });
        if(userDetails){
          this.data.userDetails = userDetails;
        }
        var GetJobDetails = await this.genericAPIPOSTRequest({
            requestUrl: "getJobDetails_new",
            params: {'poid':this.job_id},
        });
        if(GetJobDetails){
            this.data.jobDetails = GetJobDetails[0];
            var proposalDetails = await this.genericAPIPOSTRequest({
                requestUrl: "getProposalDetail",
                params: {"user_id":this.user_id,"job_id":this.data.jobDetails.jobs_id},
            });
            if(proposalDetails){
              this.data.proposalDetails = proposalDetails;
              // if(this.data.jobDetails.application_status == 6){
                var checkfeedback = await this.genericAPIPOSTRequest({
                  requestUrl: "checkfeedbackGiven",
                  params: {'job_id':this.data.jobDetails.jobs_id},
              });
              if(checkfeedback!=""){
                this.$router.push({name:'ClientContracts',path:'client/all-contracts'}).href;
              }
            // }
            }else{
              this.$router.push({name:'ClientContracts',path:'client/all-contracts'}).href;
            }
            
            
        }
        // var userDetails = await this.genericAPIPOSTRequest({
        //     requestUrl: "user/getUserDetails",
        //     params: {user_id:this.data.jobDetails.client_id},
        // });
        // if(userDetails){
        //   this.data.userDetails = userDetails;
        // }
    },
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
  .br-20{border-radius: 20px;}
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fw-600{font-weight:600;}
  .custom-br{border-radius:20px 20px 0 0!important;}
  .custom-select{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 14px;line-height: 18px;background: #FFFFFF;border: 1px solid #CECECE!important;border-radius: 6px!important;margin-top: 6px!important;padding: 8px 12px!important;}
  label{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 14px;line-height: 18px;color: #000000;}
  .custom-radio{display:flex;align-items:center;margin-bottom:15px;}
  .custom-radio input{margin-right:5px;}
  .custom-radio label{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;color: #000000;}
  .color-orange{color:#FF8E3C;}
  .color-muted{color:#a6a6a6;}
  .score-count{font-style: normal;font-weight: 700;font-size: 20px;line-height: 30px;color: #000000;}
  .feedback-wrap .card-body{padding:0px;}
  .mb-50{margin-bottom:50px;}
  .modal-header{text-align:center;display: block!important;}
  .modal-header .modal-title{font-family: 'Source Sans Pro';font-style: normal;font-weight: 700!important;font-size: 24px;line-height: 25px;text-align: left;color: #000000;}
  .modal-header .close{position: absolute;right: -20px;top: -33px;color: #fff;font-size: 34px;font-weight: 500;}
  #end-contract .modal-body{text-align:center;}
  #end-contract .modal-body svg{text-align:center;margin:0 auto;}
  .modal-body h4{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 22px;line-height: 43px;text-transform: capitalize;color: #000000;}
  #end-contract .modal-body p{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 16px;line-height: 20px;text-align: center;text-transform: capitalize;color: #000000;}
  #end-contract .modal-body{padding:60px 20px!important;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  .fz-30{font-size:26px!important;}
  .recommendation-wrap .radio-label-vertical-wrapper {margin-top: 25px;position: relative;display: inline-block;}
  .recommendation-wrap .radio-label-vertical-wrapper:before {content: ' ';display: block;width: 100%;height: 30px;position: absolute;bottom: 0;}
  .recommendation-wrap .radio-label-vertical-wrapper label:not(.radio-label-vertical) {display: block;width: 100%;}
  .recommendation-wrap .radio-label-vertical {position: relative;display: inline-block;vertical-align: middle;padding: 0 20px;text-align: center;}.recommendation-wrap .radio-label-vertical input {position: absolute;bottom: 28px;left: 50%;margin-left: -6px;display: block;cursor: pointer;}

  .recommend-wrap {
    width: 90%;
    max-width: 500px;
  }
  .recommend-wrap #form-title {
    margin-top: 0;
    font-weight: 400;
    text-align: center;
  }
  .recommend-wrap #debt-amount-slider {
    display: flex;
    flex-direction: row;
    align-content: stretch;
    position: relative;
    width: 100%;
    height: 50px;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .recommend-wrap #debt-amount-slider input, .recommend-wrap #debt-amount-slider label {
    box-sizing: border-box;
    flex: 1;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    cursor: pointer;
  }
  .recommend-wrap #debt-amount-slider label {
    display: inline-block;
    position: relative;
    width: 20%;
    height: 100%;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .recommend-wrap #debt-amount-slider label::before {
    content: attr(data-debt-amount);
    position: absolute;
    left: 50%;
    padding-top: 10px;
    transform: translate(-50%, 45px);
    font-size: 14px;
    letter-spacing: 0.4px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0.85;
    transition: all 0.15s ease-in-out;
  }
  .recommend-wrap #debt-amount-slider label::after {
    content: " ";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid #F2613B;
    background: #fff;
    border-radius: 50%;
    pointer-events: none;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    z-index: 1;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }
  .recommend-wrap #debt-amount-slider label:hover::after {
    transform: translate(-50%, -50%) scale(1.25);
  }
  .recommend-wrap #debt-amount-slider input {
    display: none;
  }
  .recommend-wrap #debt-amount-slider input:checked + label::before {
    font-weight: 800;
    opacity: 1;
  }
  .recommend-wrap #debt-amount-slider input:checked + label::after {
    border-width: 2px;
    
  }
  .recommend-wrap #debt-amount-slider input:checked ~ #debt-amount-pos {
    opacity: 1;
  }
  .recommend-wrap #debt-amount-slider input:checked:nth-child(1) ~ #debt-amount-pos {
    left: 10%;
  }
  .recommend-wrap #debt-amount-slider input:checked:nth-child(3) ~ #debt-amount-pos {
    left: 30%;
  }
  .recommend-wrap #debt-amount-slider input:checked:nth-child(5) ~ #debt-amount-pos {
    left: 50%;
  }
  .recommend-wrap #debt-amount-slider input:checked:nth-child(7) ~ #debt-amount-pos {
    left: 70%;
  }
  .recommend-wrap #debt-amount-slider input:checked:nth-child(9) ~ #debt-amount-pos {
    left: 90%;
  }
  .recommend-wrap #debt-amount-slider #debt-amount-pos {
    display: block;
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background: #F2613B;
    border-radius: 50%;
    transition: all 0.15s ease-in-out;
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
    opacity: 0;
    z-index: 2;
  }
  .recommend-wrap:valid #debt-amount-slider input + label::before {
    transform: translate(-50%, 45px) scale(0.9);
    transition: all 0.15s linear;
    
  }
  .recommend-wrap:valid #debt-amount-slider input:checked + label::before {
    transform: translate(-50%, 45px) scale(1.1);
    transition: all 0.15s linear;
  }
  .recommend-wrap input ~ label:before{border:0px;}
  
  .radios {
	width: 500px;
}
.radios .radio-wrap {
	text-align: center;
	position: relative;
	width: 10%;
	height: 60px;
	display: inline-block;
	float: left;
}
.radios .radio-wrap .radio-label-fake {
	color: #333;
	font-weight: bold;
}
.radios .radio-wrap > input {
	position: relative;
	top: 5px;
}
.radios .radio-wrap > label {
	width: 20px;
	height: 20px;
	background: #FFF;
	border: 1px solid #F2613B;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,0%);
	cursor: pointer;
}
.radios .radio-wrap > label::before {
	content: '';
	display: block;
	width: 12px;
	height: 12px;
	background: transparent;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.radios .radio-wrap input[type="radio"] {
	opacity: 0;
}
.radios .radio-wrap input[type="radio"]:checked + label::before {
	background: #F2613B;
}
.radios .radio-wrap input ~ label:before{
  border: 1px solid transparent;
}

#full-stars-example-two .rating-group {
  display: inline-flex;
}
#full-stars-example-two .rating__icon {
  pointer-events: none;
}
#full-stars-example-two .rating__input {
  position: absolute !important;
  left: -9999px !important;
}
#full-stars-example-two .rating__input--none {
  display: none;
}
#full-stars-example-two .rating__label {
  cursor: pointer;
  padding: 0 0.1em;
  font-size: 1.5rem;
}
#full-stars-example-two .rating__icon--star {
  color: orange;
}
#full-stars-example-two .rating__input:checked ~ .rating__label .rating__icon--star {
  color: #ddd;
}
#full-stars-example-two .rating-group:hover .rating__label .rating__icon--star {
  color: orange;
}
#full-stars-example-two .rating__input:hover ~ .rating__label .rating__icon--star {
  color: #ddd;
}
#full-stars-example-two input ~ label:before{
  opacity:0;
      position: absolute;
}
</style>

