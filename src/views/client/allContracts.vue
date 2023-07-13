  <template>
    <b-container>
      <b-row class="mt-100 client-dashboard-wrap">
        <b-col xl="12" lg="12" sm="12">
          <div class="d-flex align-items-center w-100 mb-4">
            <div>
              <h4 class="fz-24 fw-600 text-black">All Contracts</h4>
            </div>
            <div class="ml-auto d-flex align-items-center">
              <b-button @click="hasHistory() 
                      ? $router.go(-1) 
                      : $router.push('/clientDashboard')" class="btn btn-theme">Back</b-button>
            </div>
          </div>
          
          <b-card no-body>
            <div class="view-wrapper">
              <b-row>
                <b-col xl="12" lg="12" sm="12" class="left">
                  <div class="header px-4 py-4">
                    <div class="d-flex align-items-center w-100">
                      <div>
                        <h4 class="fz-24 fw-600 text-black mb-0">Your Contract</h4>
                      </div>
                      <div class="ml-auto d-flex align-items-center">
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col xl="12" lg="12" sm="12">
                  <b-card no-body class="px-4 py-2">
                    <span class="fz-24 text-success fw-600 pos-absolute r-2rem" v-if="tabValue=='active'">${{totalBurget}}</span>
                    <span class="fz-24 text-success fw-600 pos-absolute r-2rem" v-if="tabValue=='awaiting'">${{totalawaitingBurget}}</span>
                    <b-tabs>
                      <b-tab active @click="tabValue='active'">
                        <template #title>
                          <span class="d-block">Active <span class="badge badge-theme">{{(ActiveContractList.length>0)?ActiveContractList.length:''}}</span></span>
                        </template>
                        <div v-if="ActiveContractList.length>0">
                          <div v-for="(active_con,aid) in ActiveContractList" :key="aid">
                            <div class="d-flex align-items-center mt-4">
                              <h5 class="fz-18 fw-600">{{active_con.job_title}}</h5>
                              <div class="ml-auto">
                                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                  <template #button-content>
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                                    </svg>
                                  </template>
                                  <b-dropdown-item href="#">Action</b-dropdown-item>
                                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                              </div>
                            </div>
                            <b-row class="mt-2">
                              <b-col xl="8" lg="8" sm="12">
                                <div class="d-md-flex align-items-center mb-2">
                                  <div class="img-wrapper mr-3 w-10 h-10 br-50">
                                    <img :src="$store.state.baseUrlImg+'/upload/profile_image/'+active_con.profile_picture_path" class="img-fluid br-50 w-100 h-100">
                                  </div>
                                  <div>
                                    <h4 class="fz-18 fw-600 text-theme mb-0"><a href="javascript:void(0);" class="text-theme">{{active_con.first_name+' '+active_con.last_name}}</a></h4>
                                    <p class="fz-14 fw-600 text-muteed mb-0">{{active_con.LocalTime}} Local Time</p>
                                  </div>
                                </div> 
                              </b-col>
                              <b-col xl="4" lg="4" sm="12" class="text-right">
                                <b-button class="btn btn-theme">Active Milestone</b-button>
                                <p class="fz-14 text-black fw-600 text-right mt-3">$ {{active_con.burget}} Budget</p>
                              </b-col>
                            </b-row>
                          </div>
                        </div>
                      </b-tab>
                      <b-tab @click="tabValue='awaiting'">
                        <template #title>
                          <span class="d-block">Awaiting <span class="badge badge-theme">{{(AwaitingContractList.length>0)?AwaitingContractList.length:''}}</span></span>
                        </template>
                        <div v-if="AwaitingContractList.length>0">
                          <div v-for="(awaiting_con,aid) in AwaitingContractList" :key="aid">
                            <div class="d-flex align-items-center mt-4">
                              <h5 class="fz-18 fw-600">{{awaiting_con.job_title}}</h5>
                              <div class="ml-auto">
                                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                  <template #button-content>
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#666666"/>
                                    </svg>
                                  </template>
                                  <b-dropdown-item href="#">Action</b-dropdown-item>
                                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                              </div>
                            </div>
                            <b-row class="mt-2">
                              <b-col xl="8" lg="8" sm="12">
                                <div class="d-md-flex align-items-center mb-2">
                                  <div class="img-wrapper mr-3 w-10 h-10 br-50">
                                    <img :src="$store.state.baseUrlImg+'/upload/profile_image/'+awaiting_con.profile_picture_path" class="img-fluid br-50 w-100 h-100">
                                  </div>
                                  <div>
                                    <h4 class="fz-18 fw-600 text-theme mb-0"><a href="javascript:void(0);" class="text-theme">{{awaiting_con.first_name+' '+awaiting_con.last_name}}</a></h4>
                                    <p class="fz-14 fw-600 text-muteed mb-0">{{awaiting_con.LocalTime}} Local Time</p>
                                  </div>
                                </div> 
                              </b-col>
                              <b-col xl="4" lg="4" sm="12" class="text-right">
                                <b-button class="btn btn-theme">Active Milestone</b-button>
                                <p class="fz-14 text-black fw-600 text-right mt-3">$ {{awaiting_con.burget}} Budget</p>
                              </b-col>
                            </b-row>
                          </div>
                        </div>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </b-col>
              </b-row>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <HowToWorkWithTalent></HowToWorkWithTalent>
      
    </b-container>
  </template>
  <script>
    import HowToWorkWithTalent from "../../components/HowToWorkWithTalent.vue";
    import { mapActions } from "vuex";
    export default {
      data() {
        return {
          selected: null,
          transaction: [
            { value: null, text: 'All Transaction' },
            { value: 'a', text: 'This is First option' },
            { value: 'b', text: 'Selected Option' },
            { value: { C: '3PO' }, text: 'This is an option with object value' },
            { value: 'd', text: 'This one is disabled', disabled: true }
          ],
          ActiveContractList:[],
          AwaitingContractList:[],
          tabValue:'active',
        }
      },
      computed:{
        totalBurget(){
        // function to total burget amount
            var amount=0;
            this.ActiveContractList.filter(user => {
                amount+=parseInt(user.burget);
            });
            return amount;
        },
        totalawaitingBurget(){
        // function to total burget amount
            var amount=0;
            this.AwaitingContractList.filter(user => {
                amount+=parseInt(user.burget);
            });
            return amount;
        },
      },
      components: {
          HowToWorkWithTalent
      },
      async mounted() {
        this.getActiveContract('2');
        this.getAwaitingContract('1');
      },
      methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        async getActiveContract(_v){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getClientContractList",
              params: {
                'filter':_v,
                "search":{}
              },
          });  
          this.ActiveContractList = res;
          console.log('activedata',this.ActiveContractList);
        },
        async getAwaitingContract(_v){
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getClientContractList",
              params: {
                'filter':_v,
                "search":{}
              },
          });  
          this.AwaitingContractList = res;
          console.log('awaitingdata',this.AwaitingContractList);
        },
        hasHistory () { return window.history.length > 2 },
        toggleDropdown (event) {
          event.currentTarget.classList.toggle('is-active')
        }
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
    .fz-14{font-size:14px!important;}
    .fz-16{font-size:16px!important;}
    .fz-18{font-size:18px!important;}
    .fw-600{font-weight:600!important;}
    .fw-500{font-weight:500!important;}
    .fw-400{font-weight:400!important;}
    .mb-23{margin-bottom:23px;}
    .no-bottom-border{border-bottom:0px!important;}
    .border-top-0{border-top:0px!important;}
    .theme-bg-box{background: rgba(242, 97, 60, 0.05);border-radius: 20px;padding:20px;}
    p {margin-top: 0!important;margin-bottom: 1rem!important;}
    h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
    dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
    ol, ul {padding-left: 2rem!important;}
    .fz-30{font-size:26px!important;}

    .client-dashboard-wrap .card{background-color: transparent;border: 0px;}
    .client-dashboard-wrap .card-header{background-color: transparent;border: 0px;}
    .client-dashboard-wrap .card-header-pills{margin-left:-40px;}
    .client-dashboard-wrap .nav-pills .nav-link{border-radius: 0px;border-bottom: 1px solid #dfdfdf;border:0px;color: #333;background-color: #fff;padding: 15px 5px;font-weight: 600;font-size:18px;}
    .client-dashboard-wrap .nav-pills .nav-link.active{background-color: #fff;border-bottom: 2px solid #f2613b!important;border: 0px;color: #f2613b;}
    .client-dashboard-wrap .nav-tabs .tab-content{background-color: #fff;margin: 9px;border-radius:20px;}
    .client-dashboard-wrap .nav-pills .nav-item{background-color: #fff;}
    .client-dashboard-wrap .nav-tabs .nav-link .badge-theme{background-color:#9c9c9c;color:#fff!important;border-radius: 50%;width: 25px;height: 25px;padding: 6px 6px!important;font-size: .75em!important;line-height: 1!important;}
    .client-dashboard-wrap .nav-tabs .nav-link.active .badge-theme{background-color:#f2613b;color:#fff;border-radius: 50%;width: 25px;height: 25px;padding: 6px 6px!important;font-size: .75em!important;line-height: 1!important;}
    .client-dashboard-wrap .nav-pills .nav-link.active .badge-theme{background-color: #fff;color:#f2613b;}
    .client-dashboard-wrap .nav-tabs {border-bottom: 0;margin-left:-40px;}
    .client-dashboard-wrap .nav-tabs .nav-link{font-size: 16px;color: #999999;font-weight:500;}
    .client-dashboard-wrap .nav-tabs .nav-link.active{color: #000;background-color: transparent;border-color: #dee2e6 #dee2e6 #fff;border: 0;border-bottom: 2px solid #f2613b;font-weight: 600;}
    .client-dashboard-wrap input ~ label:before{display:none;}
    .br-20{border-radius:20px!important;}
    .br-50{border-radius:50px!important;}
    .ml-30{margin-left:8rem;}
    .pl-30{margin-left:8rem;}
    .job-detail-wrap .card{background-color:#fff;border-radius:20px!important;}
    .job-detail-wrap .card-header{background-color:#fff;padding:1.5rem;border-radius:20px 20px 0 0!important;}
    .job-detail-wrap .card-body{background-color:#fff;padding:1.5rem;border-radius:0 0 20px 20px!important;}
    .job-detail-wrap .card-body a{color:#f2613b!important;}
    .pos-absolute{position:absolute;}
    .r-2rem{right:2rem;}
  </style>
