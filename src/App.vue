<template>
  <div id="app">
    <span>{{ keyCode }}</span>
    <input type="text" @keydown="onKeyDown" v-model="text" />
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "",
    keyCode: 0
  }),
  methods: {
    onKeyDown(event) {
      this.keyCode = event.keyCode;
    }
  }
};
</script>