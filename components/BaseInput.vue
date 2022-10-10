<template lang="pug">
input(
  type="text"
  :placeholder="label"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  v-bind="$attrs"
)
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: false
  },
  modelValue: {
    type: String,
    default: "",
  }
})
</script>