<template>
  <div>
    <div class="w-full px-4 mx-auto mt-12 mb-7 max-w-7xl xl:px-0">
      <p
        class="flex justify-center text-lg text-center uppercase xl:text-left text-xs uppercase fw-600 text-primary-500"
      >
        how it works
      </p>
      <h2
        class="flex justify-center text-3xl text-center text-black xl:text-6xl xl:text-left fw-bold"
      >
        How Qapin Works
      </h2>

      <!-- Web version qapin use  -->
      <div class="hidden md:block xl:block lg:block">
        <div
          class="grid grid-cols-1 gap-3 pt-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            class="z-10 px-3 py-10 pt-3 transition-all duration-700 ease-in-out bg-white border border-white cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
          >
            <div class="w-8 p-4 bg-green-500 rounded-md"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-lg text-left sm:text-sm fw-600 xl:text-2xl"
            >
              Post a Job
            </h4>
            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
              Post a inspection notification at free of cost
            </p>
          </div>

          <div
            class="z-10 px-3 py-10 pt-3 transition-all duration-700 ease-in-out bg-white border border-white cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-left sm:text-sm fw-600 xl:text-2xl"
            >
              Choose inspector
            </h4>
            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
              Compare the skills, certifications and rates and chose right...
            </p>
          </div>

          <div
            class="z-10 px-3 py-10 pt-3 transition-all duration-700 ease-in-out bg-white border border-white cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-left sm:text-sm fw-600 xl:text-2xl"
            >
              Get inspection done
            </h4>
            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
              Communicate and track the progress and quality of products...
            </p>
          </div>

          <div
            class="z-10 px-3 py-10 pt-3 transition-all duration-700 ease-in-out bg-white border border-white cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #ffc737"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-left sm:text-sm fw-600 xl:text-2xl"
            >
              Make safe Payments
            </h4>
            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
              With escrow system, the payments are safe for both parties...
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile version qapin use Slider -->
      <tiny-slider
        v-bind="tinySliderOptions"
        class="block mt-10 space-x-8 sm:hidden md:hidden xl:hidden"
      >
        <div
          class="z-10 p-3 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white shadow-md cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
        >
          <div class="w-8 p-4 bg-green-500 rounded-md"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-lg text-left sm:text-sm fw-600 xl:text-2xl"
          >
            Post a Job
          </h4>
          <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
            Post a inspection notification at free of cost
          </p>
        </div>

        <div
          class="z-10 p-3 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white shadow-md cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-left sm:text-sm fw-600 xl:text-2xl"
          >
            Choose inspector
          </h4>
          <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
            Compare the skills, certifications and rates and chose right...
          </p>
        </div>

        <div
          class="z-10 p-3 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white shadow-md cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-left sm:text-sm fw-600 xl:text-2xl"
          >
            Get inspection done
          </h4>
          <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
            Communicate and track the progress and quality of products...
          </p>
        </div>

        <div
          class="z-10 p-3 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white shadow-md cursor-pointer rounded-2xl hover:bg-gray-200 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #ffc737"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-left sm:text-sm fw-600 xl:text-2xl"
          >
            Make safe Payments
          </h4>
          <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
            With escrow system, the payments are safe for both parties...
          </p>
        </div>
      </tiny-slider>
    </div>
  </div>
</template>

<script>
import "tiny-slider/src/tiny-slider.scss";
export default {
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 2,
        gutter: 20,
        swipeAngle: 45,
      },
    };
  },
};
</script>
<style>
.text-lg{
font-size: 19px;
font-weight: 600 !important;
}
</style>
