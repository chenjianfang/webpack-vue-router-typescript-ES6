import Vue from 'vue';
import VueRouter from 'vue-router';
//首页
import tip from './vue/tip.vue';


Vue.use(VueRouter);

let routes;
let temp = [
    {
        path:'/',
        components:{
            index:tip
        }
    }
];

routes = [].concat(temp);

const router = new VueRouter({
    routes
});


export default router;










