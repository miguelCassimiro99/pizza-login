<template lang="pug">
main(class="h-screen dark:bg-slate-900 flex justify-center items-center")
  .login-container(:class="formSelected ? 'toggle h-[480px] w-[768px] rounded-md shadow-xl overflow-hidden border-slate-900 relative' : ' h-[480px] w-[768px] rounded-md shadow-xl overflow-hidden border-slate-900 relative'")
    .form-container(class="h-full flex")
      form.form(class="h-full w-[50%]")
        h2(class="text-xl text-orange-600") Entrar com

      form.form(class="h-full w-[50%]")
        h2(class="text-xl text-orange-600") Cadastrar

    .form-overlay(class="w-[50%] h-full absolute top-0 left-0 transition-all")
      .overlay-one(class="absolute w-full h-full bg-orange-600" v-if="formSelected")
        button(@click="toggleForm()") Já tenho conta
      .overlay-two(class="absolute w-full h-full bg-orange-600" v-else)
        button(@click="toggleForm()") cadastrar
</template>

<script setup lang="ts">
  type Theme = 'light' | 'dark';

  const formSelected = ref(false);
 
  const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
  }

  onMounted(() => {
    setColorTheme('dark')
  });

  const toggleForm = () => {
    return formSelected.value = !formSelected.value;
  }

</script>