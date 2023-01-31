<script setup>
definePageMeta({
  middleware: "auth",
});

const user = useSupabaseUser();

</script>

<template>
  <div class="container mx-auto">
    <header>Je suis connecté en tant que {{ user.email }}</header>
  </div>
</template>


<style lang='scss'></style>