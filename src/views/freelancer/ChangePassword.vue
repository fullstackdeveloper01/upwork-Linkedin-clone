<template>
  <b-card-group deck>
    <b-card
      header-tag="header"
      footer-tag="footer"
      header-class="px-4 py-4 bg-white"
      class="mb-3"
    >
      <template #header>
        <h4 class="mb-0 text-black fz-24 fw-500">
          <b>Change Password</b>
        </h4>
      </template>
      <b-row>
        <b-col cols="12" class="px-4 py-4">
           

          <section class="card-section">
            <b-form>
              <b-row>
                <b-col xl="4" lg="4" sm="12">
                  <b-form-group class="mb-2">
                    <label class="text-black fz-18 fw-600 mb-2"
                      >Current Password</label
                    >
                    <b-form-input
                      v-model="user.oldpassword"
                      type="password"
                      placeholder="******"
                      :error-messages="oldpasswordErrors"
                      @input="$v.user.oldpassword.$touch()"
                      @blur="$v.user.oldpassword.$touch()"
                    ></b-form-input>
                    <span class="text-danger fz-12" v-if="oldpasswordErrors[0]">{{oldpasswordErrors[0]}}</span>
                  </b-form-group>
                </b-col>
                <b-col xl="4" lg="4" sm="12">
                  <b-form-group class="mb-2">
                    <label class="text-black fz-18 fw-600 mb-2">New Password</label>
                    <b-form-input
                      v-model="user.password"
                      type="password"
                      placeholder="******"
                      :error-messages="passwordErrors"
                      @input="$v.user.password.$touch()"
                      @blur="$v.user.password.$touch()"
                    ></b-form-input>
                    <span class="text-danger fz-12" v-if="passwordErrors[0]">{{passwordErrors[0]}}</span>
                    
                  </b-form-group>
                </b-col>
                <b-col xl="4" lg="4" sm="12">
                  <b-form-group class="mb-2">
                    <label class="text-black fz-18 fw-600 mb-2"
                      >Confirm Password</label
                    >
                    <b-form-input
                      v-model="user.confirmPassword"
                      type="password"
                      placeholder="******" 
                      :error-messages="confirmPasswordErrors"
                      @input="$v.user.confirmPassword.$touch()"
                      @blur="$v.user.confirmPassword.$touch()"
                    ></b-form-input>
                    <span class="text-danger fz-12" v-if="confirmPasswordErrors[0]">{{confirmPasswordErrors[0]}}</span>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col xl="4" lg="4" sm="12">
                  <b-form-group class="mt-4">
                    <b-button
                      type="button"
                      class="mr-2 btn btn-theme"
                      @click="isEdit = false;UpdatePassword()"
                      >Update</b-button
                    >
                    <!-- <a
                      href="javascript:void(0);"
                      @click="isEdit = false"
                      class="text-theme"
                      >Cancel</a
                    > -->
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </section>
        </b-col>
      </b-row>
    </b-card>
  </b-card-group>

</template>

<script>
 
import { validationMixin } from 'vuelidate';
import {required,minLength,sameAs } from 'vuelidate/lib/validators';
import { mapActions } from "vuex";
export default {
  mixins: [validationMixin],
  validations: { 
      user: {
        oldpassword: { required  },
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAsPassword: sameAs('password') }
      }
   },
  data() {
    return {
      user: {
         oldpassword:'',
         password:'',
         confirmPassword:'',
         data:this.getLoginUserIdRequest(),
       }
    };
  },
  computed: {
    oldpasswordErrors() {
      const errors = []
      if (!this.$v.user.oldpassword.$dirty) return errors 
      !this.$v.user.oldpassword.required && errors.push('Current Password is Required') 
      
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.user.password.$dirty) return errors 
      !this.$v.user.password.required && errors.push('New Password is Required') 
      !this.$v.user.password.minLength && errors.push('Too short. Use at least 6 character')  
      return errors
    },
 
    confirmPasswordErrors() {
      const errors = []
      if (!this.$v.user.confirmPassword.$dirty) return errors 
      !this.$v.user.confirmPassword.required && errors.push('Confirm Password is required') 
      !this.$v.user.confirmPassword.sameAsPassword && errors.push('Password and Confirm Password should match')  
      return errors
    },
  }, 
  mounted() {

  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
      async UpdatePassword(){
        this.$v.user.$touch();
        if (!this.$v.user.$invalid) {
            var passRes = await this.genericAPIPOSTRequest({
                requestUrl: "setting/checkPassword",
                params: {'password':this.user.oldpassword,data:this.getLoginUserIdRequest(),},
            }); 
            if(!passRes){
              this.$toastr.e("Old password does not match");
              return false;
            }
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "setting/updatePassword",
                params: this.user,
            });  
            if(res){
              localStorage.removeItem("token"); 
              this.$router.push("/login"); 
              this.$toastr.s("Password successfully. Please login again");
            }
        }  
      },
   }
};
</script>
