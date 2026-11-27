// Dependency-free ZIP writer (stored entries) for the public MIT source download.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
const excluded=new Set(['dist','node_modules','.git','.vercel','.openai']);
export async function sourceZip(root='.') {
 const table=Array.from({length:256},(_,n)=>{for(let k=0;k<8;k++)n=n&1?0xedb88320^(n>>>1):n>>>1;return n>>>0;});
 const crc32=data=>{let n=0xffffffff;for(const b of data)n=table[(n^b)&255]^(n>>>8);return (n^0xffffffff)>>>0;};
 const files=[];
 async function walk(dir,prefix=''){
  for(const entry of (await readdir(dir,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))){
   if(excluded.has(entry.name)||entry.name.startsWith('.env')||entry.name.endsWith('.log'))continue;
   const path=join(dir,entry.name);const relative=prefix+entry.name;
   if(entry.isDirectory())await walk(path,relative+'/');
   else if(entry.isFile())files.push([relative,await readFile(path)]);
  }
 }
 await walk(root);
 const chunks=[],central=[];let offset=0;
 for(const [path,data] of files){
  const name=Buffer.from('guruaide/'+path);const crc=crc32(data);
  const local=Buffer.alloc(30);local.writeUInt32LE(0x04034b50);local.writeUInt16LE(20,4);local.writeUInt16LE(0x800,6);local.writeUInt16LE(33,12);local.writeUInt32LE(crc,14);local.writeUInt32LE(data.length,18);local.writeUInt32LE(data.length,22);local.writeUInt16LE(name.length,26);
  chunks.push(local,name,data);
  const header=Buffer.alloc(46);header.writeUInt32LE(0x02014b50);header.writeUInt16LE(20,4);header.writeUInt16LE(20,6);header.writeUInt16LE(0x800,8);header.writeUInt16LE(33,14);header.writeUInt32LE(crc,16);header.writeUInt32LE(data.length,20);header.writeUInt32LE(data.length,24);header.writeUInt16LE(name.length,28);header.writeUInt32LE(offset,42);central.push(header,name);
  offset+=local.length+name.length+data.length;
 }
 const centralBuffer=Buffer.concat(central);const end=Buffer.alloc(22);end.writeUInt32LE(0x06054b50);end.writeUInt16LE(files.length,8);end.writeUInt16LE(files.length,10);end.writeUInt32LE(centralBuffer.length,12);end.writeUInt32LE(offset,16);
 return Buffer.concat([...chunks,centralBuffer,end]);
}
