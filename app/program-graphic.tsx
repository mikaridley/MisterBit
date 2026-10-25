import {GraduationCap,Sprout,Handshake,UsersRound,UserRoundCheck,Layers3,ShieldCheck,Server,ChartNoAxesCombined} from 'lucide-react';
import type {ProgramKey} from './content';

function Card({x,y,w,h,accent=false}:{x:number;y:number;w:number;h:number;accent?:boolean}){return <rect x={x} y={y} width={w} height={h} rx="18" fill="url(#program-surface)" stroke={accent?'#ffd600':'#56614e'} strokeWidth={accent?2:1}/>}
function Person({x,y,highlight=false}:{x:number;y:number;highlight?:boolean}){return <g><circle cx={x} cy={y} r="19" fill={highlight?'#ffd600':'#394532'}/><UserRoundCheck x={x-11} y={y-11} width="22" height="22" color={highlight?'#192114':'#b1bea5'} strokeWidth="1.6"/></g>}
export default function ProgramGraphic({program}:{program:ProgramKey}){return <div className={'graphic program-graphic graphic-'+program} aria-hidden="true"><svg viewBox="0 0 560 440" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="program-surface" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#303a2c"/><stop offset="1" stopColor="#20271d"/></linearGradient><linearGradient id="program-yellow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe968"/><stop offset="1" stopColor="#ffd600"/></linearGradient><filter id="program-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#000" floodOpacity=".22"/></filter></defs>
{program==='trainees'?<>
<circle cx="288" cy="218" r="164" stroke="#46503b" strokeDasharray="3 10"/><circle cx="288" cy="218" r="190" stroke="#2c3527"/>
<path d="M81 330H182V261H298V180H427" stroke="#ffd600" strokeWidth="3" strokeLinejoin="round"/>
<g filter="url(#program-shadow)"><Card x={47} y={232} w={142} h={104}/><GraduationCap x="68" y="251" width="31" height="31" color="#ffd600"/><text x="68" y="313" fill="#e4e9df" fontSize="16">Learn</text>
<Card x={208} y={164} w={142} h={104}/><Layers3 x="229" y="183" width="29" height="29" color="#ffd600"/><text x="229" y="245" fill="#e4e9df" fontSize="16">Build</text>
<rect x="369" y="95" width="142" height="104" rx="18" fill="url(#program-yellow)"/><Sprout x="390" y="114" width="31" height="31" color="#1b2514"/><text x="390" y="176" fill="#1b2514" fontSize="16" fontWeight="700">Grow</text></g>
<g transform="rotate(-4 280 370)"><rect x="124" y="350" width="312" height="66" rx="15" fill="#f3f5eb"/><Person x={160} y={383} highlight/><text x="191" y="378" fill="#26301e" fontSize="12" fontWeight="700" letterSpacing="1.2">THE NEXT GENERATION</text><text x="191" y="398" fill="#66725b" fontSize="11">A first opportunity. Real potential.</text></g>
<circle cx="94" cy="117" r="5" fill="#ffd600"/><path d="M473 281v20m-10-10h20" stroke="#ffd600" strokeWidth="2"/>
</>:program==='trial'?<>
<path d="M240 170H312M240 204H312M240 238H312" stroke="#4c5842" strokeWidth="1" strokeDasharray="4 7"/>
<g transform="rotate(-6 140 210)" filter="url(#program-shadow)"><Card x={31} y={97} w={222} h={265}/><text x="56" y="126" fill="#aab69d" fontSize="10" letterSpacing="1.6">THE DEVELOPER</text><Person x={141} y={188} highlight/><rect x="72" y="230" width="137" height="6" rx="3" fill="#a1ad93"/><rect x="91" y="248" width="99" height="5" rx="2.5" fill="#58684c"/><rect x="68" y="282" width="145" height="43" rx="10" stroke="#ffd600"/><text x="140" y="309" textAnchor="middle" fill="#ffd600" fontSize="12">Experience + AI</text></g>
<g transform="rotate(5 420 210)" filter="url(#program-shadow)"><Card x={307} y={97} w={222} h={265}/><text x="332" y="126" fill="#aab69d" fontSize="10" letterSpacing="1.6">YOUR TEAM</text><UsersRound x="388" y="159" width="58" height="58" color="#e4e9df" strokeWidth="1.3"/><rect x="344" y="230" width="148" height="6" rx="3" fill="#a1ad93"/><rect x="367" y="248" width="102" height="5" rx="2.5" fill="#58684c"/><rect x="345" y="282" width="144" height="43" rx="10" fill="#394932"/><text x="417" y="309" textAnchor="middle" fill="#e2e9db" fontSize="12">Work. Connect. Fit.</text></g>
<circle cx="280" cy="213" r="50" fill="#ffd600" stroke="#1b201b" strokeWidth="10"/><Handshake x="254" y="187" width="52" height="52" color="#1b2514" strokeWidth="1.5"/>
<rect x="178" y="382" width="205" height="31" rx="15.5" stroke="#6b795d"/><text x="280" y="402" textAnchor="middle" fill="#d1dbc6" fontSize="11">A month to find your fit.</text>
</>:<>
<circle cx="280" cy="222" r="176" stroke="#3e4a35" strokeDasharray="4 9"/>
<path d="M280 210V91M280 210H92M280 210H468M280 210V339" stroke="#ffd600" strokeWidth="2"/>
<g filter="url(#program-shadow)"><Card x={216} y={32} w={128} h={91}/><Layers3 x="263" y="48" width="34" height="34" color="#d9e3ce"/><text x="280" y="108" textAnchor="middle" fill="#aebda0" fontSize="11">Architecture</text>
<Card x={15} y={165} w={138} h={93}/><Server x="67" y="180" width="34" height="34" color="#d9e3ce"/><text x="84" y="243" textAnchor="middle" fill="#aebda0" fontSize="11">Systems</text>
<Card x={407} y={165} w={138} h={93}/><ChartNoAxesCombined x="459" y="179" width="34" height="34" color="#d9e3ce"/><text x="476" y="243" textAnchor="middle" fill="#aebda0" fontSize="11">Performance</text>
<Card x={203} y={311} w={154} h={96} accent/><ShieldCheck x="263" y="325" width="34" height="34" color="#ffd600"/><text x="280" y="391" textAnchor="middle" fill="#dce5d3" fontSize="12">Technical backing</text>
<rect x="214" y="151" width="132" height="121" rx="24" fill="url(#program-yellow)"/><UserRoundCheck x="253" y="166" width="54" height="54" color="#1b2514" strokeWidth="1.5"/><text x="280" y="247" textAnchor="middle" fill="#1b2514" fontSize="12" fontWeight="750" letterSpacing="1.2">EXPERTISE</text></g>
</>}
</svg></div>}
