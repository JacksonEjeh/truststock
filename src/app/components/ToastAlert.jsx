import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";

const icons = {
  success: <CheckCircle className="text-green-600 w-5 h-5" />,
  error: <XCircle className="text-red-600 w-5 h-5" />,
  warning: <AlertTriangle className="text-yellow-500 w-5 h-5" />,
  info: <Info className="text-blue-600 w-5 h-5" />,
};

const titles = {
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Info",
};

const ToastAlert = ({
  message,
  type = "info",
  onClose,
  autoClose = true,
  duration = 4000,
}) => {
  useEffect(() => {
    if (autoClose && message) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fade-in">
        <div className="flex items-start gap-3 bg-green-100 border-l-4 shadow rounded-lg p-3 max-w-xs w-full
            border-green-600 dark:border-green-500"
            style={{
                borderColor:
                    type === "success"
                    ? "#16a34a"
                    : type === "error"
                    ? "#dc2626"
                    : type === "warning"
                    ? "#facc15"
                    : "#6b21a8",
                    backgroundColor:
                    type === "success"  
                    ? "#dcfce7"
                    : type === "error"
                    ? "#fee2e2"
                    : type === "warning"
                    ? "#fef9c3"
                    : "#f3e8ff",
            }}
        >
            {icons[type]}
            <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800">{titles[type]}</h4>
                <p className="text-sm text-gray-600">{message}</p>
            </div>
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition"
            >
                <X className="w-4 h-4" />
            </button>
      </div>
    </div>
  );
};

export default ToastAlert;
