import{g as n,t as S,a as m,b as h,S as v,U as g,c as E,d as p,i as T,m as C,e as L,f as A,h as O,j as k}from"./util-Catqq4bV.js";const i=document.createElement("div");i.classList.add("loading");const y=document.createElement("div");y.innerText="Loading...";const f=document.createElement("img");f.src="content/images/loading.gif";const s=document.createElement("button");s.classList.add("loading-button");s.innerText="Play";i.append(y,f);const q=document.querySelector(".count-value"),x=document.querySelector("#count-unit"),I=document.querySelector(".cow"),M=document.querySelector("#cow-image"),c=document.querySelector(".instructions"),U=document.querySelector(".upgrade-container");function j(e){e.instructions&&e.count>25&&(n.setInstructionsHidden=c)}function B(e){const o=p();e.count>o&&!e.created&&(n.setCreated(),window.onclick=S,window.onkeydown=m,document.addEventListener("click",h),document.addEventListener("keydown",m),document.addEventListener("pointerdown",()=>{n.setMultiplier=20,n.startInterval(),document.title=v,document.body.style.backgroundColor="#000",document.body.style.cursor="none",document.body.style.filter="invert()",document.body.style.overflow="hidden",window.onbeforeunload=()=>confirm("MMmmoooooo oooOOo oOOOoOOo")}))}function _(){n.animateCount(q)}function D(e){e.count>0&&(document.title=`Cow Tipper - ${e.count} gallons`)}function H(e){g.forEach((o,r)=>{const t=document.querySelector(`#upgrade-${r}`);if(t){const d=t.querySelector(".upgrade-owned"),w=t.querySelector(".upgrade-cost"),u=E(o.cost,e.ownedUpgrades[r]),l=n.count>=u,a=e.ownedUpgrades[r]??0;l&&t.hasAttribute("aria-disabled")?(t.removeAttribute("aria-disabled"),t.setAttribute("tabIndex","0")):!l&&!t.hasAttribute("aria-disabled")&&(t.setAttribute("aria-disabled",""),t.setAttribute("tabIndex","-1")),a&&(t.hasAttribute("data-owned")||t.setAttribute("data-owned",""),parseInt(d.textContent)!==a&&(d.textContent=String(a))),w.textContent=String(u)}})}const P=Object.freeze(Object.defineProperty({__proto__:null,hideInstructionsSubscriber:j,thresholdSubscriber:B,updateCountDisplaySubscriber:_,updateTitleSubscriber:D,updateUpgradeButtonsSubscriber:H},Symbol.toStringTag,{value:"Module"})),b=O();console.log(p());if(b)switch(M.src=T(k("cow")),b){case"xmas":c.innerHTML=`${c.innerHTML}<br />and have a merry`,x.textContent="festive gallons";break;case"nye":c.innerHTML="click cow and new<br />year celebration";break;case"cny":c.textContent="点击奶牛即可挤奶。<br/>使用您累积的牛奶量购买升级。"}setTimeout(()=>{document.body.insertAdjacentElement("afterbegin",i),s.addEventListener("pointerdown",()=>{i.remove(),C.play(),n.init()})},100);setTimeout(()=>{i.append(s)},1e3*1.9);setTimeout(()=>{g.map((e,o)=>{const r=L(e,o);U.appendChild(r)})},125);Object.values(P).forEach(e=>{n.subscribe(e)});I.addEventListener("pointerdown",A);
