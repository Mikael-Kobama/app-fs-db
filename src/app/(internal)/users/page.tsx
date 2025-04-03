"use client";
import PageLayout from "@/app/components/template/PageLayout";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import users from "@/app/data/constants/users";
import Backend from "@/backend";
import { User } from "@/core/model/User";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<Partial<User> | null>(null);

  function save() {
    if (!user) return;
    Backend.users.save(user);
  }

  return (
    <PageLayout className="flex flex-col gap-10">
      <Title icon={IconUser} first="Usuários" second="Cadastro de usuários" />
      {/* <UserList /> */}
      <UserForm
        user={user}
        onChange={setUser}
        onSave={save}
        onCancel={() => {}}
      />
    </PageLayout>
  );
}
