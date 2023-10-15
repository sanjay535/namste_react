// createElement(type, props, ...children)
/*  const heading1=React.createElement("h1",{style:{color:"red"}, className:"heading"},"Namste React!");
 const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(heading1);
 const anotherHeading1=React.createElement("h1",{},"Namste React, From another Heading!");
 const anotherRoot=ReactDOM.createRoot(document.getElementById("another-root"))
 anotherRoot.render(anotherHeading1); */

/* 
  Create Bellow snippiet

  <div class="Container">
   <p id="p1">React Tutorial</p>
   <p id="p2">It's all anbout React</p>
  </div>
 */
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppLayout from './src/components/AppLayout';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Body from './src/components/Body';
import Login from './src/pages/Login';
import Profile from './src/components/Profile.js';
import ClassComponent from './src/components/ClassTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
//   const p1=React.createElement('p', {id:"p1", key:1}, "React Tutorial");
//   const p2=React.createElement('p', {id:"p2", key:2}, "It's all anbout React");
//   const container=React.createElement('div', {className:"Container"}, [p1, p2]);
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<ClassComponent name={"Sanjay"} age="23"/>
      },
      {
        path:'/xyz',
        element:<ClassComponent/>
      },
      {
        path:'/about',
        element:<About/>,
        children:[
          {
            // path:'/profile', // it not gonna work
            path:'profile', // it will work
            element:<Profile/>
          }
        ]
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },
  
]);
root.render(<RouterProvider router={appRouter} />);
