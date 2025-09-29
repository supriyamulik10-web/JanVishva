import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();

  return (
    <div className="min-h-screen">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">JanVishva</h1>
                <p className="text-xs text-gray-500">जनविश्व</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
              <Link href="/ngos" className="text-gray-700 hover:text-orange-600 font-medium">NGOs</Link>
              <Link href="/volunteer" className="text-gray-700 hover:text-orange-600 font-medium">Volunteer</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link href="/dashboard" className="hidden sm:block px-4 py-2 text-orange-600 hover:text-orange-700 font-medium">
                    Dashboard
                  </Link>
                  <UserButton />
                </div>
              ) : (
                <>
                  <Link href="/sign-in" className="hidden sm:block px-4 py-2 text-orange-600 hover:text-orange-700 font-medium">
                    Sign In
                  </Link>
                  <Link href="/select-user-type" className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium transition-all shadow-md hover:shadow-lg">
                    Join Now
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Main Headline */}
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Connecting 
                  <span className="text-orange-500"> Hearts</span>,
                  <br />Changing 
                  <span className="text-green-500"> Lives</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Bridge the gap between generous hearts and local NGOs. Make your donations count with real-time impact tracking and community-driven change.
                </p>
                <p className="text-gray-500 font-medium flex items-center">
                  <span className="mr-2">🇮🇳</span>
                  Empowering communities across Bharat, one connection at a time
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/select-user-type" className="px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 font-semibold transition-all shadow-lg hover:shadow-xl text-center">
                  Start Donating 🤝
                </Link>
                <Link href="/select-user-type" className="px-8 py-4 bg-white text-green-600 border-2 border-green-500 rounded-xl hover:bg-green-50 font-semibold transition-all shadow-lg text-center">
                  Volunteer Now 🙋‍♂️
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-gray-600">NGOs Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">10K+</div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">₹2Cr+</div>
                  <div className="text-gray-600">Donations</div>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-green-400 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-6xl">🤝</span>
                  </div>
                  <p className="text-gray-600 font-medium text-lg">
                    Community Unity & Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NGOs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-gray-900">
              Featured <span className="text-orange-500">NGOs</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover verified organizations making real impact in communities across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NGO Cards */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-orange-200 group">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-2xl flex items-center justify-center">
                <span className="text-5xl">📚</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-semibold text-gray-900">Vidya Foundation</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Education</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Providing quality education to underprivileged children in rural Maharashtra.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Needs: Books, Stationery</span>
                    <span className="text-green-600 font-medium">📍 2.5 km</span>
                  </div>
                  <button className="w-full py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 font-medium transition-colors">
                    Support Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-green-200 group">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-2xl flex items-center justify-center">
                <span className="text-5xl">🏥</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-semibold text-gray-900">Seva Health Care</h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Healthcare</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Free medical camps and healthcare services for slum communities.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Needs: Medicines</span>
                    <span className="text-green-600 font-medium">📍 1.8 km</span>
                  </div>
                  <button className="w-full py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 font-medium transition-colors">
                    Support Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-green-200 group">
              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-200 rounded-t-2xl flex items-center justify-center">
                <span className="text-5xl">🌱</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-semibold text-gray-900">Green Bharat</h4>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Environment</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Environmental conservation and tree plantation drives across urban areas.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Needs: Saplings, Tools</span>
                    <span className="text-green-600 font-medium">📍 3.2 km</span>
                  </div>
                  <button className="w-full py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 font-medium transition-colors">
                    Support Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/ngos" className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-xl hover:bg-orange-50 font-semibold transition-all">
              View All NGOs →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-gray-900">
              How <span className="text-green-500">JanVishva</span> Works
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to create meaningful impact in your community
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">Sign Up</h4>
                <p className="text-gray-600">Create your account as a donor, volunteer, or NGO in minutes</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">Discover</h4>
                <p className="text-gray-600">Find NGOs and causes near you using our location-based map</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">Connect</h4>
                <p className="text-gray-600">Donate items, volunteer time, or share your professional skills</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">Impact</h4>
                <p className="text-gray-600">Track your contributions and see the real-world impact you're making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 text-white">
            <h3 className="text-4xl lg:text-5xl font-bold">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              Join thousands of changemakers who are building a better tomorrow, one connection at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/select-user-type" className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-gray-50 font-semibold transition-all shadow-lg hover:shadow-xl">
                🎯 Start Your Impact Journey
              </Link>
              <Link href="/download" className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-green-600 font-semibold transition-all">
                📱 Download App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">JanVishva</h4>
                  <p className="text-xs text-gray-400">जनविश्व</p>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Connecting generous hearts with local NGOs to create lasting impact in communities across India.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-white">Quick Links</h5>
              <div className="space-y-2">
                <Link href="/ngos" className="block hover:text-orange-400 transition-colors">Find NGOs</Link>
                <Link href="/volunteer" className="block hover:text-orange-400 transition-colors">Volunteer</Link>
                <Link href="/donate" className="block hover:text-orange-400 transition-colors">Donate Items</Link>
                <Link href="/skills" className="block hover:text-orange-400 transition-colors">Share Skills</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-white">Support</h5>
              <div className="space-y-2">
                <Link href="/help" className="block hover:text-orange-400 transition-colors">Help Center</Link>
                <Link href="/contact" className="block hover:text-orange-400 transition-colors">Contact Us</Link>
                <Link href="/guidelines" className="block hover:text-orange-400 transition-colors">Guidelines</Link>
                <Link href="/safety" className="block hover:text-orange-400 transition-colors">Safety</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-white">Legal</h5>
              <div className="space-y-2">
                <Link href="/privacy" className="block hover:text-orange-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-orange-400 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="block hover:text-orange-400 transition-colors">Cookies</Link>
                <Link href="/refunds" className="block hover:text-orange-400 transition-colors">Refunds</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">
                © 2025 JanVishva. Made with ❤️ for Bharat. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-400">🇮🇳 Proudly Indian</span>
                <span className="text-green-400">500+ NGOs Verified ✓</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}