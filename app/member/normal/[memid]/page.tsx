// Dynamic Route -> /member/normal/[memid] //
export default async function Page({params}: {params: {memid: string}}) {
  const {memid} = await params;
  return (
    <div>
      <h1>Member Normal Page</h1>
      <p>Member ID: {memid}</p>
    </div>
  );
}