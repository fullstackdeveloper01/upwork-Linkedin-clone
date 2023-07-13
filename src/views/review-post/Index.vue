<template>
  <div style="height: 100vh">
    <div class="container">
      <!-- Review Step -->
      <div class="row mb-20 mt-100">
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
                  <span id="custom-text">No file chosen, yet.</span>
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
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  .example-wrap li::marker{color: #f2613b;}
  .tags-wrap ul li {
    display: inline-block;
    background: #fcfcfc;
    padding: 4px 20px;
    border: 1px solid #c6c6c6;
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
    font-weight: 400;
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
    overflow-y: auto;
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
                    overflow-y: auto;
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
                    font-weight: 400;
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
                    background-color: #ffffff!important;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%)!important;
                    border: 1px solid #F2613C!important;
                    color: #F2613C!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600!important;
                    line-height: 20px!important;
                    text-align: center!important;
                    padding: 8px 12px!important;
                }
                .btn-outline-theme:hover{
                    border-radius: 6px!important;
                    background-color: #f2613c24!important;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%)!important;
                    border: 1px solid #F2613C!important;
                    color: #F2613C!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600!important;
                    line-height: 20px!important;
                    text-align: center!important;
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
                    border-radius: 6px!important;
                    background-color: #F2613C!important;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%)!important;
                    border: 1px solid #F2613C!important;
                    color: #ffffff!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600!important;
                    line-height: 20px!important;
                    text-align: center!important;
                    padding: 8px 12px!important;
                }
                .btn-theme:hover {
                    border-radius: 6px!important;
                    background-color: #FFFFFF!important;
                    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
                    border: 1px solid #F2613C!important;
                    color: #F2613C!important;
                    font-family: "Source Sans Pro"!important;
                    font-size: 14px!important;
                    font-weight: 600!important;
                    line-height: 20px!important;
                    text-align: center!important;
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
