
export default function Testimonial() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
      <div className="absolute inset-0 object-cover">
        <img
          alt="Modern office workspace"
          src="/images/clouds.webp"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-[19rem] -right-14 w-[19rem] sm:top-[12rem] sm:right-3 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:top-[16rem] lg:right-12 lg:w-[34rem]">
        <img
          alt="Creative workspace elements"
          src="/images/drone.webp"
          className="animate-hover w-full h-auto"
        />
      </div>
      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
        <div className="">
          <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-white md:text-2xl lg:text-3xl">
            <p>
              <strong className="font-semibold">
                "This agency completely transformed our digital presence.
              </strong>{" "}
              <span className="text-white/80">
                Their strategic approach and creative execution delivered
                a website that not only looks incredible but has increased
                our conversions by 300% in just six months."
              </span>
            </p>
          </blockquote>
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 rounded-full bg-white/15 p-0.5 ring-1 ring-white/20">
            <img
              alt="Jessica Chen"
              src="/images/smiller.jpeg"
              className="rounded-full border object-contain w-14 h-14"
            />
          </div>
          <div>
            <div className="text-base font-medium text-white">
              Jessica Chen
            </div>
            <div className="text-sm text-[#ffc300]">
              CEO, TechStart Inc.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
