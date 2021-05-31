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
      let editedProject = {
        title: this.title,
        details: this.details
      }
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      })
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