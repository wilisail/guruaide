import { cp, mkdir, rm } from 'node:fs/promises';
const files = ['index.html','styles.css','app.js','logic.js','icon.svg','data','docs','templates','examples','research','LICENSE','README.md'];
await rm('dist', {recursive:true,force:true});
await mkdir('dist',{recursive:true});
for (const file of files) await cp(file,`dist/${file}`,{recursive:true});
console.log('Guruaide: static site built in dist/. No API keys or external dependencies.');
