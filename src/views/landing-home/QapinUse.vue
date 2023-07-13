<template>
  <div class="relative w-full h-auto bg-black bg-center" style="">
    <img
      src="/home/qapin-use/qapin-use-vector.svg"
      alt=""
      class="absolute w-full bg-center xl:top-1"
    />

    <div
      class="w-full px-2 pt-24 pb-20 mx-auto mb-4 xl:px-0 xl:pt-32 max-w-7xl"
    >
      <h2 class="text-3xl text-white fw-bold md:text-4xl lg:text-6xl">
        Qapin for Global Expansion 
      </h2>

      <p class="max-w-lg text-base text-white fw-400">
        Qapin is a tool that suits on your business. We remove the financial barriers to care so that clients and talents can work with confidence.
      </p>

      <div class="hidden md:block xl:block lg:block">
        <div
          class="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-10"
        >
          <div
            class="px-4 pt-3 client-hover transition-all duration-700 ease-in-out transform shadow-xl cursor-pointer bg-white rounded-2xl hover:shadow-2xl group group-hover:bg-primary-500"
          >
            <Client class="text-primary-500 group-hover:text-white" />
            <h6
              class="mt-4 text-lg text-hite fw-bold group-hover:"
              style="font-weight: 700"
            >
            Clients
            </h6>
            <p class="w-full text-sm fw-400 xl:max-w-md md:max-w-xs group-hover:text-white">
              Work with Talent anywhere with built-in compliance, automated invoicing, and effortless global payments.
            </p>
          </div>

          <div
            class="px-4 pt-3 client-hover transition-all duration-700 ease-in-out transform bg-white shadow-xl cursor-pointer rounded-2xl hover:shadow-2xl group group-hover:bg-primary-500"
          >
            <FreelancerInspection
              class="text-primary-500 group-hover:text-white"
            />
            <h6 class="mt-4 text-lg fw-bold group-hover:text-white">
              Source Engineers
            </h6>
            <p
              class="w-full text-sm fw-400 xl:max-w-md md:max-w-xs group-hover:text-white"
            >
            Tap into the most extensive coverage on the market and get hired by worldwide businesses
            </p>
          </div>

          <div
            class="px-4 pt-3 client-hover transition-all duration-700 ease-in-out transform bg-white shadow-xl cursor-pointer rounded-2xl hover:shadow-2xl group group-hover:bg-primary-500"
          >
            <AgenciesInspection
              class="text-primary-500 group-hover:text-white"
            />
            <h6 class="mt-4 text-lg fw-bold group-hover:text-white">
              Agencies
            </h6>
            <p
              class="w-full text-sm fw-400 xl:max-w-md md:max-w-xs group-hover:text-white"
            >
            Quickly onboard and work as a team of Talent and get hired by worldwide businesses.
            </p>
          </div>
        </div>
      </div>

      <div>
        <tiny-slider
          v-bind="tinySliderOptions"
          class="block mt-10 space-x-8 sm:hidden md:hidden xl:hidden"
        >
          <div
            class="px-4 pt-3 client-hover transition-all duration-700 ease-in-out transform shadow-xl cursor-pointer w-96 bg-primary-500 rounded-2xl hover:shadow-2xl group group-hover:bg-primary-500"
          >
            <Client class="text-white text-primary-500" />
            <h6
              class="mt-4 text-lg text-hite fw-bold group-hover:"
              style="font-weight: 700"
            >
              Clients
            </h6>
            <p class="w-full max-w-xs text-sm text-white fw-400">
              Work with Talent anywhere with built-in compliance, automated invoicing, and effortless global payments.
            </p>
          </div>

          <div
            class="px-4 pt-3 client-hover transition-all duration-700 ease-in-out transform bg-white shadow-xl cursor-pointer rounded-2xl hover:shadow-2xl group group-hover:bg-primary-500"
          >
            <FreelancerInspection
              class="text-primary-500 group-hover:text-white"
            />
            <h6 class="mt-4 text-lg fw-bold group-hover:text-white">
              Source Engineers
            </h6>
            <p class="w-full max-w-xs text-sm fw-400 group-hover:text-white">
              Tap into the most extensive coverage on the market and get hired by worldwide businesses.
            </p>
          </div>

          <div
            class="px-4 pt-3 client-hover transition-all duration-700 ease-in-out transform bg-white shadow-xl cursor-pointer rounded-2xl hover:shadow-2xl group group-hover:bg-primary-500"
          >
            <AgenciesInspection
              class="text-primary-500 group-hover:text-white"
            />
            <h6 class="mt-4 text-lg fw-bold group-hover:text-white">
              Agencies 
            </h6>
            <p class="w-full max-w-xs text-sm fw-400 group-hover:text-white">
              Quickly onboard and work as a team of Talent and get hired by worldwide businesses.
            </p>
          </div>
        </tiny-slider>
      </div>
    </div>
  </div>
</template>

<script>
import Client from "../../../public/home/qapin-use/Client.vue";
import FreelancerInspection from "../../../public/home/qapin-use/FreelancerInspection.vue";
import AgenciesInspection from "../../../public/home/qapin-use/AgenciesInspection.vue";
import "tiny-slider/src/tiny-slider.scss";

export default {
  components: { Client, FreelancerInspection, AgenciesInspection },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 1,
        gutter: 20,
        swipeAngle: 45,
      },
    };
  },
};
</script>

<style scoped>
.client-hover:hover{
  background-color:  rgba(242, 97, 60)!important;
  color: #fff;
}
.client-hover:hover .text-primary-500{
  color: #fff;
}
.text-sm{
  font-size: 18px;
}
.text-base{
  font-size: 18px;
    line-height: 1.5rem;
}

</style>
