<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <h2>the job id is {{ id }}</h2>
    <p>{{ job.details }}</p>
  </div>
  <p v-else>Loading data</p>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
};
</script>
