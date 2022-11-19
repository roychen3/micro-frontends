<template>
  <form @submit="onSubmit" class="add-bar">
    <input type="text" v-model="value" placeholder="Add Todo..." />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import { store } from 'redux-todo-core';
import { addItem } from 'redux-todo-core/todoSlice';

export default {
  name: 'AddBar',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      store.dispatch(addItem(this.value));
      this.value = '';
    },
  },
};
</script>
