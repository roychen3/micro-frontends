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
export default {
  name: 'TodoItem',
  props: {
    data: Object,
  },
  inject: ['store'],
  methods: {
    handleToggle() {
      this.store.toggleItem(this.data);
    },
    handleDelete() {
      this.store.deleteItem(this.data.id);
    },
  },
};
</script>
