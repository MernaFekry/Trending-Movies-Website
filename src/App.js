import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';


function App() {

  const router = createBrowserRouter([

    {path:'' , element:<Main /> , children:[

        {path:'' , element:<Home/>},
        {path:'home' , element:<Home/>},
        {path:'login' , element:<Login/>},
        {path:'register' , element:<Register/>},
        {path:'*' , element:<NotFound/>},

    ]}



  ])


  return <>

    <RouterProvider router={router}/>

    {/* <Navbar /> */}

    {/* <Register /> */}
  
  </>
}

export default App;
