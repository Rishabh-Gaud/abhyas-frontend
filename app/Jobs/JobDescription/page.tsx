

import React from 'react';
import CompanyLayout from "@/components/Layouts/CompanyLayout";
import { jobdescription } from '@/utils/problems/page';
import { JobDescription } from '@/utils/types/problem';
import JobDescriptionLayout from '@/components/Layouts/JobDescriptionLayout';
import { companyinfo } from '@/utils/problems/page';


const Home: React.FC = () => {
  

  return (
    <div className = "gb-gray-200">
      <JobDescriptionLayout jobdescriptions={jobdescription} />

      <div className="max-w-screen-sm mx-auto my-4 rounded-lg p-4 m-4 mt-2 shadow-md ">

      <CompanyLayout companyinformation={companyinfo} />
      </div>
    </div>
  );
};

export default Home;
