<template>
  <div v-if="loading">loading..</div>
  <div class="todo-list" v-if="todoList.length > 0">
    <div v-for="todo in todoList" :key="todo.id" class="todo">
      <TodoItem :data="todo" />
    </div>
  </div>
</template>

<script>
import { store } from 'redux-todo-core';
import { fetchTodoList } from 'redux-todo-core/todoSlice';

import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    return {
      loading: false,
      todoList: [],
    };
  },
  created: function () {
    const { loading, list } = store.getState().todo;
    this.loading = loading;
    this.todoList = list;

    store.subscribe(() => {
      const { loading, list } = store.getState().todo;
      this.loading = loading;
      this.todoList = list;
    });
  },
  mounted() {
    store.dispatch(fetchTodoList());
  },
};
</script>
