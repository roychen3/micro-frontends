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
import { store } from 'redux-todo-core';
import { deleteItem, toggleItem } from 'redux-todo-core/todoSlice';

export default {
  name: 'TodoItem',
  props: {
    data: Object,
  },
  methods: {
    handleToggle() {
      store.dispatch(toggleItem(this.data));
    },
    handleDelete() {
      store.dispatch(deleteItem(this.data.id));
    },
  },
};
</script>
