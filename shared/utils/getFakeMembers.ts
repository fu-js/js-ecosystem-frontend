import { Department, Gender, Status, type Member } from "@prisma/client";
import { faker } from "@faker-js/faker";

const getFakeMember = (): Member => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    dob: faker.date.birthdate(),
    gender: faker.helpers.shuffle(Object.values(Gender), {
      inplace: false,
    })[0] as Gender,
    department: faker.helpers.shuffle(Object.values(Department), {
      inplace: false,
    })[0] as Department,
    status: faker.helpers.shuffle(Object.values(Status), {
      inplace: false,
    })[0] as Status,
    cohort: faker.number.int({ min: 1, max: 20 }).toString(),
    rollNumber:
      faker.string.alpha({ length: 2 }).toUpperCase() +
      faker.string.numeric({ length: 6 }),
    majorId: faker.string.alpha({ length: 3 }),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    socialLink:
      "https://facebook.com/" +
      faker.person.firstName() +
      faker.string.numeric({ length: 2 }),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
};

export default (length: number): Member[] => {
  return Array.from({ length: length }, () => getFakeMember());
};
