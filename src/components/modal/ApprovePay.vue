<template>
    <!-- // this is approve & pay model -->
    <b-modal id="approve-pay-modal" size="lg" title="Approve and pay" class="approve-pay-modal" centered hide-footer no-close-on-backdrop>
        <div class="text-left">
            <div class="card-section">
                <b-form @submit.prevent="">
                    <b-row v-if="reviewWork!=''">
                        <b-col xl="12" lg="12" sm="12">
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <div class="d-flex align-items-center">
                                        <label class="text-black fz-20">Release from escrow</label>
                                        <div class="ml-auto d-flex align-items-center">
                                            <span class="fz-18 text-muted fw-600" v-if="!hideInput">${{checkOutAmount(reviewWork)}}</span>
                                            <span class="fa fa-pencil cursor-pointer ml-4 fz-18 text-muted fw-600" v-if="!hideInput" @click="release_amount = checkOutAmount(reviewWork);hideInput = !hideInput" aria-hidden="true"></span>
                                            <b-input-group size="lg" prepend="$" v-if="hideInput">
                                                <b-form-input class="" v-model="release_amount" v-if="hideInput" oninput="this.value=this.value.replace(/[^0-9.,]/g,'');" placeholder="Enter amount" @keyup="checkValue();"></b-form-input>
                                            </b-input-group>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div class="error" v-if="parseInt(release_amount) > parseInt(reviewWork.amount) && error">More than Milestone amount will not be release</div>
                                </b-col>
                            </b-row>
                           
                            <b-row>
                                <b-col xl="12" lg="12" sm="12">
                                    <div class="text-right w-100 border-top pt-3">
                                        <a href="javascript:void(0);" class="mr-2 text-theme" @click="$bvModal.hide('approve-pay-modal'); hideInput = false; requestChange = {message:'',attachment:[]}">
                                            Cancel
                                        </a>
                                        <b-button type="submit" size="lg" class="btn btn-theme" v-b-toggle.review-sidebar-modal v-if="!error && updateSubmitData.m_attach_id != 0" @click="releasePayment">
                                            Send Payment
                                        </b-button>
                                        <b-button type="submit" size="lg" class="btn btn-theme" v-else-if="!error" v-b-toggle.review-sidebar-modal @click="releasePayment">
                                            Send Payment
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
export default {
  props:["reviewWork","updateSubmitData"], 
  data() {
    return {
       hideInput:false,
       release_amount:0,
       error:false,
    };
  },
  computed: {
     
  },
  mounted() {
  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
    // this fun is for to check value
    checkValue(){
        if(parseInt(this.checkOutAmount(this.reviewWork)) >= parseInt(this.release_amount)){
            this.error = false;
        }else{
            this.error = true;
        }
    },
    // this fun is for to request change of work
    async releasePayment(){
        if(parseInt(this.checkOutAmount(this.reviewWork)) < parseInt(this.release_amount)){
            // console.log('if')
            return false
        }
        this.updateSubmitData.release_amount = (this.release_amount > 0)?this.release_amount:this.checkOutAmount(this.reviewWork);
        // console.log('this.updateSubmitData',this.updateSubmitData)
        // this.updateSubmitData.splice('m_attach_id', 1);
        this.$delete( this.updateSubmitData, 'm_attach_id')
        var res = await this.genericAPIPOSTRequest({
            requestUrl: 'updateMilestoneWork',
            params: this.updateSubmitData,
        });
        if (res) {
            this.$bvModal.hide('approve-pay-modal');
            this.$emit("controlparent");
            this.$toastr.s('Payment Release Successfull');
        }
    },
    // this fun is for to check submitted work status
    checkOutAmount(_v){
        // console.log('_v',_v)
        if(this.updateSubmitData.m_attach_id != 0){
            if(_v.submittedWork.length > 0){
                var index = _v.submittedWork.length-1;
                var otherAmount = _v.submittedWork[index].other_amount;
                var payAmount = _v.submittedWork[index].pay;
                if(otherAmount > 0){
                    return otherAmount;
                }else{
                    return payAmount;
                }
            }else{
                return 0;
            }
        }else{
            return _v.amount;
        }
        
    },
  },
};
</script>