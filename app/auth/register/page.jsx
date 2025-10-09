import Link from 'next/link';

function RegisterPage() {
  return (
    <div className="login bg-slate-700 flex justify-center items-center py-6">
      <div className="form w-72 bg-white rounded-md px-6 py-6">
        <form action="">
          <div className="name">
            <label htmlFor="name" className="font-semibold text-lg">
              Full Name
            </label>
            <input
              type="name"
              id="name"
              className="w-full border-2 border-slate-700 px-4 py-2 mt-2 rounded-full focus:outline-none"
              placeholder="Full Name"
            />
          </div>
          <div className="email mt-3">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-2 border-slate-700 px-4 py-2 mt-2 rounded-full focus:outline-none"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="phone mt-3">
            <label htmlFor="phone" className="font-semibold text-lg">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border-2 border-slate-700 px-4 py-2 mt-2 rounded-full focus:outline-none"
              placeholder="0823-4567-8910"
            />
          </div>
          <div className="password mt-3">
            <label htmlFor="password" className="font-semibold text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-2 border-slate-700 px-4 py-2 mt-2 rounded-full focus:outline-none font-mono"
              placeholder="********"
            />
          </div>
          <div className="confPassword mt-3">
            <label htmlFor="confPassword" className="font-semibold text-lg">
              Confirm Password
            </label>
            <input
              type="password"
              id="confPassword"
              className="w-full border-2 border-slate-700 px-4 py-2 mt-2 rounded-full focus:outline-none font-mono"
              placeholder="********"
            />
          </div>
          <button className="bg-slate-600 text-white px-4 py-2 rounded-full w-full mt-6 font-semibold hover:bg-slate-800">
            Register
          </button>
        </form>
        <div className="mt-4">
          <hr />
        </div>
        <div className="mt-4">
          <p className="text-sm">
            Do you have an account ? <Link href="./login">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
