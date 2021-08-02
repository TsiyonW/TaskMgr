import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import TaskList from '../views/TaskList.vue'
import ViewTaskDetail from '../views/ViewTaskDetail.vue'
import CreateTask from '../views/CreateTask.vue';
import Unauthorized from '../views/Unauthorized.vue';
import Edit from '../views/Edit.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {    
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {    
    path: '/login',
    name: 'Login',
    component: Login
  },
  {    
    path: '/create-task',
    name: 'CreateTask',
    component: CreateTask
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/taskdetail/:id',
    name: 'ViewTask',
    component: ViewTaskDetail,
    props: true
  },
  {
    path: '/edit/:id',
    name: 'EditTask',
    component: Edit,
    props: true //to accept any route parameter as props
  },  
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
const isAuthenticated=() =>{
  return !!localStorage.getItem('user')
  // return false

}
router.beforeEach((to) => {
  if((to.name ==='Home'||to.name ==='CreateTask'||to.name ==='TaskList') && !isAuthenticated()){
    console.log(" authen", isAuthenticated())
    router.push('/unauthorized');
  }
}
)

export default router
