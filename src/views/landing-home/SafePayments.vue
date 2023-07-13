<template>
    <!-- Site Header -->
    <div class="relative w-full h-auto overflow-auto bg-white ">
        <!-- <TheHomeSiteHeader /> -->

        <div class="col-md-12 col-12 mt-8 mb-2">
            <div class="w-full mx-auto xl:mt-24 xl:mx-auto xl:max-w-7xl">
                <div class="container master-tag">
                    <div id="w-node-_412574db-0221-58f3-f7ef-37cfdc222117-e5ae7e41" class="column">
                        <h1 class="margin-5">Safe Payments</h1>
                        <h2 class="h4-style qapin-neue margin-30">Payment Protection with Escrow</h2>

                        <div class="column margin-55">
                            <p class="margin-15">Escrow is Simple, safe and secure - Qapin is the hassle-free way to get paid.</p>

                            <p class="text-primary-500 mb-0"><strong>What is Escrow?</strong></p>
                            <p class="margin-15">Keeping funds in an escrow account can help protect clients and Talents throughout job process. Before talent start the work, the money is held in Escrow and once the client confirms they are satisfied, it is released immediately</p>
                            <p class="margin-15">An escrow account means that the freelancer won’t receive payment until clients are completely satisfied with the work. Once clients are happy to release payment it’s just a matter of pressing a couple of buttons to release the payments. </p>
                           
                            <p class="text-primary-500 mb-0"><strong>How Does Escrow Work?</strong></p>
                            <p class="margin-15">Freelancer and clients will mutually discuss and agree for minimum milestones and amount for each milestone </p>
                            <p class="margin-15">Client funds first milestone according to the Payment terms in the Agreement before sending offer to Talents. </p>
                            <p class="margin-15">After accepting the offer, Freelancer complete the work according to the expectations set in the Contract.</p>
                            <p class="margin-15">Clients can use the funds in escrow to release after reviewing the submitted work.</p>


                

                            <div class="w-full px-4 mx-auto mt-12 xl:mt-24 xl:px-0 max-w-7xl">
                                <h2 class="flex justify-center text-3xl text-center text-black fw-bold xl:text-6xl">
                                    Frequently Asked Questions
                                </h2>

                                <div
                                    class="px-4 py-2 mt-10 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex justify-between itemds-center">
                                        <h6 @click="isFaq1 = !isFaq1"
                                            class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            Is it mandatory to use Escrow?
                                        </h6>

                                        <button @click="isFaq1 = !isFaq1">
                                            <p v-if="!isFaq1"
                                                class="w-10 p-1 text-xl text-gray-900 transition-all duration-500 rounded-full cursor-pointer fw-400 hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>

                                            </p>
                                            <p v-else
                                                class="w-10 p-1 text-xl text-gray-900 transition-all duration-500 rounded-full cursor-pointer fw-400 hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>

                                            </p>
                                        </button>
                                    </div>

                                    <transition name="slide">
                                        <p v-if="isFaq1" class="text-base leading-normal text-gray-400 fw-200">
                                            Yes, for the first milestone it is mandatory to fund while sending the offer and second milestone onwards it’s not mandatory however we recommend using escrow especially when you are working with a talent or clients for the first time.
                                        </p>
                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex justify-between itemds-center">
                                        <h6 @click="isFaq2 = !isFaq2"
                                            class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            What Would happen for the funds if freelancer did not accept the offer 
                                        </h6>

                                        <button @click="isFaq2 = !isFaq2">
                                            <p v-if="!isFaq2"
                                                class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>

                                            </p>
                                            <p v-else
                                                class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>

                                            </p>
                                        </button>
                                    </div>

                                    <transition name="slide">
                                        <p v-if="isFaq2" class="text-base leading-normal text-gray-400 fw-200">
                                            In the event of freelancer reject the offer you sent; the funds will return to you. Refunds can only be sent back to the original payment method used to fund the milestone. we recommend confirming availability and payments terms though in-app chat system before sending offer to talents.
                                        </p>

                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex justify-between itemds-center">
                                        <h6 @click="isFaq3 = !isFaq3"
                                            class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            How refund from escrow if I don’t satisfy with my freelancer’s work 
                                        </h6>

                                        <button @click="isFaq3 = !isFaq3">
                                            <p v-if="!isFaq3"
                                                class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>

                                            </p>
                                            <p v-else
                                                class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>

                                            </p>
                                        </button>
                                    </div>

                                    <transition name="slide">
                                        <p v-if="isFaq3" class="text-base leading-normal text-gray-400 fw-200">
                                            If you are not satisfied with your freelancer work, discuss for re-work and resubmission of work however if you are not satisfied for the work delivered, the job can be ended without releasing the payments. There will be option to release “full payment” or “partial” or “None”. According to your work satisfaction chose the option. If you release partial or none, escrow return request will be sent to freelancer, and the freelancer is able accept or reject the escrow refund request and chose for Qapin’s Arbitration services in the event of rejection. 
                                        </p>
                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex items-center justify-between">
                                        <h6 @click="isFaq4 = !isFaq4"
                                            class="mt-2 cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            What is Arbitration while using Escrow?
                                        </h6>

                                        <button @click="isFaq4 = !isFaq4">
                                            <p v-if="!isFaq4"
                                                class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>

                                            </p>
                                            <p v-else
                                                class="w-10 p-1 text-xl font-medium text-gray-900 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-200 hover:rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>

                                            </p>
                                        </button>
                                    </div>

                                    <transition name="slide">
                                        <p v-if="isFaq4" class="text-base leading-normal text-gray-400 fw-200">
                                            We offer Arbitration services only for funds held in Escrow. Either party can request for Arbitration. Once a decision is reached, funds in escrow are distributed.
                                            <br>
                                           
                                            For each Arbitration, Qapin will charge 10% of escrow amount or max 30USD per Arbitration.
                                        </p>

                                    </transition>
                                </div>


                            </div>


                            <div class="h-auto py-12 pb-24 mt-12 mb-64 xl:py-24 xl:mt-24 xl:px-0">
                                <div class="inset-0 px-10 xl:px-0">
                                    <div
                                        class="absolute left-0 right-0 w-full h-auto mx-auto mb-20 -mt-24 bg-black bg-center shadow-xl xl:px-10 xl:mb-32 rounded-2xl max-w-7xl xl:h-auto">
                                        <div class="relative footer-vectors">
                                            <img src="/home/testimonial-footer2.png"
                                                class="absolute w-20 xl:w-auto -top-5 left-4" alt="" />

                                            <img src="/home/testimonial-footer1.png"
                                                class="absolute w-20 top-40 xl:top-28 xl:w-auto right-4" alt="" />
                                        </div>

                                        <div class="py-6 text-center xl:py-12">
                                            <p class="text-sm uppercase fw-400 text-primary-500">JOIN QAPIN </p>

                                            <h4 class="mt-2 text-xl text-white fw-bold md:text-5xl">
                                                Register for Qapin today
                                            </h4>

                                            <p class="max-w-sm mx-auto mt-4 text-sm text-white xl:text-lg fw-200 xl:w-auto"
                                                style="max-width: 40rem;">
                                                it’s the future of inspection services. Bringing the inspection community
                                                together in one easy to use platform, Qapin is simple, free and convenient
                                                but don’t take our word for it - create your
                                            </p>

                                            <div class="px-10 mt-6 xl:px-0">
                                                <button @click="$router.push('/login')"
                                                    class="w-40 px-4 py-2 text-base text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-52 hover:bg-opacity-50 hover:text-black fw-200 xl:w-auto bg-primary-500 hover:shadow-lg">
                                                    Join for Free
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <TheHomeSiteFooter class="" v-if="!isAuth" />
    </div>
