<template>
    <b-modal id="add-milestone-modal" size="lg" :title="(editMilestone.index!=null)?'Edit Milestone':'Add Milestone'" class="add-milestone-modal" centered
        hide-footer no-close-on-backdrop>
            <div class="text-left">
                <div class="card-section">
                    <!-- {{ addData }} -->
                    <b-row>
                        <b-col xl="12" lg="12" sm="12">
                            <b-form-group id="fieldset-0" class="fz-14 fw-600" label-for="title-input-milestone" :label="'Name of Milestone'">
                                <b-form-input id="title-input-milestone" maxlength="200" v-model="addUpdateMilestone.description" @keyup="addData.description = addUpdateMilestone.description"></b-form-input>
                                <div class="error" v-if="addMilestone_title[0]">{{ addMilestone_title[0] }}</div>
                            </b-form-group>

                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col xl="6" lg="6" sm="12">
                            <b-form-group id="fieldset-1" label="Amount" label-for="input-amount" class="fz-14 fw-600" size="lg" prepend="$">
                                <b-form-input
                                    id="input-amount"
                                    maxlength="5"
                                    minlength="1"
                                    @keyup="addData.amount = addUpdateMilestone.amount"
                                    v-model="addUpdateMilestone.amount"
                                    autocomplete="nope"
                                    onselectstart="return false"
                                    onpaste="return false"
                                    onCopy="return false"
                                    onCut="return false"
                                    onDrag="return false"
                                    onDrop="return false"
                                    oninput="this.value=this.value.replace(/[^0-9.,]/g,'');"
                                ></b-form-input>
                                <div class="error" v-if="addMilestone_amount[0]">{{ addMilestone_amount[0] }}</div>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col xl="12" lg="12" sm="12">
                            <b-form-group id="fieldset-1" label="Due Date" label-for="input-dueDate" class="fz-14 fw-600">
                                <b-form-datepicker id="input-dueDate" v-model="addUpdateMilestone.dueDate" @input="addData.dueDate = addUpdateMilestone.dueDate" :min="new Date().toISOString().substr(0, 10)" class="mb-2"></b-form-datepicker>
                                <div class="error" v-if="addMilestone_dueDate[0]">{{ addMilestone_dueDate[0] }}</div>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col xl="12" lg="12" sm="12">
                            <b-form-group id="fieldset-1" label="Description" label-for="input-textarea" class="fz-14 fw-600">
                                <b-form-textarea id="input-textarea" v-model="addUpdateMilestone.description2" @keyup="addData.description2 = addUpdateMilestone.description2" rows="3"
                                    max-rows="6" ></b-form-textarea>
                                <div class="error" v-if="addMilestone_description[0]">{{ addMilestone_description[0] }}</div>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-col xl="12" lg="12" sm="12">
                        <div class="text-right w-100 border-top pt-3">
                            <a href="javascript:void(0);" class="mr-2 text-theme" v-if="editMilestone.index == null"
                                @click="closeEditmilestonepop">
                                Cancel
                            </a>
                            <a href="javascript:void(0);" class="mr-2 text-theme" v-else
                                @click=" closeEditmilestonepop">
                                Cancel
                            </a>
                            <b-button type="submit" size="lg" class="btn btn-theme mr-2" v-if="editMilestone.index == null" @click="addNewmile('open')">
                                Save & Add Another
                            </b-button>
                            <b-button type="submit" size="lg" class="btn btn-theme" @click="(editMilestone.index!= null)?editMileStoneData():addNewmile();">
                                {{ (editMilestone.index!= null)?'Edit':'Save' }}
                            </b-button>
                        </div>
                    </b-col>
                </div>
            </div>
    </b-modal>
</template>
<script>

import { mapActions } from "vuex";
import { validationMixin } from 'vuelidate'
import { required, maxLength, between } from 'vuelidate/lib/validators'


