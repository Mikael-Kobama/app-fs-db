import Menu from "./Menu";

export interface PageProps {
  children: any;
  className?: string;
}

export default function PageLayout(props: PageProps) {
  return (
    <div className="flex">
      <Menu />
      <main className={`flex-1 p-7 ${props.className ?? ""}`}>
        {props.children}
      </main>
    </div>
  );
}
