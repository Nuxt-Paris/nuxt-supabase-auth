<script lang="ts" setup>
const client = useSupabaseClient()

const { data: profiles } = await useAsyncData('profiles', async () => {
  const { data } = await client.from('profiles').select('*')
  return data
})
</script>


<template>
  <div v-for="profile in profiles">{{ profile }}</div>
</template>