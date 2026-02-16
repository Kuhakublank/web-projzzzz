import { Link } from "react-router-dom";
import { BookOpen, Users, FileText } from "lucide-react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 
        bg-gradient-to-br from-rose-900 via-red-900 to-rose-800 text-white">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple & Smart Learning Management System
          </h1>

          <p className="text-rose-100 text-lg mb-10">
            Access courses, download notes, manage learning materials and
            connect with teachers — all in one place.
          </p>

          <Link
            to="/login"
            className="inline-block bg-white text-rose-900 px-8 py-3 rounded-xl 
            font-semibold shadow-lg hover:bg-rose-50 transition"
          >
            Get Started →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Everything You Need to Learn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<BookOpen size={30} />}
            title="Courses"
            desc="Access all your subjects and lessons in one organized place."
          />

          <Feature
            icon={<FileText size={30} />}
            title="Notes & Materials"
            desc="Download notes, PDFs, and learning resources anytime."
          />

          <Feature
            icon={<Users size={30} />}
            title="Teachers"
            desc="Stay connected with instructors and get guidance easily."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} LMS • Built for simple learning
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition 
      text-center border border-gray-100">
      <div className="flex justify-center items-center w-14 h-14 mx-auto mb-4 
        rounded-xl bg-rose-50 text-rose-800">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}
