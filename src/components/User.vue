<template lang="html">
  <div>
    <p>User</p>
    <button type="button" name="button" @click="$parent.metodBapak('asdasd')">tessssss</button>
    <button type="button" name="button" @click="teriakbapak">Teriak Variabel bapak</button>
    <p>{{propsAnak}}</p>
    <router-view v-on:method-cucu="methodAnak" v-bind:propsCucu="dataAnak"></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['propsAnak'],
  data(){
    return {
      dataAnak: 'Data dari anak'
    }
  },
  methods: {
    methodAnak(){
      this.$emit('method-anak')
    },
    teriakbapak(){
      // alert(this.propsAnak)
      this.propsAnak = 'Berubahhhhhh'
    },
    methodBapak(){
      alert('gyg')
    }
  }
}
</script>

<style lang="css">
</style>
