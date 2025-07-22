export function PrimaryButton({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-blue text-secondary-white font-bebas text-xl px-10 py-3 rounded-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border-2 border-primary-blue text-primary-blue font-bebas text-xl px-10 py-3 rounded-lg hover:bg-primary-blue hover:text-secondary-white transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
