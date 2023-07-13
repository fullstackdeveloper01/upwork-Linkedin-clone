<template>
  <div
    class="w-full px-4 pt-12 mb-20 bg-white xl:pt-24 md:pt-20 xl:px-0 xl:mx-auto xl:max-w-7xl"
  >
    <p class="text-base uppercase w-400 text-primary-500">
      BUILD YOUR TEAM
    </p>

    <div class="md:justify-between md:space-x-10 md:flex">
      <div>
        <h1 class="w-full max-w-sm text-4xl fw-bold" style=" max-width: 45rem;">
          Search, Hire and pay Inspectors all over the world - quickly and compliantly
        </h1>

        <div class="mt-10 md:mt-6">
          <p class="max-w-xl text-base font-normal text-gray-400">
            With such a vast database of professionals to choose from, Qapin aims to make things easier for clients and inspectors. Onboard, manage and pay inspectors in more than 150 countries with Qapin.
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

      <div class="mt-24 md:mt-0">
        <img src="home/hiring-adv.png" alt="" class="w-full md:w-2/1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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