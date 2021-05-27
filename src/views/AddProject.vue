<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required>
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.title, this.details)
    }
  }
}
</script>

<style>

</style>