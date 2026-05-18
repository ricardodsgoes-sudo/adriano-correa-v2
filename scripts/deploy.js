#!/usr/bin/env node
/**
 * Deploy para Hostinger via branch "main".
 * Uso: npm run deploy
 *
 * O que faz:
 *  1. Roda npm run build  →  gera pasta out/
 *  2. Copia conteúdo de out/ para a raiz do repositório
 *  3. Commit + push para main
 *
 * O Hostinger serve direto da raiz — index.html fica na raiz.
 */

const { execSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir  = path.join(rootDir, 'out');

const run = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true, cwd: rootDir });

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const s = path.join(src, item), d = path.join(dst, item);
    fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

// 1. Build
console.log('\n> Gerando build...\n');
run('npm run build');

// 2. Copia out/ para a raiz do repositório
console.log('\n> Copiando arquivos estaticos para a raiz...\n');
copyDir(outDir, rootDir);

// 3. Commit e push
const timestamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
run('git add -A');

try {
  run(`git commit -m "deploy: ${timestamp}"`);
  run('git push origin main');
  console.log('\n> Deploy concluido! Publicado em main.\n');
} catch {
  console.log('\n> Nenhuma alteracao para publicar.\n');
}
