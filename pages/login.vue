<template lang="pug">
main(class="h-screen dark:bg-slate-900 flex justify-center items-center font-nunito z-100")

  .login-container(
    class="h-full w-full md:h-[480px] md:w-[768px] rounded-md shadow-none md:shadow-xl overflow-hidden border-slate-900 relative"
    :class="formSelected ? 'toggle' : ''"
  )

    .form-container(class="h-full flex")
      form.form-login(
        @submit.prevent="submitLoginForm"
        class="h-full w-full md:w-[50%] bg-slate-900 duration-1000 absolute md:relative flex flex-col items-center justify-evenly py-6 px-6"
      )
        h2(class="text-3xl font-semibold text-orange-600 capitalize") Login with

        div(class="flex justify-center items-center h-9")
          a(href="#" class="block py-2")
            font-awesome-icon(icon="fa-brands fa-facebook" class="rounded-full border-2 border-slate-900 hover:border-orange-600 text-orange-600  hover:text-slate-900 hover:bg-orange-600 fa-2x mx-2")
          a(href="#" class="block py-2")
            font-awesome-icon(icon="fa-brands fa-google" class="rounded-full border-2 border-slate-900 hover:border-orange-600 text-orange-600  hover:text-slate-900 hover:bg-orange-600 fa-2x mx-2")
          a(href="#" class="block py-2")
            font-awesome-icon(icon="fa-brands fa-github" class="rounded-full border-2 border-slate-900 hover:border-orange-600 text-orange-600  hover:text-slate-900 hover:bg-orange-600 fa-2x mx-2")


        hr
        span(class="text-orange-500") or

        base-input(
          label="Email"
          v-model="formData.email"
          type="email"
        )

        base-input(
          label="Password"
          v-model="formData.password"
          type="password"
        )
       
        button(type="submit" class="text-orange-600") Entrar

        div
          span(class="text-sm text-red-600" v-for="error in v$.$errors" :key="error.$uid")
            | {{ error.$property }} -  {{ error.$message }}

        button(
          type="button"
          class="text-orange-600 underline block md:hidden"
          @click="toggleForm()"
        ) Create new account

      form.form-register(class="h-full w-full md:w-[50%] bg-orange-600 md:bg-slate-900 text-slate-900 md:text-orange-600 duration-1000 flex flex-col items-center justify-evenly py-6 px-6")
        h2(class="text-xl") New register

        div(class="flex justify-center items-center h-9")
          a(href="#" class="block py-2")
            font-awesome-icon(icon="fa-brands fa-facebook" class="rounded-full border-2 border-slate-900 hover:border-orange-600 text-orange-600  hover:text-slate-900 hover:bg-orange-600 fa-2x mx-2")
          a(href="#" class="block py-2")
            font-awesome-icon(icon="fa-brands fa-google" class="rounded-full border-2 border-slate-900 hover:border-orange-600 text-orange-600  hover:text-slate-900 hover:bg-orange-600 fa-2x mx-2")
          a(href="#" class="block py-2")
            font-awesome-icon(icon="fa-brands fa-github" class="rounded-full border-2 border-slate-900 hover:border-orange-600 text-orange-600  hover:text-slate-900 hover:bg-orange-600 fa-2x mx-2")


        hr
        span(class="text-orange-500") or

        base-input(
          label="Username"
          v-model="formData.username"
        )

        base-input(
          label="Email"
          v-model="formData.email"
          type="email"
        )
       
        button(type="button") Entrar

        button(
          type="button"
          class="text-orange-600 underline block md:hidden"
          @click="toggleForm()"
        ) Have an account? Login

    .form-overlay(class=" w-full md:w-[50%] h-full absolute top-0 left-0 transition-all duration-1000 hidden z-10 md:block")
      .overlay-one(class="absolute w-full h-full bg-orange-600 duration-1000 flex flex-col items-center justify-center" v-if="formSelected")
        h2(class="text-2xl font-semibold my-4") Have already an account
        p(class="text-base") Log-in with email and password
        button(@click="toggleForm()" class=" py-3 underline") Login
      .overlay-two(class="absolute w-full h-full bg-orange-600 duration-1000 flex flex-col items-center justify-center" v-else)
        h2(class="text-2xl font-semibold my-4") New Register
        p(class="text-base") Create a new account if you're a new user
        button(@click="toggleForm()" class=" py-3 underline") Register
</template>

<script setup lang="ts">
  import useVueLidade from '@vuelidate/core';
  import { required, email } from '@vuelidate/validators';

  type Theme = 'light' | 'dark';

  const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
  }

  onMounted(() => {
    setColorTheme('dark')
  });

  const formSelected = ref(false);
  const toggleForm = () => {
    return formSelected.value = !formSelected.value;
  }

  const formData = reactive({
    username: "",
    email: "",
    password: "",
  });

  const rules = computed(() => {
    return {
      email: { required, email },
      password: { required }
    }
  })

  const v$ = useVueLidade(rules, formData);

  const submitLoginForm = async () => {
    const results = await v$.value.$validate()

    if(!results) console.log('Form: its not submited error');
    if(results) console.log('Form: user has been created')
  }

</script>