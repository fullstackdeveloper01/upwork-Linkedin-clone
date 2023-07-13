<template>
    <div class="relative w-full h-auto overflow-auto bg-white">
          <TheHomeSiteHeader />
        <div class="col-md-12 col-12">
            <div class="w-full mx-auto  xl:mx-auto xl:max-w-7xl mb-10">
                <div class="container master-tag">
                    <div id="w-node-_412574db-0221-58f3-f7ef-37cfdc222117-e5ae7e41" class="column">
                        <div class="contact">
                            <h1 class="margin-5">Contact Us</h1>

                            <h2 class="h4-style qapin-neue margin-30">Reach out anytime</h2>
                        </div>

                        <div class="row inner-addmission">
                            <div class="col-md-6">
                                <a href="#" class="box d-block">
                                    <div class="d-md-flex align-items-center">
                                        <div>
                                            <h5 class="fz-18 fw-600 text-white mb-0">Customer Support </h5>
                                            <h5 class="fz-16 fw-600  mb-0 mt-5 pointer-link-right"> Visit Help Center<i
                                                    class="fa fa-arrow-right"></i></h5>
                                        </div>
                                        <div class="ml-auto">
                                            <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606d70748eafcb19457cb6b9_Upwork_Category_07_Customer-Service_Martin_Nicholausson%201.png"
                                                class="img-fluid ">
                                        </div>
                                    </div>
                                </a>

                                <a href="#" class="box d-block">
                                    <div class="d-md-flex align-items-center">
                                        <div>
                                            <h5 class="fz-18 fw-600 text-white mb-0">Press Inquiries </h5>
                                            <h5 class="fz-16 fw-600  mb-0 mt-5 pointer-link-right"> Visit Help Center<i
                                                    class="fa fa-arrow-right"></i></h5>
                                        </div>
                                        <div class="ml-auto">
                                            <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606d707300e8a3760babda05_Upwork_Category_07_Customer-Service_Martin_Nicholausson%201-1.png"
                                                class="img-fluid ">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-md-6">
                                <a href="#" class="box d-block">
                                    <div class="d-md-flex align-items-center">
                                        <div>
                                            <h5 class="fz-18 fw-600 text-white mb-0">Enterprise Solutions</h5>
                                            <h5 class="fz-16 fw-600  mb-0 mt-5 pointer-link-right"> Visit Help Center<i
                                                    class="fa fa-arrow-right"></i></h5>
                                        </div>
                                        <div class="ml-auto">
                                            <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606d707429efa099dd5c39a8_Upwork_Category_07_Customer-Service_Martin_Nicholausson%201-2.png"
                                                class="img-fluid ">
                                        </div>
                                    </div>
                                </a>

                                <a href="#" class="box d-block">
                                    <div class="d-md-flex align-items-center">
                                        <div>
                                            <h5 class="fz-18 fw-600 text-white mb-0">Partnerships</h5>
                                            <h5 class="fz-16 fw-600  mb-0 mt-5 pointer-link-right"> Visit Help Center<i
                                                    class="fa fa-arrow-right"></i></h5>

                                        </div>
                                        <div class="ml-auto">
                                            <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606d7074c48a25ead194af65_Upwork_Category_07_Customer-Service_Martin_Nicholausson%201-3.png"
                                                class="img-fluid ">
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="contact mt-4">
                            <h2 class="h4-style qapin-neue margin-30">Our Offices</h2>
                        </div>
                    </div>

                    <div id="w-node-ab7998da-36c8-c604-8cd9-e8038c0c297e-1bae7e72" class="map-card"><img
                            src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6059ee60cf45f5094ecc1aaa_map.png"
                            loading="lazy" alt="Map" class="map-image">
                        <div class="map-column">
                            <div class="h5-style text-white">Global HQ</div>
                            <p class="no-margin text-white">475 Brannan St.<br>Suite 430<br>San Francisco<br>CA 94107<br>Phone:
                                (650) 316-7500<br></p>
                        </div>
                    </div>
                      <div id="w-node-ab7998da-36c8-c604-8cd9-e8038c0c297e-1bae7e72" class="map-card"><img
                            src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6059ee60cf45f5094ecc1aaa_map.png"
                            loading="lazy" alt="Map" class="map-image">
                        <div class="map-column">
                            <div class="h5-style text-white">Chicago Office</div>
                            <p class="no-margin text-white">525 W. Van Buren<br>Suite 1100<br>Chicago<br>IL 60607<br></p>
                        </div>
                    </div>
                      <div id="w-node-ab7998da-36c8-c604-8cd9-e8038c0c297e-1bae7e72" class="map-card"><img
                            src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6059ee60cf45f5094ecc1aaa_map.png"
                            loading="lazy" alt="Map" class="map-image">
                        <div class="map-column">
                            <div class="h5-style text-white">Mailing Address</div>
                            <p class="no-margin text-white">655 Montgomery St. <br>Suite 490<br>Dept. 17022<br>San Francisco<br>CA 94111-2676<br></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
         <TheHomeSiteFooter class="" v-if="!isAuth" />
    </div>

    <!-- text-muted -->

</template>

<script>
import TheHomeSiteHeader from "../../components/TheHomeSiteHeader.vue";
import TheHomeSiteFooter from "./TheHomeSiteFooter.vue";
import "tiny-slider/src/tiny-slider.scss";
export default {
    components: {
         TheHomeSiteFooter,
       TheHomeSiteHeader
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


h1 {
    margin: 0 0 15px;
    color: #F2613C;
    font-size: 56px;
    line-height: 1em;
    font-weight: 400;
    letter-spacing: -.035em;
    padding-bottom: 15px;
}

.qapin-neue {
    font-family: Neuemontreal, sans-serif;
    color: #001e00;
    font-weight: 500;
    letter-spacing: -.035em;
}

.inner-addmission {
    top: 0;

}

.margin-30 {
    margin-bottom: 30px;
}


.box {
    transition: box-shadow .3s;
    width: 450px;
    margin: 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background:  #F2613C;
    float: left;
    padding: 30px 10px;
}

.fa {
    position: relative;
    z-index: 2;
    width: 11px;
    height: 9px;
    margin-left: 5px;
}

.contact-column {
    margin-bottom: 10px;
    font-family: Neuemontreal, sans-serif;
    color: #001e00;
    font-size: 22px;
    line-height: 1.1em;

    letter-spacing: -.02em;
    display: -webkit-box;

    display: flex;


}
.h5-style {
    margin-bottom: 10px;
    font-family: Neuemontreal,sans-serif;
    color: #001e00;
    font-size: 22px;
    line-height: 1.1em;
    font-weight: 500;
    letter-spacing: -.02em;
}
.pointer-link-right {
    font-family: Neuemontreal, sans-serif;
    color: #1f57c3;
    font-weight: 500;
    text-decoration: underline;

}

.box:hover {
    box-shadow: 0 0 30px rgba(179, 70, 70, 0.593);
}

@media (min-width: 1280px) {

    .xl\:max-w-7xl {
        max-width: 65rem;
    }
}

h5 {
    padding: 10px;
    color: black;
    font-weight: 500;
}

img {
    height: 100px;
    width: 100px;
}

.contact {
    padding-left: 30px;
}

.map-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    border-radius: 8px;
    background-color:  #F2613C;
    margin: 13px;
}

.map-image {
    width: 40%;
    height: 0%;
    min-height: 168px;
}

.map-column {
    display: flex;
    width: 50%;
    padding: 15px 15px 15px 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
