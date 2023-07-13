import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
let base_url = "";
// let headTokens = {
//   "Content-Type": "application/json",
//   Authorization: localStorage.getItem("token"),
// };
Vue.use(Vuex);

const settings = {
  namespaced: true,

  state: () => ({
    currentUser: null,
    headToken:'',
    selectedCategories: [],
  }),

  getters: {
    getUserDetails: (state) => state.currentUser,
    getSelectedCategories: (state) => state.selectedCategories,
  },

  mutations: {
    GET_USER_DETAILS(state, data) {
      state.currentUser = data;
    },
    UPDATE_PROFILE(state, data) {
      state.currentUser = data;
    },
    SET_SELECTED_CATEGORIES(state, data) {
      state.selectedCategories = data;
    },
  },

  actions: {
    enCodeId(payload ) {
      
      return new Promise((resolve) => {
         var id = btoa(payload);
         resolve(id);
      });
    },
    fetchUserDetails({ commit }, {params}) {
  
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios
          .post(`${base_url}/getUserParentDetails`, params , { "headers": this.headToken })
          .then((response) => {
            // console.log('new codowdmasdmo');
            // console.log(response.data.result);

            commit("GET_USER_DETAILS", response.data.result);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fetchSelectedCategories({ commit }) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };

      return new Promise((resolve, reject) => {
        axios
          .get(`${base_url}user/getCommodityExperience`, { headers: this.headToken })
          .then((response) => {
            commit("SET_SELECTED_CATEGORIES", response.data.result);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updateProfile({ commit }, payload) {
      // console.log('payload',payload)
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios
          .post(`${base_url}user/updateParentUserProfile`, payload, {
            headers: this.headToken,
          })
          .then((response) => {
            commit("UPDATE_PROFILE", response.data.result);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updateUserConfig({ commit }, payload) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios
          .post(`${base_url}setting/updateUserConfig`, payload, {
            headers: this.headToken,
          })
          .then((response) => {
            commit("UPDATE_PROFILE", response.data.result);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    UpdateSocialLink({ commit }, payload) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };
      return new Promise((resolve, reject) => {
        axios
          .post(`${base_url}user/UpdateSocialLink`, payload, {
            headers: this.headToken,
          })
          .then((response) => {
            commit("UPDATE_PROFILE", response.data.result);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updateCategory({ commit }, payload) {
      this.headToken = { Authorization: 'Bearer '+this.state.currentUserData.token };

      return new Promise((resolve, reject) => {
        axios
          .post(`${base_url}updateCategory`, payload, {
            headers: this.headToken,
          })
          .then((response) => {
            commit("UPDATE_PROFILE", response.data.result);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
export default settings;
