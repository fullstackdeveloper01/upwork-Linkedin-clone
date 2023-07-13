<template>
  <div style="height: 100vh">
    <!-- <h1 class="mt-40 text-lg font-bold text-center xl:text-2xl">Find a Job</h1> -->
    <div class="w-full px-4 py-20 mt-40 bg-white border-2 border-dashed rounded-md shadow-sm border-primary-500 xl:px-0 xl:max-w-7xl xl:mx-auto">
      <div class="flex justify-center">
        <NoPostIcon class="w-54 h-54" />
      </div>
      <h3 class="flex justify-center mt-4 text-xl font-bold xl:text-2xl">
        No Jobs Posted yet!
      </h3>
    </div>
    <div class="slim-mainpanel">
        <div class="job-post-wrapper mt-40">
            <div class="container">
                <div class="row mb-20">
                    <div class="col-lg-12 col-md-12">
                        <div class="card card-table plans initial-step p-0">
                            <div class="card-header">
                                <h3>Getting started</h3>
                            </div>
                            <div class="card-body">
                                <div class="mx-height-900 mn-height-700 bg-image">
                                    <div class="mb-10">
                                        <h2 class="mb-0 fs-title">What would you like to do?</h2>
                                    </div>
                                    <div class="row ">
                                        <div class="col-lg-12 col-12 pl4 pr4">
                                            <div class="new-wrap">
                                                <div class="form-check mb-3 pl-0">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input selectjob mr-2" id="customRadio" name="Job" value="newJob" checked/>
                                                        <label class="custom-control-label" for="customRadio">Create a new job post</label>
                                                    </div>
                                                </div>
                                                <div class="select-wrap select-employment-type-wrap mb-3 hideJob" id="newJob">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-12 pl4 pr4">
                                                            <div>
                                                                <input type="radio" name="radio" id="radio-employement" class="radio" checked/>
                                                                <label for="radio-employement">
                                                                    <div class="up-icon md">
                                                                        <img src="http://192.168.64.2/qapin_mvp5/assets/img/job/new/recruitment.png" class="img-fluid">
                                                                    </div><br><br>
                                                                    <h4 class="mb-2 text-theme fz-20">ADHOC</h4>
                                                                    <h5 class="mb-2 text-muted font-normal fz-14">Less than 30 hrs/week</h5>
                                                                    <h4 class="font-normal fz-20 text-black">Based on requirement</h4>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-12 pl4 pr4">
                                                            <div>
                                                                <input type="radio" name="radio" id="radio-employement1" class="radio"/>
                                                                <label for="radio-employement1">
                                                                    <div class="up-icon md">
                                                                        <img src="http://192.168.64.2/qapin_mvp5/assets/img/job/new/clock.png" class="img-fluid">
                                                                    </div>
                                                                    <br><br>
                                                                    <h4 class="mb-2 text-theme fz-20">RESIDENCE, LONG TERM</h4>
                                                                    <h5 class="mb-2 text-muted font-normal fz-14">More Than 30 Hrs/Week</h5>
                                                                    <h4 class="font-normal fz-20 text-black">More Than 03 Months</h4>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-12 pl4 pr4">
                                                            <div>
                                                                <input type="radio" name="radio" id="radio-employement2" class="radio"/>
                                                                <label for="radio-employement2">
                                                                    <div class="up-icon md">
                                                                        <img src="http://192.168.64.2/qapin_mvp5/assets/img/job/new/clipboard.png" class="img-fluid">
                                                                    </div>
                                                                    <br><br>
                                                                    <h4 class="mb-2 text-theme fz-20">RESIDENCE, LONG TERM</h4>
                                                                    <h5 class="text-muted font-normal fz-14">More Than 40 Hrs/Week</h5>
                                                                    <h4 class="font-normal fz-20 text-black">More Than 3 Months</h4>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4 col-12 pl4 pr4">
                                            <div class="form-group draft-wrap">
                                                <div class="form-check mb-3 pl-0">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input selectjob mr-2" id="customRadio1" name="Job" value="draftJob">
                                                        <label class="custom-control-label" for="customRadio1">Edit an existing draft</label>
                                                    </div>
                                                </div>
                                                <select class="form-control hideJob" id="draftJob">
                                                    <option>UI Design</option>
                                                    <option>Theme Creation</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4 col-12 pl4 pr4">
                                            <div class="form-group reuse-job-wrap">
                                                <div class="form-check mb-3 pl-0">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input selectjob mr-2" id="customRadio2" name="Job" value="reuseJob">
                                                        <label class="custom-control-label" for="customRadio2">Reuse a prevoius job post</label>
                                                    </div>
                                                </div>
                                                <select class="form-control hideJob" id="reuseJob">
                                                    <option>Mechanical Inspector </option>
                                                    <option>Coating inspector</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!--<div class="row">
                                        <div class="col-lg-12 col-12 pl4 pr4">
                                            <div class="form-group team-wrap">
                                                <label class="fz-16" for="team">Which team is this for?</label>
                                                <select class="form-control" id="team">
                                                    <option>Fides Engineering</option>
                                                    <option>Laravel Developer - Full time</option>
                                                    <option>React Developer - Part time</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>-->
                                </div>
                            </div>
                            <div class="card-footer bg-white">
                                <div class="row">
                                    <div class="col-md-12 text-right">
                                        <button type="submit" class="btn action-nxt-btn mr-2 nxt next" value="step-form" id="Next">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center step-form">
                    <div class="col-md-12">
                        <form id="msform">
                            <div class="wrap d-md-flex">
                                <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://192.168.64.2/qapin_mvp5/assets/img/union-white.png);
                                background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;height: auto;;border-radius: 20px 0 0 20px;width:40%;">
                                    <!-- progressbar -->
                                    <ul id="progress-bar" class="progressbar">
                                        <li class="">Title</li>
                                        <li>Skills</li>
                                        <li>Scope</li>
                                        <li>Budget</li>
                                    </ul><br>
                                    <div class="text w-100 text-left">
                                        <div class="step-left-1">
                                            <h1 class="mb-4 text-white">Let's start with a strong title.</h1>
                                            <p class="text-white">This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!</p>
                                        </div>
                                        <div class="step-left-2 hidden">
                                            <h1 class="mb-4 text-white">What skills does your work require?</h1>
                                            <p class="text-white">This helps your job post stand out to the right candidates. it’s the first thing they’ll see, so make it count!</p>
                                        </div>
                                        <div class="step-left-3 hidden">
                                            <h1 class="mb-4 text-white">Next, estimate the scope of your work.</h1>
                                            <p class="text-white">These aren’t final answers, but this information helps us recommend the right talent for what you need.</p>
                                        </div>
                                        <div class="step-left-4 hidden">
                                            <h1 class="mb-4 text-white">Please, tell us about your budget.</h1>
                                            <p class="text-white">This will help us match you to talent within your range.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="login-wrap text-left">
                                    <div class="row h-100">
                                        <div class="col-lg-12">
                                            <!-- fieldsets -->
                                            <fieldset class="step1 h-100">
                                                <div class="content-right-wrap p-4 p-md-5">
                                                    <h2 class="fs-title">Write a title for your job post</h2>
                                                    <input type="text" name="text" id="title" class="form-control mb-5" placeholder="Eg- Pressure Vessel Inspector required" />
                                                    <div class="mt-40">
                                                        <h2 class="mb-3 fs-title">Example titles</h2> 
                                                        <ul class="example-wrap mb-5">
                                                            <li>
                                                                Looking for INDIAN inspectors who are in CHINA now
                                                            </li>
                                                            <li>
                                                                Need A Double Coating Inspector(E&I Inspector)
                                                            </li>
                                                            <li>
                                                                Pressure vessel inspector required
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="category-wrap mb-5">
                                                        <h2 class="mb-3 fs-title">Quality professional category</h2>
                                                        <div class="row">
                                                            <div class="col-lg-6 col-12">
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category1" name="Job" value="draftJob" checked/>
                                                                        <label class="custom-control-label fz-15" for="category1">Mechanical Inspector</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category2" name="Job" value="draftJob">
                                                                        <label class="custom-control-label fz-15" for="category2">E&I Inspector</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category3" name="Job" value="draftJob">
                                                                        <label class="custom-control-label fz-15" for="category3">Coating Inspector</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category4" name="Job" value="draftJob">
                                                                        <label class="custom-control-label fz-15" for="category4">Apparel Inspector</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category5" name="Job" value="draftJob">
                                                                        <label class="custom-control-label fz-15" for="category5">Safety Engineer</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-12">
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category6" name="Job" value="draftJob">
                                                                        <label class="custom-control-label fz-15" for="category6">Civil Engineer</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category7" name="Job" value="draftJob">
                                                                        <label class="custom-control-label fz-15" for="category7"> Automotive Inspector</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                    <div class="custom-control custom-radio">
                                                                        <input type="radio" class="custom-control-input selectjob mr-2 mb-0" id="category8" name="Job" value="draftJob">
                                                                        <label class="custom-control-label fz-15" for="category8"> Marine Inspector</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="btn-wrap">
                                                    <div class="btn-group">
                                                        <button type="button" name="previous" class="previous prev1 action-prev-btn action-button btn mr-1" value="initial-step" id="Prev">Back</button>
                                                        <button type="button" name="next" class="next action-button action-nxt-btn nxt1 btn mt-2" value="step2" id="Next">Next</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset class="step2 h-100">
                                                <div class="content-right-wrap p-4 p-md-5">
                                                    <h2 class="fs-title">Search skills or add your own</h2>
                                                    <div class="form-group mb-5">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Search your skills here..."  aria-describedby="basic-addon2">
                                                            <div class="input-group-append">
                                                                <span class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></span>
                                                            </div><br>
                                                        </div>
                                                        <span class="text-theme"><small>For the best results, add 3-5 skills*</small></span>
                                                    </div>
                                                    <div class="skills-wrap">
                                                        <div class="selected-tags mb-5">
                                                            <div class="tags-wrap">
                                                                <h2 class="fs-title">Selected Skills</h2>
                                                                <ul>
                                                                    <li>
                                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                        <span class="mr-2">Wordpress</span>
                                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"/>
                                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"/>
                                                                        </svg>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="accordion mt-40" id="accordionExample">
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingOne">
                                                                    <h2 class="mb-0 fs-title" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        Mechanical Inspector
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingTwo">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                        E&I Inspector
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingThree">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                        Coating Inspector
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingFour">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                        Hard Goods Inspector
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingFive">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                        Apparel Inspector
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingSix">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                        Safety Engineer
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingSeven">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        Civil Engineer
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingEight">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        Automotive Inspector
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card p-0 pb-3">
                                                                <div class="card-head" id="headingNine">
                                                                    <h2 class="mb-0 collapsed fs-title" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                                        Marine Inspector
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="tags-wrap">
                                                                        <ul>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Wordpress</span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Web Design</span> 
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Theme Creation </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0);" class="d-flex align-items-center">
                                                                                        <span class="mr-2">Content Writing </span>
                                                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect x="5.25" y="0.000488281" width="1" height="10" rx="0.5" fill="#999999"/>
                                                                                            <rect x="0.75" y="5.50073" width="1" height="10" rx="0.5" transform="rotate(-90 0.75 5.50073)" fill="#999999"/>
                                                                                        </svg>
                                                                                    </a>
                                                                                </li>
                                                                                <a href="javascript:void(0);" class="text-theme fz-12">See More</a>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:void(0);" class="text-theme mb-5 d-flex align-items-center">
                                                            <span class="pr-2" data-toggle="modal" data-target="#editcategoryModal">Change your skill category </span>
                                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                                            </svg>
                                                        </a>
                                                        <div class="location-wrap mb-5">
                                                            <h2 class="fs-title mb-3">Inspection Location</h2>
                                                            <div class="row">
                                                                <div class="col-lg-4">
                                                                    <label class="text-black fz-16">Country</label>
                                                                    <select name="country" id="country">
                                                                        <option>Select country</option>
                                                                        <option>Afghanistan</option>
                                                                        <option>Albania</option>
                                                                        <option>Algeria</option>
                                                                        <option>American Samoa</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-lg-4">
                                                                    <label class="text-black fz-16">States</label>
                                                                    <select name="state" id="state">
                                                                        <option>Select state</option>
                                                                        <option>Badgis</option>
                                                                        <option>Balgan</option>
                                                                        <option>Balkh</option>
                                                                        <option>Bamiyan</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-lg-4">
                                                                    <label class="text-black fz-16">City</label>
                                                                    <select name="city" id="city">
                                                                        <option>Select city</option>
                                                                        <option>Bamiyan</option>
                                                                        <option>Punjab</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                        <div class="location-wrap mb-5">
                                                            <h2 class="fs-title mb-3">Project Date</h2>
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <label class="text-black fz-16">Start Date</label>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" placeholder="DD-MM-YYYY" aria-describedby="basic-addon2" data-date-format="dd/mm/yyyy" id="datepicker">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">
                                                                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6665 8.9043H0.842529C0.428529 8.9043 0.0925293 8.5683 0.0925293 8.1543C0.0925293 7.7403 0.428529 7.4043 0.842529 7.4043H18.6665C19.0805 7.4043 19.4165 7.7403 19.4165 8.1543C19.4165 8.5683 19.0805 8.9043 18.6665 8.9043Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2013 12.8096C13.7873 12.8096 13.4473 12.4736 13.4473 12.0596C13.4473 11.6456 13.7783 11.3096 14.1923 11.3096H14.2013C14.6153 11.3096 14.9513 11.6456 14.9513 12.0596C14.9513 12.4736 14.6153 12.8096 14.2013 12.8096Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76377 12.8096C9.34977 12.8096 9.00977 12.4736 9.00977 12.0596C9.00977 11.6456 9.34077 11.3096 9.75477 11.3096H9.76377C10.1778 11.3096 10.5138 11.6456 10.5138 12.0596C10.5138 12.4736 10.1778 12.8096 9.76377 12.8096Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31701 12.8096C4.90301 12.8096 4.56201 12.4736 4.56201 12.0596C4.56201 11.6456 4.89401 11.3096 5.30801 11.3096H5.31701C5.73101 11.3096 6.06701 11.6456 6.06701 12.0596C6.06701 12.4736 5.73101 12.8096 5.31701 12.8096Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2013 16.6963C13.7873 16.6963 13.4473 16.3603 13.4473 15.9463C13.4473 15.5323 13.7783 15.1963 14.1923 15.1963H14.2013C14.6153 15.1963 14.9513 15.5323 14.9513 15.9463C14.9513 16.3603 14.6153 16.6963 14.2013 16.6963Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76377 16.6963C9.34977 16.6963 9.00977 16.3603 9.00977 15.9463C9.00977 15.5323 9.34077 15.1963 9.75477 15.1963H9.76377C10.1778 15.1963 10.5138 15.5323 10.5138 15.9463C10.5138 16.3603 10.1778 16.6963 9.76377 16.6963Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31701 16.6963C4.90301 16.6963 4.56201 16.3603 4.56201 15.9463C4.56201 15.5323 4.89401 15.1963 5.30801 15.1963H5.31701C5.73101 15.1963 6.06701 15.5323 6.06701 15.9463C6.06701 16.3603 5.73101 16.6963 5.31701 16.6963Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041V0.75C13.0435 0.336 13.3795 0 13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75V4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71533 4.791C5.30133 4.791 4.96533 4.455 4.96533 4.041V0.75C4.96533 0.336 5.30133 0 5.71533 0C6.12933 0 6.46533 0.336 6.46533 0.75V4.041C6.46533 4.455 6.12933 4.791 5.71533 4.791Z" fill="#666666"/>
                                                                                    <mask id="mask0_977_1881" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="20" height="21">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5791H19.5V21.5H0V1.5791Z" fill="white"/>
                                                                                    </mask>
                                                                                    <g mask="url(#mask0_977_1881)">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.521 3.0791C2.928 3.0791 1.5 4.4621 1.5 6.9731V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981V6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.335 3.4381 15.29 3.0791 13.988 3.0791H5.521ZM13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.6451 2.116 1.5791 5.521 1.5791H13.988C15.697 1.5791 17.11 2.0911 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001Z" fill="#666666"/>
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <label class="text-black fz-16">End Date</label>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" placeholder="DD-MM-YYYY" aria-describedby="basic-addon2" data-date-format="dd/mm/yyyy" id="datepicker1">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">
                                                                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6665 8.9043H0.842529C0.428529 8.9043 0.0925293 8.5683 0.0925293 8.1543C0.0925293 7.7403 0.428529 7.4043 0.842529 7.4043H18.6665C19.0805 7.4043 19.4165 7.7403 19.4165 8.1543C19.4165 8.5683 19.0805 8.9043 18.6665 8.9043Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2013 12.8096C13.7873 12.8096 13.4473 12.4736 13.4473 12.0596C13.4473 11.6456 13.7783 11.3096 14.1923 11.3096H14.2013C14.6153 11.3096 14.9513 11.6456 14.9513 12.0596C14.9513 12.4736 14.6153 12.8096 14.2013 12.8096Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76377 12.8096C9.34977 12.8096 9.00977 12.4736 9.00977 12.0596C9.00977 11.6456 9.34077 11.3096 9.75477 11.3096H9.76377C10.1778 11.3096 10.5138 11.6456 10.5138 12.0596C10.5138 12.4736 10.1778 12.8096 9.76377 12.8096Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31701 12.8096C4.90301 12.8096 4.56201 12.4736 4.56201 12.0596C4.56201 11.6456 4.89401 11.3096 5.30801 11.3096H5.31701C5.73101 11.3096 6.06701 11.6456 6.06701 12.0596C6.06701 12.4736 5.73101 12.8096 5.31701 12.8096Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2013 16.6963C13.7873 16.6963 13.4473 16.3603 13.4473 15.9463C13.4473 15.5323 13.7783 15.1963 14.1923 15.1963H14.2013C14.6153 15.1963 14.9513 15.5323 14.9513 15.9463C14.9513 16.3603 14.6153 16.6963 14.2013 16.6963Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76377 16.6963C9.34977 16.6963 9.00977 16.3603 9.00977 15.9463C9.00977 15.5323 9.34077 15.1963 9.75477 15.1963H9.76377C10.1778 15.1963 10.5138 15.5323 10.5138 15.9463C10.5138 16.3603 10.1778 16.6963 9.76377 16.6963Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31701 16.6963C4.90301 16.6963 4.56201 16.3603 4.56201 15.9463C4.56201 15.5323 4.89401 15.1963 5.30801 15.1963H5.31701C5.73101 15.1963 6.06701 15.5323 6.06701 15.9463C6.06701 16.3603 5.73101 16.6963 5.31701 16.6963Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041V0.75C13.0435 0.336 13.3795 0 13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75V4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791Z" fill="#666666"/>
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71533 4.791C5.30133 4.791 4.96533 4.455 4.96533 4.041V0.75C4.96533 0.336 5.30133 0 5.71533 0C6.12933 0 6.46533 0.336 6.46533 0.75V4.041C6.46533 4.455 6.12933 4.791 5.71533 4.791Z" fill="#666666"/>
                                                                                    <mask id="mask0_977_1881" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="20" height="21">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5791H19.5V21.5H0V1.5791Z" fill="white"/>
                                                                                    </mask>
                                                                                    <g mask="url(#mask0_977_1881)">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.521 3.0791C2.928 3.0791 1.5 4.4621 1.5 6.9731V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981V6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.335 3.4381 15.29 3.0791 13.988 3.0791H5.521ZM13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.6451 2.116 1.5791 5.521 1.5791H13.988C15.697 1.5791 17.11 2.0911 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001Z" fill="#666666"/>
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <div class="btn-wrap">
                                                    <div class="btn-group">
                                                        <button type="button" name="previous" class="previous prev2 action-prev-btn action-button btn mr-1" value="step1" id="Prev">Back</button>
                                                        <button type="button" name="next" class="next action-button action-nxt-btn nxt2 btn mt-2" value="step3" id="Next">Next</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset class="step3 h-100">
                                                <div class="content-right-wrap p-4 p-md-5">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-12">
                                                            <div class="form-check mb-4 pl-0">
                                                                <div class="custom-control custom-radio">
                                                                    <input type="radio" class="custom-control-input scope mr-2 mb-0" value="largescope" name="scope" id="large">
                                                                    <label class="custom-control-label fs-title mb-0" for="large">Large</label>
                                                                </div>
                                                                <p class="pl-4 mt-2">Longer term or complex initiatives Required good communication skills to deal with deffrent parties ( ex. Managing Team, Client and Vendor etc. )</p>
                                                            </div>
                                                            <div class="hidescope" id="largescope">
                                                                <div class="row">
                                                                    <div class="col-lg-12 mb-5">
                                                                        <h2 class="fs-title mb-3">How long will your work take ?</h2>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="largesduration" name="duration" id="largeduration" checked/>
                                                                                <p class="custom-control-label pt-1" for="largeduration">More than 06 months</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="mediumduration" name="duration" id="mediumduration">
                                                                                <p class="custom-control-label pt-1" for="mediumduration">03 to 06 months</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="smallduration" name="duration" id="smallduration">
                                                                                <p class="custom-control-label pt-1" for="smallduration">01 to 03 months</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 mb-5">
                                                                        <h2 class="fs-title mb-3">What level of experience will it need?</h2>
                                                                        <p>This won’t restrict any proposals, but helps match experties to your budget.</p>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="entryexperience" name="experience" id="entry" checked/>
                                                                                <label class="custom-control-label mb-0" for="entry">Entry</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking someone for less than 05 years experience</p>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="inteexperience" name="experience" id="intermediate">
                                                                                <label class="custom-control-label mb-0" for="intermediate">Intermediate</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking for 10+ year experience personnel</p>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="exexperience" name="experience" id="expert">
                                                                                <label class="custom-control-label mb-0" for="expert">Expert</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking for 15+ year experience</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-check mb-4 pl-0">
                                                                <div class="custom-control custom-radio">
                                                                    <input type="radio" class="custom-control-input scope mr-2 mb-0" value="mediumscope" name="scope" id="medium">
                                                                    <label class="custom-control-label fs-title mb-0" for="medium">Medium</label>
                                                                </div>
                                                                <p class="pl-4 mt-2">Well-defined projects ( ex., Follow strictly the project requirements etc. )</p>
                                                            </div>
                                                            <div class="hidescope" id="mediumscope">
                                                                <div class="row">
                                                                    <div class="col-lg-12 mb-5">
                                                                        <h2 class="fs-title mb-3">How long will your work take ?</h2>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="largesduration" name="duration" id="largeduration" checked/>
                                                                                <p class="custom-control-label pt-1" for="largeduration">More than 06 months</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="mediumduration" name="duration" id="mediumduration">
                                                                                <p class="custom-control-label pt-1" for="mediumduration">03 to 06 months</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="smallduration" name="duration" id="smallduration">
                                                                                <p class="custom-control-label pt-1" for="smallduration">01 to 03 months</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 mb-5">
                                                                        <h2 class="fs-title mb-3">What level of experience will it need?</h2>
                                                                        <p>This won’t restrict any proposals, but helps match experties to your budget.</p>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="entryexperience" name="experience" id="entry" checked/>
                                                                                <label class="custom-control-label mb-0" for="entry">Entry</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking someone for less than 05 years experience</p>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="inteexperience" name="experience" id="intermediate">
                                                                                <label class="custom-control-label mb-0" for="intermediate">Intermediate</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking for 10+ year experience personnel</p>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="exexperience" name="experience" id="expert">
                                                                                <label class="custom-control-label mb-0" for="expert">Expert</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking for 15+ year experience</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-check mb-4 pl-0">
                                                                <div class="custom-control custom-radio">
                                                                    <input type="radio" class="custom-control-input scope mr-2 mb-0" value="smallscope" name="scope" id="small">
                                                                    <label class="custom-control-label fs-title mb-0" for="small">Small</label>
                                                                </div>
                                                                <p class="pl-4 mt-2">Quick and straight forward tasks ( ex. Provide support as per reuirements)</p>
                                                            </div>
                                                            <div class="hidescope" id="smallscope">
                                                                <div class="row">
                                                                    <div class="col-lg-12 mb-5">
                                                                        <h2 class="fs-title mb-3">How long will your work take ?</h2>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="largesduration" name="duration" id="largeduration" checked/>
                                                                                <p class="custom-control-label pt-1" for="largeduration">More than 06 months</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="mediumduration" name="duration" id="mediumduration">
                                                                                <p class="custom-control-label pt-1" for="mediumduration">03 to 06 months</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="smallduration" name="duration" id="smallduration">
                                                                                <p class="custom-control-label pt-1" for="smallduration">01 to 03 months</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 mb-5">
                                                                        <h2 class="fs-title mb-3">What level of experience will it need?</h2>
                                                                        <p>This won’t restrict any proposals, but helps match experties to your budget.</p>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="entryexperience" name="experience" id="entry" checked/>
                                                                                <label class="custom-control-label mb-0" for="entry">Entry</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking someone for less than 05 years experience</p>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="inteexperience" name="experience" id="intermediate">
                                                                                <label class="custom-control-label mb-0" for="intermediate">Intermediate</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking for 10+ year experience personnel</p>
                                                                        </div>
                                                                        <div class="form-check mb-2 pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" value="exexperience" name="experience" id="expert">
                                                                                <label class="custom-control-label mb-0" for="expert">Expert</label>
                                                                            </div>
                                                                            <p class="pl-4">Looking for 15+ year experience</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="btn-wrap">
                                                    <div class="btn-group">
                                                        <button type="button" name="previous" class="previous prev3 action-prev-btn action-button btn mr-1" value="step2" id="Prev">Back</button>
                                                        <button type="button" name="next" class="next action-button action-nxt-btn nxt3 btn mt-2" value="step4" id="Next">Next</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset class="step4 h-100">
                                                <div class="content-right-wrap p-4 p-md-5">
                                                    <div class="budget-wrap">
                                                        <div class="row mb-5">
                                                            <div class="col-lg-6 col-12 pl4 pr4">
                                                                <div class="d-flex align-items-center">
                                                                    <input type="radio" name="radio" id="radio-budget" class="radio" checked=""> 
                                                                    <label for="radio-budget" class="d-flex align-items-center scope-label">
                                                                        <div class="up-icon md"> 
                                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M21.7012 18.8256L17.2395 15.4793V8.66296C17.2395 7.97758 16.6855 7.42358 16.0001 7.42358C15.3147 7.42358 14.7607 7.97758 14.7607 8.66296V16.0991C14.7607 16.4895 14.9442 16.8576 15.2565 17.0906L20.2139 20.8087C20.4369 20.976 20.6972 21.0565 20.9562 21.0565C21.3342 21.0565 21.7061 20.8867 21.949 20.5595C22.3606 20.0129 22.249 19.2358 21.7012 18.8256Z" fill="#F2613C"/>
                                                                                <path d="M16 0C7.17706 0 0 7.17706 0 16C0 24.8229 7.17706 32 16 32C24.8229 32 32 24.8229 32 16C32 7.17706 24.8229 0 16 0ZM16 29.5213C8.54531 29.5213 2.47869 23.4547 2.47869 16C2.47869 8.54531 8.54531 2.47869 16 2.47869C23.4559 2.47869 29.5213 8.54531 29.5213 16C29.5213 23.4547 23.4547 29.5213 16 29.5213Z" fill="#F2613C"/>
                                                                            </svg>
                                                                        </div>
                                                                        <h4 class="mb-2 fz-20 pl-2 text-black">Day Rate</h4>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-12 pl4 pr4">
                                                                <div class="d-flex align-items-center">
                                                                    <input type="radio" name="radio" id="radio-budget1" class="radio"> 
                                                                    <label for="radio-budget1"  class="d-flex align-items-center scope-label">
                                                                        <div class="up-icon md"> 
                                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5554 13.2056H3.79004C3.23804 13.2056 2.79004 12.7576 2.79004 12.2056C2.79004 11.6536 3.23804 11.2056 3.79004 11.2056H27.5554C28.1074 11.2056 28.5554 11.6536 28.5554 12.2056C28.5554 12.7576 28.1074 13.2056 27.5554 13.2056" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.602 18.4126C21.05 18.4126 20.5967 17.9646 20.5967 17.4126C20.5967 16.8606 21.038 16.4126 21.59 16.4126H21.602C22.154 16.4126 22.602 16.8606 22.602 17.4126C22.602 17.9646 22.154 18.4126 21.602 18.4126" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.685 18.4126C15.133 18.4126 14.6797 17.9646 14.6797 17.4126C14.6797 16.8606 15.121 16.4126 15.673 16.4126H15.685C16.237 16.4126 16.685 16.8606 16.685 17.4126C16.685 17.9646 16.237 18.4126 15.685 18.4126" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75667 18.4126C9.20467 18.4126 8.75 17.9646 8.75 17.4126C8.75 16.8606 9.19267 16.4126 9.74467 16.4126H9.75667C10.3087 16.4126 10.7567 16.8606 10.7567 17.4126C10.7567 17.9646 10.3087 18.4126 9.75667 18.4126" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.602 23.595C21.05 23.595 20.5967 23.147 20.5967 22.595C20.5967 22.043 21.038 21.595 21.59 21.595H21.602C22.154 21.595 22.602 22.043 22.602 22.595C22.602 23.147 22.154 23.595 21.602 23.595" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.685 23.595C15.133 23.595 14.6797 23.147 14.6797 22.595C14.6797 22.043 15.121 21.595 15.673 21.595H15.685C16.237 21.595 16.685 22.043 16.685 22.595C16.685 23.147 16.237 23.595 15.685 23.595" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75667 23.595C9.20467 23.595 8.75 23.147 8.75 22.595C8.75 22.043 9.19267 21.595 9.74467 21.595H9.75667C10.3087 21.595 10.7567 22.043 10.7567 22.595C10.7567 23.147 10.3087 23.595 9.75667 23.595" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0586 7.72125C20.5066 7.72125 20.0586 7.27325 20.0586 6.72125V2.33325C20.0586 1.78125 20.5066 1.33325 21.0586 1.33325C21.6106 1.33325 22.0586 1.78125 22.0586 2.33325V6.72125C22.0586 7.27325 21.6106 7.72125 21.0586 7.72125" fill="#F2613C"/>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2871 7.72125C9.73511 7.72125 9.28711 7.27325 9.28711 6.72125V2.33325C9.28711 1.78125 9.73511 1.33325 10.2871 1.33325C10.8391 1.33325 11.2871 1.78125 11.2871 2.33325V6.72125C11.2871 7.27325 10.8391 7.72125 10.2871 7.72125" fill="#F2613C"/>
                                                                                <mask id="mask0_174_16049" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="3" width="27" height="27">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66699 3.43872H28.667V29.9999H2.66699V3.43872Z" fill="white"/>
                                                                                </mask>
                                                                                <g mask="url(#mask0_174_16049)">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0283 5.43872C6.57099 5.43872 4.66699 7.28272 4.66699 10.6307V22.6961C4.66699 26.1174 6.57099 28.0001 10.0283 28.0001H21.3057C24.763 28.0001 26.667 26.1521 26.667 22.7974V10.6307C26.6723 8.98405 26.2297 7.70405 25.351 6.82405C24.447 5.91739 23.0537 5.43872 21.3177 5.43872H10.0283ZM21.3057 30.0001H10.0283C5.48833 30.0001 2.66699 27.2014 2.66699 22.6961V10.6307C2.66699 6.19339 5.48833 3.43872 10.0283 3.43872H21.3177C23.5963 3.43872 25.4803 4.12139 26.767 5.41072C28.0163 6.66539 28.6737 8.46939 28.667 10.6334V22.7974C28.667 27.2401 25.8457 30.0001 21.3057 30.0001V30.0001Z" fill="#F2613C"/>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <h4 class="mb-2 fz-20 pl-2 text-black">Monthly Rate</h4>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-12">
                                                                <label>Maximum Monthly Budget ( USD )</label>
                                                                <div class="input-group mb-3">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text" id="basic-addon1">$</span>
                                                                    </div>
                                                                    <input type="number" class="form-control" placeholder="00.00" aria-describedby="basic-addon1">
                                                                </div>
                                                                <p class="text-muted">You will have the option to create milestones which divide your project into manageable phases.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="btn-wrap">
                                                    <div class="btn-group">
                                                        <button type="button" name="previous" class="previous prev4 action-prev-btn action-button btn mr-1" value="step3" id="Prev">Back</button>
                                                        <button type="button" name="next" class="next action-button action-nxt-btn nxt4 btn mt-2" value="final-step" id="Next">Review Job Post</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="row mb-20">
                    <div class="col-lg-12 col-md-12">
                        <div class="card card-table plans final-step p-0">
                            <div class="card-header">
                                <div class="d-flex align-items-center">
                                    <h4 class="title mb-0">Just not finish and review your job post</h4>
                                    <div class="ml-auto">
                                        <button type="submit" class="btn action-nxt-btn nxt" name="submit" value="Submit">Post your job now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="post-review p-20">
                                    <div class="form-group mb-5">
                                        <label class="fs-title mb-3">Your Title</label>
                                        <input type="text" class="form-control" name="text" id="title" value="Pressure Vessel Inspector required">
                                    </div>
                                    <div class="form-group mb-5">
                                        <label class="fs-title mb-3">Describe your job</label>
                                        <p class="fs-subtitle">This is how tgalent figures out what you need and why you’re great to work with !</p>
                                        <p class="fs-subtitle">Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique aboyt your project, team or company. <a href="javascript:void(0);" class="text-theme">Here are several examples</a> that illustrate best practices for effective job posts.</p>
                                        <textarea class="form-control" name="job" id="title" row="8" placeholder="Already have a job description? Paste it here!" style="height:200px;"></textarea>
                                        <div id="counter" style="font-size: 12px;color:#333;text-align:right;"><span id="chars">5000</span> characters left</div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="file" id="real-file" hidden="hidden" />
                                        <button class="btn btn-outline-theme d-flex align-items-center attach-file" id="custom-button">
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.3146 1.67902C14.0712 -0.559672 10.4208 -0.559672 8.17702 1.67902L1.20173 8.63942C-0.400663 10.2386 -0.400558 12.8405 1.20194 14.4396C2.00325 15.2392 3.05548 15.639 4.10813 15.6389C5.1605 15.6388 6.21329 15.2391 7.01447 14.4396L13.4083 8.05921C13.8741 7.59445 14.1307 6.97649 14.1307 6.31921C14.1307 5.66188 13.8743 5.04396 13.4084 4.57906C12.4468 3.61962 10.8822 3.61965 9.9208 4.57924L5.73949 8.75154C5.41848 9.07184 5.41848 9.59122 5.73942 9.91158C6.0604 10.232 6.58088 10.2319 6.90193 9.91158L11.0833 5.73924C11.4038 5.4194 11.9252 5.41933 12.2458 5.73917C12.401 5.89409 12.4866 6.10009 12.4866 6.31917C12.4866 6.53825 12.4011 6.74418 12.2458 6.89917L5.85195 13.2795C4.89039 14.2389 3.32594 14.2391 2.36445 13.2796C1.40296 12.3201 1.40289 10.7589 2.36427 9.79936L9.33953 2.83905C10.9422 1.2399 13.5497 1.2399 15.1521 2.83905C15.9284 3.61365 16.356 4.64361 16.356 5.7391C16.356 6.83459 15.9284 7.86454 15.1521 8.63921L8.17691 15.5997C7.85593 15.9201 7.85593 16.4394 8.17698 16.7598C8.3375 16.92 8.54788 17 8.75822 17C8.96859 17 9.17897 16.9199 9.33949 16.7598L16.3145 9.79929C17.4014 8.71481 18 7.27289 18 5.73913C18 4.20541 17.4014 2.76349 16.3146 1.67902Z" fill="#F2613C"/>
                                            </svg>
                                            <span class="pl-1">AttachFile</span>
                                        </button>
                                        <span id="custom-text">No file chosen, yet.</span><br>
                                        <span class="text-muted"><small>Max size: 100 MB</small></span>
                                    </div>
                                </div>
                                <div class="post-review p-20">
                                    <div class="form-group mb-5 mt-3">
                                        <label class="fs-title mb-3">Category</label>
                                        <a href="javascript:void(0);" class="text-muted d-flex align-items-center" data-toggle="modal" data-target="#editcategoryModal">
                                            <span class="pr-3 span-name">Mechanical Inspector</span>
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label class="fs-title mb-3">Skills</label>
                                        <div class="tags-wrap d-flex align-items-center"> 
                                            <ul> 
                                                <li> 
                                                    <a href="javascript:void(0);" class="d-flex align-items-center"> 
                                                        <span class="mr-2">Boilers</span> 
                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect> <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect> </svg> 
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a href="javascript:void(0);" class="d-flex align-items-center"> 
                                                        <span class="mr-2">Industrial Valves</span> 
                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect> <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect> </svg> 
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a href="javascript:void(0);" class="d-flex align-items-center"> 
                                                        <span class="mr-2">Boilers</span> 
                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect> <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect> </svg> 
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a href="javascript:void(0);" class="d-flex align-items-center"> 
                                                        <span class="mr-2">Industrial Valves</span> 
                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect> <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect> </svg> 
                                                    </a> 
                                                </li> 
                                            </ul>
                                            <a href="javascript:void(0);" class="pl-3" data-toggle="modal" data-target="#editskillsModal">
                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label class="fs-title mb-3">Scope</label>
                                        <a href="javascript:void(0);" class="text-muted d-flex align-items-center">
                                            <span class="pr-3 span-name">Large, More than 06 Months, Entry level</span>
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label class="fs-title mb-3">Budget</label>
                                        <a href="javascript:void(0);" class="text-muted d-flex align-items-center" data-toggle="modal" data-target="#editbudgetModal">
                                            <span class="pr-3 span-name">$222.00</span>
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label class="fs-title mb-3">Date</label>
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0);" class="text-muted" data-toggle="modal" data-target="#editprojectModal">
                                                <span class="pr-3 span-name">Project Start Date: 01/09/2022</span>
                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                                </svg>
                                            </a>
                                            <a href="javascript:void(0);" class="text-muted" data-toggle="modal" data-target="#editprojectModal">
                                                <span class="pr-3 span-name ml-6">Project End Date: 30/12/2022</span>
                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label class="fs-title mb-3">Location</label>
                                        <a href="javascript:void(0);" class="text-muted d-flex align-items-center" data-toggle="modal" data-target="#editlocationModal">
                                            <span class="pr-3 span-name">Country: India,</span>
                                            <span class="pr-3 span-name ml-1">State: Madhya Pradesh,</span>
                                            <!--<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                            </svg>-->
                                            <span class="pr-3 span-name ml-1">City: Indore</span>
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="accordion-wrap">    
                                    <div class="accordion" id="faq">
                                        <div class="card p-0">
                                            <div class="card-header mt-3" id="faqhead1">
                                                <a href="#" class="btn btn-block btn-link text-left p-0 pos-rel" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                    <h5 class="fs-title">Screening questions (optional)</h5>
                                                    <h6 class="fs-subtitle">Narrow down your candidates</h6>
                                                </a>
                                                <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                                    <div class="card-body">
                                                        <h5 class="fs-title mb-3">Add up to 3 more questions</h5>
                                                        <button type="submit" class="btn question-btn action-nxt-btn d-flex align-items-center w-auto mb-3" name="submit" value="Submit">
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.95966 11.624V7.088H0.663656V5.072H4.95966V0.535999H7.04766V5.072H11.3437V7.088H7.04766V11.624H4.95966Z" fill="#FFFFFF"/>
                                                            </svg>&nbsp;
                                                            Write your own question
                                                        </button>
                                                        <div class="add-question-wrap mb-5">
                                                            <div class="d-flex align-items-center">
                                                                <textarea rows="3" aria-label="Custom screening question" class="form-control"></textarea>
                                                                <a href="javascript:void(0);" class="ml-2 delete-btn">
                                                                    <div class="up-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c10000" class="bi bi-trash" viewBox="0 0 16 16">
                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                                        </svg>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <h5 class="fs-title mb-3">Your questions</h5>
                                                        <ul class="mb-5">
                                                            <li class="d-flex align-items-center fs-subtitle mb-1">Do you have an apple developer account?&nbsp;&nbsp;
                                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                                                </svg>
                                                            </li>
                                                            <li class="d-flex align-items-center fs-subtitle mb-1">Describe your approach to build and ios app from the flutter&nbsp;&nbsp;
                                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7058 3.74215C14.712 3.73532 14.7185 3.7286 14.7251 3.72199C14.8982 3.54918 14.9935 3.31355 14.9935 3.05949C14.9935 2.80543 14.8982 2.5698 14.7251 2.39699C14.3806 2.05224 13.7542 2.05013 13.4065 2.38945C13.4041 2.39186 13.4018 2.39425 13.3994 2.39663L12.7364 3.05965L14.0623 4.38561L14.7058 3.74215ZM12.5002 1.52831C12.5051 1.52312 12.51 1.51799 12.5151 1.51293C12.9245 1.10324 13.4738 0.87793 14.0619 0.87793C14.6501 0.87793 15.1998 1.10355 15.6088 1.51293C16.0179 1.92199 16.2432 2.47105 16.2432 3.05949C16.2432 3.63869 16.0249 4.18005 15.6276 4.587C15.6217 4.59347 15.6156 4.59984 15.6093 4.6061L9.50527 10.7102C9.41226 10.8034 9.29704 10.861 9.17656 10.883L6.39772 11.4794C6.35017 11.491 6.30084 11.4971 6.25062 11.4971C6.222 11.4971 6.19311 11.4952 6.16412 11.4911C6.12698 11.486 6.09065 11.4775 6.05551 11.466C5.94919 11.4313 5.85747 11.3699 5.78634 11.2911C5.68447 11.1782 5.62482 11.0295 5.625 10.8722C5.62497 10.8227 5.63085 10.774 5.6421 10.727L6.23924 7.94324C6.25426 7.86304 6.28506 7.7852 6.33165 7.71473C6.35735 7.67572 6.38718 7.64002 6.42039 7.60812L11.3989 2.62961L11.4106 2.61762L11.4228 2.60567L12.5002 1.52831ZM11.8526 3.9434L13.1786 5.26936L8.75192 9.69602L7.0639 10.0583L7.42607 8.36994L11.8526 3.9434ZM1.25 15.8721V4.62207H7.37969C7.725 4.62207 8.00469 4.34207 8.00469 3.99707C8.00469 3.65207 7.72469 3.37207 7.37969 3.37207H1.25C0.560625 3.37207 0 3.9327 0 4.62207V15.8721C0 16.5614 0.560625 17.1221 1.25 17.1221H12.5C12.845 17.1221 13.125 16.8421 13.125 16.4971V16.4969C13.47 16.4969 13.75 16.2169 13.75 15.8719V9.74219C13.75 9.39719 13.47 9.11719 13.125 9.11719C12.78 9.11719 12.5 9.39719 12.5 9.74219V15.8719V15.8721H1.25Z" fill="#F2613C"/>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                        <h5 class="fs-title mb-3">Your questions</h5>
                                                        <div class="form-check pl-0">
                                                            <div class="custom-control custom-checkbox">
                                                                <input class="custom-control-input" type="checkbox" value="" id="defaultCheck1" checked/>
                                                                <label class="custom-control-label fs-subtitle mb-1" for="defaultCheck1">
                                                                    Describle your recent experience with similar projects
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="form-check pl-0">
                                                            <div class="custom-control custom-checkbox">
                                                                <input class="custom-control-input" type="checkbox" value="" id="defaultCheck2">
                                                                <label class="custom-control-label fs-subtitle mb-1" for="defaultCheck2">
                                                                    Please list any certifications related to this project
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="form-check pl-0">
                                                            <div class="custom-control custom-checkbox">
                                                                <input class="custom-control-input" type="checkbox" value="" id="defaultCheck3">
                                                                <label class="custom-control-label fs-subtitle mb-1" for="defaultCheck3">
                                                                    Include a link to your GitHub profile and/or website
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="form-check pl-0">
                                                            <div class="custom-control custom-checkbox">
                                                                <input class="custom-control-input" type="checkbox" value="" id="defaultCheck4">
                                                                <label class="custom-control-label fs-subtitle mb-1" for="defaultCheck4">
                                                                    What frameworks have you worked with?
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="form-check pl-0">
                                                            <div class="custom-control custom-checkbox">
                                                                <input class="custom-control-input" type="checkbox" value="" id="defaultCheck5">
                                                                <label class="custom-control-label fs-subtitle mb-1" for="defaultCheck5">
                                                                    Describle your approach to testing and improving QA
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card p-0">
                                            <div class="card-header mt-3" id="faqhead2">
                                                <a href="#" class="btn btn-block btn-link text-left p-0 pos-rel collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">
                                                    <h5 class="fs-title">Advanced preferences (optional)</h5>
                                                    <h6 class="fs-subtitle">Hours per week, hire date, and more</h6>
                                                </a>
                                                <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-md-12">
                                                                <div class="row">
                                                                    <div class="col-lg-12 col-md-12">
                                                                        <h4 class="fs-title">English level</h4>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="level1" name="level" checked/>
                                                                                <label class="custom-control-label radio-label" for="level1">Any level</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="level2" name="level">
                                                                                <label class="custom-control-label radio-label" for="level2">Conversational or better</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="level3" name="level">
                                                                                <label class="custom-control-label radio-label" for="level3">Fluent or better</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-5 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="level4" name="level">
                                                                                <label class="custom-control-label radio-label" for="level4">Native or bilingual only</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-12 col-md-12">
                                                                        <h4 class="fs-title mb-3">Other languages</h4>
                                                                        <select class="form-control">
                                                                            <option>Add languages</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-12">
                                                                <div class="row mb-5">
                                                                    <div class="col-lg-12 col-md-12">
                                                                        <h4 class="fs-title mb-3">Number of professional needed</h4>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="professional1" name="professional" checked/>
                                                                                <label class="custom-control-label radio-label" for="professional1">One person</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="professional2" name="professional">
                                                                                <label class="custom-control-label radio-label" for="professional2">More than one person</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-12 col-md-12">
                                                                        <h4 class="fs-title mb-3">Amount earned</h4>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="amnt1" name="amnt" checked/>
                                                                                <label class="custom-control-label radio-label" for="amnt1">Any Amount earned</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="amnt2" name="amnt">
                                                                                <label class="custom-control-label radio-label" for="amnt2">$100+ earned</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-2 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="amnt3" name="amnt">
                                                                                <label class="custom-control-label radio-label" for="amnt3">$1k+ earned</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-check mb-5 d-flex align-items-center pl-0">
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input mr-2 mb-0" id="amnt4" name="amnt">
                                                                                <label class="custom-control-label radio-label" for="amnt4">$10k+ earned</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card p-0">
                                            <div class="card-header mt-3" id="faqhead3">
                                                <a href="#" class="btn btn-block btn-link text-left p-0 pos-rel collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">
                                                    <h5 class="fs-title">Job post preferences (optional)</h5>
                                                    <h6 class="fs-subtitle">Adjust visiblillty</h6>
                                                </a>
                                                <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                    <div class="card-body">
                                                        <h5 class="fs-title mb-3">Job Type</h5>
                                                        <div class="form-check pl-0 mb-1">
                                                            <div class="custom-control custom-radio">
                                                                <input class="custom-control-input" type="radio" name="jobtype" id="jobradio1" checked/>
                                                                <label class="custom-control-label radio-label mb-0" for="jobradio1">
                                                                    Private
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="form-check pl-0 mb-1">
                                                            <div class="custom-control custom-radio">
                                                                <input class="custom-control-input" type="radio" name="jobtype" id="jobradio2">
                                                                <label class="custom-control-label radio-label mb-0" for="jobradio2">
                                                                    Public
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-white">
                                <div class="row">
                                    <div class="col-md-6 text-left">
                                        <button type="button" name="previous" class="previous prev6 action-prev-btn action-button btn mr-1" value="step5">Back</button>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <a href="javascript:void(0);" name="previous" class="action-prev-btn action-button btn mr-1" value="step6">Save as draft</a>
                                        <button type="submit" class="btn action-nxt-btn mr-2 mt-10 nxt" name="submit" value="Submit">Post your job now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- First Page -->

                <div class="row mb-20">
                    <div class="col-lg-12 col-md-12">
                        <div class="view-job-post-wrap">
                            <div class="btn-group w-100" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-theme w-25 br-0 w-sm-100 active">View Job Post</button>
                                <button type="button" class="btn btn-outline-theme w-25 w-sm-100 br-0 text-black">Invite</button>
                                <button type="button" class="btn btn-outline-theme w-25 w-sm-100 br-0 text-black">
                                    Review Proposal <span class="badge badge-theme">06</span><br>
                                    <span class="text-muted"><small>Shortlisted <span class="badge badge-default">02</span></small></span>
                                </button>
                                <button type="button" class="btn btn-outline-theme w-25 w-sm-100 br-0 text-black">Hire</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h3 class="title-block mb-4">Freelance Inspector- China- Mooring Chain, Valves</h3>
                    </div>
                </div>

                <div class="row mb-20">
                    <div class="col-lg-12 col-md-12">
                        <div class="view-wrapper">
                            <div class="row">
                                <div class="col-lg-9 col-md-12 left">
                                    <div class="header p-20">
                                        <div class="d-flex align-items-center w-100">
                                            <div>
                                                <h5 class="mb-3 text-theme">Mechanical Inspector</h5>
                                                <p class="mb-0">Posted 1 day ago</p>
                                            </div>
                                            <div class="ml-auto d-flex align-items-center">
                                                <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0009 5.28052C8.37861 5.28052 5.41016 8.40161 5.41016 12.2751C5.41016 14.3588 6.46939 16.8773 8.23885 19.662C8.85375 20.6296 9.51649 21.566 10.1864 22.4407C10.6064 22.9891 10.953 23.4151 11.1795 23.6803C11.6252 24.2023 12.3769 24.202 12.8224 23.6803C13.0489 23.4151 13.3955 22.9891 13.8155 22.4407C14.4854 21.566 15.1481 20.6296 15.763 19.662C17.5325 16.8773 18.5917 14.3588 18.5917 12.2751C18.5916 8.40159 15.6232 5.28052 12.0009 5.28052ZM9.18957 18.8473C7.5603 16.2832 6.59169 13.9802 6.59169 12.2751C6.59169 9.19148 9.00641 6.6526 12.0009 6.6526C14.9954 6.6526 17.4101 9.19148 17.4102 12.2751C17.4102 13.9802 16.4416 16.2832 14.8123 18.8473C13.7973 20.4446 12.7487 21.8158 12.0009 22.6936C11.2531 21.8158 10.2046 20.4446 9.18957 18.8473ZM12.0009 14.761C10.7682 14.761 9.77235 13.5705 9.77235 12.1145C9.77235 10.6584 10.7683 9.46794 12.0009 9.46794C13.2336 9.46794 14.2295 10.6585 14.2295 12.1145C14.2295 13.5705 13.2336 14.761 12.0009 14.761ZM12.0009 13.5665C12.6588 13.5665 13.2009 12.9184 13.2009 12.1145C13.2009 11.3105 12.6588 10.6624 12.0009 10.6624C11.3431 10.6624 10.8009 11.3105 10.8009 12.1145C10.8009 12.9184 11.3431 13.5665 12.0009 13.5665Z" fill="#999999"/>
                                                </svg>
                                                <p class="mb-0">India, Madhya Pradesh, Indore</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content p-20">
                                        <p>We are a 25 years old Design & Engineering firm based in India, working with clients in the Oil & Gas industry worldwide.</p>
                                        <p>We regularly need Freelance Inspectors based in Jiangsu Province-China for occasional Inspection of Mooring Chains, Valves, Forgings, Castings, etc. Candidates must possess a degree in Mechanical Engineering or Metallurgy and hold valid Level NDT Certificates in RT, UT & MT.  Experience in Welding, Machining & Lab tests preferred., Must be fluent in English communications. Inspections on call basis.</p>
                                        <p>We regularly need Freelance Inspectors based in Jiangsu Province-China for occasional Inspection of Mooring Chains, Valves, Forgings, Castings, etc. Candidates must possess a degree in Mechanical Engineering or Metallurgy and hold valid Level NDT Certificates in RT, UT & MT.  Experience in Welding, Machining & Lab tests preferred., Must be fluent in English communications. Inspections on call basis.</p>
                                        <p>This position is for only for Inspectors currently residing in China.</p>
                                        <div class="d-flex align-items-center">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1073_15036)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2503 0H23.6237L34.958 11.8141V34.7926C34.958 37.6712 32.6292 40 29.7606 40H10.2503C7.3718 40 5.04297 37.6712 5.04297 34.7926V5.20738C5.04292 2.32883 7.37175 0 10.2503 0V0Z" fill="#E5252A"/>
                                                <path opacity="0.302" fill-rule="evenodd" clip-rule="evenodd" d="M23.6133 0V11.7241H34.9576L23.6133 0Z" fill="white"/>
                                                <path d="M10.8301 29.8452V22.5388H13.9385C14.7082 22.5388 15.3179 22.7487 15.7776 23.1785C16.2374 23.5983 16.4673 24.168 16.4673 24.8776C16.4673 25.5873 16.2374 26.157 15.7776 26.5768C15.3179 27.0066 14.7082 27.2165 13.9385 27.2165H12.6991V29.8452H10.8301ZM12.6991 25.6273H13.7286C14.0085 25.6273 14.2284 25.5673 14.3783 25.4274C14.5282 25.2975 14.6082 25.1176 14.6082 24.8777C14.6082 24.6378 14.5283 24.4579 14.3783 24.328C14.2284 24.188 14.0085 24.1281 13.7286 24.1281H12.6991V25.6273ZM17.2369 29.8452V22.5388H19.8256C20.3353 22.5388 20.8151 22.6088 21.2649 22.7587C21.7146 22.9086 22.1244 23.1186 22.4842 23.4084C22.8441 23.6882 23.1339 24.0681 23.3438 24.5478C23.5437 25.0276 23.6537 25.5773 23.6537 26.197C23.6537 26.8067 23.5437 27.3564 23.3438 27.8361C23.1339 28.3159 22.8441 28.6957 22.4842 28.9756C22.1244 29.2654 21.7146 29.4753 21.2649 29.6253C20.8151 29.7752 20.3353 29.8452 19.8256 29.8452H17.2369ZM19.066 28.256H19.6057C19.8955 28.256 20.1654 28.226 20.4153 28.156C20.6551 28.0861 20.885 27.9761 21.1049 27.8262C21.3148 27.6763 21.4848 27.4663 21.6047 27.1865C21.7246 26.9067 21.7846 26.5768 21.7846 26.197C21.7846 25.8072 21.7246 25.4774 21.6047 25.1975C21.4848 24.9177 21.3148 24.7078 21.1049 24.5578C20.885 24.4079 20.6552 24.298 20.4153 24.228C20.1654 24.1581 19.8955 24.128 19.6057 24.128H19.066V28.256ZM24.5932 29.8452V22.5388H29.7906V24.128H26.4623V25.2974H29.1209V26.8767H26.4623V29.8452H24.5932Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1073_15036">
                                                <rect width="40" height="40" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            <span class="text-black fz-20">My Doc File .pdf</span>
                                        </div>
                                    </div>
                                    <div class="job-scope p-20">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-12">
                                                <div class="box-wrapper d-flex align-items-center">
                                                    <div class="img-wrapper mr-2">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1073_14916)">
                                                            <path d="M12.4166 0.500244H7.91394C7.61608 0.500244 7.19977 0.672804 6.98932 0.8831L0.816135 7.05625C0.394622 7.47728 0.394622 8.16759 0.816135 8.58811L5.41257 13.1844C5.83313 13.6054 6.52277 13.6054 6.94396 13.1839L13.1171 7.01172C13.3274 6.80145 13.5 6.38448 13.5 6.08725V1.58362C13.5 0.987899 13.0123 0.500244 12.4166 0.500244ZM10.2498 4.8336C9.6515 4.8336 9.16645 4.34804 9.16645 3.75022C9.16645 3.15142 9.6515 2.66684 10.2498 2.66684C10.8482 2.66684 11.3334 3.15142 11.3334 3.75022C11.3334 4.34804 10.8482 4.8336 10.2498 4.8336Z" fill="#F2613C"/>
                                                            </g>
                                                            <defs>
                                                            <clipPath id="clip0_1073_14916">
                                                            <rect width="13" height="13" fill="white" transform="translate(0.5 0.5)"/>
                                                            </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div class="box-content">
                                                        <h5 class="sub-title">$ 2000</h5>
                                                        <p class="mb-0">Monthly rate</p>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="col-lg-4 col-md-12">
                                                <div class="box-wrapper d-flex align-items-center">
                                                    <div class="img-wrapper mr-2">
                                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.6562 11.25H11.3242C11.3242 12.4562 10.2816 13.4375 9 13.4375C7.71843 13.4375 6.67578 12.4562 6.67578 11.25H6.34375C4.23831 11.25 2.52539 12.8622 2.52539 14.8438V15.5312C2.52539 15.7901 2.74838 16 3.02344 16H14.9766C15.2516 16 15.4746 15.7901 15.4746 15.5312V14.8438C15.4746 12.8622 13.7617 11.25 11.6562 11.25Z" fill="#F2613C"/>
                                                            <path d="M7.67188 10.7812V11.25C7.67188 11.9403 8.26651 12.5 9 12.5C9.73349 12.5 10.3281 11.9403 10.3281 11.25V10.7812H7.67188Z" fill="#F2613C"/>
                                                            <path d="M9 1.875C9.27505 1.875 9.49805 1.66513 9.49805 1.40625V0.46875C9.49805 0.209875 9.27505 0 9 0C8.72495 0 8.50195 0.209875 8.50195 0.46875V1.40625C8.50195 1.66513 8.72495 1.875 9 1.875Z" fill="#F2613C"/>
                                                            <path d="M5.24649 1.54035L5.74454 2.35225C5.88207 2.57644 6.18668 2.65325 6.42488 2.52382C6.66308 2.39438 6.74469 2.10769 6.60716 1.8835L6.10911 1.0716C5.97159 0.847411 5.66698 0.770598 5.42878 0.900036C5.19058 1.02947 5.10897 1.31616 5.24649 1.54035Z" fill="#F2613C"/>
                                                            <path d="M2.99909 3.99975L3.86174 4.4685C4.09994 4.59794 4.40455 4.52113 4.54207 4.29694C4.6796 4.07275 4.59799 3.78607 4.35979 3.65663L3.49714 3.18788C3.25894 3.05844 2.95433 3.13525 2.81681 3.35944C2.67928 3.58363 2.76089 3.87032 2.99909 3.99975Z" fill="#F2613C"/>
                                                            <path d="M14.5004 3.18788L13.6378 3.65663C13.3996 3.78607 13.318 4.07275 13.4555 4.29694C13.593 4.52113 13.8976 4.59794 14.1358 4.4685L14.9985 3.99975C15.2366 3.87032 15.3183 3.58363 15.1807 3.35944C15.0432 3.13525 14.7386 3.05844 14.5004 3.18788Z" fill="#F2613C"/>
                                                            <path d="M11.5714 2.52382C11.8096 2.65325 12.1142 2.57644 12.2517 2.35225L12.7497 1.54035C12.8873 1.31616 12.8056 1.02947 12.5674 0.900036C12.3292 0.770598 12.0246 0.847411 11.8871 1.0716L11.3891 1.8835C11.2515 2.10769 11.3332 2.39438 11.5714 2.52382Z" fill="#F2613C"/>
                                                            <path d="M9 2.8125C6.98288 2.8125 5.34766 4.35153 5.34766 6.25C5.34766 7.47166 6.02586 8.54234 7.04649 9.15131C7.32015 9.31459 7.51914 9.56103 7.61241 9.84375H8.50195V7.38166L7.65172 6.58147C7.45722 6.39841 7.45722 6.10162 7.65172 5.91856C7.84622 5.7355 8.16155 5.7355 8.35606 5.91856L9 6.52459L9.64391 5.91856C9.83841 5.7355 10.1537 5.7355 10.3482 5.91856C10.5427 6.10162 10.5427 6.39841 10.3482 6.58147L9.49805 7.38166V9.84375H10.3876C10.4809 9.56103 10.6799 9.31459 10.9535 9.15131C11.9741 8.54234 12.6523 7.47166 12.6523 6.25C12.6523 4.35153 11.0171 2.8125 9 2.8125Z" fill="#F2613C"/>
                                                        </svg>
                                                    </div>
                                                    <div class="box-content">
                                                        <h5 class="sub-title">Expert</h5>
                                                        <p class="mb-0">Looking for 15+ year experience</p>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="col-lg-4 col-md-12">
                                                <div class="box-wrapper d-flex align-items-center">
                                                    <div class="img-wrapper mr-2">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1073_14884)">
                                                            <path d="M9.31831 8.43972C9.31831 9.65205 8.332 10.6384 7.11967 10.6384C5.90733 10.6384 4.92102 9.65205 4.92102 8.43972C4.92102 7.22735 5.90733 6.24102 7.11967 6.24102C7.56724 6.24102 7.98378 6.37578 8.3315 6.60638L9.60656 5.33132C9.57779 5.31028 9.54888 5.28934 9.51946 5.26877C8.65476 4.66452 7.78857 4.35913 6.94128 4.35913C6.86367 4.35913 6.78627 4.36168 6.70898 4.36681C5.68664 4.43639 4.7342 4.89151 4.02776 5.64828C3.31957 6.40572 2.92969 7.39695 2.92969 8.43972C2.92969 9.55851 3.36562 10.6106 4.15717 11.4022C4.94877 12.1938 6.00085 12.6297 7.11964 12.6297C8.23843 12.6297 9.29054 12.1937 10.0821 11.4022C10.8737 10.6106 11.3096 9.55851 11.3096 8.43972C11.3096 7.5188 10.9377 6.63468 10.2662 5.91453L8.95289 7.22785C9.18357 7.57558 9.31831 7.99215 9.31831 8.43972Z" fill="#F2613C"/>
                                                            <path d="M6.80781 8.12916L7.68766 7.24932C7.51524 7.16655 7.32224 7.12012 7.11856 7.12012C6.39086 7.12012 5.79883 7.71218 5.79883 8.43991C5.79883 9.16762 6.39086 9.75965 7.11856 9.75965C7.84627 9.75965 8.4383 9.16762 8.4383 8.43991C8.4383 8.23624 8.39187 8.0432 8.30913 7.87079L7.42932 8.75061L6.80781 8.12916Z" fill="#F2613C"/>
                                                            <path d="M11.4341 4.74597L10.8873 5.29276C11.7235 6.17815 12.1876 7.28158 12.1876 8.43984C12.1876 9.79341 11.6603 11.0662 10.7027 12.0238C9.74514 12.9813 8.47233 13.5087 7.11879 13.5087C5.76524 13.5087 4.49244 12.9813 3.53484 12.0238C2.57725 11.0662 2.0499 9.79338 2.0499 8.43984C2.0499 7.17339 2.52396 5.96897 3.38467 5.0484C4.24345 4.12836 5.40293 3.5748 6.64919 3.48998C7.77568 3.41554 8.91006 3.77141 10.022 4.54848C10.0942 4.59893 10.1644 4.6509 10.2333 4.70381L10.8127 4.12449L10.9054 2.47827C9.78413 1.76296 8.48098 1.37964 7.11882 1.37964C5.23298 1.37964 3.45999 2.11402 2.12651 3.4475C0.792978 4.78098 0.0585938 6.55397 0.0585938 8.43981C0.0585938 10.3256 0.792979 12.0986 2.12648 13.4321C3.45999 14.7656 5.23295 15.5 7.11879 15.5C9.00463 15.5 10.7776 14.7656 12.1111 13.4321C13.4446 12.0986 14.179 10.3256 14.179 8.43981C14.179 7.07765 13.7956 5.77449 13.0803 4.65318L11.4341 4.74597Z" fill="#F2613C"/>
                                                            <path d="M11.709 3.85021L13.5048 3.74899L15.0592 2.19459L13.3646 0.5L11.8102 2.05437L11.709 3.85021Z" fill="#F2613C"/>
                                                            </g>
                                                            <defs>
                                                            <clipPath id="clip0_1073_14884">
                                                            <rect width="15" height="15" fill="white" transform="translate(0.0585938 0.5)"/>
                                                            </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div class="box-content">
                                                        <h5 class="sub-title">Large</h5>
                                                        <p class="mb-0">More than 06 months</p>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div class="proposal p-20">
                                        <h5 class="mb-3 sub-title">You will be asked to answer the following questions when submitting a proposal:</h5>
                                        <p class="mb-3">Do you have an apple developer account?</p>
                                        <p class="mb-1">Describe your approach tot build an ios app form the flutter</p>
                                    </div>
                                    <div class="row p-20 activity">
                                        <div class="col-lg-4 col-md-12">
                                            <h5 class="mb-3 sub-title">Preffered Qualifications</h5>
                                            <ul>
                                                <li>Other lang:</li>
                                                <li>Enligh: <span class="text-muted">Fluent or better</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4 col-md-12">
                                            <h5 class="mb-3 sub-title">Activity on this job</h5>  
                                            <ul>
                                                <li>Proposals: <span class="text-muted">Less than 5</span></li>
                                                <li>Interviewing: <span class="text-muted">0</span></li>
                                                <li>Invites sent: <span class="text-muted">0</span></li>
                                                <li>Unanswered invites: <span class="text-muted">0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12 right">
                                    <div class="options p-20">
                                        <ul>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.3223 18.625C14.9773 18.625 14.6973 18.345 14.6973 18C14.6973 17.655 14.9773 17.375 15.3223 17.375H15.3229C15.3229 17.03 15.6023 16.75 15.9476 16.75C16.2929 16.75 16.5723 17.03 16.5723 17.375C16.5723 18.0644 16.0116 18.625 15.3223 18.625Z" fill="#F2613C"/>
                                                        <path d="M15.9473 17.9998C15.6023 17.9998 15.3223 17.7198 15.3223 17.3748V11.2451C15.3223 10.9001 15.6023 10.6201 15.9473 10.6201C16.2923 10.6201 16.5723 10.9001 16.5723 11.2451V17.3748C16.5723 17.7198 16.2923 17.9998 15.9473 17.9998Z" fill="#F2613C"/>
                                                        <path d="M15.3223 18.625H4.07227C3.72727 18.625 3.44727 18.345 3.44727 18C3.44727 17.655 3.72727 17.375 4.07227 17.375H15.3223C15.6673 17.375 15.9473 17.655 15.9473 18C15.9473 18.345 15.6673 18.625 15.3223 18.625Z" fill="#F2613C"/>
                                                        <path d="M4.07227 18.625C3.38289 18.625 2.82227 18.0644 2.82227 17.375C2.82227 17.03 3.10227 16.75 3.44727 16.75C3.79227 16.75 4.07227 17.03 4.07227 17.375V17.3759C4.41727 17.3759 4.69727 17.6553 4.69727 18.0003C4.69727 18.3453 4.41727 18.625 4.07227 18.625Z" fill="#F2613C"/>
                                                        <path d="M3.44727 18C3.10227 18 2.82227 17.72 2.82227 17.375V6.125C2.82227 5.78 3.10227 5.5 3.44727 5.5C3.79227 5.5 4.07227 5.78 4.07227 6.125V17.375C4.07227 17.72 3.79227 18 3.44727 18Z" fill="#F2613C"/>
                                                        <path d="M3.44695 6.75C3.10164 6.75 2.82227 6.47 2.82227 6.125C2.82227 5.43562 3.38289 4.875 4.07227 4.875C4.41727 4.875 4.69727 5.155 4.69727 5.5C4.69727 5.845 4.41727 6.125 4.07227 6.125H4.07164C4.07164 6.47 3.79227 6.75 3.44695 6.75Z" fill="#F2613C"/>
                                                        <path d="M10.202 6.125H4.07227C3.72727 6.125 3.44727 5.845 3.44727 5.5C3.44727 5.155 3.72727 4.875 4.07227 4.875H10.202C10.547 4.875 10.827 5.155 10.827 5.5C10.827 5.845 10.5473 6.125 10.202 6.125Z" fill="#F2613C"/>
                                                        <path d="M9.6757 10.1867C9.5157 10.1867 9.3557 10.1258 9.23383 10.0036C8.98977 9.75956 8.98977 9.36393 9.23383 9.11987L15.3379 3.01581C15.5817 2.77175 15.9779 2.77175 16.2217 3.01581C16.4657 3.25987 16.4657 3.6555 16.2217 3.89956L10.1176 10.0036C9.9957 10.1258 9.83539 10.1867 9.6757 10.1867Z" fill="#F2613C"/>
                                                        <path d="M9.07289 13C9.02945 13 8.98539 12.9957 8.94133 12.986C8.60383 12.9138 8.38883 12.5813 8.46133 12.2441L9.06476 9.43097C9.13695 9.09316 9.47007 8.87722 9.80695 8.95097C10.1444 9.02316 10.3594 9.35566 10.2869 9.69285L9.68351 12.506C9.62039 12.7994 9.36133 13 9.07289 13Z" fill="#F2613C"/>
                                                        <path d="M11.8866 12.3962C11.7266 12.3962 11.5666 12.3353 11.4448 12.2131C11.2007 11.969 11.2007 11.5734 11.4448 11.3294L17.5488 5.22528C17.7926 4.98122 18.1888 4.98122 18.4326 5.22528C18.6766 5.46935 18.6766 5.86497 18.4326 6.10903L12.3285 12.2131C12.2066 12.3353 12.0466 12.3962 11.8866 12.3962Z" fill="#F2613C"/>
                                                        <path d="M9.07186 13C8.78342 13 8.52436 12.7994 8.46124 12.5062C8.38905 12.1687 8.60374 11.8362 8.94124 11.764L11.7544 11.1603C12.0909 11.0887 12.4241 11.3025 12.4966 11.64C12.5687 11.9775 12.3541 12.31 12.0166 12.3822L9.20342 12.9859C9.15936 12.9953 9.1153 13 9.07186 13Z" fill="#F2613C"/>
                                                        <path d="M16.8854 7.39711C16.7254 7.39711 16.5654 7.33617 16.4435 7.21398L14.2338 5.0043C13.9898 4.76023 13.9898 4.36461 14.2338 4.12055C14.4776 3.87648 14.8738 3.87648 15.1176 4.12055L17.3273 6.33023C17.5713 6.5743 17.5713 6.96992 17.3273 7.21398C17.2054 7.33617 17.0454 7.39711 16.8854 7.39711Z" fill="#F2613C"/>
                                                        <path d="M17.9895 6.29211C17.8295 6.29211 17.6695 6.23117 17.5473 6.10898C17.3033 5.86492 17.3033 5.46898 17.5473 5.22492C17.7205 5.05211 17.8158 4.81648 17.8158 4.56242C17.8158 4.30836 17.7205 4.07273 17.5473 3.89992C17.2005 3.55273 16.5677 3.55305 16.2214 3.89961C15.9773 4.14367 15.5817 4.14367 15.3373 3.89992C15.0933 3.65586 15.0933 3.25992 15.3373 3.01586C15.7467 2.60617 16.2961 2.38086 16.8842 2.38086C17.4723 2.38086 18.022 2.60648 18.4311 3.01586C18.8401 3.42492 19.0655 3.97398 19.0655 4.56242C19.0655 5.15086 18.8401 5.70023 18.4308 6.1093C18.3095 6.23117 18.1495 6.29211 17.9895 6.29211Z" fill="#F2613C"/>
                                                    </svg>
                                                    <span class="ml-2">Edit Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1073_14957)">
                                                        <path d="M29.5745 25.422C29.192 25.6179 28.7212 25.4681 28.5237 25.0836H28.5237C27.3258 22.7492 24.1453 19.4025 20 19.4025C16.2823 19.4025 12.9785 22.1561 11.4763 25.0836C11.2786 25.4667 10.808 25.6179 10.4246 25.421C10.0413 25.224 9.88953 24.7543 10.0859 24.3707C11.8119 21.0003 15.6076 17.84 20 17.84C25.0093 17.84 28.5971 21.7991 29.914 24.3707C30.1106 24.7547 29.9586 25.2255 29.5745 25.422ZM10.3036 17.0314L12.0436 18.6011C12.3658 18.8918 12.8597 18.8627 13.147 18.5443C13.4359 18.2239 13.4105 17.7299 13.0902 17.4409L11.3502 15.8712C11.0299 15.5823 10.5359 15.6076 10.2468 15.928C9.95778 16.2484 9.98317 16.7424 10.3036 17.0314ZM27.9563 18.6011L29.6963 17.0314C30.0167 16.7424 30.0421 16.2484 29.7531 15.928C29.4641 15.6077 28.9701 15.5822 28.6497 15.8712L26.9097 17.4409C26.5893 17.7299 26.5639 18.2239 26.8529 18.5443C27.1405 18.8631 27.6345 18.8915 27.9563 18.6011ZM19.9999 15.4865C20.4314 15.4865 20.7812 15.1367 20.7812 14.7052V12.3594C20.7812 11.9279 20.4314 11.5781 19.9999 11.5781C19.5684 11.5781 19.2187 11.9279 19.2187 12.3594V14.7052C19.2187 15.1367 19.5685 15.4865 19.9999 15.4865ZM23.8378 24.7266C23.8378 26.846 22.1161 28.5703 20 28.5703C17.8838 28.5703 16.1621 26.846 16.1621 24.7266C16.1621 22.6072 17.8838 20.8829 20 20.8829C22.1161 20.8829 23.8378 22.6072 23.8378 24.7266ZM22.2754 24.7266C22.2754 23.4688 21.2546 22.4454 20 22.4454C18.7454 22.4454 17.7246 23.4688 17.7246 24.7266C17.7246 25.9845 18.7453 27.0078 20 27.0078C21.2546 27.0078 22.2754 25.9845 22.2754 24.7266Z" fill="#F2613C"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1073_14957">
                                                        <rect width="20" height="20" fill="white" transform="translate(10 10.0742)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span class="ml-2">View Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.874743 11.7141L1.90377 10.4402C2.0576 10.2498 2.32541 10.205 2.53064 10.3354L3.88919 11.1989C4.11553 11.3429 4.1849 11.647 4.04414 11.8785C3.90351 12.11 3.60592 12.181 3.37957 12.037L2.94775 11.7625C3.30618 13.1267 4.07783 14.3527 5.18264 15.2875C6.74113 16.6061 8.80346 17.024 10.6994 16.4054C11.8779 16.0209 12.8731 15.3606 13.6574 14.4431C14.3865 13.5905 14.8953 12.5426 15.1292 11.4125C15.1844 11.146 15.4406 10.9755 15.7013 11.032C15.962 11.0884 16.1287 11.3503 16.0734 11.6169C15.5076 14.3506 13.6083 16.4921 10.9927 17.3455C10.3185 17.5655 9.62651 17.6733 8.93869 17.6733C7.37177 17.6733 5.8271 17.1137 4.56733 16.0477C3.27212 14.9519 2.37769 13.5035 1.98307 11.8917L1.61887 12.3426C1.52348 12.4607 1.38561 12.5217 1.24649 12.5217C1.13841 12.5217 1.02945 12.4847 0.939466 12.4088C0.734113 12.2353 0.705082 11.9242 0.874743 11.7141Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.5"/>
                                                        <path d="M15.7245 8.57001C15.6354 8.57001 15.5458 8.54379 15.47 8.4956L14.1114 7.63206C13.8851 7.48827 13.8157 7.18397 13.9564 6.95254C14.0971 6.72111 14.3947 6.65004 14.6211 6.79397L15.0663 7.07693C14.758 5.84112 14.1162 4.72944 13.1777 3.81938C12.3437 3.01071 11.3159 2.4611 10.2056 2.23031C9.09475 1.99939 7.94998 2.09795 6.89507 2.51533C5.82771 2.93746 4.927 3.59771 4.21782 4.4777C3.55501 5.30012 3.088 6.29602 2.86732 7.35797C2.81189 7.62461 2.55564 7.79488 2.29499 7.73808C2.03422 7.68141 1.86782 7.41939 1.92325 7.15288C2.17598 5.93634 2.71198 4.79433 3.47294 3.85009C4.28882 2.83775 5.323 2.07894 6.5467 1.59487C7.77416 1.10938 9.10581 0.994757 10.3979 1.2632C11.6855 1.53087 12.8764 2.16722 13.8419 3.10323C14.5351 3.77556 15.0916 4.55352 15.4956 5.41577C15.758 5.97566 15.9233 6.41386 16.0291 6.92478L16.3816 6.48839C16.5514 6.27829 16.8556 6.2486 17.061 6.42221C17.2665 6.59569 17.2955 6.90679 17.1259 7.1169L16.0969 8.39087C16.0022 8.50807 15.8644 8.57001 15.7245 8.57001Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.5"/>
                                                    </svg>
                                                    <span class="ml-2">Reuse Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="17.0977" y="5.51831" width="1.61889" height="16.1889" rx="0.809446" transform="rotate(45 17.0977 5.51831)" fill="#F2613C"/>
                                                        <rect width="1.61889" height="16.1889" rx="0.809446" transform="matrix(0.707108 -0.707105 0.707108 0.707105 5.65234 6.66284)" fill="#F2613C"/>
                                                    </svg>
                                                    <span class="ml-2">Remove Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-0">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1073_15001)">
                                                        <path d="M10.7646 0.780273C7.74988 0.780273 5.33812 3.19204 5.33812 6.20674V8.6185C4.31312 8.6185 3.5293 9.40232 3.5293 10.4273V18.2655C3.5293 19.2905 4.31312 20.0744 5.33812 20.0744H16.1911C17.216 20.0744 17.9999 19.2905 17.9999 18.2655V10.4273C17.9999 9.40232 17.216 8.6185 16.1911 8.6185V6.20674C16.1911 3.19204 13.7793 0.780273 10.7646 0.780273ZM16.794 10.4273V18.2655C16.794 18.6273 16.5528 18.8685 16.1911 18.8685H5.33812C4.97635 18.8685 4.73518 18.6273 4.73518 18.2655V10.4273C4.73518 10.0656 4.97635 9.82438 5.33812 9.82438H5.94106H15.5881H16.1911C16.5528 9.82438 16.794 10.0656 16.794 10.4273ZM6.544 8.6185V6.20674C6.544 3.85527 8.41312 1.98615 10.7646 1.98615C13.1161 1.98615 14.9852 3.85527 14.9852 6.20674V8.6185H6.544Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.2"/>
                                                        <path d="M10.7658 11.6331C9.74085 11.6331 8.95703 12.4169 8.95703 13.4419C8.95703 14.2257 9.43938 14.8889 10.1629 15.1301V16.4566C10.1629 16.8183 10.4041 17.0595 10.7658 17.0595C11.1276 17.0595 11.3688 16.8183 11.3688 16.4566V15.1301C12.0923 14.8889 12.5747 14.2257 12.5747 13.4419C12.5747 12.4169 11.7908 11.6331 10.7658 11.6331ZM10.7658 14.0448C10.4041 14.0448 10.1629 13.8036 10.1629 13.4419C10.1629 13.0801 10.4041 12.8389 10.7658 12.8389C11.1276 12.8389 11.3688 13.0801 11.3688 13.4419C11.3688 13.8036 11.1276 14.0448 10.7658 14.0448Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.2"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1073_15001">
                                                        <rect width="22" height="22" fill="white" transform="translate(0 0.0742188)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span class="ml-2">Make Private</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="summary p-20">
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">About the client</h4>
                                            <p></p>
                                        </div>
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">China</h4>
                                            <p>Suzhou 2:47 am</p>
                                        </div>
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">3 jobs posted</h4>
                                            <p>34% hire rate, 2 open jobs</p>
                                        </div>
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">$50 total spent</h4>
                                            <p>1 hire, 1 active</p>
                                        </div>
                                        <div class="summary-inner">
                                            <p class="mb-0">Member since March 21, 2022 </p>
                                        </div>
                                    </div>
                                    <div class="about-job p-20">
                                        <div class="job-inner mb-5">
                                            <h4 class="sub-title mb-3">Job link</h4>
                                            <input type="text" class="form-control" placeholder="https://www.qapin.com/" disabled/>
                                            <a href="javascript:void(0);"><small class="text-theme">Copy link</small></a>
                                        </div>
                                        <div class="job-inner mb-5">
                                            <h4 class="sub-title mb-3">Skills</h4>
                                            <div class="tags-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Boilers</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Industrial Valves</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Boilers</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Industrial Valves</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="job-inner">
                                            <h4 class="sub-title mb-3">Project Schedule</h4>
                                            <p class="mb-0">01/09/2022  -  30/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Second Page -->

                <div class="row">
                    <div class="col-md-12">
                        <h3 class="title-block mb-4">Job Detail</h3>
                    </div>
                </div>

                <div class="row mb-20">
                    <div class="col-lg-12 col-md-12">
                        <div class="view-wrapper">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="title-wrap p-20">
                                        <h3 class="title-block">Freelance Inspector- China- Mooring Chain, Valves</h3>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-12 left">
                                    <div class="header p-20">
                                        <div class="d-flex align-items-center w-100">
                                            <div>
                                                <h5 class="mb-3 text-theme">Mechanical Inspector</h5>
                                                <p class="mb-0">Posted 1 day ago</p>
                                            </div>
                                            <div class="ml-auto d-flex align-items-center">
                                                <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0009 5.28052C8.37861 5.28052 5.41016 8.40161 5.41016 12.2751C5.41016 14.3588 6.46939 16.8773 8.23885 19.662C8.85375 20.6296 9.51649 21.566 10.1864 22.4407C10.6064 22.9891 10.953 23.4151 11.1795 23.6803C11.6252 24.2023 12.3769 24.202 12.8224 23.6803C13.0489 23.4151 13.3955 22.9891 13.8155 22.4407C14.4854 21.566 15.1481 20.6296 15.763 19.662C17.5325 16.8773 18.5917 14.3588 18.5917 12.2751C18.5916 8.40159 15.6232 5.28052 12.0009 5.28052ZM9.18957 18.8473C7.5603 16.2832 6.59169 13.9802 6.59169 12.2751C6.59169 9.19148 9.00641 6.6526 12.0009 6.6526C14.9954 6.6526 17.4101 9.19148 17.4102 12.2751C17.4102 13.9802 16.4416 16.2832 14.8123 18.8473C13.7973 20.4446 12.7487 21.8158 12.0009 22.6936C11.2531 21.8158 10.2046 20.4446 9.18957 18.8473ZM12.0009 14.761C10.7682 14.761 9.77235 13.5705 9.77235 12.1145C9.77235 10.6584 10.7683 9.46794 12.0009 9.46794C13.2336 9.46794 14.2295 10.6585 14.2295 12.1145C14.2295 13.5705 13.2336 14.761 12.0009 14.761ZM12.0009 13.5665C12.6588 13.5665 13.2009 12.9184 13.2009 12.1145C13.2009 11.3105 12.6588 10.6624 12.0009 10.6624C11.3431 10.6624 10.8009 11.3105 10.8009 12.1145C10.8009 12.9184 11.3431 13.5665 12.0009 13.5665Z" fill="#999999"/>
                                                </svg>
                                                <p class="mb-0">India, Madhya Pradesh, Indore</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content p-20">
                                        <p>We are a 25 years old Design & Engineering firm based in India, working with clients in the Oil & Gas industry worldwide.</p>
                                        <p>We regularly need Freelance Inspectors based in Jiangsu Province-China for occasional Inspection of Mooring Chains, Valves, Forgings, Castings, etc. Candidates must possess a degree in Mechanical Engineering or Metallurgy and hold valid Level NDT Certificates in RT, UT & MT.  Experience in Welding, Machining & Lab tests preferred., Must be fluent in English communications. Inspections on call basis.</p>
                                        <p>We regularly need Freelance Inspectors based in Jiangsu Province-China for occasional Inspection of Mooring Chains, Valves, Forgings, Castings, etc. Candidates must possess a degree in Mechanical Engineering or Metallurgy and hold valid Level NDT Certificates in RT, UT & MT.  Experience in Welding, Machining & Lab tests preferred., Must be fluent in English communications. Inspections on call basis.</p>
                                        <p>This position is for only for Inspectors currently residing in China.</p>
                                        <div class="d-flex align-items-center">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1073_15036)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2503 0H23.6237L34.958 11.8141V34.7926C34.958 37.6712 32.6292 40 29.7606 40H10.2503C7.3718 40 5.04297 37.6712 5.04297 34.7926V5.20738C5.04292 2.32883 7.37175 0 10.2503 0V0Z" fill="#E5252A"/>
                                                <path opacity="0.302" fill-rule="evenodd" clip-rule="evenodd" d="M23.6133 0V11.7241H34.9576L23.6133 0Z" fill="white"/>
                                                <path d="M10.8301 29.8452V22.5388H13.9385C14.7082 22.5388 15.3179 22.7487 15.7776 23.1785C16.2374 23.5983 16.4673 24.168 16.4673 24.8776C16.4673 25.5873 16.2374 26.157 15.7776 26.5768C15.3179 27.0066 14.7082 27.2165 13.9385 27.2165H12.6991V29.8452H10.8301ZM12.6991 25.6273H13.7286C14.0085 25.6273 14.2284 25.5673 14.3783 25.4274C14.5282 25.2975 14.6082 25.1176 14.6082 24.8777C14.6082 24.6378 14.5283 24.4579 14.3783 24.328C14.2284 24.188 14.0085 24.1281 13.7286 24.1281H12.6991V25.6273ZM17.2369 29.8452V22.5388H19.8256C20.3353 22.5388 20.8151 22.6088 21.2649 22.7587C21.7146 22.9086 22.1244 23.1186 22.4842 23.4084C22.8441 23.6882 23.1339 24.0681 23.3438 24.5478C23.5437 25.0276 23.6537 25.5773 23.6537 26.197C23.6537 26.8067 23.5437 27.3564 23.3438 27.8361C23.1339 28.3159 22.8441 28.6957 22.4842 28.9756C22.1244 29.2654 21.7146 29.4753 21.2649 29.6253C20.8151 29.7752 20.3353 29.8452 19.8256 29.8452H17.2369ZM19.066 28.256H19.6057C19.8955 28.256 20.1654 28.226 20.4153 28.156C20.6551 28.0861 20.885 27.9761 21.1049 27.8262C21.3148 27.6763 21.4848 27.4663 21.6047 27.1865C21.7246 26.9067 21.7846 26.5768 21.7846 26.197C21.7846 25.8072 21.7246 25.4774 21.6047 25.1975C21.4848 24.9177 21.3148 24.7078 21.1049 24.5578C20.885 24.4079 20.6552 24.298 20.4153 24.228C20.1654 24.1581 19.8955 24.128 19.6057 24.128H19.066V28.256ZM24.5932 29.8452V22.5388H29.7906V24.128H26.4623V25.2974H29.1209V26.8767H26.4623V29.8452H24.5932Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1073_15036">
                                                <rect width="40" height="40" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            <span class="text-black fz-20">My Doc File .pdf</span>
                                        </div>
                                    </div>
                                    <div class="job-scope p-20">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-12">
                                                <div class="box-wrapper d-flex align-items-center">
                                                    <div class="img-wrapper mr-2">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1073_14916)">
                                                            <path d="M12.4166 0.500244H7.91394C7.61608 0.500244 7.19977 0.672804 6.98932 0.8831L0.816135 7.05625C0.394622 7.47728 0.394622 8.16759 0.816135 8.58811L5.41257 13.1844C5.83313 13.6054 6.52277 13.6054 6.94396 13.1839L13.1171 7.01172C13.3274 6.80145 13.5 6.38448 13.5 6.08725V1.58362C13.5 0.987899 13.0123 0.500244 12.4166 0.500244ZM10.2498 4.8336C9.6515 4.8336 9.16645 4.34804 9.16645 3.75022C9.16645 3.15142 9.6515 2.66684 10.2498 2.66684C10.8482 2.66684 11.3334 3.15142 11.3334 3.75022C11.3334 4.34804 10.8482 4.8336 10.2498 4.8336Z" fill="#F2613C"/>
                                                            </g>
                                                            <defs>
                                                            <clipPath id="clip0_1073_14916">
                                                            <rect width="13" height="13" fill="white" transform="translate(0.5 0.5)"/>
                                                            </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div class="box-content">
                                                        <h5 class="sub-title">$ 2000</h5>
                                                        <p class="mb-0">Monthly rate</p>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="col-lg-4 col-md-12">
                                                <div class="box-wrapper d-flex align-items-center">
                                                    <div class="img-wrapper mr-2">
                                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.6562 11.25H11.3242C11.3242 12.4562 10.2816 13.4375 9 13.4375C7.71843 13.4375 6.67578 12.4562 6.67578 11.25H6.34375C4.23831 11.25 2.52539 12.8622 2.52539 14.8438V15.5312C2.52539 15.7901 2.74838 16 3.02344 16H14.9766C15.2516 16 15.4746 15.7901 15.4746 15.5312V14.8438C15.4746 12.8622 13.7617 11.25 11.6562 11.25Z" fill="#F2613C"/>
                                                            <path d="M7.67188 10.7812V11.25C7.67188 11.9403 8.26651 12.5 9 12.5C9.73349 12.5 10.3281 11.9403 10.3281 11.25V10.7812H7.67188Z" fill="#F2613C"/>
                                                            <path d="M9 1.875C9.27505 1.875 9.49805 1.66513 9.49805 1.40625V0.46875C9.49805 0.209875 9.27505 0 9 0C8.72495 0 8.50195 0.209875 8.50195 0.46875V1.40625C8.50195 1.66513 8.72495 1.875 9 1.875Z" fill="#F2613C"/>
                                                            <path d="M5.24649 1.54035L5.74454 2.35225C5.88207 2.57644 6.18668 2.65325 6.42488 2.52382C6.66308 2.39438 6.74469 2.10769 6.60716 1.8835L6.10911 1.0716C5.97159 0.847411 5.66698 0.770598 5.42878 0.900036C5.19058 1.02947 5.10897 1.31616 5.24649 1.54035Z" fill="#F2613C"/>
                                                            <path d="M2.99909 3.99975L3.86174 4.4685C4.09994 4.59794 4.40455 4.52113 4.54207 4.29694C4.6796 4.07275 4.59799 3.78607 4.35979 3.65663L3.49714 3.18788C3.25894 3.05844 2.95433 3.13525 2.81681 3.35944C2.67928 3.58363 2.76089 3.87032 2.99909 3.99975Z" fill="#F2613C"/>
                                                            <path d="M14.5004 3.18788L13.6378 3.65663C13.3996 3.78607 13.318 4.07275 13.4555 4.29694C13.593 4.52113 13.8976 4.59794 14.1358 4.4685L14.9985 3.99975C15.2366 3.87032 15.3183 3.58363 15.1807 3.35944C15.0432 3.13525 14.7386 3.05844 14.5004 3.18788Z" fill="#F2613C"/>
                                                            <path d="M11.5714 2.52382C11.8096 2.65325 12.1142 2.57644 12.2517 2.35225L12.7497 1.54035C12.8873 1.31616 12.8056 1.02947 12.5674 0.900036C12.3292 0.770598 12.0246 0.847411 11.8871 1.0716L11.3891 1.8835C11.2515 2.10769 11.3332 2.39438 11.5714 2.52382Z" fill="#F2613C"/>
                                                            <path d="M9 2.8125C6.98288 2.8125 5.34766 4.35153 5.34766 6.25C5.34766 7.47166 6.02586 8.54234 7.04649 9.15131C7.32015 9.31459 7.51914 9.56103 7.61241 9.84375H8.50195V7.38166L7.65172 6.58147C7.45722 6.39841 7.45722 6.10162 7.65172 5.91856C7.84622 5.7355 8.16155 5.7355 8.35606 5.91856L9 6.52459L9.64391 5.91856C9.83841 5.7355 10.1537 5.7355 10.3482 5.91856C10.5427 6.10162 10.5427 6.39841 10.3482 6.58147L9.49805 7.38166V9.84375H10.3876C10.4809 9.56103 10.6799 9.31459 10.9535 9.15131C11.9741 8.54234 12.6523 7.47166 12.6523 6.25C12.6523 4.35153 11.0171 2.8125 9 2.8125Z" fill="#F2613C"/>
                                                        </svg>
                                                    </div>
                                                    <div class="box-content">
                                                        <h5 class="sub-title">Expert</h5>
                                                        <p class="mb-0">Looking for 15+ year experience</p>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="col-lg-4 col-md-12">
                                                <div class="box-wrapper d-flex align-items-center">
                                                    <div class="img-wrapper mr-2">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1073_14884)">
                                                            <path d="M9.31831 8.43972C9.31831 9.65205 8.332 10.6384 7.11967 10.6384C5.90733 10.6384 4.92102 9.65205 4.92102 8.43972C4.92102 7.22735 5.90733 6.24102 7.11967 6.24102C7.56724 6.24102 7.98378 6.37578 8.3315 6.60638L9.60656 5.33132C9.57779 5.31028 9.54888 5.28934 9.51946 5.26877C8.65476 4.66452 7.78857 4.35913 6.94128 4.35913C6.86367 4.35913 6.78627 4.36168 6.70898 4.36681C5.68664 4.43639 4.7342 4.89151 4.02776 5.64828C3.31957 6.40572 2.92969 7.39695 2.92969 8.43972C2.92969 9.55851 3.36562 10.6106 4.15717 11.4022C4.94877 12.1938 6.00085 12.6297 7.11964 12.6297C8.23843 12.6297 9.29054 12.1937 10.0821 11.4022C10.8737 10.6106 11.3096 9.55851 11.3096 8.43972C11.3096 7.5188 10.9377 6.63468 10.2662 5.91453L8.95289 7.22785C9.18357 7.57558 9.31831 7.99215 9.31831 8.43972Z" fill="#F2613C"/>
                                                            <path d="M6.80781 8.12916L7.68766 7.24932C7.51524 7.16655 7.32224 7.12012 7.11856 7.12012C6.39086 7.12012 5.79883 7.71218 5.79883 8.43991C5.79883 9.16762 6.39086 9.75965 7.11856 9.75965C7.84627 9.75965 8.4383 9.16762 8.4383 8.43991C8.4383 8.23624 8.39187 8.0432 8.30913 7.87079L7.42932 8.75061L6.80781 8.12916Z" fill="#F2613C"/>
                                                            <path d="M11.4341 4.74597L10.8873 5.29276C11.7235 6.17815 12.1876 7.28158 12.1876 8.43984C12.1876 9.79341 11.6603 11.0662 10.7027 12.0238C9.74514 12.9813 8.47233 13.5087 7.11879 13.5087C5.76524 13.5087 4.49244 12.9813 3.53484 12.0238C2.57725 11.0662 2.0499 9.79338 2.0499 8.43984C2.0499 7.17339 2.52396 5.96897 3.38467 5.0484C4.24345 4.12836 5.40293 3.5748 6.64919 3.48998C7.77568 3.41554 8.91006 3.77141 10.022 4.54848C10.0942 4.59893 10.1644 4.6509 10.2333 4.70381L10.8127 4.12449L10.9054 2.47827C9.78413 1.76296 8.48098 1.37964 7.11882 1.37964C5.23298 1.37964 3.45999 2.11402 2.12651 3.4475C0.792978 4.78098 0.0585938 6.55397 0.0585938 8.43981C0.0585938 10.3256 0.792979 12.0986 2.12648 13.4321C3.45999 14.7656 5.23295 15.5 7.11879 15.5C9.00463 15.5 10.7776 14.7656 12.1111 13.4321C13.4446 12.0986 14.179 10.3256 14.179 8.43981C14.179 7.07765 13.7956 5.77449 13.0803 4.65318L11.4341 4.74597Z" fill="#F2613C"/>
                                                            <path d="M11.709 3.85021L13.5048 3.74899L15.0592 2.19459L13.3646 0.5L11.8102 2.05437L11.709 3.85021Z" fill="#F2613C"/>
                                                            </g>
                                                            <defs>
                                                            <clipPath id="clip0_1073_14884">
                                                            <rect width="15" height="15" fill="white" transform="translate(0.0585938 0.5)"/>
                                                            </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div class="box-content">
                                                        <h5 class="sub-title">Large</h5>
                                                        <p class="mb-0">More than 06 months</p>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div class="proposal p-20">
                                        <h5 class="mb-3 sub-title">You will be asked to answer the following questions when submitting a proposal:</h5>
                                        <p class="mb-3">Do you have an apple developer account?</p>
                                        <p class="mb-1">Describe your approach tot build an ios app form the flutter</p>
                                    </div>
                                    <div class="row p-20 activity">
                                        <div class="col-lg-4 col-md-12">
                                            <h5 class="mb-3 sub-title">Preffered Qualifications</h5>
                                            <ul>
                                                <li>Other lang:</li>
                                                <li>Enligh: <span class="text-muted">Fluent or better</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4 col-md-12">
                                            <h5 class="mb-3 sub-title">Activity on this job</h5>  
                                            <ul>
                                                <li>Proposals: <span class="text-muted">Less than 5</span></li>
                                                <li>Interviewing: <span class="text-muted">0</span></li>
                                                <li>Invites sent: <span class="text-muted">0</span></li>
                                                <li>Unanswered invites: <span class="text-muted">0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12 right">
                                    <div class="options p-20">
                                        <ul>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.3223 18.625C14.9773 18.625 14.6973 18.345 14.6973 18C14.6973 17.655 14.9773 17.375 15.3223 17.375H15.3229C15.3229 17.03 15.6023 16.75 15.9476 16.75C16.2929 16.75 16.5723 17.03 16.5723 17.375C16.5723 18.0644 16.0116 18.625 15.3223 18.625Z" fill="#F2613C"/>
                                                        <path d="M15.9473 17.9998C15.6023 17.9998 15.3223 17.7198 15.3223 17.3748V11.2451C15.3223 10.9001 15.6023 10.6201 15.9473 10.6201C16.2923 10.6201 16.5723 10.9001 16.5723 11.2451V17.3748C16.5723 17.7198 16.2923 17.9998 15.9473 17.9998Z" fill="#F2613C"/>
                                                        <path d="M15.3223 18.625H4.07227C3.72727 18.625 3.44727 18.345 3.44727 18C3.44727 17.655 3.72727 17.375 4.07227 17.375H15.3223C15.6673 17.375 15.9473 17.655 15.9473 18C15.9473 18.345 15.6673 18.625 15.3223 18.625Z" fill="#F2613C"/>
                                                        <path d="M4.07227 18.625C3.38289 18.625 2.82227 18.0644 2.82227 17.375C2.82227 17.03 3.10227 16.75 3.44727 16.75C3.79227 16.75 4.07227 17.03 4.07227 17.375V17.3759C4.41727 17.3759 4.69727 17.6553 4.69727 18.0003C4.69727 18.3453 4.41727 18.625 4.07227 18.625Z" fill="#F2613C"/>
                                                        <path d="M3.44727 18C3.10227 18 2.82227 17.72 2.82227 17.375V6.125C2.82227 5.78 3.10227 5.5 3.44727 5.5C3.79227 5.5 4.07227 5.78 4.07227 6.125V17.375C4.07227 17.72 3.79227 18 3.44727 18Z" fill="#F2613C"/>
                                                        <path d="M3.44695 6.75C3.10164 6.75 2.82227 6.47 2.82227 6.125C2.82227 5.43562 3.38289 4.875 4.07227 4.875C4.41727 4.875 4.69727 5.155 4.69727 5.5C4.69727 5.845 4.41727 6.125 4.07227 6.125H4.07164C4.07164 6.47 3.79227 6.75 3.44695 6.75Z" fill="#F2613C"/>
                                                        <path d="M10.202 6.125H4.07227C3.72727 6.125 3.44727 5.845 3.44727 5.5C3.44727 5.155 3.72727 4.875 4.07227 4.875H10.202C10.547 4.875 10.827 5.155 10.827 5.5C10.827 5.845 10.5473 6.125 10.202 6.125Z" fill="#F2613C"/>
                                                        <path d="M9.6757 10.1867C9.5157 10.1867 9.3557 10.1258 9.23383 10.0036C8.98977 9.75956 8.98977 9.36393 9.23383 9.11987L15.3379 3.01581C15.5817 2.77175 15.9779 2.77175 16.2217 3.01581C16.4657 3.25987 16.4657 3.6555 16.2217 3.89956L10.1176 10.0036C9.9957 10.1258 9.83539 10.1867 9.6757 10.1867Z" fill="#F2613C"/>
                                                        <path d="M9.07289 13C9.02945 13 8.98539 12.9957 8.94133 12.986C8.60383 12.9138 8.38883 12.5813 8.46133 12.2441L9.06476 9.43097C9.13695 9.09316 9.47007 8.87722 9.80695 8.95097C10.1444 9.02316 10.3594 9.35566 10.2869 9.69285L9.68351 12.506C9.62039 12.7994 9.36133 13 9.07289 13Z" fill="#F2613C"/>
                                                        <path d="M11.8866 12.3962C11.7266 12.3962 11.5666 12.3353 11.4448 12.2131C11.2007 11.969 11.2007 11.5734 11.4448 11.3294L17.5488 5.22528C17.7926 4.98122 18.1888 4.98122 18.4326 5.22528C18.6766 5.46935 18.6766 5.86497 18.4326 6.10903L12.3285 12.2131C12.2066 12.3353 12.0466 12.3962 11.8866 12.3962Z" fill="#F2613C"/>
                                                        <path d="M9.07186 13C8.78342 13 8.52436 12.7994 8.46124 12.5062C8.38905 12.1687 8.60374 11.8362 8.94124 11.764L11.7544 11.1603C12.0909 11.0887 12.4241 11.3025 12.4966 11.64C12.5687 11.9775 12.3541 12.31 12.0166 12.3822L9.20342 12.9859C9.15936 12.9953 9.1153 13 9.07186 13Z" fill="#F2613C"/>
                                                        <path d="M16.8854 7.39711C16.7254 7.39711 16.5654 7.33617 16.4435 7.21398L14.2338 5.0043C13.9898 4.76023 13.9898 4.36461 14.2338 4.12055C14.4776 3.87648 14.8738 3.87648 15.1176 4.12055L17.3273 6.33023C17.5713 6.5743 17.5713 6.96992 17.3273 7.21398C17.2054 7.33617 17.0454 7.39711 16.8854 7.39711Z" fill="#F2613C"/>
                                                        <path d="M17.9895 6.29211C17.8295 6.29211 17.6695 6.23117 17.5473 6.10898C17.3033 5.86492 17.3033 5.46898 17.5473 5.22492C17.7205 5.05211 17.8158 4.81648 17.8158 4.56242C17.8158 4.30836 17.7205 4.07273 17.5473 3.89992C17.2005 3.55273 16.5677 3.55305 16.2214 3.89961C15.9773 4.14367 15.5817 4.14367 15.3373 3.89992C15.0933 3.65586 15.0933 3.25992 15.3373 3.01586C15.7467 2.60617 16.2961 2.38086 16.8842 2.38086C17.4723 2.38086 18.022 2.60648 18.4311 3.01586C18.8401 3.42492 19.0655 3.97398 19.0655 4.56242C19.0655 5.15086 18.8401 5.70023 18.4308 6.1093C18.3095 6.23117 18.1495 6.29211 17.9895 6.29211Z" fill="#F2613C"/>
                                                    </svg>
                                                    <span class="ml-2">Edit Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1073_14957)">
                                                        <path d="M29.5745 25.422C29.192 25.6179 28.7212 25.4681 28.5237 25.0836H28.5237C27.3258 22.7492 24.1453 19.4025 20 19.4025C16.2823 19.4025 12.9785 22.1561 11.4763 25.0836C11.2786 25.4667 10.808 25.6179 10.4246 25.421C10.0413 25.224 9.88953 24.7543 10.0859 24.3707C11.8119 21.0003 15.6076 17.84 20 17.84C25.0093 17.84 28.5971 21.7991 29.914 24.3707C30.1106 24.7547 29.9586 25.2255 29.5745 25.422ZM10.3036 17.0314L12.0436 18.6011C12.3658 18.8918 12.8597 18.8627 13.147 18.5443C13.4359 18.2239 13.4105 17.7299 13.0902 17.4409L11.3502 15.8712C11.0299 15.5823 10.5359 15.6076 10.2468 15.928C9.95778 16.2484 9.98317 16.7424 10.3036 17.0314ZM27.9563 18.6011L29.6963 17.0314C30.0167 16.7424 30.0421 16.2484 29.7531 15.928C29.4641 15.6077 28.9701 15.5822 28.6497 15.8712L26.9097 17.4409C26.5893 17.7299 26.5639 18.2239 26.8529 18.5443C27.1405 18.8631 27.6345 18.8915 27.9563 18.6011ZM19.9999 15.4865C20.4314 15.4865 20.7812 15.1367 20.7812 14.7052V12.3594C20.7812 11.9279 20.4314 11.5781 19.9999 11.5781C19.5684 11.5781 19.2187 11.9279 19.2187 12.3594V14.7052C19.2187 15.1367 19.5685 15.4865 19.9999 15.4865ZM23.8378 24.7266C23.8378 26.846 22.1161 28.5703 20 28.5703C17.8838 28.5703 16.1621 26.846 16.1621 24.7266C16.1621 22.6072 17.8838 20.8829 20 20.8829C22.1161 20.8829 23.8378 22.6072 23.8378 24.7266ZM22.2754 24.7266C22.2754 23.4688 21.2546 22.4454 20 22.4454C18.7454 22.4454 17.7246 23.4688 17.7246 24.7266C17.7246 25.9845 18.7453 27.0078 20 27.0078C21.2546 27.0078 22.2754 25.9845 22.2754 24.7266Z" fill="#F2613C"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1073_14957">
                                                        <rect width="20" height="20" fill="white" transform="translate(10 10.0742)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span class="ml-2">View Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.874743 11.7141L1.90377 10.4402C2.0576 10.2498 2.32541 10.205 2.53064 10.3354L3.88919 11.1989C4.11553 11.3429 4.1849 11.647 4.04414 11.8785C3.90351 12.11 3.60592 12.181 3.37957 12.037L2.94775 11.7625C3.30618 13.1267 4.07783 14.3527 5.18264 15.2875C6.74113 16.6061 8.80346 17.024 10.6994 16.4054C11.8779 16.0209 12.8731 15.3606 13.6574 14.4431C14.3865 13.5905 14.8953 12.5426 15.1292 11.4125C15.1844 11.146 15.4406 10.9755 15.7013 11.032C15.962 11.0884 16.1287 11.3503 16.0734 11.6169C15.5076 14.3506 13.6083 16.4921 10.9927 17.3455C10.3185 17.5655 9.62651 17.6733 8.93869 17.6733C7.37177 17.6733 5.8271 17.1137 4.56733 16.0477C3.27212 14.9519 2.37769 13.5035 1.98307 11.8917L1.61887 12.3426C1.52348 12.4607 1.38561 12.5217 1.24649 12.5217C1.13841 12.5217 1.02945 12.4847 0.939466 12.4088C0.734113 12.2353 0.705082 11.9242 0.874743 11.7141Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.5"/>
                                                        <path d="M15.7245 8.57001C15.6354 8.57001 15.5458 8.54379 15.47 8.4956L14.1114 7.63206C13.8851 7.48827 13.8157 7.18397 13.9564 6.95254C14.0971 6.72111 14.3947 6.65004 14.6211 6.79397L15.0663 7.07693C14.758 5.84112 14.1162 4.72944 13.1777 3.81938C12.3437 3.01071 11.3159 2.4611 10.2056 2.23031C9.09475 1.99939 7.94998 2.09795 6.89507 2.51533C5.82771 2.93746 4.927 3.59771 4.21782 4.4777C3.55501 5.30012 3.088 6.29602 2.86732 7.35797C2.81189 7.62461 2.55564 7.79488 2.29499 7.73808C2.03422 7.68141 1.86782 7.41939 1.92325 7.15288C2.17598 5.93634 2.71198 4.79433 3.47294 3.85009C4.28882 2.83775 5.323 2.07894 6.5467 1.59487C7.77416 1.10938 9.10581 0.994757 10.3979 1.2632C11.6855 1.53087 12.8764 2.16722 13.8419 3.10323C14.5351 3.77556 15.0916 4.55352 15.4956 5.41577C15.758 5.97566 15.9233 6.41386 16.0291 6.92478L16.3816 6.48839C16.5514 6.27829 16.8556 6.2486 17.061 6.42221C17.2665 6.59569 17.2955 6.90679 17.1259 7.1169L16.0969 8.39087C16.0022 8.50807 15.8644 8.57001 15.7245 8.57001Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.5"/>
                                                    </svg>
                                                    <span class="ml-2">Reuse Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-3">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="17.0977" y="5.51831" width="1.61889" height="16.1889" rx="0.809446" transform="rotate(45 17.0977 5.51831)" fill="#F2613C"/>
                                                        <rect width="1.61889" height="16.1889" rx="0.809446" transform="matrix(0.707108 -0.707105 0.707108 0.707105 5.65234 6.66284)" fill="#F2613C"/>
                                                    </svg>
                                                    <span class="ml-2">Remove Posting</span>
                                                </a>
                                            </li>
                                            <li class="mb-0">
                                                <a href="javascript:void(0);" class="text-theme d-flex align-items-center">
                                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1073_15001)">
                                                        <path d="M10.7646 0.780273C7.74988 0.780273 5.33812 3.19204 5.33812 6.20674V8.6185C4.31312 8.6185 3.5293 9.40232 3.5293 10.4273V18.2655C3.5293 19.2905 4.31312 20.0744 5.33812 20.0744H16.1911C17.216 20.0744 17.9999 19.2905 17.9999 18.2655V10.4273C17.9999 9.40232 17.216 8.6185 16.1911 8.6185V6.20674C16.1911 3.19204 13.7793 0.780273 10.7646 0.780273ZM16.794 10.4273V18.2655C16.794 18.6273 16.5528 18.8685 16.1911 18.8685H5.33812C4.97635 18.8685 4.73518 18.6273 4.73518 18.2655V10.4273C4.73518 10.0656 4.97635 9.82438 5.33812 9.82438H5.94106H15.5881H16.1911C16.5528 9.82438 16.794 10.0656 16.794 10.4273ZM6.544 8.6185V6.20674C6.544 3.85527 8.41312 1.98615 10.7646 1.98615C13.1161 1.98615 14.9852 3.85527 14.9852 6.20674V8.6185H6.544Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.2"/>
                                                        <path d="M10.7658 11.6331C9.74085 11.6331 8.95703 12.4169 8.95703 13.4419C8.95703 14.2257 9.43938 14.8889 10.1629 15.1301V16.4566C10.1629 16.8183 10.4041 17.0595 10.7658 17.0595C11.1276 17.0595 11.3688 16.8183 11.3688 16.4566V15.1301C12.0923 14.8889 12.5747 14.2257 12.5747 13.4419C12.5747 12.4169 11.7908 11.6331 10.7658 11.6331ZM10.7658 14.0448C10.4041 14.0448 10.1629 13.8036 10.1629 13.4419C10.1629 13.0801 10.4041 12.8389 10.7658 12.8389C11.1276 12.8389 11.3688 13.0801 11.3688 13.4419C11.3688 13.8036 11.1276 14.0448 10.7658 14.0448Z" fill="#F2613C" stroke="#F2613C" stroke-width="0.2"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1073_15001">
                                                        <rect width="22" height="22" fill="white" transform="translate(0 0.0742188)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span class="ml-2">Make Private</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="summary p-20">
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">About the client</h4>
                                            <p></p>
                                        </div>
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">China</h4>
                                            <p>Suzhou 2:47 am</p>
                                        </div>
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">3 jobs posted</h4>
                                            <p>34% hire rate, 2 open jobs</p>
                                        </div>
                                        <div class="summary-inner mb-4">
                                            <h4 class="sub-title">$50 total spent</h4>
                                            <p>1 hire, 1 active</p>
                                        </div>
                                        <div class="summary-inner">
                                            <p class="mb-0">Member since March 21, 2022 </p>
                                        </div>
                                    </div>
                                    <div class="about-job p-20">
                                        <div class="job-inner mb-5">
                                            <h4 class="sub-title mb-3">Job link</h4>
                                            <input type="text" class="form-control" placeholder="https://www.qapin.com/" disabled/>
                                            <a href="javascript:void(0);"><small class="text-theme">Copy link</small></a>
                                        </div>
                                        <div class="job-inner mb-5">
                                            <h4 class="sub-title mb-3">Skills</h4>
                                            <div class="tags-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Boilers</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Industrial Valves</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Boilers</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" class="d-flex align-items-center">
                                                            <span class="mr-2">Industrial Valves</span> 
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="11.0039" y="4.11108" width="1" height="10" rx="0.5" transform="rotate(45 11.0039 4.11108)" fill="#F2613C"></rect>
                                                            <rect x="3.93262" y="4.81836" width="1" height="10" rx="0.5" transform="rotate(-45 3.93262 4.81836)" fill="#F2613C"></rect>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="job-inner">
                                            <h4 class="sub-title mb-3">Project Schedule</h4>
                                            <p class="mb-0">01/09/2022  -  30/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-20">
                    <div class="col-lg-12 col-md-12">
                        <div class="card card-table p-0 similar-jobs-wrap">
                            <div class="card-header p-20">
                                <h4 class="title-block mb-0">Similar Jobs on Qapin</h4>
                            </div>
                            <div class="card-body p-20">
                                <ul>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">G-Pay Integration Fluter <span class="text-black">We need experience flutter developer to integrate gpay in our app.</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">Flutter app development <span class="text-black">I have a current flutter app. Need to work on it more and make some new  developments and modifications, please let me know</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">Flutter Developer Needed <span class="text-black">Looking for a flutter developer to design a simple Ios app. We will provide API and its a simple app to show API data, M..</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">Expert flutter developer <span class="text-black">I have an existing mobile app in flutter which need updates.. looking for an expert developer</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">Looking for flutter developer <span class="text-black">We are looking for a mobile app developer ( Fullter ) who’s good command on dart and can deliver us this as soos as possible</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-20">
                    <div class="col-lg-12 col-md-12">
                        <div class="card card-table p-0 similar-jobs-wrap">
                            <div class="card-header p-20">
                                <h4 class="title-block mb-0">Other Open Jobs by this client</h4>
                            </div>
                            <div class="card-body p-20">
                                <ul>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">Figma designer for website/mobile mockup <span class="text-black">Fixed - Price</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">Python Developer - Full Time <span class="text-black">Fixed - Price</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">React Native Developer <span class="text-black">Fixed - Price</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">React.js Developer - Full Time <span class="text-black">Fixed - Price</span></a>
                                    </li>
                                    <li class="mb-3">
                                        <a href="javascript:void(0);">Technical Wtriter - Full Time <span class="text-black">Fixed - Price</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
  import NoPostIcon from '../../../src/components/icons/NoPostIcon.vue'
  export default {
    name: 'Qapin || Find a Job',

    components: {
      NoPostIcon,
    },

    data() {
      return {}
    },
  }
