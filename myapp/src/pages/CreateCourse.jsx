import Sidebar from "../components/Sidebar";
import Input from "../components/Input";

export default function CreateCourse() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-10 flex items-start justify-center">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur
          p-10 rounded-2xl shadow-xl border border-gray-100">

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create New Course
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Add course details to make it available for students.
          </p>

          {/* Form */}
          <div className="space-y-6">
            <Input
              placeholder="Course Name"
              className="focus:ring-2 focus:ring-rose-800"
            />

            <Input
              placeholder="Course Code"
              className="focus:ring-2 focus:ring-rose-800"
            />

            <textarea
              placeholder="Course Description"
              rows="5"
              className="w-full border border-gray-200 rounded-xl p-4
                outline-none text-sm resize-none
                focus:ring-2 focus:ring-rose-800 focus:border-rose-800"
            />

            <button
              className="w-full bg-gradient-to-r from-rose-900 to-red-900
                hover:from-red-900 hover:to-rose-900
                text-white py-3 rounded-xl font-semibold
                shadow-lg transition"
            >
              Create Course
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
