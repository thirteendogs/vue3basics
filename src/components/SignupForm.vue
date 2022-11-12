<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="displayName"
      type="text"
      placeholder="display name"
      required
    />
    <input v-model="email" type="email" placeholder="email" required />
    <input v-model="password" type="password" placeholder="password" required />
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value);
    };

    return {
      displayName,
      email,
      password,
      handleSubmit,
    };
  },
};
</script>
