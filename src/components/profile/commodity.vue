<template>   
    <div class="px-5 py-5 border-bottom">
    <div class="text-center">
        <div class="pro-img-wrapper">
        <img
        :src="$store.state.baseUrlImg+'/upload/freelancer/certification.png'"
            class="m-auto img-fluid"
        />
        </div>
        <div class="pro-content">
        <h4 class="mt-2 mb-0 text-black fz-24 fw-600">
            Commodity Experience
        </h4>
        <p class="fz-18 fw-400 text-muted">
            Please Describe The Experience You Have Of Working In The
            Industry, Including The Type Of Jobs You Have Completed.
            Providing A Good Level Of Detail Here Will Help Clients
            See Whether You Have The Experience Needed For Their Work.
        </p>
        <a
            href="javascript:void(0);"
            class="text-theme fz-20 fw-600"
            v-b-modal.edit-category-modal 
            >+ Add Commodity Experiences  {{user.categoryName}}</a
        >
        </div>
         
    </div>
    </div>
</template> 
<script> 

import { mapActions } from "vuex";
export default {
    props: ['user'],
    data() {
        return { 
            commodityExprince:[], 
        }
  },
    
  async mounted() {  
    this.getCommodityExperience();
  },
  methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        async getCommodityExperience(){
            var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/getCommodityExperience",
                    params: {},
                }); 
            this.commodityExprince = res;
        },  
    },
}
</script>
