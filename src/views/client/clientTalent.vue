<template>
  <b-container>
    <div>
      <b-row class="mt-100 search-wrap client-search mb-50">
        <b-col xl="12" lg="12" md="12">
          <b-card>
            <h2 class="ml-5 text-black fw-600">Talent's</h2>
          </b-card>
        </b-col>
        <b-col xl="2" lg="2" md="12">
          <b-card class="bg-white p-4 br-20">
            <h5 class="mb-3 fz-30 fw-500 text-black">Your list</h5>
            <hr>
            <div class="talent-submenu">
              <a href="javascript:void(0);" @click="gettabData('savedUser')" class="py-2 px-2 mb-2 d-block fz-16 fw-600 " :class="(currentTab =='savedUser') ?'selected':''" ><i class="fa fa-bookmark" aria-hidden="true"></i>  Saved talent</a>
              <a href="javascript:void(0);" @click="gettabData('hiredUser')" class="py-2 px-2 mb-2 d-block fz-16 fw-600" :class="(currentTab =='hiredUser') ?'selected':''"><i class="fa fa-compass" aria-hidden="true"></i>  Your Hire's</a>
            </div>
          </b-card>
        </b-col>
        <b-col xl="10" lg="10" md="12"> 
          <b-card no-body class="freelancer-wrap bg-white">
            <savedUser v-if="currentTab =='savedUser'" ref="savedTabData" :pageType="'saved'" :talentQualilty="talentQualilty" :jobDetails="{'is_delete':0}" />
            <hiredUser v-if="currentTab =='hiredUser'" ref="hiredTabData" :pageType="'hired'" :talentQualilty="talentQualilty" :jobDetails="{'is_delete':0}" />
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
  import { mapActions,mapGetters } from "vuex";
  import savedUser from '../../components/client-search/saved-user.vue';
  import hiredUser from '../../components/client-search/hired-user.vue';


  export default {
    components : {
      savedUser,
      hiredUser,
    },
    props:[],
    data() {
      return {
        userData:[],
        talentQualilty:[],
        currentTab:'savedUser',
      }
    },
    created() {

    },
    watch: {
        
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest","fetchTalentList"]),
      gettabData(_v){
        this.currentTab = _v;
          if (this.currentTab == 'hiredUser') {
            setTimeout(() => {
              this.$refs.hiredTabData.updateSidebarStatus = false;
              this.$refs.hiredTabData.gethiredtab();
              this.$refs.hiredTabData.sidebarStatus = true;
            }, 200);
          }
          if (this.currentTab == 'savedUser') {
            // setTimeout(() => {
              this.$refs.savedTabData.sidebarStatus = false;
              this.$refs.savedTabData.getsavedtab();
              this.$refs.savedTabData.sidebarStatus = true;
            // }, 200);
          }
      },
    },
    computed:{
      ...mapGetters(["getTalentListdata"]),
    },
    mounted() {
      this.fetchTalentList({params:{"talent_type":"Badges"}});
      this.talentQualilty = this.getTalentListdata;
      this.gettabData('savedUser');
    },  
  }
</script>
