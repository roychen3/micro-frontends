<template>
  <form @submit="onSubmit" class="add-bar">
    <input type="text" v-model="value" placeholder="Add Todo..." />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  name: 'AddBar',
  inject: ['store'],
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.store.addItem(this.value);
      this.value = '';
    },
  },
};
</script>
