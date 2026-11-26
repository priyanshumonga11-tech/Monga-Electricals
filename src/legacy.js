import { SHOP } from "./data/products";
export function initializeLegacy(SEED) {
const $=i=>document.getElementById(i),SHOP=103,esc=s=>String(s).replace(/[&<>"']/g,m=>'&#'+m.charCodeAt()+';');
const CATS=[['Battery & Inverter',/battery|inverter/i],['Softeners',/soften/i],['Geysers & Heaters',/geyser|heater|solar|red star/i],['Commercial RO',/plant|ro system|50 lt|org ind|\d+ lt|commercial|lph/i],['Campers',/camper/i],['Spare Parts',/gear box|w\/m|pump|mixi|spares|^tap$|bowl|trolley/i],['Coolers',/cooler/i],['Fans',/fan/i],['Kitchen & Home',/coffee|chimney|blender|toaster|vacuum|lamp|torch|magic|hot case/i]];
const cat=n=>(CATS.find(c=>c[1].test(n))||['RO Purifiers'])[0];
let S;try{S=JSON.parse(localStorage.getItem('mg'))}catch(e){}
S=S||{add:[],del:[],ed:{},set:{}};S.set=Object.assign({wa:'',ph:'',ad:'Monga Electricals, opp. Main Post Office, Sirsa 125055',pin:'1234'},S.set);
const save=()=>{try{localStorage.setItem('mg',JSON.stringify(S))}catch(e){alert('Storage full – export a backup first')}};
const HIDE=[65,75,55,SHOP];
const all=()=>{const L=SEED.map((p,i)=>Object.assign({id:'s'+i,name:p[0],img:p[1],cat:cat(p[0]),price:'',feat:0},S.ed['s'+i]||{})).filter((p,i)=>!HIDE.includes(i)&&!S.del.includes(p.id)),t={},c={};L.forEach(p=>t[p.name]=(t[p.name]||0)+1);L.forEach(p=>{if(t[p.name]>1){c[p.name]=(c[p.name]||0)+1;p.name+=' '+String(c[p.name]).padStart(2,'0')}});return L.concat(S.add)};
const wl=t=>'https://wa.me/'+S.set.wa.replace(/\D/g,'')+'?text='+encodeURIComponent(t);
let cur='All',qs='';
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
const IC={'RO Purifiers':'💧','Geysers & Heaters':'🔥','Coolers':'❄️','Fans':'🌀','Battery & Inverter':'🔋','Softeners':'🚿','Commercial RO':'🏭','Campers':'🥤','Kitchen & Home':'☕','Spare Parts':'⚙️'},OR=Object.keys(IC);let LST=[];
function draw(){
 const A=all(),cs=[...new Set(A.map(p=>p.cat))].sort((a,b)=>(OR.indexOf(a)+1||99)-(OR.indexOf(b)+1||99));if(cur!='All'&&!cs.includes(cur))cur='All';
 $('pl').innerHTML=['All',...cs].map(c=>`<button class="pill${c==cur?' on':''}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
 $('cg').innerHTML=cs.map(c=>`<div class="cat rv" data-c="${esc(c)}"><span>${IC[c]||'⚡'}</span><b>${A.filter(p=>p.cat==c).length}</b>${esc(c)}</div>`).join('');
 const L=A.filter(p=>p.name.toLowerCase().includes(qs));LST=L;let h='';
 const SUB=p=>{const n=p.name;if(p.cat=='RO Purifiers')return /kent/i.test(n)?'Kent RO':/livpure/i.test(n)?'Livpure RO':/g series|g plus/i.test(n)?'G Series RO':/oliver/i.test(n)?'Oliver RO':/aquaguard/i.test(n)?'Aquaguard':'RO Cabinets & Others';if(p.cat=='Geysers & Heaters')return /solar/i.test(n)?'Solar Geysers':/heater/i.test(n)?'Room Heaters':/gas|lazer|padmani|orient/i.test(n)?'Gas Geysers':'Electric Geysers';return''};
 const SO=['Kent RO','Livpure RO','G Series RO','Oliver RO','Aquaguard','RO Cabinets & Others','Gas Geysers','Electric Geysers','Solar Geysers','Room Heaters'];
 const card=p=>`<div class="pc" data-p="${p.id}"><div class="im"><img loading="lazy" src="${p.img}" alt="${esc(p.name)}"></div><h4>${esc(p.name)}</h4><div class="pr">${p.price?esc(p.price):'Price on request'}</div><a class="eq" target="_blank" rel="noopener" href="${wl('Hi Monga Electricals, I want to know about: '+p.name)}">ENQUIRE</a></div>`;
 (cur=='All'?cs:[cur]).forEach(c=>{const l=L.filter(p=>p.cat==c);if(!l.length)return;const m={};l.forEach(p=>(m[SUB(p)]=m[SUB(p)]||[]).push(p));const ks=Object.keys(m).sort((a,b)=>(SO.indexOf(a)+1||99)-(SO.indexOf(b)+1||99));
  h+=`<div class="grp"><div class="gh rv"><h3>${esc(c)}</h3>${cur=='All'?`<a class="sa" data-c="${esc(c)}">see all</a>`:''}</div>${ks.map(k=>`${k&&ks.length>1?`<div class="sb rv">${esc(k)}<em>${m[k].length}</em></div>`:''}<div class="rw"><button class="ar l" data-ar="-1">‹</button><div class="row">${m[k].sort((a,b)=>b.feat-a.feat||a.name.localeCompare(b.name,undefined,{numeric:true})).map(card).join('')}</div><button class="ar r" data-ar="1">›</button></div>`).join('')}</div>`});
 $('g').className=cur=='All'?'':'wm';$('g').innerHTML=h||'<p style="color:var(--m)">No products found.</p>';
 $('wa0').href=$('wa1').href=wl('Hi Monga Electricals, I need help choosing a product.');
 $('tel').href='tel:'+S.set.ph;$('tel').style.display=S.set.ph?'':'none';$('ad2').textContent=S.set.ad;
 $('st').textContent=A.length+'+ products · '+cs.length+' categories';
 document.querySelectorAll('.rv:not(.in)').forEach(e=>io.observe(e));
}
$('si').src=SEED[SHOP][1];
const br='KENT,LIVPURE,G SERIES,OLIVER,AQUAGUARD,RACOLD,LAZER,LIVFAST,LEXUS,SUJATA,ORIENT,PADMANI,PHILIPS,BOSCH'.split(',').map(b=>`<span>${b}</span>`).join('');$('mq').innerHTML=br+br;
$('q').oninput=e=>{qs=e.target.value.toLowerCase();draw()};
document.addEventListener('click',e=>{const c=e.target.closest('[data-c]');if(c&&!c.closest('#adm')){cur=c.dataset.c;draw();if(c.classList.contains('cat')||c.classList.contains('sa'))$('shop').scrollIntoView()}});
$('g').addEventListener('mousemove',e=>{const c=e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--y',((e.clientX-r.left)/r.width-.5)*14+'deg');c.style.setProperty('--x',-((e.clientY-r.top)/r.height-.5)*14+'deg')});
$('g').addEventListener('mouseout',e=>{const c=e.target.closest('.card');if(c){c.style.setProperty('--x','0deg');c.style.setProperty('--y','0deg')}});
draw();
/* ---------- 3D HERO ---------- */
try{const T=THREE,cv=$('c'),R=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const sc=new T.Scene(),cam=new T.PerspectiveCamera(50,1,.1,100);cam.position.set(0,0,11);const G=new T.Group();sc.add(G);
const ringM=(r,c,t)=>new T.Mesh(new T.TorusGeometry(r,t,16,180),new T.MeshBasicMaterial({color:c}));
const r1=ringM(2.3,0x2f6bff,.04),r2=ringM(2.8,0x2fbf4a,.022),r3=ringM(3.3,0x86adff,.012);G.add(r1,r2,r3);
const glow=(c,s)=>{const k=document.createElement('canvas');k.width=k.height=128;const x=k.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,128,128);const p=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(k),blending:T.AdditiveBlending,transparent:true,depthWrite:false}));p.scale.set(s,s,1);G.add(p);return p};
const gl=glow('rgba(47,107,255,.75)',9);glow('rgba(47,191,74,.45)',5);
const N=2000,pa=new Float32Array(N*3),pc=new Float32Array(N*3);
for(let i=0;i<N;i++){const r=2.5+Math.random()*10,a=Math.random()*6.283,y=(Math.random()-.5)*12,c=Math.random()<.5?[.18,.42,1]:[.18,.75,.29];pa.set([Math.cos(a)*r,y,Math.sin(a)*r],i*3);pc.set(c,i*3)}
const pg=new T.BufferGeometry();pg.setAttribute('position',new T.BufferAttribute(pa,3));pg.setAttribute('color',new T.BufferAttribute(pc,3));
const P=new T.Points(pg,new T.PointsMaterial({size:.05,vertexColors:true,transparent:true,opacity:.85,blending:T.AdditiveBlending,depthWrite:false}));G.add(P);
const ring=new T.Group();ring.rotation.x=.16;G.add(ring);
const HERO=[101,3,5,27,33,43,14,19,24,23];
HERO.forEach((id,i)=>{const im=new Image();im.onload=()=>{const k=document.createElement('canvas');k.width=k.height=320;const x=k.getContext('2d');x.beginPath();x.roundRect(8,8,304,304,44);x.save();x.clip();x.drawImage(im,8,8,304,304);x.restore();x.lineWidth=7;x.strokeStyle=i%2?'#2fbf4a':'#2f6bff';x.stroke();
 const m=new T.Mesh(new T.PlaneGeometry(1.9,1.9),new T.MeshBasicMaterial({map:new T.CanvasTexture(k),transparent:true,side:T.DoubleSide})),a=i/HERO.length*6.283;m.position.set(Math.sin(a)*4.7,0,Math.cos(a)*4.7);m.rotation.y=a;ring.add(m)};im.src=SEED[id][1]});
let base=1,mx=0,my=0,sy=0,it=0;const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,clk=new T.Clock();
function rs(){const w=innerWidth,h=innerHeight,mob=w<800;R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();base=mob?.5:1;G.userData.p=mob?[0,-2.6,-1]:[3.2,0,0]}rs();addEventListener('resize',rs);
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});addEventListener('scroll',()=>sy=scrollY,{passive:true});
(function L(){const t=rm?0:clk.getElapsedTime();it=Math.min(1,it+.012);const e=1-Math.pow(1-it,3),p=G.userData.p;
 G.scale.setScalar(base*e);G.position.set(p[0],p[1]+sy*.004,p[2]);cam.position.z=11+sy*.003;cv.style.opacity=Math.max(.12,1-sy/(innerHeight*.9));
 ring.rotation.y=t*.2+sy*.003+(1-e)*3;ring.children.forEach((m,i)=>m.position.y=Math.sin(t*1.2+i)*.3);
 r1.rotation.z=t*.4;r2.rotation.x=1.2+Math.sin(t*.5)*.2;r2.rotation.y=t*.3;r3.rotation.x=.6;r3.rotation.z=-t*.2;P.rotation.y=t*.03;P.rotation.x=sy*.0004;
 const k=9+Math.sin(t*1.5)*.6;gl.scale.set(k,k,1);G.rotation.y+=(mx*.5-G.rotation.y)*.04;G.rotation.x+=(my*.3-G.rotation.x)*.04;
 R.render(sc,cam);requestAnimationFrame(L)})()}catch(e){$('c').style.display='none'}
/* ---------- 3D PRODUCT VIEWER ---------- */
const V=$('vw'),ob=$('ob'),stg=$('stg');let vi=0,rx=0,ry=0,tx=0,ty=0,hov=0;
function showP(){const p=LST[vi];if(!p)return;V.classList.add('on');document.body.style.overflow='hidden';$('vi').src=$('vg').src=p.img;$('vt').textContent=p.name;$('vc').textContent=(IC[p.cat]||'⚡')+' '+p.cat;$('vpr').textContent=p.price||'Price on request';$('vwa').href=wl('Hi Monga Electricals, I want to know about: '+p.name)}
const closeP=()=>{V.classList.remove('on');document.body.style.overflow=''},step=d=>{vi=(vi+d+LST.length)%LST.length;showP()};
document.addEventListener('click',e=>{const c=e.target.closest('[data-p]');if(c&&!e.target.closest('.eq')){vi=Math.max(0,LST.findIndex(p=>p.id==c.dataset.p));showP()}});
$('vcl').onclick=closeP;$('vpv').onclick=()=>step(-1);$('vnx').onclick=()=>step(1);
addEventListener('keydown',e=>{if(!V.classList.contains('on'))return;if(e.key=='Escape')closeP();if(e.key=='ArrowLeft')step(-1);if(e.key=='ArrowRight')step(1)});
stg.addEventListener('pointermove',e=>{const r=stg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ty=x*60;tx=-y*44;hov=1;$('sh').style.setProperty('--sx',(x+.5)*100+'%');$('sh').style.setProperty('--sy',(y+.5)*100+'%')});
stg.addEventListener('pointerleave',()=>hov=0);
(function A(){if(V.classList.contains('on')){const t=performance.now()/1000,gy=hov?ty:Math.sin(t*.8)*16,gx=hov?tx:Math.cos(t*.6)*9;ry+=(gy-ry)*.09;rx+=(gx-rx)*.09;ob.style.transform=`translateY(${Math.sin(t*1.3)*6}px)rotateX(${rx}deg)rotateY(${ry}deg)`}requestAnimationFrame(A)})();
document.addEventListener('click',e=>{const a=e.target.closest('[data-ar]');if(a)a.parentNode.querySelector('.row').scrollBy({left:a.dataset.ar*640,behavior:'smooth'})});
/* ---------- ADMIN ---------- */
const ad=$('adm');let ok=0,ed=null,pending=null,tq='';
$('adl').onclick=e=>{e.preventDefault();ad.classList.add('on');ok?panel():login()};$('ax').onclick=()=>ad.classList.remove('on');
function login(){$('ap').innerHTML=`<div class="f" style="margin-top:30px"><p>Enter admin PIN (default 1234)</p><input id="pn" type="password"><button class="btn" id="go">Login</button></div>`;$('go').onclick=()=>{if($('pn').value==S.set.pin){ok=1;panel()}else $('go').textContent='Wrong PIN – try again'}}
function rm(id){if(id[0]=='s')S.del.push(id);else S.add=S.add.filter(p=>p.id!=id)}
function panel(){
 const A=all(),cs={};A.forEach(p=>cs[p.cat]=(cs[p.cat]||0)+1);const mx=Math.max(...Object.values(cs),1);
 const rows=()=>A.filter(p=>(p.name+p.cat).toLowerCase().includes(tq.toLowerCase())).map(p=>`<tr><td><img src="${p.img}"></td><td>${esc(p.name)}${p.feat?' ⭐':''}</td><td>${esc(p.cat)}</td><td>${esc(p.price||'—')}</td><td><button class="sm" data-e="${p.id}">Edit</button> <button class="sm r" data-d="${p.id}">Delete</button></td></tr>`).join('');
 $('ap').innerHTML=`<div class="st"><div><b>${A.length}</b>Products</div><div><b>${Object.keys(cs).length}</b>Categories</div><div><b>${A.filter(p=>p.feat).length}</b>Featured</div><div><b>${S.add.length}</b>Added by you</div><div><b>${S.del.length}</b>Removed</div></div>
 <h3>Products by category</h3>${Object.entries(cs).map(([c,n])=>`<div style="display:flex;gap:10px;align-items:center;margin:6px 0;font-size:13px"><span style="width:150px">${esc(c)}</span><i style="height:8px;border-radius:9px;width:${n/mx*50}%;background:linear-gradient(90deg,var(--b),var(--g))"></i>${n}</div>`).join('')}
 <h3>${ed?'Edit':'Add'} product</h3><div class="f"><input id="fn" placeholder="Product name" value="${esc(ed?ed.name:'')}"><input id="fc" list="dl" placeholder="Category (leave blank = auto)" value="${esc(ed?ed.cat:'')}"><datalist id="dl">${[...CATS.map(c=>c[0]),'RO Purifiers'].map(c=>`<option>${c}</option>`).join('')}</datalist><input id="fp" placeholder="Price (optional, e.g. ₹12,500)" value="${esc(ed?ed.price||'':'')}"><input id="fi" type="file" accept="image/*"><img id="pv" src="${ed?ed.img:''}" style="width:90px;border-radius:12px;${ed?'':'display:none'}"><label><input id="ff" type="checkbox" ${ed&&ed.feat?'checked':''}> Featured (show first)</label><div><button class="btn" id="fs">${ed?'Save changes':'Add product'}</button>${ed?'<button class="btn o" id="fx">Cancel</button>':''}</div></div>
 <h3>All products</h3><input id="tq" placeholder="Search…" value="${esc(tq)}" style="margin-bottom:10px"><div style="overflow-x:auto"><table><tbody id="tb">${rows()}</tbody></table></div>
 <h3>Contact &amp; security</h3><div class="f"><input id="sw" placeholder="WhatsApp number with country code, e.g. 919876543210" value="${esc(S.set.wa)}"><input id="sp" placeholder="Phone number" value="${esc(S.set.ph)}"><input id="sa" placeholder="Address" value="${esc(S.set.ad)}"><input id="sn" placeholder="Admin PIN" value="${esc(S.set.pin)}"><button class="btn" id="ss">Save settings</button></div>
 <h3>Backup</h3><div class="f"><button class="btn" id="ex">Export backup (JSON)</button><input id="im" type="file" accept=".json"><button class="btn o" id="rs" style="margin:0">Reset everything</button></div>`;
 $('tq').oninput=e=>{tq=e.target.value;$('tb').innerHTML=rows()};
 $('fi').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=document.createElement('canvas'),s=Math.min(1,560/Math.max(im.width,im.height));k.width=im.width*s;k.height=im.height*s;k.getContext('2d').drawImage(im,0,0,k.width,k.height);pending=k.toDataURL('image/jpeg',.8);$('pv').src=pending;$('pv').style.display=''};im.src=r.result};r.readAsDataURL(f)};
 $('fs').onclick=()=>{const n=$('fn').value.trim();if(!n)return;const o={name:n,cat:$('fc').value.trim()||cat(n),price:$('fp').value.trim(),feat:$('ff').checked?1:0};if(pending)o.img=pending;
  if(ed){if(ed.id[0]=='s')S.ed[ed.id]=Object.assign(S.ed[ed.id]||{},o);else Object.assign(S.add.find(p=>p.id==ed.id),o)}
  else{if(!o.img){$('fs').textContent='Choose an image first';return}S.add.push(Object.assign({id:'a'+Date.now()},o))}
  ed=null;pending=null;save();panel();draw()};
 if(ed)$('fx').onclick=()=>{ed=null;pending=null;panel()};
 $('ss').onclick=()=>{S.set={wa:$('sw').value.trim(),ph:$('sp').value.trim(),ad:$('sa').value.trim(),pin:$('sn').value.trim()||'1234'};save();draw();$('ss').textContent='Saved ✓'};
 $('ex').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'}));a.download='monga-backup.json';a.click()};
 $('im').onchange=e=>{const r=new FileReader();r.onload=()=>{try{S=JSON.parse(r.result);save();location.reload()}catch(x){alert('Invalid file')}};r.readAsText(e.target.files[0])};
 $('rs').onclick=e=>{if(!e.target.dataset.s){e.target.dataset.s=1;e.target.textContent='Sure? Click again';return}localStorage.removeItem('mg');location.reload()};
}
$('ap').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;
 if(d.e){ed=all().find(p=>p.id==d.e);pending=null;panel();ad.scrollTo(0,0)}
 else if(d.d){if(!d.s){d.s=1;b.textContent='Sure?';return}rm(d.d);save();panel();draw()}});

}
