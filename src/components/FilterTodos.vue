<template>
  <div class="filter-todos">
    <h4 class="heading">Filter Todos:</h4>
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"]),
};
</script>

<style scoped>
.filter-todos {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}
.heading {
  color: #9f26f1;
  margin-right: 2rem;
}
select {
  border: none;
  padding: 0.5rem 1rem;
}
</style>