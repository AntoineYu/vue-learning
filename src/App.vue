<template>
  <div id="app">
    <h3>App</h3>
    <router-link to="/home" tag="button" replace>Acceuil</router-link>
    <router-link to="/about" tag="button" replace>About</router-link>
    <router-link :to="'/user/' + userId" tag="button" replace>User</router-link>
    <router-link :to="{path: '/profile', query: {name: 'yu', age: 18}}" tag="button" replace>Profile</router-link>
    
    
    <!-- <button @click="linkToAbout">Acceuil</button>
    <button @click="linkToAcceuil">About</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'Antoine Yu'
    }
  },
  methods: {
    //代码跳转
    // linkToAbout(){
    //   this.$router.replace('/about')
    //   this.$router.push({
    //   path:'',
    //   query: {}
    // })
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
    font-size: 20px;
  }
</style>
