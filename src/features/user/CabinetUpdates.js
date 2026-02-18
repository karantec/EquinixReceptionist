import React, { useState } from "react";

// --- Icons ---
const ChevronRight = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

/**
 * Updated Edit Icon: Matches the uploaded image.
 * Features a solid filled pencil at an angle with a base underline.
 */
const EditIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    {/* The Pencil Body */}
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    {/* The Underline */}
    <rect x="2" y="22" width="20" height="1.5" rx="0.75" />
  </svg>
);

export default function IDManagementPage() {
  const [visitors] = useState([
    { id: 1, name: "Karna", phone: "+91 9935164156" },
    { id: 2, name: "Karna", phone: "+91 9935164156" },
    { id: 3, name: "Karna", phone: "+91 9935164156" },
    { id: 4, name: "Karna", phone: "+91 9935164156" },
    { id: 5, name: "Karna", phone: "+91 9935164156" },
    { id: 6, name: "Karna", phone: "+91 9935164156" },
    { id: 7, name: "Karna", phone: "+91 9935164156" },
  ]);

  const handleEdit = (visitor) => {
    console.log("Editing visitor:", visitor);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-2 font-sans text-[#2D2D2D]">
      <div className="max-w-5xl ml-0">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">ID Management</h1>
          <button className="bg-[#2D2D2D] hover:bg-black text-white pl-5 pr-2 py-2 rounded-xl flex items-center gap-3 transition-all">
            <span className="text-sm font-semibold tracking-wide">Add</span>
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

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-sm p-4 mt-6">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-0">
              <thead>
                <tr className="bg-gray-50/80">
                  <th className="text-left py-5 px-10 text-md font-medium text-red-500 first:rounded-l-2xl">
                    Visitor Name
                  </th>
                  <th className="text-left py-5 px-10 text-md font-medium text-red-500">
                    Phone Number
                  </th>
                  <th className="text-right py-5 px-10 last:rounded-r-2xl">
                    {/* Actions */}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {visitors.map((visitor) => (
                  <tr
                    key={visitor.id}
                    className="hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="py-4 px-10 text-base font-medium">
                      {visitor.name}
                    </td>
                    <td className="py-4 px-10 text-base text-gray-600">
                      {visitor.phone}
                    </td>
                    <td className="py-4 px-10 text-right">
                      <button
                        onClick={() => handleEdit(visitor)}
                        className="bg-[#ef4444] hover:bg-red-600 text-white px-8 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-sm transition-all active:scale-95"
                      >
                        Edit
                        <EditIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <div className="flex items-center justify-center gap-4 mt-12 mb-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-[#ef4444] font-bold text-sm">
              1
            </button>
            <button className="text-gray-400 font-semibold hover:text-gray-600 text-sm px-2 transition-colors">
              2
            </button>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 font-semibold text-sm">3</span>
              <span className="text-gray-300 tracking-[0.3em] px-2">....</span>
              <span className="text-gray-400 font-semibold text-sm">6</span>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
