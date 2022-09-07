<template lang="pug">
main(class="h-screen dark:bg-slate-900")
  .login-container(class="h-[480px] w-[768px] rounded-lg shadow-xl")
    form.form
    form.form
</template>

<script setup lang="ts">
  type Theme = 'light' | 'dark';

  const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
  }

  onMounted(() => {
    setColorTheme('dark')
  });

</script>