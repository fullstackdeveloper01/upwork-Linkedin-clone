<template>
  <div
    class="w-full px-4 pt-12 mb-20 bg-white xl:pt-40 md:pt-20 xl:px-0 xl:mx-auto xl:max-w-7xl"
  >
    <div class="md:justify-between md:flex">
      <div class="">
        <h1 class="w-full max-w-2xl text-4xl fw-600 xl:pt-6 md:pt-24 md:max-w-lg xl:max-w-2xl xl:text-6xl" style="line-height: 1!important;">
          <!-- Welcome to an online community connecting clients with quality
          professionals ! -->
          Get Inspections Done 
        </h1>
        <div class=" xl:mt-1">
          <p class="w-full max-w-2xl text-4xl fw-400 md:max-w-lg xl:max-w-2xl xl:text-2xl" style="font-size: 20px; line-height: 1.3; font-family: inherit;"> 
            <!-- data-aos="zoom-out" -->
            <!-- Qapin is a premium online marketplace for third-party inspection
            services. -->
            All-in-one platform to hire Source Inspectors from anywhere in the world with one click
          </p>
        </div>

        <div
          class="items-center mt-10 space-y-4 md:space-x-4 md:space-y-0 md:flex"
        >
          <button
 
            @click="$router.push('/login')"
            class="w-full px-4 py-2 text-base text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-40 hover:bg-opacity-50 bg-primary-500 hover:shadow-lg"
          >
            Post Job
          </button>

          <br />

          <button
        
            @click="$router.push('/login')"
            class="w-full px-4 py-2 text-base text-black transition-all duration-500 ease-in-out border-solid rounded-md shadow-sm cursor-pointer md:w-40 border-1 hover:text-white border-primary-500 hover:bg-primary-500 hover:shadow-lg"
          >
            Find Job
          </button>
        </div>
      </div>
      <div class="mt-24 md:mt-0" data-aos="zoom-out-left">
        <img src="home/hero-banner.svg" alt="" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-text {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
}
@media (min-width: 1280px)
{
.xl\:text-6xl {
    font-size: 4.75rem;
    line-height: 1.2;
}
.xl\:pt-40 {
    padding-top: 12rem;
}
}
</style>
