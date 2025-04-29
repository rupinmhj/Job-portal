import {DarkLight,ThemeProvider} from '../src/Components/DarkLight'
// import Demo from "./Components/Demo"
import Header from './Components/Header'
import Search from './Components/Search'
import LearnMore from './Components/LearnMore'
import Category from './Components/Category'
import MostPopular from './Components/MostPopular'
import Footer  from './Components/Footer'
import Company from './Components/Company'
const App = () => {
  return (
    <div >
      <ThemeProvider>
        {/* <DarkLight /> */}
        {/* <Demo /> */}

        <Header />
        <Search />
        <LearnMore />
        <Category />
        <MostPopular />
        <Company/>
        <Footer/>

      </ThemeProvider>
    </div>
  )
}

export default App
