<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="authIsReady">
      <div>
        <router-link to="/"> Home </router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleLogout">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-else>
        <router-link to="/login"> Login </router-link>
        <router-link to="/signup"> Signup </router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed(() => {
      return store.state.user;
    });

    const authIsReady = computed(() => {
      return store.state.authIsReady;
    });

    const handleLogout = async () => {
      await store.dispatch("logout");
      router.push({ name: "Login" });
    };

    return {
      handleLogout,
      user,
      authIsReady,
    };
  },
};
</script>
