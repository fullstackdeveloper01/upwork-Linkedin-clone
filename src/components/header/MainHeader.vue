<template>
    <span>
        <TheSiteHeaderVue v-if="checkAuth" />
        <div class="w-full h-auto overflow-x-hidden bg-white fixed top-0 flex items-center justify-between w-full px-4 transition-all ease-in bg-white shadow-sm duration-600 navbar-main sm:px-6 mb-50 " v-else-if="!checkAuth && !checkheaderAfterAuth()">
            <TheHomeSiteHeaderVue v-if="!checkAuth"/>
        </div>
    </span>
</template>
<script>
import TheSiteHeaderVue from '../TheSiteHeader.vue';
import TheHomeSiteHeaderVue from '../TheHomeSiteHeader.vue';
export default({
    components: {
        TheSiteHeaderVue,
        TheHomeSiteHeaderVue
    },
    data(){
        return{
            isAuth: false,
        }
    },
    computed:{
        checkAuth(){
            if(this.$store.state.currentUserData.token !='' && this.$store.state.currentUserData !='' ){
                return true;
            }else {
                return false;
            }
        }
    },
    mounted(){
        
    }
})
</script>