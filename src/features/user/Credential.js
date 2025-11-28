import { useState } from "react";

function Companies() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Muenchener Rueckversicherungs Gesellschaft in Muenchen A",
    },
    {
      id: 2,
      name: "Essilor International Compagnie Generale d'Optique S",
    },
    {
      id: 3,
      name: "Perpetual Income & Growth Investment Trust PL",
    },
    {
      id: 4,
      name: "Banco Bilbao Vizcaya Argentaria",
    },
    {
      id: 5,
      name: "Johnson Thompson Brady Paul",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState("");

  const handleAddCompany = () => {
    if (newCompanyName.trim()) {
      const newCompany = {
        id: companies.length + 1,
        name: newCompanyName.trim(),
      };
      setCompanies([...companies, newCompany]);
      setNewCompanyName("");
      setShowAddModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Companies</h1>
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

      {/* Companies List */}
      <div className="space-y-4 max-w-2xl">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <p className="text-sm text-gray-800">{company.name}</p>
          </div>
        ))}
      </div>

      {/* Add Company Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Add New Company
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewCompanyName("");
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

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={newCompanyName}
                  onChange={(e) => setNewCompanyName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddCompany();
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter company name"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setNewCompanyName("");
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-4 rounded-lg font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCompany}
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2.5 px-4 rounded-lg font-medium text-sm"
                >
                  Add Company
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Companies;
