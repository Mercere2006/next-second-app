export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <h1>Hello, World</h1>
      <hr />
      {children}
    </section>
  );
}