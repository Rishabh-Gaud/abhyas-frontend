// pages/index.tsx
"use client"
import Topbar from "@/components/Navbar/Topbar";
import { JobPosting,CompanyInfo } from "@/utils/types/problem";
import {jobpostings,companyinfo} from "@/utils/problems/page"
import CompanyLayout from "@/components/Layouts/CompanyLayout";
import ClickableCard from "@/components/cards/InternalJobCard";

const Home = () => {
  
  return(

	<div className=" bg-gray-200 z-0">
    <Topbar/>
   <div>
   <CompanyLayout companyinformation={companyinfo} />
   </div>

  <div >
	<div className="max-w-screen-md mx-auto my-4  text-xl font-bold flex item-center justify center">Job Opennings Posted By Company</div>
         {jobpostings.map((jobposting:JobPosting, index:number)=>{

        return(
          <ClickableCard key = {index} jobposting = {jobposting}/>
        );

         })}
  
  
</div>
</div>
  );
};

export default Home;
