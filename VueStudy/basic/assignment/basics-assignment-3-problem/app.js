const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    watch: {
        result(){
            const that = this;
            setTimeout(function(){
                that.number = 0;
            },2000)
        }
    },
    computed:{
        result(){
            if(this.number < 37){
                return 'not there';
            }else if (this.number === 37) {
                return this.number;
            }else {
                return "too much";
            }
        }
    },
    methods:{
        addNumber(num){
            this.number += num;
        }
    }
});

app.mount("#assignment");