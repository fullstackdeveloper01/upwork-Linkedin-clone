  <template>
    <div class="relative z-10 h-auto bg-white border border-gray-400 rounded-md lg:fixed user-left-section">
      <div class="relative top-0 h-16 py-4 bg-imag rounded-t-md">
        <img
          v-if="userInfo.profile_picture_path"
          :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${userInfo.profile_picture_path}`"
          class="absolute w-20 h-20 mr-2 border-white rounded-full shadow-sm cursor-pointer hover:shadow-xl border-3 md:right-24 right-28 top-6"
          alt="Profile Image"
          style="
            box-shadow: 0 15px 45px 0 rgb(0 0 0 / 12%);
            border: 1px solid #fff;
          "
        />
        <img
          v-else
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          class="absolute w-20 h-20 mr-2 border-white rounded-full shadow-sm cursor-pointer hover:shadow-xl border-3 right-28 md:right-24 top-6"
          alt="Profile Image"
          style="
            box-shadow: 0 15px 45px 0 rgb(0 0 0 / 12%);
            border: 1px solid #fff;
          "
        />
      </div>

      <!-- User Info -->
      <div class="w-full px-4 py-4 mt-4 text-center">
        <h1
          class="text-base font-bold text-gray-900 cursor-pointer hover:text-primary-500 lg:text-xl  fz-700"
        >
          {{ userInfo.first_name }}
          {{ userInfo.last_name }}
        </h1>
        <p
          class="w-full max-w-xs mx-auto mt-1 text-sm font-normal leading-relaxed sm:text-base"
        >
          {{ userInfo.tagline }}
        </p>
      </div>

      <div class="z-0" style="position:absolute;width:100%;margin-top:20px;">
        <div class="relative overflow-auto bg-white border border-gray-400 rounded-md h-76 newsfeed-right-section">
          <h3 style="padding: 16px;background-color: #fff;" class="w-full text-base font-extrabold border-b border-gray-300 sm:text-xl fz-700">
            What’s happening
          </h3>

          <div class="">
            <ul class="list-none list-inside" style="padding: 0; margin-top: 25px;margin-left:-32px;">
              <li class="text-sm font-semibold text-gray-900 truncate cursor-pointer hover:bg-gray-100" style="margin-bottom: 20px; padding-left: 20px; padding-right: 10px">
                <h4 for="" class="fz-16 fz-600 mt-1.5 white-space-pre-line">Explained: How China, UAE are helping Pakistan tide over its economic crisis</h4>
                <label for="" class="font-normal text-gray-500">
                  Published Oct. 18, 2021
                </label>
              </li>
              <li class="text-sm font-semibold text-gray-900 truncate cursor-pointer hover:bg-gray-100" style="margin-bottom: 20px; padding-left: 20px; padding-right: 10px">
                <h4 for="" class="fz-16 fz-600 mt-1.5 white-space-pre-line">G7 Takes Aim At China Over "Non-Transparent, Market-Distorting" Practices</h4>
                <label for="" class="font-normal text-gray-500 mt-1.5">
                  Published Nov. 20, 2021
                </label>
              </li>
              <li class="text-sm font-semibold text-gray-900 truncate cursor-pointer hover:bg-gray-100" style="margin-bottom: 20px; padding-left: 20px; padding-right: 10px">
                <h4 for="" class="fz-16 fz-600 mt-1.5 white-space-pre-line">China backed India on keeping Pakistan out of BRICS Plus event</h4>
                <label for="" class="font-normal text-gray-500 mt-1.5">
                  Published Dec. 11, 2021
                </label>
              </li>
            </ul>
          </div>
        </div>
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
