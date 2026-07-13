(function(){
 const d=window.PAGE_DETAILS;if(!d)return;
 const lane=sessionStorage.getItem('kidsLane')||((innerWidth<=700)?'phone':'desktop'); document.body.dataset.lane=lane;
 document.title=d.title+' — Plática for Kids'; document.getElementById('lessonTitle').textContent=d.title;
 document.getElementById('instruction').textContent=d.instruction;
 const people=document.getElementById('people'); let chosen=null,score=0;
 d.people.forEach((p,i)=>{const b=document.createElement('button');b.className='speaker '+(i?'girl':'');b.innerHTML=`<img src="${p.image}" alt="${p.alt}"><h2>${p.label}</h2><div class="phrase">${p.starter}…</div>`;b.onclick=()=>{[...people.children].forEach(x=>x.classList.remove('selected'));b.classList.add('selected');chosen={button:b,data:p};play(p.audio);};people.appendChild(b);});
 const row=document.getElementById('objects');d.objects.forEach(o=>{const b=document.createElement('button');b.className='object';b.innerHTML=`${o.icon}<strong>${o.word}</strong>`;b.onclick=()=>{if(!chosen){document.getElementById('status').textContent='Choose YO or USTED first.';return;}const phrase=chosen.data.starter+' '+o.word+'.';chosen.button.querySelector('.phrase').textContent=phrase;document.getElementById('status').textContent=phrase;score++;document.getElementById('score').textContent=score;play(o.audio||chosen.data.audio);};row.appendChild(b);});
 function play(src){if(!src)return;const a=new Audio(src);a.play().catch(()=>{});}
 document.getElementById('reset').onclick=()=>location.reload();
 document.getElementById('directorLink').href=lane==='phone'?'../../phone/director.html':'../../desktop/director.html';
 const next=document.getElementById('nextLink'); if(d.next)next.href='../'+d.next+'/index.html';else{next.classList.add('disabled');next.removeAttribute('href');}
})();
