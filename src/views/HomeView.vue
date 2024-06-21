<template>
  <div class="home-layout">
    <el-container class="container">
      <el-header class="header">
        <el-image src="src/assets/2019_Logo_rgb_RA_Bug-LeftText_color.svg" style="width: 100px; height: 50px;"></el-image>
      </el-header>
      <el-container class="inner-container">
        <el-aside style="width: 200px;">
          <el-menu active-text-color=" #ffd04b" background-color="#3e3d3c" class="el-menu-vertical-demo"
            default-active="/home/apiclient" text-color="#fff" @open="onOpenMenu" :router="true">
            <el-menu-item index="/home/apiclient">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="/home/other">
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
import { Document, Menu as IconMenu } from '@element-plus/icons-vue'
import { useRouter} from 'vue-router'

const router = useRouter()

const onOpenMenu = (index: string, indexPath: string[]) => {
  if (index === '/home/apiclient') {
    router.push({path:'/home/apiclient', replace: true})
  }
  else {
    router.push({path:'/home/other', replace: true})
  }
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
    height: 50px;
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
