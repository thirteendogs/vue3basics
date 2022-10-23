<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot />
      <div class="actions">
        <slot name="links" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px;
  background-color: white;
  border-radius: 10px;
}
h1 {
  color: teal;
  border: none;
  padding: 0;
}

.sale {
  background-color: crimson;
  color: white;
}

.sale h1 {
  color: white;
}

.actions {
  text-align: center;
  margin-block: 30px 10px;
  color: #333;
}

.actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.sale h1,
.sale .actions,
.sale .actions a {
  color: white;
}
</style>
