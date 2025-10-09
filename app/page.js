import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <h1 className="font-bold text-2xl lg:text-4xl text-center text-slate-700 my-12">
        Flagship Products
      </h1>
      <Card />
      <Footer />
    </>
  );
}
