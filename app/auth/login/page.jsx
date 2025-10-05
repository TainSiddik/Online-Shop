import Link from 'next/link';

function LoginPage() {
  return (
    <div className="login h-screen bg-slate-700 flex justify-center items-center">
      <div className="form w-72 bg-white rounded-md px-6 py-6">
        <form action="">
          <div className="email">
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
          <button className="bg-slate-600 text-white px-4 py-2 rounded-full w-full mt-6 font-semibold hover:bg-slate-800">
            Login
          </button>
        </form>
        <div className="mt-4">
          <hr />
        </div>
        <div className="mt-4">
          <p className="text-sm">
            Don't have an account ?{' '}
            <Link href="./register" className="text-slate-600">
              Register Here
            </Link>
          </p>
        </div>
        <div className="mt-4 text-sm text-center text-slate-600">
          <Link href="/">&larr; Back To Home</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
