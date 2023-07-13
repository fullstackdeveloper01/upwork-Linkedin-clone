<template>
    <!-- Site Header -->
    <!-- <div class="h-auto py-12 pb-24 mt-12 mb-64 xl:py-24 xl:mt-24 xl:px-0"> -->
    <div class="relative w-full h-auto overflow-auto bg-white" style="padding-top: 80px;">
        <!-- <TheHomeSiteHeader /> -->

        <div class="col-md-12 col-12 mt-8 mb-2">
            <div class="w-full mx-auto xl:mx-auto" style="max-width: 80rem;">
                <div class="container master-tag">
                    <div id="w-node-_412574db-0221-58f3-f7ef-37cfdc222117-e5ae7e41" class="column">
                        <h1 class="flex justify-center text-3xl text-center text-black xl:text-6xl xl:text-left fw-bold">
                            Scale your business like a pro</h1>
                        <!-- <h2 class="h4-style qapin-neue margin-30">Qapin is revolution for the inspection services industry
                            to come together. </h2> -->
                        <p class="margin-15 text-center">Qapin is efficient solution for companies who want to hire expert source
                            inspectors. With such an enormous concentration of talent in one place, it’s never been easier
                            to find the right person to ensure products quality. </p>
                        <p class="margin-15 text-center">Grow your business, working when, how, and only with the companies you want.
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-auto px-4 pt-12 xl:px-0" style="background: rgba(242, 97, 60, 0.07)">
            <div class=" w-full mx-auto text-center xl:mx-auto" style="max-width: 80rem;">

                <!-- Quality Work -->
                <div class="mt-2">

                    <h2 class="text-xl fw-bold xl:text-4xl" style="font-weight: 800">
                        For Clients
                    </h2>

                </div>

                <!-- WEB version Categoties Agencies -->
                <div class="hidden xl:block md:block">
                    <div class="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        <div
                            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                            <div class="w-8 p-4 bg-green-500 rounded-md">

                            </div>

                            <h4 style="font-weight: 700"
                                class="mt-4 text-sm text-left text-theme-hover fw-bold xl:text-base">
                                Post job
                            </h4>
                            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
                                Simply log onto Qapin, post the job with required skills, and receive responses immediately.
                            </p>
                        </div>

                        <div
                            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                            <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

                            <h4 style="font-weight: 700"
                                class="mt-4 text-sm  text-theme-hover text-left fw-bold xl:text-base">
                                Choose a Talent
                            </h4>
                            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
                                Quickly filter talent according to required job skills, location, ratings and more. Vet
                                favorites and choose the best.
                            </p>
                        </div>

                        <div
                            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                            <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

                            <h4 style="font-weight: 700"
                                class="mt-4 text-sm  text-theme-hover text-left fw-bold xl:text-base">
                                Review & Pay
                            </h4>
                            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
                                Review deliverables to ensure the work met your expectations before releasing funds from
                                escrow.
                            </p>

                        </div>


                    </div>


                </div>

                <!-- Mobile view Categoties agencies slider -->
                <tiny-slider v-bind="tinySliderOptions" class="block w-full mt-10 space-x-8 sm:hidden xl:hidden">
                    <div
                        class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                        <div class="w-8 p-4 bg-green-500 rounded-md"></div>

                        <h4 style="font-weight: 700" class="mt-4 text-sm text-left text-theme-hover fw-bold xl:text-base">
                            Create freelancer profile
                        </h4>

                    </div>
                    <div
                        class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                        <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

                        <h4 style="font-weight: 700" class="mt-4 text-sm text-left fw-bold xl:text-base">
                            Create Agency from settings Page
                        </h4>

                    </div>
                    <div
                        class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                        <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

                        <h4 style="font-weight: 700" class="mt-4 text-sm text-left fw-bold xl:text-base">
                            Add Team members
                        </h4>

                    </div>

                </tiny-slider>

            </div>
        </div>
        <div class="w-full h-auto px-4 pt-12 pb-10 xl:px-0" style="background: rgba(242, 97, 60, 0.07)">
            <div class=" w-full mx-auto text-center xl:mx-auto" style="max-width: 80rem;">

                <!-- Quality Work -->
                <div class="mt-2">

                    <h2 class="text-xl fw-bold xl:text-4xl" style="font-weight: 800">
                        For Freelancers
                    </h2>

                </div>

                <!-- WEB version Categoties Agencies -->
                <div class="hidden xl:block md:block">
                    <div class="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        <div
                            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                            <div class="w-8 p-4 bg-green-500 rounded-md">

                            </div>

                            <h4 style="font-weight: 700"
                                class="mt-4 text-sm text-left text-theme-hover fw-bold xl:text-base">
                                Apply Jobs
                            </h4>
                            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
                                Simply log onto Qapin and apply projects suitable to your experience, skills, and
                                background.
                            </p>
                        </div>

                        <div
                            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                            <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

                            <h4 style="font-weight: 700"
                                class="mt-4 text-sm  text-theme-hover text-left fw-bold xl:text-base">
                                Get discovered by top companies
                            </h4>
                            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
                                Qapin is the first-place companies search for inspection service providers. If you’re a
                                Inspection Engineer or Agency, you need to be on Qapin.
                            </p>
                        </div>

                        <div
                            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                            <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

                            <h4 style="font-weight: 700"
                                class="mt-4 text-sm  text-theme-hover text-left fw-bold xl:text-base">
                                Work when & where you want
                            </h4>
                            <p class="mt-2 text-left xl:text-lg fw-400 sm:text-sm">
                                Make sure your profile is full by work experience in your region that fit your interests and
                                expertise.
                            </p>

                        </div>


                    </div>


                </div>

                <!-- Mobile view Categoties agencies slider -->
                <tiny-slider v-bind="tinySliderOptions" class="block w-full mt-10 space-x-8 sm:hidden xl:hidden">
                    <div
                        class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                        <div class="w-8 p-4 bg-green-500 rounded-md"></div>

                        <h4 style="font-weight: 700" class="mt-4 text-sm text-left text-theme-hover fw-bold xl:text-base">
                            Create freelancer profile
                        </h4>

                    </div>
                    <div
                        class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                        <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

                        <h4 style="font-weight: 700" class="mt-4 text-sm text-left fw-bold xl:text-base">
                            Create Agency from settings Page
                        </h4>

                    </div>
                    <div
                        class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl">
                        <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

                        <h4 style="font-weight: 700" class="mt-4 text-sm text-left fw-bold xl:text-base">
                            Add Team members
                        </h4>

                    </div>

                </tiny-slider>

            </div>
        </div>

        <div class="w-full pt-12 mb-20 xl:pt-24 md:pt-20 mx-auto xl:mx-auto" style="max-width: 80rem;">
            <p class="text-base uppercase w-400 text-primary-500">
                GLOBAL COVERAGE
            </p>

            <div class="md:justify-between md:space-x-10 md:flex">
                <div>
                    <h1 class="w-full max-w-sm text-4xl fw-bold xl:text-6xl" style=" max-width: 45rem;">
                        We’re everywhere you need
                    </h1>

                    <div class="mt-10 md:mt-6">
                        <p class="max-w-xl text-base font-normal text-gray-400">
                            Qapin gives you in-depth details on each talent, including qualifications, skills and employment
                            history, most importantly immediate available talent so you get to select the talent you need
                            eager to get work done. </p>
                    </div>

                    <div class="items-center mt-10 space-y-4 md:space-x-4 md:space-y-0 md:flex">
                        <button @click="$router.push('/login')"
                            class="w-full px-4 py-2 text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-52 hover:bg-opacity-50 hover:text-black bg-primary-500 hover:shadow-lg">
                            Browse Freelancer
                        </button>
                    </div>
                </div>

                <div class="mt-24 md:mt-0">
                    <img src="home/team-01.svg" alt="" style="width: 100%; height: 350px;" />
                </div>
            </div>
        </div>

        <div class="w-full mx-auto xl:mx-auto" style="max-width: 80rem;">
            <div class="md:justify-between md:space-x-10 md:flex">
                <div class="mt-24 md:mt-0">
                    <img src="home/Company-pana.svg" alt="" style="width: 100%; height: 350px;" />
                </div>

                <div>
                    <p class="text-base uppercase w-400 text-primary-500">
                        TACKLE EVERY JOB
                    </p>
                    <h1 class="w-full max-w-sm text-4xl fw-bold xl:text-6xl" style=" max-width: 45rem;">
                        Manage ongoing projects
                    </h1>

                    <div class="mt-10 md:mt-6">
                        <p class="max-w-xl text-base font-normal text-gray-400">
                            Our project management system allows freelancers and clients to communicate directly and in real
                            time for no cost. The system allows free messaging and share the documents whenever you want so
                            you can stay on top of projects and communicate as often as you need. </p>
                    </div>

                    <div class="items-center mt-10 space-y-4 md:space-x-4 md:space-y-0 md:flex">
                        <button @click="$router.push('/login')"
                            class="w-full px-4 py-2 text-base text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-52 hover:bg-opacity-50 hover:text-black bg-primary-500 hover:shadow-lg">
                            Browse Freelancer
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full pt-12 mb-20 xl:pt-24 md:pt-20 mx-auto xl:mx-auto" style="max-width: 80rem;">
            <p class="text-base uppercase w-400 text-primary-500">
                GROW FASTER
            </p>

            <div class="md:justify-between md:space-x-10 md:flex">
                <div>
                    <h1 class="w-full max-w-sm text-4xl fw-bold xl:text-6xl" style=" max-width: 45rem;">
                        Scale your business the smart way
                    </h1>

                    <div class="mt-10 md:mt-6">
                        <p class="max-w-xl text-base font-normal text-gray-400">
                            Build your on-demand talent for scale. Rapidly flex service operations up or down by adding skill sets and locations, without investing in full-time staff. </p>
                    </div>

                    <div class="items-center mt-10 space-y-4 md:space-x-4 md:space-y-0 md:flex">
                        <button @click="$router.push('/login')"
                            class="w-full px-4 py-2 text-base text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-52 hover:bg-opacity-50 hover:text-black bg-primary-500 hover:shadow-lg">
                            Browse Freelancer
                        </button>
                    </div>
                </div>

                <div class="mt-24 md:mt-0">
                    <img src="home/scaleyoubusiness.svg" alt="" style="width: 100%; height: 350px;" />
                </div>
            </div>
        </div>

        <div class="w-full mx-auto xl:mx-auto" style="max-width: 80rem;">
            <div class="md:justify-between md:space-x-10 md:flex">
                <div class="mt-24 md:mt-0">
                    <img src="home/makeapayment.svg" alt="" style="width: 100%; height: 350px;" />
                </div>

                <div>
                    <p class="text-base uppercase w-400 text-primary-500">
                        FAST PAYMENTS
                    </p>
                    <h1 class="w-full max-w-sm text-4xl fw-bold xl:text-6xl" style=" max-width: 45rem;">
                        Make payment
                    </h1>

                    <div class="mt-10 md:mt-6">
                        <p class="max-w-xl text-base font-normal text-gray-400">
                            Escrow is a simple way to organize payment and it’s completely secure for both parties</p>
                            <p class="max-w-xl text-base font-normal text-gray-400">
                                No more invoicing, payment follow up, or tax paperwork headaches. Receive one 1099(US Talents) tax document directly from Qapin each year </p>
                    </div>

                    <div class="items-center mt-10 space-y-4 md:space-x-4 md:space-y-0 md:flex">
                        <button @click="$router.push('/login')"
                            class="w-full px-4 py-2 text-base text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer md:w-52 hover:bg-opacity-50 hover:text-black bg-primary-500 hover:shadow-lg">
                            Browse Freelancer
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-auto py-12 pb-24 mt-12 mb-64 xl:py-24 xl:mt-24 xl:px-0">
            <div class="inset-0 px-10 xl:px-0">
                <div
                    class="absolute left-0 right-0 w-full h-auto mx-auto mb-20 -mt-24 bg-black bg-center shadow-xl xl:px-10 xl:mb-32 rounded-2xl max-w-7xl xl:h-auto">
                    <div class="relative footer-vectors">
                        <img src="/home/testimonial-footer2.png" class="absolute w-20 xl:w-auto -top-5 left-4" alt="" />
                        >
                        <img src="/home/testimonial-footer1.png" class="absolute w-20 top-40 xl:top-28 xl:w-auto right-4"
                            alt="" />
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

.text-gray-400{
    color: rgb(86 88 92) !important;
}

.margin-15 {
    margin-bottom: 15px;
    color: #5e6d55;
    font-size: 18px;
}

.black-text {
    color: #001e00;
}

.text-base {
    font-size: 19px;
    line-height: 1.5rem;
    font-weight: 400;

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
</style>