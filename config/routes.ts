export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/identity',
    name: '身份管理',
    icon: 'UserOutlined',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/identity/user-manage', name: '用户管理', icon: 'TeamOutlined', component: './Menu/Identity/UserManage' },
      { path: '/identity/role-assign', name: '角色分配', icon: 'SafetyOutlined', component: './Menu/Identity/RoleAssign' },
      { path: '/identity/user-group-manage', name: '用户组管理', icon: 'GroupOutlined', component: './Menu/Identity/UserGroupManage' },
      { component: './404' },
    ],
  },
  {
    path: '/resource',
    name: '应用管理',
    // icon: 'AppstoreOutlined', // 应用相关
    icon: 'UserOutlined', // 应用相关
    routes: [
      // PlusCircleOutlined  KeyOutlined  GroupOutlined
      { path: '/resource/resource-manage', name: '资源管理', icon: 'GroupOutlined', component: './Menu/Resource/ResourceManage' },
      { path: '/resource/resource-auth', name: '应用授权', icon: 'GroupOutlined', component: './Menu/Resource/ResourceAuth' },
      { path: '/resource/resource-group-manage', name: '资源组管理', icon: 'GroupOutlined', component: './Menu/Resource/ResourceGroupManage' },
      { component: './404' },
    ],
  },
  // {
  //   path: '/admin-access',
  //   name: '访问控制',
  //   icon: 'LockOutlined', // 安全相关
  //   routes: [
  //     { path: '/admin-access/access-policy', name: '访问策略', icon: 'FileProtectOutlined', component: './Admin/Access/Policy' },
  //     { path: '/admin-access/ip-whitelist', name: 'IP 白名单', icon: 'GlobalOutlined', component: './Admin/Access/IPWhitelist' },
  //     { path: '/admin-access/device-manage', name: '设备管理', icon: 'MobileOutlined', component: './Admin/Access/DeviceManage' },
  //     { component: './404' },
  //   ],
  // },
  // {
  //   path: '/admin-permission',
  //   name: '权限管理',
  //   icon: 'KeyOutlined', // 权限相关
  //   routes: [
  //     { path: '/admin-permission/role-manage', name: '角色管理', icon: 'UserSwitchOutlined', component: './Admin/Permission/RoleManage' },
  //     { path: '/admin-permission/resource-manage', name: '资源管理', icon: 'DatabaseOutlined', component: './Admin/Permission/ResourceManage' },
  //     { path: '/admin-permission/permission-assign', name: '权限分配', icon: 'SafetyCertificateOutlined', component: './Admin/Permission/Assign' },
  //     { path: '/admin-permission/audit-log', name: '审计日志', icon: 'AuditOutlined', component: './Admin/Permission/AuditLog' },
  //     { component: './404' },
  //   ],
  // },
  // {
  //   path: '/admin-system',
  //   name: '系统管理',
  //   icon: 'SettingOutlined', // 系统设置
  //   routes: [
  //     { path: '/admin-system/settings', name: '系统设置', icon: 'ToolOutlined', component: './Admin/System/Settings' },
  //     { path: '/admin-system/operation-log', name: '操作日志', icon: 'OrderedListOutlined', component: './Admin/System/OperationLog' },
  //     { path: '/admin-system/schedule', name: '任务调度', icon: 'ScheduleOutlined', component: './Admin/System/Schedule' },
  //     { path: '/admin-system/health-check', name: '健康检查', icon: 'HeartOutlined', component: './Admin/System/HealthCheck' },
  //     { component: './404' },
  //   ],
  // },

  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
