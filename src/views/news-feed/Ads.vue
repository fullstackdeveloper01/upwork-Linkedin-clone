<template>
  <div class="px-0" v-if="isShow">
    <h4
      class="text-lg font-bold"
      style="margin-bottom: 10px; margin-left: 10px"
    >
     {{advertisements[0].subheading}}
    </h4>
    <div class="adv-main-content" v-if="advertisements.length > 1">
      <flickity
        class="flickity"
        style="min-height: 0px"
        ref="flickity"
        :options="flickityOptions"
      >
        <div v-for="(ads, i) in advertisements" :key="i" class="carousel-cell adv-slider-item">
          <div
            class="w-full h-full max-w-sm bg-white border border-gray-400 rounded-md shadow-sm adv-slider-item-content"
          @click="redirectLocation(ads.image_url)">
            <h5 class="mb-2 text-lg font-semibold text-gray-900">
              {{ ads.title }}
            </h5>
            <p
              class="w-full max-w-lg mx-auto mb-2 text-base text-gray-900 truncate normal"
            >
              {{ ads.description }}
            </p>
            <!-- ../../assets/img/news-slider/booking.png -->
             <div class="w-full h-full">
              <img class="w-auto " :src="ads.image" style="height: 280px;" />
            </div>
          </div>
        </div>
        <!-- <div class="carousel-cell adv-slider-item">
          <div
            class="w-full h-full max-w-sm bg-white border border-gray-400 rounded-md shadow-sm adv-slider-item-content"
          >
            <h5 class="mb-2 text-lg font-semibold text-gray-900">
              What Makes Us Unique
            </h5>
            <p
              class="w-full max-w-lg mx-auto mb-2 text-base text-gray-900 truncate normal"
            >
              Qapin Is The First App On The Market To Connect Clients With Third
              Party Inspection Companies And Freelance Inspectors Who Are Local
              To The Area.
            </p>
            <img src="../../assets/img/news-slider/unique.png" class="mt-10" />
          </div>
        </div>
        <div class="carousel-cell adv-slider-item">
          <div
            class="max-w-sm bg-white border border-gray-400 rounded-md shadow-sm adv-slider-item-content"
          >
            <h5 class="mb-2 text-lg font-semibold text-gray-900">
              A Simple Process
            </h5>
            <p
              class="w-full max-w-lg mx-auto mb-2 text-base text-gray-900 truncate normal"
            >
              With such a vast database of professionals to choose from, Qapin
              aims to make things easier for clients and inspectors.
            </p>
            <img src="../../assets/img/news-slider/process.png" class="mt-10" />
          </div>
        </div> -->
      </flickity>
    </div>
    <div v-if="advertisements.length == 1">
      <div class="single-image-slider"  @click="redirectLocation(advertisements[0].image_url)">
        <h5 class="mb-2 text-lg font-semibold text-gray-900">
          {{ advertisements[0].title }}
        </h5>
        <p
          class="w-full max-w-lg mx-auto mb-2 text-base text-gray-900 truncate normal"
        >
          {{ advertisements[0].description }}
        </p>
        <img :src="advertisements[0].image" class="img-fluid">
      </div>
    </div> 
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import axios from 'axios'
//import $ from 'jquery'

export default {
  components: {
    Flickity,
  },

  props: {
    indexAd: {
      type: [String, Number],
      default: 1
    }
  },

  data() {
    return {
      image: null,
      isShow: false,
      advertisements: [],
      flickityOptions: {
        initialIndex: 2,
        prevNextButtons: true,
        pageDots: false,
        autoPlay: true,
        wrapAround: true,
        freeScroll: true,
      },
    }
  },

  mounted() {
    this.getNews()
  },

  methods: {
    getNews() {
      let data = {"location":"top"}
      axios({
        method: 'post',
        url: ' getAdvertiment',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          this.advertisements = response.data.result.splice(0, 6)
          if(this.advertisements.length > 0) {
            this.isShow = true
          }else{
            //$('.flickity-button').css('display',"none");
          }
          setTimeout(() => {
            this.$refs.flickity.flickity();
            this.$refs.flickity.reloadCells();
          }, 200)
          // carousel.flickity();
          // flkty.reloadCells()
          // flkty.playPlayer()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    redirectLocation(url){
      if(url!=""){
        window.open(
          url,
          '_blank' // <- This is what makes it open in a new window.
        );
      }   
    }
  }
}
</script>

<style scoped>
.adv-main-content {
  margin: 10px;
}
.adv-slider-item {
  padding: 6px;
  min-height: 400px;
}
.adv-slider-item-content {
  padding: 15px;
  height: 380px;
}
</style>
