<template>
    <div class="container myJobs-wrap" 
        v-infinite-scroll="getAllcontracts"
        :infinite-scroll-disabled="busy"
        infinite-scroll-distance="1"
    >
        <b-row class="mt-100 mb-50">
            <b-col cols="12">
                <div class="d-flex align-items-center">
                    <h4 class="mb-2 fz-30 fw-500 text-black"><b>My Jobs</b></h4>
                    <div class="ml-auto d-flex align-items-center">
                        <p class="mb-0 mr-2">Earnings available now: <span class="text-theme">${{totalEarn}}</span></p> 
                        <a href="javascript:void(0);" class="drop">
                            <i class="fa fa-ellipsis-h text-muted" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </b-col>
            <b-col cols="12">
                <b-card-group deck>
                    <b-card class="py-4 px-4 bg-white">
                        <div class="d-flex align-items-center">
                            <h4 class="mb-2 fz-30 fw-500 text-black">Active Contracts</h4>
                            <div class="ml-auto d-flex align-items-center">
                                
                            </div>
                        </div>
                        <b-tabs v-model="currentTab" card>
                            <b-tab title="Active Milestones" @click="currentTab = 0; filterData()">
                                <myJobs :contractData="contractData" :loaderStatus="loaderStatus" />
                            </b-tab>
                            <b-tab title="Awaiting Milestones" @click="currentTab = 1; filterData()">
                                <myJobs :contractData="contractData" :loaderStatus="loaderStatus" />
                            </b-tab>
                            <b-tab title="Payment Requests" @click="currentTab = 2; filterData()">
                                <myJobs :contractData="contractData" :loaderStatus="loaderStatus" />
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import myJobs from "../../components/freelancer/myJobs.vue";
export default {
    components: {
    myJobs,
  },
  data() {
    return {
        filtersValue              : {
            title                 : '',
            start_limit           : 0,
            end_limit             : 3,
            milestone_status      : [],
        },
        busy                      : false,
        loaderStatus              : false,
        currentTab                : 0,
        contractData              : [],
        totalEarn                 : 0,
    }
  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
    // this fun is for to filter the data
    filterData(){
      this.contractData               = [];
      this.filtersValue.start_limit   = 0;
      this.filtersValue.end_limit     = 3;
      this.busy                       = false;
      this.getAllcontracts();
    },
    // this fun is for to get contract data
    async getAllcontracts(){
      if(this.busy)return true;
      this.busy                               = true;
      this.loaderStatus                       = true;
      this.filtersValue.milestone_status      = (this.currentTab == 0)?[1]:(this.currentTab == 1)?[2]:[3];
      // this fun is for to get Jobs Offers
      var res               = await this.genericAPIPOSTRequest({
          requestUrl        : "getFreelancerContractList",
          params            : {
            'filter'        : '2',
            'search'        : this.filtersValue,
            'type'          : this.$store.state.accountType
          }
      });
      this.totalEarn        = res.amount;
      if(res.data.length > 0){
        var that            = this;
        res.data.map(function(item){ return  that.contractData.push(item)  } );
        this.filtersValue.start_limit=this.contractData.length;
        this.busy           = false;
      }
      this.loaderStatus     = false;
    },
  },
  mounted(){
    // this fun is for to get all contracts 
    this.getAllcontracts();
  }
}
</script>
