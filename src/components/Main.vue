<template>
   <el-container class="home-container">
    <el-aside width="auto">
        <CommonLeft></CommonLeft>
    </el-aside>
    <el-container>
      <el-header>
         <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonLeft from '@/components/CommonLeft.vue'
import CommonHeader from '@/components/CommonHeader.vue'
export default {
  name: 'Home',
  components: {
    CommonLeft,
    CommonHeader
  },
  data() {
    return {

    }
  },
  methods: {
   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  .home-container {
    width: 100%;
    height: 100vh;
  }

</style>
