// Basic Routing -> /products (/ ชั้นเดียว)//
import { Itim, Srisakdi } from "next/font/google";
import localfont from "next/font/local";

const itim = Itim({
  subsets: ["thai", "latin"],
  weight:["400",],
});

const srisakdi = Srisakdi({
  subsets: ["thai", "latin"],
  weight:["400","700"],
});

const matcha = localfont({
  src: "./../fonts/Matcha.ttf",
});

export default function Page() {
  return (
    <div>
      <h1>Products Page</h1>
      <hr />
      <h1>สวัสดี</h1>
      <h1 className={`${srisakdi.className}`}>บะบายย ใช้ font Srisakdi</h1>
      <h1 className={`${itim.className}`}>ลาก่องง ใช้ font Itim</h1>
      <hr />
      <h1 className={`${matcha.className}`}>มหาวิทยาลัยเอเชียอาคเนย์</h1>
    </div>
  );
}