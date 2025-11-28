import { useState } from "react";

function Visitors() {
  const [visitors, setVisitors] = useState([
    { id: 1, name: "Karna", phone: "+91 9935164156" },
    { id: 2, name: "Karna", phone: "+91 9935164156" },
    { id: 3, name: "Karna", phone: "+91 9935164156" },
    { id: 4, name: "Karna", phone: "+91 9935164156" },
    { id: 5, name: "Karna", phone: "+91 9935164156" },
    { id: 6, name: "Karna", phone: "+91 9935164156" },
    { id: 7, name: "Karna", phone: "+91 9935164156" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrFormData, setQrFormData] = useState({
    name: "",
    contact: "",
    idNumber: "",
    company: "",
  });

  const chartData = [
    20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45, 55, 50, 60, 55, 65,
  ];

  const handleSendQR = (visitorId) => {
    const visitor = visitors.find((v) => v.id === visitorId);
    setQrFormData({
      name: visitor.name,
      contact: visitor.phone,
      idNumber: "AVC793-34",
      company: "",
    });
    setShowQRModal(true);
  };

  const handleQRSubmit = () => {
    console.log("Sending QR Code:", qrFormData);
    setShowQRModal(false);
    setQrFormData({
      name: "",
      contact: "",
      idNumber: "",
      company: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Visitors</h1>
      </div>

      {/* Total Visitors Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 max-w-xs">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <span className="text-gray-600 text-sm mt-2">Total Visitors</span>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-5xl font-bold text-gray-800">243</div>
          <div className="flex items-end gap-0.5 h-16 mb-1">
            {chartData.map((height, idx) => (
              <div
                key={idx}
                className={`w-2 ${
                  idx === chartData.length - 1 ? "bg-gray-800" : "bg-gray-300"
                } rounded-sm`}
                style={{ height: `${(height / 65) * 100}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Visitors Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Visitor Name
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Phone Number
                </th>
                <th className="text-right p-4 text-sm font-medium text-red-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((visitor) => (
                <tr
                  key={visitor.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 text-sm text-gray-800">{visitor.name}</td>
                  <td className="p-4 text-sm text-gray-800">{visitor.phone}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleSendQR(visitor.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium"
                    >
                      Send QR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-4 border-t border-gray-200">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`w-8 h-8 rounded flex items-center justify-center ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded text-sm font-medium ${
                currentPage === page
                  ? "bg-red-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="text-gray-400 text-sm">...</span>

          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`w-8 h-8 rounded text-sm font-medium ${
              currentPage === totalPages
                ? "bg-red-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className={`w-8 h-8 rounded flex items-center justify-center ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="w-8 h-8 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 ml-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visitors;
