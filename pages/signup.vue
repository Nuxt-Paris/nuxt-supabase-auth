<script lang="ts" setup>
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    navigateTo('')
  }
})

const state = reactive({
  loading: false,
  disabled: false,
  email: undefined,
  success: false,
  error: undefined,
});

const sendEmail = async () => {
  if (!state.email) {
    return (state.error = "You should provide an email address");
  }

  state.loading = true;

  let { data, error } = await client.auth.signInWithOtp({
    email: state.email,
  });

  if (data) {
    state.success = true;
  }

  if (error) {
    state.error = error.message;
  }

  state.loading = false;
};
</script>

<template>

  <!-- TODO: set as a layout -->
  <Navigation />
  <div class="
      container
      mx-auto
      text-center
      border
      rounded
      border-slate-400
      py-4
      px-5
      my-5
    " style="max-width: 800px">
    <h1 class="
        mb-4
        decoration-wavy
        underline
        decoration-teal-500
        underline-offset-4
      ">
      Formulaire d'inscription à Nuxt Paris
    </h1>
    <div v-if="state.success" class="
        bg-teal-500/50
        border border-teal-500
        rounded
        px-3
        py-2
        mb-4
        text-white
      ">
      Ouvrez votre boîte e-mail pour vous connecter :)
    </div>
    <div v-else>
      <p class="mb-4">
        Pour vous incrire, ajoutez votre e-mail et vous recevrez un lien
        magique.
      </p>
      <input v-model="state.email" type="text" placeholder="email" />
      <div v-if="state.error" class="
          bg-red-500/50
          border border-red-500
          rounded
          px-3
          py-2
          mb-4
          text-white
        ">
        {{ state.error }}
      </div>
      <button :disabled="state.disabled" class="block mx-auto" @click="sendEmail">
        {{ state.loading ? "Loading..." : "Envoi du lien magique" }}
      </button>
    </div>
  </div>
</template>
