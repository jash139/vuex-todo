<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form>
        <input type="text" v-model="title" placeholder="Todo" />
        <input type="submit" value="Add" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
};
</script>

<style scoped>
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