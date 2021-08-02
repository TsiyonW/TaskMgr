<template>
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="#">Task manager</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create-task" class="nav-link"
            >Create Task</router-link
          >
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          @click="handleLogout"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const route = useRouter();
    function handleLogout() {
        localStorage.removeItem('user')
      route.push({ name: "Login" });
    }

    return { handleLogout };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>