import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { sourceZip } from './archive.mjs';
const files = ['index.html','styles.css','app.js','logic.js','icon.svg','data','docs','templates','examples','research','LICENSE','README.md'];
await rm('dist', {recursive:true,force:true});
await mkdir('dist',{recursive:true});
for (const file of files) await cp(file,`dist/${file}`,{recursive:true});
await mkdir('dist/downloads',{recursive:true});
await writeFile('dist/downloads/guruaide-source.zip',await sourceZip());
console.log('Guruaide: static site built in dist/. No API keys or external dependencies.');
