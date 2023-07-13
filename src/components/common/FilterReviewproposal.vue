<template>
    <div class="border-bottom pb-1 pt-3 px-4 ">
        <template>
            <div class="d-flex align-items-center justify-content-space-between search-input">
                <b-input-group class="mt-0">
                    <template #append>
                        <b-input-group-text class="bg-theme border-theme" v-on:click="filterByData()">
                            <svg width="27" height="28" viewBox="0 0 27 28" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.6212 5C14.6569 5 16.5707 5.79274 18.0102 7.23221C19.4496 8.67165 20.2424 10.5855 20.2424 12.6212C20.2424 14.6569 19.4496 16.5707 18.0102 18.0102C16.5707 19.4496 14.6569 20.2424 12.6212 20.2424C10.5855 20.2424 8.67165 19.4496 7.23221 18.0102C5.79274 16.5707 5 14.6569 5 12.6212C5 10.5855 5.79274 8.67165 7.23221 7.23221C8.67165 5.79274 10.5855 5 12.6212 5ZM6.4542 12.6212C6.4542 16.0217 9.22068 18.7881 12.6212 18.7881C16.0217 18.7881 18.7881 16.0217 18.7881 12.6212C18.7881 9.22068 16.0217 6.4542 12.6212 6.4542C9.22072 6.4542 6.4542 9.22068 6.4542 12.6212Z"
                                    fill="#FFF" />
                                <path
                                    d="M22.7868 21.7585L18.0069 16.9786C17.7229 16.6946 17.2625 16.6946 16.9786 16.9786C16.6946 17.2625 16.6946 17.7229 16.9786 18.0069L21.7584 22.7868C21.9004 22.9288 22.0865 22.9997 22.2726 22.9997C22.4587 22.9997 22.6448 22.9288 22.7868 22.7868C23.0707 22.5028 23.0707 22.0424 22.7868 21.7585Z"
                                    fill="#FFF" />
                            </svg>
                        </b-input-group-text>
                    </template>
                    <b-form-input placeholder="Search for Contract..." v-model="filtersValue.title"
                        @keyup="filterByData()"></b-form-input>
                </b-input-group>
                <button type="button" class="btn btn-theme-outline d-flex align-items-center no-focus"
                    @click="filterTab = !filterTab">
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.15625 4.625V9.625C9.15625 9.97018 8.87643 10.25 8.53125 10.25C8.18607 10.25 7.90625 9.97018 7.90625 9.625V4.625C7.90625 4.27982 8.18607 4 8.53125 4C8.87643 4 9.15625 4.27982 9.15625 4.625ZM11.6562 17.125C11.6562 18.8509 10.2571 20.25 8.53125 20.25C6.80536 20.25 5.40625 18.8509 5.40625 17.125C5.40625 15.3991 6.80536 14 8.53125 14C10.2571 14 11.6562 15.3991 11.6562 17.125ZM9.15625 21.4557V23.375C9.15625 23.7202 8.87643 24 8.53125 24C8.18607 24 7.90625 23.7202 7.90625 23.375V21.4557C5.78607 21.1524 4.15625 19.329 4.15625 17.125C4.15625 14.7088 6.115 12.75 8.53125 12.75C10.9475 12.75 12.9062 14.7088 12.9062 17.125C12.9062 19.329 11.2764 21.1524 9.15625 21.4557ZM20.1562 23.375C20.1562 23.7202 20.4361 24 20.7812 24C21.1264 24 21.4062 23.7202 21.4062 23.375V18.375C21.4062 18.0298 21.1264 17.75 20.7812 17.75C20.4361 17.75 20.1562 18.0298 20.1562 18.375V23.375ZM20.1562 6.54431V4.625C20.1562 4.27982 20.4361 4 20.7812 4C21.1264 4 21.4062 4.27982 21.4062 4.625V6.54431C23.5264 6.84757 25.1562 8.67096 25.1562 10.875C25.1562 13.2912 23.1975 15.25 20.7812 15.25C18.365 15.25 16.4062 13.2912 16.4062 10.875C16.4062 8.67096 18.0361 6.84757 20.1562 6.54431ZM20.7812 7.75C22.5071 7.75 23.9062 9.14911 23.9062 10.875C23.9062 12.6009 22.5071 14 20.7812 14C19.0554 14 17.6562 12.6009 17.6562 10.875C17.6562 9.14911 19.0554 7.75 20.7812 7.75Z"
                            fill="#666666" />
                    </svg>
                    <span class="text-theme fz-16 fw-600">Filter</span>
                </button>
            </div>
            <b-row v-if="filterTab">
                <b-col cols="12">
                    <div class="dropdown-filter bg-white p-0">
                        <div>
                            <div class="selected-tags mb-2 mt-3">
                                <div class="tags-wrap">
                                    <ul>
                                        <template v-if="filtersValue.talentQualilty.length > 0">
                                            <li class="mr-1 inline-block align-items-center bg-theme"
                                                v-for="(quality, id) in filtersValue.talentQualilty" :key="id">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{ filterName('quality', quality) }}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click="removeFilterValue('quality', id)">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if="filtersValue.categoryData != ''">
                                            <li class="mr-1 inline-block align-items-center bg-theme">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    Category: {{ filterName('category', filtersValue.categoryData) }}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click="filtersValue.categoryData = '' ; filtersValue.skillData = '';removeFilterValue()">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.skillData != '' && filtersValue.skillData != null ">
                                            <li class="mr-1 inline-block align-items-center bg-theme">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    Subcategory: {{filterName('skill',filtersValue.skillData)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" filtersValue.skillData = ''; removeFilterValue()">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.experience != '' ">
                                            <li class="mr-1 inline-block align-items-center bg-theme">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{filterName('experience',filtersValue.experience)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" filtersValue.experience = ''; removeFilterValue()">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.certification != '' ">
                                            <li class="mr-1 inline-block align-items-center bg-theme"
                                                v-for="( cert, id ) in  filtersValue.certification " :key=" id ">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{filterName('certification',cert)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" removeFilterValue('certification', id) ">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.talentType != '' && filtersValue.talentType != null ">
                                            <li class="mr-1 inline-block align-items-center bg-theme">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{filterName('talent',filtersValue.talentType)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" filtersValue.talentType = null; removeFilterValue()">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.successtype != '' && filtersValue.successtype != null ">
                                            <li class="mr-1 inline-block align-items-center bg-theme">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{filterName('success',filtersValue.successtype)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" filtersValue.successtype = null; removeFilterValue()">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.earntype != '' && filtersValue.earntype != null ">
                                            <li class="mr-1 inline-block align-items-center bg-theme">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{filterName('earn',filtersValue.earntype)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" filtersValue.earntype = null; removeFilterValue()">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.englishtype != '' && filtersValue.englishtype != null ">
                                            <li class="mr-1 inline-block align-items-center bg-theme">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{filterName('english',filtersValue.englishtype)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" filtersValue.englishtype = null;removeFilterValue()">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.locationData.length > 0 ">
                                            <li class="mr-1 inline-block align-items-center bg-theme"
                                                v-for="( loc_data, id ) in  filtersValue.locationData " :key=" id ">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{loc_data.location}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" removeFilterValue('locationData', id);removeFilterValue(); ">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" filtersValue.otherLang.length > 0 ">
                                            <li class="mr-1 inline-block align-items-center bg-theme"
                                                v-for="( lang, id ) in  filtersValue.otherLang " :key=" id ">
                                                <a href="javascript:void(0);"
                                                    class="cursor-pointer d-flex align-items-center text-white">
                                                    {{filterName('otherLang',lang)}}
                                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                                        @click=" removeFilterValue('otherLang', id) ">
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                                            fill="#FFF"></rect>
                                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                                            fill="#FFF"></rect>
                                                    </svg>
                                                </a>
                                            </li>
                                        </template>

                                        <template v-if=" hideClearBtn ">
                                            <li class="mr-1 inline-block">
                                                <a href="javascript:void(0);"
                                                    class="mr-1 inline-block cursor-pointer text-black d-block"
                                                    @click=" clearFilter(1); ">
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
                                        <span v-for="( talent, index ) in  searchData.talentQualilty " :key=" index ">
                                            <b-form-checkbox name="tq" class="fz-18 d-flex align-items-center mb-2"
                                                :value=" talent.talent_id " stacked v-model=" filtersValue.talentQualilty "
                                                @change=" hideClearBtn = checkFilterdata() ">
                                                <img :src=" talent.img " width="20" height="20" style="margin-right:10px;">
                                                {{talent.talent_title}}
                                            </b-form-checkbox>
                                        </span>
                                    </b-form-group>
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Experience level</label>
                                    <b-form-radio-group class="fz-16 mb-2 input" :options=" searchData.experienceLevelData "
                                        value-field="experience_id" text-field="title" name="el" stacked
                                        v-model=" filtersValue.experience "
                                        @change=" hideClearBtn = checkFilterdata() "></b-form-radio-group>
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Talent type</label>
                                    <b-form-radio-group class="fz-16 mb-2 input" :options=" searchData.talentType "
                                        value-field="value" text-field="title" name="tt" stacked
                                        v-model=" filtersValue.talentType "
                                        @change=" hideClearBtn = checkFilterdata() "></b-form-radio-group>
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Job success</label>
                                    <b-form-radio-group class="fz-16 input" :options=" searchData.successtype "
                                        value-field="value" text-field="title" name="st" stacked
                                        v-model=" filtersValue.successtype "
                                        @change=" hideClearBtn = checkFilterdata() "></b-form-radio-group>
                                    <!-- <a href="javascript:void(0);" class="text-theme ml-6">See more</a> -->
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Earned amount</label>
                                    <b-form-radio-group class="fz-16 input" :options=" searchData.earntype "
                                        value-field="value" text-field="title" name="et" stacked
                                        v-model=" filtersValue.earntype "
                                        @change=" hideClearBtn = checkFilterdata() "></b-form-radio-group>
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">English Level</label>
                                    <b-form-radio-group class="fz-16 input" :options=" searchData.englishtype "
                                        value-field="value" text-field="title" name="ent" stacked
                                        v-model=" filtersValue.englishtype "
                                        @change=" hideClearBtn = checkFilterdata() "></b-form-radio-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-2">Day rate's</label><br>
                                    <div class="d-flex align-items-center justify-content-space-between">
                                        <div class="form-group mr-2">
                                            <label>Min</label>
                                            <input type="number" v-model=" priceFrom " @keyup=" updatefromDayValue() "
                                                minlength="1" maxlength="12" autocomplete="nope"
                                                onselectstart="return false" onpaste="return false" onCopy="return false"
                                                onCut="return false" onDrag="return false" onDrop="return false"
                                                class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>Max</label>
                                            <input type="number" v-model=" priceTo " @keypress=" updatetoDayValue() "
                                                minlength="2" maxlength="12" autocomplete="nope"
                                                onselectstart="return false" onpaste="return false" onCopy="return false"
                                                onCut="return false" onDrag="return false" onDrop="return false"
                                                class="form-control" />
                                        </div>
                                    </div>
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Category</label><br>
                                    <b-form-select v-model=" filtersValue.categoryData " :options=" searchData.categoryData "
                                        value-field="qp_role_master_id" text-field="role_name" class="form-control w-100"
                                        @change=" changeCategory($event); hideClearBtn = checkFilterdata() "></b-form-select>
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Sub Category</label><br>
                                    <b-form-select v-model=" filtersValue.skillData " :options=" searchData.skillData "
                                        value-field="qp_role_skill_master_id" text-field="skill_name"
                                        class="form-control w-100"
                                        @change=" hideClearBtn = checkFilterdata() "></b-form-select>
                                </b-col>
                                <!-- <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Locations</label><br>
                                    <div class="input-group search-bar">
                                        <div class="tt-menu"
                                            style="top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 2px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                                            <input type="text" class="form-control border-none" v-model=" location "
                                                placeholder="Search for Location" v-on:keyup=" searchLocation() ">
                                            <b-form-group v-if=" location != '' ">
                                                <b-form-checkbox v-for="( loc, id ) in  searchData.locationData " :key=" id "
                                                    :value=" loc " v-model=" filtersValue.locationData "
                                                    @change=" hideClearBtn = checkFilterdata() ">
                                                    {{ loc.location }}
                                                </b-form-checkbox>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Other Languages</label><br>
                                    <div class="input-group search-bar">
                                        <div class="tt-menu"
                                            style="position: absolute;top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 2px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                                            <input type="text" class="form-control border-none" v-model=" searchLang "
                                                placeholder="Search for Language" aria-describedby="basic-addon2">
                                            <b-form-group v-if=" searchLang != '' ">
                                                <b-form-checkbox v-for="( lang, id ) in  languagefilterData " :key=" id "
                                                    :value=" lang.id " v-model=" filtersValue.otherLang "
                                                    @change=" hideClearBtn = checkFilterdata() ">
                                                    {{ lang.value }}
                                                </b-form-checkbox>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </b-col> -->
                                <b-col xl="2" lg="2" sm="12">
                                    <label class="fz-18 fw-600 text-black mb-4">Locations</label><br>
                                    <div class="input-group search-bar">
                                    <div class="tt-menu rp-filter" style="top: 100%;left: 0px;z-index: 100;display: block;background-color: #fff;width: 100%;padding: 2px;max-height: 150pxoverflow-y: scroll;overflow-x: hidden;margin-top: 2px;border: 1px solid #D3D3D3!important;border-radius: 8px;">
                                    <input type="text" class="form-control border-none" v-model="location" placeholder="Search for Location" v-on:keyup="searchLocation()">
                                    <div class="certification-drop p-2 border bg-white certification-scroll"  v-if="location!=''">
                                        <b-form-group>
                                            <b-form-checkbox
                                            v-for="(loc,id) in searchData.locationData"
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
                                            <input class="form-check-input" v-model="filtersValue.certification" :value="c_type.certification_type_master_id" type="checkbox" :id="'defaultCheck'+index+ids">
                                            <label class="form-check-label" :for="'defaultCheck'+index+ids">
                                                {{c_type.certification}}
                                            </label>
                                            </div>
                                            <div class="form-check" :class="cer.certification_master_id" v-else style="display:none;">
                                            <input class="form-check-input" v-model="filtersValue.certification" :value="c_type.certification_type_master_id" type="checkbox" :id="'defaultCheck'+index+ids">
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
                            <b-button class="btn btn-theme mr-2" @click=" filterByData(); filterTab = !filterTab ">Apply
                                Filter</b-button>
                            <b-button class="btn btn-outline-theme"
                                @click=" filterTab = !filterTab; clearFilter(0);">Cancel</b-button>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <div class="selected-tags mb-2 mt-3" v-if=" !filterTab ">
                <div class="tags-wrap">
                    <ul>
                        <template v-if=" filtersValue.talentQualilty.length > 0 ">
                            <li class="mr-1 inline-block align-items-center bg-theme"
                                v-for="( quality, id ) in  filtersValue.talentQualilty " :key=" id ">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('quality',quality)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" removeFilterValue('quality', id); filterByData(); ">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.categoryData != '' ">
                            <li class="mr-1 inline-block align-items-center bg-theme">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    Category: {{filterName('category',filtersValue.categoryData)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" filtersValue.categoryData = ''; filtersValue.skillData = ''; filterByData(); removeFilterValue()">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.skillData != '' && filterByData.hideSubCategory == false ">
                            <li class="mr-1 inline-block align-items-center bg-theme">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    Subcategory: {{filterName('skill',filtersValue.skillData)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" filtersValue.skillData = ''; filterByData(); removeFilterValue()">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.experience != '' ">
                            <li class="mr-1 inline-block align-items-center bg-theme">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('experience',filtersValue.experience)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" filtersValue.experience = ''; filterByData(); removeFilterValue()">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.certification != '' ">
                            <li class="mr-1 inline-block align-items-center bg-theme"
                                v-for="( cert, id ) in  filtersValue.certification " :key=" id ">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('certification',cert)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" removeFilterValue('certification', id); filterByData();">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.talentType != '' && filtersValue.talentType != null ">
                            <li class="mr-1 inline-block align-items-center bg-theme">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('talent',filtersValue.talentType)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" filtersValue.talentType = null; filterByData(); removeFilterValue()">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>
                        
                        <template v-if=" filtersValue.successtype != '' && filtersValue.successtype != null ">
                            <li class="mr-1 inline-block align-items-center bg-theme">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('success',filtersValue.successtype)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" filtersValue.successtype = null; filterByData(); removeFilterValue()">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>
                        
                        <template v-if=" filtersValue.earntype != '' && filtersValue.earntype != null ">
                            <li class="mr-1 inline-block align-items-center bg-theme">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('earn',filtersValue.earntype)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" filtersValue.earntype = null; filterByData(); removeFilterValue()">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.englishtype != '' && filtersValue.englishtype != null ">
                            <li class="mr-1 inline-block align-items-center bg-theme">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('english',filtersValue.englishtype)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" filtersValue.englishtype = null; filterByData(); removeFilterValue()">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.locationData.length > 0 ">
                            <li class="mr-1 inline-block align-items-center bg-theme"
                                v-for="( loc_data, id ) in  filtersValue.locationData " :key=" id ">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{loc_data.location}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" removeFilterValue('locationData', id); filterByData(); ">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>

                        <template v-if=" filtersValue.otherLang.length > 0 ">
                            <li class="mr-1 inline-block align-items-center bg-theme"
                                v-for="( lang, id ) in  filtersValue.otherLang " :key=" id ">
                                <a href="javascript:void(0);" class="cursor-pointer d-flex align-items-center text-white">
                                    {{filterName('otherLang',lang)}}
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="#FFF"
                                        xmlns="http://www.w3.org/2000/svg" class="ml-2"
                                        @click=" removeFilterValue('otherLang', id); filterByData();">
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)"
                                            fill="#FFF"></rect>
                                        <rect width="0.878423" height="8.78423" rx="0.439212"
                                            transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)"
                                            fill="#FFF"></rect>
                                    </svg>
                                </a>
                            </li>
                        </template>
                        <template v-if=" hideClearBtn ">
                            <li class="mr-1 inline-block">
                                <a href="javascript:void(0);" class="mr-1 inline-block cursor-pointer text-black d-block"
                                    @click=" clearFilter(0);" v-if=" hideClearBtn ">
                                    Clear Filter
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    props: ['searchData','pageName'],
    data() {
        return {
            filterTab:false,
            priceFrom: 0,
            priceTo: 100,
            location: '',
            searchLang: '',
            searchCertification:'',
            filtersValue: {
                talentQualilty: [],
                price: [0, 100],
                categoryData: '',
                skillData: '',
                experience: '',
                certification: [],
                talentType: null,
                successtype: null,
                earntype: null,
                hourstype: null,
                englishtype: null,
                locationData: [],
                otherLang: [],
                title: '',
            },
            hideClearBtn: false,
        }
    },
    computed: {
        languagefilterData() {
            // function to compare names
            function compare(a, b) {
                if (a.value < b.value) return -1;
                if (a.value > b.value) return 1;
                return 0;
            }
            if (this.searchData.languageData.length > 0) {
                return this.searchData.languageData.filter(data => {
                    return data.value.toLowerCase().includes(this.searchLang.toLowerCase());
                }).sort(compare);
            } else {
                return [];
            }
        },
        filterCertification(){
            var that =this;
            return that.searchData.certificationData.filter(function(el) {
                // return el.certification_type_master.map(function(certifi_type) {
                //   return certifi_type.certification.toLowerCase().includes(that.searchCertification.toLowerCase());
                // });
                return el.certification.toLowerCase().includes(that.searchCertification.toLowerCase());
            });
        },
    },
    
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to Remove select category
        removeFilterValue(key, index) {
            if (key == 'quality') {
                this.filtersValue.talentQualilty.splice(index, 1);
            }
            if (key == 'locationData') {
                this.filtersValue.locationData.splice(index, 1);
            }
            if (key == 'otherLang') {
                this.filtersValue.otherLang.splice(index, 1)
            }
            if (key == 'certification') {
                this.filtersValue.certification.splice(index, 1)
            }
            this.hideClearBtn = this.checkFilterdata();
        },
        // this fun is for to clear all filter value
        clearFilter(_v) {
            this.hideClearBtn = false;
            this.priceFrom = 10;
            this.priceTo = 100;
            this.filtersValue = {
                talentQualilty: [],
                price: [0, 100],
                categoryData: '',
                skillData: '',
                experience: '',
                certification: [],
                talentType: null,
                successtype: null,
                earntype: null,
                hourstype: null,
                englishtype: null,
                locationData: [],
                otherLang: [],
                title: '',
            };
            this.proposalData = [];
            this.searchData.skillData = [];
            if(_v== 0){
                this.filterByData();
            }
        },
        // this fun is for to search location for filter
        async searchLocation() {
            const formData = new FormData()
            formData.append('input', this.location);
            var res = await this.genericAPIPOSTRequest({
                requestUrl: "common/getLocationAll",
                params: formData,
            });
            if (res.length > 0) {
                this.searchData.locationData = res;
            }
        },
        // this fun for to check filter array have value
        checkFilterdata() {
            if (this.filtersValue.talentQualilty.length > 0) {
                return true;
            } else if (this.filtersValue.categoryData != '') {
                return true;
            } else if (this.filtersValue.skillData != '') {
                return true;
            } else if (this.filtersValue.talentType != '' && this.filtersValue.talentType != null) {
                return true;
            } else if (this.filtersValue.successtype != '' && this.filtersValue.successtype != null) {
                return true;
            } else if (this.filtersValue.earntype != '' && this.filtersValue.earntype != null) {
                return true;
            } else if (this.filtersValue.hourstype != '' && this.filtersValue.hourstype != null) {
                return true;
            } else if (this.filtersValue.englishtype != '' && this.filtersValue.englishtype != null) {
                return true;
            } else if (this.filtersValue.experience != '' && this.filtersValue.experience != null) {
                return true;
            } else if (this.filtersValue.certification.length > 0) {
                return true;
            } else if (this.filtersValue.locationData.length > 0) {
                return true;
            } else if (this.filtersValue.otherLang.length > 0) {
                return true;
            } else {
                return false;
            }
        },
        // this fun is for to get filter name
        filterName(_t, _i) {
            var name;
            if (_t == 'quality') {
                this.searchData.talentQualilty.map(data => {
                    if (data.talent_id == _i) {
                        name = data.talent_title;
                        return false;
                    }
                });
            } else if (_t == 'category') {
                this.searchData.categoryData.map(data => {
                    if (data.qp_role_master_id == _i) {
                        name = data.role_name;
                    }
                });
            } else if (_t == 'skill') {
                this.searchData.skillData.map(data => {
                    if (data.qp_role_skill_master_id == _i) {
                        name = data.skill_name;
                    }
                });
            } else if (_t == 'talent') {
                this.searchData.talentType.map(data => {
                    if (data.value == _i) {
                        name = data.title;
                    }
                });
            } else if (_t == 'success') {
                this.searchData.successtype.map(data => {
                    if (data.value == _i) {
                        name = data.title;
                    }
                });
            } else if (_t == 'earn') {
                this.searchData.earntype.map(data => {
                    if (data.value == _i) {
                        name = data.title;
                    }
                });
            } else if (_t == 'hours') {
                this.searchData.hourstype.map(data => {
                    if (data.value == _i) {
                        name = data.title;
                    }
                });
            } else if (_t == 'english') {
                this.searchData.englishtype.map(data => {
                    if (data.value == _i) {
                        name = data.title;
                    }
                });
            } else if (_t == 'otherLang') {
                this.searchData.languageData.map(data => {
                    if (data.id == _i) {
                        name = data.value;
                    }
                });
            } else if (_t == 'experience') {
                this.searchData.experienceLevelData.map(data => {
                    if (data.experience_id == _i) {
                        name = data.title;
                    }
                });
            } else if (_t == 'certification') {
                this.searchData.certificationTypeData.map(data => {
                    if (data.certification_type_master_id == _i) {
                        name = data.certification;
                    }
                });
            }
            return name;
        },
        // this function is for to get filter data
        async filterByData() {
            if(this.pageName == 'allproposal' || this.pageName == 'shortlisted' || this.pageName == 'messaged' || this.pageName == 'archived'){
                this.$emit('filterByData',this.filtersValue);
            }
            
        },
        // this fun is for to get skill on change
        changeCategory(_i) {
            this.filtersValue.skillData = '';
            this.searchData.categoryData.map(data => {
                if (data.qp_role_master_id == _i) {
                    this.searchData.skillData = data.skills;
                    return false;
                }
            });
        },
    }
}
</script>
  
  