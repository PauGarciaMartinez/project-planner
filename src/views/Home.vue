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
import { ref, computed } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: {
    SingleProject,
    FilterNav
  },
  setup() {
    const projects = ref([])
    const current = ref('all')

    projectFirestore.collection('projects')
      .orderBy('created', 'desc')
      .onSnapshot(snap => {
        let docs = snap.docs.map(doc => {
          return { ...doc.data, id: doc.id }
        })
        projects.value = docs
      })

    const handleDelete = (id) => {
      projects.value = projects.value.filter(project => project.id !== id)
    }

    const handleComplete = (id) => {
      let p = projects.value.find(project => project.id === id)
      p.complete = !p.complete
    }

    const filteredProjects = computed(() => {
      if (current.value === 'completed') {
        return projects.value.filter(project => project.complete)
      } 
      if (current.value === 'ongoing') {
        return projects.value.filter(project => !project.complete)
      } 
      return projects.value
    }) 


    return { projects, current, handleDelete, handleComplete, filteredProjects }
  }
}
</script>
