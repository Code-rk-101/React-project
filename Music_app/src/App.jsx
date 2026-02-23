import Home from './components/home/home'
import Liked from './components/liked/liked'
import Nav from './components/nav/nav'
import Playlist from './components/playlist/playlist'
import Search from './components/search/search'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { MusicContextStoreProvider } from './store/music_app-store'


function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/search' element = {<Search/>}/>
        <Route path='/playlist' element = {<Playlist/>}/>
        <Route path='/liked' element = {<Liked/>}/>    
      </Routes>
    </BrowserRouter>
  )
}

export default App
