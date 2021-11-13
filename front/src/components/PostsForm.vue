<template>
  <div>
     <form @submit="handlePosts">
          <div>
            <label for="title">title</label>
            <input id="title" type="text" v-model="title">
        </div>
        <div>
            <label for="conts">content</label>
            <input id="conts" type="text" v-model="content">
        </div>
        <button type="submit">posts</button>
     </form>
  </div>
</template>

<script>

import { posts } from '@/api/posts.js'
export default {
    data() {
        return {
            title: '',
            content: '',
        }
    },

    methods: {
        handlePosts(e) {
            e.preventDefault();
            posts({
                title: this.title,
                content: this.content,
                
            })
        }
    }
}
</script>

<style>

</style>