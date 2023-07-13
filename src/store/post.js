import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'

const store = new Vuex.Store({
  namespaced: true,

  state: () => ({
    posts: [],
    totalPost: 0,
    comments: [],
    likes: [],
    hidePost: [],
  }),

  getters: {
    // getAllPost: (state) => {
    //   return state.posts;
    // },
  },

  mutations: {
    INSERT_POST(state, post) {
      state.posts.push(post)
    },
    GET_ALL_COMMENT_BY_POSTID(state, data) {
      state.comments = data
    },
    ADD_LIKES(state, data) {
      state.likes.push(data)
    },
    FETCH_ALL_POST(state, data) {
      state.posts = data
    },
    HIDE_POST(state) {
      state.hidePost
    },
  },

  actions: {
    fetchAllPost({ commit }, { params }) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `newsfeed/getAllPost?post_id=0&a=Recent`,
            { params }
          )
          .then((response) => {
            // console.log('posts =>', response)
            this.posts = response
            this.totalPost = response
            commit('FETCH_ALL_POST', response)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async addNewPost({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `newsfeed/addPost`,
            payload
          )
          .then((response) => {
            commit('INSERT_POST', response)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async getAllCommentByPostId({ commit }, { params }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `newsfeed/getAllCommentByPostId?post_id=${params.id}&action=${params.action}`
          )
          .then((response) => {
            commit('GET_ALL_COMMENT_BY_POSTID', response)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async addLikes({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `newsfeed/addLikes`,
            data
          )
          .then((response) => {
            commit('ADD_LIKES', response)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async hidePost({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`newsfeed/hidePost`)
          .then((response) => {
            commit('HIDE_POST', response)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async followUser({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`user/followUser`)
          .then((response) => {
            commit('FOLLOW_USER', response)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})
export default store
