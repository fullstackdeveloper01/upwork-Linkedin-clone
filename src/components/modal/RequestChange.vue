<template>
    <b-modal id="request-change-modal" size="lg" title="Request Changes" class="request-change-modal" centered hide-footer no-close-on-backdrop >
        <div class="text-left">
            <div class="card-section">
                <b-form @submit.prevent="SubmitreviewWork">
                    <b-row>
                        <b-col xl="12" lg="12" sm="12">
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <b-form-textarea
                                        v-model="requestChange.message"
                                        id="textarea"
                                        rows="3"
                                        max-rows="6"
                                        placeholder="Tell freelancer whats needs to be done in order to complete the milestone"
                                    ></b-form-textarea>
                                    <div class="error" v-if="request_message[0] && $v.requestChange.message.$error">{{request_message[0]}}</div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <label class="fz-16 fw-600">Include a file (Optional)</label><br>
                                    <input  id="fileUploadatt"
                                    hidden type="file"
                                    @change="UploadFileatt"
                                    accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf"
                                    >
                                    <b-button class="btn-outline-theme d-flex align-items-center" @click="chooseFilesatt()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                                        </svg>
                                        Attach File
                                    </b-button>
                                    <small>Up to 25 MB</small>
                                    <div>
                                        <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="attachmentRequestbtn" style="padding: 6px 0px;">
                                            <li class="attatchment-wrap mr-5 mb-2" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;" v-for="(attr,index) in requestChange.attachment" :key="index">
                                                <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                                <a :href="UploadedRequestFileName+'/'+attr" target="_blank"><span class="ml-2 text-theme">{{attr}}</span></a>
                                                <i class="fa fa-trash border-none fz-18 text-danger cursor-pointer pl-2" @click="removesubmittedAttr(index)"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <div class="text-right w-100 border-top pt-3">
                                        <a href="javascript:void(0);" class="mr-2 text-theme" @click="$bvModal.hide('request-change-modal'); requestChange = {message:'',attachment:[]}">
                                            Cancel
                                        </a>
                                        <b-button type="submit" size="lg" class="btn btn-theme" v-b-toggle.review-sidebar-modal>
                                            Submit Work
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-form>
            </div>
        </div>
    </b-modal>
</template>
<script>

import { mapActions } from "vuex";
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
    props:["updateSubmitData","contractDetails"], 
    mixins: [validationMixin],

    validations: {
        requestChange:{
            message:{ required },
        },
    },
    data() {
        return {
            requestChange:{
                message:'',
                attachment:[],
            },
            attachmentRequestbtn:false,
            UploadedRequestFileName:'',
            uploadRecentfiles:{
                job_application_id:'',
                message:'',
                file_path:'',
                files:[],
            },
        };
    },
    components: {
    },
    computed: {
        request_message() {
            const errors = []
            if (!this.$v.requestChange.message.$dirty) return errors
            !this.$v.requestChange.message.required && errors.push('Message is required')
            return errors
        },
    },
    mounted() {
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to choose file
        chooseFilesatt() {
            document.getElementById("fileUploadatt").value = "";
            document.getElementById("fileUploadatt").click();
        },
        // this fun is for to request change of work
        async SubmitreviewWork(){
            this.$v.requestChange.$touch();
            if (!this.$v.requestChange.$invalid) {
                this.updateSubmitData.request_message = this.requestChange.message;
                this.updateSubmitData.request_attachment = this.requestChange.attachment;
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: 'updateMilestoneWork',
                    params: this.updateSubmitData,
                });
                if (res) {
                    this.$emit("controlparent");
                    this.$bvModal.hide('request-change-modal');
                    this.$toastr.s('work Status updated Successfull');
                }
            }
        },
        // this function is for to upload attachment
        async UploadFileatt(e){ 
            var files=e.target.files[0];
            // console.log('files',files)
            var ext = files.name.split('.').pop();
            if(ext=="pdf" || ext=="word" || ext=="png"|| ext=="jpeg"|| ext=="jpg"){
                const fileSize = files.size / 1024 / 1024; // in MiB
                if ( fileSize <= 25) {
                    const formData = new FormData();
                    formData.append('image', files);
                    formData.append('job_id', this.contractDetails.proposalDetails.jobs_id);
                    var getData = await this.genericAPIPOSTRequest({
                        requestUrl: "uploadMilestoneFile",
                        params: formData,
                    });
                    if(getData.filename!=""){
                        this.requestChange.attachment.push(getData.name);
                        this.attachmentRequestbtn= true;
                        this.UploadedRequestFileName = getData.base_urlWithpath

                        this.uploadRecentfiles.files[0]={'type':ext,'name':getData.name,'size':getData.size};
                        this.uploadRecentfiles.file_path = getData.uploadPath;
                    }
                }else{
                    this.$toastr.e('File Size Should be Less Than 25 Mb');
                }
            } else{
                this.$toastr.e('Only Allow Files (PDF, Word, Png, Jpg, Jpeg)');
            }
            
        },
        // this fun is for to remove review work file
        removesubmittedAttr(_i){
            this.requestChange.attachment.splice(_i,1); 
            this.uploadRecentfiles.files.splice(_i,1); 
            if (this.requestChange.attachment.length == 0) {
                this.UploadedRequestFileName ='';
                this.attachmentRequestbtn = false;     
            }
        },
    },
};
</script>