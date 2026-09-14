const fs = require("fs");
const path = require("path");

const EXCLUDE_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  ".vscode",
  ".idea",
  "__pycache__",
  "venv",
  "backup",
  "Dumps",
]);

const EXCLUDE_FILES = new Set([
  "package-lock.json",
  "export.js",
  "Export-ProjectToMarkdown.ps1",
]);

const EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".py",
  ".sql",
  ".html",
  ".css",
  ".ps1",
  ".env.example",
]);

function getFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDE_DIRS.has(entry.name)) {
        results = results.concat(getFiles(fullPath));
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (
        !EXCLUDE_FILES.has(entry.name) &&
        !entry.name.endsWith(".md") &&
        EXTENSIONS.has(ext)
      ) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const rootDir = process.cwd();
const projectName = path.basename(rootDir);
const outputFile = `PROJECT_DUMP_${projectName}.md`;

console.log(`Analizando ${projectName}...`);
const files = getFiles(rootDir);

let md = `# Proyecto: ${projectName}\nGenerado el: ${new Date().toISOString()}\n\n`;

// 1. Estructura
md += `## 1. Estructura de Archivos\n\`\`\`text\n`;
for (const file of files) {
  const relPath = path.relative(rootDir, file);
  md += `${relPath}\n`;
}
md += `\`\`\`\n\n---\n\n## 2. Contenido de los Archivos\n\n`;

// 2. Contenido
for (const file of files) {
  const relPath = path.relative(rootDir, file);
  const ext = path.extname(file).replace(".", "").toLowerCase();

  const langMap = {
    js: "javascript",
    jsx: "jsx",
    ts: "typescript",
    tsx: "tsx",
    py: "python",
    json: "json",
    ps1: "powershell",
    sql: "sql",
  };
  const lang = langMap[ext] || ext;

  md += `### ${relPath}\n\`\`\`${lang}\n`;
  try {
    const content = fs.readFileSync(file, "utf8");
    md += `${content}\n`;
  } catch (err) {
    md += `// Error al leer archivo: ${err.message}\n`;
  }
  md += `\`\`\`\n\n`;
}

fs.writeFileSync(outputFile, md, "utf8");
console.log(
  `\x1b[32m[OK] Repositorio exportado en: ${outputFile} (${files.length} archivos)\x1b[0m`,
);
