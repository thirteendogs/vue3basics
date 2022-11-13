<template>
  <nav>
    <div>
      <p>Hey there...display name</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useSignout from "../composables/useSignout";

import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, signout } = useSignout();

    const handleLogout = async () => {
      await signout();
      if (!error.value) {
        router.push({ name: "Welcome" });
      }
    };
    return {
      error,
      handleLogout,
    };
  },
};
</script>

<style lang="scss" scoped></style>
