import { useState } from "react";

function IDManagement() {
  const [idRecords, setIdRecords] = useState([
    { id: 1, uniqNumber: 1, idNumber: "AVC793-34", isActive: true },
    { id: 2, uniqNumber: 4, idNumber: "AVC793-34", isActive: false },
    { id: 3, uniqNumber: 23, idNumber: "AVC793-34", isActive: true },
    { id: 4, uniqNumber: 34, idNumber: "AVC793-34", isActive: false },
    { id: 5, uniqNumber: 43, idNumber: "AVC793-34", isActive: false },
    { id: 6, uniqNumber: 54, idNumber: "AVC793-34", isActive: false },
    { id: 7, uniqNumber: 77, idNumber: "AVC793-34", isActive: false },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [formData, setFormData] = useState({
    uniqNumber: "",
    idNumber: "",
  });

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setFormData({
      uniqNumber: record.uniqNumber,
      idNumber: record.idNumber,
    });
    setShowEditModal(true);
  };

  const handleAdd = () => {
    if (formData.uniqNumber && formData.idNumber) {
      const newRecord = {
        id: idRecords.length + 1,
        uniqNumber: parseInt(formData.uniqNumber),
        idNumber: formData.idNumber,
        isActive: false,
      };
      setIdRecords([...idRecords, newRecord]);
      setFormData({ uniqNumber: "", idNumber: "" });
      setShowAddModal(false);
    }
  };

  const handleUpdate = () => {
    if (formData.uniqNumber && formData.idNumber) {
      setIdRecords(
        idRecords.map((record) =>
          record.id === selectedRecord.id
            ? {
                ...record,
                uniqNumber: parseInt(formData.uniqNumber),
                idNumber: formData.idNumber,
              }
            : record
        )
      );
      setFormData({ uniqNumber: "", idNumber: "" });
      setShowEditModal(false);
      setSelectedRecord(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl ">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            ID Management
          </h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
          >
            Add
            <img
              src="/icons/iconsax-add.png"
              alt="Close"
              className="w-8 h-8 p-1 rounded-md"
            />
          </button>
        </div>

        {/* ID Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-[#BBBCBB1A]">
            <div className="text-sm font-medium text-red-500">Uniq Number</div>
            <div className="text-sm font-medium text-red-500">ID Number</div>
          </div>

          {idRecords.map((record, index) => (
            <div
              key={record.id}
              className={`grid grid-cols-3 gap-4 px-6 py-4 items-center hover:bg-gray-50 ${
                index !== idRecords.length - 1 ? "" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {record.isActive && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
                <span className="text-sm text-gray-900">
                  {record.uniqNumber}
                </span>
              </div>
              <div className="text-sm text-gray-900">{record.idNumber}</div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleEdit(record)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md text-sm font-semibold flex items-center gap-2"
                >
                  Edit
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-end items-center gap-2 px-6 py-4 bg-white">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex items-center justify-center text-sm ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ‹
            </button>

            <button
              onClick={() => setCurrentPage(1)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                currentPage === 1
                  ? "bg-red-100 text-red-500"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              1
            </button>

            <button
              onClick={() => setCurrentPage(2)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                currentPage === 2
                  ? "bg-red-100 text-red-500"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              2
            </button>

            <button
              onClick={() => setCurrentPage(3)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                currentPage === 3
                  ? "bg-red-100 text-red-500"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              3
            </button>

            <span className="text-gray-400 text-sm px-1">........</span>

            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-red-100 text-red-500"
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
              className={`w-8 h-8 flex items-center justify-center text-sm ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ›
            </button>

            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 ml-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Add New ID
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setFormData({ uniqNumber: "", idNumber: "" });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <img
                  src="./icons/add.png"
                  alt="Close"
                  className="w-6 h-6 p-1 rounded-md bg-gray-400"
                />
              </button>
            </div>

            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unique Number
                </label>
                <input
                  type="number"
                  value={formData.uniqNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, uniqNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter unique number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID Number
                </label>
                <input
                  type="text"
                  value={formData.idNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, idNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter ID number"
                />
              </div>
            </div>

            <div className="flex gap-3 px-6 py-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setFormData({ uniqNumber: "", idNumber: "" });
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-4 rounded-lg font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm"
              >
                Add ID
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Edit ID</h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setFormData({ uniqNumber: "", idNumber: "" });
                  setSelectedRecord(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unique Number
                </label>
                <input
                  type="number"
                  value={formData.uniqNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, uniqNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter unique number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID Number
                </label>
                <input
                  type="text"
                  value={formData.idNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, idNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter ID number"
                />
              </div>
            </div>

            <div className="flex gap-3 px-6 py-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setFormData({ uniqNumber: "", idNumber: "" });
                  setSelectedRecord(null);
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-4 rounded-lg font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IDManagement;
