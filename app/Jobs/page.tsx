"use client"
import ExternalJobCards from "@/components/cards/ExternalJobCard";
// import { Jobs } from "@/utils/types/problem";
// import {jobs} from "@/utils/problems/page"
import { useEffect, useState } from "react";
import axios from "axios";

const BaseURL = process.env.BaseURL;

const Jobs = () => {

const jobs = useGetJobs();
    
    return(
        <div>
           
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

function useGetJobs() {
	const [problems, setProblems] = useState();

	useEffect(() => {
		const getProblems = async () => {
			

		try {
			const response = await axios.get(BaseURL + 'jobs/');
			console.log("response: ", response);
			console.log(response.data);
			setProblems(response.data.data);
			
		} catch (error: any) {
			// toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
		
		}
	
		};

		getProblems();
	}, );
	return problems;

}