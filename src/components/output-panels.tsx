import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from 'lucide-react'

interface OutputPanelProps {
  output: string
  onClear: () => void
}

export function OutputPanel({ output, onClear }: OutputPanelProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <h2 className="text-sm font-medium">Output</h2>
        <Button variant="ghost" size="icon" onClick={onClear}>
          <X className="h-4 w-4" />
          <span className="sr-only">Clear output</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 p-4">
        <pre className="text-sm">{output}</pre>
      </ScrollArea>
    </div>
  )
}

