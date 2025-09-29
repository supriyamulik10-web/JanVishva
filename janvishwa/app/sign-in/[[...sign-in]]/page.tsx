"use client";

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // 'ngo' or 'individual'
  const isNgo = type === "ngo";

  return (
    <div
      className={`min-h-screen ${
        isNgo
          ? "bg-gradient-to-br from-green-50 via-white to-orange-50"
          : "bg-gradient-to-br from-orange-50 via-white to-green-50"
      } flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div
            className={`mx-auto h-16 w-16 bg-gradient-to-r ${
              isNgo ? "from-green-500 to-orange-500" : "from-orange-500 to-green-500"
            } rounded-full flex items-center justify-center mb-6`}
          >
            <span className="text-white font-bold text-2xl">{isNgo ? "🏢" : "👤"}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {isNgo ? "NGO Login" : "Individual Login"}{" "}
            <span className={isNgo ? "text-green-500" : "text-orange-500"}></span>
          </h2>
          <p className="mt-2 text-gray-600">
            {isNgo ? "Access your NGO dashboard" : "Sign in to start making an impact in your community"}
          </p>
          <p className="text-sm text-gray-500 mt-1">जनविश्व में आपका स्वागत है</p>
        </div>

        {/* Clerk Sign In Component */}
        <div className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: `bg-gradient-to-r ${
                  isNgo
                    ? "from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
                    : "from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600"
                } text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg`,
                card: "shadow-2xl border-0 rounded-2xl",
                headerTitle: "text-gray-900 font-bold",
                headerSubtitle: "text-gray-600",
                socialButtonsBlockButton: `border-2 border-gray-200 ${
                  isNgo ? "hover:border-green-300" : "hover:border-orange-300"
                } transition-colors rounded-lg`,
                formFieldInput: `rounded-lg border-gray-300 ${
                  isNgo
                    ? "focus:border-green-500 focus:ring-green-500"
                    : "focus:border-orange-500 focus:ring-orange-500"
                }`,
                footerActionLink: `${
                  isNgo ? "text-green-600 hover:text-green-700" : "text-orange-600 hover:text-orange-700"
                } font-medium`,
              },
            }}
            forceRedirectUrl={isNgo ? "/dashboard/ngo" : "/dashboard/individual"}
          />
        </div>

        {/* Features Preview */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-medium text-gray-900">Connect</h3>
            <p className="text-sm text-gray-600">Find local NGOs</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-medium text-gray-900">Locate</h3>
            <p className="text-sm text-gray-600">Real-time needs map</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-medium text-gray-900">Track</h3>
            <p className="text-sm text-gray-600">Impact analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}
