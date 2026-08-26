// Basic Routing -> /products/notebook/lenovo (/ มากกว่า 1 ชั้น) //
import Footer from "@/components/Footer";
import OpenSanook from "@/components/OpenSanook";

export default function Page() {
  return (
    <div>
      Notbook Lenovo Page
      <OpenSanook />
      <Footer />
    </div>
  );
}