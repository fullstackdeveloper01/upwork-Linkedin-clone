<template>
    <b-card-group deck class="mt-4" v-if="workExprinceList.length!=0">
        <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="bg-white p-0">
            <template #header>
                <div class="bordered border-right-none py-4 px-4">
                    <h4 class="mb-0 fz-24 fw-500 text-black text-left"><b> Industry Working Experiences</b></h4>
                </div>
            </template>
            <div class="px-5 py-5 border-bottom">
                <div class="pb-4 mb-4 industry-section" v-for="(workExp ,index ) in workExprinceList" :key="index">
                    <div class="d-md-flex align-items-start">
                        <div class="mr-3 img-wrap">
                            <img :src="$store.state.baseUrlImg+'/upload/freelancer/industry.png'" class="img-fluid" />
                        </div>
                        <div class="content width-90">
                            <h4 class="mb-0 text-black fz-20 fw-600">
                                <strong>{{workExp.company_name}}</strong>
                            </h4>
                            <p class="mb-0 fz-18 text-muted fw-400">
                                {{workExp.role}}
                            </p>
                            <ul class="d-md-flex align-items-center">
                                <li class="fz-18 text-muted fw-400">
                                    {{workExp.location}}
                                </li>
                                <li class="fz-18 text-muted fw-400 mr-2 ml-2">•</li>
                                <li class="fz-18 text-muted fw-400">
                                    {{workExp.from_date}} - {{workExp.to_date}}
                                </li>
                            </ul>
                            <ol>
                                <vue-read-more-smooth :lines="3">
                                    <li class="fz-18 text-muted fw-400" v-for="(respons ,reIndex ) in workExp.responsibilities" :key="reIndex">
                                        {{respons}}
                                    </li>
                                </vue-read-more-smooth>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </b-card>
    </b-card-group>
</template>

<script>
    import VueReadMoreSmooth from "vue-read-more-smooth";
    export default {
        props: ["workExprinceList"],
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
