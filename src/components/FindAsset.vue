<template>
    <div class="grid-content ep-bg-purple">
        <el-row>
            <el-col :span="12">
                <h1>{{ msg}}</h1>
                <el-form :model="form">
                    <el-form-item>
                        <el-input v-model="form.url" placeholder="https://google.com"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="form.option1" placeholder="Select">
                            <el-option v-for="item in form.options" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="form.dataFormat" placeholder="Select">
                            <el-option v-for="item in form.dataFormats" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input class="request-data" v-model="form.reqData" type="textarea"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width: 100%;" @click="onClick">Send</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12">
                <h1>Response</h1>
                <el-input v-model="response" class="response-data" type="textarea" placeholder='{"key": "value"}' style="padding: 20px;"></el-input>
            </el-col>
        </el-row>

    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps } from 'vue'

const props = defineProps({
    msg: String
})

const form = reactive({
    url: '',
    option1: 'GET',
    options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' },
        { value: 'PATCH', label: 'PATCH' },
        { value: 'OPTIONS', label: 'OPTIONS' },
        { value: 'HEAD', label: 'HEAD' },
        { value: 'CONNECT', label: 'CONNECT' },
        { value: 'TRACE', label: 'TRACE' },
    ],
    reqData: '',
    dataFormat: 'JSON',
    dataFormats: [
        { value: 'JSON', label: 'JSON' },
        { value: 'XML', label: 'XML' },
        { value: 'HTML', label: 'HTML' },
        { value: 'TEXT', label: 'TEXT' },
    ],
})

const response = ref('')

function onClick() {
    //TODO Send http request
    console.log('onClick')
}
</script>

<style scoped>
.el-form {
    padding: 20px;
}

.grid-content {
    height: calc(100vh - 160px);
    overflow: auto;
}

:deep() .request-data .el-textarea__inner {
    height: 150px;
}

:deep() .response-data .el-textarea__inner {
    height: 300px;
    background-color: #f5f7fa;
}

.el-input {
    --el-input-border-color: #8b8b8b;
}

.el-select {
    --el-border-color: #8b8b8b;
}

.el-textarea {
    --el-border-color: #8b8b8b;
}
</style>