<template>
    <form>
    <label>Title</label>
    <input type="text" v-model="title" required>
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button @click="handleUpdate">Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: `http://localhost:3000/projects/${this.id}`
    }
  },
  methods: {
    handleUpdate() {
      
    }
  },
  mounted() {
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        this.title = data.title
        this.details = data.details
      })
  }
}
</script>

<style>

</style>