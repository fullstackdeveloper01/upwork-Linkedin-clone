<template>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active"
        v-infinite-scroll="getData"
        :infinite-scroll-disabled="busy"
        infinite-scroll-distance="5"
        id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="search-filter-wrapper px-4 border-bottom pb-2 pt-3">
            <b-row>
              <b-col xl="12" lg="12" md="12">
                <div class="d-flex align-items-center justify-content-space-between search-input">
                  <b-input-group class="mt-0">
                    <template #append>
                      <b-input-group-text class="bg-theme border-theme">
                        <svg width="27" height="28" viewBox="0 0 27 28" fill="#fff" xmlns="http://www.w3.org/2000/svg" @click="filterByData()">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6212 5C14.6569 5 16.5707 5.79274 18.0102 7.23221C19.4496 8.67165 20.2424 10.5855 20.2424 12.6212C20.2424 14.6569 19.4496 16.5707 18.0102 18.0102C16.5707 19.4496 14.6569 20.2424 12.6212 20.2424C10.5855 20.2424 8.67165 19.4496 7.23221 18.0102C5.79274 16.5707 5 14.6569 5 12.6212C5 10.5855 5.79274 8.67165 7.23221 7.23221C8.67165 5.79274 10.5855 5 12.6212 5ZM6.4542 12.6212C6.4542 16.0217 9.22068 18.7881 12.6212 18.7881C16.0217 18.7881 18.7881 16.0217 18.7881 12.6212C18.7881 9.22068 16.0217 6.4542 12.6212 6.4542C9.22072 6.4542 6.4542 9.22068 6.4542 12.6212Z" fill="#FFF"/>
                          <path d="M22.7868 21.7585L18.0069 16.9786C17.7229 16.6946 17.2625 16.6946 16.9786 16.9786C16.6946 17.2625 16.6946 17.7229 16.9786 18.0069L21.7584 22.7868C21.9004 22.9288 22.0865 22.9997 22.2726 22.9997C22.4587 22.9997 22.6448 22.9288 22.7868 22.7868C23.0707 22.5028 23.0707 22.0424 22.7868 21.7585Z" fill="#FFF"/>
                        </svg>
                      </b-input-group-text>
                    </template>
                    <b-form-input v-model="titleSearch" @keyup="filterByData()" placeholder="Search for Users"></b-form-input>
                  </b-input-group>
                  <button type="button" class="btn btn-theme-outline d-flex align-items-center no-focus" @click="filterTab = !filterTab;filterByData();">
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15625 4.625V9.625C9.15625 9.97018 8.87643 10.25 8.53125 10.25C8.18607 10.25 7.90625 9.97018 7.90625 9.625V4.625C7.90625 4.27982 8.18607 4 8.53125 4C8.87643 4 9.15625 4.27982 9.15625 4.625ZM11.6562 17.125C11.6562 18.8509 10.2571 20.25 8.53125 20.25C6.80536 20.25 5.40625 18.8509 5.40625 17.125C5.40625 15.3991 6.80536 14 8.53125 14C10.2571 14 11.6562 15.3991 11.6562 17.125ZM9.15625 21.4557V23.375C9.15625 23.7202 8.87643 24 8.53125 24C8.18607 24 7.90625 23.7202 7.90625 23.375V21.4557C5.78607 21.1524 4.15625 19.329 4.15625 17.125C4.15625 14.7088 6.115 12.75 8.53125 12.75C10.9475 12.75 12.9062 14.7088 12.9062 17.125C12.9062 19.329 11.2764 21.1524 9.15625 21.4557ZM20.1562 23.375C20.1562 23.7202 20.4361 24 20.7812 24C21.1264 24 21.4062 23.7202 21.4062 23.375V18.375C21.4062 18.0298 21.1264 17.75 20.7812 17.75C20.4361 17.75 20.1562 18.0298 20.1562 18.375V23.375ZM20.1562 6.54431V4.625C20.1562 4.27982 20.4361 4 20.7812 4C21.1264 4 21.4062 4.27982 21.4062 4.625V6.54431C23.5264 6.84757 25.1562 8.67096 25.1562 10.875C25.1562 13.2912 23.1975 15.25 20.7812 15.25C18.365 15.25 16.4062 13.2912 16.4062 10.875C16.4062 8.67096 18.0361 6.84757 20.1562 6.54431ZM20.7812 7.75C22.5071 7.75 23.9062 9.14911 23.9062 10.875C23.9062 12.6009 22.5071 14 20.7812 14C19.0554 14 17.6562 12.6009 17.6562 10.875C17.6562 9.14911 19.0554 7.75 20.7812 7.75Z" fill="#666666"/>
                    </svg>
                    <span class="text-theme fz-16 fw-600">Filter</span>
                  </button>
                </div>
                <b-row v-if="filterTab">
                  <b-col cols="12">
                    <div class="dropdown-filter bg-white p-0">
                      <div>
                        <div class="selected-tags mb-2 mt-2">
                          <div class="tags-wrap">
                            <ul>
                              <template v-if="filtersValue.talentQualilty.length > 0">
                                <li class="mr-1 inline-block align-items-center bg-theme" v-for="(quality,id) in filtersValue.talentQualilty" :key="id"> 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                  {{filterName('quality',quality)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('quality',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>

                              <template v-if="filtersValue.categoryData != ''">
                                <li class="mr-1 inline-block align-items-center bg-theme" > 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    Category: {{filterName('category',filtersValue.categoryData)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.categoryData = '' ; filtersValue.skillData = '';removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>
                              
                              <template v-if="filtersValue.skillData != '' && filtersValue.skillData != null">
                                <li class="mr-1 inline-block align-items-center bg-theme" > 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    Subcategory: {{filterName('skill',filtersValue.skillData)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.skillData = ''; removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>

                              <template v-if="filtersValue.experience != ''">
                                <li class="mr-1 inline-block align-items-center bg-theme" > 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('experience',filtersValue.experience)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.experience = ''; removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>

                              <template v-if="filtersValue.certification != ''">
                                <li class="mr-1 inline-block align-items-center bg-theme" v-for="(cert,id) in filtersValue.certification" :key="id"> 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('certification',cert)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('certification',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>

                              <template v-if="filtersValue.talentType != '' && filtersValue.talentType != null">
                                <li class="mr-1 inline-block align-items-center bg-theme" > 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('talent',filtersValue.talentType)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.talentType = null; removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>

                              <template v-if="filtersValue.successtype != '' && filtersValue.successtype != null">
                                <li class="mr-1 inline-block align-items-center bg-theme" > 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('success',filtersValue.successtype)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.successtype = null; removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>
                              
                              <template v-if="filtersValue.earntype != '' && filtersValue.earntype != null">
                                <li class="mr-1 inline-block align-items-center bg-theme" > 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('earn',filtersValue.earntype)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.earntype = null; removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>
                              
                              <template v-if="filtersValue.englishtype != '' && filtersValue.englishtype != null">
                                <li class="mr-1 inline-block align-items-center bg-theme" > 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('english',filtersValue.englishtype)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.englishtype = null;removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>
                              
                              <template v-if="filtersValue.locationData.length > 0">
                                <li class="mr-1 inline-block align-items-center bg-theme" v-for="(loc_data,id) in filtersValue.locationData" :key="id"> 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{loc_data.location}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('locationData',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>

                              <template v-if="filtersValue.otherLang.length > 0">
                                <li class="mr-1 inline-block align-items-center bg-theme" v-for="(lang,id) in filtersValue.otherLang" :key="id"> 
                                  <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                  {{filterName('otherLang',lang)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('otherLang',id)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                                  </a>
                                </li>
                              </template>

                              <template v-if="hideClearBtn">
                                <li class="mr-1 inline-block"> 
                                  <a href="javascript:void(0);" class="mr-1 inline-block cursor-pointer text-black d-block" @click="clearFilter();">
                                    Clear Filter
                                  </a>
                                </li>
                              </template>
                            </ul>
                          </div>
                        </div>
                        <hr>
                        <b-row>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Talent Quality</label>
                            <b-form-group>
                              <span v-for="(talent,index) in talentQualilty" :key="index">
                                <b-form-checkbox
                                  name="tq"
                                  class="fz-18 d-flex align-items-center mb-2"
                                  :value="talent.talent_id"
                                  stacked
                                  v-model="filtersValue.talentQualilty"
                                  @change="hideClearBtn = checkFilterdata()"
                                >
                                <img :src="talent.img" width="20" height="20" style="margin-right:10px;">
                                {{talent.talent_title}}
                                </b-form-checkbox>
                              </span>
                            </b-form-group>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Experience level</label>
                              <b-form-radio-group
                                class="fz-16 mb-2 input"
                                :options="experienceLevelData"
                                value-field="experience_id"
                                text-field="title" 
                                name="el"
                                stacked
                                v-model="filtersValue.experience"
                                @change="hideClearBtn = checkFilterdata()"

                              ></b-form-radio-group>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Talent type</label>
                            <b-form-radio-group
                                class="fz-16 mb-2 input"
                                :options="talentType"
                                value-field="value"
                                text-field="title" 
                                name="tt"
                                stacked
                                v-model="filtersValue.talentType"
                                @change="hideClearBtn = checkFilterdata()"

                            ></b-form-radio-group>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Job success</label>
                            <b-form-radio-group
                                class="fz-16 input"
                                :options="successtype"
                                value-field="value"
                                text-field="title" 
                                name="st"
                                stacked
                                v-model="filtersValue.successtype"
                                @change="hideClearBtn = checkFilterdata()"

                            ></b-form-radio-group>
                            <!-- <a href="javascript:void(0);" class="text-theme ml-6">See more</a> -->
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Earned amount</label>
                            <b-form-radio-group
                                class="fz-16 input"
                                :options="earntype"
                                value-field="value"
                                text-field="title" 
                                name="et"
                                stacked
                                v-model="filtersValue.earntype"
                                @change="hideClearBtn = checkFilterdata()"

                            ></b-form-radio-group>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">English Level</label>
                            <b-form-radio-group
                                class="fz-16 input"
                                :options="englishtype"
                                value-field="value"
                                text-field="title" 
                                name="ent"
                                stacked
                                v-model="filtersValue.englishtype"
                                @change="hideClearBtn = checkFilterdata()"

                            ></b-form-radio-group>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-2">Day rate's</label><br>
                            <div class="d-flex align-items-center justify-content-space-between">
                              <div class="form-group mr-2">
                                <label>Form</label>
                                <input type="number" v-model="priceFrom" @keyup="updatefromDayValue()"
                                minlength="1" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"
                                class="form-control"/>
                              </div>
                              <div class="form-group">
                                <label>To</label>
                                <input type="number" v-model="priceTo" @keypress="updatetoDayValue()"
                                  minlength="2" maxlength="12" autocomplete="nope" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"
                                class="form-control"/>
                              </div>
                            </div>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Category</label><br>
                            <div class="rp-filter">
                              <b-form-select 
                                  v-model="filtersValue.categoryData"
                                  :options="categoryData" 
                                  value-field="qp_role_master_id"
                                  text-field="role_name"
                                  class="form-control w-100"
                                  @change="changeCategory($event);hideClearBtn = checkFilterdata()"
                              ></b-form-select>
                            </div>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Sub Category</label><br>
                            <div class="rp-filter">
                              <b-form-select 
                                  v-model="filtersValue.skillData"
                                  :options="skillData" 
                                  value-field="qp_role_skill_master_id"
                                  text-field="skill_name"
                                  class="form-control w-100"
                                  @change="hideClearBtn = checkFilterdata()"
                              ></b-form-select>
                            </div>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Locations</label><br>
                            <div class="input-group search-bar">
                              <div class="tt-menu rp-filter" style="top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 2px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                              <input type="text" class="form-control border-none" v-model="location" placeholder="Search for Location" v-on:keyup="searchLocation()">
                              <div class="certification-drop p-2 border bg-white certification-scroll"  v-if="location!=''">
                                  <b-form-group>
                                    <b-form-checkbox
                                      v-for="(loc,id) in locationData"
                                      :key="id"
                                      :value="loc"
                                      v-model="filtersValue.locationData"
                                      @change="hideClearBtn = checkFilterdata()"
                                      >
                                      {{ loc.location }}
                                    </b-form-checkbox>
                                  </b-form-group>
                                </div>
                              </div>
                            </div>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Other Languages</label><br>
                            <div class="input-group search-bar">
                              <div class="tt-menu rp-filter" style="position: absolute;top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 2px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                              <input type="text" class="form-control border-none" v-model="searchLang" placeholder="Search for Language" aria-describedby="basic-addon2">
                              <div class="certification-drop p-2 border bg-white certification-scroll"  v-if="searchLang!=''">
                              <b-form-group>
                                  <b-form-checkbox
                                    v-for="(lang,id) in languagefilterData"
                                    :key="id"
                                    :value="lang.id"
                                    v-model="filtersValue.otherLang"
                                    @change="hideClearBtn = checkFilterdata()"
                                  >
                                    {{ lang.value }}
                                  </b-form-checkbox>
                                </b-form-group>
                                </div>
                              </div>
                            </div>
                          </b-col>
                          <b-col xl="2" lg="2" sm="12">
                            <label class="fz-18 fw-600 text-black mb-4">Certification</label><br>
                            <div class="input-group search-bar">
                              <div class="rp-filter " style="background-color: #fff;width: 100%;padding: 2px;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                                <input type="text" v-model="searchCertification" class="form-control border-none" placeholder="Search for Certification">
                                <div class="certification-drop p-2 border bg-white certification-scroll" v-if="searchCertification!=''">
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
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                        <hr>
                        <b-button class="btn btn-theme mr-2" @click="filterByData(); filterTab = !filterTab">Apply Filter</b-button>
                        <b-button class="btn btn-outline-theme" @click="filterTab = !filterTab;clearFilter();filterByData()">Cancel</b-button>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <div class="selected-tags mb-2 mt-2" v-if="!filterTab">
                  <div class="tags-wrap">
                    <ul>
                      <template v-if="filtersValue.talentQualilty.length > 0">
                        <li class="mr-1 inline-block align-items-center bg-theme" v-for="(quality,id) in filtersValue.talentQualilty" :key="id"> 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                          {{filterName('quality',quality)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('quality',id);filterByData();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>

                      <template v-if="filtersValue.categoryData != ''">
                        <li class="mr-1 inline-block align-items-center bg-theme" > 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            Category: {{filterName('category',filtersValue.categoryData)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.categoryData = '' ; filtersValue.skillData = '';filterByData();removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>
                      
                      <template v-if="filtersValue.skillData != '' && filtersValue.skillData != null">
                        <li class="mr-1 inline-block align-items-center bg-theme" > 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            Subcategory: {{filterName('skill',filtersValue.skillData)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.skillData = ''; filterByData();removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>

                      <template v-if="filtersValue.experience != ''">
                        <li class="mr-1 inline-block align-items-center bg-theme" > 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            {{filterName('experience',filtersValue.experience)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.experience = ''; filterByData();removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>

                      <template v-if="filtersValue.certification != ''">
                        <li class="mr-1 inline-block align-items-center bg-theme" v-for="(cert,id) in filtersValue.certification" :key="id"> 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            {{filterName('certification',cert)}} 
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('certification',id);filterByData();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>

                      <template v-if="filtersValue.talentType != '' && filtersValue.talentType != null">
                        <li class="mr-1 inline-block align-items-center bg-theme" > 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            {{filterName('talent',filtersValue.talentType)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.talentType = null; filterByData();removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>
                      <template v-if="filtersValue.successtype != '' && filtersValue.successtype != null">
                        <li class="mr-1 inline-block align-items-center bg-theme" > 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            {{filterName('success',filtersValue.successtype)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.successtype = null; filterByData();removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template><template v-if="filtersValue.earntype != '' && filtersValue.earntype != null">
                        <li class="mr-1 inline-block align-items-center bg-theme" > 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            {{filterName('earn',filtersValue.earntype)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.earntype = null; filterByData();removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>
                      
                      <template v-if="filtersValue.englishtype != '' && filtersValue.englishtype != null">
                        <li class="mr-1 inline-block align-items-center bg-theme" > 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            {{filterName('english',filtersValue.englishtype)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="filtersValue.englishtype = null;filterByData();removeFilterValue();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>
                      
                      <template v-if="filtersValue.locationData.length > 0">
                        <li class="mr-1 inline-block align-items-center bg-theme" v-for="(loc_data,id) in filtersValue.locationData" :key="id"> 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                            {{loc_data.location}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('locationData',id);filterByData();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>

                      <template v-if="filtersValue.otherLang.length > 0">
                        <li class="mr-1 inline-block align-items-center bg-theme" v-for="(lang,id) in filtersValue.otherLang" :key="id"> 
                          <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                          {{filterName('otherLang',lang)}}
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="removeFilterValue('otherLang',id);filterByData();"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#FFF"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#FFF"></rect></svg>
                          </a>
                        </li>
                      </template>
                      <template v-if="hideClearBtn">
                        <li class="mr-1 inline-block"> 
                          <a href="javascript:void(0);" class="mr-1 inline-block cursor-pointer text-black d-block" @click="clearFilter();filterByData();" v-if="hideClearBtn">
                            Clear Filter
                          </a>
                        </li>
                    </template>
                    </ul>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        <div v-if="userData.length > 0">
          <div class="job-card py-2 px-4 pb-4 mb-0 text-theme-hover"  v-for="(data,index) in userData" :key="index" :id="data.jobs_id">
            <div class="action-btn d-flex align-items-center">
                <a href="javascript:void(0);" 
                class="btn btn-secondary br-50 mr-2"
                :class="(data.favorite_id!= null)?'saved-btn':''"
                @click="addFavorite(data.login_master_id)"  
                :id="'favorite-'+data.login_master_id"
                >
                <i class="fa fa-heart text-secondary" aria-hidden="true"></i>
                </a>
                <a  target="_blank"  class="btn btn-theme btn-block mb-2 mr-2 btn-secondary" 
                :href="$router.resolve({name: 'hireFreelancer',  path:'/client/hire-freelancer/', params: {uid: 'A'+encodedid(data.login_master_id)}}).href"
                > Hire </a>
                <button type="button" v-if="jobDetails.is_delete == 0" class="btn btn-theme btn-block mb-2 mr-2 btn-secondary"  :disabled="(data.invited_job > 0 ) ? true : false" v-b-modal.invite-job-modal-1 @click="inviteModelData(data)"> Invite to Job </button>
            </div>
            <div class="d-flex align-items-center profile-wrap">
                <div class="img-wrapper pos-rel">
                  <div class="shadow-lg">
                      <img :src="data.profile_picture_path" alt="" class="rounded-md shadow w-14 h-14">
                      <span class="online"></span>
                  </div>
                </div>
                <div class="ml-3">
                  <h5 class="text-black fw-600 mb-1"  v-b-toggle.sidebar-right  @click="sideBarData.jobDetails = jobDetails ; opendsideBar(data);">{{shortName(data.first_name,data.last_name)}}</h5>
                  <ul class=" align-items-center fz-14 post text-muted mb-0"  v-b-toggle.sidebar-right @click="sideBarData.jobDetails = jobDetails ;opendsideBar(data);">
                      <li class="fz-16 text-black">{{data.tagline}}</li>
                  </ul>
                  <ul class="d-flex align-items-center fz-14 post text-muted mb-0"  v-b-toggle.sidebar-right @click="sideBarData.jobDetails = jobDetails ;opendsideBar(data);">
                      <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 4.79297C8.78486 4.79297 5.81641 7.48062 5.81641 10.8161C5.81641 12.6105 6.87564 14.7793 8.6451 17.1772C9.26 18.0105 9.92274 18.8168 10.5926 19.57C11.0126 20.0423 11.3592 20.4091 11.5857 20.6375C12.0315 21.087 12.7831 21.0867 13.2287 20.6375C13.4551 20.4091 13.8017 20.0423 14.2217 19.57C14.8916 18.8168 15.5543 18.0105 16.1693 17.1772C17.9387 14.7793 18.9979 12.6105 18.9979 10.8161C18.9979 7.4806 16.0294 4.79297 12.4072 4.79297ZM9.59582 16.4756C7.96655 14.2677 6.99794 12.2845 6.99794 10.8161C6.99794 8.1608 9.41266 5.97451 12.4072 5.97451C15.4016 5.97451 17.8163 8.16079 17.8164 10.8162C17.8164 12.2845 16.8478 14.2677 15.2185 16.4756C14.2035 17.8511 13.155 19.0319 12.4072 19.7878C11.6594 19.0319 10.6108 17.8511 9.59582 16.4756ZM12.4072 12.9568C11.1745 12.9568 10.1786 11.9317 10.1786 10.6778C10.1786 9.42403 11.1745 8.39886 12.4072 8.39886C13.6399 8.39886 14.6357 9.42405 14.6357 10.6779C14.6357 11.9317 13.6399 12.9568 12.4072 12.9568ZM12.4072 11.9283C13.065 11.9283 13.6072 11.3702 13.6072 10.6779C13.6072 9.98554 13.065 9.42744 12.4072 9.42744C11.7493 9.42744 11.2072 9.98554 11.2072 10.6778C11.2072 11.3702 11.7493 11.9283 12.4072 11.9283Z" fill="#999999"></path></svg> </li>
                      <li class="ml-1 fz-16 text-black">
                        {{(data.country_name!='' && data.country_name!= null)?data.country_name: ''}}
                        {{(data.state_name!='' && data.state_name!= null)?', '+data.state_name: ''}}
                        {{(data.city_name!='' && data.city_name!= null)?', '+data.city_name: ''}}
                        {{ (data.role_name!=''&& data.role_name != null)?' | '+data.role_name: '' }}
                      </li> 
                  </ul>
                </div>
            </div>

            <div class="pl-30" mb-3>
              <b-row>
                  <b-col xl="3" lg="3" md="3" sm="12">
                  <h5 class="text-black mb-0"><b>${{data.hourly_rate}}.00</b> /Day</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12" v-if="data.totalEarn >0">
                  <h5 class="text-black mb-0" ><b>${{data.totalEarn}}</b> earned</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12" v-if="data.jobSuccessRate > 0">
                  <h5 class="text-black mb-0" v-if="data.jobSuccessRate > 0"><b>{{data.jobSuccessRate}}%</b> Job Success</h5>
                  </b-col>
                  <b-col xl="3" lg="3" md="3" sm="12" v-if="data.talent_id > 0">
                    <TalentBage :talentQualilty="talentQualilty" :talent_id="data.talent_id"/>
                  </b-col>
              </b-row>
            </div>

            <template v-if="data.about_self_desc!=''">
                <!-- <vue-read-more-smooth :lines="3" class="mt-2"> -->
                <p class="fz-16 text-muted mb-3 search-description pl-30 mt-3" v-html="data.about_self_desc"> </p>
                <!-- <p class="fz-14 text-muted mb-2" v-html="data.about_self_desc"  v-b-toggle.sidebar-right @click="sideBarData.jobDetails = jobDetails ;opendsideBar(data);"> </p> -->
                <!-- </vue-read-more-smooth> -->
            </template>

            <div class="skill-slider-wrapper mt-3 pl-30" v-if="data.skillNameCertificate.length > 0">
                <ul class="inline-block align-items-center fz-14 post tags mb-0 w-100 ml-0 ml--35" style="margin-left:-32px!important;" >
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

            <div class="pl-30">
              <b-row>
                <template v-for="(ass, index) in data.associate">
                <b-col xl="6" lg="6" sm="12"  :key="index" v-if="ass.agency_type == 1">
                  <div class="d-flex align-items-normal border br-20 p-2">
                      <div>
                        <div class="shadow-lg">
                            <img :src="ass.profile_picture_path" alt="" class="rounded-md shadow w-10 h-10">
                        </div>
                      </div>
                      <div class="ml-2">
                        <h6 class="text-black fw-600 mb-1">Associated with</h6>
                        <p class="mb-0 fz-14 text-muted">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</p>
                        <!-- <p class="mb-0 fz-14 text-muted"><a :href="$router.resolve({name:'agencyPublicProfile', path:'/agency-public-profile', params:{encodedid(uid:ass.login_master_id)}}).href" target="_blank">{{ass.first_name}} {{(ass.last_name!='')?ass.last_name:''}}</a></p> -->
                      </div>
                  </div>
                </b-col>
                </template>
              </b-row>
            </div>
            </div>
        </div>
        <div v-else>
          <div class="text-center py-4 text-theme" v-if="loaderStatus">
            <b-spinner type="border" medium></b-spinner>
          </div>
          <template v-else>
            <div class="job-card py-8 px-4 pb-4 mb-2 text-center dashboard-empty">
            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2 m-auto">
                <path d="M66.1246 6.34896C71.2699 2.78071 78.0895 2.78071 83.2348 6.34896C86.5425 8.64289 90.6329 9.51233 94.5877 8.76211C100.74 7.59512 106.97 10.3689 110.219 15.7214C112.307 19.1624 115.691 21.6204 119.609 22.5436C125.703 23.9797 130.266 29.0476 131.057 35.2589C131.566 39.252 133.657 42.8736 136.861 45.3106C141.844 49.1014 143.952 55.5872 142.148 61.5833C140.989 65.438 141.426 69.5969 143.361 73.1263C146.372 78.6164 145.659 85.3986 141.573 90.1427C138.946 93.1926 137.653 97.1697 137.986 101.181C138.504 107.421 135.094 113.327 129.431 115.999C125.791 117.717 122.992 120.824 121.665 124.624C119.6 130.536 114.082 134.544 107.822 134.682C103.798 134.77 99.9778 136.471 97.2192 139.402C92.9283 143.962 86.2577 145.38 80.483 142.96C76.7706 141.404 72.5888 141.404 68.8764 142.96C63.1017 145.38 56.4311 143.962 52.1401 139.402C49.3816 136.471 45.5613 134.77 41.537 134.682C35.277 134.544 29.7598 130.536 27.6946 124.624C26.3669 120.824 23.5687 117.717 19.9282 115.999C14.2654 113.327 10.8556 107.421 11.3732 101.181C11.7059 97.1697 10.4136 93.1926 7.78652 90.1427C3.7 85.3986 2.98715 78.6164 5.99803 73.1263C7.93364 69.5969 8.37075 65.438 7.21125 61.5833C5.40762 55.5872 7.51499 49.1014 12.4986 45.3106C15.7024 42.8736 17.7933 39.252 18.3019 35.2589C19.093 29.0476 23.6562 23.9797 29.7508 22.5436C33.6688 21.6204 37.052 19.1624 39.1407 15.7214C42.3898 10.3689 48.6199 7.59512 54.7716 8.76211C58.7264 9.51233 62.8169 8.64289 66.1246 6.34896Z" fill="#F2613C"/>
                <path d="M68.7901 83.7077H76.827L84.2389 55.3104L86.8286 44.0586H74.5945L72.8978 55.3104L68.7901 83.7077ZM68.8794 104.961C74.0587 104.961 77.6307 100.496 77.6307 96.0311C77.6307 92.1912 75.1303 89.3336 71.2904 89.3336C66.1111 89.3336 62.5391 93.9772 62.5391 98.3529C62.5391 102.282 65.0395 104.961 68.8794 104.961Z" fill="white"/>
            </svg>
            <p class="fz-20 fw-600 text-black mb-0">There are no results that match your search</p>
            </div>
          </template>
            
        </div>
        <!-- right side bar  -->
        <b-sidebar v-if="sidebarStatus" id="sidebar-right" ref="mySidebar" title="" shadow right backdrop class="sidebar-message" no-close-on-backdrop>
            <UserDetails ref="getUserDetailsData" :urlStatus="showPostjobList" :pageType="pageType" :sideBarData="sideBarData" :talentQualilty="talentQualilty" ></UserDetails>
        </b-sidebar>

        <!-- modal for job invitation -->
        <b-modal centered no-close-on-backdrop id="invite-job-modal-1" size="lg" title="Invite to job" >
            <div class="flex items-center py-2 mb-4">
            <a class="flex items-center">
                <div class="shadow-lg br-50 p-1 pos-rel">
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
                ></b-form-textarea>
                <div class="error" v-if="invitation_message[0]">{{invitation_message[0]}}</div>
            </div>
            <div class="form-group" v-if="PostJobList.length > 0 && showPostjobList">
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
                v-if="PostJobList.length > 0 || showPostjobList== false"
                size="lg"
                class="btn btn-theme"
                @click="sendInvitation"
                :disabled="(invitationAlreadySend == true ) ? true : false "
                >Save
                </b-button>
                <b-button
                v-else
                size="lg"
                class="btn btn-theme"
                @click="$router.push({name:'post-job',path:'/client/post-job/',params:{pid:'POID'}})"
                >Complete Your Job Post
                </b-button>
            </div>
            </template>
        </b-modal>

        </div>
    </div>
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
      props:['pageType','jobDetails','talentQualilty'],
      data() {
        return {
          filterTab:false,
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
            // totalEarning:0,
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
          sidebarStatus:false,
          showPostjobList:true,
          job_id:'',
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
            // this.filterByData();
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
            // this.filterByData();
          }
      },
      methods: {
        ...mapActions(["genericAPIPOSTRequest","fetchLanguageList","fetchExperienceLevelList","fetchCertificationList"]),
        ...mapActions("global",["fetchQpRoleMasterList"]),
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
        // // this fun is for to  change skill
        // changeSubcategory(){
        //   this.filtersValue.hideSubCategory = false;
        // },
        // this fun is for to open side bar data
        opendsideBar(data){
          this.sidebarStatus=true;
          this.sideBarData.userDetails = data;
          this.$refs.getUserDetailsData.getSidebarDatas();
        },
        // this fun is for to view certification 
        certificationView(_i,type){
          if(type == 'more'){
            $('.'+_i).show();
            $('#'+_i+'-more').hide();
            $('#'+_i+'-less').show();
  
          }else{
            $('.'+_i).hide();
            $('#'+_i+'-more').show();
            $('#'+_i+'-less').hide();
          }
        },
        // this fun is for to reset invitation model
        resetInvitationModel(){
          this.$bvModal.hide('invite-job-modal-1');
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
          if(this.showPostjobList == false){
            this.inviteModelDatas.job_id = this.job_id;
          }
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
          if (this.showPostjobList == false) {
            this.checkInvitationsent(this.job_id);
          }
        },
  
        // this fun is for to get posted Jobs
        async getpostedJobs() {
          var res = await this.genericAPIPOSTRequest({
              requestUrl: "getUserPostedJob",
              params: {'filter':1},
          });  
          this.PostJobList = res;
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
        
        // this fun is for to get skill on change
        changeCategory(_i){
          this.filtersValue.skillData = '';
          this.categoryData.map(data=>{
            if(data.qp_role_master_id == _i){
              this.skillData = data.skills;
              return false;
            }
          });
        },
        
        // this fun is for to get filter data
        async getfilterData(){
          this.fetchQpRoleMasterList();
          this.fetchLanguageList();
          this.fetchExperienceLevelList();
          this.fetchCertificationList();
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
            this.filtersValue.job_id = this.job_id;
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
          this.filtersValue.job_id = this.job_id;
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
          }else if(this.filtersValue.categoryData !='' && this.filtersValue.categoryData != null){
            return true; 
          }else if(this.filtersValue.skillData!='' && this.filtersValue.skillData != null){
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
          // this.filterByData();
        },
        // this fun is for to clear all filter value
        clearFilter(){
          this.hideClearBtn=false;
          this.priceFrom =10;
          this.priceTo =100;
          this.filtersValue = {
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
            hideSubCategory:true,
          };
          this.userData = [];
          this.skillData=[];
          this.getData();
        },
      // this fun is for to get data when it call from parent component
        getsearchTab(){
          this.userData=[];
          this.filtersValue= {
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
            hideSubCategory:true,
          };
          this.busy=false;
          this.getData();
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
        // filterCategory(){
        // // function to compare names
        //   function compare(a, b) {
        //     if (a.job_title < b.job_title) return -1;
        //     if (a.job_title > b.job_title) return 1;
        //     return 0;
        //   }
        //   return this.categoryData.filter(user => {
        //       return user.role_name.toLowerCase().includes(this.search.toLowerCase());
        //   }).sort(compare);
        // },
  
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
        // totalEarning(){
        //       var amount=0;
        //       this.sideBarData.jobHistory.map(data => {
        //           amount+=parseInt(data.cost);
        //       });
        //       return amount;
        //   },
        
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
        if(this.$route.params.pid!='' && this.$route.params.pid != undefined){
          this.showPostjobList = false
          this.job_id = this.$route.params.pid;
        }
        // this is header for api
        this.headToken = { "Authorization": 'Bearer '+this.$store.state.currentUserData.token };
      },  
    }
  </script>
  <style>
  .input input{ opacity: 1 !important;}
  </style>