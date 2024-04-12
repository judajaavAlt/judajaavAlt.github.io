import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import ArchivedUsers from './components/ArchivedUsers.vue'
import CreateUsers from './components/CreateUser.vue'
import ListUsers from './components/ListUsers.vue'
import User from './components/User.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/user', component: User },
        { path: '/archived_users', component: ArchivedUsers },
        { path: '/list_users', component: ListUsers },
        { path: '/create_user', component: CreateUsers },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')

