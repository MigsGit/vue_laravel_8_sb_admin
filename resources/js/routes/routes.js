import IndexComponent from '../pages/Index.vue';
import Dashboard from '../pages/Dashboard.vue';
import Module from '../pages/Edocs.vue';
import UserMaster from '../pages/UserMaster.vue';
import Emailer from '../pages/Mailer.vue';
import Login from '../pages/Login.vue'
import ModalSample from '../components/ModalSample.vue'



export default [
    {
        path: '/docu-app',
        component: Login,
        name: 'login',
    },
    // {
    //     path: '/modal',
    //     component: ModalSample,
    //     name: 'modal',
    // },
    {
        path: '/docu-app/main/',
        component: IndexComponent,
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: 'module',
                name: 'module',
                component: Module,
            },
            {
                path: 'modal',
                component: ModalSample,
                name: 'modal',
            },
            {
                path: 'user_master',
                component: UserMaster,
                name: 'user_master',
            },
            {
                path: 'emailer',
                component: Emailer,
                name: 'emailer',
            }

        ],
    }
];
