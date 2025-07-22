import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/Button'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-blue text-secondary-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bebas text-primary-yellow mb-4">
            Why Steve Exists
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Because moving internationally shouldn't feel like sending your life into a black hole
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <img 
                src="/steve-standing-nobg.png" 
                alt="Steve Standing" 
                className="w-48 mx-auto mb-6"
              />
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-bebas text-2xl text-primary-blue">Hi, I'm Steve.</span> I'm a seagull who's spent years watching containers come and go at ports around the world. 
                I've seen families wait months for their belongings, refreshing tracking pages that never update, 
                calling companies that put them on hold for hours.
              </p>
              
              <p>
                The shipping industry moves <strong>90% of global trade</strong>, yet tracking technology hasn't 
                evolved since the 1990s. While you can track a $10 package in real-time, your entire life's 
                possessions disappear into a void the moment they're loaded into a container.
              </p>

              <p>
                That's why we built Steve - to give you the transparency you deserve. We aggregate data from 
                multiple sources, translate shipping jargon into plain English, and send you updates that 
                actually matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-blue text-center mb-2">
            How Steve Works
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <StepCard 
              number="1" 
              title="Connect Your Shipment"
              description="Forward your booking confirmation or enter your container number"
            />
            <StepCard 
              number="2" 
              title="We Track Everything"
              description="Steve monitors ports, vessels, and carriers 24/7 across the globe"
            />
            <StepCard 
              number="3" 
              title="Stay Informed"
              description="Get real-time updates and alerts that actually make sense"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary-blue text-secondary-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-yellow mb-4">
            Our Mission
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            To transform the anxiety of international shipping into confidence and control. 
            Every family deserves to know where their belongings are, without the runaround.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <ValueCard 
              title="Transparency"
              description="No more black boxes. See everything."
            />
            <ValueCard 
              title="Simplicity"
              description="Shipping is complex. Tracking shouldn't be."
            />
            <ValueCard 
              title="Reliability"
              description="Real data, real-time, really accurate."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-blue mb-2">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Have questions? Need help with tracking? Just want to say hi to Steve?
          </p>
          <p className="text-xl mb-8">
            <a href="mailto:support@steveapp.com" className="text-primary-blue hover:text-primary-yellow">
              support@steveapp.com
            </a>
          </p>
          <Link to="/login">
            <PrimaryButton>Start Tracking Now</PrimaryButton>
          </Link>
        </div>
      </section>
    </>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="font-bebas text-2xl text-primary-blue">{number}</span>
      </div>
      <h3 className="font-bebas text-2xl text-primary-blue mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

function ValueCard({ title, description }) {
  return (
    <div className="text-center">
      <h3 className="font-bebas text-2xl text-primary-yellow mb-2">{title}</h3>
      <p className="text-secondary-white opacity-90">{description}</p>
    </div>
  )
}
