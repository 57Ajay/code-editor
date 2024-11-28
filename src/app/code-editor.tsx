"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Play } from 'lucide-react'
import { Sidebar } from "@/components/sidebar"
import { CodeEditor } from "@/components/code-editor"
import { OutputPanel } from "@/components/output-panels"
import { EditorState, ProgrammingLanguage, initialCode } from "@/types/editor"
import { useTheme } from "@/hooks/use-theme"
import { languageNames } from "@/components/language-icons"
const initialState: EditorState = {
  language: "python",
  code: initialCode.python,
  output: "",
}

export default function CodeEditorPage() {
  const [state, setState] = useState<EditorState>(initialState)
  const { theme, toggleTheme } = useTheme()

  const handleLanguageSelect = (language: ProgrammingLanguage) => {
    setState((prev) => ({ 
      ...prev, 
      language,
      code: initialCode[language]
    }))
  }

  const handleCodeChange = (code: string) => {
    setState((prev) => ({ ...prev, code }))
  }

  const handleRun = () => {
    // Simulate code execution
    setState((prev) => ({
      ...prev,
      output: `=== Code Execution Output ===\nExecuting ${languageNames[prev.language]} code...\n\n${prev.code}\n\n=== End of Output ===\n\nNote: Actual code execution requires a backend.`,
    }))
  }

  const handleClear = () => {
    setState((prev) => ({ ...prev, output: "" }))
  }

  const getFileName = () => {
    switch (state.language) {
      case "python": return "main.py"
      case "javascript": return "main.js"
      case "typescript": return "main.ts"
      case "go": return "main.go"
      case "php": return "main.php"
      case "swift": return "main.swift"
      case "rust": return "main.rs"
      case "cpp": return "main.cpp"
      default: return "main.txt"
    }
  }

  return (
    <div className={theme}>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar
          selectedLanguage={state.language}
          onSelectLanguage={handleLanguageSelect}
        />
        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">
                {getFileName()}
              </h1>
              <Button onClick={handleRun} size="sm">
                <Play className="mr-2 h-4 w-4" />
                Run
              </Button>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </header>
          <div className="grid flex-1 grid-cols-2 min-h-0 overflow-hidden">
            <CodeEditor
              state={state}
              onChange={handleCodeChange}
              theme={theme}
              className="h-full overflow-auto"
            />
            <OutputPanel output={state.output} onClear={handleClear} />
          </div>
        </div>
      </div>
    </div>
  )
}