import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../components/Button'
import { useAuth } from '../AuthContext'

export default function PricingPage() {
  const { user } = useAuth()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-blue text-secondary-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bebas text-primary-yellow mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Currently in beta - join now for exclusive benefits
          </p>
        </div>
      </section>

      {/* Beta Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-yellow p-2 inline-block rounded-lg mb-4">
              <p className="font-bebas text-xl text-primary-blue px-4">BETA ACCESS</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-primary-blue mb-4">
              Join Our Beta Program
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              Steve is currently in beta testing. Join now to help shape the future of cargo tracking 
              and lock in exclusive benefits when we launch.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-bebas text-3xl text-primary-blue mb-6">Beta Benefits Include:</h3>
              <ul className="space-y-4 text-left max-w-md mx-auto">
                <BenefitItem>Free tracking during your entire move</BenefitItem>
                <BenefitItem>Priority customer support</BenefitItem>
                <BenefitItem>Direct input on new features</BenefitItem>
                <BenefitItem>50% off for life when we launch</BenefitItem>
                <BenefitItem>Early access to mobile apps</BenefitItem>
              </ul>
              <div className="mt-8">
                {user ? (
                  <Link to="/user">
                    <PrimaryButton>Go to Dashboard</PrimaryButton>
                  </Link>
                ) : (
                  <Link to="/login">
                    <PrimaryButton>Join Beta Now</PrimaryButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-blue text-center mb-2">
            Coming Soon: Full Pricing Plans
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-12"></div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$9"
              period="per shipment"
              features={[
                "Track one container",
                "Email notifications",
                "Basic support",
                "30-day history"
              ]}
              isPopular={false}
              isComingSoon={true}
            />
            <PricingCard
              title="Pro"
              price="$29"
              period="per month"
              features={[
                "Track unlimited containers",
                "SMS & email alerts",
                "Priority support",
                "Full shipment history",
                "API access"
              ]}
              isPopular={true}
              isComingSoon={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              period="contact us"
              features={[
                "Everything in Pro",
                "Custom integrations",
                "Dedicated account manager",
                "SLA guarantees",
                "White-label options"
              ]}
              isPopular={false}
              isComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-blue text-center mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem 
              question="How long is the beta period?"
              answer="We expect the beta to run through Q2 2025. All beta users will get plenty of notice before any pricing changes."
            />
            <FAQItem 
              question="Can I track multiple containers during beta?"
              answer="Yes! Beta users can track as many containers as they need, completely free."
            />
            <FAQItem 
              question="What happens to my data if I don't convert to paid?"
              answer="Your tracking history will remain accessible for 90 days after beta ends. You can export it anytime."
            />
            <FAQItem 
              question="Do you support all shipping companies?"
              answer="We support major carriers like Maersk, MSC, CMA CGM, and more. We're adding new carriers every week."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-secondary-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary-yellow mb-4">
            Ready to Track Smarter?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join thousands who are beta testing the future of cargo tracking.
          </p>
          {!user && (
            <Link to="/login">
              <PrimaryButton className="bg-primary-yellow text-primary-blue hover:bg-yellow-400">
                Start Free Beta Access
              </PrimaryButton>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}

function BenefitItem({ children }) {
  return (
    <li className="flex items-start">
      <svg className="w-6 h-6 text-accent-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-700">{children}</span>
    </li>
  )
}

function PricingCard({ title, price, period, features, isPopular, isComingSoon }) {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg p-8 ${isPopular ? 'ring-2 ring-primary-yellow' : ''}`}>
      {isPopular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-yellow text-primary-blue px-4 py-1 rounded-full text-sm font-bold">
            MOST POPULAR
          </span>
        </div>
      )}
      {isComingSoon && (
        <div className="absolute top-4 right-4">
          <span className="bg-accent-orange text-white px-2 py-1 rounded text-xs font-bold">
            COMING SOON
          </span>
        </div>
      )}
      
      <h3 className="font-bebas text-3xl text-primary-blue mb-4">{title}</h3>
      <div className="mb-6">
        <span className="font-bebas text-5xl text-primary-blue">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <SecondaryButton className="w-full" disabled>
        Available Soon
      </SecondaryButton>
    </div>
  )
}

function FAQItem({ question, answer }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-bebas text-xl text-primary-blue mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  )
}
