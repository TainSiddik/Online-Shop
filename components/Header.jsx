import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="img">
        <Image
          src="/gambar5.png"
          width={1920}
          height={800}
          alt="header"
          className="h-[600px] object-fill relative"
        />
      </div>
      <div className="w-full h-[600px] bg-slate-900 absolute mt-[-600px] flex justify-center items-center opacity-80">
        <div className="promo text-white text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Discover what you’re looking for
          </h1>
          <h3 className="mt-9 text-xl lg:text-2xl font-semibold text-slate-300">
            Get Special Over For You Today
          </h3>
          <div className="space-x-4 mt-12">
            <Link
              href="/products"
              className="ring-2 ring-white rounded-md px-6 py-2"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="bg-white font-semibold text-slate-700 rounded-md px-6 py-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
