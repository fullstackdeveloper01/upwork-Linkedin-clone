<template>
    <div class="px-5 py-5 border-bottom">
        <div class="text-center" v-if="workExprinceList.length==0">
            <div class="pro-img-wrapper">
                <img
                    :src="$store.state.baseUrlImg+'/upload/freelancer/industry-working.png'"
                    class="m-auto img-fluid"
                />
            </div>
            <div class="pro-content">
                <h4 class="mt-2 mb-0 text-black fz-24 fw-600">
                    Industry Working Experiences
                </h4>
                <p class="fz-18 fw-400 text-muted">
                    Please Describe The Experience You Have Of Working In The
                    Industry, Including The Type Of Jobs You Have Completed.
                    Providing A Good Level Of Detail Here Will Help Clients
                    See Whether You Have The Experience Needed For Their Work.
                </p>
                <a
                    href="javascript:void(0);"
                    class="text-theme fz-20 fw-600"
                    v-b-modal.industry-modal
                    >+ Add Industry Working Experiences</a
                >
             
            </div>
        </div>

        <div class="industry-filled" v-else >
            <b-row>
                <b-col xl="12" lg="12">
                    <div class="d-md-flex align-items-normal">
                        <h4 class="mt-2 mb-4 text-black fz-24 fw-600">
                            Industry Working Experience
                        </h4>
                        <div class="d-flex align-items-center ml-auto">
                            <a href="javascript:void(0);" 
                                class="text-theme d-flex align-items-normal"  
                                v-b-modal.industry-modal @click="addnew();$v.$reset();">
                                <img src="http://qapin_mvp5.manageprojects.in//assets/img/user/plus/add.svg" class="img-fluid mr-2"> Add More
                            </a>
                        </div>
                    </div>
                    <div class="pb-4 mb-4 industry-section" v-for="(workExp ,index ) in workExprinceList" :key="index">
                        <div class="d-md-flex align-items-start">
                            <div class="mr-3 img-wrap">
                                <img
                                :src="$store.state.baseUrlImg+'/upload/freelancer/industry.png'"
                                    class="img-fluid"
                                />
                            </div>
                            <div class="content">
                                <h4 class=" mb-0 text-black fz-20 fw-600">
                                    {{workExp.company_name}}
                                </h4>
                                <p class="mb-0 fz-18 text-muted fw-400">
                                     {{workExp.role}}
                                </p>
                                <ul>
                                    <li class="fz-18 text-muted fw-400">
                                        {{workExp.location}}
                                    </li>
                                    <li class="fz-18 text-muted fw-400">•</li>
                                    <li class="fz-18 text-muted fw-400">
                                    {{workExp.from_date}} - {{workExp.to_date}}
                                    </li>
                                </ul>
                                <ol>
                                    <vue-read-more-smooth :lines="3">
                                        <li class="fz-18 text-muted fw-400" v-for="(respons ,reIndex ) in workExp.responsibilities" :key="reIndex">
                                           {{respons}}
                                        </li>
                                    </vue-read-more-smooth>
                                </ol>
                            </div>
                            <div class="ml-auto align-items-center d-flex">
                                <button class="mr-2 btn btn-outline-theme btn-sm" v-b-modal.industry-modal 
                                    @click="editWorkExp(workExp.industry_working_experience_id)" >
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn btn-theme btn-sm" @click="deleteIndustryById(workExp.industry_working_experience_id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <b-modal
                centered no-close-on-backdrop
                id="industry-modal"
                size="lg"
                :title="addMoreBtn==false ? 'Edit Industry Experience' :'Add Industry Experience'"
            >
                <form action="" class="text-left">
                    <b-row>
                        <b-col lg="12" sm="12">
                            <div class="form-group">
                                <label>Company Name</label>
                                <b-form-input
                                v-model="workExprince.company_name"
                                placeholder="Company Name"
                                :error-messages="companyNameErr"
                                required
                                @input="$v.workExprince.company_name.$touch()"
                                @blur="$v.workExprince.company_name.$touch()"
                                ></b-form-input>
                                <span class="text-danger fz-12" v-if="companyNameErr[0]">{{companyNameErr[0]}}</span>
                            </div>
                        </b-col>
                        <b-col lg="6" sm="12">
                            <div class="form-group">
                                <label>Role</label>
                                <b-form-input
                                 v-model="workExprince.role"
                                placeholder="Role"
                                :error-messages="roleErr"
                                required
                                @input="$v.workExprince.role.$touch()"
                                @blur="$v.workExprince.role.$touch()"
                                ></b-form-input>
                                <span class="text-danger fz-12" v-if="roleErr[0]">{{roleErr[0]}}</span>
                            </div>
                        </b-col>
                        <b-col lg="6" sm="12">
                            <div class="form-group">
                                <label>Location</label>

                                <div class="input-group search-bar">
                                <div class="tt-menu" style="position: absolute;top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 10px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                                <input type="text" class="form-control border-none" v-model="location" placeholder="Search for Location" aria-describedby="basic-addon2" v-on:keyup="searchLocation()">
                                    <b-form-group
                                    v-slot="{ ariaDescribedby }"
                                    >
                                    <b-form-checkbox
                                        v-for="(loc,id) in locationData"
                                        :key="id"
                                        :value="loc"
                                        :aria-describedby="ariaDescribedby"
                                        v-model="filtersValue.locationData"
                                        @change ="setLocationData()" 
                                        >
                                        {{ loc.location }}
                                    </b-form-checkbox>
                                    </b-form-group>
                                </div>
                                </div>
                                 
                                <span class="text-danger fz-12" v-if="locationErr[0]">{{locationErr[0]}}</span>
                            </div>
                        </b-col>
                        <b-col lg="12" sm="12">
                            <div class="form-group">
                                <label>Title</label>
                                <b-form-input
                                v-model="workExprince.title"
                                placeholder="Title"
                                :error-messages="companyTitleErr"
                                required
                                @input="$v.workExprince.title.$touch()"
                                @blur="$v.workExprince.title.$touch()"
                                ></b-form-input>
                                <span class="text-danger fz-12" v-if="companyTitleErr[0]">{{companyTitleErr[0]}}</span>
                            </div>
                        </b-col>
                        <b-col lg="12" sm="12">
                            <b-form-checkbox
                              id="checkbox-1"
                              v-model="workExprince.is_working"
                              name="checkbox-1"
                              value="1"
                              unchecked-value="0" 
                              required
                              @change="workExprince.to_date = ''"
                              type="checkbox" >
                              <p class="fz-14 fw-400 text-muteed mb-0">I am currently working in this role</p>
                            </b-form-checkbox>
                        </b-col> 
                        <b-col lg="6" sm="12">
                            <b-form-group
                                class="fz-14 fw-600"
                                placeholder="DD - MM - YYYY"
                            >
                                <label>From</label>
                                <b-form-datepicker
                                id="example-datepicker"
                                v-model="workExprince.from_date"
                                :max="maxdate" 
                                class="mb-2"
                                :error-messages="FromErr"
                                required
                                
                                @input="$v.workExprince.from_date.$touch();changeFromdate()"
                                @blur="$v.workExprince.from_date.$touch()"
                                ></b-form-datepicker>
                                <span class="text-danger fz-12" v-if="FromErr[0]">{{FromErr[0]}}</span>
                            </b-form-group>
                        </b-col>
                        <b-col lg="6" sm="12" v-if="workExprince.is_working=='' || workExprince.is_working == '0'">
                            <b-form-group
                                class="fz-14 fw-600"
                                placeholder="DD - MM - YYYY"
                            >
                                <label>To</label>
                                <b-form-datepicker
                                id="example-datepicker1"
                                v-model="workExprince.to_date"
                                :min="new Date(workExprince.from_date).toISOString().substr(0, 10)"
                                :max="maxdate" 
                                class="mb-2"
                                :error-messages="ToErr"
                                required
                                @input="$v.workExprince.to_date.$touch()"
                                @blur="$v.workExprince.to_date.$touch()"
                                
                                ></b-form-datepicker>
                                <span class="text-danger fz-12" v-if="ToErr[0]">{{ToErr[0]}}</span>
                            </b-form-group>
                        </b-col>

                        <b-col lg="6" sm="12" v-else>
                            
                              <p class="fz-14 fw-400 text-black mt-10">Present</p>
                            
                        </b-col> 
                        <b-col lg="12" sm="12">
                            <div class="form-group">
                                <label>Responsibilities</label>
                                <b-form-textarea
                                id="textarea"
                                v-model="workExprince.responsibilities"
                                placeholder="Type here..."
                                rows="3"
                                max-rows="6"
                                :error-messages="responsibilitiesErr"
                                required
                                @input="$v.workExprince.responsibilities.$touch()"
                                @blur="$v.workExprince.responsibilities.$touch()"
                                ></b-form-textarea>
                                <span class="text-danger fz-12" v-if="responsibilitiesErr[0]">{{responsibilitiesErr[0]}}</span>
                            </div>
                        </b-col>
                    </b-row>
                </form>
                <template #modal-footer>
                    <div class="text-right w-100">
                        <a href="javascript:void(0);" class="mr-2 text-theme" @click="$bvModal.hide('industry-modal'); $v.$reset();">Cancel</a>
                        <b-button size="lg" class="btn btn-theme" :disabled='btnSubmit' @click="addUpdatWorkExprince()" >Save</b-button>
                    </div>
                </template>
        </b-modal>
    </div>
</template>    
<script>
    
import { validationMixin } from 'vuelidate';
import { required,maxLength } from 'vuelidate/lib/validators';
import { mapActions } from "vuex";
import VueReadMoreSmooth from "vue-read-more-smooth";
export default {
    mixins: [validationMixin],

    validations: {
        workExprince:{
            company_name: { 
                required, 
                maxLength: maxLength(100) 
            },
            title: { 
                required, 
                maxLength: maxLength(100) 
            },
            to_date: { required }, 
            from_date: { required }, 
            responsibilities: { required , maxLength: maxLength(2000) }, 
            role: { required, maxLength: maxLength(50)  }, 
            location: { required, maxLength: maxLength(50)  }, 
        },
       
    },
    data() {
        return { 
            btnSubmit: false,
            filtersValue:{
                locationData:'',
            },
            location:'',
            locationData:[],
            addMoreBtn:true,
            maxdate:new Date().toISOString().substr(0, 10),
            workExprinceList:[],
            workExprince: {
                company_name: '',
                title:'',
                role: '',
                is_working: '0',
                from_date: new Date().toISOString().substr(0, 10),
                to_date: new Date().toISOString().substr(0, 10),
                responsibilities: '',
                location: '',
                industry_working_experience_id: ''
            },
            errorMessages:true,
        }
    },
    computed: {
        companyNameErr() {
            const errors = []
            if (!this.$v.workExprince.company_name.$dirty) return errors 
            !this.$v.workExprince.company_name.required && errors.push('Company name is required')
            // !this.$v.workExprince.company_name.alpha && errors.push('Sorry! No special characters or numbers'); 
            !this.$v.workExprince.company_name.maxLength && errors.push('Too long. Use at least 100 characters or less')
            return errors
        },
        companyTitleErr() {
            const errors = []
            if (!this.$v.workExprince.title.$dirty) return errors 
            !this.$v.workExprince.title.required && errors.push('Title is required');
            !this.$v.workExprince.title.maxLength && errors.push('Too long. Use at least 100 characters or less');
            return errors
        },
        roleErr() {
            const errors = []
            if (!this.$v.workExprince.role.$dirty) return errors 
            !this.$v.workExprince.role.required && errors.push('Role is required')
            !this.$v.workExprince.role.maxLength && errors.push('Too long. Use at least 50 characters or less')
            return errors
        },
        locationErr() {
            const errors = []
            if (!this.$v.workExprince.location.$dirty) return errors 
            !this.$v.workExprince.location.required && errors.push('Location is required')
            !this.$v.workExprince.location.maxLength && errors.push('Too long. Use at least 50 characters or less')
            return errors
        },
        FromErr() {
            const errors = []
            if (!this.$v.workExprince.from_date.$dirty) return errors 
            !this.$v.workExprince.from_date.required && errors.push('From date is required')
            return errors
        },
        ToErr() {
            const errors = []
            if (!this.$v.workExprince.to_date.$dirty) return errors 
            !this.$v.workExprince.to_date.required && errors.push('To date is required')
            return errors
        },
        responsibilitiesErr() {
            const errors = []
            if (!this.$v.workExprince.responsibilities.$dirty) return errors 
            !this.$v.workExprince.responsibilities.required && errors.push('Responsibilities is required')
            !this.$v.workExprince.responsibilities.maxLength && errors.push('Too long. Use at least 2000 characters or less')
            return errors
        },
        
    },
    components: {
        VueReadMoreSmooth
    },
    async mounted() { 
        this.getWorkExprince();
    },
    watch: {
        // whenever question changes, this function will run
        is_working() {
        this.from_date = 0;
        }
    },
  methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        changeFromdate(){
            if(this.workExprince.from_date >= this.workExprince.to_date){
                this.workExprince.to_date = '';
            }
        },
        async searchLocation(){
          const formData = new FormData()
          formData.append('input', this.location);
            if(this.location!=''){
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "common/getLocation?q="+this.location,
                    params: formData,
                }); 
                if(res.length > 0 ){
                    this.locationData=res;
                }
            }
        },
         
        async getWorkExprince(){
            var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getWorkExprince",
                    params: {},
                }); 
            this.workExprinceList = res;
        },  
        async editWorkExp(id) {
            this.addMoreBtn  = false;
            var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getWorkExprince",
                    params: {id: id},
                }); 
            this.workExprince = res;
            this.location = res.location;
        },
        async addUpdatWorkExprince(){
            if(this.workExprince.is_working == 1){
                this.workExprince.to_date = new Date().toISOString().substr(0, 10);
            }
            this.$v.workExprince.$touch()
            if (!this.$v.workExprince.$invalid) {
                this.btnSubmit = true;  
                await this.genericAPIPOSTRequest({
                    requestUrl: "user/addUpdatWorkExprince",
                    params: {
                            company_name: this.workExprince.company_name,
                            title: this.workExprince.title,
                            role: this.workExprince.role,
                            is_working: this.workExprince.is_working== true ? "1" :"0",
                            from_date: this.workExprince.from_date,
                            to_date: this.workExprince.to_date,
                            responsibilities: this.workExprince.responsibilities,
                            location: this.workExprince.location,
                            industry_working_experience_id: this.workExprince.industry_working_experience_id,
                    },
                });
                this.$bvModal.hide('industry-modal');
                this.btnSubmit  = false;
                this.getWorkExprince(); 
                this.$v.$reset();
            }    
            
        },
        
        addnew(){
            this.addMoreBtn  = true;
            this.location='';
            this.workExprince =  {
                company_name: '',
                role: '',
                title:'',
                is_working: '',
                from_date: new Date().toISOString().substr(0, 10),
                to_date: new Date().toISOString().substr(0, 10),
                responsibilities: '',
                location: '',
                industry_working_experience_id: ''
            };
              
        },
        async deleteIndustryById(id){
            await this.genericAPIPOSTRequest({
                requestUrl: "user/deleteWorkExpById",
                params: {"id":id},
            });
            this.getWorkExprince();
        },
        setLocationData(){
            this.workExprince.location = this.filtersValue.locationData.location;
            this.location = this.filtersValue.locationData.location;
            this.locationData = [];
        }
        
    },
}
</script>    
<style scoped>
    .button-read-more {
    position: absolute;
    right: 0;
    /*bottom: 10px;
    width: 90px;*/
    background: inherit;
    }
    .read-more-button {
    border: none !important;
    text-align: right !important;
    margin: 0 !important;
    }
    .hide-text {
    display: none !important;
    }
    .comment .read-more-button span {
    background-color: #eeeeee !important;
    }
    .read-more-button span {
    color: #f1613c !important;
    font-weight: bold !important;
    padding: 0 !important;
    padding-left: 10px !important;
    }
    .text-overflow.expanded .read-more-button span {
    padding-left: 0 !important;
    }

    .text-overflow.expanded .read-more-button {
    /*text-align: left !important;*/
    margin-left: 0 !important;
    }
    .text-overflow.expanded .button-read-more {
    left: 0;
    bottom: -24px!important;
    right: unset;
    }
    .industry-section .img-wrap{width:6%;}
    .industry-section .img-wrap img{width:100%;}
    .industry-section .content{width:89%;}
    .industry-section .ml-auto{width:5%;}
    @media only screen and (min-width: 320px) and (max-width: 640px) {
        .industry-section .img-wrap{width: 25%;margin-top: 20px;margin-bottom: 20px;}
        .industry-section .img-wrap img{width:100%;}
        .industry-section .content{width:100%;}
        .industry-section .ml-auto{width: 100%;margin-top: 35px;}
    }
    @media only screen and (min-width: 641px) and (max-width: 767px) {
        .industry-section .img-wrap{width: 15%;margin-top: 5px;margin-bottom: 5px;}
        .industry-section .img-wrap img{width:100%;}
        .industry-section .content{width:75%;}
        .industry-section .ml-auto{width: 10%;margin-top: 35px;}
    }
    @media only screen and (min-width: 768px) and (max-width: 815px) and (orientation:portrait){
        .industry-section .img-wrap{width:6%;}
        .industry-section .img-wrap img{width:100%;}
        .industry-section .content{width:80%;}
        .industry-section .ml-auto{width:14%;}
    }   
 
</style>