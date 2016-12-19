import Layout from './container/Layout';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

 //indexRoute: {component: Page1},
export default [
  { path: "/", component: Layout, 
 
    childRoutes: [
      {path: "/page1", component: Page1},
      {path: "/page2", component: Page2}
    ]
  }
];
