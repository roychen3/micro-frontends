<template>
  <Observer>
    <div v-if="store.loading">loading..</div>
    <div class="todo-list" v-if="store.list.length > 0">
      <div v-for="todo in store.list" :key="todo.id" class="todo">
        <TodoItem :data="todo" />
      </div>
    </div>
  </Observer>
</template>

<script>
import { Observer } from 'mobx-vue-lite';

import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    Observer,
    TodoItem,
  },
  inject: ['store'],
  mounted() {
    this.store.fetchTodoList();
  },
};
</script>
