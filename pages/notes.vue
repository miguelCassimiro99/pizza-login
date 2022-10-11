<template lang="pug">
section(class="dark:bg-slate-900 h-screen w-full text-white absolute px-4 py-10")
  header(class="flex justify-center items-center")
    h1(class="mx-4") Hello {{ user?.email }}
    button(@click="signOut") Log out
  div(class="flex flex-col gap-4 mt-16")
    div(
      v-for="note in notes"
      :key="note.id"
      class="p-8 bg-gray-700 rounded"
    ) {{ note.content }}

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

const { data:notes } = await useFetch('/api/notes', {
  key: `notes for ${user.value.id}`,
  headers: useRequestHeaders(['cookie'])
})
</script>