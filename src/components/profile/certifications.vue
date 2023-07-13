<template>
    <div class="px-5 py-5 border-bottom">
        <div class="text-center" v-if="getUserCertificationListArr.length == 0" >
            <div class="pro-img-wrapper">
            <img
            :src="$store.state.baseUrlImg+'/upload/freelancer/certification.png'"
                class="m-auto img-fluid"
            />
            </div>
            <div class="pro-content">
                <h4 class="mt-2 mb-0 text-black fz-24 fw-600">
                    Certifications
                </h4>
                <p class="fz-18 fw-400 text-muted">
                    Please List Professional Certifications You Hold Such As
                    Aramco QM Numbers /AWS/NACE Etc From The List. These Could
                    Make All The Difference When It Comes To Winning A New
                    Client.
                </p>
                <a
                    href="javascript:void(0);"
                    class="text-theme fz-20 fw-600"
                    v-b-modal.certificate-modal  @click="addNewCertification()"
                    >+ Add Certifications</a
                >
               
            </div>
        </div>

        <div class="certification-filled" v-else >
            <b-row>
                <b-col xl="12" lg="12">
                    <div class="d-flex align-items-normal">
                        <h4 class="mb-4 text-black fz-24 fw-600">
                            Certifications
                        </h4>
                        <div class="ml-auto" v-b-modal.certificate-modal >
                            <a href="javascript:void(0);" @click="addNewCertification()" class="text-theme d-flex align-items-normal" >
                                <img src="http://qapin_mvp5.manageprojects.in//assets/img/user/plus/add.svg" class="img-fluid mr-2" 
                                  > Add More
                            </a>
                        </div>
                    </div>
                    <div class="pb-2 mb-2 certificate-section" v-for="(cert ,index ) in getUserCertificationListArr" :key="index">
                        <div class="d-md-flex align-items-normal">
                            <h4 class="w-20 text-black fz-18 fw-400">{{cert.cmcertification}}</h4>
                            <ul class="mb-0">
                                <li class="fz-18 text-muted fw-400" v-for="(certType ,ind) in cert.type" :key="ind">{{certType}}</li>
                            </ul>
                            <div class="ml-auto">
                                <button class="mr-2 btn btn-outline-theme" v-b-modal.certificate-modal 
                                    @click="editCertificationById(cert)">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn btn-theme" @click="deleteCertificationtionById(cert.certification_id)">
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
            id="certificate-modal"
            size="lg"
            :title="addMoreBtn==false ? 'Edit Certification' :'Add Certification'"
        > 
            <form action="" class="text-left">
                <b-row  v-for="(cert, index) of  $v.certification.certification_list.$each.$iter" :key="index">
                    <b-col lg="6" sm="12">
                        <div class="form-group">
                            <label>Certifications</label>
                            <b-form-group>
                            <b-form-select 
                                :options="certificationList"
                                value-field="certification_master_id"
                                text-field="certification"
                                v-model.trim="cert.certification_id.$model"
                                class="form-control"
                                @change="getCertificationType(index)"
                                @input="$v.certification.certification_list.$each[index].certification_id.$touch()"
                                @blur="$v.certification.certification_list.$each[index].certification_id.$touch()"
                                required>

                                <template v-slot:first>
                                    <option value="" selected disabled>Select Certification</option>
                                </template>
                                </b-form-select>
                            </b-form-group>
                            <span class="text-danger fz-12"  v-if="!cert.certification_id.required &&  cert.certification_id.$error">Certification is required.</span>
                        </div>
                    </b-col>
                    <b-col lg="5" sm="12">
                        <div class="form-group">
                            <label>Type of Certifications</label>
                            <b-form-group>
                                <b-form-select
                                    :options="certificatetype[index]"
                                    value-field="certification_type_master_id"
                                    text-field="certification_type_code" 
                                    v-model.trim="cert.certification_type_id.$model"
                                    @input="$v.certification.certification_list.$each[index].certification_type_id.$touch()"
                                    @blur="$v.certification.certification_list.$each[index].certification_type_id.$touch()"
                                    class="form-control"
                                >
                                <template v-slot:first>
                                    <option value="" selected disabled>Select Type Certification</option>
                                </template>
                            
                            </b-form-select>
                            </b-form-group>
                            <span class="text-danger fz-12"  v-if="!cert.certification_type_id.required && cert.certification_type_id.$error">Certification type is required.</span>
                        </div>
                    </b-col>
                    <b-col lg="1" sm="12" v-if="certification.certification_list.length > 1">
                        <a href="javascript:void(0);"  @click="removeCertification(index)" class="btn-sm text-theme d-flex align-items-center float-right mt-4 btn btn-outline-theme remove-btn-pop"><i class="fa fa-minus"></i>
                         </a>
                    </b-col>
                </b-row>
            </form>
            <a href="javascript:void(0);" v-if="addMoreBtn" @click="addMoreCertification()" class="btn-sm text-theme d-flex align-items-center float-right mt-4 btn btn-outline-theme">
                <!--<img src="http://qapin_mvp5.manageprojects.in//assets/img/user/plus/add.svg" class="img-fluid mr-2">--> Add More Certificate
            </a>
            <template #modal-footer>
                <div class="text-right w-100">
                    <a href="javascript:void(0);" @click="$bvModal.hide('certificate-modal'); $v.$reset()" class="mr-2 text-theme"
                    >Cancel</a
                    >
                    <b-button
                    size="lg"
                    class="btn btn-theme"
                    @click="addUpdateCertification()"
                    >Save
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script> 

