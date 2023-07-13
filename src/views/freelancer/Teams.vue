<template>
  <div>
    <!-- <b-tab title="Teams">
      <h5 class="text-black fz-24 fw-500"><b>Teams</b></h5>
      <b-card-group deck>
        <b-card
          header-tag="header"
          footer-tag="footer"
          header-class="px-4 py-4 bg-white"
          class="mb-3"
        >
          <template #header>
            <div>
              <h4 class="mb-0 text-black fz-24 fw-500"><b>Teams</b></h4>
              <small
                >Teams let you organize contracts by department or manager. User
                them to simplify your reporting, permission and recruting
                managment.</small
              >
            </div>
          </template>
          <b-row>
            <b-col cols="12" class="px-4 py-4">
              <section class="card-section" v-if="isEdit == false">
                <b-row>
                  <b-col lg="3" sm="12">
                    <span class="text-black fz-16 fw-500"><b>Team</b></span>
                  </b-col>
                  <b-col lg="4" sm="12">
                    <span class="text-black fz-16 fw-500"
                      ><b>Financial Account</b></span
                    >
                  </b-col>
                  <b-col lg="3" sm="12">
                    <span class="text-black fz-16 fw-500"
                      ><b>PO Number</b></span
                    >
                  </b-col>
                  <b-col lg="2" sm="12">
                    <span class="text-black fz-16 fw-500"><b>Action</b></span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="3" sm="12">
                    <span class="text-black fz-16 fw-500"
                      ><b>Shree Infotech</b></span
                    >
                  </b-col>
                  <b-col lg="4" sm="12">
                    <span class="text-black fz-16 fw-500"
                      ><b>Shree Infotech (4585514)</b></span
                    >
                  </b-col>
                  <b-col lg="3" sm="12">
                    <b></b>
                  </b-col>
                  <b-col lg="2" sm="12">
                    <b-group>
                      <b-button class="px-3 py-2 mr-2 btn btn-theme btn-edit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#fff"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </b-button>
                      <b-button class="px-3 py-2 btn btn-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#fff"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </b-button>
                    </b-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="3" sm="12">
                    <span class="text-black fz-16 fw-500"
                      ><b>Shree Infotech</b></span
                    >
                  </b-col>
                  <b-col lg="4" sm="12">
                    <span class="text-black fz-16 fw-500"
                      ><b>Shree Infotech (4585514)</b></span
                    >
                  </b-col>
                  <b-col lg="3" sm="12">
                    <b></b>
                  </b-col>
                  <b-col lg="2" sm="12">
                    <b-group>
                      <b-button class="px-3 py-2 mr-2 btn btn-theme btn-edit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#fff"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </b-button>
                      <b-button class="px-3 py-2 btn btn-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#fff"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </b-button>
                    </b-group>
                  </b-col>
                </b-row>
              </section>

              <section class="card-section" v-if="isEdit == true">
                <b-form>
                  <b-form-group class="mb-2">
                    <label class="text-black fz-18 fw-600">First Name</label>
                    <b-form-input
                      type="text"
                      placeholder="Om"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group class="mb-2">
                    <label class="text-black fz-18 fw-600">Last Name</label>
                    <b-form-input
                      type="text"
                      placeholder="Verma"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group class="mb-2">
                    <label class="text-black fz-18 fw-600">Email</label>
                    <b-form-input
                      type="email"
                      placeholder="om@immersiveinfotech.com"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-button
                    type="button"
                    class="mr-2 btn btn-theme"
                    @click="update()"
                    >Update</b-button
                  >
                  <a href="javascript:void(0);" @click="update()">Cancel</a>
                </b-form>
              </section>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </b-tab> -->
  </div>
</template>
