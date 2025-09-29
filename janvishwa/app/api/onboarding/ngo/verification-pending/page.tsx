import Link from 'next/link'

export default function VerificationPending() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">⏳</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Registration Submitted!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering your NGO with JanVishva. Our team will review your application and verify your documents within 1-3 business days.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-900 mb-2">What happens next?</h3>
          <ul className="text-sm text-green-800 space-y-2 text-left">
            <li>✓ Document verification</li>
            <li>✓ Background check</li>
            <li>✓ Email notification of status</li>
          </ul>
        </div>
        <Link href="/" className="px-6 py-3 bg-gradient-to-r from-green-500 to-orange-500 text-white rounded-xl hover:from-green-600 hover:to-orange-600 font-semibold transition-all shadow-lg inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  )
}