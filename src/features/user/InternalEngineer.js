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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [newCompany, setNewCompany] = useState("");

  const [qrFormData, setQrFormData] = useState({
    name: "",
    contact: "",
    idNumber: "",
    company: "",
  });

  const [companies, setCompanies] = useState([
    "Muenchener Rueckve...",
    "Reliance Private Limited",
    "Hindustan Petroleum",
    "Samsung Private Limited",
    "Avocado",
    "Designverseagency",
  ]);

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

  const handleCompanySelect = (company) => {
    setQrFormData({ ...qrFormData, company: company });
    setIsDropdownOpen(false);
  };

  const handleAddCompany = () => {
    if (newCompany.trim()) {
      setCompanies([...companies, newCompany]);
      setQrFormData({ ...qrFormData, company: newCompany });
      setNewCompany("");
      setShowAddCompany(false);
      setIsDropdownOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setQrFormData({
      ...qrFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitQR = () => {
    if (
      qrFormData.name &&
      qrFormData.contact &&
      qrFormData.idNumber &&
      qrFormData.company
    ) {
      alert(
        `QR Code sent successfully!\n\nName: ${qrFormData.name}\nContact: ${qrFormData.contact}\nID: ${qrFormData.idNumber}\nCompany: ${qrFormData.company}`,
      );
      setShowQRModal(false);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 max-w-full ">
      {/* QR Generator Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-red-600">QR Generator</h1>
              <button
                onClick={() => setShowQRModal(false)}
                className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700"
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

            {/* Form Fields */}
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={qrFormData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter name"
                />
              </div>

              {/* Contact Field */}
              <div>
                <label className="text-sm text-gray-500 mb-1 block">
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  value={qrFormData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter contact"
                />
              </div>

              {/* ID Number Field */}
              <div>
                <label className="text-sm text-gray-500 mb-1 block">
                  ID Number
                </label>
                <input
                  type="text"
                  name="idNumber"
                  value={qrFormData.idNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter ID number"
                />
              </div>

              {/* Company Dropdown */}
              <div className="relative">
                <label className="text-sm text-gray-500 mb-1 block">
                  Company
                </label>
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-300 cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <span
                    className={
                      qrFormData.company ? "text-gray-700" : "text-gray-400"
                    }
                  >
                    {qrFormData.company || "Select a Company"}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-10 max-h-64 overflow-y-auto">
                    {companies.map((company, index) => (
                      <div
                        key={index}
                        onClick={() => handleCompanySelect(company)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-300 border-b border-gray-100 last:border-b-0"
                      >
                        {company}
                      </div>
                    ))}

                    {!showAddCompany ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowAddCompany(true);
                        }}
                        className="w-full px-4 py-3 bg-red-600 text-gray-300 font-semibold hover:bg-red-700"
                      >
                        ADD NEW COMPANY
                      </button>
                    ) : (
                      <div
                        className="p-3 bg-gray-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <input
                          type="text"
                          value={newCompany}
                          onChange={(e) => setNewCompany(e.target.value)}
                          placeholder="Enter company name"
                          className="w-full px-3 py-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={handleAddCompany}
                            className="flex-1 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-semibold"
                          >
                            Add
                          </button>
                          <button
                            onClick={() => {
                              setShowAddCompany(false);
                              setNewCompany("");
                            }}
                            className="flex-1 px-3 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm font-semibold"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Send QR Code Button */}
            <button
              onClick={handleSubmitQR}
              className="w-full mt-8 py-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-lg transition-all"
            >
              Send QR Code
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-1">
        <h1 className="text-2xl font-semibold text-gray-800">Visitors</h1>
      </div>

      {/* Total Visitors Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-[400px] mt-4">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-[#e8fbf3] rounded-2xl flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#00c853]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <span className="text-[#333] text-2xl font-semibold">
            Total Visitors
          </span>
        </div>

        {/* Stats and Chart Section */}
        <div className="flex items-end justify-between">
          <div className="text-6xl font-bold text-[#2d2d2d] tracking-tight">
            243
          </div>

          {/* Bar Chart - Symmetrical wave pattern */}
          <div className="flex items-end gap-[3px] h-20 pb-1">
            {[30, 45, 60, 80, 95, 100, 85, 70, 55, 40].map((height, idx) => (
              <div
                key={idx}
                className={`w-[10px] rounded-full transition-all ${
                  idx === 5 ? "bg-[#2d2d2d]" : "bg-gray-200"
                }`}
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Visitors Table */}
      <div className="bg-white rounded-3xl shadow-sm p-4 max-w-5xl mt-6">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-0">
            <thead>
              {/* Gray pill-shaped header row */}
              <tr className="bg-gray-50/80">
                <th className="text-left py-5 px-10 text-md font-normal  text-red-500 first:rounded-l-2xl w-1/3">
                  Visitor Name
                </th>
                <th className="text-left py-5 px-10 text-md font-normal  text-red-500 w-1/3">
                  Phone Number
                </th>
                <th className="text-center py-5 px-10 text-md  font-normal text-red-500 last:rounded-r-2xl w-1/3">
                  {/* Action header left empty as per screenshot */}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-0">
              {visitors.map((visitor) => (
                <tr
                  key={visitor.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-6 px-10 text-base text-gray-700 font-medium">
                    {visitor.name}
                  </td>
                  <td className="py-6 px-10 text-base text-gray-700">
                    {visitor.phone}
                  </td>
                  <td className="py-6 px-10 text-center">
                    <button
                      onClick={() => handleSendQR(visitor.id)}
                      className="bg-[#ef4444] hover:bg-red-600 text-white px-10 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all"
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
