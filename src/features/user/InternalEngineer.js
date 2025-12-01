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
      {/* QR Generator Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                QR Generator
              </h2>
              <button
                onClick={() => setShowQRModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
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
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={qrFormData.name}
                    onChange={(e) =>
                      setQrFormData({ ...qrFormData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    value={qrFormData.contact}
                    onChange={(e) =>
                      setQrFormData({ ...qrFormData, contact: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter contact"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    ID Number
                  </label>
                  <input
                    type="text"
                    value={qrFormData.idNumber}
                    onChange={(e) =>
                      setQrFormData({ ...qrFormData, idNumber: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter ID"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Company
                  </label>
                  <select
                    value={qrFormData.company}
                    onChange={(e) =>
                      setQrFormData({ ...qrFormData, company: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  >
                    <option value="">Select a Company</option>
                    <option value="Monchrome Infrastructures">
                      Monchrome Infrastructures
                    </option>
                    <option value="SRP Infotech">SRP Infotech</option>
                    <option value="Hindustan Petroleum">
                      Hindustan Petroleum
                    </option>
                    <option value="Samsung Private Limited">
                      Samsung Private Limited
                    </option>
                    <option value="Auccate">Auccate</option>
                    <option value="Design.newagency">Design.newagency</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleQRSubmit}
                className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-md text-sm font-medium"
              >
                Send QR Code
              </button>
            </div>
          </div>
        </div>
      )}

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
