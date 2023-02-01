<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const user = useSupabaseUser();
</script>

<template>
    <h1 class="my-6 text-4xl">Paramètres du compte</h1>
    <pre>{{ user }}</pre>
</template>