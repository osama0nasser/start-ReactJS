import './App.css'
import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import Home from './Home/Home'

function App() {

  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
      ]
    }
  ])

  return (<>
    <RouterProvider router={routes}></RouterProvider>
  </>)
}

export default App
