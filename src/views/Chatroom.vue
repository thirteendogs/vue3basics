<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
// get the current user using the getUser composable
// watch the current user for changes
// redirect the user to the welcome page when the are logged out
import Navbar from "../components/Navbar.vue";

import getUser from "../composables/getUser";

import { useRouter } from "vue-router";

import { watch } from "vue";

export default {
  components: {
    Navbar,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
