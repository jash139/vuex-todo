import axios from "axios";

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async getTodos({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        commit("setTodos", response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false });
        commit("newTodo", response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit("deleteTodo", id);
    },
    async filterTodos({ commit }, limit) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit("setTodos", response.data);
    },
    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        commit("updateTodo", response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => (state.todos = [todo, ...state.todos]),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            state.todos[index].completed = updatedTodo.completed;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};