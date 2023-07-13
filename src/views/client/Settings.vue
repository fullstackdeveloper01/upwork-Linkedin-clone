<template>
  <b-container>
    <b-row class="mt-100 settings-wrap mb-50">
      <b-col cols="12">
        <h4 class="mb-5 text-black fz-30 fw-500"><b>Settings</b></h4>
        <!-- client settings -->
        <b-card no-body v-if="$store.state.accountType=='client'">
          <b-tabs pills card vertical active-nav-item-class="hide-active"> 
            <template v-for="(data,index) in tabs">
              <template v-if="isPermissionForClient(data.type) && data.type!='addfreelancer'">
                <b-tab :title="data.title" @click="$router.push({name:'Settings',path:'/settings',query:{'current':index}})" :key="index"></b-tab>  
              </template>
              <template v-else >
                <b-tab active :key="index">
                  <NewFreelancer />
                </b-tab>
              </template>
            </template>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import NewFreelancer from '../../components/client/NewFreelancer.vue'
export default { 
  components: { NewFreelancer },
  data() {
    return {
      tabCount:0,
      currentPage:2,
      tabs:[
        {title:'My Info',type:'myinfo'},
        {title:'Billing & Payments',type:'BillingPayments'},
        {title:'Password & Security',type:'passwordSecurity'},
        {title:'Notification Settings',type:'notificationSetting'},
        {title:'Members & Permission',type:'memberPermission'},
        {title:'Tax Information',type:'taxInformation'},
        {title:'Add Freelancer',type:'addfreelancer'},

      ]
    }
  },
  mounted() {
    
  },
  methods:{
    increaseCount(){
      if(this.tabCount>0){
        this.tabCount =this.tabCount++;
        console.log(this.tabCount);
        return this.tabCount;
      }else{
        console.log(this.tabCount);

        return this.tabCount;
      }
    },
  }
}
</script>
<style>
.hide-active{border-left: 0px !important;}
</style>