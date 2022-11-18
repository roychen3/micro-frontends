<template>
  <div class="todo-list" v-if="todoList.length > 0">
    <div v-for="todo in todoList" :key="todo.id" class="todo">
      <TodoItem :data="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: mapGetters(['todoList']),
};
</script>
