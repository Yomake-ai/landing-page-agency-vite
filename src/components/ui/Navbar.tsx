import { siteConfig } from "@/lib/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import { Link } from "react-router-dom"
import React from "react"
import { AgencyLogo } from "@/components/icons/AgencyLogo"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-2xl border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-[#003566]/10 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link to={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Creative Agency Logo</span>
            <AgencyLogo />
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <a className="px-2 py-1 text-gray-900" href="#services">
                Services
              </a>
              <a className="px-2 py-1 text-gray-900" href="#project-management">
                Clients
              </a>
              <a className="px-2 py-1 text-gray-900" href="#agency-metrics">
                About
              </a>
            </div>
          </nav>
          <Button
            variant="primary"
            className="hidden h-10 font-semibold sm:block"
          >
            Get a quote
          </Button>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <a href="#services">Services</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#project-management">Clients</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#agency-metrics">About</a>
            </li>
          </ul>
          <Button variant="primary" className="text-lg">
            Get a quote
          </Button>
        </nav>
      </div>
    </header>
  )
}
