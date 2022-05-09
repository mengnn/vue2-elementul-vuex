<template>
  <div>
        
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <h3 class="menu-title">{{isCollapse? '后台' : '低代码管理平台'}}</h3>
            <el-menu-item @click="clickMenu(item)" v-for = "item in noChildren" :index="item.path" :key="item.path">
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>

            <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.label}}</span>
                </template>
                <el-menu-item-group v-for="(subitem,subindex) in item.children" :key="subitem.path">
                <el-menu-item :index="subindex">{{subitem.label}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // isCollapse: false,
      menu:[
        {
          path:'/list',
          name:'list',
          label:'列表页',
          icon:'s-grid',
          url: 'List/index'
        },
        {
          path:'/question',
          name:'question',
          label:'我的问卷',
          icon:'document',
          url: 'Question/index'
        },
        {
          path:'/edit',
          name:'edit',
          label:'制作页',
          icon:'news',
          url: 'Edit/index'
        },
        // {
        //   path:'/other',
        //   name:'other',
        //   label:'其他',
        //   icon:'s-home',
        //   children:[
        //     {
        //       path:'/page1',
        //       name:'page1',
        //       label:'页面1',
        //       url: 'Other/index1'
        //     },
        //     {
        //       path:'/page2',
        //       name:'page2',
        //       label:'页面2',
        //       url: 'Other/index2'
        //     }
        //   ]
        // }
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      // console.log(item)
      this.$router.push({
        path:item.name
      })
    }
  },
  computed: {
    noChildren() { // 没有子菜单
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  
  
  .el-menu {
    border-right: 0;
  }
  .menu-title {
    width: 100%;
    color: #fff;
    text-align: center;
    line-height: 48px;
    margin: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) { 
    width: 200px;
    min-height: 400px;
  }
  
</style>
