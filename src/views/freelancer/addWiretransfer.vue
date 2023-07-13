<template>
    <b-container>
        <b-row class="mt-100 settings-wrap mb-50 setup-pay">
            <b-col cols="12">
                <h4 class="mb-5 text-black fz-30 fw-500"><b>Set up Payments: Wire Transfer</b></h4>
                <b-card-group deck>
                    <b-card header-tag="header" footer-tag="footer" header-class="px-4 py-4 bg-white" class="mb-3" v-if="activeDiv == 1 && accountId == ''">
                        <template #header>
                        <h4 class="mb-0 text-black fz-24 fw-500">
                            <b>Bank Information</b>
                        </h4>
                        </template>
                        <b-row>
                        <b-col cols="12" class="px-4 py-4">
                            <div class="alert alert-success p-4">
                            <div class="d-md-flex align-items-center mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                                </svg>
                                <div class="ml-2">
                                <p class="mb-0 text-black">Double check your account info for accuracy. Incorrect or mismatched account name and number can result in delays and fees.</p>
                                </div>
                            </div>
                            </div>
                            <section class="card-section">
                                <h5 class="fz-20 fw-600">SWIFT Code</h5>
                                <div class="d-md-flex align-items-center mb-2">
                                    <b-form-input
                                        v-model="swiftNumber"
                                        placeholder="Enter SWIFT code"
                                        class="w-50"
                                        maxlength="11"
                                        @input="$v.swiftNumber.$touch()"
                                        @blur="$v.swiftNumber.$touch()"
                                    ></b-form-input>
                                    <div class="ml-auto">
                                        <b-button class="btn-outline-theme mr-2" @click="getSwiftDetails">Find</b-button>
                                    </div>
                                    <p class="text-danger" id="swiftNumberError" v-if="swiftNumberErrors[0]">{{swiftNumberErrors[0]}}</p>
                                </div>
                                <div class="d-md-flex align-items-center mb-2" v-if="!bankDetailDiv">
                                    <b-button class="btn-outline-theme mr-2" @click="$router.push({name:'Settings',path:'/settings',query:{'current':'getPaid'}})">back</b-button>
                                    <b-button class="btn-theme" disabled="">Next</b-button>
                                </div>
                                <span v-if="bankDetailDiv && swiftData!=''">
                                    <div class="d-md-flex align-items-center mb-2">
                                        <h5 class="fz-20 fw-600">Bank</h5>
                                        
                                    </div>
                                    <h5 class="fz-20 fw-600 mb-2">{{swiftData.bank.name}}</h5>
                                    <p class="fz-16 fw-500 text-muted mb-0">{{swiftData.address}}</p>
                                    <p class="fz-16 fw-500 text-muted mb-0">{{swiftData.city.name}}, {{swiftData.postcode}}, {{swiftData.country.name}}</p>
                                    <p class="fz-16 fw-500 text-muted mb-4"><a href="javascript:void(0);" class="text-theme">Not your bank or branch?</a></p>

                                    <h5 class="fz-20 fw-600 mb-2">Account Currency</h5>
                                    <p class="fz-16 fw-500 text-muted mb-4">US Dollar (USD)</p>

                                    <h5 class="fz-20 fw-600 mb-2">Withdrawal Fee</h5>
                                    <p class="fz-16 fw-500 text-muted mb-4">$30.00 USD per withdrawal</p>

                                    <div class="d-md-flex align-items-center mb-2 border-bottom">
                                        <h5 class="fz-20 fw-600">Account holder Bank Information</h5>
                                        <!-- <div class="ml-auto">
                                            <a href="javascript:void(0);" @click="isLocationedit = true">
                                                <PencilEditIcon />
                                            </a>
                                        </div> -->
                                    </div>

                                    <form @submit.prevent="saveBankDetails">
                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Account Number </label><br>
                                            <small>Your account number may include only capital letters and digits</small>
                                            <b-form-input 
                                                v-model="bankDetails.account"
                                                placeholder="Enter account number"
                                                class="w-50 mt-1"
                                                @input="$v.bankDetails.account.$touch()"
                                                @blur="$v.bankDetails.account.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankAccountErrors[0]">{{bankAccountErrors[0]}}</p>
                                            
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Name on Account </label><br>
                                            <b-form-input
                                            v-model="bankDetails.name"
                                            placeholder="Enter Name on Account"
                                            class="w-50 mt-1"
                                            @input="$v.bankDetails.name.$touch()"
                                            @blur="$v.bankDetails.name.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankNameErrors[0]">{{bankNameErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Address </label><br>
                                            <small>Please enter the physical address associated with this account. If the postal address where you receive mail is different than the physical address where you reside, our bank requires you enter the physical address.</small>
                                            <b-form-input
                                            v-model="bankDetails.address"
                                            placeholder="Enter Address"
                                            class="w-50 mt-1"
                                            @input="$v.bankDetails.address.$touch()"
                                            @blur="$v.bankDetails.address.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankAddressErrors[0]">{{bankAddressErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">City and State/Province </label><br>
                                            <b-form-input
                                            v-model="bankDetails.cityState" 
                                            placeholder="Enter City and State/Province"
                                            class="w-50 mt-1"
                                            @input="$v.bankDetails.cityState.$touch()"
                                            @blur="$v.bankDetails.cityState.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankCityStateErrors[0]">{{bankCityStateErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Country </label><br>
                                            <b-form-select 
                                                v-model="bankDetails.country"
                                                :options="CountryData"
                                                value-field="country_name" 
                                                text-field="country_name"
                                                @input="$v.bankDetails.country.$touch()"
                                                @blur="$v.bankDetails.country.$touch()"
                                                class="form-control">
                                            </b-form-select>
                                            <p class="text-danger" v-if="bankCountryErrors[0]">{{bankCountryErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Phone Number </label><br>
                                            <vue-tel-input
                                                v-bind="bindProps"
                                                v-model="bankDetails.phone"
                                                :country="bankDetails.phone_code"
                                                @country-changed="countryChanges"
                                                class="form-control"
                                                @input="$v.bankDetails.phone.$touch()"
                                                @blur="$v.bankDetails.phone.$touch()"
                                            ></vue-tel-input>
                                            <p class="text-danger" v-if="bankPhoneErrors[0]">{{bankPhoneErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Remittance Information (Optional) </label><br>
                                            <b-form-input v-model="bankDetails.remittance" placeholder="Enter Remittance Information" class="w-50 mt-1"></b-form-input>
                                        </b-form-group>

                                        <div class="d-md-flex align-items-center mb-2">
                                            <b-button class="btn-outline-theme mr-2">back</b-button>
                                            <b-button class="btn-theme" type="submit">Next</b-button>
                                        </div>
                                    </form>
                                </span>
                            
                            </section>
                        </b-col>
                        </b-row>
                    </b-card>

                    <b-card header-tag="header" footer-tag="footer" header-class="px-4 py-4 bg-white" class="mb-3" v-if="activeDiv == 1 && accountId != ''">
                        <template #header>
                        <h4 class="mb-0 text-black fz-24 fw-500">
                            <b>Bank Information</b>
                        </h4>
                        </template>
                        <b-row>
                        <b-col cols="12" class="px-4 py-4">
                            <div class="alert alert-success p-4">
                            <div class="d-md-flex align-items-center mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                                </svg>
                                <div class="ml-2">
                                <p class="mb-0 text-black">Double check your account info for accuracy. Incorrect or mismatched account name and number can result in delays and fees.</p>
                                </div>
                            </div>
                            </div>
                            <section class="card-section" v-if="swiftData!=''">
                                <h5 class="fz-20 fw-600">SWIFT Code</h5>
                                <p class="fz-16 fw-500 text-muted mb-0">{{bankDetails.swiftnumber}}</p>
                                <br>
                                <span>
                                    <div class="d-md-flex align-items-center mb-2">
                                        <h5 class="fz-20 fw-600">Bank</h5>
                                        
                                    </div>
                                    <h5 class="fz-20 fw-600 mb-2">{{swiftData.bank.name}}</h5>
                                    <p class="fz-16 fw-500 text-muted mb-0">{{swiftData.address}}</p>
                                    <p class="fz-16 fw-500 text-muted mb-0">{{swiftData.city.name}}, {{swiftData.postcode}}, {{swiftData.country.name}}</p>
                                    <p class="fz-16 fw-500 text-muted mb-4"><a href="javascript:void(0);" class="text-theme">Not your bank or branch?</a></p>

                                    <h5 class="fz-20 fw-600 mb-2">Account Currency</h5>
                                    <p class="fz-16 fw-500 text-muted mb-4">US Dollar (USD)</p>

                                    <h5 class="fz-20 fw-600 mb-2">Withdrawal Fee</h5>
                                    <p class="fz-16 fw-500 text-muted mb-4">$30.00 USD per withdrawal</p>

                                    <div class="d-md-flex align-items-center mb-2 border-bottom">
                                        <h5 class="fz-20 fw-600">Account holder Bank Information</h5>
                                        <!-- <div class="ml-auto">
                                            <a href="javascript:void(0);" @click="isLocationedit = true">
                                                <PencilEditIcon />
                                            </a>
                                        </div> -->
                                    </div>

                                    <form @submit.prevent="saveBankDetails">
                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Account Number </label><br>
                                            <small>Your account number may include only capital letters and digits</small>
                                            <b-form-input 
                                                v-model="bankDetails.account"
                                                placeholder="Enter account number"
                                                class="w-50 mt-1"
                                                @input="$v.bankDetails.account.$touch()"
                                                @blur="$v.bankDetails.account.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankAccountErrors[0]">{{bankAccountErrors[0]}}</p>
                                            
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Name on Account </label><br>
                                            <b-form-input
                                            v-model="bankDetails.name"
                                            placeholder="Enter Name on Account"
                                            class="w-50 mt-1"
                                            @input="$v.bankDetails.name.$touch()"
                                            @blur="$v.bankDetails.name.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankNameErrors[0]">{{bankNameErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Address </label><br>
                                            <small>Please enter the physical address associated with this account. If the postal address where you receive mail is different than the physical address where you reside, our bank requires you enter the physical address.</small>
                                            <b-form-input
                                            v-model="bankDetails.address"
                                            placeholder="Enter Address"
                                            class="w-50 mt-1"
                                            @input="$v.bankDetails.address.$touch()"
                                            @blur="$v.bankDetails.address.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankAddressErrors[0]">{{bankAddressErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">City and State/Province </label><br>
                                            <b-form-input
                                            v-model="bankDetails.cityState" 
                                            placeholder="Enter City and State/Province"
                                            class="w-50 mt-1"
                                            @input="$v.bankDetails.cityState.$touch()"
                                            @blur="$v.bankDetails.cityState.$touch()"
                                            ></b-form-input>
                                            <p class="text-danger" v-if="bankCityStateErrors[0]">{{bankCityStateErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Country </label><br>
                                            <b-form-select 
                                                v-model="bankDetails.country"
                                                :options="CountryData"
                                                value-field="country_name" 
                                                text-field="country_name"
                                                @input="$v.bankDetails.country.$touch()"
                                                @blur="$v.bankDetails.country.$touch()"
                                                class="form-control">
                                            </b-form-select>
                                            <p class="text-danger" v-if="bankCountryErrors[0]">{{bankCountryErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Phone Number </label><br>
                                            <vue-tel-input
                                                v-bind="bindProps"
                                                v-model="bankDetails.phone"
                                                :country="bankDetails.phone_code"
                                                @country-changed="countryChanges"
                                                class="form-control"
                                                @input="$v.bankDetails.phone.$touch()"
                                                @blur="$v.bankDetails.phone.$touch()"
                                            ></vue-tel-input>
                                            <p class="text-danger" v-if="bankPhoneErrors[0]">{{bankPhoneErrors[0]}}</p>
                                        </b-form-group>

                                        <b-form-group>
                                            <label class="fz-20 fw-600 mb-0">Remittance Information (Optional) </label><br>
                                            <b-form-input v-model="bankDetails.remittance" placeholder="Enter Remittance Information" class="w-50 mt-1"></b-form-input>
                                        </b-form-group>

                                        <div class="d-md-flex align-items-center mb-2">
                                            <b-button class="btn-outline-theme mr-2">back</b-button>
                                            <b-button class="btn-theme" type="submit">Next</b-button>
                                        </div>
                                    </form>
                                </span>
                            
                            </section>
                        </b-col>
                        </b-row>
                    </b-card>

                    <b-card header-tag="header" footer-tag="footer" header-class="px-4 py-4 bg-white" class="mb-3" v-else-if="activeDiv == 2">
                        <template #header>
                        <h4 class="mb-0 text-black fz-24 fw-500">
                            <b>Review</b>
                        </h4>
                        </template>
                        <b-row>
                        <b-col cols="12" class="px-4 py-4">
                            <div class="alert alert-success p-4">
                            <div class="d-md-flex align-items-center mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                                </svg>
                                <div class="ml-2">
                                <p class="mb-0 text-black">Double check your account info for accuracy. Incorrect or mismatched account name and number can result in delays and fees.</p>
                                </div>
                            </div>
                            </div>
                            <section class="card-section">
                            <div class="d-md-flex align-items-center mb-2">
                                <h5 class="fz-20 fw-600">Bank</h5>
                                <div class="ml-auto">
                                <a href="javascript:void(0);" @click="activeDiv = 1">
                                    <PencilEditIcon />
                                </a>
                                </div>
                            </div>
                            <h5 class="fz-20 fw-600 mb-2">{{swiftData.bank.name}}</h5>
                            <p class="fz-16 fw-500 text-muted mb-0">{{swiftData.address}}</p>
                            <p class="fz-16 fw-500 text-muted mb-0">{{swiftData.city.name}}, {{swiftData.postcode}}, {{swiftData.country.name}}</p>
                            <p class="fz-16 fw-500 text-muted mb-4"><a href="javascript:void(0);" class="text-theme">Not your bank or branch?</a></p>

                            <h5 class="fz-20 fw-600 mb-2">Account Currency</h5>
                            <p class="fz-16 fw-500 text-muted mb-4">US Dollar (USD)</p>

                            <div class="d-md-flex align-items-center mb-2">
                                <h5 class="fz-20 fw-600">Account holder information</h5>
                                <div class="ml-auto">
                                <a href="javascript:void(0);" @click="activeDiv = 1">
                                    <PencilEditIcon />
                                </a>
                                </div>
                            </div>
                            <p class="fz-16 fw-500 text-muted mb-0"><b>Account Number:</b> {{bankDetails.account}}</p>
                            <p class="fz-16 fw-500 text-muted mb-0"><b>Name on Account:</b> {{bankDetails.name}}</p>
                            <p class="fz-16 fw-500 text-muted mb-0"><b>Address:</b> {{bankDetails.address}}</p>
                            <p class="fz-16 fw-500 text-muted mb-0"><b>City and State/Province:</b> {{bankDetails.cityState}}</p>
                            <p class="fz-16 fw-500 text-muted mb-0"><b>Country:</b> {{bankDetails.country}}</p>
                            <p class="fz-16 fw-500 text-muted mb-0"><b>Phone Number:</b> {{bankDetails.phone}}</p>
                            <p class="fz-16 fw-500 text-muted mb-4" v-if="bankDetails.remittance!=''"><b>Remittance Information:</b> {{bankDetails.remittance}}</p>
                            <div class="d-md-flex align-items-center mb-2">
                                <b-button class="btn-outline-theme mr-2" @click="activeDiv = 1">Back</b-button>
                                <b-button class="btn-theme" @click="(paymentScheduleData!='')?submitBankDetails():activeDiv = 3;">{{(paymentScheduleData!='')?'Save':'Next'}}</b-button>
                            </div>
                            </section>
                        </b-col>
                        </b-row>
                    </b-card>

                    <b-card header-tag="header" footer-tag="footer" header-class="px-4 py-4 bg-white" class="mb-3" v-else-if="activeDiv == 3">
                        <template #header>
                            <div>
                            <h4 class="mb-0 text-black fz-24 fw-500">
                                <b>Set up payment schedule</b>
                            </h4>
                            </div>
                        </template>
                        <b-row>
                            <b-col cols="12" class="px-4 py-4">
                            <section class="card-section">
                                <h5 class="fz-20 fw-600">Payment Method</h5>
                                <h5 class="fz-16 fw-600 mb-0">{{swiftData.bank.name}} account number is {{bankDetails.account}} (USD)</h5>
                                <p class="fz-14 fw-500 text-muted mb-4">Earnings will be sent here according to the following schedule</p>
                                
                                <h5 class="fz-16 fw-600 mb-0">Withdraw Fee</h5>
                                <p class="fz-14 fw-500 text-muted mb-4">$30.00 per payment</p>

                                <h5 class="fz-16 fw-600 mb-0">Preferred Payment Schedule</h5>
                                <p class="fz-14 fw-500 text-muted mb-4">Earnings will be released upon your request</p>

                                <b-form-radio
                                    v-model="bankDetailsSetting.preferred_payment_schedule"
                                    name="schedule"
                                    :value="schedule.value"
                                    class="d-flex align-items-center fz-14"
                                    v-for="(schedule, index) in paymentSchedule"
                                    :key="index"
                                    @input="$v.bankDetailsSetting.preferred_payment_schedule.$touch()"
                                    @blur="$v.bankDetailsSetting.preferred_payment_schedule.$touch()"
                                >
                                {{schedule.value}}</b-form-radio>
                                <p class="text-danger" v-if="bankDetailsscheduleErrors[0]">{{bankDetailsscheduleErrors[0]}}</p>



                                <b-form-group class="mb-4">
                                <label class="fz-16 fw-600 mb-0">Only when balance is</label><br>
                                <b-form-select
                                    v-model="bankDetailsSetting.minimum_balance_withdraw"
                                    :options="balanceWithdraw"
                                    value-field="value"
                                    text-field="value"
                                    @input="$v.bankDetailsSetting.minimum_balance_withdraw.$touch()"
                                    @blur="$v.bankDetailsSetting.minimum_balance_withdraw.$touch()"
                                ></b-form-select><br>
                                <small>Minimize withdrawal fees by choosing larger amounts.</small>
                                <p class="text-danger" v-if="bankDetailsminimumErrors[0]">{{bankDetailsminimumErrors[0]}}</p>

                                </b-form-group>

                                <b-form-group class="mb-4">
                                <label class="fz-16 fw-600 mb-0">Maintain A reserve balance</label><br>
                                <b-form-select
                                    v-model="bankDetailsSetting.maintain_balance"
                                    :options="maintainBalance"
                                    value-field="value"
                                    text-field="value"
                                    @input="$v.bankDetailsSetting.maintain_balance.$touch()"
                                    @blur="$v.bankDetailsSetting.maintain_balance.$touch()"
                                ></b-form-select>
                                <p class="text-danger" v-if="bankDetailsmaintainErrors[0]">{{bankDetailsmaintainErrors[0]}}</p>

                                </b-form-group>

                                <!-- <h5 class="fz-16 fw-600 mb-0">Next Payment <small>(based on your schedule)</small></h5>
                                <p class="fz-14 fw-500 text-muted mb-4">December 7, 2022</p> -->

                                <div class="d-md-flex align-items-center">
                                <!-- <b-button class="btn-outline-theme">Back</b-button> -->
                                <div class="ml-auto">
                                    <a href="javascript:void(0);" class="text-theme mr-4" @click="activeDiv = 2">Back</a>
                                    <b-button class="btn-theme" @click="submitBankDetails()">Save</b-button>
                                </div>
                                </div>
                            </section>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>

    </b-container>
  
</template>

<script>
   
import { validationMixin } from 'vuelidate'; 
import { required, maxLength } from 'vuelidate/lib/validators'
import { mapActions } from "vuex"
import PencilEditIcon from "../../components/icons/PencilEditIcon.vue"; 
import axios from 'axios'
// const swiftcodevalid= helpers.regex('check','/^[A-Z]{4}[-]{0,1}[A-Z]{2}[-]{0,1}[A-Z0-9]{2}[-]{0,1}[0-9]{3}$/');

export default {
  mixins: [validationMixin],
  validations: {
    swiftNumber: { 
        required,
        maxLength: maxLength(11),
        // swiftcodevalid
     },
     bankDetails:{
        account:{ required },
        name:{ required },
        address:{ required },
        cityState:{ required },
        country:{ required },
        phone:{ required },
        swiftData:{ required },
        swiftnumber:{ required },
    },
    bankDetailsSetting:{
        preferred_payment_schedule:{required},
        minimum_balance_withdraw:{required},
        maintain_balance:{required},
    }
  },
  data() {
    return { 
        paymentSchedule:[
            {'value':'Quarterly'},
            {'value':'Monthly (last Wednesday of each month)'},
            {'value':'Twice per month (1st and 3rd Wednesday of each month)'},
            {'value':'Weekly (every Wednesday)'},
        ],
        balanceWithdraw:[
            {'value':'$100.00 or more'},
            {'value':'$200.00 or more'},
            {'value':'$300.00 or more'},
            {'value':'$400.00 or more'},
            {'value':'$500.00 or more'},
            {'value':'$600.00 or more'},
            {'value':'$700.00 or more'},
            {'value':'$800.00 or more'},
            {'value':'$900.00 or more'},
            {'value':'$1000.00 or more'}
        ],
        maintainBalance:[
            {'value':'$0.00'},
            {'value':'$5.00'},
            {'value':'$10.00'},
            {'value':'$15.00'},
        ],
        activeDiv:1,
        CountryData:[],
        paymentScheduleData:'',
        swiftNumber:'',
        bankDetailDiv:false,
        swiftData:[],
        bankDetails:{
            account:'',
            name:'',
            address:'',
            cityState:'',
            country:'',
            phone:'',
            phone_code:'',
            remittance:'',
            swiftData:'',
            swiftnumber:'',
        },
        bankDetailsSetting:{
            preferred_payment_schedule:'',
            minimum_balance_withdraw:'',
            maintain_balance:'',
        },
        bindProps: {
            mode: "international",
            placeholder: "Enter a phone number",
            required: true,
            enabledCountryCode: true,
            enabledFlags: true,
            autocomplete: "off",
            name: "telephone",
            maxLen: 15,
            inputOptions: {
                showDialCode: true
            },
            validCharactersOnly:true,
        },
        accountId:'',
        accountDetails:'',
    };
  },
  computed: { 
    swiftNumberErrors() {
      const errors = [];
      if (!this.$v.swiftNumber.$dirty) return errors;
      !this.$v.swiftNumber.required && errors.push("Swift Number is required");
      !this.$v.swiftNumber.maxLength && errors.push("Maximum 11 charachter is allowed");
    //   !this.$v.swiftNumber.swiftcodevalid && errors.push("Invalid Swift Code");
      return errors;
    },

    bankAccountErrors() {
      const errors = [];
      if (!this.$v.bankDetails.account.$dirty) return errors;
      !this.$v.bankDetails.account.required && errors.push("Account Number is required");
      return errors;
    },
    bankNameErrors() {
      const errors = [];
      if (!this.$v.bankDetails.name.$dirty) return errors;
      !this.$v.bankDetails.name.required && errors.push("Account Name is required");
      return errors;
    },
    bankAddressErrors() {
      const errors = [];
      if (!this.$v.bankDetails.address.$dirty) return errors;
      !this.$v.bankDetails.address.required && errors.push("Address is required");
      return errors;
    },
    bankCityStateErrors() {
      const errors = [];
      if (!this.$v.bankDetails.cityState.$dirty) return errors;
      !this.$v.bankDetails.cityState.required && errors.push("city State is required");
      return errors;
    },
    bankCountryErrors() {
      const errors = [];
      if (!this.$v.bankDetails.country.$dirty) return errors;
      !this.$v.bankDetails.country.required && errors.push("Country is required");
      return errors;
    },
    bankPhoneErrors() {
      const errors = [];
      if (!this.$v.bankDetails.phone.$dirty) return errors;
      !this.$v.bankDetails.phone.required && errors.push("phone Number is required");
      return errors;
    },

    bankDetailsscheduleErrors() {
      const errors = [];
      if (!this.$v.bankDetailsSetting.preferred_payment_schedule.$dirty) return errors;
      !this.$v.bankDetailsSetting.preferred_payment_schedule.required && errors.push("Payment Schedule is required");
      return errors;
    },

    bankDetailsminimumErrors() {
      const errors = [];
      if (!this.$v.bankDetailsSetting.minimum_balance_withdraw.$dirty) return errors;
      !this.$v.bankDetailsSetting.minimum_balance_withdraw.required && errors.push("Balance Withdraw is required");
      return errors;
    },

    bankDetailsmaintainErrors() {
      const errors = [];
      if (!this.$v.bankDetailsSetting.maintain_balance.$dirty) return errors;
      !this.$v.bankDetailsSetting.maintain_balance.required && errors.push("Maintain Balance is required");
      return errors;
    },
  }, 
  mounted() {
    if(this.$route.params.aid!= undefined && this.$route.params.aid!=''){
        this.accountId =this.decodeId(this.$route.params.aid);
        this.getAccountdetails();
    }
    this.getCountry();
    this.getPaidSettings();
  },
  methods: {
    
    
    ...mapActions(["genericAPIPOSTRequest"]),
    async getAccountdetails(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "getPaidList",
            params: {
                'get_paid_id' : this.accountId,
            },
        });
        if(res){
            let data = res[0];
            this.bankDetails.account=data.account;
            this.bankDetails.name=data.name;
            this.bankDetails.address=data.address;
            this.bankDetails.cityState=data.cityState;
            this.bankDetails.country=data.country;
            this.bankDetails.phone=data.phone;
            this.bankDetails.phone_code=data.phone_code;
            this.bankDetails.remittance=data.remittance;
            this.bankDetails.swiftData=data.swiftData;
            this.bankDetails.swiftnumber= data.swiftnumber;
            this.bankDetails.get_paid_id=data.get_paid_id;
            this.swiftData = data.swiftData;
            this.swiftNumber = data.swiftnumber;
        }else{
            this.$router.push({name:'Settings',path:'/settings',query:{'current':'getPaid'}});
        }
    },
    async submitBankDetails(){
        this.$v.$touch();
        if(!this.$v.bankDetails.$invalid ){
            if(this.paymentScheduleData==''){
                if(!this.$v.bankDetailsSetting.$invalid){
                    this.bankDetails.preferred_payment_schedule = this.bankDetailsSetting.preferred_payment_schedule;
                    this.bankDetails.minimum_balance_withdraw = this.bankDetailsSetting.minimum_balance_withdraw;
                    this.bankDetails.maintain_balance = this.bankDetailsSetting.maintain_balance;
                }else{
                    return false;
                }
            }
            var response = await this.genericAPIPOSTRequest({
                requestUrl: "addUpdateGetpaid",
                params: this.bankDetails,
            });

            if(response){
                this.$toastr.s("Get Paid Details Added");
                // return false;
                this.$router.push({name:'Settings',path:'/settings',query:{'current':'getPaid'}});
            }
        } 
    },
    countryChanges(e) {
      this.bankDetails.phone_code = e.dialCode;
    },
    saveBankDetails(){
        this.bankDetails.swiftData= this.swiftData;
        this.bankDetails.swiftnumber= this.swiftNumber;
        this.$v.$touch();
        if(!this.$v.bankDetails.$invalid){
            console.log('data',this.bankDetails);
            this.activeDiv = 2;
        }else{
            console.log('else',this.bankDetails);

        }
    },
    // this fun is for to get bank details from swift number
    async getSwiftDetails(){
        this.$v.$touch();
        if(!this.$v.swiftNumber.$invalid){
            await axios({
                method: 'get',
                url: 'https://swiftcodesapi.com/v1/swifts/'+this.swiftNumber,
                headers: { 
                    'X-Api-Key': this.$store.state.swiftKey, 
                    'Accept': 'application/json', 
                    // 'Cookie': 'csrfToken=Pwo1u5EqxUND1lU3sakrmmM4MDA2Mjk1NjU5ZTBkZTViZDEzNWIyYzA0YjVhYzM0NTk0NGJiNWE%3D',
                }
            }).then((response) => {
                this.swiftData=response.data.data;
                this.bankDetailDiv = true;
                console.log('response',this.swiftData)

            }).catch((error) => {
                console.log('error',error)
                this.bankDetailDiv= false;
                document.getElementById('swiftNumberError').innerHTML = 'Invalid Swift Number';
            })
        }
    }, 
    // this fun is for to get Country
    async getCountry(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getCountryList",
            params: {},
        });  
        this.CountryData = res;
    },
    // this fun is for to get paid setttings
    async getPaidSettings(){
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "getPaidsettings",
            params: {},
        });  
        this.paymentScheduleData = res;
    },
  },
  components: { 
    PencilEditIcon,
  }
};
</script>
<style>
    .setup-pay .card-body{background-color: #ffffff;}
</style>