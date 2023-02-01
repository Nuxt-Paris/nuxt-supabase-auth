<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

const { data: profiles } = await useAsyncData('profiles', async () => {
  const { data } = await client.from('profiles').select('*')
  return data
})
</script>

<template>
  <!-- TODO: set as a layout -->
  <Navigation />
  <div class="container mx-auto">
    <header>Bienvenue sur le site de Nuxt Paris !</header>
    <main class="my-2">
                        <!-- TODO: set in independant component-->
      <NuxtLink v-if="!user" to="/signup">S'inscrire !</NuxtLink>
      <div v-else>Bienvenue {{ user.email }}</div>
      <h2 class="mb-2">Liste des membres</h2>
      <div v-for="(item, index) in profiles" :key="index">{{ item }}</div>
    </main>
  </div>
</template>
