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
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">ID Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
        >
          Add
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
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      {/* ID Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Uniq Number
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  ID Number
                </th>
                <th className="text-right p-4 text-sm font-medium text-red-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {idRecords.map((record) => (
                <tr
                  key={record.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 text-sm text-gray-800">
                    <div className="flex items-center gap-2">
                      {record.isActive && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                      {record.uniqNumber}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-800">
                    {record.idNumber}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleEdit(record)}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1"
                    >
                      Edit
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Add New ID
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setFormData({ uniqNumber: "", idNumber: "" });
                }}
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

            <div className="p-6 space-y-4">
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

              <div className="flex gap-3 pt-2">
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
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2.5 px-4 rounded-lg font-medium text-sm"
                >
                  Add ID
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Edit ID</h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setFormData({ uniqNumber: "", idNumber: "" });
                  setSelectedRecord(null);
                }}
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

            <div className="p-6 space-y-4">
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

              <div className="flex gap-3 pt-2">
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
        </div>
      )}
    </div>
  );
}

export default IDManagement;
