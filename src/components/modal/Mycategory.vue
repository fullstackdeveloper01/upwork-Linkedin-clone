<template>
    <b-modal  centered no-close-on-backdrop id="edit-category-modal" size="lg" :title="is_primary==false ? 'Add Categories' :'Add Main Categories'" >
        <div class="text-left">
            <h5 class="fz-20 fw-600 text-black">What are the main services you offer to clients?</h5>
            <p class="fz-14 fw-400 text-muted">Select up to 10 categories.</p>
            <div class="fz-14 tags mb-0">
                <i v-for="(catName,cids) in category_data_new" :key="cids">
                    <span class="up-skill-badge inline-block align-items-center" v-if="is_primary == true && catName.is_primary =='Y' && cids == 0">
                        <!-- {{(catName.is_primary== (is_primary==true?'N':'Y'))? catName.name :catName.name}}    -->
                        {{catName.name}}
                        <a href="javascript:" class="text-muted">
                            <div class="up-icon xs pt-1">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr(cids)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                            </div>
                        </a>
                    </span>
                    <!-- <span class="up-skill-badge inline-block align-items-center" v-else-if="is_primary == false">
                        {{(catName.is_primary== (is_primary==true?'N':'Y'))? catName.name :catName.name}}   
                        <a href="javascript:" class="text-muted">
                            <div class="up-icon xs pt-1">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" v-on:click="removefromCategoryarr(cids)"><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703924 0.710276 -0.703924 0.710276 9.22266 3.08838)" fill="#F2613C"></rect><rect width="0.878423" height="8.78423" rx="0.439212" transform="matrix(0.703929 -0.71027 0.703929 0.71027 3.03906 3.7124)" fill="#F2613C"></rect></svg>
                            </div>
                        </a>
                    </span> -->
                </i>
            </div>
            <div class="accordion mt-3">
            <div  v-for="(category,id) in categoryData" :key="id">
                <b-button  class="d-block mb-0" v-b-toggle="`collapse-${id}`" v-on:click="addCategoryArr(category.qp_role_master_id,category.role_name)">{{category.role_name }}
                <!-- <i class="fa fa-chevron-down float-right fw-400 text-muted fz-12"></i> -->
                </b-button>
                <!-- <b-collapse :id="`collapse-${id}`">
                <b-card>
                    <div class="mb-30 tags">
                    <span class="up-skill-badge" v-for="(skill,skid) in category.skills" :key="skid">
                        {{skill.skill_name}}
                    </span>
                    </div>
                </b-card>
                </b-collapse> -->
            </div>
            </div>
        </div>
        <template #modal-footer>
            <div class="w-100 text-right">
            <a href="javascript:void(0);" class="text-theme mr-2"  @click="$bvModal.hide('edit-category-modal')">Cancel</a>
            <b-button
                size="lg"
                class="btn btn-theme"
                @click="updateCategory()"
            >
                Save
            </b-button>
            </div>
        </template>
    </b-modal>
</template>
<script>

import { mapActions } from "vuex";
export default {
  props:['is_primary','category_data'], 
  data() {
    return {
        // category_data:[],
        categoryData:[],
        category_ids:[],
        category_data_new:[],
    };
  },
  computed: {
     
  },
  mounted() {
    this.category_data_new = this.category_data;
    this.getCategory();
  },
  methods: {
    ...mapActions(["genericAPIPOSTRequest"]),
    async getCategory(){
       
        var res =   await this.genericAPIPOSTRequest({
              requestUrl: "common/getQpRoleMasterList",
              params: {  
              },
          });
        this.categoryData = res;
    },
    async updateCategory(){
        var userdata = JSON.parse(localStorage.getItem('loginUserData'));
            await this.genericAPIPOSTRequest({
              requestUrl: "updateCategory",
              params: {'role_id':this.category_ids,'is_primary':this.is_primary},
            });
        var res =   await this.genericAPIPOSTRequest({
              requestUrl: "user/getUserDetails",
              params: {
                "data":[userdata.first_name+'-'+userdata.last_name+'-'+userdata.uuid,'miniProfileUrn'+userdata.uuid]
            },
          });
            this.$emit('userDetail', res );
            this.profileVisibility  = res.profile_visibility;
            this.category_data      = res.qp_role;
            this.category_ids       = res.qp_roleids;
            this.$bvModal.hide('edit-category-modal');
    },
    removefromCategoryarr(index){
        // console.log(this.category_data_new); 
        // console.log(this.category_ids); 
        if(this.category_data_new.length > 1){
          this.category_data_new.splice(index, 1); 
          this.category_ids.splice(index, 1); 
          // \\OR   
          // this.$delete(this.category_data,index);
          // \\both will do the same
        }
    },
    addCategoryArr(_i,_v){
        // var arr ={'id':_i,'name':_v,'is_primary':(this.is_primary==true)?'Y':'N'};
        // console.log(arr);
        if(this.is_primary){ 
            this.category_data_new = [];
            this.category_ids  = []; 
            // console.log('before',this.category_data_new);

            const arr1={'id':_i,'name':_v,'is_primary':'Y'};
            if(!this.category_data_new.some(data => data.id === _i)){
                this.category_data_new.push(arr1);     
            }
            if(!this.category_ids.some(data => data === _i)){
                this.category_ids.push(_i);     
            }
            // console.log('after',this.category_data_new);
        }
        // if(!this.is_primary)
        // {
           
        //     if(!this.category_data.some(data => data.id === _i)){
        //         this.category_data.push(arr);     
        //     }
        //     if(!this.category_ids.some(data => data === _i)){
        //         this.category_ids.push(_i);     
        //     }
        // }
      },
        
  },
};
</script>