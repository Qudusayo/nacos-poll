import { faker } from "@faker-js/faker";
import { ContestantsData } from "../../../../types";

function createRandomUser(post: string) {
	return {
		candidate_id: faker.string.uuid(),
		office_name: post,
		lastname: faker.person.lastName(),
		firstname: faker.person.firstName(),
		middlename: faker.person.middleName(),
		voters_path: faker.image.avatar(),
	};
}

// List of post labels
const posts = [
	"President",
	"Vice President",
	"Secretary",
	"Treasurer",
	"Sport Director",
	"Public Relations Officer",
	"Financial Secretary",
];

// Generate data for all posts
export const data: ContestantsData = posts.map(post => ({
	label: post,
	data: faker.helpers.multiple(() => createRandomUser(post), {
		count: faker.number.int({ min: 2, max: 7 }),
	}),
}));
