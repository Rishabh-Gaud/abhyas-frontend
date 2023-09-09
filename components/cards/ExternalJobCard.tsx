import React from 'react';

// import { Jobs } from '@/utils/types/problem';

type ExternalJobCardProps = {
  job: any;
};

const ExternalJobCards: React.FC<ExternalJobCardProps> = ({ job }) => {
  return (
    <div className="max-w-screen-md mx-auto my-4 bg-white shadow-md p-4 rounded-md">
      <div className="ExternalJobCard_jobInfoMobile__3oT_c flex flex-col sm:flex-row  items-center">
        <div className = "sm:w-1/2 p-4">
          <div className=" flex flex-col sm:flex-row  items-center p-4 ">
            <div className="mb-4 sm:mr-4">
              <img
                src={job.imageUrl}
                alt={job.companyName}
                className="w-16 h-16 sm: w-18 h-18 object-cover rounded-full"
              />
            </div>
            <div className="ExternalJobCard_companyDetails__3GcwQ">
              <div className="font-bold ExternalJobCard_lightText__12EQI ExternalJobCard_darkText__356ok">
                {job.companyName}
              </div>
              <div className="font-bold ExternalJobCard_darkText__356ok">{job.title}</div>
              <div className="ExternalJobCard_lightText__12EQI">{job.location}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 p-4">
        {(job.skills as any).split(', ').map((skill:string, index:number) => (
          <div
            key={index}
            className="bg-gray-200 p-2 rounded-lg"
          >
            {skill}
          </div>
        ))}
      </div>
        </div>
        <div className="sm:w-1/2 mt-4 mr-4 flex justify-end ">
          <div className="ExternalJobCard_infoTop__2taeb">
            
          </div>
          <div className="ExternalJobCard_infoBottom__1Rtjs">
            <div className="ExternalJobCard_infoBottomLeft__1jcGO">
              <div className="text-green-500">{job.type}</div>
              <span>{`Salary : ${job.salary}`}</span>
              <div>{`Experience : ${job.requiredExperience}`}</div>
            </div>
            <a
              href={job.redirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="Button_button__2Lf63 mt-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow flex justify-center items-center"  >
              Apply
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ExternalJobCards;
