import {hydrateRoot} from 'react-dom/client';
import Home from '../app/page';
import Program from '../app/_program/page';
import {programs,type ProgramKey} from '../app/content';
const segment=location.pathname.replace(/\/+$/,'').split('/').pop()||'';
const program=Object.hasOwn(programs,segment)?segment as ProgramKey:undefined;
hydrateRoot(document.getElementById('root')!,program?<Program program={program}/>:<Home/>);
