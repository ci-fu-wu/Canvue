<template>
  <div :id="id">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  inject,
  defineProps,
  defineEmits,
  onMounted
} from 'vue'
import Konva from "konva";
import {Stage} from "konva/lib/Stage"
import {Canvue} from '@/index'

const canvue = inject<Canvue>("canvue") // 全局注入对象

const props = defineProps({
  width: {type: Number, default: 1024},
  height: {type: Number, default: 1024},
})

const id = ref('stage_' + canvue?.stageNum() ?? 0); // Stages length

let stage: Stage

onMounted(() => {
  stage = new Konva.Stage({
    container: id.value,
    width: props.width,
    height: props.height
  })
  canvue?.stageAdd(stage)
})
</script>

