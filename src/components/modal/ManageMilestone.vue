<template>
    <b-sidebar ref="closesideBar" class="milestone-changes" id="sidebar-backdrop"  :backdrop-variant="'variant'" no-close-on-backdrop  shadow right >
        <h4 class="px-4 pb-0 pt-3 fw-500"><b>Add or edit milestones</b></h4>
        <b-card-group deck class="p-4">
        <b-card header-tag="header" footer-tag="footer">
            <template #header>
            <div class="d-flex align-items-center">
                <div class="ml-auto d-flex align-items-center">
                <span class="pr-5">Show changes</span>
                <label class="switch" >
                    <input type="checkbox">
                    <span class="slider round" @click="showMilestoneChanges = !showMilestoneChanges"></span>
                </label>
                </div>
            </div>
            </template>
            <div class="main-body">
                <div class="inner-body">
                    <b-row v-for="(data,index) in sidebarData" :key="index" class="bb-1">
                        <b-col xl="1" lg="1" sm="12">
                            <span class="text-black">{{ index+1 }}</span>
                        </b-col>
                        <b-col xl="7" lg="7" sm="12">
                            <h5 class="fz-16 text-black" >{{data.description}}  <!-- <span class="badge badge-theme" v-if="data.status == 1">Active</span> --> </h5>
                            <!-- <h5 class="fz-16 text-black" v-if="!showMilestoneChanges && data.description == checkSidebarDataUpdation(data.description,data.job_milestone_id)">{{data.description}}</h5>
                            <h5 class="fz-16 text-black" v-else-if="showMilestoneChanges && data.description != checkSidebarDataUpdation(data.description,data.job_milestone_id)"><span class="text-decoration-line-through">{{checkSidebarDataUpdation(data.description,data.job_milestone_id)}}</span><span class="text-theme">{{data.description}} </span></h5>
                            <h5 class="fz-16 text-black" v-else-if="showMilestoneChanges && data.description == checkSidebarDataUpdation(data.description,data.job_milestone_id)">{{data.description}}</h5> -->
                            
                            <h5 class="fz-16 " :class="(!showMilestoneChanges)?'text-muted':'text-theme'" v-if="data.description2 != '' && data.description2 != null">{{data.description2}} <span class="curser ml-2" :class="(showMilestoneChanges)?'text-black':'text-theme'" v-b-modal.view-description-modal @click="viewDescription = data.description2">view</span></h5>
                            <p class="text-muted mb-0 fz-16">${{(data.release_amount>0)?data.release_amount:data.amount}} <span v-if="data.paymentStatus == 1">{{ (data.milestone_status == 1)?'(Released)':'(Funded)' }}</span></p>
                        </b-col>
                        <b-col xl="2" lg="2" sm="12">
                            <p class="text-muted mb-0 fz-16">{{data.dueDate}}</p>
                        </b-col>
                        <b-col xl="2" lg="2" sm="12">
                            <div class="actions d-flex align-items-center" v-if="data.active == 0 && $store.state.accountType=='client'">
                                <button class="btn btn-outline-theme mr-2" @click="declineNewMilestone(data.job_milestone_id,index)">Decline</button>
                                <button class="btn btn-theme" @click="acceptNewMilestone(data.job_milestone_id,index)">Accept</button>
                            </div>
                            <div class="actions d-flex align-items-center" v-else-if="data.active == 0 && ($store.state.accountType=='freelancer' || $store.state.accountType=='agency')">
                                <button class="btn btn-outline-theme mr-2" @click="declineNewMilestone(data.job_milestone_id,index)">Cancel</button>
                                <button class="btn btn-theme" @click="declineNewMilestone(data.job_milestone_id,index)">Withdraw</button>
                            </div>
                            <div class="actions" v-else-if="data.paymentStatus == 0">
                                <button class="btn btn-outline-theme mr-2" @click="type = 'edit';resetAddmilestone();resetEdit();openAddmilestonemodel(data,index,'old')"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                <button class="btn btn-outline-theme" @click="removeMilestone(index,'old',data.job_milestone_id)"><i class="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </b-col>
                        <hr />
                    </b-row>
                    <template v-if="requestedMilestone.length > 0">
                        <b-row v-for="(datas,indexs) in requestedMilestone" :key="indexs" class="bb-1">
                            <b-col xl="1" lg="1" sm="12">
                                <span :class="(!showMilestoneChanges)?'text-black':'text-theme'">{{ sidebarData.length+indexs+1 }}</span>
                            </b-col>
                            <b-col xl="7" lg="7" sm="12">
                                <h5 class="fz-16 " :class="(!showMilestoneChanges)?'text-black':'text-theme'">{{datas.description}}</h5>
                                <h5 class="fz-16 " :class="(!showMilestoneChanges)?'text-muted':'text-theme'">{{datas.description2}} <span class="curser ml-2" :class="(showMilestoneChanges)?'text-black':'text-theme'" v-b-modal.view-description-modal @click="viewDescription = datas.description2">view</span></h5>
                                <p class="mb-0 fz-16" :class="(!showMilestoneChanges)?'text-muted':'text-theme'">${{ datas.amount}}</p>
                            </b-col>
                            <b-col xl="2" lg="2" sm="12">
                                <p class=" mb-0 fz-16" :class="(!showMilestoneChanges)?'text-muted':'text-theme'">{{datas.dueDate}}</p>
                            </b-col>
                            <b-col xl="2" lg="2" sm="12">
                                <div class="actions">
                                <button class="btn btn-outline-theme mr-2" @click="addmilestoneModaltype = 'edit';resetAddmilestone();resetEdit();openAddmilestonemodel(datas,indexs,'new')"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                <button class="btn btn-outline-theme" @click="removeMilestone(indexs,'new')"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                            </b-col>
                            <hr />
                        </b-row>
                    </template>
                    
                </div>
                <div class="bottom-body">
                    <b-button class="btn btn-outline-theme mb-4" v-b-modal.add-milestone-modal @click="type = 'add';">Add a new milestone</b-button>
                    <b-form-group>
                    <label class="fz-16 mb-2">Message to {{ shortName(contractDetails.userDetails.first_name,contractDetails.userDetails.last_name)}} <span class="text-muted">(Optional)</span></label>
                    <b-form-textarea
                        id="textarea"
                        placeholder="Enter something..."
                        rows="3"
                        max-rows="6"
                        v-model="message"
                    ></b-form-textarea>
                    </b-form-group>
                    <!-- <span class="text-black fz-14">Francesco will need to approve these updates. We'll notify them and let you know if these changes are approved.</span> -->
                </div>
                <div class="text-right p-4">
                    <a href="javascript:void(0);" class="text-theme mr-2 fz-14" v-b-toggle.sidebar-backdrop @click="sidebarData=[];showMilestoneChanges = false">Cancel</a>
                    <b-button class="btn btn-theme" @click="submitMilestone();showMilestoneChanges = false" v-b-toggle.sidebar-backdrop>Send Request</b-button>
                </div>
            </div>
        </b-card>
        </b-card-group>
        <!-- view-description model -->
        <b-modal id="view-description-modal" size="lg" title="Description" class="add-milestone-modal" centered
            hide-footer no-close-on-backdrop>
                <div class="text-left">
                    <div class="card-section">
                        <b-row>
                            <b-col xl="12" lg="12" sm="12">
                                <p>{{ viewDescription }}</p>
                            </b-col>
                        </b-row>
                        <b-col xl="12" lg="12" sm="12">
                            <div class="text-right w-100 border-top pt-3">
                                <b-button type="submit" size="lg" class="btn btn-theme" @click="$bvModal.hide('view-description-modal'); viewDescription=''">
                                    Close
                                </b-button>
                            </div>
                        </b-col>
                    </div>
                </div>
        </b-modal>
        <AddMilestone ref="childFunction" :addMilestone="addMilestone" @addNewmilestonedata="addNewmilestonedata" :editMilestone.sync="editMilestoneComputed" :contractDetails="contractDetails" :requestedMilestone="requestedMilestone" :type="type" />
    </b-sidebar>
