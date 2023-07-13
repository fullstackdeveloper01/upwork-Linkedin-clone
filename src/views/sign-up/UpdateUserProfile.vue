<template>
  <section class="login-wrapper">
    <div class="container-fluid">
      <b-row>
        <b-col xl="4" lg="4" md="12" class="fxt-bg-img fxt-bg-img3" :style="{ backgroundImage: `url(${image})` }">
          <a href="javascript:void(0);" class="fxt-logo mt-8 d-block">
            <svg width="106px" height="24px" viewBox="0 0 106 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>0DDEA7CC-09FA-43D7-91E5-0FB6CE4E5E4E</title>
              <g id="calendar-9Dec2020" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Header/header" transform="translate(-25.000000, -23.000000)" fill="#FFFFFF">
                  <path
                    d="M37.2171088,23 C40.6784385,23 43.5744946,24.1647612 45.9047399,26.4922442 C48.1732115,28.7147603 49.3481642,31.4316658 49.4297823,34.6412076 C49.4346831,34.8394428 49.2718155,35.0020449 49.0733162,35.0020449 L49.0733162,35.0020449 L43.9787986,35.0020449 C43.7939074,35.0020449 43.6317561,34.8510342 43.6242,34.6665013 C43.5543331,32.9586238 42.9458358,31.4993541 41.7983858,30.2895509 C40.5769865,28.9791096 39.049727,28.323084 37.2171088,28.323084 C35.3844905,28.323084 33.8572311,28.9791096 32.6358318,30.2895509 C31.4138953,31.5778468 30.8032135,33.149024 30.8032135,35.0020449 C30.8032135,36.8560677 31.4138953,38.4382996 32.6358318,39.7488125 C33.7821358,40.9579001 35.1978804,41.5998658 36.8825642,41.6742084 C37.0665959,41.6822938 37.2171088,41.8443236 37.2171088,42.0282841 L37.2171088,42.0282841 L37.2171088,46.643825 C37.2171088,46.8419528 37.0543845,47.0045192 36.8561,47 C33.5312811,46.9226278 30.7444838,45.7713542 28.4951351,43.5461191 C26.1648899,41.2181352 25,38.3702536 25,35.0020449 C25,31.6348381 26.1648899,28.7975819 28.4951351,26.4922442 C30.8254162,24.1647612 33.7325736,23 37.2171088,23 Z M65.6810811,23.3393359 C65.8110743,23.3393359 65.9582568,23.4371834 66.00875,23.5567828 L66.00875,23.5567828 L75.4832162,46.0364191 C75.5974527,46.3076731 75.4499122,46.5296278 75.1551892,46.5296278 L75.1551892,46.5296278 L69.82475,46.5296278 C69.6915338,46.5296278 69.5425608,46.4282385 69.4938581,46.304346 L69.4938581,46.304346 L68.0213176,42.5628857 L58.2475088,42.5628857 L56.80795,46.3018416 C56.7597128,46.4271294 56.6103459,46.5296278 56.4760196,46.5296278 L56.4760196,46.5296278 L51.1480514,46.5296278 C50.8530777,46.5296278 50.7056446,46.30753 50.8204541,46.0360255 L50.8204541,46.0360255 L60.3275081,23.5563535 C60.3780014,23.4370046 60.5254345,23.3393359 60.6551412,23.3393359 L60.6551412,23.3393359 Z M87.1478716,23.474963 C90.1796149,23.474963 92.5549459,24.2323064 94.2749392,25.7465281 C96.0393378,27.2612148 96.9217162,29.3179089 96.9217162,31.9172185 C96.9217162,34.6072561 96.0056757,36.7431584 94.1732365,38.3248895 C92.3404392,39.8844395 89.8512297,40.663964 86.7066824,40.663964 L86.7066824,40.663964 L83.5846959,40.663964 L83.5846959,46.1743 C83.5846959,46.3697446 83.4246216,46.5296278 83.2290946,46.5296278 L83.2290946,46.5296278 L78.2048378,46.5296278 C78.0089527,46.5296278 77.8492365,46.3697446 77.8492365,46.1743 L77.8492365,46.1743 L77.8492365,23.8302908 C77.8492365,23.6348819 78.0089527,23.474963 78.2048378,23.474963 L78.2048378,23.474963 Z M105.023196,23.474963 C105.218723,23.474963 105.378797,23.6348819 105.378797,23.8302908 L105.378797,23.8302908 L105.378797,46.1743 C105.378797,46.3697446 105.218723,46.5296278 105.023196,46.5296278 L105.023196,46.5296278 L99.9989392,46.5296278 C99.8030541,46.5296278 99.6433378,46.3697446 99.6433378,46.1743 L99.6433378,46.1743 L99.6433378,23.8302908 C99.6433378,23.6348819 99.8030541,23.474963 99.9989392,23.474963 L99.9989392,23.474963 Z M114.003473,23.474963 C114.093716,23.474963 114.215115,23.5308452 114.273845,23.5991774 L114.273845,23.5991774 L125.298561,36.4602413 L125.298561,23.8302908 C125.298561,23.6348819 125.458635,23.474963 125.65452,23.474963 L125.65452,23.474963 L130.644399,23.474963 C130.839926,23.474963 131,23.6348819 131,23.8302908 L131,23.8302908 L131,46.1743 C131,46.3697446 130.839926,46.5296278 130.644399,46.5296278 L130.644399,46.5296278 L126.749973,46.5296278 C126.660804,46.5296278 126.54048,46.4749262 126.482108,46.4081323 L126.482108,46.4081323 L115.525074,33.8831845 L115.525074,46.1743 C115.525074,46.3697446 115.365,46.5296278 115.169473,46.5296278 L115.169473,46.5296278 L110.144858,46.5296278 C109.949331,46.5296278 109.789257,46.3697446 109.789257,46.1743 L109.789257,46.1743 L109.789257,23.8302908 C109.789257,23.6348819 109.949331,23.474963 110.144858,23.474963 L110.144858,23.474963 Z M40.9961878,37.3183301 C41.0893676,37.2235593 41.2658074,37.1883557 41.3882804,37.2400521 L41.3882804,37.2400521 L47.9629304,40.0156303 C48.1582784,40.0980941 48.2363101,40.3184031 48.1404804,40.5073722 C47.5850905,41.6023701 46.8356419,42.6135446 45.8997622,43.5484804 C44.9502385,44.4876735 43.8896297,45.2389349 42.7488764,45.7945013 C42.5615142,45.8857303 42.3433547,45.8075596 42.2616345,45.615943 L42.2616345,45.615943 L39.5021966,39.1514596 C39.4506291,39.0310374 39.4836108,38.8560925 39.5755014,38.7626812 L39.5755014,38.7626812 Z M63.1342162,30.0182968 L60.1477736,37.6804912 L66.1211959,37.6804912 L63.1342162,30.0182968 Z M87.0458108,28.5267929 L83.5846959,28.5267929 L83.5846959,35.6464433 L87.0458108,35.6464433 C88.3127973,35.6464433 89.3251689,35.3076083 90.0832838,34.6294373 C90.8413986,33.9512663 91.2206351,33.0476704 91.2206351,31.9172185 C91.2206351,30.8774947 90.8413986,30.0520694 90.0832838,29.4419803 C89.3251689,28.8318554 88.3127973,28.5267929 87.0458108,28.5267929 L87.0458108,28.5267929 Z"
                    id="Combined-Shape"></path>
                </g>
              </g>
            </svg>
          </a>
          <div class="fxt-header">
            <p>Qapin Connects Clients, Inspection Engineers, And Inspection Companies That Provide Inspection Services</p>
          </div>
        </b-col>
        <b-col xl="8" lg="8" md="12" class="bg-white pos-rel">
          <div class="mobile-logo-wrap">
            <a href="javascript:void(0);" class="fxt-logo mt-1 d-block py-2 text-center">
              <svg class="m-auto" width="106px" height="24px" viewBox="0 0 106 24" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>0DDEA7CC-09FA-43D7-91E5-0FB6CE4E5E4E</title>
                <g id="calendar-9Dec2020" stroke="none" stroke-width="1" fill="#000" fill-rule="evenodd">
                  <g id="Header/header" transform="translate(-25.000000, -23.000000)" fill="#FFFFFF">
                    <path
                      d="M37.2171088,23 C40.6784385,23 43.5744946,24.1647612 45.9047399,26.4922442 C48.1732115,28.7147603 49.3481642,31.4316658 49.4297823,34.6412076 C49.4346831,34.8394428 49.2718155,35.0020449 49.0733162,35.0020449 L49.0733162,35.0020449 L43.9787986,35.0020449 C43.7939074,35.0020449 43.6317561,34.8510342 43.6242,34.6665013 C43.5543331,32.9586238 42.9458358,31.4993541 41.7983858,30.2895509 C40.5769865,28.9791096 39.049727,28.323084 37.2171088,28.323084 C35.3844905,28.323084 33.8572311,28.9791096 32.6358318,30.2895509 C31.4138953,31.5778468 30.8032135,33.149024 30.8032135,35.0020449 C30.8032135,36.8560677 31.4138953,38.4382996 32.6358318,39.7488125 C33.7821358,40.9579001 35.1978804,41.5998658 36.8825642,41.6742084 C37.0665959,41.6822938 37.2171088,41.8443236 37.2171088,42.0282841 L37.2171088,42.0282841 L37.2171088,46.643825 C37.2171088,46.8419528 37.0543845,47.0045192 36.8561,47 C33.5312811,46.9226278 30.7444838,45.7713542 28.4951351,43.5461191 C26.1648899,41.2181352 25,38.3702536 25,35.0020449 C25,31.6348381 26.1648899,28.7975819 28.4951351,26.4922442 C30.8254162,24.1647612 33.7325736,23 37.2171088,23 Z M65.6810811,23.3393359 C65.8110743,23.3393359 65.9582568,23.4371834 66.00875,23.5567828 L66.00875,23.5567828 L75.4832162,46.0364191 C75.5974527,46.3076731 75.4499122,46.5296278 75.1551892,46.5296278 L75.1551892,46.5296278 L69.82475,46.5296278 C69.6915338,46.5296278 69.5425608,46.4282385 69.4938581,46.304346 L69.4938581,46.304346 L68.0213176,42.5628857 L58.2475088,42.5628857 L56.80795,46.3018416 C56.7597128,46.4271294 56.6103459,46.5296278 56.4760196,46.5296278 L56.4760196,46.5296278 L51.1480514,46.5296278 C50.8530777,46.5296278 50.7056446,46.30753 50.8204541,46.0360255 L50.8204541,46.0360255 L60.3275081,23.5563535 C60.3780014,23.4370046 60.5254345,23.3393359 60.6551412,23.3393359 L60.6551412,23.3393359 Z M87.1478716,23.474963 C90.1796149,23.474963 92.5549459,24.2323064 94.2749392,25.7465281 C96.0393378,27.2612148 96.9217162,29.3179089 96.9217162,31.9172185 C96.9217162,34.6072561 96.0056757,36.7431584 94.1732365,38.3248895 C92.3404392,39.8844395 89.8512297,40.663964 86.7066824,40.663964 L86.7066824,40.663964 L83.5846959,40.663964 L83.5846959,46.1743 C83.5846959,46.3697446 83.4246216,46.5296278 83.2290946,46.5296278 L83.2290946,46.5296278 L78.2048378,46.5296278 C78.0089527,46.5296278 77.8492365,46.3697446 77.8492365,46.1743 L77.8492365,46.1743 L77.8492365,23.8302908 C77.8492365,23.6348819 78.0089527,23.474963 78.2048378,23.474963 L78.2048378,23.474963 Z M105.023196,23.474963 C105.218723,23.474963 105.378797,23.6348819 105.378797,23.8302908 L105.378797,23.8302908 L105.378797,46.1743 C105.378797,46.3697446 105.218723,46.5296278 105.023196,46.5296278 L105.023196,46.5296278 L99.9989392,46.5296278 C99.8030541,46.5296278 99.6433378,46.3697446 99.6433378,46.1743 L99.6433378,46.1743 L99.6433378,23.8302908 C99.6433378,23.6348819 99.8030541,23.474963 99.9989392,23.474963 L99.9989392,23.474963 Z M114.003473,23.474963 C114.093716,23.474963 114.215115,23.5308452 114.273845,23.5991774 L114.273845,23.5991774 L125.298561,36.4602413 L125.298561,23.8302908 C125.298561,23.6348819 125.458635,23.474963 125.65452,23.474963 L125.65452,23.474963 L130.644399,23.474963 C130.839926,23.474963 131,23.6348819 131,23.8302908 L131,23.8302908 L131,46.1743 C131,46.3697446 130.839926,46.5296278 130.644399,46.5296278 L130.644399,46.5296278 L126.749973,46.5296278 C126.660804,46.5296278 126.54048,46.4749262 126.482108,46.4081323 L126.482108,46.4081323 L115.525074,33.8831845 L115.525074,46.1743 C115.525074,46.3697446 115.365,46.5296278 115.169473,46.5296278 L115.169473,46.5296278 L110.144858,46.5296278 C109.949331,46.5296278 109.789257,46.3697446 109.789257,46.1743 L109.789257,46.1743 L109.789257,23.8302908 C109.789257,23.6348819 109.949331,23.474963 110.144858,23.474963 L110.144858,23.474963 Z M40.9961878,37.3183301 C41.0893676,37.2235593 41.2658074,37.1883557 41.3882804,37.2400521 L41.3882804,37.2400521 L47.9629304,40.0156303 C48.1582784,40.0980941 48.2363101,40.3184031 48.1404804,40.5073722 C47.5850905,41.6023701 46.8356419,42.6135446 45.8997622,43.5484804 C44.9502385,44.4876735 43.8896297,45.2389349 42.7488764,45.7945013 C42.5615142,45.8857303 42.3433547,45.8075596 42.2616345,45.615943 L42.2616345,45.615943 L39.5021966,39.1514596 C39.4506291,39.0310374 39.4836108,38.8560925 39.5755014,38.7626812 L39.5755014,38.7626812 Z M63.1342162,30.0182968 L60.1477736,37.6804912 L66.1211959,37.6804912 L63.1342162,30.0182968 Z M87.0458108,28.5267929 L83.5846959,28.5267929 L83.5846959,35.6464433 L87.0458108,35.6464433 C88.3127973,35.6464433 89.3251689,35.3076083 90.0832838,34.6294373 C90.8413986,33.9512663 91.2206351,33.0476704 91.2206351,31.9172185 C91.2206351,30.8774947 90.8413986,30.0520694 90.0832838,29.4419803 C89.3251689,28.8318554 88.3127973,28.5267929 87.0458108,28.5267929 L87.0458108,28.5267929 Z"
                      id="Combined-Shape"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>

          <div class="fxt-bg-color right-content">
            <div class="fxt-content" v-if="step == 0">
              <div class="fxt-form">
                <h2 class="title mb-0">Hey {{ $store.state.currentUserData.first_name }}, Ready for your next big
                  oppurtunity?</h2>
                <br>
                <template>
                  <div class="begin-step-signup">
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <!-- <b-form-group class="form-group"> -->
                        <div class="border mb-3 br-20 custompadding">
                          <div class="d-flex align-items-center">
                            <!-- <b-form-radio v-model="profile.quality_professional_flag" :aria-describedby="ariaDescribedby"  value="N" @input="$v.profile.quality_professional_flag.$touch()"> -->
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/user.png'" class="img-fluid">
                            <span class="ml-1">Answer a few questions and start building your profile</span>
                            <!-- </b-form-radio> -->
                            <hr>
                          </div>
                        </div>
                        <div class="border mb-3 br-20 custompadding">
                          <div class="d-flex align-items-center">
                            <!-- <b-form-radio v-model="profile.quality_professional_flag" :aria-describedby="ariaDescribedby"  value="Y" @input="$v.profile.quality_professional_flag.$touch()">  -->
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/open.png'" class="img-fluid">
                            <span class="ml-1">Apply for open roles or list services for clients to buy</span>
                            <!-- </b-form-radio> -->
                            <hr>
                          </div>
                        </div>
                        <div class="border mb-3 br-20 custompadding">
                          <div class="d-flex align-items-center">
                            <!-- <b-form-radio v-model="profile.quality_professional_flag" :aria-describedby="ariaDescribedby"  value="z" @input="$v.profile.quality_professional_flag.$touch()">  -->
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/shield.png'" class="img-fluid">
                            <span class="ml-1">Get paid safely and know we're there to help</span>
                            <!-- </b-form-radio> -->
                            <hr>
                          </div>
                        </div>
                        <!-- </b-form-group> -->
                      </b-col>
                      <b-col xl="12" lg="12" md="12">
                      </b-col>
                    </b-row>
                  </div>
                </template>

                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div class="fxt-content" v-if="step == 1">
              <div class="fxt-form">
                <h2 class="title mb-0">A few quick questions: first, have you freelanced before ?</h2>
                <p class="mb-2 fz-14 text-muted mt-4">This lets us know how much help to give you along the way (we won't
                  share your answer with anyone else, including potential clients)</p>

                <template>
                  <div class="begin-step-signup">
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <b-form-group v-slot="{ ariaDescribedby }" class="form-group">
                          <b-form-radio v-model="updateProfile.freelancer_before" :aria-describedby="ariaDescribedby"
                            value="I am brand new to this" @input="$v.updateProfile.freelancer_before.$touch()">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/plant.png'" class="img-fluid">
                            <span class="ml-1">I am brand new to this</span>
                          </b-form-radio>

                          <b-form-radio v-model="updateProfile.freelancer_before" :aria-describedby="ariaDescribedby"
                            value="I have some experience" @input="$v.updateProfile.freelancer_before.$touch()">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/faq.png'" class="img-fluid">
                            <span class="ml-1">I have some experience</span>
                          </b-form-radio>

                          <b-form-radio v-model="updateProfile.freelancer_before" :aria-describedby="ariaDescribedby"
                            value="I am an expert" @input="$v.updateProfile.freelancer_before.$touch()">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/star.png'" class="img-fluid">
                            <span class="ml-1">I am an expert</span>
                          </b-form-radio>
                        </b-form-group>
                        <p class="text-danger" v-if="updateProfileFreelancerBeforeErrors[0]">
                          {{ updateProfileFreelancerBeforeErrors[0] }}</p>

                      </b-col>
                      <b-col xl="12" lg="12" md="12">
                      </b-col>
                    </b-row>
                  </div>
                </template>

                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(0)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content begin-step-signup" v-if="step == 2">
              <div class="fxt-form">
                <h2 class="title mb-0">Got it: so what's your biggest goal for freelancing ?</h2>
                <p class="mb-2 fz-14 text-muted mt-4">Diffrent people come to Qapin for diffrent reasons. we want to
                  highlight the opportunities that fir your goals best - while still showing you all the possibilities.
                </p>

                <template>
                  <div>
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <b-form-group v-slot="{ ariaDescribedby }" class="form-group">
                          <b-form-radio v-model="updateProfile.biggest_goal" :aria-describedby="ariaDescribedby"
                            value="To earn my main income" @input="$v.updateProfile.biggest_goal.$touch()">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/diamond.png'" class="img-fluid">
                            <span class="ml-1">To earn my main income</span>
                          </b-form-radio>
                          <b-form-radio v-model="updateProfile.biggest_goal" :aria-describedby="ariaDescribedby"
                            value="To make money on the side" @input="$v.updateProfile.biggest_goal.$touch()">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/briefcase.png'" class="img-fluid">
                            <span class="ml-1">To make money on the side</span>
                          </b-form-radio>

                          <b-form-radio v-model="updateProfile.biggest_goal" :aria-describedby="ariaDescribedby"
                            value="To get experience so i can find full-time job"
                            @input="$v.updateProfile.biggest_goal.$touch()">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/stars.png'" class="img-fluid">
                            <span class="ml-1">To get experience so i can find full-time job </span>
                          </b-form-radio>

                          <b-form-radio v-model="updateProfile.biggest_goal" :aria-describedby="ariaDescribedby"
                            value="I don't have a goal yet: I'm exploring"
                            @input="$v.updateProfile.biggest_goal.$touch()">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/faq.png'" class="img-fluid">
                            <span class="ml-1">I don't have a goal yet: I'm exploring</span>
                          </b-form-radio>

                        </b-form-group>
                        <p class="text-danger" v-if="updateProfileBiggestGoalErrors[0]">
                          {{ updateProfileBiggestGoalErrors[0] }}</p>

                      </b-col>
                      <b-col xl="12" lg="12" md="12">
                      </b-col>
                    </b-row>
                  </div>
                </template>

                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(1)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content begin-step-signup workas-radio" v-if="step == 3">
              <div class="fxt-form">
                <h2 class="title mb-0">And how would you like to work ?</h2>
                <p class="b-2 fz-14 text-muted mt-4">Everybody works in Diffrent ways,so we have Diffrent ways of helping
                  you win work!</p>
                <template>
                  <div>
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <b-form-group v-slot="{ ariaDescribedby }" class="form-group">
                          <b-form-radio v-model="updateProfile.likeTowork" :aria-describedby="ariaDescribedby"
                            value="I 'd like to find oppurtunities myself">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/hire-freelancer.png'"
                              class="img-fluid">
                            <span class="ml-1">I 'd like to find oppurtunities myself</span>
                          </b-form-radio>
                          <b-form-radio v-model="updateProfile.likeTowork" :aria-describedby="ariaDescribedby"
                            value="I'd like to package up my work for clients to buy">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/freelance-work.png'"
                              class="img-fluid">
                            <span class="ml-1">I'd like to package up my work for clients to buy</span>
                          </b-form-radio>
                          <b-form-radio v-model="updateProfile.likeTowork" :aria-describedby="ariaDescribedby"
                            value="I'd like Qapin to act as a recruiter">
                            <img :src="$store.state.baseUrlImg + 'upload/signup-new/freelance-work.png'"
                              class="img-fluid">
                            <span class="ml-1">I'd like Qapin to act as a recruiter</span>
                          </b-form-radio>
                        </b-form-group>
                        <p class="text-danger" v-if="updateProfileLikeToworkErrors[0]">
                          {{ updateProfileLikeToworkErrors[0] }}</p>
                      </b-col>
                      <b-col xl="12" lg="12" md="12">
                      </b-col>
                    </b-row>
                  </div>
                </template>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(2)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content begin-step-signup" v-if="step == 4">
              <div class="fxt-form">
                <h2 class="title mb-0">How would you like to tell us about yourself ?</h2>
                <p class="mb-2 fz-14 text-muted mt-4">We need to get a sense of your education, Exprience and skill. it's
                  quickest to import your information </p>

                <template>
                  <div>
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <b-form-group v-slot="{ ariaDescribedby }" class="form-group">

                          <b-form-radio v-model="updateProfile.information" :aria-describedby="ariaDescribedby"
                            value="Fill Out Manually (15 Min)">
                            <img :src="$store.state.baseUrlImg + '/upload/signup-new/fill-out.png'" class="img-fluid">
                            <span class="ml-1">Fill Out Manually (15 Min)</span>
                          </b-form-radio>

                        </b-form-group>
                        <p class="text-danger" v-if="updateProfileInformationErrors[0]">
                          {{ updateProfileInformationErrors[0] }}</p>

                      </b-col>
                      <b-col xl="12" lg="12" md="12">
                      </b-col>
                    </b-row>
                  </div>
                </template>

                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(3)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content begin-step-signup" v-if="step == 5">
              <div class="fxt-form">
                <h2 class="title mb-0 mt-sm-4">Got it. Now, add a title to tell the world what you do.</h2>
                <h5 class="subtitle mb-4">It's the very first thing client see, so make it count. Stant out by describing
                  your expertise in your one words.</h5>

                <b-row>
                  <b-col xl="12" lg="12" md="12">
                    <b-form-group>
                      <label class="mb-2">Your Professional role </label><br>
                      <b-form-input class="h-40" maxlength="50" v-model="updateProfile.tagline"
                        placeholder="Your Professional role"></b-form-input>
                      <p class="text-danger" v-if="updateProfileTaglineErrors[0]">{{ updateProfileTaglineErrors[0] }}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(4)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content workas-radio " v-if="step == 6">
              <div class="fxt-form">
                <h2 class="title mb-0">If you have relevant work exprience, add it here.</h2>
                <p class="b-2 fz-14 text-muted mt-4">Freelances who add their experiency are twice as likely to win work.
                  But if you're just starting out </p>

                <template>
                  <div>
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <a href="javascript:void(0)" v-b-modal.industry-modal @click="workingExpArray()">
                          <b-form-group v-slot="{ ariaDescribedby }" class="form-group begin-step-signup">
                            <b-form-radio :aria-describedby="ariaDescribedby" v-model="multiindustry" value="a">
                              <img :src="$store.state.baseUrlImg + '/upload/signup-new/add-experience.png'"
                                class="img-fluid">
                              <span class="ml-1">Add Experience</span>
                            </b-form-radio>
                          </b-form-group>
                        </a>
                      </b-col>
                      <span v-if="updateProfile.industrialExp.length > 0 && updateProfile.industrialExp != 'null'" class="px-0">
                        <b-col xl="12" lg="12" md="12" v-for="(workExp, windex) in updateProfile.industrialExp"
                          :key="windex">
                          <div class="border br-20 custompadding pos-rel experience-card">
                            <div class="d-md-flex align-items-start">
                              <div class="mr-3 img-wrap">
                                <img :src="$store.state.baseUrlImg + '/upload/freelancer/industry.png'" class="img-fluid" />
                              </div>
                              <div class="content">
                                <h4 class=" mb-0 text-black fz-20 fw-600">
                                  {{ workExp.company_name }}
                                </h4>
                                <p class="mb-0 fz-18 text-muted fw-400">
                                  {{ workExp.role }}
                                </p>
                                <ul>
                                  <li class="fz-18 text-muted fw-400">
                                    {{ workExp.location }}
                                  </li>
                                  <li class="fz-18 text-muted fw-400">•</li>
                                  <li class="fz-18 text-muted fw-400">
                                    {{ workExp.from_date }} - {{ workExp.to_date }}
                                  </li>
                                </ul>
                              </div>
                              <div class="align-items-center d-flex pos-absolute btn-grp">
                                <a href="javascript:void(0);" class="mr-2 btn-edited btn-sm" v-b-modal.industry-modal
                                  @click="editWorkExp(workExp, windex)">
                                  <i class="fa fa-pencil"></i>
                                </a>
                                <a href="javascript:void(0);" class="btn-trash btn-sm" @click="deleteIndustryById(windex)">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </b-col>
                      </span>
                      <b-col xl="12" lg="12" md="12">
                        <b-form-radio id="checkbox-1" v-model="multiindustry" value="null" unchecked-value="false"
                          class="d-flex align-items-center check-experience" required @change="updateProfile.industrialExp = []">
                          <p class="fz-14 fw-400 text-muteed mb-0 ml-1">Nothing to add? Check the box and keep going</p>
                        </b-form-radio>
                      </b-col>
                      <p class="text-danger" v-if="updateProfileIndustrialExpErrors[0]">
                        {{ updateProfileIndustrialExpErrors[0] }}</p>
                    </b-row>
                  </div>
                </template>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(5)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content workas-radio" v-if="step == 7">
              <div class="fxt-form">
                <h2 class="title mb-0">If you have relevant work experience add it here.</h2>
                <p class="b-2 fz-14 text-muted mt-4">Freelances who add their experiency are twice as likely to win work.
                  But if you're just starting out </p>

                <template>
                  <div>
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <a href="javascript:void(0)" v-b-modal.education-modal @change="updateProfile.education = []">
                          <b-form-group v-slot="{ ariaDescribedby }" class="form-group begin-step-signup">
                            <b-form-radio :aria-describedby="ariaDescribedby" v-model="multieducation" value="a">
                              <img :src="$store.state.baseUrlImg + '/upload/signup-new/add-experience.png'"
                                class="img-fluid">
                              <span class="ml-1">Add Education</span>
                            </b-form-radio>
                          </b-form-group>
                        </a>
                      </b-col>
                      <span v-if="updateProfile.education.length > 0 && updateProfile.education != 'null'"  class="px-0">
                        <b-col xl="12" lg="12" md="12" v-for="(educa, eindex) in updateProfile.education" :key="eindex">
                          <div class="border br-20 custompadding pos-rel education-card">
                            <div class="d-md-flex align-items-normal">
                              <div class="mr-3 wrap w-30">{{ educa.start_year }} - {{ educa.end_year }}</div>
                              <div class="content">
                                <h4 class="mb-0 text-black fz-20 fw-600">
                                  {{ educa.university_name }}
                                </h4>
                                <p class="mb-0 fz-14 text-muted fw-600">{{ educa.course_name }} ({{ educa.areaOfStudy }})
                                </p>
                              </div>
                              <div class="align-items-center d-flex pos-absolute btn-grp">
                                <a href="javascript:void(0);" class="mr-2 btn-edited" @click="editEducationById(educa, eindex)">
                                  <i class="fa fa-pencil"></i>
                                </a>
                                <a href="javascript:void(0);" class="btn-trash" @click="deleteEducationById(eindex)">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </b-col>
                      </span>
                      <b-col xl="12" lg="12" md="12">
                        <b-form-radio id="checkbox-1" v-model="multieducation" value="null" unchecked-value="false"
                          class="d-flex align-items-center check-education" @change="updateProfile.education = [];" required>
                          <p class="fz-14 fw-400 text-muteed mb-0 ml-1">Nothing to add? Check the box and keep going</p>
                        </b-form-radio>
                      </b-col>
                      <p class="text-danger" v-if="updateProfileEducationExpErrors[0]">
                        {{ updateProfileEducationExpErrors[0] }}</p>
                    </b-row>
                  </div>
                </template>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(6)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Next
                  </button>
                </div>
              </div>
            </div>


            <div class="fxt-content step2 workas-radio begin-step-signup" v-if="step == 8">
              <div class="fxt-form">
                <h2 class="title mb-0">Looking good. Next, tell us which languages you speak </h2>
                <p class="b-2 fz-14 text-muted mt-4">Qapin is global. So client are often interested to know what language
                </p>

                <template>
                  <div>
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <b-form @submit.prevent="updateUserProfile('language')">
                          <b-row v-for="(v, index) in updateProfile.languages.language" :key="index">
                            <b-col xl="5" lg="5" sm="12" :class="v">
                              <b-form-group id="language" label="Language" label-for="language">
                                <b-form-select id="language" class="form-control mb-3" :options="languageData"
                                  text-field="value" value-field="id" required v-if="index == 0" disabled=""
                                  v-model="updateProfile.languages.language[index]"></b-form-select>
                                <b-form-select id="language" class="form-control mb-3" :options="languageData"
                                  text-field="value" value-field="id" required v-else
                                  v-model="updateProfile.languages.language[index]"></b-form-select>
                              </b-form-group>
                            </b-col>
                            <b-col xl="5" lg="5" sm="12">
                              <b-form-group id="proficiency" label="Proficiency Level" label-for="proficiency level">
                                <b-form-select id="proficiency" class="form-control mb-3" :options="proficiencyData"
                                  v-model="updateProfile.languages.proficiency[index]" v-if="index == 0"></b-form-select>
                                <b-form-select id="proficiency" class="form-control mb-3" :options="proficiencyData"
                                  v-model="updateProfile.languages.proficiency[index]" v-else></b-form-select>
                              </b-form-group>
                            </b-col>
                            <b-col xl="2" lg="2" sm="12" v-if="index == 0">
                              <label></label>
                              <button type="button" class="btn-theme w-100 mt-13 add-lang-btn" @click="addLanguage()"><i
                                  class="fa fa-plus"></i></button>
                            </b-col>
                            <b-col xl="2" lg="2" sm="12" v-else>
                              <button type="button" class="btn-danger w-100 mt-35 remove-lang-btn"
                                @click="removeLanguage(index)"><i class="fa fa-close"></i></button>
                            </b-col>
                          </b-row>
                          <p class="text-danger" id="languageError"></p>
                        </b-form>
                      </b-col>
                      <b-col xl="12" lg="12" md="12">
                      </b-col>
                    </b-row>
                  </div>
                </template>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(7)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content workas-radio begin-step-signup" v-if="step == 9">
              <div class="fxt-form">
                <h2 class="title mb-0">Nearly there! What work are you have to do?</h2>
                <p class="b-2 fz-14 text-muted mt-4">Your Skills show clients want to affer, and help us choose which jobs
                  to recommend to you. Add to remove this ones we've suggested, or starting typing to pick more </p>

                <template>
                  <div>
                    <b-row v-b-modal.skill-modal>
                      <b-col xl="12" lg="12" md="12">
                        <!-- <b-form-group v-slot="{ ariaDescribedby }" class="form-group">
                            <b-form-radio v-model="profile.quality_professional_flag" :aria-describedby="ariaDescribedby"  value="N" @input="$v.profile.quality_professional_flag.$touch()">
                              <img src="http://qapin_mvp5.manageprojects.in/upload/signup-new/skills.png" class="img-fluid">
                              <span class="ml-1">Add Your Skill</span>
                            </b-form-radio>
                          </b-form-group> -->
                        <b-form-group>
                          <label>Your Skill</label><br>
                          <multiselect v-model="updateProfile.skills" placeholder="Search or add Skill" label="skill_name"
                            track-by="qp_role_skill_master_id" :options="skillData" :multiple="true" :taggable="true">
                          </multiselect>
                        </b-form-group>
                        <p class="text-danger" v-if="updateProfileSkillsErrors[0]">{{ updateProfileSkillsErrors[0] }}</p>
                      </b-col>
                    </b-row>
                  </div>
                </template>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(8)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content workas-radio begin-step-signup" v-if="step == 10">
              <div class="fxt-form">
                <h2 class="title mb-0">Great! Now write a bio to tell the world about your self.</h2>
                <p>Help people get to know you at a glance. what work are you best at? Tell them clearly using paragraph
                  or bullet points. You can always Edit later make sure you proof read now! </p>

                <template>
                  <div>
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <b-form-group class="form-group">
                          <b-form-textarea :maxlength="2500"
                            placeholder="Describe your top skills, experience and interesr. this is one of the first things clients will see on your profile.."
                            rows="8" max-rows="10" v-model="updateProfile.about_self_desc"></b-form-textarea>
                        </b-form-group>
                        <p class="text-danger" v-if="updateProfileAbout_self_descErrors[0]">
                          {{ updateProfileAbout_self_descErrors[0] }}</p>

                      </b-col>
                    </b-row>
                  </div>
                </template>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(9)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content workas-radio begin-step-signup" v-if="step == 11">
              <div class="fxt-form">
                <h2 class="title mb-0">Now, let's set your hourly rate</h2>
                <p class="b-2 fz-14 text-muted mt-4">Clients will see this rate on your profile and in search results once
                  you publish your profile. You can adjust your rate every time you submit a proposal.</p>

                <template>
                  <div>
                    <p class="fz-18 fw-500 text-black">Please note that your new per day rate will only apply to new
                      contracts.</p>
                    <p class="fz-18 fw-500 text-black">The Qapin Service Fee is 20% </p>

                    <p class="fz-18 fw-500 text-muted mb-4">Your profile rate: ${{ updateProfile.hourly_rate }} /Day</p>

                    <b-form>
                      <div class="d-md-flex align-items-center mb-4">
                        <div class="flex-1 mb-10 mb-md-0">
                          <div>
                            <strong class="d-block fz-18">Day Rate</strong>
                          </div>
                          <div>
                            <small class="d-block">Total amount the client will see</small>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="up-input-group">
                            <b-input-group size="md" prepend="$" id="hourlyRate">
                              <b-form-input id="editHourlyRate" class="form-control" v-model="updateProfile.hourly_rate"
                                @keyup="setServiceCharge()" maxlength=10 type="number"></b-form-input>
                            </b-input-group>
                          </div>
                          <div class="ml-5"><strong> /Day </strong></div>
                        </div>
                      </div>
                      <p class="text-danger" v-if="updateProfileHourly_rateErrors[0]">
                        {{ updateProfileHourly_rateErrors[0] }}</p>

                      <hr>
                      <div class="d-md-flex align-items-center mb-4">
                        <div class="flex-1 mb-10 mb-md-0">
                          <div>
                            <strong class="d-block fz-18">20% Qapin Service Fee </strong>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="up-input-group">
                            <b-input-group size="md" prepend="$" id="QapinServices">
                              <b-form-input id="QapinServices" class="form-control" v-model="QapinServices" readonly
                                maxlength=10 type="number"></b-form-input>
                            </b-input-group>
                          </div>
                          <div class="ml-5"><strong> /Day </strong></div>
                        </div>
                      </div>
                      <hr>
                      <div class="d-md-flex align-items-center mb-4">
                        <div class="flex-1 mb-10 mb-md-0">
                          <div>
                            <strong class="d-block fz-18">You'll Receive</strong>
                          </div>
                          <div>
                            <small class="d-block">The estimated amount you'll receive after service fees</small>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="up-input-group">
                            <b-input-group size="md" prepend="$" id="willReceive">
                              <b-form-input id="willReceive" class="form-control" v-model="willReceive"
                                @change="setReceiveCharge()" maxlength=10 type="number" readonly></b-form-input>
                            </b-input-group>
                          </div>
                          <div class="ml-5"><strong> Day </strong></div>
                        </div>
                      </div>

                    </b-form>
                  </div>
                </template>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(10)">
                    Previous
                  </button>
                  <button type="submit" class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            <div class="fxt-content" v-if="step == 12">
              <div class="fxt-form">
                <h2 class="title mb-0">A few last details, then you can check and publish your profile.</h2>
                <p class="b-2 fz-14 text-muted mt-4">A professional photo helps you build trust with your clients. To keep
                  things safe and simple, they'll pay you through us - which is why we need your personal information.</p>
                <b-row>
                  <b-col xl="3" lg="3" md="12">
                    <div class="upload-img">
                      <div class="preview-img mb-3 mt-2 border p-1 shadow">
                        <img :src="$store.state.baseUrlImg + 'upload/profile_image/user.png'"
                          v-if="updateProfile.profile_picture_path == ''" class="img-fluid">
                        <img :src="updateProfile.profile_picture_path" v-else class="img-fluid">
                      </div>
                      <div class="upload-btn-wrapper">
                        <a href="javascript:void(0);" class="upload-btn" @click="chooseFiles()">Upload a file</a>
                        <p class="text-danger" v-if="updateProfileProfile_picture_pathErrors[0]">
                          {{ updateProfileProfile_picture_pathErrors[0] }}</p>

                        <input id="fileUpload" style="display: none;" multiple hidden type="file" @change="UploadFile"
                          accept=".png,.PNG,.jpeg,.JPEG,.jpg,.JPG,">
                      </div>
                    </div>
                  </b-col>
                  <b-col xl="9" lg="9" md="12" class="border-left">
                    <b-form>
                      <b-row>
                        <b-col xl="6" lg="6" md="12">
                          <b-form-group>
                            <label>Country *</label><br>
                            <b-form-select class="w-100" v-model="updateProfile.country_id" :options="countryData"
                              value-field="country_id" text-field="country_name"
                              @change="changecountry($event)"></b-form-select>
                            <p class="text-danger" v-if="updateProfileCountry_idErrors[0]">
                              {{ updateProfileCountry_idErrors[0] }}</p>
                          </b-form-group>
                        </b-col>
                        <b-col xl="6" lg="6" md="12">
                          <b-form-group>
                            <label>State *</label><br>
                            <b-form-select class="w-100" v-model="updateProfile.state_id" :options="stateData" value-field="state_id"
                              text-field="state_name" @change="changestate($event)"></b-form-select>
                            <p class="text-danger" v-if="updateProfileState_idErrors[0]">
                              {{ updateProfileState_idErrors[0] }}</p>

                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl="12" lg="12" md="12">
                          <b-form-group>
                            <label>Street Address *</label><br>
                            <b-form-input class="h-40" v-model="updateProfile.address1"></b-form-input>
                            <p class="text-danger" v-if="updateProfileAddressErrors[0]">{{ updateProfileAddressErrors[0]
                            }}
                            </p>

                          </b-form-group>
                        </b-col>
                        <b-col xl="12" lg="12" md="12">
                          <b-form-group>
                            <b-form-input class="h-40" v-model="updateProfile.address2"
                              placeholder="Apt/Suite (Optional)"></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl="9" lg="9" md="12">
                          <b-form-group>
                            <label>City *</label><br>
                            <b-form-select class="w-100" v-model="updateProfile.city_id" :options="cityData" value-field="city_id"
                              text-field="city_name"></b-form-select>
                            <p class="text-danger" v-if="updateProfileCity_idErrors[0]">{{ updateProfileCity_idErrors[0]
                            }}
                            </p>
                          </b-form-group>
                        </b-col>
                        <b-col xl="3" lg="3" md="12">
                          <b-form-group>
                            <label class="mb-2">Zip code</label><br>
                            <b-form-input class="h-40" v-model="updateProfile.zipcode" maxlength="12"></b-form-input>
                            <p class="text-danger" v-if="updateProfileZipcodeErrors[0]">{{ updateProfileZipcodeErrors[0]
                            }}
                            </p>

                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl="12" lg="12" md="12">
                          <b-form-group>
                            <label>Phone *</label><br>
                            <vue-tel-input v-bind="bindProps" v-model="updateProfile.phone"
                              :country="updateProfile.phone_code" @country-changed="countryChanges"
                              class="form-control"></vue-tel-input>
                            <p class="text-danger" v-if="updateProfilePhoneErrors[0]">{{ updateProfilePhoneErrors[0] }}
                            </p>
                            <p class="text-danger" v-if="updateProfilecodeErrors[0]">{{ updateProfilecodeErrors[0] }}</p>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-form>
                  </b-col>
                </b-row>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-theme mt-4 mr-2" @click="pre(11)">
                    Previous
                  </button>
                  <button class="btn btn-theme mt-4" @click="next(step)">
                    Continue
                  </button>
                </div>
              </div>
            </div>


            <b-modal centered no-close-on-backdrop id="industry-modal" size="lg"
              :title="(editIndustryExp.value != '') ? 'Edit Industry Experience' : 'Add Industry Experience'">
              <form action="" class="text-left">
                <b-row>
                  <b-col lg="12" sm="12">
                    <div class="form-group">
                      <label>Company Name</label>
                      <b-form-input v-model="workExprince.company_name" placeholder="Company Name"
                        :error-messages="companyNameErr" required @input="$v.workExprince.company_name.$touch()"
                        @blur="$v.workExprince.company_name.$touch()"></b-form-input>
                      <span class="text-danger fz-12" v-if="companyNameErr[0]">{{ companyNameErr[0] }}</span>
                    </div>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <div class="form-group">
                      <label>Role</label>
                      <b-form-input v-model="workExprince.role" placeholder="Role" :error-messages="roleErr" required
                        @input="$v.workExprince.role.$touch()" @blur="$v.workExprince.role.$touch()"></b-form-input>
                      <span class="text-danger fz-12" v-if="roleErr[0]">{{ roleErr[0] }}</span>
                    </div>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <div class="form-group">
                      <label>Location</label>
                      <div class="input-group search-bar">
                        <div class="tt-menu"
                          style="position: absolute;top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 10px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                          <input type="text" class="form-control border-none" v-model="location"
                            placeholder="Search for Location" aria-describedby="basic-addon2"
                            v-on:keyup="searchLocation()" :error-messages="locationErr"
                            @input="$v.workExprince.location.$touch()" @blur="$v.workExprince.location.$touch()">
                          <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-checkbox v-for="(loc, id) in locationData" :key="id" :value="loc"
                              :aria-describedby="ariaDescribedby" v-model="filtersValue.locationData"
                              @change="setLocationData()">
                              {{ loc.location }}
                            </b-form-checkbox>
                          </b-form-group>
                          <span class="text-danger fz-12" v-if="locationErr[0]">{{ locationErr[0] }}</span>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="12" sm="12">
                    <div class="form-group">
                      <label>Title</label>
                      <b-form-input v-model="workExprince.title" placeholder="Title" :error-messages="companyTitleErr"
                        required @input="$v.workExprince.title.$touch()"
                        @blur="$v.workExprince.title.$touch()"></b-form-input>
                    </div>
                    <span class="text-danger fz-12" v-if="companyTitleErr[0]">{{ companyTitleErr[0] }}</span>
                  </b-col>
                  <b-col lg="12" sm="12">
                    <b-form-checkbox v-model="workExprince.is_working" value="1" unchecked-value="0" required
                      @change="workExprince.to_date = ''" type="checkbox">
                      <p class="fz-14 fw-400 text-muteed mb-0">I am currently working in this role</p>
                    </b-form-checkbox>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <b-form-group class="fz-14 fw-600" placeholder="DD - MM - YYYY">
                      <label>From</label>
                      <b-form-datepicker id="example-datepicker" v-model="workExprince.from_date" :max="maxdate"
                        class="mb-2" :error-messages="FromErr" required
                        @input="$v.workExprince.from_date.$touch(); changeFromdate()"
                        @blur="$v.workExprince.from_date.$touch()"></b-form-datepicker>
                      <span class="text-danger fz-12" v-if="FromErr[0]">{{ FromErr[0] }}</span>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6" sm="12" v-if="workExprince.is_working == '' || workExprince.is_working == '0'">
                    <b-form-group class="fz-14 fw-600" placeholder="DD - MM - YYYY">
                      <label>To</label>
                      <b-form-datepicker id="example-datepicker1" v-model="workExprince.to_date"
                        :min="new Date(workExprince.from_date).toISOString().substr(0, 10)" :max="maxdate" class="mb-2"
                        :error-messages="ToErr" required @input="$v.workExprince.to_date.$touch()"
                        @blur="$v.workExprince.to_date.$touch()"></b-form-datepicker>
                      <span class="text-danger fz-12" v-if="ToErr[0]">{{ ToErr[0] }}</span>
                    </b-form-group>
                  </b-col>

                  <b-col lg="6" sm="12" v-else>
                    <p class="fz-14 fw-400 text-black mt-10">Present</p>
                  </b-col>
                  <b-col lg="12" sm="12">
                    <div class="form-group">
                      <label>Responsibilities</label>
                      <b-form-textarea id="textarea" v-model="workExprince.responsibilities" placeholder="Type here..."
                        rows="3" max-rows="6" :error-messages="responsibilitiesErr" required
                        @input="$v.workExprince.responsibilities.$touch()"
                        @blur="$v.workExprince.responsibilities.$touch()"></b-form-textarea>
                      <span class="text-danger fz-12" v-if="responsibilitiesErr[0]">{{ responsibilitiesErr[0] }}</span>
                    </div>
                  </b-col>
                </b-row>
              </form>
              <template #modal-footer>
                <div class="text-right w-100">
                  <a href="javascript:void(0);" @click="closeIndustryexpModel()" class="mr-2 text-theme">{{'Cancel'}}</a>
                  <b-button size="lg" class="btn btn-theme" v-if="editIndustryExp.value != ''" @click="addUpdatWorkExprince('update')">{{'update'}}</b-button>
                  <b-button size="lg" class="btn btn-theme" v-else @click="addUpdatWorkExprince('add')">{{'Save'}}</b-button>
                </div>
              </template>
            </b-modal>

            <b-modal centered no-close-on-backdrop id="education-modal" size="lg"
              :title="editEducation.value != '' ? 'Edit Education' : 'Add Education'">
              <b-row v-for="(edurow, edu_index) in  $v.education.education_list.$each.$iter " :key="edu_index">
                <b-col lg="12" sm="12">
                  <div class="form-group">
                    <label>School/Unversity Name</label>
                    <b-form-input v-model.trim="edurow.university_name.$model" required
                      placeholder="Engineering in Information Technology"
                      @input="$v.education.education_list.$each[edu_index].university_name.$touch()"
                      @blur="$v.education.education_list.$each[edu_index].university_name.$touch()"></b-form-input>
                  </div>
                  <span class="text-danger fz-12"
                    v-if="!edurow.university_name.required && edurow.university_name.$error">University name is
                    required.</span>
                  <span class="text-danger fz-12" v-if="!edurow.university_name.minLength">University name must have at
                    least 5 characters.</span>
                  <span class="text-danger fz-12" v-if="!edurow.university_name.maxLength">Too long. Use at least 100
                    characters or less</span>
                </b-col>
                <b-col lg="6" sm="12">
                  <div class="form-group">
                    <label>Attended From </label>
                    <b-form-group>
                      <b-form-select :options="fromDates" class="form-control"
                        @change="getDatePrevious(edu_index, edurow.start_year.$model)"
                        v-model.trim="edurow.start_year.$model"
                        @input="$v.education.education_list.$each[edu_index].start_year.$touch()"
                        @blur="$v.education.education_list.$each[edu_index].start_year.$touch()" required>
                        <template v-slot:first>
                          <option value="" selected disabled>Select Attended From</option>
                        </template>
                      </b-form-select>
                    </b-form-group>
                    <span class="text-danger fz-12"
                      v-if="!edurow.start_year.required && edurow.start_year.$error">Attended From is required.</span>
                  </div>
                </b-col>
                <b-col lg="6" sm="12">
                  <div class="form-group">
                    <label>Attended To </label>
                    <b-form-group>
                      <b-form-select :options="endDates[edu_index]" v-model.trim="edurow.end_year.$model"
                        @input="$v.education.education_list.$each[edu_index].end_year.$touch()"
                        @blur="$v.education.education_list.$each[edu_index].end_year.$touch()" required
                        class="form-control">
                        <template v-slot:first>
                          <option value="" selected disabled>Select Attended To</option>
                        </template>
                      </b-form-select>
                    </b-form-group>
                    <span class="text-danger fz-12" v-if="!edurow.end_year.required && edurow.end_year.$error">Attended To
                      is required.</span>
                  </div>
                </b-col>
                <b-col lg="12" sm="12">
                  <div class="form-group">
                    <label>Degree </label>
                    <b-form-input v-model.trim="edurow.course_name.$model"
                      @input="$v.education.education_list.$each[edu_index].course_name.$touch()"
                      @blur="$v.education.education_list.$each[edu_index].course_name.$touch()" required
                      placeholder="Bechlor of Engineering ( BEng )"></b-form-input>
                  </div>
                  <span class="text-danger fz-12" v-if="!edurow.course_name.required && edurow.course_name.$error">Degree
                    is required.</span>
                  <span class="text-danger fz-12" v-if="!edurow.course_name.maxLength">Too long. Use at least 50
                    characters or less</span>
                </b-col>
                <b-col lg="12" sm="12">
                  <div class="form-group">
                    <label>Area of Study </label>
                    <b-form-input v-model.trim="edurow.areaOfStudy.$model"
                      @input="$v.education.education_list.$each[edu_index].areaOfStudy.$touch()"
                      @blur="$v.education.education_list.$each[edu_index].areaOfStudy.$touch()" required
                      placeholder="Information Technology"></b-form-input>
                  </div>

                  <span class="text-danger fz-12" v-if="!edurow.areaOfStudy.required && edurow.areaOfStudy.$error">Area of
                    Study is required.</span>
                  <span class="text-danger fz-12" v-if="!edurow.areaOfStudy.maxLength">Too long. Use at least 50
                    characters or less</span>
                </b-col>
                <b-col lg="12" sm="12">
                  <div class="form-group">
                    <label>Description</label>
                    <b-form-textarea id="textarea" v-model.trim="edurow.education_description.$model"
                      @input="$v.education.education_list.$each[edu_index].education_description.$touch()"
                      @blur="$v.education.education_list.$each[edu_index].education_description.$touch()" required
                      placeholder="Write somthing here..." rows="3" max-rows="6"></b-form-textarea>
                    <span class="text-danger fz-12"
                      v-if="!edurow.education_description.required && edurow.education_description.$error">Description is
                      required.</span>
                    <span class="text-danger fz-12" v-if="!edurow.education_description.maxLength">Too long. Use at least
                      2000 characters or less</span>
                  </div>
                </b-col>
              </b-row>
              <template #modal-footer>
                <div class="text-right w-100">
                  <!-- <a href="javascript:void(0);" @click="addMoreeducation();" class="mr-2 text-theme d-flex align-items-center">
                      <img :src="$store.state.baseUrlImg+'assets/img/user/plus/add.svg'" class="img-fluid mr-2" /> Add More education
                  </a> -->
                  <a href="javascript:void(0);" @click="closeEducationModel()" class="mr-2 text-theme">Cancel</a>
                  <b-button size="lg" class="btn btn-theme" v-if="editEducation.value!=''" @click="addUpdateEducatio('update')"> {{'update'}} </b-button>
                  <b-button size="lg" class="btn btn-theme" v-else @click="addUpdateEducatio('add')"> {{'Save'}} </b-button>
                </div>
              </template>
            </b-modal>

            <b-modal id="thankyoumodal" hide-footer hide-header size="lg" class="p-0 thankyoumodal" centered>
              <b-row>
                <b-col xl="12" lg="12" md="12" class="py-0">
                  <div class="top-section pt-5 px-5">
                    <img :src="$store.state.baseUrlImg + 'assets/img/email.png'" class="img-fluid w-25 mt-5 m-auto">
                  </div>
                </b-col>
                <b-col xl="12" lg="12" md="12" class="py-0">
                  <div class="bottom-section py-5 px-5 text-center">
                    <h4 class="text-theme fz-30 fz-600"> Thanks For <br> Registering With Us...!</h4>
                    <p class="mb-5">Check your inbox for confirmation mail</p><br><br>
                    <p class="footer-note mt-5">You Will Be Redirected To Signing Page In 15 Seconds</p>
                  </div>
                </b-col>
              </b-row>
            </b-modal>

            
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';
import Multiselect from 'vue-multiselect';
export default {
  components: {
    Multiselect
  },
  mixins: [validationMixin],
  validations: {
    updateProfile: {
      freelancer_before: { required },
      biggest_goal: { required },
      likeTowork: { required },
      information: { required },
      tagline: { required, maxLength: maxLength(50) },
      industrialExp: { required },
      education: { required },
      languages: { required },
      skills: { required },
      about_self_desc: { required },
      hourly_rate: { required, between: between(1, 9999999999) },
      profile_picture_path: { required },
      country_id: { required },
      state_id: { required },
      city_id: { required },
      address1: { required, maxLength: maxLength(200) },
      address2: { required },
      zipcode: { required, maxLength: maxLength(12) },
      phone_code: { required },
      phone: { required },
    },
    workExprince: {
      company_name: {
        required,
        maxLength: maxLength(100)
      },
      title: {
        required,
        maxLength: maxLength(100)
      },
      to_date: { required },
      from_date: { required },
      responsibilities: { required, maxLength: maxLength(2000) },
      role: { required, maxLength: maxLength(50) },
      location: { required, maxLength: maxLength(50) },
    },
    education: {
      education_list: {
        $each: {
          university_name: {
            required,
            maxLength: maxLength(100),
            minLength: minLength(5),
          },
          course_name: {
            required,
            maxLength: maxLength(50),
          },
          start_year: {
            required,
          },
          end_year: {
            required,
          },
          education_description: {
            required,
            maxLength: maxLength(2000),
          },
          areaOfStudy: {
            required,
            maxLength: maxLength(50),
          },
        },
      },
    },
  },
  props: [],
  async mounted() {
    for (let i = this.currentYear - 40; i <= this.currentYear; i++) {
      this.fromDates.push(i);
    }
  },
  data() {
    return {
      step: 0,
      updateProfile: {
        freelancer_before: '',
        biggest_goal: '',
        likeTowork: '',
        information: '',
        tagline: '',
        industrialExp: [],
        education: [],
        languages: {
          proficiency: [],
          language: []
        },
        skills: [],
        about_self_desc: '',
        hourly_rate: '',
        profile_picture_path: '',
        country_id: '',
        state_id: '',
        city_id: '',
        address1: '',
        address2: '',
        zipcode: '',
        phone_code: '',
        phone: '',
      },
      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: true,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 15,
        inputOptions: {
          showDialCode: true
        },
        validCharactersOnly: true,
      },
      countryData: [],
      stateData: {},
      cityData: {},
      profileImagepreview: '',
      proficiencyData: [
        { value: '1', text: 'Basic' },
        { value: '2', text: 'Conversational' },
        { value: '3', text: 'Fluent' },
        { value: '4', text: 'Native or Bilingual' },
      ],
      languageData: [],
      skillData: [],
      fromDates: [],
      multiindustry: '',
      multieducation: '',
      education: {
        education_list: [
          {
            user_education_record_id: 0,
            university_name: "",
            course_name: "",
            start_year: "",
            end_year: "",
            education_description: "",
            areaOfStudy: "",
          },
        ],
      },
      editEducation: {
        index: '',
        value: '',
      },
      workExprince: {
        company_name: '',
        title: '',
        role: '',
        is_working: '0',
        from_date: new Date().toISOString().substr(0, 10),
        to_date: new Date().toISOString().substr(0, 10),
        responsibilities: '',
        location: '',
        industry_working_experience_id: ''
      },
      editIndustryExp: {
        value: '',
        index: ''
      },
      endDates: [],
      currentYear: new Date().getFullYear(), // 2020
      welcomeMsg: '',
      image: this.$store.state.baseUrlImg + "upload/freelancer/register1-bg.png",
      QapinServices: '',
      willReceive: '',
      maxdate: new Date().toISOString().substr(0, 10),
      btnSubmit: false,
      filtersValue: {
        locationData: '',
      },
      locationData: [],
      location: '',
      category_data: {},
    }
  },
  watch: {
    // whenever changes, this function will run
    is_working() {
      this.from_date = 0;
    }
  },
  computed: {
    updateProfileFreelancerBeforeErrors() {
      const errors = []
      if (!this.$v.updateProfile.freelancer_before.$dirty) return errors
      !this.$v.updateProfile.freelancer_before.required && errors.push('Question is required')
      return errors
    },
    updateProfileBiggestGoalErrors() {
      const errors = []
      if (!this.$v.updateProfile.biggest_goal.$dirty) return errors
      !this.$v.updateProfile.biggest_goal.required && errors.push('Goal is required')
      return errors
    },
    updateProfileLikeToworkErrors() {
      const errors = []
      if (!this.$v.updateProfile.likeTowork.$dirty) return errors
      !this.$v.updateProfile.likeTowork.required && errors.push('Work is required')
      return errors
    },
    updateProfileInformationErrors() {
      const errors = []
      if (!this.$v.updateProfile.information.$dirty) return errors
      !this.$v.updateProfile.information.required && errors.push('Option is required')
      return errors
    },
    updateProfileTaglineErrors() {
      const errors = []
      if (!this.$v.updateProfile.tagline.$dirty) return errors
      !this.$v.updateProfile.tagline.required && errors.push('Professional Role is required');
      !this.$v.updateProfile.tagline.maxLength && errors.push('Max allow character  is 50');
      return errors
    },
    updateProfileIndustrialExpErrors() {
      const errors = []
      if (!this.$v.updateProfile.industrialExp.$dirty) return errors
      !this.$v.updateProfile.industrialExp.required && errors.push('Experience is required')
      return errors
    },
    updateProfileEducationExpErrors() {
      const errors = []
      if (!this.$v.updateProfile.education.$dirty) return errors
      !this.$v.updateProfile.education.required && errors.push('Education is required')
      return errors
    },
    updateProfileSkillsErrors() {
      const errors = []
      if (!this.$v.updateProfile.skills.$dirty) return errors
      !this.$v.updateProfile.skills.required && errors.push('Skills is required')
      return errors
    },
    updateProfileAbout_self_descErrors() {
      const errors = []
      if (!this.$v.updateProfile.about_self_desc.$dirty) return errors
      !this.$v.updateProfile.about_self_desc.required && errors.push('Description is required')
      return errors
    },
    updateProfileHourly_rateErrors() {
      const errors = []
      if (!this.$v.updateProfile.hourly_rate.$dirty) return errors
      !this.$v.updateProfile.hourly_rate.required && errors.push('Hourly rate is required')
      !this.$v.updateProfile.hourly_rate.between && errors.push('Hourly rate is should be greater Than 0.')
      return errors
    },
    updateProfileProfile_picture_pathErrors() {
      const errors = []
      if (!this.$v.updateProfile.profile_picture_path.$dirty) return errors
      !this.$v.updateProfile.profile_picture_path.required && errors.push('Profile picture is required')
      return errors
    },
    updateProfileCountry_idErrors() {
      const errors = []
      if (!this.$v.updateProfile.country_id.$dirty) return errors
      !this.$v.updateProfile.country_id.required && errors.push('Country is required')
      return errors
    },
    updateProfileState_idErrors() {
      const errors = []
      if (!this.$v.updateProfile.state_id.$dirty) return errors
      !this.$v.updateProfile.state_id.required && errors.push('State is required')
      return errors
    },
    updateProfileCity_idErrors() {
      const errors = []
      if (!this.$v.updateProfile.city_id.$dirty) return errors
      !this.$v.updateProfile.city_id.required && errors.push('City is required')
      return errors
    },
    updateProfileAddressErrors() {
      const errors = []
      if (!this.$v.updateProfile.address1.$dirty) return errors
      !this.$v.updateProfile.address1.required && errors.push('Address is required')
      return errors
    },
    updateProfileZipcodeErrors() {
      const errors = []
      if (!this.$v.updateProfile.zipcode.$dirty) return errors
      !this.$v.updateProfile.zipcode.required && errors.push('Zipcode is required')
      return errors
    },
    updateProfilecodeErrors() {
      const errors = []
      if (!this.$v.updateProfile.phone_code.$dirty) return errors
      !this.$v.updateProfile.phone_code.required && errors.push('Phone Code is required')
      return errors
    },
    updateProfilePhoneErrors() {
      const errors = []
      if (!this.$v.updateProfile.phone.$dirty) return errors
      !this.$v.updateProfile.phone.required && errors.push('Phone is required')
      return errors
    },
    companyNameErr() {
      const errors = []
      if (!this.$v.workExprince.company_name.$dirty) return errors
      !this.$v.workExprince.company_name.required && errors.push('Company name is required')
      // !this.$v.workExprince.company_name.alpha && errors.push('Sorry! No special characters or numbers'); 
      !this.$v.workExprince.company_name.maxLength && errors.push('Too long. Use at least 100 characters or less')
      return errors
    },
    companyTitleErr() {
      const errors = []
      if (!this.$v.workExprince.title.$dirty) return errors
      !this.$v.workExprince.title.required && errors.push('Title is required');
      !this.$v.workExprince.title.maxLength && errors.push('Too long. Use at least 100 characters or less');
      return errors
    },
    roleErr() {
      const errors = []
      if (!this.$v.workExprince.role.$dirty) return errors
      !this.$v.workExprince.role.required && errors.push('Role is required')
      !this.$v.workExprince.role.maxLength && errors.push('Too long. Use at least 50 characters or less')
      return errors
    },
    locationErr() {
      const errors = []
      if (!this.$v.workExprince.location.$dirty) return errors
      !this.$v.workExprince.location.required && errors.push('Location is required')
      !this.$v.workExprince.location.maxLength && errors.push('Too long. Use at least 50 characters or less')
      return errors
    },
    FromErr() {
      const errors = []
      if (!this.$v.workExprince.from_date.$dirty) return errors
      !this.$v.workExprince.from_date.required && errors.push('From date is required')
      return errors
    },
    ToErr() {
      const errors = []
      if (!this.$v.workExprince.to_date.$dirty) return errors
      !this.$v.workExprince.to_date.required && errors.push('To date is required')
      return errors
    },
    responsibilitiesErr() {
      const errors = []
      if (!this.$v.workExprince.responsibilities.$dirty) return errors
      !this.$v.workExprince.responsibilities.required && errors.push('Responsibilities is required')
      !this.$v.workExprince.responsibilities.maxLength && errors.push('Too long. Use at least 2000 characters or less')
      return errors
    },
  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
    // this fun is for to choose file
    async chooseFiles() {
      document.getElementById("fileUpload").click()
    },
    // this function is for to upload attachment
    async UploadFile(e) {
      var input = e.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.updateProfile.profile_picture_path = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
      document.getElementById("fileUpload").value = "";
    },
    // this fun is for to get greater date from given date
    async getDatePrevious(index, date) {
      var endDatasArray = [];
      for (let i = date; i <= this.currentYear; i++) {
        endDatasArray.push(i);
      }
      this.$set(this.endDates, index, endDatasArray);
    },
    //this function is for step form next page
    async next(step) {
      this.$v.$reset();
      if (step == 0) {
        this.image = this.$store.state.baseUrlImg + "upload/freelancer/register1-bg.png";
        this.step = 1;
      }
      if (step == 1) {
        if (this.updateProfile.freelancer_before != '') {
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register1-bg.png";
          this.step = 2;
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 2) {
        if (this.updateProfile.biggest_goal != '') {
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register1-bg.png";
          this.step = 3;
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 3) {
        if (this.updateProfile.likeTowork != "") {
          this.step = 4;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 4) {
        if (this.updateProfile.information != '') {
          this.step = 5;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 5) {
        if (this.updateProfile.tagline != '') {
          this.step = 6;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 6) {
        if (this.multiindustry == 'null' || this.updateProfile.industrialExp.length > 0) {
          if (this.multiindustry == 'null') {
            this.updateProfile.industrialExp = 'null';
          }
          this.step = 7;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 7) {
        if (this.languageData.length == 0) {
          this.getLanguage();
        }
        if (this.updateProfile.languages.language.length == 0) {
          this.updateProfile.languages.language.push('19');
          this.updateProfile.languages.proficiency.push('3');
        }
        if (this.multieducation == 'null' || this.updateProfile.education.length > 0) {
          if (this.multieducation == 'null') {
            this.updateProfile.education = 'null';
          }
          this.step = 8;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 8) {
        if (this.skillData.length == 0) {
          var skill = await this.genericAPIPOSTRequest({
            requestUrl: "user/getAllskills",
            params: {},
          })
          if (skill.length > 0) {
            this.skillData = skill;
          }
        }
        var error = 0;
        this.updateProfile.languages.language.map((data, indi) => {
          if (data == '' || this.updateProfile.languages.proficiency[indi] == '') {
            error++;
          }
        });
        if (error > 0) {
          document.getElementById('languageError').innerHTML = 'Language & level Is required';
          return false;
        } else {
          document.getElementById('languageError').innerHTML = '';
          this.step = 9;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
        }
      }
      if (step == 9) {
        if (this.updateProfile.skills.length > 0) {
          this.step = 10;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 10) {
        if (this.updateProfile.about_self_desc != '') {
          this.step = 11;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 11) {
        if (this.countryData.length == 0) {
          var country = await this.genericAPIPOSTRequest({
            requestUrl: "common/getCountryList",
            params: {},
          })
          if (country.length > 0) {
            this.countryData = country;
          }
        }
        if (this.updateProfile.hourly_rate != '' && this.updateProfile.hourly_rate >= 1) {
          this.step = 12;
          this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
          this.$v.$reset();
        } else this.$v.updateProfile.$touch(); return false;
      }
      if (step == 12) {
        this.$v.updateProfile.$touch();
        if (!this.$v.updateProfile.$invalid) {
          // alert('success');
          // console.log('submitdata',this.updateProfile);
          this.uploadProfileImage();
        } else {
          return false;
        }
      }
    },
    //this function is for step form previous page
    async pre(_v) {
      // this.image = "https://picsum.photos/200/300";
      this.image = this.$store.state.baseUrlImg + "upload/freelancer/register2-bg.png";
      this.step = _v;
    },
    // this fun is for to upload image on serve
    async uploadProfileImage() {
      var getData = await this.genericAPIPOSTRequest({
        requestUrl: "uploadimageBase",
        params: { 'url': this.updateProfile.profile_picture_path },
      });
      if (getData.img != '') {
        if (this.updateProfile.skills.length > 0) {
          this.updateSkills();
        }
        if (this.updateProfile.industrialExp != 'null') {
          this.addIndustrialExp();
        }
        if (this.updateProfile.education != 'null') {
          this.addEducation();
        }
        var insertprofileData = {};
        insertprofileData.profile_picture_path = getData.img;
        insertprofileData.about_self_desc = this.updateProfile.about_self_desc;
        insertprofileData.address1 = this.updateProfile.address1;
        insertprofileData.address2 = this.updateProfile.address2;
        insertprofileData.biggest_goal = this.updateProfile.biggest_goal;
        insertprofileData.city_id = this.updateProfile.city_id;
        insertprofileData.country_id = this.updateProfile.country_id;
        insertprofileData.freelancer_before = this.updateProfile.freelancer_before;
        insertprofileData.hourly_rate = this.updateProfile.hourly_rate;
        insertprofileData.language_id = this.updateProfile.languages.language;
        insertprofileData.proficiency_id = this.updateProfile.languages.proficiency;
        insertprofileData.likeTowork = this.updateProfile.likeTowork;
        insertprofileData.phone = this.updateProfile.phone;
        insertprofileData.phone_code = this.updateProfile.phone_code;
        insertprofileData.state_id = this.updateProfile.state_id;
        insertprofileData.tagline = this.updateProfile.tagline;
        insertprofileData.zipcode = this.updateProfile.zipcode;
        insertprofileData.updateProfile_afterVerification = '1';
        this.UpdateprofileDetails(insertprofileData);
      } else {
        this.$toastr.e('Profile Image not proper');
        return false;
      }
    },
    // this fun is for to update user details
    async UpdateprofileDetails(_v) {
      var userData = await this.genericAPIPOSTRequest({
        requestUrl: "UpdateUserDetails",
        params: _v,
      });
      if (userData) {
        this.$store.state.currentUserData.updateProfile_afterVerification = 1;
        var updatedata=[];
        for (let index = 0; index < this.updateProfile.languages.language.length; index++) {
          updatedata.push({
            'language_id':this.updateProfile.languages.language[index],
            'proficiency_id':this.updateProfile.languages.proficiency[index],
            'is_primary': (index == 0)?'Y':'N'
          })
        }
        await this.genericAPIPOSTRequest({
              requestUrl: "updateUserLanguage",
              params: updatedata,
        });
        this.$toastr.s('Profile Details updated');
        this.$router.push("/my-profile");
        
      } else {
        this.$toastr.e('Profile Details not updated');
        return false
      }

    },
    // this fun is for to update skills
    async updateSkills() {
      var arrangeTagArray = [];
      for (const obj of this.updateProfile.skills) {
        const newobj = { id: obj.role_id, elements: [] };
        newobj.elements.push(obj.qp_role_skill_master_id);
        arrangeTagArray.push(newobj);
      }

      // Reduced the array which having same id
      if (arrangeTagArray.length) {
        const finalTagArray = arrangeTagArray.reduce((obj, item) => {

          obj[item.id] ? obj[item.id].elements.push(...item.elements) : (obj[item.id] = { ...item });
          // console.log('obj',obj);
          return obj;
        }, {});

        // Merge final array
        let mergedArray = Object.values(finalTagArray);

        // Set array into category data
        for (const role of mergedArray) {
          this.category_data[role.id] = role.elements;
        }
      }

      // var skillData=[];
      // this.updateProfile.skills.forEach((data)=>{
      //   skillData[data.role_id]=[];
      // });

      // this.updateProfile.skills.forEach((data)=>{
      //     skillData.map((value,index)=>{
      //       if(data.role_id == index){
      //         value.push(data.qp_role_skill_master_id);
      //       }
      //     });
      // });

      // console.log('skillData',skillData);
      await this.genericAPIPOSTRequest({
        requestUrl: "updateCategory",
        params: { 'category_data': this.category_data },
      });
    },
    // this fun is for to add industrial experience
    async addIndustrialExp() {
      if (this.updateProfile.industrialExp.length > 0) {
        var that = this;
        that.updateProfile.industrialExp.filter((data) => {
          that.genericAPIPOSTRequest({
            requestUrl: "user/addUpdatWorkExprince",
            params: data
          });
        })
      }
    },
    // this fun is for to add industrial experience
    async addEducation() {
      if (this.updateProfile.education.length > 0) {
        this.genericAPIPOSTRequest({
          requestUrl: "user/addUpdateEducation",
          params: { education: this.updateProfile.education },
        });
      }
    },
    // THIS FUNCTIONIS FOR GET STATE DATA
    async changecountry(event) {
      var res = await this.genericAPIPOSTRequest({
        requestUrl: 'common/getStateList',
        params: { country_id: event }
      })
      if (res.length > 0) {
        this.stateData = res;
      }
    },
    // THIS FUNCTIONIS FOR GET CITY DATA
    async changestate(event) {
      var res = await this.genericAPIPOSTRequest({
        requestUrl: 'common/getCityList',
        params: { state_id: event }
      })
      if (res.length > 0) {
        this.cityData = res;
      }
    },
    
    // this fun is for to get language
    async getLanguage() {
      var res = await this.genericAPIPOSTRequest({
        requestUrl: "getLanguageList",
        params: {},
      });
      this.languageData = res;
    },
    // this fun is for to add language row
    async addLanguage() {
      this.updateProfile.languages.language.push('');
      this.updateProfile.languages.proficiency.push('');
    },
    // this fun is for to remove language row
    async removeLanguage(_i) {
      this.updateProfile.languages.language.splice(_i, 1);
      this.updateProfile.languages.proficiency.splice(_i, 1);
    },
    // this fun is for to set service charges
    async setServiceCharge() {
      this.QapinServices = this.updateProfile.hourly_rate * 20 / 100;
      this.willReceive = this.updateProfile.hourly_rate - this.QapinServices;
    },
    // this fun is for search location
    async searchLocation() {
      const formData = new FormData()
      formData.append('input', this.location);
      if (this.location != '') {
        var res = await this.genericAPIPOSTRequest({
          requestUrl    : "common/getLocation?q=" + this.location,
          params        : formData,
        });
        if (res.length > 0) {
          this.locationData = res;
        }
      }
    },
    // this fun is for to set location data
    async setLocationData() {
      this.workExprince.location = this.filtersValue.locationData.location;
      this.location = this.filtersValue.locationData.location;
      this.locationData = [];
    },
    // this fun is for to change the phone country code
    async countryChanges(e) {
      this.updateProfile.phone_code = e.dialCode;
    },
    // this is blank working experience data
    async workingExpArray() {
      this.editIndustryExp = { value: '', index: '' };
      this.workExprince = {
        company_name: '',
        title: '',
        role: '',
        is_working: '0',
        from_date: new Date().toISOString().substr(0, 10),
        to_date: new Date().toISOString().substr(0, 10),
        responsibilities: '',
        location: '',
        industry_working_experience_id: ''
      };
    },
    
    // this fun is for to add industry experience
    async addUpdatWorkExprince(_v) {
      if (this.workExprince.is_working == 1) {
        this.workExprince.to_date = new Date().toISOString().substr(0, 10);
      }
      this.$v.workExprince.$touch();
      if (!this.$v.workExprince.$invalid) {
        // this.btnSubmit = true;  
        var data = {
          company_name: this.workExprince.company_name,
          title: this.workExprince.title,
          role: this.workExprince.role,
          is_working: this.workExprince.is_working == true ? "1" : "0",
          from_date: this.workExprince.from_date,
          to_date: this.workExprince.to_date,
          responsibilities: this.workExprince.responsibilities,
          location: this.workExprince.location,
          industry_working_experience_id: this.workExprince.industry_working_experience_id,
        };
        if(_v=='add'){
          if(this.updateProfile.industrialExp == 'null'){
            this.updateProfile.industrialExp = [];
          }
          this.updateProfile.industrialExp.push(data);
        }else{
          this.updateProfile.industrialExp[this.editIndustryExp.index] = data;
        }
        this.$bvModal.hide('industry-modal');
        this.$v.$reset();
        this.workingExpArray();
        this.filtersValue = { locationData: '' };
        this.setLocationData();
      }
    },
    // this fun is for to close industrial modal
    async closeIndustryexpModel() {
      this.workingExpArray();
      this.$bvModal.hide('industry-modal');
      this.$v.$reset();
      this.filtersValue = { locationData: '' };
      this.setLocationData();
    },
    // this fun is for to remove industry row
    async deleteIndustryById(_i) {
      this.updateProfile.industrialExp.splice(_i, 1)
    },
    // this fun is for to edit the industry work
    async editWorkExp(_v, _i) {
      this.editIndustryExp = { value: _v, index: _i };
      this.location = _v.location;
      this.workExprince = _v;
    },
    // this fun is for to check from date and to date
    async changeFromdate() {
      if (this.workExprince.from_date >= this.workExprince.to_date) {
        this.workExprince.to_date = '';
      }
    },
    // this fun is for to add update education
    async addUpdateEducatio(_v) {
      this.$v.education.education_list.$touch();
      if (!this.$v.education.education_list.$invalid) {
        if (_v == 'add') {
          if(this.updateProfile.education == 'null'){
            this.updateProfile.education = [];
          }
          this.education.education_list.filter((data) => {
            this.updateProfile.education.push(data);
          })
        } else {
          this.updateProfile.education[this.editEducation.index] = this.education.education_list[0];
          this.editEducation = {value:'',index:''};
        }
        this.$bvModal.hide("education-modal");
        this.education.education_list = [];
        this.addMoreeducation();
        this.$v.$reset();
      }
    },
    // this fun is for to add more education fields
    addMoreeducation: function () {
      this.$v.education.education_list.$reset();
      this.education.education_list.push({
        user_education_record_id: 0,
        university_name: "",
        course_name: "",
        start_year: "",
        end_year: "",
        education_description: "",
        areaOfStudy: "",
      });
    },
    //this fun is for to delete education data
    async deleteEducationById(_i) {
      this.updateProfile.education.splice(_i, 1);
    },
    // this function is for to open edit education model
    async editEducationById(_v, _i) {
      this.editEducation = {value:_v,index:_i}
      this.education.education_list = [];
      this.education.education_list.push(_v);
      this.$bvModal.show('education-modal');
    },
    // this fun is for to clos eeducation model
    async closeEducationModel() {
      this.$bvModal.hide('education-modal');
      this.$v.$reset();
      this.education.education_list = [];
      this.editEducation = { value: '', index: '' };
      this.addMoreeducation();
    },
  }
}
</script>
<style>
navbar-main {
  display: none !important;
}

/* .relative{padding:0px!important} */
.fxt-bg-img3 {
  background-image: url(http://qapin_mvp5.manageprojects.in/upload/freelancer/register1-bg.png);
}

.fxt-bg-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  position: relative;
}

.login-wrapper .fxt-bg-color {
  background-color: #ffffff;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /*padding: 60px 30px;*/
  padding: 100px 7px;
}

.login-wrapper .fxt-content {
  max-width: 550px;
  width: 100%;
}

.login-wrapper .title {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
}

.login-wrapper .subtitle {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #979797;
}

.login-wrapper label {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.login-wrapper input {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: #FFFFFF;
  border: 1px solid #CECECE;
  border-radius: 6px;
}

.login-wrapper .btn {
  padding: 8px 45px !important;
}

.login-wrapper .btn:hover {
  padding: 8px 45px !important;
}

.login-wrapper .fxt-header {
  position: absolute;
  bottom: 20px;
  left: 20%;
  right: 20%;
}

.login-wrapper .fxt-header p {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
}

.custommsg {
  color: #c10000 !important;
  font-size: 12px;
  text-align: right;
}

.theme--light.v-text-field>.v-input__control>.v-input__slot:before {
  border: 0px;
}

.v-text-field {
  margin-top: 0px !important;
  padding-top: 5px !important;
}

.v-input input {
  padding: 18px 12px !important;
  max-height: 43px !important;
}

.v-text-field__details {
  position: absolute;
  bottom: -8px;
  right: 0;
}

.pos-rel {
  position: relative;
}

.header-menu {
  position: absolute;
  right: 20px;
}

.v-text-field>.v-input__control>.v-input__slot:after {
  border-color: transparent !important;
  border-style: none !important;
}

.step2 .custom-control {
  background: #FFFFFF;
  border: 1.5px solid #EBEBEB;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 250px;
  height: 200px;
}

.step2.workas-radio .custom-radio .custom-control-input:checked~.custom-control-label {
  background: #FFFFFF !important;
  border: 1.5px solid #F2613C !important;
  border-radius: 20px !important;
  padding: 20px !important;
  position: relative !important;
  text-align: center !important;
  width: 250px !important;
  height: 220px !important;
}

.step2.workas-radio .custom-radio label {
  background: #FFFFFF;
  border: 1.5px solid #EBEBEB;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 250px;
  height: 220px;
}

.step2.workas-radio .custom-control {
  background: #FFFFFF;
  border: transparent !important;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 250px;
  height: 200px;
}

.fxt-bg-color .step2 input {
  position: absolute;
  right: 20px;
  top: 20px;
}

.fxt-bg-color .step2 .form-group div {
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
}

.terms .custom-checkbox {
  display: flex;
  align-items: normal;
  margin-top: 10px;
}

.terms .custom-control-input {
  top: 4px;
  position: relative;
  margin-right: 8px;
}

.terms .custom-control-label {
  color: #424242;
}

.custom-select {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: #FFFFFF;
  border: 1px solid #CECECE !important;
  border-radius: 6px !important;
  margin-top: 6px !important;
  padding: 6px 12px !important;
}

.fxt-bg-color .step4 .datepicker .btn {
  padding: 0.375rem 0.75rem !important;
}

.fxt-bg-color .step4 #fieldset-1__BV_label_ {
  margin-bottom: .5rem;
}

.fxt-bg-color .step4 .b-form-btn-label-control.form-control {
  border: 1px solid #ced4da;
}

@media only screen and (min-width: 320px) and (max-width: 815px) {
  .fxt-bg-img {
    display: none;
  }

  .mobile-logo-wrap {
    display: block;
    background-color: #F2613C;
  }

  .step2 .form-group div {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }

  .login-wrapper .btn {
    padding: 8px 30px !important;
  }
}

p {
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
}

h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
  font-weight: 500 !important;
  line-height: 1.2 !important;
}

.newsfeed-right-section .list-disc {
  margin-left: -32px;
}

.carousel-caption {
  left: 0 !important;
  right: 0 !important;
  position: relative !important;
  z-index: 0;
}

body.modal-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.fz-700 {
  font-weight: 700 !important;
}

.white-space-pre-line {
  white-space: pre-line;
}

.bg-imag {
  background-image: url(http://qapin_mvp5.manageprojects.in/upload/client/newsfeed-profile-bg.jpg);
  background-size: cover;
}

.top-44 {
  top: 10rem !important;
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

.pre-formatted {
  white-space: normal !important;
}

#modal-prevent-closing h5 {
  text-align: left !important;
  font-weight: 700 !important;
}

.w-18 {
  width: 3.5rem;
}

textarea {
  height: 42px;
}

textarea:focus-visible {
  outline: 1px solid #eeb1a2;
}

.modal-fullscreen .modal-body {
  overflow-y: hidden !important;
}

.right-content .step2 .custom-control-label:after,
.right-content .step2 .custom-control-label:before {
  top: 10px !important;
  right: 0px !important;
  left: auto !important;
}

.right-content .step2 .custom-radio .custom-control-input:checked~.custom-control-label::before {
  top: 10px !important;
  right: 0px !important;
  left: auto !important;
}

.right-content .step2 .custom-control-label:after+label,
.right-content .step2 .custom-control-label:before+label {
  border: 1px solid #b94b2e !important;
}

.right-content .step3 .custom-control-label:after,
.right-content .step3 .custom-control-label:before {
  top: 7px !important;
  right: auto !important;
  left: -21px !important;
}

.right-content .step3 .custom-radio .custom-control-input:checked~.custom-control-label::before {
  top: 7px !important;
}

.error-msg {
  color: #c10000;
  font-size: 12px;
}

#thankyoumodal .modal-body {
  padding: 0px;
}

#thankyoumodal .top-section {
  background-color: #F2613C;
  text-align: center;
  border-radius: 3px 3px 0 0;
  margin: 0 auto;
}

@media only screen and (min-width: 320px) and (max-width: 815px) {
  .fxt-bg-color .step2 .form-group div {
    display: block;
    margin: 0rem;
    margin-bottom: .5rem;
  }

  .login-wrapper .btn {
    width: 100%;
  }

  .right-content .step2 .custom-control-label:before {
    top: -5px !important;
  }

  .mt-sm-4 {
    margin-top: 2rem !important;
  }

  #example-datepicker.btn {
    width: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .header-menu {
    left: auto;
  }

  .login-wrapper .btn {
    width: auto;
  }
}

.v-messages__message {
  flex: 1 1 auto;
  font-size: 12px;
  min-height: 14px;
  min-width: 1px;
  position: relative;
  color: #c10000;
}


.upload-img .upload-btn {
  border: 1px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  display: block;
  text-align: center;
}

.upload-img .preview-img {
  border-radius: 50%;
  height: 120px;
  width: 100%;
}

.upload-img .upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.upload-img .preview-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.vti__input{
    border: 0px !important;
    height: 30px !important;
}
.h-40{
  height: 40px !important;
}
</style>
