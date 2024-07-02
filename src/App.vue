<template>
     <router-view />
</template>

<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';

export default {
  name: 'App',
  setup(){
    let lectures = ref([]);

    onMounted(()=>{
      axios.get('/lecture.json').then((result)=>{
        lectures.value = result.data
      })
    })
    
    return {lectures}
  },
}
</script>

<style>
/* <style scoped> */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
