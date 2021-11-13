<template>
  <div>
      <form @submit="handleSubmit">
          <div>
            <label for="email">email</label>
            <input type="text" id="email" v-model="email" required>
        </div>
        <div>
            <label for="password">password</label>
            <input type="text" id="password" v-model="password" required>
        </div>
        <button type="submit">submit</button>
      </form>
  </div>
</template>

<script>


export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.$store.dispatch('isLogged', {
                email: this.email,
                password: this.password,

            })
        }
    },
    
    computed: {
        
    }
}
</script>

<style>

</style>