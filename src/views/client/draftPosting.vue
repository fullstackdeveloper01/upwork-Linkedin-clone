  <template>
    <b-container>
      <b-row class="mt-100 posting-wrap" v-if="PostJobListFiltered.length > 0">
        <b-col xl="12" lg="12" sm="12" >
          <div class="d-md-flex align-items-center mb-3">
            <h4 class="mb-0 fz-24 fw-500 text-black"><b>Draft Posting</b></h4>
            <div class="ml-auto">
              <b-button  @click="$router.push('/client/post-job')"  class="btn btn-theme">Post a Job</b-button>
            </div>
          </div>
          
          <b-card-group deck>
            <b-card title-class="text-theme font-14" class="py-4 px-4" >
              <div class="posted-job-wrapper border-bottom" v-for="(postjobs, i) of PostJobList" :key="i"  >
                <div class="d-md-flex align-items-center mb-3">
                  <h4 class="mb-0 fz-18 fw-500 text-black"><b>{{postjobs.job_title}}</b></h4>
                  <div class="ml-auto">
                    <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                      <template #button-content>
                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                        </svg>
                      </template>
                      <b-dropdown-item href="javascript:void(0);" @click="$router.push({name: 'postReview', path:'/client/post-review',params: {pid: postjobs.uniq_id}}).href">Edit Draft</b-dropdown-item>
                      <b-dropdown-item href="javascript:void(0);" v-b-modal.modal-draftdelete @click="removePostId =postjobs.jobs_id">Remove Draft</b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
                <b-row> 
                  <b-col xl="4" lg="4" sm="12">
                    <!-- <p class="fz-16 fw-500 text-muted mb-1">Public - Hourly</p> -->
                    <p class="fz-16 fw-500 text-muted mb-0">Posted {{postjobs.create_timestamp}}</p>
                  </b-col>
                  <!-- <b-col xl="2" lg="2" sm="12">
                    <p class="fz-16 fw-500 text-black mb-1">{{postjobs.appliedCount}} <span class="badge badge-theme" v-if="postjobs.notSeenAwarded > 0">{{postjobs.notSeenAwarded}} new</span></p>
                    <h4 class="fz-16 fw-500 text-muted mb-0">Proposals</h4>
                  </b-col>
                  <b-col xl="2" lg="2" sm="12">
                    <p class="fz-16 fw-500 text-black mb-1">00</p>
                    <h4 class="fz-16 fw-500 text-muted mb-0">Messaged </h4>
                  </b-col>
                  <b-col xl="2" lg="2" sm="12">
                    <p class="fz-16 fw-500 text-black mb-1">{{postjobs.awarded}}</p>
                    <h4 class="fz-16 fw-500 text-muted mb-0">Hired</h4>
                  </b-col> -->
                  <b-col xl="2" lg="2" sm="12" class="text-right">
                    <!-- <b-button class="btn btn-theme">View Proposals</b-button> -->
                  </b-col>  
                </b-row>
              </div> 
              <!-- <div class="text-center py-4 text-theme">
                <b-spinner type="border" medium></b-spinner>
              </div> -->
              <b-modal id="modal-draftdelete" title="Delete Draft" centered hide-footer size="md" no-close-on-backdrop> 
                <template>
                  <div class="p-5 text-center m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#c10000" class="bi bi-trash m-auto" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    <h5 class="mt-4">Are you sure, want to delete this draft?</h5>
                  </div>
                  <hr>
                  <div>
                      <div class="text-right">
                        <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('modal-draftdelete')">Cancel</a>
                        <b-button type="button" class="btn btn-theme" @click="ConfirmDelete(removePostId)">Confirm</b-button>
                      </div>
                  </div>
                </template>
            </b-modal>
            </b-card>
          </b-card-group> 

        </b-col>
      </b-row>
      
      <b-row class="mt-100 posting-wrap" v-else >
        <b-col xl="12" lg="12" sm="12">
          <b-card-text>
            <b-card-group deck>
              <b-card class="py-4 px-4 bg-white br-20">
                <div class="text-center">
                  <svg width="140" height="140" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                    <path d="M65.7535 6.47396C70.8988 2.90571 77.7184 2.90571 82.8637 6.47396C86.1714 8.76789 90.2618 9.63733 94.2166 8.88711C100.368 7.72012 106.598 10.4939 109.848 15.8464C111.936 19.2874 115.319 21.7454 119.237 22.6686C125.332 24.1047 129.895 29.1726 130.686 35.3839C131.195 39.377 133.286 42.9986 136.49 45.4356C141.473 49.2264 143.581 55.7122 141.777 61.7083C140.618 65.563 141.055 69.7219 142.99 73.2513C146.001 78.7414 145.288 85.5236 141.202 90.2677C138.575 93.3176 137.282 97.2947 137.615 101.306C138.133 107.546 134.723 113.452 129.06 116.124C125.42 117.842 122.621 120.949 121.294 124.749C119.228 130.661 113.711 134.669 107.451 134.807C103.427 134.895 99.6067 136.596 96.8481 139.527C92.5572 144.087 85.8866 145.505 80.1119 143.085C76.3995 141.529 72.2177 141.529 68.5053 143.085C62.7306 145.505 56.06 144.087 51.769 139.527C49.0105 136.596 45.1902 134.895 41.1659 134.807C34.9059 134.669 29.3887 130.661 27.3235 124.749C25.9958 120.949 23.1976 117.842 19.5571 116.124C13.8943 113.452 10.4845 107.546 11.0021 101.306C11.3348 97.2947 10.0425 93.3176 7.41543 90.2677C3.3289 85.5236 2.61606 78.7414 5.62693 73.2513C7.56254 69.7219 7.99966 65.563 6.84015 61.7083C5.03652 55.7122 7.1439 49.2264 12.1275 45.4356C15.3313 42.9986 17.4222 39.377 17.9308 35.3839C18.7219 29.1726 23.2851 24.1047 29.3797 22.6686C33.2977 21.7454 36.6809 19.2874 38.7697 15.8464C42.0188 10.4939 48.2488 7.72012 54.4005 8.88711C58.3554 9.63733 62.4458 8.76789 65.7535 6.47396Z" fill="#F2613C"/>
                    <path d="M68.4151 83.8327H76.452L83.8639 55.4354L86.4536 44.1836H74.2195L72.5228 55.4354L68.4151 83.8327ZM68.5044 105.086C73.6837 105.086 77.2557 100.621 77.2557 96.1561C77.2557 92.3162 74.7553 89.4586 70.9154 89.4586C65.7361 89.4586 62.1641 94.1022 62.1641 98.4779C62.1641 102.407 64.6645 105.086 68.5044 105.086Z" fill="white"/>
                  </svg>
                  <h4 class="fz-20 fw-600 text-black mt-2">No jobs found</h4>
                  <p class="fz-14 fw-500 text-black mb-0">You don't have any Draft job postings yet.</p>
                  <b-button class="btn btn-theme text-center my-4">Post a Job</b-button>
                </div>
              </b-card>
            </b-card-group>
          </b-card-text>
      </b-col>
      </b-row>    
    </b-container>
    
  </template>
  <script>
   import { mapActions } from "vuex";
    export default {
      data() {
        return {
          PostJobList:[],
          search:'',
          removePostId:'',
        }
      },
       computed:{
        PostJobListFiltered(){
          function compare(a, b) {
            if (a.job_title < b.job_title) return -1;
            if (a.job_title > b.job_title) return 1;
            return 0;
          }
          return this.PostJobList.filter(user => {
              return user.job_title.toLowerCase().includes(this.search.toLowerCase());
          }).sort(compare);
        },
         
      },
      async mounted() {
        this.getPostedJob('2'); 
      },
      methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        async getPostedJob(_v){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getUserPostedJob",
              params: {
                "filter": _v,
                "search": {}
            },
          });  
          this.PostJobList = res;
        },
        async removeDraft(_i){
          if(confirm("Do you really want to delete?")){
            await this.genericAPIPOSTRequest({
              requestUrl: "deletePostJob",
              params: {
                "jobData":{"jobs_id":_i}
              },
            });  
            this.getPostedJob('2');
          }
        },
        //this fun for delete posts
        async ConfirmDelete(_i){
          await this.genericAPIPOSTRequest({
            requestUrl: "deletePostJob",
            params: {
              "jobData":{"jobs_id":_i}
            },
          });  
          this.$bvModal.hide('modal-draftdelete');
          this.getPostedJob('2');
        },
        //this fun for to set delete value
        async remove(_i){
          console.log('ass',_i)
          this.removePostId =_i;
        },
      }
    }
  </script>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
    body{font-family: 'Source Sans Pro', sans-serif!important;}
    .text-muted{color:#979797!important;}
    .ralative {padding-bottom:0px;}
    .theme-bg{background-color: #FFF6F4!important;}
    .bg-none{background-color:transparent;}
    .bordered{border-bottom: 1px solid #EBEBEB!important;border-right: 1px solid #EBEBEB;}
    .border-bottom{border-bottom: 1px solid #EBEBEB!important;}
    .br-20{border-radius: 20px;}
    .border-none{border:0px!important;}
    .fz-16{font-size:16px;}
    .fz-18{font-size:18px;}
    .fw-600{font-weight:600;}
    .fw-500{font-weight:500;}
    .fw-400{font-weight:400;}
    .mb-23{margin-bottom:23px;}
    .no-bottom-border{border-bottom:0px!important;}
    .border-top-0{border-top:0px!important;}
    .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
    p {margin-top: 0!important;margin-bottom: 1rem!important;}
    h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
    dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
    ol, ul {padding-left: 2rem!important;}
    .fz-30{font-size:26px!important;}

    .posting-wrap .card{border-radius:20px;}  
    .posting-wrap .card-header{border-radius:20px 20px 0 0!important;}
    .posting-wrap .card-body{border-radius:0 0 20px 20px;    padding: 0 12px;}
    .posting-wrap .card-footer{border-radius:0 0 20px 20px!important;background-color:#fff;}
    .tags-wrap ul{margin-bottom:0px!important;}
    a{text-decoration:none!important;}
    .posted-job-wrapper{padding-bottom:15px;margin-bottom:15px;}
    .posted-job-wrapper.border-bottom:last-child{border-bottom:0!important;}
    .posted-job-wrapper .dropdown-menu{padding-left:0px!important;}

    .dropdown-header {cursor: pointer;line-height: 50px;padding-left: 10px;padding-right: 50px;position: relative;text-overflow: ellipsis;}
    .dropdown-header i.fa {position: absolute;right: 10px;top: 50%;transform: translateY(-50%);transition: opacity 0.3s;}
    .dropdown-header i.fa.fa-angle-up {opacity: 0;}
    .dropdown-header.is-active i.fa.fa-angle-up {opacity: 1;}
    .dropdown-header.is-active i.fa.fa-angle-down {opacity: 0;}
    .dropdown-header.is-active + .dropdown-content {height: auto;opacity: 1;visibility: visible;display:block;}
    .dropdown-content {height: 0;opacity: 0;overflow: hidden;padding: 20px;transition: opacity 0.3s;visibility: hidden;background-color:#fff;    border-radius: 8px;margin-bottom: 20px;display:none;}
    .dropdown-content .custom-control label{font-weight:500;font-size:16px;color:#333;}
  
  </style>
