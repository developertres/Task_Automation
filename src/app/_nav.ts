import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Tracks'
  },
  {
    name: 'Users',
    url: '/theme/users',
    icon: 'icon-people'
  },
  {
    name: 'Service Desk Track',
    url: '/theme/servicedesk',
    icon: 'icon-support'
  },
  {
    name: 'RDS Track',
    url: '/theme/rds',
    icon: 'icon-globe-alt'
  },
  {
    title: true,
    name: 'Accounts'
  },
  {
    name: 'Account Request',
    url: '/base/forms',
    icon: 'icon-notebook'
  },
  {
    name: 'Account Request II',
    url: '/base/collapses',
    icon: 'icon-doc'
  }
  
];
