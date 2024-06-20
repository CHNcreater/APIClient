<template>
  <div class="home-layout">
    <el-container class="container">
      <el-header class="header"></el-header>
      <el-container class="inner-container">
        <el-aside style="width: 200px;">
          <el-menu active-text-color=" #ffd04b" background-color="#3e3d3c" class="el-menu-vertical-demo"
            default-active="other" text-color="#fff" @select="onMenuSelect" :router="true">
            <el-menu-item index="apiclient">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="other">
              <el-icon>
                <document />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const onMenuSelect = (index: string, indexPath: string[], routeResult) => {
  console.log(index, indexPath, routeResult);
}
</script>

<style scoped>
.home-layout {
  height: 100vh;
  width: 100vw;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .header {
    background-color: #1c1c1c;
    min-height: 50px;
  }

  .inner-container {
    display: flex;
    flex: 1;

    .el-menu-vertical-demo {
      min-height: 100%;
    }
  }

}
</style>
