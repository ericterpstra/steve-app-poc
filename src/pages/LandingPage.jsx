import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../components/Button'
import { useAuth } from '../AuthContext'

export default function LandingPage() {
  const { user } = useAuth()

  return (
    <>
      {/* Hero Section */}
      <header className="bg-primary-blue text-secondary-white py-20">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:justify-center">
            <div className="mb-8 md:mb-0 md:mr-10 text-center md:text-left">
              <img 
                src="/seagull-steve.png" 
                alt="Steve Mascot" 
                className="w-64 md:w-80 h-auto mx-auto md:mx-0"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bebas text-primary-yellow mb-6 leading-tight">
                Track Your Cargo,<br />Every Step of the Way
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Real-time container tracking that keeps you informed from port to port.
              </p>
              {user ? (
                <Link to="/user">
                  <PrimaryButton>Go to Dashboard</PrimaryButton>
                </Link>
              ) : (
                <div className="space-x-4">
                  <Link to="/login">
                    <PrimaryButton>Get Started</PrimaryButton>
                  </Link>
                  <Link to="/about">
                    <SecondaryButton>Learn More</SecondaryButton>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-blue tracking-tight leading-snug mb-2">
            NO MORE SHIPPING MYSTERIES
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            International moves take months, with your belongings passing through multiple carriers, 
            ports, and customs checks. Most shipping companies leave you in the dark. 
            Steve changes that.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary-blue text-secondary-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-yellow text-center mb-4">
            YOUR CONTAINER, ALWAYS IN SIGHT
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              image="/tracking.png"
              title="Real-Time Tracking"
              description="Know exactly where your cargo is, 24/7, with live updates and pinpoint accuracy."
            />
            <FeatureCard
              image="/alerts.png"
              title="Automated Alerts"
              description="Get instant notifications for key milestones, delays, or issues, so you're always informed."
            />
            <FeatureCard
              image="/interface.png"
              title="Simple Interface"
              description="An intuitive and user-friendly design that makes cargo tracking effortless for everyone."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-blue mb-2">
            START TRACKING TODAY
          </h2>
          <div className="w-16 h-1 bg-primary-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Join thousands who've taken the guesswork out of international shipping.
          </p>
          {!user && (
            <Link to="/login">
              <PrimaryButton>Sign Up Now</PrimaryButton>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}

function FeatureCard({ image, title, description }) {
  return (
    <div className="p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <img 
        src={image} 
        alt={`${title} Icon`}
        className="mx-auto mb-4 rounded-full w-24 h-24 md:w-32 md:h-32 object-cover"
      />
      <h3 className="text-2xl font-bebas text-primary-blue mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
