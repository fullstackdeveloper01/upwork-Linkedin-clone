<template>
    <b-card-group deck>
        <b-card header-tag="header" footer-tag="footer" header-class="px-4 py-4 bg-white" class="mt-3">
            <template #header>
                <h4 class="mb-0 text-black fz-24 fw-500">
                    <b>Portfolio</b>
                </h4>
                <div class="d-md-flex align-items-center" v-if="editProject==1">
                    Add Project 
                    <div class="ml-auto">
                    <a href="javascript:void(0);" @click="$v.$reset()" v-b-modal.add-project-modal >
                        <i class="fa fa-plus text-theme fz-18 fw-400"></i>
                    </a>
                    </div>
                </div>
            </template>
            <b-row>
                <template v-for="(pro,index) in projectData">
                    <b-col cols="4" class="px-4 py-4"  :key="'cat'+index" v-if="!readmore && index < 3">
                        <div class="portfolio-number-wrap pos-rel border br-20 py-3 px-3">
                            <img :src="pro.cover_image">
                            <button class="mr-2 btn btn-outline-theme"  @click="editproject(pro);isEdit=true" v-if="editProject==1"><i class="fa fa-pencil" ></i></button>
                            <button class="btn btn-theme"  @click="removeProId = pro.project_id" v-b-modal.project-confirm-modal v-if="editProject==1" ><i class="fa fa-trash"></i></button>
                        </div>
                        <h4 class="fz-18">{{pro.title}}</h4>
                    </b-col>
                    <b-col cols="4" class="px-4 py-4"  :key="'cat'+index" v-if="readmore">
                        <div class="portfolio-number-wrap pos-rel border br-20 py-3 px-3">
                            <img :src="pro.cover_image">
                            <button class="mr-2 btn btn-outline-theme"  @click="editproject(pro);isEdit=true" v-if="editProject==1"><i class="fa fa-pencil" ></i></button>
                            <button class="btn btn-theme"  @click="removeProId = pro.project_id" v-b-modal.project-confirm-modal v-if="editProject==1" ><i class="fa fa-trash"></i></button>
                        </div>
                        <h4 class="fz-18">{{pro.title}}</h4>
                    </b-col>
                    
                </template>
                <b-col cols="12" class="px-4 py-1 text-center">
                    <b-button class="btn btn-outline-theme mt-4 mb-4" @click="readmore = !readmore" >{{(readmore==true)?'Show less portfolio':'Show more portfolio'}}</b-button>
                </b-col>
            </b-row>
        </b-card>
        
        <!-- this is model for to add project -->
        <b-modal centered no-close-on-backdrop hide-footer id="add-project-modal" size="lg" :title="(isEdit)?'Update Project':'Add Project'">
            <div class="text-left">
                <form @submit.prevent="addupdateProjects()">

                    <b-form-group class="mb-2">
                        <label>Project title</label>
                        <b-form-input v-model="project.title" placeholder="Enter project title"></b-form-input>
                        <div class="error" v-if="projectTitleErrors[0]">{{projectTitleErrors[0]}}</div>

                    </b-form-group>

                    <b-form-group class="mb-2">
                        <label>Project overview</label>
                        <b-form-textarea
                            v-model="project.description"
                            placeholder="Overview..."
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                        <div class="error" v-if="projectDescriptionErrors[0]">{{projectDescriptionErrors[0]}}</div>

                    </b-form-group>

                    <b-form-group class="mb-3">
                        <b-row>
                            <b-col xl="6" lg="6" sm="12" class="py-0" v-if="!isEdit">
                                <label>Cover image</label>
                                <form>
                                    <div class="form-group">
                                        <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file">
                                        <div class="border p-2 preview-image">
                                            <p class="text mb-0" v-if="!preview">Upload Image</p>
                                            <template v-if="preview">
                                                <img :src="preview" class="img-fluid" />
                                            </template>
                                        </div>
                                        
                                    </div>
                                    
                                    <a href="javascript:void(0);" class="text-theme fz-12 mr-2" v-if="preview" @click="reset() ">Cancel</a>
                                    <a href="javascript:void(0);" class="text-theme fz-12 mr-2" v-if="preview" @click="chooseFiles()">Change</a>
                                    
                                    <div class="error" v-if="projectcoverimgErrors[0]">{{projectcoverimgErrors[0]}}</div>
                                    
                                </form>
                            </b-col>
                            <b-col xl="6" lg="6" sm="12" class="py-0" v-else>
                                <label>Cover image</label>
                                <form>
                                    <div class="form-group" v-if="project.cover_image == ''">
                                        <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file">
                                        <div class="border p-2 preview-image">
                                            <p class="text mb-0" v-if="!preview">Upload Image</p>
                                            <template v-if="preview">
                                                <img :src="preview" class="img-fluid" />
                                            </template>
                                        </div>
                                        
                                    </div>
                                    <div class="form-group" v-else>
                                        <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file">

                                        <div class="border p-2 preview-image">
                                            <template>
                                                <img :src="project.cover_image" class="img-fluid" />
                                            </template>
                                        </div>
                                        
                                    </div>
                                    <span v-if="project.cover_image == ''">
                                        <a href="javascript:void(0);" class="text-theme fz-12 mr-2" v-if="preview" @click="reset() ">Cancel</a>
                                        <a href="javascript:void(0);" class="text-theme fz-12 mr-2" v-if="preview" @click="chooseFiles()">Change</a>
                                    </span>
                                    <span v-else>
                                        <a href="javascript:void(0);" class="text-theme fz-12 mr-2" @click="resetNew();">Change</a>
                                    </span>
                                    
                                    
                                    <div class="error" v-if="projectcoverimgErrors[0]">{{projectcoverimgErrors[0]}}</div>
                                    
                                </form>
                            </b-col>
                        </b-row>
                    </b-form-group>

                    <b-form-group class="mb-2">
                        <b-row>
                            <b-col xl="6" lg="6" sm="12" class="py-0">
                                <label>Project Files</label><br>
                                <form>
                                    <div class="form-group">
                                        <input type="file" accept="image/*" multiple="multiple" @change="previewMultiImage" class="form-control-file" id="my-file-n">
                                        <p class="upload-multiple-files">Upload File</p>
                                        <div class="p-2 preview-image-n">
                                            
                                        </div>
                                        
                                    </div>
                                    <template v-if="project.project_file">
                                        <div v-for="items, ind in project.project_file" :key="ind">
                                            <img :src="items.image" class="img-fluid" />
                                            <h5>{{items.title}}</h5>
                                        </div>
                                    </template>
                                    <template v-if="preview_list.length > 0">
                                        <div v-for="item, index in preview_list" :key="index">
                                            <img :src="item.image" class="img-fluid" />
                                            <b-form-input v-model="preview_list[index].title" class="mt-1 mb-4" placeholder="Enter a caption"></b-form-input>
                                        </div>
                                    </template>
                                    <div class="error" v-if="projectfileErrors[0]">{{projectfileErrors[0]}}</div>
                                </form>
                            </b-col>
                        </b-row>
                    </b-form-group>

                    <hr />
                    <div class="w-100 text-right">
                        <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('add-project-modal');$v.$reset();closemodel()" >Cancel</a>
                        <b-button type="submit" size="lg" class="btn btn-theme">
                            Save
                        </b-button>
                    </div>
                </form>
            </div>
        </b-modal>
        
        <!-- model for confirm reject -->
        <b-modal id="project-confirm-modal" title="Remove Service" centered hide-footer size="md" no-close-on-backdrop> 
            <template>
            <div class="p-5 text-center m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                <h5 class="mt-4">Are you sure, Want to Remove this Project?</h5>
            </div>
            <hr>
            <div>
                <div class="text-right">
                    <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('project-confirm-modal')">Cancel</a>
                    <b-button type="button" class="btn btn-theme" @click="removeProject(removeServiceId)">Confirm</b-button>
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
        props: ["editProject"],
        validations: {
            project:{
                title:{ required },
                description:{ required },
                cover_image:{ required },
                project_file:{ required },
            },
        },
        components: {
            
        },
        data() {
            return {
                project:{
                    title:'',
                    description:'',
                    cover_image:'',
                    project_file:[],
                },
                preview: null,
                image: null,
                preview_list: [],
                image_list: [],
                projectData:[],
                removeProId:'',
                isEdit:false,
                readmore:false,
            };
        },
        computed: {
            projectTitleErrors(){
                const errors = []
                if (!this.$v.project.title.$dirty) return errors 
                !this.$v.project.title.required && errors.push('Title is required')
                return errors
            },
            projectDescriptionErrors(){
                const errors = []
                if (!this.$v.project.description.$dirty) return errors 
                !this.$v.project.description.required && errors.push('Overview is required')
                return errors
            },
            projectcoverimgErrors(){
                const errors = []
                if (!this.$v.project.cover_image.$dirty) return errors 
                !this.$v.project.cover_image.required && errors.push('Cover Image is required')
                return errors
            },
            projectfileErrors(){
                const errors = []
                if (!this.$v.project.project_file.$dirty) return errors 
                !this.$v.project.project_file.required && errors.push('Project File is required')
                return errors
            },
            
        },
        async mounted() { 
            this.getProjectsData();
        },
        methods: {
            ...mapActions(["genericAPIPOSTRequest"]),
            // this fun is for to close model
            closemodel(){
                this.project = {
                    title:'',
                    description:'',
                    cover_image:'',
                    project_file:[],
                };
            },
            // this fun is for to choose file
            chooseFiles() {
                document.getElementById("my-file").click()
            },
            // this fun is for to get projects data
            async getProjectsData(){
                this.projectData =  await this.genericAPIPOSTRequest({
                        requestUrl: "getAgencyProject",
                        params: {},
                });     
            },
            // this fun is for to preview over 
            previewImage(event) {
                var input = event.target;
                if (input.files) {
                    var reader = new FileReader();

                    reader.onload = (e) => {
                        this.preview = e.target.result;
                    }
                    this.image=input.files[0];
                    reader.readAsDataURL(input.files[0]);
                }
            },
            // this fun is for to preview the multiple image upload
            previewMultiImage: function(event) {
                var input = event.target;
                var count = input.files.length;
                // var index = 0;
                if (input.files) {
                    for (let index = 0; index < count; index++) {
                        var reader = new FileReader();
                        reader.onload = (e) => {
                            this.preview_list.push({image:e.target.result,title:''});
                        }
                        this.image_list.push(input.files[index]);
                        reader.readAsDataURL(input.files[index]);
                        
                    }
                    // while(count --) {
                    //     var reader = new FileReader();
                    //     reader.onload = (e) => {
                    //         this.preview_list.push({image:e.target.result,title:''});
                    //     }
                    //     this.image_list.push(input.files[index]);
                    //     reader.readAsDataURL(input.files[index]);
                    //     index ++;
                    // }
                }
            },
            //this fun is for to reset the cover image
            reset() {
                this.image = null;
                this.preview = null;
                this.project.cover_image = '';
            },
            // this fun is for to reset the cover image when edit the project
            resetNew() {
                this.image = null;
                this.preview = null;
                this.project.cover_image = '';
                setTimeout(() => {
                    this.chooseFiles();
                }, 1000);
            },
            /// this fun is for to remove project
            async removeProject(){
                await this.genericAPIPOSTRequest({
                    requestUrl: "UpdateProject",
                    params: { 
                        project_id:this.removeProId,
                        status:'1', 
                    },
                }); 
                
                this.$bvModal.hide('project-confirm-modal');
                this.getProjectsData();
                this.removeProId='';
            },
            //this fun is for to edit project
            editproject(data){
                this.project = data;
                this.$bvModal.show('add-project-modal'); 
                // this.consolelog('project',this.project);
            },
            // this fun is for to add update projects
            async addupdateProjects() {
                if(this.isEdit == false){
                    this.project.cover_image = this.preview;
                    this.project.project_file = this.preview_list;
                    this.$v.project.$touch(); 
                    if (!this.$v.project.$invalid ) { 
                        var res = await this.genericAPIPOSTRequest({
                            requestUrl: "addProject",
                            params: { 
                                user_type       :this.$store.state.accountType,
                                title           :this.project.title,
                                description     :this.project.description,
                                cover_image     :this.project.cover_image,
                                project_file    :this.project.project_file,
                                created_by      :{data:this.getLoginUserIdRequest()},
                            },
                        });  
                        if(res){
                            this.$bvModal.hide('add-project-modal'); 
                            this.getProjectsData();
                            this.$toastr.s('Project Added Successfully');
                            this.project={
                                title:'',
                                description:'',
                                cover_image:'',
                                project_file:[],
                            }
                            this.image = '';
                            this.preview = '';
                            this.preview_list= [];
                            this.image_list= [];
                        }else{
                            this.$toastr.e('Project Not Added');
                        }
                    }
                }else{
                    this.project.cover_image = (this.project.cover_image!='')?this.project.cover_image : this.preview;
                    if(this.preview_list.length > 0){
                        this.preview_list.filter(data=>{
                            this.project.project_file.push({
                                image:data.image,
                                title:data.title,
                                status:1,
                            })
                        })
                    }
                    this.$v.project.$touch(); 
                    if (!this.$v.project.$invalid) { 
                        var updatedata={};
                        updatedata.project_id=this.project.project_id;
                        updatedata.title=this.project.title;
                        updatedata.description=this.project.description;
                        if(this.project.cover_image!=''){
                            updatedata.cover_image=this.project.cover_image;
                        }
                        updatedata.project_file=this.project.project_file;

                        var ress = await this.genericAPIPOSTRequest({
                            requestUrl: "UpdateProject",
                            params: updatedata,
                        });  
                        if(ress){
                            this.$bvModal.hide('add-project-modal'); 
                            this.getProjectsData();
                            this.$toastr.s('Project Updated Successfully');
                            this.isEdit=false;
                            this.project={
                                title:'',
                                description:'',
                                cover_image:'',
                                project_file:[],
                            }
                            this.image = '';
                            this.preview = '';
                            this.preview_list= [];
                            this.image_list= [];
                        }else{
                            this.$toastr.e('Project Not updated');
                        }
                    }
                }
                
            },
        },
    };
</script>
<style scoped>
.border-radius-custom {border-radius:0 0 6px 6px!important;}
.border-radius-custom .card-body{border-radius:0 0 6px 6px!important;}
</style>