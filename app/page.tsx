import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { TypographyP } from "@/components/typography/typography-p"
import { TypographyH4 } from "@/components/typography/typography-h4"

export default function IndexPage() {
  return (
    <section className="container max-w-3xl grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* Posts */}
      <article>
        <div className="space-y-1">
          <TypographyH4>Posts</TypographyH4>
          <TypographyP className="text-muted-foreground">
            Notes on things you can do on your laptop.
          </TypographyP>
        </div>
        <ul className="space-y-4 py-4">
          <li>
            <Link href="/" className="flex flex-col space-y-1.5 !no-underline">  
              <TypographyP className="font-medium underline underline-offset-4">
                Coming Soon!
              </TypographyP>                
            </Link>
          </li>
        </ul>
      </article>
      {/* End Posts */}

      {/* Projects */}
      <article className="pt-6 border-t">
        <div className="space-y-1">
          <TypographyH4>Projects</TypographyH4>
          <TypographyP className="text-muted-foreground">
            Things I created with my laptop.
          </TypographyP>
        </div>
        <ul className="space-y-4 py-4">
          <li>
            <Link href="https://www.gab-ai.com/" target="_blank" className="flex flex-col space-y-1.5 !no-underline">
              <TypographyP className="font-medium underline underline-offset-4">
                gab-ai
              </TypographyP>
              <TypographyP className="text-muted-foreground">
                Generates AI-based predictions for crypto and forex markets every 30 minutes, indicating what could possibly happen in the next 6 hours.
              </TypographyP>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/angelobaricante/organix" target="_blank" className="flex flex-col space-y-1.5 !no-underline">
              <TypographyP className="font-medium underline underline-offset-4">
                organix
              </TypographyP>
              <TypographyP className="text-muted-foreground">
                Python app that organize and declutter computer files using voice commands.
              </TypographyP>
            </Link>
          </li>
          <li>
            <Link href="https://angelobaricante.github.io/devpacks/" target="_blank" className="flex flex-col space-y-1.5 !no-underline">
              <TypographyP className="font-medium underline underline-offset-4">
                devpacks
              </TypographyP>
              <TypographyP className="text-muted-foreground">
                Streamlines project creation for developers by offering curated, clickable links to essential resources.
              </TypographyP>
            </Link>
          </li>
        </ul>        
      </article>
      {/* End Projects */}

      {/* Links */}
      <article className="pt-6 border-t">
        <div className="space-y-1">
          <TypographyH4>Links</TypographyH4>
          <TypographyP className="text-muted-foreground">
            Where to find me on a laptop.
          </TypographyP>
        </div>
        <ul className="space-y-4 py-4">
          <li>
            <Link href="https://twitter.com/angelobaricante" target="_blank" className="flex flex-col space-y-1.5 !no-underline">  
              <TypographyP className="font-medium underline underline-offset-4">
                https://twitter.com/angelobaricante
              </TypographyP>                
            </Link>
          </li>
          <li>
            <Link href="https://github.com/angelobaricante" target="_blank" className="flex flex-col space-y-1.5 !no-underline">  
              <TypographyP className="font-medium underline underline-offset-4">
                https://github.com/angelobaricante
              </TypographyP>                
            </Link>
          </li>
          <li>
            <Link href="https://facebook.com/angelobaricante" target="_blank" className="flex flex-col space-y-1.5 !no-underline">  
              <TypographyP className="font-medium underline underline-offset-4">
                https://facebook.com/angelobaricante
              </TypographyP>                
            </Link>
          </li>
        </ul>
      </article>      
      {/* End Links */}
    </section>
  )
}
