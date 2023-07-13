import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueTextareaAutogrowDirective from 'vue-textarea-autogrow-directive'
import "vue-wysiwyg/dist/vueWysiwyg.css";
// Router
import router from './router'

// Store action
import store from './store'

// Main style
import './assets/index.css'

// Vuetify
import vuetify from './plugin/vuetify'
// import Vuetify from 'vuetify/lib'

// Placeholder content
import VueContentPlaceholders from 'vue-content-placeholders'

// Vue Infinite scroll
var infiniteScroll = require('vue-infinite-scroll')

// Aos Animation
import AOS from 'aos'
import 'aos/dist/aos.css'

// Toastr
import vueToastr from 'vue-toastr'

// Swal Alert
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vuelidate validation
import Vuelidate from 'vuelidate'

import VueTinySlider from "vue-tiny-slider";
import "tiny-slider/src/tiny-slider.scss";
import commonmixins from './mixins/commonutils'
// import { StripePlugin } from '@vue-stripe/vue-stripe';

// const optionss = {
//   pk: 'pk_test_51JdqlfBCeXjCoMqA9kvCfL3NeJ1S3QD3ICvbmB66GwjwIvi9XafbWxFVEZqDUq0YENdHJY4OEhxM0QG5sb2HgRmi00ZPTT890M',
//   stripeAccount: 'acct_1JdqlfBCeXjCoMqA',
//   apiVersion: '2022-08-01',
//   locale: 'en',
// };

// Vue.use(StripePlugin, optionss);

Vue.component("tiny-slider", VueTinySlider);
import ReadMore from 'vue-read-more';
 
Vue.use(ReadMore);
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#f2613c',
  showClass: {
    popup: 'animate__animated animate__fadeInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp',
  },
}

AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-in-sine',
  delay: 100,
})

import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

Vue.use(VueTelInput)
Vue.mixin(commonmixins)
Vue.use(Vuelidate)
Vue.use(vueToastr, {
  maxOpened: 1,
  defaultPosition: 'toast-bottom-right',
  preventDuplicates: true,
})
Vue.use(VueSweetalert2, options)
Vue.use(VueContentPlaceholders)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(infiniteScroll)
Vue.use(VueTextareaAutogrowDirective)
import { EmojiPickerPlugin } from 'vue-emoji-picker'
Vue.use(EmojiPickerPlugin)
Vue.config.productionTip = false

import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {
  hideModules: { 
    "image": true,
    "headings":true,
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
