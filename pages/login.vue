<template lang="pug">
main(class="h-screen dark:bg-slate-900 flex justify-center items-center")
  .login-container(:class="formSelected ? 'toggle h-[480px] w-[768px] rounded-md shadow-xl overflow-hidden border-slate-900 relative' : ' h-[480px] w-[768px] rounded-md shadow-xl overflow-hidden border-slate-900 relative'")
    .form-container(class="h-full flex")
      form.form-login(class="h-full w-[50%] duration-1000")
        h2(class="text-xl text-orange-600") Entrar com

      form.form-register(class="h-full w-[50%] duration-1000")
        h2(class="text-xl text-orange-600") Cadastrar

    .form-overlay(class="w-full md:w-[50%] h-full absolute top-0 left-0 transition-all duration-1000 hidden z-10 md:block")
      .overlay-one(class="absolute w-full h-full bg-orange-600 duration-1000" v-if="formSelected")
        button(@click="toggleForm()") Já tenho conta
      .overlay-two(class="absolute w-full h-full bg-orange-600 duration-1000" v-else)
        button(@click="toggleForm()") cadastrar
</template>

<script setup lang="ts">
  type Theme = 'light' | 'dark';
  const formSelected = ref(false);
 
  const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
  }

  const toggleForm = () => {
    return formSelected.value = !formSelected.value;
  }

  onMounted(() => {
    setColorTheme('dark')
  });

</script>