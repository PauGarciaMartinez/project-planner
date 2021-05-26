<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleVisibility">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span class="material-icons">delete</span>
        <span class="material-icons">done</span>
      </div>
    </div>
    <div class="details" v-show="visible">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProject',
  props: ['project'],
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>