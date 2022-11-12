<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" placeholder="email" required />
    <input v-model="password" type="password" placeholder="password" required />
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>
