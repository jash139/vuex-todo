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
    async filterTodos({ commit }, event) {
        const limit = event.target.value;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit("filterTodos", response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => (state.todos = [todo, ...state.todos]),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    filterTodos: (state, todos) => state.todos = todos
};

export default {
    state,
    getters,
    actions,
    mutations
};