<template>
    <b-card-group deck>
        <b-card header-tag="header" footer-tag="footer" header-class="px-4 py-4 bg-white" class="mt-3">
            <template #header>
                <h4 class="mb-0 text-black fz-24 fw-500">
                    <b>Services</b>
                </h4>
                <div class="d-md-flex align-items-center">
                          Add Service 
                          <div class="ml-auto">
                            <a href="javascript:void(0);" @click="getCategory();addnew();$v.$reset()" v-b-modal.add-service-modal >
                              <i class="fa fa-plus text-theme fz-18 fw-400"></i>
                            </a>
                          </div>
                        </div>
            </template>
            <b-row>
                <b-col cols="12" class="px-4 py-4">
                    <section class="card-section">
                        <b-list-group v-for="(ser,serI) in serviceData" :key="'cat'+serI">
                            <b-list-group-item class="border d-flex align-items-center"  v-b-toggle="`collapse1-${serI}`">
                                {{ser.role_name}}
                                <div class="ml-auto">
                                    <button class="mr-2 btn btn-outline-theme"  @click="editService(ser)"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-outline-theme"  @click="setId(ser)" v-b-modal.service-confirm-modal ><i class="fa fa-trash"></i></button>
                                    <i class="fa fa-chevron-down ml-2" aria-hidden="true"></i>
                                </div>
                                
                            </b-list-group-item>
                            <b-collapse    :id="'collapse1-'+serI" class="mt-0">
                                <b-card class="border-radius-custom">
                                    <p class="card-text" >{{ser.description }} </p>
                                </b-card>
                            </b-collapse> 
                        </b-list-group>
                    </section>
                </b-col>
            </b-row>
        </b-card>
        <b-modal centered no-close-on-backdrop hide-footer id="add-service-modal" size="lg" :title="serviceModelTitle">
            <div class="text-left">
                <p class="fz-14 fw-500 text-black">The primary location is linked to your agency's Qapin account, and is used for administrative and financial purposes . Only the city and country is displayed on your agency profile.</p>
                <form @submit.prevent="addupdateCompanyService()">
                    <b-form-group class="mb-2">
                        <label>Category</label>
                        <b-form-select
                            v-model="service.category_id"
                            :options="CategoryData"
                            value-field="qp_role_master_id"
                            text-field="role_name"
                            @input="$v.service.category_id.$touch()"
                            @blur="$v.service.category_id.$touch()"
                            class="form-control" 
                            :error-messages="categoryIdErrors"
                        >
                        <!-- @change="changecategory($event)" -->

                        </b-form-select>
                        <p class="text-danger" v-if="categoryIdErrors[0]">{{categoryIdErrors[0]}}</p>
                    </b-form-group>

                    <!-- <b-form-group class="mb-2">
                        <label>Sub Category</label>
                        <b-form-select
                            v-model="service.skill_id"
                            :options="subCategoryData"
                            value-field="qp_role_skill_master_id"
                            text-field="skill_name"
                            @input="$v.service.skill_id.$touch()"
                            @blur="$v.service.skill_id.$touch()"
                            class="form-control"
                        >
                        </b-form-select>
                        <p class="text-danger" v-if="subCategoryIdErrors[0]">{{subCategoryIdErrors[0]}}</p>
                    </b-form-group> -->

                    <b-form-group class="mb-2">
                        <label>Description</label>
                        <b-form-textarea id="textarea" v-model="service.description" @input="$v.service.description.$touch()" @blur="$v.service.description.$touch()" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
                        <p class="text-danger" v-if="descriptionErrors[0]">{{descriptionErrors[0]}}</p>
                    </b-form-group>
                    <hr />
                    <div class="w-100 text-right">
                        <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('add-service-modal');$v.$reset()" >Cancel</a>
                        <b-button type="submit" size="lg" class="btn btn-theme">
                            Save
                        </b-button>
                    </div>
                </form>
            </div>
        </b-modal>
        <!-- model for confirm reject -->
        <b-modal id="service-confirm-modal" title="Remove Service" centered hide-footer size="md" no-close-on-backdrop> 
            <template>
            <div class="p-5 text-center m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                <h5 class="mt-4">Are you sure, Want to Remove this Service?</h5>
            </div>
            <hr>
            <div>
                <div class="text-right">
                    <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('service-confirm-modal')">Cancel</a>
                    <b-button type="button" class="btn btn-theme" @click="removeService(removeServiceId)">Confirm</b-button>
                </div>
            </div>
            </template>
        </b-modal>
    </b-card-group>