import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import { mapActions } from "vuex";
export default {
    mixins: [validationMixin],

    validations: { 
        certification:{
            certification_list: {
                $each: {
                    certification_id:{
                        required, 
                    },
                    certification_type_id:{
                        required
                    }
                }
            },
        },
       
    },
    data() {
        return { 
            addMoreBtn:true,
            certificationList:[],
            certificatetype:[],
            userCertificationList:[],
            certification_id:'',
            certification_type_code:'',
            certification: {
                        certification_list: []
                    },
            getUserCertificationListArr:[],
        }
  },
  async mounted() {
    this.getCertification();
    this.getUserCertification();
    this.getUserCertificationList();
  },
  methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        async getCertification(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "user/getCertification",
                params: {},
            });  
            this.certificationList = res; 
        },
        async getUserCertification(id){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "user/getUserCertification",
                params: {'certFiId':id},
            });  
            
            this.certification.certification_list = res;
            for (var i = 0; i < this.certification.certification_list.length; i++) { 
                this.getCertificationType(i);
            }
        },
        async getUserCertificationList(){ 
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "user/getUserCertificationList",
                params: {},
            }); 
            this.getUserCertificationListArr = res;
        }, 
        async getCertificationType(index){
            var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getCertificationType/"+this.certification.certification_list[index].certification_id,
                    params: {},
                });  
            this.$set(this.certificatetype, index, res); 
        },
        async addMoreCertification() {
            this.certification.certification_list.push({
                user_certification_id: '',
                certification_id: '',
                certification_type_id: '',
                certType: ''
            }); 
        },
        async addNewCertification() {
            this.addMoreBtn = true;
            this.certificatetype = [];
            this.certification.certification_list = [{
                user_certification_id: '',
                certification_id: '',
                certification_type_id: '',
                certType: ''
            }];
            this.$v.certification.certification_list.$reset;
        }, 
        async addUpdateCertification() {
            this.$v.certification.certification_list.$touch(); 
            if (!this.$v.certification.certification_list.$invalid) {
                await this.genericAPIPOSTRequest({
                        requestUrl: "user/addUpdateCertification",
                        params: { "certification": this.certification.certification_list},
                });  
                this.getUserCertificationList();
                this.$bvModal.hide('certificate-modal');
                this.certification.certification_list = [];
                this.addMoreCertification();
            }    
        },
        editCertificationById(cert){
            this.addMoreBtn = false;
            this.getUserCertification(cert.certification_id);
        },
        async deleteCertificationtionById(id){
            await this.genericAPIPOSTRequest({
                requestUrl: "user/deleteCertificationsById",
                params: {"cerRowId":id},
            });
            this.getUserCertificationList();
        },
        removeCertification(_i){
            this.certification.certification_list.splice(_i, 1);
        }

    },
}
</script>    