<template>
  <div class="todo-item">
    <div class="title" @click="handleToggle">
      <p v-bind:class="{ 'is-completed': data.completed }">
        {{ data.title }}
      </p>
    </div>
    <button type="button" @click="handleDelete">Delete</button>
  </div>
</template>

<script>
import { deleteItem, toggleItem } from 'redux-todo-core/todoSlice';

export default {
  name: 'TodoItem',
  props: {
    data: Object,
  },
  inject: ['store'],
  methods: {
    handleToggle() {
      this.store.dispatch(toggleItem(this.data));
    },
    handleDelete() {
      this.store.dispatch(deleteItem(this.data.id));
    },
  },
};
</script>
