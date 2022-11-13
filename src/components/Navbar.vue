<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useSignout from "../composables/useSignout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { error, signout } = useSignout();
    const { user } = getUser();

    const handleLogout = async () => {
      await signout();
    };
    return {
      error,
      handleLogout,
      user,
    };
  },
};
</script>

<style lang="scss" scoped></style>
