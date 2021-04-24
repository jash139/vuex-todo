<template>
  <div>
    <h2 class="heading">Todos</h2>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box" /> = Incomplete </span>
      <span> <span class="complete-box" /> = Complete </span>
    </div>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="onClick(todo.id)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["getTodos", "deleteTodo"]),
    onClick(id) {
      this.deleteTodo(id);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
.heading {
  color: #9f26f1;
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  background: #ffffff;
  color: #7f4ba0;
  cursor: pointer;
  padding: 2rem;
  position: relative;
  text-transform: capitalize;
}
i {
  padding: 0.6rem;
  border-radius: 10rem;
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
}
i:hover {
  background-color: #a026f148;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: #7f4ba0;
  opacity: 0.2;
}
.incomplete-box {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: #ffffff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>