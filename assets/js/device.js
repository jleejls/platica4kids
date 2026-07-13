(function(){
  const phone = matchMedia('(max-width:700px)').matches || /Android|iPhone|iPod|Mobile/i.test(navigator.userAgent);
  window.setLane = lane => sessionStorage.setItem('kidsLane', lane);
  const hint=document.getElementById('screenHint'); if(hint) hint.textContent=(phone?'Phone':'Desktop')+' layout is suggested for this screen.';
  const button=document.getElementById('suggested'); if(button) button.onclick=()=>{const lane=phone?'phone':'desktop';setLane(lane);location.href=lane+'/structure.html';};
})();
