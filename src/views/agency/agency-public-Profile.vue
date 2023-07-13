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
                                        <div class="d-flex align-items-center text-left profile-wrap freelancer-wrap">
                                            <div class="img-wrapper mr-3 profile pos-rel">
                                                <span class="online"></span>
                                                <img :src="messageData.userDetails.profile_picture_path_url" class="img-fluid" />
                                            </div>
                                            <div class="content ml-2">
                                                <h4 class="fz-20 fw-600 text-black mr-2 mb-0">{{messageData.userDetails.company_settings.company_name}}</h4>
                                                <ul class="mb-0 d-flex align-items-center minus-margin-37">
                                                    <li>
                                                        <!-- <mapIcon></mapIcon> -->
                                                    </li>
                                                    <li>{{messageData.userDetails.city_name+', '+messageData.userDetails.state_name+', '+messageData.userDetails.country_name }}<!-- - 10:52 am local time--></li>
                                                    <li class="d-flex align-items-center ml-2">
                                                        <ClockSmallIcon />
                                                        <span class="ml-1">{{timeClock}}</span>
                                                    </li>
                                                </ul>
                                                <div class="weightage-wrap">
                                                    <h6 class="mb-0">{{messageData.userDetails.profileSucessRate}}%</h6>
                                                    <b-progress variant="success" :striped="striped" height="10px" :value="messageData.userDetails.profileSucessRate" :max="max" animated></b-progress>
                                                    <span class="mb-0 text-success" v-if="messageData.userDetails.profileSucessRate < 20">Incomplete</span>
                                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 50">Success</span>
                                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 75">Success</span>
                                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate < 90">Success</span>
                                                    <span class="mb-0 text-success" v-else-if="messageData.userDetails.profileSucessRate == 100">Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-auto d-flex align-items-center">
                                            <button type="button" class="btn btn-theme" target="_blank" @click="$router.push('/agency-profile')">Edit Profile</button>
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
                                <div class="border-bottom border-right text-left py-4 px-4 d-flex align-items-center justify-content-space-between">
                                    <div>
                                        <h6><b>${{totalEarning}}</b></h6>
                                        <p class="fz-14">Total Earnings</p>
                                    </div>
                                    <div>
                                        <h6><b>{{messageData.jobHistory.length}}</b></h6>
                                        <p class="fz-14">Project Completed</p>
                                    </div>
                                </div>
                                <div class="border-bottom border-right text-left py-4 px-4">
                                <h5><b>Hourly rate</b></h5>
                                <p class="mb-4" v-if="companySettingData.company_price_to!=''">${{companySettingData.company_price_from}} to {{companySettingData.company_price_to}} </p>
                                <p class="mb-4" v-if="companySettingData.company_price_to==''">${{companySettingData.company_price_from}}</p>
                                
                            <!-- 
                            <h5><b>Minimum project size</b></h5>
                            <p class="fz-18 fw-400 text-muted"  >
                                Small
                            </p>
                             
                            <h5><b>Member since</b></h5>
                            <p class="mb-4">Jan 20, 1970</p> -->

                                    <h5><b>Office locations</b></h5>

                                    <div class="px-3 pt-2 pb-2 office-locations-scroll">
                                        <b-list-group>
                                            <b-list-group-item class="p-0 mb-2 border-0">
                                                <div class="d-md-flex align-items-center mb-2" v-if="locationData.branch_primary!= undefined && locationData.branch_primary!=''">
                                                    <!-- <mapIcon></mapIcon> -->
                                                    <span class="mr-2 fz-18 fw-600 mb-0">{{(locationData.branch_primary.country_name!='')?locationData.branch_primary.country_name:''}}</span>
                                                </div>
                                                <p class="fz-18 fw-400 text-muted mb-2" v-if="locationData.branch_primary!= undefined && locationData.branch_primary!=''">
                                                    <span style="display: flex;">
                                                        {{locationData.branch_primary.state_name}}, {{locationData.branch_primary.city_name}}
                                                    </span>
                                                    {{locationData.branch_primary.zip_code}}
                                                    <br />
                                                    <span v-if="locationData.branch_primary.address!=''">
                                                        <read-more more-str="Read more" :text="locationData.branch_primary.address" link="#" less-str="Read less" :max-chars="50"></read-more>
                                                    </span>
                                                </p>
                                            </b-list-group-item>
                                            <span v-if="locationData.head != undefined && locationData.head.length > 0">
                                                <b-list-group-item class="p-0 mb-4 border-0" v-for="(loc,index) in locationData.head" :key="index">
                                                    <div class="d-md-flex align-items-center">
                                                        <span class="mr-2 fz-18 fw-600">
                                                            {{(loc.country_name!='')?loc.country_name:''}}
                                                        </span>
                                                    </div>
                                                    <p class="fz-18 fw-400 text-muted" v-if="loc!=''">
                                                        <span style="display: flex;">
                                                            <!-- <mapIcon></mapIcon> -->
                                                        </span>
                                                        {{loc.zip_code}}
                                                        <br />
                                                        <span v-if="loc.address!=''">
                                                        <read-more more-str="Read more" :text="loc.address" link="#" less-str="Read less" :max-chars="50"></read-more>
                                                         </span>
                                                    </p>
                                                    
                                                </b-list-group-item>
                                            </span>
                                        </b-list-group>
                                    </div>
                                </div>

                                <div class="border-bottom border-right text-left py-4 px-4">
                                    <h5><b>Company information </b></h5>
                                    <hr />

                                    <h5><b>Agency size </b></h5>
                                    <p class="fz-18 fw-400 text-muted">{{companySettingData.company_size}}<br /></p>

                                    <h5><b>Year founded</b></h5>
                                    <p class="fz-18 fw-400 text-muted">
                                        {{companySettingData.company_founded}}
                                    </p>

                                    <h5><b>Languages</b></h5>
                                    <p class="fz-18 fw-400 text-muted" v-for="(lang,index) in messageData.userDetails.language_arr" :key="index">
                                        {{lang}} : {{_proficiency(messageData.userDetails.proficiency_id[index])}}
                                    </p>
                                    <hr />
                                </div>
                            </b-col>
                            <b-col lg="8" xl="8" sm="12" class="p-0">
                                <div class="border-bottom text-left py-4 px-4">
                                    <div class="d-md-flex align-items-center">
                                        <h4 class="mb-0 fz-24 fw-500 text-black w-80"><b>{{messageData.userDetails.tagline}}</b></h4>
                                        <div class="ml-auto">
                                            <h5 class="mb-4" v-if="companySettingData.company_price_to!=''">${{companySettingData.company_price_from}} to {{companySettingData.company_price_to}} /Day</h5>
                                            <h5 class="mb-4" v-if="companySettingData.company_price_to==''">${{companySettingData.company_price_from}}/Day</h5>
                                        </div>
                                    </div>
                                    <span class="text-muted" v-if="messageData.userDetails.mainCategory_Name!=null">Specialization in {{messageData.userDetails.mainCategory_Name}}</span>
                                    <vue-read-more-smooth :lines="7" class="mt-2">
                                        <p class="mb-2" v-html="getHtmlContent(messageData.userDetails.about_self_desc)"></p>
                                    </vue-read-more-smooth>
                                </div>
                                <workHistory :messageData="messageData"></workHistory>
                                <!-- Skill Start -->
                                <div class="border-bottom text-left py-4 px-4" v-if="companySettingData.company_skills">
                                    <h5 class="mr-2">Skills</h5>
                                    <div class="tags-wrap">
                                        <ul v-if="companySettingData.company_skills.length > 0">
                                            <li v-for="(catname,index) in companySettingData.company_skills" :key="index">
                                                <a href="javascript:void(0);" class="d-flex align-items-center fz-14">
                                                    <span class="mr-2">{{catname.skill_name}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    
                                    </div>
                                </div>
                                <!-- Skill End -->

                                <!-- Service Start -->
                                <div v-if="serviceData.length > 0">
                                    <b-row>
                                        <b-col cols="12" class="px-4 py-4">
                                            <section class="card-section">
                                                <h4 class="mb-2 text-black fz-24 fw-500">
                                                    <b>Services</b>
                                                </h4>
                                                <b-list-group v-for="(ser,serI) in serviceData" :key="'cat'+serI" >

                                                    <b-list-group-item class="border d-flex align-items-center">
                                                        {{ser.role_name}}
                                                        <div class="ml-auto">
                                                            <i class="fa fa-chevron-down" v-b-toggle="`collapse1-${serI}`" ></i>
                                                        </div>
                                                    </b-list-group-item>
                                                    <b-collapse :id="'collapse1-'+serI" class="mt-2">
                                                        <b-card>
                                                            <p class="card-text">{{ser.description }}</p>
                                                        </b-card>
                                                    </b-collapse>
                                                </b-list-group>
                                                
                                            </section>
                                        </b-col>
                                    </b-row>
                                </div>
                                <!-- Service End -->
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
                                <div class="text-left py-4 px-4">
                                    <span v-for="(history,index) in messageData.jobHistory" :key="index">
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
     
                <AgencyProject editProject="0" />
            </div>
        </div>
    </b-container>
</template>
<script>
    import VueReadMoreSmooth from "vue-read-more-smooth";
    import { mapActions } from "vuex";
    import { validationMixin } from "vuelidate";
    import { required } from "vuelidate/lib/validators";
    import ClockSmallIcon from "../../components/icons/ClockSmall_Icon.vue";
    // import mapIcon from "../../components/icons/map_Icon.vue";
    import CertificationList from "@/components/public-profile/public-certification.vue";
    import workHistory from "@/components/public-profile/work-history.vue";
    import AgencyProject from "../../components/profile/agency-project.vue"; 

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
        },
        components: {
            VueReadMoreSmooth,
            ClockSmallIcon,
            workHistory,
            AgencyProject,
            CertificationList
            // mapIcon,
        },
        data() {
            return {
                companySettingData: [],
                locationData: [],
                timeClock: "",
                value: new Date().toISOString().substr(0, 10),
                striped: true,
                max: 0,
                job_id: "",
                user_id: "",
                messageData: {
                    jobDetails: "",
                    userDetails: "",
                    proposalDetails: "",
                    similarjobHistory: [],
                    jobUnderprocess: [],
                    jobHistory: [],
                },
                jobtitle: "",
                jobId: "",
                flaggingoptions: [],
                addFlagging: {
                    flagging_id: "",
                    report_content: "",
                },
                addDecline: {
                    decline_reason_id: "",
                    decline_reason: "",
                    application_status: 8,
                }, 
                workExprinceList: [],
                serviceData:[],
                getUserCertificationListArr: [],
            };
        },
        methods: {
            ...mapActions(["genericAPIPOSTRequest"]),

            async getUserCertificationList() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserCertificationList",
                    params: { user_id: this.user_id },
                });
                this.getUserCertificationListArr = res;
            },
            async getWorkExprince() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getWorkExprince",
                    params: { user_id: this.user_id },
                });
                this.workExprinceList = res;
            },
            async getCompanyService(){
                    this.serviceData =  await this.genericAPIPOSTRequest({
                            requestUrl: "getCompanyService",
                            params: { 
                                      'data':this.getCurrentUserIdRequest(),
                                      'user_id':this.user_id 
                                    },
                    }); 
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
            async messageModel() {
                var userDetails = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserDetails",
                    params: { user_id: this.user_id },
                });
                if (userDetails) {
                    this.messageData.userDetails = userDetails;
                    this.companySettingData = userDetails.company_settings;
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
            // this fun is for to get location data
            async getLocation() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "getCompanyLocation",
                    params: { user_id: this.user_id },
                });
                if (res) {
                    this.locationData = res;
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
            this.user_id = this.decodeId(this.$route.params.uid);
            this.messageModel();
            this.startTime();
            this.getWorkExprince();
            this.getLocation();
            this.getCompanyService();
            this.getUserCertificationList();
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
        width: 95px;
        height: 100px;
        border-radius: 19px;
        position: relative;
        box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
        padding: 5px;
    }
    .msgdetails .img-wrapper img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
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
</style>
