<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

const { data: profiles } = await useAsyncData('profiles', async () => {
  const { data } = await client.from('profiles').select('*')
  return data
})
</script>

<template>
      <div class="relative py-24 sm:py-32 lg:pb-40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Bienvenue sur le site du meetup Nuxt Paris</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">Un meetup sympa où on parle de sujets intéressants 🍺</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink v-if="!user" href="#" class="rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">S'inscrire</NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
          <path fill="url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="ee0717bf-3e43-49df-b1bd-de36422ed3d3" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
      <div v-if="user">Bienvenue {{ user.email }}</div>
      <h2 class="mb-2">Liste des membres</h2>
      <div v-for="(profile, index) in profiles" :key="index">{{ profile }}</div>
</template>
