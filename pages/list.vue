<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

let { data: members, error } = await client.from("profiles").select("*");
</script>

<template>
  <div>List :</div>
  <div>Generated at : {{ new Date().toString() }}</div>
  <div class="container mx-auto">
    <header>Je suis connecté en tant que {{ user.email }}</header>
    <main class="my-2">
      <div>Generated at : {{ Date.now().toString() }}</div>
      <h2 class="mb-2">Liste des membres</h2>
      <div v-for="(item, index) in members" :key="index">{{ item }}</div>
    </main>
  </div>
</template>


<style lang='scss'></style>