<template>
    <b-row class="milestone-timeline-wrap">
        <b-col lg="9" xl="9" sm="12">
            <b-card-group deck>
                <b-card title-class="text-theme font-14" class="bg-white br-20" header-tag="header" footer-tag="footer"
                    header-class="py-4 px-4 bg-white br-200 border-bottom">
                    <template #header>
                        <div class="d-md-flex align-items-center">
                            <h4 class="mb-0 fz-24 fw-500 text-black"><b>Recent Files</b></h4>
                            <div class="ml-auto d-flex align-items-center text-theme">
                                <b-button size="sm" variant="outline-theme" @click="$emit('refreshRecentFiles')">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                    </svg>
                                </b-button>
                                <b-button size="sm" variant="outline-theme" class="ml-2 d-flex" v-b-modal.modal-upload>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="currentColor" class="bi bi-cloud-arrow-up pr-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                    </svg>
                                    Upload
                                </b-button>
                            </div>
                        </div>
                    </template>
                    <b-card-text>
                        <div class="back-wrapper" v-if="contractDetails.recentFiles.length > 0">
                            <!----- Loop Starts ----->
                            <div class="inner-wrapper mb-4" v-for="(recentfile,index) in contractDetails.recentFiles" :key="index">
                                <div class="date-time-wrap text-center mb-4">
                                    <h5 class="text-muted mb-0">{{recentfile.key}}</h5>
                                </div>
                                <span v-for="(recentValue, ind) in recentfile.value" :key="ind">
                                    <div class="d-flex align-items-normal">
                                        <div class="img-hold mr-2 border br-50 shadow pos-rel w-7">
                                            <img :src="recentValue.profile_picture_path"
                                                class="img-fluid br-20">
                                            <span class="status-icon active"></span>
                                        </div>
                                        <div class="content-hold w-93">
                                            <h5>{{recentValue.first_name}} {{ recentValue.last_name }}<span class="text-muted">{{recentValue.time}}</span></h5>
                                            <h6 class="mb-2 text-muted">{{recentValue.message}}</h6>
                                            <h6 class="text-muted d-flex align-items-end">
                                                {{recentValue.files.length }} Files
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor"
                                                    class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </h6>
                                        </div>
                                    </div>

                                    <div class="attachment-wrapper">
                                        <b-row v-if="recentValue.files.length > 0">
                                            <template v-for="(file,find) in recentValue.files" >
                                                <b-col xl="1" lg="1" sm="3" :key="find"  v-if="file.type == 'jpg' || file.type == 'png' || file.type == 'jpeg'">
                                                    <div class="img-hold">
                                                        <img :src="$store.state.baseUrlImg+'/'+recentValue.file_path+'/'+file.name"
                                                            class="img-fluid m-auto">
                                                    </div>
                                                </b-col>
                                            </template>
                                            
                                        </b-row>
                                        <b-row v-if="recentValue.files.length > 0">
                                            <template v-for="(file,finds) in recentValue.files">
                                                <b-col xl="6" lg="6" sm="12" v-if="file.type == 'pdf' || file.type == 'word' || file.type == 'jpeg'" :key="finds" >
                                                    <div class="border br-20 p-2">
                                                        <div class="d-flex align-items-center">
                                                            <svg v-if="file.type == 'pdf'" xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="#c10000" class="mr-2 bi bi-filetype-pdf" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                                            </svg>
                                                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="mr-2 bi bi-filetype-doc" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-7.839 9.166v.522c0 .256-.039.47-.117.641a.861.861 0 0 1-.322.387.877.877 0 0 1-.469.126.883.883 0 0 1-.471-.126.868.868 0 0 1-.32-.386 1.55 1.55 0 0 1-.117-.642v-.522c0-.257.04-.471.117-.641a.868.868 0 0 1 .32-.387.868.868 0 0 1 .471-.129c.176 0 .332.043.469.13a.861.861 0 0 1 .322.386c.078.17.117.384.117.641Zm.803.519v-.513c0-.377-.068-.7-.205-.972a1.46 1.46 0 0 0-.589-.63c-.254-.147-.56-.22-.917-.22-.355 0-.662.073-.92.22a1.441 1.441 0 0 0-.589.627c-.136.271-.205.596-.205.975v.513c0 .375.069.7.205.973.137.271.333.48.59.627.257.144.564.216.92.216.357 0 .662-.072.916-.216.256-.147.452-.356.59-.627.136-.274.204-.598.204-.973ZM0 11.926v4h1.459c.402 0 .735-.08.999-.238a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.59-.68c-.263-.156-.598-.234-1.004-.234H0Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.141 1.141 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082H.79V12.57Zm7.422.483a1.732 1.732 0 0 0-.103.633v.495c0 .246.034.455.103.627a.834.834 0 0 0 .298.393.845.845 0 0 0 .478.131.868.868 0 0 0 .401-.088.699.699 0 0 0 .273-.248.8.8 0 0 0 .117-.364h.765v.076a1.268 1.268 0 0 1-.226.674c-.137.194-.32.345-.55.454a1.81 1.81 0 0 1-.786.164c-.36 0-.664-.072-.914-.216a1.424 1.424 0 0 1-.571-.627c-.13-.272-.194-.597-.194-.976v-.498c0-.379.066-.705.197-.978.13-.274.321-.485.571-.633.252-.149.556-.223.911-.223.219 0 .421.032.607.097.187.062.35.153.489.272a1.326 1.326 0 0 1 .466.964v.073H9.78a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.802.802 0 0 0-.398-.097.814.814 0 0 0-.475.138.868.868 0 0 0-.301.398Z"/>
                                                            </svg>
                                                            <div class="content-hold">
                                                                <h6 class="mb-0">{{file.name}}</h6>
                                                                <h6 class="mb-0 text-muted">{{file.size}}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-col>
                                            </template>
                                            
                                        </b-row>
                                    </div>
                                </span>
                            </div>
                            <!----- Loop Ends ----->
                        </div>
                        <div class="back-wrapper" v-else>
                            <div class="py-12 px-12 text-center m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#cccccc" class="bi bi-folder2-open mb-4 m-auto" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                            </svg>
                            <p class="fz-18 text-muted fw-500">Files shared in messages, work submissions, or as part of the requirements, will be shown here.</p>
                            </div>
                        </div>
                    </b-card-text>
                </b-card>
            </b-card-group>
        </b-col>
        <!-- upload file modal -->
        <b-modal id="modal-upload" centered hide-header hide-footer no-close-on-backdrop> 
            <h4 class="fw-600 fz-20">Upload File</h4>
            <hr>
            <b-form>
                <b-form-group>
                <label class="mb-1 fz-16">Message to {{ contractDetails.userDetails.first_name + ' '+contractDetails.userDetails.last_name}} (Optional)</label>
                <b-form-textarea
                    v-model="uploadRecentfiles.message"
                    id="messsage"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                </b-form-group>
                <b-button class="btn-outline-theme d-flex align-items-center mt-4" @click="chooseContractFiles()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                </svg>
                Attach file
                </b-button>
                <div class="error" v-if="uploadRecentfiles.files.length == 0 && showrecentfileError">Attachment Is required</div>

                <input id="contractfileUpload" hidden type="file" multiple @change="UploadContractFile"
                accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf">
                <!-- <div class="align-items-center">
                    <ul class="ml-2 mt-4 attachment" v-if="uploadRecentfiles.files.length > 0" style="border: 1px dashed #6666664d; padding: 6px 0px;">
                        <i class="fa fa-file border-none"></i>
                        <li
                            class="attatchment-wrap mr-5 mb-2"
                            v-for="(attc, index) in uploadRecentfiles.files"
                            :key="index"
                            style="border: 1px dashed #c1000057; border-radius: 20px; background-color: #c100000d; padding: 2px 10px; margin-right: 5px; display: inline-block;"
                        >
                            <a href="javascript:void(0)"><span class="ml-2 text-theme">{{attc.name}}</span></a>
                            <i class="fa fa-close ml-2" style="color: #c10000;" @click="removeAttachment(index)"></i>
                        </li>
                    </ul>
                </div> -->
                <div>
                  <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="uploadRecentfiles.files.length > 0" style="padding: 6px 0px;">
                    <template v-for="(attc, index) in uploadRecentfiles.files">
                      <li class="attatchment-wrap mr-5 mb-2"  :key="index" v-if="index >= 0" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;">
                        <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                        <a href="javascript:void(0)"><span class="ml-2 text-theme">{{attc.name}}</span></a>
                        <i class="fa fa-trash border-none fz-18 text-danger cursor-pointer pl-2" @click="removeAttachment(index)"></i>
                      </li>
                    </template>
                  </ul>
                </div>
            </b-form>
            <div class="w-100 text-right mt-4">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-upload')">Cancel</a>
                <b-button
                size="lg"
                class="btn btn-theme"
                @click="updateRecentFilesData()"
                >
                Upload
                </b-button>
            </div>
        </b-modal>
    </b-row>
