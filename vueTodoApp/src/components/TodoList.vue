<template>
  <div class="todo-list" v-if="todoList.length > 0">
    <div v-for="todo in todoList" :key="todo.id" class="todo">
      <TodoItem :data="todo" />
    </div>
  </div>
</template>

<script>
import { store } from 'redux-todo-core';
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    return {
      todoList: [],
    };
  },
  created: function () {
    const { list } = store.getState().todo;
    this.todoList = list;
    store.subscribe(() => {
      const { list } = store.getState().todo;
      this.todoList = list;
    });
  },
};
</script>
