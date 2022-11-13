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
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
export default {
  setup() {
    const { signup, error } = useSignup();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      console.log("user sign up");
    };

    return {
      displayName,
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>
