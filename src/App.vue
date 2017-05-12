<template>
  <div id="app">
    <!-- kalo emit -->
    <router-view v-on:method-anak="metodBapak" v-bind:propsAnak="dataUtkAnak"></router-view>

    <button type="button" name="button" @click="methodVuex">Ini button vuex</button>


    <!-- kalo parent -->
    <!-- <router-view v-on:method-anak="metodBapak"></router-view> -->

    <button type="button" name="button" @click='tambahCounter'> tambah Counter</button>
    <router-link to="/">Hello</router-link>
    <router-link to="/user">User</router-link>
    <router-link to="/user/cucu">Cucu</router-link>
    <p>
      {{value}}
    </p>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      value: 'Dari bapak',
      dataUtkAnak: 'Cekkkkkkk'
    }
  },
  methods: {
    metodBapak(params){
      alert('Ini bapak')
      this.value = params
    },
    methodVuex() {
      this.$store.state.namaBapak
    },
    tambahCounter(){
      this.$store.state.counter++;

    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
