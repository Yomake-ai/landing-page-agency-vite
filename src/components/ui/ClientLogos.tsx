import { motion } from "motion/react"

const clientLogos = [
  {
    name: "TechCorp",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <rect x="10" y="8" width="20" height="24" rx="2" className="fill-gray-800" />
        <rect x="35" y="12" width="3" height="16" className="fill-gray-800" />
        <rect x="42" y="8" width="12" height="6" rx="1" className="fill-gray-800" />
        <rect x="42" y="18" width="8" height="6" rx="1" className="fill-gray-800" />
        <rect x="42" y="27" width="15" height="5" rx="1" className="fill-gray-800" />
        <text x="65" y="24" className="fill-gray-800 text-sm font-bold font-sans">TechCorp</text>
      </svg>
    )
  },
  {
    name: "Innovate",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <circle cx="20" cy="20" r="12" className="fill-none stroke-gray-800 stroke-2" />
        <circle cx="20" cy="20" r="4" className="fill-gray-800" />
        <path d="M32 20 L44 8 L44 32 Z" className="fill-gray-800" />
        <text x="50" y="24" className="fill-gray-800 text-sm font-bold font-sans">Innovate</text>
      </svg>
    )
  },
  {
    name: "Digital Labs",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <rect x="10" y="10" width="8" height="8" className="fill-gray-800" />
        <rect x="22" y="10" width="8" height="8" className="fill-gray-800" />
        <rect x="10" y="22" width="8" height="8" className="fill-gray-800" />
        <rect x="22" y="22" width="8" height="8" className="fill-gray-600" />
        <text x="38" y="24" className="fill-gray-800 text-sm font-bold font-sans">Digital Labs</text>
      </svg>
    )
  },
  {
    name: "Nexus",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <path d="M10 10 L30 10 L25 20 L30 30 L10 30 L15 20 Z" className="fill-gray-800" />
        <text x="38" y="24" className="fill-gray-800 text-sm font-bold font-sans">Nexus</text>
      </svg>
    )
  },
  {
    name: "CloudFlow",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <path d="M10 20 Q10 12 18 12 Q22 8 28 12 Q34 8 40 12 Q48 12 48 20 Q48 28 40 28 L18 28 Q10 28 10 20 Z" className="fill-gray-800" />
        <text x="54" y="24" className="fill-gray-800 text-sm font-bold font-sans">CloudFlow</text>
      </svg>
    )
  },
  {
    name: "Quantum",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <circle cx="15" cy="15" r="3" className="fill-gray-800" />
        <circle cx="25" cy="15" r="3" className="fill-gray-600" />
        <circle cx="35" cy="15" r="3" className="fill-gray-800" />
        <circle cx="15" cy="25" r="3" className="fill-gray-600" />
        <circle cx="25" cy="25" r="3" className="fill-gray-800" />
        <circle cx="35" cy="25" r="3" className="fill-gray-600" />
        <text x="45" y="24" className="fill-gray-800 text-sm font-bold font-sans">Quantum</text>
      </svg>
    )
  }
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-[#F9FAFB] border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 xl:px-0">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
            Trusted by industry leaders
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
          
          {/* Logos container */}
          <div className="flex animate-slide">
            {/* First set of logos */}
            <div className="flex items-center justify-around min-w-full gap-16 px-8">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`first-${client.name}`}
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {client.logo}
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center justify-around min-w-full gap-16 px-8">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`second-${client.name}`}
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {client.logo}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </section>
  )
}