<template>
  <div>
    <input type="text" v-model="content">
    <button @click="emitValue"></button>
  </div>
</template>

<script>
export default {
  name: 'GlobalInput',
  props: {
    val: {
      type: String,
      required: true,
      validator(value) {
        console.log(value);
        return /\d+/.test(value);
      }
    }
  },
  data() {
    return  {
      content: this.val
    }
  },
  methods: {
    emitValue() {
      console.log(this.content)
      this.$emit('inputEmit', this.content)
    }
  }
}
</script>

<style lang="stylus" scoped>
  input
    border: 1px solid #000;
  button
    border: 1px solid #000;
    color: red;
    width: 20px;
    height: 20px;
</style>
