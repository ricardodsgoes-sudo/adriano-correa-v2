#!/usr/bin/env node
/**
 * Deploy para Hostinger via branch "deploy".
 * Uso: npm run deploy
 *
 * O que faz:
 *  1. Roda npm run build (gera a pasta out/)
 *  2. Copia o conteúdo de out/ para uma pasta temporária
 *  3. Faz git push --force dos arquivos estáticos para a branch "deploy"
 *  4. Limpa a pasta temporária
 *
 * Configure o Hostinger para usar a branch: deploy
 */

const { execSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir  = path.join(rootDir, 'out');
const tmpDir  = path.join(rootDir, '.deploy-tmp');

const run  = (cmd, cwd = rootDir) => execSync(cmd, { stdio: 'inherit', shell: true, cwd });
const read = (cmd, cwd = rootDir) => execSync(cmd, { shell: true, cwd }).toString().trim();

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const s = path.join(src, item), d = path.join(dst, item);
    fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

// 1. Build
console.log('\n> Gerando build de producao...\n');
run('npm run build');

// 2. Copia out/ para pasta temporária
if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
copyDir(outDir, tmpDir);

// 3. Git init + push para branch deploy
const remoteUrl = read('git remote get-url origin');
const timestamp = new Date().toISOString().slice(0, 16).replace('T', ' ');

run('git init', tmpDir);
run('git checkout --orphan deploy', tmpDir);
run(`git remote add origin ${remoteUrl}`, tmpDir);
run('git add .', tmpDir);
run(`git commit -m "deploy: ${timestamp}"`, tmpDir);
run('git push origin deploy --force', tmpDir);

// 4. Limpa
fs.rmSync(tmpDir, { recursive: true, force: true });

console.log('\n> Deploy concluido! Branch "deploy" atualizada no GitHub.');
console.log('  Configure o Hostinger para usar a branch: deploy\n');
