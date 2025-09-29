import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect('/sign-in');

  // Try to find user with retry logic for race conditions
  let user = await prisma.user.findUnique({
    where: { clerkUserId: clerkUser.id },
    include: {
      individualProfile: true,
      ngoProfile: true
    }
  });

  // If user doesn't exist, wait a moment and try once more (handles race condition)
  if (!user) {
    await new Promise(resolve => setTimeout(resolve, 500));
    user = await prisma.user.findUnique({
      where: { clerkUserId: clerkUser.id },
      include: {
        individualProfile: true,
        ngoProfile: true
      }
    });
  }

  // If still no user, redirect to onboarding
  if (!user) {
    const userType = clerkUser.unsafeMetadata?.userType as string;
    
    if (userType === 'NGO') {
      redirect('/onboarding/ngo/step-1');
    }
    redirect('/onboarding/individual');
  }

  // If NGO user, redirect to NGO dashboard
  if (user.userType === 'NGO') {
    if (user.ngoProfile && !user.ngoProfile.verifiedAt) {
      redirect('/onboarding/ngo/verification-pending');
    }
    redirect('/dashboard/ngo');
  }

  // If INDIVIDUAL user but no profile, redirect to onboarding
  if (user.userType === 'INDIVIDUAL' && !user.individualProfile) {
    redirect('/onboarding/individual');
  }

  // Continue with individual dashboard
  const firstName = clerkUser.firstName ?? 'User';
  const profile = user.individualProfile;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">JanVishva</h1>
                <p className="text-xs text-gray-500">जनविश्व</p>
              </div>
            </Link>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-orange-600 font-medium">Dashboard</Link>
                <Link href="/explore" className="text-gray-700 hover:text-orange-600 font-medium">Explore</Link>
                <Link href="/my-impact" className="text-gray-700 hover:text-orange-600 font-medium">My Impact</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 hidden sm:block">Welcome, {firstName}!</span>
                <UserButton appearance={{ elements: { avatarBox: 'w-10 h-10' } }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Welcome Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-3">
                Welcome back, {firstName}! 🎯
              </h2>
              <p className="text-xl opacity-95 mb-6">
                Ready to make a difference in your community today?
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/donate" className="px-6 py-3 bg-white text-orange-600 rounded-xl hover:bg-gray-100 font-semibold transition-all shadow-lg">
                  🎁 Donate Now
                </Link>
                <Link href="/volunteer" className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 font-semibold transition-all">
                  🙋‍♂️ Find Opportunities
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-7xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <span className="text-xs text-gray-500 bg-orange-50 px-3 py-1 rounded-full">+0 this week</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Impact Score</p>
            <p className="text-4xl font-bold text-orange-500">{profile?.impactScore || 0}</p>
            <p className="text-xs text-gray-500 mt-2">Start contributing to earn points!</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <span className="text-xs text-gray-500 bg-green-50 px-3 py-1 rounded-full">Active</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">NGOs Supported</p>
            <p className="text-4xl font-bold text-green-500">0</p>
            <p className="text-xs text-gray-500 mt-2">Find and support local NGOs</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
              <span className="text-xs text-gray-500 bg-blue-50 px-3 py-1 rounded-full">0h this month</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Volunteer Hours</p>
            <p className="text-4xl font-bold text-blue-500">{profile?.totalVolunteerHours || 0}</p>
            <p className="text-xs text-gray-500 mt-2">Track your volunteer time</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <span className="text-xs text-gray-500 bg-purple-50 px-3 py-1 rounded-full">₹0 this month</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Donations</p>
            <p className="text-4xl font-bold text-purple-500">₹{profile?.totalDonations ? Number(profile.totalDonations).toFixed(0) : '0'}</p>
            <p className="text-xs text-gray-500 mt-2">Monetary + Item value</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/quick-donate" className="flex items-center p-5 rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all group">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Quick Donate</h4>
                    <p className="text-sm text-gray-600">Donate to urgent needs</p>
                  </div>
                </Link>
                
                <Link href="/emergency-response" className="flex items-center p-5 rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all group">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🚨</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Emergency Response</h4>
                    <p className="text-sm text-gray-600">Help disaster relief</p>
                  </div>
                </Link>

                <Link href="/create-drive" className="flex items-center p-5 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all group">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">📢</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Create Drive</h4>
                    <p className="text-sm text-gray-600">Start a donation drive</p>
                  </div>
                </Link>

                <Link href="/explore-map" className="flex items-center p-5 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🗺️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Explore Map</h4>
                    <p className="text-sm text-gray-600">Find nearby opportunities</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Upcoming Volunteer Events</h3>
                <Link href="/events" className="text-orange-600 hover:text-orange-700 font-medium text-sm">View All</Link>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-xl border-2 border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Book Distribution Drive</h4>
                        <p className="text-sm text-gray-600">Vidya Foundation</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">This Weekend</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Help distribute educational materials to 500+ students in rural areas</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📍 Pune</span>
                      <span>⏰ 6 hours</span>
                      <span>👥 5/10 volunteers</span>
                    </div>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                      Join Event
                    </button>
                  </div>
                </div>

                <div className="p-5 rounded-xl border-2 border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🌱</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Tree Plantation Drive</h4>
                        <p className="text-sm text-gray-600">Green Bharat</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Next Week</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Join us to plant 200 saplings in local parks and public spaces</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📍 Kothrud</span>
                      <span>⏰ 4 hours</span>
                      <span>👥 12/20 volunteers</span>
                    </div>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📋</span>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">No activity yet</h4>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Start by donating items, volunteering, or supporting a local NGO to see your impact here.
                </p>
                <Link href="/explore" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-xl hover:from-orange-600 hover:to-green-600 font-semibold transition-all shadow-lg hover:shadow-xl inline-block">
                  Explore Opportunities
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-3xl">{firstName.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{firstName} {clerkUser.lastName}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Member since</span>
                  <span className="font-medium text-gray-900">
                    {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
                {profile?.city && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium text-gray-900">{profile.city}, {profile.state}</span>
                  </div>
                )}
              </div>

              <Link href="/profile/edit" className="w-full py-2 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 font-medium transition-all text-center block">
                Edit Profile
              </Link>
            </div>

            {/* Skills & Interests */}
            {(profile?.skills && profile.skills.length > 0) || (profile?.interests && profile.interests.length > 0) ? (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                {profile.skills && profile.skills.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Your Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {profile.interests && profile.interests.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Your Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest) => (
                        <span key={interest} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            {/* Nearby NGOs */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Nearby NGOs</h3>
                <Link href="/ngos" className="text-orange-600 hover:text-orange-700 font-medium text-sm">View All</Link>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📚</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">Vidya Foundation</h4>
                      <p className="text-xs text-gray-600">Education</p>
                      <p className="text-xs text-green-600 mt-1">📍 2.5 km away</p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                    Support
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🏥</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">Seva Health Care</h4>
                      <p className="text-xs text-gray-600">Healthcare</p>
                      <p className="text-xs text-green-600 mt-1">📍 1.8 km away</p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    Support
                  </button>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-2 grayscale opacity-50">🏆</div>
                  <p className="text-xs text-gray-500">First Donation</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-2 grayscale opacity-50">⭐</div>
                  <p className="text-xs text-gray-500">10 Hours</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-2 grayscale opacity-50">🎯</div>
                  <p className="text-xs text-gray-500">Impact Hero</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">Start contributing to unlock badges</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}