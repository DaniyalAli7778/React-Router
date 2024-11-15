import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import Home from './Components/Home/Home.js';
 import User1 from './Components/User/User1.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import About from './Components/Home/About.js';
import Contactus from './Components/Contactus/Contactus.js';
// const router = createBrowserRouter([
//   {path:'/',
//     element:<Layout/>,

//     children:[
//       {
//         path:"",
//         element:<Home/>,
//       },{

//         path:"about",
//         element:<About/>
//       },{ 
//         path:"Contactus",
//         element:<Contactus/>
//       }
//     ]

//   }
// ])
 const router = createBrowserRouter( 
createRoutesFromElements(

  <Route path='/' element={<Layout />}>
<Route  path='' element={<Home />}/>
 <Route path='about' element={<About />}/>
 <Route  path='Contactus' element={<Contactus />}/>
 <Route  path='User/:userid' element={<User1/>}/>
</Route>
   
)

  )
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
