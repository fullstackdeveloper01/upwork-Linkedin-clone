<template>
  <div class="fixed z-0 rounded-md lg:mt-0 newsfeed-right-section" style="">
    <div
      class="relative overflow-auto bg-transparent rounded-md top-44 h-76 newsfeed-right-section"
    >
      <ul
        style="padding: 10px 20px 2px; margin-top: 4px"
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
        style="padding: 0 20px"
        class="flex items-center justify-center list-none mb-2 pl-4 pr-1.5 text-center w-full"
      >
        <li
          class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
        >
          Community Guidelines <span class="ml-3 mr-4"> | </span>
        </li>
        <li
          class="flex items-center text-xs font-normal text-gray-400 cursor-pointer hover:text-primary-500"
        >
          Cookies Policy Career<span class="ml-3"> | </span>
        </li>
      </ul>
      <ul
        style="padding: 0 30px; margin-top: 2px"
        class="flex items-center justify-center w-full mb-2 text-center list-none"
      >
        <li
          style="padding: 0 12px"
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

      <div
        class="flex items-center mt-2 justify-betweeen"
        style="padding: 4px 20px 15px"
      >
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
</template>
<script>
import WebLogo from "../../components/icons/WebLogo.vue";
export default {
  components: {
    WebLogo,
  },
};
</script>
