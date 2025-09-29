import Link from 'next/link'

export default function SelectUserType() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mb-6">
            <span className="text-white font-bold text-2xl">J</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join <span className="text-orange-500">JanVishva</span>
          </h1>
          <p className="text-xl text-gray-600">How would you like to participate?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual User Card */}
          <Link href="/sign-up?type=individual" className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-orange-500 cursor-pointer group">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <span className="text-4xl">👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Individual</h2>
                <p className="text-gray-600 mb-4">I want to donate, volunteer, or support NGOs</p>
              </div>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Donate items or money
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Volunteer your time
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Track your impact
                </li>
              </ul>
              <div className="w-full py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 font-semibold transition-colors">
                Continue as Individual
              </div>
            </div>
          </Link>

          {/* NGO Card */}
          <Link href="/sign-up?type=ngo" className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-500 cursor-pointer group">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <span className="text-4xl">🏢</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">NGO / Organization</h2>
                <p className="text-gray-600 mb-4">I represent an NGO seeking support</p>
              </div>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Post your needs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Connect with donors
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Manage volunteers
                </li>
              </ul>
              <div className="w-full py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 font-semibold transition-colors">
                Register as NGO
              </div>
            </div>
          </Link>
        </div>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-orange-600 hover:text-orange-700 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}