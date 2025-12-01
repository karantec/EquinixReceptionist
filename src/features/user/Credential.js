import { useState } from "react";

function Companies() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Muenchener Rueckversicherungs Gesellschaft in Muenchen A",
      industry: "Insurance",
      location: "Munich, Germany",
      employees: 45000,
    },
    {
      id: 2,
      name: "Essilor International Compagnie Generale d'Optique S",
      industry: "Optics",
      location: "Paris, France",
      employees: 77000,
    },
    {
      id: 3,
      name: "Perpetual Income & Growth Investment Trust PL",
      industry: "Finance",
      location: "London, UK",
      employees: 250,
    },
    {
      id: 4,
      name: "Banco Bilbao Vizcaya Argentaria",
      industry: "Banking",
      location: "Bilbao, Spain",
      employees: 120000,
    },
    {
      id: 5,
      name: "Johnson Thompson Brady Paul",
      industry: "Consulting",
      location: "New York, USA",
      employees: 5000,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    location: "",
    employees: "",
  });
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleOpenAddModal = () => {
    setEditingCompany(null);
    setFormData({ name: "", industry: "", location: "", employees: "" });
    setShowModal(true);
  };

  const handleOpenEditModal = (company) => {
    setEditingCompany(company);
    setFormData({
      name: company.name,
      industry: company.industry || "",
      location: company.location || "",
      employees: company.employees || "",
    });
    setShowModal(true);
    setOpenMenuId(null);
  };

  const handleSaveCompany = () => {
    if (formData.name.trim()) {
      if (editingCompany) {
        // Update existing company
        setCompanies(
          companies.map((c) =>
            c.id === editingCompany.id
              ? {
                  ...c,
                  name: formData.name.trim(),
                  industry: formData.industry.trim(),
                  location: formData.location.trim(),
                  employees: formData.employees
                    ? parseInt(formData.employees)
                    : 0,
                }
              : c
          )
        );
      } else {
        // Add new company
        const newCompany = {
          id: companies.length + 1,
          name: formData.name.trim(),
          industry: formData.industry.trim(),
          location: formData.location.trim(),
          employees: formData.employees ? parseInt(formData.employees) : 0,
        };
        setCompanies([...companies, newCompany]);
      }
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCompany(null);
    setFormData({ name: "", industry: "", location: "", employees: "" });
  };

  const handleDeleteCompany = (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      setCompanies(companies.filter((c) => c.id !== id));
      setOpenMenuId(null);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Companies</h1>
        <button
          onClick={handleOpenAddModal}
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
      <div className="space-y-4 max-w-3xl">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-800">{company.name}</p>
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenMenuId(openMenuId === company.id ? null : company.id)
                  }
                  className="text-gray-600 hover:text-gray-800 p-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {openMenuId === company.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button
                      onClick={() => handleOpenEditModal(company)}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                    >
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      <span className="text-red-500">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteCompany(company.id)}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-b-lg"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Company Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                {editingCompany ? "Edit Company" : "Add New Company"}
              </h2>
              <button
                onClick={handleCloseModal}
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
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-4 rounded-lg font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveCompany}
                  className="flex-1 bg-red-800 hover:bg-red-900 text-white py-2.5 px-4 rounded-lg font-medium text-sm"
                >
                  {editingCompany ? "Update Company" : "Add Company"}
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
