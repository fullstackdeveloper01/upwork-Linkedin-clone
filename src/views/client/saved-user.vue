<template>
    <b-container>
      <b-row class="mt-100 search-wrap mb-50">
        <b-col xl="12" lg="12" md="12">
          <b-card no-body class="freelancer-wrap mt-12 bg-white">
            <ul class="nav nav-pills mb-3 py-2 px-4" id="pills-tab" role="tablist">
              <a href="javascript:void(0);" @click="activetab = 'search'; $router.push({path:'client/search',name:'clientSearch'})">
              <li class="nav-item" role="presentation" >
                <button class="nav-link" :class="(activetab =='search')?'active':''" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Search </button>
              </li>
            </a>
            <a href="javascript:void(0);" @click="activetab = 'hiredUser'; $router.push({path:'/client/hired-freelancer',name:'hiredUser'})">
              <li class="nav-item" role="presentation">
                <button class="nav-link" :class="(activetab =='hiredUser')?'active':''" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" >My Hires <span class="badge badge-secondary br-50" ></span></button>
              </li>
            </a>
            <a href="javascript:void(0);" @click="activetab = 'savedUser'; $router.push({path:'/client/saved-freelancer',name:'savedUser'})">
              <li class="nav-item" role="presentation">
                <button class="nav-link" :class="(activetab =='savedUser')?'active':''" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" >Saved <span class="badge badge-secondary br-50" ></span></button>
              </li>
            </a>
            </ul>
            <savedUser v-if="activetab =='savedUser'" :pageType="'saved'" :talentQualilty="talentQualilty" :jobDetails="{'is_delete':0}" />
            <hiredUser v-if="activetab =='hiredUser'" :pageType="'hired'" :talentQualilty="talentQualilty" :jobDetails="{'is_delete':0}" />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  <script>
    import { mapActions,mapGetters } from "vuex";
    import savedUser from "../../components/client-search/saved-user.vue";
    import hiredUser from "../../components/client-search/hired-user.vue";
    export default {
      components : {
        savedUser,
        hiredUser
      },
      props:{
      },
  
      data() {
        return {
            activetab:'',
            talentQualilty:[],
        }
      },
      methods: {
        ...mapActions(["fetchTalentList"]),
        // gettabData(_v){
        //   alert(_v)
        //   if (_v=='hired') {
        //     this.$refs.hiredTabData.updateSidebarStatus();
        //     this.$refs.hiredTabData.gethiredtab();
        //     // this.$refs.hiredTabData.sidebarStatus = true;

        //   }else if (_v=='saved') {
        //     this.$refs.savedTabData.sidebarStatus = false;
        //     this.$refs.savedTabData.getsavedtab();
        //     this.$refs.savedTabData.sidebarStatus = true;

        //   }
        // },
      },
      computed:{
        ...mapGetters(["getTalentListdata"]),
      },
      mounted() {
        this.fetchTalentList({params:{"talent_type":"Badges"}});
        this.talentQualilty = this.getTalentListdata;
        if(this.$router.currentRoute.name == 'savedUser'){
            this.activetab ='savedUser';
        }else if(this.$router.currentRoute.name == 'hiredUser'){
            this.activetab ='hiredUser';
        }else{
            this.$router.push({path:'/client/dashboard',name:'clientDashboard'});
        }
      },  
    }
  </script>
  