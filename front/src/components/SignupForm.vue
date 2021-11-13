<template>
   <div>
      <form @submit="handleSubmit($event)">
        <div>
            <label for="email">email</label>
            <input type="text" id="email" v-model="email" required>
        </div>
        <div>
            <label for="name">name</label>
            <input type="text" id="name" v-model="name" required>
        </div>
        <div>
            <label for="password">password</label>
            <input type="text" id="password" v-model="password" required>
        </div>
        <div>
            <label for="passwordConfirm">password confirm</label>
            <input type="text" id="passwordConfirm" v-model="passwordConfirm" required>
        </div>
        <button type="submit">submit</button>
      </form>
  </div>
</template>

<script>
export default {
data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$store.dispatch('signupUser', {
          name: this.name,
          email: this.email,
          password: this.password,
      })
    }
  }
}
</script>

<style>

</style>