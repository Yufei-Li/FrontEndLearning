import { createApp } from 'vue';

import App from '/Users/liyufei/Desktop/FrontEndLearning/VueStudy/VueCLI/vue-cli-01-a-new-vue-project/src/App.vue';
import FriendContact from '/Users/liyufei/Desktop/FrontEndLearning/VueStudy/VueCLI/vue-cli-01-a-new-vue-project/src/components/FriendContact.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');
