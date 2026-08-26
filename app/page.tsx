// หน้า Home Page Roots //
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>ID: 6752410013</h1>
      <h1>Name: Saranyaporn Leuangsa-ad</h1>
      <hr />
      <h3>
        Link to Basic Routing Page
      </h3>
      <Link href="/register">[Register Page]</Link> <br />
      <Link href="/products">[Products Page]</Link> <br />
      <Link href="/member">[Member Page]</Link> <br />

      <hr />
      <h3>Link to Nested Routing Page</h3>
      <Link href="/products/keyboard">[Keyboard Page]</Link> <br />
      <Link href="/products/mouse">[Mouse Page]</Link> <br />
      <Link href="/products/notebook/acer">[Notebook Acer Page]</Link> <br />
      <Link href="/products/notebook/lenovo">[Notebook Lenovo Page]</Link>



    </div>
  );
}