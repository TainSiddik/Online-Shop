import Image from 'next/image';
import Link from 'next/link';

const Flagship = () => {
  return (
    <main>
      <h1 className="font-bold text-2xl lg:text-4xl text-center text-slate-700 my-12">
        Flagship Products
      </h1>
      <div className="grid grid-cols-2 px-2 gap-2 mb-6 md:grid-cols-3 lg:grid-cols-5 lg:mx-12 lg:mb-12">
        <div className="card w-[145px] md:w-[200px] h-[260px] ring-2 ring-slate-500 rounded-md mx-auto my-1">
          <div className="img">
            <Image
              src="/gambar1.png"
              width={200}
              height={120}
              className="object-fill h-[120px] rounded-t-md"
              alt="product"
            />
          </div>
          <div className="decs mt-4 text-center">
            <h1 className="font-semibold">Kemasan / 100 pcs</h1>
            <h3 className="text-red-700 mt-2">Rp. 100.000</h3>
          </div>
          <div className="order mt-6 text-center">
            <Link
              href="/detail"
              className="bg-slate-700 text-white py-2 text-center px-6 rounded-md"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="card w-[145px] md:w-[200px] h-[260px] ring-2 ring-slate-500 rounded-md mx-auto my-1">
          <div className="img">
            <Image
              src="/gambar2.png"
              width={200}
              height={120}
              className="object-fill h-[120px] rounded-t-md"
              alt="product"
            />
          </div>
          <div className="decs mt-4 text-center">
            <h1 className="font-semibold">Sablon + Baju</h1>
            <h3 className="text-red-700 mt-2">Rp. 75.000</h3>
          </div>
          <div className="order mt-6 text-center">
            <Link
              href="/detail"
              className="bg-slate-700 text-white py-2 text-center px-6 rounded-md"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="card w-[145px] md:w-[200px] h-[260px] ring-2 ring-slate-500 rounded-md mx-auto my-1">
          <div className="img">
            <Image
              src="/gambar3.png"
              width={200}
              height={120}
              className="object-fill h-[120px] rounded-t-md"
              alt="product"
            />
          </div>
          <div className="decs mt-4 text-center">
            <h1 className="font-semibold">Sablon Gelas MUG</h1>
            <h3 className="text-red-700 mt-2">Rp. 15.000</h3>
          </div>
          <div className="order mt-6 text-center">
            <Link
              href="/detail"
              className="bg-slate-700 text-white py-2 text-center px-6 rounded-md"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="card w-[145px] md:w-[200px] h-[260px] ring-2 ring-slate-500 rounded-md mx-auto my-1">
          <div className="img">
            <Image
              src="/gambar4.png"
              width={200}
              height={120}
              className="object-fill h-[120px] rounded-t-md"
              alt="product"
            />
          </div>
          <div className="decs mt-4 text-center">
            <h1 className="font-semibold">Spanduk / 1m</h1>
            <h3 className="text-red-700 mt-2">Rp. 18.000</h3>
          </div>
          <div className="order mt-6 text-center">
            <Link
              href="/detail"
              className="bg-slate-700 text-white py-2 text-center px-6 rounded-md"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="card w-[145px] md:w-[200px] h-[260px] ring-2 ring-slate-500 rounded-md mx-auto my-1">
          <div className="img">
            <Image
              src="/gambar5.png"
              width={200}
              height={120}
              className="object-fill h-[120px] rounded-t-md"
              alt="product"
            />
          </div>
          <div className="decs mt-4 text-center">
            <h1 className="font-semibold">Kartu Nama</h1>
            <h3 className="text-red-700 mt-2">Rp. 100.000</h3>
          </div>
          <div className="order mt-6 text-center">
            <Link
              href="/detail"
              className="bg-slate-700 text-white py-2 text-center px-6 rounded-md"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Flagship;
