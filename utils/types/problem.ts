export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

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