<template>
  <footer id="social" class="py-5 pb-3 bg-black footer-area section-gap foot">
    <b-container>
      <b-row class="mb-30 footer-menu">
        <b-col lg="6" md="12" sm="12">
          <div class="single-footer-widget">
            <img
              src="https://www.qapin.com/assets/img/home/logo/colored-logo.svg"
              alt=""
            /><br />
            <p class="mt-15">
              With our many years of experience in inspection service industry we know that convenient and simple way of working is long overdue. And that’s why we designed Qapin - to be a one-stop shop for Inspectors, clients and inspection agencies. 
            </p>
          </div>
        </b-col>
        <b-col lg="2" md="12" sm="12" class="social-widget">
          <div class="single-footer-widget">
            <h6>Overview</h6>
            <div class="align-items-center">
              <ul id="list2" class="footer-menu-list list2">
                <li @click="$router.push('/about')"><a href="javascript:void(0);">About Future Quality</a></li>
                <li><a @click="$router.push('/how-it-work')" href="javascript:void(0);">How Qapin Woks</a></li>
                <li><a @click="$router.push('/agency-solutions')" href="javascript:void(0);">Agency Solutions</a></li>
                <li><a href="javascript:void(0);">Newsfeed</a></li>
                <li  @click="$router.push('/contact-us')" ><a href="javascript:void(0);">Contact Info</a></li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col lg="2" md="12" sm="12" class="social-widget">
          <div class="single-footer-widget">
            <h6>Feature</h6>
            <div class="align-items-center">
              <ul id="list2" class="footer-menu-list list2">
                <li><a @click="$router.push('/why-qapin')"  href="javascript:void(0);">Why Qapin</a></li>
                <li><a href="javascript:void(0);">Find Job</a></li>
                <li><a href="javascript:void(0);">Post a Job</a></li>
                <li><a href="javascript:void(0);">Training Program</a></li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col lg="2" md="12" sm="12" class="social-widget">
          <div class="single-footer-widget">
            <!-- <h6>Terms & Other</h6> -->
            <h6>Policies</h6>
            <div class="align-items-center">
              <ul id="list2" class="footer-menu-list list2">
                <li  @click="$router.push('/privacy-policy')"><a href="javascript:void(0);">Privacy Policy</a></li>
                <li @click="$router.push('/terms-of-service')"><a href="javascript:void(0);">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="footer-bottom pt-30">
        <b-col lg="6" md="12" sm="12">
          <p class="copyright">Copyright © Qapin - All Rights Reserved.</p>
        </b-col>
        <b-col lg="6" md="12" sm="12">
          <div class="footer-social">
            <ul class="float-right d-flex align-items-center">
              <li>
                <a target="blank" href="javascript:void(0);"
                  >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <!-- <img
                    src="https://www.qapin.com/assets/img/home/footer/facebook.png"
                /> -->
              </a>
              </li>
              <li>
                <a target="blank" href="javascript:void(0);"
                  >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <!-- <img
                    src="https://www.qapin.com/assets/img/home/footer/twitter.png"
                /> -->
              </a>
              </li>
              <li>
                <a target="blank" href="javascript:void(0);"
                  >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              </li>
              <li>
                <a target="blank" href="javascript:void(0);"
                  >
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                  <!-- <img
                    src="https://www.qapin.com/assets/img/home/footer/google-plus.png"
                /> -->
              </a>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["username"],
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
   font-family: Source Sans Pro;
    font-style: normal;
    font-size: 20px!important;
    font-weight: 700!important;
    color: #fff;
    line-height: 25px;
}
.single-footer-widget li a {
  font-family: Source Sans Pro;
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
  color: #bcbcbc;
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
.footer-bottom ul li {
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
