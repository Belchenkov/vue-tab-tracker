<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
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
                      v-model="password"
                      autocomplete="new-password"
                      prepend-icon="vpn_key"
              ></v-text-field>
            </div>
            <div class="error" v-html="error"></div>
            <v-btn class="cyan lighten-1 white--text" @click="register">Register</v-btn>
          </form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel';

export default {
  name: 'Register',
  data () {
    return {
        email: '',
        password: '',
        error: null
    }
  },
  components: {
      Panel
  },
  methods: {
      async register () {
          try {
              const response = await AuthenticationService.register({
                  email: this.email,
                  password: this.password
              });

              this.$store.dispatch('setToken', response.data.token);
              this.$store.dispatch('setUser', response.data.user);
          }  catch (error) {
              this.error = error.response.data.error;
          }
      }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
