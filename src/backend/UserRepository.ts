import { PrismaClient } from "@prisma/client";

export default class UserRepository {
  private static client: PrismaClient = new PrismaClient();

  static async save(user: any) {
    return await this.client.user.upsert({
      where: { id: user.client },
      update: user,
      create: user,
    });
  }

  static async GetAll() {
    return await this.client.user.findMany();
  }

  static async GetId(id: string) {
    return await this.client.user.findUnique({ where: { id } });
  }
}
