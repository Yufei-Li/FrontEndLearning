const app = Vue.createApp({
    data(){
        return{
            friends :[{
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234',
                email: 'manuel@gmail.com'
            },{
                id: 'Yufei',
                name: 'Yufei Li',
                phone: '4321',
                email: 'yufei@gmail.com'
            }]
        }
    }
});

app.component('friend-contact', {
    templete: `
        <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
        </li>
    `,
    data(){
        return{
            detailsAreVisible: true,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234',
                email: 'manuel@gmail.com'
            }
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount("#app");