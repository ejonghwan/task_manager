<template>
  <header>
      <nav>
          <ul>
              <li>
                  <router-link to="/">home</router-link>
              </li>
              <li>
                  <router-link to="/login">login</router-link>
              </li>
              <li>
                  <router-link to="/signup">signup</router-link>
              </li>
              <li>
                  <router-link to="/posts">posts</router-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>


export default {

}
</script>

<style>
    header {padding: 20px;}
    nav {width: 980px; margin: 0 auto;;}
    nav > ul {display: flex; }
    nav > ul > li { flex: 0 1 auto; padding: 10px;  border-bottom: 1px solid #ddd;}

</style>