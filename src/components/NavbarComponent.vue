<template>
  <div class="flex-between navbar">
    <div id="logo" style = "align: center">
      <span>WOOKIE</span>
      <br/>
      <span>MOVIES</span>
    </div>
    <div class="flex-center">
      <input type="text" v-model="query" @input="handleInput" placeholder="Search movies..." />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { query: '' };
  },
  methods: {
    handleInput() {
      this.$emit('search', this.query);
    },
  },
};
</script>

<style scoped>
  #logo {
    font-size: 24px;
    cursor: pointer;
  }
  
  </style>
