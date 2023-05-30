import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
return (
    <header className="container max-w-3xl">
        <div className="flex items-center justify-between border-b py-4">
            <Link className="flex items-center space-x-2" href='/'>
                <div className="flex flex-col space-y-1 text-sm leading-none">
                    <span className="text-lg font-bold">angelobaricante</span>
                    <span>I own a laptop</span>
                </div>
            </Link>
            <div className="flex items-center space-x-2">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />                
            </div>
        </div>
    </header>
)
}