</template>

<script>
// import TheHomeSiteHeader from "../../TheHomeSiteHeader.vue";
// import TheHomeSiteHeader from "../../components/TheHomeSiteHeader.vue";
import TheHomeSiteFooter from "./TheHomeSiteFooter.vue";
import "tiny-slider/src/tiny-slider.scss";
export default {
    components: {
        TheHomeSiteFooter,
        //  TheHomeSiteHeader
    },
    data() {
        return {
            isAuth: null,
            isFaq1: false,
            isFaq2: false,
            isFaq3: false,
            isFaq4: false,
            isFaq5: false,
            isFaq6: false,
        }
    },
    mounted() {
        this.isAuth = localStorage.getItem("token");
        if (this.$route.name == "ExpireLink") {
            this.isAuth = null;
        }
        this.getCurrentUserDetails();
    },
}
</script>
<style scoped lang="css">
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-80px);
}

.agency-category {
    background-color: white;
}

.president-image {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
}

h1 {
    margin: 0 0 15px;
    color: #000000;
    font-size: 38px;
    line-height: 1em;
    font-weight: 600 !important;
    letter-spacing: -.035em;
}

.qapin-neue {
    font-family: Neuemontreal, sans-serif;
    color: #001e00;
    font-weight: 500;
    letter-spacing: -.035em;
}

.margin-30 {
    margin-bottom: 30px;
}
.margin-15 {
    margin-bottom: 10px;
    color: #5e6d55;
    font-size: 18px;
}
.text-primary-500 {
    font-size: 19px;
    font-weight: 500;
}
.president-wrap {

    display: flex;
    margin-bottom: 30px;
    justify-content: flex-start;
    align-items: center;
}

.h5-style.qapin-rza {
    font-family: sans-serif;
    color: #F2613C;
    font-weight: 400;
}

.black-text {
    color: #001e00;
}


.h1-style {
    font-family: sans-serif;
    color: #F2613C;
    font-size: 56px;
    line-height: 1em;
    font-weight: 400;
    letter-spacing: -.06em;
}

.button-primary {
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #001e00;
    transition: background-color .2s;
    font-family: Neuemontreal, sans-serif;
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
}

.buttons-wrap-about {
    display: flex;
    grid-column-gap: 19px;

}

@media (min-width: 1280px) {

    .xl\:max-w-7xl {
        max-width: 65rem;
    }
}
.text-base{
  font-size: 18px;
}
.p-1{
padding: 0.65rem !important;
}
</style>
