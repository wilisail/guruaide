import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root=resolve('.');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const args=process.argv.slice(2);
const port=Number(args.includes('--port')?args[args.indexOf('--port')+1]:(process.env.PORT||3000));
const host=args.includes('--host')?args[args.indexOf('--host')+1]:'0.0.0.0';
createServer(async(req,res)=>{
 try {
  const url=new URL(req.url,'http://localhost');
  let path=resolve(root,'.'+decodeURIComponent(url.pathname));
  if(path!==root&&!path.startsWith(root+sep)) throw Error('Invalid path');
  if((await stat(path)).isDirectory())path=resolve(path,'index.html');
  const body=await readFile(path);
  res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream'}); res.end(body);
 }catch {res.writeHead(404);res.end('Tidak ditemukan');}
}).listen(port,host,()=>console.log(`Guruaide listening on ${port}`));
