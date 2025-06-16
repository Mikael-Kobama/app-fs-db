import { Usuario } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient();

  static async salvar(usuario: Usuario): Promise<Usuario> {
    return await this.db.usuario.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario,
    });
  }
}
