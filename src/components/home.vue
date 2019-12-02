<template>
  <div>
      <h2>Acceuil</h2>
      <router-link to="/home/news">News</router-link>
      <router-link to="/home/msgs">Msgs</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
export default{
  name: 'home',
  // created(){
  //   document.title = 'Acceuil'
  // }
  data(){
    return {
      path: '/home/news'
    }
  },
  //下面两个函数只有在keep-alive包着时才能用
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    //console.log(this.$route);
    this.path = this.$route.path
    next()
  }
}
</script>
<style scoped>
</style>