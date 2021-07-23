import Vue from 'vue'
import Router from 'vue-router'
import Nodone from '@/components/nodone.vue'
import Done from '@/components/Done.vue'
import App from  '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect:"/App/done",
      children:[
        {path:"done",component:Done},
        {path:"nodone",component:Nodone}
      ]
    }
  ]
})
