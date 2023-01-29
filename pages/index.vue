<script setup>
definePageMeta({
  middleware: "auth",
});

const user = useSupabaseUser();
const client = useSupabaseClient();

let { data: members, error } = await client.from("profiles").select("*");
</script>

<template>
  <div class="container mx-auto">
    <header>Je suis connecté en tant que {{ user.email }}</header>
    <main class="my-2">
      <h2 class="mb-2">Liste des membres</h2>
      <div v-for="(item, index) in members" :key="index">{{ item }}</div>
    </main>
  </div>
</template>


<style lang='scss'></style>