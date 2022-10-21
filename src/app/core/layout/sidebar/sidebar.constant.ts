import { PERMISSION_CONSTANT } from '@shared/constants/Permisstion.constant';
import { ROUTER_UTILS } from '@shared/utils/router.utils';

export const SidebarConstant = [
  {
    path: ROUTER_UTILS.base.dashboard,
    title: 'sidebar.dashboard',
    icon: 'appstore',
    root: true,
    // authorities: [],
  },
  
  {
    path: ROUTER_UTILS.scheduler.root,
    title: 'sidebar.scheduler',
    icon: 'schedule',
    submenu: [
      {
        path: `${ROUTER_UTILS.scheduler.root}/${ROUTER_UTILS.scheduler.listCourse}`,
        title: 'sidebar.courses',
        root: true,
      },

        {
        path: `${ROUTER_UTILS.scheduler.root}/${ROUTER_UTILS.room1.listRoom}`,
        title: 'sidebar.rooms',
        root: true,
      },

      {
        path: `${ROUTER_UTILS.scheduler.root}/${ROUTER_UTILS.scheduler.tkb}`,
        title: 'sidebar.tkb',
        root: true,
      },

      {
        path: `${ROUTER_UTILS.scheduler.root}/${ROUTER_UTILS.scheduler.viewschedule}`,
        title: 'sidebar.viewschedule',
        root: true,
      }
    ]
  },

  {
    path: ROUTER_UTILS.module.root,
    title: 'sidebar.modules',
    icon: 'book',
    submenu: [
      {
        path: `${ROUTER_UTILS.module.root}/${ROUTER_UTILS.module.listModule}`,
        title: 'sidebar.modules',
        root: true,
      },
    ]
  },

  {
    path: ROUTER_UTILS.instructorSchedule.root,
    title: 'sidebar.instructorSchedule',
    icon: 'schedule',
    submenu: [
      {
        path: `${ROUTER_UTILS.instructorSchedule.root}/${ROUTER_UTILS.instructorSchedule.tkb}`,
        title: 'sidebar.instructorSchedule',
        root: true,
      },
    ]
  },

  {
    path: ROUTER_UTILS.scheduler.root,
    title: 'sidebar.rooms',
    icon: 'user',
    submenu: [
      {
        path: `${ROUTER_UTILS.scheduler.root}/${ROUTER_UTILS.room1.listRoom}`,
        title: 'sidebar.rooms',
        root: true,
      },
    ]
  },


];
