import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '959'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ce0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '1c7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '81d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '387'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '0cb'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd49'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ebf'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '3d8'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '3be'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '581'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '734'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '12b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '949'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e7a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'cdf'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a0b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e4f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6d7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '23d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1d8'),
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
    component: ComponentCreator('/', '298'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
