import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Strategic Planning & Execution",
      description:
        "Plan and execute your digital strategies with precision using our comprehensive project management interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-[#003566]/20",
    },
    {
      title: "Creative Asset Management",
      description:
        "Organize and showcase your creative work with our intuitive visual asset management system.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-[#003566]/20",
    },
    {
      title: "Case Studies & Portfolio",
      description:
        "Discover our work and creative process through detailed case studies and portfolio showcases.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r border-[#003566]/20",
    },
    {
      title: "Global Reach & Impact",
      description:
        "Connect with clients worldwide and track your agency's global impact with real-time analytics and insights.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-[#003566]">
          Complete Agency Solutions
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-gray-600 text-center font-normal">
          From strategic planning to creative execution, our comprehensive platform 
          delivers everything your agency needs to create exceptional digital experiences.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-[#003566]/20 bg-white/50 backdrop-blur-sm shadow-lg">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden hover:bg-gradient-to-br hover:from-[#003566]/5 hover:to-[#ffc300]/5 transition-all duration-500 ease-out`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-[#003566] text-xl md:text-2xl md:leading-snug font-semibold">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-gray-600 font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white shadow-2xl group h-full rounded-lg border border-[#003566]/10">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="w-full h-full bg-gradient-to-br from-[#003566]/5 to-[#ffc300]/5 rounded-lg flex items-center justify-center min-h-[300px]">
            <div className="space-y-4 w-full p-6">
              {/* Header */}
              <div className="h-4 bg-[#003566] rounded w-1/3"></div>
              <div className="h-3 bg-[#003566]/60 rounded w-1/2"></div>
              
              {/* Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-[#003566]/10">
                  <div className="h-3 bg-[#ffc300] rounded w-full mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-[#003566]/10">
                  <div className="h-3 bg-[#003566] rounded w-full mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
              
              {/* Progress bars */}
              <div className="space-y-3 mt-6">
                <div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-gradient-to-r from-[#003566] to-[#ffc300] rounded w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-gradient-to-r from-[#ffc300] to-[#003566] rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-32 bg-gradient-to-b from-gray-50 via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image">
      <div className="w-full mx-auto bg-white group h-full rounded-lg border border-[#003566]/10 shadow-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative overflow-hidden rounded-lg">
          <div className="w-full h-full bg-gradient-to-br from-[#003566] to-[#000814] flex items-center justify-center min-h-[300px] relative">
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-2 gap-4 p-6 w-full h-full">
              <div className="bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 p-4 flex items-center justify-center">
                <div className="text-[#ffc300] text-center">
                  <div className="w-8 h-8 bg-[#ffc300] rounded mx-auto mb-2"></div>
                  <div className="text-xs text-white/80">Brand Design</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 p-4 flex items-center justify-center">
                <div className="text-[#ffc300] text-center">
                  <div className="w-8 h-8 bg-[#ffc300] rounded mx-auto mb-2"></div>
                  <div className="text-xs text-white/80">Web Design</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 p-4 flex items-center justify-center">
                <div className="text-[#ffc300] text-center">
                  <div className="w-8 h-8 bg-[#ffc300] rounded mx-auto mb-2"></div>
                  <div className="text-xs text-white/80">Marketing</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 p-4 flex items-center justify-center">
                <div className="text-[#ffc300] text-center">
                  <div className="w-8 h-8 bg-[#ffc300] rounded mx-auto mb-2"></div>
                  <div className="text-xs text-white/80">Development</div>
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#ffc300]/20 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-sm font-semibold">View Portfolio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const assets = [
    { color: "#003566", type: "Logo" },
    { color: "#ffc300", type: "Icon" },
    { color: "#000814", type: "Brand" },
    { color: "#003566", type: "Web" },
    { color: "#ffc300", type: "Print" },
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 0.95,
    },
  };
  
  return (
    <div className="relative flex flex-col items-start p-8 gap-6 h-full overflow-hidden">
      <div className="flex flex-row -ml-12">
        {assets.map((asset, idx) => (
          <motion.div
            variants={imageVariants}
            key={"assets-first" + idx}
            style={{
              rotate: (idx * 5) - 10, // More consistent rotation
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-3 mt-4 p-2 bg-white border border-[#003566]/20 shrink-0 overflow-hidden shadow-lg"
          >
            <div
              className="rounded-lg h-16 w-16 md:h-32 md:w-32 flex items-center justify-center text-white font-semibold text-xs md:text-sm"
              style={{ backgroundColor: asset.color }}
            >
              {asset.type}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-8">
        {assets.map((asset, idx) => (
          <motion.div
            key={"assets-second" + idx}
            style={{
              rotate: (idx * 5) - 10, // More consistent rotation
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-3 mt-4 p-2 bg-white border border-[#003566]/20 shrink-0 overflow-hidden shadow-lg"
          >
            <div
              className="rounded-lg h-16 w-16 md:h-32 md:w-32 flex items-center justify-center text-white font-semibold text-xs md:text-sm"
              style={{ backgroundColor: asset.color }}
            >
              {asset.type}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-16 bg-gradient-to-r from-gray-50 to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-16 bg-gradient-to-l from-gray-50 to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.5,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.05, 0.21, 0.4], // Agency blue #003566
      markerColor: [0.3, 0.6, 0.8], // Lighter blue for markers
      glowColor: [0.2, 0.4, 0.7], // Blue glow
      markers: [
        // Global agency locations
        { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
        { location: [40.7128, -74.0060], size: 0.08 }, // New York
        { location: [51.5074, -0.1278], size: 0.06 }, // London
        { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
      ],
      onRender: (state) => {
        // Smooth, slower rotation
        state.phi = phi;
        phi += 0.005; // Reduced speed for smoother animation
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={cn("transition-all duration-300", className)}
    />
  );
};