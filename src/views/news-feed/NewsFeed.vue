<template>
  <div
    v-infinite-scroll="getNextPosts"
    :infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
    class="w-full h-full px-4 pb-20 overflow-hidden overflow-y-auto md:mx-auto md:row md:max-w-9xl md:px-0"
  >
    <hollow-dots-spinner v-if="isLoadingContent" />
    <!-- View Job Post details Modal -->
    <div class="overflow-hidden shadow-lg">
      <b-modal
        v-if="currentPostModalDetail"
        :id="`view-modal-${currentPostModalDetail.posts_id}`"
        size="fullscreen"
        hide-footer
        hide-header
        centered
        body-class="w-full p-0 modal-post-main-container"
        class=""
      >
        <div class="w-full h-full mb-10 xl:flex sm:mb-0">
          <!-- Current Post Modal Job Post Images slider -->
          <div
            v-if="currentPostModalDetail.multi_image_post === '1'"
            class="items-center justify-center w-full bg-black d-flex xl:max-w-8xl xl:mb-0"
          >
            <svg
              width="106"
              height="24"
              viewBox="0 0 106 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="position: fixed; left: 10px; top: 10px; z-index: 1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2171 0C8.73257 0 5.82542 1.16476 3.49514 3.49224C1.16489 5.79758 0 8.63484 0 12.002C0 15.3703 1.16489 18.2181 3.49514 20.5461C5.74448 22.7714 8.53128 23.9226 11.8561 23.9999C12.0544 24.0045 12.2171 23.842 12.2171 23.6438V19.0283C12.2171 18.8443 12.0666 18.6823 11.8826 18.6742C10.1979 18.5999 8.78214 17.9579 7.63583 16.7488C6.4139 15.4383 5.80321 13.8561 5.80321 12.002C5.80321 10.149 6.4139 8.57785 7.63583 7.28955C8.85723 5.97911 10.3845 5.32308 12.2171 5.32308C14.0497 5.32308 15.577 5.97911 16.7984 7.28955C17.9458 8.49935 18.5543 9.95862 18.6242 11.6665C18.6318 11.851 18.7939 12.002 18.9788 12.002H24.0733C24.2718 12.002 24.4347 11.8394 24.4297 11.6412C24.3482 8.43167 23.1732 5.71476 20.9047 3.49224C18.5745 1.16476 15.6784 0 12.2171 0ZM38.1349 7.01831L35.1484 14.6805H41.1219L38.1349 7.01831ZM40.6809 0.339355C40.8109 0.339355 40.958 0.437203 41.0085 0.556802L50.483 23.0364C50.5972 23.3077 50.4497 23.5296 50.155 23.5296H44.8245C44.6913 23.5296 44.5424 23.4283 44.4937 23.3044L43.0211 19.5629H33.2473L31.8077 23.3019C31.7595 23.4271 31.6101 23.5296 31.4758 23.5296H26.1478C25.8529 23.5296 25.7054 23.3076 25.8202 23.036L35.3273 0.556373C35.3778 0.437024 35.5252 0.339355 35.6549 0.339355H40.6809ZM62.0431 12.6463C63.3101 12.6463 64.3225 12.3074 65.0806 11.6293C65.8387 10.9511 66.218 10.0475 66.218 8.91704C66.218 7.87731 65.8387 7.05189 65.0806 6.4418C64.3225 5.83167 63.3101 5.52661 62.0431 5.52661H58.582V12.6463H62.0431ZM62.1463 0.474854C65.178 0.474854 67.5534 1.2322 69.2734 2.74642C71.0378 4.26111 71.9201 6.3178 71.9201 8.91711C71.9201 11.6071 71.0041 13.743 69.1717 15.3248C67.3389 16.8843 64.8496 17.6639 61.7051 17.6639H58.5831V23.1742C58.5831 23.3696 58.423 23.5295 58.2275 23.5295H53.2033C53.0074 23.5295 52.8477 23.3696 52.8477 23.1742V0.830181C52.8477 0.634772 53.0074 0.474854 53.2033 0.474854H62.1463ZM80.0244 0.474854H75.0001C74.8042 0.474854 74.6445 0.634772 74.6445 0.830181V23.1742C74.6445 23.3696 74.8042 23.5295 75.0001 23.5295H80.0244C80.2199 23.5295 80.38 23.3696 80.38 23.1742V0.830181C80.38 0.634772 80.2199 0.474854 80.0244 0.474854ZM100.654 0.474854H105.644C105.84 0.474854 106 0.634772 106 0.830181V23.1742C106 23.3696 105.84 23.5295 105.644 23.5295H101.75C101.661 23.5295 101.54 23.4748 101.482 23.408L90.5249 10.8831V23.1742C90.5249 23.3696 90.3648 23.5295 90.1693 23.5295H85.1447C84.9491 23.5295 84.7891 23.3696 84.7891 23.1742V0.830181C84.7891 0.634772 84.9491 0.474854 85.1447 0.474854H89.0033C89.0935 0.474854 89.2149 0.530736 89.2737 0.599068L100.298 13.4601V0.830181C100.298 0.634772 100.458 0.474854 100.654 0.474854ZM16.387 14.2401L22.9617 17.0157C23.157 17.0982 23.235 17.3185 23.1392 17.5075C22.5838 18.6025 21.8344 19.6136 20.8985 20.5486C19.949 21.4878 18.8884 22.239 17.7476 22.7946C17.5603 22.8858 17.3421 22.8077 17.2604 22.616L14.5009 16.1516C14.4494 16.0311 14.4823 15.8562 14.5742 15.7628L15.9949 14.3184C16.0881 14.2237 16.2645 14.1885 16.387 14.2401Z"
                fill="#F2613C"
              />
            </svg>

            <b-button
              class="btn btn-outline-theme"
              style="position: fixed; right: 25px; top: 10px; z-index: 1111"
              @click="
                $bvModal.hide(`view-modal-${currentPostModalDetail.posts_id}`)
              "
              ><i class="fa fa-times"></i
            ></b-button>

            <div class="h-full single-image-container">
              <img
                style="width: 100%"
                class="w-full h-full single-image-post"
                :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${currentPostModalDetail.multi_image}.jpg`"
              />
            </div>
          </div>

          <!-- Modal Slider Images  -->
          <div
            v-else
            class="items-center justify-center w-full mb-10 bg-black xl:max-w-8xl lg:mb-0"
          >
            <svg
              width="106"
              height="24"
              viewBox="0 0 106 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="position: fixed; left: 10px; top: 10px; z-index: 1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2171 0C8.73257 0 5.82542 1.16476 3.49514 3.49224C1.16489 5.79758 0 8.63484 0 12.002C0 15.3703 1.16489 18.2181 3.49514 20.5461C5.74448 22.7714 8.53128 23.9226 11.8561 23.9999C12.0544 24.0045 12.2171 23.842 12.2171 23.6438V19.0283C12.2171 18.8443 12.0666 18.6823 11.8826 18.6742C10.1979 18.5999 8.78214 17.9579 7.63583 16.7488C6.4139 15.4383 5.80321 13.8561 5.80321 12.002C5.80321 10.149 6.4139 8.57785 7.63583 7.28955C8.85723 5.97911 10.3845 5.32308 12.2171 5.32308C14.0497 5.32308 15.577 5.97911 16.7984 7.28955C17.9458 8.49935 18.5543 9.95862 18.6242 11.6665C18.6318 11.851 18.7939 12.002 18.9788 12.002H24.0733C24.2718 12.002 24.4347 11.8394 24.4297 11.6412C24.3482 8.43167 23.1732 5.71476 20.9047 3.49224C18.5745 1.16476 15.6784 0 12.2171 0ZM38.1349 7.01831L35.1484 14.6805H41.1219L38.1349 7.01831ZM40.6809 0.339355C40.8109 0.339355 40.958 0.437203 41.0085 0.556802L50.483 23.0364C50.5972 23.3077 50.4497 23.5296 50.155 23.5296H44.8245C44.6913 23.5296 44.5424 23.4283 44.4937 23.3044L43.0211 19.5629H33.2473L31.8077 23.3019C31.7595 23.4271 31.6101 23.5296 31.4758 23.5296H26.1478C25.8529 23.5296 25.7054 23.3076 25.8202 23.036L35.3273 0.556373C35.3778 0.437024 35.5252 0.339355 35.6549 0.339355H40.6809ZM62.0431 12.6463C63.3101 12.6463 64.3225 12.3074 65.0806 11.6293C65.8387 10.9511 66.218 10.0475 66.218 8.91704C66.218 7.87731 65.8387 7.05189 65.0806 6.4418C64.3225 5.83167 63.3101 5.52661 62.0431 5.52661H58.582V12.6463H62.0431ZM62.1463 0.474854C65.178 0.474854 67.5534 1.2322 69.2734 2.74642C71.0378 4.26111 71.9201 6.3178 71.9201 8.91711C71.9201 11.6071 71.0041 13.743 69.1717 15.3248C67.3389 16.8843 64.8496 17.6639 61.7051 17.6639H58.5831V23.1742C58.5831 23.3696 58.423 23.5295 58.2275 23.5295H53.2033C53.0074 23.5295 52.8477 23.3696 52.8477 23.1742V0.830181C52.8477 0.634772 53.0074 0.474854 53.2033 0.474854H62.1463ZM80.0244 0.474854H75.0001C74.8042 0.474854 74.6445 0.634772 74.6445 0.830181V23.1742C74.6445 23.3696 74.8042 23.5295 75.0001 23.5295H80.0244C80.2199 23.5295 80.38 23.3696 80.38 23.1742V0.830181C80.38 0.634772 80.2199 0.474854 80.0244 0.474854ZM100.654 0.474854H105.644C105.84 0.474854 106 0.634772 106 0.830181V23.1742C106 23.3696 105.84 23.5295 105.644 23.5295H101.75C101.661 23.5295 101.54 23.4748 101.482 23.408L90.5249 10.8831V23.1742C90.5249 23.3696 90.3648 23.5295 90.1693 23.5295H85.1447C84.9491 23.5295 84.7891 23.3696 84.7891 23.1742V0.830181C84.7891 0.634772 84.9491 0.474854 85.1447 0.474854H89.0033C89.0935 0.474854 89.2149 0.530736 89.2737 0.599068L100.298 13.4601V0.830181C100.298 0.634772 100.458 0.474854 100.654 0.474854ZM16.387 14.2401L22.9617 17.0157C23.157 17.0982 23.235 17.3185 23.1392 17.5075C22.5838 18.6025 21.8344 19.6136 20.8985 20.5486C19.949 21.4878 18.8884 22.239 17.7476 22.7946C17.5603 22.8858 17.3421 22.8077 17.2604 22.616L14.5009 16.1516C14.4494 16.0311 14.4823 15.8562 14.5742 15.7628L15.9949 14.3184C16.0881 14.2237 16.2645 14.1885 16.387 14.2401Z"
                fill="#F2613C"
              />
            </svg>
            <b-button
              class="btn btn-outline-theme"
              style="position: fixed; right: 25px; top: 10px; z-index: 1111"
              @click="
                $bvModal.hide(`view-modal-${currentPostModalDetail.posts_id}`)
              "
              ><i class="fa fa-times"></i
            ></b-button>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="8000"
              :no-touch="false"
              img-width="1000"
              img-height="1000"
              :fade="true"
              controls
              indicators
              class="items-center justify-center w-full h-full d-flex"
              :no-hover-pause="true"
              :no-animation="true"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                v-for="(postImg, i) in currentPostModalDetail.multi_image.split(
                  ','
                )"
                :key="i"
                style=""
                class="items-center justify-center flex-1 h-full slider-container"
              >
                <img
                  style="width: 100%; height: 100vh; object-fit: scale-down"
                  class="w-full h-full"
                  :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                />
              </b-carousel-slide>

              <vue-gallery-slideshow
                :images="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                :index="index"
                class=""
                @close="index = null"
              ></vue-gallery-slideshow>
            </b-carousel>

            <!-- Close modal  -->
            <!--<div
              class="absolute top-0 flex justify-end block xl:hidden right-1"
            >
              <XIcon
                @click="
                  $bvModal.hide(`view-modal-${currentPostModalDetail.posts_id}`)
                "
                class="w-10 h-10 p-2 mt-2 transition-all ease-in-out bg-white rounded-full cursor-pointer hover:rounded-full hover:bg-gray-100 duration-400"
              />
            </div>-->
          </div>

          <div
            class="relative z-40 w-full p-8 lg:overflow-scroll md:overflow-scroll sm:overflow-scroll xl:right-0 xl:max-w-xl lg:p-4 modal-post-details-container xl:mt-0"
          >
            <!-- Current Post Modal User Info -->
            <div
              class="left-0 right-0 z-0 flex w-full py-4 bg-white lg:sticky -top-4 z-index-11"
            >
              <div class="w-18">
                <img
                  v-if="currentPostModalDetail.profile_picture_path"
                  :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentPostModalDetail.profile_picture_path}`"
                  class="w-12 h-12 rounded-full shadow-md"
                  alt=""
                />
                <img
                  v-else
                  src="../../assets/img/avatar.jpeg"
                  class="w-12 h-12 rounded-full shadow-md"
                  alt=""
                />
              </div>

              <div class="">
                <h3
                  class="mb-0 text-base font-extrabold cursor-pointer hover:text-primary-500 fz-700 sm:text-lg"
                >
                  {{ currentPostModalDetail.first_name }}
                  {{ currentPostModalDetail.last_name }}
                </h3>
                <!--<p class="flex text-sm font-medium text-gray-400">
                  {{ currentUser.tagline }}
                </p>-->
                <p class="flex items-center mb-0 text-muted fz-400 fz-16">
                  <ClockIcon class="w-3 h-3 mr-2 text-primary-500" />
                  {{ currentPostModalDetail.time }}
                </p>
              </div>
            </div>

            <div class="relative pb-4">
              <vue-read-more-smooth :lines="3">
                <p
                  class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                  v-html="getHtmlContent(currentPostModalDetail.postText)"
                ></p>
              </vue-read-more-smooth>
            </div>

            <div class="flex items-center justify-between mt-4">
              <h6
                v-if="currentPostModalDetail.likeCount != 0"
                class="flex items-center text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
              >
                <ThumbUpIcon class="w-4 h-4 mr-2 text-blue-500" />
                <span>
                  {{ currentPostModalDetail.likeCount }}
                </span>
              </h6>
              <span
                v-if="currentPostModalDetail.commentCount >= 1"
                class="text-sm font-medium text-gray-500 cursor-pointer hover:text-primary-500"
              >
                {{ currentPostModalDetail.commentCount }}
                Comments
              </span>
            </div>

            <hr class="mt-4 text-gray-400" />

            <!-- Current Post modal likes & comment resources -->
            <div class="flex items-center justify-between mt-3">
              <div
                class="p-2 rounded-md cursor-pointer group hover:bg-gray-200 hover:rounded-md"
              >
                <label
                  for=""
                  @click="addLikes(currentPostModalDetail.posts_id)"
                  class="flex items-center text-base font-medium text-gray-500 cursor-pointer group hover:text-primary-500 lg:text-base"
                >
                  <ThumbUpIcon
                    v-if="
                      !post_ids.find(
                        (v) => v == currentPostModalDetail.posts_id
                      )
                    "
                    class="w-5 h-5 mr-2 text-gray-400 cursor-pointer lg:mr-3 hover:text-gray-400"
                  />
                  <LikeIcon
                    v-else
                    class="mr-2 text-blue-400 cursor-pointer lg:mr-3 group-hover:text-blue-500"
                  />
                  Like
                </label>
              </div>

              <div
                class="p-2 rounded-md cursor-pointer hover:bg-gray-200 hover:rounded-md group"
              >
                <label
                  for=""
                  class="flex items-center text-base font-medium text-gray-500 cursor-pointer group-hover:text-primary-500"
                >
                  <ChatIcon
                    class="w-8 h-8 p-1 mr-2 text-gray-400 cursor-pointer lg:mr-1 group-hover:text-primary-500"
                  />
                  Comment
                </label>
              </div>

              <div
                class="p-2 rounded-md cursor-pointer hover:bg-gray-200 hover:rounded-md group"
              >
                <label
                  @click="showSharePostModal(currentPostModalDetail)"
                  v-b-modal.share-post-modal
                  for=""
                  class="flex items-center text-base font-medium text-gray-500 cursor-pointer group-hover:text-primary-500"
                >
                  <ShareIcon
                    class="w-6 h-6 mr-2 text-gray-400 cursor-pointer lg:mr-3 group-hover:text-primary-500"
                  />
                  Share
                </label>
              </div>
            </div>

            <!-- Current Post Add Own comment -->
            <div class="flex mt-3 space-x-2">
              <div class="w-16">
                <img
                  v-if="currentUser.profile_picture_path"
                  :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                  class="inline-block w-12 h-12 rounded-full"
                  alt=""
                />
              </div>

              <div class="w-full mt-1 sm:mt-0">
                <div class="rounded-3xl">
                  <textarea
                    row="6"
                    v-model="currentPostModalDetail.commentText"
                    name="currentComment"
                    id="currentComment"
                    autocomplete="currentComment"
                    v-autogrow
                    class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                  >
                  </textarea>
                  <span
                    v-if="false"
                    class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                  >
                    <EmojiHappyIcon
                      class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                    />
                    <ImageIcon
                      class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="text-right 001">
              <b-button
                class="mt-2 btn btn-theme btn-xs"
                @click="addCurrentUserComment(currentPostModalDetail)"
                v-if="currentPostModalDetail.commentText"
                >Post
              </b-button>
            </div>

            <!-- Current Post Modal Filters Dropdown -->
            <AppDropdown v-if="currentPostModalDetail.comments" class="mt-3">
              <template slot="toggler">
                <div class="flex items-center justify-between">
                  <h6
                    class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                  >
                    Most relevant
                  </h6>
                  <ChevronDownIcon
                    class="w-8 h-8 p-2 -mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                  />
                </div>
              </template>
              <AppDropdownContent dropdownwidth="w-100">
                <AppDropdownItem
                  style="padding: 2px 20px"
                  class="flex transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer group hover:bg-gray-200"
                >
                  <SparkleIcon
                    class="w-5 h-5 mt-2.5 mr-3 text-gray-500 group-hover:text-primary-500"
                  />
                  <div class="" style="margin-top: 8px">
                    <h6
                      class="text-sm font-semibold text-gray-600 group-hover:text-primary-500"
                    >
                      Most relevant
                    </h6>
                    <p
                      class="text-xs font-normal text-gray-500 group-hover:text-primary-500"
                    >
                      See the most relevant comments
                    </p>
                  </div>
                </AppDropdownItem>
                <AppDropdownItem
                  style="padding: 2px 20px"
                  class="flex transition-all duration-500 ease-in cursor-pointer hover:bg-gray-200 group"
                >
                  <ClockIcon
                    class="w-5 h-5 mt-2.5 mr-3 text-gray-500 group-hover:text-primary-500"
                  />
                  <div class="" style="margin-top: 8px">
                    <h6
                      class="text-sm font-semibold text-gray-600 group-hover:text-primary-500"
                    >
                      Most recents
                    </h6>
                    <p
                      class="text-xs font-normal text-gray-500 group-hover:text-primary-500"
                    >
                      See all the commensts, the most recent comments are first.
                    </p>
                  </div>
                </AppDropdownItem>
              </AppDropdownContent>
            </AppDropdown>

            <!-- Current Post Modal User Comments -->
            <div
              v-if="currentPostModalDetail.comments"
              class="overflow-x-hidden overflow-y-auto"
            >
              <div
                v-for="(currenCmnt, index) in currentPostModalDetail.comments"
                :key="index"
              >
                <div class="flex w-full pl-0 mt-3 space-x-3 md:pl-8 xl:pl-0">
                  <div class="w-14">
                    <img
                      v-if="currenCmnt.profile_picture_path"
                      :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currenCmnt.profile_picture_path}`"
                      class="inline-block w-12 h-12 rounded-full"
                      alt=""
                    />
                    <img
                      v-else
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      class="w-12 h-12 rounded-full shadow-md"
                      alt=""
                    />
                  </div>

                  <div
                    class="w-full max-w-sm px-3 py-2 bg-gray-200 rounded-md md:max-w-5xl"
                  >
                    <div class="flex items-center justify-between">
                      <h3
                        class="text-sm font-bold text-gray-900 cursor-pointer hover:text-primary-500 sm:text-base"
                      >
                        {{ currenCmnt.first_name }}{{ currenCmnt.last_name }}
                      </h3>

                      <!-- Current Comment Dropdown -->
                      <AppDropdown class="flex justify-end -mt-5">
                        <template slot="toggler">
                          <DotsHorizontalIcon
                            class="w-8 h-8 p-2 mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                          />
                        </template>
                        <AppDropdownContent
                          dropdownwidth="w-56"
                          dropdownMargin=""
                        >
                          <AppDropdownItem
                            class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                            style="padding: 8px 14px"
                          >
                            <span
                              class="flex items-center"
                              @click="
                                copyLinkToComment(
                                  currentPostModalDetail,
                                  currenCmnt
                                )
                              "
                            >
                              <LinkIcon
                                class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                              />
                              Copy Link to Comment
                            </span>
                          </AppDropdownItem>
                          <AppDropdownItem
                            v-if="currenCmnt.user_id === currentUserId"
                            class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                            style="padding: 8px 14px"
                          >
                            <span
                              class="flex items-center"
                              @click="editComment(currenCmnt.comments_id)"
                            >
                              <PencilIcon
                                class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                              />
                              Edit
                            </span>
                          </AppDropdownItem>
                          <AppDropdownItem
                            v-if="currenCmnt.user_id === currentUserId"
                            class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                            style="padding: 8px 14px"
                          >
                            <span
                              class="flex items-center"
                              @click="
                                deletePostComment(
                                  currenCmnt,
                                  currentPostModalDetail.posts_id
                                )
                              "
                            >
                              <TrashIcon
                                class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                              />
                              Delete
                            </span>
                          </AppDropdownItem>
                          <AppDropdownItem
                            v-if="currenCmnt.user_id != currentUserId"
                            class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                            style="padding: 8px 14px"
                          >
                            <span
                              v-b-modal:[`report-comment-modal-${currenCmnt.comments_id}`]
                              class="flex items-center"
                              @click="reportComment(currenCmnt.comments_id)"
                            >
                              <FlagIcon
                                class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                              />

                              Report Comment
                            </span>
                          </AppDropdownItem>
                        </AppDropdownContent>
                      </AppDropdown>
                    </div>

                    <!-- View More Post Modal comments section -->
                    <div class="">
                      <div class="relative pb-4">
                        <vue-read-more-smooth :lines="3">
                          <p
                            class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                            v-html="getHtmlContent(currenCmnt.text)"
                          ></p>
                        </vue-read-more-smooth>
                      </div>

                      <!-- Edit comment input -->
                      <div
                        v-if="
                          comment_ids.find((v) => v == currenCmnt.comments_id)
                        "
                        class="flex mt-1 bg-white border rounded-3xl"
                      >
                        <textarea
                          row="6"
                          v-model="currenCmnt.text"
                          name="currentComment"
                          id="currentComment"
                          autocomplete="currentComment"
                          v-autogrow
                          class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                        />

                        <span
                          v-if="false"
                          class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                        >
                          <EmojiHappyIcon
                            class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                          <ImageIcon
                            class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                        </span>
                      </div>
                      <div class="text-right 001">
                        <b-button
                          class="mt-2 btn btn-theme btn-xs"
                          @click="
                            editPostComment(
                              currenCmnt,
                              currenCmnt.text,
                              currentPostModalDetail.posts_id
                            )
                          "
                          v-if="
                            comment_ids.find(
                              (v) => v == currenCmnt.comments_id
                            ) && currenCmnt.text
                          "
                        >
                          Post
                        </b-button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Post Modal Users Likes Activity -->
                <div class="w-full mt-3 pl-14 md:max-w-7xl xl:max-w-sm">
                  <label
                    for=""
                    class="flex items-center justify-start space-x-3 cursor-pointer"
                  >
                    <span
                      @click="addCommentsLike(currenCmnt.comments_id)"
                      :class="[
                        {
                          'text-primary-500 bg-gray-200 rounded-md':
                            replyComment_ids.find(
                              (_id) => _id === currenCmnt.comments_id
                            ),
                        },
                        `p-1 text-xs font-normal text-gray-500 rounded-md hover:bg-gray-200 hover:rounded-md hover:text-primary-500`,
                      ]"
                    >
                      Like
                    </span>
                    <span class="ml-2 text-xs font-bold text-gray-500">
                      .
                    </span>
                    <span
                      class="flex items-center text-xs font-normal leading-normal text-gray-500 cursor-pointer hover:text-primary-500"
                    >
                      <ThumbUpIcon
                        class="w-5 h-5 p-1 mr-2 text-white bg-blue-400 rounded-full"
                      />
                      <span
                        v-if="
                          replyComment_ids.find(
                            (_id) => _id === currenCmnt.comments_id
                          )
                        "
                      >
                        {{ getCommentLikesCounts(currenCmnt) }}
                      </span>

                      <span class="ml-2 ml-sm-1 mr-2 mr-sm-1 text-xs font-bold text-gray-500">
                        |
                      </span>
                      <span
                        class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                        @click="showReplyInput(currenCmnt.comments_id)"
                      >
                        Reply
                      </span>
                      <span
                        v-if="currenCmnt.replies"
                        class="ml-2 ml-sm-1 mr-2 mr-sm-1 text-xs font-bold text-gray-500"
                      >
                        .
                      </span>
                      <span
                        v-if="currenCmnt.replies"
                        class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                        @click="showMoreCommentReply(currenCmnt.comments_id)"
                      >
                        {{ currenCmnt.commentReplyCount }} Reply
                      </span>
                      <span class="ml-2 ml-sm-2 mr-2 mr-sm-1 text-xs font-bold text-gray-500">
                        .
                      </span>
                      <span
                        class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                      >
                        {{ currenCmnt.time }}
                      </span>
                    </span>
                  </label>
                </div>

                <!-- Post Modal List of comments replied -->
                <div
                  class="w-full pl-16 xl:pl-12"
                  v-if="isMoreCommentreply === currenCmnt.comments_id"
                >
                  <div
                    v-for="(reply, replyIndex) in currenCmnt.replies"
                    :key="replyIndex"
                    class="flex w-full mt-4 mb-8 space-x-3"
                  >
                    <div class="xl:w-36">
                      <img
                        v-if="reply.profile_picture_path"
                        :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${reply.profile_picture_path}`"
                        class="w-12 h-12 rounded-full shadow-md"
                        alt=""
                      />
                      <img
                        v-else
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        class="w-10 h-10 rounded-full shadow-md cursor-pointer"
                        alt=""
                      />
                    </div>

                    <div
                      class="w-full max-w-sm px-3 space-x-4 bg-gray-200 rounded-md md:max-w-5xl xl:max-w-xs xl:mx-auto"
                    >
                      <div class="flex w-full mt-2">
                        <div class="">
                          <!-- comments User name -->
                          <h6
                            class="text-base font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                          >
                            {{ reply.first_name }}{{ reply.last_name }}
                          </h6>

                          <!-- Comment Reply text -->
                          <!-- View More Post Modal comments section -->
                          <div class="">
                            <div class="relative pb-4">
                              <vue-read-more-smooth :lines="3">
                                <p
                                  class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                                  v-html="getHtmlContent(reply.text)"
                                ></p>
                              </vue-read-more-smooth>
                            </div>
                            <!-- Edit comment reply input -->
                          </div>

                          <!-- Comment Reply timing  -->
                          <p class="text-xs font-medium text-gray-400">
                            {{ reply.time }}
                          </p>
                        </div>

                        <!-- Current Comments Reply Dropdown -->
                        <AppDropdown
                          class="right-0 flex justify-end -mt-4 xl:right-6"
                        >
                          <template slot="toggler">
                            <DotsHorizontalIcon
                              class="w-8 h-8 p-2 mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                            />
                          </template>

                          <AppDropdownContent>
                            <AppDropdownItem
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  copyLinkToComment(
                                    currentPostModalDetail,
                                    currenCmnt
                                  )
                                "
                              >
                                <LinkIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Copy Link to Comment
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="reply.user_id === currentUserId"
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  editCommentReply(reply.comment_replies_id)
                                "
                              >
                                <PencilIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Edit
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="reply.user_id === currentUserId"
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  deletePostCommentReply(
                                    reply,
                                    currentPostModalDetail.posts_id,
                                    currenCmnt.comments_id
                                  )
                                "
                              >
                                <TrashIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Delete
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="reply.user_id != currentUserId"
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                v-b-modal:[`report-comment-modal-${currenCmnt.comments_id}`]
                                class="flex items-center"
                                @click="reportComment(currenCmnt.comments_id)"
                              >
                                <FlagIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />

                                Report Comment
                              </span>
                            </AppDropdownItem>
                          </AppDropdownContent>
                        </AppDropdown>
                      </div>

                      <!-- Edit comment reply input -->
                      <div
                        v-if="
                          comment_reply_ids.find(
                            (v) => v == reply.comment_replies_id
                          )
                        "
                        class="flex mb-2 bg-white border rounded-3xl"
                      >
                        <textarea
                          row="6"
                          v-model="reply.text"
                          name="currentComment"
                          id="currentComment"
                          autocomplete="currentComment"
                          v-autogrow
                          class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                        />
                        <span
                          v-if="false"
                          class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                        >
                          <EmojiHappyIcon
                            class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                          <ImageIcon
                            class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                        </span>
                        <br />
                      </div>
                      <div
                        class="text-right 001"
                        v-if="
                          comment_reply_ids.find(
                            (v) => v == reply.comment_replies_id
                          ) && reply.text.length
                        "
                      >
                        <b-button
                          class="mt-2 btn btn-theme btn-xs"
                          @click="
                            editPostCommentReply(
                              reply,
                              reply.text,
                              currentPostModalDetail.posts_id,
                              reply.comments_id
                            )
                          "
                        >
                          Post
                        </b-button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Add Post Modal Reply comments -->
                <div
                  class="mt-4"
                  v-if="isShowReplyInput == currenCmnt.comments_id"
                >
                  <div class="flex pl-16 space-x-2 lg:pl-16">
                    <div class="w-16">
                      <img
                        v-if="currentUser.profile_picture_path"
                        :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                        class="inline-block w-12 h-12 rounded-full"
                        alt=""
                      />
                      <img
                        v-else
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        class="w-12 h-12 rounded-full shadow-md"
                        alt=""
                      />
                    </div>

                    <div class="w-full mt-1 sm:mt-0">
                      <div class="flex border rounded-3xl">
                        <textarea
                          type="text"
                          placeholder="comment here"
                          v-model="currenCmnt.replyText"
                          v-autogrow
                          class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-sm reptext"
                          txta
                        ></textarea>
                        <span
                          v-if="false"
                          class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                        >
                          <EmojiHappyIcon
                            class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                          <ImageIcon
                            class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right 003">
                    <b-button
                      class="mt-2 btn btn-theme btn-xs"
                      @click="
                        addCommentReplyData(
                          currenCmnt,
                          currenCmnt.replyText,
                          currentPostModalDetail.posts_id
                        )
                      "
                      v-if="currenCmnt.replyText"
                      >Post</b-button
                    >
                  </div>
                </div>
              </div>

              <!-- Load More comments Section -->
              <div
                v-if="
                  isMoreComments === currentPostModalDetail.comments_id &&
                  currentPostModalDetail.comments_status === '0'
                "
              >
                <div
                  v-for="(currenCmnt, index) in currentPostModalDetail.comments"
                  :key="index"
                >
                  <div class="flex items-center w-full mt-3 space-x-2">
                    <div class="w-16 -mt-10">
                      <img
                        v-if="currentUser.profile_picture_path"
                        :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                        class="inline-block w-12 h-12 rounded-full"
                        alt=""
                      />
                      <img
                        v-else
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        class="w-12 h-12 rounded-full shadow-md"
                        alt=""
                      />
                    </div>

                    <div
                      class="w-full max-w-xl px-3 py-2 bg-gray-200 rounded-md"
                    >
                      <div class="flex items-center justify-between">
                        <h3
                          class="text-sm font-bold text-gray-900 cursor-pointer hover:text-primary-500 sm:text-base"
                        >
                          {{ currenCmnt.first_name }}{{ currenCmnt.last_name }}
                        </h3>

                        <!-- Current Comment Dropdown -->
                        <AppDropdown class="flex items-center justify-end">
                          <template slot="toggler">
                            <DotsHorizontalIcon
                              class="w-8 h-8 p-2 mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                            />
                          </template>
                          <AppDropdownContent>
                            <AppDropdownItem
                              class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                class="flex items-center"
                                @click="copyLinkToComment(currenCmnt, comment)"
                              >
                                <LinkIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Copy Link to Comment
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="currenCmnt.user_id === currentUserId"
                              class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                class="flex items-center"
                                @click="editComment(currenCmnt.comments_id)"
                              >
                                <PencilIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Edit
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="currenCmnt.user_id === currentUserId"
                              class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  deletePostComment(
                                    currenCmnt,
                                    currentPostModalDetail.posts_id
                                  )
                                "
                              >
                                <TrashIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Delete
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="currenCmnt.user_id != currentUserId"
                              class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                v-b-modal:[`report-comment-modal-${currenCmnt.comments_id}`]
                                class="flex items-center"
                                @click="reportComment(currenCmnt.comments_id)"
                              >
                                <FlagIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />

                                Report Comment
                              </span>
                            </AppDropdownItem>
                          </AppDropdownContent>
                        </AppDropdown>
                      </div>

                      <!-- View More comments -->
                      <div>
                        <p class="text-sm font-medium text-gray-500">
                          {{ currenCmnt.text }}
                          ...

                          <span
                            class="text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                          >
                            Read more
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Users Likes Activity -->
                  <div class="mt-3 lg:max-w-sm pl-14 pl-sm-0">
                    <label
                      for=""
                      class="flex items-center justify-start space-x-3 cursor-pointer"
                    >
                      <span
                        @click="addCommentsLike(currenCmnt.comments_id)"
                        :class="[
                          {
                            'text-primary-500 bg-gray-200 rounded-md':
                              replyComment_ids.find(
                                (_id) => _id === currenCmnt.comments_id
                              ),
                          },
                          `p-1 text-xs font-normal text-gray-500 rounded-md hover:bg-gray-200 hover:rounded-md hover:text-primary-500`,
                        ]"
                      >
                        Like
                      </span>
                      <span class="ml-2 text-xs font-bold text-gray-500">
                        .
                      </span>
                      <span
                        class="flex items-center text-xs font-normal leading-normal text-gray-500 cursor-pointer hover:text-primary-500"
                      >
                        <ThumbUpIcon
                          class="w-5 h-5 p-1 mr-2 text-white bg-blue-400 rounded-full"
                        />

                        <span
                          v-if="
                            replyComment_ids.find(
                              (_id) => _id === currenCmnt.comments_id
                            )
                          "
                        >
                          {{ getCommentLikesCounts(currenCmnt) }}
                        </span>

                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          |
                        </span>
                        <span @click="showReplyInput(currenCmnt.comments_id)">
                          Reply
                        </span>
                        <span
                          v-if="currenCmnt.replies"
                          class="ml-2 mr-2 text-xs font-bold text-gray-500"
                        >
                          .
                        </span>
                        <span
                          class=""
                          v-if="currenCmnt.replies"
                          @click="showMoreCommentReply(currenCmnt.comments_id)"
                        >
                          {{ currenCmnt.commentReplyCount }} Reply
                        </span>
                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          .
                        </span>
                        <span>
                          {{ currenCmnt.time }}
                        </span>
                      </span>
                    </label>
                  </div>

                  <!-- List of replied comments response -->
                  <div
                    class="w-full xl:pl-24"
                    v-if="isMoreCommentreply === currenCmnt.comments_id"
                  >
                    <div
                      v-for="(reply, replyIndex) in currenCmnt.replies"
                      :key="replyIndex"
                      class="flex items-center px-2 mt-4 mb-8 space-x-6"
                    >
                      <div class="">
                        <img
                          v-if="reply.profile_picture_path"
                          :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${reply.profile_picture_path}`"
                          class="w-12 h-12 rounded-full shadow-md"
                          alt=""
                        />
                        <img
                          v-else
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          class="w-10 h-10 rounded-full shadow-md cursor-pointer"
                          alt=""
                        />
                      </div>

                      <div
                        class="flex items-center px-3 -mt-3 -mb-2 space-x-4 bg-gray-200 rounded-md"
                      >
                        <div class="mt-2">
                          <!-- comments User name -->
                          <h6
                            class="text-base font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                          >
                            {{ reply.first_name }}{{ reply.last_name }}
                          </h6>

                          <!-- Comment Reply text -->

                          <p class="-mt-1 text-sm font-medium text-gray-500">
                            {{ reply.text }}
                          </p>

                          <!-- Comment Reply timing  -->
                          <p class="text-xs font-medium text-gray-400">
                            {{ reply.time }}
                          </p>
                        </div>

                        <!-- Current Comments Reply Dropdown -->
                        <AppDropdown class="flex items-center justify-end">
                          <template slot="toggler">
                            <DotsHorizontalIcon
                              class="w-8 h-8 p-2 mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                            />
                          </template>
                          <AppDropdownContent>
                            <AppDropdownItem
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  copyLinkToComment(
                                    currentPostModalDetail,
                                    currenCmnt
                                  )
                                "
                              >
                                <LinkIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Copy Link to Comment
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="reply.user_id === currentUserId"
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  editCommentReply(reply.comment_replies_id)
                                "
                              >
                                <PencilIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Edit
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="reply.user_id === currentUserId"
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  deletePostCommentReply(
                                    reply,
                                    currentPostModalDetail.posts_id,
                                    currenCmnt.comments_id
                                  )
                                "
                              >
                                <TrashIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Delete
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="reply.user_id != currentUserId"
                              class="text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 6px 10px"
                            >
                              <span
                                v-b-modal:[`report-comment-modal-${currenCmnt.comments_id}`]
                                class="flex items-center"
                                @click="reportComment(currenCmnt.comments_id)"
                              >
                                <FlagIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />

                                Report Comment
                              </span>
                            </AppDropdownItem>
                          </AppDropdownContent>
                        </AppDropdown>
                      </div>

                      <!-- Edit comment reply input -->
                      <div
                        v-if="
                          comment_reply_ids.find(
                            (v) => v == reply.comment_replies_id
                          )
                        "
                        class="flex mb-2 bg-white border rounded-3xl"
                      >
                        <textarea
                          row="6"
                          v-model="reply.text"
                          name="currentComment"
                          id="currentComment"
                          autocomplete="currentComment"
                          v-autogrow
                          class="block w-full px-4 py-2 border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-smc txta"
                        />

                        <span
                          v-if="false"
                          class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                        >
                          <EmojiHappyIcon
                            class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                          <ImageIcon
                            class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                          />
                        </span>
                      </div>
                      <div class="text-right 004">
                        <b-button
                          class="mt-2 btn btn-theme btn-xs"
                          @click="
                            editPostCommentReply(
                              reply,
                              reply.text,
                              post.posts_id,
                              reply.comments_id
                            )
                          "
                          v-if="reply.text"
                          >Post
                        </b-button>
                      </div>
                    </div>
                  </div>

                  <!-- Add Reply comments -->
                  <div
                    v-if="isShowReplyInput == currenCmnt.comments_id"
                    class="mt-4"
                  >
                    <div class="flex items-center space-x-3 lg:pl-16">
                      <img
                        v-if="currentUser.profile_picture_path"
                        :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                        class="inline-block w-12 h-12 rounded-full"
                        alt=""
                      />
                      <img
                        v-else
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        class="w-12 h-12 rounded-full shadow-md"
                        alt=""
                      />

                      <div class="w-full mt-1 sm:mt-0">
                        <div class="flex border rounded-3xl">
                          <textarea
                            type="text"
                            placeholder="comment here"
                            v-model="currenCmnt.replyText"
                            v-autogrow
                            class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-sm reptext"
                            txta
                          ></textarea>
                          <span
                            v-if="false"
                            class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                          >
                            <EmojiHappyIcon
                              class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                            />
                            <ImageIcon
                              class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-right 004">
                      <b-button
                        class="mt-2 btn btn-theme btn-xs"
                        @click="
                          addCommentReplyData(
                            currenCmnt,
                            currenCmnt.replyText,
                            currentPostModalDetail.posts_id
                          )
                        "
                        v-if="currenCmnt.replyText"
                        >Post
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Load more label -->
            <div
              v-if="currentPostModalDetail.comments_status === '0'"
              class="bottom-0"
            >
              <label
                for=""
                v-if="
                  !isShowLoadMoreComments.find(
                    (_v) => _v == currentPostModalDetail.posts_id
                  ) && currentPostModalDetail.commentCount > 0
                "
                @click="loadMoreComments(currentPostModalDetail.posts_id)"
                class="p-1 mt-4 text-sm font-medium text-gray-900 rounded-md cursor-pointer hover:bg-gray-200 hover:rounded-md hover:text-primary-500"
              >
                Load more comments 2
              </label>

              <label
                v-else-if="currentPostModalDetail.commentCount != 0"
                for=""
                class="p-1 mt-4 text-sm font-medium text-gray-900 rounded-md cursor-pointer hover:bg-gray-200 hover:rounded-md hover:text-primary-500"
              >
                <span v-if="currentPostModalDetail.commentCount == 0">
                  View
                  {{ currentPostModalDetail.commentCount }} comments</span
                >

                <span
                  v-else
                  @click="loadLessComments(currentPostModalDetail.posts_id)"
                >
                  View Less comments 2
                </span>
              </label>
            </div>
          </div>
        </div>
      </b-modal>
    </div>

    <aside class="xl:col-span-6">
      <!-- Current User Info Section web -->
      <div class="xl:pl-10">
        <CurrentUserInfo :userInfo="currentUser" />
      </div>

      <!-- Mobile screen Current User Info Widget -->
      <MobileScreenCurrentUserInfo :userInfo="currentUser" />

      <!-- QAPIN Top News  -->
      <TopNews />

      <!-- Jobs Main Content  -->
      <div
        class="sticky w-full mt-24 xl:mt-40 lg:px-10 xl:max-w-3xl md:max-w-3xl md:mx-auto sm:mx-auto xl:mx-auto"
      >
        <!-- Start a New Post Job -->
        <div class="px-4 py-3 bg-white border border-gray-400 rounded-md">
          <div class="flex items-center">
            <div class="w-16">
              <img
                v-if="currentUser.profile_picture_path"
                :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                class="inline-block w-12 h-12 rounded-full cursor-pointer hover:shadow-lg"
                alt=""
              />
            </div>

            <!-- id="toggle-btn" -->
            <div class="w-full cursor-pointer" v-b-modal.modal-prevent-closing>
              <input
                type="none"
                placeholder="Start a Post"
                class="w-full px-4 py-2 transition-all duration-500 bg-gray-200 border border-gray-500 cursor-pointer hover:border-secondary hover:shadow-xl shover:shadow-sm focus:border-indigo-500 focus:ring-offset-indigo-500 duration-800 rounded-3xl hover:bg-gray-100 hover:border-indigo-500"
              />
            </div>
          </div>

          <!-- Post Resources Tools -->
          <div class="flex items-center justify-between hidden mt-4">
            <div class="cursor-pointer">
              <label
                for=""
                class="flex items-center text-base font-medium text-gray-500 cursor-pointer"
              >
                <ImageIcon
                  class="w-4 h-4 mr-3 text-blue-400 cursor-pointer hover:text-gray-400"
                />
                Photo
              </label>
            </div>

            <div class="cursor-pointer">
              <label
                for=""
                class="flex items-center text-base font-medium text-gray-500 cursor-pointer"
              >
                <PlayIcon
                  class="w-4 h-4 p-1 mr-3 text-green-400 border border-green-500 rounded-sm cursor-pointer hover:text-gray-400"
                />
                Video
              </label>
            </div>

            <div class="cursor-pointer">
              <label
                for=""
                class="flex items-center text-base font-medium text-gray-500 cursor-pointer"
              >
                <CalendarIcon
                  class="w-4 h-4 mr-3 text-yellow-400 cursor-pointer hover:text-gray-400"
                />
                Event
              </label>
            </div>

            <div class="cursor-pointer">
              <label
                for=""
                class="flex items-center text-base font-medium text-gray-500"
              >
                <ArticleIcon
                  class="w-4 h-4 mr-3 text-pink-300 cursor-pointer hover:text-gray-400"
                />
                Write arcticle
              </label>
            </div>
          </div>
        </div>

        <!-- Add Post News Modal  -->
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          @show="resetModal"
          size="lg"
          @hidden="resetModal"
          class="h-auto"
          title="Create a Post"
          hide-footer
          centered 
        >
          <div class="absolute flex justify-end -top-14 right-1">
            <XIcon
              @click="$bvModal.hide(`modal-prevent-closing`)"
              class="w-10 h-10 p-2 transition-all ease-in-out bg-white rounded-full cursor-pointer hover:rounded-full hover:bg-gray-200 duration-400 close-modal-btn"
            />
          </div>
          <form
            action=""
            method="POST"
            ref="form"
            @submit.prevent="submitPostData"
          >
            <div class="w-full d-block">
              <div class="flex w-full">
                <div>
                  <img
                    v-if="currentUser.profile_picture_path"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                    class="inline-block w-12 h-12 rounded-full"
                    alt=""
                  />
                  <img
                    v-else
                    class="inline-block w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                <div class="cursor-pointer" style="padding-left: 15px">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 fz-700">
                      {{ currentUser.first_name }}
                      {{ currentUser.last_name }}
                    </h3>
                  </div>
                  <div style="margin-left: 0; margin-top: 4px">
                    <BaseSelectInput
                      :icon="true"
                      class="px-2 text-sm border border-gray-600 border-solid shadow-sm cursor-pointer d-flex align-items-center duration-800 rounded-3xl hover:bg-gray-100 focus:border-indigo-500 focus:ring-offset-indigo-500 hover:border-primary-500"
                      :options="postPrivacyOptions"
                      :default="{ name: 'Everyone', value: 1 }"
                      v-model="post_privacy"
                      placeholder="Select"
                      @input="alert(displayToKey($event))"
                    />
                  </div>
                </div>
              </div>

              <div class="flex justify-start w-full mt-4">
                <textarea
                  placeholder="What do you want to talk about?"
                  id=""
                  cols="30"
                  v-model="post_text"
                  rows="6"
                  class="w-full px-3 py-2 text-sm text-gray-800 border-none h-100"
                  @input="$v.post_text.$touch()"
                  @blur="$v.post_text.$touch()"
                />
              </div>
              <span v-if="$v.post_text.$error">
                <span
                  v-if="!$v.post_text.maxLength"
                  class="mt-1 text-sm font-medium text-primary-500"
                  >Too long. Use at least 1500 characters or less</span
                >
              </span>
            </div>

            <div
              class="grid grid-cols-4 gap-4 mt-4 overflow-x-auto"
              v-if="previewImage"
            >
              <div
                class="post-img-container"
                v-for="(image, index) in previewImage"
                :key="index"
              >
                <img
                  :src="image"
                  alt="Post"
                  class="border border-gray-400 cursor-pointer post-img"
                />

                <div
                  v-if="isImageLoading"
                  style="width: 100%"
                  class="absolute inset-0 bottom-0 z-10 opacity-75 cursor-pointer bg-primary-500 group rounded-xl"
                >
                  <b-spinner
                    variant="light"
                    type="grow"
                    class="absolute opacity-100 inset-16"
                    label="Spinning"
                  ></b-spinner>
                </div>

                <div class="post-img-overlay" @click="removePostImage(index)">
                  <TrashIcon
                    class="absolute w-12 h-12 p-2 font-bold text-red-600 bg-white rounded-md shadow-sm opacity-100 inset-x-16 inset-y-12"
                  />
                </div>
              </div>
            </div>

            <div
              class="flex items-center justify-between mt-4 border-t border-gray-300"
            >
              <label for="file-upload" class="grid grid-cols-3 gap-2 mt-3">
                <!-- File Upload Tools -->
                <ImageIcon
                  class="w-8 h-8 p-2 text-white bg-gray-600 rounded-md shadow cursor-pointer hover:bg-primary-500"
                />
                <!--<div
                  class="p-2 bg-gray-600 rounded-md shadow cursor-pointer hover:bg-primary-500"
                >
                  <PlayIcon
                    class="w-4 h-4 p-1 text-white border border-white"
                  />
                </div>
                <DuplicateIcon
                  class="w-8 h-8 p-1 text-white bg-gray-600 rounded-md shadow cursor-pointer hover:bg-primary-500"
                />-->

                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  multiple
                  ref="file"
                  accept="image/png, image/jpeg, image/jpg, image/gif, image/bmp, image/video"
                  class="sr-only"
                  @change="onImageChange"
                />
              </label>

              <div class="flex items-center justify-end mt-3 space-x-4">
                <!-- Enabled / Disabled Comment Field -->
                <div class="">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="comments_status"
                    name="checkbox-1"
                    class="flex items-center space-x-4 cursor-pointer"
                  >
                    <label
                      for="checkbox-1"
                      class="text-sm font-medium text-gray-500 cursor-pointer hover:text-primary-500"
                    >
                      Disable Commenting
                    </label>
                  </b-form-checkbox>
                </div>
                <div class="hidden md:block xl:block">
                  <button
                    :class="[
                      { 'bg-primary-500 bg-opacity-50': !post_text.length },
                      'px-10 transition-all duration-500 ease-in py-2.5 text-sm font-medium w-full text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50',
                    ]"
                    :disabled="!post_text.length"
                    type="submit"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
            <div class="block mt-6 md:hidden xl:hidden">
              <button
                :class="[
                  { 'bg-primary-500 bg-opacity-50': !post_text.length },
                  'px-10 transition-all duration-500 ease-in py-2.5 text-sm font-medium w-full text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50',
                ]"
                :disabled="!post_text.length"
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        </b-modal>

        <!-- Edit Post Modal -->
        <b-modal
          v-if="selectedPost"
          :id="`edit-modal-${selectedPost.posts_id}`"
          title="Edit a Post"
          size="lg"
          hide-footer
        >
          <!--<div class="absolute flex justify-end -top-14 right-1">
            <XIcon
              @click="$bvModal.hide(`edit-modal-${selectedPost.posts_id}`)"
              class="w-10 h-10 p-2 transition-all ease-in-out bg-white rounded-full cursor-pointer hover:rounded-full hover:bg-gray-200 duration-400"
            />
          </div>-->

          <form
            action=""
            method="POST"
            ref="form"
            @submit.prevent="editPostData"
          >
            <div class="w-full px-0 d-block">
              <div class="flex items-center w-full space-x-3">
                <div class="">
                  <img
                    class="inline-block w-12 h-12 rounded-full cursor-pointer hover:shadow-lg"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                    alt=""
                  />
                </div>

                <div class="cursor-pointer">
                  <BaseSelectInput
                    :icon="true"
                    class="px-4 py-1.5 text-sm border border-gray-400 border-solid shadow-sm cursor-pointer duration-800 rounded-3xl hover:bg-gray-100 focus:border-indigo-500 focus:ring-offset-indigo-500 hover:border-primary-500 d-flex align-items-center z-index-11 pos-relative"
                    :options="postPrivacyOptions"
                    :default="editData.post_privacy"
                    v-model="editData.post_privacy"
                    placeholder="Select"
                    @input="alert(displayToKey($event))"
                  />
                </div>
              </div>

              <div class="flex justify-start w-full mt-2">
                <textarea 
                  placeholder="What do you want to talk about?"
                  id=""
                  cols="30"
                  v-model="editData.post_text"
                  rows="3"
                  class="w-full px-3 py-2 text-sm text-gray-800 border-none h-100"
                  @input="$v.editData.post_text.$touch()"
                  @blur="$v.editData.post_text.$touch()"
                />
              </div>
              <span v-if="$v.editData.post_text.$error">
                <span
                  v-if="!$v.editData.post_text.maxLength"
                  class="mt-1 text-sm font-medium text-primary-500"
                  >Too long. Use at least 1500 characters or less</span
                >
              </span>
            </div>

            <div class="flex items-center border-t border-gray-300">
              <!-- Enabled / Disabled Comment Field -->
              <div class="mt-2.5">
                <div class="flex items-center px-3">
                  <b-form-checkbox
                    v-model="editData.comments_status"
                    id="checkbox-1"
                    name="checkbox-1"
                    class="flex items-center space-x-4 cursor-pointer"
                  >
                    <label
                      for="checkbox-1"
                      class="text-sm font-medium text-gray-500 cursor-pointer hover:text-primary-500"
                    >
                      Disable Commenting
                    </label>
                  </b-form-checkbox>
                </div>
              </div>

              <div class="flex items-center justify-end mt-3 space-x-2">
                <button
                  :class="[
                    {
                      'bg-primary-500 bg-opacity-50':
                        !editData.post_text.length,
                    },
                    'px-10 transition-all duration-500 ease-in py-2.5 text-sm font-medium  text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50',
                  ]"
                  :disabled="!editData.post_text.length"
                  block
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </b-modal>

        <!-- Share Post data Modal -->
        <b-modal
          ref="modal"
          @show="resetSharePostModal"
          @hidden="resetSharePostModal"
          class="h-auto"
          id="share-post-modal"
          hide-footer
          hide-header
          size="lg"
          centered 
        >
          <div class="absolute flex justify-end right-1" style="top: -30px;right: -30px;">
            <XIcon
              @click="$bvModal.hide(`share-post-modal`)"
              class="w-10 h-10 p-2 transition-all ease-in-out text-white rounded-full cursor-pointer hover:rounded-full duration-400"
            />
          </div>
          <form
            action=""
            method="POST"
            ref="form"
            @submit.prevent="submitSharePostData"
          >
            <!-- <div class="py-2 border-b border-gray-200">
              <input
                type="text"
                placeholder="Post Title"
                class="w-full px-4 py-2 text-lg font-bold text-gray-900 border-none"
                v-model="sharePostData.sharePostTitle"
              />
            </div> -->
            <div class="py-2 border-b border-gray-200">
              <textarea
                type="text"
                rows="5"
                placeholder="write here and use @ to tag someone."
                class="w-full px-4 py-2 text-lg font-bold text-gray-900 border-none resize-none"
                v-model="sharePostData.sharePostText"
                @input="$v.sharePostData.sharePostText.$touch()"
                @blur="$v.sharePostData.sharePostText.$touch()"
              />
            </div>
            <span v-if="$v.sharePostData.sharePostText.$error">
              <span
                v-if="!$v.sharePostData.sharePostText.maxLength"
                class="mt-1 text-sm font-medium text-primary-500"
              >
                Too long. Use at least 1500 characters or less
              </span>
            </span>

            <!-- Current Post Info -->
            <div
              class="w-full px-4 py-6 mt-3 border border-gray-400 rounded-sm shadow-sm d-block"
            >
              <div class="flex w-full mb-4 space-x-2 justify-flex-start">
                <div class="w-16">
                  <img
                    v-if="sharePostData.profile_picture_path"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${sharePostData.profile_picture_path}`"
                    class="inline-block w-12 h-12 rounded-full"
                    alt="profile_picture"
                  />
                  <img
                    v-else
                    class="inline-block w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                <div class="w-full">
                  <h1
                    class="text-base font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                  >
                    {{ sharePostData.first_name }}
                    {{ sharePostData.last_name }}
                  </h1>
                  <p class="mt-2 text-sm font-medium text-gray-500">
                    {{ sharePostData.time }}
                  </p>
                </div>
              </div>

              <div class="relative pb-4">
                <vue-read-more-smooth :lines="3">
                  <p
                    class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                    v-html="getHtmlContent(sharePostData.postText)"
                  ></p>
                </vue-read-more-smooth>
              </div>

              <div
                v-if="sharePostData.multi_image >0"
                class="grid grid-cols-3 gap-2 mt-4 cursor-pointer"
              >
                <div
                  v-for="(image, indexImg) in sharePostData.multi_image.split(
                    ','
                  )"
                  :key="indexImg"
                >
                  <img
                    :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${image}.jpg`"
                    class="w-full h-56 border border-gray-400 rounded-md shadow-sm hover:shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <!-- Enabled / Disabled Comment Field -->
            <div class="mt-4 border-t border-gray-200">
              <div class="d-md-flex items-center justify-between px-3 py-2">
                <div class="flex items-center">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="sharePostData.share_comment_status"
                    name="checkbox-2"
                    value="accepted"
                    class="flex items-center space-x-4 cursor-pointer"
                    unchecked-value="not_accepted"
                  >
                    <label
                      for="checkbox-2"
                      class="text-sm font-medium text-gray-500 cursor-pointer hover:text-primary-500"
                    >
                      Disable Commenting
                    </label>
                  </b-form-checkbox>
                </div>

                <div class="flex items-center justify-end justify-sm-start space-x-4">
                  <div
                    class="mt-3 cursor-pointer focus:ring-offset-indigo-500 focus:border-indigo-500"
                  >
                    <BaseSelectInput
                      :icon="true"
                      class="px-2 text-sm border border-gray-600 border-solid shadow-sm cursor-pointer duration-800 rounded-3xl hover:bg-gray-100 focus:border-indigo-500 focus:ring-offset-indigo-500 hover:border-primary-500 d-flex align-items-center"  
                      :options="postPrivacyOptions"
                      :default="{ name: 'Everyone', value: 1 }"
                      v-model="sharePostData.share_post_privacy"
                      placeholder="Select"
                      @input="alert(displayToKey($event))"
                    />
                  </div>

                  <div class="mt-3 space-x-2">
                    <button
                      :class="[
                        {
                          'bg-primary-500 bg-opacity-50':
                            !sharePostData.sharePostText.length,
                        },
                        'px-10 transition-all duration-500 ease-in py-2.5 text-sm font-medium w-full text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50',
                      ]"
                      :disabled="!sharePostData.sharePostText.length"
                      block
                      type="submit"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </b-modal>

        <!-- Report Comment Modal -->
        <b-modal
          v-if="reportCommentID"
          :id="`report-comment-modal-${reportCommentID}`"
          title="Help us understand better"
          hide-footer
        >
          <div class="absolute flex justify-end -top-14 right-1">
            <XIcon
              @click="$bvModal.hide(`report-comment-modal-${reportCommentID}`)"
              class="w-10 h-10 p-2 transition-all ease-in-out bg-white rounded-full cursor-pointer hover:rounded-full hover:bg-gray-200 duration-400"
            />
          </div>
          <div
            v-for="(report, index) in reportOptions"
            :key="index"
            class="custom-control custom-radio custom-control-inline"
          >
            <input
              type="radio"
              :id="report.name"
              name="rd"
              class="custom-control-input"
              :value="report.name"
            />
            <label
              class="ml-2 custom-control-label green hover:text-primary-500"
              :for="report.name"
            >
              {{ report.name }}
            </label>
            <hr />
          </div>

          <div class="flex justify-end">
            <div class="mt-3 space-x-2">
              <button
                class="px-3 py-1.5 text-sm font-medium mt-3 text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50"
                block
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </b-modal>

        <!--Job Information Details content -->
        <div v-if="getPostDetails.length" style="height: 100%">
          <div
            class="px-4 py-4 mt-6 border border-gray-400 rounded-md"
            style="background-color: white"
            v-for="(post, index) in updatedPosts"
            :key="index"
          >
            <!-- Current Post User Info -->
            <div
              v-if="post.type !== 'ads'"
              class="flex items-center justify-between"
            >
              <div class="flex space-x-4">
                <div class="px-1">
                  <img
                    v-if="post.profile_picture_path"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${post.profile_picture_path}`"
                    class="w-12 h-12 rounded-full shadow-md cursor-pointer hover:shadow-lg"
                    alt=""
                  />

                  <img
                    v-else
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    class="w-12 h-12 rounded-full shadow-md"
                    alt=""
                  />
                </div>
                <div class="flex justify-between">
                  <div>
                    <h3
                      class="text-base font-bold cursor-pointer hover:text-primary-500 sm:text-lg fz-700"
                    >
                      {{ post.first_name }} {{ post.last_name }}
                    </h3>

                    <p
                      class="flex items-center text-sm font-semibold text-gray-400"
                    >
                      <ClockIcon class="w-4 h-4 mr-2 text-primary-500" />

                      {{ post.time }}
                    </p>
                  </div>

                  <!--Current Post Actions -->
                  <AppDropdown>
                    <template slot="toggler">
                      <DotsHorizontalIcon
                        class="w-10 h-10 p-2 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                      />
                    </template>
                    <AppDropdownContent dropdownwidth="w-96">
                      <AppDropdownItem
                        class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                        style="padding: 12px 20px"
                      >
                        <span
                          class="flex items-center"
                          @click="copyLinkToPost(post)"
                        >
                          <LinkIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Copy Link to Post
                        </span>
                      </AppDropdownItem>
                      <AppDropdownItem
                        v-if="post.user_id === currentUserId"
                        class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                        style="padding: 12px 20px"
                      >
                        <span
                          class="flex items-center"
                          v-b-modal:[`edit-modal-${post.posts_id}`]
                          @click="editModal(post)"
                        >
                          <PencilIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Edit Post
                        </span>
                      </AppDropdownItem>
                      <AppDropdownItem
                        v-if="post.user_id === currentUserId"
                        class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                        style="padding: 12px 20px"
                      >
                        <span
                          class="flex items-center"
                          @click="postDeleteAlert(post)"
                        >
                          <TrashIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Delete Post
                        </span>
                      </AppDropdownItem>
                      <AppDropdownItem
                        v-if="post.comments_status != '0'"
                        class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                        style="padding: 12px 20px"
                      >
                        <span
                          class="flex items-center"
                          @click="disablePostComment(post, true)"
                        >
                          <FlagIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Enabled Comments On This Post
                        </span>
                      </AppDropdownItem>
                      <AppDropdownItem
                        v-if="
                          post.user_id === currentUserId &&
                          post.comments_status === '0'
                        "
                        class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                        style="padding: 12px 20px"
                      >
                        <span
                          class="flex items-center"
                          @click="disablePostComment(post, false)"
                        >
                          <BanIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Disabled Comments On This Post
                        </span>
                      </AppDropdownItem>
                    </AppDropdownContent>
                  </AppDropdown>
                </div>
              </div>
            </div>

            <!-- Post details -->
            <div v-if="post.type !== 'ads'" class="">
              <h3
                class="flex mt-2 text-sm font-bold text-gray-900 sm:text-base"
              >
                {{ post.postTitle }}
              </h3>
              <!-- :class="{ flex: countViewMoreContent(post) }" -->
              <div class="relative pb-4">
                <vue-read-more-smooth :lines="3">
                  <p
                    class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                    v-html="getHtmlContent(post.postText)"
                  ></p>
                </vue-read-more-smooth>
              </div>

              <!-- Job Post Card details with video or Image -->
              <div
                class="mt-4 cursor-pointer"
                v-if="post.multi_image_post != 0 && post.share_user_id <= 0"
                v-b-modal:[`view-modal-${post.posts_id}`]
                @click="currentPostModal(post)"
              >
                <img
                  :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${post.multi_image}.jpg`"
                  class="w-full transition-all duration-500 rounded-md"
                  alt=""
                />
                <div class="relative grid" v-if="post.multi_image_post == 3">
                  <div
                    v-for="(postImg, index) in post.multi_image.split(',')"
                    class="cursor-pointer"
                    :key="index"
                  >
                    <img
                      v-if="index == 2 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                  </div>
                </div>
                <div
                  class="relative grid grid-cols-2 gap-2 group"
                  v-if="post.multi_image_post == 3"
                >
                  <div
                    v-for="(postImg, index) in post.multi_image.split(',')"
                    class="cursor-pointer"
                    :key="index"
                  >
                    <img
                      v-if="index == 0 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                    <img
                      v-if="index == 1 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                  </div>
                </div>
                <div
                  class="relative grid grid-cols-2 gap-2 group"
                  v-if="post.multi_image_post == 2"
                >
                  <div
                    v-for="(postImg, index) in post.multi_image.split(',')"
                    class="cursor-pointer"
                    :key="index"
                  >
                    <img
                      v-if="index == 0 && post.multi_image_post == 2"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                    <img
                      v-if="index == 1 && post.multi_image_post == 2"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                  </div>
                </div>

                <div
                  class="relative grid grid-cols-2 gap-2 group"
                  v-if="post.multi_image_post > 3"
                >
                  <div
                    v-for="(postImg, index) in post.multi_image.split(',')"
                    class="cursor-pointer"
                    :key="index"
                  >
                    <img
                      v-if="index == 0 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                    <img
                      v-if="index == 1 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                    <img
                      v-if="index == 2 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />

                    <img
                      v-if="index <= 3 && post.multi_image_post > 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                  </div>
                  <div
                    v-if="post.multi_image_post >= 5"
                    style="width: 50%"
                    class="absolute right-0 h-40 mt-2 transition-all duration-500 ease-in-out bg-black bg-opacity-50 rounded-md shadow-sm cursor-pointer xl:h-72 top-40 xl:top-72 w-96 group-hover:bg-primary-500 group-hover:opacity-50"
                  >
                    <div
                      class="absolute flex items-center justify-center text-center inset-14 group-hover:text-primary-500"
                    >
                      <h4
                        class="text-base font-bold text-white"
                        style="padding: 5px"
                      >
                        <!-- See More -->
                        <span
                          class="flex items-center justify-center pl-4 text-4xl font-bold text-white group-hover:font-bold group-hover:text-primary-500"
                        >
                          {{ post.multi_image_post - 4 }}

                          <span
                            class="text-4xl font-medium text-white group-hover:text-primary-500"
                          >
                            +
                          </span>
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Share Post details Container   -->
              <div
                v-if="post.share_user_id > 0"
                class="px-4 py-4 pb-5 mt-4 border border-gray-300 rounded-md"
              >
                <!--Shared by User details  -->
                <div class="flex space-x-4">
                  <div class="px-1">
                    <img
                      v-if="post.share_profile_picture_path"
                      :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${post.share_profile_picture_path}`"
                      class="w-12 h-12 rounded-full shadow-md cursor-pointer hover:shadow-lg"
                      alt=""
                    />
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-900">
                      {{ post.share_first_name }}
                      {{ post.share_last_name }}
                    </h3>
                    <p
                      style="padding: 0"
                      class="pt-0 text-sm font-normal text-gray-500"
                    >
                      {{ post.share_time }}
                    </p>
                  </div>
                </div>

                <!-- Shared Post details  -->
                <div>
                  <h6 class="text-base font-semibold text-gray-900">
                    {{ post.sharePostTitle }}
                  </h6>

                  <div class="relative pb-4">
                    <vue-read-more-smooth :lines="3">
                      <p
                        class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                        v-html="getHtmlContent(post.sharePostText)"
                      ></p>
                    </vue-read-more-smooth>
                  </div>

                  <div
                    class="mt-4 cursor-pointer"
                     v-if="post.multi_image_post != 0 "
                    v-b-modal:[`view-modal-${post.posts_id}`]
                    @click="currentPostModal(post)"
                  >
                    <img 
                      class="w-full h-auto border rounded-md"
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${post.multi_image}.jpg`"
                      alt=""
                    />
                    <div class="relative grid" v-if="post.multi_image_post == 3">
                      <div
                        v-for="(postImg, index) in post.multi_image.split(',')"
                        class="cursor-pointer"
                        :key="index"
                      >
                        <img
                          v-if="index == 2 && post.multi_image_post == 3"
                          class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                          alt=""
                          :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                          @click="currentImage(index)"
                        />
                      </div>
                    </div> 
                    <div
                      class="relative grid grid-cols-2 gap-2 mt-2 group"
                       v-if="post.multi_image_post == 3"
                    >
                        <div
                          v-for="(postImg, index) in post.multi_image.split(',')"
                          class="cursor-pointer"
                          :key="index"
                        >
                          <img
                            v-if="index == 0 && post.multi_image_post == 3"
                            class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                            alt=""
                            :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                            @click="currentImage(index)"
                          />
                          <img
                            v-if="index == 1 && post.multi_image_post == 3"
                            class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                            alt=""
                            :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                            @click="currentImage(index)"
                          />
                          
                        </div>
                      </div>

                      <div
                  class="relative grid grid-cols-2 gap-2 group"
                  v-if="post.multi_image_post == 2"
                >
                  <div
                    v-for="(postImg, index) in post.multi_image.split(',')"
                    class="cursor-pointer"
                    :key="index"
                  >
                    <img
                      v-if="index == 0 && post.multi_image_post == 2"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                    <img
                      v-if="index == 1 && post.multi_image_post == 2"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                  </div>
                </div>

                <div
                  class="relative grid grid-cols-2 gap-2 group"
                  v-if="post.multi_image_post > 3"
                >
                  <div
                    v-for="(postImg, index) in post.multi_image.split(',')"
                    class="cursor-pointer"
                    :key="index"
                  >
                    <img
                      v-if="index == 0 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                    <img
                      v-if="index == 1 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                    <img
                      v-if="index == 2 && post.multi_image_post == 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />

                    <img
                      v-if="index <= 3 && post.multi_image_post > 3"
                      class="w-full h-40 border border-gray-400 rounded-md shadow-sm xl:h-72 hover:shadow-lg"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                      @click="currentImage(index)"
                    />
                  </div>
                      <div
                        v-if="post.multi_image_post >= 5"
                        style="width: 50%"
                        class="absolute right-0 h-40 mt-2 transition-all duration-500 ease-in-out bg-black bg-opacity-50 rounded-md shadow-sm cursor-pointer xl:h-72 top-40 xl:top-72 w-96 group-hover:bg-primary-500 group-hover:opacity-50"
                      >
                        <div
                          class="absolute flex items-center justify-center text-center inset-14 group-hover:text-primary-500"
                        >
                          <h4
                            class="text-base font-bold text-white"
                            style="padding: 5px"
                          >
                            <!-- See More -->
                            <span
                              class="flex items-center justify-center pl-4 text-4xl font-bold text-white group-hover:font-bold group-hover:text-primary-500"
                            >
                              {{ post.multi_image_post - 4 }}

                              <span
                                class="text-4xl font-medium text-white group-hover:text-primary-500"
                              >
                                +
                              </span>
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Current User Likes & Comment Count -->
              <div class="flex items-center justify-between mt-3">
                <label
                  v-if="post.likeCount >= '1'"
                  for=""
                  class="flex items-center text-sm cursor-pointer hover:text-primary-500"
                >
                  <ThumbUpIcon
                    class="w-5 h-5 p-1 mr-2 text-white bg-blue-500 rounded-full"
                  />
                  <span>
                    {{ post.likeCount }}
                  </span>
                </label>

                <div
                  class="flex items-center justify-end space-x-4 text-sm font-normal text-gray-500 cursor-pointer hover:text-primary-500"
                >
                  <span
                    v-if="post.commentCount >= 1"
                    class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                  >
                    {{ post.commentCount }}
                    Comment
                  </span>
                </div>
              </div>

              <hr class="mt-3 text-gray-300" />

              <!-- Resources & Tools -->
              <div class="flex items-center justify-between mt-2">
                <div
                  class="px-2 py-2 transition-all duration-500 rounded-md cursor-pointer group hover:bg-gray-200 hover:rouned-md hover:px-4 hover:py-2"
                >
                  <label
                    for=""
                    @click="addLikes(post.posts_id)"
                    class="flex items-center text-sm font-medium text-gray-500 cursor-pointer group hover:text-primary-500 lg:text-base"
                  >
                    <ThumbUpIcon
                      v-if="!post_ids.find((v) => v == post.posts_id)"
                      class="w-5 h-5 mr-2 text-gray-400 cursor-pointer lg:mr-3 hover:text-gray-400"
                    />
                    <LikeIcon
                      v-else
                      class="mr-2 text-blue-400 cursor-pointer lg:mr-3 group-hover:text-blue-500"
                    />
                    Like
                  </label>
                </div>

                <div
                  v-if="post.comments_status === '0'"
                  class="px-2 py-2 transition-all duration-500 rounded-md cursor-pointer group hover:bg-gray-200 hover:rouned-md hover:px-4 hover:py-2"
                >
                  <label
                    for=""
                    class="flex items-center text-sm font-medium text-gray-500 cursor-pointer group hover:text-primary-500 lg:text-base"
                  >
                    <ChatIcon
                      class="p-1 mr-1 text-gray-400 cursor-pointer w-7 h-7 lg:mr-2 group-hover:text-primary-500"
                    />
                    Comment
                  </label>
                </div>

                <div
                  class="px-2 py-2 transition-all duration-500 rounded-md cursor-pointer group hover:bg-gray-200 hover:rouned-md hover:px-4 hover:py-2"
                >
                  <label
                    for=""
                    class="flex items-center text-sm font-medium text-gray-500 cursor-pointer group hover:text-primary-500 lg:text-base"
                    @click="showSharePostModal(post)"
                    v-b-modal.share-post-modal
                  >
                    <ShareIcon
                      class="w-4 h-4 mr-2 text-gray-400 cursor-pointer lg:mr-3 group-hover:text-primary-500"
                    />
                    Share
                  </label>
                </div>
              </div>

              <!-- Add Current User Comment -->
              <div
                v-if="post.comments_status === '0'"
                class="flex mt-4 space-x-2 items-normal"
              >
                <div class="w-16">
                  <img
                    v-if="currentUser.profile_picture_path"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                    class="inline-block w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>

                <div class="w-full mt-1 sm:mt-0">
                  <div class="rounded-3xl">
                    <textarea
                      v-autogrow
                      type="text"
                      v-model="post.commentText"
                      name="currentComment"
                      id="currentComment"
                      autocomplete="currentComment"
                      class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-sm txta"
                    >
                    </textarea>
                    <span
                      v-if="false"
                      class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                    >
                      <EmojiHappyIcon
                        class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                      />
                      <ImageIcon
                        class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-right 005">
                <b-button
                  class="mt-2 btn btn-theme btn-xs"
                  @click="addCurrentUserComment(post)"
                  v-if="post.commentText"
                >
                  Post
                </b-button>
              </div>

              <!-- Comments Filters -->
              <div v-if="post.comments" class="w-full mt-3">
                <AppDropdown>
                  <template slot="toggler">
                    <div class="flex items-center justify-between">
                      <h6
                        class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                      >
                        Most relevant
                      </h6>
                      <ChevronDownIcon
                        class="w-8 h-8 p-2 -mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                      />
                    </div>
                  </template>
                  <AppDropdownContent
                    dropdownwidth="w-100"
                    v-if="post.commentCount >= 1"
                  >
                    <AppDropdownItem
                      style="padding: 2px 20px"
                      class="flex transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer group hover:bg-gray-200"
                    >
                      <SparkleIcon
                        class="w-5 h-5 mt-2.5 mr-3 text-gray-500 group-hover:text-primary-500"
                      />
                      <div class="" style="margin-top: 8px">
                        <h6
                          class="text-sm font-semibold text-gray-600 group-hover:text-primary-500"
                        >
                          Most relevant
                        </h6>
                        <p
                          class="text-xs font-normal text-gray-500 group-hover:text-primary-500"
                        >
                          See the most relevant comments
                        </p>
                      </div>
                    </AppDropdownItem>
                    <AppDropdownItem
                      style="padding: 2px 20px"
                      class="flex transition-all duration-500 ease-in cursor-pointer hover:bg-gray-200 group"
                    >
                      <ClockIcon
                        class="w-5 h-5 mt-2.5 mr-3 text-gray-500 group-hover:text-primary-500"
                      />
                      <div class="" style="margin-top: 8px">
                        <h6
                          class="text-sm font-semibold text-gray-600 group-hover:text-primary-500"
                        >
                          Most recents
                        </h6>
                        <p
                          class="text-xs font-normal text-gray-500 group-hover:text-primary-500"
                        >
                          See all the commensts, the most recent comments are
                          first.
                        </p>
                      </div>
                    </AppDropdownItem>
                  </AppDropdownContent>
                </AppDropdown>
              </div>

              <!--Current User Comments activity -->
              <div v-if="post.comments_status === '0'">
                <div v-for="(comment, index) in post.comments" :key="index">
                  <div class="flex mt-3 space-x-2">
                    <div class="w-12">
                      <img
                        v-if="comment.profile_picture_path"
                        :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${comment.profile_picture_path}`"
                        class="w-12 h-12 rounded-full shadow-md"
                        alt=""
                      />
                      <img
                        v-else
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        class="w-12 h-12 rounded-full shadow-md"
                        alt=""
                      />
                    </div>

                    <div
                      style="padding: 10px 15px 20px"
                      class="w-full bg-gray-200 rounded-md sm:max-w-xl comment"
                    >
                      <div class="flex items-center justify-between">
                        <h3
                          class="text-sm font-bold text-gray-900 cursor-pointer hover:text-primary-500 sm:text-base"
                        >
                          {{ comment.first_name }}{{ comment.last_name }}
                        </h3>

                        <!--Current Comment Social actions -->
                        <AppDropdown>
                          <template slot="toggler">
                            <DotsHorizontalIcon
                              class="w-8 h-8 p-2 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                            />
                          </template>
                          <AppDropdownContent dropdownwidth="w-64">
                            <AppDropdownItem
                              class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                class="flex items-center"
                                @click="copyLinkToComment(post, comment)"
                              >
                                <LinkIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Copy Link to Comment
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="comment.user_id === currentUserId"
                              class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                class="flex items-center"
                                @click="editComment(comment.comments_id)"
                              >
                                <PencilIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Edit
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="comment.user_id === currentUserId"
                              class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                class="flex items-center"
                                @click="
                                  deletePostComment(comment, post.posts_id)
                                "
                              >
                                <TrashIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Delete
                              </span>
                            </AppDropdownItem>
                            <AppDropdownItem
                              v-if="comment.user_id != currentUserId"
                              class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                              style="padding: 8px 14px"
                            >
                              <span
                                class="flex items-center"
                                v-b-modal:[`report-comment-modal-${comment.comments_id}`]
                                @click="reportComment(comment.comments_id)"
                              >
                                <FlagIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />

                                Report Comment
                              </span>
                            </AppDropdownItem>
                          </AppDropdownContent>
                        </AppDropdown>
                      </div>

                      <!-- View More comments content -->
                      <div class="">
                        <div class="relative pb-4">
                          <vue-read-more-smooth :lines="3">
                            <p
                              class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                              v-html="getHtmlContent(comment.text)"
                            ></p>
                          </vue-read-more-smooth>
                        </div>

                        <!-- Edit comment input -->
                        <div
                          v-if="
                            comment_ids.find((v) => v == comment.comments_id)
                          "
                          class="flex mt-1 bg-white border rounded-3xl"
                        >
                          <textarea
                            v-autogrow
                            type="text"
                            v-model="comment.text"
                            name="currentComment"
                            id="currentComment"
                            autocomplete="currentComment"
                            class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-sm txta"
                          >
                          </textarea>

                          <span
                            v-if="false"
                            class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                          >
                            <EmojiHappyIcon
                              class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                            />
                            <ImageIcon
                              class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                            />
                          </span>
                        </div>
                        <div class="text-right 005">
                          <b-button
                            class="mt-2 btn btn-theme btn-xs"
                            @click="
                              editPostComment(
                                comment,
                                comment.text,
                                post.posts_id
                              )
                            "
                            v-if="
                              comment_ids.find(
                                (v) => v == comment.comments_id
                              ) && comment.text
                            "
                          >
                            Post
                          </b-button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Users Likes Activity -->
                  <div class="mt-3 lg:max-w-sm pl-14 pl-sm-0">
                    <label
                      for=""
                      class="flex items-center justify-start space-x-3 cursor-pointer"
                    >
                      <span
                        @click="addCommentsLike(comment.comments_id)"
                        :class="[
                          {
                            'text-primary-500 bg-gray-200 rounded-md':
                              replyComment_ids.find(
                                (_id) => _id === comment.comments_id
                              ),
                          },
                          `p-1 text-xs font-normal text-gray-500 rounded-md hover:bg-gray-200 hover:rounded-md hover:text-primary-500`,
                        ]"
                      >
                        Like
                      </span>
                      <span class="ml-2 text-xs font-bold text-gray-500">
                        .
                      </span>
                      <span
                        class="flex items-center text-xs font-normal leading-normal text-gray-500 cursor-pointer hover:text-primary-500"
                      >
                        <ThumbUpIcon
                          class="w-5 h-5 p-1 mr-2 text-white bg-blue-400 rounded-full"
                        />
                        <span
                          v-if="
                            replyComment_ids.find(
                              (_id) => _id === comment.comments_id
                            )
                          "
                        >
                          {{ getCommentLikesCounts(comment) }}
                        </span>
                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          |
                        </span>
                        <span
                          @click="showReplyInput(comment.comments_id)"
                          class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                        >
                          Reply
                        </span>
                        <span
                          v-if="comment.replies"
                          class="ml-2 mr-2 text-xs font-bold text-gray-500"
                        >
                          .
                        </span>
                        <span
                          v-if="comment.replies"
                          class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                          @click="showMoreCommentReply(comment.comments_id)"
                        >
                          {{ comment.commentReplyCount }} Reply
                        </span>
                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          .
                        </span>
                        <span
                          class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                        >
                          {{ comment.time }}
                        </span>
                      </span>
                    </label>
                  </div>

                  <!-- List of replied comments for current post -->
                  <div
                    class="w-full xl:pl-28 sm:pr-2"
                    v-if="isMoreCommentreply === comment.comments_id"
                  >
                    <div
                      v-for="(reply, replyIndex) in comment.replies"
                      :key="replyIndex"
                      class="mt-4 mb-8"
                    >
                      <div class="flex w-full space-x-2">
                        <img
                          v-if="reply.profile_picture_path"
                          :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${reply.profile_picture_path}`"
                          class="w-12 h-12 rounded-full shadow-md"
                          alt=""
                        />
                        <img
                          v-else
                          src="https://images.unsplash.com/photo-147209964 mt-5785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          class="w-10 h-10 rounded-full shadow-md cursor-pointer"
                          alt=""
                        />

                        <div
                          style="padding: 2px 18px"
                          class="flex items-center space-x-4 bg-gray-200 rounded-md w-96"
                        >
                          <div class="relative w-full mt-2 mb-2">
                            <div class="flex">
                              <div class="w-96">
                                <!-- comments User name -->
                                <h6
                                  class="text-base font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                                >
                                  {{ reply.first_name }}{{ reply.last_name }}
                                </h6>

                                <!-- View More comments Reply section -->
                                <div class="">
                                  <div class="relative pb-4">
                                    <vue-read-more-smooth :lines="3">
                                      <p
                                        class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                                        v-html="getHtmlContent(reply.text)"
                                      ></p>
                                    </vue-read-more-smooth>
                                  </div>
                                </div>

                                <!-- Comment Reply timing  -->
                                <p
                                  v-if="reply.time"
                                  class="text-xs font-medium text-gray-400"
                                >
                                  {{ reply.time }}
                                </p>
                              </div>

                              <!-- Comments Reply Dropdown -->

                              <AppDropdown
                                class="absolute right-0 flex justify-end mt-2"
                              >
                                <template slot="toggler">
                                  <DotsHorizontalIcon
                                    class="w-8 h-8 p-2 -mt-4 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                                  />
                                </template>
                                <AppDropdownContent
                                  dropdownMargin=""
                                  dropdownwidth="w-72"
                                >
                                  <AppDropdownItem
                                    class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                    style="padding: 6px 10px"
                                  >
                                    <span
                                      class="flex items-center"
                                      @click="copyLinkToComment(post, comment)"
                                    >
                                      <LinkIcon
                                        class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                      />
                                      Copy Link to Comment
                                    </span>
                                  </AppDropdownItem>
                                  <AppDropdownItem
                                    v-if="reply.user_id === currentUserId"
                                    class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                    style="padding: 6px 10px"
                                  >
                                    <span
                                      class="flex items-center"
                                      @click="
                                        editCommentReply(
                                          reply.comment_replies_id
                                        )
                                      "
                                    >
                                      <PencilIcon
                                        class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                      />
                                      Edit
                                    </span>
                                  </AppDropdownItem>
                                  <AppDropdownItem
                                    v-if="reply.user_id === currentUserId"
                                    class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                    style="padding: 6px 10px"
                                  >
                                    <span
                                      class="flex items-center"
                                      @click="
                                        deletePostCommentReply(
                                          reply,
                                          post.posts_id,
                                          comment.comments_id
                                        )
                                      "
                                    >
                                      <TrashIcon
                                        class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                      />
                                      Delete
                                    </span>
                                  </AppDropdownItem>
                                  <AppDropdownItem
                                    v-if="reply.user_id != currentUserId"
                                    class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                    style="padding: 6px 10px"
                                  >
                                    <span
                                      v-b-modal:[`report-comment-modal-${comment.comments_id}`]
                                      class="flex items-center"
                                      @click="
                                        reportComment(comment.comments_id)
                                      "
                                    >
                                      <FlagIcon
                                        class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                      />

                                      Report Comment
                                    </span>
                                  </AppDropdownItem>
                                </AppDropdownContent>
                              </AppDropdown>
                            </div>

                            <!-- Edit comment reply input -->
                            <div
                              v-if="
                                comment_reply_ids.find(
                                  (v) => v == reply.comment_replies_id
                                )
                              "
                              class="mb-2 bg-white rounded-3xl"
                            >
                              <div class="rounded-3xl">
                                <textarea
                                  v-autogrow
                                  type="text"
                                  v-model="reply.text"
                                  name="currentComment"
                                  id="currentComment"
                                  autocomplete="currentComment"
                                  class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-sm txta"
                                >
                                </textarea>
                              </div>
                              <span
                                v-if="false"
                                class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                              >
                                <EmojiHappyIcon
                                  class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                                />
                                <ImageIcon
                                  class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                                />
                              </span>
                            </div>
                            <div class="text-right 005">
                              <b-button
                                class="mt-2 btn btn-theme btn-xs"
                                @click="
                                  editPostCommentReply(
                                    reply,
                                    reply.text,
                                    post.posts_id,
                                    reply.comments_id
                                  )
                                "
                                v-if="
                                  comment_reply_ids.find(
                                    (v) => v == reply.comment_replies_id
                                  ) && reply.text.length
                                "
                              >
                                Post
                              </b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Add comments Reply  -->
                  <div
                    class="mt-4"
                    v-if="isShowReplyInput == comment.comments_id"
                  >
                    <div class="flex items-center lg:pl-16">
                      <div class="w-16">
                        <img
                          v-if="currentUser.profile_picture_path"
                          :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                          class="w-12 h-12 rounded-full shadow-md"
                          alt=""
                        />
                        <img
                          v-else
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          class="w-12 h-12 rounded-full shadow-md"
                          alt=""
                        />
                      </div>

                      <div class="w-full mt-1 sm:mt-0">
                        <div class="flex border rounded-3xl">
                          <textarea
                            v-autogrow
                            type="text"
                            placeholder="comment here"
                            v-model="comment.replyText"
                            class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl sm:text-sm reptext"
                          >
                          </textarea>
                          <span
                            v-if="false"
                            class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                          >
                            <EmojiHappyIcon
                              class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                            />
                            <ImageIcon
                              class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-right 006">
                      <b-button
                        class="mt-2 btn btn-theme btn-xs"
                        @click="
                          addCommentReplyData(
                            comment,
                            comment.replyText,
                            post.posts_id
                          )
                        "
                        v-if="comment.replyText"
                        >Post</b-button
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Load More comment Label -->
              <div v-if="post.commentCount > 1">
                <label
                  for=""
                  v-if="
                    !isShowLoadMoreComments.find((_v) => _v == post.posts_id) &&
                    post.commentCount > 0
                  "
                  @click="loadMoreComments(post.posts_id)"
                  class="p-1.5 mt-4 text-sm font-medium text-gray-900 rounded-md cursor-pointer hover:bg-gray-200 hover:rounded-md hover:text-primary-500"
                >
                  Load more comments 1
                </label>

                <label
                  v-else-if="post.commentCount != 0"
                  for=""
                  class="mt-4 text-sm font-medium text-gray-900 cursor-pointer hover:text-primary-500"
                >
                  <span v-if="post.commentCount == 0">
                    View {{ post.commentCount }} comments</span
                  >

                  <span v-else @click="loadLessComments(post.posts_id)">
                    View Less comments 1
                  </span>
                </label>
              </div>

              <!-- Load More comments Section -->
              <div
                v-if="
                  isMoreComments === post.comments_id &&
                  post.comments_status === '0'
                "
              >
                <div
                  v-for="(comment, index) in post.comments"
                  class="hidden"
                  :key="index"
                >
                  <div>
                    <div class="flex items-center mt-3 space-x-2">
                      <div class="w-12 -mt-28">
                        <img
                          v-if="comment.profile_picture_path"
                          :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${comment.profile_picture_path}`"
                          class="w-10 h-10 rounded-full"
                          alt=""
                        />
                        <img
                          v-else
                          src="../../assets/img/avatar.jpeg"
                          class="w-10 h-10 rounded-full"
                          alt=""
                        />
                      </div>

                      <div class="w-full px-3 py-2 bg-gray-200 rounded-md">
                        <div class="flex items-center justify-between">
                          <h3
                            class="text-sm font-bold text-gray-900 sm:text-base"
                          >
                            {{ comment.first_name }}
                            {{ comment.last_name }}
                          </h3>

                          <!--Current Comment Social actions -->
                          <AppDropdown>
                            <template slot="toggler">
                              <DotsHorizontalIcon
                                class="w-8 h-8 p-2 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                              />
                            </template>
                            <AppDropdownContent dropdownwidth="w-64">
                              <AppDropdownItem
                                class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <span
                                  class="flex items-center"
                                  @click="copyLinkToComment(post, comment)"
                                >
                                  <LinkIcon
                                    class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                  />
                                  Copy Link to Comment
                                </span>
                              </AppDropdownItem>
                              <AppDropdownItem
                                v-if="comment.user_id === currentUserId"
                                class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <span
                                  class="flex items-center"
                                  @click="editComment(comment.comments_id)"
                                >
                                  <PencilIcon
                                    class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                  />
                                  Edit
                                </span>
                              </AppDropdownItem>
                              <AppDropdownItem
                                v-if="comment.user_id === currentUserId"
                                class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <span
                                  class="flex items-center"
                                  @click="
                                    deletePostComment(comment, post.posts_id)
                                  "
                                >
                                  <TrashIcon
                                    class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                  />
                                  Delete
                                </span>
                              </AppDropdownItem>
                              <AppDropdownItem
                                v-if="comment.user_id != currentUserId"
                                class="text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <span
                                  class="flex items-center"
                                  v-b-modal:[`report-comment-modal-${comment.comments_id}`]
                                  @click="reportComment(comment.comments_id)"
                                >
                                  <FlagIcon
                                    class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                  />

                                  Report Comment
                                </span>
                              </AppDropdownItem>
                            </AppDropdownContent>
                          </AppDropdown>
                        </div>

                        <!-- View More comments section -->
                        <div class="">
                          <div class="relative w-full pb-4">
                            <vue-read-more-smooth :lines="3">
                              <p
                                class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                                v-html="getHtmlContent(comment.text)"
                              ></p>
                            </vue-read-more-smooth>
                          </div>
                          <!-- Edit comment input -->
                          <div
                            v-if="
                              comment_ids.find((v) => v == comment.comments_id)
                            "
                            class="flex mt-1 bg-white border rounded-3xl"
                          >
                            <textarea
                              v-autogrow
                              type="text"
                              placeholder="comment here"
                              v-model="commemnt.text"
                              class="block w-full px-4 py-2 border-r-0 border-gray-300 border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
                            ></textarea>
                            <span
                              v-if="false"
                              class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                            >
                              <EmojiHappyIcon
                                class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                              />
                              <ImageIcon
                                class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                              />
                            </span>
                          </div>
                          <div class="text-right 005">
                            <b-button
                              class="mt-2 btn btn-theme btn-xs"
                              @click="
                                editPostComment(
                                  comment,
                                  comment.text,
                                  post.posts_id
                                )
                              "
                              v-if="commemnt.text"
                              >Post</b-button
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Load more Users Likes Activity Content-->
                    <div class="mt-3 lg:max-w-sm pl-14 pl-sm-0">
                      <label
                        for=""
                        class="flex items-center justify-start space-x-3 cursor-pointer"
                      >
                        <span
                          @click="addCommentsLike(comment.comments_id)"
                          :class="[
                            {
                              'text-primary-500 bg-gray-200 rounded-md':
                                replyComment_ids.find(
                                  (_id) => _id === comment.comments_id
                                ),
                            },
                            `p-1 text-xs font-normal text-gray-500 rounded-md hover:bg-gray-200 hover:rounded-md hover:text-primary-500`,
                          ]"
                        >
                          Like
                        </span>
                        <span class="ml-2 text-xs font-bold text-gray-500">
                          .
                        </span>
                        <span
                          class="flex items-center text-xs font-normal leading-normal text-gray-500 cursor-pointer hover:text-primary-500"
                        >
                          <ThumbUpIcon
                            class="w-5 h-5 p-1 mr-2 text-white bg-blue-400 rounded-full"
                          />
                          <span
                            v-if="
                              replyComment_ids.find(
                                (_id) => _id === comment.comments_id
                              )
                            "
                          >
                            {{ getCommentLikesCounts(comment) }}
                          </span>
                          <span
                            class="ml-2 mr-2 text-xs font-bold text-gray-500"
                          >
                            |
                          </span>
                          <span
                            @click="showReplyInput(comment.comments_id)"
                            class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                          >
                            Reply
                          </span>
                          <span
                            v-if="comment.replies"
                            class="ml-2 mr-2 text-xs font-bold text-gray-500"
                          >
                            .
                          </span>
                          <span
                            v-if="comment.replies"
                            class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                            @click="showMoreCommentReply(comment.comments_id)"
                          >
                            {{ comment.commentReplyCount }} Reply
                          </span>
                          <span
                            class="ml-2 mr-2 text-xs font-bold text-gray-500"
                          >
                            .
                          </span>
                          <span
                            class="p-1 rounded-md hover:bg-gray-200 hover:rounded-md"
                          >
                            {{ comment.time }}
                          </span>
                        </span>
                      </label>
                    </div>

                    <!-- List of replied comments for current post -->
                    <div
                      class="w-full xl:pl-28 sm:pr-2"
                      v-if="isMoreCommentreply === comment.comments_id"
                    >
                      <div
                        v-for="(reply, replyIndex) in comment.replies"
                        :key="replyIndex"
                        class="mt-4 mb-8"
                      >
                        <div class="flex w-full space-x-2">
                          <img
                            v-if="reply.profile_picture_path"
                            :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${reply.profile_picture_path}`"
                            class="w-12 h-12 rounded-full shadow-md"
                            alt=""
                          />
                          <img
                            v-else
                            src="https://images.unsplash.com/photo-147209964 mt-5785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            class="w-10 h-10 rounded-full shadow-md cursor-pointer"
                            alt=""
                          />

                          <div
                            style="padding: 2px 18px"
                            class="flex items-center space-x-4 bg-gray-200 rounded-md w-96"
                          >
                            <div class="relative w-full mt-2 mb-2">
                              <div class="flex">
                                <div class="w-96">
                                  <!-- comments User name -->
                                  <h6
                                    class="text-base font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                                  >
                                    {{ reply.first_name }}{{ reply.last_name }}
                                  </h6>

                                  <!-- View More comments Reply section -->
                                  <div class="">
                                    <div class="relative w-full pb-4">
                                      <vue-read-more-smooth :lines="3">
                                        <p
                                          class="w-full mb-0 text-sm font-medium text-gray-500 break-words"
                                          v-html="getHtmlContent(reply.text)"
                                        ></p>
                                      </vue-read-more-smooth>
                                    </div>
                                  </div>

                                  <!-- Comment Reply timing  -->
                                  <p
                                    v-if="reply.time"
                                    class="text-xs font-medium text-gray-400"
                                  >
                                    {{ reply.time }}
                                  </p>
                                </div>
                                <!-- Comments Reply Dropdown -->

                                <AppDropdown
                                  class="absolute right-0 flex justify-end mt-2"
                                >
                                  <template slot="toggler">
                                    <DotsHorizontalIcon
                                      class="w-8 h-8 p-2 -mt-4 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                                    />
                                  </template>
                                  <AppDropdownContent
                                    dropdownMargin=""
                                    dropdownwidth="w-72"
                                  >
                                    <AppDropdownItem
                                      class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                      style="padding: 6px 10px"
                                    >
                                      <span
                                        class="flex items-center"
                                        @click="
                                          copyLinkToComment(post, comment)
                                        "
                                      >
                                        <LinkIcon
                                          class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                        />
                                        Copy Link to Comment
                                      </span>
                                    </AppDropdownItem>
                                    <AppDropdownItem
                                      v-if="reply.user_id === currentUserId"
                                      class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                      style="padding: 6px 10px"
                                    >
                                      <span
                                        class="flex items-center"
                                        @click="
                                          editCommentReply(
                                            reply.comment_replies_id
                                          )
                                        "
                                      >
                                        <PencilIcon
                                          class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                        />
                                        Edit
                                      </span>
                                    </AppDropdownItem>
                                    <AppDropdownItem
                                      v-if="reply.user_id === currentUserId"
                                      class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                      style="padding: 6px 10px"
                                    >
                                      <span
                                        class="flex items-center"
                                        @click="
                                          deletePostCommentReply(
                                            reply,
                                            post.posts_id,
                                            comment.comments_id
                                          )
                                        "
                                      >
                                        <TrashIcon
                                          class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                        />
                                        Delete
                                      </span>
                                    </AppDropdownItem>
                                    <AppDropdownItem
                                      v-if="reply.user_id != currentUserId"
                                      class="text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                      style="padding: 6px 10px"
                                    >
                                      <span
                                        v-b-modal:[`report-comment-modal-${comment.comments_id}`]
                                        class="flex items-center"
                                        @click="
                                          reportComment(comment.comments_id)
                                        "
                                      >
                                        <FlagIcon
                                          class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                        />

                                        Report Comment
                                      </span>
                                    </AppDropdownItem>
                                  </AppDropdownContent>
                                </AppDropdown>
                              </div>

                              <!-- Edit comment reply input -->
                              <div
                                v-if="
                                  comment_reply_ids.find(
                                    (v) => v == reply.comment_replies_id
                                  )
                                "
                                class="flex mb-2 bg-white border rounded-3xl"
                              >
                                <textarea
                                  v-autogrow
                                  type="text"
                                  placeholder="comment here"
                                  v-model="reply.text"
                                  class="block w-full px-4 py-2 border-r-0 border-gray-300 border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
                                ></textarea>
                                <span
                                  v-if="false"
                                  class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                                >
                                  <EmojiHappyIcon
                                    class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                                  />
                                  <ImageIcon
                                    class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                                  />
                                </span>
                              </div>
                              <div class="text-right 005">
                                <b-button
                                  class="mt-2 btn btn-theme btn-xs"
                                  @click="
                                    editPostCommentReply(
                                      reply,
                                      reply.text,
                                      post.posts_id,
                                      reply.comments_id
                                    )
                                  "
                                  v-if="reply.text"
                                  >Post</b-button
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Add comments Reply  -->
                    <div
                      class="mt-4"
                      v-if="isShowReplyInput == comment.comments_id"
                    >
                      <div class="flex items-center lg:pl-16">
                        <div class="w-16">
                          <img
                            v-if="currentUser.profile_picture_path"
                            :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                            class="w-12 h-12 rounded-full shadow-md"
                            alt=""
                          />
                          <img
                            v-else
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            class="w-12 h-12 rounded-full shadow-md"
                            alt=""
                          />
                        </div>

                        <div class="w-full mt-1 sm:mt-0">
                          <div class="flex border rounded-3xl">
                            <textarea
                              v-autogrow
                              type="text"
                              placeholder="comment here"
                              v-model="comment.replyText"
                              class="block w-full px-4 py-2 border-r-0 border-gray-300 border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
                            ></textarea>
                            <span
                              v-if="false"
                              class="inline-flex items-center px-3 py-2 text-gray-500 border-gray-300 border-r-1 rounded-r-3xl sm:text-sm"
                            >
                              <EmojiHappyIcon
                                class="w-4 h-4 mr-5 text-gray-400 cursor-pointer hover:text-primary-500"
                              />
                              <ImageIcon
                                class="w-3.5 h-3.5 mr-3 text-gray-400 cursor-pointer hover:text-primary-500"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="text-right 002">
                        <b-button
                          class="mt-2 btn btn-theme btn-xs"
                          @click="
                            addCommentReplyData(
                              comment,
                              comment.replyText,
                              post.posts_id
                            )
                          "
                          v-if="comment.replyText"
                          >Post</b-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Advertisement Slider  -->
            <Ads :advertisements="advertisements" v-if="post.type === 'ads'" />
          </div>
        </div>

        <!-- Placeholder Content -->
        <div
          class="px-4 py-2 mt-4 bg-white border border-gray-400 rounded-md shadow-sm"
          v-if="postLength"
        >
          <content-placeholders class="flex">
            <content-placeholders-heading
              :img="true"
              class="vue-content-placeholders-heading__img"
            />
            <div class="mt-2">
              <content-placeholders-text
                :lines="1"
                class="mt-2 vue-content-placeholders-text w-60"
              />
              <content-placeholders-text
                :lines="1"
                class="vue-content-placeholders-text w-80"
              />
            </div>
          </content-placeholders>
          <content-placeholders-img class="mt-6 vue-content-placeholders-img" />
          <content-placeholders-text
            :lines="1"
            class="mt-6 vue-content-placeholders-text w-80"
          />
          <content-placeholders-text
            :lines="1"
            class="mt-1 vue-content-placeholders-text w-60"
          />
        </div>

        <!-- No Post Container  -->
        <div
          class="px-4 py-10 mt-4 bg-white border border-gray-400 rounded-md shadow-sm mb-60"
          v-if="!getPostDetails.length"
        >
          <div>
            <h1 class="text-xl font-bold text-center text-gray-900">
              No Post Found Yet!
            </h1>

            <div class="flex justify-center">
              <button
                style="border: 1px solid #f2613c"
                v-b-modal.modal-prevent-closing
                class="px-4 py-2 text-sm text-black transition-all duration-500 ease-in shadow-sm rounded-3xl hover:shadow-lg hover:bg-primary-500 hover:bg-opacity-45"
              >
                Start a Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- NewsHead Line and Footer Right Section -->
      <div class="">
        <NewsHeadLine class="right-0 mt-1 top-44 newsfeed-right-section" />

        <QapinFooter class="right-12" />
      </div>
    </aside>
  </div>
</template>

<script>
import { DotsHorizontalIcon, ChevronDownIcon } from "@vue-hero-icons/solid";
import Ads from "./Ads.vue";
import BaseSelectInput from "../../components/base/BaseSelectInput.vue";
import $ from 'jquery'; 
import {
  CalendarIcon,
  ClockIcon,
  EmojiHappyIcon,
  ChatIcon,
  ThumbUpIcon,
  ShareIcon,
  LinkIcon,
  PencilIcon,
  TrashIcon,
  FlagIcon,
  BanIcon,
  XIcon,
} from "@vue-hero-icons/outline";
import ArticleIcon from "../../components/icons/ArticleIcon.vue";
import ImageIcon from "../../components/icons/ImageIcon.vue";
import PlayIcon from "../../components/icons/PlayIcon.vue";
import SparkleIcon from "../../components/icons/SparkleIcon.vue";
import LikeIcon from "../../components/icons/LikeIcon.vue";
import axios from "axios";
import TopNews from "./TopNews.vue";
import AppDropdown from "../../components/base/AppDropdown.vue";
import AppDropdownContent from "../../components/base/AddDropdownContent.vue";
import AppDropdownItem from "../../components/base/AppDropdownItem.vue";
import CurrentUserInfo from "./CurrentUserInfo.vue";
import MobileScreenCurrentUserInfo from "./MobileScreenCurrentUserInfo.vue";
import NewsHeadLine from "./NewsHeadLine.vue";
import QapinFooter from "./QapinFooter.vue";
import { validationMixin } from "vuelidate";
import { maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import HollowDotsSpinner from "../../components/base/Loader.vue";
import VueReadMoreSmooth from "vue-read-more-smooth";

export default {
  mixins: [validationMixin],

  validations: {
    post_text: { maxLength: maxLength(1500) },
    editData: {
      post_text: { maxLength: maxLength(1500) },
    },
    sharePostData: {
      sharePostText: { maxLength: maxLength(1500) },
    },
  },

  components: {
    XIcon,
    QapinFooter,
    CurrentUserInfo,
    MobileScreenCurrentUserInfo,
    AppDropdown,
    AppDropdownContent,
    AppDropdownItem,
    ClockIcon,
    HollowDotsSpinner,
    ShareIcon,
    SparkleIcon,
    BaseSelectInput,
    CalendarIcon,
    ThumbUpIcon,
    ArticleIcon,
    PlayIcon,
    ImageIcon,
    EmojiHappyIcon,
    ChatIcon,
    DotsHorizontalIcon,
    LikeIcon,
    ChevronDownIcon,
    LinkIcon,
    PencilIcon,
    TrashIcon,
    FlagIcon,
    BanIcon,
    Ads,
    TopNews,
    NewsHeadLine,
    VueReadMoreSmooth,
  },

  data() {
    return {
      lastpostId:0,
      postLength: true,
      // Post Slider
      postSliderOption: {
        initialIndex: 1,
        prevNextButtons: true,
        pageDots: false,
        autoPlay: true,
        wrapAround: true,
        freeScroll: true,
      },

      isShowReplyInput: null,
      isShowCurrentPostModal: false,
      currentUser: null,
      index: null,
      viewMoreCommentText: [],
      viewMoreCommentReplyText: [],
      viewMoreSharedPostText: [],
      commentText: null,
      comments_status: false,
      post_title: "",
      post_text: "",
      imagesId: [],
      video_count: 1,
      postUrl: null,
      isSharePostModal: false,
      isImageLoading: false,

      postPrivacyOptions: [
        { name: "Private", value: 1 },
        { name: "Everyone", value: 0 },
        { name: "Followers", value: 2 },
      ],

      // Report commemnt local state
      reportOptions: [
        {
          name: "Using Adult Content",
        },
        {
          name: "Abusive Content",
        },
        {
          name: "Using My Details",
        },
        {
          name: "Spam On My Profile",
        },
      ],

      currentUserId: null,
      slide: 0,
      sliding: null,
      filesid: "",
      previewImage: [],
      getComments: [],
      getCommentReplies: [],
      commentReply: [],
      currentComment: null,
      isPostModal: false,
      isMoreComments: null,
      isShowLoadMoreComments: [],
      post_privacy: { name: "Everyone", value: 1 },

      // Share Post Local State
      sharePostData: {
        share_comment_status: true,
        share_post_privacy: null,
        sharePostText: "",
      },

      isMoreCommentreply: null,
      post_ids: [],
      comment_ids: [],
      replyComment_ids: [],
      comment_reply_ids: [],
      reportCommentID: null,
      likes: null,
      time: null,
      isLike: false,
      uuid: null,
      createdData: null,
      getPostDetails: [],
      advertisements: [],
      isViewMore: false,
      isViewLess: false,
      isLoadMore: false,
      getPosts: [],
      busy: false,
      posts: [],
      isSaving: false,
      isLoadingContent: false,
      isFetchInitialData: false,
      selected: null,
      postId: 0,
      postCommentId: 1,
      text: "",
      reply: null,
      commentID: 0,
      action: "Recent",
      currentPostModalDetail: null,
      viewMoreText: [],
      updatedPosts: [],

      // Edit Local state
      selectedPost: null,

      editData: {
        post_title: "",
        post_text: "",
        post_privacy: null,
        comments_status: false,
        anonymous_status: false,
      },

      isDisabled: true,
    };
  },

  watch: {
    getPostDetails: {
      handler(val) {
        this.updatedPosts = [];
        var count = 4;
        for (var i in val) {
          let count2 = JSON.parse(i) + 1;

          if (count2 - count == 0) {
            this.updatedPosts.push({ type: "ads", posts_id: null });
            count += 4;
          }
          this.updatedPosts.push(val[i]);
        }
      },
      deep: true,
    },
  },

  created() {
    this.getCurrentUserDetails();
    this.getNextPosts();
    this.getAllCommentByID();
    this.$root.$refs.newsfeed = this;
  },

  // destroyed() {
  //   window.removeEventListener('scroll', this.getNextPosts)
  // },

  mounted() {
    this.$nextTick(() => {
      if (typeof this.$refs.container != "undefined") {
        this.$refs.container.forEach((ta) => {
          ta.firstChild.dispatchEvent(new Event("keyup"));
        });
      }
    });

    this.refreshNewsFeedFunc({
      refresh: this.refreshFunc,
    });

    const userId = JSON.parse(localStorage.getItem("loginUserData"));
    if (userId) {
      this.currentUserId = userId.user_id;
    }

    const post_ids = JSON.parse(localStorage.getItem("post_ids"));
    if (post_ids) {
      this.post_ids = post_ids;
    }

    const replyComment_ids = JSON.parse(
      localStorage.getItem("replyComment_ids")
    );
    if (replyComment_ids) {
      this.replyComment_ids = replyComment_ids;
    }
  },

  methods: {
    ...mapActions("global", ["refreshNewsFeedFunc"]),
    currentImage(id) {
      this.slide = id;
    },
    refreshFunc() {
      this.refreshPost();
    },

    // Show & Hide reply comment input
    showReplyInput(id) {
      if (this.isShowReplyInput == id) {
        this.isShowReplyInput = null;
      } else {
        this.isShowReplyInput = id;
      }
    },

    // Fetch posts On scroll
    refreshPost() {
      if (this.busy) return true;

      this.busy = true;
      const data = {
        posts_id: 0,
        action: this.action,
      };
      this.isLoadingContent = true;
      axios({
        method: "post",
        url: ` newsfeed/getAllPost?post_id=${this.postId}&a=${this.action}`,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (!response.data.result.length) {
            this.postLength = false;
          }
          const append = response.data.result.slice(
            response.data.result.length + data
          );

          let responseData = append.map((pt) => {
            var postObj;
            if (pt.comments != undefined) {
              if (pt.comments) {
                let postCmnt = pt.comments.map((_c) => {
                  if (_c) {
                    this.getCommentReply(_c.id);
                    return { ..._c, replyText: "", ..._c.replies };
                  }
                });
                if (postCmnt) {
                  pt.comments = postCmnt;
                  postObj = pt;
                }
              }
            } else {
              postObj = pt;
            }
            return postObj;
          });
          if (responseData) {
            let arr = responseData.filter((_v) => {
              return !this.getPostDetails.find(
                (_a) => _a.posts_id == _v.posts_id
              );
            });

            this.getPostDetails = [...arr, ...this.getPostDetails];
            console.log(responseData, arr);
          }

          this.busy = false;
          this.isLoadingContent = false;
        })
        .catch((err) => {
          this.isLoadingContent = false;

          console.log(err);
          if (err.response == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("loginUserData");
            this.$router.push("/login");
          }
        });
    },

    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },

    // Get Company Count details
    getCompanyDetails() {
      const data = {data:this.getLoginUserIdRequest()};

      axios({
        method: "post",
        url: " company/getCompanyCount",
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log("", response);
          // this.getCompanyInfo = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // get Current post Modal detail

    currentPostModal(post) {
      this.isShowCurrentPostModal = true;
      this.currentPostModalDetail = post;
    },

    // Get Current User Details

    getCurrentUserDetails() {
      const loginData = JSON.parse(localStorage.getItem("loginUserData"));
      this.currentUser = loginData;
    },

    // View more content post
    viewMoreContent(post_id) {
      if (this.viewMoreText.find((_v) => _v == post_id)) {
        this.viewMoreText = this.viewMoreText.filter((_v) => _v != post_id);
      } else {
        this.viewMoreText.push(post_id);
      }
    },

    // Count view more content of post
    countViewMoreContent(post) {
      console.log(this.viewMoreText);
      return !this.viewMoreText.find((_v) => _v == post.posts_id);
    },

    // View more content Shared Post
    viewMoreSharedPostContent(post_id) {
      if (this.viewMoreSharedPostText.find((_v) => _v == post_id)) {
        this.viewMoreSharedPostText = this.viewMoreSharedPostText.filter(
          (_v) => _v != post_id
        );
      } else {
        this.viewMoreSharedPostText.push(post_id);
      }
    },

    // Count view more content of Shared Post
    countViewMoreSharedPostContent(sharePostData) {
      return !this.viewMoreSharedPostText.find(
        (_v) => _v == sharePostData.share_user_id
      );
    },

    // View more comment content post
    viewMoreCommentContent(comment_id) {
      if (this.viewMoreCommentText.find((_v) => _v == comment_id)) {
        this.viewMoreCommentText = this.viewMoreCommentText.filter(
          (_v) => _v != comment_id
        );
      } else {
        this.viewMoreCommentText.push(comment_id);
      }
    },

    // Count view more comment of post
    countViewMoreComment(comment) {
      return !this.viewMoreCommentText.find((_v) => _v == comment.comments_id);
    },

    // View more comment reply content post
    viewMoreCommentReplyContent(comment_id) {
      if (this.viewMoreCommentReplyText.find((_v) => _v == comment_id)) {
        this.viewMoreCommentReplyText = this.viewMoreCommentReplyText.filter(
          (_v) => _v != comment_id
        );
      } else {
        this.viewMoreCommentReplyText.push(comment_id);
      }
    },

    // Count view more comment reply
    countViewMoreCommentReply(reply) {
      return !this.viewMoreCommentReplyText.find(
        (_v) => _v == reply.comment_replies_id
      );
    },

    // Show more comment reply
    showMoreCommentReply(id) {
      if (this.isMoreCommentreply == id) {
        this.isMoreCommentreply = null;
      } else {
        this.isMoreCommentreply = id;
      }
    },

    // Fetch posts On scroll
    getNextPosts() {
      if (this.busy) return true;

      this.busy = true;
      const data = {
        posts_id: this.postId,
        action: this.action,
      };

      this.isLoadingContent = true;
      axios({
        method: "post",
        url: ` newsfeed/getAllPost`,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {

          
          if (!response.data.result.length) {
            this.postLength = false;
          }
          const append = response.data.result.slice(
            response.data.result.length + data
          );

          append.map((pt) => {
            var postObj;
            if (pt.comments != undefined) {
              if (pt.comments) {
                let postCmnt = pt.comments.map((_c) => {
                  if (_c) {
                    this.getCommentReply(_c.id);
                    return { ..._c, replyText: "", ..._c.replies };
                  }
                });
                if (postCmnt) {
                  pt.comments = postCmnt;
                  postObj = pt;
                }
              }
            } else {
              postObj = pt;
            }

            return this.getPostDetails.push(postObj);
          });
          if(this.lastpostId==0){
            this.lastpostId =  response.data.post_id;
          }
          if(this.lastpostId!= response.data.post_id){
              this.$store.commit("lastpostId", response.data.post_id);
          }
          this.postId += 3;
          this.busy = false;
          this.isLoadingContent = false;
        })
        .catch((err) => {
          if (err.response == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("loginUserData");
            this.$router.push("/login");
          }
          this.isLoadingContent = false;
          console.log(err);
        });
    },

    // Get All Comments By post ID

    getAllCommentByID() {
      const data = {
        posts_id: this.postId,
        action: this.action,
      };
      axios({
        method: "post",
        url: " newsfeed/getAllCommentByPostId?a=",
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.getComments = response.data.result;
        })
        .catch((error) => {
          if (
            error.response == undefined ||
            error.response.data.status === "Expired token"
          ) {
            this.$router.push("/login");
            localStorage.removeItem("token");
            localStorage.removeItem("loginUserData");
          }
          console.log(error.response);
        });
    },

    // Load Less comments

    loadLessComments(id) {
      this.getPostDetails = this.getPostDetails.map((post) => {
        if (parseInt(post.posts_id) == parseInt(id)) {
          post.comments = [post.comments[0]];
          post.commentCount = post.comments.length;
        }
        return post;
      });
      this.isShowLoadMoreComments = this.isShowLoadMoreComments.filter(
        (_v) => _v != id
      );
    },

    // Load more comments

    loadMoreComments(id) {
      const data = {
        posts_id: id,
        post_id: this.postCommentId,
        action: this.action,
      };
      axios({
        method: "post",
        url: " newsfeed/getAllCommentByPostId?a=",
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.getComments = response.data.result;
          this.postCommentId;

          this.getPostDetails.map((post) => {
            if (parseInt(post.posts_id) == parseInt(id)) {
              post.comments = response.data.result;
            }
            return post;
          });
          this.isShowLoadMoreComments.push(id);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Get comments reply

    getCommentReply(id) {
      const data = {
        comments_id: id,
      };
      axios({
        method: "post",
        url: " newsfeed/getCommentReply",
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Add Current User Likes

    addLikes(id) {
      const data = {
        posts_id: id,
      };
      axios({
        method: "post",
        url: " newsfeed/addLikes",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.data.result >= 0) {
            this.post_ids.push(id);
            localStorage.setItem("post_ids", JSON.stringify(this.post_ids));
            this.getPostDetails.map((post) => {
              if (parseInt(post.posts_id) == parseInt(id)) {
                console.log("add like res =>", response);
                return (post.likeCount = parseInt(post.likeCount) + 1);
              }
              return post;
            });
          } else {
            this.post_ids = this.post_ids.filter((_v) => _v != parseInt(id));
            localStorage.setItem("post_ids", JSON.stringify(this.post_ids));
            this.getPostDetails.map((post) => {
              if (parseInt(post.posts_id) == parseInt(id)) {
                console.log("remove like res =>", response);
                return (post.likeCount = parseInt(post.likeCount) - 1);
              }
              return post;
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Add Comments Likes

    addCommentsLike(id) {
      const data = {
        posts_id: id,
        comments_id: this.commentID,
      };
      axios({
        method: "post",
        url: " newsfeed/addcommentLikes",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.data.result >= 0) {
            this.replyComment_ids.push(id);
            localStorage.setItem(
              "replyComment_ids",
              JSON.stringify(this.replyComment_ids)
            );
          } else {
            this.replyComment_ids = this.replyComment_ids.filter(
              (_v) => _v != parseInt(id)
            );
            localStorage.setItem(
              "replyComment_ids",
              JSON.stringify(this.replyComment_ids)
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Add Current User Comment

    addCurrentUserComment(post) {
      if (post.commentText != undefined && post.commentText != "") {
        const data = {
          posts_id: post.posts_id,
          text: post.commentText,
        };
        axios({
          method: "post",
          url: " newsfeed/addComments",
          data,

          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            if (response) {
               post.commentText = "";
              $('.txta').css('height',"55px");
              let getCommentData = {
                posts_id: post.posts_id,
                action: this.action,
              };

              axios({
                method: "post",
                url: " newsfeed/getAllCommentByPostId",
                data: getCommentData,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("token"),
                },
              }).then((response2) => {
                this.getPostDetails = this.getPostDetails.map((user) => {
                  if (
                    parseInt(user.posts_id) == parseInt(post.posts_id) &&
                    response.data.result.length
                  ) {
                    user.comments = [response2.data.result[0]];
                    user.commentCount = response2.data.result.length;
                  }
                  return user;
                });
                if (response.data.status == true) {
                  this.$toastr.s("Comment added successfully.");
                }
                post.commentText = "";
                 $('.txta').css('height',"55px");
              });
            }
          })
          .catch((error) => {
            this.$toastr.e("Something went wrong!");
            console.log(error);
          });
      }
    },

    // Get Comment likes counts

    getCommentLikesCounts(comment) {
      let count = this.replyComment_ids.find((v) => v == comment.comments_id);
      if (!count) {
        return comment.commentlikeCount;
      } else {
        return parseInt(comment.commentlikeCount) + 1;
      }
    },

    // Add Comments Reply

    addCommentReplyData(comment, reply, post_id) {
      if (reply != undefined && reply != "") {
        const data = {
          comments_id: comment.comments_id,
          text: reply,
        };

        axios({
          method: "post",
          url: " newsfeed/addCommentsReply",
          data,

          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            if (response) {
              let getCommentReplyData = { comments_id: comment.comments_id };

              axios({
                method: "post",
                url: " newsfeed/getCommentReply",
                data: getCommentReplyData,

                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("token"),
                },
              }).then((response) => {
                this.getPostDetails = this.getPostDetails.map((post) => {
                  if (parseInt(post.posts_id) == parseInt(post_id)) {
                    let commentsReply = post.comments;
                    commentsReply = commentsReply.map((reply) => {
                      if (
                        parseInt(reply.comments_id) ==
                        parseInt(comment.comments_id)
                      ) {
                        reply.commentReplyCount =
                          parseInt(reply.commentReplyCount) + 1;
                        reply.replies = response.data.result;
                      }
                      return reply;
                    });
                    post.comments = commentsReply;
                  }
                  return post;
                });
                $('.reptext').css('height','55px');
                comment.replyText = "";
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    // File Upload
    onImageChange(e) {
      if (e.target.files) {
        this.isImageLoading = true;
        for (let index = 0; index < e.target.files.length; index++) {
          const element = e.target.files[index];
          let reader = new FileReader();
          reader.onload = (e) => {
            this.previewImage.push(e.target.result);
          };
          reader.readAsDataURL(element);
          var d = new Date();
          var time = d.getTime();

          var payload = new FormData();
          payload.append("video_count", `${time}_${this.video_count}`);

          payload.append("file", element);

          axios
            .post(
              " ImageLib/postImg",
              payload,
              {
                "Content-Type": "multipart/form-data",

                headers: {
                  Authorization: localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              this.imagesId.push(res.data.result.video_count);
              this.$toastr.s("File uploaded successfully");
              this.isImageLoading = false;
            })
            .catch((err) => {
              this.isImageLoading = true;
              this.$toastr.e("Image size is too large!");
              console.log(err);
            });
        }
      }
    },

    removePostImage(index) {
      this.previewImage.splice(index, 1);
      this.imagesId.splice(index, 1);
      this.$refs.file.value = "";
    },

    // Reset Current Post Modal data
    resetModal() {
      this.post_title = "";
      this.post_text = "";
      this.imagesId.splice(0, this.imagesId.length);
      this.previewImage.splice(0, this.previewImage.length);
    },

    // Reset Share Modal data
    resetSharePostModal() {
      this.sharePostData.sharePostText = "";
    },

    // Add New Post Data

    submitPostData() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return true;
      }
      this.isSaving = true;

      const data = {
        anonymous_status: "",
        comments_status: this.comments_status,
        post_text: this.post_text,
        post_title: this.post_title,
        files_ids: this.filesid,
        images_ids: this.imagesId,
        m_ids: this.post_text,
        postPrivacy: this.post_privacy.value,
        url: "",
        url_content: "",
        url_images: "",
        url_title: "",
        video_ids: "",
      };

      axios({
        method: "post",
        url: " newsfeed/addPost",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response) {
            let commentRes = response.data.result;
            commentRes.comments = [];
            this.getPostDetails = [commentRes, ...this.getPostDetails];
            this.$bvModal.hide("modal-prevent-closing");
            if (response.data.status == true) {
              this.$toastr.s("Post added successfully.");
            }
          }

          this.resetModal();

          this.isSaving = false;
        })
        .catch((error) => {
          console.log(error);
          this.$toastr.e("Something went wrong!");
          this.isSaving = true;
        });
    },

    // Post delete Swal alert

    postDeleteAlert(post) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You want to delete this post!",
          icon: "error",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#f2613c",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.deletePost(post);
          }
        });
    },

    // Delete Post OK

    deletePost(post) {
      let data = {
        postData: post,
      };

      axios({
        method: "post",
        url: " newsfeed/deletePost",
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.data.status === true) {
            let index = this.getPostDetails.findIndex(
              (_post) => _post.posts_id === post.posts_id
            );
            this.getPostDetails.splice(index, 1);
            this.$toastr.s("Post deleted successfully");
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e("Something went wrong!");
        });
    },

    // Copy Link to Clipboard

    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
      } catch (err) {
        console.log(err);
      }
      document.body.removeChild(textArea);
    },

    copyLinkToPost(post) {
      const text =
        "http://qapin_mvp5.manageprojects.in/" +
        "post/" +
        post.first_name +
        "-" +
        post.last_name +
        "-activity-" +
        post.posts_id;

      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text);
        return;
      }

      navigator.clipboard.writeText(text).then(
        function () {
          return true;
        },
        function (err) {
          console.log(err);
          return false;
        }
      );

      this.$toastr.s("Post link Copied successfully.");
    },

    // Copy Link To Comment

    copyLinkToComment(post, comment) {
      const text =
        "http://qapin_mvp5.manageprojects.in/" +
        "post/" +
        post.first_name +
        "-" +
        post.last_name +
        "-comment-" +
        comment.comments_id +
        "-activity-" +
        post.posts_id;

      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(
        function () {
          return true;
        },

        function (err) {
          console.log(err);
          return false;
        }
      );

      this.$toastr.s("Comment link copied successfully.");
    },

    // Edit Comment

    editComment(id) {
      console.log(id);
      this.comment_ids.push(id);
    },

    // Edit Post Comment

    editPostComment(comment, text, posts_id) {
      if (text != undefined && text != "") {
        const data = {
          commentData: comment,
          textComment: text,
        };
        const index = this.comment_ids.findIndex(
          (id) => id === comment.comments_id
        );
        axios({
          method: "post",
          url: " newsfeed/editComments",
          data,

          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            if (response) {
              let getAllCommentByPostId = { posts_id: posts_id };

              axios({
                method: "post",
                url: " newsfeed/getAllCommentByPostId",
                data: getAllCommentByPostId,

                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("token"),
                },
              }).then((response2) => {
                this.comment_ids.splice(index, 1);
                if (response.data.status == true) {
                  this.getPostDetails = this.getPostDetails.map((user) => {
                    if (parseInt(user.posts_id) == parseInt(posts_id)) {
                      user.comments = response2.data.result;
                    }
                    return user;
                  });
                  this.$toastr.s("Comment updated successfully.");
                }
              });
            }
          })
          .catch((error) => {
            this.$toastr.e("Something went wrong!");

            console.log(error);
          });
      }
    },

    // Delete post comment

    deletePostComment(comment, posts_id) {
      const data = {
        commentData: comment,
      };

      axios({
        method: "post",
        url: " newsfeed/deleteComment",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response) {
            let getAllCommentByPostId = { posts_id: posts_id };

            axios({
              method: "post",
              url: " newsfeed/getAllCommentByPostId",
              data: getAllCommentByPostId,

              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
              },
            }).then((response2) => {
              if (response.data.status == true) {
                this.getPostDetails = this.getPostDetails.map((user) => {
                  if (parseInt(user.posts_id) == parseInt(posts_id)) {
                    const index = user.comments.findIndex(
                      (id) => id === comment.comments_id
                    );
                    user.comments.splice(index, 1);
                    user.commentCount = user.comments.length;
                    user.comments = response2.data.result;
                  }
                  return user;
                });
                this.$toastr.s("Comment deleted successfully.");
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Report Comment

    reportComment(id) {
      this.reportCommentID = id;
    },

    // Edit Comment reply

    editCommentReply(id) {
      this.comment_reply_ids.push(id);
    },

    // Edit Post Comment

    editPostCommentReply(reply, text, posts_id, comments_id) {
      if (text != undefined && text != "") {
        const data = {
          commentReplyData: reply,
          textComment: text,
        };

        axios({
          method: "post",
          url: " newsfeed/editCommentsReply",
          data,

          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            if (response) {
              let getCommentReplyData = { comments_id: comments_id };

              axios({
                method: "post",
                url: " newsfeed/getCommentReply",
                data: getCommentReplyData,

                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("token"),
                },
              }).then((response) => {
                const index = this.comment_reply_ids.findIndex(
                  (id) => id === reply.comment_replies_id
                );
                this.comment_reply_ids.splice(index, 1);
                this.getPostDetails = this.getPostDetails.map((post) => {
                  if (parseInt(post.posts_id) == parseInt(posts_id)) {
                    let commentsReply = post.comments;
                    commentsReply = commentsReply.map((reply) => {
                      if (
                        parseInt(reply.comments_id) == parseInt(comments_id)
                      ) {
                        reply.commentReplyCount = parseInt(
                          reply.commentReplyCount
                        );
                        reply.replies = response.data.result;
                      }
                      return reply;
                    });
                    post.comments = commentsReply;
                  }

                  return post;
                });
              });
              this.$toastr.s("Comment Reply updated successfully.");
            }
          })
          .catch((error) => {
            this.$toastr.e("Something went wrong!");
            console.log(error);
          });
      }
    },

    // Delete post comment
    deletePostCommentReply(reply, posts_id, comments_id) {
      const data = {
        commentReplyData: reply,
      };

      axios({
        method: "post",
        url: " newsfeed/deleteCommentReply",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response) {
            let getCommentReplyData = { comments_id: comments_id };

            axios({
              method: "post",
              url: " newsfeed/getCommentReply",
              data: getCommentReplyData,

              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
              },
            }).then((response) => {
              const index = this.comment_reply_ids.findIndex(
                (id) => id === reply.comment_replies_id
              );
              this.comment_reply_ids.splice(index, 1);
              this.getPostDetails = this.getPostDetails.map((post) => {
                if (parseInt(post.posts_id) == parseInt(posts_id)) {
                  let commentsReply = post.comments;
                  commentsReply = commentsReply.map((reply) => {
                    if (parseInt(reply.comments_id) == parseInt(comments_id)) {
                      reply.commentReplyCount =
                        parseInt(reply.commentReplyCount) - 1;
                      reply.replies = response.data.result;
                    }
                    return reply;
                  });
                  post.comments = commentsReply;
                }

                return post;
              });
            });
            this.$toastr.s("Comment reply deleted successfully.");
          }
        })
        .catch((error) => {
          this.$toastr.e("Something went wrong!");
          console.log(error);
        });
    },

    // Disable post comment
    disablePostComment(post, status) {
      let data = {
        postData: {
          ...post,
          comments_status: status,
        },
      };
      axios({
        method: "post",
        url: " newsfeed/disablePostComment",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.data.status == true) {
            this.getPostDetails = this.getPostDetails.map((user) => {
              if (parseInt(user.posts_id) == parseInt(post.posts_id)) {
                if (status === true) {
                  user.comments_status = "1";
                } else {
                  user.comments_status = "0";
                }
              }
              return user;
            });
            if (status === true) {
              this.$toastr.s("Enabled comments on this post successfully.");
            } else {
              this.$toastr.s("Disabled comments on this post successfully.");
            }
          }
        })
        .catch((err) => {
          this.$toastr.e("Something went wrong!");
          console.log(err);
        });
    },

    // Share Post data
    showSharePostModal(post) {
      this.postId = true;
      this.isSharePostModal = true;
      this.sharePostData = post;
    },

    // Share New Post
    submitSharePostData() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return true;
      }
      this.isSaving = true;

      let newData = {
        comments_status: this.sharePostData.share_comment_status,
        postPrivacy: this.sharePostData.share_post_privacy.value,
        post_text: this.sharePostData.sharePostText,
        post_title: this.sharePostData.sharePostTitle,
      };

      const shareData = this.sharePostData;

      axios({
        method: "post",
        url: " newsfeed/addPost",
        data: {
          ...newData,
          shareData,
        },

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response) {
            let post = response.data.result;
            this.getPostDetails = [post, ...this.getPostDetails];

            this.resetSharePostModal();
            if (response.data.result) {
              this.$bvModal.hide("modal-prevent-closing");
              this.isSharePostModal = false;
              this.$bvModal.hide(`share-post-modal`);
            }

            if (response.data.status == true) {
              this.$toastr.s("Post shared successfully.");
            }
            this.isSaving = false;
          }
        })
        .catch((err) => {
          this.isSaving = true;
          this.$toastr.e("Something went wrong!");

          console.log(err);
        });
    },

    // Edit Current Post Modal
    editModal(post) {
      this.selectedPost = post;
      if (this.selectedPost) {
        const postPrivacy = this.postPrivacyOptions.find(
          (_p) => parseInt(_p.value) == parseInt(this.selectedPost.postPrivacy)
        );

        this.editData.post_privacy = postPrivacy;

        this.editData.post_title = this.selectedPost.postTitle;
        this.editData.post_text = this.selectedPost.postText;
        if (this.selectedPost.comments_status != "0") {
          this.editData.comments_status = true;
        } else {
          this.editData.comments_status = false;
        }

        this.editData.anonymous_status = this.selectedPost.anonymous_status;
      }
    },

    // Edit post data

    editPostData() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return true;
      }
      this.isSaving = true;

      const data = {
        anonymous_status: this.editData.anonymous_status,
        comments_status: this.editData.comments_status,
        post_text: this.editData.post_text,
        post_title: this.editData.post_title,
        post_privacy: this.editData.post_privacy.value,
        postData: this.selectedPost,
      };

      axios({
        method: "post",
        url: " newsfeed/addPost",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response) {
            this.getPostDetails = this.getPostDetails.map((_edit) => {
              if (
                parseInt(_edit.posts_id) == parseInt(this.selectedPost.posts_id)
              ) {
                _edit = response.data.result;
              }
              return _edit;
            });
            this.$bvModal.hide(`edit-modal-${response.data.result.posts_id}`);

            this.selectedPost = null;
            if (response.data.status == true) {
              this.$toastr.s("Post updated successfully.");
            }
          }

          this.resetModal();

          this.isSaving = false;
        })
        .catch((error) => {
          console.log(error);
          this.$toastr.e("Something went wrong!");
          this.isSaving = true;
        });
    },

    // Report Post Comment

    reportPostComment() {
      this.isSaving = true;

      const data = {
        uuid: this.uuid,
        create_timestamp: this.createdData,
        comments_id: this.comments_id,
      };

      axios({
        method: "post",
        url: " newsfeed/reportPostComment",
        data,

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log("", response);
          this.isSaving = false;
        })
        .catch((error) => {
          console.log(error);
          this.isSaving = true;
        });
    },

    getHtmlContent(text) {
      if (!text) return "";
      let linked = this.linkify(text);
      let spaces = this.nl2br(linked);

      let textEx = text
        .replaceAll("\n", " ")
        .split(" ")
        .filter((v) => v.startsWith("#"));
      let hashTag = "";

      for (const key in textEx) {
        let keyword = textEx[key].replace("#", "");

        hashTag = spaces.replaceAll(
          textEx[key],
          '<a class="hastag" href="/?keyword=' + keyword + '">' + textEx[key] + "</a>"
        );
        spaces = hashTag;
      }

      return spaces;
    },
    linkify(inputText) {
      /* eslint-disable no-useless-escape */
      var replacedText, replacePattern1, replacePattern2, replacePattern3;
      replacePattern1 =
        /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;

      replacedText = inputText.replace(
        replacePattern1,
        '<a href="$1" target="_blank">$1</a>'
      );

      replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      replacedText = replacedText.replace(
        replacePattern2,
        '$1<a href="http://$2" target="_blank">$2</a>'
      );

      replacePattern3 =
        /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
      replacedText = replacedText.replace(
        replacePattern3,
        '<a href="mailto:$1">$1</a>'
      );

      return replacedText;
    },
    nl2br(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
  },
};
</script>

<style lang="css">
.carousel-caption {
  top: 0 !important;
  bottom: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-read-more {
  position: absolute;
  right: 0;
  /*bottom: 10px;
  width: 90px;*/
  background: inherit;
}
.read-more-button {
  border: none !important;
  text-align: right !important;
  margin: 0 !important;
}
.hide-text {
  display: none !important;
}
.comment .read-more-button span {
  background-color: #eeeeee !important;
}

.read-more-button span {
  color: #f1613c !important;
  font-weight: bold !important;
  padding: 0 !important;
  padding-left: 10px !important;
}
.text-overflow.expanded .read-more-button span {
  padding-left: 0 !important;
}

.text-overflow.expanded .read-more-button {
  /*text-align: left !important;*/
  margin-left: 0 !important;
}
.text-overflow.expanded .button-read-more {
  left: 0;
  bottom: -24px!important;
  right: unset;
}
</style>

<style scoped lang="css">
#webpack-dev-server-client-overlay {
  display: none !important;
}
.vue-content-placeholders-heading__img {
  position: relative;
  overflow: hidden;
  height: 15px;
  background: #eeeeee;
  width: 68px;
  height: 68px;
  border-radius: 50px;
  margin-right: 15px;
}

/* .vue-content-placeholders-text__line:nth-child(4n + 1) { */
/* width: 40%; */
/* } */

.vue-content-placeholders-img {
  position: relative;
  overflow: hidden;
  height: 15px;
  background: #eee;
  width: 100%;
  height: 310px;
}

.modal_body_ {
  padding: 0px;
  position: relative;
  flex: 1 1 auto;
  padding: 0rem;
}

ul.dropdown-menu.show {
  min-width: 400px;
  position: absolute;
  height: 100px;
  will-change: transform;
  top: 30px;
  left: 0px;
  transform: translate3d(-367px, 0px, 0px);
}

.user-left-section {
  left: 12%;
  width: 16%;
}

.newsfeed-right-section {
  width: 16%;
  right: 12%;
  bottom: 31%;
}

.modal-post-img-container {
  height: 75vh;
}

.modal-post-main-container {
  cursor: pointer;
  height: auto;
}

.modal-container {
  height: 65vh;
}

.modal-post-details-container {
  height: 64vh;
}

.slider-container {
  min-height: 49vh;
}

@media only screen and (max-width: 2190px) {
  .slider-container {
    width: 100%;
    min-height: 54vh;
  }

  .modal-container {
    height: 60vh;
  }

  .single-image-container {
    /* width: 37vh; */
  }

  .modal-post-details-container {
    /*height: 59vh;*/
    height: 100vh;
    padding: 15px !important;
    margin-right: 0px;
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 1271px) {
  .slider-container {
    min-height: 73vh;
  }
}

@media only screen and (max-width: 1260px) {
  .modal-post-details-container {
    height: 55vh;
  }
  .modal-container {
    min-height: 140vh;
  }
}

@media only screen and (max-width: 1279px) {
  .modal-post-details-container {
    height: 65vh;
  }
  .modal-container {
    min-height: 140vh;
  }
  .slider-container {
    min-height: 50vh;
  }
}

@media only screen and (max-width: 500px) {
  .slider-container {
    min-height: 30vh;
  }
}

@media only screen and (max-width: 1221px) {
  .modal-post-details-container {
    height: 54vh;
  }
  .slider-container {
    min-height: 55vh;
  }
  .modal-container {
    min-height: auto;
    height: auto;
  }
}
@media only screen and (max-width: 1199px) {
  .modal-post-details-container {
    height: auto;
  }
}

@media only screen and (max-width: 900px) {
  .user-left-section {
    display: none;
  }

  .newsfeed-right-section {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  .user-left-section {
    display: none;
  }

  .newsfeed-right-section {
    display: none;
  }
}

@media only screen and (max-width: 1466px) {
  .user-left-section {
    left: 5%;
  }

  .newsfeed-right-section {
    right: 5%;
  }
}

@media only screen and (max-width: 1390px) {
  .user-left-section {
    left: 2;
  }

  .newsfeed-right-section {
    right: 2;
    bottom: 6%;
  }
}

@media only screen and (max-width: 1398px) {
  .user-left-section {
    left: 1%;
  }

  .newsfeed-right-section {
    right: 1%;
    bottom: 22%;
  }
}

@media only screen and (max-width: 1352px) {
  .user-left-section {
    left: 0;
  }

  .newsfeed-right-section {
    right: 0;
  }
}
@media only screen and (max-width: 1380px) {
  .user-left-section {
    left: 2;
  }

  .newsfeed-right-section {
    right: 2;
  }
}

@media only screen and (max-width: 1600px) {
  .user-left-section {
    left: 4%;
    width: 20%;
  }

  .newsfeed-right-section {
    right: 4%;
    width: 20%;
    bottom: 1%;
  }
}
@media only screen and (max-width: 1080px) {
  .user-left-section {
    left: 9%;
    width: 20%;
  }

  .newsfeed-right-section {
    right: 9%;
    width: 20%;
  }
}

@media only screen and (min-width: 1870px) {
  .user-left-section {
    left: 4%;
    width: 20%;
  }
  .newsfeed-right-section {
    width: 20%;
    right: 4%;
    bottom: 1%;
  }
}

@media only screen and (max-width: 1421px) {
  .user-left-section {
    left: 4%;
    width: 20%;
  }
  .newsfeed-right-section {
    width: 20%;
    right: 4%;
    bottom: 16%;
  }
}

@media only screen and (max-width: 1276px) {
  .user-left-section {
    left: 2%;
    width: 20%;
  }
  .newsfeed-right-section {
    width: 20%;
    right: 2%;
    bottom: 10%;
  }
}

@media only screen and (min-width: 1696px) {
  .user-left-section {
    width: 15%;
    left: 13%;
  }

  .newsfeed-right-section {
    width: 15%;
    right: 13%;
    bottom: 26%;
  }
}

@media only screen and (max-width: 1305px) {
  .user-left-section {
    left: 0%;
  }

  .newsfeed-right-section {
    right: 0%;
  }
}

@media only screen and (max-width: 1316px) {
  .user-left-section {
    left: 1%;
  }

  .newsfeed-right-section {
    right: 1%;
  }
}

@media only screen and (max-width: 1351px) {
  .user-left-section {
    left: -1%;
  }

  .newsfeed-right-section {
    right: -1%;
    bottom: 24%;
  }
}

@media only screen and (max-width: 1216px) {
  .user-left-section {
    left: 1%;
  }

  .newsfeed-right-section {
    right: 1%;
  }
}

@media only screen and (max-width: 1254px) {
  .user-left-section {
    display: none;
  }

  .newsfeed-right-section {
    display: none;
  }
}

@media only screen and (min-width: 1788px) {
  .user-left-section {
    width: 16%;
    left: 14%;
  }

  .newsfeed-right-section {
    right: 14%;
    bottom: 31%;
    width: 16%;
  }
}

@media only screen and (min-width: 1896px) {
  .user-left-section {
    width: 16%;
    left: 14%;
  }

  .newsfeed-right-section {
    right: 14%;
    width: 16%;
    bottom: 31%;
  }
}
@media only screen and (min-width: 2002px) {
  .user-left-section {
    left: 15%;
  }

  .newsfeed-right-section {
    right: 15%;
    bottom: 31%;
  }
}

@media only screen and (min-width: 2030px) {
  .user-left-section {
    width: 14%;
    left: 19%;
  }

  .newsfeed-right-section {
    width: 14%;
    right: 19%;
    bottom: 32%;
  }
}

@media only screen and (max-width: 1401px) {
  .user-left-section {
    width: 20%;
    left: 3%;
  }

  .newsfeed-right-section {
    right: 3%;
    width: 20%;
    bottom: 4%;
  }
}

@media only screen and (max-width: 1326px) {
  .user-left-section {
    width: 20%;
    left: 2%;
  }

  .newsfeed-right-section {
    right: 2%;
    width: 20%;
    bottom: 24%;
  }
}

.swal2-styled.swal2-confirm {
  border: 0;
  border-radius: 0.25em;
  background: initial;
  background-color: #7066e0;
  color: #fff;
  padding: 4px 14px;
  font-size: 15px;
}

.swal2-popup {
  display: none;
  position: relative;
  box-sizing: border-box;
  grid-template-columns: minmax(0, 100%);
  width: 20em;
  max-width: 100%;
  padding: 0 0 0.25em;
  border: none;
  border-radius: 5px;
  background: #fff;
  color: #545454;
  font-family: inherit;
  font-size: 1rem;
  right: 12px;
}
.swal2-actions {
  display: flex;
  z-index: 1;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 0;
  padding: 0;
}
.radio input[type="radio"]:checked + .radio-label:before {
  background-color: #f26136;
  box-shadow: inset 0 0 0 4px #f4f4f4;
}

.post-img-container {
  position: relative;
  width: 100%;
  cursor: pointer;
}

.post-img {
  opacity: 1;
  display: block;
  border-radius: 18px;
  border-top-left-radius: 18px;
  height: 65px;
  width: 140px;
  cursor: pointer;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.post-img-overlay {
  background-color: #f2613c;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  border-radius: 16px;
}

.post-img-container:hover .post-img {
  opacity: 0.3;
  cursor: pointer;
}

.post-img-container:hover .post-img-overlay {
  cursor: pointer;
  opacity: 0.5;
}
.truncate-line {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.modal .read-more-text {
}

.pre-formatted {
  white-space: pre;
}
.txta {
  width: 100%;
  max-width: 100%;
  min-height: 40px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  line-height: 1.4;
  border: 1px solid #ccc;
}
.modal-fullscreen {
  width: 100%;
}
.z-index-11{z-index:11;}
.w-100{width:100%!important;}

.hastag{
  color:#f2613c;
}
#share-post-modal svg{
  position: absolute;
  right: 20px;
  top: -5px;
  color: #fff;
  font-size: 34px;
  font-weight: 500;
}

</style>



