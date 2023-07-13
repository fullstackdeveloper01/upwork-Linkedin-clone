<template>
    <b-card-group deck class="mt-4" v-if="getUserCertificationListArr.length != 0">
        <b-card title-class="text-theme font-14" header-tag="header" footer-tag="footer" header-class="bg-white p-0 br-20 border-bottom-none" class="br-20">
            <template #header>
                <div class="bordered border-right-none py-4 px-4">
                    <h4 class="mb-0 fz-24 fw-500 text-black text-left"><b>Certifications</b></h4>
                </div>
            </template>
            <div class="px-5 py-5 border-bottom">
                <div class="pb-2 mb-2 certificate-section" v-for="(cert ,index ) in getUserCertificationListArr" :key="index">
                    <div class="d-md-flex align-items-normal">
                        <h4 class="w-20 text-black fz-18 fw-400">{{cert.cmcertification}}</h4>
                        <ul class="mb-0">
                            <li class="fz-18 text-muted fw-400" v-for="(certType ,ind) in cert.type" :key="ind">{{certType}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </b-card>
    </b-card-group>
</template>

<script>
    export default {
        props: ["getUserCertificationListArr"],
        data() {
            return {};
        },
        computed: {},
        async mounted() {},
        methods: {},
    };
</script>
