export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

export type CompanyInfo = {

	logoSrc: string;
	companyName: string;
	description: string;
}

export type JobDescription = {
	position: string;
    company: string;
    experience: string;
    salary: string;
    location: string;
    postedDuration: string;
    openings: string;
    applicants: string;
    jobDescription: string,
    role: string,
    industryType: string,
    employmentType: string,
    roleCategory: string,
    jobRequirements: string; // Job requirements as a single string (e.g., separated by newline)
    education: string;
    keySkills: string;
	applyLink:string,
}

export type JobPosting = {

	title:string,
	location:string,
	type:string,
	experience:string,
	linkTo:string,
}

export type Jobs = {
	_id:string,
	companyName:string,
	title:string,
	location:string,
	imageUrl:string,
	type:string,
	redirectLink:string,
	requiredExperience:string,
	salary:string,
	skills:string,
	createdAt:string,

}

export type SubjectDetails = {
	name:string,
	displayname:string,
	desc:string
}

// local problem data
export type Problem = {
	id: string;
	title: string;
	// problemStatement: string;
	dificulty:string;
	// examples: Example[];
	// constraints: string;
	order: number;
	category:string;
	videoId:string;
	// starterCode: string;
	// handlerFunction: ((fn: any) => boolean) | string;
	// starterFunctionName: string;
};

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};