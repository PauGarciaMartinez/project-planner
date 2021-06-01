<template>
  <nav class="filter-nav">
    <button 
      @click="updateFilter('all')"
      :class="{ active: current === 'all' }"
    >View all</button>
    <button 
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
    >Completed</button>
    <button 
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >Ongoing</button>
  </nav>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by)
    }
  }
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
@media only screen and (max-width: 440px) {
  .filter-nav {
    text-align: center;
  }
}
@media only screen and (max-width: 300px) {
  .filter-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>