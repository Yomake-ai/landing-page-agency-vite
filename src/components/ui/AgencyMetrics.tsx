import {
  RiDropFill,
  RiNavigationFill,
  RiPieChartFill,
  RiRobot3Fill,
  RiBrushFill,
  RiGlobalFill,
  RiShieldFill,
  RiTeamFill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import { StickerCard } from "./StickerCard"

export function AgencyMetrics() {
  return (
    <section
      aria-labelledby="agency-metrics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="agency-metrics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-[#003566]"
        >
          Agency Metrics
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-[#003566]" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Transform client data into successful campaigns with actionable insights
        </p>
      </div>
      <Divider className="mt-12"></Divider>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
        <StickerCard
          Icon={RiNavigationFill}
          title="Strategic Planning"
          description="Data-driven strategies that guide your brand to market success."
        />
        <StickerCard
          Icon={RiRobot3Fill}
          title="Creative Execution"
          description="AI-enhanced design tools that deliver pixel-perfect results."
        />
        <StickerCard
          Icon={RiDropFill}
          title="Performance Tracking"
          description="Real-time analytics that optimize campaign performance."
        />
        <StickerCard
          Icon={RiPieChartFill}
          title="Growth Analytics"
          description="Predictive analytics that forecast business growth opportunities."
        />
        <StickerCard
          Icon={RiBrushFill}
          title="Brand Identity"
          description="Comprehensive brand development from concept to implementation."
        />
        <StickerCard
          Icon={RiGlobalFill}
          title="Digital Marketing"
          description="Multi-platform campaigns that reach your target audience effectively."
        />
        <StickerCard
          Icon={RiShieldFill}
          title="Quality Assurance"
          description="Rigorous testing and optimization to ensure flawless delivery."
        />
        <StickerCard
          Icon={RiTeamFill}
          title="Client Success"
          description="Dedicated support and ongoing optimization for long-term growth."
        />
      </div>
    </section>
  )
}
