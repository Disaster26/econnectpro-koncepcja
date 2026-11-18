(function(){
  var top=document.getElementById('top'),bg=document.getElementById('burger');
  function zamknij(){top.classList.remove('open');bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-label','Otwórz menu');document.body.style.overflow=''}
  bg.addEventListener('click',function(){var o=top.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');document.body.style.overflow=o?'hidden':''});
  document.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',zamknij)});
  addEventListener('keydown',function(e){if(e.key==='Escape')zamknij()});
  var tk=false;function sc(){if(tk)return;tk=true;requestAnimationFrame(function(){top.classList.toggle('sc',window.pageYOffset>20);tk=false})}
  addEventListener('scroll',sc,{passive:true});sc();
  var r=document.getElementById('rok');if(r)r.textContent=new Date().getFullYear();
  if(!('IntersectionObserver' in window))return;
  var links=[].slice.call(document.querySelectorAll('.menu ul a'));
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
  ['start','efekt','pakiet','wdrozenie','branze','opinie','kontakt'].forEach(function(id){var t=document.getElementById(id);if(t)io.observe(t)});
  var mob=document.getElementById('mob');
  new IntersectionObserver(function(es){mob.classList.toggle('widac',!es[0].isIntersecting&&es[0].boundingClientRect.top<0)},{threshold:0}).observe(document.querySelector('.hero .btn'));
  var m=document.getElementById('mapa');
  if(m){var mo=new IntersectionObserver(function(es){if(es[0].isIntersecting){mo.disconnect();var f=document.createElement('iframe');f.src=m.getAttribute('data-src');f.title='Mapa: ConnectPro, ul. Postępu 18B, Warszawa';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';m.appendChild(f)}},{rootMargin:'300px'});mo.observe(m)}
  var fm=document.getElementById('form');
  fm.addEventListener('submit',function(e){e.preventDefault();fm.classList.add('wyslany')});
})();
