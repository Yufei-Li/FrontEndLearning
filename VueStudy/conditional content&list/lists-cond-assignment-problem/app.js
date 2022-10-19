const app = Vue.createApp({
    data(){
        return{
            taskItem:'',
            taskList:[],
            visibility: true
        }
    },
    methods:{
        addTask(){
            this.taskList.push(this.taskItem);
        },
        changeVisibility(){
            this.visibility = !this.visibility;
        }
    }
});

app.mount("#assignment")