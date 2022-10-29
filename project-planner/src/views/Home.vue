<template>
  <div class="home">
    <FilterNav
      @filterChange="currentFilter = $event"
      :currentFilter="currentFilter"
    />

    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "Home",
  components: {
    SingleProject,
    FilterNav,
  },
  data() {
    return {
      projects: [],
      currentFilter: "all",
    };
  },
  computed: {
    filteredProjects() {
      switch (this.currentFilter) {
        case "all":
          return this.projects;
        case "ongoing":
          return this.projects.filter((project) => !project.complete);
        case "completed":
          return this.projects.filter((project) => project.complete);
      }
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.log(error.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => id === project.id);
    },
    handleComplete(id) {
      let project = this.projects.find((project) => project.id === id);
      project.complete = !project.complete;
    },
  },
};
</script>

<style lang="scss" scoped></style>
