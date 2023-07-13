<template>
    <!-- Site Header -->
    <div class="relative w-full h-auto overflow-auto bg-white ">
        <!-- <TheHomeSiteHeader /> -->

        <div class="col-md-12 col-12 mt-8 mb-2">
            <div class="w-full mx-auto xl:mt-24 xl:mx-auto xl:max-w-7xl">
                <div class="container master-tag">
                    <div id="w-node-_412574db-0221-58f3-f7ef-37cfdc222117-e5ae7e41" class="column">
                        <h1 class="margin-5">Global Expansion</h1>
                        <h2 class="h4-style qapin-neue margin-30">Unlock the doors to Global expansion</h2>

                        <div class="column margin-55">
                            <p class="margin-15">Tap into the experience and insights of our exclusive network of talent and
                                service experts to strategically expand global business.</p>

                            <p class="text-primary-500 mb-0"><strong>Establish Trust </strong></p>
                            <h2 class="h4-style qapin-neue">Create trust with global teams by timely payments</h2>
                            <p class="margin-15">A innovative solution that allows you to search, onboard, pay and provide
                                benefits across borders compliantly and stay connected with your global teams.</p>

                            <p class="text-primary-500 mb-0"><strong>International </strong></p>
                            <h2 class="h4-style qapin-neue">Manage And Pay International Teams With 100% Accuracy</h2>
                            <p class="margin-15">Pay all your independent contractors from different countries at one go</p>
                            <p class="margin-15">Ensure your independent contractors receive their payments in their
                                preferred payment methods that are compliant with local norms</p>

                            <p class="text-primary-500 mb-0"><strong>Collaboration </strong></p>
                            <h2 class="h4-style qapin-neue">Project management tools</h2>
                            <p class="margin-15">For the success of your projects, you must establish a healthy and
                                productive process with your independent contractor. By using a Qapin’s project management
                                system, you can manage your contractor’s projects in a transparent and accountable manner.
                                This benefits both parties and ensures that you have logged all the steps of your work, for
                                any future references.</p>



                            <div class="w-full px-4 mx-auto mt-12 xl:mt-24 xl:px-0 max-w-7xl">
                                <h2 class="flex justify-center text-3xl text-center text-black fw-bold xl:text-6xl">
                                    Frequently asked Questions
                                </h2>

                                <div
                                    class="px-4 py-2 mt-10 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex justify-between itemds-center">
                                        <h6 @click="isFaq1 = !isFaq1"
                                            class="mt-2 text-base cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            Are independent contractors self-employed?
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
                                            If you hire talents through Qapin, Talents are self-employed. Independent
                                            contractors must pay self-employment tax and healthcare. If you’re working with
                                            talent through Qapin, you do not need to pay any taxes on independent contractor
                                            payments.
                                        </p>
                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex justify-between itemds-center">
                                        <h6 @click="isFaq2 = !isFaq2"
                                            class="mt-2 text-base cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            What taxes does a 1099 employee pay?
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
                                            All US independent contractors are 1099 employees need to pay self-employment
                                            taxes and income tax. Unlike with W-2 employees, your company doesn’t need to
                                            withhold taxes from their paycheck.
                                        </p>

                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex justify-between itemds-center">
                                        <h6 @click="isFaq3 = !isFaq3"
                                            class="mt-2 text-base cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            Do independent contractors get health insurance
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
                                            Independent contractors are not employees and therefore, companies are not
                                            required to provide health insurance. However companies can opt to include this
                                            benefit in the contractor agreement.
                                        </p>
                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex items-center justify-between">
                                        <h6 @click="isFaq4 = !isFaq4"
                                            class="mt-2 text-base cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            Do independent contractors get a W-2 tax form?
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
                                            A W-2 tax form is for employees. Companies that pay contractors must submit Form
                                            1099 for non-payroll workers. You will Receive one 1099 tax document directly
                                            from Qapin each year for the jobs taken up through Qapin
                                        </p>

                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex items-center justify-between">
                                        <h6 @click="isFaq5 = !isFaq5"
                                            class="mt-2 text-base cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            Can an employee also be an independent contractor
                                        </h6>

                                        <button @click="isFaq5 = !isFaq5">
                                            <p v-if="!isFaq5"
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
                                        <p v-if="isFaq5" class="text-base leading-normal text-gray-400 fw-200">
                                            Employees and contractors are two separate statuses and require different tax
                                            forms submitted by businesses. However, according to the IRS guidelines, it is
                                            possible for an employee to also be an independent contractor if they perform
                                            different duties that qualifies them as an independent contractor. While not
                                            illegal, it’s not common for a person to be both an independent contractor and
                                            an employee.
                                        </p>

                                    </transition>
                                </div>

                                <div
                                    class="px-4 py-2 mt-6 border border-gray-200 border-solid rounded-md group group-hover:bg-primary-500">
                                    <div class="flex items-center justify-between">
                                        <h6 @click="isFaq6 = !isFaq6"
                                            class="mt-2 text-base cursor-pointer sm:text-lg xl:text-2xl fw-600 hover:text-primary-500">
                                            Can an independent contractor end the contract
                                        </h6>

                                        <button @click="isFaq6 = !isFaq6">
                                            <p v-if="!isFaq6"
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
                                        <p v-if="isFaq6" class="text-base leading-normal text-gray-400 fw-200">
                                            It’s common for businesses to create contracts with independent contractors that
                                            allow them to quit at any time. Both talents and client have option to end the
                                            contract at any time. If Talent is ending contract before completion of project,
                                            the payments held in escrow will be returned to client. Clients are able to end
                                            the contract and As they’re not employees, they may not need to follow
                                            commonplace protocols such as providing two weeks or a month’s notice before
                                            leaving. Companies will specify any requirements in the contractor agreement.
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

.margin-15 {
    margin-bottom: 15px;
    color: #5e6d55;
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
.text-base {
    font-size: 16px;
    line-height: 1.5rem;
}

.text-gray-400 {
    color: rgb(86 88 92) !important;
}
</style>
