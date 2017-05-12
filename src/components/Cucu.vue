<template lang="html">
  <div>
    <h2>Ini cucu lucu</h2>
    <button type="button" name="button" @click="methodCucu">tmbl dari cucu</button>
    <p>ini cucu: {{propsCucu}}</p>
    <p>counter : {{counter}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },
  name: 'cucu',
  props: ['propsCucu'],
  methods: {
    methodCucu(){
      this.$emit('method-cucu')
    }
  }
}
</script>

<style lang="css">
</style>
