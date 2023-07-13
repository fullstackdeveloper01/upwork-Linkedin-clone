<template>
  <div style="height: 90vh" class="overflow-y-hidden">
    <!-- Sign Up Main content  -->
    <div
      class="w-full max-w-lg px-4 py-4 mx-auto mt-20 overflow-hidden sm:py-20 sm:mt-40 sm:px-0"
    >
      <div>
        <h1 class="text-3xl font-bold text-gray-900 sm:text-3xl">
          Hello There!
        </h1>
        <p class="-mt-2 text-sm font-medium text-gray-400">
          Sign up to see what we've found for you.
        </p>

        <form action="" @submit.prevent="submitSignUpData" class="-mt-2">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <v-text-field
              v-model="first_name"
              :error-messages="firstNameErrors"
              label="First Name"
              required
              @input="$v.first_name.$touch()"
              @blur="$v.first_name.$touch()"
            />
            <v-text-field
              v-model="last_name"
              :error-messages="lastNameErrors"
              label="Last Name"
              required
              @input="$v.last_name.$touch()"
              @blur="$v.last_name.$touch()"
            />
          </div>

          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="Email Id"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />

          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="show1 = !show1"
          />

          <div class="flex items-center justify-between mt-3">
            <div class="flex items-center">
              <label for="checkbox1" class="checkbox">
                <input id="checkbox1" type="checkbox" role="checkbox" />
              </label>
              <label
                for="terms-service"
                class="block ml-2 mr-1 text-xs text-gray-400"
              >
                By signing up, you agree to the
              </label>
              <router-link
                to="/terms-services"
                class="text-base font-medium text-gray-600 no-underline hover:text-primary-500"
              >
                Terms of Service
              </router-link>
            </div>
          </div>

          <div class="text-sm font-medium text-red-600" v-if="(terms = '')">
            Term condition is required
          </div>

          <button
            type="submit"
            class="w-full mr-4 text-base font-medium py-2.5 mt-4 text-white rounded-md cursor-pointer bg-primary-500 transition-all duration-500 ease-in-out hover:bg-primary-500 hover:shadow-2xl hover:bg-opacity-70"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  title: 'Create an Account | Qapin',

  mixins: [validationMixin],

  validations: {
    first_name: { required },
    last_name: { required },
    email: { required, email },
    password: { required },
    terms: { required },
  },

  components: {},

  data() {
    return {
      isSaving: false,
      email: '',
      first_name: '',
      last_name: '',
      password: null,
      terms: null,
      show1: false,
      currentUser: null,
    }
  },

  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    firstNameErrors() {
      const errors = []
      if (!this.$v.first_name.$dirty) return errors
      !this.$v.first_name.required && errors.push('First Name is required')
      return errors
    },
    lastNameErrors() {
      const errors = []
      if (!this.$v.last_name.$dirty) return errors
      !this.$v.last_name.required && errors.push('Last Name is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    termsErrors() {
      const errors = []
      if (!this.$v.terms.$dirty) return errors
      !this.$v.terms.required && errors.push('Terms & Service is required')
      return errors
    },
  },

  methods: {
    submitSignUpData() {
      this.isSaving = true
      this.$v.$touch()

      const signUpData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        term_condition: this.terms,
      }

      axios
        .post(
          ' user/addUser',
          signUpData
        )

        .then((response) => {
          if (response) {
            this.resetSignUpForm()
            this.$router.push('/sign-up/about-profile')
          }

          this.isSaving = false
        })
        .catch((error) => {
          console.log('error =>', error)
        })
    },

    resetSignUpForm() {
      this.$v.$reset()
      this.first_name = ''
      this.last_name = ''
      this.email = ''
      this.password = ''
      this.terms = ''
    },
  },
}
</script>

<style lang="css" scoped>
.checkbox input:checked {
  border-color: #f2613c;
  background-color: #f2613c;
}
</style>
