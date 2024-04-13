import type { Metadata } from "next"
import SavesPageWrapper from "./SavesPageWrapper"

export const metadata: Metadata = {
  title: "History and saves"
}

export default function SavesPage() {
  return <SavesPageWrapper />
}
