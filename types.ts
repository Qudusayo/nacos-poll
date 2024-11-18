export type Contestant = {
	candidate_id: string;
	office_name: string;
	lastname: string;
	firstname: string;
	middlename: string;
	voters_path: string | null;
};

export type ContestantsData = {
	label: string;
	data: Contestant[];
}[];
