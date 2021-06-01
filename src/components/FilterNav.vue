<template>
  <nav class="filter-nav">
    <button 
      @click="updateFilter('all')"
    >View all</button>
    <button 
      @click="updateFilter('completed')"
    >Completed</button>
    <button 
      @click="updateFilter('ongoing')"
    >Ongoing</button>
  </nav>
</template>

<script>
export default {
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by)
    }
  }
}
</script>

<style>

</style>