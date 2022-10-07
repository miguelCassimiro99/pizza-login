<template lang="pug">
section(class="flex flex-col")
  input(
    class="py-2 px-3 text-base dark:text-orange-600 bg-slate-900 placeholder-orange-400 border-b-2 border-orange-600 focus:ring-0"
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