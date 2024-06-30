<template>
    <el-tabs class="tabs" type="border-card">
        <el-tab-pane v-for="tab in tabs" :label="tab.msg" :key="tab.msg">
            <FindAsset :msg="tab.msg"/>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import FindAsset from '../components/FindAsset.vue'

const tabs = [
    { msg: 'Find Asset'},
    { msg: 'Is Backed Up'},
    { msg: 'Last Backup'},
    { msg: 'Last Backup Size'},
    { msg: 'Next Backup Time'},
    { msg: 'Backup Status'}
]

</script>

<style scoped></style>
