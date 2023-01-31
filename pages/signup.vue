<script setup>
const user = useSupabaseUser();
</script>

<template>
  <div>user : {{ user }}</div>
  <div>
    <Signup />
  </div>
</template>
