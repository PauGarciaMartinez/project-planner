<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject 
          :project="project" 
          @delete="handleDelete" 
          @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '@/components/SingleProject'
import FilterNav from '@/components/FilterNav'
import { projectFirestore } from '../firebase/config'

export default {
  name: 'Home',
  components: {
    SingleProject,
    FilterNav
  },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  async mounted() {
    let res = await projectFirestore.collection('projects')
      .orderBy('created', 'desc')
      .get();

    console.log(res)

    this.projects = res.docs.map(doc => { 
      return { ...doc.data(), id: doc.id }
    })
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => project.id !== id)
    },
    handleComplete(id) {
      let p = this.projects.find(project => project.id === id)
      p.complete = !p.complete
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      } 
      if (this.current === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      } 
      return this.projects
    }
  }
}
</script>
