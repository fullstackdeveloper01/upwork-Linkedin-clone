<template>
    <b-container>
        <div class="msgdetails mt-100">
            <div class="px-3 py-2">
                <b-card-group deck>
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                        <b-row>
                            <b-col lg="12" xl="12" sm="12" class="p-0">
                                <div class="bordered">
                                    <div class="d-flex align-items-start py-4 px-4">
                                        <div class="d-flex align-items-center text-left">
                                            <div class="img-wrapper mr-3">
                                                <img :src="messageData.userDetails.profile_picture_path_url" class="img-fluid" />
                                            </div>
                                            <div class="content ml-2">
                                                <h4 class="fz-20 fw-600 text-black mr-2 mb-0">
                                                    {{messageData.userDetails.first_name }} {{ (messageData.userDetails.last_name!=''&& messageData.userDetails.last_name!=null) ? messageData.userDetails.last_name.slice(0,1) :'' }}.
                                                </h4>
                                                <ul class="mb-0 d-flex align-items-center minus-margin-37">
                                                    <li>
                                                        <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M11.9999 5.28027C8.37764 5.28027 5.40918 8.40136 5.40918 12.2748C5.40918 14.3585 6.46842 16.8771 8.23787 19.6617C8.85278 20.6294 9.51552 21.5658 10.1854 22.4404C10.6054 22.9889 10.952 23.4148 11.1785 23.6801C11.6242 24.202 12.3759 24.2018 12.8214 23.68C13.0479 23.4148 13.3945 22.9889 13.8145 22.4404C14.4844 21.5658 15.1471 20.6294 15.762 19.6617C17.5315 16.8771 18.5907 14.3585 18.5907 12.2748C18.5906 8.40135 15.6222 5.28027 11.9999 5.28027ZM9.18859 18.847C7.55932 16.283 6.59072 13.9799 6.59072 12.2748C6.59072 9.19124 9.00544 6.65236 11.9999 6.65236C14.9944 6.65236 17.4091 9.19123 17.4092 12.2748C17.4092 13.9799 16.4406 16.283 14.8113 18.847C13.7963 20.4444 12.7477 21.8156 11.9999 22.6934C11.2521 21.8155 10.2036 20.4443 9.18859 18.847ZM12 14.7608C10.7673 14.7608 9.77138 13.5702 9.77138 12.1142C9.77138 10.6582 10.7673 9.4677 12 9.4677C13.2326 9.4677 14.2285 10.6582 14.2285 12.1142C14.2285 13.5703 13.2326 14.7608 12 14.7608ZM12 13.5663C12.6578 13.5663 13.1999 12.9182 13.1999 12.1142C13.1999 11.3103 12.6578 10.6621 12 10.6621C11.3421 10.6621 10.7999 11.3103 10.7999 12.1142C10.7999 12.9182 11.3421 13.5663 12 13.5663Z"
                                                                fill="#999999"
                                                            />
                                                        </svg>
                                                    </li>
                                                    <li>{{messageData.userDetails.city_name+', '+messageData.userDetails.state_name+', '+messageData.userDetails.country_name }}<!-- - 10:52 am local time--></li>
                                                    <li class="d-flex align-items-center ml-2">
                                                        <ClockSmallIcon />
                                                        <span class="ml-1">{{timeClock}}</span>
                                                    </li>
                                                </ul>
                                                <div class="weightage-wrap">
                                                    <h6 class="mb-0">{{messageData.userDetails.jobSuccessRate}}%</h6>
                                                    <b-progress variant="success" :striped="striped" height="10px" :value="messageData.userDetails.jobSuccessRate" :max="max" animated></b-progress>
                                                    <!-- <span class="mb-0 text-success" v-if="messageData.userDetails.profileSucessRate < 20">Incomplete</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 50">Success</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 75">Success</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 90">Success</span>
                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate == 100">Completed</span> -->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-auto d-flex align-items-center" v-if='$store.state.currentUserData!=""'>
                                            <b-dropdown size="md" right class="mr-2 mt-0 t-0" variant="outline-secondary" toggle-class="text-decoration-none" no-caret>
                                                <template #button-content>
                                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                </template>
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <div class="d-flex align-items-center" v-b-modal.notemodal>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals mr-2" viewBox="0 0 16 16">
                                                            <path
                                                                d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"
                                                            />
                                                            <path
                                                                d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"
                                                            />
                                                        </svg>
                                                        Add notes
                                                    </div>
                                                </b-dropdown-item>
                                            </b-dropdown>
                                            <!-- <span v-if="messageData.proposalDetails.application_status !=2 && messageData.proposalDetails.application_status > 4">
                                    <b-button class="mr-2 btn-outline-theme" v-if="messageData.proposalDetails.application_status != 3" @click="proposalLike(3)">Shortlist</b-button>
                                    <b-button class="mr-2 btn-outline-theme" v-else>Shortlisted</b-button>
                                </span> -->
                                            <!-- <b-button class="mr-2 btn-outline-theme" @click="proposalLike(3)">Shortlist</b-button> -->
                                            <!-- <a class="mr-2 btn-theme" target="_blank" :href="$router.resolve({name:'hiredetails',path:'/client/hire-details',params:{ pid:job_id,uid:messageData.userDetails.user_id}})">Hire Freelancer</a> -->
                                            <!-- <b-button variant="outline-secondary"><i class="fa fa-heart-o" aria-hidden="true"></i></b-button> -->
                                            <b-button
                                                variant="outline-secondary"
                                                :class="(messageData.favorite.length>0)?'saved-btn':''"
                                                :id="'favorite-'+messageData.userDetails.user_id"
                                                @click="addFavorite(messageData.userDetails.user_id)"
                                            >
                                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                                            </b-button>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-card-group>
                <b-card-group deck>
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white">
                        <b-row>
                            <b-col lg="4" xl="4" sm="12" class="p-0">
                                <div class="border-bottom text-left py-4 px-4 d-flex align-items-center justify-content-space-between">
                                    <div>
                                        <h6><b>${{totalEarning}}</b></h6>
                                        <p class="fz-14">Total Earnings</p>
                                    </div>
                                    <div>
                                        <h6><b>{{messageData.jobHistory.length}}</b></h6>
                                        <p class="fz-14">Project Completed</p>
                                    </div>
                                </div>
                                <div class="border-bottom text-left py-4 px-4">
                                    <h5><b>Hours per week</b></h5>
                                    <p class="mb-4">
                                        {{messageData.userDetails.availabilityName}}<br />
                                        <!--<i class="fa fa-chevron-left fz-14" aria-hidden="true"></i> 24 hrs response time-->
                                    </p>

                                    <h5><b>Languages</b></h5>
                                    <p class="fz-18 fw-400 text-muted" v-for="(lang,index) in messageData.userDetails.language_arr" :key="'lang'+index">
                                        {{lang}} : {{_proficiency(messageData.userDetails.proficiency_id[index])}}
                                    </p>

                                    <h5><b>Verification</b></h5>
                                    <p class="mb-4"><b>ID:</b> Verified</p>

                                    <h5 v-if="messageData.education.length >0"><b>Education</b></h5>
                                    <div class="edu-wrap mb-4" v-for="(education,index) in messageData.education" :key="'edu'+index">
                                        <p class="mb-1"><b>{{education.university_name}}</b></p>
                                        <p class="mb-0">{{education.course_name}}({{education.start_year+'-'+education.end_year}})</p>
                                        <vue-read-more-smooth :lines="2" class="mt-2">
                                            <p class="mb-0">
                                                {{education.education_description}}
                                            </p>
                                        </vue-read-more-smooth>
                                    </div>

                                    <AssociatedWith :associate="messageData.userDetails.associated"></AssociatedWith>
                                </div>
                            </b-col>
                            <b-col lg="8" xl="8" sm="12" class="p-0">
                                <div class="border-left border-bottom text-left py-4 px-4">
                                    <div class="d-md-flex align-items-center">
                                        <h4 class="mb-0 fz-24 fw-500 text-black w-80"><b>{{messageData.userDetails.tagline}}</b></h4>
                                        <div class="ml-auto">
                                            <h5 class="mb-0 fz-24 fw-500 text-black">${{messageData.userDetails.hourly_rate}}/Day</h5>
                                        </div>
                                    </div>
                                    <span class="text-muted" v-if="messageData.userDetails.mainCategory_Name!=null">Specialization in {{messageData.userDetails.mainCategory_Name}}</span>
                                    <vue-read-more-smooth :lines="7" class="mt-2">
                                        <p class="mb-2" v-html="getHtmlContent(messageData.userDetails.about_self_desc)"></p>
                                    </vue-read-more-smooth>
                                </div>
                                <workHistory :messageData="messageData"></workHistory>
                                <div class="border-left border-bottom text-left py-4 px-4" v-if="messageData.userDetails.allSkill_name.length > 0">
                                    <h5 class="mr-2">Skills</h5>
                                    <div class="tags-wrap">
                                        <ul v-if="messageData.userDetails.allSkill_name.length > 0">
                                            <li v-for="(catname,index) in messageData.userDetails.allSkill_name" :key="'skill'+index">
                                                <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                                                    <span class="mr-2">{{catname.name}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-card-group>
                <b-card-group deck class="mt-4" v-if="messageData.jobHistory.length > 0">
                    <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="bg-white p-0">
                        <template #header>
                            <div class="bordered border-right-none py-4 px-4">
                                <h4 class="mb-0 fz-24 fw-500 text-black text-left"><b>Employment History ({{messageData.jobHistory.length}})</b></h4>
                            </div>
                        </template>
                        <b-row>
                            <b-col lg="12" xl="12" sm="12" class="p-0">
                                <div class="border-left text-left py-4 px-4">
                                    <span v-for="(history,index) in messageData.jobHistory" :key="'jobs'+index">
                                        <h5>{{history.job_title }}</h5>
                                        <h6>{{history.from_date+' - '+history.to_date }}</h6>
                                        <hr />
                                    </span>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-card-group>
                <!-- Certification Start -->
                <CertificationList :getUserCertificationListArr="getUserCertificationListArr"></CertificationList>
                <!-- Industry Expersince Start -->
                <WorkExprincelist :workExprinceList="workExprinceList"></WorkExprincelist>
            </div>
        </div>
        <!-- flagging model -->
        <b-modal id="flagging-modal" size="lg" title="Why are you flagging this?" hide-footer no-close-on-backdrop>
            <form @submit.prevent="submitFlaggingData">
                <b-form-group class="mb-3">
                    <b-form-radio-group
                        class="fz-16"
                        :options="flaggingoptions"
                        value-field="id"
                        text-field="title"
                        name="flavour-2a"
                        stacked
                        v-model="addFlagging.flagging_id"
                        :error-messages="flagflagging_id"
                        @input="$v.addFlagging.flagging_id.$touch()"
                        @blur="$v.addFlagging.flagging_id.$touch()"
                    ></b-form-radio-group>
                    <div class="error" v-if="flagflagging_id[0]">{{flagflagging_id[0]}}</div>
                </b-form-group>

                <label class="fz-18 fw-600 mb-2">Please tell us more</label>
                <b-form-textarea
                    id="textarea"
                    placeholder="Share additional details"
                    rows="6"
                    max-rows="8"
                    v-model="addFlagging.report_content"
                    :error-messages="flagreport_content"
                    @input="$v.addFlagging.report_content.$touch()"
                    @blur="$v.addFlagging.report_content.$touch()"
                ></b-form-textarea>
                <div class="error" v-if="flagreport_content[0]">{{flagreport_content[0]}}</div>

                <hr />
                <div class="text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('flagging-modal');">Cancel</a>
                    <b-button type="buttton" class="btn btn-theme">Submit</b-button>
                </div>
            </form>
        </b-modal>
        <!-- Decline Modal -->
        <b-modal id="decline-modal" size="lg" title="Decline" hide-footer no-close-on-backdrop>
            <h4 class="fz-18 text-black text-capitali">Select Decline to remove the freelancer from consideration for this job. Optionally, you can include a message to let the freelancer know why you're not interested.</h4>
            <form @submit.prevent="submitDeclineData">
                <label class="fz-18 fw-600 mb-2">Reason</label><br />
                <b-form-select
                    v-model="addDecline.decline_reason_id"
                    :options="declineReason"
                    text-field="title"
                    value-field="id"
                    :error-messages="declineReason_id"
                    @input="$v.addDecline.decline_reason_id.$touch()"
                    @blur="$v.addDecline.decline_reason_id.$touch()"
                    class="mb-4"
                ></b-form-select>
                <div class="error" v-if="declineReason_id[0]">{{declineReason_id[0]}}</div>

                <br />
                <label class="fz-18 fw-600 mb-2">Message (Optional)</label>
                <b-form-textarea
                    v-model="addDecline.decline_reason"
                    id="textarea"
                    rows="6"
                    max-rows="8"
                    :error-messages="declineReason_message"
                    @input="$v.addDecline.decline_reason.$touch()"
                    @blur="$v.addDecline.decline_reason.$touch()"
                ></b-form-textarea>
                <div class="error" v-if="declineReason_message[0]">{{declineReason_message[0]}}</div>

                <hr />
                <div class="text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('decline-modal');">Cancel</a>
                    <b-button type="buttton" class="btn btn-theme">Decline</b-button>
                </div>
            </form>
        </b-modal>
        <!-- note model -->
        <b-modal id="notemodal" size="lg" title="Note about" hide-footer no-close-on-backdrop>
            <form @submit.prevent="submitNoteData">
                <label class="fz-18 fw-600 mb-2">Note</label><br />
                <b-form-textarea
                    id="textarea"
                    rows="6"
                    v-model="messageData.noteData.note"
                    max-rows="8"
                    class="mb-2"
                    :error-messages="notedescription"
                    @input="$v.messageData.noteData.note.$touch()"
                    @blur="$v.messageData.noteData.note.$touch()"
                ></b-form-textarea>
                <div class="error" v-if="notedescription[0]">{{notedescription[0]}}</div>
                <span><i class="fa fa-lock" aria-hidden="true"></i> The talent won't see anything you put here.</span><br />
                <label class="fz-18 fw-600 mb-2 mt-4">Soft Skills</label><br />
                <div class="tags-wrap mb-1 inline-block">
                    <div class="inline-block mr-2 pos-rel" v-for="(soft,index) in SoftSkill" :key="'soft'+index">
                        <input type="checkbox" class="pos-absolute" v-model="messageData.noteData.skill" :id="'control_'+index" name="select" :value="soft.id" search />
                        <label :for="'control_'+index" class="tags-label">
                            <h4 class="mb-0 fw-600">{{soft.title}}</h4>
                        </label>
                    </div>
                </div>
                <br />
                <label class="fz-18 fw-600 mb-2 mt-2" for="tags-pills">Custom Tags</label><br />
                <b-form-tags v-model="messageData.noteData.tags" input-id="tags-pills" tag-variant="primary" tag-pills separator="" placeholder="Start typing" remove-on-delete></b-form-tags>
                <hr />
                <div class="text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-theme mr-2" @click="$bvModal.hide('notemodal');">Cancel</a>
                    <b-button type="buttton" class="btn btn-theme">Save Note</b-button>
                </div>
            </form>
        </b-modal>
    </b-container>
</template>
<script>
    import VueReadMoreSmooth from "vue-read-more-smooth";
    import { mapActions } from "vuex";
    import { validationMixin } from "vuelidate";
    import { required } from "vuelidate/lib/validators";
    import ClockSmallIcon from "../../components/icons/ClockSmall_Icon.vue";
    import workHistory from "@/components/public-profile/work-history.vue";
    import CertificationList from "@/components/public-profile/public-certification.vue";
    import WorkExprincelist from "@/components/public-profile/public-workExprinceList.vue";
    import AssociatedWith from "@/components/public-profile/associated-with.vue";
    
    export default {
        mixins: [validationMixin],
        validations: {
            addFlagging: {
                flagging_id: { required },
                report_content: { required },
            },
            addDecline: {
                decline_reason_id: { required },
                decline_reason: { required },
            },
            messageData: {
                noteData: {
                    note: { required },
                },
            },
        },
        components: {
            VueReadMoreSmooth,
            ClockSmallIcon,
            workHistory,
            CertificationList,
            WorkExprincelist,
            AssociatedWith
        },
        // props:['messageData','jobtitle','proposal','jobId'],
        data() {
            return {
                getUserCertificationListArr: [],
                timeClock: "",
                value: new Date().toISOString().substr(0, 10),
                striped: true,
                max: 0,
                job_id: "",
                user_id: "",
                messageData: {
                    jobsuccess:{
                        percentage:'',
                    },
                    jobDetails: "",
                    userDetails: {
                        allSkill_name:[]
                    },
                    proposalDetails: "",
                    education: [],
                    similarjobHistory: [],
                    jobUnderprocess: [],
                    jobHistory: [],
                    favorite: "",
                    noteData: {
                        note: "",
                        skill: [],
                        tags: [],
                    },
                },
                jobtitle: "",
                jobId: "",
                flaggingoptions: [],
                declineReason: [],
                addFlagging: {
                    flagging_id: "",
                    report_content: "",
                },
                addDecline: {
                    decline_reason_id: "",
                    decline_reason: "",
                    application_status: 8,
                },
                SoftSkill: [],
                workExprinceList: [],
            };
        },
        methods: {
            ...mapActions(["genericAPIPOSTRequest"]),
            async getWorkExprince() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getWorkExprince",
                    params: { user_id: this.user_id },
                });
                this.workExprinceList = res;
            },
            async getUserCertificationList() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserCertificationList",
                    params: { user_id: this.user_id },
                });
                this.getUserCertificationListArr = res;
            },
            async getCertificationType(index) {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getCertificationType/" + this.certification.certification_list[index].certification_id,
                    params: {},
                });
                this.$set(this.certificatetype, index, res);
            },
            startTime() {
                var timezone_name = this.messageData.userDetails.timezone_name;
                if (timezone_name != "" && timezone_name != undefined) {
                    let options = {
                            timeZone: timezone_name,
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                        },
                        formatter = new Intl.DateTimeFormat([], options);
                    this.timeClock = formatter.format(new Date());
                } else {
                    const today = new Date();
                    let h = today.getHours();
                    let m = today.getMinutes();
                    let s = today.getSeconds();
                    m = this.checkTime(m);
                    s = this.checkTime(s);
                    this.timeClock = h + ":" + m + ":" + s;
                }
                setTimeout(this.startTime, 1000);
            },
            checkTime(i) {
                if (i < 10) {
                    i = "0" + i;
                } // add zero in front of numbers < 10
                return i;
            },
            // this fun is for to add note for user
            async submitNoteData() {
                this.$v.messageData.noteData.$touch();
                if (!this.$v.messageData.noteData.$invalid) {
                    this.messageData.noteData.to_user_id = this.messageData.userDetails.user_id;
                    var res = await this.genericAPIPOSTRequest({
                        requestUrl: "addNote",
                        params: this.messageData.noteData,
                    });
                    if (res) {
                        this.$toastr.s("Note Added Successfully");
                        this.getNotedata(this.messageData.userDetails.user_id);
                        this.$bvModal.hide("notemodal");
                    }
                }
            },
            async getNotedata(_v) {
                var response = await this.genericAPIPOSTRequest({
                    requestUrl: "getNote",
                    params: { to_user_id: _v },
                });
                if (response) {
                    this.messageData.noteData = response;
                }
            },
            // this fun is for to add flag on user
            async submitDeclineData() {
                this.$v.addDecline.$touch();
                if (!this.$v.addDecline.$invalid) {
                    this.addDecline.user_id = this.messageData.userDetails.user_id;
                    this.addDecline.jobs_id = this.messageData.jobDetails.jobs_id;
                    var res = await this.genericAPIPOSTRequest({
                        requestUrl: "updateJobApply",
                        params: this.addDecline,
                    });
                    if (res) {
                        this.$toastr.s("Proposal Decline Done");
                        this.$bvModal.hide("decline-modal");
                    }
                }
            },
            // this fun is for to add flag on user
            async submitFlaggingData() {
                this.$v.addFlagging.$touch();
                if (!this.$v.addFlagging.$invalid) {
                    this.addFlagging.report_user_id = this.messageData.userDetails.user_id;
                    var res = await this.genericAPIPOSTRequest({
                        requestUrl: "addUserflag",
                        params: this.addFlagging,
                    });
                    if (res) {
                        this.$toastr.s("Flag as inappropriate Done");
                        this.$bvModal.hide("flagging-modal");
                    }
                }
            },
            //this fun is for to get flagging reason
            async getdeclineReason() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "getdeclineReason",
                    params: {'type':'client'},
                });
                if (res) {
                    this.declineReason = res;
                }
            },
            //this fun is for to get flagging reason
            async getflagging() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "job/getflagginglist",
                    params: {},
                });
                if (res) {
                    this.flaggingoptions = res;
                }
            },
            // this fun is for to add to favorite
            async addFavorite(_i) {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "addremovefavorite",
                    params: {
                        favorite_user_id: _i,
                    },
                });
                if (res == "added") {
                    document.getElementById("favorite-" + _i).classList.add("saved-btn");
                    this.$toastr.s("Added to Favorite");
                } else if (res == "remove") {
                    document.getElementById("favorite-" + _i).classList.remove("saved-btn");
                    this.$toastr.s("Remove From Favorite");
                }
            },
            // this fun is for to get message page details
            async messageModel() {
                var userDetails = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserDetails",
                    params: { user_id: this.user_id },
                });
                if (userDetails) {
                    this.messageData.userDetails = userDetails;
                    // this fun is for to get details of
                    var res = await this.genericAPIPOSTRequest({
                        requestUrl: "associateWithagency",
                        params: {
                            'user_id': this.user_id,
                        },
                    });
                    if(res){
                        this.messageData.userDetails.associated = res;
                    }
                }
                var similarjobHistory = await this.genericAPIPOSTRequest({
                    requestUrl: "getJobdataList",
                    params: { user_id: this.user_id, filter: 6, search: { category: this.messageData.jobDetails.topSkill } },
                });
                if (similarjobHistory) {
                    this.messageData.similarjobHistory = similarjobHistory;
                }
                var jobUnderprocess = await this.genericAPIPOSTRequest({
                    requestUrl: "getJobdataList",
                    params: { user_id: this.user_id, filter: 2 },
                });
                if (jobUnderprocess) {
                    this.messageData.jobUnderprocess = jobUnderprocess;
                }
                var jobHistory = await this.genericAPIPOSTRequest({
                    requestUrl: "getJobdataList",
                    params: { user_id: this.user_id, filter: 6 },
                });
                if (jobHistory) {
                    this.messageData.jobHistory = jobHistory;
                }
                var education = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserEducation",
                    params: { user_id: this.user_id },
                });
                if (education) {
                    this.messageData.education = education;
                }
                var favorite = await this.genericAPIPOSTRequest({
                    requestUrl: "getfavoritelist",
                    params: { favorite_user_id: this.user_id },
                });
                if (favorite) {
                    this.messageData.favorite = favorite;
                }

                var note = await this.genericAPIPOSTRequest({
                    requestUrl: "getNote",
                    params: { to_user_id: this.user_id },
                });
                if (note) {
                    this.messageData.noteData = note;
                }

                var jobsuccess = await this.genericAPIPOSTRequest({
                    requestUrl: "getJobsuccessrate",
                    params: {
                        user_id: this.user_id,
                        user_type: "freelancer",
                    },
                });
                if (jobsuccess) {
                    this.messageData.jobsuccess = jobsuccess;
                }
            },
            //this fun is for to get Soft Skill
            async getSoftSkill() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "getSoftSkill",
                    params: {},
                });
                if (res) {
                    this.SoftSkill = res;
                }
            },
            //this fun is for to like the post
            async proposalLike(_i) {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "job/addHire",
                    params: {
                        jobData: {
                            user_id: this.messageData.userDetails.user_id,
                            jobs_id: this.jobId,
                        },
                        action: _i,
                    },
                });
                if (res) {
                    this.messageData.proposalDetails.application_status = 3;
                    //   this.$refs.mysidebar.hide();
                    this.$toastr.s("Proposal Shortlisted Successfully");
                } else {
                    this.$toastr.e("Proposal Like Unsuccessfull");
                }
            },

            //this fun is for to dislike the post
            async proposalDislike(_v, _i) {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "job/addHire",
                    params: { jobData: _v, action: _i },
                });
                if (res) {
                    this.$toastr.s("Proposal Archived Successfully");
                } else {
                    this.$toastr.e("Proposal DisLike Unsuccessfull");
                }
            },
        },
        computed: {
            flagflagging_id() {
                const errors = [];
                if (!this.$v.addFlagging.flagging_id.$dirty) return errors;
                !this.$v.addFlagging.flagging_id.required && errors.push("Please Select Flag is required");
                return errors;
            },
            flagreport_content() {
                const errors = [];
                if (!this.$v.addFlagging.report_content.$dirty) return errors;
                !this.$v.addFlagging.report_content.required && errors.push("Description is required");
                return errors;
            },
            declineReason_id() {
                const errors = [];
                if (!this.$v.addDecline.decline_reason_id.$dirty) return errors;
                !this.$v.addDecline.decline_reason_id.required && errors.push("Please Select Reason is required");
                return errors;
            },
            declineReason_message() {
                const errors = [];
                if (!this.$v.addDecline.decline_reason.$dirty) return errors;
                !this.$v.addDecline.decline_reason.required && errors.push("Message is required");
                return errors;
            },
            notedescription() {
                const errors = [];
                if (!this.$v.messageData.noteData.note.$dirty) return errors;
                !this.$v.messageData.noteData.note.required && errors.push("Note is required");
                return errors;
            },
            // function to total burget amount
            totalEarning() {
                var amount = 0;
                this.messageData.jobHistory.map((data) => {
                    amount += parseInt(data.cost);
                });
                return amount;
            },
        },
        mounted() {
            this.user_id = this.$route.params.uid;
            this.messageModel();
            //this fun is for to get flagging reason
            this.getflagging();
            //this fun is for to get decline reason
            this.getdeclineReason();
            //this fun is for to get Soft Skill
            this.getSoftSkill();
            this.startTime();
            this.getUserCertificationList();
            this.getWorkExprince();
        },
    };
