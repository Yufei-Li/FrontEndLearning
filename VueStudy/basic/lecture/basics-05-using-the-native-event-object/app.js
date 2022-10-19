const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname : ''
    };
  },
  watch:{
    name(value){
      this.fullname = value +' ' +'Li'
    }
  },
  computed:{
    // fullname(){
    //   if(this.name == ""){
    //     return ""
    //   }
    //   return this.name+' '+"Li"
    // }
  },
  methods:{
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    },
    outputFullName(){
      if(this.name == ""){
        return ""
      }
      return this.name+' '+"Li"
    }
  }
});

app.mount('#events');
