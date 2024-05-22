import { sun,createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets/index';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/admin/dashboard',
  },
  {
    name: 'project',
    imgUrl: createCampaign,
    link: '/admin/project',
  },
  {
    name: 'addProject',
    imgUrl: payment,
    link: '/admin/project/add',
    disabled: true,
  },
  {
    name: 'transaction',
    imgUrl: withdraw,
    link: '/admin/transaction',
  },
  {
    name: 'beneficiary',
    imgUrl: profile,
    link: '/admin/beneficiary',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
