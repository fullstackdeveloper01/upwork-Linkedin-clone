<template>
    <div class="mt-3">
      <div>
        <label>Card Number</label>
        <div id="card-number"></div>
        <label>Card Expiry</label>
        <div id="card-expiry"></div>
        <label>Card CVC</label>
        <div id="card-cvc"></div>
        <div id="card-error"></div>
        <button id="custom-button" @click="createToken">Generate Token</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions} from "vuex";
  export default {
    props:['proposalDetails'],
    data () {
      return {
        token: null,
        cardNumber: null,
        cardExpiry: null,
        cardCvc: null,
      };
    },
    computed: {
      stripeElements () {
        return this.$stripe.elements();
      },
    },
    mounted () {
      // Style Object documentation here: https://stripe.com/docs/js/appendix/style
      const style = {
        base: {
          color: 'black',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '14px',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a',
        },
      };
      this.cardNumber = this.stripeElements.create('cardNumber', { style });
      this.cardNumber.mount('#card-number');
      this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
      this.cardExpiry.mount('#card-expiry');
      this.cardCvc = this.stripeElements.create('cardCvc', { style });
      this.cardCvc.mount('#card-cvc');
    },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
      async createToken () {
        const { token, error } = await this.$stripe.createToken(this.cardNumber);
        if (error) {
          // handle error here
          document.getElementById('card-error').innerHTML = error.message;
          return;
        }
        console.log(token);
        console.log('this',this.cardNumber);
        // handle the token
        // send it to your server
      },
      // submit () {
      //   // this will trigger the process
      //   this.$refs.elementRef.submit();
      // },
      // cancel(){
      //   this.$refs.elementRef.clear();
      //   this.$emit('closePaymentModal')
      // },
      // async tokenCreated (token) {
      //   // handle the token
      //   // send it to your server
      //   // Insert the token ID into the form so it gets submitted to the server
      //   var res = await  this.genericAPIPOSTRequest({
      //       requestUrl: "paymentSubmit",
      //       params: {
      //           'job_id':this.proposalDetails.jobs_id,
      //           'amount' : this.proposalDetails.cost,
      //           'currency' : 'usd',
      //           'description' : 'Example charge',
      //           'source' : token.id,
      //       },
      //   });  
      //   if (res) {
      //       this.$refs.elementRef.clear();
      //       this.$emit('closePaymentModal');
      //       this.$toastr.s('payment Successfully done');
            
      //   }
      // },
    }
  };
  </script>
<!-- single line payment gateway stripe -->
<!-- <template>
  <div class="mt-3">
    <stripe-element-card
      ref="elementRef"
      :pk="publishableKey"
      @token="tokenCreated"
    />
    <div class="text-right mt-3">
      <button @click="cancel()" class="btn btn-outline-theme mr-3">Cancel</button>
      <button @click="submit" class="btn btn-theme">Pay ${{proposalDetails.cost}}</button>
    </div>
    
  </div>
</template>

<script>
import { mapActions} from "vuex";
import { StripeElementCard } from '@vue-stripe/vue-stripe';
export default {
  props:['proposalDetails'],
  components: {
    StripeElementCard,
  },
  data () {
    return {
      publishableKey : 'pk_test_51JdqlfBCeXjCoMqA9kvCfL3NeJ1S3QD3ICvbmB66GwjwIvi9XafbWxFVEZqDUq0YENdHJY4OEhxM0QG5sb2HgRmi00ZPTT890M',
      token: null,
    };
  },
  methods: {
      ...mapActions(["genericAPIPOSTRequest"]),
    submit () {
      // this will trigger the process
      this.$refs.elementRef.submit();
    },
    cancel(){
      this.$refs.elementRef.clear();
      this.$emit('closePaymentModal')
    },
    async tokenCreated (token) {
      // handle the token
      // send it to your server
      // Insert the token ID into the form so it gets submitted to the server
      var res = await  this.genericAPIPOSTRequest({
          requestUrl: "paymentSubmit",
          params: {
              'job_id':this.proposalDetails.jobs_id,
              'amount' : this.proposalDetails.cost,
              'currency' : 'usd',
              'description' : 'Example charge',
              'source' : token.id,
          },
      });  
      if (res) {
          this.$refs.elementRef.clear();
          this.$emit('closePaymentModal');
          this.$toastr.s('payment Successfully done');
          
      }
    },
  }
};
</script> -->