</script>

<style>
            body{background-color: #fff;}
            .card{
                background: #FFFFFF;
                border: 1.5px solid #EBEBEB;
                box-sizing: border-box;
                border-radius: 20px;
            }
            .plans {
                box-sizing: border-box;
                background: #fff;
                border-radius: 10px;
                /*-webkit-box-shadow: 0px 8px 10px 0px #d8dfeb;
                box-shadow: 0px 8px 10px 0px #d8dfeb;*/
            }

            .plans .plan input[type="radio"] {
                position: absolute;
                opacity: 0;
            }

            .plans .plan {
                cursor: pointer;
                width: 100%;
            }

            .plans .plan .plan-content {
                padding: 30px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border: 2px solid #e1e2e7;
                border-radius: 10px;
                -webkit-transition: -webkit-box-shadow 0.4s;
                transition: -webkit-box-shadow 0.4s;
                -o-transition: box-shadow 0.4s;
                transition: box-shadow 0.4s;
                transition: box-shadow 0.4s, -webkit-box-shadow 0.4s;
                position: relative;
                text-align:center;
            }

            .plans .plan .plan-content img {
                margin-right: 0px;
                height: 72px;
            }

            .plans .plan .plan-details span {
                margin-bottom: 10px;
                display: block;
                font-size: 20px;
                line-height: 24px;
                color: #252f42;
            }

            .container .title {
                font-size: 16px;
                font-weight: 500;
                -ms-flex-preferred-size: 100%;
                flex-basis: 100%;
                color: #252f42;
                margin-bottom: 20px;
            }

            .plans .plan .plan-details p {
                color: #646a79;
                font-size: 14px;
                line-height: 18px;
            }

            .plans .plan .plan-content:hover {
                -webkit-box-shadow: 0px 3px 5px 0px #e8e8e8;
                box-shadow: 0px 3px 5px 0px #e8e8e8;
            }

            .plans .plan input[type="radio"]:checked + .plan-content:after {
                content: "";
                position: absolute;
                height: 8px;
                width: 8px;
                background: #e1e2e7;
                right: 20px;
                top: 20px;
                border-radius: 100%;
                border: 3px solid #fff;
                box-shadow: 0px 0px 0px 2px #a0a0a0;;
            }

            .plans .plan input[type="radio"]:checked + .plan-content {
                border: 1px solid #F2613C;
                background: #f2613b08;
                -webkit-transition: ease-in 0.3s;
                -o-transition: ease-in 0.3s;
                transition: ease-in 0.3s;
            }
            .svg-wrap{
                width: 20px;
                height: 20px;
                margin: 5px auto 20px auto;
            }

            @media screen and (max-width: 991px) {
                .plans {
                    margin: 0 20px;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-box-align: start;
                    -ms-flex-align: start;
                    align-items: flex-start;
                    padding: 40px;
                }

                .plans .plan {
                    width: 100%;
                }

                .plan.complete-plan {
                    margin-top: 20px;
                }

                .plans .plan .plan-content .plan-details {
                    width: 70%;
                    display: inline-block;
                }

                .plans .plan input[type="radio"]:checked + .plan-content:after {
                    top: 45%;
                    -webkit-transform: translate(-50%);
                    -ms-transform: translate(-50%);
                    transform: translate(-50%);
                }
            }

            @media screen and (max-width: 767px) {
                .plans .plan .plan-content .plan-details {
                    width: 60%;
                    display: inline-block;
                }
            }

            @media screen and (max-width: 540px) {
                .plans .plan .plan-content img {
                    margin-bottom: 20px;
                    height: 56px;
                    -webkit-transition: height 0.4s;
                    -o-transition: height 0.4s;
                    transition: height 0.4s;
                }

                .plans .plan input[type="radio"]:checked + .plan-content:after {
                    top: 20px;
                    right: 10px;
                }

                .plans .plan .plan-content .plan-details {
                    width: 100%;
                }

                .plans .plan .plan-content {
                    padding: 20px;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-box-align: baseline;
                    -ms-flex-align: baseline;
                    align-items: baseline;
                }
            }

            /*form styles*/
            #msform {
                width: 100%;
                margin: 0 auto;
                text-align: center;
                position: relative;
            }
            #msform fieldset {
                background: white;
                border: 0 none;
                border-radius: 0 10px 10px 0;
                padding: 20px 30px;
                box-sizing: border-box;
                width: 90%;
                margin: 0;
                /*position: absolute;*/
            }
            /*Hide all except first fieldset*/
            #msform fieldset:not(:first-of-type) {
                display: none;
            }
            /*inputs*/
            #msform input, #msform textarea, #msform button{
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 6px;
                margin-bottom: 10px;
                /*width: 100%;*/
                box-sizing: border-box;
                font-family: montserrat;
                color: #2C3E50;
                font-size: 13px;
                font-weight: 400;
            }
            #msform select {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 6px;
                margin-bottom: 10px;
                width: 100%;
                box-sizing: border-box;
                font-family: montserrat;
                color: #2C3E50;
                font-size: 13px;
                height:auto;
                color: #a0a0a0!important;
                font-weight: 400;
            }
            /*buttons*/
            /*#msform .action-button {
                width: 100px;
                background: #27AE60;
                font-weight: bold;
                color: white;
                border: 0 none;
                border-radius: 1px;
                cursor: pointer;
                padding: 10px 5px;
                margin: 10px 5px;
            }*/
            #msform .action-button:hover, #msform .action-button:focus {
                box-shadow: 0 0 0 2px white, 0 0 0 3px #f2613d;
            }
            /*headings*/
            .fs-title {
                font-size: 20px;
                color: #000000;
                margin-bottom: 10px;
                font-weight:400;
            }
            .fs-subtitle {
                font-weight: normal;
                font-size: 13px;
                color: #666;
                margin-bottom: 20px;
            }
            /*progressbar*/
            #progress-bar {
                margin-bottom: 30px;
                overflow: hidden;
                /*CSS counters to number the steps*/
                counter-reset: step;
                border-radius:0px;
            }
            #progress-bar li {
                list-style-type: none;
                color: white;
                text-transform: capitalize;
                font-size: 11px;
                width: 25%;
                float: left;
                position: relative;
                text-align: left;
                letter-spacing: .5px;
            }
            #progress-bar li:before {
                content: counter(step);
                /*counter-increment: step;*/
                width: 100%;
                line-height: 4px;
                display: block;
                font-size: 0px;
                color: #fff;
                background: rgba(255, 255, 255, .3);
                margin: 0 auto 5px auto;
            }
            /*progressbar connectors*/
            #progress-bar li:after {
                content: '';
                width: 100%;
                height: 2px;
                background: white;
                position: absolute;
                left: -50%;
                top: 9px;
                z-index: -1; /*put it behind the numbers*/
            }
            #progress-bar li:first-child:after {
                /*connector not needed before the first step*/
                content: none; 
            }
            /*marking active/completed steps green*/
            /*The number of the step and the connector before it = green*/
            #progress-bar li.active:before,  #progress-bar li.active:after{
                background: #ffffff;
                color: #27AE60;
                width: 100%;
            }
            .left-section{
                width: 97%;
                background-color: #f2613b;
                padding: 20px;
                border-radius: 10px 0 0 10px;
                margin-left: 15px;
                background-image: url(http://192.168.64.2/qapin_mvp5/assets/img/union-white.png);
                background-repeat: no-repeat;
                background-position: bottom center;
                background-size: auto;
                height: 100vh;
            }
            .left-section .title{
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 45px;
                line-height: 57px;
                color: #FFFFFF;
            }
            .left-section .subtitle{
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 28px;
                color: #FFFFFF;
            }
            @media (min-width: 1200px){
                .container {
                    max-width: 1500px !important;
                }
            }
            .no-gutter{
                padding-left:0px;
                padding-right:0px;
            }
            .right-section{
                width: 97%;
                text-align: left;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                max-height: 100vh;
                overflow: hidden;
                overflow-y: auto;
            }
            .example-wrap{
                list-style: disc;
                /*margin-left: 18px;*/
                margin-left: -12px;
            }
            .example-wrap li{
                margin-bottom: 15px;
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
                color: #000000;
            }
            .example-wrap li::marker{color: #f2613b;}
            .tags-wrap ul li {
                display: inline-block;
                background: #fcfcfc;
                padding: 4px 20px;
                border: 1px solid #e5e5e5;
                border-radius: 29px;
                margin-bottom: 8px;
                -webkit-transition: all 0.3s ease 0s;
                -moz-transition: all 0.3s ease 0s;
                -o-transition: all 0.3s ease 0s;
                transition: all 0.3s ease 0s;
                margin: 0 5px 5px 0;
            }
            .tags-wrap ul li a{
                font-size:16px;
                color: #999999;
                font-weight: 300;
            }
            .action-nxt-btn{
                border-radius: 6px!important;
                background-color: #F2613C!important;
                box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                border: 1px solid #F2613C!important;
                color: #fff!important;
                font-family: "Source Sans Pro"!important;
                font-size: 14px!important;
                font-weight: 600;
                line-height: 20px;
                text-align: center;
                width: 131px!important;
                padding: 6px 12px!important;
            }
            .action-prev-btn{
                border-radius: 6px!important;
                background-color: #cccccc;
                box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                border: 1px solid #b9b8b8!important;
                color: #00000091!important;
                font-family: "Source Sans Pro"!important;
                font-size: 14px!important;
                font-weight: 600;
                line-height: 20px;
                text-align: center;
                width: 131px!important;
                margin-top: 10px;
                padding: 6px 12px!important;
            }
            .action-prev-btn:hover{
                box-shadow:0 0 0 2px white, 0 0 0 3px #d2d2d2!important;
            }
            .fz-8{font-size:8px;}
            .select-wrap div {
                clear: both;
                
            }

            .select-wrap{position:relative;margin-left: 12px;margin-right: 12px;}
            .select-wrap label {
                width: 100%;
                border-radius: 3px;
                border: 1px solid #dee2e6;
                height: 280px;
                background-color: #fff;
            }

            /* hide input */
            .select-wrap input.radio:empty {
                position: absolute;
                opacity: 0;
            }

            /* style label */
            .select-wrap input.radio:empty ~ label {
                position: relative;
                float: left;
                line-height: 1em;
                margin-top: 0;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                text-align: center;
                padding: 10px;
                box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);
                background: #FFFFFF;
                border: 1.5px solid #EBEBEB;
                box-sizing: border-box;
                border-radius: 20px;
            }

            .select-wrap input.radio:empty ~ label:before {
                position: absolute;
                display: block;
                top: 15px;
                right: 15px;
                content: '';
                width: 2em;
                background: transparent;
                border-radius: 50%;
                height: 2em;
                padding: 3px 0px;
                background-color: #ffffff;
                border: 1px solid #9b9d9e;
                font-size: 10px;
            }

            .select-wrap input.radio:hover:not(:checked) ~ label {
                color: #888;
            }

            /* toggle on */
            .select-wrap input.radio:checked ~ label:before {
                content: '\f111';
                /* text-indent: 0em; */
                font-family: fontAwesome;
                color: #ffffff;
                background-color: #f2613d;
                border: 1px solid #f2613d;
                font-size: 10px;
                padding-top: 1px;
                width: 2em;
                border-radius: 50%;
                height: 2em;
            }

            .select-wrap input.radio:checked ~ label {
                color: #777;
                border: 1.5px solid #f2613d;
            }

            .w-50{width:50%;}
            .step-form{display:none;}
            .pl4{padding-left: 4px;}
            .pr4{padding-right: 4px;}
            .justify-content-right{justify-content:right;}
            /*.select-employment-type-wrap label{height:40px;padding: 10px 8px!important;}*/
            .select-budget-wrap input{
                margin-bottom: 0px!important;
                width: auto!important;
            }
            .final-step{display:none;}
            .w-45{width:45%;}
            .first-label span{
                color: #000;
                font-weight: 600;
                font-size: 16px;
                display: flex;
                align-items: center;    
                justify-content: center;
                position: relative;
                line-height: 0;
                height: 100%;
            }
            .justify-content-in-between{
                justify-content:
            }
            .bg-grey{background-color: #eee!important;}
            .action-btn .btn{
                background-color:transparent;
            }
            .action-btn .dropdown-toggle::after{
                opacity:0!important;
            }
            .no-border{border:0px;}
            .up-icon.md {
                width:80px;
                height:80px;
                text-align:center;
                background-color:#f8f8f8;
                border-radius:50%;
                padding: 16px 18px;
                margin:0 auto;
            }
            .font-normal{font-weight:400;}
            .draft-wrap, .reuse-job-wrap, .team-wrap, .new-wrap {
                position: relative;
                margin-left: 12px;
                margin-right: 12px;
            }
            .hide{display:none;}
        
            .accordion .card {
                border: none;
                margin-bottom: 0px;
            }
            .accordion .card h2 {
                background: url(https://cdn0.iconfinder.com/data/icons/entypo/91/arrow56-512.png) no-repeat calc(100% - 10px) center;
                background-size: 11px;
                cursor: pointer;
            }
            .accordion .card h2.collapsed {
                background-image: url(https://cdn0.iconfinder.com/data/icons/arrows-android-l-lollipop-icon-pack/24/expand2-256.png);
            }
            .accordion .card-body {
                padding-left: 0;
                padding-right: 0;
            }
            .selected-tags .tags-wrap ul li{
                background: #fcfcfc;
                border: 1px solid rgb(242, 97, 61);
            }
            .selected-tags .tags-wrap ul li a{
                color: #a3a2a2;
            }
            .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
                background-color: #f2613d;
            }
            .custom-control-label::after{
                top: 0.25rem;
                left: -1.5rem;
                display: block;
                width: 1rem!important;
                height: 1rem!important;
            }
            .card-table .card-footer{border-radius:0 0 10px 10px;}
            .text-theme{color:#f2613d;}
            .fz-20{font-size:20px;}
            .hide {display: none;}
            .form-control{
                border: 1px solid #cecece;
                border-radius: 6px;
            }
            .mx-height-900{max-height: 900px;}
            .mn-height-700{min-height: 700px;}
            .bg-image{
                background-image:url(http://192.168.64.2/qapin_mvp5/assets/img/union-orange.png);
                background-repeat:no-repeat;
                background-size: contain;
                background-position: right bottom;
            }
            .fz-15{font-size:15px;}
            .step2 .input-group input{width:auto!important;margin-bottom:0px!important;border-radius: 6px 0 0 6px!important;    border-right: 0px!important;}
            .step2 .input-group .input-group-text {
                display: flex;
                align-items: center;
                padding: 0.594rem 0.75rem;
                margin-bottom: 0;
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                text-align: center;
                white-space: nowrap;
                background-color: #ffffff;
                border: 1px solid #cccccc;
                border-radius: 3px;
                border-radius: 0px 6px 6px 0px!important;
                border-left: 0px!important;
            }
            .no-border{border:0px;}
            .no-bg{background-color:#fff;}
            .new-wrap label, .draft-wrap label, .reuse-job-wrap label{
                font-family: Source Sans Pro;
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0px;
                text-align: left;
            }
            .btn-wrap{
                position: absolute;
                bottom: 0;
                right: 13px;
                width: 98.8%;
                text-align: right;
                border-top: 1px solid #ebebeb;
                padding: 20px;
            }







            /*progressbar*/
                #progress-bar li {
                    list-style-type: none;
                    color: white;
                    text-transform: capitalize;
                    font-size: 11px;
                    width: 25%;
                    float: left;
                    position: relative;
                    text-align: left;
                    letter-spacing: .5px;
                    font-size:14px;
                }
                #progress-bar li:before {
                    content: counter(step);
                    /*counter-increment: step;*/
                    width: 100%;
                    line-height: 4px;
                    display: block;
                    font-size: 0px;
                    color: #fff;
                    background: rgba(255, 255, 255, .3);
                    margin: 0 auto 5px auto;
                }
                /*progressbar connectors*/
                #progress-bar li:after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    background: white;
                    position: absolute;
                    left: -50%;
                    top: 9px;
                    z-index: -1; /*put it behind the numbers*/
                }
                #progress-bar li:first-child:after {
                    /*connector not needed before the first step*/
                    content: none; 
                }
                /*marking active/completed steps green*/
                /*The number of the step and the connector before it = green*/
                #progress-bar li.active:before,  #progress-bar li.active:after{
                    background: #ffffff;
                    color: #27AE60;
                    width: 100%;
                }
                #msform {
                    width: 100%;
                    margin: 0 auto 50px auto;
                    text-align: center;
                    position: relative;
                }
                #msform fieldset {
                    background: white;
                    border: 0 none;
                    border-radius: 0 20px 20px 0;
                    padding: 0px;
                    box-sizing: border-box;
                    width: 100%;
                    margin: 0;
                    position: relative;
                }
                /*Hide all except first fieldset*/
                #msform fieldset:not(:first-of-type) {
                    display: none;
                }
                /*inputs*/
                #msform input, #msform textarea{
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    margin-bottom: 10px;
                    /*width: 100%;*/
                    box-sizing: border-box;
                    font-family: montserrat;
                    color: #2C3E50;
                    font-size: 13px;
                    font-weight: 400;
                }
                #msform button{
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    width: 25%;
                    box-sizing: border-box;
                    font-family: montserrat;
                    color: #2C3E50;
                    font-size: 13px;
                    font-weight: 400;
                }
                #msform select {
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    margin-bottom: 10px;
                    width: 100%;
                    box-sizing: border-box;
                    font-family: montserrat;
                    color: #2C3E50;
                    font-size: 13px;
                    height:auto;
                    color: #a0a0a0!important;
                    font-weight: 400;
                }
                /*buttons*/
                /*#msform .action-button {
                    width: 100px;
                    background: #27AE60;
                    font-weight: bold;
                    color: white;
                    border: 0 none;
                    border-radius: 1px;
                    cursor: pointer;
                    padding: 10px 5px;
                    margin: 10px 5px;
                }*/
                #msform .action-button:hover, #msform .action-button:focus {
                    box-shadow: 0 0 0 2px white, 0 0 0 3px #f2613d;
                }
                /*headings*/
                .fs-title {
                    font-size: 20px;
                    color: #000000;
                    margin-bottom: 10px;
                    font-weight:400;
                }
                .fs-subtitle {
                    font-weight: normal;
                    font-size: 13px;
                    color: #666;
                    margin-bottom: 20px;
                }
                .custom-radio .custom-control-input:checked~.custom-control-label::before {
                    background-color: #f2613b;
                }
                .login-wrap{
                    border-radius: 0 20px 20px 0;
                    border: 1.5px solid #EBEBEB;
                    width:60%;
                }
                fieldset .btn-wrap{
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
                    border-top: 1px solid #eee;
                    width: 100%;
                    padding: 20px 0;
                    background-color: #fff;
                }
                fieldset .btn-group{
                    display: block;
                    text-align: right;
                }
                fieldset .btn-group .btn{ 
                    margin-right:20px;
                }
                .content-right-wrap{
                    max-height: 800px;
                    overflow: hidden;
                    overflow-y: scroll;
                    padding: 3rem;
                    border-radius: 0 20px 20px 0;
                    min-height: 800px;
                    margin-bottom: 75px;
                }
                .accordion .card {
                    border: none;
                    margin-bottom: 0px;
                }
                .accordion .card h2 {
                    background: url(https://cdn0.iconfinder.com/data/icons/entypo/91/arrow56-512.png) no-repeat calc(100% - 10px) center;
                    background-size: 11px;
                    cursor: pointer;
                }
                .accordion .card h2.collapsed {
                    background-image: url(https://cdn0.iconfinder.com/data/icons/arrows-android-l-lollipop-icon-pack/24/expand2-256.png);
                }
                .accordion .card-body {
                    padding-left: 0;
                    padding-right: 0;
                }
                .selected-tags .tags-wrap ul li{
                    background: #fcfcfc;
                    border: 1px solid rgb(242, 97, 61);
                }
                .selected-tags .tags-wrap ul li a{
                    color: #a3a2a2;
                }
                .tags-wrap ul li {
                    display: inline-block;
                    background: #fcfcfc;
                    padding: 4px 20px;
                    border: 1px solid #e5e5e5;
                    border-radius: 29px;
                    margin-bottom: 8px;
                    -webkit-transition: all 0.3s ease 0s;
                    -moz-transition: all 0.3s ease 0s;
                    -o-transition: all 0.3s ease 0s;
                    transition: all 0.3s ease 0s;
                    margin: 0 5px 5px 0;
                }
                .step2 .input-group input {
                    width: auto!important;
                    margin-bottom: 0px!important;
                    border-radius: 6px 0 0 6px!important;
                    border-right: 0px!important;
                }
                .tags-wrap ul li a {
                    font-size: 16px;
                    color: #999999;
                    font-weight: 300;
                }
                .step2 .input-group .input-group-text {
                    display: flex;
                    align-items: center;
                    padding: 0.594rem 0.75rem;
                    margin-bottom: 0;
                    font-size: 0.875rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #495057;
                    text-align: center;
                    white-space: nowrap;
                    background-color: #ffffff;
                    border: 1px solid #cccccc;
                    border-radius: 3px;
                    border-radius: 0px 6px 6px 0px!important;
                    border-left: 0px!important;
                }
                .step3 p{
                    font-family: Source Sans Pro;
                    font-size: 18px;
                    font-weight: 300;
                    line-height: 28px;
                    letter-spacing: 0px;
                    text-align: left;
                    color:#979797;
                }
                .step3 .hidescope .form-check p{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #999999;
                }
                .text-theme {
                    color: #f2613d;
                }
                .fz-12 {
                    font-size: 12px;
                }
                .action-nxt-btn {
                    border-radius: 6px!important;
                    background-color: #F2613C;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                    border: 1px solid #F2613C!important;
                    color: #fff!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600;
                    line-height: 20px;
                    text-align: center;
                    padding: 8px 12px!important;
                }
                .action-nxt-btn:hover, .action-nxt-btn:focus {
                    box-shadow: 0 0 0 2px white, 0 0 0 3px #f2613d!important;
                }
                .action-prev-btn{
                    background: #FFFFFF;
                    border: 1.5px solid #999999!important;
                    box-sizing: border-box;
                    border-radius: 6px!important;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                    color: #000000!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600;
                    line-height: 20px;
                    text-align: center;
                    padding: 8px 12px!important;
                }
                .action-prev-btn:hover, .action-prev-btn:focus {
                    box-shadow: 0 0 0 2px white, 0 0 0 3px #999999!important;
                }
                .budget-wrap div {
                    clear: both;
                    
                }

                .budget-wrap{position:relative;margin-left: 12px;margin-right: 12px;}
                .budget-wrap .scope-label {
                    width: 100%;
                    border-radius: 3px;
                    border: 1px solid #dee2e6;
                    height: 100px;
                    background-color: #fff;
                }

                /* hide input */
                .budget-wrap input.radio:empty {
                    position: absolute;
                    opacity: 0;
                }

                /* style label */
                .budget-wrap input.radio:empty ~ .scope-label {
                    position: relative;
                    float: left;
                    line-height: 1em;
                    margin-top: 0;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    text-align: center;
                    padding: 10px;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 5%);
                    background: #FFFFFF;
                    border: 1.5px solid #EBEBEB;
                    box-sizing: border-box;
                    border-radius: 20px;
                }

                .budget-wrap input.radio:empty ~ .scope-label:before {
                    position: absolute;
                    display: block;
                    top: 15px;
                    right: 15px;
                    content: '';
                    width: 2em;
                    background: transparent;
                    border-radius: 50%;
                    height: 2em;
                    padding: 3px 0px;
                    background-color: #ffffff;
                    border: 1px solid #9b9d9e;
                    font-size: 10px;
                }

                .budget-wrap input.radio:hover:not(:checked) ~ .scope-label {
                    color: #888;
                }

                /* toggle on */
                .budget-wrap input.radio:checked ~ .scope-label:before {
                    content: '\f111';
                    /* text-indent: 0em; */
                    font-family: fontAwesome;
                    color: #ffffff;
                    background-color: #f2613d;
                    border: 1px solid #f2613d;
                    font-size: 10px;
                    padding-top: 2px;
                    width: 2em;
                    border-radius: 50%;
                    height: 2em;
                }

                .budget-wrap input.radio:checked ~ .scope-label {
                    color: #777;
                    border: 1.5px solid #f2613d;
                }
                .budget-wrap .up-icon{
                    background-color: #eee;
                    padding: 16px 17px;
                    width: 65px;
                    height: 65px;
                    border-radius: 50%;
                }
                .budget-wrap .up-icon img{
                    width:100%;
                }
                .budget-wrap .input-group input{
                    width: auto!important;
                    margin-bottom: 0px!important;
                    border-radius: 0 6px 6px 0!important;
                    border-left: 0px!important;
                }
                .budget-wrap .input-group .input-group-text {
                    display: flex;
                    align-items: center;
                    padding: 0.594rem 0.75rem;
                    margin-bottom: 0;
                    font-size: 0.875rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #495057;
                    text-align: center;
                    white-space: nowrap;
                    background-color: #ffffff;
                    border: 1px solid #cccccc;
                    border-radius: 3px;
                    border-radius: 6px 0 0 6px!important;
                    border-right: 0px!important;
                }
                .budget-wrap .input-group{
                    width:200px!important;
                }
                .category-wrap label{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #999999;
                }
                .step3 .hidescope label{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 20px;
                    color: #000000;
                }
                .hidescope{
                    padding: 0px 26px;
                }
                .final-step .title{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 34px;
                    line-height: 43px;
                    text-transform: capitalize;
                    color: #000000;
                }
                .fs-subtitle{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 28px;
                    color: #979797;
                }
                .btn-outline-theme{
                    border-radius: 6px!important;
                    background-color: #ffffff;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                    border: 1px solid #F2613C!important;
                    color: #F2613C;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600;
                    line-height: 20px;
                    text-align: center;
                    padding: 8px 12px!important;
                }
                .btn-outline-theme:hover{
                    border-radius: 6px!important;
                    background-color: #f2613c24;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                    border: 1px solid #F2613C!important;
                    color: #F2613C;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600;
                    line-height: 20px;
                    text-align: center;
                    padding: 8px 12px!important;
                }
                .final-step .attach-file:hover svg{
                    fill: red;
                }
                .final-step .post-review {border-bottom: 1px solid #ebebeb;}
                .final-step .post-review .span-name{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 28px;
                    color: #979797;
                }
                .accordion-wrap #faq .card .card-header .btn-link:after {
                    content: "\f107";
                    font-family: 'FontAwesome';
                    font-weight: 900;
                    float: right;
                    position: absolute;
                    right: 0px;
                    top: 20px;
                    color: #333;
                }
                .accordion-wrap #faq .card .card-header .btn-link.collapsed:after {
                    content: "\f106";
                }
                .pos-rel{position:relative;}
                .w-auto{width:auto!important;}
                .radio-label{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #999999;
                }
                .editcategorymodal .close{
                    position: absolute;
                    top: -80px;
                    right: -24px;
                    color: #fff;
                }
                .editcategorymodal .form-group, .editbudgetmodal .budget-wrap {
                    padding: 2rem 1.5rem 0 1.5rem !important;
                }
                .congratulationsModal .modal-body{
                    padding: 40px 0;
                }
                .congratulationsModal .modal-body .close{
                    top:-27px;
                }
                .hidden{display:none;}
                .m-0{margin:0 auto 0 auto!important}
                .add-question-wrap{display:none;}
                .br-0{border-radius:0px!important;}
                .view-job-post-wrap .btn-theme:hover{border-radius:0px!important;}
                .view-job-post-wrap .btn-outline-theme:hover{border-radius:0px!important;}
                .view-job-post-wrap .btn-group .badge-theme{background-color: #f2613d!important;color: #fff!important;font-weight: 400;padding: 3px 4px!important;}
                .view-job-post-wrap .btn-group .badge-default{background-color: #666666!important;color: #fff!important;font-weight: 400;padding: 3px 4px!important;}
                .btn-theme {
                    border-radius: 6px;
                    background-color: #F2613C;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                    border: 1px solid #F2613C!important;
                    color: #ffffff!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600;
                    line-height: 20px;
                    text-align: center;
                    padding: 8px 12px!important;
                }
                .btn-theme:hover {
                    border-radius: 6px;
                    background-color: #FFFFFF;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                    border: 1px solid #F2613C!important;
                    color: #F2613C!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600;
                    line-height: 20px;
                    text-align: center;
                    padding: 8px 12px!important;
                }
                .title-block{
                    font-family: Source Sans Pro;
                    font-size: 34px;
                    font-weight: 600;
                    line-height: 43px;
                    letter-spacing: 0px;
                    text-align: left;
                }
                .view-job-post-wrap .btn.active{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px!important;
                    line-height: 25px;
                    text-align: center;
                    color: #FFFFFF;
                }
                .view-job-post-wrap .btn{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px!important;
                    line-height: 25px;
                    text-align: center;
                    color: #000000;
                }
                .view-wrapper{
                    background: #FFFFFF;
                    border: 1.5px solid #EBEBEB;
                    box-sizing: border-box;
                    border-radius: 20px;
                }
                .view-wrapper .left{padding-right: 0px;}
                .view-wrapper .right{padding-left: 0px;}
                .view-wrapper .left{border-right:1.5px solid #EBEBEB;}
                .view-wrapper .header{border-bottom:1.5px solid #EBEBEB;}
                .view-wrapper .content{border-bottom:1.5px solid #EBEBEB;}
                .view-wrapper .job-scope{border-bottom:1.5px solid #EBEBEB;}
                .view-wrapper .proposal{border-bottom:1.5px solid #EBEBEB;}
                .view-wrapper .options{border-bottom:1.5px solid #EBEBEB;}
                .view-wrapper .options ul li a svg{width:20px;height:20px;}
                .view-wrapper .summary{border-bottom:1.5px solid #EBEBEB;}
                .view-wrapper .title-wrap{border-bottom:1.5px solid #EBEBEB;}
                .view-wrapper .header .text-theme{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 25px;
                    color: #F2613C;
                }
                .view-wrapper .options ul li a{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 25px;
                    color: #F2613C;
                }
                .view-wrapper .sub-title{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 23px;
                    color: #000000;
                }
                .view-wrapper p{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 23px;
                    color: #979797;
                }
                .view-wrapper .job-scope .box-wrapper p{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 14px;
                    color: #979797;
                }
                .box-wrapper .img-wrapper{
                    background-color:rgb(242, 97, 60, 0.1);
                    padding: 12px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                .view-wrapper .content p{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 28px;
                    color: #979797;
                }
                .activity ul li{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #999999;
                    margin-bottom: 5px;
                }
                .similar-jobs-wrap a{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 28px;
                    color: #F2613C;
                }
                .similar-jobs-wrap a span{
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 28px;
                    color: #000000;
                }
                .border-left-none{border-left:0px!important;}
                .border-right-none{border-right:0px!important;}
                .invite-wrap .input-group-text{
                    border-radius:0 6px 6px 0;
                }
                @media screen and (min-width: 320px) and (max-width: 815px) {
                    .w-sm-100{
                        width:100%!important;
                    }
                    .view-job-post-wrap .btn-group{
                        display:inline-block;   
                    }
                    .view-wrapper .left{padding-right: 15px;}
                    .view-wrapper .right{padding-left: 15px;}
                }    
                .pl-0{padding:0px!important;}
                .align-items-center{align-items:center;}
        </style>