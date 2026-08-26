// Dynamic Routing -> /member/ //
export default async function Page({params}: {params: {memid: string, memname: string, memage: string}}) {
  const {memid, memname, memage} = await params;
  return (
    <div>
      <h1>Member VIP Page</h1>
      <p>Member ID: {memid}</p>
      <p>Name: {memname}</p>
      <p>Age: {memage}</p>
    </div>
  );
}