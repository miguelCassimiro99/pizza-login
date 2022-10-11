export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if(!user.value && to.path === '/notes') navigateTo('/login')

  if(user.value && to.path === '/login') navigateTo('/notes')
})