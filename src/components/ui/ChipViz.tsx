export default function ChipViz() {
  return (
    <div className="relative">
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Main chip body */}
        <rect
          x="24"
          y="24"
          width="40"
          height="40"
          rx="4"
          className="fill-gray-900"
        />
        
        {/* Inner details */}
        <rect
          x="28"
          y="28"
          width="32"
          height="32"
          rx="2"
          className="fill-gray-700"
        />
        
        {/* Center core */}
        <rect
          x="36"
          y="36"
          width="16"
          height="16"
          rx="2"
          className="fill-[#ffc300]"
        />
        
        {/* Connection pins - top */}
        <rect x="32" y="16" width="4" height="8" className="fill-gray-600" />
        <rect x="40" y="16" width="4" height="8" className="fill-gray-600" />
        <rect x="48" y="16" width="4" height="8" className="fill-gray-600" />
        
        {/* Connection pins - bottom */}
        <rect x="32" y="64" width="4" height="8" className="fill-gray-600" />
        <rect x="40" y="64" width="4" height="8" className="fill-gray-600" />
        <rect x="48" y="64" width="4" height="8" className="fill-gray-600" />
        
        {/* Connection pins - left */}
        <rect x="16" y="32" width="8" height="4" className="fill-gray-600" />
        <rect x="16" y="40" width="8" height="4" className="fill-gray-600" />
        <rect x="16" y="48" width="8" height="4" className="fill-gray-600" />
        
        {/* Connection pins - right */}
        <rect x="64" y="32" width="8" height="4" className="fill-gray-600" />
        <rect x="64" y="40" width="8" height="4" className="fill-gray-600" />
        <rect x="64" y="48" width="8" height="4" className="fill-gray-600" />
      </svg>
      
      {/* Pulsing glow effect */}
      <div className="absolute inset-0 animate-pulse">
        <div className="w-full h-full bg-[#ffc300]/20 rounded-lg blur-md" />
      </div>
    </div>
  )
}