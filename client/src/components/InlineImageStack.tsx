import Image from "next/image"

export function InlineImageStack({
  images
}: {
  images: Array<{ src: string; alt?: string }>
}) {
  return (
    <span
      id="inline-image-stack"
      className="inline-flex ml-2.5 hover:ml-0 group transition-[margin] *:transition-all"
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="relative size-7 border-2 rounded-full overflow-hidden -ml-2.5 group-hover:ml-0"
        >
          <Image
            src="/placeholder.png"
            fill
            alt=""
            className="object-fill rounded-md"
            quality={70}
            priority
            fetchPriority="high"
          />
        </div>
      ))}
    </span>
  )
}
