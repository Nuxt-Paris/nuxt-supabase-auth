<script setup>
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    navigateTo('')
  }
})
</script>

<template>
  <div>user : {{ user }}</div>
  <div>
    <Signup />
  </div>
</template>
