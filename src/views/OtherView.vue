<template>
    <el-tabs class="tabs" type="border-card">
        <el-tab-pane label="Get Asset Serial Number">
            <WorkFlow msg="Get Asset Serial Number" />
        </el-tab-pane>
        <el-tab-pane label="Get Asset Backup Info">
            <BackupInfo msg="Get Asset Backup Info" />
        </el-tab-pane>
        <el-tab-pane label="Get Asset Backup File Size">
        </el-tab-pane>
        <el-tab-pane label="Get Asset Next Backup Time">
        </el-tab-pane>

    </el-tabs>
</template>

<script setup lang="ts">
import WorkFlow from '@/components/WorkFlow.vue'
import BackupInfo from '@/components/BackupInfo.vue'

</script>

<style scoped></style>