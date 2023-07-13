import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import post from "../store/post";
import global from "../store/global";
import settings from "../store/settings";
import createPersistedState from "vuex-persistedstate";
// const canceltoken = axios.CancelToken.source();
// stores modules
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isNewsfeed: true,
    lastpostId:0,
    headToken:'',
    listAccount:{
      company:'',
      qp_user:'',
      user:'',
    },
    profileImg:'',
    accountType:localStorage.getItem("accountType"),
    currentUserData:'',
    loginUserUuid:'',
    currentUserOwnerData:'',
    baseUrl:'',
    baseUrlImg:'',
    swiftKey:'',
    LanguageData:[],
    talentData:[],
    ExperienceLevelData:[],
    certificationList:[],
    canceltoken:'',
    tempData:{},
  },

  mutations: {
    setcurrentUserData(state, payload) {
      state.currentUserData = payload;
    },
    setcurrentUserLoginUuid(state, payload){
      state.loginUserUuid  = payload;
    },
    setcurrentUserOwnerData(state, payload) {
      state.currentUserOwnerData = payload;
    },
    isNewsfeed(state, payload) {
      state.isNewsfeed = payload;
    },
    lastpostId(state, payload) {
      state.lastpostId = payload;
    },
    CLEARERROR(state) {
      console.log(state);
    },
    setListOfAccount(state, payload) {
      state.listAccount = payload;
    },
    setProfileImg(state, payload){
      state.profileImg = payload;
    },
    setaccountType(state, payload){
      state.accountType = payload;
    },
    
    GET_LANGUAGE_LIST(state, data) {
      state.LanguageData = data
    },

    GET_TALENT_LIST(state, data) {
      state.talentData = data
    },

    GET_EXPERIENCE_LEVEL(state, data) {
      state.ExperienceLevelData = data
    },

    GET_CERTIFICTION_LIST(state, data){
      state.certificationList = data;
    },
    SET_TEMPDATA(state,data){
      state.tempData = data;
    }
  },

  actions: {
    TempDataUpdate({commit},value) {
      commit("SET_TEMPDATA", value);
    },
    // async genericAPIGETRequest({ commit, state }, { requestUrl, params }) {
    //   commit('CHANGELOADINGSTATE', { isprocessing: true, processingpercent: 10 });
    //   try {
    //       let res = await Vue.axios.get(baseUrl + requestUrl, { params: params ? params : '' })
    //       if (res.data.response && res.data.responseStatus == 'SUCCESS') {
    //           commit('CLEARERROR');
    //           return res.data.response;
    //       }
    //   } catch (error) {
    //       const nerror = wrapError(error)
    //       commit('SETERROR', nerror)
    //       throw nerror
    //   } finally {
    //       commit('CHANGELOADINGSTATE', { isprocessing: false });
    //   }
    // },

    async genericAPIPOSTRequest({ commit }, { requestUrl, params }) {
      // this.headToken = { Authorization: localStorage.getItem("token") };
      this.state.canceltoken = axios.CancelToken.source()
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      try {
        let res;
        if (params) { 
          res = await axios.post(this.state.baseUrl + requestUrl, params,{"headers":this.headToken,cancelToken: this.state.canceltoken.token});
        } else {
          res = await axios.post(this.state.baseUrl + requestUrl);
        }
         
        if(res.data.status){
          commit("CLEARERROR");
          //alert(res.data.message);
          return res.data.result; 
        }else{
          //this.$toastr.e(res.data.message);
          return res.data.result; 
        }
      } catch (error) {
        // console.log('error',error)
        // return false;
        if(error=='Error: Request failed with status code 401'){

            this.state.currentUserData = '';
            localStorage.removeItem("token"); 
            localStorage.removeItem("accountType"); 
            localStorage.removeItem("loginUserData"); 
            // this.$router.push("/login");
            window.location.href = "/login";
        }
        //this.$toastr.e('Something went wrong please try again!');
        // const nerror = wrapError(error)
        // commit('SETERROR', nerror)
        // throw nerror
      } finally {
        //this.$toastr.e('Something went wrong please try again!');
        //commit('CHANGELOADINGSTATE', { isprocessing: false });
      }
    },
    async fetchApis({ commit },{requestUrl,params}) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios.post(this.state.baseUrl +requestUrl,params,{"headers":this.headToken})
          .then((response) => {
            commit("CLEARERROR");
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async cancelApiRequest({ commit }) {
      this.state.canceltoken.cancel();
      this.state.canceltoken=null;
      commit("CLEARERROR");

    },
    
    async fetchLanguageList({ commit }) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios.post(this.state.baseUrl +'getLanguageList','',{"headers":this.headToken})
          .then((response) => {
            commit('GET_LANGUAGE_LIST', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async fetchTalentList({ commit },{params}) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios.post(this.state.baseUrl +'getTalentList',params,{"headers":this.headToken})
          .then((response) => {
            commit('GET_TALENT_LIST', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    listAccount(context, value) {
      context.commit("setListOfAccount", value);
    },
    profileImg(context, value) {
      context.commit("setProfileImg", value);
    },
    currentUserData(context, value) {
      context.commit("setcurrentUserData", value);
    },
    currentUserLoginUuid(context, value) {
      context.commit("setcurrentUserLoginUuid", value);
    },
    accountType(context, value) {
      context.commit("setaccountType", value);
    },
    async fetchExperienceLevelList({ commit }) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios.post(this.state.baseUrl +'getExperienceLevel','',{"headers":this.headToken})
          .then((response) => {
            commit('GET_EXPERIENCE_LEVEL', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    
    async fetchCertificationList({ commit }) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios.post(this.state.baseUrl +'user/getCertification','',{"headers":this.headToken})
          .then((response) => {
            commit('GET_CERTIFICTION_LIST', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  
  getters: {
    // getListAccount(state) {
    //   return state.listAccount;
    // }
    getLanguageListdata(state) {
      return state.LanguageData;
    },
    getTalentListdata(state) {
      return state.talentData;
    },
    getExperienceLevelListdata(state) {
      return state.ExperienceLevelData;
    },

    getCertificationListdata(state){
      return state.certificationList;
    },
    getTempData(state){
      return state.tempData;
    },
  },
  modules: {
    post,
    global,
    settings,
  },
});
