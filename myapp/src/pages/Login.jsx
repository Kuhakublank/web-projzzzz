import { Mail, Lock } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    const savedUserType = localStorage.getItem("userType");
    localStorage.setItem("userEmail", email);

    if (savedUserType === "teacher") navigate("/teacher-dashboard");
    else navigate("/student-dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/zoVq95IgsH_Np2R5KCEJQ_hZnOtnpr0gICM87AHyfLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS8z/NS9OcHhvNzkuanBn')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/80 to-red-900/80"></div>

      {/* Login Card */}
      <div className="relative bg-white/90 backdrop-blur-xl w-full max-w-md 
        p-10 rounded-3xl shadow-2xl border border-white/30">

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Login to your LMS account
        </p>

        <div className="space-y-5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail />}
            placeholder="Email"
            className="focus:ring-2 focus:ring-rose-800"
          />

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            icon={<Lock />}
            placeholder="Password"
            className="focus:ring-2 focus:ring-rose-800"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-gradient-to-r from-rose-900 to-red-900
            hover:from-red-900 hover:to-rose-900
            text-white py-3 rounded-xl font-semibold shadow-lg transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-rose-800 hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
