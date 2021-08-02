<template>
  <div>
    <Nav />
    <div class="card text-center" style="width: 40%">
            <div class="col-2">
      <div class="task-status" v-if="taskDetail.status.toLowerCase() === 'open'">
        <v-chip color="#e6ffe6">{{ taskDetail.status }}</v-chip>
      </div>
      <div
        class="task-status"
        v-if="taskDetail.status.toLowerCase() === 'in_progress'"
      >
        <v-chip color="#ffffb3">{{ taskDetail.status }}</v-chip>
      </div>
      <div class="task-status" v-if="taskDetail.status.toLowerCase() === 'done'">
        <v-chip color="#ffe6e6">{{ taskDetail.status }}</v-chip>
      </div>
    </div>
      <div class="card-body">
        <h5 class="card-title">
          {{ taskDetail.title }}
        </h5>
        <p class="card-text">
          {{ taskDetail.description }}
        </p>


        {{ taskDetail.role }}
        {{ taskDetail.permission }}
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

import axios from "axios";
import { ref } from "vue";

export default {
  props: ["id", "task"],
  components: { Nav },
  setup(props) {
    console.log(props);
    let taskDetail = ref({});
    // onBeforeMount(()=>{
    axios
      .get("http://localhost:3000/tasks", { params: { id: props.id } })
      .then((res) => {
        console.log("the data", res.data[0]);
        taskDetail.value = res.data[0];
        console.log("task Detail", taskDetail);
      })
      .catch((err) => {
        console.log(err);
      });

    // })

    return { taskDetail };
  },
};
</script>

<style>
</style>