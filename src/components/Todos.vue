<template>
  <div>
    <h2 class="heading">Todos</h2>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["getTodos"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
.heading {
  color: #fb5d06;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  background: #cdcfcd;
  cursor: pointer;
  padding: 2rem;
  position: relative;
  text-align: center;
}
</style>