export default function StatCard({ title, value, icon, color = "bg-rose-900" }) {
  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-2xl text-white shadow-lg
                  transform transition hover:scale-105 ${color}`}
    >
      <div className="text-4xl">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
    </div>
  );
}
