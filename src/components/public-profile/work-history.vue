<template>
    <div class="border-left border-bottom text-left py-4 px-4" v-if="messageData.similarjobHistory.length > 0 || messageData.jobUnderprocess.length > 0">
        <div class="d-md-flex align-items-center mb-3">
            <h5 class="mr-2">Work History</h5>
        </div>
        <div class="tabs-wrapper work-history-wrapper">
            <b-tabs>
                <b-tab :title="'Completed jobs ('+messageData.similarjobHistory.length+')' " active v-if="messageData.similarjobHistory.length > 0">
                    <span v-if="messageData.jobHistory.length>0">
                        <b-card-text class="border-bottom" v-for="(history,index) in messageData.similarjobHistory" :key="index">
                            <a href="javascript:void(0);" class="text-theme"><h6>{{history.job_title}}</h6></a>
                            <div class="d-flex align-items-center">
                                <div class="star-rating mr-2">
                                    <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                    <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                    <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                    <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                    <i class="fa fa-star text-theme fz-14" aria-hidden="true"></i>
                                </div>
                                <h6 class="mr-2 mb-0"><b>${{history.cost}}</b></h6>
                                <h6 class="mb-0">{{history.from_date+' - '+history.to_date}}</h6>
                            </div>
                            <!-- <p class="text-muted mt-2" v-if="history.cover_letter!=''">
                       <read-more more-str="Read more" :text="getHtmlContent(history.cover_letter)" link="#" less-str="Read less" :max-chars="250"></read-more>
                    </p> -->

                            <vue-read-more-smooth :lines="3" class="mt-2">
                                <p class="text-muted mt-2">{{history.cover_letter}}</p>
                            </vue-read-more-smooth>
                        </b-card-text>
                    </span>
                    <span v-else>
                        <div class="text-center">
                            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                                <path
                                    d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z"
                                    fill="#F2613C"
                                />
                                <path
                                    d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z"
                                    fill="white"
                                />
                            </svg>
                            <h4 class="fz-20 fw-600 text-black">Don't have any job history yet</h4>
                        </div>
                    </span>
                </b-tab>
                <b-tab :title="'In progress ('+messageData.jobUnderprocess.length+')'" v-if="messageData.jobUnderprocess.length > 0">
                    <span v-if="messageData.jobUnderprocess.length>0">
                        <b-card-text class="border-bottom" v-for="(jobUnderprocess,index) in messageData.jobUnderprocess" :key="index">
                            <a href="javascript:void(0);" class="text-theme" v-b-modal.modal-1><h6>{{jobUnderprocess.job_title}}</h6></a>
                            <b-modal id="modal-1" size="lg" title="Title">
                                <div class="d-md-flex align-items-center mb-4">
                                    <ul class="d-flex align-items-center custom-margin fz-18 mb-0">
                                        <li>Web Development</li>
                                        <li class="ml-2 mr-2">|</li>
                                        <li>May 14, 2022 - Sep 5, 2022</li>
                                    </ul>
                                    <div class="ml-auto">
                                        <p class="fz-18 mb-0">Fixed Price</p>
                                    </div>
                                </div>
                                <div class="feedback-wrapper">
                                    <h4 class="fz-24 fw-600">Job Feedback</h4>
                                    <hr />
                                    <h5 class="fz-20 fw-600 mb-1">Client's Feedback</h5>
                                    <p class="fz-18 text-muted mb-4">No feedback given</p>
                                    <h5 class="fz-20 fw-600 mb-1">Freelancer's feedback to client</h5>
                                    <ul class="d-flex align-items-center custom-margin">
                                        <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                        <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                        <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                        <li><i class="fa fa-star mr-1"></i></li>
                                        <li><i class="fa fa-star mr-1"></i></li>
                                    </ul>
                                    <p class="fz-18 text-muted mb-4">Thank you</p>
                                </div>
                                <div class="job-details-wrapper">
                                    <h4 class="fz-24 fw-600">Job Feedback</h4>
                                    <hr />
                                    <h5 class="fz-20 fw-600 mb-1">Client's Feedback</h5>
                                    <p class="fz-18 text-muted mb-4">No feedback given</p>
                                    <h5 class="fz-20 fw-600 mb-1">Freelancer's feedback to client</h5>
                                    <ul class="d-flex align-items-center custom-margin">
                                        <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                        <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                        <li><i class="fa fa-star mr-1 text-theme"></i></li>
                                        <li><i class="fa fa-star mr-1"></i></li>
                                        <li><i class="fa fa-star mr-1"></i></li>
                                    </ul>
                                    <p class="fz-18 text-muted mb-4">Thank you</p>
                                </div>
                            </b-modal>
                            <div class="d-flex align-items-center">
                                <h6 class="mr-2 mb-0"><b>$ {{jobUnderprocess.cost}}</b></h6>
                                <h6 class="mb-0">{{jobUnderprocess.from_date+' - '+jobUnderprocess.to_date}}</h6>
                            </div>
                            <p class="text-muted mt-2" v-if="jobUnderprocess.cover_letter!=''">
                                <read-more more-str="Read more" :text="jobUnderprocess.cover_letter" link="#" less-str="Read less" :max-chars="250"></read-more>
                            </p>
                        </b-card-text>
                    </span>
                    <span v-else>
                        <div class="text-center">
                            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                                <path
                                    d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z"
                                    fill="#F2613C"
                                />
                                <path
                                    d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z"
                                    fill="white"
                                />
                            </svg>
                            <h4 class="fz-20 fw-600 text-black">Don't have any job Under process yet</h4>
                        </div>
                    </span>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
    import VueReadMoreSmooth from "vue-read-more-smooth";
    export default {
        props: ["messageData"],
        data() {
            return {};
        },
        components: {
            VueReadMoreSmooth,
        },
        computed: {},
        async mounted() {},
        methods: {},
    };
</script>
