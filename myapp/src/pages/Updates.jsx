import Sidebar from "../components/Sidebar";
import { Bell, ExternalLink } from "lucide-react";

export default function Updates() {
  const notifications = [
    {
      text: "New assignment submitted by 2 students in ITEX 120.",
      time: "2 hours ago",
    },
    {
      text: "5 students have pending assignments in VPED 100.",
      time: "1 day ago",
    },
    {
      text: "You received feedback on your course material from Sajin (BTech 5th Semester).",
      time: "Yesterday",
    },
    {
      text: "Upcoming webinar on Web Engineering starts in 3 hours.",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Updates & Notifications</h1>
          <p className="text-gray-500 mt-1">
            Stay informed about recent activity and upcoming events.
          </p>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-4">
          {notifications.map((notif, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-4 border border-gray-100 rounded-xl
                hover:bg-rose-50 transition cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <Bell className="text-rose-900" />
                <div>
                  <p className="text-gray-800 font-medium">{notif.text}</p>
                  <span className="text-sm text-gray-500">{notif.time}</span>
                </div>
              </div>
              <ExternalLink className="text-rose-900 w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
