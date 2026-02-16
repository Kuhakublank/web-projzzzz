import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { BookOpen, FileText, Download, Bell, Clock, LogOut } from "lucide-react";

export default function StudentDashboard() {
  const materials = [
    { name: "Web Engineering - Unit 1.pdf", type: "pdf" },
    { name: "Software Engineering - UML.pptx", type: "ppt" },
    { name: "Database Notes.docx", type: "doc" },
    { name: "React Intro Video.mp4", type: "video" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Student Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Welcome back! Here’s your learning overview.
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
          <StatCard
            title="My Courses"
            value="4"
            icon={<BookOpen />}
            color="bg-rose-900"
          />
          <StatCard
            title="Available Notes"
            value="18"
            icon={<FileText />}
            color="bg-red-900"
          />
          <StatCard
            title="Downloads"
            value="9"
            icon={<Download />}
            color="bg-rose-800"
          />
          <StatCard
            title="Updates"
            value="3"
            icon={<Bell />}
            color="bg-red-800"
          />
        </div>

        {/* Learning Materials */}
        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Learning Materials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((file, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md
                hover:shadow-xl transition border border-gray-100
                flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {file.name}
                </h3>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={16} />
                  Uploaded 2 days ago
                </span>
              </div>

              <button
                className="mt-6 bg-gradient-to-r from-rose-900 to-red-900
                  hover:from-red-900 hover:to-rose-900
                  text-white py-2.5 rounded-xl font-semibold
                  shadow transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Quick Links
          </h2>

          <div className="flex flex-wrap gap-4">
            {["My Courses", "My Notes", "Updates", "Downloads"].map(
              (item, index) => (
                <button
                  key={index}
                  className="bg-white hover:bg-gray-50
                    text-gray-700 px-6 py-2.5 rounded-xl
                    shadow-md border border-gray-100
                    font-medium transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
