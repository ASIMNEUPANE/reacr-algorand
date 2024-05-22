import { sun,createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets/index';

export const navlinks = [
  {
    name: 'Dashboard',
    imgUrl: dashboard,
    link: '/admin/dashboard',
  },
  {
    name: 'Project',
    imgUrl: createCampaign,
    link: '/admin/project',
  },
  {
    name: 'Add Project',
    imgUrl: payment,
    link: '/admin/project/add',
  },
  {
    name: 'Transaction',
    imgUrl: withdraw,
    link: '/admin/transaction',
  },
  {
    name: 'Beneficiary',
    imgUrl: profile,
    link: '/admin/beneficiary',
  },
  // {
  //   name: 'logout',
  //   imgUrl: logout,
  //   link: '/',
  //   disabled: true,
  // },
];
