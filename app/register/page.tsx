// Basic Routing -> /register (/ ชั้นเดียว)//
import Image from "next/image";
import bunny from "./../../assets/images/bunny.png";
import human from "./../../assets/images/human.png";

export default function Page() {
  return (
    <div>
      <h1 className="text-center mt-5 font-bold text-green-600">
        Register Page
      </h1>
      {/* อ้างอิงรูปจากโฟลเดอร์ Public */}
      <Image
      src="/cat.png"
        alt="Cat"
        width={150}
        height={150}
        className="mt-5 border-2 border-red-500 rounded-lg p-2 ml-auto"
      />

      {/* อ้างอิงรูปจากโฟลเดอร์ assets/images */}
      <Image
        src={bunny}
        alt="Bunny"
        width={150}
        height={150}
        className="mt-5 border-2 border-blue-500 rounded-lg p-2 mx-auto"
      />
      <Image
        src={human}
        alt="Human"
        width={150}
        height={150}
        className="mt-5 border-2 border-pink-500 rounded-lg p-2"
      />

      {/* อ้างอิงรูปจาก internet หรือจาก Network */}
      <Image
        src="https://images.pexels.com/photos/20142604/pexels-photo-20142604.jpeg"
        alt="sea"
        width={150}
        height={150}
        className="mt-5 border-2 border-pink-500 rounded-lg p-2"
      />
    </div>
  );
}