// components/CompanyLayout.tsx

import React from 'react';
import { CompanyInfo } from '@/utils/types/problem';

interface CompanyLayoutProps {
  companyinformation: CompanyInfo;
}

const CompanyLayout: React.FC<CompanyLayoutProps> = ({ companyinformation }) => {
  return (
    <div className="flex bg-yellow-100 shadow-md p-4 rounded-md flex flex-col sm:flex-row  items-center">
      {/* Left side for logo and company name */}
      <div className="w-1/3 p-8">
        {/* Use a circular logo container */}
        <div className="w-32 h-32 rounded-full overflow-hidden bg-white mx-auto mb-4 flex justify-center items-center">
          {companyinformation.logoSrc ? (
            <img src={companyinformation.logoSrc} alt="Company Logo" className="w-full h-auto" />
          ) : (
            <div className="text-gray-300 text-2xl">No Logo</div>
          )}
        </div>
        <h1 className="text-2xl font-bold flex justify-center items-center">{companyinformation.companyName}</h1>
      </div>

      {/* Right side for company description */}
      <div className="w-2/3 p-8">
        <p className="text-gray-700">{companyinformation.description}</p>
      </div>
    </div>
  );
};

export default CompanyLayout;
