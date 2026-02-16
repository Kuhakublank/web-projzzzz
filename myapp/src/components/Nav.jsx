const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      
      {/* Logo / Brand */}
      <div className="text-2xl font-bold">
        <a href="/" className="text-rose-900 hover:text-red-700 transition">
          LMS
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a href="/" className="text-gray-700 hover:text-rose-900 font-medium transition">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-rose-900 font-medium transition">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-rose-900 font-medium transition">
          Contact
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <a
          href="/login"
          className="px-5 py-2 bg-gradient-to-r from-rose-900 to-red-900
                     hover:from-red-900 hover:to-rose-900
                     text-white rounded-2xl font-semibold shadow transition"
        >
          Login
        </a>
        <a
          href="/signup"
          className="px-5 py-2 bg-gradient-to-r from-rose-900 to-red-900
                     hover:from-red-900 hover:to-rose-900
                     text-white rounded-2xl font-semibold shadow transition"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Nav;
