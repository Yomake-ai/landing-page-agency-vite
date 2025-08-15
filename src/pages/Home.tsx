import { CallToAction } from "@/components/ui/CallToAction"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import FeaturesSectionDemo from "@/components/ui/features-section-demo-3"
import { AgencyMetrics } from "@/components/ui/AgencyMetrics"
import Testimonial from "@/components/ui/Testimonial"
import ClientLogos from "@/components/ui/ClientLogos"

function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-56">
        <Hero />
      </div>
      <ClientLogos />
      <div className="mt-52 px-4 xl:px-0">
        <Features />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <Testimonial />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="px-4 xl:px-0">
        <FeaturesSectionDemo />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mt-12 mb-40 px-4 xl:px-0">
        <AgencyMetrics />
      </div>
      <div className="mt-10 mb-40 px-4 xl:px-0">
        <CallToAction />
      </div>
    </main>
  )
}

export default Home
