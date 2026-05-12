import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  color?: "blue" | "red" | "green" | "yellow";
}

export function KpiCard({ title, value, icon: Icon, description, color = "blue" }: KpiCardProps) {
  const colorMap: Record<NonNullable<KpiCardProps["color"]>, string> = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    red: "bg-red-50 text-red-600 border-red-100",
    green: "bg-green-50 text-green-600 border-green-100",
    yellow: "bg-yellow-50 text-yellow-700 border-yellow-100",
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className={`rounded-lg border p-3 ${colorMap[color]}`}>
          <Icon size={24} />
        </div>
        <span className="text-2xl font-bold text-gray-800">{value}</span>
      </div>
      <h3 className="text-sm font-medium uppercase text-gray-500">{title}</h3>
      {description ? <p className="mt-1 text-xs text-gray-400">{description}</p> : null}
    </div>
  );
}
