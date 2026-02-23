import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MusicContextStoreProvider } from './store/music_app-store.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MusicContextStoreProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </MusicContextStoreProvider>
  </Provider>
)
