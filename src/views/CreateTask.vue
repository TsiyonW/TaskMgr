<template>
  <div>
    <h2>Create Task</h2>
    <div>
      <input type="text" v-model="title" class="form-control" />
    </div>
    <div>
      <input type="text" v-model="description" class="form-control" />
    </div>
    <div>
      <select v-model="status" class="form-control">
        <option>Open</option>
        <option>In progress</option>
        <option>Done</option>
      </select>
    </div>
    <v-btn @click="createTask">Create Task</v-btn>
  </div>
</template>

<script>
// import { reactive, toRefs } from "vue";
import useCreateTask from "../composables/useCreateTask";

export default {
  name: "CreateTask",
  setup() {
    const { title, description, status, errorMessage, createTask } =
      useCreateTask();

    return { title, description, status, errorMessage, createTask };
  },
};
</script>

<style>
</style>
