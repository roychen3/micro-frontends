<template>
  <div class="todo-item">
    <div class="content" @click="handleToggle">
      <p v-bind:class="{ 'is-done': data.isDone }">
        {{ data.content }}
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
      this.store.toggleItem(this.data.id);
    },
    handleDelete() {
      this.store.deleteItem(this.data.id);
    },
  },
};
</script>
