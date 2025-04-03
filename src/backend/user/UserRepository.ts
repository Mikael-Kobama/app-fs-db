import { User } from "@/core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
  private static client: PrismaClient = new PrismaClient();

  static async save(user: User): Promise<User> {
    return await this.client.user.upsert({
      where: { id: user.client },
      update: user,
      create: user,
    });
  }

  static async getAll(): Promise<User[]> {
    return await this.client.user.findMany();
  }

  static async getId(id: string): Promise<User> {
    const user = await this.client.user.findUnique({ where: { id } });
    return user as User;
  }
}
