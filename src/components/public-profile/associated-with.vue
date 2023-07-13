<template>
    <div class="mt-30">
        <h5 role="presentation" aria-level="2" class="mb-10">
            <b>Associated with</b>
        </h5>
        <div class="d-flex align-items-center mt-3" v-for="(ass, index) in associate" :key="index">
            <div class="img-associate">
                <img :src="ass.profile_picture_path" alt="" class="rounded-md shadow w-10 h-10">
            </div>
            <div class="ml-2">
                <a href="javascript:void(0);" class="d-flex text-black">
                    <!-- <p class="mb-0">{{ ass.profileType==1 ? 'Agency' :'Client' }} </p> -->
                    <p class="mb-0">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["associate"],
        data() {
            return {};
        },
        computed: {},
        async mounted() {},
        methods: {},
    };
</script>
