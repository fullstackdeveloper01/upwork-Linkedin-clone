<template>
    <div class="px-5 py-5 border-bottom">
        <div class="text-center" v-if="companyAccreditation.length==0">
            <div class="pro-img-wrapper">
                <img :src="$store.state.baseUrlImg+'/upload/freelancer/education.png'" class="m-auto img-fluid" />
            </div>
            <div class="pro-content">
                <h4 class="mt-2 mb-0 text-black fz-24 fw-600">Accreditation</h4>
                <p class="fz-18 fw-400 text-muted">
                    No Details Available.
                </p>
                <a href="javascript:void(0);" class="text-theme fz-20 fw-600" v-b-modal.accreditation-modal @click="addAccreditation()">+ Add Accreditation</a>
            </div>
        </div>

        <div class="education-filled" v-else>
            <b-row>
                <b-col xl="12" lg="12">
                    <div class="d-flex align-items-normal">
                        <h4 class="mt-2 mb-4 text-black fz-24 fw-600">
                            Accreditation
                        </h4>
                        <div class="ml-auto">
                            <a href="javascript:void(0);" class="text-theme d-flex align-items-normal" v-b-modal.accreditation-modal @click="addAccreditation()">
                                <img src="http://qapin_mvp5.manageprojects.in//assets/img/user/plus/add.svg" class="img-fluid mr-2" /> Add More
                            </a>
                        </div>
                    </div>
                    <div class="pb-4 mb-4 education-section" v-for="(accreditationAr ,index ) in companyAccreditation" :key="index">
                        <div class="d-flex align-items-normal">
                            <div class="mr-3 img-wrap">
                                <img :src="accreditationAr.image" class="img-fluid" style="width: 74px;" />
                            </div>
                            <div class="content">
                                <h4 class="mb-0 text-black fz-20 fw-600">
                                    {{accreditationAr.accreditation_certification_name}}
                                </h4>
                                <p class="mb-0 fz-14 text-muted fw-600">{{accreditationAr.issueDateNew}}</p>
                            </div>
                            <div class="ml-auto">
                                <button class="mr-2 btn btn-outline-theme" v-b-modal.accreditation-modal @click="editAccreditation(accreditationAr)">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn btn-theme" @click="deleteAccreditation(accreditationAr.company_accreditation_id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div class="details">
                            <p class="mb-0 fz-16 text-muted fw-400">
                                {{accreditationAr.description}}
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <b-modal id="accreditation-modal" size="lg" title="Edit Education" centered no-close-on-backdrop>
            <form action="" class="text-left">
                <b-row>
                    <b-col lg="12" sm="12">
                        <div class="form-group">
                            <label>Name</label>
                            <b-form-group>
                                <b-form-select
                                    :options="accreditationMaster"
                                    value-field="company_accreditation_certification_master_id"
                                    text-field="accreditation_certification_name"
                                    v-model="accreditation.certifiedBy"
                                    class="form-control"
                                    :error-messages="accrMasterErr"
                                    required
                                    @input="$v.accreditation.certifiedBy.$touch()"
                                    @blur="$v.accreditation.certifiedBy.$touch()"
                                >
                                </b-form-select>
                                <span class="text-danger fz-12" v-if="accrMasterErr[0]">{{accrMasterErr[0]}}</span>
                            </b-form-group>
                        </div>
                    </b-col>
                    <b-col lg="12" sm="12">
                        <div class="form-group">
                            <label>Issuing Organization</label>
                            <b-form-input
                                v-model="accreditation.issuingOrganization"
                                placeholder="Ex: Cisco"
                                :error-messages="OrgErr"
                                required
                                @input="$v.accreditation.issuingOrganization.$touch()"
                                @blur="$v.accreditation.issuingOrganization.$touch()"
                            ></b-form-input>
                            <span class="text-danger fz-12" v-if="OrgErr[0]">{{OrgErr[0]}}</span>
                        </div>
                    </b-col>

                    <b-col lg="6" sm="12">
                        <b-form-group class="fz-14 fw-600" placeholder="DD - MM - YYYY">
                            <label>Expiration Date</label>
                            <b-form-datepicker
                                id="example-datepicker"
                                v-model="accreditation.issueDate"
                                :max="maxdate"
                                class="mb-2"
                                :error-messages="issueDateErr"
                                required
                                @input="$v.accreditation.issueDate.$touch()"
                                @blur="$v.accreditation.issueDate.$touch()"
                            ></b-form-datepicker>
                            <span class="text-danger fz-12" v-if="issueDateErr[0]">{{issueDateErr[0]}}</span>
                        </b-form-group>
                    </b-col>
                    <b-col lg="6" sm="12">
                        <b-form-group class="fz-14 fw-600" placeholder="DD - MM - YYYY">
                            <label>Expiration Date</label>
                            <b-form-datepicker
                                id="example-datepicker1"
                                v-model="accreditation.expirationDate"
                                :min="new Date(accreditation.issueDate).toISOString().substr(0, 10)"
                                :max="maxdate"
                                class="mb-2"
                                :error-messages="expirationDateErr"
                                required
                                @input="$v.accreditation.expirationDate.$touch()"
                                @blur="$v.accreditation.expirationDate.$touch()"
                            ></b-form-datepicker>
                            <span class="text-danger fz-12" v-if="expirationDateErr[0]">{{expirationDateErr[0]}}</span>
                        </b-form-group>
                    </b-col>

                    <b-col lg="12" sm="12">
                        <div class="form-group">
                            <label>Description (Optional)</label>
                            <b-form-textarea id="textarea" v-model="accreditation.description" placeholder="Write somthing here..." rows="3" max-rows="6"></b-form-textarea>
                        </div>
                    </b-col>
                </b-row>
            </form>

            <template #modal-footer>
                <div class="text-right w-100">
                    <a href="javascript:void(0);" class="mr-2 text-theme" @click="$bvModal.hide('accreditation-modal')">Cancel</a>
                    <b-button size="lg" class="btn btn-theme" @click="addUpdateAccreditation()">
                        Save
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import { validationMixin } from "vuelidate";
    import { required, alpha, maxLength } from "vuelidate/lib/validators";
    import { mapActions } from "vuex";
    export default {
        mixins: [validationMixin],
        validations: {
            accreditation: {
                issuingOrganization: { required, alpha, maxLength: maxLength(20) },
                issueDate: { required },
                expirationDate: { required },
                certifiedBy: { required },
            },
        },
        data() {
            return {
                maxdate: new Date().toISOString().substr(0, 10),
                companyAccreditation: [],
                accreditationMaster: [],
                issueDates: [],
                endDates: [],
                accreditation: {
                    certifiedBy: "",
                    issuingOrganization: "",
                    is_expire: "",
                    issueDate: new Date().toISOString().substr(0, 10),
                    expirationDate: "",
                    description: "",
                },
            };
        },
        computed: {
            accrMasterErr() {
                const errors = [];
                if (!this.$v.accreditation.certifiedBy.$dirty) return errors;
                !this.$v.accreditation.certifiedBy.required && errors.push("Name is required");
                return errors;
            },
            OrgErr() {
                const errors = [];
                if (!this.$v.accreditation.issuingOrganization.$dirty) return errors;
                !this.$v.accreditation.issuingOrganization.required && errors.push("issuing Organization is required");
                return errors;
            },

            issueDateErr() {
                const errors = [];
                if (!this.$v.accreditation.issueDate.$dirty) return errors;
                !this.$v.accreditation.issueDate.required && errors.push("Issue date is required");
                return errors;
            },
            expirationDateErr() {
                const errors = [];
                if (!this.$v.accreditation.expirationDate.$dirty) return errors;
                !this.$v.accreditation.expirationDate.required && errors.push("Expiration date is required");
                return errors;
            },
        },
        async mounted() {
            this.getAccreditation();
            this.getaccreditationmaster();
            for (let i = this.currentYear - 40; i <= this.currentYear; i++) {
                this.issueDate.push(i);
            }
        },
        methods: {
            ...mapActions(["genericAPIPOSTRequest"]),
            async getAccreditation() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "company/getAccreditation",
                    params: {},
                });
                this.companyAccreditation = res;
            },

            async getaccreditationmaster() {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "common/getaccreditationmaster",
                    params: {},
                });
                this.accreditationMaster = res;
            },
            async addUpdateAccreditation() {
                this.$v.accreditation.$touch();
                if (!this.$v.accreditation.$invalid) {
                    await this.genericAPIPOSTRequest({
                        requestUrl: "addUpdateAccreditation",
                        params: {
                            certifiedBy: this.accreditation.certifiedBy,
                            issuingOrganization: this.accreditation.issuingOrganization,
                            expirationDate: this.accreditation.expirationDate,
                            description: this.accreditation.description,
                            issueDate: this.accreditation.issueDate,
                            is_expire: this.accreditation.is_expire,
                            company_accreditation_id: this.accreditation.company_accreditation_id,
                        },
                    });
                    this.getAccreditation();
                    this.$bvModal.hide("accreditation-modal");
                }
            },
            async deleteAccreditation(id) {
                await this.genericAPIPOSTRequest({
                    requestUrl: "company/deleteAccreditation",
                    params: { company_accreditation_id: id },
                });
                this.getAccreditation();
            },
            editAccreditation(accreditation) {
                this.getaccreditationmaster();
                if (accreditation.is_expire == 0) {
                    accreditation.is_expire = false;
                } else {
                    accreditation.is_expire = true;
                }
                this.accreditation = accreditation;
            },
            addAccreditation() {
                this.accreditation.company_accreditation_id = "";
                this.accreditation.certifiedBy = "";
                this.accreditation.issuingOrganization = "";
                this.accreditation.is_expire = "";
                this.accreditation.issueDate = new Date().toISOString().substr(0, 10);
                this.accreditation.expirationDate = "";
                this.accreditation.description = "";
                this.getaccreditationmaster();
            },
        },
    };
</script>
