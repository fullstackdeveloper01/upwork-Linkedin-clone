import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
let base_url = ''

Vue.use(Vuex)

const global = {
  namespaced: true,

  state: () => ({
    refreshNewsFeedData: Function,
    countryList: [],
    cityList: [],
    stateList: [],
    qrRoleMasterList: [],
    timezone: [],
  }),

  getters: {
    refreshNewsFeed: (state) => state.refreshNewsFeedData,
    getCountryList: (state) => state.countryList,
    getCityList: (state) => state.cityList,
    getStateList: (state) => state.stateList,
    getQrRoleMasterList: (state) => state.qrRoleMasterList,
    getTimeZone: (state) => state.timezone,
  },

  mutations: {
    REFRESH_NEWS_FEED(state, fun) {
      // console.log(fun)
      state.refreshNewsFeedData = fun
    },
    GET_COUNTRY_LIST(state, data) {
      state.countryList = data
    },
    GET_CITY_LIST(state, data) {
      state.cityList = data
    },
    GET_STATE_LIST(state, data) {
      state.cityList = data
    },
    GET_QR_ROLE_MASTER_LIST(state, data) {
      state.qrRoleMasterList = data
    },
    GET_TIME_ZONE(state, data) {
      state.timezone = data
    },
  },

  actions: {
    refreshNewsFeedFunc({ commit }, { refresh }) {
      // console.log(refresh)
      commit('REFRESH_NEWS_FEED', refresh)
    },
    fetchCountryList({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: base_url + 'common/getCountryList',
        })
          .then((response) => {
            commit('GET_COUNTRY_LIST', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchCityList({ commit }, payload) {
      // console.log('cit', payload)
      return new Promise((resolve, reject) => {
        axios
          .get(`${base_url}common/getCityList`, payload)
          .then((response) => {
            commit('GET_CITY_LIST', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchStateList({ commit }, payload) {
      // console.log('stat2', payload)
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: `${base_url}common/getStateList`,
          data: {
            payload, // This is the body part
          },
        })
          .then((response) => {
            commit('GET_STATE_LIST', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchQpRoleMasterList({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: base_url + 'common/getQpRoleMasterList',
        })
          .then((response) => {
            commit('GET_QR_ROLE_MASTER_LIST', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchTimeZone({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: base_url + 'common/getTimeZoneList',
        })
          .then((response) => {
            commit('GET_TIME_ZONE', response.data.result)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}
export default global
