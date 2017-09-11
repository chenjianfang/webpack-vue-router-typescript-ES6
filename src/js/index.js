import _ from 'lodash';
import Vue from 'vue';
import '../css/index.css';
import App from './vue/app.vue';


new Vue({
    el:"#app",

    data:{
        
    },
    render:createEle=>createEle(App)
});

