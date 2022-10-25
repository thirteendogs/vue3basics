<template>
  <form>
    <label>Email:</label>
    <input v-model="email" type="email" required />
    <label>Password:</label>
    <input v-model="password" type="password" required />
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skill</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click="deleteSkill(skill)"
    >
      {{ skill }}
    </div>

    <div class="terms">
      <input v-model="terms" type="checkbox" required />
      <label>Accept terms and conditions</label>
    </div>

    <!-- <div>
      <input type="checkbox" v-model="names" value="Dani" />
      <label>Dani</label>
      <input type="checkbox" v-model="names" value="David" />
      <label>David</label>
      <input type="checkbox" v-model="names" value="Mario" />
      <label>Mario</label>
    </div> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [],
      //   names: [],
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill.replace(",", ""));
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skillToDelete) {
      this.skills = this.skills.filter((skill) => skill !== skillToDelete);
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin-right: 10px;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>
