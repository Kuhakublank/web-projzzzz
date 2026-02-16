import Sidebar from "../components/Sidebar";
import { materials } from "../components/Uploads";
import { Trash2Icon, UploadCloud } from "lucide-react";

export default function ManageUploads() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Uploads
          </h2>

          <button className="flex items-center gap-2
            bg-gradient-to-r from-rose-900 to-red-900
            hover:from-red-900 hover:to-rose-900
            text-white px-5 py-2.5 rounded-xl text-sm font-semibold
            shadow-lg transition">
            <UploadCloud size={18} />
            Upload File
          </button>
        </div>

        {/* Materials Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          {materials.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              No uploads yet.
            </p>
          ) : (
            <div className="space-y-4">
              {materials.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between
                    bg-gray-50 hover:bg-gray-100
                    p-4 rounded-xl transition"
                >
                  <span className="text-gray-700 font-medium">
                    {file}
                  </span>

                  <button className="text-rose-800 hover:text-red-900
                    p-2 rounded-lg hover:bg-rose-50 transition">
                    <Trash2Icon size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
