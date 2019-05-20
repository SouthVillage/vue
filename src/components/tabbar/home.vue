<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key:''>
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        // 向外面暴露数据
        list:[]   
      }
    },
    created(){
      getlunbotu()
    },
    methods:{
      getlunbotu(){
        this.$http.get('http://www.').then(result=>{
          console.log(result);
          list = result.img;
        })
      }
    }
  }
</script>


<style lang="scss" scoped>
.mint-swipe {
    height:200px;
  .mint-swipe-item {
    &:nth-child(1){
      background-color: red;
    }
    &:nth-child(2){
      background-color: yellow;
    }
    &:nth-child(3){
      background-color: blue;
    }
  }
}
</style>

