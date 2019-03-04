import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import Dashboard from '@/pages/Dashboard/Dashboard';
import AccountDetails from '@/pages/Account/AccountDetails';
import CreditCardDetails from '@/pages/Account/CreditCardDetails';

import PayeesPage from '@/pages/Payees/Payees';
import CreatePayeesPage from '@/pages/Payees/CreatePayee';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'accounts/:accountId',
          name: 'AccountDetails',
          component: AccountDetails,
        },
        {
          path: 'creditcards/:accountId',
          name: 'CreditCardDetails',
          component: CreditCardDetails,
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'payees',
          name: 'PayeesPage',
          component: PayeesPage,
        },
        {
          path: 'payees/:payeeId',
          name: 'CreatePayees',
          component: CreatePayeesPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
      ],
    },
  ],
});
