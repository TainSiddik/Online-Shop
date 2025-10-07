import Image from "next/image";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-slate-500 px-6 py-4 flex items-center">
        <div className="logo mx-auto">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <div className="contact mx-auto text-white">
          <div className="icon flex justify-center gap-12">
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
          <div className="menu mt-6">
            <ul className="flex space-x-12 text-white">
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
