import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import { Mail, User } from "lucide-react";

export default function ShowProfile() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-1">
          Profile Settings
        </h1>
        <p className="text-gray-500 mb-8">
          View and update your personal information
        </p>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-2xl">
          {/* Current Info */}
          <div className="mb-6 space-y-1">
            <p className="text-sm text-gray-500">
              Current Username
            </p>
            <p className="font-semibold text-gray-800">
              User
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Current Email
            </p>
            <p className="font-semibold text-gray-800">
              user@example.com
            </p>
          </div>

          {/* Edit Form */}
          <div className="space-y-5">
            <Input
              icon={<User />}
              placeholder="Enter new name"
              className="focus:ring-2 focus:ring-rose-800"
            />

            <Input
              icon={<Mail />}
              placeholder="Enter new email"
              className="focus:ring-2 focus:ring-rose-800"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8">
            <button
              className="bg-gradient-to-r from-rose-900 to-red-900
                hover:from-red-900 hover:to-rose-900
                text-white px-6 py-3 rounded-xl font-semibold
                shadow-lg transition"
            >
              Save Changes
            </button>

            <button
              className="bg-gray-200 hover:bg-gray-300
                text-gray-700 px-6 py-3 rounded-xl font-medium transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
