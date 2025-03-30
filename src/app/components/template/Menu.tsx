import { IconHome, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <aside className="w-72 bg-zinc-900 h-screen">
      <nav className="flex flex-col gap-1 py-7">
        <MenuItem icon={IconHome} text="Início" url="/" />
        <MenuItem icon={IconUser} text="Cadastro Usuário" url="/users" />
      </nav>
    </aside>
  );
}
