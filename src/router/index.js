import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import LabDetails from '../views/LabDetails.vue';
import Login from '../views/Login.vue';
import RedeemVoucher from '../views/RedeemVoucher.vue';
import VoucherDetails from '../views/VoucherDetails.vue';
import VoucherSuccess from '../views/VoucherSuccess.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: Dashboard.name,
        component: Dashboard,
        meta: {
            auth: true
        },
        children: [
            {
                path: 'lab-details',
                component: LabDetails
            },
            {
                path: '/',
                name: 'RedeemVoucher',
                component: RedeemVoucher
            },
            {
                path: '/voucher/:id',
                name: 'VoucherDetails',
                component: VoucherDetails
            },
            {
                path: '/voucher/:id/success',
                name: 'VoucherSuccess',
                component: VoucherSuccess
            }
        ]
    },
    {
        path: '/login',
        name: Login.name,
        component: Login
    }
];

const router = new VueRouter({
    routes,
    base: process.env.APPLICATION_PATH,
    mode: process.env.HISTORY_MODE ? 'history' : 'hash'
});

export default router;
