const { faker } = require("@faker-js/faker");

fakeUsers = Array.from({ length: 20 }, () => ({
	username: faker.internet.userName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
}));
