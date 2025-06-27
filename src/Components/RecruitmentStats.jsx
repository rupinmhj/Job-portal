import { TrendingUp, Users, Briefcase, FileText } from "lucide-react";

export const RecruitmentStats = () => {
  const stats = [
    {
      title: "Open Positions",
      value: "8",
      change: "+2 this week",
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "New Applications",
      value: "24",
      change: "+15% from last week",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Candidates to Review",
      value: "12",
      change: "High priority",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Hire Rate",
      value: "23%",
      change: "+5% improvement",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
        <div className='max-w-[1024px] mx-auto px-[24px] mt-[24px] flex font-urbanist items-center font-urbanist'>

    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-2  w-full  ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border"
        >
          <div className="flex items-center justify-between  mb-2">
            <h3 className="text-md font-medium text-gray-600">{stat.title}</h3>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
        </div>
      ))}
    </div>
    </div>
    
  );
};