</template>
<script>
    import { validationMixin } from "vuelidate";
    import { required } from "vuelidate/lib/validators";
    import { mapActions } from "vuex";
    export default {
        mixins: [validationMixin],
        props: ["companyData"],
        validations: {
            service:{
                category_id: { required },
                // skill_id: { required },
                description: { required },
            }
        },
        components: {
            
        },
        data() {
            return {
                serviceData:[],
                service:{
                    category_id:'',
                    // skill_id:'',
                    description:''
                },
                serviceModelTitle:'',
                CategoryData:[],
                subCategoryData:[],
                removeServiceId:''
            };
        },
        computed: {
            categoryIdErrors(){
                const errors = []
                if (!this.$v.service.category_id.$dirty) return errors 
                !this.$v.service.category_id.required && errors.push('Category is required')
                return errors
            },
            // subCategoryIdErrors(){
            //     const errors = []
            //     if (!this.$v.service.skill_id.$dirty) return errors 
            //     !this.$v.service.skill_id.required && errors.push('Sub cateory is required')
            //     return errors
            // },
            descriptionErrors(){
                const errors = []
                if (!this.$v.service.description.$dirty) return errors 
                !this.$v.service.description.required && errors.push('Description is required')
                return errors
            },
            
        },
        async mounted() { 
            this.getCompanyService();
        },
        methods: {
            ...mapActions(["genericAPIPOSTRequest"]),
            async getCategory(){
                this.CategoryData =  await this.genericAPIPOSTRequest({
                        requestUrl: "common/getQpRoleMasterList",
                        params: {  },
                    }); 

                var that =this;
                that.serviceData.filter(data=>{
                    that.CategoryData.filter((cate,index)=>{
                        if(data.category_id == cate.qp_role_master_id){
                            that.CategoryData.splice(index,1);
                        }
                    })
                });
            },
            // async changecategory(id){
            //     this.subCategoryData =  await this.genericAPIPOSTRequest({
            //             requestUrl: "common/getQpRoleSkillMasterList",
            //             params: { 'role_id':id },
            //         }); 
            // },
            async getCompanyService(){
                    this.serviceData =  await this.genericAPIPOSTRequest({
                            requestUrl: "getCompanyService",
                            params: { 'data':this.getCurrentUserIdRequest() },
                    }); 
                    this.service.category_id ='';
                    this.service.skill_id ='';
                    this.service.description ='';
            },
            async removeService(){
                await this.genericAPIPOSTRequest({
                    requestUrl: "removeCompanyService",
                    params: { 'data':this.getCurrentUserIdRequest(),
                               'agency_service_id':this.removeServiceId, 
                            },
                }); 
                
                this.$bvModal.hide('service-confirm-modal');
                this.getCompanyService();

            },
            editService(service){
                this.getCategory();
                // this.changecategory(service.category_id);
                this.service = service;
                this.$bvModal.show('add-service-modal'); 
                // this.consolelog(this.service);
            },
            setId(service){
                this.removeServiceId = service.agency_service_id;
            },
            async addupdateCompanyService() {
                // this.consolelog('service',this.service);
                this.$v.service.$touch(); 
                if (!this.$v.service.$invalid) { 
                    await this.genericAPIPOSTRequest({
                        requestUrl: "addCompanyService",
                        params: { 
                            category_id:this.service.category_id,
                            // skill_id:this.service.skill_id,
                            description:this.service.description,
                            agency_service_id:this.service.agency_service_id,
                            data:this.getCurrentUserIdRequest(),
                        },
                    });  
                    this.$bvModal.hide('add-service-modal'); 
                    this.getCompanyService();
                }
            },
            addnew(){
                this.service.agency_service_id = '';
            } 
        },
    };
</script>
<style scoped>
.border-radius-custom {border-radius:0 0 6px 6px!important;}
.border-radius-custom .card-body{border-radius:0 0 6px 6px!important;}
</style>