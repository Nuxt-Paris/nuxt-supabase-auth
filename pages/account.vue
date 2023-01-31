<script lang="ts" setup>

definePageMeta({
  middleware: "auth",
});

const user = useSupabaseUser();
</script>

<template>
    {{ user }}
</template>