import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //components: { App },
  //template: '<App/>'
  // 普通用法render: function(createElement){
  //   return createElement('h2', 
  //   {class: 'box'}, 
  //   ['Hello, World', 
  //   createElement('button', ['clic'])])
  // }
  router,
  render: h => h(App)
})
console.log(router);

//template -> ast -> render -> virtual dom -> UI
