<template>
  <v-card width="300px" outlined dark elevation="20">
    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          v-model="username"
          prepend-icon="mdi-account-circle"
          :rules="userRules"
          clearable
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          prepend-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="userPassword"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :rules="passwordRule"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        height="50px"
        class="button mt-n6"
        color="transparent"
        x-large
        dark
        elevation="10"
        @click="signup"
        >Sign Up</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import APIServices from "../services/api.js";

export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 10 || "Password must be more than 10 characters"
      ],
      username: "",
      userRules: [v => !!v || "Username is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    signup() {
      const newUser = {
        name: this.username,
        email: this.email,
        password: this.userPassword
      };
      APIServices.signup(newUser)
        .then(response => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("email", response.email);
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  font-size: 20px;
  font-weight: 600;
}
</style>
