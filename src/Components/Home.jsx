// src/Components/Home.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Search from './Search';
import LearnMore from './LearnMore';
import Category from './Category';
import MostPopular from './MostPopular';
import Company from './Company';
import Footer from './Footer';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isComponentOpen,setIsComponentOpen]=useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
  }, [isSidebarOpen]);

  return (
    <div className='relative '>
      {/* Main content */}
      <div className="relative z-10 ">
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

      {/* Blur Background */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {isSidebarOpen && isPageOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setIsPageOpen(false)}
        ></div>
      )}
      {isSidebarOpen && isComponentOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setIsComponentOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <AnimatePresence>
  {isSidebarOpen && (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x:0}}
      exit={{ x: -300 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="fixed z-40 top-0 left-0 h-full"
    >
      <SideBar
        isPageOpen={isPageOpen}
        setIsPageOpen={setIsPageOpen}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isComponentOpen={isComponentOpen}
        setIsComponentOpen={setIsComponentOpen}
      />
      <Outlet />
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default Home;
