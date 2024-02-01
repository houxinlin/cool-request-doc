import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ba6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '47e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '116'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd23'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4ea'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '732'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '848'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0e3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '36b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2f4'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2ed'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '349'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c8e'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '35f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '55f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '712'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '023'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '63a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b84'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '60a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '979'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '682'),
            routes: [
              {
                path: '/docs/category/第三方接入',
                component: ComponentCreator('/docs/category/第三方接入', '176'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/前后置脚本',
                component: ComponentCreator('/docs/category/前后置脚本', '407'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/使用教程',
                component: ComponentCreator('/docs/category/使用教程', 'a55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/three-part/apifox',
                component: ComponentCreator('/docs/three-part/apifox', '7c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/request',
                component: ComponentCreator('/docs/tutorial-basics/request', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/request_by_reflex',
                component: ComponentCreator('/docs/tutorial-basics/request_by_reflex', '73b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/request_timer',
                component: ComponentCreator('/docs/tutorial-basics/request_timer', '5f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/spring_gateway',
                component: ComponentCreator('/docs/tutorial-basics/spring_gateway', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/startup',
                component: ComponentCreator('/docs/tutorial-basics/startup', 'c6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/static_server',
                component: ComponentCreator('/docs/tutorial-basics/static_server', '3cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-script/common',
                component: ComponentCreator('/docs/tutorial-script/common', '074'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-script/script',
                component: ComponentCreator('/docs/tutorial-script/script', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-script/script-pos',
                component: ComponentCreator('/docs/tutorial-script/script-pos', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-script/script-pre',
                component: ComponentCreator('/docs/tutorial-script/script-pre', '6c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '5f0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
