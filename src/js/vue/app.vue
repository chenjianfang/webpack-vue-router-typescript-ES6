<template>
    <div id="app">
        <router-view name="index"></router-view>
    </div>
</template>

<script>
    import router from '../router.js';
    export default{
        data(){
            return{

            }
        },
        router,
    }
</script>