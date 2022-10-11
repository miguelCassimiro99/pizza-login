<template lang="pug">
section(class="dark:bg-slate-900 h-screen w-full text-white absolute px-4 py-10")
  header
    button(@click="signOut") Log out
  div
    h1 Hello notes
</template>
<script lang="ts" setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const supabase = useSupabaseClient();

const signOut = async () => {
  const { error } = await client.auth.signOut()
}

watchEffect(() => {
  if(!user.value) navigateTo('/login')
})
</script>