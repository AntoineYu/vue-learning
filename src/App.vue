<template>
  <div id="app">
    <h3>App</h3>
    <router-link to="./home" tag="button" replace>Acceuil</router-link>
    <router-link to="./about" tag="button" replace>About</router-link>
    <!-- <button @click="linkToAbout">Acceuil</button>
    <button @click="linkToAcceuil">About</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // linkToAbout(){
    //   this.$router.replace('/about')
    // },
    // linkToAcceuil(){
    //   this.$router.replace('/home')
    // }
  }
}
</script>

<style>
  .active{
    color: red;
  }
</style>
