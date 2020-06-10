<template>
  <v-card width="300px" outlined>
    <v-card-title class="display-1">Login</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          color="orange darken-4"
          :label="errormsg"
          v-model="email"
          prepend-icon="mdi-account-circle"
          clearable
        ></v-text-field>
        <v-text-field
          color="orange darken-4"
          label="Password"
          v-model="userPassword"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :rules="passwordRule"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          clearable
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-center d-flex">
      <v-btn
        height="35px"
        color="orange darken-4"
        @click="loginMethod"
        x-large
        rounded
        dark
        >Login</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import APIServices from "../services/api.js";
export default {
  data() {
    return {
      errormsg: "Email",
      isActive: true,
      hasError: false,
      email: "",
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 10 || "Password must be more than 10 characters"
      ]
    };
  },
  methods: {
    loginMethod() {
      const user = {
        email: this.email,
        password: this.userPassword
      };
      APIServices.login(user)
        .then(response => {
          if (!response.token) {
            this.errormsg = "Usuario Incorrecto";
          } else {
            localStorage.setItem("token", response.token);
            localStorage.setItem("email", response.email);
            this.$router.push("/home");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
1
