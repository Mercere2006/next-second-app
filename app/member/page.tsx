// Basic Routing -> /member //

import Link from "next/link";

export default function Page() {
  return (
    <div>
      Member Page
      <hr />
      <Link href="/member/vip/vip001/sommai/50">Go to VIP Member รหัส vip001, ชื่อ สมหมาย, อายุ 50</Link>
      <br />
      <Link href="/member/normal/normal001">Go to Normal Member รหัส normal001</Link>
      <br />
    </div>
  );
}