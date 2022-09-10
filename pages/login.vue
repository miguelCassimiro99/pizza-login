<template lang="pug">
main(class="h-screen dark:bg-slate-900 flex justify-center items-center")
  .login-container(
    class="h-full w-full md:h-[480px] md:w-[768px] rounded-md shadow-none md:shadow-xl overflow-hidden border-slate-900 relative"
    :class="formSelected ? 'toggle' : ''")
    .form-container(class="h-full flex")
      form.form-login(class="h-full w-full md:w-[50%] duration-1000 flex-col items-center justify-center py-16 ")
        h2(class="text-xl text-orange-600") Entrar com
        input(type="text" placeholder="name" class="block my-10")
        input(type="email" placeholder="email" class="block my-10")
        button(type="button" class="text-orange-600") Entrar

        button(
          type="button"
          class="text-orange-600 underline block md:hidden"
          @click="toggleForm()"
        ) Ainda não tenho conta

      form.form-register(class="h-full bg-orange-600 text-slate-900 md:bg-slate-900 md:text-orange-600 w-full md:w-[50%] duration-1000 flex-col items-center justify-center py-16 ")
        h2(class="text-xl") Novo cadastro
        input(type="text" placeholder="name" class="block my-10")
        input(type="email" placeholder="email" class="block my-10")
        button(type="button") Cadastrar

        button(
          type="button"
          class="underline block md:hidden"
          @click="toggleForm()"
        ) Já tenho conta

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