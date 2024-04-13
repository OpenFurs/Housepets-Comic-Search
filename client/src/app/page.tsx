import dynamic from "next/dynamic"

const ComicItem = dynamic(
  () => import("@/components").then((c) => c.ComicItem),
  { ssr: false }
)

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl gap-2.5 px-7">
      {[...Array(7)].map((_, i) => (
        <ComicItem
          key={i}
          arc="Arc1"
          image="/placeholder.png"
          title="Title Placeholder"
          isBookmarked={false}
          date="1/1/2024"
          characters={["a", "c"]}
        />
      ))}
    </div>
  )
}
