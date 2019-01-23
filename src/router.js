import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home';
import Rankhome from './components/Rankhome';
import MyHome from './components/MyHome';
import Servershome from './components/Servershome';
import error from './components/error';

const routes=[
  {path:'./home',component:home},
  {path:'./MyHome',component:MyHome},
  {path:'./Rankhome',component:Rankhome},
  {path:'./Servershome',component:Servershome},
  {path:'./error',component:error},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
];


export default new Router({
  routes
})
