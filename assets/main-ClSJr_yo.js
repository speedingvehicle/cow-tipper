import{g as n,i as o,t as h,a as b,b as y,S as g,c as S,U as p,d as C,e as v,f as T,h as A,j as i,l as c,k as f,m as E,n as k,u as O,o as L,p as x,q as I,r as M}from"./elements-BhQO45xh.js";function U(e){e.instructions&&e.count>25&&(n.setInstructionsHidden=o)}function j(e){const r=v();e.count>r&&!e.created&&(n.setCreated(),window.onclick=h,window.onkeydown=b,document.addEventListener("click",y),document.addEventListener("keydown",b),document.addEventListener("pointerdown",()=>{n.setMultiplier=20,n.startInterval(),document.title=g,document.body.style.backgroundColor="#000",document.body.style.cursor="none",document.body.style.filter="invert()",document.body.style.overflow="hidden",window.onbeforeunload=()=>confirm("MMmmoooooo oooOOo oOOOoOOo")}))}function _(){n.animateCount(S)}function q(e){e.count>0&&(document.title=`Cow Tipper - ${e.count} gallons`)}function B(e){p.forEach((r,s)=>{const t=document.querySelector(`#upgrade-${s}`);if(t){const d=t.querySelector(".upgrade-owned"),w=t.querySelector(".upgrade-cost"),u=C(r.cost,e.ownedUpgrades[s]),l=n.count>=u,a=e.ownedUpgrades[s]??0;l&&t.hasAttribute("aria-disabled")?(t.removeAttribute("aria-disabled"),t.setAttribute("tabIndex","0")):!l&&!t.hasAttribute("aria-disabled")&&(t.setAttribute("aria-disabled",""),t.setAttribute("tabIndex","-1")),a&&(t.hasAttribute("data-owned")||t.setAttribute("data-owned",""),parseInt(d.textContent)!==a&&(d.textContent=String(a))),w.textContent=String(u)}})}const D=Object.freeze(Object.defineProperty({__proto__:null,hideInstructionsSubscriber:U,thresholdSubscriber:j,updateCountDisplaySubscriber:_,updateTitleSubscriber:q,updateUpgradeButtonsSubscriber:B},Symbol.toStringTag,{value:"Module"})),m=I();if(m)switch(T.src=A(M("cow")),m){case"xmas":o.innerHTML=`${o.innerHTML}<br />and have a merry`,i.textContent="festive gallons";break;case"nye":o.innerHTML="click cow and new<br />year celebration";break;case"cny":o.textContent="点击奶牛即可挤奶。<br/>使用您累积的牛奶量购买升级。",i.textContent="加仑";break;case"evil":o.textContent="cow hurty",i.textContent="scary gallons"}setTimeout(()=>{document.body.insertAdjacentElement("afterbegin",c),f.addEventListener("pointerdown",()=>{c.remove(),E.play(),n.init()})},100);setTimeout(()=>{c.append(f)},1e3*1.9);setTimeout(()=>{p.map((e,r)=>{const s=k(e,r);O.appendChild(s)})},125);Object.values(D).forEach(e=>{n.subscribe(e)});L.addEventListener("pointerdown",x);
