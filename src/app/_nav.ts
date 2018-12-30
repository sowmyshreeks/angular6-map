export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fas fa-tachometer-alt',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  // {
  //   title: true,
  //   name: 'Home',
  //   icon:'fa fa-home'
  // },
  // {
  //   name: 'My Plans',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  {
    name: 'Home',
    url: '/base',
    icon: 'fa fa-home',
    children: [
      {
        name: 'My Plans',
        url: '/base/myPlan',
        // icon: 'icon-puzzle'
      },
      {
        name: 'Customers',
        url: '/base/customer',
        // icon: 'icon-puzzle'
      },
      // {
      //   name: 'Location',
      //   url: '/base/collapses',
      //   icon: 'icon-puzzle'
      // },
    ]
  },
  {
    name: 'Expenses',
    url: '/expenses',
    icon: 'far fa-money-bill-alt',
    children: [
      {
        name: 'Travel Report',
        url: '/expenses/travelReport'
        // icon: 'icon-cursor'
      },
      // {
      //   name: 'Claims',
      //   url: '/buttons/dropdowns',
      //   icon: 'icon-cursor'
      // },
      {
        name: 'Attendance',
        url: '/expenses/attendance',
        // icon: 'icon-cursor'
      }
    ]
  },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  {
    name: 'Reports',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Analytics',
        url: '/icons/coreui-icons',
        // icon: 'icon-star',
        // badge: {
        //   variant: 'success',
        //   text: 'NEW'
        // }
      },
      {
        name: 'Report',
        url: '/icons/flags',
        // icon: 'icon-star'
      },
    ]
  },
  {
      name: 'Settings',
      url: '/charts',
      icon: 'fa fa-cog'
    },
];
