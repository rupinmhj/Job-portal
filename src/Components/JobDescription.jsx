import React from "react";

const JobDescription = ({ jobDetail, companyDetail }) => {
  if (!jobDetail) return null;

  const { description, req_skills } = jobDetail;


  return (
    <div className="font-urbanist dark:text-white">
      {/* Job Description */}
      <div className="mt-[24px]">
        <h1 className="text-[16px] font-bold leading-[19px]">About the Role</h1>
        <div
          className="mt-[14px] text-[12px] text-[#12192799] dark:text-white"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* req_skills */}
      {req_skills && (
        <div className="mt-[24px]">
          <h1 className="text-[16px] font-bold leading-[19px]">Requirement Skill For The Role</h1>
          <div
            className="mt-[12px] text-[12px] text-[#12192799] dark:text-white space-y-2"
            dangerouslySetInnerHTML={{ __html: req_skills }}
          />
        </div>
      )}

    </div>
  );
};

export default JobDescription;
