// HomeRecruiter.jsx
import React, { useEffect, useState } from 'react';
import HeaderRecruiter from './HeaderRecruiter';
import SearchRecruiter from './SearchRecruiter';
import LearnMoreRecruiter from './LearnMoreRecruiter';
import CategoryRecruiter from './CategoryRecruiter';
import FooterRecruiter from './FooterRecruiter';
import SideBarRecruiter from './SidebarRecruiter';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RecruitmentStats } from './RecruitmentStats';
import useAxiosAuth from "../hooks/useAxiosAuth";

const HomeRecruiter = () => {
  const api = useAxiosAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isComponentOpen, setIsComponentOpen] = useState(false);

  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
  }, [isSidebarOpen]);

  // Fetch once here
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const res = await api.get("/dashboards/jobcreator/");
        setStatsData(res.data);
         setTimeout(()=>{
          setLoading(false)
        },1000);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError(err.message);
      } finally {
                 setLoading(true)
      }
    };

    fetchStats();
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <div className='relative h-screen overflow-y-scroll scroll-container'>
        {/* Main content */}
        <div className="relative z-10 ">
          <HeaderRecruiter
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
          />
          <SearchRecruiter />
          <LearnMoreRecruiter statsData={statsData} />
          <RecruitmentStats statsData={statsData} loading={loading} error={error} />
          <CategoryRecruiter />
          <FooterRecruiter />
        </div>

        {/* Overlays and Sidebar */}
        {(isSidebarOpen || isPageOpen || isComponentOpen) && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            onClick={() => {
              setIsSidebarOpen(false);
              setIsPageOpen(false);
              setIsComponentOpen(false);
            }}
          />
        )}

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
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
