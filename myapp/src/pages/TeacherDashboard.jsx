import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { BookOpen, FileText, Download, Bell, Clock, LogOut } from "lucide-react";
import { materials, courses } from "../components/Uploads";

export default function TeacherDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Manage courses, attendance, and teaching materials
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="flex items-center gap-2
              bg-gray-200 hover:bg-gray-300
              text-gray-700 px-4 py-2 rounded-xl font-medium transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="My Courses" value="4" icon={<BookOpen />} color="bg-rose-900" />
          <StatCard title="Notes Uploaded" value="18" icon={<FileText />} color="bg-red-900" />
          <StatCard title="Downloads" value="9" icon={<Download />} color="bg-rose-800" />
          <StatCard title="Updates" value="3" icon={<Bell />} color="bg-red-800" />
        </div>

        {/* Attendance Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Mark Attendance</h2>
          <div className="flex flex-wrap gap-4">
            {courses.map((course, idx) => (
              <button
                key={idx}
                className="bg-gradient-to-r from-rose-900 to-red-900
                  hover:from-red-800 hover:to-rose-800
                  text-white px-6 py-2 rounded-xl font-medium shadow transition"
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        {/* Teaching Materials */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Teaching Materials</h2>
            <button className="bg-gradient-to-r from-rose-900 to-red-900
              hover:from-red-800 hover:to-rose-800
              text-white px-5 py-2 rounded-xl text-sm font-medium shadow transition"
            >
              + Upload
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((file, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-2xl shadow hover:shadow-lg
                  flex justify-between items-center transition border border-gray-100"
              >
                <span className="text-gray-700 font-medium">{file}</span>
                <button className="bg-gradient-to-r from-rose-900 to-red-900
                  hover:from-red-800 hover:to-rose-800
                  text-white px-4 py-2 rounded-xl text-sm shadow transition"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
