<template lang="pug">
section(class="flex flex-col")
  label(class="text-left" v-if="label") {{ label }}
  input(
    class="py-2 px-3 text-base dark:text-slate-900"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  )
</template>
<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },
  modelValue: {
    type: String,
    default: "",
  }
})
</script>