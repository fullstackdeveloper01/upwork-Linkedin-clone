import { mapActions } from "vuex";
export default {
    computed: { },
    methods: {
        ...mapActions(["genericAPIPOSTRequest"]),
        // this fun is for to get current switched or active user type id
        getCurrentUserIdRequest() {
          return [this.$store.state.currentUserData.first_name+'-'+this.$store.state.currentUserData.last_name+'-'+this.$store.state.currentUserData.uuid,'miniProfileUrn'+this.$store.state.currentUserData.uuid];
        }, 
        // this fun is for to get login user ids
        getLoginUserIdRequest() {
          return ['login-user-'+this.$store.state.loginUserUuid,'miniProfileUrn'+this.$store.state.loginUserUuid];
        }, 
        async getOwnerDetail(){
            var res = await this.genericAPIPOSTRequest({
              requestUrl: "getOwnerDetail",
              params: {data:this.getCurrentUserIdRequest()},
            });
            this.$store.commit("setcurrentUserOwnerData", res);
            return res;
        },
        consolelog(para1='',para2=''){
            console.log(para1,para2)
        },

        changeAmountvalue(data) {
            let y = new String(data);
            // if(y.length >= 4 || y.length < 7){
            //     return 'k';
            // }else if (y.length >= 7 || y.length <10) {
            //     return 'm'
            // }else if (y.length >= 10 || y.length <=10) {
            //     return 'b'
            // }
            return Math.abs(Number(y)) >= 1.0e+9

            ? Math.abs(Number(y)) / 1.0e+9 + "B"
            // Six Zeroes for Millions 
            : Math.abs(Number(y)) >= 1.0e+6

            ? Math.abs(Number(y)) / 1.0e+6 + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(y)) >= 1.0e+3

            ? Math.abs(Number(y)) / 1.0e+3 + "K"

            : Math.abs(Number(y));
        },
        _proficiency: function(user) {
            if (user) {
                if (user == 1) {
                    return 'Basic';
                } else if (user == 2) {
                    return 'Conversational';
                } 
                else if (user == 3) {
                    return 'Fluent';
                } 
                else if (user == 4) {
                    return 'Native or Bilingual';
                } 
                
            }
        },
        getHtmlContent(text) {
            if (!text) return "";
             let spaces = this.nl2br(text);
            return spaces;
        },  
        nl2br(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
        },
        isPermissionForClient(type){
            
            if(this.$store.state.currentUserData.permission=='' ||this.$store.state.currentUserData.permission== undefined){
                return true;
            }
            if(type=='message'){
                if(this.$store.state.currentUserData.permission.admin=='1' 
                && this.$store.state.currentUserData.permission.hiring=='1' || this.$store.state.currentUserData.permission.chat_with == '1'){
                  return false;
                } else if(this.$store.state.currentUserData.permission.admin > '1' 
                || this.$store.state.currentUserData.permission.hiring > '1' && this.$store.state.currentUserData.permission.chat_with > '1'){
                   return true;   
                } 
           }
           else if(type=='reports'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.hiring=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1' 
            || this.$store.state.currentUserData.permission.hiring > '1'){
               return true;   
            }  
           }else if(type=='jobs'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            || this.$store.state.currentUserData.permission.hiring=='1'){
              return false;
            }else if(this.$store.state.currentUserData.permission.hiring > '1'){
               return true;   
            }   
           }
           else if(type=='all-contract'){
            if(this.$store.state.currentUserData.permission.hiring == '3'){
               return true;   
            }   
           }
           else if(type=='myinfo'){
            return true; 
            // if(this.$store.state.currentUserData.permission.admin=='1' 
            // && this.$store.state.currentUserData.permission.hiring=='1'){
            //   return false;
            // } else if(this.$store.state.currentUserData.permission.admin > '1' 
            // || this.$store.state.currentUserData.permission.hiring > '1'){
            //    return true;   
            // }  
           }
           else if(type=='BillingPayments'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.hiring=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1' 
            || this.$store.state.currentUserData.permission.hiring > '1'){
               return true;   
            } 
           }
           else if(type=='passwordSecurity'){
            return true;
            // if(this.$store.state.currentUserData.permission.admin=='1' 
            // && this.$store.state.currentUserData.permission.hiring=='1'){
            //   return false;
            // } else if(this.$store.state.currentUserData.permission.admin > '1' 
            // || this.$store.state.currentUserData.permission.hiring > '1'){
            //    return true;   
            // }  
           }
           else if(type=='notificationSetting'){
            return true;
            // if(this.$store.state.currentUserData.permission.admin=='1' 
            // && this.$store.state.currentUserData.permission.hiring=='1'){
            //   return false;
            // } else if(this.$store.state.currentUserData.permission.admin > '1' 
            // || this.$store.state.currentUserData.permission.hiring > '1'){
            //    return true;   
            // } 
           }
           else if(type=='taxInformation'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.hiring=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1' 
            || this.$store.state.currentUserData.permission.hiring > '1'){
               return true;   
            } 
           }
           else if(type=='memberPermission'){
            if((this.$store.state.currentUserData.permission.admin=='1' ||this.$store.state.currentUserData.permission.admin=='2') 
              && (this.$store.state.currentUserData.permission.hiring=='1' || this.$store.state.currentUserData.permission.hiring=='2')){
                 return false;
             } else if(this.$store.state.currentUserData.permission.admin=='3' 
             || this.$store.state.currentUserData.permission.hiring=='3'){
                return true;   
             } 
           }
           else if(type=='companyEdit'){
             if(this.$store.state.currentUserData.permission.admin=='3'){
                return true;   
             }
           } 
           else if(type=='client-saved'){
            if(this.$store.state.currentUserData.permission.admin=='3'){
               return true;   
            }
          }
          else if(type=='client-Invited'){
            if(this.$store.state.currentUserData.permission.admin=='3'){
               return true;   
            }
          } 
          
           return false;
        },
        isPermissionForAgency(type){
            
            if(this.$store.state.currentUserData.permission=='' ||this.$store.state.currentUserData.permission== undefined){
                return true;
            }
            if(type=='message'){
              
                if(this.$store.state.currentUserData.permission.admin=='1' 
                && this.$store.state.currentUserData.permission.business=='1' &&  this.$store.state.currentUserData.permission.agency_contract == '1' || this.$store.state.currentUserData.permission.chat_with == '1'){
                  return false;
                } else if(this.$store.state.currentUserData.permission.admin > '1' 
                || this.$store.state.currentUserData.permission.business > '1' || this.$store.state.currentUserData.permission.agency_contract > '1' || this.$store.state.currentUserData.permission.chat_with > '1'){
                   return true;   
                } 
           }
           
           else if(type=='agencySetting'){
             if(this.$store.state.currentUserData.permission.admin=='3'){
                return true;   
             } 
           }
           else if(type=='memberPermission'){
             if(this.$store.state.currentUserData.permission.admin=='3'){
                return true;   
             } 
           }
           else if(type=='taxInformation'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.business=='1'  && this.$store.state.currentUserData.permission.agency_contract=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1'){
               return true;   
            } 
           }
           else if(type=='contactInfo'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.business=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1' 
            || this.$store.state.currentUserData.permission.business > '1'){
               return true;   
            } 
           }
           else if(type=='myprofile'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.business=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1' 
            || this.$store.state.currentUserData.permission.business > '1'){
               return true;   
            } 
           }
           else if(type=='profileSetting'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.business=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1' 
            || this.$store.state.currentUserData.permission.business > '1'){
               return true;   
            } 
           }
           else if(type=='getPaid'){
            if(this.$store.state.currentUserData.permission.admin=='1' 
            && this.$store.state.currentUserData.permission.business=='1' && this.$store.state.currentUserData.permission.agency_contract=='1'){
              return false;
            } else if(this.$store.state.currentUserData.permission.admin > '1' 
            || this.$store.state.currentUserData.permission.business > '1'){
               return true;   
            } 
           }
           else if(type=='passwordSecurity'){
            return true;
            // if(this.$store.state.currentUserData.permission.admin=='1' 
            // && this.$store.state.currentUserData.permission.business=='1'){
            //   return false;
            // } else if(this.$store.state.currentUserData.permission.admi  n > '1' 
            // || this.$store.state.currentUserData.permission.business > '1'){
            //    return true;   
            // }  
           }
           else if(type=='notificationSetting'){
            return true;
            // if(this.$store.state.currentUserData.permission.admin=='1' 
            // && this.$store.state.currentUserData.permission.business=='1'){
            //   return false;
            // } else if(this.$store.state.currentUserData.permission.admin > '1' 
            // || this.$store.state.currentUserData.permission.business > '1'){
            //    return true;   
            // } 
           }
           else if(type=='find-job'){
            if(this.$store.state.currentUserData.permission.business > '1'){
               return true;   
            } 
           } 
           
           return false;

        },
        timeDiffrenceInminutes(startTimes,endTimes){
            var startTime = new Date(startTimes); 
            var endTime = new Date(endTimes);
            var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
            var resultInMinutes = Math.round(difference / 60000);
            return resultInMinutes;
            // console.log('differenceInMinutes',resultInMinutes)
        },
        // this fun is for to encode the id
        encodedid(id){
            return btoa(id);
        },
        // this fun is for to decode the id
        decodeId(id){
            return atob(id);
        },

        //this fun is for to show header after
        checkheaderAfterAuth(){
          if(this.$route.name == 'Login' ){
            return true;
          }else if (this.$route.name == 'BasicInfo') {
            return true;
          } else {
            return false; 
          }
        },
        // this fun is for to encode the id
        shortName(first,last=null){
          var name = first+' ';
          if(last!=null){
            name += last.slice(0,1);
          }
          return name;
        },
        isNumber(event) {
          if (!/\d/.test(event.key) && event.key !== '.') return event.preventDefault();
        },
    }  
}