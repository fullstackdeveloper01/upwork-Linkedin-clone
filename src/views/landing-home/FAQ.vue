<template>
  <div class="w-full px-4 mx-auto mt-7 xl:px-0 max-w-7xl">
    <h2
      class="flex justify-center text-3xl text-center text-black fw-bold xl:text-6xl"
    >
    Frequently asked Questions
    </h2>

    <div
      class="px-4 py-2 mt-10 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500"
    >
      <div class="flex justify-between itemds-center">
        <h6
          @click="isFaq1 = !isFaq1"
          class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500"
        >
        How does Qapin work?
        </h6>

        <button  @click="isFaq1 = !isFaq1" >
          <p
            v-if="!isFaq1"
            class="w-10 p-1 text-xl text-gray-900 transition-all duration-500 rounded-full cursor-pointer fw-400 hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </p>
          <p
            v-else
            class="w-10 p-1 text-xl text-gray-900 transition-all duration-500 rounded-full cursor-pointer fw-400 hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
          </p>
        </button>
      </div>

      <transition name="slide">
        <p v-if="isFaq1" class="text-base leading-normal text-gray-400 fw-200">
          As a cutting-edge freelance platform in the field inspection services industry, Qapin aims to simplify the process of connecting top-quality freelancers with agencies in need of their services. With our user-friendly platform, businesses can browse and select from verified source engineers based on their unique qualifications, expertise, location, and availability on demand. We also ensure seamless coordination between Source engineers and clients through our efficient communication tools and secure payment system.
        </p>
      </transition>
    </div>

    <div
      class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500"
    >
      <div class="flex justify-between itemds-center">
        <h6
          @click="isFaq2 = !isFaq2"
          class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500"
        >
        How can I find a Source Inspector ? How does the search work?
        </h6>

        <button @click="isFaq2 = !isFaq2">
          <p
            v-if="!isFaq2"
            class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </p>
          <p
            v-else
            class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>

          </p>
        </button>
      </div>

      <transition name="slide">
        <p v-if="isFaq2" class="text-base leading-normal text-gray-400 fw-200">
          The built-in site filter may seem simple and easy, but definitely has its more powerful sides too.
          <br>
          <br>
          The basics are really simple You can search for names, companies, job titles and skills in the search.
If you'd like your freelancer to provide specific services, you can request them
You can filter by price and category too

        </p>
       
      </transition>
    </div>

    <div
      class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500"
    >
      <div class="flex justify-between itemds-center">
        <h6
          @click="isFaq3 = !isFaq3"
          class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500"
        >
        What fees does Qapin take?
        </h6>

        <button @click="isFaq3 = !isFaq3">
          <p
            v-if="!isFaq3"
            class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>

          </p>
          <p
            v-else
            class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>

          </p>
        </button>
      </div>

      <transition name="slide">
        <p v-if="isFaq3" class="text-base leading-normal text-gray-400 fw-200">
          Qapin takes a platform fee on each payment processed through the site. 
As a freelancer, you should have a clear expectation of what you'll earn at the end of the day. Our current fee rate is 5% on top of what you already charge. 

        </p>
      </transition>
    </div>

    <div
      class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500"
    >
      <div class="flex items-center justify-between">
        <h6
          @click="isFaq4 = !isFaq4"
          class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500"
        >
        How can i Get Paid after completion of work with my client 
        </h6>

        <button @click="isFaq4 = !isFaq4">
          <p
            v-if="!isFaq4"
            class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>

          </p>
          <p
            v-else
            class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>

          </p>
        </button>
      </div>

      <transition name="slide">
        <p v-if="isFaq4" class="text-base leading-normal text-gray-400 fw-200">
          To make it easy for you to access your money, we offer a number of choices for withdrawing your funds. You can withdraw directly to your bank account with the following payment methods:
<br>
        <span class="text-muted">International wire transfer - USD</span>  
          <br>
          <span class="text-muted">Direct to US Banks (ACH) for US service providers </span> 
     <br>
     <br>
     We are working other payment methods and will be notified you after implementation. 
        </p>

      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFaq1: false,
      isFaq2: false,
      isFaq3: false,
      isFaq4: false,
    };
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}

.text-base{
  font-size: 18px;
}
.p-1{
padding: 0.65rem !important;
}
</style>
