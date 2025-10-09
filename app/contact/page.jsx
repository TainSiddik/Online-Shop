import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact w-full px-12 my-14">
        <div className="form ">
          <form action="">
            <div className="name">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="ring-2 ring-slate-700 px-6 py-1 mt-2 w-full lg:w-[30%] block rounded-full text-pink-700"
                placeholder="Full Name"
              />
            </div>
            <div className="email mt-6">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="ring-2 ring-slate-700 px-6 py-1 mt-2 w-full lg:w-[30%] block rounded-full text-pink-700"
                placeholder="fullname@gmail.com"
              />
            </div>
            <div className="message mt-6">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="ring-2 ring-slate-700 px-6 py-1 mt-2 w-full h-60 rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-slate-700 text-white px-6 py-2 rounded-full mt-6 w-full hover:bg-slate-100 hover:text-slate-800 hover:ring-1 lg:w-52"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
