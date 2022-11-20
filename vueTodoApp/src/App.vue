<template>
  <h1>Vue Todo App</h1>
  <AddBar />
  <TodoList />
</template>

<script>
import { store } from 'mobx-todo-core';

import AddBar from './components/AddBar.vue';
import TodoList from './components/TodoList.vue';

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
