<template>
  <b-container>
    <div
    v-infinite-scroll="getData"
    :infinite-scroll-disabled="busy"
    infinite-scroll-distance="5">
    <b-row class="mt-100 search-wrap client-search mb-50">
      <b-col xl="3" lg="3" md="12">
        <h4 class="mb-3 fz-30 fw-500 text-black"><b>Filter By</b></h4>
        <b-card-group deck>
          <b-card>
            <template>
              <div class="accordion border-none" role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="py-3 px-1 mb-2" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-0 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Talent Quality</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-0" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="talent-quality">
                        <b-card-text>
                          <span v-for="(talent,index) in talentQualilty" :key="index">
                            <b-form-checkbox
                              name="tq"
                              class="fz-18 d-flex align-items-center mb-2"
                              :value="talent.talent_id"
                              stacked
                              v-model="filtersValue.talentQualilty"
                              @change ="filterByData()"
                            >
                            <img :src="talent.img" width="20" height="20" style="margin-right:10px;">
                            {{talent.talent_title}}
                          </b-form-checkbox>
                          </span>
                          
                        </b-card-text>
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-01 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Day rate's</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-01" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="py-5">
                      <!-- <vue-range-slider :ref="filterByData()" v-model="filtersValue.price" :min="0" :max="100" :formatter="formatter" ></vue-range-slider> -->
                      <div class="d-flex align-items-center justify-content-space-between">
                        <div class="form-group mr-2">
                          <label>Min</label>
                          <input type="number" v-model="priceFrom" @keyup="updatefromDayValue()"
                          minlength="1" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"
                          class="form-control"/>
                        </div>
                        <div class="form-group">
                          <label>Max</label>
                          <input type="number" v-model="priceTo" @keypress="updatetoDayValue()"
                            minlength="2" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"
                          class="form-control"/>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>


                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-1 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Category</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="pos-relative">
                      <div class="input-group search-bar mt-2 w-100">
                          <b-form-group class="w-100">
                              <b-form-select 
                                  v-model="filtersValue.categoryData"
                                  :options="categoryData" 
                                  value-field="qp_role_master_id"
                                  text-field="role_name"
                                  class="form-control w-100"
                                  @change="filterByData();changeCategory($event)"
                              ></b-form-select>
                          </b-form-group>
                      </div>
                      
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-2 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Sub Category</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="pos-relative">
                      <div class="input-group search-bar mt-2 w-100">
                          <b-form-group class="w-100">
                              <b-form-select 
                                  v-model="filtersValue.skillData"
                                  :options="skillData" 
                                  value-field="qp_role_skill_master_id"
                                  text-field="skill_name"
                                  class="form-control w-100"
                                  @change="filterByData();filtersValue.hideSubCategory = false; changeSubcategory()"
                              ></b-form-select>
                          </b-form-group>
                      </div>
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1 mb-2" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-40 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Experience level</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-40" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="talent-type mt-4">
                      <b-card-text>
                        <b-form-radio-group
                            class="fz-16 mb-2"
                            :options="experienceLevelData"
                            value-field="experience_id"
                            text-field="title" 
                            name="el"
                            stacked
                            v-model="filtersValue.experience"
                            @change ="filterByData()"
                        ></b-form-radio-group>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-110 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Certification</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-110" visible accordion="my-accordion" role="tabpanel">
                    <input type="text" v-model="searchCertification" class="form-control border-none" placeholder="Search for Certification">
                    <div class="certification-drop p-2 border bg-white certification-scroll">
                      <span v-for="(cer,index) in filterCertification" :key="index">
                        <h5><b>{{cer.certification}}</b></h5>
                        <span v-for="(c_type,ids) in cer.certification_type_master" :key="ids">
                          <div class="form-check" v-if="ids < 3">
                            <input class="form-check-input" @change ="filterByData()" v-model="filtersValue.certification" :value="c_type.certification_type_master_id" type="checkbox" :id="'defaultCheck'+index+ids">
                            <label class="form-check-label" :for="'defaultCheck'+index+ids">
                              {{c_type.certification}}
                            </label>
                          </div>
                          <div class="form-check" :class="cer.certification_master_id" v-else style="display:none;">
                            <input class="form-check-input" @change ="filterByData()" v-model="filtersValue.certification" :value="c_type.certification_type_master_id" type="checkbox" :id="'defaultCheck'+index+ids">
                            <label class="form-check-label" :for="'defaultCheck'+index+ids">
                              {{c_type.certification}}
                            </label>
                          </div>

                        </span>
                        <a href="javascript:void(0);" :id="cer.certification_master_id+'-more'" class="text-theme fz-14 fw-500" @click="certificationView(cer.certification_master_id,'more');">View More</a>
                        <a href="javascript:void(0);" :id="cer.certification_master_id+'-less'" style="display:none;" class="text-theme fz-14 fw-500" @click="certificationView(cer.certification_master_id,'less')">View less</a>
                      </span>
                    </div>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-3 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Location</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <div class="input-group search-bar mt-4">
                        <div class="tt-menu" style="top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 10px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                        <input type="text" class="form-control border-none" v-model="location" placeholder="Search for Location" v-on:keyup="searchLocation()">
                          <b-form-group >
                            <b-form-checkbox
                              v-for="(loc,id) in locationData"
                              :key="id"
                              :value="loc"
                              v-model="filtersValue.locationData"
                              @change ="filterByData()"
                              >
                              {{ loc.location }}
                            </b-form-checkbox>
                          </b-form-group>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1 mb-2" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-4 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Talent type</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="talent-type mt-4">
                      <b-card-text>
                        <b-form-radio-group
                            class="fz-16 mb-2"
                            :options="talentType"
                            value-field="value"
                            text-field="title" 
                            name="tt"
                            stacked
                            v-model="filtersValue.talentType"
                            @change ="filterByData()"
                        ></b-form-radio-group>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-5 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Job success</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="job-success mt-4">
                      <b-card-text>
                        <b-form-radio-group
                            class="fz-16"
                            :options="successtype"
                            value-field="value"
                            text-field="title" 
                            name="st"
                            stacked
                            v-model="filtersValue.successtype"
                            @change ="filterByData()"
                        ></b-form-radio-group>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-6 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Earned amount</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="earn-amnt mt-4">
                      <b-card-text>
                        <b-form-radio-group
                            class="fz-16"
                            :options="earntype"
                            value-field="value"
                            text-field="title" 
                            name="et"
                            stacked
                            v-model="filtersValue.earntype"
                            @change ="filterByData()"
                        ></b-form-radio-group>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>

                  

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-8 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">English level</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="eng-level mt-4">
                        <b-card-text>
                          <b-form-radio-group
                              class="fz-16"
                              :options="englishtype"
                              value-field="value"
                              text-field="title" 
                              name="ent"
                              stacked
                              v-model="filtersValue.englishtype"
                              @change ="filterByData()"
                          ></b-form-radio-group>
                        </b-card-text>
                    </b-card-body>
                  </b-collapse>

                  <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                    <div class="d-md-flex" block v-b-toggle.accordion-9 variant="info">
                      <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Other languages</a>
                      <div class="ml-auto">
                        <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                      </div>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body class="other-language">
                      <div class="input-group search-bar mt-4">
                        <div style="position: absolute;top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 10px;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                        <input type="text" class="form-control border-none" v-model="searchLang" placeholder="Search for Language" aria-describedby="basic-addon2">
                          <b-form-group class="ol-filter">
                            <b-form-checkbox
                              v-for="(lang,id) in languagefilterData"
                              :key="id"
                              :value="lang.id"
                              v-model="filtersValue.otherLang"
                              @change ="filterByData()"
                              >
                              {{ lang.value }}
                            </b-form-checkbox>
                          </b-form-group>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>

                </b-card>
              </div>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col xl="9" lg="9" md="12"> 
        <b-card no-body class="freelancer-wrap right-wrap mt-12 bg-white">
          <ul class="nav nav-pills mb-3 py-2 px-4" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation" >
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-home" aria-selected="true" v-on:click="getData()" >Search </button>
            </li>
            <a href="javascript:void(0);" @click="$router.push({path:'/client/hired-freelancer',name:'hiredUser'})" >
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">My Hires <span class="badge badge-secondary br-50"></span></button>
            </li>
            </a>
            <a href="javascript:void(0);" @click="$router.push({path:'/client/saved-freelancer',name:'savedUser'})" v-if="isPermissionForClient('client-saved')">
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Saved <span class="badge badge-secondary br-50"></span></button>
            </li>
            </a>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="search-filter-wrapper px-4 border-bottom pb-3 mb-3">
                  <b-row>
                    <b-col xl="12" lg="12" md="12">
                      <div class="input-group search-bar">
                        <input type="text" class="form-control border-none" v-model="titleSearch" @keyup="filterByData()" placeholder="Search for Users" aria-describedby="basic-addon2">
                        <span class="input-group-text bg-white" id="basic-addon2">
                          <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9689 5.13525C16.0046 5.13525 17.9184 5.92799 19.3579 7.36746C20.7973 8.8069 21.59 10.7207 21.5901 12.7564C21.5901 14.7921 20.7973 16.706 19.3579 18.1454C17.9184 19.5849 16.0046 20.3776 13.9689 20.3776C11.9332 20.3776 10.0193 19.5849 8.57987 18.1454C7.14039 16.706 6.34766 14.7921 6.34766 12.7564C6.34766 10.7207 7.14039 8.8069 8.57987 7.36746C10.0193 5.92799 11.9331 5.13525 13.9689 5.13525ZM7.80186 12.7564C7.80186 16.1569 10.5683 18.9234 13.9688 18.9234C17.3693 18.9234 20.1358 16.1569 20.1358 12.7564C20.1358 9.35594 17.3694 6.58946 13.9689 6.58946C10.5684 6.58946 7.80186 9.35594 7.80186 12.7564Z" fill="#F2613C"/>
                            <path d="M24.1347 21.8942L19.3548 17.1143C19.0708 16.8304 18.6104 16.8304 18.3265 17.1143C18.0425 17.3983 18.0425 17.8587 18.3265 18.1426L23.1063 22.9225C23.2483 23.0645 23.4344 23.1355 23.6205 23.1355C23.8066 23.1355 23.9927 23.0645 24.1347 22.9225C24.4186 22.6385 24.4186 22.1782 24.1347 21.8942Z" fill="#F2613C"/>
                          </svg>
                        </span>
                      </div>
                    </b-col>
                    <b-col xl="12" lg="12" md="12">
                      <ul class="inline-block align-items-center fz-14 post tags mb-0">
                        <span v-if="filtersValue.talentQualilty.length > 0">
                          <li class="mr-1 inline-block align-items-center bg-theme" v-for="(quality,id) in filtersValue.talentQualilty" :key="id"> 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                             {{filterName('quality',quality)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('quality',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>

                        <span v-if="filtersValue.categoryData != ''">
                          <li class="mr-1 inline-block align-items-center bg-theme" > 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              Category: {{filterName('category',filtersValue.categoryData)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.categoryData = '' ; filtersValue.skillData = ''; filterByData()"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>
                        
                        <span v-if="filtersValue.skillData != '' && filtersValue.hideSubCategory == false">
                          <li class="mr-1 inline-block align-items-center bg-theme" > 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              Subcategory: {{filterName('skill',filtersValue.skillData)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.skillData = ''; filterByData()"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>

                        <span v-if="filtersValue.experience != ''">
                          <li class="mr-1 inline-block align-items-center bg-theme" > 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              {{filterName('experience',filtersValue.experience)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.experience = ''; filterByData()"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>

                        <span v-if="filtersValue.certification != ''">
                          <li class="mr-1 inline-block align-items-center bg-theme" v-for="(cert,id) in filtersValue.certification" :key="id"> 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              {{filterName('certification',cert)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('certification',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>

                        <span v-if="filtersValue.talentType != '' && filtersValue.talentType != null">
                          <li class="mr-1 inline-block align-items-center bg-theme" > 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              {{filterName('talent',filtersValue.talentType)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.talentType = null; filterByData()"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>
                        <span v-if="filtersValue.successtype != '' && filtersValue.successtype != null">
                          <li class="mr-1 inline-block align-items-center bg-theme" > 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              {{filterName('success',filtersValue.successtype)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.successtype = null; filterByData()"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span><span v-if="filtersValue.earntype != '' && filtersValue.earntype != null">
                          <li class="mr-1 inline-block align-items-center bg-theme" > 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              {{filterName('earn',filtersValue.earntype)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.earntype = null; filterByData()"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>
                        
                        <span v-if="filtersValue.englishtype != '' && filtersValue.englishtype != null">
                          <li class="mr-1 inline-block align-items-center bg-theme" > 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                              {{filterName('english',filtersValue.englishtype)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.englishtype = null"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>
                        
                        <span v-if="filtersValue.locationData.length > 0">
                          <li class="mr-1 inline-block align-items-center bg-theme" v-for="(loc_data,id) in filtersValue.locationData" :key="id"> 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                               {{loc_data.location}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('locationData',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>

                        <span v-if="filtersValue.otherLang.length > 0">
                          <li class="mr-1 inline-block align-items-center bg-theme" v-for="(lang,id) in filtersValue.otherLang" :key="id"> 
                            <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                             {{filterName('otherLang',lang)}}
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('otherLang',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                            </a>
                          </li>
                        </span>
                        
                        <a href="javascript:void(0);" class="cursor-pointer text-black d-block" @click="clearFilter()" v-if="hideClearBtn">
                          Clear Filter
                        </a>
                      </ul>
                    </b-col>
                  </b-row>
                  
                </div>
              <div v-if="dataStatus">
                <div class="job-card py-2 px-4 pb-4 mb-2 text-theme-hover"  v-for="(data,index) in userData" :key="index" :id="data.jobs_id">
                  <div class="action-btn d-flex align-items-center">
                    <a href="javascript:void(0);" 
                      class="btn btn-secondary br-50 mr-2"
                      :class="(data.favorite_id!= null)?'saved-btn':''"
                      @click="addFavorite(data.login_master_id)"  
                      :id="'favorite-'+data.login_master_id"
                    >
                      <i class="fa fa-heart text-secondary" aria-hidden="true"></i>
                    </a>
                    <button type="button"  class="btn btn-theme btn-block mb-2 w-100 btn-secondary" v-if="isPermissionForClient('client-Invited')"  v-b-modal.invite-job-modal @click="inviteModelData(data)"> Invite to Job </button>
                  </div>
                  <div class="d-flex align-items-normal">
                    <div>
                      <div class="shadow-lg profile pos-rel">
                        <span class="online"></span>
                        <img :src="data.profile_picture_path" alt="" class="rounded-md shadow w-14 h-14">
                      </div>
                    </div>
                    <div class="ml-2">
                      <h5 class="text-black fw-600 mb-1"  v-b-toggle.sidebar-right  @click="sideBarData.userDetails = data; $refs.getUserDetailsData.getSidebarDatas()">{{shortName(data.first_name,data.last_name)}}</h5>
                      <ul class=" align-items-center fz-14 post text-muted mb-2"  v-b-toggle.sidebar-right @click="sideBarData.userDetails = data; $refs.getUserDetailsData.getSidebarDatas()">
                        <li>{{data.tagline}}</li> 
                        <li>
                          {{(data.country_name!='' && data.country_name!= null)?data.country_name: ''}}
                          {{(data.state_name!='' && data.state_name!= null)?', '+data.state_name: ''}}
                          {{(data.city_name!='' && data.city_name!= null)?', '+data.city_name: ''}}
                          {{ (data.role_name!=''&& data.role_name != null)?' | '+data.role_name: '' }}
                        </li> 
                      </ul>
                    </div>
                  </div>

                  <b-row>
                    <b-col xl="3" lg="3" md="3" sm="12">
                      <h5 class="text-black"><b>${{data.hourly_rate}}.00</b> /Day</h5>
                    </b-col>
                    <b-col xl="3" lg="3" md="3" sm="12">
                      <h5 class="text-black" v-if="data.totalEarn >0"><b>${{data.totalEarn}}</b> earned</h5>
                    </b-col>
                    <b-col xl="3" lg="3" md="3" sm="12">
                      <h5 class="text-black" v-if="data.jobSuccessRate > 0"><b>{{data.jobSuccessRate}}%</b> Job Success</h5>
                    </b-col>
                    <b-col xl="3" lg="3" md="3" sm="12" v-if="data.talent_id > 0">
                      <TalentBage :talentQualilty="talentQualilty" :talent_id="data.talent_id"/>
                    </b-col>
                  </b-row>

                  <template v-if="data.about_self_desc!=''">
                    <!-- <vue-read-more-smooth :lines="3" class="mt-2"> -->
                      <p class="fz-14 text-black mb-2 search-description" v-html="data.about_self_desc"> </p>
                    <!-- </vue-read-more-smooth> -->
                    </template>

                  <div class="skill-slider-wrapper mt-3" v-if="data.skillNameCertificate.length > 0">
                    <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0" style="margin-left:-34px!important;" >
                        <slider-frame :slides-per-view="5" >
                          <div>
                            <!-- With the exposed variables and methods it's simple to make your own pagination -->
                            <a href="javascript:void(0)" class="prev-btn text-theme" @click="SlideSkill('topSkill_'+index,'left',index)" style="display:none" :id="'prev_'+index"><i class="fa fa-chevron-left"></i></a>
                            <slider-slides :id="'topSkill_'+index" >
                              <!-- SliderSlide is currently needed for even sizing, but seems redundant so will likely be replaced with Flexbox CSS -->
                              <slider-slide :key="ix" v-for="(skill,ix) in data.skillNameCertificate"   >
                                <li class="mr-1 inline-block align-items-center">{{skill}}</li>
                              </slider-slide>
                            </slider-slides>
                            <a href="javascript:void(0)" class="next-btn text-theme" v-if="data.skillNameCertificate.length > 4" @click="SlideSkill('topSkill_'+index,'right',index)" :id="'next_'+index"><i class="fa fa-chevron-right"></i></a>
                          </div>
                        </slider-frame>
                        
                      </ul>
                  </div>
                  <b-row>
                    <template v-for="(ass, index) in data.associate">
                    <b-col xl="6" lg="6" sm="12"  :key="index" v-if="ass.agency_type == 1">
                      <div class="d-flex align-items-center border br-20 p-2" >
                        <img :src="ass.profile_picture_path" alt="" class="rounded-md w-10 h-10">
                        <div class="ml-2">
                          <h6 class="text-black fw-600 mb-1">Associated with</h6>
                          <p class="mb-0 fz-14 text-muted">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</p>
                          <!-- <p class="mb-0 fz-14 text-muted"><a :href="$router.resolve({name:'agencyPublicProfile', path:'/agency-public-profile', params:{uid:encodedid(ass.login_master_id)}}).href" target="_blank">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</a></p> -->
                        </div>
                      </div>
                    </b-col>
                    </template>
                  </b-row>
                </div>
                <div class="text-center py-4 text-theme" v-if="loaderStatus">
                  <b-spinner type="border" medium></b-spinner>
                </div>
              </div>
              <div v-else>
                <div class="job-card py-8 px-4 pb-4 mb-2 text-center dashboard-empty">
                  <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2 m-auto">
                    <path d="M66.1246 6.34896C71.2699 2.78071 78.0895 2.78071 83.2348 6.34896C86.5425 8.64289 90.6329 9.51233 94.5877 8.76211C100.74 7.59512 106.97 10.3689 110.219 15.7214C112.307 19.1624 115.691 21.6204 119.609 22.5436C125.703 23.9797 130.266 29.0476 131.057 35.2589C131.566 39.252 133.657 42.8736 136.861 45.3106C141.844 49.1014 143.952 55.5872 142.148 61.5833C140.989 65.438 141.426 69.5969 143.361 73.1263C146.372 78.6164 145.659 85.3986 141.573 90.1427C138.946 93.1926 137.653 97.1697 137.986 101.181C138.504 107.421 135.094 113.327 129.431 115.999C125.791 117.717 122.992 120.824 121.665 124.624C119.6 130.536 114.082 134.544 107.822 134.682C103.798 134.77 99.9778 136.471 97.2192 139.402C92.9283 143.962 86.2577 145.38 80.483 142.96C76.7706 141.404 72.5888 141.404 68.8764 142.96C63.1017 145.38 56.4311 143.962 52.1401 139.402C49.3816 136.471 45.5613 134.77 41.537 134.682C35.277 134.544 29.7598 130.536 27.6946 124.624C26.3669 120.824 23.5687 117.717 19.9282 115.999C14.2654 113.327 10.8556 107.421 11.3732 101.181C11.7059 97.1697 10.4136 93.1926 7.78652 90.1427C3.7 85.3986 2.98715 78.6164 5.99803 73.1263C7.93364 69.5969 8.37075 65.438 7.21125 61.5833C5.40762 55.5872 7.51499 49.1014 12.4986 45.3106C15.7024 42.8736 17.7933 39.252 18.3019 35.2589C19.093 29.0476 23.6562 23.9797 29.7508 22.5436C33.6688 21.6204 37.052 19.1624 39.1407 15.7214C42.3898 10.3689 48.6199 7.59512 54.7716 8.76211C58.7264 9.51233 62.8169 8.64289 66.1246 6.34896Z" fill="#F2613C"/>
                    <path d="M68.7901 83.7077H76.827L84.2389 55.3104L86.8286 44.0586H74.5945L72.8978 55.3104L68.7901 83.7077ZM68.8794 104.961C74.0587 104.961 77.6307 100.496 77.6307 96.0311C77.6307 92.1912 75.1303 89.3336 71.2904 89.3336C66.1111 89.3336 62.5391 93.9772 62.5391 98.3529C62.5391 102.282 65.0395 104.961 68.8794 104.961Z" fill="white"/>
                  </svg>
                  <p class="fz-20 fw-600 text-black mb-0">There are no results that match your search</p>
                </div>
              </div>
              <!-- right side bar  -->
              <b-sidebar id="sidebar-right" ref="mySidebar" title="" shadow right backdrop class="sidebar-message bg-white"
                  no-close-on-backdrop>
                  
                  <UserDetails ref="getUserDetailsData" :sideBarData="sideBarData" :urlStatus="true" :pageType="'clientSearch'" :talentQualilty="talentQualilty" @inviteModelData="inviteModelData" />
              </b-sidebar>

              <!-- modal for job invitation -->
              <b-modal centered no-close-on-backdrop id="invite-job-modal" size="lg" title="Invite to job" >
                <div class="flex items-center py-2 mb-4">
                  <a class="flex items-center">
                    <div class="shadow-lg br-50 p-1 pos-rel">
                      <span class="online"></span>
                      <img :src="inviteModelDatas.image" alt="" class="rounded-md shadow w-14 h-14 br-50">
                      <i class="fa fa-circle text-success pos-absolute top-0 right-0 fz-14" aria-hidden="true"></i>
                    </div>
                    <div class="ml-3 cursor-pointer">
                      <h3 class="mb-0 text-black fz-18 fw-600"> {{inviteModelDatas.name}} </h3>
                      <p class="mb-0 fz-16 fw-400 text-muted" style="padding: 0px;"> {{inviteModelDatas.userType}} </p>
                    </div>
                  </a>
                </div>
                <div class="message-wrap">
                  <div class="form-group mb-2">
                    <label class="fz-18 fw-600 mb-2">Message</label>
                    <b-form-textarea
                      id="textarea"
                      v-model="inviteModelDatas.message"
                      placeholder="Hello there!"
                      rows="3"
                      max-rows="6"
                      :disabled="(PostJobList.length > 0) ? false : true"
                    ></b-form-textarea>
                    <div class="error" v-if="invitation_message[0]">{{invitation_message[0]}}</div>
                  </div>
                  <div class="form-group" v-if="PostJobList.length > 0">
                    <label class="fz-18 fw-600 mb-1">Choose a job</label><br>
                    <b-form-select
                      v-model="inviteModelDatas.job_id"
                      :options="PostJobList"
                      text-field="job_title"
                      value-field="jobs_id"
                      @change="checkInvitationsent($event)"
                    ></b-form-select>
                    <div class="error" v-if="invitation_job_id[0]">{{invitation_job_id[0]}}</div>
                  </div>
                  <div class="flex items-center py-2 text-danger" v-if="invitationAlreadySend">
                    <i class="fa fa-exclamation-circle mr-2" aria-hidden="true"></i> Interview in progress
                  </div>
                </div>
                
                <template #modal-footer>
                  <div class="w-100 text-right">
                    <a href="javascript:void(0);" class="text-theme mr-2" @click="resetInvitationModel()">Cancel</a>
                    <b-button
                      v-if="PostJobList.length > 0 && !postnewJob"
                      size="lg"
                      class="btn btn-theme"
                      @click="sendInvitation"
                      :disabled="(invitationAlreadySend == true ) ? true : false "
                    >Save
                    </b-button>
                    <b-button
                      v-else-if="postnewJob"
                      size="lg"
                      class="btn btn-theme"
                      @click="$router.push({name:'postJobInvite',path:'/client/post-job-invite/',params:{uid:'A'+encodedid(inviteModelDatas.user_id)}})"
                      
                      >Complete Your Job Post
                    </b-button>
                    <b-button
                      v-else
                      size="lg"
                      class="btn btn-theme"
                      @click="$router.push({name:'postJobInvite',path:'/client/post-job-invite/',params:{uid:'A'+encodedid(inviteModelDatas.user_id)}})"
                      
                      >Complete Your Job Post
                    </b-button>
                  </div>
                </template>
              </b-modal>

            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
    </div>
  </b-container>
</template>
<script>
  import axios from 'axios'
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  // import Multiselect from 'vue-multiselect'
  // import VueReadMoreSmooth from "vue-read-more-smooth"
  import { mapGetters,mapActions } from "vuex";
  import {SliderFrame, SliderSlides, SliderSlide} from 'vue-dynamic-slider';
  import UserDetails from '../../components/client-search/UserDetails.vue';
  import TalentBage from "../../components/common/TalentBage.vue";

  import $ from 'jquery';
  // https://github.com/xwpongithub/vue-range-slider
  // import 'vue-range-component/dist/vue-range-slider.css';
  // import VueRangeSlider from 'vue-range-component';

  export default {

    mixins: [validationMixin],

    validations: {
      inviteModelDatas:{
          'message':{required},
          'job_id':{required},
      },
    },
    components : {
      // VueReadMoreSmooth,
      TalentBage,
       SliderSlide, SliderSlides, SliderFrame,
      UserDetails
      // VueRangeSlider
      // Multiselect 
    },
    props:{
      // 'search':input,
    },
    data() {
      return {
        busy:false,
        headToken:'',
        userData:[],
        dataStatus: false,
        loaderStatus: true,
        search:'',
        location:'',
        locationData:'',
        hideClearBtn:false,
        titleSearch:'',
        sliderScrollData:[],
        // NEW DATAS 
        categoryData:[],
        skillData:[],
        priceFrom:10,
        priceTo:100,
        filtersValue: {
          talentQualilty:[],
          price:[10,100],
          categoryData:'',
          skillData:'',
          experience:'',
          certification:[],
          talentType:null,
          successtype:null,
          earntype:null,
          hourstype:null,
          englishtype:null,
          locationData:[],
          otherLang:[],
          title:'',
          start_limit:0,
          end_limit:3,
          hideSubCategory:true,
        },
        talentType:[],
        successtype:[],
        earntype:[],
        hourstype:[],
        englishtype:[],
        talentQualilty:[],
        searchLang:'',
        languageData:[],
        experienceLevelData:[],
        certificationData:[],
        inviteModelDatas:{
          'image':'',
          'name':'',
          'userType':'',
          'message':'',
          'job_id':'',
          'user_id':''
        },
        PostJobList:[],
        invitationAlreadySend:false,
        sideBarData:{
          userDetails:[],
          proposalDetails:[], 
          favorite:[],
          jobDetails:[],
          similarjobHistory:[],
          totalEarning:0,
          jobHistory:[],
          education:[],
          jobUnderprocess:[],
          employmentData:[],
          noteData:{
            note:'',
            skill:'',
            tags:[],
          },
        },
        striped: true,
        max: 0,
        SoftSkill: [],
        certificationTypeData:[],
        searchCertification:'',
        postnewJob:false,
      }
    },
    created() {
      this.formatter = value => `$${value}`
    },
    watch: {
        priceFrom() {
          if(parseInt(this.priceFrom) > 0){
            if(parseInt(this.priceFrom) >= parseInt(this.priceTo)){
              this.priceTo = (parseInt(this.priceFrom)+1);
            }
          }else{
            this.priceFrom=1;
          }
          this.filterByData();
        },
        priceTo() {
          if(parseInt(this.priceTo) > 2){
            if(parseInt(this.priceTo) <= parseInt(this.priceFrom)){
              this.priceFrom = (parseInt(this.priceTo)-1);
            }
          }else{
            this.priceTo = 2;
            this.priceFrom=1;
          }
          this.filterByData();
        }
    },
    methods: {
      ...mapActions(["genericAPIPOSTRequest","fetchLanguageList","fetchTalentList","fetchExperienceLevelList","fetchCertificationList"]),
      ...mapActions("global",["fetchQpRoleMasterList"]),
      
      certificationView(_i,type){
        if(type == 'more'){
          $('.'+_i).show();
          $('#'+_i+'-more').hide();
          $('#'+_i+'-less').show();

        }else{
          console.log('else',_i)
          $('.'+_i).hide();
          $('#'+_i+'-more').show();
          $('#'+_i+'-less').hide();
        }
      },
      // this fun is for to reset invitation model
      resetInvitationModel(){
        this.$bvModal.hide('invite-job-modal');
        this.$v.$reset();
        this.invitationAlreadySend = false;
        this.inviteModelDatas={
          'image':'',
          'name':'',
          'userType':'',
          'message':'',
          'job_id':'',
          'user_id':''
        };
      },
      // this fun is for to check invitation send to user or not 
      async checkInvitationsent(_i){
        if(_i == 'newpost'){
          this.invitationAlreadySend = false;
          this.postnewJob=true;
          return false;
        }
        this.postnewJob=false;
        var res = await this.genericAPIPOSTRequest({
          requestUrl:'checkInvitationJob',
          params:{
            job_id:_i,
            invited_user_id:this.inviteModelDatas.user_id
          }
        });
        if(res.length > 0){
          this.invitationAlreadySend = true;
        }else{
          this.invitationAlreadySend = false;
        }
      },
      // this fun is for to send invitation to user
      async sendInvitation(){
        this.$v.inviteModelDatas.$touch();
        if (!this.$v.inviteModelDatas.$invalid) {
          var res  = await this.genericAPIPOSTRequest({
            requestUrl:'sendJobInvitation',
            params:{
              invited_user_id:this.inviteModelDatas.user_id,
              job_id:this.inviteModelDatas.job_id,
              message:this.inviteModelDatas.message
            }
          });
          if(res){
            this.$toastr.s('Invitation Sent Successfully');
            this.resetInvitationModel();
          }
        }
      },
      // this fun is for to assgin modal value
      inviteModelData(_v){
        this.inviteModelDatas.user_id = _v.login_master_id;
        this.inviteModelDatas.image = _v.profile_picture_path;
        this.inviteModelDatas.userType = (_v.profileType == 3)?'Freelancer':'Agency';
        this.inviteModelDatas.name = (_v.first_name!= null && _v.last_name != null)?_v.first_name+' '+_v.last_name:(_v.first_name != null && _v.last_name== null)?_v.first_name:(_v.first_name == null && _v.last_name!= null)?_v.last_name:'';
        
      },

      // this fun is for to get posted Jobs
      async getpostedJobs() {
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "getUserPostedJob",
            params: {'filter':1},
        });  
        if(res.length > 0){
          this.PostJobList = res;
          this.PostJobList.push({'job_title':'Post new Job','jobs_id':'newpost'});
        }
      },

      // this fun is for to add to favorite
      async addFavorite(_i) {
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "addremovefavorite",
              params: {
                  'favorite_user_id': _i
              }
          });
          if (res == "added") {
              document.getElementById('favorite-' + _i).classList.add("saved-btn");
              // document.getElementById('favorites-' + _i).classList.add("saved-btn");
              
              this.$toastr.s('Added to Favorite');
          } else if (res == "remove") {
              document.getElementById('favorite-' + _i).classList.remove("saved-btn");
              // document.getElementById('favorites-' + _i).classList.remove("saved-btn");
              this.$toastr.s('Remove From Favorite');
          }
      },
      
      // this fun is for slide skills
      SlideSkill(id,direction,_i){
        var slider_width = document.querySelector('#'+id).parentElement.scrollWidth;
        var main_width = document.querySelector('#'+id).scrollWidth;
        if(direction =='right'){
          if(this.sliderScrollData[_i] > 0){
            this.sliderScrollData[_i] = this.sliderScrollData[_i]+parseInt(slider_width);
          }else{
            this.sliderScrollData[_i] = parseInt(slider_width);
          }
          if(main_width > this.sliderScrollData[_i]){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft += slider_width;
            // console.log('sliderScrollData',this.sliderScrollData[_i]);
            // console.log('main_width',main_width);
            if(this.sliderScrollData[_i] == main_width){
              document.getElementById('next_'+_i).style.display = 'none';
            }
            document.getElementById('prev_'+_i).style.display = 'block';
          }else if(this.sliderScrollData[_i] >= main_width){
            this.sliderScrollData[_i] = this.sliderScrollData[_i]-parseInt(slider_width);
            document.getElementById('next_'+_i).style.display = 'none';
          }
        }else{
          // currentSlide_position-=slider_width
          this.sliderScrollData[_i] = this.sliderScrollData[_i]-parseInt(slider_width);
          if(this.sliderScrollData[_i] >= 0){
            const conent = document.querySelector('#'+id);
            conent.scrollLeft -= slider_width;
            if(conent.scrollLeft==0){
              document.getElementById('prev_'+_i).style.display = 'none';
            }
            document.getElementById('next_'+_i).style.display = 'block';
          }else if(this.sliderScrollData[_i] < 0){
            document.getElementById('prev_'+_i).style.display = 'none';
            this.sliderScrollData[_i] = this.sliderScrollData[_i]+parseInt(slider_width);
          }
          
        }
        
      },
      // this fun is for to get filter name
      filterName(_t,_i){
        var name;
        if(_t == 'quality'){
          this.talentQualilty.map(data=>{
            if(data.talent_id == _i){
              name = data.talent_title;
              return false;
            }
          });
        }else if(_t == 'category'){
          this.categoryData.map(data=>{
            if (data.qp_role_master_id == _i) {
              name = data.role_name;
            }
          });
        }else if(_t == 'skill'){
          this.skillData.map(data=>{
            if (data.qp_role_skill_master_id == _i) {
              name = data.skill_name;
            }
          });
        }else if(_t == 'talent'){
          this.talentType.map(data=>{
            if (data.value == _i) {
              name = data.title;
            }
          });
        }else if(_t == 'success'){
          this.successtype.map(data=>{
            if (data.value == _i) {
              name = data.title;
            }
          });
        }else if(_t == 'earn'){
          this.earntype.map(data=>{
            if (data.value == _i) {
              name = data.title;
            }
          });
        }else if(_t == 'hours'){
          this.hourstype.map(data=>{
            if (data.value == _i) {
              name = data.title;
            }
          });
        }else if(_t == 'english'){
          this.englishtype.map(data=>{
            if (data.value == _i) {
              name = data.title;
            }
          });
        }else if(_t == 'otherLang'){
          this.languageData.map(data=>{
            if (data.id == _i) {
              name = data.value;
            }
          });
        }else if(_t == 'experience'){
          this.experienceLevelData.map(data=>{
            if (data.experience_id == _i) {
              name = data.title;
            }
          });
        }else if(_t == 'certification'){
          this.certificationTypeData.map(data=>{
            if (data.certification_type_master_id == _i) {
              name = data.certification;
            }
          });
        }
        return name;
      },
      // this fun is for to get skill on change
      changeCategory(_i){
        this.filtersValue.hideSubCategory = true;
        this.categoryData.map(data=>{
          if(data.qp_role_master_id == _i){
            this.skillData = data.skills;
            return false;
          }
        });
      },
      // this fun is for to  change skill
      changeSubcategory(){
        this.filtersValue.hideSubCategory = false;
      },
      
      // this fun is for to get filter data
      async getfilterData(){
        this.fetchQpRoleMasterList();
        this.fetchLanguageList();
        this.fetchTalentList({params:{"talent_type":"Badges"}});
        this.fetchExperienceLevelList();
        this.fetchCertificationList();
        this.talentQualilty = this.getTalentListdata;
        this.categoryData = this.getQrRoleMasterList;
        this.languageData = this.getLanguageListdata;
        this.experienceLevelData = this.getExperienceLevelListdata;
        this.certificationData = this.getCertificationListdata;

        var certificationType = await this.genericAPIPOSTRequest({
            requestUrl: "user/getCertificationType",
            params: {},
        });
        
        this.certificationTypeData = certificationType;
        var res = await this.genericAPIPOSTRequest({
              requestUrl: "getOptionsMaster",
              params: {},
          });  
        if(res){
          res.map(data=>{
            if(data.type == 'talent'){
              this.talentType.push(data);
            }else if (data.type == 'job_success') {
              this.successtype.push(data);
            }else if (data.type == 'earn_amount') {
              this.earntype.push(data);
            }else if (data.type == 'hours') {
              this.hourstype.push(data);
            }else if (data.type == 'english_level') {
              this.englishtype.push(data);
            }
          });
        }else{
          this.$router.push({name: "clientDashboard",path: "/client/dashboard"}).href;
        } 
      },
      
      // this fun is for to search location for filter
      async searchLocation(){
        
        const formData = new FormData()
        formData.append('input', this.location);
        var res = await this.genericAPIPOSTRequest({
            requestUrl: "common/getLocationAll",
            params: formData,
        }); 
        if(res.length > 0 ){
          this.locationData=res;
        }
      },

      // this function is for to get filter data
      async filterByData(){
          this.filtersValue.price = [this.priceFrom,this.priceTo];
          this.filtersValue.start_limit=0;
          this.hideClearBtn= this.checkFilterdata(); 
          this.filtersValue.title=this.titleSearch;
          this.loaderStatus= true;
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getclientsearch",
              params: {
                'search':this.filtersValue,
              },
          });  
          this.userData = [];
          if(res.length > 0){
            var that =this;
            res.map(function(item){ return that.userData.push(item) });
            this.filtersValue.start_limit=this.userData.length;
            this.busy=false;
            this.loaderStatus= false;
            this.dataStatus= true;
          }else{
            this.busy=true;
            this.loaderStatus= false;
            if(this.userData.length == 0) this.dataStatus= false;
          }
      },
      //  this fun for to get post data 
      async getData(){
        if(this.busy)return true;
        this.busy=true;

        this.loaderStatus= true;
        var  passApidata= {
          'search':this.filtersValue
        };
        axios.post(this.$store.state.baseUrl+'getclientsearch',passApidata,{headers: this.headToken}).then((response)=>{
          if(response.data.status ==  true){
            var that=this;
            response.data.result.map(function(item){ return  that.userData.push(item)  } );
            this.filtersValue.start_limit=this.userData.length;
            this.busy=false;
            if(this.userData.length > 0){
              this.dataStatus= true;
            }
          }else if(response.data.status ==  false && this.userData.length > 0){
            this.dataStatus= true;
          }else{
            this.userData=[];
            this.dataStatus= false;
          }
          this.loaderStatus= false;
        });

      },
      
      // this fun for to check filter array have value
      checkFilterdata(){
        if(this.filtersValue.talentQualilty.length > 0){
          return true; 
        }else if(this.filtersValue.categoryData !=''){
          return true; 
        }else if(this.filtersValue.skillData!=''){
          return true; 
        }else if(this.filtersValue.talentType !='' && this.filtersValue.talentType != null){
          return true; 
        }else if(this.filtersValue.successtype !='' && this.filtersValue.successtype != null){
          return true; 
        }else if(this.filtersValue.earntype !='' && this.filtersValue.earntype != null){
          return true; 
        }else if(this.filtersValue.hourstype !='' && this.filtersValue.hourstype != null){
          return true; 
        }else if(this.filtersValue.englishtype !='' && this.filtersValue.englishtype != null){
          return true; 
        }else if(this.filtersValue.experience !='' && this.filtersValue.experience != null){
          return true; 
        }else if(this.filtersValue.certification.length > 0){
          return true; 
        }else if(this.filtersValue.locationData.length > 0){
          return true; 
        }else if(this.filtersValue.otherLang.length > 0){
          return true; 
        }else{
          return false;
        }
      },
      // this fun is for to Remove select category
      removeFilterValue(key,index){
        if(key=='quality'){
          this.filtersValue.talentQualilty.splice(index, 1);
        }
        if(key=='locationData'){
          this.filtersValue.locationData.splice(index, 1); 
        }
        if(key == 'otherLang'){
          this.filtersValue.otherLang.splice(index, 1)
        }
        if(key == 'certification'){
          this.filtersValue.certification.splice(index, 1)
        }
        this.hideClearBtn= this.checkFilterdata();
        this.filterByData();
      },
      // this fun is for to clear all filter value
      clearFilter(){
        this.hideClearBtn=false;
        this.priceFrom =10;
        this.priceTo =100;
        this.filtersValue = {
          talentQualilty:[],
          price:[0,100],
          categoryData:'',
          skillData:'',
          experience:'',
          certification:[],
          talentType:null,
          successtype:null,
          earntype:null,
          hourstype:null,
          englishtype:null,
          locationData:[],
          otherLang:[],
          title:'',
          start_limit:0,
          end_limit:3,
        };
        this.userData = [];
        this.skillData=[];
        this.getData();
      },
      // this fun is for copy url
      copyClipboad(){
        this.$refs.clone.focus();
        document.execCommand('copy');
      },
      
    },
    computed:{
      ...mapGetters("global", ["getQrRoleMasterList"]),
      ...mapGetters(["getLanguageListdata","getTalentListdata","getExperienceLevelListdata","getCertificationListdata"]),
      invitation_message() {
          const errors = []
          if (!this.$v.inviteModelDatas.message.$dirty) return errors
          !this.$v.inviteModelDatas.message.required && errors.push('Message is required')
          return errors
      },
      invitation_job_id() {
          const errors = []
          if (!this.$v.inviteModelDatas.job_id.$dirty) return errors
          !this.$v.inviteModelDatas.job_id.required && errors.push('Job is required')
          return errors
      },
      filterCategory(){
      // function to compare names
        function compare(a, b) {
          if (a.job_title < b.job_title) return -1;
          if (a.job_title > b.job_title) return 1;
          return 0;
        }
        return this.categoryData.filter(user => {
            return user.role_name.toLowerCase().includes(this.search.toLowerCase());
        }).sort(compare);
      },

      languagefilterData(){
      // function to compare names
        function compare(a, b) {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return 0;
        }
        if(this.languageData.length > 0){
          return this.languageData.filter(data => {
              return data.value.toLowerCase().includes(this.searchLang.toLowerCase());
          }).sort(compare);
        }else{
          return [];
        }
      },
      // function to total burget amount
      totalEarning(){
            var amount=0;
            this.sideBarData.jobHistory.map(data => {
                amount+=parseInt(data.cost);
            });
            return amount;
        },
      
      filterCertification(){
        var that =this;
        return that.certificationData.filter(function(el) {
            // return el.certification_type_master.map(function(certifi_type) {
            //   return certifi_type.certification.toLowerCase().includes(that.searchCertification.toLowerCase());
            // });
            return el.certification.toLowerCase().includes(that.searchCertification.toLowerCase());
        });
      },
    },
    mounted() {
      if(this.$route.params.input != undefined){
        this.titleSearch = this.$route.params.input;
        this.filtersValue.title = this.titleSearch;
      }
      // this is header for api
      this.headToken = { "Authorization": 'Bearer '+this.$store.state.currentUserData.token };
      
      // this fun is for to get filter data
      this.getfilterData();

      // this function is for to get all active jobs
      this.getData();

      //this fun is for to get posted job data
      this.getpostedJobs();
    },  
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
  .img-associate {
    width: 50px;
    height: 50px;
  }
  .bottom-0{bottom:0px;}
  .right-0{right:0px;}
  .irs--round .irs-bar {
    background-color: #00C2C0;
  }

  .irs--round .irs-handle {
    background-color: #00C2C0;
    border-color: #00C2C0;
    box-shadow: 0px 0px 0px 5px rgba(0, 194, 192, 0.2);
  }

  .irs--round .irs-handle.state_hover, 
  .irs--round .irs-handle:hover {
    background-color: #00C2C0;
  }

  .irs--round .irs-handle {
    width: 16px;
    height: 16px;
    top: 29px
  }

  .irs--round .irs-from, 
  .irs--round .irs-to, 
  .irs--round .irs-single {
    background-color: transparent;
    color: #666666;
  }

  .irs--round .irs-from:before, 
  .irs--round .irs-to:before, 
  .irs--round .irs-single:before,
  .irs--round .irs-min, 
  .irs--round .irs-max {
    display: none;
  }
  .slider-tooltip{background-color: #F2613B!important; border: #F2613B!important;}
  .slider-process{background-color: #F2613B!important; border: #F2613B!important;}
  .bg-white{background-color: #fff;}
  body{font-family: 'Source Sans Pro', sans-serif!important;}
  .text-muted{color:#979797!important;}
  .ralative {padding-bottom:0px;}
  .theme-bg{background-color: #FFF6F4!important;}
  .bg-none{background-color:transparent;}
  .bordered{border-bottom: 1px solid #EBEBEB!important;border-right: 1px solid #EBEBEB;}
  .bordered-right{border-right: 1px solid #EBEBEB;}
  .br-20{border-radius: 20px;}
  .border-none{border:0px!important;}
  .search-wrap .br-50{border-radius:50%!important;}
  .search-wrap .fz-14{font-size:14px;}
  .search-wrap .card{border-radius: 20px!important;border: 0px;background-color: transparent;}
  .search-wrap .card-body{border-radius: 20px;}
  .search-wrap .card-body{border-radius:0 0 20px 20px;padding:0px;}
  .search-wrap .card-header{border-radius:0!important;background-color: transparent;text-align: left;border-radius:20px 20px 0 0!important;}
  .search-wrap .my-proposal ul{margin-left:-32px;}
  .search-wrap .tabs .card{border-radius: 20px!important;border: 0px;background-color: #fff;}
  .search-wrap .card-section select{-webkit-appearance: menulist !important; /* override vuetify style */-moze-appearance: menulist !important; /* override vuetify style */appearance: menulist !important; /* override vuetify style */}
  .fz-16{font-size:16px;}
  .fz-18{font-size:18px;}
  .fz-24{font-size:24px;}
  .fw-600{font-weight:600;}
  .mb-23{margin-bottom:23px;}
  .no-bottom-border{border-bottom:0px!important;}
  .border-top-0{border-top:0px!important;}
  .fz-34{font-size:34px;}
  .offer-wrap .card-body{padding:0px;}
  .mb-50{margin-bottom:50px!important;}
  p {margin-top: 0!important;margin-bottom: 1rem!important;}
  h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {margin-top: 0!important;margin-bottom: 0.5rem!important;font-weight: 500!important;line-height: 1.2!important;}
  dl, ol, ul {margin-top: 0!important;margin-bottom: 1rem!important;}
  ol, ul {padding-left: 2rem!important;}
  hr {margin: 1rem 0!important;}  
  .fz-30{font-size:26px!important;}
  .card-section .post {margin-left: -32px;}
  .card-section .tags span {background: #FCFCFC;border: 1px solid #d8d8d8;border-radius: 100px;padding: 1px 15px!important;font-size: 14px;--skill-height: 30px;margin: 0 5px 10px 0;padding: 0 10px;background-color: var(--skill-bg);border-radius: 12px;font-size: 12px;line-height: 2;cursor: default;}
  .btn-edit:hover{padding:8px 16px!important;background-color: #f2613da6!important;}
  .card-section .btn-social{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;font-size: 14px;line-height: 18px;text-align: center;color: #000000;background: #FFFFFF;border: 1px solid #000000;border-radius: 100px;text-align:center;width:100%;}
  .search-wrap .custom-control-label{background-color:transparent;}
  .border-none{border:0px;}
  .bg-theme{background-color:#F2613C!important;}
  .pos-relative{position:relative;}
  .search-bar .bordered{border:1px solid #D3D3D3!important;border-radius:4px!important;}
  .unread-bg{background-color: #eeeeee66!important;}
  /*.freelancer-wrap .job-card:hover h5{color:#646464!important;}*/
  .freelancer-wrap .job-card:hover {background-color: #eeeeee66!important;}
  .up-skill-container {
      --token-btn-gradient: transparent,var(--scroll-gradient-base,var(--semi-transparent-inverse));
      display: grid;
      align-items: center;
  }
  .bg-hover-theme:hover{background-color:#FFF6F4!important;}
  .up-skill-container {
      --token-btn-gradient: transparent,var(--scroll-gradient-base,var(--semi-transparent-inverse));
      display: grid;
      align-items: center;
  }
  .up-skill-wrapper {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 5px 0 15px;
      scrollbar-width: none;
  }
  .up-skill-container .up-btn, .up-skill-container .up-skill-wrapper {
      grid-row: 1/-1;
  }
  .up-skill-badge {
      margin-bottom: 0;
      flex: none;
      cursor: pointer;
  }
  .up-skill-badge {
      --skill-height: 30px;
      --skill-color:#000;
      --skill-bg: #fff;
      display: inline-flex;
      align-items: center;
      height: var(--skill-height);
      margin: 0 5px 10px 0;
      padding: 0 10px;
      color: #000;
      background-color: #fff;
      border-radius: 15px;
      font-size: 13px;
      line-height: 1;
      cursor: default;
      border:1px solid #F2613C;
      cursor:pointer;
  }
  .up-skill-container .up-btn:before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 100%;
      width: var(--ws-lg);
  }
  .up-skill-container .up-btn.up-btn-next {
      padding-left: 10px;
  }
  .up-skill-container .up-btn {
      position: relative;
      margin: 4px 0 15px;
      height: 100%;
      padding: 0;
  }
  .up-btn-link {
      padding: var(--btn-link-padding);
      background-color: transparent;
      color: var(--link-color);
      text-transform: none;
      font-weight: var(--btn-weight);
      line-height: var(--font-size-base);
      box-shadow: none!important;
      border-color: transparent;
      border-radius: 0;
      max-height: unset;
  }
  .up-card-section {
      --card-padding-y: 20px;
  }
  .skill-slider-wrapper{
      position: relative;
  }
  .prev-btn{
      position: absolute;
      top: -6px;
      z-index: 1;
      background-color: #fff;
      padding: 8px;
      left: 0px;
  }
  .skill-slider-wrapper .next-btn{
      position: absolute;
      top: -6px;
      z-index: 1;
      background-color: #fff;
      padding: 8px;
      right: 0px;
  }
  .skill-slider-wrapper .dynamic-slider-slide{
      margin:0 5px;text-align:center;
  }
  .skill-slider-wrapper .dynamic-slider-slide li{width: 100%;max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  .client-search .talent-quality .custom-control-label:after, .custom-control-label:before{top: 0.1rem!important;}
  .client-search .talent-type .custom-control-label:before{display:flex;align-items:center;top: 9px!important;width: 15px!important;height: 15px!important;}
  .freelancer-wrap.right-wrap .btn-secondary{width: 50px;height: 42px;padding: 9px 12px;}
  .client-search .progress{width:100%!important;}
  .client-search .talent-type .custom-radio .custom-control-input:checked~.custom-control-label::before{top: 9px!important;width: 15px!important;height: 15px!important;}
  .client-search .talent-type span{font-size:16px!important;color:#666!important;font-weight:600!important;}

  .client-search .job-success .custom-control-label:before{display:flex;align-items:center;top: 9px!important;width: 15px!important;height: 15px!important;}
  .client-search .job-success .custom-radio .custom-control-input:checked~.custom-control-label::before{top: 9px!important;width: 15px!important;height: 15px!important;}
  .client-search .job-success span{font-size:16px!important;color:#666!important;font-weight:600!important;}

  .client-search .earn-amnt .custom-control-label:before{display:flex;align-items:center;top: 9px!important;width: 15px!important;height: 15px!important;}
  .client-search .earn-amnt .custom-radio .custom-control-input:checked~.custom-control-label::before{top: 9px!important;width: 15px!important;height: 15px!important;}
  .client-search .earn-amnt span{font-size:16px!important;color:#666!important;font-weight:600!important;}

  .client-search .eng-level .custom-control-label:before{display:flex;align-items:center;top: 9px!important;width: 15px!important;height: 15px!important;}
  .client-search .eng-level .custom-radio .custom-control-input:checked~.custom-control-label::before{top: 9px!important;width: 15px!important;height: 15px!important;}
  .client-search .eng-level span{font-size:16px!important;color:#666!important;font-weight:600!important;}
  .certification-drop input ~ label:before{display:none;}
  .certification-drop label{font-size:16px;font-weight:500;cursor:pointer;margin-bottom:5px;}
  .certification-drop .form-check-input:checked {
      background-color: #f06244;
      border-color: #f06143;
  }
  .certification-scroll{
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>