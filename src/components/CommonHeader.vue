<template>
    <header>
         <div class="l-header">
             <el-button plain icon="el-icon-menu" size="min" @click="clickMenu"></el-button>
             <h4>首页</h4>
         </div>
         <div class="r-header">
             <el-dropdown>
                <span class="el-dropdown-link">
                    <img :src="imgUrl" class="personImg" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
         </div>
    </header>
</template>

<script>
   export default {
       name:"CommonHeader",
       data() {
           return {
               imgUrl: require('@/assets/personImg.png')
           }
       },
       methods:{
           clickMenu(){
               this.$store.commit('collapseMenu')
           }
       }
   }
</script>

<style scoped lang="less">
    .l-header {
        float: left;
        h4 {
            color: #333;
            display: inline-block;
            margin: 0;
            margin-left: 10px;
            cursor: pointer;
        }
    }
    .r-header {
        float: right;
        margin-top: 10px;
        margin-right: 15px;
        height: 40px;
        .personImg {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
    }
</style>