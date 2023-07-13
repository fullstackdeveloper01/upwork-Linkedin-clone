<template>
  <div>
    <b-card-group deck>
      <b-card header-tag="header" footer-tag="footer" header-class="px-4 py-4 bg-white" class="mb-3" >
        <template #header>
          <h4 class="mb-0 text-black fz-24 fw-500">
            <b>Tax Information</b>
          </h4>
        </template>
        <p class="fw-600 text-muted mb-3">This information is required in order to confirm if you are a U.S. or non-U.S. taxpayer and whether or not   Qapin is required to withhold taxes from your earnings.<br>Add your tax information now to avoid delays in getting paid.</p>
      </b-card>
    </b-card-group>

    <b-card-group deck >
      <b-card class="mb-3">
        <b-row v-if="taxResidenceDiv">
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <div class="pb-0 d-md-flex align-items-center mb-5">
                <span class="fz-22 fw-600 text-black">Tax Residence</span>
                <div class="ml-auto">
                  <!-- <a href="javascript:void(0);" @click="taxResidenceDiv = (taxResidenceDiv == true )? false:true;"> -->
                    <b-button href="javascript:void(0);" class="btn btn-outline-theme btn-xs" @click="taxResidenceDiv = (taxResidenceDiv == true )? false:true; W8BENdiv=true;panForm = true; addGstDiv= false;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F2613C" class="bi bi-plus-circle" viewBox="0 0 16 16" v-if="taxAddress.zipcode==''">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <PencilEditIcon v-else />
                    </b-button>
                  <!-- </a> -->
                </div>
              </div>
              <h6 class="fw-600 text-muted mb-3">This address will be displayed on invoices.</h6>
              <h5 class="fz-18 fw-600 text-black mb-2" v-if="taxAddress.country_id != ''">Address</h5>
              <div>
                <h6 class="fw-600 text-muted">{{taxAddress.country_name}}</h6>
                <h6 class="fw-600 text-muted">{{taxAddress.state_name}}</h6>
                <h6 class="fw-600 text-muted">{{taxAddress.city_name}}</h6>
                <h6 class="fw-600 text-muted">{{taxAddress.address1}}</h6>
                <h6 class="fw-600 text-muted">{{taxAddress.address2}}</h6>
                <h6 class="fw-600 text-muted">{{taxAddress.zipcode}}</h6>
              </div>
            </section>
          </b-col>
        </b-row>

        <b-row v-else>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <h4 class="fz-22 fw-600 text-black mb-5">Tax Residence</h4>
              <h6 class="fw-600 text-muted mb-3">This address will be displayed on invoices.</h6>
              <h5 class="fz-18 fw-600 text-black mb-3" @click="getLocationInfo()">Use my profile address</h5>
              <b-form action="" @submit.prevent="updateTaxAddress">
                <b-row>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="country" label-for="country">
                      <label class="text-black fz-16 fw-600">Country</label>
                      <b-form-select
                        v-model="taxAddress.country_id"
                        :options="countryList"
                        value-field="country_id"
                        text-field="country_name"
                        class="form-control"
                        id="country"
                        label-field="Select option"
                        :error-messages="country_idErrors"
                        @input="$v.taxAddress.country_id.$touch()"
                        @blur="$v.taxAddress.country_id.$touch()"
                        @change="changecountry(taxAddress.country_id)"
                      ></b-form-select>
                    </b-form-group>
                    <p class="text-danger" v-if="country_idErrors[0]">{{country_idErrors[0]}}</p>
                  </b-col>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="state" label-for="state">
                      <label class="text-black fz-16 fw-600">State</label>
                      <b-form-select
                        v-model="taxAddress.state_id"
                        :options="stateList"
                        class="form-control"
                        id="state"
                        value-field="state_id"
                        text-field="state_name"
                        label-field="Select option"
                        @change="changestate(taxAddress.state_id)"
                        :error-messages="state_idErrors"
                        @input="$v.taxAddress.state_id.$touch()"
                        @blur="$v.taxAddress.state_id.$touch()"
                      ></b-form-select>
                      <p class="text-danger" v-if="state_idErrors[0]">{{state_idErrors[0]}}</p>
                    </b-form-group>
                  </b-col>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="city" label-for="city">
                      <label class="text-black fz-16 fw-600">City</label>
                      <b-form-select
                        v-model="taxAddress.city_id"
                        :options="cityList"
                        class="form-control"
                        id="city"
                        value-field="city_id"
                        text-field="city_name"
                        label-field="Select option"
                        :error-messages="city_idErrors"
                        @input="$v.taxAddress.city_id.$touch()"
                        @blur="$v.taxAddress.city_id.$touch()"
                      ></b-form-select>
                      <p class="text-danger" v-if="city_idErrors[0]">{{city_idErrors[0]}}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="12" lg="12" sm="12">
                    <b-form-group id="address" label-for="address">
                      <label class="text-black fz-16 fw-600"
                        >Street Address</label
                      >
                      <b-form-input
                        v-model="taxAddress.address1"
                        id="address"
                        placeholder="202 Classic Harmoni Building 17 Kaipana Lok Nagar"
                        :error-messages="address1Errors"
                        @input="$v.taxAddress.address1.$touch()"
                        @blur="$v.taxAddress.address1.$touch()"
                      ></b-form-input>
                      <p class="text-danger" v-if="address1Errors[0]">{{address1Errors[0]}}</p>
                    </b-form-group>
                  </b-col>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="address" label-for="address">
                      <b-form-input
                        v-model="taxAddress.address2"
                        id="address"
                        placeholder="Apt/ Suite"
                        :error-messages="address2Errors"
                        @input="$v.taxAddress.address2.$touch()"
                        @blur="$v.taxAddress.address2.$touch()"
                      ></b-form-input>
                      <p class="text-danger" v-if="address2Errors[0]">{{address2Errors[0]}}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="4" lg="4" sm="12">
                    <b-form-group id="zip" label-for="zip">
                      <label class="text-black fz-16 fw-600"
                        >Zip / Postal Code</label
                      >
                      <b-form-input
                        v-model="taxAddress.zipcode"
                        id="zip"
                        type="text"
                        placeholder="452018"
                        :error-messages="zipcodeErrors"
                        @input="$v.taxAddress.zipcode.$touch()"
                        @blur="$v.taxAddress.zipcode.$touch()"
                      ></b-form-input>
                      <p class="text-danger" v-if="zipcodeErrors[0]">{{zipcodeErrors[0]}}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="6" lg="6" sm="12">
                    <b-form-group class="mt-4">
                      <button type="submit" class="mr-2 btn btn-theme">
                        Update
                      </button>
                      <a
                        href="javascript:void(0);"
                        class="text-theme"
                        @click="taxResidenceDiv = (taxResidenceDiv == true )? false:true; fetchTaxAddressDetails()"
                        >Cancel</a
                      >
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <b-card-group deck v-if="$store.state.accountType == 'agency' || $store.state.accountType == 'freelancer'">
      <b-card class="mb-3">
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <div class="pb-0 d-md-flex align-items-center mb-5">
                <span class="fz-22 fw-600 text-black">{{(showhidew8bin==false)?'W-8BEN':'W-9'}}</span>
                <div class="ml-auto">
                  <b-button href="javascript:void(0);" class="btn btn-outline-theme btn-xs" v-if="W8BENdiv" @click=" W8BENdiv = (W8BENdiv == true )? false:true; taxResidenceDiv = true; panForm = true; addGstDiv= false; ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F2613C" class="bi bi-plus-circle" viewBox="0 0 16 16" v-if="(taxAddress.taxpayer_name =='' || taxAddress.taxpayer_name == null)">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <PencilEditIcon v-else />
                  </b-button>
                </div>
              </div>
              <h5 class="fz-18 fw-500 text-muted mb-4" v-if="!showhidew8bin">Before withdrawing funds, all non-U.S. persons must provide their W-8 tax information.</h5>
              <h5 class="fz-18 fw-500 text-muted mb-4" v-else>Before withdrawing funds, all  must provide their W-9 tax information.</h5>

              <span v-if="W8BENdiv">
                <!-- <h5 class="fz-18 fw-500 text-muted mb-4">Before withdrawing funds, all non U.S. persons must provide their W-8BEN tax information.</h5> -->
                
                <b-row>
                  <b-col xl="12" lg="12" sm="12" v-if="taxAddress.taxpayer_name!='' && taxAddress.taxpayer_name!= null">
                    <h5 class="fz-16 fw-600 mb-2">Legal Name of Taxpayer</h5>
                    <p class="fz-16 text-muted fw-500 mb-0">{{taxAddress.taxpayer_name}}</p>
                  </b-col>
                  <b-col xl="12" lg="12" sm="12" v-if="(taxAddress.federal_tax!='' && taxAddress.federal_tax!= null)">
                    <h5 class="fz-16 fw-600 mb-2">Federal Tax Classification</h5>
                    <p class="fz-16 text-muted fw-500 mb-0">{{taxAddress.federal_tax}}</p>
                  </b-col>
                  <b-col xl="12" lg="12" sm="12" v-if="(taxAddress.dob!='' && taxAddress.dob!= null)">
                    <h5 class="fz-16 fw-600 mb-2">Date of Birth</h5>
                    <p class="fz-16 text-muted fw-500 mb-0">{{taxAddress.dob}}</p>
                  </b-col>
                </b-row>
              </span>
              <span v-else>
                <b-row>
                  <b-col xl="12" lg="12" sm="12">
                    <h5 class="fz-18 fw-500 text-muted mb-4">To collect the right information, indicate if you are a <span class="text-theme">US Person</span>.</h5>
                    <b-form-group>
                      <b-form-radio v-model="usPerson" name="usperson" value="0" @change="showhidew8bin = false ; w8benData.federal_tax =''">I am not a U.S. person</b-form-radio>
                      <b-form-radio v-model="usPerson" name="usperson" value="1" @change="showhidew8bin = true ; w9Data.federal_tax =''">I am a U.S. person</b-form-radio>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <h5 class="fz-18 fw-500 text-muted mb-4" v-if="!showhidew8bin">Before withdrawing funds, all non-U.S. persons must provide their W-8 tax information.</h5>
                  <h5 class="fz-18 fw-500 text-muted mb-4" v-else>Before withdrawing funds, all  must provide their W-9 tax information.</h5>
                  <b-col xl="6" lg="6" sm="12">
                    <h5 class="fz-16 fw-600 mb-2">Legal Name of Taxpayer</h5>
                    <b-form-input
                      v-model="w8benData.taxpayer_name"
                       placeholder="Enter Name"
                       @input="$v.w8benData.taxpayer_name.$touch()"
                       @blur="$v.w8benData.taxpayer_name.$touch()"
                       v-if="!showhidew8bin"
                       ></b-form-input>
                    <b-form-input 
                      v-model="w9Data.taxpayer_name"
                       placeholder="Enter Name"
                       @input="$v.w9Data.taxpayer_name.$touch()"
                       @blur="$v.w9Data.taxpayer_name.$touch()"
                       v-else ></b-form-input>
                    <p class="text-danger" v-if="(w8benNameDataErr[0] && !showhidew8bin)">{{w8benNameDataErr[0]}}</p>
                    <p class="text-danger" v-if="(w9benNameDataErr[0] && showhidew8bin)">{{w9benNameDataErr[0]}}</p>
                    
                    <span class="fz-12 text-muted">Provide the same name as shown on your tax return</span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="4" lg="4" sm="12">
                    <h5 class="fz-16 fw-600 mb-2">Federal Tax Classification</h5>
                    <b-form-select
                      v-model="w8benData.federal_tax"
                     :options="taxoptions"
                     value-field="value"
                     text-field="value"
                     @input="$v.w8benData.federal_tax.$touch()"
                     @blur="$v.w8benData.federal_tax.$touch()"
                      class="form-control" v-if="!showhidew8bin"></b-form-select>
                      
                    <b-form-select
                     v-model="w9Data.federal_tax"
                     :options="taxoptionss"
                     value-field="value"
                     text-field="value"
                     @input="$v.w9Data.federal_tax.$touch()"
                     @blur="$v.w9Data.federal_tax.$touch()"
                     class="form-control" v-else></b-form-select>

                    <p class="text-danger" v-if="(w8benTaxDataErr[0] && !showhidew8bin)">{{w8benTaxDataErr[0]}}</p>
                    <p class="text-danger" v-if="(w9benTaxDataErr[0] && showhidew8bin)">{{w9benTaxDataErr[0]}}</p>

                  </b-col>
                </b-row>
                <b-row v-if="!showhidew8bin && w8benData.federal_tax == 'Individual'">
                  <b-col xl="4" lg="4" sm="12">
                    <h5 class="fz-16 fw-600 mb-2">Date of Birth</h5>
                    <b-input-group class="mt-3">
                        <b-form-datepicker 
                          v-model="w8benData.dob"
                          :max="new Date().toISOString().substr(0, 10)"
                          @input="w8benData.hybrid_entity = ''"
                          class="mb-2"></b-form-datepicker>
                    </b-input-group>
                    <p class="text-danger" v-if="w8benData.dob==''" id="dobError">Date Of Birth Is required</p>
                  </b-col>
                </b-row>
                <b-row v-if="!showhidew8bin">
                  <b-col xl="4" lg="4" sm="12">
                    <h5 class="fz-16 fw-600 mb-2">Country of Citizenship</h5>
                    <b-form-select
                      v-model="w8benData.citizenship"
                        :options="countryList"
                        value-field="country_id"
                        text-field="country_name"
                        class="form-control"
                        @input="$v.w8benData.citizenship.$touch()"
                        @blur="$v.w8benData.citizenship.$touch()"
                        ></b-form-select>
                    <p class="text-danger" v-if="w8benCitizenDataErr[0]">{{w8benCitizenDataErr[0]}}</p>
                  </b-col>
                  <b-col xl="12" lg="12" sm="12" v-if="w8benData.federal_tax == 'Partnership'">
                    <h5 class="fz-16 fw-600 mb-2">Are you a hybrid entity claiming treaty benefits for Chapter 3 purposes?</h5>
                    <b-form-group>
                      <b-form-radio
                        v-model="w8benData.hybrid_entity"
                        name="hybrid"
                        value="1"
                        @change="w8benData.dob = ''"
                       >Yes</b-form-radio>
                      <b-form-radio
                        v-model="w8benData.hybrid_entity"
                        name="hybrid"
                        value="0"
                        @change="w8benData.dob = ''"
                       >No</b-form-radio>
                       <p class="text-danger" v-if="w8benData.hybrid_entity==''">Hybrid Entity Is required</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row v-if="showhidew8bin">
                  <b-col xl="12" lg="12" sm="12">
                    <h5 class="fz-18 fw-500 text-muted mb-4">Taxpayer Identification Number Type.</h5>
                    <b-form-group>
                      <b-form-radio 
                        v-model="w9Data.taxpayer_identification_type"
                        name="taxType"
                        @input="$v.w9Data.taxpayer_identification_type.$touch()"
                        @blur="$v.w9Data.taxpayer_identification_type.$touch()"
                        value="SSN">Social Security Number (SSN)</b-form-radio>
                      <b-form-radio 
                        v-model="w9Data.taxpayer_identification_type"
                        name="taxType"
                        @input="$v.w9Data.taxpayer_identification_type.$touch()"
                        @blur="$v.w9Data.taxpayer_identification_type.$touch()"
                        value="EIN">Employer Identification Number (EIN)</b-form-radio>
                    </b-form-group>
                    <p class="text-danger" v-if="(w9benIdentificationDataErr[0])">{{w9benIdentificationDataErr[0]}}</p>
                  </b-col>
                </b-row>
                <b-row v-if="showhidew8bin">
                  <b-col xl="4" lg="4" sm="12">
                    <h5 class="fz-16 fw-600 mb-2">SSN/EIN #</h5>
                    <b-form-input
                      v-model="w9Data.taxpayer_identification_number"
                      @input="$v.w9Data.taxpayer_identification_number.$touch()"
                      @blur="$v.w9Data.taxpayer_identification_number.$touch()"
                      :placeholder="'Enter '+w9Data.taxpayer_identification_type+' number'"></b-form-input>
                    <p class="text-danger" v-if="(w9benNumberDataErr[0])">{{w9benNumberDataErr[0]}}</p>
                  </b-col>
                  <hr>
                  <b-col xl="12" lg="12" sm="12">
                    <h5 class="fz-22 fw-600 mb-2 text-black">Tax Certification and Confirmation of Unchanged Status</h5><br>
                    <p class="fz-16 fw-500 mb-3 text-black">Please read and scroll to the bottom of the W-9 certification, and consent to be able to confirm electronic delivery of the document.</p>
                    <div class="horizontal-scroll-div p-4 border">
                      <div  class="certification-context">
                        <h3>W-9 Certification</h3> 
                        <p>  Under penalties of perjury, I certify that:<br><br>
                          1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be issued to me); and <br><br>
                          2. I am not subject to backup withholding because:<br>
                          (a) I am exempt from backup withholding, or<br>
                          (b) I have not been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to backup withholding; and <br><br>
                          3. I am a U.S. citizen or other U.S. person (defined below); and <br><br>
                          4. The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct. 
                        </p>
                        <h3>Electronic consent</h3> 
                        <p>
                          By checking the below box, you acknowledge that you have read, understand, and affirmatively agree to this Consent.  You consent that you can access electronic tax statements and documents (including Form 1099).<br><br>
                          This includes the ability to access, retain, and print these documents.<br><br>
                          You agree that the information may be communicated through e-mail, or by posting statements, notices, disclosures on the account page of our website. <br><br></p>
                          <p>Your consent is effective until withdrawn. If you do not specifically consent to the electronic delivery of tax related documents, or wish to withdraw this consent, you may do so by sending a notification to <a>taxrecordsupport@Qapin.com</a>.
                          </p>
                          <p>Depending on the timing that electronic consent was provided, we may have already processed your tax documents for physical delivery, and in such cases you will also receive a copy of your tax documents in the mail. <br ><br >
                          Should you choose to refuse or withdraw consent, you will receive paper copies of all required tax-related documents (including Form 1099) at your tax residence address at the time these documents will be delivered.</p>
                        
                      </div>
                    </div>
                  </b-col>
                  <b-col xl="9" lg="9" sm="12">
                    <b-form-group id="address" label-for="address">
                      <label class="text-black fz-16 fw-600">Signature (type your full name)</label>
                      <b-form-input
                        v-model="w9Data.signature"
                        @input="$v.w9Data.signature.$touch()"
                        @blur="$v.w9Data.signature.$touch()"
                        placeholder="Enter your full name">
                      </b-form-input>
                      <p class="text-danger" v-if="(w9benSignatureDataErr[0])">{{w9benSignatureDataErr[0]}}</p>
                    </b-form-group>
                  </b-col>
                  <b-col xl="3" lg="3" sm="12">
                    <b-form-group id="date" label-for="date">
                      <label class="text-black fz-16 fw-600"
                        >Date</label>
                      <b-form-input
                        v-model="w9Data.dateof_signature"
                        
                         disabled>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col xl="12" lg="12" sm="12">
                    <b-form-group>
                      <b-form-checkbox
                        v-model="w9Data.electronic_signature"
                        name="esignature"
                        value="1"
                        @input="$v.w9Data.electronic_signature.$touch()"
                        @blur="$v.w9Data.electronic_signature.$touch()"
                        >I consent to provide an electronic signature by typing my signature above.</b-form-checkbox>
                      <p class="text-danger" v-if="(w9benEsignatureDataErr[0])">{{w9benEsignatureDataErr[0]}}</p>
                      
                      <b-form-checkbox
                        v-model="w9Data.tax_documents_digitally"
                        name="digiDoc"
                        value="1"
                        @input="$v.w9Data.tax_documents_digitally.$touch()"
                        @blur="$v.w9Data.tax_documents_digitally.$touch()"
                        >I consent to receive tax documents digitally.</b-form-checkbox>
                      <p class="text-danger" v-if="(w9benTdocumentDataErr[0])">{{w9benTdocumentDataErr[0]}}</p>

                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col xl="12" lg="12" sm="12">
                    <b-button class="btn-theme mr-4" @click="SaveW8bendata">Save</b-button>
                    <a href="javascript:void(0);" class="text-theme"  @click=" W8BENdiv = (W8BENdiv == true )? false:true;">Cancel</a>
                  </b-col>
                </b-row>
              </span>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>

    <b-card-group deck v-if="($store.state.accountType == 'agency' || $store.state.accountType == 'freelancer' && taxAddress.US_person == 0 && taxAddress.citizenship != '' && taxAddress.citizenship != null)">
      <b-card class="mb-3">
        <b-row>
          <b-col cols="12" class="px-4 py-4">
            <section class="card-section">
              <div class="pb-0 d-md-flex align-items-center mb-5">
                <span class="fz-22 fw-600 text-black">Tax Identification Number</span>
                <div class="ml-auto">
                  <b-button href="javascript:void(0);" class="btn btn-outline-theme btn-xs" v-if="panForm" @click=" panForm = (panForm == true )? false:true; taxResidenceDiv = true; W8BENdiv=true; addGstDiv= false;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F2613C" class="bi bi-plus-circle" viewBox="0 0 16 16" v-if="(taxAddress.pan_no == '' || taxAddress.pan_no == null)">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <PencilEditIcon v-else />
                  </b-button>
                </div>
              </div>
              <h5 class="fz-18 fw-500 text-muted mb-4" v-if="taxAddress.pan_no == '' || taxAddress.pan_no == null">Please provide your <span class="text-theme">Permanent Account Number (PAN)</span>. If you don't have a Permanent Account Number (PAN), please consult a local tax profession with tax question. For issues with this form, please reach out to Qapin support.</h5>
              <span v-if="panForm">
                <b-row>
                  <b-col xl="12" lg="12" sm="12" v-if="taxAddress.pan_no!='' && taxAddress.pan_no!= null">
                    <h5 class="fz-16 fw-600 mb-2">Permanent Account Number (PAN)</h5>
                    <p class="fz-16 text-muted fw-500 mb-0">{{taxAddress.pan_no}}</p>
                  </b-col>
                </b-row>
              </span>
              <span v-else >
                <b-row >
                  <b-col xl="6" lg="6" sm="12">
                    <b-form-group id="address" label-for="address">
                      <label class="text-black fz-16 fw-600"
                        >Permanent Account Number (PAN)</label>
                      <b-form-input
                        v-model="panData.pan_no"
                        maxlength="10"
                        @input="$v.panData.pan_no.$touch()"
                        @blur="$v.panData.pan_no.$touch()"
                        placeholder="Enter your Tax Id (with no dashes/dots)">
                      </b-form-input>
                      <p class="text-danger" v-if="panNumberErr[0]">{{panNumberErr[0]}}</p>
                      <span class="fz-12 text-muted">Your PAN consists of 10 alpha numeric characters, it should look like this LLLLL9999L</span>
                    </b-form-group>
                  </b-col>
                  <hr>
                  <b-col xl="12" lg="12" sm="12">
                    <span class="fz-22 fw-600 text-black">Tax Certification and Confirmation of Unchanged Status</span><br>
                    <span class="fz-16 fw-500 text-black">Please read and scroll to the bottom of the W-8BEN certification.</span>
                    <div class="horizontal-scroll-div p-4 border">
                      <h3>W-8BEN Certification</h3>
                      <p> Under penalties of perjury, I declare that I have examined the information on this form and to the best of my knowledge and belief it is true correct, and complete. I further certify under penalties of perjury that: <br><br> • I am the individual that is the beneficial owner (or am authorized to sign for the individual that is the beneficial owner) of all the income or proceeds to which this form relates or am using this form to document myself for chapter 4 purposes; <br><br> • The person named on line 1 of this form is not a U.S. person; <br><br> • This form relates to: <br><br> (a) income not effectively connected with the conduct of a trade or business in the United States; <br> (b) income effectively connected with the conduct of a trade or business in the United States but is not subject to tax under an applicable income tax treaty; <br> (c) the partner’s share of a partnership’s effectively connected taxable income; or <br> (d) the partner’s amount realized from the transfer of a partnership interest subject to withholding under section 1446(f); <br><br> • The person named on line 1 of this form is a resident of the treaty country listed on line 9 of the form (if any) within the meaning of the income tax treaty between the United States and that country; and <br><br> • For broker transactions or barter exchanges, the beneficial owner is an exempt foreign person as defined in the instructions.
                        <br><br>
                          Furthermore, I authorize this form to be provided to any withholding agent that has control, receipt, or custody of the income of which I am the beneficial owner or any withholding agent that can disburse or make payments of the income of which I am the beneficial owner.
                        </p>
                    </div>
                  </b-col>
                  <b-col xl="9" lg="9" sm="12">
                    <b-form-group id="address" label-for="address">
                      <label class="text-black fz-16 fw-600"
                        >Signature (type your full name)</label>
                      <b-form-input
                        v-model="panData.signature"
                        @input="$v.panData.signature.$touch()"
                        @blur="$v.panData.signature.$touch()"
                        placeholder="Enter your full name">
                      </b-form-input>
                      <p class="text-danger" v-if="panSignatureErr[0]">{{panSignatureErr[0]}}</p>
                    </b-form-group>
                  </b-col>
                  <b-col xl="3" lg="3" sm="12">
                    <b-form-group id="date" label-for="date">
                      <label class="text-black fz-16 fw-600"
                        >Date</label>
                      <b-form-input
                        v-model="panData.dateof_signature"
                        disabled>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col xl="12" lg="12" sm="12">
                    <b-form-checkbox
                      v-model="panData.electronic_signature"
                      name="checkbox-1"
                      value="1"
                      @input="$v.panData.electronic_signature.$touch()"
                      @blur="$v.panData.electronic_signature.$touch()"
                    >
                      I certify that i have the capacity to sign for the personidentified on line 1 of this form. And i consent to provide an electronic signature by typing my signature above.
                    </b-form-checkbox>
                    <p class="text-danger" v-if="panEsignatureErr[0]">{{panEsignatureErr[0]}}</p>
                  </b-col>
                  <b-col xl="12" lg="12" sm="12">
                    <h4 class="fz-22 fw-600 text-black mb-4">Affidavit of Unchanged Status</h4>
                    <p class="mb-2">Under penalties of perjury, I declare that I have examined and signed the Form W-8BEN, Form W-8BEN-E, etc and the information and certifications contained therein have remained the same and have remained unchanged throughout calendar year January 1, 2022 through the date on this form and were true, correct and complete for this year.</p>
                    <p>If these facts and certifications do not apply to you, or if you have general questions about this unchanged status affidavit, please reach out to Customer Support.</p>
                  </b-col>
                  <b-col xl="9" lg="9" sm="12">
                    <b-form-group id="address" label-for="address">
                      <label class="text-black fz-16 fw-600"
                        >Signature (type your full name)</label>
                      <b-form-input
                        v-model="panData.affidavit_signature"
                        @input="$v.panData.affidavit_signature.$touch()"
                        @blur="$v.panData.affidavit_signature.$touch()"
                        placeholder="Enter your full name">
                      </b-form-input>
                      <p class="text-danger" v-if="panAffidavitErr[0]">{{panAffidavitErr[0]}}</p>
                    </b-form-group>
                  </b-col>
                  <b-col xl="3" lg="3" sm="12">
                    <b-form-group id="date" label-for="date">
                      <label class="text-black fz-16 fw-600"
                        >Date</label>
                      <b-form-input
                        v-model="panData.dateof_affidavit"
                      disabled>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col xl="9" lg="9" sm="12">
                    <b-button class="btn-theme mr-4" @click="submitPan">Save</b-button>
                    <a href="javascript:void(0);" class="text-theme" @click=" panForm = (panForm == true )? false:true;">Cancel</a>
                  </b-col>
                </b-row>
              </span>
            </section>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
    
    <b-card-group deck v-if="($store.state.accountType == 'agency' || $store.state.accountType == 'freelancer')">
      <b-card class="mb-3" v-if="taxAddress.gst=='Yes'">
          <b-row>
            <b-col cols="12" class="px-4 py-4">
              <section class="card-section gstin-section">
                <div class="pb-0 d-md-flex align-items-center mb-5">
                  <span class="fz-22 fw-600 text-black">GSTIN</span>
                  <div class="ml-auto">
                    <b-button href="javascript:void(0);" class="btn btn-outline-theme btn-xs" v-b-modal.nconfirm-modal @click=" taxResidenceDiv = true; W8BENdiv=true; panForm = true;">
                      <i class="fa fa-trash"></i>
                    </b-button>
                  </div>
                </div>
                <h5 class="fz-18 fw-500 text-muted mb-4">A Goods and Services Tax Identification Number is requested from all persons located in a country where Qapin supports GSTIN.</h5>
                <h3 class="fz-18 fw-500 text-muted mb-4">GSTIN.</h3>
                <h5 class="fz-18 fw-500 text-muted mb-4">{{taxAddress.gst_no}}</h5>
                
              </section>
            </b-col>
          </b-row> 
      </b-card>
      <b-card class="mb-3" v-if="(!addGstDiv && taxAddress.gst == 'No')">
            <b-row>
              <b-col cols="12" class="px-4 py-4">
                <section class="card-section gstin-section">
                  <div class="pb-0 d-md-flex align-items-center mb-5">
                    <span class="fz-22 fw-600 text-black">GSTIN</span>
                    <div class="ml-auto">
                        <b-button href="javascript:void(0);" class="btn btn-outline-theme btn-xs" @click=" addGstDiv = (addGstDiv == true )? false:true; taxResidenceDiv = true; W8BENdiv=true; panForm = true;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F2613C" class="bi bi-plus-circle" viewBox="0 0 16 16" v-if="(taxAddress.gst == '')">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg>
                          <PencilEditIcon v-else />
                        </b-button>
                    </div>
                  </div>
                  <h6 class="fw-600 text-muted mb-3">You have indicated that you are not registered for GSTIN.</h6>
                </section>
              </b-col>
            </b-row> 
      </b-card>
      <b-card class="mb-3" v-if="addGstDiv">
        <b-form action="" @submit.prevent="updateGst()">
          <b-row>
            <b-col cols="12" class="px-4 py-4">
              <section class="card-section gstin-section">
                <div class="pb-0 d-md-flex align-items-center mb-5">
                  <span class="fz-22 fw-600 text-black">GSTIN</span>
                </div>
                <h5 class="fz-18 fw-500 text-muted mb-4">A Goods and Services Tax Identification Number is requested from all the persons located in a country where Qapin supports GSTIN.</h5>
                <b-form-group>
                  <b-form-radio
                    v-model="gst.gst" 
                    name="some-radios" 
                    value="No" 
                    class="text-muted fz-18 fw-500" 
                    @change="Gstform=true"
                    @input="$v.gst.gst.$touch()"
                    @blur="$v.gst.gst.$touch()"
                    >
                      I am not a registered for a GSTIN
                    </b-form-radio>

                  <b-form-radio
                    v-model="gst.gst" 
                    name="some-radios"
                    value="Yes" 
                    class="text-muted fz-18 fw-500" 
                    @change="Gstform=false"
                    @input="$v.gst.gst.$touch()"
                    @blur="$v.gst.gst.$touch()"
                    >
                      I am registered for a GSTIN
                  </b-form-radio>
                  <p class="text-danger" v-if="gstErr[0]">{{gstErr[0]}}</p>
                </b-form-group>

                <b-row v-if="!Gstform">
                  <b-col xl="6" lg="6" sm="12" class="px-3 py-3">
                    <b-form-group>
                      <label class="text-black fz-16 fw-600">GSTIN</label><br>
                      <b-form-input 
                        v-model="gst.gst_no"  
                        class="form-control mb-2"
                        placeholder="Enter GSTIN"
                        :error-messages="gstNoErr"
                        @input="$v.gst.gst_no.$touch()"
                        @blur="$v.gst.gst_no.$touch()"
                      ></b-form-input>
                      <p class="text-danger" v-if="gstNoErr[0]">{{gstNoErr[0]}}</p>
                      <small>Format:##AAAAA####A#AE
                        #=Numeric A= Alphabetic and E= Either
                      </small>
                    </b-form-group>
                  </b-col>
                  <b-col xl="6" lg="6" sm="12" class="px-3 py-3">
                    <b-form-group>
                      <label class="text-black fz-16 fw-600">Registartion Date</label><br>
                      <b-form-datepicker 
                        v-model="gst.gstRegDate"
                        placeholder="Enter reg. Date"
                        :error-messages="gstRegDateErr"
                        :max="maxdate" 
                        @input="$v.gst.gstRegDate.$touch()"
                        @blur="$v.gst.gstRegDate.$touch()"
                        class="mb-2">
                      </b-form-datepicker>
                      <p class="text-danger" v-if="gstRegDateErr[0]">{{gstRegDateErr[0]}}</p>
                    </b-form-group>
                  </b-col>
                </b-row>
                
                <b-row>
                  <b-col xl="4" lg="4" sm="12" class="px-3 py-3">
                    <button type="submit" class="mr-2 btn btn-theme">
                      Save
                    </button> 
                    <a href="javascript:void(0);" class="text-theme ml-5" @click="(addGstDiv=false)">Cancel</a>
                  </b-col>
                </b-row>
              </section>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
    </b-card-group>
    <!-- model for confirm reject -->
    <b-modal id="nconfirm-modal" title="Remove Billing" centered hide-footer size="md" no-close-on-backdrop> 
        <template>
        <div class="p-5 text-center m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2613C" class="bi bi-trash m-auto" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            <h5 class="mt-4">Are you sure, Want to Remove this GST Number?</h5>
        </div>
        <hr>
        <div>
            <div class="text-right">
                <a href="javascript:void(0);" class="text-theme mr-2" @click="$bvModal.hide('nconfirm-modal')">Cancel</a>
                <b-button type="button" class="btn btn-theme" @click="removeGst">Confirm</b-button>
            </div>
        </div>
        </template>
    </b-modal>
  </div>
  </template>
  
  <script>
    import { validationMixin } from 'vuelidate'
    import { required,alpha,maxLength,helpers} from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from "vuex";
    import PencilEditIcon from "../../components/icons/PencilEditIcon.vue";
    const alphaNumAndDotValidator = helpers.regex('alphaNumAndDot', /^[a-z\d.]*$/i);
    export default {
      components: {
        PencilEditIcon,
      },
      mixins: [validationMixin],
      validations: { 
        taxAddress:{
            country_id: { required},
            state_id: { required},
            city_id: { required},
            address1: { required,maxLength: maxLength(200) },
            address2: { required},
            zipcode: { required,maxLength: maxLength(12) },
        }, 
        gst:{
          gst:{required},
          gst_no:{required},
          gstRegDate:{required}
        },
        w8benData:{
          US_person:{required},
          taxpayer_name:{required,alpha},
          federal_tax:{required},
          citizenship:{required},
        },
        w9Data:{
          taxpayer_name:{required,alpha},
          federal_tax:{required},
          taxpayer_identification_type:{required},
          taxpayer_identification_number:{required},
          signature:{required,alpha},
          electronic_signature:{required},
          tax_documents_digitally:{required},
        },
        panData:{
          pan_no:{required,alphaNumAndDotValidator},
          signature:{required,alpha},
          electronic_signature:{required},
          affidavit_signature:{required,alpha},
        }
      },
      data() {
        return { 
          maxdate:new Date().toISOString().substr(0, 10),
          gst:{
            gst:'',
            gst_no:'',
            gstRegDate:''
          },
          taxAddress:{
            country_id:'',
            state_id:'',
            city_id:'',
            address1:'',
            address2:'',
            zipcode:''
          },
          taxResidenceDiv: true,
          addGstDiv: false,
          Gstform:true,
          W8BENdiv:true,
          cityList: [{ city_id: null, city_name: "Please select an option" }],
          stateList: [{state_id: null, state_name: "Please select an option" }],
          usPerson:0,
          showhidew8bin:false,
          panForm:true,
          taxoptions:[
            {value:'Individual'},
            {value:'Corporation'},
            {value:'Partnership'},
            {value:'Other entity type or claiming treaty benefits'},
          ],
          taxoptionss:[
            {value:'Individual/sole proprietor or single-member LLC'},
            {value:'Limited liability company - C Corporation'},
            {value:'Limited liability company - S Corporation'},
            {value:'Limited liability company - Partnership'},
            {value:'C Corporation'},
            {value:'S Corporation'},
            {value:'Partnership'},
            {value:'Trust / Estate'},
            {value:'Other'},
          ],
          w8benData:{
            US_person:'',
            taxpayer_name:'',
            federal_tax:'',
            citizenship:'',
            dob:'',
            hybrid_entity:'',
          },
          w9Data:{
            US_person:'',
            taxpayer_name:'',
            federal_tax:'',
            taxpayer_identification_type:'',
            taxpayer_identification_number:'',
            signature:'',
            dateof_signature:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            electronic_signature:'',
            tax_documents_digitally:'',
          },
          panData:{
            pan_no:'',
            signature:'',
            dateof_signature:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            electronic_signature:'',
            affidavit_signature:'',
            dateof_affidavit:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
          }
        };
      },
      computed: {
        panNumberErr(){
          const errors = []
          if (!this.$v.panData.pan_no.$dirty) return errors
          !this.$v.panData.pan_no.required && errors.push('Pan Number is required')
          !this.$v.panData.pan_no.alphaNumAndDotValidator && errors.push('Invalid input')
          return errors
        },
        panSignatureErr(){
          const errors = []
          if (!this.$v.panData.signature.$dirty) return errors
          !this.$v.panData.signature.required && errors.push('Signature is required')
          !this.$v.panData.signature.alpha && errors.push('Only Charachter allow')
          return errors
        },
        panEsignatureErr(){
          const errors = []
          if (!this.$v.panData.electronic_signature.$dirty) return errors
          !this.$v.panData.electronic_signature.required && errors.push('Electronic Signature is required')
          return errors
        },
        panAffidavitErr(){
          const errors = []
          if (!this.$v.panData.affidavit_signature.$dirty) return errors
          !this.$v.panData.affidavit_signature.required && errors.push('Affidavit signatiure is required')
          !this.$v.panData.affidavit_signature.alpha && errors.push('Only Charachter allow')
          return errors
        },
        w9benNameDataErr(){
          const errors = []
          if (!this.$v.w9Data.taxpayer_name.$dirty) return errors
          !this.$v.w9Data.taxpayer_name.required && errors.push('Name is required')
          !this.$v.w9Data.taxpayer_name.alpha && errors.push('Only Charachter allow')
          return errors
        },
        w9benTaxDataErr(){
          const errors = []
          if (!this.$v.w9Data.federal_tax.$dirty) return errors
          !this.$v.w9Data.federal_tax.required && errors.push('Fedetal Tax is required')
          return errors
        },
        w9benIdentificationDataErr(){
          const errors = []
          if (!this.$v.w9Data.taxpayer_identification_type.$dirty) return errors
          !this.$v.w9Data.taxpayer_identification_type.required && errors.push('Identification is required')
          return errors
        },
        w9benNumberDataErr(){
          const errors = []
          if (!this.$v.w9Data.taxpayer_identification_number.$dirty) return errors
          !this.$v.w9Data.taxpayer_identification_number.required && errors.push('Identification Number is required')
          return errors
        },
        w9benSignatureDataErr(){
          const errors = []
          if (!this.$v.w9Data.signature.$dirty) return errors
          !this.$v.w9Data.signature.required && errors.push('Signature is required')
          !this.$v.w9Data.signature.alpha && errors.push('Only Charachter allow')
          return errors
        },
        w9benEsignatureDataErr(){
          const errors = []
          if (!this.$v.w9Data.electronic_signature.$dirty) return errors
          !this.$v.w9Data.electronic_signature.required && errors.push('Electronic Signature is required')
          return errors
        },
        w9benTdocumentDataErr(){
          const errors = []
          if (!this.$v.w9Data.tax_documents_digitally.$dirty) return errors
          !this.$v.w9Data.tax_documents_digitally.required && errors.push('Tax Document is required')
          return errors
        },

        w8benNameDataErr(){
          const errors = []
          if (!this.$v.w8benData.taxpayer_name.$dirty) return errors
          !this.$v.w8benData.taxpayer_name.required && errors.push('Name is required')
          !this.$v.w8benData.taxpayer_name.alpha && errors.push('Only Charachter allow')

          return errors
        },
        w8benTaxDataErr(){
          const errors = []
          if (!this.$v.w8benData.federal_tax.$dirty) return errors
          !this.$v.w8benData.federal_tax.required && errors.push('Fedetal Tax is required')
          return errors
        },
        w8benCitizenDataErr(){
          const errors = []
          if (!this.$v.w8benData.citizenship.$dirty) return errors
          !this.$v.w8benData.citizenship.required && errors.push('Citizenship is required')
          return errors
        },
        
        gstErr(){
          const errors = []
          if (!this.$v.gst.gst.$dirty) return errors
          !this.$v.gst.gst.required && errors.push('Gst is required')
          return errors
        },
        gstNoErr(){
          const errors = []
          if (!this.$v.gst.gst_no.$dirty) return errors
          !this.$v.gst.gst_no.required && errors.push('Gst no is required')
          return errors
        },
        gstRegDateErr(){
          const errors = []
          if (!this.$v.gst.gstRegDate.$dirty) return errors
          !this.$v.gst.gstRegDate.required && errors.push('Gst registation Date is required')
          return errors
        },
        country_idErrors(){
          const errors = []
          if (!this.$v.taxAddress.country_id.$dirty) return errors
          !this.$v.taxAddress.country_id.required && errors.push('Select country id is required')
          return errors
        },
        state_idErrors(){
          const errors = []
          if (!this.$v.taxAddress.state_id.$dirty) return errors
          !this.$v.taxAddress.state_id.required && errors.push('Select state id is required')
          return errors
        },
        city_idErrors(){
          const errors = []
          if (!this.$v.taxAddress.city_id.$dirty) return errors
          !this.$v.taxAddress.city_id.required && errors.push('Select city id is required')
          return errors
        },
        address1Errors(){
          const errors = []
          if (!this.$v.taxAddress.address1.$dirty) return errors
          !this.$v.taxAddress.address1.required && errors.push('Select address line one is required')
          !this.$v.taxAddress.address1.maxLength && errors.push("Too long. Use at least 200 characters or less"); 
          return errors
        },
        address2Errors(){
          const errors = []
          if (!this.$v.taxAddress.address2.$dirty) return errors
          !this.$v.taxAddress.address2.required && errors.push('Select address line two is required')
          return errors
        },
        zipcodeErrors(){
          const errors = []
          if (!this.$v.taxAddress.zipcode.$dirty) return errors
          !this.$v.taxAddress.zipcode.required && errors.push('zipcode is required')
          !this.$v.taxAddress.zipcode.maxLength && errors.push("Too long. Use at least 12 characters or less"); 
          return errors
        },
        
        ...mapGetters({
          countryList: "global/getCountryList",
          userInfo: "settings/getUserDetails",
        }),
      }, 
      mounted() {
        this.getCountry();
      },
      methods: { 
        ...mapActions(["genericAPIPOSTRequest"]),
        ...mapActions("settings", ["fetchUserDetails","updateProfile"]),
        ...mapActions("global", ["fetchCountryList"]),

        // this fun is for to add update pan number
        async submitPan(){
          this.$v.panData.$touch()
          if(!this.$v.panData.$invalid){
            this.panData.taxpayer_identification_type = '';
            this.panData.taxpayer_identification_number='';
            this.panData.tax_documents_digitally='';
            this.panData.data = this.getCurrentUserIdRequest();
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "addPanDetails",
                params: this.panData,
            });
            if(res){
              this.fetchTaxAddressDetails();
              this.panForm=true;
              this.$toastr.s('Pan Details updated');
            }
          }
        },
        // this fun is for to save 8 or 9 ben data
        async SaveW8bendata(){
          if(this.usPerson==0){
            if(this.w8benData.federal_tax!='' && this.w8benData.federal_tax == 'Individual' && this.w8benData.dob ==''){
              return false;
            }
            if(this.w8benData.federal_tax!='' && this.w8benData.federal_tax == 'Partnership' && this.w8benData.hybrid_entity ==''){
              return false;
            }
            this.w8benData.US_person = this.usPerson;
            this.$v.w8benData.$touch();
            if (!this.$v.w8benData.$invalid) {
              this.w8benData.taxpayer_identification_type = '';
              this.w8benData.taxpayer_identification_number='';
              this.w8benData.signature='';
              this.w8benData.dateof_signature='';
              this.w8benData.electronic_signature='';
              this.w8benData.tax_documents_digitally='';
              this.w8benData.data = this.getCurrentUserIdRequest();
              var res =  await this.genericAPIPOSTRequest({
                  requestUrl: "addW8benDetails",
                  params: this.w8benData,
              });
              if(res){
                this.fetchTaxAddressDetails();
                this.W8BENdiv = true,
                this.$toastr.s('W9ben data Added successfull');
              }
            }
          }else{
            this.$v.w9Data.$touch();
            if (!this.$v.w9Data.$invalid) {
              this.w9Data.pan_no='';
              this.w9Data.affidavit_signature='';
              this.w9Data.dateof_affidavit='';
              this.w9Data.US_person = this.usPerson;
              this.w9Data.citizenship='';
              this.w9Data.dob='';
              this.w9Data.hybrid_entity='';
              this.w9Data.data = this.getCurrentUserIdRequest();
              console.log('data',this.w9Data);
              var response =  await this.genericAPIPOSTRequest({
                  requestUrl: "addW8benDetails",
                  params: this.w9Data,
              });
              if(response){
                this.fetchTaxAddressDetails();
                this.W8BENdiv = true,
                this.$toastr.s('W8ben data Added successfull');
              }
            }
          }
        },
        // this fun is for to get Country
        async getCountry(){
          this.fetchCountryList();
        },
        // this fun is for to get tax infomation
        async fetchTaxAddressDetails(){
          var res = await this.genericAPIPOSTRequest({
                requestUrl: "getTaxAddressDetails",
                params: {data:this.getCurrentUserIdRequest()},
            });
            if(res!=''){
              console.log('if');
              this.taxAddress = res ;
              this.changecountry(this.taxAddress.country_id);
              this.changestate(this.taxAddress.state_id);
              this.showhidew8bin = (this.taxAddress.US_person==0)?false:true;
              this.usPerson =this.taxAddress.US_person;
              this.w8benData={
                US_person:this.taxAddress.US_person,
                taxpayer_name:(this.taxAddress.taxpayer_name!='' && this.taxAddress.taxpayer_name!=null)?this.taxAddress.taxpayer_name:'',
                federal_tax:(this.taxAddress.federal_tax!='' && this.taxAddress.federal_tax!=null)?this.taxAddress.federal_tax:'',
                citizenship:(this.taxAddress.citizenship!='' && this.taxAddress.citizenship!=null)?this.taxAddress.citizenship:'',
                dob:(this.taxAddress.dob!='' && this.taxAddress.dob!=null)?this.taxAddress.dob:'',
                hybrid_entity:(this.taxAddress.hybrid_entity!='' && this.taxAddress.hybrid_entity!=null)?this.taxAddress.hybrid_entity:'',
              };
              this.w9Data={
                US_person:this.taxAddress.US_person,
                taxpayer_name:(this.taxAddress.taxpayer_name!='' && this.taxAddress.taxpayer_name!=null)?this.taxAddress.taxpayer_name:'',
                federal_tax:(this.taxAddress.federal_tax!='' && this.taxAddress.federal_tax!=null)?this.taxAddress.federal_tax:'',
                taxpayer_identification_type:(this.taxAddress.taxpayer_identification_type!='' && this.taxAddress.taxpayer_identification_type!=null)?this.taxAddress.taxpayer_identification_type:'',
                taxpayer_identification_number:(this.taxAddress.taxpayer_identification_number!='' && this.taxAddress.taxpayer_identification_number!=null)?this.taxAddress.taxpayer_identification_number:'',
                signature:(this.taxAddress.signature!='' && this.taxAddress.signature!=null)?this.taxAddress.signature:'',
                dateof_signature:(this.taxAddress.dateof_signature!='' && this.taxAddress.dateof_signature!=null)?this.taxAddress.dateof_signature:new Date().toISOString().substr(0, 10),
                electronic_signature:(this.taxAddress.electronic_signature==1)?this.taxAddress.electronic_signature:'',
                tax_documents_digitally:(this.taxAddress.tax_documents_digitally==1)?this.taxAddress.tax_documents_digitally:'',
              };
              this.panData={
                pan_no:(this.taxAddress.pan_no!='' && this.taxAddress.pan_no != null)?this.taxAddress.pan_no:'',
                signature:(this.taxAddress.signature!='' && this.taxAddress.signature!=null)?this.taxAddress.signature:'',
                dateof_signature:(this.taxAddress.dateof_signature!='' && this.taxAddress.dateof_signature!=null)?this.taxAddress.dateof_signature:new Date().toISOString().substr(0, 10),
                electronic_signature:(this.taxAddress.electronic_signature==1)?this.taxAddress.electronic_signature:'',
                affidavit_signature:(this.taxAddress.affidavit_signature!='')?this.taxAddress.affidavit_signature:'',
                dateof_affidavit:(this.taxAddress.dateof_affidavit!='' && this.taxAddress.dateof_affidavit!=null)?this.taxAddress.dateof_affidavit:new Date().toISOString().substr(0, 10),
              };
              this.gst.gst=this.taxAddress.gst;
              this.gst.gst_no=this.taxAddress.gst_no;
              this.gst.gstRegDate=this.taxAddress.gstRegDate;
            }else{
              this.taxAddress={
                country_id:'',
                state_id:'',
                city_id:'',
                address1:'',
                address2:'',
                zipcode:''
              };
              this.taxResidenceDiv= true,
              this.addGstDiv= false,
              this.Gstform=true,
              this.W8BENdiv=true,
              this.usPerson=0,
              this.showhidew8bin=false,
              this.panForm=true,
              this.w8benData={
                US_person:'',
                taxpayer_name:'',
                federal_tax:'',
                citizenship:'',
                dob:'',
                hybrid_entity:'',
              };
              this.w9Data={
                US_person:'',
                taxpayer_name:'',
                federal_tax:'',
                taxpayer_identification_type:'',
                taxpayer_identification_number:'',
                signature:'',
                dateof_signature:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                electronic_signature:'',
                tax_documents_digitally:'',
              };
              this.panData={
                pan_no:'',
                signature:'',
                dateof_signature:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                electronic_signature:'',
                affidavit_signature:'',
                dateof_affidavit:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
              };
              console.log('else',this.taxAddress);
            }
        },
        // this fun is for to update tax info
        async updateTaxAddress() {
          this.$v.taxAddress.$touch()
          if (!this.$v.taxAddress.$invalid) {
          var res =  await this.genericAPIPOSTRequest({
                requestUrl: "user/addTaxAddressDetails",
                params: {
                  country_id: this.taxAddress.country_id, 
                  state_id: this.taxAddress.state_id,
                  city_id: this.taxAddress.city_id,
                  address1: this.taxAddress.address1,
                  address2: this.taxAddress.address2,
                  zipcode: this.taxAddress.zipcode,
                  data: this.getCurrentUserIdRequest(),
                },
            });
            if(res){
              this.fetchTaxAddressDetails();
              this.taxResidenceDiv=2;
              this.$toastr.s('Tax Residence Upated');
            }
          }
          
        },
        // this fun is for to get state list on change
        async changecountry(event) {
          this.cityList  = [];
          this.cityList.push({ city_id: null, city_name: "Please select an option" });
          var res = await this.genericAPIPOSTRequest({
                requestUrl: "common/getStateList",
                params: {
                  country_id: event, 
                },
            });
            this.stateList = res; 
        },
        // this fun is for to get city list on change of state
        async changestate(event) {
          this.cityList  = [];
          this.cityList.push({ city_id: null, city_name: "Please select an option" });
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getCityList",
              params: { 
                state_id: event, 
              },
          });
          this.cityList = res;
        },
        // this fun is for to get location info
        getLocationInfo(){
          this.taxAddress = this.userInfo;
          this.changecountry(this.taxAddress.country_id);
          this.changestate(this.taxAddress.state_id);
        },
        // this fun is for to updatre gst info
        async updateGst(){ 
          // if(!this.Gstform){
            this.$v.gst.$touch();
            if(this.gst.gst == 'Yes'){
              this.$v.gst.$touch()
              if (!this.$v.gst.$invalid) 
              {
                await this.genericAPIPOSTRequest({
                    requestUrl: "user/addGstDetails",
                    params: {
                      gst: this.gst.gst,
                      gst_no: this.gst.gst_no, 
                      gstRegDate: this.gst.gstRegDate,
                      data:this.getCurrentUserIdRequest(),
                    },
                });
                this.gst.gst_no  ='';
                this.gst.gstRegDate  ='';
                this.fetchTaxAddressDetails();
                this.addGstDiv=false;
                this.$toastr.s('Gst Infomation Updated');
              } 
            }else if (this.gst.gst == 'No'){
                await this.genericAPIPOSTRequest({
                    requestUrl: "user/addGstDetails",
                    params: {
                      gst: this.gst.gst,
                      gst_no: '', 
                      gstRegDate: '',
                      data:this.getCurrentUserIdRequest(),
                    },
                });
                this.gst.gst  ='';
                this.fetchTaxAddressDetails();
                this.addGstDiv=false;
              this.$toastr.s('Gst Infomation Updated');
            }
            // }
        },
        // this fun is for to remove gst number
        async removeGst(){
          await this.genericAPIPOSTRequest({
              requestUrl: "user/addGstDetails",
              params: {
                status: 1,
                data:this.getCurrentUserIdRequest(),
              },
          });
          this.fetchTaxAddressDetails();
          this.addGstDiv =false;
          this.$bvModal.hide('nconfirm-modal');
          this.$toastr.s('Gst removed Successfully');
        },
      }
    };
  </script>
  <style>
    .horizontal-scroll-div{max-height:300px;overflow-y:scroll;overflow-x:hidden;}
  </style>
  