<template>
    <Nav/>
  <div class="row create-task-form-inline">
    <div  class="col-md-1 col-sm-2">
      <input
        type="number"
        value  ="task.id"
        class="form-control"
        placeholder="id"
        disabled
      />
    </div>
    <div class="col-md-2 col-sm-12">
      <input
        type="text"
        v-model="id"
        class="form-control"
        placeholder="Task Title"
      />
    </div>
    <div class="col-md-4 col-sm-12">
      <input
        type="text"
        v-model="description"
        class="form-control"
        placeholder="Task Description"
      />
    </div>
    <div class="col-md-2 col-sm-12">
      <select v-model="status" class="form-select">
        <option value="">Open</option>
        <option value="in_progress">In progress</option>
        <option value="done">Done</option>
      </select>
    </div>
    <div class="col-md-3 col-sm-12">
      <v-btn
        class="create-btn-inline"
        @click="$emit('editTask', { id, title, description, status })"
        >Edit Task</v-btn
      >
      <v-btn class="create-btn-inline" @click="$emit('cancelEdit')"
        >Cancel</v-btn
      >
    </div>
  </div>
</template>

<script>
import useCreatTask from "../composables/useCreateTask";
import Nav from '../components/Nav.vue'
export default {
  name: "EditTask",
  props: ["task"],
  components: {Nav},
  setup(props) {
    let { id, title, description, status, editTask } = useCreatTask();

    console.log("props",props);
    return { id, title, description, status, editTask };
  },
};
</script>

<style>
.create-task-form-inline {
  /* background-color: red; */
  padding: 2%;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.create-btn-inline {
  margin: 2px;
  background-color: #2fb38e;
  color: white;
  padding: 2% 2% 2% 2%;
  border-radius: 5px;
}
</style>