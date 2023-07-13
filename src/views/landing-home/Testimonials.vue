<template>
  <div
    class="h-auto py-12 pb-24 mt-7 mb-64 xl:mt-24 xl:px-0"
    style="background: rgba(242, 97, 60, 0.07)"
  >
    <div class="relative w-full px-4 mx-auto mb-40 max-w-7xl xl:px-0">
      <p
        class="pb-0 text-sm text-center uppercase fw-400 text-primary-500"
        style="padding-bottom: 0"
      >
      Testimonial
      </p>
      <h2
        style="font-weight: 700"
        class="flex justify-center text-3xl text-center text-black xl:text-6xl xl:text-left fw-bold"
      >
      What our customers are Saying
      </h2>
      <p class="mt-4 text-lg text-center text-black font-200">
        Qapin a premium marketplace for source inspectors
      </p>

      <div class="w-full mt-16">
        <flickity
          class="flickity"
          style=""
          ref="flickity"
          :options="flickityOptions"
        >
          <div class="flex w-full gap-4 px-0 xl:px-6">
            <div
              class="px-4 py-2 mt-12 transition-all duration-700 ease-out bg-white xl:py-4 md:px-4 xl:px-12 rounded-2xl hover:shadow-2xl"
              style="height: 306px"
            >
              <h6 class="text-lg font-semibold">5.0</h6>
              <div class="flex mt-1 space-x-2">
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
              </div>
              <p
                class="pt-4 text-sm italic xl:text-2xl sm:text-sm md:text-base lg:text-xl fw-400 xl:pt-6 md:pt-4"
              >
                Using Qapin is such a simple and intuitive process, you’ll wish
                you found it sooner. Register with Qapin today and discover the
                difference we make.
              </p>

              <div class="flex space-x-4 pr-6mt-0 xl:mt-4">
                <div
                  class="w-10 h-10 p-2 rounded-md md:h-12 md:p-4 md:w-12"
                  style="background: #614ce2"
                ></div>
                <div class="">
                  <h4
                    style="font-weight: 700"
                    class="text-sm text-left text-black cursor-pointer hover:text-primary-500 fw-600 xl:text-lg"
                  >
                    Kristy Benton
                  </h4>
                  <p
                    class="w-24 text-xs text-left text-gray-400 uppercase fw-200 xl:w-auto md:text-sm md:mt-2"
                  >
                    marketing head of vodafone
                  </p>
                </div>
              </div>
            </div>

            <div
              class="px-4 py-2 transition-all duration-700 ease-out bg-white xl:py-4 xl:px-12 rounded-2xl hover:shadow-2xl"
              style="height: 306px"
            >
              <h6 class="text-lg font-semibold">5.0</h6>
              <div class="flex mt-1 space-x-2">
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
              </div>
              <p
                class="pt-4 text-sm italic xl:text-2xl sm:text-sm md:text-base lg:text-xl fw-400 xl:pt-6 md:pt-4"
              >
                Using Qapin is such a simple and intuitive process, you’ll wish
                you found it sooner. Register with Qapin today and discover the
                difference we make.
              </p>
              <div class="flex pr-6 space-x-4 xl:mt-4">
                <div
                  class="w-10 h-10 p-2 rounded-md md:h-12 md:p-4 md:w-12"
                  style="background: #5be281"
                ></div>
                <div>
                  <h4
                    style="font-weight: 700"
                    class="text-sm text-left text-black cursor-pointer hover:text-primary-500 fw-600 xl:text-lg"
                  >
                    Alex Costa
                  </h4>
                  <p
                    class="w-24 text-xs text-left text-gray-400 uppercase fw-200 xl:w-auto md:text-sm md:mt-2"
                  >
                    marketing head of vodafone
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full gap-4 pl-6 pr-6">
            <div
              class="px-4 py-2 mt-12 transition-all duration-700 ease-out bg-white xl:py-4 xl:px-12 rounded-2xl hover:shadow-2xl"
              style="height: 306px"
            >
              <h6 class="text-lg font-semibold">5.0</h6>
              <div class="flex mt-1 space-x-2">
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
              </div>

              <p
                class="pt-4 text-sm italic xl:text-2xl sm:text-sm md:text-base lg:text-xl fw-400 xl:pt-6 md:pt-4"
              >
                Using Qapin is such a simple and intuitive process, you’ll wish
                you found it sooner. Register with Qapin today and discover the
                difference we make.
              </p>
              <div class="flex space-x-4 pr-6mt-4">
                <div
                  class="w-10 h-10 p-2 rounded-md md:h-12 md:p-4 md:w-12"
                  style="background: #ca30e3"
                ></div>

                <div>
                  <h4
                    style="font-weight: 700"
                    class="text-sm text-left text-black cursor-pointer hover:text-primary-500 fw-600 xl:text-lg"
                  >
                    John Doe
                  </h4>
                  <p
                    class="w-24 text-xs text-left text-gray-400 uppercase fw-200 xl:w-auto md:text-sm md:mt-2"
                  >
                    marketing head of vodafone
                  </p>
                </div>
              </div>
            </div>

            <div
              class="px-4 py-2 transition-all duration-700 ease-out bg-white xl:py-4 xl:px-12 xl:width-auto rounded-2xl hover:shadow-2xl"
              style="height: 306px"
            >
              <h6 class="text-lg font-semibold">5.0</h6>
              <div class="flex mt-1 space-x-2">
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
                <img src="/home/rating.png" alt="" />
              </div>
              <p
                class="pt-4 text-sm italic xl:text-2xl sm:text-sm md:text-base lg:text-xl fw-400 xl:pt-6 md:pt-4"
              >
                Using Qapin is such a simple and intuitive process, you’ll wish
                you found it sooner. Register with Qapin today and discover the
                difference we make.
              </p>
              <div class="flex pr-6 mt-4 space-x-4">
                <div
                  class="w-10 h-10 p-2 rounded-md md:h-12 md:p-4 md:w-12"
                  style="background: #ff388c"
                ></div>
                <div>
                  <h4
                    style="font-weight: 700"
                    class="text-sm text-left text-black cursor-pointer hover:text-primary-500 fw-600 xl:text-lg"
                  >
                    Angelina
                  </h4>
                  <p
                    class="w-24 text-xs text-left text-gray-400 uppercase fw-200 xl:w-auto md:text-sm md:mt-2"
                  >
                    marketing head of vodafone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </flickity>
      </div>
    </div>

    <div class="inset-0 px-10 xl:px-0">
      <div
        class="absolute left-0 right-0 w-full h-auto mx-auto mb-20 -mt-24 bg-black bg-center shadow-xl xl:px-10 xl:mb-32 rounded-2xl max-w-7xl xl:h-auto"
      >
        <div class="relative footer-vectors">
          <img
            src="/home/testimonial-footer2.png"
            class="absolute w-20 xl:w-auto -top-5 left-4"
            alt=""
          />
          >
          <img
            src="/home/testimonial-footer1.png"
            class="absolute w-20 top-40 xl:top-28 xl:w-auto right-4"
            alt=""
          />
        </div>

        <div class="py-6 text-center xl:py-12">
          <p class="text-sm uppercase fw-400 text-primary-500">JOIN QAPIN </p>

          <h4 class="mt-2 text-xl text-white fw-bold md:text-5xl">
            FIND AN TALENT FOR ANYTHING 
          </h4>

          <p
            class="max-w-sm mx-auto mt-4 text-sm text-white xl:text-lg fw-200 xl:w-auto"
          >
          Work with curated talent from all over the world, Pay securely with confidence  
          </p>

          <div class="px-10 mt-6 xl:px-0">
            <button
              @click="$router.push('/login')"
              class="w-40 px-4 py-2 text-base text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-52 hover:bg-opacity-50 hover:text-black fw-200 xl:w-auto bg-primary-500 hover:shadow-lg"
            >
            Join for Free 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
