import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/main'
import Cocktails from './components/cocktail-list'

import Nav from './components/nav'
import Footer from './components/footer'


const App = () => {
  return (

  <BrowserRouter>
  <div id="img" style={{ 
    backgroundImage: `url("https://yesofcorsa.com/wp-content/uploads/2017/12/Alcoholic-Cocktails-Wallpaper-Full-HD.jpg")` 
  }}>
    <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cocktails' element={<Cocktails />} />
        </Routes>
      </main>
    <Footer />
    </div>
  </BrowserRouter>
  )
}

  export default App