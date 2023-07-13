<template>
    <div>
        <h4 class="mb-4 text-black fz-24 fw-500">
            <b>Create a freelancer Profile</b>
        </h4>
        <b-card-group deck >
            <b-card class="mb-3">
                <b-row >
                    <b-col cols="12" class="px-4 py-4">
                        <section class="card-section">
                            <div class="pb-0 d-md-flex align-items-center mb-4">
                                <span class="fz-22 fw-600 text-black">Create a profile to find jobs and earn money as a freelancer</span>
                            </div>
                            <h6 class="fw-400 text-muted mb-3">Don't worry, you'll still be a client. We'll create a separate freelancer account that you can access with the <br> same login.</h6>
                            <b-form>
                                <b-form-group>
                                    <b-form-select 
                                        v-model="selected"
                                        :options="CountryData" 
                                        value-field="country_id"
                                        text-field="country_name"
                                        @change="countryError=false"
                                        ></b-form-select>
                                </b-form-group>
                                <span class="text-danger fz-12" v-if="countryError">{{'country is required'}}</span><br>

                                <b-button class="btn btn-theme mt-4" @click="updateUserProfile">Become a Freelancer</b-button>
                            </b-form>
                        </section>
                    </b-col>
                </b-row>
            </b-card>
        </b-card-group>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                selected: '',
                countryError:false,
                CountryData: [
                    { value: null, text: 'Please select an option' },
                ]
            }
        },
        mounted() {
            this.getCountry();
        },
        methods:{
            // this fun is for to get Country
            async getCountry(){
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "common/getCountryList",
                    params: {},
                });  
                this.CountryData = res;
            },
            // this fun is for to create freelancer account
            async  updateUserProfile(){
                if(this.selected ==''){
                    this.countryError=true;
                    return false;
                }
                this.countryError=false;
                var res =  await this.genericAPIPOSTRequest({
                    requestUrl    : "user/addclient",
                    params        : {
                        "first_name"                : this.$store.state.currentUserData.first_name,
                        "country_id"                : this.selected,
                        "nationality"               : this.selected,
                        "quality_professional_flag" : 'Y',
                        "addNew"                    : 'addNew'
                    }
                });
                if(res){
                    window.scrollTo(0, 0);
                    localStorage.setItem("accountType", "freelancer");
                    this.$store.dispatch("accountType", 'freelancer');
                    this.$store.commit("setcurrentUserData", res);
                    this.$store.dispatch("currentUserLoginUuid", res.uuid);

                    this.switchaccount(3,res.uuid);
                }else{
                    this.$toastr.s('Not able to create freelancer');
                    return false;
                }
            },
            async switchaccount(accountType, uuid = '') {
                var res = await this.genericAPIPOSTRequest({
                    requestUrl: "user/switchAccount",
                    params: { account: accountType, 'uuid': uuid, data: this.getLoginUserIdRequest() },
                });
                localStorage.setItem(
                    "token",
                    "Bearer " + res.token
                );
                localStorage.setItem(
                    "loginUserData",
                    JSON.stringify(res)
                );
                localStorage.setItem(
                    "loginUserUuid", uuid
                );
                this.$store.commit("setcurrentUserData", res);
                setTimeout(() => {
                    window.location.href = '/update-profile';
                    // this.$router.push('/update-profile');
                }, 3000);
            },
        }
    }
</script>