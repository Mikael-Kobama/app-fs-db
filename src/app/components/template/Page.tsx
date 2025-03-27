export interface PageProps {
  children: any;
}

export default function Page(props: PageProps) {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
}
