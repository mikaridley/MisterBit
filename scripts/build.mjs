import {build} from 'esbuild';
import {mkdir,cp,readFile,writeFile} from 'node:fs/promises';
await mkdir('out/assets',{recursive:true});
await mkdir('.build',{recursive:true});
await build({entryPoints:['scripts/render.tsx'],bundle:true,platform:'node',format:'esm',packages:'external',jsx:'automatic',outfile:'.build/render.mjs'});
const {renderPage}=await import('../.build/render.mjs');
await build({entryPoints:['scripts/client.tsx'],bundle:true,platform:'browser',format:'esm',jsx:'automatic',minify:true,define:{'process.env.NODE_ENV':'"production"'},outfile:'out/assets/app.js'});
await cp('public','out',{recursive:true});
await writeFile('out/assets/styles.css',await readFile('app/globals.css'));
await writeFile('out/index.html',renderPage());
for(const program of ['trainees','trial','experienced']){
 await mkdir(`out/${program}`,{recursive:true});
 await writeFile(`out/${program}/index.html`,renderPage(program));
}
await writeFile('out/.nojekyll','');
await writeFile('out/404.html','<!doctype html><html lang="he" dir="rtl"><meta charset="utf-8"><title>MisterBit</title><h1>העמוד לא נמצא</h1><a href="/misterbit-demo/">חזרה לעמוד הבית</a></html>');
console.log('Built four static landing pages in out/.');
