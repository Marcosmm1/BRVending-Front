<template>
  <v-card width="300px" height="286px" dark outlined elevation="20">
    <v-card-text>
      <v-form class="font-weight-black form_fonts">
        <v-text-field
          prepend-icon="mdi-email"
          full-width
          :label="errormsg"
          v-model="email"
          class="size"
          clearable
        ></v-text-field>
        <v-text-field
          full-width
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
    <v-card-actions class="justify-center d-flex">
      <v-btn
        elevation="10"
        class="button"
        height="50px"
        color="transparent"
        @click="loginMethod"
        dark
        x-large
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
      email: "marc@marc.es",
      showPassword: false,
      userPassword: "1111111111",
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

<style lang="scss" scoped>
.button {
  font-size: 20px;
  font-weight: 600;
}
</style>