</template>
<script>
import { mapActions } from "vuex";

export default{
    props:['contractDetails'],
    data() {
        return {
            uploadRecentfiles:{
                job_application_id:'',
                message:'',
                file_path:'',
                files:[],
            },
            showrecentfileError:false,
        }
    },
    methods: {
        ...mapActions(['genericAPIPOSTRequest']),
        // this fun is for to choose file
        chooseContractFiles() {
            document.getElementById("contractfileUpload").click()
        },
        // this fun is for to =remove attachment
        removeAttachment(_i) {
            this.uploadRecentfiles.files.splice(_i, 1);
            document.getElementById("fileUpload").value = "";
        },
        // this function is for to upload attachment
        async UploadContractFile(e) {
            for (let index = 0; index < e.target.files.length; index++) {
                var files = e.target.files[index];
                // console.log('file type',files['type']);
                var ext = files.name.split('.').pop();
                if (ext == "pdf" || ext == "word" || ext == "png" || ext == "jpeg" || ext == "jpg") {
                    const fileSize = files.size / 1024 / 1024; // in MiB
                    if (fileSize <= 25) {
                        // if (fileSize >= 2 && fileSize <= 40) {
                        const formData = new FormData();
                        formData.append('image', files);
                        formData.append('job_application_id', this.contractDetails.proposalDetails.job_application_id);
                        var getData = await this.genericAPIPOSTRequest({
                            requestUrl: "contractFileupload",
                            params: formData,
                        });
                        if (getData.filename != "") {
                            this.uploadRecentfiles.files.push({'type':ext,'name':getData.name,'size':getData.size});
                            this.uploadRecentfiles.file_path = (this.uploadRecentfiles.file_path=='')?getData.uploadPath:this.uploadRecentfiles.file_path;
                        } else {
                            this.$toastr.e('This File was Not uploaded');
                        }
                    } else {
                        this.$toastr.e('File Size Should be Less Than 25 Mb');
                    }
                } else {
                    this.$toastr.e('Only Allow Files (PDF, Word, Png, Jpg, Jpeg)');
                }
            }
            document.getElementById("contractfileUpload").value = "";
        },
        // this fun is for to upload data of recent files to database
        async updateRecentFilesData(){
            if(this.uploadRecentfiles.files.length > 0){
                var response = await this.genericAPIPOSTRequest({
                    requestUrl: "addContractfiles",
                    params: {
                        files:this.uploadRecentfiles.files,
                        file_path:this.uploadRecentfiles.file_path,
                        job_application_id:this.contractDetails.proposalDetails.job_application_id,
                        message:this.uploadRecentfiles.message,
                        type:'Recent-Files',
                    },
                });
                if(response){
                    this.uploadRecentfiles={
                        job_application_id:'',
                        message:'',
                        file_path:'',
                        files:[],
                    };
                    this.$emit('refreshRecentFiles');
                    this.$toastr.s('Recent File Uploaded Successfully');
                    this.$bvModal.hide('modal-upload');
                    this.showrecentfileError=false;
                }else{
                    this.$toastr.e('Recent File Not Uploaded');
                }
            }else{
                this.showrecentfileError=true;
                return false;
            }
        },
    },
}
</script>