export default {
    props:["editMilestone","contractDetails","addMilestone","requestedMilestone","type"], 
    mixins: [validationMixin],

    validations: {
        addData: {
            description: {
                required,
                maxLength: maxLength(200),
            },
            description2: {
                required,
                maxLength: maxLength(200),
            },
            amount: {
                required,
                maxLength: maxLength(5),
                between: between(5, 50000),
            },
            dueDate: { required },
        },
    },
    data() {
        return {
            addData            : {
                description             : '',
                description2            : '',
                amount                  : '',
                dueDate                 : '',
            },
        };
    },
    components: {
    },
    computed: {
        addUpdateMilestone() {
            // breaking reactivity here so edits don't modify the parent
            // we want to only update when "Ok" is clicked.
            if(this.type == 'add'){
                return { ...this.addMilestone };
            }else{
                return { ...this.editMilestone.data };
            }
        },
        addMilestone_title() {
            const errors = []
            if (!this.$v.addData.description.$dirty) return errors
            !this.$v.addData.description.required && errors.push('Title is required')
            !this.$v.addData.description.maxLength && errors.push('Maximum 50 charachter allow')
            return errors
        },
        addMilestone_amount() {
            const errors = []
            if (!this.$v.addData.amount.$dirty) return errors
            !this.$v.addData.amount.required && errors.push('Amount is required')
            !this.$v.addData.amount.between && errors.push('Minimum $5 & Maximum $50000 is Allow.')
            return errors
        },
        addMilestone_dueDate() {
            const errors = []
            if (!this.$v.addData.dueDate.$dirty) return errors
            !this.$v.addData.dueDate.required && errors.push('Due Date is required')
            return errors
        },
        addMilestone_description() {
            const errors = []
            if (!this.$v.addData.description2.$dirty) return errors
            !this.$v.addData.description2.required && errors.push('Description is required')
            !this.$v.addData.description2.maxLength && errors.push('Maximum 200 Charachter Allow Required.')
            return errors
        },
    },
    mounted() {
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        resetAdddata(){
            this.addData            = {
                description             : '',
                description2            : '',
                amount                  : '',
                dueDate                 : '',
            }
        },
        addDataCheck(){
            // console.log('this.addUpdateMilestone',this.addUpdateMilestone)
            this.addData.description    = this.addUpdateMilestone.description;
            this.addData.description2   = this.addUpdateMilestone.description2;
            this.addData.amount         = this.addUpdateMilestone.amount;
            this.addData.dueDate        = this.addUpdateMilestone.dueDate;
            // console.log('this.addData',this.addData);
        },
        // this fun is for to update milestone
        editMileStoneData(){
            this.$v.addData.$touch();
            if (!this.$v.addData.$invalid) {
                this.$v.$reset();
                this.$emit("update:editMilestone", this.addUpdateMilestone);
                this.$bvModal.hide('add-milestone-modal');
                this.resetAdddata();
            }
        },
        // this fun is for to add new milestone in que
        async addNewmile(_v=null){
            // this.addData = this.addUpdateMilestone;
            this.$v.addData.$touch();
            if (!this.$v.addData.$invalid) {
                this.$v.$reset();
                this.addUpdateMilestone.job_application_id    = this.contractDetails.MilestoneDetails[0].job_application_id;
                this.addUpdateMilestone.job_id                = this.contractDetails.MilestoneDetails[0].job_id;
                this.addUpdateMilestone.user_id               = this.contractDetails.MilestoneDetails[0].user_id;
                this.addUpdateMilestone.agency_id             = this.contractDetails.MilestoneDetails[0].agency_id;
                this.addUpdateMilestone.created_user_type     = this.$store.state.accountType;
                this.addUpdateMilestone.paymentStatus         = 0;
                this.$emit('addNewmilestonedata',this.addUpdateMilestone);
                this.$bvModal.hide('add-milestone-modal');
                if(_v!=null){
                    this.$bvModal.show('add-milestone-modal');
                }
                // console.log('this.addUpdateMilestone',this.addUpdateMilestone);
                this.resetAdddata();
            }
        },
        
        // this fun is for to close Edit milestone modal
        closeEditmilestonepop(){
            this.$bvModal.hide('add-milestone-modal');
            this.$emit('addNewmilestonedata');
            this.resetAdddata();
        },
    }
};
</script>