<template>
  <div>
    <div class="container">
      <b-row class="mt-100 mb-50 client-wrapper">
        <b-col cols="12">
          <div class="fxt-bg-color">
            <div class="fxt-content">
              <div class="fxt-form">
                <template>
                  <div>
                    <b-card-group deck>
                      <b-card title-class="text-theme font-14" footer-tag="footer">
                        <b-row>
                          <b-col xl="4" lg="4" sm="12" class="p-0">
                            <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://qapin_mvp5.manageprojects.in/assets/img/union-white.png);
                            background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;height: auto;;border-radius: 20px 0 0 20px;height:83vh;">
                              <div class="text w-100 text-center">
                                <div class="step-left-1 ">
                                  <h1 class="text-white mb-0">Create Client Account</h1>
                                  <p class="fz-18 fw-500 text-white">Hire, manage and pay as a different company. Each client company has its own freelancers, payment methods and reports.</p>
                                </div>
                              </div>
                            </div>
                          </b-col>
                          <b-col xl="8" lg="8" sm="12" class="p-0 pos-rel">
                            <div class="py-4 px-4">
                              <div class="content-right-wrap right-side">
                                <b-form>
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Client Name" label-for="client-name">
                                        <b-form-input id="client-name" type="text" placeholder="Enter name" required></b-form-input>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Your Role" label-for="role">
                                        <b-form-select id="role" :options="existing" value="Enter name" class="w-100" required></b-form-select>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <!--<b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Tagline" label-for="tagline">
                                        <b-textarea id="tagline" type="text" placeholder="Write here..." row="6" required></b-textarea>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Top 10 Skills" label-for="skills">
                                        <b-form-select id="skills" :options="skills" value="Enter name" class="w-100" required></b-form-select>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>-->
                                  <b-row>
                                    <h5 class="fz-16 fw-600 text-black">Location</h5>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="Country" label-for="country">
                                        <b-form-select id="country" :options="country" value="Select an option" class="w-100" required></b-form-select>
                                      </b-form-group>
                                    </b-col>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="State" label-for="state">
                                        <b-form-select id="state" :options="state" value="Select an option" class="w-100" required></b-form-select>
                                      </b-form-group>
                                    </b-col>
                                    <b-col xl="12" lg="12" md="12">
                                      <b-form-group label="City" label-for="city">
                                        <b-form-select id="city" :options="city" value="Select an option" class="w-100" required></b-form-select>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <div class="text-right py-4 btn-wrap">
                                    <button
                                      type="submit"
                                      class="btn btn-outline-theme mr-2"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      class="btn btn-theme"
                                    >
                                      Create Client Account
                                    </button>
                                  </div>
                                </b-form>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-card-group> 
                  </div>
                </template>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        existing: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'UI design' },
          { value: 'b', text: 'Theme creation' },
        ],
        skills: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'UI design' },
          { value: 'b', text: 'Theme creation' },
        ],
        country: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'Afghanistan' },
          { value: 'b', text: 'Albania' },
          { value: 'a', text: 'Algeria' },
          { value: 'b', text: 'American Samoa' },
        ],
        state: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'Badgis' },
          { value: 'b', text: 'Balgan' },
          { value: 'a', text: 'Balkh' },
          { value: 'b', text: 'Bamiyan' },
        ],
        city: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'bamiyan' },
          { value: 'b', text: 'Pinjab' },
        ],
      }
    },
  }
  </script>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
     


    .custom-control-label{background-color:#ffffff;}
    .existing-job .custom-select{width:100%;}
    .reuse-job .custom-select{width:100%;}
    .create-job input[type=radio]{position: absolute;opacity: 0;}
    .create-job .custom-radio{display:block!important;text-align:center;height: 100%;}
    .create-job input[type=radio] ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 45px 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;width:100%;}
    .create-job input ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;
    }
    .create-job input ~ label:before {position: absolute;display: block;top: 15px;right: 15px;content: '';width: 2em;background: transparent;border-radius: 50%;height: 2em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .create-job input:checked ~ label {color: #777;border: 1.5px solid #f2613d;}
    .create-job .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;}
    .create-job .custom-radio{margin-bottom:10px;}
    .create-job .custom-control-label{display:block!important;}

    .budget-wrapper input[type=radio]{position: absolute;opacity: 0;}
    .budget-wrapper .custom-radio{display:flex!important;text-align:center;height: 100%;}
    .budget-wrapper input[type=radio] ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 45px 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;width:100%;}
    .budget-wrapper input ~ label {position: relative;float: left;line-height: 1em;margin-top: 0;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;text-align: center;padding: 10px;box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);background: #FFFFFF;border: 1.5px solid #EBEBEB;box-sizing: border-box;border-radius: 20px;
    }
    .budget-wrapper input ~ label:before {position: absolute;display: block;top: 15px;right: 15px;content: '';width: 2em;background: transparent;border-radius: 50%;height: 2em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .budget-wrapper input:checked ~ label {color: #777;border: 1.5px solid #f2613d;}
    .budget-wrapper .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;}
    .budget-wrapper .custom-radio{margin-bottom:10px;}
    .budget-wrapper .input-group-text {height: 48px;border-radius: 0.25rem 0 0 0.25rem;}
    .budget-wrapper label{font-family: 'Source Sans Pro';font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;color: #000000;}

    input[type=radio] {position: absolute;opacity: 0;}
    .custom-radio .custom-control-input:checked~.custom-control-label::before {background-color: #f2613b;border: 1px solid #b94b2e;}
    .custom-radio{margin-bottom:10px;}
    input ~ label:before {display: block;content: '';width: 1.5em;background: transparent;border-radius: 50%;height: 1.5em;padding: 3px 0px;background-color: #ffffff;border: 1px solid #9b9d9e;font-size: 10px;}
    .custom-control-label{display: flex;align-items: center;cursor:pointer;}
    input ~ label:before{margin-right:10px;}
    .right-side{overflow-y:hidden!important;max-height: 700px!important;min-height: 700px!important;}
    
  </style>
