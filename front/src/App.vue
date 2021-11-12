<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>


<script>

import Header from '@/components/common/Header.vue'
import Main from '@/components/common/Main.vue'

export default {
  components: {
    Header,
    Main,
  }
}

</script>


<style lang="scss">

* {box-sizing: border-box; margin:0; padding:0;}
html, body {
  width: 100%; height: 100%;;
}
ul, ol {list-style: none;;}
a {text-decoration: none;;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
