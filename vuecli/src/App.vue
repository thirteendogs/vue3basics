<template>
  <h1>{{ title }}</h1>
  <p>welcome..</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">Sign In</a>
      </template>
      <h1>Dani's giveaway</h1>
      <p>Grab your giveaway</p>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Dani's giveaway two</h1>
      <p>Grab your giveaway two</p>
    </Modal>
  </div>
  <button @click="toggleModal">Open Modal One</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
// challenge
// - Create an extra button to open a different modal
// - Use the same modal component but pass in a different template (slot)
// - Use a different method and data
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first Vue App",
      header: "Sign up for you giveaway!",
      text: "Grab your giveaway!",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
