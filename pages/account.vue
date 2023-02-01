<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const user = useSupabaseUser();
</script>

<template>
    <!-- TODO: set as a layout -->
    <Navigation/>
    <div>Mes informations personelles :</div>
    <pre>{{ user }}</pre>
</template>