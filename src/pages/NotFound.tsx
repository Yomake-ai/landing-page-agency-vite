import { Button } from "@/components/Button"
import { Link } from "react-router-dom"
import { siteConfig } from "../lib/siteConfig"

import { AgencyLogo } from "@/components/icons/AgencyLogo"

function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link to={siteConfig.baseLinks.home}>
        <AgencyLogo className="mt-6 h-10" />
      </Link>
      <p className="mt-6 text-4xl font-semibold text-[#ffc300] sm:text-5xl">
        Error 404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link to={siteConfig.baseLinks.home}>Go to the home page</Link>
      </Button>
    </div>
  )
}

export default NotFound
