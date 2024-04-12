import { Button, Group } from "@/components"
import type { Metadata } from "next"
import { LuLayoutGrid, LuSearch, LuSearchCheck, LuX } from "react-icons/lu"

export const metadata: Metadata = {
  title: "History and saves"
}

export default function SavesPage() {
  function ClearButton({
    onClick
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }) {
    return (
      <Button
        className="px-3 py-1.5 bg-red-400 text-white hover:bg-red-500"
        prefix={<LuX size={14} />}
        onClick={onClick}
      >
        Clear all
      </Button>
    )
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-8 flex flex-col gap-y-3.5 py-2">
      <Group
        headingIcon={LuLayoutGrid}
        headingTitle="Saved comic strips"
        headingRight={<ClearButton />}
      >
        contents wip
      </Group>
      <Group
        headingIcon={LuSearch}
        headingTitle="Recent searches"
        headingRight={<ClearButton />}
      >
        contents wip
      </Group>
      <Group
        headingIcon={LuSearchCheck}
        headingTitle="Saved searches"
        headingRight={<ClearButton />}
      >
        contents wip
      </Group>
    </div>
  )
}
