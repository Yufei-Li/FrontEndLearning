const app = Vue.createApp({
    data(){
        return {
            inputClass :'',
            paragraphIsVisible : true
        }
    },
    computed: {
        paraClasses(){
            return{
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphIsVisible,
                hiddent: !this.paragraphIsVisible
            }
        }
    },
    methods: {
        toggleParagraphIsVisiblity(){
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }
});

app.mount('#assignment');