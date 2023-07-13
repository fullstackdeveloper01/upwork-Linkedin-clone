<template>
  <div>
    <!-- Edit Photo News Modal  -->
    <b-modal ref="my-photo-modal" class="" title="Edit your photo" centered hide-footer no-close-on-backdrop>
      <div class="w-full px-0 d-block">
        <!-- File Upload -->
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          :useCustomSlot="true"
          :options="postFileOption"
        >
          <div class="dropzone-custom-content">
            <h3
              class="text-sm font-bold text-center cursor-pointer text-primary-500"
            >
              Select images to share
            </h3>
          </div>
        </vue-dropzone>
      </div>

      <div class="flex items-center justify-between border-t border-gray-300">
        <div class="flex items-center justify-end mt-3 space-x-2">
          <button
            class="px-3 py-1.5 text-sm font-medium mt-3 border text-primary-500 hover:bg-primary-500 hover:bg-opacity-30 border-primary-500 rounded-3xl"
            block
            @click="hidePhotoModal"
          >
            Cancel
          </button>
          <button
            class="px-3 py-1.5 text-sm font-medium mt-3 text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50"
            block
            @click="togglePhotoModal"
          >
            Post
          </button>
        </div>
      </div>
    </b-modal>

    <!-- Edit Video News Modal  -->
    <b-modal ref="my-video-modal" class="" title="Edit your photo" centered hide-footer no-close-on-backdrop>
      <div class="w-full px-0 d-block">
        <!-- Video Upload -->
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          :useCustomSlot="true"
          :options="postFileOption"
        >
          <div class="dropzone-custom-content">
            <h3
              class="text-sm font-bold text-center cursor-pointer text-primary-500"
            >
              Select video to share
            </h3>
          </div>
        </vue-dropzone>
      </div>

      <div class="flex items-center justify-between border-t border-gray-300">
        <div class="flex items-center justify-end mt-3 space-x-2">
          <button
            class="px-3 py-1.5 text-sm font-medium mt-3 border text-primary-500 hover:bg-primary-500 hover:bg-opacity-30 border-primary-500 rounded-3xl"
            block
            @click="hideVideoModal"
          >
            Cancel
          </button>
          <button
            class="px-3 py-1.5 text-sm font-medium mt-3 text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50"
            block
            @click="toggleVideoModal"
          >
            Post
          </button>
        </div>
      </div>
    </b-modal>

    <!-- Toggle Event Modal -->
    <b-modal
      size="lg"
      ref="my-event-modal"
      class=""
      title="Create an Event"
      centered hide-footer no-close-on-backdrop
    >
      <div class="w-full d-block">
        <!-- Video Upload -->
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          :useCustomSlot="true"
          :options="postFileOption"
        >
          <div class="relative text-center dropzone-custom-content">
            <img
              src="../../assets/img/camera.png"
              class="absolute w-12 h-12 ml-5 left-80 -top-8"
              alt=""
            />
          </div>
          <h3
            class="absolute left-0 right-0 text-sm font-medium text-center text-black cursor-pointer top-24 hover:text-primary-500"
          >
            Upload Cover Image
          </h3>
        </vue-dropzone>
      </div>

      <div class="mt-2">
        <div>
          <b-form-group
            label="Organizer"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input id="name-input" v-model="name" class="mt-1" required>
            </b-form-input>
          </b-form-group>
        </div>

        <div class="grid grid-cols-1 mt-3 sm:grid-cols-2 sm:gap-2">
          <b-form-group label="Event Type" class="">
            <div class="flex items-center space-x-4">
              <div>
                <input type="radio" class="p-3 cursor-pointer" value="online" />
                <label for="" class="ml-2">Online</label>
              </div>
              <div>
                <input
                  type="radio"
                  class="p-3 cursor-pointer"
                  value="in-person"
                />
                <label for="" class="ml-2">In Person</label>
              </div>
            </div>
          </b-form-group>

          <b-form-group label="Event Name" label-for="name-input">
            <b-form-input id="name-input" v-model="name" class="mt-1">
            </b-form-input>
          </b-form-group>
        </div>

        <div class="grid grid-cols-1 mt-3 sm:grid-cols-2 sm:gap-4">
          <b-form-group label="Timezone" label-for="name-input">
            <multiselect
              v-model="value"
              :options="timeZoneOption"
            ></multiselect>
          </b-form-group>
          <b-form-group label="External event link" label-for="name-input">
            <b-form-input id="name-input" v-model="name" class="mt-1" required>
            </b-form-input>
          </b-form-group>
        </div>

        <div class="grid grid-cols-1 mt-3 sm:grid-cols-2 sm:gap-4">
          <b-form-group label="End Date" label-for="name-input">
            <div class="">
              <input
                v-model="date"
                type="date"
                class="w-full px-2 py-2 bg-gray-100 border border-gray-400 rounded-md"
              />
            </div>
            <div class="flex items-center mt-2">
              <input
                type="checkbox"
                class="p-2 rounded-md cursor-pointer"
                name=""
                id=""
              />
              <label for="" class="ml-3 text-sm font-normal text-gray-900">
                Add end date and time
              </label>
            </div>
          </b-form-group>
          <b-form-group label="End Time" label-for="name-input">
            <div class="">
              <input
                v-model="time"
                type="time"
                class="w-full px-2 py-2 bg-gray-100 border border-gray-400 rounded-md"
              />
            </div>
          </b-form-group>
        </div>

        <div class="mt-3">
          <b-form-group
            label="Description"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-textarea
              id="name-input"
              v-model="name"
              placeholder="Ex:topics, schedule, etc."
              class="mt-1"
              required
            />
          </b-form-group>
        </div>

        <div class="mt-3">
          <b-form-group
            label="Speakers"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input id="name-input" v-model="name" class="mt-1" required>
            </b-form-input>
          </b-form-group>
        </div>

        <!-- Terms and policy -->
        <div>
          <label for="" class="mb-3 text-xs font-normal text-gray-400">
            Add any of your connections as speakers. Confirmed speakers will be
            shown in the event’s Details section.
          </label>
          <div>
            <label for="" class="mb-3 text-xs font-normal text-gray-400">
              By continuing, you agree with
              <span>
                <a
                  href=""
                  class="text-xs font-medium text-blue-500 no-underline cursor-pointer hover:text-primary-500"
                >
                  Qapin's policy.
                </a></span
              >
            </label>
          </div>

          <label for="" class="mb-3 text-xs font-normal text-gray-400">
            Make the most of LinkedIn Events.
            <span>
              <a
                href=""
                class="text-xs font-medium text-blue-500 no-underline cursor-pointer hover:text-primary-500"
              >
                Learn more
              </a>
            </span>
          </label>
        </div>
      </div>

      <div class="flex items-center justify-between border-t border-gray-300">
        <div class="flex items-center justify-end space-x-2">
          <button
            class="px-4 py-1.5 text-sm font-medium mt-3 border text-primary-500 hover:bg-primary-500 hover:bg-opacity-30 border-primary-500 rounded-3xl"
            block
            @click="hideEventModal"
          >
            Cancel
          </button>
          <button
            class="px-4 py-1.5 text-sm font-medium mt-3 text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50"
            block
            @click="toggleEventModal"
          >
            Post
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import Multiselect from 'vue-multiselect'

export default {
  components: {
    vueDropzone: vue2Dropzone,
    Multiselect,
  },

  data() {
    return {
      openingDateConfig: {
        enableTime: false,
        noCalendar: false,
        dateFormat: 'Y-m-d H:i',
      },
      openingTimeConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
      },
      date: null,
      value: '',
      name: '',
      timeZoneOption: ['Select option', 'options', 'selected'],

      postFileOption: {
        // previewTemplate: this.template(),
        url: 'https://www.qapin.com/api/ImageLib/postImg',
        thumbnailWidth: 200,
        method: 'POST',

        maxFilesize: 100,
        headers: {
          Accept: 'image/*',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
          postPayload: this.postPayload,
        }),
        addRemoveLinks: true,
      },
    }
  },
}
</script>
