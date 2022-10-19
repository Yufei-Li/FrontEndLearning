const app = Vue.createApp({
    data(){
        return {
            courseGoal:'<h2>Finish the course and learn Vue!</h2>',
            vueLink : "https://www.google.com"
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoal;
            }else{
                return "<h2>bye</h2>";
            }
        }
    }
});

app.mount("#user-goal");