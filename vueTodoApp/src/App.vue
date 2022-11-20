<template>
  <h1>Vue Todo App</h1>
  <AddBar />
  <TodoList />
</template>

<script>
import AddBar from './components/AddBar.vue';
import TodoList from './components/TodoList.vue';
import { store } from 'redux-todo-core';

export default {
  name: 'App',
  components: {
    AddBar,
    TodoList,
  },
  provide: {
    store,
  },
};
</script>
