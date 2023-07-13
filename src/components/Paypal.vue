<template>
    <!-- https://dev.to/kevin_odongo35/integrate-paypal-with-vue-application-42ih -->
    <!-- https://github.com/paypal-examples/vue-integration/blob/main/src/components/Item.vue -->
    <!-- https://www.youtube.com/watch?v=AtZGoueL4Vs -->
    <div v-if="!paid" id="paypal-button-container" ></div>
    <div v-else id="confirmation">Order complete!</div>
  </template>
  
  <script>
  import { loadScript } from '@paypal/paypal-js'; 
  export default {
    beforeCreate: function() {
      loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
        console.log('paypal',paypal);
        paypal
          .Buttons({
            createOrder: this.createOrder,
            onApprove: this.onApprove,
          })
          .render('#paypal-button-container');
          
      });
     
    },
    data() {
      return {
        paid: false,
      };
    },
    props: {
      cartTotal: {
        type: Number,
        default: 0.01,
      },
    },
    methods: {
      createOrder: function(data, actions) {
        console.log('actions===',actions);
        console.log('Creating order...');
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.cartTotal,
              },
            },
          ],
        });
      },
      onApprove: function(data, actions) {
        console.log('Order approved...');
        return actions.order.capture().then((res) => {
          this.paid = true;
          console.log(res);
          console.log('Order complete!');
        });
      },
    },
  };
  const CLIENT_ID = 'AatCdopsWYyKZqMmAVdPNTqYDTADVvDYTc_zK1-1e2o0fgeKFPDdZ_0R8Qk4sbRkuruuOc6W5p0wH3dH';
  </script>
  
  <style>
  
    iframe {
        display: block !important;
    }
    #paypal-button-container {
        margin: 30px 0;
    }
    #confirmation {
        color: green;
        margin-top: 1em;
        font-size: 2em;
    }
  </style>


<!-- <template>
    <div>
        <div id="paypal-button-container"></div>
    </div> -->
    <!-- <div id="container">
        <app></app>
    </div> -->
    <!-- <div>
        <div id="paypal-button-container">Paypal</div>
    </div> -->
<!-- </template>
<script src="https://www.paypal.com/sdk/js?client-id=AatCdopsWYyKZqMmAVdPNTqYDTADVvDYTc_zK1-1e2o0fgeKFPDdZ_0R8Qk4sbRkuruuOc6W5p0wH3dH" async></script>
<script> -->
<!-- //    document.querySelector('#paypal-button-container').style.display = 'none';

   paypal.Buttons().render('#paypal-button-container');

//    document.querySelector('#myRadioField')
    //  .addEventListener('click', function() {
    //    document.querySelector('#paypal-button-container')
    //      .style.display = 'block';
    //  }); -->
<!-- </script> -->
<!-- <script>
  const PayPalButton = paypal.Buttons.driver('vue', window.Vue)

  Vue.component('app', {
    // The style prop for the PayPal button should be passed in as `style-object` or `styleObject` to avoid conflict with Vue's `style` reserved prop.
    template: `
      <paypal-buttons :on-approve="onApprove" :create-order="createOrder" :on-shipping-change="onShippingChange" :on-error="onError" :style-object="style" />
    `,
    components: {
      'paypal-buttons': PayPalButton,
    },

    computed: {
      createOrder: function () {
        return (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '10',
                },
              },
            ],
          })
        }
      },
      onApprove: function () {
        return (data, actions) => {
          return actions.order.capture()
        }
      },
      onShippingChange: function () {
        return (data, actions) => {
          if (data.shipping_address.country_code !== 'US') {
            return actions.reject()
          }
          return actions.resolve()
        }
      },
      onError: function () {
        return (err) => {
          console.error(err)
          window.location.href = '/your-error-page-here'
        }
      },
      style: function () {
        return {
          shape: 'pill',
          color: 'gold',
          layout: 'horizontal',
          label: 'paypal',
          tagline: false,
        }
      },
    },
  })

  const vm = new Vue({
    el: '#container',
  })
</script> -->
<!-- <script>

    export default {
        mounted: function () { 
            paypal.Buttons().render('#paypal-button-container');
            
        },

    }

</script> -->