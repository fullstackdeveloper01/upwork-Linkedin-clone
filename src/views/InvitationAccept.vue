<template>
  <b-container>
    <div class="thankyou-page mt-100">
      <b-card-group deck>
        <b-card class="px-4 py-4 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F15B26" class="bi bi-check2-square m-auto" viewBox="0 0 16 16">
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
          </svg>
          <h2 class="mt-4 fw-600">Thank you </h2>
          <h6 class="mt-0 mb-0 text-muted">{{inviteduser}}.</h6>
        </b-card>
      </b-card-group>
    </div>
  </b-container>
 </template>
    
<script>      
    const url = window.location.href;
    const lastParam = url.split("?").slice(-1)[0];
    import { mapActions } from "vuex";
    export default {
      computed: {

      },
      components: {
      },
       
      data() {
        return { 
            inviteduser:'',
        }
      },
      mounted() { 
        this.acceptInvitaion(lastParam);
        // this.getCompanyDetails();
      },
      methods: { 
        ...mapActions(["genericAPIPOSTRequest"]),
        async acceptInvitaion(data){
          var res = await this.genericAPIPOSTRequest({
            requestUrl: "acceptInvitation",
            params: {
              id:data,
            },
          });
          if (res) {
            this.inviteduser = 'Invitation Accepted';    
          }else{
            this.inviteduser = 'Invitation Expire';    
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
  </style>