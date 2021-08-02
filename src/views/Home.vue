<template>
  <div class="home">
    <Nav/>
<TaskList/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import TaskList from './TaskList.vue';

export default {
  name: "Home",

  components: {   Nav, TaskList },
  setup() {
  },
};
</script>

<style scoped>
a, button{
  text-decoration: none;
}
</style>