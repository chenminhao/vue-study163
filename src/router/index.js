import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import head from '@/components/head'
import list from '@/components/list'
import list1 from '@/components/list1'
import list2 from '@/components/list2'
import details from '@/components/details'
import details1 from '@/components/details1'
import details2 from '@/components/details2'
import details3 from '@/components/details3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/list/:id',
      name: 'list',
      component:list,
      children:[
       { path:'/list/list1',
         component:list1
        },
         { path:'/list/list2',
         component:list2
        }
      ]
    },
    {
      path:'/details/:id',
      name: 'details',
      component:details,
      children:[
        {
          path:'/details/details1',
          component:details1
        },
        {
          path:'/details/details2',
          component:details2
        },
         {
          path:'/details/details3',
          component:details3
        }
      ]
    }
  ]
})
