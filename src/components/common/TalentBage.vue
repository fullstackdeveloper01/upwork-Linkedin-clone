<template>
    <h5 class="text-black d-flex mb-0"><img :src="getTalentImg(talent_id)" width="25" height="20" style="margin-right:10px;"><b>{{filterName('quality',talent_id)}}</b></h5>
</template>
<script>
  export default {
    components: {
    
    },
    props:['talentQualilty','talent_id'],
    data() {
      return {
      
      }
    },
    mounted(){

    },
    methods: {
      // this fun is for to get the talent tag 
      getTalentImg(_i){
        var name;
        this.talentQualilty.filter(data=>{
          if(data.talent_id==_i){
            name = data.img
            return false;
          }
        });
        return name;
      },
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
    }
  }
</script>