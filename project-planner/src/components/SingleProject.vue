<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons"> edit </span>
        <span @click="deleteProject" class="material-icons"> delete </span>
        <span class="material-icons"> done </span>
      </div>
    </div>
    <div v-if="detailsVisible" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      detailsVisible: false,
      uri: `http://localhost:3000/projects/${this.project.id}`,
    };
  },
  methods: {
    showDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
