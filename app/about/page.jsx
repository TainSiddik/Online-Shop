import Footer from '@/components/Footer';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about bg-slate-200 lg:flex lg:justify-between lg:items-center">
        <div className="structur">
          <Image
            src="/structur.webp"
            width={2000}
            height={2000}
            alt="structur"
          />
        </div>
        <div className="description mx-6 lg:mx-0 lg:ml-24">
          <h1 className="font-bold text-2xl lg:text-4xl">
            Description Pekerjaan
          </h1>
          <h3 className="mt-6 font-semibold">Makna Warna</h3>
          <ul className="list-disc mt-3">
            <li className="mx-12 text-justify">
              Integrasi: Kata ini menunjukan proses menggabungkan berbagai
              elemen, sistem atau ide menjadi satu kesatuan yang utuh dan
              berfungsi. Ini mengisyaratkan bahwa perusahaan tidak hanya
              menyediakan satu layanan, tetapi menyatukan berbagai solusi untuk
              menciptakan hasil yang komprehensif.
            </li>
            <li className="mx-12 text-justify mt-4">
              Solusi: Kata ini menegaskan bahwa fokus utama perusahaan adalah
              menyelesaikan masalah atau tantangan yang dihadapi klien ini tidak
              hanya menawarkan produk atau jasa, tetapi juga hasil akhir yang
              efektif dan dapat di terapkan.
            </li>
          </ul>
          <h3 className="my-3 font-semibold">Filosofi Logo</h3>
          <ul className="list-disc mx-12 text-justify">
            <li>
              Filosofi logo ini adalah merepresentasikan entitas yang
              profesional dan inovatif, yang mampu mengintegrasikan berbagai
              komponen kompleks menjadi solusi yang kohesif, mengarahkan klien
              menuju pertumbuhan dan keberhasilan melalui konektivitas dan
              pendekatan modern.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutPage;
