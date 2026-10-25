import {renderToString} from 'react-dom/server';
import Home from '../app/page';
import Program from '../app/_program/page';
import {programs,type ProgramKey} from '../app/content';
export function renderPage(program?:ProgramKey){
 const title=program?`${programs[program].label} | MisterBit`:'MisterBit | האנשים הנכונים לצוות שלכם';
 const body=renderToString(program?<Program program={program}/>:<Home/>);
 return `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="מפתחים שהכרנו, מיינו והכשרנו. התאמה אישית וגב טכנולוגי לאורך הדרך."><link rel="icon" href="/misterbit-demo/brand/logo.png"><link rel="stylesheet" href="/misterbit-demo/assets/styles.css"></head><body><div id="root">${body}</div><script type="module" src="/misterbit-demo/assets/app.js"></script></body></html>`;
}
