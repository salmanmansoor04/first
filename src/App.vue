<template>

<JoynHeader />

<router-view></router-view>
  
</template>

<script>
import JoynHeader from './components/JoynHeader.vue'
//import JoynHome from './components/JoynHome.vue'

export default {

   components: {JoynHeader}
  
}
</script>

<style>

*{
    margin:0;
    padding:0;
}

</style>
