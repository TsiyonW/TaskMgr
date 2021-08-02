<template>
  <div class="card-container">
    <div class="card text-center">
      <div class="card-header">LogIN</div><br/>
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
        <div>
            <br/>
          <button class="button" @click="submitLogin">Login</button><br/><br/>
        </div>
        <div>
          Dont have an account?
          <router-link to="/signup">signup</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
// import axios from 'axios';
import {useRouter} from 'vue-router';

export default {
  name: "Login",
  setup() {
    const router = useRouter()
    const loginForm = reactive({
      username: "",
      password: "",
    });
    let errorMessage = ref("");

    // handle submit
    function submitLogin() {
      if (!loginForm.username || !loginForm.password) {
        errorMessage.value = "Input all the requierd fields";
      } else {
        errorMessage.value = "";

        // login
        // axios.post('url', loginForm)
        // .then(user=>{
        //     localStorage.setItem('user',user)
        //     router.push('Home')
        // })
        // .catch(err=>{
        //     errorMessage.value = err.message
        // })
        localStorage.setItem('user',loginForm)
            router.push({name: 'Home'})
      }
    }
    // warning
    function dismisWarning(){
        errorMessage.value = ""
    }
    // return values
    return { ...toRefs(loginForm), errorMessage, submitLogin, dismisWarning };
  },

  data: () => ({
    someD: "",
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>

<style>
/* laptop */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  .card {
    width: 50%;
    margin: auto;
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .card {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .card {
    width: 40%;
    margin: auto;
  }
}
.card {
  margin-top: 5%;
}
.card-container {
  /* background-color: lightcoral; */
  height: 100%;
}

.button {
  width: 50%;
  margin: auto;
  background-color: #2fb38e;
  color: white;
  padding: 2% 2% 2% 2%;
  border-radius: 5px;
}
</style>