"use client";
import PageLayout from "@/app/components/template/PageLayout";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import useUsers from "@/app/data/hooks/useUsers";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function Page() {
  const { user, users, save, deleteUser, changeUser } = useUsers();

  return (
    <PageLayout className="flex flex-col gap-10">
      <Title icon={IconUser} first="Usuários" second="Cadastro de usuários" />
      {/* <UserList /> */}
      {user ? (
        <UserForm
          user={user}
          onChange={changeUser}
          onSave={save}
          onCancel={() => changeUser(null)}
          delete={deleteUser}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
              onClick={() => changeUser({})}
            >
              <IconPlus />
              <span>Novo Usuário</span>
            </button>
          </div>
          <UserList users={users} onClick={changeUser} />
        </>
      )}
    </PageLayout>
  );
}
