<template>
  <v-app>
    <div v-for="post in posts" :key="post.id">
      {{ post || json }}
    </div>

    <h2>Posts</h2>
    <v-btn @click="getPosts">Fetch posts</v-btn>
  </v-app>
</template>

<script>
// import axios from 'axios';
import axiosinterceptor from "../interceptors/request-interceptor";

export default {
  name: "About",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axiosinterceptor
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((result) => {
          this.posts = result.data;
        })
        .catch((err) => {
          this.errorMessage = "Error retrieving  data";
          console.log(err);
        });
    },
    createPost() {
      axiosinterceptor
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
