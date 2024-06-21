<template>
    <el-tabs class="tabs" type="border-card">
        <el-tab-pane label="Find Asset">
            <FindAsset msg="Find Asset"/>
        </el-tab-pane>
        <el-tab-pane label="Is Backed Up">
            <FindAsset msg="Is Backed Up"/>
        </el-tab-pane>
        <el-tab-pane label="Last Backup">
            <FindAsset msg="Last Backup"/>
        </el-tab-pane>
        <el-tab-pane label="Last Backup Size">
            <FindAsset msg="Last Backup Size"/>
        </el-tab-pane>
        <el-tab-pane label="Next Backup Time">
            <FindAsset msg="Next Backup Time"/>
        </el-tab-pane>
        <el-tab-pane label="Backup Status">
            <FindAsset msg="Backup Status"/>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import FindAsset from '../components/FindAsset.vue'

</script>

<style scoped></style>
