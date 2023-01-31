<script setup>
const client = useSupabaseClient();

const { data: profiles } = await useAsyncData('profiles', async () => {
  const { data } = await client.from('profiles').select("*")
  return data
})
</script>

<template>
  <div>List :</div>
  <div>Generated at : {{ new Date().toString() }}</div>
  <div class="container mx-auto">
    <main class="my-2">
      <div>Generated at : {{ Date.now().toString() }}</div>
      <h2 class="mb-2">Liste des membres</h2>
      <div v-for="(item, index) in profiles" :key="index">{{ item }}</div>
    </main>
  </div>
</template>


<style lang='scss'></style>