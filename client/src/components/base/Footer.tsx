import { Hyperlink } from "@/components"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-12 max-w-screen-xl mx-auto py-6 text-center prose-p:pt-5 prose-p:leading-normal">
      <p>
        <em translate="no">Searchpets!</em>
        {
          " is a fanmade project and has no association or affiliation with Rick Griffin and "
        }
        <em translate="no">"Housepets!"</em>
        {
          ". All the assets present is used for dissemination purposes. Uses content from "
        }
        <Hyperlink href="https://housepetscomic.fandom.com/">
          Housepets! Wiki
        </Hyperlink>
        {", licensed under the "}
        <Hyperlink href="https://creativecommons.org/licenses/by-sa/3.0/">
          Creative Commons Attribution-Share Alike License
        </Hyperlink>
        {"."}
      </p>
      <p>
        {`© 2022-${currentYear} Kuroji Fusky and maxthecomputerfox; source code licensed under `}
        <Hyperlink href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">
          GPL-2.0
        </Hyperlink>
        {"."}
      </p>
    </footer>
  )
}
