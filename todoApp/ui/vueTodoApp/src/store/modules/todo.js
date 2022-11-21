import axios from 'axios';

const state = {
  todoList: [],
};

const getters = {
  todoList: (state) => state.todoList,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    commit('setTodos', response.data);
  },
  addItem({ commit }, value) {
    const newTodo = {
      id: new Date().getTime(),
      content: value,
      isDone: false,
    };
    commit('newTodo', newTodo);
  },
  async deleteItem({ commit }, id) {
    commit('removeTodo', id);
  },
  async toggleItem({ commit }, data) {
    console.log('data', data);
    const updTodo = {
      ...data,
      isDone: !data.isDone,
    };
    commit('updateTodo', updTodo);
  },
};

const mutations = {
  setTodos: (state, todoList) => (state.todoList = todoList),
  newTodo: (state, todo) => state.todoList.unshift(todo),
  removeTodo: (state, id) =>
    (state.todoList = state.todoList.filter((todo) => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todoList.findIndex((todo) => todo.id === updTodo.id);
    if (index !== -1) {
      state.todoList.splice(index, 1, updTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
