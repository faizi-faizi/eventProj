import React from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      {/* White Form Container */}
      <div className="bg-white w-full max-w-3xl p-10 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Registration Form
        </h2>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Full Name
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Address
            </label>
            <input
              type="text"
              placeholder="Office, Suite, Apartment"
              className="w-full border border-gray-300 p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* City, State, Pincode */}
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Promo Code + Register Button */}
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Promo Code"
              className="border border-gray-300 p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white font-semibold transition-all duration-300 hover:bg-gray-800"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}