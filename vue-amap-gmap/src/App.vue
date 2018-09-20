<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.log("%c【calamus】   kiz.calamus@gmail.com\n%cwww.calamus.xyz \nwww.github.com/calamus0427 ", "color:#E1244E;font-size:16px;", "color:#9e9e9e;font-size:14px")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
