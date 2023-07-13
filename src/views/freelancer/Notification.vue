<template>
  <div>
    <b-card-text>
      <b-card-group deck>
        <b-card header-tag="header" footer-tag="footer" header-class="py-4 px-4 bg-white" class="mb-3">
          <template  #header>
            <h4 class="mb-0 fz-24 fw-500 text-black"><b>Notifications</b></h4>
          </template>
          <b-row>
            <b-col cols="12" class="py-4 px-4">
              <div class="notify-wrap">
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for="jobinvitations">Job Invitations</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="jobinvitations">
                </div>
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for=" hiredetails">Job Hire Details</label>
                  <input class="form-check-input" type="checkbox" role="switch" id=" hiredetails">
                </div>
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for="promotions">Qapin Promotions</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="promotions">
                </div>
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for="paymentinfo">Payment Related Info</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="paymentinfo">
                </div>
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for="calendarbook">Calendar Book</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="calendarbook">
                </div>
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for="searchupdate">Saved Searches Updates</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="searchupdate">
                </div>
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for="subscriptionupdate">Subscriptions Updates</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="subscriptionupdate">
                </div>
                <div class="form-check form-switch mb-3 border-bottom pb-3 cursor-pointer">
                  <label class="form-check-label fz-16 cursor-pointer" for="newsletters">Qapin Newsletters</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="newsletters">
                </div>
                <div class="form-check form-switch">
                  <label class="form-check-label fz-16 cursor-pointer" for="productupdate">Qapin Product Updates</label>
                  <input class="form-check-input" type="checkbox" role="switch" id="productupdate">
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </b-card-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch1: true,
      switch2: false,
    };
  },
};
</script>

<style scoped>

</style>
