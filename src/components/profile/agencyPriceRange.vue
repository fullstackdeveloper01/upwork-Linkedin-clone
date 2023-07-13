<template>
    <b-list-group-item class="p-0 mb-4 border-0">
        <div class="d-flex align-items-center">
            <span class="mr-2 fz-18 fw-600">Rate</span>
            <div class="ml-auto">
                <a href="javascript:void(0);" class="text-theme" v-b-modal.editrate @click="setRate()">
                    <PencilEditIcon />
                </a>
            </div>
        </div>
        <p class="fz-18 fw-400 text-muted">
            $ {{this.companyData.company_price_from}} - {{this.companyData.company_price_to}} / Day
        </p>
        <b-modal id="editrate" centered hide-footer no-close-on-backdrop title="Change hourly Rate" size="lg">
            <template>
                <div>
                    <p class="fz-16 fw-500 text-black">Set an hourly rate on your profile to help clients find agencies within their budget.</p>
                    <p class="fz-16 fw-500 text-black">As agency rates may vary by project, you can always negotiate different rates on specific projects.</p>

                    <p class="fz-18 fw-500 text-muted mb-4" v-if="singleRate==false">Your profile rate: ${{hourlyRate}} /Day</p>
                    <p class="fz-18 fw-500 text-muted mb-4" v-if="singleRate==true" >Your profile rate: ${{hourlyRate}} - {{hourlyRateto}} /Day</p>
                    <b-form>
                        <div class="mb-4">
                            <div class="flex-1 mb-4">
                                <div>
                                    <strong class="d-block fz-18">Day Rate</strong>
                                </div>
                                <div>
                                    <small class="d-block">Total amount the client will see</small>
                                </div>
                            </div>
                            <div>
                                <div class="d-flex align-items-center mb-4">
                                    <div class="up-input-group mr-2 pos-rel">
                                        <b-input-group size="md" prepend="$" id="hourlyRate">
                                            <b-form-input
                                                id="editHourlyRate"
                                                class="form-control"
                                                v-model="hourlyRate"
                                                @input="$v.hourlyRate.$touch()"
                                                @blur="$v.hourlyRate.$touch()"
                                                :error-messages="hourlyRateErrors"
                                                maxlength="10"
                                                type="number"
                                            ></b-form-input>
                                        </b-input-group>
                                        <p class="text-danger pos-absolute" v-if="hourlyRateErrors[0]">{{hourlyRateErrors[0]}}</p>
                                    </div>
                                    <div v-if="singleRate"> to </div>
                                    <div v-if="singleRate" class="up-input-group ml-2 pos-rel">
                                        <b-input-group size="md" prepend="$" id="hourlyRateto">
                                            <b-form-input
                                                id="editHourlyRate"
                                                class="form-control"
                                                v-model="hourlyRateto"
                                                @input="$v.hourlyRateto.$touch()"
                                                @blur="$v.hourlyRateto.$touch()"
                                                :error-messages="hourlyRatetoErrors"
                                                maxlength="10"
                                                type="number"
                                            ></b-form-input>
                                        </b-input-group>
                                        <p class="text-danger pos-absolute" v-if="hourlyRatetoErrors[0]">{{hourlyRatetoErrors[0]}}</p>
                                    </div>
                                    <div class="ml-2"><strong>/Day </strong></div>
                                </div>
                                <p class="text-danger" v-if="minMaxError"> {{minMaxError}}</p>
                                <div class="d-flex align-items-center mt-4">
                                    <b-button class=" mr-2" :class="singleRate==false ? 'btn-theme' : 'btn-outline-theme'" @click="setRange(false)" >Single Hourly Rate</b-button>
                                    <b-button class=" " :class="singleRate==true ? 'btn-theme' : 'btn-outline-theme'" @click="setRange(true)">Hourly Range</b-button>
                                </div>
                            </div>
                            
                            
                        </div>
                        <hr />
                        <div class="text-right">
                            <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('editrate')">Cancel</a>
                            <b-button class="btn btn-theme" v-on:click="updateUserProfile()">Save</b-button>
                        </div>
                    </b-form>
                </div>
            </template>
        </b-modal>
    </b-list-group-item>
</template>

<script>
    import { validationMixin } from "vuelidate";
    import { required, maxLength } from "vuelidate/lib/validators";
    import { mapActions } from "vuex";
    import PencilEditIcon from "../../components/icons/PencilEditIcon.vue";
    export default {
        mixins: [validationMixin],
        props:['companyData'],
        validations: {
            hourlyRate:{ 
                required,
                maxLength: maxLength(4), 
            },
            hourlyRateto:{
                required,
                maxLength: maxLength(4), 
            },
        },
        components: {
             PencilEditIcon,
        },
        data() {
            return {
                hourlyRate:'',
                hourlyRateto:'',
                userFullDetails:{},
                singleRate:false,
            };
        },
        computed: {
            hourlyRateErrors(){
                const errors = []
                if (!this.$v.hourlyRate.$dirty) return errors 
                !this.$v.hourlyRate.required && errors.push('Hourly Rate is required')
                !this.$v.hourlyRate.maxLength && errors.push('Too long. Use at least 4 characters or less')
                return errors
            },
            hourlyRatetoErrors(){
                const errors = []
                if (!this.$v.hourlyRateto.$dirty) return errors 
                !this.$v.hourlyRateto.required && errors.push('Hourly Rate is required')
                !this.$v.hourlyRateto.maxLength && errors.push('Too long. Use at least 4 characters or less')
                return errors
            },
            minMaxError(){
                if(this.hourlyRate!='' && this.hourlyRateto!=''){
                    if(parseInt(this.hourlyRate) < 3 ){
                        return " Agency rate must be between $3.00 and $999.00";
                    }
                    else if(parseInt(this.hourlyRateto) > 999 || parseInt(this.hourlyRateto) < 3){
                        return " Agency rate must be between $3.00 and $999.00";
                    }else if(parseInt(this.hourlyRate) > parseInt(this.hourlyRateto)){
                        return " Minimum range should be higher than maximum";
                    }
                }
                 
                return false;
            },
             
        },
        async mounted() {
            
        },
        methods: {
            ...mapActions(["genericAPIPOSTRequest"]),
            setRate(){
                this.hourlyRate    =  this.companyData.company_price_from;
                this.hourlyRateto    =  this.companyData.company_price_to;
                if(this.hourlyRate!="" && this.hourlyRateto!=""){
                    this.singleRate = true;
                }
            },
            async updateUserProfile(){
                var data = {};
                var status = false;
                if(this.singleRate){
                    if(this.hourlyRate!="" && this.hourlyRateto!=""){
                        status = true;
                    } 
                }else{
                    if(this.hourlyRate!=""){
                        status = true;
                    } 
                }
                if(status){
                    data.company_price_from = this.hourlyRate;
                    data.company_price_to = this.hourlyRateto;
                    data.data = this.getCurrentUserIdRequest();
                    await this.genericAPIPOSTRequest({
                        requestUrl: "addCompanyPriceRange",
                        params: data,
                    });
                    this.companyData.company_price_from = this.hourlyRate;
                    this.companyData.company_price_to  =  this.hourlyRateto;
                    this.$bvModal.hide('editrate');
                }    
            },
            setRange(st){
                this.hourlyRateto = '';
                this.singleRate =  st;
            }
        },
    };
</script>
