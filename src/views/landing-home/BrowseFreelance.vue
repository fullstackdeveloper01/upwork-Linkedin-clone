<template>
  <div
    class="w-full px-4 pt-12 mb-12 bg-white md:pt-20 xl:px-0 xl:mx-auto xl:max-w-7xl"
  >
    <div class="md:justify-between md:space-x-40 md:flex">
      <div class="mt-10 md:mt-0">
        <img src="home/freelance-adv.png" alt="" class="w-full md:w-2/1" />
      </div>

      <div>
        <p
          class="pt-10 text-base uppercase fw-400 xl:pt-0 md:pt-0 text-primary-500"
        >
        EASE OF USE
        </p>
        <h1
          class="w-full max-w-lg pt-6 text-3xl fw-bold xl:pt-0 md:pt-0"
        >
        Quality work, on-demand and on your terms
        </h1>

        <div class="mt-10 md:mt-6">
          <p class="max-w-xl text-base font-normal text-gray-400">
            Our platform gives you the ability to directly connect the right people to the right jobs at the right time, empowering you to work only with those who inspire you most.
          </p>
          <p class="max-w-xl text-base font-normal text-gray-400">
            Manage your source inspectors with ease in one platform, automating unnecessary admin, reducing compliance risks, and ensuring your team are paid swiftly.
          </p>
        </div>

        <div
          class="items-center mt-10 space-y-4 md:space-x-4 md:space-y-0 md:flex"
        >
          <button
            @click="$router.push('/login')"
            class="w-full px-4 py-2 text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-52 hover:bg-opacity-50 hover:text-black bg-primary-500 hover:shadow-lg"
          >
            Browse Freelancer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hiring-hero-text {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 60px;
  text-transform: capitalize;
  color: #000000;
}
.text-base {
    font-size: 19px;
    line-height: 1.5rem;

}
.text-gray-400 {
    color: rgb(86 88 92) !important;
}
@media (min-width: 1280px){

h1 {
    font-size: 42px;
    line-height: 1;
}
}
</style>
