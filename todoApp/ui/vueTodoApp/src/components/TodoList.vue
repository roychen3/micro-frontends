<template>
  <div v-if="loading">loading..</div>
  <div class="todo-list" v-if="todoList.length > 0">
    <div v-for="todo in todoList" :key="todo.id" class="todo">
      <TodoItem :data="todo" />
    </div>
  </div>
</template>

<script>
import { fetchTodoList } from 'redux-todo-core/todoSlice';

import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  inject: ['store'],
  data() {
    const { loading, list } = this.store.getState().todo;
    return {
      loading,
      todoList: list,
    };
  },
  created() {
    this.store.subscribe(() => {
      const { loading, list } = this.store.getState().todo;
      this.loading = loading;
      this.todoList = list;
    });
  },
  mounted() {
    this.store.dispatch(fetchTodoList());
  },
};
</script>
