export type ProgrammingLanguage = 
  | "python"
  | "javascript"
  | "typescript"
  | "go"
  | "php"
  | "swift"
  | "rust"
  | "cpp";

export interface EditorState {
  language: ProgrammingLanguage
  code: string
  output: string
}

export const initialCode: Record<ProgrammingLanguage, string> = {
  python: '# Python code\nprint("Hello, World!")',
  javascript: '// JavaScript code\nconsole.log("Hello, World!");',
  typescript: '// TypeScript code\nconst greeting: string = "Hello, World!";\nconsole.log(greeting);',
  go: '// Go code\npackage main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}',
  php: '<?php\n// PHP code\necho "Hello, World!";\n?>',
  swift: '// Swift code\nprint("Hello, World!")',
  rust: '// Rust code\nfn main() {\n    println!("Hello, World!");\n}',
  cpp: '// C++ code\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}'
};

