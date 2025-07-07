import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaCalendarAlt, FaTimes } from 'react-icons/fa';

const ApplicationPreview = ({ 
  applicant, 
  isOpen, 
  onClose, 
  onStatusChange, 
  statusOptions,
  getStatusColor 
}) => {
  if (!applicant) return null;

  const handleStatusChange = (newStatus) => {
    onStatusChange(applicant.id, newStatus);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 font-urbanist">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="h-screen overflow-y-scroll scroll-container bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-[#1e293b] px-6 py-2  dark:border-gray-600 rounded-t-2xl ">
              <div className="flex items-center justify-end ">
                {/* <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Applicant Preview
                </h2> */}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <FaTimes className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-1 space-y-6 ">
              {/* Profile Section */}
              <div className="text-center">
                <img
                  src={applicant.avatar}
                  alt={applicant.candidateName}
                  className="h-20 w-20 rounded-full border-4 border-blue-200 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {applicant.candidateName}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {applicant.position}
                </p>
                <div className="mt-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(applicant.status)}`}>
                    Current Status: {applicant.status}
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FaEnvelope className="mr-3 h-4 w-4 text-black/80 dark:text-gray-300" />
                    {applicant.email}
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FaPhone className="mr-3 h-4 w-4 text-black/80 dark:text-gray-300" />
                    {applicant.phone}
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FaCalendarAlt className="mr-3 h-4 w-4 text-black/80 dark:text-gray-300" />
                    Applied: {applicant.appliedDate}
                  </div>
                </div>
              </div>

              {/* Experience & Skills */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Experience</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    {applicant.experience}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {applicant.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Change Section */}
              <div className="border-t dark:border-gray-600 pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">
                  Change Application Status
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => handleStatusChange(status)}
                      disabled={status === applicant.status}
                      className={`
                        px-3 py-2 text-xs font-medium rounded-lg transition-all
                        ${status === applicant.status 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:scale-105 hover:shadow-md'
                        }
                        ${getStatusColor(status)}
                      `}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationPreview;