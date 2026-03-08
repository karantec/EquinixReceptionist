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
            : c,
        ),
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
    <div className="min-h-screen  p-2">
      <div className="max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-medium text-gray-900">Companies</h1>
          <button
            onClick={handleOpenAddModal}
            className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2"
          >
            Add
            <div className="bg-white/20 p-1.5 rounded-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
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

                {/* {openMenuId === company.id && (
                  <div className="absolute left-full top-0 ml-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-10">
                    <button
                      onClick={() => handleOpenEditModal(company)}
                      className="w-full py-1.5 px-3 rounded-full border border-red-400 text-red-400 bg-white text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-red-50"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCompany(company.id)}
                      className="w-full py-1.5 px-3 rounded-full bg-red-500 text-white text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-red-600"
                    >
                      <svg
                        className="w-3 h-3"
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
                )} */}
                {openMenuId === company.id && (
                  <div className="absolute left-full top-0 ml-1 z-10 bg-white border border-gray-100 rounded-xl shadow-lg p-2 flex flex-col gap-2 w-40">
                    <button
                      onClick={() => handleOpenEditModal(company)}
                      className="w-full py-2 px-6 rounded-lg border border-red-200 text-red-500 bg-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCompany(company.id)}
                      className="w-full py-2 px-6 rounded-lg bg-red-500 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-600"
                    >
                      <svg
                        className="w-3.5 h-3.5"
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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 pt-5 pb-2">
              <h2 className="text-lg font-bold text-red-500">
                {editingCompany ? "Edit Company" : "Add Company"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-4">
              <label className="block text-xs text-gray-400 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter Company Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 border-none"
              />
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={handleSaveCompany}
                className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
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
