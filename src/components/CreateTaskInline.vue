<template>
  <div class="row create-task-form-inline">
    <div class="col-md-2 col-sm-1">
      <input
        type="text"
        v-model="id"
        class="form-control"
        placeholder="Task id"
      />
    </div>
    <div class="col-md-2 col-sm-12">
      <input
        type="text"
        v-model="title"
        class="form-control"
        placeholder="Task Title"
      />
    </div>
    <div class="col-md-5 col-sm-12">
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
      <v-btn class="create-btn-inline" @click="$emit('createTask', { title:title, description:description, status :status})"
        >Create Task</v-btn
      >
      <v-btn class="create-btn-inline" @click="$emit('cancelCreate')"
        >Cancel</v-btn
      >
    </div>
  </div>
</template>

<script>
import useCreatTask from "../composables/useCreateTask";

export default {
  name: "CreateTaskInline",
  //   emits: ['cancelCreate', 'createTask'],
  setup() {
    const { id,title, description, status } = useCreatTask();

    return { id,title, description, status };
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