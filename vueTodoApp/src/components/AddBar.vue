<template>
  <form @submit="onSubmit" class="add-bar">
    <input type="text" v-model="value" placeholder="Add Todo..." />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddBar',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    ...mapActions(['addItem']),
    onSubmit(e) {
      e.preventDefault();
      this.addItem(this.value);
    },
  },
};
</script>
