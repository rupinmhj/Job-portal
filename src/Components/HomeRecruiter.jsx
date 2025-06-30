// src/Components/HomeRecruiter.jsx
import React, { useEffect, useState } from 'react';
import HeaderRecruiter from './HeaderRecruiter';
import SearchRecruiter from './SearchRecruiter';
import LearnMoreRecruiter from './LearnMoreRecruiter';
import CategoryRecruiter from './CategoryRecruiter';
import MostPopular from './MostPopular';
import Company from './Company';
import FooterRecruiter from './FooterRecruiter';
import SideBarRecruiter from './SidebarRecruiter';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RecruitmentStats } from './RecruitmentStats';
const HomeRecruiter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isComponentOpen,setIsComponentOpen]=useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
  }, [isSidebarOpen]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3,delay:0.15 }}
  >
    <div className='relative h-screen overflow-y-scroll scroll-container '>
      {/* Main content */}
      <div className="relative z-10 ">
        <HeaderRecruiter
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
        />
        <SearchRecruiter />
        <LearnMoreRecruiter />
        <RecruitmentStats />
        <CategoryRecruiter />
        {/* <MostPopular /> */}
        {/* <Company /> */}
        <FooterRecruiter />
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
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed z-40 top-0 left-0 h-full"
    >
      <SideBarRecruiter
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
    </motion.div>
  );
};

export default HomeRecruiter;
