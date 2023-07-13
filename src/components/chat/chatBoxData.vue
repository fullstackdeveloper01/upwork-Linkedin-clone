<template>
    <span>
        <div class="row message-head pos-rel"  >
            <div class="content-preloader"  v-if="loaderHideShow">
                <div class="loader-wrapper">
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                    <div class="loader">
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
            <div class="row message overflow-x-hidden pos-rel"  @scroll="handleScroll" id="conversation">
            <div class="typing-title" v-if="sendChat.message!=''">
                <h6 class="mb-0 pos-absolute text-muted">Typing...</h6>
            </div>
            <span v-if="messagelist.length > 0 " >
                <div class="row message-body"   v-for="(msgs,index) in  messagelist " :key="index"  >
                    <div class="col-sm-12 mb-2">
                        <div class="unread-time-wrapper" >
                            <div class="pos-rel time-wrap">
                                <span class="time pos-absolute">{{msgs.key}}</span>
                            </div>
                        </div>
                    </div>

                    <div class="content-holder mt-2"  v-for="(msg,ind) in  msgs.value" :key="ind">
                        <div class="d-flex align-items-center" >
                            <div class="img-holder w-10">
                                <div class="heading-avatar-icon">
                                    <img :src="msg.key.profile_picture_path">
                                    <span class="status-icon"></span>
                                </div>
                            </div>
                            <div class="content-holder d-flex align-items-center">
                                <p class="mb-0 ml-2 fw-600">{{msg.key.first_name}} {{msg.key.last_name }}</p>
                                <span class="msg-time ml-2">{{ msg.key.time }}</span>
                            </div>
                        </div>
                        <div v-for="(messages,mindex) in msg.value" :key="mindex" :id="mindex" :class="(messages.type==3)?'pdf-div-css':(messages.type==2)?'chat-img-div-css':''">
                            <div class="mb-2 pl-50"  v-if="messages.type==1">
                                <div class="single-msg" id="single-msg">
                                    <span v-if="messages.type==1" class="msg-span">
                                        <!-- <read-more more-str="Read more" :text="getHtmlContent(messages.message)" link="#" less-str="Read less" :max-chars="300"></read-more> -->
                                        <div><p v-html="getHtmlContent(messages.message)"></p></div>
                                        <!-- <span class="msg-time ml-2">{{ messages.time }}</span> -->
                                    </span>
                                    <div class="dropdown-option" v-if="messages.type==1 && messages.sended_by == $store.state.currentUserData.login_master_id">
                                        <b-dropdown size="md" right  variant="link" toggle-class="text-decoration-none" no-caret v-if="messages.sended_by == $store.state.currentUserData.login_master_id" >
                                            <template #button-content>
                                                <i class="fa fa-ellipsis-v text-muted action-dots-right" aria-hidden="true"></i>
                                            </template>
                                            <b-dropdown-item href="javascript:void(0);"  @click="deleteMsg(messages.chat_id,index,ind,mindex)">
                                                <i class="fa fa-trash" aria-hidden="true"></i> Delete
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript:void(0);"  @click="updateMessage.editMessage = true; sendChat.message = messages.message; updateMessage.chatIndex = index; updateMessage.chatData = messages; updateMessage.chatParentIndex = ind; updateMessage.chatChildIndex= mindex;">
                                                <i class="fa fa-pencil" aria-hidden="true"></i> Edit
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                                </div>
                            <div class="inline-block mb-2 parent img-parent"  v-else-if="messages.type==2">
                                <div class="msg-span file-span pos-rel chat-img-div-css mr-4" id="img-div" v-for="(documents,docIndex) in messages.data " @click="setSlider(messages.data)" :key="docIndex" v-b-modal.modal-image-slider>
                                    <span class="msg-span p-0"> 
                                        <img :src="documents.media" width="100" height="100" @click="setImage(docIndex)">
                                        <!-- <span class="msg-time">{{ documents.time }}</span> -->
                                    </span>
                                    <div class="dropdown-option" v-if="documents.type==2">
                                        <b-dropdown size="md" right  variant="link" toggle-class="text-decoration-none" no-caret >
                                            <template #button-content>
                                                <i class="fa fa-ellipsis-v text-muted action-dots-right" aria-hidden="true"></i>
                                            </template>
                                            <b-dropdown-item href="javascript:void(0);" v-if="$store.state.currentUserData.login_master_id == documents.sended_by" @click="deleteFile(documents.chat_id,index,ind,mindex,docIndex)">
                                                <i class="fa fa-trash" aria-hidden="true"></i> Delete
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript:void(0);" v-else @click="downloadFile(documents.media_withoutbasepath)">
                                                <a></a>
                                                <i class="fa fa-download" aria-hidden="true"></i> Download
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                                
                            </div>
                            <div v-else-if="messages.type==3" class="parent file-parent">
                                <div class="msg-span file-span pos-rel pdf-div-css" v-for="(documents,docIndex) in messages.data " :key="docIndex" id="file-div">
                                    <a href="javascript:void(0)" class="text-black"><i class="fa fa-file mr-4" aria-hidden="true"></i>{{ documents.message }}</a>
                                    <div class="dropdown-option" v-if="documents.type==3">
                                        <b-dropdown size="md" right  variant="link" toggle-class="text-decoration-none" no-caret >
                                            <template #button-content>
                                                <i class="fa fa-ellipsis-v text-muted action-dots-right" aria-hidden="true"></i>
                                            </template>
                                            <b-dropdown-item href="javascript:void(0);" v-if="$store.state.currentUserData.login_master_id == documents.sended_by" @click="deleteFile(documents.chat_id,index,ind,mindex,docIndex)">
                                                <i class="fa fa-trash" aria-hidden="true"></i> Delete
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript:void(0);" v-else @click="downloadFile(documents.media_withoutbasepath)">
                                                <i class="fa fa-download" aria-hidden="true"></i> Download
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </span>
            <span class="no-data-conversation" v-else>
                <a href="javascript:void(0)">
                    <div class="col-sm-12 col-xl-12 sideBar-avatar">
                        <div class="image-holder">
                            <img src="http://qapin_mvp5.manageprojects.in//upload/profile_image/chat-box.png" alt="Chat" class="img-fluid">
                        </div>
                        <h4 class="fz-16 fw-600 text-muted mb-0">Nothing here</h4>
                        <p class="fz-12 fw-400 text-muted">There are no chats in your feed. <a href="javascript:void(0);" class="text-theme">Create a New Chat.</a></p>
                    </div>
                </a>
            </span>
        </div>
        </div>
        <div class="up-d-composer-attachment" v-if="preview_list.length > 0 ">
            <div class="up-d-file-attachment composer-attachment" v-for="(prev,pindex) in preview_list" :key="pindex">
                <div class="file-attachment">
                    <div style="display: flex;">
                        <div class="attachment-preview">
                            <a target="_blank" class="up-d-story-img loaded" style="width: 40px; height: 40px;">
                                <img :src="image_list[pindex]" v-if="prev.type == 'image/jpeg' || prev.type == 'image/jpg' || prev.type == 'image/png' || prev.type == 'image/svg' || prev.type == 'image/gif'">
                                <i class="fa fa-file mr-4" v-else aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="file-name-wrapper">
                            <span class="file-name">
                                <span class="name">
                                    {{prev.name}}
                                </span>
                            </span> 
                            <div class="file-content">
                                <span class="text-size d-flex align-items-center">
                                    {{prev.size | sizeInMb}}
                                    <span class="file-check-icon"  :id="'progress-complete_'+pindex" style="display: none;"></span>
                                </span>
                            </div>
                        </div> 
                        <span class="remove-attachment" @click="removePrev(pindex)">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img" class="remove-icon"><polygon fill-rule="evenodd" points="12.524 0 7 5.524 1.476 0 0 1.476 5.524 7 0 12.524 1.476 14 7 8.476 12.524 14 14 12.524 8.476 7 14 1.476"></polygon></svg>
                        </span>
                    </div>
                    <div class="progress progress-height" :id="'progress-parent_'+pindex" v-if="prev.successStatus != 100">
                        <div class="progress-bar" role="progressbar" :id="'progressbar_'+pindex" :style="'width:'+ prev.successStatus+'%'" :aria-valuenow="prev.successStatus" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="row reply d-flex align-items-center m-0">
        <!-- <div class="row reply d-flex align-items-center m-0" v-if="messagelist.length > 0 || pageType=='sidebar' || pageType=='contractpage' "> -->
            <form @submit.prevent="submitform" class="d-flex align-items-center p-0">
                <!-- <input v-if="chatroomMembers.length > 0"  id="fileUpload" -->
                <input  id="fileUpload"
                    style="display: none;"
                    multiple
                    hidden type="file"
                    @change="UploadFile"
                    accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,.word,.pdf" 
                >
                <div class="reply-emojis w-100 pos-rel">
                    <div class="reply-recording text-right ml-5 mr-5" v-if="updateMessage.editMessage == false" @click="chooseFiles()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                        </svg>
                    </div>
                    <div class="edit-close text-right" v-if="updateMessage.editMessage == true" @click="cancelEdit()">
                        <i class="fa fa-close"></i>
                    </div>
                    <div class="reply-send">
                        <b-button type="submit" style="padding:4px 8px;" class="btn chat-reply-btn"><i class="fa fa-send fa-2x" aria-hidden="true"></i></b-button>
                    </div>
                    <emoji-picker @emoji="append" :search="searchEmoji">
                        <button
                            type="button"
                            class="emoji-invoker"
                            slot="emoji-invoker"
                            slot-scope="{ events: { click: clickEvent } }"
                            @click.stop="clickEvent"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-grey">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                            </svg>
                        </button>
                
                        <div slot="emoji-picker" slot-scope="{ emojis, append, display }">
                            <div class="emoji-picker" :style="{ top: display.y + 'px', left: display.x + 'px' }">
                                <div class="emoji-picker__search">
                                    <input type="text" v-model="searchEmoji">
                                </div>
                                <div>
                                    <div v-for="(emojiGroup, category) in emojis" :key="category">
                                    <h5>{{ category }}</h5>
                                    <div class="emojis">
                                        <span
                                        v-for="(emoji, emojiName) in emojiGroup"
                                        :key="emojiName"
                                        @click="insert(emoji)"
                                        :title="emojiName"
                                        >{{ emoji }}</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </emoji-picker>
                    <div class="settings-btn-wrap">
                        <b-dropdown id="dropdown-dropup" dropup right class="setting-btn">
                            <template #button-content>
                                <i class="fa fa-cog text-black" aria-hidden="true"></i>
                            </template>
                            <b-dropdown-item><b>Pressing Enter Key Will :</b></b-dropdown-item>
                            <b-dropdown-item href="#">
                                <b-form-radio
                                    id="checkbox"
                                    name="checkbox-1"
                                    required >
                                    <p class="fz-14 fw-400 text-muteed mb-0">Send Message</p>
                                </b-form-radio>
                            </b-dropdown-item>
                            <b-dropdown-item href="#">Add a link break</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <!--<textarea class="form-control ml-5" v-model="sendChat.message" @keyup="sendChat.messageType = 1;" rows="1" id="comment" ></textarea>-->
                    <wysiwyg class="form-control" v-model="sendChat.message" @keyup="sendChat.messageType = 1;"/>
                </div>
            </form>
        </div>
        <b-modal id="modal-image-slider" size="xl" title="" centered hide-header hide-footer>
            <b-carousel
                :interval=0
                id="carousel-1"
                v-model="slider"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                > 
                <!-- Slides with image only -->
                <b-carousel-slide v-for="(data,index) in sliderImages" :key="index"  :img-src="data.media">
                    <b-button class="download-btn btn-theme">Download</b-button>
                </b-carousel-slide>
                <!-- Slides with img slot -->
            </b-carousel>
        </b-modal>
    </span>
