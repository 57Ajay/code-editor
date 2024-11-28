import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { languageIcons, languageNames } from "./language-icons"
import { ProgrammingLanguage } from "../types/editor"
import Image from "next/image"

interface SidebarProps {
  selectedLanguage: ProgrammingLanguage
  onSelectLanguage: (language: ProgrammingLanguage) => void
}

export function Sidebar({ selectedLanguage, onSelectLanguage }: SidebarProps) {
  return (
    <div className="flex w-16 flex-col gap-2 border-r bg-muted p-2">
      <TooltipProvider>
        {(Object.keys(languageIcons) as ProgrammingLanguage[]).map((key) => (
          <Tooltip key={key}>
            <TooltipTrigger asChild>
              <Button
                variant={selectedLanguage === key ? "default" : "ghost"}
                size="icon"
                className="h-12 w-12"
                onClick={() => onSelectLanguage(key)}
              >
                <Image
                  src={languageIcons[key]}
                  alt={languageNames[key]}
                  width={24}
                  height={24}
                />
                <span className="sr-only">{languageNames[key]}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{languageNames[key]}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
}

