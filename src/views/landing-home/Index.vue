<template>
  <div class="relative w-full h-auto overflow-x-hidden bg-white">
    <!-- Site Header -->
    <!-- <TheHomeSiteHeader v-if="!isAuth"/> -->

    <!-- Hero Section -->
    <HeroSection />

    <!-- Quality Agencies -->
    <QualityAgencies />

    <!-- Hire Section -->
    <HireSection />

    <!-- Qapin Use  -->
    <QapinUse />

    <!-- Browse Freelance -->
    <BrowseFreelance />

    <hr
      class="w-full mx-auto mt-24 max-w-7xl"
      style="
        background: #ffffff;
        border: 1.5px solid #ebebeb;
        border-radius: 20px;
      "
    />

    <!-- How Qapin works -->
    <HowItWorks />

    <hr
      class="w-full mx-auto mt-12 xl:mt-24 max-w-7xl"
      style="
        background: #ffffff;
        border: 1.5px solid #ebebeb;
        border-radius: 20px;
      "
    />

    <!-- FAQ -->
    <FAQ />

    <!-- Testimonials -->
    <Testimonials />

    <!-- Site Footer -->
    <TheHomeSiteFooter class="" v-if="!isAuth" />
  </div>
</template>

<script>
// import TheHomeSiteHeader from '../../components/TheHomeSiteHeader.vue'
import TheHomeSiteFooter from './TheHomeSiteFooter.vue'
import HeroSection from './HeroSection.vue'
import BrowseFreelance from './BrowseFreelance.vue'
import FAQ from './FAQ.vue'
import HowItWorks from './HowItWorks.vue'
import QapinUse from './QapinUse.vue'
import QualityAgencies from './QualityAgencies.vue'
import Testimonials from './Testimonials.vue'
import HireSection from './HireSection.vue'

export default {
  components: {
    HeroSection,
    BrowseFreelance,
    FAQ,
    HowItWorks,
    QapinUse,
    QualityAgencies,
    Testimonials,
    HireSection,
    // TheHomeSiteHeader,
    TheHomeSiteFooter,
  },

  data() {
    return {
      isAuth: null,
    }
  },
  mounted() {
    this.isAuth = localStorage.getItem('token')
    if (this.$route.name == 'ExpireLink') {
      this.isAuth = null
    }
  },
}
</script>