</template>
<script>
import $ from 'jquery';
import { mapActions} from "vuex";
// import axios from "axios";
// import VueReadMoreSmooth from "vue-read-more-smooth"
// import { saveAs } from 'file-saver';
export default {
    props:['chatroomdata','pageType'],
    data() {
        return {
            currentDate:new Date().toISOString().substr(0, 10),
            search:'',
            sort:'ASC',
            searchEmoji:'',
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
            sendChat:{
                message:'',
                messageType:'',
                mediaData:[],
            },
            currentUser:'',
            updateMessage:{
                chatData:'',
                chatIndex:'',
                chatParentIndex:'',
                chatChildIndex:'',
                editMessage:false,
            },
            chatroomMembers:[],
            emoji:[],
            append:'',
            hidePeople:false,
            preview_list:[],
            image_list:[],
            loaderHideShow:false,
            
            changeTimeZone:false,
            uploadRecentfiles:{
                chat_room_id:'',
                message:'',
                file_path:'',
                files:[],
            },
            sliderImages:'',
            slide: 0,
            sliding: null,
            slider:0,
        }
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest","cancelApiRequest"]),
        async downloadFile(data){
            // await this.genericAPIPOSTRequest({
            //     requestUrl: "download",
            //     params: {},
            // });
            // saveAs(data, 'downloaded-file.pdf');
            window.location.href = this.$store.state.baseUrlImg+'/home/download?img='+ data;
            // var FILE = window.URL.createObjectURL(new Blob([data]));
                     
            // var docUrl = document.createElement('x');
            // docUrl.href = FILE;
            // docUrl.setAttribute('download', 'file.pdf');
            // document.body.appendChild(docUrl);
            // docUrl.click();
              // Construct the <a> element
            // var link = document.createElement("a");
            // link.download = 'downloaded-file.pdf';
            // link.target = "_blank";
            // // Construct the uri
            // // var uri = 'data:text/csv;charset=utf-8;base64,' + data
            // // link.href = uri;
            // link.href = data;
            // document.body.appendChild(link);
            // link.click();
            // // Cleanup the DOM
            // document.body.removeChild(link);
            // const link = document.createElement("a");
            // link.download = 'downloaded-file.pdf';
            // link.target = "_blank";
            // link.href = data;
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
        },
        handleScroll(event) {
            const currentScrollPosition = event.target.scrollTop;
            // console.log('this.previousScrollPosition',this.previousScrollPosition);
            // console.log('currentScrollPosition',currentScrollPosition);
            if (currentScrollPosition > this.previousScrollPosition) {
                // Scrolling down
                console.log('Scrolling down');
                // this.getmessageDataLoad('scrollDown');
            } else {
                // Scrolling up
                if(currentScrollPosition <= 0){
                    this.getmessageDataLoad('up');
                    console.log('Scrolling Up'); 
                }
            }
            this.previousScrollPosition = currentScrollPosition;
        }, 
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        setSlider(data){
           
            this.sliderImages = data;
        },  
        setImage(index){
            this.slider= index;
        },
        
        // this fun is for to cancel edit
        cancelEdit(){
            this.updateMessage={
                chatData:'',
                chatIndex:'',
                chatParentIndex:'',
                chatChildIndex:'',
                editMessage:false,
            };
            this.sendChat.message='';
        },
        // this fun is for to submit chat form according to need
        submitform(){
            if(this.updateMessage.editMessage == true){
                this.updateMsg();
            }else{
                this.sendmessageData();
            }
        },
        // this funis for to update chat message
        async updateMsg(){
            // console.log('updateMessage',this.updateMessage)
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'sendMessage',
                params: {
                    chat_room_id: this.updateMessage.chatData.chat_room_id,
                    chat_id: this.updateMessage.chatData.chat_id,
                    sended_by: this.$store.state.currentUserData.login_master_id,
                    type: this.updateMessage.chatData.type,
                    message: this.sendChat.message,
                },
            });
            if (res) {
                this.messagelist[this.updateMessage.chatIndex].value[this.updateMessage.chatParentIndex].value[this.updateMessage.chatChildIndex].message= this.sendChat.message;
                this.sendChat.message='';
                this.updateMessage={
                    chatData:'',
                    chatIndex:'',
                    chatParentIndex:'',
                    chatChildIndex:'',
                    editMessage:false,
                };
            }
        },
        // this fun is for to delete message
        async deleteMsg(_i,index,parentindex,childindex){
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'deleteMessage',
                params: {
                    'chat_id':_i,
                    'is_deleted':1,
                    'deleted_by': this.$store.state.currentUserData.login_master_id,
                },
            });
            if (res ) {
                this.messagelist[index].value[parentindex].value.splice(childindex,1);
            }
        },
        // this fun is for to delete message
        async deleteFile(_i,index,parentindex,childindex,childchildindex){
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'deleteMessage',
                params: {
                    'chat_id':_i,
                    'is_deleted':1,
                    'deleted_by': this.$store.state.currentUserData.login_master_id,
                },
            });
            if (res ) {
                this.messagelist[index].value[parentindex].value[childindex].data.splice(childchildindex,1);
            }
        },
        // this function is for to upload attachment
        async UploadFile(e){ 
            this.previewMultiImage(e);
            var error=0;
            for (let index = 0; index < e.target.files.length; index++) {
                var files=e.target.files[index];
                var ext = files.name.split('.').pop();
                if(ext=="pdf" || ext=="word" || ext=="png"|| ext=="jpeg"|| ext=="jpg"){
                    // var ext_type = (ext=="pdf" || ext=="word")?'3':'2';
                    const fileSize = files.size / 1024 / 1024; // in MiB
                    if ( fileSize <= 25) {
                    // if (fileSize >= 2 && fileSize <= 40) {
                        const formData = new FormData();
                        formData.append('image', files);
                        formData.append('chat_room_id', this.getmessageparams.chat_room_id);
                        formData.append('user_id', this.$store.state.currentUserData.login_master_id);

                        var getData = await this.genericAPIPOSTRequest({
                            requestUrl: "chatFile",
                            params: formData,
                        });
                        if(getData.filename!=""){
                            var that =this;
                            getData.is_type=ext;
                            that.sendChat.mediaData.push(getData);
                            this.preview_list.filter((data,pindex)=>{
                                if (data.name == files.name) {
                                    data.successStatus = 100;
                                    $('#progressbar_'+pindex).css('width',data.successStatus+'%');
                                    $('#progress-parent_'+pindex).css('display','none');
                                    $('#progress-complete_'+pindex).css('display','block');
                                    return false;
                                }
                            });
                            this.uploadRecentfiles.file_path = getData.uploadPath;
                            this.uploadRecentfiles.chat_room_id = this.getmessageparams.chat_room_id;
                            console.log(this.uploadRecentfiles);
                        }else{
                            this.preview_list.splice(index,1);
                            this.image_list.splice(index,1);
                            error++;
                        }
                    }else{
                        this.$toastr.e('File Size Should be Less Than 25 Mb');
                    }
                } else{
                    this.$toastr.e('Only Allow Files (PDF, Word, Png, Jpg, Jpeg)');
                }
                if(error!=0){
                    this.$toastr.e('Your All file is Not uploaded');
                }
            }
            document.getElementById("fileUpload").value = "";
        },
        // this fun is for to preview the multiple image upload
        previewMultiImage: function(event) {
            var input = event.target;
            var count = input.files.length;
            if (input.files) {
                for (let index = 0; index < count; index++) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.image_list.push(e.target.result)
                    }
                    input.files[index].successStatus = Math.floor((Math.random() * 70) + 1);
                    this.preview_list.push(input.files[index]);
                    reader.readAsDataURL(input.files[index]);
                }
            }
        },
        // this fun is for to remove preview files and images
        removePrev(_i){
            this.preview_list.splice(_i,1);
            this.image_list.splice(_i,1);
            this.sendChat.mediaData.splice(_i,1);
        },
        // this fun is for to choose file
        chooseFiles() {
            document.getElementById("fileUpload").value = "";
            document.getElementById("fileUpload").click()
        },
        // this fun is for to add emoji to message
        insert(emoji) {
            this.sendChat.message += emoji
        },
       
        // this fun is for to set get message id
        async  getselectedusermessage(){
            // this.cancelApiRequest();
            var that =this;
            that.loaderHideShow = true;
            that.messagelist=[];
            that.getmessageparams.chat_room_id = this.chatroomdata.chat_room_id;
            that.getmessageparams.start_limit = 0;
            // setInterval(function(){
            that.getmessageData('first');
            // },3000);
        },
        
        // this fun is for to get messages
        async getmessageData(cycle=""){
             if(cycle=='first'){
                this.getmessageDataLoad(cycle);
             }else{
                this.getmessageDataLoad(cycle);
             }
        },
        async  getmessageDataLoad(cycle=''){
            this.getmessageparams.cycle = cycle;
            var res = await this.genericAPIPOSTRequest({
                requestUrl:'getMessage',
                params: this.getmessageparams,
            });
            if (res.count != '' && res.count > 0) {
                if(cycle=='first' || cycle=='recurring'){
                    this.getmessageparams.lastId = res.last_id;
                }
                if(cycle=='first' || cycle=='up'){
                    this.getmessageparams.firstId = res.first_id;
                }
                var that =this;
                this.getmessageparams.start_limit += res.count;
                if(this.messagelist.length == 0){
                    res.response.filter((data)=>{
                        this.messagelist.push(data);
                    }); 
                }else{
                    res.response.filter((data,index)=>{
                        if(index == 0){
                            var parentIndex = that.messagelist.length-1
                            if(data.key == that.messagelist[parentIndex].key){
                                data.value.filter(appendData=>{
                                    var childIndex = that.messagelist[parentIndex].value.length-1;
                                    var timediff =this.timeDiffrenceInminutes(that.messagelist[parentIndex].value[childIndex].key.created_at,appendData.key.created_at);
                                    if(that.messagelist[parentIndex].value[childIndex].key.sended_by == appendData.key.sended_by && timediff < 10){
                                        appendData.value.filter(pushdata=>{
                                            var childChildIndex = that.messagelist[parentIndex].value[childIndex].value.length-1;
                                            if(pushdata.type == that.messagelist[parentIndex].value[childIndex].value[childChildIndex].type && pushdata.type != 1){
                                                pushdata.data.filter(childChildData=>{
                                                    if(cycle=='up'){
                                                        that.messagelist[parentIndex].value[childIndex].value[childChildIndex].data.unshift(childChildData);
                                                    }else{
                                                        that.messagelist[parentIndex].value[childIndex].value[childChildIndex].data.push(childChildData);
                                                    }    
                                                })
                                            }else{
                                                if(cycle=='up'){
                                                    that.messagelist[parentIndex].value[childIndex].value.unshift(pushdata);
                                                }else{
                                                    that.messagelist[parentIndex].value[childIndex].value.push(pushdata);
                                                }
                                            }
                                        });
                                    }else{
                                        if(cycle=='up'){
                                            that.messagelist[parentIndex].value.unshift(appendData);
                                        }else{
                                            that.messagelist[parentIndex].value.push(appendData);
                                        }    
                                    }
                                });
                            }else{
                                if(cycle=='up'){
                                    that.messagelist.unshift(data);
                                }else{
                                    that.messagelist.push(data);
                                }
                            }
                        }else{
                            if(cycle=='up'){
                                that.messagelist.unshift(data);
                            }else{
                                that.messagelist.push(data);
                            }
                        }
                    }); 
                }
                this.readMessages();
                var element = document.getElementById("conversation");
                if(cycle!='up'){
                    // console.log('cycle',cycle)
                    setTimeout(() => {
                        element.scrollTo({top: element.scrollHeight, behavior: 'smooth'});
                    }, 2000);
                }
                if(cycle=='up'){
                    setTimeout(() => {
                        element.scrollTo({top: 10, behavior: 'smooth'});
                    }, 1000);
                }
                 
                // if(cycle=='first' || cycle=='recurring'){
                   
                //     setTimeout(() => {
                //         this.getmessageDataLoad('recurring');
                //     }, 3000);
                // }    
                
                setTimeout(() => {
                    this.loaderHideShow=false;
                }, 7000);
            }else{
                setTimeout(() => {
                    this.loaderHideShow=false;
                }, 7000);
            //     if(cycle=='first' || cycle=='recurring'){
                   
            //        setTimeout(() => {
            //          this.getmessageDataLoad('recurring');
            //        }, 3000);
            //    }  
            }
        },
        // this fun is for to get messages
        async readMessages(){
            await this.genericAPIPOSTRequest({
                requestUrl:'readMessage',
                params: {
                    luid:{data:this.getLoginUserIdRequest()},
                    chat_room_id:this.getmessageparams.chat_room_id,
                },
            });
        },
        // this fun is for to send messages
        async sendmessageData(){
            var element = document.getElementById("conversation");
            if(this.sendChat.message!=''){
                var response = await this.genericAPIPOSTRequest({
                    requestUrl:'sendMessage',
                    params: {
                        chat_room_id:this.getmessageparams.chat_room_id,
                        sended_by:this.$store.state.currentUserData.login_master_id,
                        type: 1,
                        message: this.sendChat.message,
                    },
                });
                if (response) {
                    this.uploadRecentfiles.message = this.sendChat.message;
                    this.sendChat.message='';
                    if(this.sendChat.mediaData.length > 0){
                        this.sendChat.mediaData.map((data,pindex)=>{
                            this.uploadRecentfiles.files.push({'type':data.is_type,'name':data.name,'size':data.size});
                            if(data.is_type =="png"|| data.is_type =="jpeg"|| data.is_type =="jpg") {
                                data.is_type = 2;
                            }else if(data.is_type =="pdf" || data.is_type =="word" ){
                                data.is_type = 3;
                            }
                            var res = this.genericAPIPOSTRequest({
                                requestUrl:'sendMessage',
                                params: {
                                    chat_room_id:this.getmessageparams.chat_room_id,
                                    sended_by:this.$store.state.currentUserData.login_master_id,
                                    type: (data.is_type == 1)?'2':'3',
                                    size: data.size,
                                    message: data.name,
                                    file_type: this.preview_list[pindex].type,
                                    parent_id:response,
                                },
                            });
                            if (res) {
                                setTimeout(() => {
                                    element.scrollTo({top: element.scrollHeight, behavior: 'smooth'});
                                }, 2000);
                            }
                        });
                        if(this.uploadRecentfiles.files.length > 0){
                            this.addRecentfiles();
                        }
                        this.preview_list=[];
                        this.image_list=[];
                        this.sendChat.mediaData=[];
                    }else{
                        setTimeout(() => {
                            element.scrollTo({top: element.scrollHeight, behavior: 'smooth'});
                        }, 2000);
                    }
                }
            }else if(this.sendChat.mediaData.length > 0){
                this.sendChat.mediaData.map((data,pindex)=>{
                    console.log('data',data);
                    this.uploadRecentfiles.files.push({'type':data.is_type,'name':data.name,'size':data.size});
                    if(data.is_type =="png"|| data.is_type =="jpeg"|| data.is_type =="jpg") {
                        data.is_type = 1;
                    }else if(data.is_type =="pdf" || data.is_type =="word" ){
                        data.is_type = 3;
                    }
                    var res = this.genericAPIPOSTRequest({
                        requestUrl:'sendMessage',
                        params: {
                            chat_room_id:this.getmessageparams.chat_room_id,
                            sended_by:this.$store.state.currentUserData.login_master_id,
                            type: (data.is_type == 1)?'2':'3',
                            size: data.size,
                            message: data.name,
                            file_type: this.preview_list[pindex].type,
                        },
                    });
                    if (res) {
                        setTimeout(() => {
                            element.scrollTo({top: element.scrollHeight, behavior: 'smooth'});
                        }, 2000);
                    }
                });
                if(this.uploadRecentfiles.files.length > 0){
                    this.addRecentfiles();
                }
                this.preview_list=[];
                this.image_list=[];
                this.sendChat.mediaData=[];
            }
        },
        // this fun is for to add recent files to database
        async addRecentfiles(){
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "addContractfiles",
                params: {
                    files:this.uploadRecentfiles.files,
                    file_path:this.uploadRecentfiles.file_path,
                    message:this.uploadRecentfiles.message,
                    chat_room_id:this.uploadRecentfiles.chat_room_id,
                    type:'Chat-Files'
                },
            });
            if(res){
                this.uploadRecentfiles={
                    job_application_id:'',
                    message:'',
                    file_path:'',
                    files:[],
                };
            }
        },
    },
    component:{
        // VueReadMoreSmooth
        // saveAs
    },
    mounted() {
        var that =this;
        setInterval(function(){
            that.getmessageData('recurring');
        },3000);
    },
    computed:{
        
    },
    filters:{
        sizeInMb(value){
            let  sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (value == 0) return '0 Byte';
            let i = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
            return Math.round(value / Math.pow(1024, i), 2) + ' ' + sizes[i];
        }
    },  
}
</script>