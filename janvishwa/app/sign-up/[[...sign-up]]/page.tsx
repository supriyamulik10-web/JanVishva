'use client'

import { SignUp } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'

export default function SignUpPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const isNgo = type === 'ngo'

  return (
    <div className={`min-h-screen ${isNgo ? 'bg-gradient-to-br from-green-50 via-white to-orange-50' : 'bg-gradient-to-br from-orange-50 via-white to-green-50'} flex items-center justify-center py-12 px-4`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className={`mx-auto h-16 w-16 bg-gradient-to-r ${isNgo ? 'from-green-500 to-orange-500' : 'from-orange-500 to-green-500'} rounded-full flex items-center justify-center mb-6`}>
            <span className="text-white font-bold text-2xl">{isNgo ? '🏢' : '👤'}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {isNgo ? 'Register as ' : 'Join as '}
            <span className={isNgo ? 'text-green-500' : 'text-orange-500'}>
              {isNgo ? 'NGO' : 'Individual'}
            </span>
          </h2>
          <p className="mt-2 text-gray-600">
            {isNgo ? 'Connect with generous supporters' : 'Start making an impact in your community'}
          </p>
        </div>

        <div className="flex justify-center">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: `bg-gradient-to-r ${isNgo ? 'from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600' : 'from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600'} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg`,
                card: 'shadow-2xl border-0 rounded-2xl',
                headerTitle: 'text-gray-900 font-bold',
                headerSubtitle: 'text-gray-600',
                socialButtonsBlockButton: `border-2 border-gray-200 ${isNgo ? 'hover:border-green-300' : 'hover:border-orange-300'} transition-colors rounded-lg`,
                formFieldInput: `rounded-lg border-gray-300 ${isNgo ? 'focus:border-green-500 focus:ring-green-500' : 'focus:border-orange-500 focus:ring-orange-500'}`,
                footerActionLink: `${isNgo ? 'text-green-600 hover:text-green-700' : 'text-orange-600 hover:text-orange-700'} font-medium`
              }
            }}
            unsafeMetadata={{
              userType: isNgo ? 'NGO' : 'INDIVIDUAL'
            }}
            afterSignUpUrl={isNgo ? '/onboarding/ngo/step-1' : '/onboarding/individual'}
  // also keep forceRedirectUrl for immediate sign-ups
  forceRedirectUrl={isNgo ? '/onboarding/ngo/step-1' : '/onboarding/individual'}

          />
        </div>

        {isNgo && (
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-gray-900 text-center mb-4">NGO Registration Requirements</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-green-600">📄</span>
                <span className="text-gray-700">Valid registration certificate</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600">🏦</span>
                <span className="text-gray-700">Bank account details</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Verification process (1-3 days)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}