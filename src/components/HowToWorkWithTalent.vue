<template>
  <b-container>
      <b-row class="mt-100 search-wrap mb-50">
        <b-col xl="12" lg="12" sm="12">
          <b-card-group deck>
            <b-card title-class="text-theme font-14">
              <template #header>
                <h6 class="fz-24 fw-600 text-black mb-3">How to work with talent</h6>
                <p class="mb-0 fz-14 fw-500 text-black">Connect with a talent community that numbers in the millions, fast and at no cost.</p>
              </template>
              <b-card-text class="border-bottom pb-5">
                <b-row>
                  <b-col xl="2" lg="2" sm="12">
                    <img :src="$store.state.baseUrlImg+'/upload/client/1.svg'" class="img-fluid">
                  </b-col>
                  <b-col xl="10" lg="10" sm="12">
                    <div class="div-content d-flex align-items-center h-100">
                      <div>
                        <h3 class="fz-20 fw-600">1. Discover The Best Inspector Service Providers</h3>
                        <p class="fz-16 fw-500 text-muted mb-0 ml-5">We Know That Clients May Have Different Requirements In Different Project , And This Is Where Qapin Makes A Real Difference. A User Is Able To Create And Manage Three User-types, Or Profiles, Under One Qapin Login. There Is No Need To Log In And Out Of The Platform To Switch Between User Types. Since A User Can Use Qapin As An Inspector, An Inspection Agency, Or A Client, All Under One Login, Managing And Allocating Incoming And Outgoing Work Is A Seamless Process.</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
              <b-card-text class="border-bottom pb-5">
                <b-row>
                  <b-col xl="2" lg="2" sm="12">
                    <img :src="$store.state.baseUrlImg+'/upload/client/2.svg'" class="img-fluid">
                  </b-col>
                  <b-col xl="10" lg="10" sm="12">
                    <div class="div-content d-flex align-items-center h-100">
                      <div>
                        <h3 class="fz-20 fw-600">2. Discover The Best Inspector Service Providers</h3>
                        <p class="fz-16 fw-500 text-muted mb-0 ml-5">View In-depth Details For Each Inspection Service Provider, Including Qualifications, Skills, Employment History, And, Just As Importantly, Availability. With Qapin, You Get To Select The Talent You Need At The Budget You Want To Pay.</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
              <b-card-text class="border-bottom pb-5">
                <b-row>
                  <b-col xl="2" lg="2" sm="12">
                    <img :src="$store.state.baseUrlImg+'/upload/client/3.svg'" class="img-fluid">
                  </b-col>
                  <b-col xl="10" lg="10" sm="12">
                    <div class="div-content d-flex align-items-center h-100">
                      <div>
                        <h3 class="fz-20 fw-600">3. Source Qualified Inspectors</h3>
                        <p class="fz-16 fw-500 text-muted mb-0 ml-5">Intuitive Filters Enable You To Narrow Down Your Search To Find Exactly What You Need. Filter Your Search Results According To Budget, Location, Experience Level, And Required Skills Or Certifications. With Qapin, You Can Search And Find What You Need Faster, More Efficiently, And At A Time And Place That’s Convenient For You.</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
              <b-card-text class="border-bottom pb-5">
                <b-row>
                  <b-col xl="2" lg="2" sm="12">
                    <img :src="$store.state.baseUrlImg+'/upload/client/4.svg'" class="img-fluid">
                  </b-col>
                  <b-col xl="10" lg="10" sm="12">
                    <div class="div-content d-flex align-items-center h-100">
                      <div>
                        <h3 class="fz-20 fw-600">4. Manage Ongoing Projects</h3>
                        <p class="fz-16 fw-500 text-muted mb-0 ml-5">The Qapin Platform Includes A Management System So You Can Message Inspectors And Receive Their Replies In Real Time. The System Facilitates Free Messaging, With Provision To Share Documents Whenever You Need. As A Result, You Can Communicate As Often As You Want So You Can Stay On Top Of Ongoing And New Projects.</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
              <b-card-text class="border-bottom pb-5">
                <b-row>
                  <b-col xl="2" lg="2" sm="12">
                    <img :src="$store.state.baseUrlImg+'/upload/client/5.svg'" class="img-fluid">
                  </b-col>
                  <b-col xl="10" lg="10" sm="12">
                    <div class="div-content d-flex align-items-center h-100">
                      <div>
                        <h3 class="fz-20 fw-600">5. No Hourly Rates</h3>
                        <p class="fz-16 fw-500 text-muted mb-0 ml-5">VWith Qapin, You Specify The Price For The Project Before Work Begins. The Price Will Be Per Day, Or For Completion Of The Project, With No Hidden Costs. That Means No Unexpected Invoices And Expenses After Your Inspector Has Finished Their Work.</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
              <b-card-text class="border-bottom pb-5">
                <b-row>
                  <b-col xl="2" lg="2" sm="12">
                    <img :src="$store.state.baseUrlImg+'/upload/client/6.svg'" class="img-fluid">
                  </b-col>
                  <b-col xl="10" lg="10" sm="12">
                    <div class="div-content d-flex align-items-center h-100">
                      <div>
                        <h3 class="fz-20 fw-600">6. Easy Payment</h3>
                        <p class="fz-16 fw-500 text-muted mb-0 ml-5">An Escrow Account Means That The Inspector Working On Your Inspection Will Only Receive Payment When You Are Completely Satisfied With Their Work. Once You Are Happy To Release The Payment, It’s Just A Matter Of Pressing A Couple Of Buttons To Complete The Job And Release The Funds. Escrow Is A Secure And Straightforward Way To Organize Payment. You Transfer Funds To Your Escrow Account Directly From Your Bank Account, And The Money Is Released When You’re Ready</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
  </b-container>
</template>

<script> 

export default {
  components: {
     
  },

  data() {
    return {
       
    }
  },
}
</script>
