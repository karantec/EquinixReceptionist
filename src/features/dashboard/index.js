import { useState } from "react";

function Dashboard() {
  // Sample visitor data
  const visitorData = [
    {
      name: "Karne",
      company: "Avocado Tech",
      idNumber: "AWC793-34",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Arjuna",
      company: "Designerso",
      idNumber: "DSV878-32",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
    {
      name: "Krishna",
      company: "Pearlperfast",
      idNumber: "PXP543-24",
      email: "prindivrajkundnani@gmail.com",
    },
  ];

  const chartData = [
    20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45, 55, 50, 60, 55, 65,
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-blue-600">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
        {/* Today Visitors Card */}
        <div className="bg-white rounded-lg shadow p-6">
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
            <span className="text-gray-600 text-sm mt-2">Today Visitors</span>
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
      </div>

      {/* Visitor Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Visitor Name
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Company Name
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  ID Number
                </th>
                <th className="text-left p-4 text-sm font-medium text-red-500">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {visitorData.map((visitor, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 text-sm text-gray-800">{visitor.name}</td>
                  <td className="p-4 text-sm text-gray-800">
                    {visitor.company}
                  </td>
                  <td className="p-4 text-sm text-gray-800">
                    {visitor.idNumber}
                  </td>
                  <td className="p-4 text-sm text-gray-600">{visitor.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
