<template>
  <div
    class="z-10 w-full h-auto mt-24 bg-white border border-gray-400 rounded-md xl:mt-0 md:hidden lg:hidden"
  >
    <div class="relative top-0 h-16 bg-primary-500 rounded-t-md">
      <img
        :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${userInfo.profile_picture_path}`"
        class="absolute flex w-20 h-20 border-white rounded-full shadow-sm border-3 profile-img top-6"
        alt="Profile Image"
        style="
          box-shadow: 0 15px 45px 0 rgb(0 0 0 / 12%);
          border: 1px solid #fff;
        "
      />
    </div>

    <!-- User Info -->
    <div class="w-full mt-10 text-center">
      <h1
        class="text-base font-bold text-gray-900 cursor-pointer hover:text-primary-500 lg:text-xl mt-14 md:mt-0"
      >
        Alex Costa
      </h1>
      <p
        class="w-full max-w-xs mx-auto mt-1 text-sm font-normal leading-relaxed sm:text-base"
      >
        Providing Remote Dedicated Developers | Website and Mobile App
      </p>
    </div>

    <div class="">
      <p
        style="padding: 14px"
        class="flex items-center justify-between font-normal border-t border-b border-gray-200 cursor-pointer hover:bg-gray-100"
      >
        Who viewed your profile
        <span class="flex justify-end text-sm focus-within: text-primary-500">
          10
        </span>
      </p>
      <p
        style="padding: 0 14px 11px"
        class="flex items-center justify-between font-normal border-b border-gray-200 cursor-pointer hover:bg-gray-100"
      >
        Connections
        <span class="flex justify-end text-sm text-primary-500"> 155 </span>
      </p>
      <p
        style="padding: 0 14px 11px"
        class="font-semibold text-gray-900 border-gray-200 cursor-pointer hover:text-primary-500 hover:bg-gray-100"
      >
        View Profile
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.profile-img {
  right: 38%;
}

@media only screen and (min-width: 398px) {
  .profile-img {
    right: 38%;
  }
}
@media only screen and (min-width: 766px) {
  .profile-img {
    right: 42%;
  }
}
</style>
