<template>
  <div>
    <div class="">
      <div class="fixed z-0 lg:mt-0 top-32 newsfeed-right-section">
        <div
          class="relative px-2 overflow-auto bg-white rounded-md shadow-lg h-76 w-80"
        >
          <h3
            class="w-full px-3 py-3 text-base font-extrabold border-b border-gray-300 sm:text-xl"
          >
            Qapin News
          </h3>

          <div class="">
            <ul class="list-disc">
              <li class="py-2 pb-4 text-sm font-semibold text-gray-900">
                How india fares on digital readine
                <br />
                <label for="" class="font-normal text-gray-500 mt-1.5">
                  4d ago . 1,204 renders</label
                >
              </li>
              <li class="pb-4 text-sm font-semibold text-gray-900">
                How india fares on digital readine
                <br />
                <label for="" class="font-normal text-gray-500 mt-1.5">
                  4d ago . 1,204 renders</label
                >
              </li>
              <li class="pb-4 text-sm font-semibold text-gray-900">
                How india fares on digital readine
                <br />
                <label for="" class="font-normal text-gray-500 mt-1.5">
                  4d ago . 1,204 renders</label
                >
              </li>
              <li class="pb-4 text-sm font-semibold text-gray-900">
                How india fares on digital readine
                <br />
                <label for="" class="font-normal text-gray-500 mt-1.5">
                  4d ago . 1,204 renders</label
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- QAPIN FOOTER -->
      <div
        class="z-0 bg-white rounded-md shadow-lg lg:mt-0 newsfeed-right-section"
        style="position:absolute;width:100%;margin-top:420px;"
      >
        <div class="h-auto py-4 w-80">
          <ul
            class="flex items-center justify-center w-full mb-2 text-center list-none"
          >
            <li
              class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
            >
              Help Center <span class="ml-4"> | </span>
            </li>
            <li
              class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
            >
              About <span class="ml-4"> | </span>
            </li>
            <li
              class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
            >
              Privacy Policy
            </li>
          </ul>
          <ul
            class="flex items-center justify-center list-none mb-2 pl-4 pr-1.5 text-center w-full"
          >
            <li
              class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
            >
              Community Guidelines <span class="ml-3"> | </span>
            </li>
            <li
              class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
            >
              Cookies Policy Career<span class="ml-3"> | </span>
            </li>
          </ul>
          <ul
            class="flex items-center justify-center w-full px-5 mb-2 text-center list-none"
          >
            <li
              class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
            >
              Language<span class="ml-4"> | </span>
            </li>
            <li
              class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
            >
              Copyright Policy<span class="ml-4"> | </span>
            </li>
          </ul>

          <div class="flex items-center px-3 mt-4 mb-2 justify-betweeen">
            <WebLogo class="h-5 mr-5 cursor-pointer" />

            <label
              for=""
              class="flex justify-end text-xs font-medium text-center text-gray-900 cursor-pointer hover:text-primary-500"
            >
              Qapin © Copyright 2022
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebLogo from './icons/WebLogo.vue'

export default {
  components: { WebLogo },

  data() {
    return {}
  },
}
</script>