</template>
<script>

import { mapActions }       from "vuex";
import { validationMixin }  from 'vuelidate'
import AddMilestone         from "./AddMilestone.vue";
// import { required } from 'vuelidate/lib/validators'

export default {
    props:["sidebarMilestoneData","contractDetails"], 
    mixins: [validationMixin],

    validations: {
        
    },
    data() {
        return {
            type:'add',
            showMilestoneChanges        : false,
            viewDescription             : '',
            requestedMilestone          : []    ,
            message                     : '',
            removedmilestoneId          : [],
            addMilestone       : {
                description             : '',
                description2            : '',
                dueDate                 : '',
                amount                  : '',
                job_application_id      : '',
                job_id                  : '',
                user_id                 : '',
                agency_id               : '',
                created_user_type       : '',
                created_by              : '',
                newMilestone            : 1,
                active                  : (this.$store.state.accountType == 'client')?1:0,
            },
            editMilestone      : {
                index                   : null,
                type                    : null,
            },
            sidebarData:[],
        };
    },
    components: {
        AddMilestone,
    },
    computed: {
        sidebarDatafromparent() {
            // breaking reactivity here so edits don't modify the parent
            // we want to only update when "Ok" is clicked.
            return [...this.sidebarMilestoneData];
        },
        editMilestoneComputed: {
            get() {
                return this.editMilestone;
            },
            set(val) {
                if(this.editMilestone.type == 'old'){
                    this.sidebarData[this.editMilestone.index] = val;
                }else if(this.editMilestone.type == 'new'){
                    this.sidebarData[this.editMilestone.index] = val;
                }
                this.addNewmilestonedata();
            },
        },
    },
    mounted() {
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        assginSidebarData(){
            this.sidebarData = this.sidebarDatafromparent;
        },
        // this fun is for to add new milestone
        async addNewmilestonedata(data = null){
            if(data != null && data != ''){
                this.sidebarData.push(data);
            }
            this.resetAddmilestone();
            this.resetEdit();
        },
        // this fun is for to check milestone data are updated or not
        checkSidebarDataUpdation(_v,_i = null){
            var name    = '';
            this.sidebarData.map((data)=>{
                if(data.job_milestone_id == _i){
                    name    = data.description;
                }else if(_i == null){
                    name    = _v;
                }
            })
            return name;
        },
        // this fun is for to reset the milestone array
        resetAddmilestone(){
            this.addMilestone = {
                description             :'',
                description2            :'',
                dueDate                 :'',
                amount                  :'',
                job_application_id      :'',
                job_id                  :'',
                user_id                 :'',
                agency_id               :'',
                created_user_type       :'',
                created_by              :'',
                newMilestone            :1,
                active                  : (this.$store.state.accountType == 'client')?1:0,

            };
        },
        // this fun is for to reset edit milestone
        resetEdit(){
            this.editMilestone  = {
                index   : null,
                type    : null,
                data    : null,
            };
        },
        // this fun is for to open add new milestone
        openAddmilestonemodel(data,_i,_v){
            this.editMilestone.index  = _i;
            this.editMilestone.type   = _v;
            this.editMilestone.data   = data;
            this.$bvModal.show('add-milestone-modal');
            // console.log('data',data)
            setTimeout(()=>{
                this.$refs.childFunction.addDataCheck();
            }, 1000);
            
        },
        // this fun is for to remove milestone
        removeMilestone(_i,_v,id = null){
            if(id != null){
                this.removedmilestoneId.push(id);
            }
            this.sidebarData.splice(_i,1);
        },
        // this fun is for to add new milestone to db
        async submitMilestone(){
            if(this.message!=''){
                await this.genericAPIPOSTRequest({
                    requestUrl  :'sendMessage',
                    params      : {
                        chat_room_id    : this.chatroomdata.chat_room_id,
                        type            : 1,
                        message         : this.message,
                    },
                });
            }
            if(this.removedmilestoneId.length > 0){
                await this.genericAPIPOSTRequest({
                    requestUrl  : "deleteMilestone",
                    params      : {  "job_milestone_id": this.removedmilestoneId},
                });
            }
            await this.genericAPIPOSTRequest({
                requestUrl  : "addNewMilestone",
                params      : { 
                "jobs_id"       : this.contractDetails.MilestoneDetails[0].job_id,
                // "user_id":this.user_id,
                "milestone"     : this.sidebarData,
                "data"          : this.getLoginUserIdRequest(),
                "type"          : this.$store.state.accountType,
                },
            });
            this.$toastr.s('Milestone Updated Successfully');
            this.$emit('manageParentController');
            this.sidebarData            = [];
            this.removedmilestoneId     = [];
        },

        // this fun is for to decline new milestone
        async declineNewMilestone(_i,index){
            var response    = await this.genericAPIPOSTRequest({
                requestUrl  : "deleteMilestone",
                params      : {  "job_milestone_id": [_i]},
            });
            if(response){
                this.sidebarData.splice(index,1);
                this.$toastr.s('Milestone decline Successfull')
                this.$emit('manageParentController');
            }
        },
        // this fun is for to decline new milestone
        async acceptNewMilestone(_i,index){
            var response    = await this.genericAPIPOSTRequest({
                requestUrl  : "acceptNewmilestone",
                params      : {  "job_milestone_id": [_i]},
            });
            if(response){
                this.sidebarData[index].active = 1;
                this.$toastr.s('Milestone Accepted Successfull')
                this.$emit('manageParentController');
            }
        }
    }
};
</script>