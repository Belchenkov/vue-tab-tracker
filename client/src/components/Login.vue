<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
        <panel title="Login">
            <div class="pl-4 pr-4 pt-2 pb-2">
              <div>
                <v-text-field
                        label="Email"
                        type="email"
                        prepend-icon="email"
                        v-model="email"
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                        label="Password"
                        type="password"
                        prepend-icon="vpn_key"
                        v-model="password"
                ></v-text-field>
              </div>
              <div class="danger-alert" v-html="error"></div>
              <v-btn class="cyan lighten-1 white--text" @click="login">Login</v-btn>
            </div>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Login',
  data () {
    return {
        email: '',
        password: '',
        error: null
    }
  },

  methods: {
      async login () {
           try {
               const response = await AuthenticationService.login({
                   email: this.email,
                   password: this.password
               });

               this.$store.dispatch('setToken', response.data.token);
               this.$store.dispatch('setUser', response.data.user);
               this.$router.push({
                   name: 'songs'
               });
           }  catch (error) {
               this.error = error.response.data.error;
           }
      }
  }
}
</script>

<style scoped>

</style>
