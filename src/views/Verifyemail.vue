<template>
    <b-container>
      <div class="thankyou-page mt-100 vh-100 d-flex align-items-center justify-content-center" v-if="hideThankyou">
        <b-card-group deck>
          <b-card class="px-4 py-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F15B26" class="bi bi-check2-square m-auto" viewBox="0 0 16 16">
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
            </svg>
            <h2 class="mt-4 fw-600">Great job </h2>
            <h6 class="mt-0 mb-0 text-muted">Your email is verified!</h6>
            <h6 class="mt-0 mb-0 text-muted">{{verificationMsg}}.</h6>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
   </template>
      
  <script>      
      const url = window.location.href;
      const lastParam = url.split("/").slice(-1)[0];
      import { mapActions } from "vuex";
      export default {
        computed: {
  
        },
        components: {
        },
         
        data() {
          return { 
              verificationMsg:'',
              hideThankyou:true,
              userDetail:'',
          }
        },
        mounted() { 
          this.logout();
        },
        methods: { 
          ...mapActions(["genericAPIPOSTRequest"]),
          logout() {
            this.$store.dispatch("currentUserData", '');
            this.$store.dispatch("currentUserOwnerData", '');
            this.$store.dispatch("accountType", '');
            this.$store.dispatch("currentUserLoginUuid", '');
            this.$store.dispatch("profileImg", '');
            localStorage.removeItem("token"); 
            localStorage.removeItem("accountType"); 
            localStorage.removeItem("loginUserData");
            this.verifyAccounts(lastParam);
          },
          async verifyAccounts(data){
            var res = await this.genericAPIPOSTRequest({
              requestUrl: "user/verifyAccount/"+data,
              params: {},
            });
            if (res) {
              // this.userDetail = res.userDetail;
              this.verificationMsg = res.message;  
              setTimeout(() => {
                this.hideThankyou=false;
              }, 2000);  
              this.$router.push("/login");
            }else{
              this.verificationMsg = 'Email Not Verified';    
            }
          },
          
        }
      };
    </script> 
    <style>
    .thankyou-page .card{
      padding: 100px 0!important;
      border-radius: 20px;
    }
    .thankyou-page .card-deck{
      width:1200px;
      margin:0 auto;
    }
    </style>