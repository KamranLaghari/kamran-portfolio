type Token = [kind: "k" | "t" | "s" | "a" | "c" | "p", text: string];

const lines: Token[][] = [
  [["a", "@RestController"]],
  [["a", "@RequestMapping"], ["p", "("], ["s", '"/api/students"'], ["p", ")"]],
  [["k", "public class "], ["t", "StudentController"], ["p", " {"]],
  [],
  [["p", "  "], ["k", "private final "], ["t", "StudentService"], ["p", " service;"]],
  [],
  [["p", "  "], ["a", "@GetMapping"]],
  [["p", "  "], ["k", "public "], ["t", "List"], ["p", "<"], ["t", "Student"], ["p", "> findAll() {"]],
  [["p", "    "], ["k", "return "], ["p", "service.findAll();"]],
  [["p", "  }"]],
  [],
  [["p", "  "], ["a", "@PostMapping"]],
  [["p", "  "], ["k", "public "], ["t", "Student"], ["p", " create("], ["a", "@RequestBody "], ["t", "Student"], ["p", " s) {"]],
  [["p", "    "], ["k", "return "], ["p", "service.save(s);"]],
  [["p", "  }"]],
  [["p", "}"]],
];

const color: Record<Token[0], string> = {
  k: "text-code-keyword",
  t: "text-code-type",
  s: "text-code-string",
  a: "text-code-annotation",
  c: "text-code-comment",
  p: "text-foreground/85",
};

export function CodeWindow() {
  return (
    <div className="gradient-border glass relative overflow-hidden rounded-2xl shadow-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-destructive/80" />
        <span className="size-3 rounded-full bg-code-annotation/80" />
        <span className="size-3 rounded-full bg-code-string/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">StudentController.java</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]" aria-label="Sample Java Spring Boot code">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-5 w-5 select-none text-right text-code-comment">{i + 1}</span>
              <span>
                {line.map(([kind, text], j) => (
                  <span key={j} className={color[kind]}>
                    {text}
                  </span>
                ))}
                {i === lines.length - 1 && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-primary" />
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
