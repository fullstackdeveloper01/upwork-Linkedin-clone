import _ from "lodash";
export default {
    
    methods: {

        goToOrderStatus() {      
            this.$router.push({
              name: "order-status",
              params: {
                itemType: this.itemType,
              },
            });
          },
          goToDailyOrderDetails() {      
            this.$router.push({
                name: "daily-order-details",
                params: {
                  cutoffdate: this.$route.params.cutoffdate
                },
              });
          },
          goToNonDailyOrderDetails() {      
            this.$router.push({
                name: "nondaily-order-details",
                params: {
                  cutoffdate: this.$route.params.cutoffdate
                },
              });
          },
    }
    

}