<template>
  <div>
    <h2 class="heading">Add Todo</h2>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Todo" />
        <input type="submit" value="Add" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = "";
    },
  },
};
</script>

<style scoped>
.heading {
  color: #9f26f1;
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 1rem;
  border: 1px solid #0be3ef;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  margin-left: 1rem;
  background-image: linear-gradient(45deg, #0be3ef, #9f26f1);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
</style>