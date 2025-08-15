import { Button } from "../Button"

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Ready to elevate your brand?
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-600">
            Let's discuss your project and create something extraordinary together.
            From concept to launch, we'll be your strategic partner.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="text-md">
              <a href="#">Start your project</a>
            </Button>
            <Button asChild className="text-md" variant="secondary">
              <a href="#">View our work</a>
            </Button>
          </div>
        </div>
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          <img
            aria-hidden
            alt="Modern city skyline"
            src="/images/city.png"
            className="absolute inset-0 -z-10 rounded-2xl blur-xl w-full h-full object-cover"
          />
          <img
            alt="Dynamic urban landscape"
            src="/images/city.png"
            className="relative z-10 rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
