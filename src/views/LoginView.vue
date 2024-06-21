<template>
  <div class="login">
    <el-card style="max-width: 600px;">
      <h2>Login</h2>
      <el-form :model="form" style="max-width: 600px;">
        <el-form-item>
          <el-input v-model="form.username" placeholder="Username">
            <template #prefix>
              <el-icon class="el-input__icon">
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="Password">
            <template #prefix>
              <el-icon class="el-input__icon">
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../stores/counter'

const state = useCounterStore()

const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

function login() {
  state.loggedIn = true
  router.push('/home')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

h2 {
  text-align: center;
  padding-bottom: 10px;
}

:deep() .el-button {
  width: 100%;
}
</style>
