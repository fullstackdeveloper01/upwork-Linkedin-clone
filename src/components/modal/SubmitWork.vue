<template>
    <!-- // this is approve & pay model -->
    <b-modal id="submitWork-modal" size="lg" title="Submit work for payment" class="payment-modal" centered hide-footer no-close-on-backdrop >
        <div class="text-left">
            <div class="card-section">
                <b-form @submit.prevent="SubmitWorkForpayment">
                    <b-row>
                        <b-col xl="12" lg="12" sm="12">
                            <h4 class="fz-18 fw-600 mb-1">{{submitWorkPayment.description}}</h4>
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <span class="badge badge-theme mb-3">Active & Funded</span>
                                    <div class="d-flex align-items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 mr-2" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                        Due {{submitWorkPayment.dueDate}}
                                    </div>
                                    <p class="mb-0 fz-16 text-black">Your payment will be released once {{shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} approves your work.</p>
                                    <hr>
                                </b-col>
                            </b-row>
                            <b-row class="mt-0">
                                <b-col xl="12" lg="12" sm="12">
                                    <label class="fz-16 fw-600 mb-3">Request a payment for this milestone</label><br>
                                    <b-form-radio v-model="checkamount" value="A" checked @change="amountInput=false,submitWorkPayment.pay = submitWorkPayment.amount;submitWorkPayment.other_amount=0">${{submitWorkPayment.amount}}</b-form-radio>
                                    <b-form-radio v-model="checkamount" value="B" @change="amountInput=true; submitWorkPayment.pay = submitWorkPayment.amount;" class="mb-0">Other amount</b-form-radio>
                                    <b-form-input 
                                        type="text"
                                        oninput="this.value=this.value.replace(/[^0-9.,]/g,'');" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"
                                        v-model="submitWorkPayment.other_amount"
                                    v-if="amountInput"></b-form-input>
                                    <div class="error" v-if="work_pay[0] && $v.submitWorkPayment.pay.$error">{{work_pay[0]}}</div>
                                    <div class="error" v-if="work_other_amount[0] && $v.submitWorkPayment.other_amount.$error">{{work_other_amount[0]}}</div>
                                    <div class="error" v-if="work_other_amount[0] || parseInt(submitWorkPayment.other_amount) > parseInt(submitWorkPayment.pay)">Other Amount will Not be greater then milestone Amount</div>
                                    <div class="error" v-if="work_other_amount[0] || parseInt(submitWorkPayment.other_amount) == 0 ">Other Amount will be greater then Zero</div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <label class="fz-16 fw-600">Message to {{contractDetails.userDetails.first_name+' '+contractDetails.userDetails.last_name}}</label><br>
                                    <b-form-textarea
                                        v-model="submitWorkPayment.message"
                                        id="textarea"
                                        rows="3"
                                        max-rows="6"
                                        placeholder="Let them know about the work you're submitting"
                                        
                                    ></b-form-textarea>
                                    <div class="error" v-if="work_message[0] && $v.submitWorkPayment.message.$error">{{work_message[0]}}</div>
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
                                        <ul  class="ml-2 pl-0 mt-4 attachment "  v-if="attachmentbtn" style="padding: 6px 0px;">
                                            <li class="attatchment-wrap mr-5 mb-2" style="border-radius: 20px;padding: 2px 10px;margin-right: 5px;" v-for="(attr,index) in submitWorkPayment.attachment" :key="index">
                                                <i class="fa fa-paperclip border-none text-black fz-18 rotate-45"></i>
                                                <a :href="UploadedFileName+'/'+attr" target="_blank"><span class="ml-2 text-theme">{{attr}}</span></a>
                                                <i class="fa fa-trash border-none fz-18 text-danger cursor-pointer pl-2" @click="removesubmittedAttr(index)"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <!-- <div class="error" v-if="work_attachment[0] && $v.submitWorkPayment.attachment.$error">{{work_attachment[0]}}</div> -->
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <div class="text-right w-100 border-top pt-3">
                                        <a href="javascript:void(0);" class="mr-2 text-theme" @click="$bvModal.hide('submitWork-modal')">
                                            Cancel
                                        </a>
                                        <b-button type="submit" size="lg" class="btn btn-theme">
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
    mixins: [validationMixin],
    validations: {
        submitWorkPayment:{
            pay             :{ required },
            other_amount    :{ required },
            message         :{ required },
        },
    },
    props:["submitWorkPayment","contractDetails","chatroomdata"], 
    data() {
        return {
            attachmentbtn   : false,
            checkamount     : 'A',
            amountInput     : '',
            uploadRecentfiles:{
                job_application_id  : '',
                message             : '',
                file_path           : '',
                files               : [],
            },
        };
    },
    computed: {
        work_pay() {
            const errors = []
            if (!this.$v.submitWorkPayment.pay.$dirty) return errors
            !this.$v.submitWorkPayment.pay.required && errors.push('Amount is required')
            return errors
        },
        work_other_amount() {
            const errors = []
            if (!this.$v.submitWorkPayment.other_amount.$dirty) return errors
            !this.$v.submitWorkPayment.other_amount.required && errors.push('Amount is required')
            return errors
        },
        work_message() {
            const errors = []
            if (!this.$v.submitWorkPayment.message.$dirty) return errors
            !this.$v.submitWorkPayment.message.required && errors.push('Message is required')
            return errors
        },
    },
    mounted() {
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fiun is for to submit work for payment
        async SubmitWorkForpayment(){
            this.$v.submitWorkPayment.$touch();
            if (!this.$v.submitWorkPayment.$invalid) {
                if(parseInt(this.submitWorkPayment.other_amount) == 0 || parseInt(this.submitWorkPayment.other_amount) > parseInt(this.submitWorkPayment.pay)){
                    return false;
                }
                var submitwork={
                    job_id              : this.submitWorkPayment.job_id,
                    milestone_id        : this.submitWorkPayment.milestone_id,
                    pay                 : this.submitWorkPayment.pay,
                    other_amount        : this.submitWorkPayment.other_amount,
                    message             : this.submitWorkPayment.message,
                    attachment          : this.submitWorkPayment.attachment,
                }
                var response = await this.genericAPIPOSTRequest({
                    requestUrl: "addMilestoneWork",
                    params: submitwork,
                });
                if(response){
                    this.$v.$reset();
                    this.amountInput                        = false;
                    this.submitWorkPayment.other_amount     = 0;
                    this.submitWorkPayment.message          = '';
                    this.submitWorkPayment.attachment       = [];
                    this.checkamount                        = 'A';
                    await this.genericAPIPOSTRequest({
                        requestUrl:'sendMessage',
                        params: {
                            chat_room_id    : this.chatroomdata.chat_room_id,
                            type            : 1,
                            message         : this.submitWorkPayment.message,
                        },
                    });
                    if(this.uploadRecentfiles.files.length > 0){
                        var res = await this.genericAPIPOSTRequest({
                            requestUrl: "addContractfiles",
                            params: {
                                files               : this.uploadRecentfiles.files,
                                file_path           : this.uploadRecentfiles.file_path,
                                job_application_id  : this.contractDetails.proposalDetails.job_application_id,
                                message             : this.submitWorkPayment.message,
                                type                :'Work-Files',
                            },
                        });
                        if(res){
                            this.uploadRecentfiles = {
                                job_application_id  : '',
                                message             : '',
                                file_path           : '',
                                files               : [],
                            };
                        }
                    }
                    this.$emit('refreshSubmittedwork');
                    this.$toastr.s('work submitted Successfull');
                    this.$bvModal.hide('submitWork-modal');
                }
            }
        },
         // this fun is for to remove review work file
        removesubmittedAttr(_i){
            this.submitWorkPayment.attachment.splice(_i,1); 
            this.uploadRecentfiles.files.splice(_i,1); 
            if (this.submitWorkPayment.attachment.length == 0) {
                this.UploadedFileName   = '';
                this.attachmentbtn      = false;     
            }
        },
        // this function is for to upload attachment
        async UploadFileatt(e){ 
            var files   = e.target.files[0];
            var ext     = files.name.split('.').pop();
            if(ext=="pdf" || ext=="word" || ext=="png"|| ext=="jpeg"|| ext=="jpg"){
            const fileSize = files.size / 1024 / 1024; // in MiB
            if ( fileSize <= 25) {
                const formData      = new FormData();
                formData.append('image', files);
                formData.append('job_id', this.contractDetails.proposalDetails.jobs_id);
                var getData = await this.genericAPIPOSTRequest({
                    requestUrl      : "uploadMilestoneFile",
                    params          : formData,
                });
                if(getData.filename!=""){
                    this.submitWorkPayment.attachment.push(getData.name);
                    this.attachmentbtn                  = true;
                    this.UploadedFileName               = getData.base_urlWithpath
                    this.uploadRecentfiles.files.push({'type':ext,'name':getData.name,'size':getData.size});
                    this.uploadRecentfiles.file_path    = getData.uploadPath;
                }else{
                    this.refundData.attachment          = '';
                }
            }else{
                this.$toastr.e('File Size Should be Less Than 25 Mb');
            }
            } else{
            this.$toastr.e('Only Allow Files (PDF, Word, Png, Jpg, Jpeg)');
            }
            
        },
        // this fun is for to choose file
        chooseFilesatt() {
            document.getElementById("fileUploadatt").value = "";
            document.getElementById("fileUploadatt").click();
        },
    },
};
</script>