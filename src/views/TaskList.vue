<template>
  <br /><br />
  <CreateTaskInline
    v-if="!isCreateFormHidden"
    @createTask="createTask"
    @cancelCreate="toggleCreateForm"
  />
  <div v-if="showEdit">
    <div class="row create-task-form-inline">
      <div class="col-md-1 col-sm-2">
        <input
          type="number"
          v-model="updatedId"
          class="form-control"
          placeholder="id"
          disabled
        />
      </div>
      <div class="col-md-2 col-sm-12">
        <input
          type="text"
          v-model="updatedTitle"
          class="form-control"
          placeholder="Task Title"
        />
      </div>
      <div class="col-md-4 col-sm-12">
        <input
          type="text"
          v-model="updatedDescription"
          class="form-control"
          placeholder="Task Description"
        />
      </div>
      <div class="col-md-2 col-sm-12">
        <select v-model="updatedStatus" class="form-select">
          <option value="open">Open</option>
          <option value="in_progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div class="col-md-3 col-sm-12">
        <v-btn class="create-btn-inline" @click="editTask(updatedId)">Edit Task</v-btn>
        <v-btn class="create-btn-inline" @click="showEdit = !showEdit"
          >Cancel</v-btn
        >
      </div>
    </div>
  </div>
  <div v-if="showTasks">
    <div v-for="task in tasks.list" :key="task.id">
      <div class="task-container">
        <Task
          :task="task"
          @editTask="openEditForm(task.id)"
          @deleteTask="deleteTask"
          @checkTask="checkTask"
          :isDone="task.status.toLowerCase() === 'done'"
        />
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-10"></div>
      <div class="col-2" style="margin-top: 20px">
        <v-btn
          icon="mdi-plus"
          class="create-task-icon"
          @click="toggleCreateForm"
        ></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "../components/Task.vue";
import CreateTaskInline from "../components/CreateTaskInline.vue";
import { ref, reactive, toRefs } from "vue";
import tasksJson from "../assets/tasks.json";
// import Edit from './Edit.vue';

export default {
  name: "TaskList",
  components: {
    Task,
    CreateTaskInline,
    // Edit
  },
  setup() {
    let isCreateFormHidden = ref(true);
    let showTasks = ref(true);
    let showEdit = ref(false);
    let editedTask = reactive({
      updatedId: "",
      updatedTitle: "",
      updatedDescription: "",
      updatedStatus: "",
    });

    function toggleCreateForm() {
      isCreateFormHidden.value = !isCreateFormHidden.value;
      showTasks.value = !showTasks.value;
    }

    // copy data from files
    let tasks = reactive({ list: tasksJson });

    function createTask(taskInfo) {
      toggleCreateForm();
      tasks.list.push(taskInfo);
    }

    function deleteTask(taskInfo) {
      tasks.list = tasks.list.filter((task) => {
        return task.id !== taskInfo.task.id;
      });
    }

    function checkTask(taskInfo) {
      tasks.list = tasks.list.filter((task) => {
        if (task.id === taskInfo.task.id) {
          task.status = "DONE";
        }
        return task;
      });
    }

    function openEditForm(taskId) {
      showEdit.value = !showEdit.value;
      tasks.list = tasks.list.filter((task) => {
        if (task.id === taskId) {
          editedTask.updatedId = task.id
          editedTask.updatedTitle = task.title;
          editedTask.updatedDescription = task.description;
          editedTask.updatedStatus = task.status;
        }
        return task;
      });
    }
    function editTask(updatedId) {
      showEdit.value = !showEdit.value;
      tasks.list = tasks.list.filter((task) => {
        if (task.id === updatedId) {
          task.title = editedTask.updatedTitle;
          task.description = editedTask.updatedDescription;
          task.status = editedTask.updatedStatus;
        }
        return task;
      });
    }
    return {
      ...toRefs(editedTask),
      editTask,
      tasks,
      editedTask,
      showTasks,
      showEdit,
      openEditForm,
      createTask,
      deleteTask,
      checkTask,
      isCreateFormHidden,
      toggleCreateForm,
    };
  },
};
</script>

<style>
.task-container {
  width: 80%;
  margin: auto;
  background-color: #f5f5f0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.create-task-btn {
  width: 80%;
  margin: auto;
}
.create-task-icon {
  margin-right: 5%;
}
</style>