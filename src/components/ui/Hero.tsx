import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto">
          <a
            aria-label="View latest update the changelog page"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-[#003566]/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-[#003566]/[2.5%] focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                New
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Award-winning design studio
                </span>

                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Digital</FadeSpan> <FadeSpan>experiences</FadeSpan>
          <br />
          <FadeSpan>that</FadeSpan> <FadeSpan>convert</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>We craft stunning websites, memorable brands,</FadeSpan>{" "}
          <FadeSpan>and digital campaigns that drive growth</FadeSpan>{" "}
          <FadeSpan>for forward-thinking companies.</FadeSpan>
        </p>
        <FadeDiv>
          <a
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-[#000814] bg-linear-to-b from-[#003566] to-[#000814] px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,53,102,0.04),0_0_14px_0_rgba(0,53,102,0.25)] transition-all duration-200 ease-in-out hover:shadow-[0_0_0_2px_rgba(0,53,102,0.08),0_0_20px_0_rgba(0,53,102,0.4)]"
            href="#"
          >
Start your project
          </a>
        </FadeDiv>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  )
}
