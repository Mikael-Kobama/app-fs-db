"use server";

import UserRepository from "./UserRepository";

export default async function getAll() {
  return UserRepository.getAll();
}
