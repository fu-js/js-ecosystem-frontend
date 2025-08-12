import { type Member } from "@prisma/client";

let data: Member[] = getFakeMembers(32);

export default defineEventHandler(async (event): Promise<Member[]> => {
  return data;
});
