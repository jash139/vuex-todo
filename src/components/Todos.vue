<template>
  <div>
    <h2 class="heading">Todos</h2>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i class="fas fa-trash-alt" />
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
</style>