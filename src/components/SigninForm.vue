<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" placeholder="email" required />
    <input v-model="password" type="password" placeholder="password" required />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import useSignin from "../composables/useSignin";
import { ref } from "vue";
export default {
  setup(props, context) {
    const { signin, error } = useSignin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signin(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>
