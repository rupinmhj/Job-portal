import {DarkLight,ThemeProvider} from '../src/Components/DarkLight'
import React, { useState } from 'react';
// import Demo from "./Components/Demo"
import Header from './Components/Header'
import Search from './Components/Search'
import LearnMore from './Components/LearnMore'
import Category from './Components/Category'
import MostPopular from './Components/MostPopular'
import Footer  from './Components/Footer'
import Company from './Components/Company'
import SideBar from './Components/SideBar';
const App = () => {
  const [isSidebarOpen,setIsSidebarOpen]=useState(false);
  return (
    <div className='relative'>
    <ThemeProvider>
  {/* Main content: Header + other sections */}
  <div className="relative z-10 xl:mx-[10px]">
    <Header
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
    />
    <Search />
    <LearnMore />
    <Category />
    <MostPopular />
    <Company />
    <Footer />
  </div>

  {/* Blur everything behind sidebar */}
  {isSidebarOpen && (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
      onClick={() => setIsSidebarOpen(false)}
    ></div>
  )}

  {/* Sidebar always on top of blur */}
  {isSidebarOpen && (
    <div className="fixed z-40 top-0 left-0 h-full">
      <SideBar />
    </div>
  )}
</ThemeProvider>


    </div>
  )
}

export default App
