<template>
  <footer
    v-if="(isAuth && $store.state.isNewsfeed && this.$route.name!='Login' && this.$route.name!='chat' && this.$route.name !='BasicInfo' && this.$route.name !='ExpireLink' && this.$route.name!='ForgotPassword' && this.$route.name!='update-profile') || this.$route.name =='agencyPublicProfile' || this.$route.name=='freelancerProfile'"
    id="social"
    class="py-5 pb-3 bg-black footer-area section-gap foot"
  >
    <b-container>
      <b-row class="mb-30 footer-menu">
        <b-col lg="2" md="12" sm="12">
          <div class="single-footer-widget">
            <h6>Navigate</h6>
            <div class="align-items-center">
              <ul id="list2" class="footer-menu-list list2">
                <li><a href="javascript:void(0);">Home</a></li>
                <li><a href="javascript:void(0);">Post a Job</a></li>
                <li><a href="javascript:void(0);">Find a Freelancer</a></li>
                <li><a href="javascript:void(0);">Find a Job</a></li>
                <li><a @click="$router.push('/agency-solutions')" href="javascript:void(0);">Agency Solutions</a></li>
                <li><a @click="$router.push('/certifications')" href="javascript:void(0);">Certification List</a></li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col lg="2" md="12" sm="12" class="social-widget">
          <div class="single-footer-widget">
            <h6>Company Info</h6>
            <div class="align-items-center">
              <ul id="list2" class="footer-menu-list list2">
                <li><a @click="$router.push('/about')" href="javascript:void(0);">About Qapin</a></li>
                <li><a @click="$router.push('/how-it-work')" href="javascript:void(0);">How Qapin Woks</a></li>
                <li><a @click="$router.push('/why-qapin')"  href="javascript:void(0);">Why Qapin</a></li>
                <li><a href="javascript:void(0);">Work Agreements</a></li>
                <li><a @click="$router.push('/safe-payments')"  href="javascript:void(0);">SafePay</a></li>
                <li><a @click="$router.push('/pricing')"  href="javascript:void(0);">Pricing</a></li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col lg="2" md="12" sm="12" class="social-widget">
          <div class="single-footer-widget">
            <h6>Resources</h6>
            <div class="align-items-center">
              <ul id="list2" class="footer-menu-list list2">
                <li><a href="javascript:void(0);">Help & FAQ</a></li>
                <li><a href="javascript:void(0);">Blog</a></li>
                <li><a @click="$router.push('/contact-us')" href="javascript:void(0);">Contact Us</a></li>
                <li><a href="javascript:void(0);">Cookie Settings</a></li>
                <li><a @click="$router.push('/global-expansion')" href="javascript:void(0);">Global Expansion</a></li>
                
              </ul>
            </div>
          </div>
        </b-col>
        <b-col lg="2" md="12" sm="12" class="social-widget">
          <div class="single-footer-widget">
            <h6>Policies</h6>
            <div class="align-items-center">
              <ul id="list2" class="footer-menu-list list2">
                <li><a href="javascript:void(0);">IP Policy</a></li>
                <li><a @click="$router.push('/privacy-policy')"  href="javascript:void(0);">Privacy Policy</a></li>
                <li><a @click="$router.push('/terms-of-service')" href="javascript:void(0);">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col lg="2" md="12" sm="12" class="social-widget">
          <div class="single-footer-widget">
            <h6>Connect With Us</h6>
            <div class="footer-social">
            <ul class="d-flex align-items-center">
              <li class="mr-2">
                <a target="blank" href="javascript:void(0);" class="border br-50 py-2 px-2 w-10 h-10 block"
                  >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <!-- <img
                    src="https://www.qapin.com/assets/img/home/footer/facebook.png" class="img-fluid w-50 m-auto"
                /> -->
              </a>
              </li>
              <li class="mr-2">
                <a target="blank" href="javascript:void(0);" class="border br-50 py-2 px-2 w-10 h-10 block"
                  >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <!-- <img
                    src="https://www.qapin.com/assets/img/home/footer/twitter.png" class="img-fluid m-auto pt-1"
                /> -->
              </a>
              </li>
              <li>
                <a target="blank" href="javascript:void(0);" class="border br-50 py-2 px-2 w-10 h-10 block"
                  >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  <!-- <img
                    src="https://www.qapin.com/assets/img/home/footer/linkedIn.png" class="img-fluid m-auto"
                /> -->
              </a>
              </li>
              <!--<li>
                <a target="blank" href="javascript:void(0);"
                  ><img
                    src="https://www.qapin.com/assets/img/home/footer/google-plus.png" class="img-fluid"
                /></a>
              </li>-->
            </ul>
          </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="footer-bottom pt-30">
        <b-col lg="6" md="12" sm="12">
          <a @click="$router.push('/')">
            <WebLogo class="lg:w-full lg:h-full" />
          </a>
        </b-col>
        <b-col lg="6" md="12" sm="12">
          <p class="copyright text-right mb-0" style="margin-bottom:0px!important;">Copyright © Qapin - All Rights Reserved.</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import WebLogo from "./icons/WebLogo.vue";
export default {
  props: ["username"],
  components: {
    WebLogo
  },
  data() {
    return {
      isAuth: null,
    };
  },
  computed: mapGetters(["isNewsfeed"]),
  mounted() {
    this.isAuth = localStorage.getItem("token");
  },
};
</script>

<style scoped>
ul {
  margin-left: -32px;
}
.single-footer-widget h6 {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-size: 20px!important;
  font-weight: 700!important;
  color: #fff;
  line-height: 25px;
}
.single-footer-widget li a {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #bcbcbc;
}
a {
  text-decoration: none;
}
ul li a {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #666666;
}
p {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #999999;
}
.copyright {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #bcbcbc;
}
.footer-bottom {
  border-top: 1px solid rgb(255, 255, 255, 0.15);
}
.footer-bottom ul li{
  width: 38px;
    height: 38px;
    padding: 4px 10px;
    margin-right: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 19px;
    box-shadow: 0 7px 17px 0 rgb(4 27 53 / 5%);
    text-align: center;
}

p {
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
}
h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
  font-weight: 500 !important;
  line-height: 1.2 !important;
}
</style>
