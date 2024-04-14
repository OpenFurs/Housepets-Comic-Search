"use client"

import { Button, Group } from "@/components"
import {
  LuDownload,
  LuLayoutGrid,
  LuSearch,
  LuSearchCheck,
  LuUpload,
  LuX
} from "react-icons/lu"

export default function SavesPageWrapper() {
  return (
    <>
      {/* Heading */}
      <div className="my-6 flex justify-between">
        <h1 className="font-bold text-3xl">History and saves</h1>
        <div className="flex gap-x-1 items-center">
          <Button prefix={<LuDownload size={15} />}>Import</Button>
          <Button prefix={<LuUpload size={15} />}>Export</Button>
          <Button prefix={<LuX size={15} />}>Clear all</Button>
        </div>
      </div>
      {/* Contents */}
      <div className="grid lg:grid-cols-2 gap-3.5 py-2">
        <Group
          className="lg:col-span-2"
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
    </>
  )
}

function ClearButton({
  onClick
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Button variant="secondary" prefix={<LuX size={15} />} onClick={onClick}>
      Clear
    </Button>
  )
}
