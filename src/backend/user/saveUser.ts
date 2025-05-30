"use server";

import { User } from "@/core/model/User";
import Id from "@/core/utils/id";
import UserRepository from "./UserRepository";

export default async function userSave(user: Partial<User>) {
  const newUser = {
    ...user,
    id: user.id ?? Id.new,
  };

  return UserRepository.save(newUser as User);
}
