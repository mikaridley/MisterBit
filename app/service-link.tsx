'use client';
import type {ReactNode} from 'react';

export default function ServiceLink({service,children}:{service:string;children:ReactNode}){
 return <a href="#contact" onClick={event=>{
  event.preventDefault();
  window.dispatchEvent(new CustomEvent('select-service',{detail:service}));
  document.getElementById('contact')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
 }}>{children}</a>;
}
