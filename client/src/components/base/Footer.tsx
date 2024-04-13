import { Hyperlink } from "@/components"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-12 max-w-screen-2xl mx-auto py-6 text-center [&_div]:pt-3.5 [&_a]:underline [&_a]:text-blue-600 hover:[&_a]:text-blue-700">
      <div>
        <strong>Disclaimer:</strong> <em>Searchpets!</em> is a fanmade project
        and has no association or affiliation with the <em>Housepets!</em>{" "}
        franchise. All the assets present is used for informational and
        dissemination purposes.
        {" Uses assets from "}
        <Hyperlink href="https://housepetscomic.fandom.com/">
          Housepets! Wiki
        </Hyperlink>
        {", licensed under the "}
        <Hyperlink href="https://creativecommons.org/licenses/by-sa/3.0/">
          Creative Commons Attribution-Share Alike License
        </Hyperlink>
        {"."}
      </div>
      <div>
        {`© 2022-${currentYear} Fusky Labs Software Ltd. Licensed under the `}
        <Hyperlink href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">
          GNU General Public License, Version 2.0
        </Hyperlink>
        {"."}
      </div>
    </footer>
  )
}
