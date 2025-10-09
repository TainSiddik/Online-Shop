import Image from "next/image";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-slate-300 px-6 py-1 flex items-center">
        <div className="logo mx-auto">
          <Image src="/logo.png" width={80} height={80} alt="logo" />
        </div>
        <div className="contact mx-auto text-slate-700 mt-4">
          <div className="icon flex justify-center gap-6 lg:gap-12">
            <Link href="/">
              <MdOutlineWhatsapp />
            </Link>
            <Link href="/">
              <IoLogoInstagram />
            </Link>
            <Link href="/">
              <IoLogoTiktok />
            </Link>
            <Link href="/">
              <FaTelegram />
            </Link>
          </div>
          <div className="menu mt-2 mb-2 lg:mt-4">
            <ul className="flex space-x-6 text-sm lg:space-x-12 text-slate-700">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright bg-slate-800 text-slate-300 py-4 text-center">
        <p className="text-sm">Copyright &copy; PTEI SKIP ALMAKSUM</p>
      </div>
    </footer>
  );
};
export default Footer;
