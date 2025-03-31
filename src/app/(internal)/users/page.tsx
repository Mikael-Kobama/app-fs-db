import PageLayout from "@/app/components/template/PageLayout";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import { IconUser } from "@tabler/icons-react";

export default function Page() {
  return (
    <PageLayout>
      <Title icon={IconUser} first="Usuários" second="Cadastro de usuários" />
      <UserList />
    </PageLayout>
  );
}
