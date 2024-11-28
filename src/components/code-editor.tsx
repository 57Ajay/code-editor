"use client"

import { useCallback } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { python } from "@codemirror/lang-python"
import { cpp } from "@codemirror/lang-cpp"
import { php } from "@codemirror/lang-php"
import { rust } from "@codemirror/lang-rust"
import { go } from "@codemirror/lang-go"
import { EditorState, ProgrammingLanguage } from "../types/editor"
import { githubDark, githubLight } from "@uiw/codemirror-theme-github"

const getLanguageExtension = (language: ProgrammingLanguage) => {
  switch (language) {
    case "python":
      return python()
    case "javascript":
    case "typescript":
      return javascript({ jsx: true, typescript: language === "typescript" })
    case "cpp":
      return cpp()
    case "php":
      return php()
    case "rust":
      return rust()
    case "go":
      return go()
    case "swift":
      return javascript()
    default:
      return javascript()
  }
}

interface CodeEditorProps {
  state: EditorState
  onChange: (code: string) => void
  theme: "light" | "dark"
  className?: string
}

export function CodeEditor({ state, onChange, theme, className }: CodeEditorProps) {
  const handleChange = useCallback((value: string) => {
    onChange(value)
  }, [onChange])

  return (
    <div className="relative h-full w-full">
      <CodeMirror
        value={state.code}
        className={className}
        height="100%"
        theme={theme === "dark" ? githubDark : githubLight}
        extensions={[getLanguageExtension(state.language)]}
        onChange={handleChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          history: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  )
}

