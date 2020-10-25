import appMy from './app.js'
const Vue = window.Vue;


const RootComponent = {
  components:{
    app: appMy
  }
}
const app = Vue.createApp(RootComponent)

const vm = app.mount('#app')
