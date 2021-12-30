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

const props = defineProps({
  width: {type: Number, default: 1024},
  height: {type: Number, default: 1024},
})
const id = ref('stage_' + 1);
onMounted(() => {
  console.log(0)
})
</script>

