import { TrendingUp, Users, Briefcase, FileText } from "lucide-react";
import { useEffect, useState } from "react";
export const RecruitmentStats = ({statsData,loading,error}) => {
  useEffect(()=>{
    console.log('statsRe',statsData)
  })
  const stats =statsData? [
    {
      title: "Open Positions",
      value: statsData.open_positions,
      change: `${statsData.week_comparison} this week`,
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "New Applications",
      value: statsData.new_applications,
      change: ` ${statsData.new_applications_diff_label} from last week`,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Applicants to Be Interviewed",
      value: statsData.applicants_to_interview?.length === 0 ? 0 : statsData.applicants_to_interview,
      change: "High priority",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Hire Rate",
      value: statsData.hire_rate,
      change: statsData.hire_rate_improvement,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]:[];

return (
  <div className="max-w-[1024px] mx-auto px-[24px] mt-[24px] flex font-urbanist items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2 w-full">
      {loading
        ? Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-[#1f2a44] dark:border-gray-800 rounded-xl shadow-sm border animate-pulse"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-6 w-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>
                <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
            ))
        : stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-[#1f2a44] dark:border-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow border"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-gray-600 dark:text-gray-300">
                  {stat.title}
                </h3>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-200">{stat.value}</div>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">{stat.change}</p>
            </div>
          ))}
    </div>
  </div>
);

};
