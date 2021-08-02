import { ref } from 'vue'

export default function useCreatTask(){
    const id = ref('')
    const title = ref('')
    const description = ref('')
    const status = ref('')
    const errorMessage = ref('')

    // function createTask(){
    //     if(!status.value){
    //         status.value = "open"
    //     }
    //     console.log(title.value)
    // }
    function editTask(newTask){
        console.log(newTask)
    }

    return {id, title, description, status,errorMessage,  editTask}
    
}