</script>
<style>
    .msgdetails .card {
        border: 1px solid rgba(0, 0, 0, 0.125) !important;
    }
    .msgdetails .card-body {
        padding: 12px;
    }
    .msgdetails .w-80 {
        width: 80% !important;
    }
    .msgdetails .tabs-wrapper {
        min-height: 327px;
    }
    .msgdetails .tags-wrap ul {
        margin-left: -32px;
    }
    .msgdetails .img-wrapper {
        width: 145px;
        height: 150px;
        border-radius: 50%;
        position: relative;
        box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
        padding: 5px;
    }
    .msgdetails .img-wrapper img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .msgdetails .img-wrapper .dot {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: #48c048;
        border-radius: 50%;
        top: 5px;
        right: 22px;
        border: 2px solid #d0caca;
    }
    .msgdetails .img-wrap {
        width: 10%;
    }
    .msgdetails .minus-margin {
        margin-left: -32px;
    }
    .justify-content-space-around {
        justify-content: space-around;
    }
    .width-80 {
        width: 80%;
    }
    .t-0 {
        top: 0px !important;
    }
    .t-0.dropdown ul {
        padding-left: 0px !important;
    }
    .custom-margin {
        margin-left: -32px;
    }
    .width-90 {
        width: 90%;
    }
    .work-history-wrapper .nav-tabs .nav-link {
        color: #666666;
        border: 0;
    }
    .work-history-wrapper .nav-tabs .nav-link.active {
        color: #f2613d;
        border: 0;
        border-bottom: 2px solid #f2613d;
    }
    .work-history-wrapper .nav-tabs {
        border: 0px;
        margin-left: -32px;
    }
    #industry-modal .search-bar input {
        border: 0px !important;
    }
    #industry-modal .search-bar .tt-menu {
        border-radius: 4px !important;
        padding: 0px 0px !important;
    }
    #industry-modal .search-bar .tt-menu fieldset {
        padding: 0px !important;
    }
    #industry-modal .custom-control-label:before {
        display: none !important;
    }
    .minus-margin-37 {
        margin-left: -37px;
    }
    .progress {
        max-width: 150px;
    }
</style>