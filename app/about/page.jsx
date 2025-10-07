import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about bg-slate-300 lg:flex lg:justify-between lg:items-center">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quia vitae rem necessitatibus ipsa ex atque iure, rerum quidem quo
              hic officiis numquam animi ratione aspernatur consequatur. Labore
              totam facere voluptate? Incidunt laboriosam ut repellendus
              possimus?
            </li>
            <li className="mx-12 text-justify mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati at enim, nihil, magnam voluptate eum reiciendis
              consectetur quis soluta cum omnis perferendis aperiam adipisci
              quos? Minus quasi neque impedit dolores sunt asperiores iste
              exercitationem cumque omnis!
            </li>
          </ul>
          <h3 className="my-3 font-semibold">Filosofi Logo</h3>
          <ul className="list-disc mx-12 text-justify">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quia vitae rem necessitatibus ipsa ex atque iure, rerum quidem quo
              hic officiis numquam animi ratione aspernatur consequatur. Labore
              totam facere voluptate? Incidunt laboriosam ut repellendus
              possimus?
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutPage;
