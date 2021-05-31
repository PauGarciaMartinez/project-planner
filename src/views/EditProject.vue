<template>
    <form @submit="handleUpdate">
    <label>Title</label>
    <input type="text" v-model="title" required>
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
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
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        res.json()
        res.title = this.title
        res.details = this.details
      }).catch((err) => console.log(err))

      this.$router.push('/')
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