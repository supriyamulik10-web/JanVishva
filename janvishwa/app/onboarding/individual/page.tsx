'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

export default function IndividualOnboarding() {
  const { user, isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    skills: [] as string[],
    interests: [] as string[]
  })

  const skillOptions = ['Teaching', 'Healthcare', 'Technology', 'Marketing', 'Finance', 'Legal', 'Construction', 'Arts']
  const interestOptions = ['Education', 'Healthcare', 'Environment', 'Poverty Alleviation', 'Women Empowerment', 'Child Welfare']

  useEffect(() => {
    console.log('Onboarding - isLoaded:', isLoaded, 'isSignedIn:', isSignedIn)
    if (!isLoaded) return
    
    if (!isSignedIn) {
      console.log('Not signed in, redirecting to sign-in')
      router.push('/sign-in')
      return
    }
    
    setLoading(false)
  }, [isLoaded, isSignedIn, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      setError('User not found. Please sign in again.')
      return
    }

    setLoading(true)
    setError('')
    
    console.log('Submitting onboarding data...')
    
    try {
      const payload = {
        clerkUserId: user.id,
        email: user.emailAddresses?.[0]?.emailAddress || '',
        firstName: user.firstName,
        lastName: user.lastName,
        ...formData
      }
      
      console.log('Payload:', payload)

      const res = await fetch('/api/onboarding/individual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      console.log('Response status:', res.status)
      const data = await res.json()
      console.log('Response data:', data)

      if (res.ok && data.success) {
        console.log('Profile saved successfully, redirecting to dashboard...')
        // Force a hard redirect to ensure dashboard loads fresh data
        window.location.href = '/dashboard'
      } else {
        setError(data?.error || data?.details || 'Failed to save profile.')
        setLoading(false)
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Failed to save profile. Please try again.')
      setLoading(false)
    }
  }

  const toggleArrayItem = (array: string[], item: string) =>
    array.includes(item) ? array.filter(i => i !== item) : [...array, item]

  if (!isLoaded || (loading && !error)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Profile</h1>
          <p className="text-gray-600 mb-8">Help us personalize your JanVishva experience</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="+91 1234567890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Street address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Pune"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Maharashtra"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
              <input
                type="text"
                value={formData.pincode}
                onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="411001"
                maxLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Skills (Select all that apply)</label>
              <div className="grid grid-cols-2 gap-3">
                {skillOptions.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => setFormData({...formData, skills: toggleArrayItem(formData.skills, skill)})}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      formData.skills.includes(skill)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interests (Causes you care about)</label>
              <div className="grid grid-cols-2 gap-3">
                {interestOptions.map(interest => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => setFormData({...formData, interests: toggleArrayItem(formData.interests, interest)})}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      formData.interests.includes(interest)
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-xl hover:from-orange-600 hover:to-green-600 font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Complete Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}