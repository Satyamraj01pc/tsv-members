// ===========================
// COUNTER ANIMATION
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});


// ===========================
// SCROLL REVEAL
// ===========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:0.15});

document.querySelectorAll(
".member-card,.stat-card,.achievement"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition="all .8s ease";

observer.observe(el);

});


// ===========================
// FLOATING PARTICLES
// ===========================

const particles = document.getElementById("particles");

for(let i=0;i<50;i++){

const dot = document.createElement("span");

dot.style.position="absolute";

const size=Math.random()*6+2;

dot.style.width=size+"px";
dot.style.height=size+"px";

dot.style.borderRadius="50%";

dot.style.background=
Math.random()>0.5
? "#FFD700"
: "#ff6600";

dot.style.left=Math.random()*100+"%";
dot.style.top=Math.random()*100+"%";

dot.style.opacity=".5";

dot.style.animation=
`float ${Math.random()*10+8}s linear infinite`;

particles.appendChild(dot);

}


// ===========================
// PARTICLE ANIMATION
// ===========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes float{

0%{
transform:translateY(0px);
}

50%{
transform:translateY(-120px);
}

100%{
transform:translateY(0px);
}

}

`;

document.head.appendChild(style);


// ===========================
// NAVBAR GLOW
// ===========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow=
"0 0 20px orange";

}else{

header.style.boxShadow="none";

}

});


// ===========================
// HERO TITLE ENTRY
// ===========================

const heroTitle =
document.querySelector(".hero-content h1");

heroTitle.animate(

[
{
transform:"translateY(-50px)",
opacity:0
},
{
transform:"translateY(0px)",
opacity:1
}
],

{
duration:1500
}

);


// ===========================
// TYPEWRITER EFFECT
// ===========================

const subtitle =
document.querySelector(".hero-content h2");

if(subtitle){

const text =
"BGMI ESPORTS CLAN";

subtitle.innerHTML="";

let i=0;

function type(){

if(i<text.length){

subtitle.innerHTML += text.charAt(i);

i++;

setTimeout(type,100);

}

}

type();

}


// ===========================
// MOUSE GLOW
// ===========================

document.addEventListener("mousemove",(e)=>{

let glow =
document.getElementById("mouse-glow");

if(!glow){

glow=document.createElement("div");

glow.id="mouse-glow";

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="20px";
glow.style.height="20px";

glow.style.borderRadius="50%";

glow.style.background="orange";

glow.style.filter="blur(12px)";

glow.style.pointerEvents="none";

glow.style.zIndex="99999";

}

glow.style.left=e.clientX-10+"px";
glow.style.top=e.clientY-10+"px";

});


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});


// ===========================
// BUTTON PULSE
// ===========================

setInterval(()=>{

const btn =
document.querySelector(".btn");

if(btn){

btn.animate(

[
{transform:"scale(1)"},
{transform:"scale(1.05)"},
{transform:"scale(1)"}
],

{
duration:1000
}

);

}

},3000);


// ===========================
// RANDOM SPARKS
// ===========================

setInterval(()=>{

let spark =
document.createElement("div");

spark.style.position="fixed";

spark.style.width="6px";
spark.style.height="6px";

spark.style.borderRadius="50%";

spark.style.background=
Math.random()>.5
? "#FFD700"
: "#ff6600";

spark.style.left=
Math.random()*window.innerWidth+"px";

spark.style.top=
window.innerHeight+"px";

spark.style.pointerEvents="none";

spark.style.zIndex="999";

document.body.appendChild(spark);

spark.animate(

[
{
transform:"translateY(0px)",
opacity:1
},

{
transform:"translateY(-500px)",
opacity:0
}

],

{
duration:4000
}

);

setTimeout(()=>{
spark.remove();
},4000);

},300);