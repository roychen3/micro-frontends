<template>
  <div class="todo-item">
    <div class="content" @click="handleToggle(data)">
      <p v-bind:class="{ 'is-done': data.isDone }">
        {{ data.content }}
      </p>
    </div>
    <button type="button" @click="handleDelete(data.id)">Delete</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: {
    data: Object,
  },
  methods: {
    ...mapActions(['deleteItem', 'toggleItem']),
    handleToggle(data) {
      this.toggleItem(data);
    },
    handleDelete(id) {
      this.deleteItem(id);
    },
  },
  computed: mapGetters(['todoList']),
};
</script>