export default {
  components: {
    Flickity,
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 2,
        prevNextButtons: true,
        pageDots: false,
        autoPlay: true,
        wrapAround: true,
        freeScroll: true,
      },
    };
  },
};
</script>

<style scoped>
.testimonial-footer {
  background-image: url("/home/testimonials-footer.png");
  width: 1300px;
  height: 450.87px;
  overflow: hidden;
  position: absolute;
  left: 0;
}
.user-feedback {
  font-style: italic;
  font-weight: 400;
  /* line-height: 26px; */
}

.footer-vectors {
  display: block;
}

@media only screen and (max-width: 800px) {
  .testimonial-footer {
    position: absolute;
  }
}

@media only screen and (min-width: 2000px) {
  .testimonial-footer {
    width: 1300px;
    left: 0;
    position: absolute;
  }
}

@media only screen and (min-width: 1600px) {
  .testimonial-footer {
    width: 1300px;
    left: 0;
    position: absolute;
  }
}

.text-sm{
  font-size: 19px;
  font-weight: 600 !important;
}
.text-lg{
font-size: 20px;
}

@media only screen and (max-width: 2400px) {
  .testimonial-footer {
    width: 1300px;
    left: 20%;
    position: absolute;
  }
}
@media only screen and (max-width: 390px) {
  .footer-vectors {
    display: none;
  }
}
</style>
