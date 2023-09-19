"use client"
import ExternalJobCards from "@/components/cards/ExternalJobCard";
// import { Jobs } from "@/utils/types/problem";
// import {jobs} from "@/utils/problems/page"
import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "@/components/Navbar/Topbar";

const BaseURL = process.env.BaseURL;

const Jobs = () => {
	const [loadingJobs, setLoadingJobs] = useState(true);
	const jobs = useGetJobs(setLoadingJobs);

	useEffect(() => {

	}, [jobs]);


console.log(jobs);

    
    return(
        <div>
			<Topbar/>
            {loadingJobs && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
            {jobs && (<div>
    
                {(jobs as any).map((job:any,index: number)=>{
                    return(
                    
                        <ExternalJobCards key = {index} job = {job}/>
                    );
                })}
            </div>)}

        </div>
    );
};

export default Jobs;

function useGetJobs(setLoadingJobs: React.Dispatch<React.SetStateAction<boolean>>) {
	const [jobs, setJobs] = useState();

	useEffect(() => {
		const getJobs = async () => {
			setLoadingJobs(true);
			

		try {
			const response = await axios.get(BaseURL + 'jobs/');
			console.log("response: ", response);
			console.log(response.data);
			setJobs(response.data);
			
		} catch (error: any) {
			// toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
		
		}
		setLoadingJobs(false);
	
		};

		getJobs();
	}, [setLoadingJobs]);
	return jobs;

}


const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-gray-800'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-gray-800'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-gray-800'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-gray-800'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};