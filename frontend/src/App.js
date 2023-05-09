
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//import pages
import Login from './pages/Login/Login';
import Dashboard from './pages/dashboard/Dashboard';

//root router
const router = createBrowserRouter ([
  {
    path: '/',
    element: <Login/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>

  }
])

function App() {
  return (
   <main>
    <RouterProvider router = {router}></RouterProvider>
   </main>
    
  );
}

export default App;
