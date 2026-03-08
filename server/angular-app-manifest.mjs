
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gamer-task-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/gamer-task-app/login",
    "route": "/gamer-task-app"
  },
  {
    "renderMode": 2,
    "route": "/gamer-task-app/login"
  },
  {
    "renderMode": 2,
    "route": "/gamer-task-app/register"
  },
  {
    "renderMode": 2,
    "route": "/gamer-task-app/profile"
  },
  {
    "renderMode": 2,
    "route": "/gamer-task-app/tasks"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 820, hash: '035289d839cb20e31c547604fada2df2b1d77ec147007af8cb8fc1f5147326e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '362b781e90c0e64e94c2703f29d2f471aecca48288fce3c1bbd6ecda3c3d2c2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 5727, hash: '91fb52b1bba2db4d341237eec318e1d8a790011b7024ebf44d7d631738149276', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 7526, hash: '04d6899ea3b3d48b88b5c2de2455f4ece747e82b8c85bc28f0d1af5c50fcd5a6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 5965, hash: '39a1b9f860e860bc1490bc3eeac458959a4f21f5dbaa2a42ef333a9e15f2f02f', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7855, hash: '6667e615b59323446e06609e97e47dcbb22e3d243734c573f32a0dce092f384e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-SPWQBDZJ.css': {size: 255, hash: 'qGqlc+1tp68', text: () => import('./assets-chunks/styles-SPWQBDZJ_css.mjs').then(m => m.default)}
  },
};
