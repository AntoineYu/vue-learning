<template>
  <div>
      <h2>Profile</h2>
      <h2>{{ $route.query.name }}</h2>
      <h2>{{ $route.query.age }}</h2>
  </div>
</template>
<script>
export default{
  name: 'Profile',
  // created(){
  //   document.title = 'Profile'
  // }
}
</script>
<style scoped>
</style>