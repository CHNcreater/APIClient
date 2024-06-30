<template>
    <div id="workflow-app">
        <el-row id="workflow-row">
            <el-text type="primary">WorkFlow</el-text>
            <VueFlow :nodes="nodes" :edges="edges" :class="{ dark }" class="basic-flow"
                :default-viewport="{ zoom: 1.5 }" :min-zoom="0.2" :max-zoom="4">
                <Background pattern-color="#aaa" :gap="16" />

                <MiniMap />

                <Controls position="top-left">
                    <ControlButton title="Reset Transform" @click="resetTransform">
                        <IconComponents name="reset" />
                    </ControlButton>

                    <ControlButton title="Shuffle Node Positions" @click="updatePos">
                        <IconComponents name="update" />
                    </ControlButton>

                    <ControlButton title="Toggle Dark Mode" @click="toggleDarkMode">
                        <IconComponents v-if="dark" name="sun" />
                        <IconComponents v-else name="moon" />
                    </ControlButton>

                    <ControlButton title="Log `toObject`" @click="logToObject">
                        <IconComponents name="log" />
                    </ControlButton>
                </Controls>
            </VueFlow>
        </el-row>
        <el-row id="steps">
            <el-text type="primary">Run</el-text>
            <el-steps style="width: 100%;" :active="active" finish-status="success">
                <el-step title="Step 1" description="Some description" />
                <el-step title="Step 2" description="Some description" />
                <el-step title="Step 3" description="Some description" />
                <el-step title="Step 4" description="Some description" />
            </el-steps>
            <el-button style="margin-top: 12px" @click="next">Next step</el-button>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px;">
            <!-- <el-col style="visibility: hidden;" :span="8"> -->
            <el-col :span="6">
                <el-input v-if="active >= 1" type="textarea" placeholder="111"></el-input>
            </el-col>
            <el-col :span="6">
                <el-input v-if="active >= 2" type="textarea" placeholder="111"></el-input>
            </el-col>
            <el-col :span="6">
                <el-input v-if="active >= 3" type="textarea" placeholder="111"></el-input>
            </el-col>
            <el-col :span="6">
                <el-input v-if="active >= 4" type="textarea" placeholder="111"></el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow, useVueFlow, MarkerType } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { ControlButton, Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import IconComponents from './IconComponents.vue'

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Get tree' },
        position: { x: 0, y: 100 },
        class: 'light',
    },
    {
        id: '2',
        data: { label: 'Find all devices' },
        position: { x: 200, y: 100 },
        class: 'light',
    },
    {
        id: '3',
        data: { label: 'Get property' },
        position: { x: 400, y: 100 },
        class: 'light',
    },
    {
        id: '4',
        type: 'output',
        data: { label: 'Get SN' },
        position: { x: 600, y: 100 },
        class: 'light',
    }
]

const initialEdges = [
    {
        id: 'e1-2',
        type: 'smoothstep',
        source: '1',
        target: '2',
        animated: true,
        markerEnd: MarkerType.ArrowClosed,
    },
    {
        id: 'e2-3',
        type: 'smoothstep',
        source: '2',
        target: '3',
        animated: true,
        // label: 'edge with arrowhead',
        markerEnd: MarkerType.ArrowClosed,
    },
    {
        id: 'e3-4',
        type: 'smoothstep',
        source: '3',
        target: '4',
        animated: true,
        // label: 'Node 2',
        // style: { stroke: 'orange' },
        // labelBgStyle: { fill: 'orange' },
        markerEnd: MarkerType.ArrowClosed,
    },
]

const props = defineProps<{
    msg: string
}>()

const { onInit, onNodeDragStop, onConnect, addEdges, setViewport, toObject } = useVueFlow()
const nodes = ref(initialNodes)
const edges = ref(initialEdges)
const dark = ref(false)
const active = ref(0)

const next = () => {
  if (active.value++ > 3) active.value = 0
}

onInit((vueFlowInstance) => {
    // instance is the same as the return of `useVueFlow`
    vueFlowInstance.fitView()
})

onNodeDragStop(({ event, nodes, node }) => {
    console.log('Node Drag Stop', { event, nodes, node })
})

onConnect((connection) => {
    addEdges(connection)
})

function updatePos() {
    nodes.value = nodes.value.map((node) => {
        return {
            ...node,
            position: {
                x: Math.random() * 400,
                y: Math.random() * 400,
            },
        }
    })
}

function logToObject() {
    console.log(toObject())
}

function resetTransform() {
    setViewport({ x: 0, y: 0, zoom: 1 })
}

function toggleDarkMode() {
    dark.value = !dark.value
}

</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.37.1/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.37.1/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

#workflow-app {
    display: flex;
    flex-direction: column;
}

.vue-flow {
    min-height: 200px;
}

#steps {
    margin-top: 20px;
    background-color: var(--vt-c-white-soft);
    border-radius: 10px;
    padding: 10px;
}

.vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;
}

.basic-flow.dark {
    background: #2d3748;
    color: #fffffb
}

.basic-flow.dark .vue-flow__node {
    background: #4a5568;
    color: #fffffb
}

.basic-flow.dark .vue-flow__node.selected {
    background: #333;
    box-shadow: 0 0 0 2px #2563eb
}

.basic-flow .vue-flow__controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center
}

.basic-flow.dark .vue-flow__controls {
    border: 1px solid #FFFFFB
}

.basic-flow .vue-flow__controls .vue-flow__controls-button {
    border: none;
    border-right: 1px solid #eee
}

.basic-flow .vue-flow__controls .vue-flow__controls-button svg {
    height: 100%;
    width: 100%
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button {
    background: #333;
    fill: #fffffb;
    border: none
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button:hover {
    background: #4d4d4d
}

.basic-flow.dark .vue-flow__edge-textbg {
    fill: #292524
}

.basic-flow.dark .vue-flow__edge-text {
    fill: #fffffb
}

:deep() .el-textarea .el-textarea__inner {
    min-height: 300px !important;
}
</style>