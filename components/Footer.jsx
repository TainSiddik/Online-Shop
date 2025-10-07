import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-slate-500 px-6 py-4">
        <div className="logo">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <div className="contact">
          <div className="icon"></div>
          <div className="menu"></div>
        </div>
      </div>
      <div className="copyright bg-slate-800 text-slate-300 py-1 pl-6">
        <p>Copyright &copy; PTEI SKIP ALMAKSUM</p>
      </div>
    </footer>
  );
};
export default Footer;
