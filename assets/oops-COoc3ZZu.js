import{o as r}from"./util-BUVFfKTc.js";let n=5,c=5,o=600,t=-100;function a(e){switch(e){case"left":n=Math.ceil(-4*Math.random())*5-10;break;case"down":c=Math.ceil(7*Math.random())*5-10;break;case"right":n=Math.ceil(7*Math.random())*5-10;break;case"up":c=Math.ceil(-4*Math.random())*5-10;break}}function i(){o+=n,t+=c,o>screen.width-100&&a("left"),o<0&&a("right"),t>screen.height-300&&a("up"),t<0&&a("down"),window.moveTo(o,t),window.focus(),setTimeout(i,125),setInterval(i,250)}const d=document.querySelector("audio"),l=()=>{d.play()},s=()=>{l(),r()};function f(e){switch(e.key){case"F4":case"Escape":case"W":case"w":case"Alt":case"Control":case"Shift":case"Tab":case" ":r(),alert("cow");break}}function w(e){e.preventDefault(),e.stopPropagation(),confirm("MmmmooooOo ooOOO??!!!???")}document.addEventListener("click",s);document.addEventListener("pointerdown",s);document.addEventListener("keydown",f);window.onload=i;window.onbeforeunload=w;