import React from 'react';
import images from '../assets/images';

const CompanyDetail = ({ companyDetail }) => {
  if (!companyDetail) return null;

  return (
    <div className="dark:text-white">
      <div className="mt-[24px]">
        <h1 className="text-[16px] font-bold leading-[19px]">About this Company</h1>
        <p className="mt-[14px] text-[12px] dark:text-white text-[#12192799]">
          {companyDetail.about}
        </p>
      </div>

      <div className="mt-[24px]">
        <InfoRow icon={images.web} label="Website" value={companyDetail.website} />
        <InfoRow icon={images.location3} label="Headquarters" value={companyDetail.headquarter} />
        <InfoRow icon={images.calender3} label="Founded" value={companyDetail.founded || "N/A"} />
        <InfoRow icon={images.people} label="Size" value={companyDetail.size || "N/A"} />
        <InfoRow icon={images.wallet2} label="Revenue" value={companyDetail.revenue || "N/A"} />
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex gap-[12px] items-center mb-[16px]">
    <img src={icon} alt="" />
    <div className="flex w-full justify-between items-center">
      <h1 className="font-semibold text-[15px] leading-[18px]">{label}</h1>
      <h1 className="text-[#12192799] dark:text-white text-[14px] leading-[24px] font-medium">{value}</h1>
    </div>
  </div>
);

export default CompanyDetail;
