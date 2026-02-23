import './App.css'
import Header from './components/header'
import MainContainer from './components/mainContainer'
import { FoodDataStoreContext } from './store/food-store-context-store'

function App() {

  return (
    <>
      <center>
        <FoodDataStoreContext>
          <Header/>
          <MainContainer/>
        </FoodDataStoreContext>
      </center>
    </>
  )
};

export default App
