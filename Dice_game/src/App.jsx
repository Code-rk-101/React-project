// import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { GameStoreContext } from './store/gameStore';

function App() 
{

  // const navigate = useNavigate();
  // const location = useLocation();
  // const reloadFlag = useRef(
  //   performance.getEntriesByType('navigation')[0]?.type === 'reload'
  // );

  // useEffect(() => {
  //   if (reloadFlag.current && location.pathname === '/game') {
  //     reloadFlag.current = false; // Consume the reload flag so clicks won't trigger it
  //     navigate('/', { replace: true }) // Force refreshed game route back to the home container
  //   }
  // }, [location.pathname, navigate])

  return (
    <>
      <GameStoreContext>
        <main className="container">
          <Outlet/>
        </main>
      </GameStoreContext>
    </>
  )
}

export default App
