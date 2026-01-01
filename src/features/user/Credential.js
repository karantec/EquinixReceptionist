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
      industry: company.industry,
      location: company.location,
      employees: company.employees,
    });
    setShowModal(true);
    setOpenMenuId(null);
  };

  const handleSaveCompany = () => {
    if (!formData.name.trim()) return;

    if (editingCompany) {
      setCompanies(
        companies.map((c) =>
          c.id === editingCompany.id
            ? { ...c, ...formData, employees: Number(formData.employees || 0) }
            : c
        )
      );
    } else {
      setCompanies([
        ...companies,
        {
          id: Date.now(),
          ...formData,
          employees: Number(formData.employees || 0),
        },
      ]);
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCompany(null);
    setFormData({ name: "", industry: "", location: "", employees: "" });
  };

  const handleDeleteCompany = (id) => {
    if (window.confirm("Delete this company?")) {
      setCompanies(companies.filter((c) => c.id !== id));
      setOpenMenuId(null);
    }
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-base font-medium text-gray-900">Companies</h1>
          <button
            onClick={handleOpenAddModal}
            className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2"
          >
            Add
            <img
              src="/icons/iconsax-add.png"
              alt="Close"
              className="w-8 h-8 p-1 rounded-md"
            />
          </button>
        </div>

        {/* Companies List */}
        <div className="space-y-3">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4 flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <p className="text-sm text-gray-900 font-normal">
                {company.name}
              </p>

              <div className="relative">
                <button
                  onClick={() =>
                    setOpenMenuId(openMenuId === company.id ? null : company.id)
                  }
                  className="p-1 text-gray-500 hover:text-gray-700 text-lg leading-none"
                >
                  ⋮
                </button>

                {openMenuId === company.id && (
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-10">
                    <button
                      onClick={() => handleOpenEditModal(company)}
                      className="w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCompany(company.id)}
                      className="w-full px-4 py-2.5 text-sm bg-red-500 text-white hover:bg-red-600 text-left flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-red-500">
                {editingCompany ? "Edit Company" : "Add Company"}
              </h2>
              <button
                onClick={handleCloseModal}
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

            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  placeholder="Enter industry"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employees
                </label>
                <input
                  type="number"
                  placeholder="Enter number of employees"
                  value={formData.employees}
                  onChange={(e) =>
                    setFormData({ ...formData, employees: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-3 px-6 py-4 border-t border-gray-200">
              <button
                onClick={handleCloseModal}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-4 rounded-lg font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCompany}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm"
              >
                {editingCompany ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Companies;
