<template>
  <div style="height: 100vh">
    <div class="container">
      <!-- Getting Started -->
      <div class="row mb-20 mt-100">
        <div class="col-lg-12 col-md-12">
          <div class="card card-table plans initial-step p-0">
            <div class="card-header">
                <h3 class="mb-0">Getting started</h3>
            </div>
            <div class="card-body">
              <div class="mx-height-900 mn-height-700 bg-image">
                <div class="mb-10">
                  <h2 class="mb-0 fs-title">What would you like to do?</h2>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-12 pl4 pr4">
                    <div class="new-wrap">
                      <div class="form-check mb-3 pl-0">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input selectjob mr-2" id="customRadio" name="Job" value="newJob" checked/>
                          <label class="custom-control-label" for="customRadio"> Create a new job post</label>
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
                                <h5 class="mb-2 text-muted font-normal fz-14">Less than 30 Hrs/Week</h5>
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
                          <label class="custom-control-label" for="customRadio1"> Edit an existing draft</label>
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
                          <label class="custom-control-label" for="customRadio2"> Reuse a previous job post</label>
                        </div>
                      </div>
                      <select class="form-control hideJob" id="reuseJob">
                        <option>Mechanical Inspector </option>
                        <option>Coating inspector</option>
                      </select>
                    </div>
                  </div>
                </div>
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
      <!-- Step Form -->
      <div class="row justify-content-center step-form">
        <div class="col-md-12">
          <form id="msform">
            <div class="wrap d-md-flex">
              <div class="text-wrap p-4 p-lg-5 mg" style="background-image: url(http://192.168.64.2/qapin_mvp5/assets/img/union-white.png);background-color: #f2613b;background-repeat: no-repeat;background-position: bottom center;background-size: auto;height: auto;;border-radius: 20px 0 0 20px;width:40%;">
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
                            <div class="mt-5">
                                <h2 class="mb-3 fs-title">Example titles</h2> 
                                <ul class="example-wrap mb-5 pl-0">
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
                                <button  @click="$router.push('/review-post')" type="button" name="next" class="next action-button action-nxt-btn nxt1 btn" value="step2" id="Next">Next</button>
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
                                        <ul class="ml-0">
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
                                <div class="accordion mt-20" id="accordionExample">
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
                                <button type="button" name="next" class="next action-button action-nxt-btn nxt2 btn" value="step3" id="Next">Next</button>
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
                                <button type="button" name="next" class="next action-button action-nxt-btn nxt3 btn" value="step4" id="Next">Next</button>
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
                                <button type="button" name="next" class="next action-button action-nxt-btn nxt4 btn" value="final-step" id="Next">Review Job Post</button>
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
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'Qapin || Post a Job',

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
    box-shadow: 0px 0px 0px 2px #a0a0a0;
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
    width: 100%;
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
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
    font-weight: 400;
  }
  #msform input[type="radio"]{
    width:auto;
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
    margin-left: -32px;
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
    margin-left: 18px;
  }
  .example-wrap li{
    margin-bottom: 15px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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
    font-size: 14px!important;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    width: 131px!important;
    margin-top: 0px;
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
    justify-content:in-between;
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
    border: 1px solid #d8d8d8;
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
  .text-theme{color:#f2613d!important;}
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
  .no-border{border:0px!important;}
  .no-bg{background-color:#fff;}
  .new-wrap label, .draft-wrap label, .reuse-job-wrap label{
    /*font-family: Source Sans Pro;*/
    font-size: 16px;
    font-weight: 600;
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
  .pl-0{padding-left:0px!important;}
  .mt-100{margin-top:100px!important;}
  .login-wrap{
    border-radius: 0 20px 20px 0;
    border: 1.5px solid #EBEBEB;
    width:60%;
    background-color:#fff;
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
                    width: 100%;
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
                    border: 1px solid #d8d8d8;
                }
                .selected-tags .tags-wrap ul li a{
                    color: #a3a2a2;
                }
                .tags-wrap ul li {
                    display: inline-block;
                    background: #fcfcfc;
                    padding: 4px 20px;
                    border: 1px solid #d8d8d8;
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
                    color: #6a6a6a;
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
                .skills-wrap ul{margin-left:-32px;}
</style>
