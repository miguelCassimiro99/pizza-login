<template lang="pug">
main
  .wave(class="z-1")
    .wave--one
    .wave--two
    .wave--three
  slot
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
</script>