import { Mail, Lock, User, Users } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password || !role) {
      alert("Please fill all fields!");
      return;
    }

    localStorage.setItem("userType", role.toLowerCase());
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    if (role === "Student") navigate("/student-dashboard");
    else navigate("/teacher-dashboard");
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
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/80 to-red-900/80" />

      {/* Signup Card */}
      <div className="relative bg-white/90 backdrop-blur-xl w-full max-w-md
        p-10 rounded-3xl shadow-2xl border border-white/30">

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Join the LMS and start learning
        </p>

        <div className="space-y-5">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={<User />}
            placeholder="Full Name"
            className="focus:ring-2 focus:ring-rose-800"
          />

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

          {/* Role Selector */}
          <div className="flex items-center gap-3 border border-gray-200
            rounded-xl px-4 py-3 bg-white
            focus-within:ring-2 focus-within:ring-rose-800">
            <Users className="text-gray-400" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            >
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSignup}
          className="w-full mt-8 bg-gradient-to-r from-rose-900 to-red-900
            hover:from-red-900 hover:to-rose-900
            text-white py-3 rounded-xl font-semibold
            shadow-lg transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-rose-800 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
