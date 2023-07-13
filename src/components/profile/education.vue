<template>
    <!--  Validation https://vuelidate.js.org/#sub-accessing-validator-parameters -->
    <div class="px-5 py-5 border-bottom">
        <div class="text-center" v-if="educationArr.length==0">
            <div class="pro-img-wrapper">
                <img :src="$store.state.baseUrlImg+'/upload/freelancer/education.png'" class="m-auto img-fluid" />
            </div>
            <div class="pro-content">
                <h4 class="mt-2 mb-0 text-black fz-24 fw-600">Education</h4>
                <p class="fz-18 fw-400 text-muted">
                    Please Detail Your Education And The Qualifications You Have.
                </p>
                <a href="javascript:void(0);" class="text-theme fz-20 fw-600" v-b-modal.education-modal>+ Add Education Details</a>
            </div>
        </div>

        <div class="education-filled" v-else>
            <b-row>
                <b-col xl="12" lg="12">
                    <div class="d-flex align-items-normal">
                        <h4 class="mb-4 text-black fz-24 fw-600">
                            Education
                        </h4>
                        <div class="ml-auto">
                            <a href="javascript:void(0);" class="text-theme d-flex align-items-normal" v-b-modal.education-modal @click="newAdd()">
                                <img src="http://qapin_mvp5.manageprojects.in//assets/img/user/plus/add.svg" class="img-fluid mr-2" /> Add More
                            </a>
                        </div>
                    </div>
                    <div class="pb-4 mb-4 education-section" v-for="(educa ,index ) in educationArr" :key="index">
                        <div class="d-md-flex align-items-normal">
                            <div class="mr-3 wrap w-30">{{educa.start_year}} - {{educa.end_year}}</div>
                            <div class="content">
                                <h4 class="mb-0 text-black fz-20 fw-600">
                                    {{educa.university_name}}
                                </h4>
                                <p class="mb-0 fz-14 text-muted fw-600">{{educa.course_name}} ({{educa.areaOfStudy}})</p>
                            </div>
                            <div class="ml-auto">
                                <button class="mr-2 btn btn-outline-theme" v-b-modal.education-modal @click="editEducationById(educa)">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn btn-theme" @click="deleteEducationById(educa.user_education_record_id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div class="details">
                            <p class="mb-0 fz-16 text-muted fw-400" v-if="educa.education_description!=''">
                                <read-more more-str="Read more" :text="educa.education_description" link="#" less-str="Read less" :max-chars="250"></read-more>
                            </p>

                            <!-- <vue-read-more-smooth :lines="3">
                    <p class="mb-0 fz-16 text-muted fw-400" v-html="getHtmlContent(educa.education_description)">
                   
                    </p>
                    </vue-read-more-smooth> -->
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <b-modal centered no-close-on-backdrop id="education-modal" size="lg" :title="addMoreBtn==false ? 'Edit Education' :'Add Education'">
            <form action="" class="text-left">
                <b-row v-for="(edurow, edu_index) in  $v.education.education_list.$each.$iter " :key="edu_index">
                    <b-col lg="12" sm="12">
                        <div class="form-group">
                            <label>School/Unversity Name</label>
                            <b-form-input
                                v-model.trim="edurow.university_name.$model"
                                required
                                placeholder="Engineering in Information Technology"
                                @input="$v.education.education_list.$each[edu_index].university_name.$touch()"
                                @blur="$v.education.education_list.$each[edu_index].university_name.$touch()"
                            ></b-form-input>
                        </div>
                        <span class="text-danger fz-12" v-if="!edurow.university_name.required && edurow.university_name.$error">University name is required.</span>
                        <span class="text-danger fz-12" v-if="!edurow.university_name.minLength">University name must have at least 5 characters.</span>
                        <span class="text-danger fz-12" v-if="!edurow.university_name.maxLength">Too long. Use at least 100 characters or less</span>
                    </b-col>
                    <b-col lg="6" sm="12">
                        <div class="form-group">
                            <label>Attended From </label>
                            <b-form-group>
                                <b-form-select
                                    :options="fromDates"
                                    class="form-control"
                                    @change="getDatePrevious(edu_index,edurow.start_year.$model)"
                                    v-model.trim="edurow.start_year.$model"
                                    @input="$v.education.education_list.$each[edu_index].start_year.$touch()"
                                    @blur="$v.education.education_list.$each[edu_index].start_year.$touch()"
                                    required
                                >
                                    <template v-slot:first>
                                        <option value="" selected disabled>Select Attended From</option>
                                    </template>
                                </b-form-select>
                            </b-form-group>
                            <span class="text-danger fz-12" v-if="!edurow.start_year.required && edurow.start_year.$error">Attended From is required.</span>
                        </div>
                    </b-col>
                    <b-col lg="6" sm="12">
                        <div class="form-group">
                            <label>Attended To </label>
                            <b-form-group>
                                <b-form-select
                                    :options="endDates[edu_index]"
                                    v-model.trim="edurow.end_year.$model"
                                    @input="$v.education.education_list.$each[edu_index].end_year.$touch()"
                                    @blur="$v.education.education_list.$each[edu_index].end_year.$touch()"
                                    required
                                    class="form-control"
                                >
                                    <template v-slot:first>
                                        <option value="" selected disabled>Select Attended To</option>
                                    </template>
                                </b-form-select>
                            </b-form-group>
                            <span class="text-danger fz-12" v-if="!edurow.end_year.required && edurow.end_year.$error">Attended To is required.</span>
                        </div>
                    </b-col>
                    <b-col lg="12" sm="12">
                        <div class="form-group">
                            <label>Degree </label>
                            <b-form-input
                                v-model.trim="edurow.course_name.$model"
                                @input="$v.education.education_list.$each[edu_index].course_name.$touch()"
                                @blur="$v.education.education_list.$each[edu_index].course_name.$touch()"
                                required
                                placeholder="Bechlor of Engineering ( BEng )"
                            ></b-form-input>
                        </div>
                        <span class="text-danger fz-12" v-if="!edurow.course_name.required && edurow.course_name.$error">Degree is required.</span>
                        <span class="text-danger fz-12" v-if="!edurow.course_name.maxLength">Too long. Use at least 50 characters or less</span>
                    </b-col>
                    <b-col lg="12" sm="12">
                        <div class="form-group">
                            <label>Area of Study </label>
                            <b-form-input
                                v-model.trim="edurow.areaOfStudy.$model"
                                @input="$v.education.education_list.$each[edu_index].areaOfStudy.$touch()"
                                @blur="$v.education.education_list.$each[edu_index].areaOfStudy.$touch()"
                                required
                                placeholder="Information Technology"
                            ></b-form-input>
                        </div>

                        <span class="text-danger fz-12" v-if="!edurow.areaOfStudy.required && edurow.areaOfStudy.$error">Area of Study is required.</span>
                        <span class="text-danger fz-12" v-if="!edurow.areaOfStudy.maxLength">Too long. Use at least 50 characters or less</span>
                    </b-col>
                    <b-col lg="12" sm="12">
                        <div class="form-group">
                            <label>Description</label>
                            <b-form-textarea
                                id="textarea"
                                v-model.trim="edurow.education_description.$model"
                                @input="$v.education.education_list.$each[edu_index].education_description.$touch()"
                                @blur="$v.education.education_list.$each[edu_index].education_description.$touch()"
                                required
                                placeholder="Write somthing here..."
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                            <span class="text-danger fz-12" v-if="!edurow.education_description.required && edurow.education_description.$error">Description is required.</span>
                            <span class="text-danger fz-12" v-if="!edurow.education_description.maxLength">Too long. Use at least 2000 characters or less</span>
                        </div>
                    </b-col>
                </b-row>
            </form>
            <template #modal-footer>
                <div class="text-right w-100">
                    <a href="javascript:void(0);" @click="addMoreeducation();" class="mr-2 text-theme d-flex align-items-center">
                        <img src="http://qapin_mvp5.manageprojects.in//assets/img/user/plus/add.svg" class="img-fluid mr-2" /> Add More education
                    </a>

                    <a href="javascript:void(0);" @click="$bvModal.hide('education-modal'); $v.$reset();" class="mr-2 text-theme">Cancel</a>
                    <b-button size="lg" class="btn btn-theme" @click="addUpdateEducatio()">
                        Save
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import { validationMixin } from "vuelidate";
    import { required, maxLength, minLength } from "vuelidate/lib/validators";
    // import VueReadMoreSmooth from "vue-read-more-smooth";
    import { mapActions } from "vuex";
    export default {
        mixins: [validationMixin],
        components: {
            // VueReadMoreSmooth
        },
        validations: {
            education: {
                education_list: {
                    $each: {
                        university_name: {
                            required,
                            maxLength: maxLength(100),
                            minLength: minLength(5),
                        },
                        course_name: {
                            required,
                            maxLength: maxLength(50),
                        },
                        start_year: {
                            required,
                        },
                        end_year: {
                            required,
                        },
                        education_description: {
                            required,
                            maxLength: maxLength(2000),
                        },
                        areaOfStudy: {
                            required,
                            maxLength: maxLength(50),
                        },
                    },
                },
            },
        },
        data() {
            return {
                addMoreBtn: true,
                educationArr: [],
                fromDates: [],
                endDates: [],
                currentYear: new Date().getFullYear(), // 2020
                education: {
                    education_list: [
                        {
                            user_education_record_id: 0,
                            university_name: "",
                            course_name: "",
                            start_year: "",
                            end_year: "",
                            education_description: "",
                            areaOfStudy: "",
                        },
                    ],
                },
            };
        },
        // computed: {
        //     universitynameCheck() {
        //     //   console.log(index);
        //     const errors = []
        //     // if (!this.$v.education.education_list.$each.university_name.$dirty) return errors
        //     // !this.$v.education.education_list.$each.university_name.required && errors.push('First name is required')
        //     // !this.$v.education.education_list.$each.university_name.alpha && errors.push('Only character is allow')
        //      return errors
        //     },
        // },
        async mounted() {
            this.getUserEducation();
            for (let i = this.currentYear - 40; i <= this.currentYear; i++) {
                this.fromDates.push(i);
            }
        },
        methods: {
            ...mapActions(["genericAPIPOSTRequest"]),

            async getUserEducation() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getUserEducation",
                    params: {},
                });
                this.educationArr = res;
                for (var i = 0; i < res.length; ++i) {
                    // console.log("res[i].start_year===", res[i].start_year);
                    this.getDatePrevious(i, res[i].start_year);
                }
                //this.education.education_list = res;
            },
            async addUpdateEducatio() {
                this.$v.education.education_list.$touch();
                if (!this.$v.education.education_list.$invalid) {
                    await this.genericAPIPOSTRequest({
                        requestUrl: "user/addUpdateEducation",
                        params: { education: this.education.education_list },
                    });
                    this.getUserEducation();
                    this.$bvModal.hide("education-modal");
                    this.education.education_list = [];
                    this.addMoreeducation();
                    this.$v.$reset();
                }
            },
            addMoreeducation: function () {
                this.$v.education.education_list.$reset();
                this.education.education_list.push({
                    user_education_record_id: 0,
                    university_name: "",
                    course_name: "",
                    start_year: "",
                    end_year: "",
                    education_description: "",
                    areaOfStudy: "",
                });
            },
            removeEdu: function (index) {
                this.education.education_list.splice(index, 1);
            },
            async deleteEducationById(id) {
                await this.genericAPIPOSTRequest({
                    requestUrl: "user/deleteEducationById",
                    params: { eduRowId: id },
                });
                this.getUserEducation();
            },
            getDatePrevious(index, date) {
                var endDatasArray = [];
                for (let i = date; i <= this.currentYear; i++) {
                    endDatasArray.push(i);
                }
                this.$set(this.endDates, index, endDatasArray);
            },
            editEducationById(educa) {
                this.addMoreBtn = false;
                this.education.education_list = [];
                this.education.education_list.push(educa);
            },
            newAdd() {
                this.addMoreBtn = true;
                this.education.education_list = [];
                this.addMoreeducation();
            },
        },
    };
</script>
