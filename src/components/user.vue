<template>
  <div>
      <h2>User: {{ userId }}</h2>
      <h2>User: {{ $route.params.userId }}</h2>
      <button @click="btnClick">button</button>
  </div>
</template>
<script>
    export default{
        name: "User",
        // created(){
        //     document.title = 'User'
        // },
        computed: {
            userId(){
                return this.$route.params.userId
            }
        },
        methods: {
            btnClick(){
                //$router是router模块
                console.log(this.$router);
                //$route是当前活跃的路由
                console.log(this$route);
            }
        }
    }
</script>
<style scoped>
</style>