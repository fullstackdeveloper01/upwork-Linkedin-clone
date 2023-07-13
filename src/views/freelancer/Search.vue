  <template>
    <b-container>
      <div
      v-infinite-scroll="getData"
      :infinite-scroll-disabled="busy"
      infinite-scroll-distance="5">
      <b-row class="mt-100 search-wrap mb-50">
        <b-col xl="3" lg="3" md="12">
          <h4 class="mb-3 fz-30 fw-500 text-black"><b>Filter By</b></h4>
          <b-card-group deck>
            <b-card>
              <template>
                <div class="accordion border-none" role="tablist">
                  <b-card no-body class="mb-1">

                    <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                      <div class="d-md-flex collapsed" block v-b-toggle.accordion-6 variant="info">
                        <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Hours per week</a>
                        <div class="ml-auto">
                          <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                        </div>
                      </div>
                    </b-card-header>
                    <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text v-if="employmentTypeData.length > 0">
                          <b-form-checkbox 
                            v-for="(emp, id) in employmentTypeData"
                            :key="id"  
                            v-model="filtersValue.hoursperweek"
                            class="mb-2 mt-2"
                            :value="emp.employment_id"
                            @change  ="filterByData()"
                          >
                          {{emp.text}}
                          </b-form-checkbox>
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>

                    <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                      <div class="d-md-flex collapsed" block v-b-toggle.accordion-1 variant="info">
                        <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Experience Level</a>
                        <div class="ml-auto">
                          <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                        </div>
                      </div>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>
                          <b-form-checkbox 
                            v-for="(exp_level, id) in ExperienceLevelData"
                            :key="id"
                            v-model="filtersValue.experienceLevel"
                            class="mb-2 mt-2"
                            :value="exp_level"
                            @change  ="filterByData()"
                          >
                            {{exp_level.title}}
                          </b-form-checkbox>

                        
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>

                    <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                      <div class="d-md-flex" block v-b-toggle.accordion-2 variant="info">
                        <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Number of proposals</a>
                        <div class="ml-auto">
                          <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                        </div>
                      </div>
                    </b-card-header>
                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>
                          <b-form-checkbox
                            v-model="filtersValue.numberOfProposal"
                            id="checkbox-4"
                            name="checkbox-4"
                            class="mb-2 mt-2"
                            value="lessthan_5"
                            @change ="filterByData()"
                          >
                            Less than 5
                          </b-form-checkbox>

                          <b-form-checkbox
                            v-model="filtersValue.numberOfProposal"
                            id="checkbox-5"
                            name="checkbox-5"
                            class="mb-2"
                            value="5_to_10"
                            @change ="filterByData()"

                          >
                            5 to 10
                          </b-form-checkbox>

                          <b-form-checkbox
                            v-model="filtersValue.numberOfProposal"
                            id="checkbox-6"
                            name="checkbox-6"
                            class="mb-2"
                            value="10_to_15"
                            @change ="filterByData()"

                          >
                            10 to 15 
                          </b-form-checkbox>

                          <b-form-checkbox
                            v-model="filtersValue.numberOfProposal"

                            id="checkbox-8"
                            name="checkbox-8"
                            class="mb-2"
                            value="15_to_20"
                            @change ="filterByData()"

                          >
                            15 to 20 
                          </b-form-checkbox>
                          <b-form-checkbox
                            v-model="filtersValue.numberOfProposal"

                            id="checkbox-9"
                            name="checkbox-9"
                            class="mb-2"
                            value="morethan_20"
                            @change ="filterByData()"

                          >
                            More than 20 
                          </b-form-checkbox>
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>

                    <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                      <div class="d-md-flex" block v-b-toggle.accordion-3 variant="info">
                        <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Category</a>
                        <div class="ml-auto">
                          <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                        </div>
                      </div>
                    </b-card-header>
                    <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body class="pos-relative">
                        <div class="input-group search-bar mt-2">
                          <input type="text" class="form-control bordered" v-model="search" placeholder="Search for jobs" aria-describedby="basic-addon2">
                          <div class="tt-menu" >
                            <b-form-group
                              v-slot="{ ariaDescribedby }"
                            >
                              <b-form-checkbox
                                v-for="(category,id) in filterCategory"
                                v-model="filtersValue.selectedCategoryData"
                                :key="id"
                                :value="category"
                                :aria-describedby="ariaDescribedby"
                                @change ="filterByData()"
                              >
                                {{ category.role_name }}
                              </b-form-checkbox>
                            </b-form-group>
                          </div>
                        </div>
                        
                      </b-card-body>
                    </b-collapse>

                    <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                      <div class="d-md-flex" block v-b-toggle.accordion-4 variant="info">
                        <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Project Length</a>
                        <div class="ml-auto">
                          <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                        </div>
                      </div>
                    </b-card-header>
                    <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text v-if="projectLengthData.length > 0">
                          <b-form-checkbox
                            v-for="(pro_length , id) in projectLengthData"
                            :key="id"
                            v-model="filtersValue.projectLength"
                            class="mb-2 mt-2"
                            :value="pro_length"
                            @change ="filterByData()"

                          >
                            {{pro_length.title}}
                          </b-form-checkbox>

                        </b-card-text>
                      </b-card-body>
                    </b-collapse>

                    <b-card-header header-tag="header" class="py-3 px-1" role="tab">
                      <div class="d-md-flex" block v-b-toggle.accordion-5 variant="info">
                        <a href="javascript:void(0);" class="fz-16 fw-600 text-black">Inspection Location</a>
                        <div class="ml-auto">
                          <i class="fa fa-chevron-down fz-14" aria-hidden="true"></i>
                        </div>
                      </div>
                    </b-card-header>
                    <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="input-group search-bar mt-4">
                          <div class="tt-menu" style="position: absolute;top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 10px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                          <input type="text" class="form-control border-none" v-model="location" placeholder="Search for Location" aria-describedby="basic-addon2" v-on:keyup="searchLocation()">
                            <b-form-group
                              v-slot="{ ariaDescribedby }"
                            >
                              <b-form-checkbox
                                v-for="(loc,id) in locationData"
                                :key="id"
                                :value="loc"
                                :aria-describedby="ariaDescribedby"
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

                  </b-card>
                </div>
              </template>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col xl="9" lg="9" md="12">
          <b-card no-body class="freelancer-wrap mt-12 bg-white">
            <ul class="nav nav-pills mb-3 py-2 px-4" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-home" aria-selected="true" v-on:click="getData()" >Search </button>
              </li>
              <a href="javascript:void(0);" @click="$router.push('/saved-jobs')">
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Saved Jobs <span class="badge badge-secondary br-50" v-html="(proposalDetails.saved_job > 0)?proposalDetails.saved_job:''"></span></button>
              </li>
              </a>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div class="search-filter-wrapper px-4 border-bottom pb-3 mb-3">
                    <b-row>
                      <b-col xl="12" lg="12" md="12">
                        <div class="input-group search-bar">
                          <input type="text" class="form-control border-none" v-model="titleSearch" @keyup="filterByData()" placeholder="Search for jobs" aria-describedby="basic-addon2">
                          <span class="input-group-text bg-white" id="basic-addon2">
                            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9689 5.13525C16.0046 5.13525 17.9184 5.92799 19.3579 7.36746C20.7973 8.8069 21.59 10.7207 21.5901 12.7564C21.5901 14.7921 20.7973 16.706 19.3579 18.1454C17.9184 19.5849 16.0046 20.3776 13.9689 20.3776C11.9332 20.3776 10.0193 19.5849 8.57987 18.1454C7.14039 16.706 6.34766 14.7921 6.34766 12.7564C6.34766 10.7207 7.14039 8.8069 8.57987 7.36746C10.0193 5.92799 11.9331 5.13525 13.9689 5.13525ZM7.80186 12.7564C7.80186 16.1569 10.5683 18.9234 13.9688 18.9234C17.3693 18.9234 20.1358 16.1569 20.1358 12.7564C20.1358 9.35594 17.3694 6.58946 13.9689 6.58946C10.5684 6.58946 7.80186 9.35594 7.80186 12.7564Z" fill="#F2613C"/>
                              <path d="M24.1347 21.8942L19.3548 17.1143C19.0708 16.8304 18.6104 16.8304 18.3265 17.1143C18.0425 17.3983 18.0425 17.8587 18.3265 18.1426L23.1063 22.9225C23.2483 23.0645 23.4344 23.1355 23.6205 23.1355C23.8066 23.1355 23.9927 23.0645 24.1347 22.9225C24.4186 22.6385 24.4186 22.1782 24.1347 21.8942Z" fill="#F2613C"/>
                            </svg>
                          </span>
                        </div>
                      </b-col>
                      <!-- <b-col xl="2" lg="2" md="12">
                        <b-button class="btn btn-theme w-100" disabled><i class="fa fa-envelope" aria-hidden="true"></i> Save Search</b-button>
                      </b-col> -->
                      <b-col xl="12" lg="12" md="12">
                        <ul class="inline-block align-items-center fz-14 post tags mb-0">
                          <span v-if="filtersValue.hoursperweek.length > 0">
                            <li class="mr-1 inline-block align-items-center bg-theme" v-for="(expLevel,id) in filtersValue.hoursperweek" :key="id"> 
                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="expLevel==1">
                               Adhoc - Less than 30 hrs/week
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('hoursperweek',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>
                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="expLevel==2">
                                 Residence - More than 40 hrs/week
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('hoursperweek',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>
                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="expLevel==3">
                                 Residence - More than 48 hrs/week
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('hoursperweek',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>
                            </li>
                          </span>
                          <span v-if="filtersValue.experienceLevel.length > 0">
                            <li class="mr-1 inline-block align-items-center bg-theme" v-for="(expLevel,id) in filtersValue.experienceLevel" :key="id"> 
                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                {{expLevel.title}}
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('experienceLevel',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>
                            </li>
                          </span>
                          <span v-if="filtersValue.numberOfProposal.length > 0">
                            <li class="mr-1 inline-block align-items-center bg-theme" v-for="(n_proposal,id) in filtersValue.numberOfProposal" :key="id"> 
                              
                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="n_proposal == 'lessthan_5'">
                                Less than 5
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('numberOfProposal',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>

                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="n_proposal == '5_to_10'">
                                5 to 10 
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('numberOfProposal',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>

                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="n_proposal == '10_to_15'">
                                10 to 15 
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('numberOfProposal',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>

                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="n_proposal == '15_to_20'">
                                15 to 20 
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('numberOfProposal',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>

                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white" v-if="n_proposal == 'morethan_20'">
                                More than 20 
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('numberOfProposal',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>

                            </li>
                          </span>
                          <span v-if="filtersValue.selectedCategoryData.length > 0">
                            <li class="mr-1 inline-block align-items-center bg-theme" v-for="(cat_data,id) in filtersValue.selectedCategoryData" :key="id"> 
                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                 {{cat_data.role_name}}
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('selectedCategoryData',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                              </a>
                            </li>
                          </span>
                          <span v-if="filtersValue.projectLength.length > 0">
                            <li class="mr-1 inline-block align-items-center bg-theme" v-for="(pro_length,id) in filtersValue.projectLength" :key="id"> 
                              <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                {{pro_length.title}}
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('projectLength',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
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
                          
                          <a href="javascript:void(0);" class="cursor-pointer text-black d-block" @click="clearFilter()" v-if="hideClearBtn">
                            Clear Filter
                          </a>
                        </ul>
                      </b-col>
                    </b-row>
                    <div class="d-md-flex align-items-center mt-2">
                      <h4 class="fz-16 fw-600 mb-0 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2613B" class="bi bi-rss mr-2" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                          <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"/>
                        </svg>
                        {{proposalDetails.filterJobcount}} jobs found
                      </h4>
                      <div class="ml-auto d-flex align-items-center">
                        <label class="mr-2">Sort: </label>
                        <b-form-select v-model="filtersValue.sort" :options="sortoptions" @change="filterByData()" class="mt-0"></b-form-select>
                      </div>
                    </div>
                  </div>
                <div v-if="dataStatus">
                  <div class="job-card py-2 px-4 pb-4 mb-2 text-theme-hover"  v-for="(data,index) in postData" :key="index" :class="(data.readStatus!=1)?'unread-bg':''" :id="data.jobs_id">
                    <div class="action-btn">
                      <button type="button" v-if="filterValue!=10" class="btn btn-secondary br-50 mr-1 btn-like" v-on:click="dislikePost(data.jobs_id)">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_2511_17183)">
                          <path d="M17.3943 5.88297C17.7631 6.35349 17.9401 6.85788 17.9175 7.37733C17.8949 7.94947 17.6389 8.3974 17.4281 8.67218C17.6728 9.28197 17.7669 10.2418 16.9501 10.9871C16.3516 11.5329 15.3353 11.7776 13.9275 11.7098C12.9376 11.6647 12.1094 11.4802 12.0756 11.4727H12.0718C11.8836 11.4388 11.6841 11.3974 11.4808 11.3522C11.4658 11.5931 11.5072 12.1916 11.9514 13.5392C12.4783 15.1427 12.4482 16.3698 11.8535 17.1904C11.2286 18.0524 10.2312 18.1201 9.93755 18.1201C9.65524 18.1201 9.39552 18.0034 9.21108 17.7889C8.79326 17.3033 8.8422 16.4074 8.89489 15.9934C8.39803 14.6609 7.00531 11.3936 5.82714 10.4865C5.80456 10.4714 5.78574 10.4526 5.76692 10.4338C5.42062 10.0687 5.18724 9.67344 5.02915 9.32714C4.80707 9.44759 4.55487 9.51535 4.28385 9.51535H1.98775C1.122 9.51535 0.421875 8.81146 0.421875 7.94947V1.83278C0.421875 0.967037 1.12576 0.266912 1.98775 0.266912H4.28385C4.61886 0.266912 4.93128 0.372307 5.18724 0.552984L6.07181 0.44759C6.20732 0.428768 8.61635 0.123875 11.0894 0.17281C11.5373 0.138931 11.9589 0.12011 12.3504 0.12011C13.0241 0.12011 13.6113 0.172808 14.1007 0.278204C15.2525 0.522871 16.0392 1.01221 16.4382 1.73115C16.7431 2.28071 16.7431 2.82651 16.6941 3.17281C17.4432 3.85035 17.5749 4.59941 17.5486 5.12639C17.5335 5.43128 17.4658 5.691 17.3943 5.88297ZM1.98775 1.28322C1.68285 1.28322 1.43819 1.53165 1.43819 1.83278V7.95324C1.43819 8.25813 1.68662 8.5028 1.98775 8.5028H4.28385C4.58875 8.5028 4.83342 8.25437 4.83342 7.95324V1.83655C4.83342 1.53165 4.58498 1.28699 4.28385 1.28699H1.98775V1.28322ZM16.4306 6.32338C16.2726 6.15775 16.2424 5.90556 16.3629 5.70982C16.3629 5.70606 16.5172 5.44257 16.536 5.08122C16.5624 4.58812 16.3253 4.15148 15.8284 3.77883C15.6515 3.64332 15.58 3.40995 15.6552 3.19916C15.6552 3.19539 15.8171 2.69853 15.5536 2.22802C15.3014 1.77632 14.7406 1.45261 13.8899 1.27193C13.2086 1.12513 12.2826 1.09878 11.1458 1.18912C11.1308 1.18912 11.112 1.18912 11.0931 1.18912C8.67281 1.13642 6.22614 1.45261 6.19979 1.45637H6.19602L5.81585 1.50154C5.83843 1.60694 5.84973 1.71986 5.84973 1.83278V7.95324C5.84973 8.11509 5.82338 8.27319 5.77821 8.41999C5.84596 8.67218 6.03417 9.23304 6.47833 9.71108C8.16842 11.0511 9.82086 15.5718 9.89238 15.7675C9.9225 15.8466 9.93002 15.9332 9.91497 16.0197C9.85098 16.4413 9.87356 16.957 9.9639 17.1113C10.1634 17.1076 10.7017 17.0511 11.0254 16.6032C11.4093 16.0724 11.3943 15.1239 10.9802 13.8667C10.3478 11.9507 10.2951 10.9419 10.7958 10.4978C11.0442 10.2757 11.3754 10.2644 11.6163 10.351C11.846 10.4037 12.0643 10.4488 12.2713 10.4827C12.2864 10.4865 12.3052 10.4903 12.3202 10.494C13.4758 10.7462 15.5461 10.9005 16.265 10.2456C16.8748 9.6885 16.4419 8.95073 16.393 8.87168C16.2537 8.66089 16.2951 8.38611 16.4833 8.21673C16.4871 8.21296 16.8823 7.84031 16.9012 7.33969C16.9162 7.00468 16.7581 6.66215 16.4306 6.32338Z" fill="black"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_2511_17183">
                          <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0.171875 18.1201)"/>
                          </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <button type="button" v-if="data.action == 3" class="btn btn-secondary br-50 btn-archive saved-btn" :id="'res_'+data.jobs_id" v-on:click="savePost(data,index)">
                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.82903 0.620117H11.997C12.6246 0.620117 13.1542 1.12649 13.1542 1.77727L13.1542 16.8113C13.1542 16.8115 13.1542 16.8116 13.1542 16.8118C13.1524 17.5271 12.2615 17.9031 11.7348 17.3707L11.7329 17.3688L7.8604 13.4974C7.35368 12.9738 6.47239 12.9738 5.96568 13.4974L2.0932 17.3688L2.09124 17.3707C1.56473 17.903 0.67387 17.5274 0.671875 16.8118V1.77727C0.671875 1.12649 1.20151 0.620117 1.82903 0.620117Z" stroke="black"/>
                        </svg>
                      </button>
                      <button type="button" v-else class="btn btn-secondary br-50 btn-archive" :id="'res_'+data.jobs_id" v-on:click="savePost(data,index)">
                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.82903 0.620117H11.997C12.6246 0.620117 13.1542 1.12649 13.1542 1.77727L13.1542 16.8113C13.1542 16.8115 13.1542 16.8116 13.1542 16.8118C13.1524 17.5271 12.2615 17.9031 11.7348 17.3707L11.7329 17.3688L7.8604 13.4974C7.35368 12.9738 6.47239 12.9738 5.96568 13.4974L2.0932 17.3688L2.09124 17.3707C1.56473 17.903 0.67387 17.5274 0.671875 16.8118V1.77727C0.671875 1.12649 1.20151 0.620117 1.82903 0.620117Z" stroke="black"/>
                        </svg>
                      </button>
                    </div>
                    <h5 class="text-black fw-600"  v-b-toggle.sidebar-right v-on:click="postDetailsclick(data.jobs_id)">{{data.job_title}}</h5>
                    
                    <ul class="d-md-flex align-items-center fz-14 post text-muted mb-2"  v-b-toggle.sidebar-right v-on:click="postDetailsclick(data.jobs_id)">
                      <li>Category-{{data.quality_inspector}}</li> 
                      <li class="d-none d-sm-none d-md-block d-lg-block d-lg-block">|</li> 
                      <li>Location- {{data.country_name+', '+data.state_name+', '+data.city_name}}</li> 
                      <li class="d-none d-sm-none d-md-block d-lg-block d-lg-block">|</li> 
                      <li>Posted {{data.time}}</li>
                    </ul>
                    <vue-read-more-smooth :lines="3" class="mt-2">
                      <p class="fz-14 text-black mb-2" v-html="data.scope_of_work"  v-b-toggle.sidebar-right v-on:click="postDetailsclick(data.jobs_id)"> </p>
                    </vue-read-more-smooth>
                    <p class="fz-14 text-black">Client Location - <span class="text-muted"  v-b-toggle.sidebar-right v-on:click="postDetailsclick(data.jobs_id)">{{data.client_country}}</span></p>
                    <div class="skill-slider-wrapper mt-5">
                      <!-- <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0" style="margin-left:0px!important;">
                        <slider-frame>
                          <div slot-scope="{ next, prev}">
                            <div class="prev-btn" @click="prev"><i class="fa fa-chevron-left"></i></div>
                            <slider-slides>
                              <slider-slide :key="ix" v-for="(skill,ix) in data.skill_name" >
                                <li class="mr-1 inline-block align-items-center">{{skill}}</li>
                              </slider-slide>
                            </slider-slides>
                            <div class="next-btn" @click="next"><i class="fa fa-chevron-right"></i></div>
                          </div>
                        </slider-frame>
                      </ul> -->
                      <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0" style="margin-left:0px!important;">
                          <!-- <li class="mr-1 inline-block align-items-center" v-for="skill in pdata.skill_name" :key="skill.id"> {{skill}} </li> -->
                          <slider-frame :slides-per-view="5" >
                            <div>
                              <!-- With the exposed variables and methods it's simple to make your own pagination -->
                              <a href="javascript:void(0)" class="prev-btn text-theme" @click="SlideSkill('topSkill_'+index,'left',index)" style="display:none" :id="'prev_'+index"><i class="fa fa-chevron-left"></i></a>
                              <slider-slides :id="'topSkill_'+index" >
                                <!-- SliderSlide is currently needed for even sizing, but seems redundant so will likely be replaced with Flexbox CSS -->
                                <slider-slide :key="ix" v-for="(skill,ix) in data.skill_name"   >
                                  <li class="mr-1 inline-block align-items-center">{{skill}}</li>
                                </slider-slide>
                              </slider-slides>
                              <a href="javascript:void(0)" class="next-btn text-theme" v-if="data.skill_name.length > 4" @click="SlideSkill('topSkill_'+index,'right',index)" :id="'next_'+index"><i class="fa fa-chevron-right"></i></a>
                            </div>
                          </slider-frame>
                          
                        </ul>
                    </div>
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
                    <p class="fz-20 fw-600 text-black mb-0">No Post Available</p>
                  </div>
                </div>
                <!-- right side bar  -->
                <sidebar ref="postDetailsc"></sidebar>
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
    // import { required } from 'vuelidate/lib/validators'
    // import Multiselect from 'vue-multiselect'
    import VueReadMoreSmooth from "vue-read-more-smooth"
    import { mapActions } from "vuex";
    import {SliderFrame, SliderSlides, SliderSlide} from 'vue-dynamic-slider';
    import sidebar from  "@/components/freelancer/jobDetail-sidebar";
    // let base_url = "http://qapin_mvp5.manageprojects.in/";
    export default {

      mixins: [validationMixin],

      validations: {
      },
      components : {
        VueReadMoreSmooth, SliderSlide, SliderSlides, SliderFrame,sidebar
        // Multiselect 
      },
      props:{
        // 'search':input,
      },
      data() {
        return {
          busy:false,
          isHidden: true,
          headToken:'',
          postData:[],
          dataStatus: false,
          loaderStatus: true,
          filterValue:'',
          categoryData:[],
          search:'',
          proposalDetails:{
            recent_job:0,
          },
          category_data:[],
          category_ids:[],
          categoryModelshow:false,
          clientFullDetails:'',
          
          sortoptions: [
            { value: '', text: 'Please select an option' },
            { value: 'ASC', text: 'Oldest' },
            { value: 'DESC', text: 'Newest'},
            { value: '', text: 'Relevance'},
          ],
          sort:'',
          filtersValue: {
            selectedCategoryData:[],
            experienceLevel:[],
            numberOfProposal:[],
            projectLength:[],
            locationData:[],
            hoursperweek:[],
            title:'',
            start_limit:0,
            end_limit:3,
            sort:'DESC',
          },
          location:'',
          locationData:'',
          hideClearBtn:false,
          proposalbtn_text:'Submit a Proposal',
          clientrating:false,
          proposal_url:0,
          projectLengthData:[],
          ExperienceLevelData:[],
          jobLink:'',
          // start_limit:0,
          // end_limit:5,
          titleSearch:'',
          employmentTypeData:'',
          login_user_id:'',
          currentLoginUserData:'',
          sliderScrollData:[],
        }
      },
      methods: {
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
              console.log('sliderScrollData',this.sliderScrollData[_i]);
              console.log('main_width',main_width);
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
            
            // console.log('left', conent.scrollLeft);
            // console.log('main_width', main_width,_i);
          }
          
        },
        // this fun is for to clear all filter value
        clearFilter(){
          this.hideClearBtn=false;
          this.filtersValue = {
            selectedCategoryData:[],
            experienceLevel:[],
            numberOfProposal:[],
            projectLength:[],
            locationData:[],
            hoursperweek:[],
            title:'',
            start_limit:0,
            end_limit:5
          };
          this.postData = [];
          this.getData();
        },
        ...mapActions(["genericAPIPOSTRequest"]),
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
        // THIS FUN IS FOR TO GET CATEGORY
        async getCategory(){ 
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "common/getQpRoleMasterList",
              params: {},
          });  
          if(res.length > 0){
            this.categoryData = res;
          }else{
            this.categoryData='';
          }
        },
        // this function is for to get filter data
        async filterByData(){
            this.filtersValue.start_limit=0;
            // this.postData = [];
            this.hideClearBtn= this.checkFilterdata(); 
            this.filtersValue.title=this.titleSearch;
            this.loaderStatus= true;
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "searchJob",
                params: {
                  'search':this.filtersValue,
                  "user_id": this.login_user_id,
                },
            });  
            // console.log('response', res);
            this.postData = [];
            if(res.data){
              // this.postData = res;
              var that =this;
              res.data.map(function(item){ return that.postData.push(item) });
              this.filtersValue.start_limit=this.postData.length;
              this.proposalDetails=res.dashboard;
              this.busy=false;
              this.loaderStatus= false;
              this.dataStatus= true;
            }
            if(this.postData.length < 1){
              this.proposalDetails.filterJobcount=0;
              this.dataStatus= false;
            }
        },
        //  this fun for to get post data 
        getData(){
          if(this.busy)return true;
          this.busy=true;
          this.loaderStatus= true;
          var  passApidata= {
            "user_id": this.login_user_id,
            'search':this.filtersValue
          };
          axios.post(this.$store.state.baseUrl+'/searchJob',passApidata,{headers: this.headToken}).then((response)=>{
            if(response.data.status ==  true){
              var that=this;
              response.data.result.data.map(function(item){ return  that.postData.push(item)  } );
              this.filtersValue.start_limit=this.postData.length;
              this.proposalDetails=response.data.result.dashboard;
              this.busy=false;
              
              if (this.proposalDetails.filterJobcount > 0) this.dataStatus = true;
              else this.dataStatus = false;
            }else if(response.data.status ==  false && this.postData.length > 0){
              this.dataStatus= true;
            }else{
              this.postData=[];
              this.dataStatus= false;
            }
            this.loaderStatus= false;

          });
        },
        // this fun for to check filter array have value
        checkFilterdata(){
          if(this.filtersValue.experienceLevel.length > 0){
            return true; 
          }else if(this.filtersValue.numberOfProposal.length > 0){
            return true; 
          }else if(this.filtersValue.selectedCategoryData.length > 0){
            return true; 
          }else if(this.filtersValue.projectLength.length > 0){
            return true; 
          }else if(this.filtersValue.locationData.length > 0){
            return true; 
          }else if(this.filtersValue.hoursperweek.length > 0){
            return true; 
          }else{
            return false;
          }
        },
    
        // this fun for to go job proposal
        submitProposal(datas,proposal_uri) {
          var route='';
          if (proposal_uri == 0 ) {
            route = this.$router.resolve({
              name: 'submitProposal',
              path:'/'+this.$store.state.accountType+'/submit-proposal',
              query: {jobDetailsWithClientData: datas}
              });  
          }else{
            route = this.$router.resolve({
              name: 'proposalDetails',
              path:'/freelancer/proposal-details',
              query: {jobDetailsWithClientData: datas}
              });
              // route = this.$router.resolve({
              // name: 'myProposals',
              // path:'/freelancer/my-proposals#submit-Proposal',
              // // query: {jobDetails: datas}
              // });
          }
          
          window.open(route.href);
        },
        // this fun is for to Remove select category
        removeFilterValue(key,index){
          if(key=='hoursperweek'){
            this.filtersValue.hoursperweek.splice(index, 1); 
          }
          if(key=='experienceLevel'){
            this.filtersValue.experienceLevel.splice(index, 1); 
          }
          if(key=='numberOfProposal'){
            this.filtersValue.numberOfProposal.splice(index, 1); 
          }
          if(key=='selectedCategoryData'){
            this.filtersValue.selectedCategoryData.splice(index, 1); 
          }
          if(key=='projectLength'){
            this.filtersValue.projectLength.splice(index, 1); 
          }
          if(key=='locationData'){
            this.filtersValue.locationData.splice(index, 1); 
          }
          this.hideClearBtn= this.checkFilterdata();
          this.filterByData();
            // \\OR   
            // this.$delete(this.category_data,index);
          // \\both will do the same
        },
        // this function is for dislike the post
        dislikePost(post){
          var  passApidata= { "post_id": post, "dislike_reason": "Not Interested"};
          axios.post(this.$store.state.baseUrl+'/postDislike',passApidata,{headers: this.headToken}).then((response)=>{
            if(response.data.status ==  true){
              var  passApidata= {
                  "filter": this.filterValue,
                  "from": "search",
                  "search":{"location": [], "locationDis": [], "cid": []}
              };
              axios.post(this.$store.state.baseUrl+'/getJobsList',passApidata,{headers: this.headToken}).then((response)=>{
                if(response.data.status ==  true){
                  this.postData = response.data.result;
                  this.proposalDetails=response.data.dashboard;
                  this.loaderStatus= false;
                  if (this.filterValue == '') {
                    if (this.proposalDetails.filterJobcount > 0) this.dataStatus = true;
                    else this.dataStatus = false;
                  }
                  else if(this.filterValue == 3){
                    if (this.proposalDetails.saved_job > 0) this.dataStatus= true;
                    else this.dataStatus= false;
                  }else{
                    if (this.proposalDetails.dislike_job > 0) this.dataStatus= true;
                    else this.dataStatus= false;
                  }
                }else{
                  this.loaderStatus= false;
                  this.dataStatus= false;
                }
              });
              this.$toastr.s('Post Disliked successfull');
            }else{
              this.$toastr.e('Post Not Disliked');
            }
          });
        },
        //this fun is for to read jobpost
        async addJobRead(data){
          await this.genericAPIPOSTRequest({
              requestUrl: "addJobread",
              params: {"user_id":this.login_user_id,'job_id': data},
          });
          return true;
        },
        // this function is for get post details
        async postDetailsclick(data){
          this.$refs.postDetailsc.postDetails(data);
          //this fun is for to read jobpost
          this.addJobRead(data);
          document.getElementById(data).classList.remove("unread-bg");
          // var apiData ={
          //   'jobsid':[data]
          // };
          // axios.post(this.$store.state.baseUrl+'getJobDetail',apiData,{"headers":this.headToken}).then((response)=>{
          //   if(response.data.status == true){
          //     this.jobDetailsWithClientData.jobDetails =  response.data.result[0];
          //     this.jobLink = window.location.origin+'/freelancer/job-details?jobDetailsWithClientData='+this.jobDetailsWithClientData.jobDetails.jobs_id;
          //     var jobApplicationStatus = {
          //       "jobsid": data,
          //       "user_id":this.jobDetailsWithClientData.jobDetails.user_id
          //     };
          //     axios.post(this.$store.state.baseUrl+'getJobApplicantStatus',jobApplicationStatus,{"headers":this.headToken}).then((response)=>{
          //       if(response.data.status == true){
          //         this.jobDetailsWithClientData.jobApplicationStatus =  response.data.result;
          //       }else{
          //         this.jobDetailsWithClientData.jobApplicationStatus =  '';
          //       }
          //     });
          //     var clientJobsapi = {
          //         "filter": "",
          //         "search": {},
          //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
          //     }
          //     axios.post(this.$store.state.baseUrl+'/getUserPostedJob',clientJobsapi,{'headers':this.headToken}).then((response)=>{
          //       if (response.data.status==true) {
          //         this.jobDetailsWithClientData.clientJobsData =  response.data.result;
          //         this.jobDetailsWithClientData.clientJobsData.filter((jobdaata,id)=>{
          //         if(jobdaata.jobs_id == data){
          //           this.jobDetailsWithClientData.clientJobsData.splice(id,1);
          //         }
          //       })
          //       }else{
          //         this.jobDetailsWithClientData.clientJobsData =  [];
          //       }
          //     });
          //     var clientDetailsapi = {
          //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
          //     }
          //     axios.post(this.$store.state.baseUrl+'/user/getUserDetails',clientDetailsapi,{headers: this.headToken}).then((response)=>{
          //       if(response.data.status ==  true){
          //         this.jobDetailsWithClientData.clientFullDetails =  response.data.result;
          //       }else{
          //         this.jobDetailsWithClientData.clientFullDetails =  '';
          //       }
          //     });

          //     var clientRatingsapi = {
          //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
          //     }
          //     axios.post(this.$store.state.baseUrl+'/getUserReviewCal',clientRatingsapi,{headers: this.headToken}).then((response)=>{
          //       if(response.data.status ==  true){
          //         this.jobDetailsWithClientData.clientrating =  response.data.result;
          //       }else{
          //         this.jobDetailsWithClientData.clientrating =  '';
          //       }
          //     });

          //     var clientJobshistoryapi = {
          //         "filter": 4,
          //         "search": {},
          //         "user_id": this.jobDetailsWithClientData.jobDetails.user_id
          //     }
          //     axios.post(this.$store.state.baseUrl+'/getUserPostedJob',clientJobshistoryapi,{'headers':this.headToken}).then((response)=>{
          //       if (response.data.status==true) {
          //         this.jobDetailsWithClientData.clientJobshistoryData =  response.data.result;
          //       }else{
          //         this.jobDetailsWithClientData.clientJobshistoryData =  [];
          //       }
          //     });

          //     // this fun is for to check milestone data
          //     // var getmilestoneData = {
          //     //   "job_id":data,
          //     //   "user_id": this.login_user_id
          //     // };
          //     // axios.post(this.$store.state.baseUrl+'/getCreatedMilestone',getmilestoneData,{headers: this.headToken}).then((response)=>{
          //     //   if(response.data.status==true){
          //     //     this.proposal_url = 1;
          //     //     this.proposalbtn_text = "Proposal Details";
          //     //   }else{
          //     //     this.proposal_url = 0;
          //     //     this.proposalbtn_text = "Submit a Proposal";

          //     //   }
          //     // })
          //     var getMilestoneData = this.genericAPIPOSTRequest({
          //           requestUrl: "getCreatedMilestone",
          //           params: {
          //             "job_id":data,
          //             "user_id": this.login_user_id
          //           },
          //     });
          //     if (getMilestoneData.milestone.length > 0 ) {
          //       this.proposal_url = 1;
          //       this.proposalbtn_text = "Proposal Details";
          //     }else{
          //       this.proposal_url = 0;
          //       this.proposalbtn_text = "Submit a Proposal";
          //     }
              
          //     // this fun is for similar jobs
          //     var getsimilarjobData = {
          //       "search": {"category_id":this.jobDetailsWithClientData.jobDetails.quality_inspector_id}
          //     };
          //     axios.post(this.$store.state.baseUrl+'/getJobsList',getsimilarjobData,{headers: this.headToken}).then((response)=>{
          //       if(response.data.status==true){
          //         // console.log('data',response.data.result);
          //         this.jobDetailsWithClientData.similarJobs=response.data.result;
          //         this.jobDetailsWithClientData.similarJobs.filter((jobdaata,id)=>{
          //           if(jobdaata.jobs_id == data){
          //             this.jobDetailsWithClientData.similarJobs.splice(id,1);
          //           }
          //         })
          //       }
          //     });
          //   }
          // });

        },
        // this fun for to go job post details
        gotojobDetails(datas) {
          // let route = this.$router.resolve({ path: "/freelancer/job-details" });
          // window.open(route.href);
          let route = this.$router.push({
                        name: 'jobDetails', 
                        path:'/freelancer/job-details',
                        params: { jobDetailsWithClientData: datas }
                    });
          window.open(route.href);

        },         
        // this fun for to save & unsave post 
        async savePost(jobdata,_i=null){
          var send_jobdata = {
            "action":3,
            "jobData":jobdata
          };
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "job/addBookmark",
              params: send_jobdata,
          });
          if(res){
            if(jobdata.action == 3){
              // if(_i == 'detail') this.jobDetailsWithClientData.jobDetails.action=null;
              //else
               this.postData[_i].action=null;
              document.getElementById('res_'+jobdata.jobs_id).classList.remove("saved-btn");
              this.$toastr.s('Post UnSaved Successfull');
            }else{
              // if(_i == 'detail') this.jobDetailsWithClientData.jobDetails.action = 3;
              // else 
              this.postData[_i].action=3;
              document.getElementById('res_'+jobdata.jobs_id).classList.add("saved-btn");
              this.$toastr.s('Post Saved Successfull');
            }
          }else{
              this.$toastr.e('Post Save Unsuccessfull');
              this.loaderStatus = false;
              this.dataStatus = false;
          }
        },
        // this fun is for to get Project Length 
        async getProjectLength(){
          var projectData = await this.genericAPIPOSTRequest({
              requestUrl: "getProjectLengths",
              params: {},
          }); 
          if(projectData.length > 0 ){
            this.projectLengthData = projectData;
          }
        },
        // this fun is for to get Project Length 
        async getExperienceLevel(){
          var experienceData = await this.genericAPIPOSTRequest({
              requestUrl: "getExperienceLevel",
              params: {},
          }); 
          if(experienceData.length > 0 ){
            this.ExperienceLevelData = experienceData;
          }
        },
        //this fun for get employment types 
        async getemploymentType(){
          var employmentType = await this.genericAPIPOSTRequest({
              requestUrl: "employmentType",
              params: {},
          }); 
          if(employmentType.length > 0 ){
            this.employmentTypeData = employmentType;
          }
        },
        //this fun for get get Current login User 
        async getCurrentloginUser(){
          var employmentType = await this.genericAPIPOSTRequest({
              requestUrl: "user/getUserDetails",
              params: {
                "user_id":this.login_user_id,
              },
          }); 
          if(employmentType ){
            this.currentLoginUserData = employmentType;
            this.sortoptions[3].value =employmentType.country_id;
          }
        },
      },
      computed:{
        filteredAndSorted(){
        // function to compare names
          function compare(a, b) {
            if (a.job_title < b.job_title) return -1;
            if (a.job_title > b.job_title) return 1;
            return 0;
          }
          return this.postData.filter(user => {
              return user.job_title.toLowerCase().includes(this.search.toLowerCase());
          }).sort(compare);
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
        }
      },
      mounted() {
        var userdata = JSON.parse(localStorage.getItem('loginUserData'));
        this.login_user_id = userdata.login_master_id;
        if(this.$route.params.input != undefined){
          this.titleSearch = this.$route.params.input;
          this.filtersValue.title = this.titleSearch;
        }
        // var userdata = JSON.parse(localStorage.getItem('loginUserData'));
        // -------------------------------this is header for api------------------------------
        this.headToken= {"Authorization": localStorage.getItem('token')};
        //this fun for get employment types
        this.getemploymentType();
        // this function is for to get all categorys 
        this.getCategory();
        // this function is for to get all active jobs
        this.getData();
        // this.filterByData();

        // this fun is for to get Project Length 
        this.getProjectLength();
        // this fun is for to get Project Length 
        this.getExperienceLevel();

        // this fun is for to get Curren tlogin User 
        this.getCurrentloginUser();
      },  
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
    .search-wrap .card-section select{-webkit-appearance: menulist !important; /* override vuetify style */-moze-appearance: menulist !important; /* override vuetify style */appearance: menulist !important; /* override vuetify style */
    }
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
    /*.freelancer-wrap .job-card:hover h5{color:#F2613C!important;}*/
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
  .skill-slider-wrapper .prev-btn{
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
  </style>