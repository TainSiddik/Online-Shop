import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="my-12 text-center text-2xl lg:text-4xl">Our Products</h1>
      <Card />
      <Footer />
    </>
  );
};

export default ProductPage;
