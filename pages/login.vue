<template lang="pug">
main(class="h-screen dark:bg-slate-900 flex justify-center items-center font-nunito z-100")

  .login-container(
    class="h-full w-full md:h-[480px] md:w-[768px] rounded-md shadow-none md:shadow-xl overflow-hidden border-slate-900 relative"
    :class="formSelected ? 'toggle' : ''"
  )

    .form-container(class="h-full flex")
      form.form-login(
        @submit.prevent="login()"
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
          class="py-2 px-3 text-base dark:text-orange-600 bg-slate-900 placeholder-orange-400 border-b-2 border-orange-600 focus:ring-0"
          label="Email"
          v-model="formData.email"
          type="email"
        )

        base-input(
          class="py-2 px-3 text-base dark:text-orange-600 bg-slate-900 placeholder-orange-400 border-b-2 border-orange-600 focus:ring-0"
          label="Password"
          v-model="formData.password"
          type="password"
        )
       
        button(
          type="submit"
          class="bg-orange-600 px-8 ring-orange-600 py-2 text-slate-900 hover:ring-2 rounded-lg uppercase font-bold"
        ) Log in

        div
          span(class="text-sm text-red-600" v-for="error in v$.$errors" :key="error.$uid")
            | {{ error.$property }} -  {{ error.$message }}

        button(
          type="button"
          class="text-orange-600 underline block md:hidden"
          @click="toggleForm()"
        ) Create new account

      form.form-register(
        @submit.prevent="signUp()"
        class="h-full w-full md:w-[50%] bg-orange-600 md:bg-slate-900 text-slate-900 md:text-orange-600 duration-1000 flex flex-col items-center justify-evenly py-6 px-6"
        )
        h2(class="text-xl") New register

        div(class="flex justify-center items-center h-9")
          a(href="#" class="block py-2")
            font-awesome-icon(
              icon="fa-brands fa-facebook"
              class="rounded-full border-2 fa-2x mx-2 text-slate-900 md:text-orange-600 border-orange-600 md:border-slate-900 hover:border-slate-900 md:hover:border-orange-600 md:hover:text-slate-900 hover:text-orange-600 hover:bg-slate-900 md:hover:bg-orange-600")
          a(href="#" class="block py-2")
            font-awesome-icon(
              icon="fa-brands fa-google"
              class="rounded-full border-2 fa-2x mx-2 text-slate-900 md:text-orange-600 border-orange-600 md:border-slate-900 hover:border-slate-900 md:hover:border-orange-600 md:hover:text-slate-900 hover:text-orange-600 hover:bg-slate-900 md:hover:bg-orange-600")
          a(href="#" class="block py-2")
            font-awesome-icon(
              icon="fa-brands fa-github"
              class="rounded-full border-2 fa-2x mx-2 text-slate-900 md:text-orange-600 border-orange-600 md:border-slate-900 hover:border-slate-900 md:hover:border-orange-600 md:hover:text-slate-900 hover:text-orange-600 hover:bg-slate-900 md:hover:bg-orange-600")


        hr
        span(class="text-slate-900 md:text-orange-600") or

        base-input(
          class="py-2 px-3 text-base dark:md:text-orange-600 bg-orange-600 md:bg-slate-900 placeholder-slate-900 md:placeholder-orange-400 border-b-2 border-slate-900 md:border-orange-600 focus:ring-0"
          label="Email"
          v-model="formData.email"
          type="email"
        )

        base-input(
          class="py-2 px-3 text-base dark:md:text-orange-600 bg-orange-600 md:bg-slate-900 placeholder-slate-900 md:placeholder-orange-400 border-b-2 border-slate-900 md:border-orange-600 focus:ring-0"
          label="Password"
          v-model="formData.password"
          type="password"
        )
       
        button(
          type="submit"
          class="bg-orange-600 px-8 ring-orange-600 py-2 text-slate-900 hover:ring-2 rounded-lg uppercase font-bold"
        ) Sign up

        button(
          type="button"
          class="text-slate-900 md:text-orange-600 underline block md:hidden"
          @click="toggleForm()"
        ) Have an account? Login

    .form-overlay(class=" w-full md:w-[50%] text-slate-900 h-full absolute top-0 left-0 transition-all duration-1000 hidden z-10 md:block")
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

  const client = useSupabaseClient()
  const signUp = async () => {
    const { user, error } = await client.auth.signUp({
      email: formData.email,
      password: formData.password
    })

    console.log('SUPABASE: user', user)
    console.log('SUPABASE: error', error)

  }

  const login = async () => {
    const { user, error } = await client.auth.signIn({
      email: formData.email,
      password: formData.password
    })

    console.log('SUPABASE: user', user)
    console.log('SUPABASE: error', error)
  }

  const user = useSupabaseUser();

  onMounted(() => {
    watchEffect(() => {
      if (user.value) navigateTo('/notes')
    })
  })

</script>