import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/main'
import Cocktails from './components/cocktail-list'
import CocktailData from './components/cocktaildata'

import Nav from './components/nav'
import Footer from './components/footer'


const App = () => {
  return (

  <BrowserRouter>
    <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/cocktails' element={<Cocktails />} />
          <Route path='/' Component={Cocktails} />
          <Route path='/cocktails/:name' Component={CocktailData} />
        </Routes>
      </main>
    <Footer />
  </BrowserRouter>
  )
}

  export default App