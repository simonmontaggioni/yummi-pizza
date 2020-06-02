const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createUsers(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const userName = faker.name.firstName();
    const email = faker.internet.email();
    const password = '12345';

    result.push({
      id: faker.random.uuid(),
      userName,
      password,
      email,
    });
  }

  return result;
}

function main() {
  const data = {
    users: createUsers(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
