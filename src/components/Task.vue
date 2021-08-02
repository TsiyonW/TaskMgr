<template>
  <div class="row task-row">
    <div class="col-1">
      <input type="checkbox" :checked="task.status.toLowerCase() === 'done'" />
    </div>
    <div class="col-2 task-row-title"  @click="clickTask(task.id)">
      <div v-if="isDone"><del>{{task.title}}</del></div>
      <div v-else>{{task.title}}</div>

    </div>
    <div class="col-3">      
      <div v-if="isDone"><del>{{task.description}}</del></div>
      <div v-else>{{task.description}}</div>

    </div>
    <div class="col-2">
      <div class="task-status" v-if="task.status.toLowerCase() === 'open'">
        <v-chip color="#e6ffe6">{{ task.status }}</v-chip>
      </div>
      <div
        class="task-status"
        v-if="task.status.toLowerCase() === 'in_progress'"
      >
        <v-chip color="#ffffb3">{{ task.status }}</v-chip>
      </div>
      <div class="task-status" v-if="task.status.toLowerCase() === 'done'">
        <v-chip color="#ffe6e6">{{ task.status }}</v-chip>
      </div>
    </div>
    <div class="col-4" style="z-index: 10">
        <v-btn variant="plain" color="green" @click="$emit('editTask', {task:task})">
          <v-icon>mdi-pencil</v-icon></v-btn
        >

      <v-btn v-if="!isDone" variant="plain" @click="$emit('checkTask', { task: task })"
        ><v-icon>mdi-check</v-icon>
      </v-btn>

      <v-btn
        variant="plain"
        color="red"
        @click="$emit('deleteTask', { task: task })"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Task",
  props: ["task", "isDone"],
  setup(props) {
    const router = useRouter();
    // const route = useRoute();

    function clickTask(taskId) {
      console.log("clicked task swith id ", taskId);

      router.push({
        name: "ViewTask",
        params: { id: taskId, task: props.task },
      });
      //       <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      //   <h2>{{ job.title }}</h2>
      // </router-link>
    }
    return { clickTask };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.progress {
  border-radius: 10px;
}
.task-status {
  text-align: center;
}
.is-done {
  text-decoration: none;
}

.task-row {
  border-radius: 10px;
  margin-left: 5%;
  padding: 0.3%;
  border-bottom: 1px solid lightgray;
}
.task-row-title:hover {
  background-color: rgb(236, 234, 234);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>