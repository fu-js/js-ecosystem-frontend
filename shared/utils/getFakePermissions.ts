import { type Permission } from "@prisma/client";
import { faker } from "@faker-js/faker";

const getFakePermission = (): Permission => {
  return {
    id: faker.string.uuid(),
    action: faker.word.verb(),
    category: faker.helpers.shuffle(["Apple", "Orange", "Banana"], {
      inplace: true,
    })[0] as string,
    description: faker.word.words({ count: 6 }),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
};

export default (length: number): Permission[] => {
  return Array.from({ length: length }, () => getFakePermission());
};
