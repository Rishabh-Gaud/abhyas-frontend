// components/Card.tsx

import React from 'react';

import { JobDescription } from '@/utils/types/problem';

type JobDescriptionLayoutProps = {
    jobdescriptions:JobDescription
}

const JobDescriptionLayout: React.FC<JobDescriptionLayoutProps> = ({ jobdescriptions }) => {

    
  const jobRequirementsArray = jobdescriptions.jobRequirements.split('\n');

  
  const keySkillsArray = jobdescriptions.keySkills.split(',');
  return (
    <div>
    <div className="max-w-screen-sm mx-auto my-4 rounded-lg p-4 m-4 shadow-md ">
      
        <h2 className="text-xl font-bold">{jobdescriptions.position}</h2>
        <p className="text-gray-600">{jobdescriptions.company}</p>
        <div className="flex items-center mt-2">
          <div >
            <span className="text-sm border-r pr-2">Experience: {jobdescriptions.experience}</span>
          <span className="text-sm  p-2">Salary: {jobdescriptions.salary}</span>
          </div>
        </div>
        <div className="text-sm">Location: {jobdescriptions.location}</div>
        <hr className="my-2 border-gray-300" />
        <div className="text-sm mt-2">
          <span className="border-r pr-2">Posted: {jobdescriptions.postedDuration}</span>
          <span className="pl-2 border-r pr-2">Openings: {jobdescriptions.openings}</span>
          <span className="pl-2">Applicants: {jobdescriptions.applicants}</span>
          <span className="flex justify-end ">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
        Apply
      </button>
      </span>
        </div>
        
      
      
    </div>
    {/* this for job description tab. */}
    
    
    <div className="max-w-screen-sm mx-auto my-4 rounded-lg p-4 m-4 mt-2 shadow-md ">

    <div className="font-bold">Job Description</div>
    <div className="text-sm">{jobdescriptions.jobDescription}</div>
    <div className="text-sm pt-2 pb-2">
        <span className="font-bold">Role:</span> {jobdescriptions.role}
      </div>  

      <div className="text-sm pt-2 pb-2">
        <span className="font-bold">Industry Type:</span> {jobdescriptions.industryType}
      </div>

      <div className="text-sm pt-2 pb-2">
        <span className="font-bold">Employment Type:</span> {jobdescriptions.employmentType}
      </div>
        
      <div className="text-sm pt-2 pb-2">
        <span className="font-bold">Role Category:</span> {jobdescriptions.roleCategory}
      </div>
      
      
    </div>

    {/* this for job requirement tab */}

    <div className="max-w-screen-sm mx-auto my-4 rounded-lg p-4 m-4 mt-2 shadow-md ">

    <div className="font-bold">Job Requirements</div>
        {jobRequirementsArray.map((requirement, index) => (
          <div key={index} className="text-sm pt-2 pb-2">
            {requirement.trim()} {/* Trim any leading/trailing spaces */}
          </div>
        ))}

    <div className="font-bold">Education</div>
        <div className="text-sm pt-2 pb-2">{jobdescriptions.education}</div>

        <div className="font-bold mb-2">Key Skills</div>
        {keySkillsArray.map((skill, index) => (
          <span key={index} className="bg-gray-200 mr-2 p-2 rounded-lg">
            {skill} 
          </span>
        ))}
      
    </div>

    



    </div>

    
  );
};

export default JobDescriptionLayout;
