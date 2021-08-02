<template>
  <div class="card-container">
    <div class="card text-center">
      <div class="card-header">signUP</div>
      <br />
      <div class="card-body">
        <div
          v-if="errorMessage"
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {{ errorMessage }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            @click="dismisWarning"
          ></button>
        </div>

        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><v-icon>mdi-account</v-icon></div>
          </div>
          <input
            type="text"
            class="form-control"
            v-model="username"
            placeholder="Username"
          />
        </div>

        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><v-icon>mdi-key</v-icon></div>
          </div>
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Password"
          />
        </div>

        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><v-icon>mdi-key</v-icon></div>
          </div>
          <input
            type="password"
            class="form-control"
            v-model="passwordII"
            placeholder="Re-type Password"
          />
        </div>
        <div>
          <br />
          <button class="button" @click="submitForm">Signup</button><br /><br />
        </div>
        <div>
          Already have an account?
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import axios from 'axios';

export default {
  name: "Signup",
  setup() {
    const signupFormInput = reactive({
      username: "",
      password: "",
      passwordII: "",
    });
    let errorMessage = ref("");
    function submitForm() {
      //validate
      if (
        !signupFormInput.username ||
        !signupFormInput.password ||
        !signupFormInput.passwordII
      ) {
        errorMessage.value = "Please input all the fields";
      } else if (signupFormInput.password != signupFormInput.passwordII) {
        errorMessage.value = "Passwords dont match";
      } else {
        // signup successfull
        console.log(signupFormInput);
                // login
        axios.post('url', signupFormInput)
        .then(user=>{
            localStorage.setItem('userToken',user)
        })
        .catch(err=>{
            errorMessage.value = err.message
        })
      }
    }

    // warning
    function dismisWarning(){
        errorMessage.value = ""
    }

    return { ...toRefs(signupFormInput), errorMessage, submitForm, dismisWarning };
  },
};
</script>

<style>
</style>