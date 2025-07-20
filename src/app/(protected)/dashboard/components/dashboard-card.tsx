import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  color?: "blue" | "green" | "red" | "purple" | "yellow" | "indigo";
}

/**
 * Componente de card para o dashboard administrativo
 */
const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  description,
  color = "blue",
}) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-500",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-500",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-500",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-500",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-500",
    },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-500",
    },
  };

  const { bg, text } = colorMap[color];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
      <div className={`p-3 rounded-full ${bg} ${text} mr-4`}>{icon}</div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-700">{value}</span>
        </div>
        {description && (
          <p className="text-gray-500 text-xs mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default DashboardCard; 