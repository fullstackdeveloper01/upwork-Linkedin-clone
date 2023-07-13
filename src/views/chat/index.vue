<template>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active">
            <div class="container-fluid no-gutter app mart-81 mb-100 mb-0">
                <div class="row app-one m-0">
                    <div class="col-sm-2 side p-0">
                        <div class="side-one">
                            <div class="row heading searchbox">
                                <div class="col-sm-12 searchBox-inner">
                                    <div class="d-flex align-items-center">
                                        <div class="form-group has-feedback width-95">
                                            <input id="searchText" v-model="search" type="text" class="form-control" @keyup="getChatlist()" placeholder="Search">
                                        </div>
                                        <div class="ml-auto width-5 bg-white">
                                            <b-dropdown size="md" right  variant="link" toggle-class="text-decoration-none" no-caret>
                                                <template #button-content>
                                                    <i class="fa fa-ellipsis-v text-black mr-3" aria-hidden="true"></i>
                                                </template>
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <a href="javascript:void(0);" class="text-black" @click="checkAutoresponse()" v-b-modal.out-of-office> Out of office</a>
                                                </b-dropdown-item>

                                                <b-modal id="out-of-office" size="lg" title="Out-of-Office Responder" centered hide-footer no-close-on-backdrop>
                                                    <form @submit.prevent="submitAutoResponse">
                                                    <div>
                                                        <div class="d-flex align-items-center mb-3">
                                                            <label class="switch">
                                                                <input type="checkbox" v-model="autoResponde.active" @click="toggleCheckbox">
                                                                <div class="slider round"></div>
                                                            </label>
                                                            <p class="ml-2 mb-0">Send automatic replies to incoming messages</p>
                                                        </div>
                                                        <span v-if="autoResponde.active">
                                                            <p>Your time zone is currently set to {{autoResponde.timezone}}. <a href="javascript:void(0);" class="text-theme" @click="changeTimeZone = true;">Change</a></p>
                                                            <p v-if="changeTimeZone">Select timezone for out of office response.</p>
                                                            <b-row v-if="changeTimeZone">
                                                                <b-col xl="6" lg="6" sm="12">
                                                                    <b-form-group>
                                                                        <b-form-select
                                                                        v-model="autoResponde.timezone_id"
                                                                        :options="timezoneList"
                                                                        class="form-control"
                                                                        value-field="timezone_id"
                                                                        text-field="name"
                                                                        :error-messages="timeZoneError"
                                                                        @input="$v.autoResponde.timezone_id.$touch()"
                                                                        @blur="$v.autoResponde.timezone_id.$touch()"
                                                                        ></b-form-select>
                                                                        <div class="error" v-if="timeZoneError[0]">{{timeZoneError[0]}}</div>
                                                                    </b-form-group>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col xl="6" lg="6" sm="12">
                                                                    <b-form-group>
                                                                        <label class="fz-16">First day</label>
                                                                        <b-form-datepicker  v-model="autoResponde.from_date" :value="autoResponde.from_date" :min="currentDate" @input="autoResponde.to_date = autoResponde.from_date" required class="mb-2"></b-form-datepicker>
                                                                        <div class="error" v-if="fromDateError[0]">{{fromDateError[0]}}</div>
                                                                        <div class="error" v-if="autoResponde.from_date < currentDate">
                                                                            <div class="up-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M8 7.927V9H6V2h2v5.927zM7 12a1 1 0 110-2 1 1 0 010 2zM7 0C3.15 0 0 3.15 0 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7z"></path></svg></div>
                                                                            Date should be greater than {{currentDate}}
                                                                        </div>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col xl="6" lg="6" sm="12">
                                                                    <b-form-group>
                                                                        <label class="fz-16">Last day</label>
                                                                        <b-form-datepicker  v-model="autoResponde.to_date" :value="autoResponde.to_date" :min="new Date(autoResponde.from_date).toISOString().substr(0, 10)"  required class="mb-2"></b-form-datepicker>
                                                                        <div class="error" v-if="toDateError[0]">{{toDateError[0]}}</div>
                                                                        <div class="error" v-if="autoResponde.to_date < currentDate">
                                                                            <div class="up-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M8 7.927V9H6V2h2v5.927zM7 12a1 1 0 110-2 1 1 0 010 2zM7 0C3.15 0 0 3.15 0 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7z"></path></svg></div>
                                                                            Date should be greater than {{currentDate}}
                                                                        </div>
                                                                    </b-form-group>
                                                                </b-col>
                                                                <b-col xl="12" lg="12" sm="12">
                                                                    <b-form-group>
                                                                        <label class="fz-16">Your message</label>
                                                                        <b-form-textarea
                                                                        id="textarea"
                                                                        v-model="autoResponde.message"
                                                                        placeholder="Your message here..."
                                                                        rows="3"
                                                                        max-rows="6"
                                                                        ></b-form-textarea>
                                                                        <div class="error" v-if="messageError[0]">{{messageError[0]}}</div>
                                                                    </b-form-group>
                                                                </b-col>
                                                            </b-row>
                                                            <p class="mt-3" v-if="$store.state.accountType != 'client'"><strong>Note:</strong> This setting does not affect your <a href="javascript:void(0);" class="text-theme">freelancer availability</a>. You can adjust your availability on the <a href="javascript:void(0);" class="text-theme">Find Work</a> page</p>
                                                            <p><b>You will appear as Out of Office across all your companies on Qapin.</b></p>
                                                        </span>
                                                    </div>
                                                    <template>
                                                        <div class="w-100 text-right">
                                                            <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('out-of-office');$v.$reset()">
                                                                Cancel
                                                            </a>
                                                            <b-button size="lg" class="btn btn-theme" type="submit"
                                                            :disabled="(autoResponde.from_date > currentDate ) ? true : false "
                                                            >
                                                                Save
                                                            </b-button>
                                                        </div>
                                            
                                                    </template>
                                                    </form>
                                                </b-modal>
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <label class="text-black fz-16"> Filter rooms by</label>
                                                </b-dropdown-item>
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <a href="javascript:void(0);" class="text-black ml-3" @click="sort = 'ASC';getChatlist()"> <i class="fa fa-check text-muted mr-3" aria-hidden="true" v-if="sort =='ASC'"></i> All rooms</a>
                                                </b-dropdown-item>
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <a href="javascript:void(0);" class="text-black ml-3" @click="sort = 'DESC'; getChatlist()"> <i class="fa fa-check text-muted mr-3" aria-hidden="true" v-if="sort =='DESC'"></i> All rooms, recent first</a>
                                                </b-dropdown-item>
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <a href="javascript:void(0);" class="text-black ml-3" @click="sort = 'unread'; getChatlist()"> <i class="fa fa-check text-muted mr-3" aria-hidden="true" v-if="sort =='unread'"></i> Unread only</a>
                                                </b-dropdown-item>
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <a href="javascript:void(0);" class="text-black ml-3" @click="sort = 'interview'; getChatlist()"> <i class="fa fa-check text-muted mr-3" aria-hidden="true" v-if="sort =='interview'"></i> Interview only</a>
                                                </b-dropdown-item> 
                                                <b-dropdown-item href="javascript:void(0);">
                                                    <a href="javascript:void(0);" class="text-black ml-3" @click="sort = 'contract'; getChatlist()"> <i class="fa fa-check text-muted mr-3" aria-hidden="true" v-if="sort =='contract'"></i> Contract only</a>
                                                </b-dropdown-item>
                                            </b-dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="contract-options p-3 bg-white border-bottom" v-if="sort!='' && sort!='ASC'">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <i class="fa fa-sliders mr-2" aria-hidden="true"></i>
                                        <span class="text-muted">{{(sort=='DESC')?'All rooms, recent first':(sort=='unread')?'Unread only':(sort=='interview')?'Interview only':(sort=='contract')?'Contract only':''}}</span>
                                    </div>
                                    <div class="ml-auto">
                                        <a href="javascript:void(0);" @click="sort ='ASC'; getChatlist()">
                                            <i class="fa fa-times text-black" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-name-wrap" v-if="roomlist.length > 0 ">
                                <template v-for="(data,index) in roomlist" >
                                    <div class="row sideBar-body" :key="index" :class="(data.chat_room_id == chatroomdata.chat_room_id)?'unread':''"  >
                                        <a href="javascript:void(0)" @click="getselectedusermessage(data)" v-if="$store.state.accountType=='client'" class="d-flex align-items-center p-0">
                                            <div class="sideBar-avatar">
                                                <div class="avatar-icon">
                                                    <img :src="data.user_image">
                                                    <span class="status-icon"></span>
                                                </div>
                                            </div>
                                            <div class="sideBar-main">
                                                <div class="sideBar-name">
                                                    <h5 class="name-meta mb-0 fz-16 p-0">{{data.user_first_name}} {{data.user_last_name}}</h5>
                                                    <h6 class="text-black mb-0 fz-16 job-title">{{data.job_title}} </h6>
                                                    <!-- <div class="absolute w-4 h-4 text-xs text-center text-white rounded-full bg-primary-500 notification-status">0</div> -->
                                                    <span class="text-muted mb-0 fz-14">{{data.message}}</span>
                                                </div>
                                                <div class="sideBar-time">
                                                    <span class="time-meta pull-right">{{data.time}}</span>
                                                    <div class="absolute w-4 h-4 text-xs text-center text-white rounded-full bg-primary-500 notification-status" v-if="data.unreadMessage > 0">{{data.unreadMessage}}</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" @click="getselectedusermessage(data)" v-else-if="data.status == 1" class="d-flex align-items-center p-0">
                                            <div class="sideBar-avatar">
                                                <div class="avatar-icon">
                                                    <img :src="data.client_image">
                                                    <span class="status-icon"></span>
                                                </div>
                                            </div>
                                            <div class="sideBar-main">
                                                <div class="sideBar-name">
                                                    <h5 class="name-meta mb-0 fz-16 p-0">{{data.client_first_name}} {{data.client_last_name}}</h5>
                                                    <h6 class="text-black mb-0 fz-16 job-title">{{data.job_title}}</h6>
                                                    <span class="text-muted mb-0 fz-14">{{data.message}}</span>
                                                </div>
                                                <div class="sideBar-time">
                                                    <span class="time-meta pull-right">{{data.time}}</span>
                                                <div class="absolute w-4 h-4 text-xs text-center text-white rounded-full bg-primary-500 notification-status" v-if="data.unreadMessage > 0">{{data.unreadMessage}}</div>

                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </template>
                            </div>
                            <div class="chat-name-wrap left-chat-no-data sidesection" v-else>
                                <div class="row sideBar-body" >
                                    <a href="javascript:void(0)">
                                        <div class="col-sm-12 col-xl-12 sideBar-avatar">
                                            <div class="image-holder">
                                                <img src="http://qapin_mvp5.manageprojects.in//upload/profile_image/communications.png" alt="Chat" class="img-fluid">
                                            </div>
                                            <h4 class="fz-16 fw-600 mb-0 text-muted">No active members found</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b-col :xl="(hidePeople == false) ? '8' : '10'" :lg="(hidePeople == false) ? '8' : '10'" sm="12" class="conversation">
                        <b-row class="heading" v-if="$store.state.accountType=='client' && (messagelist.length > 0 ||roomlist.length > 0)">
                            <b-col xl="12" lg="12" sm="12" class="py-1">
                                <div class="heading-avatar d-flex align-items-center">
                                    <div class="width-98 d-flex align-items-center">
                                        <div class="heading-name">
                                            <a class="heading-name-meta mb-0 pt-0 fz-18 fw-600">{{ currentUser.user_first_name }} {{ currentUser.user_last_name }}</a>
                                            <p class="ml-1 mb-0 fz-14 text-black">12:09 AM EST <span class="heading-online text-muted mt-0 fz-14" @click="$router.push({'path':'client/jobpostreview','name':'index',params:{'pid':currentUser.uniq_id}})">{{ currentUser.job_title }}</span></p>
                                        </div>
                                    </div>
                                    <a class="ml-auto width-2 text-right">
                                        <i class=" text-black mr-3" :class="(hidePeople == false) ? 'fa fa-chevron-right' : 'fa fa-chevron-left'" aria-hidden="true" @click="hidePeople = (hidePeople == false) ? true : false"></i>
                                    </a>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="heading" v-else-if="currentUser.status == 1 && (messagelist.length > 0 ||roomlist.length > 0)">
                            <b-col xl="12" lg="12" sm="12" class="py-1">
                                <div class="heading-avatar d-flex align-items-center">
                                    <div class="width-98 d-flex align-items-center">
                                        <div class="heading-name">
                                            <a class="heading-name-meta mb-0 pt-0 fz-18 fw-600">{{ currentUser.client_first_name }} {{ currentUser.client_last_name }}</a>
                                            <p class="ml-1 mb-0 fz-14 text-black">12:09 AM EST <span class="heading-online text-muted" @click="$router.push({'name':$store.state.accountType+'proposalDetails','path':'/'+$store.state.accountType+'/proposal-details/',query:{'jobDetailsWithClientData':currentUser.job_id}})">{{ currentUser.job_title }}</span></p>
                                        </div>
                                    </div>
                                    <a class="ml-auto width-2 text-right">
                                        <i class=" text-black mr-3" :class="(hidePeople == false) ? 'fa fa-chevron-right' : 'fa fa-chevron-left'" aria-hidden="true" @click="hidePeople = (hidePeople == false) ? true : false"></i>
                                    </a>
                                </div>
                            </b-col>
                        </b-row>
                        <chatBoxData ref="oprateChatbox" :chatroomdata="chatroomdata" :pageType="'chatpage'"  />
                    </b-col>
                    <div class="col-sm-2 side p-0" v-if="!hidePeople">
                        <div class="side-two">
                            <div class="row newMessage-heading">
                                <div class="row newMessage-main">
                                    <b-col xl="12" lg="12" sm="12" class="p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="newMessage-title text-muted">
                                                <h5 class="mb-0 fz-16"> People</h5>
                                            </div>
                                        </div>
                                    </b-col>
                                </div>
                            </div>

                            <div class="compose-sideBar" v-if="chatroomMembers.length > 0">
                                <div class="row sideBar-body" v-for="(members,index) in  chatroomMembers" :key="index">
                                    <a href="javascript:void(0)" class="d-flex align-items-center p-0">
                                        <div class="sideBar-avatar">
                                            <div class="avatar-icon">
                                                <img :src="members.profile_picture_path">
                                                <span class="status-icon"></span>
                                            </div>
                                        </div>
                                        <div class="sideBar-main">
                                            <div class="sideBar-name">
                                                <h5 class="name-meta mb-0 fz-16">{{members.first_name}} {{members.last_name}}</h5>
                                                <!-- <h6 class="text-black mb-0 fz-16">AWS DevOps Developer</h6> -->
                                                <!-- <span class="text-muted mb-0 fz-14">AWS DevOps Developer</span>  -->
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                            </div>
                            <div class="compose-sideBar right-chat-no-data sidesection" v-else >
                                <div class="row sideBar-body">
                                    <div class="col-sm-12 col-xl-12 sideBar-avatar">
                                        <div class="image-holder">
                                            <img src="http://qapin_mvp5.manageprojects.in//upload/profile_image/group.png" alt="Chat" class="img-fluid">
                                        </div>
                                        <h4 class="name-meta fw-600 mb-0 fz-16 text-muted">No People Found</h4>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters} from "vuex";
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import chatBoxData from '../../components/chat/chatBoxData.vue'
// import { saveAs } from 'file-saver';
export default {
    components:{
        chatBoxData,
        // saveAs
    },
    mixins: [validationMixin],
    validations: { 
        autoResponde:{
            timezone_id: {required},
            from_date: {required},
            to_date: {required},
            message: {required},
        },
    },
    data() {
        return {
            chatroomdata:'',
            currentDate:new Date().toISOString().substr(0, 10),
            search:'',
            sort:'ASC',
            roomlist:[],
            messagelist:[],
            getmessageparams:{
                chat_room_id:'',
                start_limit:0,
                end_limit:50,
                cycle:'',
                lastId :'',
                firstId:'',
            },
            currentUser:'',
            chatroomMembers:[],
            hidePeople:false,
            autoResponde:{
                active:false,
                timezone_id: this.$store.state.currentUserOwnerData.timezone,
                timezone: this.$store.state.currentUserOwnerData.timezone_name,
                from_date:this.currentDate,
                to_date:'',
                message:'',
            },
            changeTimeZone:false,
        }
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest","cancelApiRequest"]),
        ...mapActions("global", ["fetchTimeZone",]),
        // out of office switch box method 
        toggleCheckbox() {
            this.autoResponde.active = !this.autoResponde.active;
        },
        // this fun is for to add or update the auto response message
        async submitAutoResponse(){
            if(this.autoResponde.from_date < this.currentDate){
                return false;
            }
            this.$v.autoResponde.$touch(); 
            if (!this.$v.autoResponde.$invalid ) { 
                var res = await this.genericAPIPOSTRequest({
                    requestUrl:this.autoResponde.url,
                    params: {
                        auto_response_id:this.autoResponde.auto_response_id,
                        timezone_id:this.autoResponde.timezone_id,
                        from_date:this.autoResponde.from_date,
                        to_date:this.autoResponde.to_date,
                        message:this.autoResponde.message,
                    },
                });
                if(res == true){
                    if(this.autoResponde.url=='addAutoresponse'){
                        this.$toastr.s('Auto response added')
                    }else{
                        this.$toastr.s('Auto response updated')
                    }
                    this.$bvModal.hide('out-of-office');
                }
            }
        },
        // this fun is for to check auto response to message
        async checkAutoresponse(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'getAutoresponse',
                params: {},
            });
            if (res!='') {
                this.autoResponde ={
                    url:'updateAutoresponse',
                    active:true,
                    timezone_id: res.timezone_id,
                    timezone: res.timezone,
                    from_date:res.from_date,
                    to_date:res.to_date,
                    message:res.message,
                    auto_response_id:res.auto_response_id,
                }
            }else{
                this.autoResponde = {
                    url:'addAutoresponse',
                    active:false,
                    timezone_id: this.$store.state.currentUserOwnerData.timezone,
                    timezone: this.$store.state.currentUserOwnerData.timezone_name,
                    from_date:this.currentDate,
                    to_date:'',
                    message:'',
                }
            }
        },
        // this fun is for to get chat user list
        async getChatlist(_v=null){
            var param;
            var that = this;
            that.roomlist=[];
            if(this.$store.state.accountType == 'freelancer' ){
                param={'user_id':this.$store.state.currentUserData.login_master_id,'status':1,'userType': this.$store.state.accountType};
            }else if(this.$store.state.accountType == 'client'){
                param={'client_id':this.$store.state.currentUserData.login_master_id,'userType': this.$store.state.accountType};
            }else if(this.$store.state.accountType == 'agency'){
                param={'agency_id':this.$store.state.currentUserData.login_master_id,'status':1,'userType': this.$store.state.accountType};
            }
            param.title =this.search;
            param.sort= this.sort;
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'getchatroom',
                params: param,
            });
            if (res.length > 0) {
                this.roomlist = res; 
                if(_v=='onload'){  
                    this.chatroomdata = res[0];
                    that.getselectedusermessage(res[0]);
                }
            }
        },
        // this fun is for to set get message id
        async  getselectedusermessage(_i){
            this.cancelApiRequest();
            this.getchatroomMembers(_i.chat_room_id);
            this.chatroomdata = _i;
            this.currentUser =_i;
            setTimeout(() => {
                this.$refs.oprateChatbox.getselectedusermessage();
            }, 1000);

        },
        // this fun is for to get chat room members
        async getchatroomMembers(_i){
            this.chatroomMembers = [];
            this.getmessageparams.chat_room_id = _i;
            this.getmessageparams.start_limit = 0;
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'chatRoomMembers',
                params: this.getmessageparams,
            });
            if (res.length > 0 ) {
                this.chatroomMembers = res;
            }
        },
    },
    mounted() {
        var chatroomId = this.$route.query.chatroom;
        if(chatroomId !='' && chatroomId != undefined){
            chatroomId = this.decodeId(chatroomId);
            this.chatroomdata = JSON.parse(chatroomId);
            this.getselectedusermessage(this.chatroomdata);
            this.getChatlist();
        }else{
            this.getChatlist('onload');
        }
        
        this.fetchTimeZone();
    },
    computed:{
        ...mapGetters({
            timezoneList: "global/getTimeZone"
        }),
        timeZoneError() {
            const errors = []
            if (!this.$v.autoResponde.timezone_id.$dirty) return errors 
            !this.$v.autoResponde.timezone_id.required && errors.push('Time Zone is required')
            return errors
        },
        fromDateError() {
            const errors = []
            if (!this.$v.autoResponde.from_date.$dirty) return errors 
            !this.$v.autoResponde.from_date.required && errors.push('From Date is required')
            return errors
        },
        toDateError() {
            const errors = []
            if (!this.$v.autoResponde.to_date.$dirty) return errors 
            !this.$v.autoResponde.to_date.required && errors.push('Last Day is required')
            return errors
        },
        messageError() {
            const errors = []
            if (!this.$v.autoResponde.message.$dirty) return errors 
            !this.$v.autoResponde.message.required && errors.push('Message is required')
            return errors
        },
    },
}
</script>