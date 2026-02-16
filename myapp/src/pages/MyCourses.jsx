import { Globe, Book, Search } from "lucide-react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Courses() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Enroll Courses
        </h1>
        <p className="text-gray-500 mb-8">
          Choose courses to start learning
        </p>

        {/* Available Courses */}
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Available Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard
            icon={<Globe />}
            code="ITEX 120"
            title="Web Engineering"
          />

          <CourseCard
            icon={<Book />}
            code="VPED 100"
            title="Instruction Design"
          />

          <CourseCard
            icon={<Search />}
            code="EDU 120"
            title="Research Methodology"
          />
        </div>

        {/* Enrolled Courses */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            Your Courses
          </h3>

          <p className="text-gray-500 text-sm">
            You haven't enrolled in any courses yet. Click <span className="font-medium">Enroll</span> on any course above to continue.
          </p>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ icon, code, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 p-6 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-4">
          {icon}
        </div>

        <p className="text-sm font-semibold text-gray-500">
          {code}
        </p>
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          {title}
        </h3>
      </div>

      <button className="mt-4 w-full bg-gradient-to-r from-rose-900 to-red-900
        hover:from-red-900 hover:to-rose-900
        text-white py-2.5 rounded-xl font-semibold shadow transition">
        Enroll
      </button>
    </div>
  );
}
