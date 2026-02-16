export default function Input({ icon, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3
                    bg-white shadow-sm transition focus-within:ring-2 focus-within:ring-rose-900">
      <span className="text-rose-900">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full outline-none text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}
