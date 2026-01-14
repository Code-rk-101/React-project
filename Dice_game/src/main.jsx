import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Container from './components/homePage.jsx';
import GamePage from './components/gamePage.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/", 
      element:<App/>,
      children:
      [
        {
          path:"/", element: <Container/>
        },
        {
          path:"/game", element: <GamePage/>
        }
      ]
    }
  ]
);
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
