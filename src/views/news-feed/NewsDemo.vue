<template>
  <div
    v-infinite-scroll="getNextPosts"
    :infinite-scroll-disabled="busy"
    class="w-full h-full px-4 pb-20 overflow-hidden overflow-y-auto md:mx-auto md:row md:max-w-9xl md:px-0"
  >
    <aside class="xl:col-span-6">
      <!-- Current User Info Section web -->
      <div class="mt-40 xl:pl-10">
        <div
          class="relative z-10 h-auto bg-white rounded-md shadow-lg lg:fixed user-left-section w-80"
        >
          <div class="relative top-0 h-16 py-4 bg-primary-500 rounded-t-md">
            <img
              v-if="currentUser.profile_picture_path"
              :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
              class="absolute w-20 h-20 mr-2 border-white rounded-full shadow-sm border-3 right-28 top-6"
              alt="Profile Image"
              style="
                box-shadow: 0 15px 45px 0 rgb(0 0 0 / 12%);
                border: 1px solid #fff;
              "
            />
            <img
              v-else
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              class="absolute w-20 h-20 mr-2 border-white rounded-full shadow-sm border-3 right-28 top-6"
              alt="Profile Image"
              style="
                box-shadow: 0 15px 45px 0 rgb(0 0 0 / 12%);
                border: 1px solid #fff;
              "
            />
          </div>

          <!-- User Info -->
          <div class="w-full px-4 py-4 mt-4 text-center">
            <h1 class="text-base font-bold text-gray-900 lg:text-xl">
              {{ currentUser.first_name }}
              {{ currentUser.last_name }}
            </h1>
            <p
              class="w-full max-w-xs mx-auto mt-1 text-sm font-normal leading-relaxed sm:text-base"
            >
              {{ currentUser.tagline }}
            </p>
          </div>

          <ul class="" style="padding: 0">
            <li
              style="padding: 10px 20px"
              class="flex items-center justify-between font-normal border-t border-b border-gray-200 hover:bg-gray-200"
            >
              Who viewed your profile
              <span class="flex justify-end text-sm text-primary-500">
                10
              </span>
            </li>
            <li
              style="padding: 10px 20px"
              class="flex items-center justify-between font-normal border-b border-gray-200 hover:bg-gray-200"
            >
              Connections
              <span class="flex justify-end text-sm text-primary-500">
                155
              </span>
            </li>
            <li
              style="padding: 10px 20px 0px"
              class="px-4 font-semibold text-gray-900 border-gray-200 cursor-pointer hover:bg-gray-200 hover:text-primary-500"
            >
              View Profile
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile screen Current User Info Widget -->
      <div
        class="z-10 w-full h-auto bg-white rounded-md shadow-lg md:hidden lg:hidden"
      >
        <div class="relative top-0 h-16 bg-primary-500 rounded-t-md">
          <img
            :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
            class="absolute flex w-20 h-20 mr-4 border-white rounded-full shadow-sm border-3 right-64 top-6"
            alt="Profile Image"
            style="
              box-shadow: 0 15px 45px 0 rgb(0 0 0 / 12%);
              border: 1px solid #fff;
            "
          />
        </div>

        <!-- User Info -->
        <div class="w-full px-4 py-4 mt-4 text-center">
          <h1 class="text-base font-bold text-gray-900 lg:text-xl">
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
            class="flex items-center justify-between px-3 py-3 font-normal border-t border-b border-gray-200"
          >
            Who viewed your profile
            <span class="flex justify-end text-sm text-primary-500"> 10 </span>
          </p>
          <p
            class="flex items-center justify-between px-3 py-3 -mt-4 font-normal border-b border-gray-200"
          >
            Connections
            <span class="flex justify-end text-sm text-primary-500"> 155 </span>
          </p>
          <p
            class="px-3 font-semibold text-gray-900 border-gray-200 cursor-pointer hover:text-primary-500"
          >
            View Profile
          </p>
        </div>
      </div>

      <!--  QAPIN Top News  -->
      <div class="px-10 sm:px-0">
        <div class="absolute left-0 right-0 text-center top-28">
          <h1 class="text-lg font-semibold text-center text-gray-900">
            Qapin Suspended Operations in Russia and Belarus -
            <span
              style="margin-left: 4px"
              class="text-lg font-semibold cursor-pointer text-primary-500 hover:text-gray-500"
            >
              Know more..
            </span>
          </h1>
        </div>
      </div>

      <!-- View Job Post details Modal -->
      <div class="overflow-hidden shadow-lg">
        <b-modal
          v-if="currentPostModalDetail"
          :id="`view-modal-${currentPostModalDetail.posts_id}`"
          size="xl"
          hide-footer
          hide-header
          centered
          body-class="w-full p-0 modal-post-main-container"
          class=""
        >
          <div class="w-full h-full mb-10 lg:flex sm:mb-0">
            <!-- Current Post Modal Job post Image -->
            <div
              class="w-full mb-10 bg-black lg:max-w-2xl lg:mb-0"
              style="padding-top: 7%"
            >
              <div v-if="currentPostModalDetail.multi_image_post === '1'">
                <img
                  style="height: 75vh; padding-top: 10%; padding-bottom: 10%"
                  class="w-full"
                  :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${currentPostModalDetail.multi_image}.jpg`"
                  @click="index"
                />
              </div>
              <b-carousel
                v-else
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                img-width="800"
                img-height="500"
                controls
                indicators
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide
                  v-for="(
                    postImg, i
                  ) in currentPostModalDetail.multi_image.split(',')"
                  :key="i"
                  @click="index = i"
                  class=""
                  style="height: 70vh; widht: 100vh"
                  :img-src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                >
                </b-carousel-slide>

                <vue-gallery-slideshow
                  :images="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                  :index="index"
                  class=""
                  @close="index = null"
                ></vue-gallery-slideshow>
              </b-carousel>
            </div>

            <div
              class="fixed absolute right-0 z-40 w-full max-w-md overflow-scroll modal-post-details-container lg:mt-0"
              style="padding-top: 14px; padding: 2%"
            >
              <!-- Current Post User Info -->
              <div class="flex space-x-4">
                <div class="w-28">
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
                    class="text-base font-extrabold cursor-pointer hover:text-primary-500 sm:text-lg"
                  >
                    {{ currentPostModalDetail.first_name }}
                    {{ currentPostModalDetail.last_name }}
                  </h3>
                  <p class="flex text-sm font-medium text-gray-400">
                    {{ currentUser.tagline }}
                  </p>
                  <p
                    class="flex items-center text-sm font-semibold text-gray-400"
                  >
                    <ClockIcon class="w-3 h-3 mr-2 text-primary-500" />
                    {{ currentPostModalDetail.time }}
                  </p>
                </div>
              </div>

              <div
                :class="{ flex: countViewMoreContent(currentPostModalDetail) }"
              >
                <p
                  class="w-full mb-0 text-sm font-medium text-gray-500"
                  :class="{
                    truncate: countViewMoreContent(currentPostModalDetail),
                  }"
                >
                  {{ currentPostModalDetail.postText }}
                </p>

                <span
                  v-if="
                    countViewMoreContent(currentPostModalDetail) &&
                    currentPostModalDetail.postText.length >= 100
                  "
                  @click="viewMoreContent(currentPostModalDetail.posts_id)"
                  class="w-24 text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                >
                  View more
                </span>
                <span
                  v-if="
                    !countViewMoreContent(currentPostModalDetail) &&
                    currentPostModalDetail.postText.length > 100
                  "
                  @click="viewMoreContent(currentPostModalDetail.posts_id)"
                  class="w-24 -mt-3 text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                >
                  View less
                </span>
              </div>

              <hr class="mt-6 text-gray-400" />

              <!-- Current Post modal likes & comment resources -->
              <div class="flex items-center justify-between mt-3">
                <div class="cursor-pointer group">
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

                <div class="cursor-pointer group">
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

                <div class="cursor-pointer group">
                  <label
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
              <div class="flex items-center mt-3 space-x-2">
                <div class="w-16">
                  <img
                    v-if="currentUser.profile_picture_path"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                    class="inline-block w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>

                <div class="w-full mt-1 sm:mt-0">
                  <div class="flex border rounded-3xl">
                    <input
                      type="text"
                      v-model="currentPostModalDetail.commentText"
                      @keyup.enter="
                        addCurrentUserComment(currentPostModalDetail)
                      "
                      name="currentComment"
                      id="currentComment"
                      autocomplete="currentComment"
                      class="block w-full px-4 py-2 border-r-0 border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
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
                </div>
              </div>

              <!-- Current Post Modal Filters Dropdown -->
              <base-dropdown :hideShow="isMenu" class="w-full">
                <div class="flex items-center justify-between">
                  <h4
                    class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                  >
                    Most relevant
                  </h4>
                  <ChevronDownIcon
                    class="w-6 h-6 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                  />
                </div>

                <template slot="options">
                  <div class="z-10 w-full shadow-lg" style="padding: 0">
                    <div
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
                    </div>

                    <div
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
                    </div>
                  </div>
                </template>
              </base-dropdown>

              <!-- Current Post Modal User Comments -->
              <div
                v-if="currentPostModalDetail.comments"
                class="overflow-y-auto"
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
                        <base-dropdown
                          :hideShow="isMenu"
                          class="flex items-center justify-end -mt-12"
                        >
                          <DotsHorizontalIcon
                            class="w-8 h-8 p-2 mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                          />

                          <template slot="options">
                            <ul class="shadow-2xl" style="padding: 0">
                              <li
                                class="flex items-center text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                                @click="copyLinkToComment(currenCmnt, comment)"
                              >
                                <LinkIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Copy Link to Comment
                              </li>
                              <li
                                @click="editComment(currenCmnt.comments_id)"
                                class="flex items-center text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <PencilIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Edit
                              </li>
                              <li
                                @click="
                                  deletePostComment(currenCmnt, post.posts_id)
                                "
                                class="flex items-center text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <TrashIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Delete
                              </li>
                              <li
                                v-b-modal:[`report-comment-modal-${currenCmnt.comments_id}`]
                                @click="reportComment(currenCmnt.comments_id)"
                                class="flex items-center text-sm font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <FlagIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />

                                Report Comment
                              </li>
                            </ul>
                          </template>
                        </base-dropdown>
                      </div>

                      <!-- View More comments -->
                      <div>
                        <p class="text-sm font-medium text-gray-500">
                          {{ currenCmnt.text }}
                          ...

                          <span
                            class="text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                          >
                            View more
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Users Likes Activity -->
                  <div class="pl-16 mt-3 lg:max-w-sm lg:mx-auto">
                    <label
                      for=""
                      class="flex items-center justify-start space-x-3 cursor-pointer"
                    >
                      <span
                        @click="addCommentsLike(currenCmnt.comments_id)"
                        class="text-xs font-normal text-gray-500 hover:text-primary-500"
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

                        {{ getCommentLikesCounts(currenCmnt) }}

                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          |
                        </span>
                        Reply
                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          .
                        </span>
                        <span
                          class=""
                          @click="showMoreCommentReply(currenCmnt)"
                        >
                          {{ currenCmnt.commentReplyCount }} Reply
                        </span>
                      </span>
                    </label>
                  </div>

                  <!-- List of replied comments response -->
                  <div
                    class="w-full xl:pl-14"
                    v-if="isMoreCommentreply === currenCmnt.comments_id"
                  >
                    <div
                      v-for="(reply, replyIndex) in currenCmnt.replies"
                      :key="replyIndex"
                      class="flex px-2 mt-4 mb-8 space-x-2"
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
                        class="flex items-center px-3 space-x-4 bg-gray-200 rounded-md"
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
                        <base-dropdown
                          :hideShow="isMenu"
                          class="flex items-center justify-end -mt-16"
                        >
                          <DotsHorizontalIcon
                            class="w-8 h-8 p-2 mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                          />

                          <template slot="options">
                            <ul class="shadow-2xl" style="padding: 0">
                              <li
                                class="flex items-center text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 6px 10px"
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
                              </li>
                              <li
                                @click="
                                  editCommentReply(reply.comment_replies_id)
                                "
                                class="flex items-center text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 6px 10px"
                              >
                                <PencilIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Edit
                              </li>
                              <li
                                @click="
                                  deletePostCommentReply(
                                    reply,
                                    currentPostModalDetail.posts_id,
                                    currenCmnt.comments_id
                                  )
                                "
                                class="flex items-center text-xs font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 6px 10px"
                              >
                                <TrashIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Delete
                              </li>
                            </ul>
                          </template>
                        </base-dropdown>
                      </div>
                    </div>
                  </div>

                  <!-- Add Reply comments -->
                  <div class="mt-4">
                    <div class="flex items-center w-full lg:pl-16">
                      <div class="w-20">
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
                          <input
                            type="text"
                            placeholder="comment here"
                            v-model="currenCmnt.replyText"
                            @keyup.enter="
                              addCommentReplyData(
                                currenCmnt,
                                currenCmnt.replyText,
                                currentPostModalDetail.posts_id
                              )
                            "
                            class="block w-full px-4 py-2 border-r-0 border-gray-300 sm:w-64 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>

      <!-- Jobs Main Content  -->
      <div
        class="sticky w-full lg:px-10 xl:max-w-3xl md:max-w-3xl md:mx-auto sm:mx-auto xl:mx-auto"
      >
        <!-- mt-10 xl:mt-40 -->
        <!-- Post a New Job -->
        <div class="px-4 py-3 bg-white rounded-md shadow-lg">
          <div class="flex items-center">
            <img
              v-if="currentUser.profile_picture_path"
              :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
              class="inline-block w-12 h-12 rounded-full"
              alt=""
            />
            <div
              id="toggle-btn"
              v-b-modal.modal-prevent-closing
              class="w-full ml-5 cursor-pointer"
            >
              <input
                type="none"
                placeholder="Start a Post"
                class="w-full px-4 py-2 bg-gray-100 border border-indigo-300 border-solid shadow cursor-pointer focus:border-indigo-500 focus:ring-offset-indigo-500 disabled duration-800 rounded-3xl hover:bg-gray-100 hover:border-indigo-500"
              />
            </div>
          </div>

          <!-- Post Resources Tools -->
          <div class="hidden">
            <div class="flex items-center justify-between mt-4">
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
        >
          <form
            action=""
            method="POST"
            ref="form"
            @submit.prevent="submitPostData"
          >
            <div class="w-full d-block">
              <div class="flex items-center w-full">
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
                    <h3 class="text-lg font-bold text-gray-900">
                      {{ currentUser.first_name }}
                      {{ currentUser.last_name }}
                    </h3>
                  </div>
                  <div style="margin-left: 0; margin-top: 4px">
                    <BaseSelectInput
                      :icon="true"
                      class="px-2 text-sm border border-gray-600 border-solid shadow-sm cursor-pointer duration-800 rounded-3xl hover:bg-gray-100 focus:border-indigo-500 focus:ring-offset-indigo-500 hover:border-primary-500"
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
                  rows="3"
                  class="w-full px-3 py-2 text-sm text-gray-800 border-none"
                />
              </div>
            </div>

            <div
              class="grid grid-cols-3 gap-4 mt-4 overflow-x-auto"
              v-if="previewImage"
            >
              <div v-for="(image, index) in previewImage" :key="index">
                <img
                  :src="image"
                  class="relative w-full transition-all duration-500 transform cursor-pointer hover:bg-gray-900 hover:bg-opacity-40 hover:rounded-lg hover:scale-90"
                  style="
                    border-radius: 18px;
                    border-top-left-radius: 18px;
                    height: 140px;
                    width: 140px;
                  "
                />

                <!-- v-for="(img, index) in image" -->
                <!-- :key="index" -->
                <label
                  @click="previewImage = ''"
                  for=""
                  class="absolute px-2 py-2 text-xs font-medium text-white transition-all duration-500 bg-opacity-25 rounded-md cursor-pointer bg-primary-500 hover:bg-primary-500 left-9 top-80"
                >
                  Remove Image
                </label>
              </div>
            </div>

            <!-- File Upload tools -->
            <div
              class="flex items-center justify-between mt-4 border-t border-gray-300"
            >
              <label
                for="file-upload"
                class="flex items-center justify-start mt-4 space-x-4"
              >
                <!-- File Upload -->
                <ImageIcon
                  class="w-8 h-8 p-2 text-white bg-gray-600 rounded-md shadow cursor-pointer hover:bg-primary-500"
                />
                <div
                  class="p-2 bg-gray-600 rounded-md shadow cursor-pointer hover:bg-primary-500"
                >
                  <PlayIcon
                    class="w-4 h-4 p-1 text-white border border-white"
                  />
                </div>
                <DuplicateIcon
                  class="w-8 h-8 p-1 text-white bg-gray-600 rounded-md shadow cursor-pointer hover:bg-primary-500"
                />

                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
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
                <div>
                  <button
                    class="px-10 transition-all duration-500 ease-in py-2.5 text-sm font-medium w-full text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50"
                    block
                    type="submit"
                  >
                    Post
                  </button>
                </div>
              </div>
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
          <form
            action=""
            method="POST"
            ref="form"
            @submit.prevent="editPostData"
          >
            <div class="w-full px-0 d-block">
              <div class="flex items-center w-full space-x-6">
                <div>
                  <img
                    class="inline-block w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                <div class="cursor-pointer">
                  <BaseSelectInput
                    :icon="true"
                    class="px-4 py-1.5 text-sm border border-gray-400 border-solid shadow-sm cursor-pointer duration-800 rounded-3xl hover:bg-gray-100 focus:border-indigo-500 focus:ring-offset-indigo-500 hover:border-primary-500"
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
                  class="w-full px-3 py-2 text-sm text-gray-800 border-none"
                />
              </div>
            </div>

            <div class="flex items-center mt-4 border-t border-gray-300">
              <!-- Enabled / Disabled Comment Field -->
              <div class="mt-4">
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

              <div class="flex items-center justify-end space-x-2">
                <!-- <button
                  class="px-3 py-1.5 transition-all duration-500 ease-in text-sm font-medium mt-3 text-primary-500 hover:bg-primary-500 hover:bg-opacity-30 rounded-3xl"
                  block
                  style="border: 1px solid #f2613c"
                  @click="$bvModal.hide(`edit-modal-${selectedPost.posts_id}`)"
                >
                  Cancel
                </button> -->
                <button
                  class="w-40 px-4 py-2 text-sm font-medium text-white transition-all duration-500 ease-in shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50"
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
        >
          <form
            action=""
            method="POST"
            ref="form"
            @submit.prevent="submitSharePostData"
          >
            <div class="py-2 border-b border-gray-200">
              <input
                type="text"
                placeholder="Post Title"
                class="w-full px-4 py-2 text-lg font-bold text-gray-900 border-none"
                v-model="sharePostData.sharePostTitle"
              />
            </div>
            <div class="py-2 border-b border-gray-200">
              <textarea
                type="text"
                rows="3"
                cols="5"
                placeholder="write here and use @ to tag someone."
                class="w-full px-4 py-2 text-lg font-bold text-gray-900 border-none"
                v-model="sharePostData.sharePostText"
                no-resize
              />
            </div>

            <!-- Current Post Info -->
            <div
              class="w-full px-4 py-6 mt-3 border border-gray-400 rounded-sm shadow-sm d-block"
            >
              <div class="flex w-full justify-flex-start">
                <div class="mr-2">
                  <img
                    v-if="currentUser.profile_picture_path"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
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

                <div class="ml-2">
                  <h1
                    class="text-base font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                  >
                    {{ currentUser.first_name }}
                    {{ currentUser.last_name }}
                  </h1>
                  <p class="mt-2 text-sm font-medium text-gray-500">
                    <!-- {{ selectedPost.time }} -->
                  </p>

                  <h4 class="text-base font-medium text-gray-500">
                    <!-- {{ selectedPost.postText }} -->
                  </h4>
                </div>
              </div>
            </div>

            <!-- Enabled / Disabled Comment Field -->
            <div class="mt-4 border-t border-gray-200">
              <div class="flex items-center justify-between px-3 py-2">
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

                <div class="flex items-center justify-end space-x-4">
                  <div
                    class="mt-3 cursor-pointer focus:ring-offset-indigo-500 focus:border-indigo-500"
                  >
                    <BaseSelectInput
                      :icon="true"
                      class="px-2 text-sm border border-gray-600 border-solid shadow-sm cursor-pointer duration-800 rounded-3xl hover:bg-gray-100 focus:border-indigo-500 focus:ring-offset-indigo-500 hover:border-primary-500"
                      :options="postPrivacyOptions"
                      :default="{ name: 'Everyone', value: 1 }"
                      v-model="sharePostData.share_post_privacy"
                      placeholder="Select"
                      @input="alert(displayToKey($event))"
                    />
                  </div>

                  <div class="space-x-2">
                    <button
                      class="w-full px-10 py-2 mt-3 text-sm font-medium text-white shadow bg-primary-500 rounded-3xl hover:bg-primary-500 hover:bg-opacity-50"
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
            data-aos="slide-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-back"
            class="px-4 py-4 mt-6 rounded-md shadow-lg"
            style="background-color: white"
            v-for="(post, index) in updatedPosts"
            :key="index"
          >
            <!-- Current Post User Info -->
            <div
              v-if="post.type !== 'ads'"
              class="flex items-center justify-between"
            >
              <div class="flex items-center space-x-4">
                <div class="px-1 -mt-2">
                  <img
                    v-if="post.profile_picture_path"
                    :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${post.profile_picture_path}`"
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
                <div class="flex justify-between">
                  <div>
                    <h3
                      class="text-base font-bold cursor-pointer hover:text-primary-500 sm:text-lg"
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

                  <base-dropdown
                    :hideShow="isMenu"
                    class="flex items-center justify-end -mt-14 w-60"
                  >
                    <DotsHorizontalIcon
                      class="w-10 h-10 p-2 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                    />

                    <template slot="options">
                      <ul class="shadow-2xl" style="padding: 0">
                        <li
                          class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                          style="padding: 12px 20px"
                          @click="copyLinkToPost(post)"
                        >
                          <LinkIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Copy Link to Post
                        </li>
                        <li
                          v-b-modal:[`edit-modal-${post.posts_id}`]
                          @click="editModal(post)"
                          class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                          style="padding: 12px 20px"
                        >
                          <PencilIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Edit Post
                        </li>
                        <li
                          @click="postDeleteAlert(post)"
                          class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                          style="padding: 12px 20px"
                        >
                          <TrashIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Delete Post
                        </li>
                        <li
                          v-if="post.comments_status != '0'"
                          @click="disablePostComment(post, true)"
                          class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                          style="padding: 12px 20px"
                        >
                          <FlagIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Enabled Comments On This Post
                        </li>
                        <li
                          v-else
                          class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                          style="padding: 12px 20px"
                          @click="disablePostComment(post, false)"
                        >
                          <BanIcon
                            class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                          />
                          Disabled Comments On This Post
                        </li>
                      </ul>
                    </template>
                  </base-dropdown>
                </div>
              </div>
            </div>

            <!--  Post details -->
            <div v-if="post.type !== 'ads'" class="">
              <h3
                class="flex mt-2 text-sm font-bold text-gray-900 sm:text-base"
              >
                {{ post.postTitle }}
              </h3>

              <div :class="{ flex: countViewMoreContent(post) }">
                <p
                  class="w-full mb-0 text-sm font-medium text-gray-500"
                  :class="{ truncate: countViewMoreContent(post) }"
                >
                  {{ post.postText }}
                </p>

                <span
                  v-if="
                    countViewMoreContent(post) && post.postText.length >= 100
                  "
                  @click="viewMoreContent(post.posts_id)"
                  class="w-24 text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                >
                  View more
                </span>
                <span
                  v-if="
                    !countViewMoreContent(post) && post.postText.length > 100
                  "
                  @click="viewMoreContent(post.posts_id)"
                  class="w-24 -mt-3 text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                >
                  View less
                </span>
              </div>

              <!-- Job Post Card details with video or Image -->
              <div
                class="mt-4 cursor-pointer"
                v-if="post.multi_image_post != 0"
                v-b-modal:[`view-modal-${post.posts_id}`]
                @click="currentPostModal(post)"
              >
                <img
                  :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${post.multi_image}.jpg`"
                  class="w-full rounded-md hover:bg-gray-100"
                  alt=""
                />

                <div
                  class="relative grid grid-cols-2 gap-2"
                  v-if="post.multi_image_post >= 2"
                >
                  <div
                    v-for="(postImg, index) in post.multi_image.split(',')"
                    class="cursor-pointer hover:bg-gray-100"
                    :key="index"
                  >
                    <img
                      v-if="index <= 4"
                      class="w-full h-40 border rounded-md hover:shadow-2xl dshadow-sm hover:bg-gray-100"
                      alt=""
                      :src="`http://qapin_mvp5.manageprojects.in/upload/post_image/post_${postImg}.jpg`"
                    />
                  </div>
                </div>

                <div
                  v-if="post.multi_image_post === '4'"
                  class="absolute bg-black bg-opacity-50 z-40 cursor-pointer duration-500 ease-in-out group h-40 group-hover:bg-opacity-75 group-hover:bg-primary-500 group-hover:shadow-2xl max-w-xs mt-1.5 mx-auto right-6 rounded-md shadow-sm top-80 transition-all w-full"
                >
                  <div
                    class="flex items-center justify-center text-center group py-14"
                  >
                    <h4
                      class="text-base font-medium text-white"
                      style="padding: 5px"
                    >
                      See More
                      <span
                        class="pl-4 text-4xl font-medium text-white group-hover:text-primary-500"
                      >
                        {{ post.multi_image_post }}
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

              <!-- Current User Likes & Comment Count -->
              <div class="flex items-center justify-between mt-3">
                <label
                  for=""
                  class="flex items-center text-sm cursor-pointer hover:text-primary-500"
                >
                  <ThumbUpIcon
                    class="w-5 h-5 p-1 mr-2 text-white bg-blue-500 rounded-full"
                  />
                  {{ post.likeCount }}
                </label>

                <div
                  v-if="post.comments_status === '0'"
                  class="flex items-center justify-end space-x-4 text-sm font-normal text-gray-500 cursor-pointer hover:text-primary-500"
                >
                  {{ post.commentCount }}
                  Comment
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
                class="flex items-center mt-4 space-x-2"
              >
                <img
                  v-if="currentUser.profile_picture_path"
                  :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
                  class="inline-block w-12 h-12 rounded-full"
                  alt=""
                />

                <div class="w-full mt-1 sm:mt-0">
                  <div class="flex border rounded-3xl">
                    <input
                      type="text"
                      v-model="post.commentText"
                      @keyup.enter="addCurrentUserComment(post)"
                      name="currentComment"
                      id="currentComment"
                      autocomplete="currentComment"
                      class="block w-full px-4 py-2 border-r-0 border-gray-300 border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
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
                </div>
              </div>

              <!-- Comments Filters -->
              <div v-if="post.comments_status === '0'" class="w-full mt-3">
                <base-dropdown :hideShow="isMenu" class="w-full">
                  <div class="flex items-center justify-between">
                    <h4
                      class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                    >
                      Most relevant
                    </h4>
                    <ChevronDownIcon
                      class="w-8 h-8 p-2 -mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                    />
                  </div>

                  <template slot="options">
                    <div class="z-10 w-full shadow-lg" style="padding: 0">
                      <div
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
                      </div>

                      <div
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
                      </div>
                    </div>
                  </template>
                </base-dropdown>
              </div>

              <!--Current User Comments activity -->
              <div v-if="post.comments_status === '0'">
                <div v-for="(comment, index) in post.comments" :key="index">
                  <div class="flex items-center mt-3 space-x-2">
                    <div class="w-12 -mt-10">
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
                      style="padding: 20px"
                      class="w-full bg-gray-200 rounded-md sm:max-w-xl"
                    >
                      <div class="flex items-center justify-between">
                        <h3
                          class="text-sm font-bold text-gray-900 cursor-pointer hover:text-primary-500 sm:text-base"
                        >
                          {{ comment.first_name }}{{ comment.last_name }}
                        </h3>

                        <!--Current Comment Social actions -->
                        <base-dropdown
                          :hideShow="isMenu"
                          class="flex items-center justify-end -mt-12"
                        >
                          <DotsHorizontalIcon
                            class="w-8 h-8 p-2 mt-3 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                          />

                          <template slot="options">
                            <ul class="shadow-2xl" style="padding: 0">
                              <li
                                class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                                @click="copyLinkToComment(post, comment)"
                              >
                                <LinkIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Copy Link to Comment
                              </li>
                              <li
                                @click="editComment(comment.comments_id)"
                                class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <PencilIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Edit
                              </li>
                              <li
                                @click="
                                  deletePostComment(comment, post.posts_id)
                                "
                                class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <TrashIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />
                                Delete
                              </li>
                              <li
                                v-b-modal:[`report-comment-modal-${comment.comments_id}`]
                                @click="reportComment(comment.comments_id)"
                                class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                style="padding: 8px 14px"
                              >
                                <FlagIcon
                                  class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                />

                                Report Comment
                              </li>
                            </ul>
                          </template>
                        </base-dropdown>
                      </div>

                      <!-- View More comments section -->
                      <div class="">
                        <div
                          :class="{ flex: countViewMoreComment(comment) }"
                          class="w-full"
                        >
                          <p
                            class="w-full mb-0 text-sm font-medium text-gray-500"
                            :class="{ truncate: countViewMoreComment(comment) }"
                          >
                            {{ comment.text }}
                          </p>

                          <span
                            v-if="
                              countViewMoreComment(comment) &&
                              comment.text.length >= 60
                            "
                            @click="viewMoreCommentContent(comment.comments_id)"
                            class="text-sm font-bold cursor-pointer w-50 text-primary-500 hover:text-gray-500"
                          >
                            View more
                          </span>

                          <span
                            v-if="
                              !countViewMoreComment(comment) &&
                              comment.text.length > 100
                            "
                            @click="viewMoreCommentContent(comment.comments_id)"
                            class="w-24 -mt-3 text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                          >
                            View less
                          </span>
                        </div>

                        <!-- Edit comment input -->
                        <div
                          v-if="
                            comment_ids.find((v) => v == comment.comments_id)
                          "
                          class="flex mt-1 bg-white border rounded-3xl"
                        >
                          <input
                            type="text"
                            v-model="comment.text"
                            @keyup.enter="
                              editPostComment(
                                comment,
                                comment.text,
                                post.posts_id
                              )
                            "
                            class="block w-full px-4 py-2 border-r-0 border-gray-300 border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
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
                      </div>
                    </div>
                  </div>

                  <!-- Users Likes Activity -->

                  <div class="mt-3 lg:max-w-sm lg:mx-auto pl-14 lg:pl-0">
                    <label
                      for=""
                      class="flex items-center justify-start space-x-3 cursor-pointer"
                    >
                      <span
                        @click="addCommentsLike(comment.comments_id)"
                        class="text-xs font-normal text-gray-500 hover:text-primary-500"
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

                        {{ getCommentLikesCounts(comment) }}

                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          |
                        </span>
                        Reply
                        <span class="ml-2 mr-2 text-xs font-bold text-gray-500">
                          .
                        </span>
                        <span class="" @click="showMoreCommentReply(comment)">
                          {{ comment.commentReplyCount }} Reply
                        </span>
                      </span>
                    </label>
                  </div>

                  <!-- List of replied comments response -->
                  <div
                    class="w-full xl:pl-28 sm:pr-2"
                    v-if="isMoreCommentreply === comment.comments_id"
                  >
                    <div
                      v-for="(reply, replyIndex) in comment.replies"
                      :key="replyIndex"
                      class="mt-4 mb-8"
                    >
                      <div class="flex w-full space-x-6">
                        <img
                          v-if="currentUser.profile_picture_path"
                          :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${currentUser.profile_picture_path}`"
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
                          <div class="relative w-full mt-2">
                            <div>
                              <!-- comments User name -->
                              <h6
                                class="text-base font-semibold text-gray-900 cursor-pointer hover:text-primary-500"
                              >
                                {{ reply.first_name }}{{ reply.last_name }}
                              </h6>

                              <!-- View More comments Reply section -->
                              <div class="">
                                <div
                                  :class="{
                                    flex: countViewMoreCommentReply(reply),
                                  }"
                                  class="w-full"
                                >
                                  <!-- Comment Reply text -->
                                  <p
                                    class="w-full mb-0 text-sm font-medium text-gray-500"
                                    :class="{
                                      truncate:
                                        countViewMoreCommentReply(reply),
                                    }"
                                  >
                                    {{ reply.text }}
                                  </p>

                                  <span
                                    v-if="
                                      countViewMoreCommentReply(reply) &&
                                      reply.text.length >= 60
                                    "
                                    @click="
                                      viewMoreCommentReplyContent(
                                        reply.comments_id
                                      )
                                    "
                                    class="text-sm font-bold cursor-pointer w-50 text-primary-500 hover:text-gray-500"
                                  >
                                    View more
                                  </span>

                                  <span
                                    v-if="
                                      !countViewMoreCommentReply(reply) &&
                                      reply.text.length > 100
                                    "
                                    @click="
                                      viewMoreCommentReplyContent(
                                        reply.comments_id
                                      )
                                    "
                                    class="w-24 text-sm font-bold cursor-pointer text-primary-500 hover:text-gray-500"
                                  >
                                    View less
                                  </span>
                                </div>
                              </div>

                              <!-- Comment Reply timing  -->
                              <p class="text-xs font-medium text-gray-400">
                                {{ reply.time }}
                              </p>

                              <!-- Comments Reply Dropdown -->
                              <div class="relative">
                                <base-dropdown
                                  :hideShow="isMenu"
                                  class="absolute right-0 flex items-center justify-end -top-20"
                                >
                                  <DotsHorizontalIcon
                                    class="w-8 h-8 p-2 -mt-4 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:text-primary-500 hover:bg-gray-100 hover:rounded-full"
                                  />

                                  <template slot="options">
                                    <ul class="shadow-2xl" style="padding: 0">
                                      <li
                                        class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                        style="padding: 6px 10px"
                                        @click="
                                          copyLinkToComment(post, comment)
                                        "
                                      >
                                        <LinkIcon
                                          class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                        />
                                        Copy Link to Comment
                                      </li>
                                      <li
                                        @click="
                                          editCommentReply(
                                            reply.comment_replies_id
                                          )
                                        "
                                        class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                        style="padding: 6px 10px"
                                      >
                                        <PencilIcon
                                          class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                        />
                                        Edit
                                      </li>
                                      <li
                                        @click="
                                          deletePostCommentReply(
                                            reply,
                                            post.posts_id,
                                            comment.comments_id
                                          )
                                        "
                                        class="flex items-center text-base font-semibold text-gray-600 transition-all duration-500 ease-in border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary-500 group"
                                        style="padding: 6px 10px"
                                      >
                                        <TrashIcon
                                          class="w-5 h-5 mr-4 text-gray-400 group-hover:text-primary-500"
                                        />
                                        Delete
                                      </li>
                                    </ul>
                                  </template>
                                </base-dropdown>
                              </div>
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
                              <input
                                type="text"
                                v-model="reply.text"
                                @keyup.enter="
                                  editPostCommentReply(
                                    reply,
                                    reply.text,
                                    post.posts_id,
                                    reply.comments_id
                                  )
                                "
                                class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Add comments Reply  -->
                  <div class="mt-4">
                    <div class="flex items-center space-x-3 lg:pl-16">
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

                      <div class="w-full mt-1 sm:mt-0">
                        <div class="flex border rounded-3xl">
                          <input
                            type="text"
                            placeholder="comment here"
                            v-model="comment.replyText"
                            @keyup.enter="
                              addCommentReplyData(
                                comment,
                                comment.replyText,
                                post.posts_id
                              )
                            "
                            class="block w-full px-4 py-2 border-r-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="post.comments_status === '0'">
                <label
                  for=""
                  v-if="
                    !isShowLoadMoreComments.find((_v) => _v == post.posts_id) &&
                    post.commentCount > 0
                  "
                  @click="loadMoreComments(post.posts_id)"
                  class="mt-4 text-sm font-medium text-gray-900 cursor-pointer hover:text-primary-500"
                >
                  Load more comments
                </label>

                <label
                  v-else
                  for=""
                  class="mt-4 text-sm font-medium text-gray-900 cursor-pointer hover:text-primary-500"
                >
                  <span v-if="post.commentCount == 0">
                    View {{ post.commentCount }} comments</span
                  >

                  <span v-else @click="loadLessComments(post.posts_id)">
                    View Less comments
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
                  <b-collapse id="collapse-1">
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

                            <b-dropdown
                              size="lg"
                              variant="link"
                              id="dropdown-left"
                              toggle-class="border-none text-decoration-none"
                              no-caret
                            >
                              <template #button-content>
                                <DotsHorizontalIcon
                                  class="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary-500"
                                />
                              </template>
                              <b-dropdown-item>
                                Copy link to comment
                              </b-dropdown-item>
                              <b-dropdown-item>Report</b-dropdown-item>
                            </b-dropdown>
                          </div>

                          <p class="mt-1 text-sm font-normal text-gray-400">
                            {{ comment.text }}
                          </p>

                          <div>
                            <p class="text-sm font-medium text-gray-500">
                              {{ comment.text }}
                              ...
                              <b-collapse
                                id="collapse-b"
                                class="text-sm font-medium text-gray-500"
                                v-show="isViewMore"
                              >
                                {{ comment.text }}
                              </b-collapse>

                              <span
                                v-if="isViewMore === false"
                                @click="isViewMore = !isViewMore"
                                v-b-toggle.collapse-a.collapse-b
                                class="text-sm font-bold cursor-pointer text-primary-500 hover:text-primary-500"
                              >
                                View more
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <!-- Users Likes -->

                      <div class="mt-3 lg:max-w-sm lg:mx-auto pl-14 lg:pl-0">
                        <label
                          for=""
                          @click="addCommentsLike(comment.comments_id)"
                          class="flex items-center justify-start space-x-8 text-xs font-normal text-gray-500 cursor-pointer hover:text-primary-500"
                        >
                          Like . |
                          <span
                            class="flex items-center ml-3 space-x-4 text-xs font-normal leading-normal text-gray-500 cursor-pointer hover:text-primary-500"
                          >
                            <ThumbUpIcon
                              v-if="
                                !replyComment_ids.find(
                                  (v) => v == comment.comments_id
                                )
                              "
                              class="w-4 h-4 p-1 mr-2 text-white bg-blue-400 rounded-full"
                            />
                            <span
                              @click="isMoreCommentreply = comment.comments_id"
                            >
                              {{ comment.commentReplyCount }} Load more
                            </span>
                          </span>
                        </label>
                      </div>

                      <!-- Users Comment Reply -->

                      <div class="mt-4">
                        <div
                          class="flex items-center w-full space-x-4 lg:pl-20"
                        >
                          <img
                            v-if="post.profile_picture_path"
                            :src="`http://qapin_mvp5.manageprojects.in/upload/profile_image/${post.profile_picture_path}`"
                            class="w-10 h-10 rounded-full shadow"
                            alt=""
                          />

                          <!-- Add Comments Reply  -->

                          <div class="w-full mt-1 sm:mt-0">
                            <div class="flex border rounded-3xl">
                              <input
                                type="text"
                                placeholder="comment here"
                                class="block w-full px-4 py-2 border-r-0 border-gray-300 border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-3xl sm:text-sm"
                              />
                              <span
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
                      </div>
                    </div>
                  </b-collapse>
                </div>
              </div>
            </div>

            <!-- Advertisement Slider  -->
            <Ads v-if="post.type === 'ads'" />
          </div>
        </div>

        <!-- Placeholder Content -->
        <div
          class="px-4 py-2 mt-4 bg-white rounded-md shadow-sm"
          v-if="!getPostDetails.length"
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
      </div>

      <!-- NewsHead Line and Footer Right Section -->
      <div class="">
        <div class="fixed z-0 lg:mt-1 top-44 newsfeed-right-section">
          <div
            class="relative overflow-auto bg-white rounded-md shadow-lg h-76 w-80"
          >
            <h3
              style="padding: 16px"
              class="w-full text-base font-extrabold border-b border-gray-300 sm:text-xl"
            >
              Qapin News
            </h3>

            <div class="">
              <ul
                class="-mt-2 list-disc list-inside"
                style="padding: 20px; padding-left: 26px"
              >
                <li
                  class="text-sm font-semibold text-gray-900 truncate"
                  style="margin-bottom: 20px"
                >
                  Vocational education to receive better recognition

                  <br />

                  <label
                    for=""
                    style="padding-left: 18px"
                    class="font-normal text-gray-500 mt-1.5"
                  >
                    Published Oct. 18, 2021
                  </label>
                </li>
                <li
                  class="text-sm font-semibold text-gray-900 truncate"
                  style="margin-bottom: 20px"
                >
                  Priorities of China's participation in global malaria
                  elimination: the perspective of malaria endemic countries

                  <br />
                  <label
                    for=""
                    style="padding-left: 18px"
                    class="font-normal text-gray-500 mt-1.5"
                  >
                    Published Nov. 20, 2021
                  </label>
                </li>
                <li
                  class="text-sm font-semibold text-gray-900 truncate"
                  style="margin-bottom: 20px"
                >
                  Priorities of China's participation in global malaria
                  elimination: the perspective of malaria endemic countries.

                  <br />
                  <label
                    for=""
                    style="padding-left: 18px"
                    class="font-normal text-gray-500 mt-1.5"
                  >
                    Published Dec. 11, 2021
                  </label>
                </li>
                <li
                  class="text-sm font-semibold text-gray-900 truncate"
                  style="margin-bottom: "
                >
                  HACCP vs HARPC: What's the difference?

                  <br />
                  <label
                    for=""
                    style="padding-left: 18px"
                    class="font-normal text-gray-500 mt-1.5"
                  >
                    Published Jan. 21, 2021
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- QAPIN FOOTER -->
        <div
          class="fixed z-0 bg-white rounded-md shadow-lg lg:mt-0 newsfeed-right-section"
          style=""
        >
          <div class="h-auto w-80">
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
      </div>
    </aside>
  </div>
