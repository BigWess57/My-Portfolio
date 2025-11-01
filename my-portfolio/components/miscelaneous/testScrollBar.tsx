import * as React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <>    
      <div className="p-4 rounded-md border">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        <ScrollArea className="h-72 w-48 border p-2">
        
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2 bg-black" />
          </React.Fragment>
        ))}
        <ScrollBar/>
        </ScrollArea>
      </div>
    </>
  )
}