</template>

<script>
import { DotsHorizontalIcon, ChevronDownIcon } from '@vue-hero-icons/solid'
import VueGallerySlideshow from 'vue-gallery-slideshow'
import Ads from './Ads.vue'
import BaseSelectInput from '../../components/base/BaseSelectInput.vue'
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
  DuplicateIcon,
  BanIcon,
} from '@vue-hero-icons/outline'
import BaseDropdown from '../../components/base/BaseDropdown.vue'
import WebLogo from '../../components/icons/WebLogo.vue'
import ArticleIcon from '../../components/icons/ArticleIcon.vue'
import ImageIcon from '../../components/icons/ImageIcon.vue'
import PlayIcon from '../../components/icons/PlayIcon.vue'
import SparkleIcon from '../../components/icons/SparkleIcon.vue'
import LikeIcon from '../../components/icons/LikeIcon.vue'
import axios from 'axios'

export default {
  components: {
    VueGallerySlideshow,
    ClockIcon,
    ShareIcon,
    SparkleIcon,
    BaseSelectInput,
    DuplicateIcon,
    CalendarIcon,
    ThumbUpIcon,
    ArticleIcon,
    PlayIcon,
    ImageIcon,
    WebLogo,
    EmojiHappyIcon,
    ChatIcon,
    DotsHorizontalIcon,
    LikeIcon,
    ChevronDownIcon,
    BaseDropdown,
    LinkIcon,
    PencilIcon,
    TrashIcon,
    FlagIcon,
    BanIcon,
    Ads,
  },

  data() {
    return {
      // Post Slider
      isShowCurrentPostModal: false,
      currentUser: null,
      index: null,
      viewMoreCommentText: [],
      viewMoreCommentReplyText: [],
      commentText: null,
      comments_status: false,
      post_title: '',
      post_text: '',
      imagesId: [],
      isComment: null,
      video_count: 1,
      postUrl: null,
      isSharePostModal: false,

      postPrivacyOptions: [
        { name: 'Private', value: 1 },
        { name: 'Everyone', value: 0 },
        { name: 'Followers', value: 2 },
      ],

      // Report commemnt local state
      reportOptions: [
        {
          name: 'Using Adult Content',
        },
        {
          name: 'Abusive Content',
        },
        {
          name: 'Using My Details',
        },
        {
          name: 'Spam On My Profile',
        },
      ],
      slide: 0,
      sliding: null,
      filesid: '',
      previewImage: [],
      getComments: [],
      getCommentReplies: [],
      commentReply: [],
      currentComment: null,
      isPostModal: false,
      isMoreComments: null,
      isShowLoadMoreComments: [],
      post_privacy: { name: 'Everyone', value: 1 },

      // Share post local state
      sharePostData: {
        share_comment_status: true,
        share_post_privacy: null,
        share_post_text: '',
        share_post_title: '',
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
      isCommentLike: false,
      uuid: null,
      createdData: null,
      isPostTitle: false,
      getPostDetails: [],
      isPostDialog: false,
      dialog: false,
      isViewMore: false,
      isViewLess: false,
      isLoadMore: false,
      getPosts: [],
      isMenu: true,
      busy: false,
      posts: [],
      isSaving: false,
      isFetchInitialData: false,
      selected: null,
      postId: 0,
      postCommentId: 1,
      text: '',
      reply: null,
      commentID: 0,
      action: 'Recent',
      currentPostModalDetail: null,
      viewMoreText: [],
      updatedPosts: [],

      // Edit Local state
      selectedPost: null,
      editData: {
        post_title: '',
        post_text: '',
        post_privacy: null,
        comments_status: false,
        anonymous_status: false,
      },
    }
  },

  watch: {
    getPostDetails: {
      handler(val) {
        this.updatedPosts = []
        var count = 4
        for (var i in val) {
          let count2 = JSON.parse(i) + 1

          if (count2 - count == 0) {
            this.updatedPosts.push({ type: 'ads', posts_id: null })
            count += 4
          }
          this.updatedPosts.push(val[i])
        }
      },
      deep: true,
    },
  },

  created() {
    this.getNextPosts()
    this.getAllCommentByID()
    this.getCurrentUserDetails()
  },

  destroyed() {
    window.removeEventListener('scroll', this.getNextPosts)
  },

  mounted() {},

  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },

    // Get Company Count details

    getCompanyDetails() {
      const data = {data:this.getLoginUserIdRequest()}

      axios({
        method: 'post',
        url: ' company/getCompanyCount',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log('', response)
          // this.getCompanyInfo = response.data.result;
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // get Current post Modal detail

    currentPostModal(post) {
      this.isShowCurrentPostModal = true
      this.currentPostModalDetail = post
    },

    // Get Current User Details

    getCurrentUserDetails() {
      const loginData = JSON.parse(localStorage.getItem('loginUserData'))
      this.currentUser = loginData
    },

    // Fetch Posts

    getAllPostList() {
      const data = {
        post_id: this.postId,
        action: this.action,
      }
      axios({
        method: 'post',
        url: ' newsfeed/getAllPost',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          this.getPostDetails = response.data.result

          if (response.data.status != true) {
            this.$router.push('/login')
          }
        })
        .catch((error) => {
          if (
            error.response == undefined ||
            error.response.data.status === 'Expired token'
          ) {
            this.$router.push('/login')
            localStorage.removeItem('token')
            localStorage.removeItem('loginUserData')
          }
          console.log(error)
        })
    },

    // View more content post
    viewMoreContent(post_id) {
      if (this.viewMoreText.find((_v) => _v == post_id)) {
        this.viewMoreText = this.viewMoreText.filter((_v) => _v != post_id)
      } else {
        this.viewMoreText.push(post_id)
      }
    },

    // Count view more content of post
    countViewMoreContent(post) {
      return !this.viewMoreText.find((_v) => _v == post.posts_id)
    },

    // View more comment content post
    viewMoreCommentContent(comment_id) {
      if (this.viewMoreCommentText.find((_v) => _v == comment_id)) {
        this.viewMoreCommentText = this.viewMoreCommentText.filter(
          (_v) => _v != comment_id
        )
      } else {
        this.viewMoreCommentText.push(comment_id)
      }
    },

    // Count view more comment of post
    countViewMoreComment(comment) {
      return !this.viewMoreCommentText.find((_v) => _v == comment.comments_id)
    },

    // View more comment reply content post
    viewMoreCommentReplyContent(comment_id) {
      if (this.viewMoreCommentReplyText.find((_v) => _v == comment_id)) {
        this.viewMoreCommentReplyText = this.viewMoreCommentReplyText.filter(
          (_v) => _v != comment_id
        )
      } else {
        this.viewMoreCommentReplyText.push(comment_id)
      }
    },

    // Count view more comment reply
    countViewMoreCommentReply(reply) {
      return !this.viewMoreCommentReplyText.find(
        (_v) => _v == reply.comments_id
      )
    },

    // Show more comment reply
    showMoreCommentReply(comment) {
      if (this.isMoreCommentreply == comment.comments_id) {
        this.isMoreCommentreply = null
      } else {
        this.isMoreCommentreply = comment.comments_id
      }
    },

    // Fetch posts On scroll
    getNextPosts() {
      this.busy = true
      const data = {
        posts_id: this.postId,
        action: this.action,
      }

      axios.post(data)
      axios({
        method: 'post',
        url: ` newsfeed/getAllPost?post_id=${this.postId}&a=${this.action}`,
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response.data.status != true) {
            localStorage.removeItem('token')
            localStorage.removeItem('loginUserData')
            this.$router.push('/login')
          }

          const append = response.data.result.slice(
            response.data.result.length + data
          )

          append.map((pt) => {
            var postObj
            if (pt.comments != undefined) {
              if (pt.comments) {
                let postCmnt = pt.comments.map((_c) => {
                  if (_c) {
                    this.getCommentReply(_c.id)
                    return { ..._c, replyText: '' }
                  }
                })
                if (postCmnt) {
                  pt.comments = [postCmnt[0]]
                  postObj = pt
                }
              }
            } else {
              postObj = pt
            }

            return this.getPostDetails.push(postObj)
          })
          this.postId += 3
          this.busy = false
        })
        .catch((err) => {
          if (err.response == undefined) {
            localStorage.removeItem('token')
            localStorage.removeItem('loginUserData')
            this.$router.push('/login')
          }
          console.log(err)
        })
    },

    // Get All Comments By post ID

    getAllCommentByID() {
      const data = {
        posts_id: this.postId,
        action: this.action,
      }
      axios({
        method: 'post',
        url: ' newsfeed/getAllCommentByPostId?a=',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          this.getComments = response.data.result
        })
        .catch((error) => {
          if (
            error.response == undefined ||
            error.response.data.status === 'Expired token'
          ) {
            this.$router.push('/login')
            localStorage.removeItem('token')
            localStorage.removeItem('loginUserData')
          }
          console.log(error.response)
        })
    },

    // Load Less comments

    loadLessComments(id) {
      this.getPostDetails = this.getPostDetails.map((post) => {
        if (parseInt(post.posts_id) == parseInt(id)) {
          post.comments = [post.comments[0]]
          post.commentCount = post.comments.length
        }
        return post
      })
      this.isShowLoadMoreComments = this.isShowLoadMoreComments.filter(
        (_v) => _v != id
      )
    },

    // Load more comments

    loadMoreComments(id) {
      const data = {
        posts_id: id,
        post_id: this.postCommentId,
        action: this.action,
      }
      axios({
        method: 'post',
        url: ' newsfeed/getAllCommentByPostId?a=',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          this.getComments = response.data.result
          this.postCommentId

          this.getPostDetails.map((post) => {
            if (parseInt(post.posts_id) == parseInt(id)) {
              post.comments = response.data.result
            }
            return post
          })
          this.isShowLoadMoreComments.push(id)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Get comments reply

    getCommentReply(id) {
      const data = {
        comments_id: id,
      }
      axios({
        method: 'post',
        url: ' newsfeed/getCommentReply',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          return response
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Add Current User Likes

    addLikes(id) {
      const data = {
        posts_id: id,
      }
      axios({
        method: 'post',
        url: ' newsfeed/addLikes',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response.data.result >= 0) {
            this.post_ids.push(id)
            this.getPostDetails.map((post) => {
              if (parseInt(post.posts_id) == parseInt(id)) {
                console.log('add like res =>', response)
                return (post.likeCount = parseInt(post.likeCount) + 1)
              }
              return post
            })
          } else {
            this.post_ids = this.post_ids.filter((_v) => _v != parseInt(id))
            this.getPostDetails.map((post) => {
              if (parseInt(post.posts_id) == parseInt(id)) {
                console.log('remove like res =>', response)
                return (post.likeCount = parseInt(post.likeCount) - 1)
              }
              return post
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Add Comments Likes

    addCommentsLike(id) {
      const data = {
        posts_id: id,
        comments_id: this.commentID,
      }
      axios({
        method: 'post',
        url: ' newsfeed/addcommentLikes',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response.data.result >= 0) {
            this.replyComment_ids.push(id)
          } else {
            this.replyComment_ids = this.replyComment_ids.filter(
              (_v) => _v != parseInt(id)
            )
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Add Current User Comment

    addCurrentUserComment(post) {
      const data = {
        posts_id: post.posts_id,
        text: post.commentText,
      }
      axios({
        method: 'post',
        url: ' newsfeed/addComments',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            post.commentText = ''
            let getCommentData = {
              posts_id: post.posts_id,
              action: this.action,
            }

            axios({
              method: 'post',
              url: ' newsfeed/getAllCommentByPostId',
              data: getCommentData,
              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
              },
            }).then((response2) => {
              this.getPostDetails = this.getPostDetails.map((user) => {
                if (
                  parseInt(user.posts_id) == parseInt(post.posts_id) &&
                  response.data.result.length
                ) {
                  user.comments = [response2.data.result[0]]
                  user.commentCount = response2.data.result.length
                }
                return user
              })
              if (response.data.status == true) {
                this.$toastr.s('Comment added successfully.')
              }

              post.commentText = ''
            })
          }
        })
        .catch((error) => {
          this.$toastr.e('Something went wrong!')
          console.log(error)
        })
    },

    // Get Comment likes counts

    getCommentLikesCounts(comment) {
      let count = this.replyComment_ids.find((v) => v == comment.comments_id)
      if (!count) {
        return comment.commentReplyCount
      } else {
        return parseInt(comment.commentReplyCount) + 1
      }
    },

    // Add Comments Reply

    addCommentReplyData(comment, reply, post_id) {
      const data = {
        comments_id: comment.comments_id,
        text: reply,
      }

      axios({
        method: 'post',
        url: ' newsfeed/addCommentsReply',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let getCommentReplyData = { comments_id: comment.comments_id }

            axios({
              method: 'post',
              url: ' newsfeed/getCommentReply',
              data: getCommentReplyData,

              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
              },
            }).then((response) => {
              this.getPostDetails = this.getPostDetails.map((post) => {
                if (parseInt(post.posts_id) == parseInt(post_id)) {
                  let commentsReply = post.comments
                  commentsReply = commentsReply.map((reply) => {
                    if (
                      parseInt(reply.comments_id) ==
                      parseInt(comment.comments_id)
                    ) {
                      reply.commentReplyCount =
                        parseInt(reply.commentReplyCount) + 1
                      reply.replies = response.data.result
                    }
                    return reply
                  })
                  post.comments = commentsReply
                }
                return post
              })

              comment.replyText = ''
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // File Upload

    onImageChange(e) {
      if (e.target.files[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage.push(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
      }
      var d = new Date()
      var time = d.getTime()

      var payload = new FormData()
      payload.append('video_count', `${time}_${this.video_count}`)

      payload.append('file', e.target.files[0])

      axios
        .post(
          ' ImageLib/postImg',
          payload,
          {
            'Content-Type': 'multipart/form-data',

            headers: {
              Authorization: localStorage.getItem('token'),
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          this.imagesId.push(res.data.result.video_count)
          this.isSaving = false
        })

        .catch((err) => {
          console.log(err)
        })
    },

    // Reset Current Post Modal data
    resetModal() {
      this.post_title = ''
      this.post_text = ''
      this.imagesId.splice(0, this.imagesId.length)
      this.previewImage.splice(0, this.previewImage.length)
    },

    // Reset Share Modal data
    resetSharePostModal() {
      this.sharePostData.share_post_title = ''
      this.sharePostData.sharePostText = ''
    },

    // Add New Post Data

    submitPostData() {
      this.isSaving = true
      // this.isPostTitle = true

      // this.isPostTitle = false
      const data = {
        anonymous_status: '',
        comments_status: this.comments_status,
        post_text: this.post_text,
        post_title: this.post_title,
        files_ids: this.filesid,
        images_ids: this.imagesId,
        m_ids: this.post_text,
        postPrivacy: this.post_privacy.value,
        url: '',
        url_content: '',
        url_images: '',
        url_title: '',
        video_ids: '',
      }

      axios({
        method: 'post',
        url: ' newsfeed/addPost',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let commentRes = response.data.result
            commentRes.comments = []
            this.getPostDetails = [commentRes, ...this.getPostDetails]
            this.$bvModal.hide('modal-prevent-closing')
            if (response.data.status == true) {
              this.$toastr.s('Post added successfully.')
            }
          }

          this.resetModal()

          this.dialog = false
          this.isSaving = false
        })
        .catch((error) => {
          console.log(error)
          this.$toastr.e('Something went wrong!')
          this.isSaving = true
        })
    },

    // Post delete Swal alert

    postDeleteAlert(post) {
      this.isMenu = false

      this.$swal
        .fire({
          title: 'Are you sure?',
          text: 'You want to delete this post!',
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#f2613c',
          confirmButtonText: 'Yes, delete it!',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.deletePost(post)
          }
        })
    },

    // Delete Post OK

    deletePost(post) {
      let data = {
        postData: post,
      }

      axios({
        method: 'post',
        url: ' newsfeed/deletePost',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response.data.status === true) {
            let index = this.getPostDetails.findIndex(
              (_post) => _post.posts_id === post.posts_id
            )
            this.getPostDetails.splice(index, 1)
            this.$toastr.s('Post deleted successfully')
          }
        })
        .catch((err) => {
          console.log(err)
          this.$toastr.e('Something went wrong!')
        })
    },

    // Copy Link to Clipboard

    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement('textarea')
      textArea.value = text
      // Avoid scrolling to bottom
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.position = 'fixed'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        var successful = document.execCommand('copy')
        var msg = successful ? 'successful' : 'unsuccessful'
        console.log('Fallback: Copying text command was ' + msg)
      } catch (err) {
        console.log(err)
      }
      document.body.removeChild(textArea)
    },

    copyLinkToPost(post) {
      const text =
        'http://qapin_mvp5.manageprojects.in/' + 'post/' + post.first_name + b
      '-' + post.last_name + '-activity-' + post.posts_id

      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text)
        return
      }
      navigator.clipboard.writeText(text).then(
        function () {
          return true
        },
        function (err) {
          console.log(err)
          return false
        }
      )
      this.$toastr.s('Copied Post link successfully.')
    },

    // Copy Link To Comment

    copyLinkToComment(post, comment) {
      const text =
        'http://qapin_mvp5.manageprojects.in/' +
        'post/' +
        post.first_name +
        '-' +
        post.last_name +
        '-comment-' +
        comment.comments_id +
        '-activity-' +
        post.posts_id

      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text)
        return
      }
      navigator.clipboard.writeText(text).then(
        function () {
          return true
        },

        function (err) {
          console.log(err)
          return false
        }
      )

      this.$toastr.s('Copied comment link successfully.')
    },

    // Edit Comment

    editComment(id) {
      this.isMenu = false
      this.comment_ids.push(id)
    },

    // Edit Post Comment

    editPostComment(comment, text, posts_id) {
      this.isMenu = false

      const data = {
        commentData: comment,
        textComment: text,
      }

      axios({
        method: 'post',
        url: ' newsfeed/editComments',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let getAllCommentByPostId = { posts_id: posts_id }

            axios({
              method: 'post',
              url: ' newsfeed/getAllCommentByPostId',
              data: getAllCommentByPostId,

              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
              },
            }).then((response2) => {
              const index = this.comment_ids.findIndex(
                (id) => id === comment.comments_id
              )
              this.comment_ids.splice(index, 1)
              if (response.data.status == true) {
                this.getPostDetails = this.getPostDetails.map((user) => {
                  if (parseInt(user.posts_id) == parseInt(posts_id)) {
                    user.comments = response2.data.result
                  }
                  return user
                })
                this.$toastr.s('Comment updated successfully.')
              }
            })
          }
        })
        .catch((error) => {
          this.$toastr.e('Something went wrong!')

          console.log(error)
        })
    },

    // Delete post comment

    deletePostComment(comment, posts_id) {
      const data = {
        commentData: comment,
      }

      axios({
        method: 'post',
        url: ' newsfeed/deleteComment',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let getAllCommentByPostId = { posts_id: posts_id }

            axios({
              method: 'post',
              url: ' newsfeed/getAllCommentByPostId',
              data: getAllCommentByPostId,

              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
              },
            }).then((response2) => {
              if (response.data.status == true) {
                this.getPostDetails = this.getPostDetails.map((user) => {
                  if (parseInt(user.posts_id) == parseInt(posts_id)) {
                    user.comments = response2.data.result
                  }
                  return user
                })
                this.$toastr.s('Comment deleted successfully.')
              }
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Report Comment

    reportComment(id) {
      this.reportCommentID = id
    },

    // Edit Comment reply

    editCommentReply(id) {
      this.isMenu = false
      this.comment_reply_ids.push(id)
    },

    // Edit Post Comment

    editPostCommentReply(reply, text, posts_id, comments_id) {
      this.isMenu = false

      const data = {
        commentReplyData: reply,
        textComment: text,
      }

      axios({
        method: 'post',
        url: ' newsfeed/editCommentsReply',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let getCommentReplyData = { comments_id: comments_id }

            axios({
              method: 'post',
              url: ' newsfeed/getCommentReply',
              data: getCommentReplyData,

              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
              },
            }).then((response) => {
              const index = this.comment_reply_ids.findIndex(
                (id) => id === reply.comment_replies_id
              )
              this.comment_reply_ids.splice(index, 1)
              this.getPostDetails = this.getPostDetails.map((post) => {
                if (parseInt(post.posts_id) == parseInt(posts_id)) {
                  let commentsReply = post.comments
                  commentsReply = commentsReply.map((reply) => {
                    if (parseInt(reply.comments_id) == parseInt(comments_id)) {
                      reply.commentReplyCount =
                        parseInt(reply.commentReplyCount) + 1
                      reply.replies = response.data.result
                    }
                    return reply
                  })
                  post.comments = commentsReply
                }

                return post
              })
            })
            this.$toastr.s('Reply updated successfully.')
          }
        })
        .catch((error) => {
          this.$toastr.e('Something went wrong!')
          console.log(error)
        })
    },

    // Delete post comment

    deletePostCommentReply(reply, posts_id, comments_id) {
      this.isMenu = false
      const data = {
        commentReplyData: reply,
      }

      axios({
        method: 'post',
        url: ' newsfeed/deleteCommentReply',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let getCommentReplyData = { comments_id: comments_id }

            axios({
              method: 'post',
              url: ' newsfeed/getCommentReply',
              data: getCommentReplyData,

              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
              },
            }).then((response) => {
              const index = this.comment_reply_ids.findIndex(
                (id) => id === reply.comment_replies_id
              )
              this.comment_reply_ids.splice(index, 1)
              this.getPostDetails = this.getPostDetails.map((post) => {
                if (parseInt(post.posts_id) == parseInt(posts_id)) {
                  let commentsReply = post.comments
                  commentsReply = commentsReply.map((reply) => {
                    if (parseInt(reply.comments_id) == parseInt(comments_id)) {
                      reply.commentReplyCount =
                        parseInt(reply.commentReplyCount) + 1
                      reply.replies = response.data.result
                    }
                    return reply
                  })
                  post.comments = commentsReply
                }

                return post
              })
            })
            this.$toastr.s('Reply deleted successfully.')
          }
        })
        .catch((error) => {
          this.$toastr.e('Something went wrong!')
          console.log(error)
        })
    },

    // Disable post comment
    disablePostComment(post, status) {
      this.isMenu = false
      let data = {
        postData: {
          ...post,
          comments_status: status,
        },
      }
      axios({
        method: 'post',
        url: ' newsfeed/disablePostComment',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response.data.status == true) {
            this.getPostDetails = this.getPostDetails.map((user) => {
              if (parseInt(user.posts_id) == parseInt(post.posts_id)) {
                if (status === true) {
                  user.comments_status = '1'
                } else {
                  user.comments_status = '0'
                }
              }
              return user
            })
            if (status === true) {
              this.$toastr.s('Enabled commnets on this post successfully.')
            } else {
              this.$toastr.s('Disabled commnets on this post successfully.')
            }
          }
        })
        .catch((err) => {
          this.$toastr.e('Something went wrong!')
          console.log(err)
        })
    },

    // Share Post data

    showSharePostModal(post) {
      this.postId = true
      this.isSharePostModal = true
      this.sharePostData = post
    },

    // Share New Post

    submitSharePostData() {
      this.isSaving = true

      let newData = {
        comments_status: this.sharePostData.share_comment_status,
        postPrivacy: this.sharePostData.share_post_privacy,
        post_text: this.sharePostData.sharePostText,
        post_title: this.sharePostData.sharePostTitle,
      }

      const shareData = this.sharePostData

      axios({
        method: 'post',
        url: ' newsfeed/addPost',
        data: {
          ...newData,
          shareData,
        },

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let post = response.data.result
            this.getPostDetails = [post, ...this.getPostDetails]

            this.resetSharePostModal()
            if (response.data.result) {
              this.$bvModal.hide('modal-prevent-closing')
              this.isSharePostModal = false
              this.$bvModal.hide(`share-post-modal`)
            }

            if (response.data.status == true) {
              this.$toastr.s('Post share successfully.')
            }
            this.isSaving = false
          }
        })
        .catch((err) => {
          this.isSaving = true
          this.$toastr.e('Something went wrong!')

          console.log(err)
        })
    },

    // Edit Current Post Modal

    editModal(post) {
      this.selectedPost = post
      if (this.selectedPost) {
        const postPrivacy = this.postPrivacyOptions.find(
          (_p) => parseInt(_p.value) == parseInt(this.selectedPost.postPrivacy)
        )

        this.editData.post_privacy = postPrivacy

        this.editData.post_title = this.selectedPost.postTitle
        this.editData.post_text = this.selectedPost.postText
        if (this.selectedPost.comments_status != '0') {
          this.editData.comments_status = true
        } else {
          this.editData.comments_status = false
        }

        this.editData.anonymous_status = this.selectedPost.anonymous_status
      }
    },

    // Edit post data

    editPostData() {
      this.isSaving = true
      // this.isPostTitle = true

      // if (this.editData.post_title != '') {
      // this.isPostTitle = false
      const data = {
        anonymous_status: this.editData.anonymous_status,
        comments_status: this.editData.comments_status,
        post_text: this.editData.post_text,
        post_title: this.editData.post_title,
        post_privacy: this.editData.post_privacy.value,
        postData: this.selectedPost,
      }
      this.isMenu = false

      axios({
        method: 'post',
        url: ' newsfeed/addPost',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          if (response) {
            let commentRes = response.data.result
            commentRes.comments = []
            this.getPostDetails = [commentRes, ...this.getPostDetails]
            this.$bvModal.hide(`edit-modal-${response.data.result.posts_id}`)

            this.selectedPost = null
            if (response.data.status == true) {
              this.$toastr.s('Post updated successfully.')
            }
          }

          this.resetModal()

          this.dialog = false
          this.isSaving = false
        })
        .catch((error) => {
          console.log(error)
          this.$toastr.e('Something went wrong!')
          this.isSaving = true
        })
      // }
    },

    // Report Post Comment

    reportPostComment() {
      this.isSaving = true

      const data = {
        uuid: this.uuid,
        create_timestamp: this.createdData,
        comments_id: this.comments_id,
      }

      axios({
        method: 'post',
        url: ' newsfeed/reportPostComment',
        data,

        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((response) => {
          console.log('', response)
          this.isSaving = false
        })
        .catch((error) => {
          console.log(error)
          this.isSaving = true
        })
    },
  },
}
</script>

<style scoped lang="css">
.vue-content-placeholders-heading__img {
  position: relative;
  overflow: hidden;
  height: 15px;
  background: #eee;
  width: 68px;
  height: 68px;
  border-radius: 50px;
  margin-right: 15px;
}

.vue-content-placeholders-text__line:nth-child(4n + 1) {
  /* width: 40%; */
}
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

.vgs__container {
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  overflow: hidden;
  max-width: 200vh;
  margin: 0.5rem auto;
  left: 0.5rem;
  right: 0.5rem;
  height: 80vh;
  border-radius: 12px;
  background-color: #000;
}

.modal-post-img-container {
  height: 75vh;
}

.modal-post-main-container {
  cursor: pointer;
  height: 70vh;
}

.modal-post-details-container {
  height: 80vh;
}

@media only screen and (max-width: 1199px) {
  .modal-post-main-container {
    height: 200vh;
  }

  .modal-post-details-container {
    height: 100vh;
  }
}

.user-left-section {
  left: 13%;
}

.newsfeed-right-section {
  right: 13%;
  bottom: 20%;
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
    bottom: 2%;
  }
}

@media only screen and (max-width: 1400px) {
  .user-left-section {
    left: 2%;
  }

  .newsfeed-right-section {
    right: 2%;
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
    left: 8%;
  }

  .newsfeed-right-section {
    right: 8%;
  }
}
@media only screen and (max-width: 1080px) {
  .user-left-section {
    left: 9%;
  }

  .newsfeed-right-section {
    right: 9%;
  }
}

@media only screen and (max-width: 1870px) {
  .user-left-section {
    left: 15%;
  }

  .newsfeed-right-section {
    right: 15%;
    /* bottom: 10%; */
  }
}

@media only screen and (max-width: 1696px) {
  .user-left-section {
    left: 4%;
  }

  .newsfeed-right-section {
    right: 4%;
  }
}

@media only screen and (max-width: 1477px) {
  .user-left-section {
    left: 2%;
  }

  .newsfeed-right-section {
    right: 2%;
    bottom: 4%;
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
    left: 2%;
  }

  .newsfeed-right-section {
    right: 2%;
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
.radio input[type='radio']:checked + .radio-label:before {
  background-color: #f26136;
  box-shadow: inset 0 0 0 4px #f4f4f4;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
