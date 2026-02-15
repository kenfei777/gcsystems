(function(){
  const btn = document.querySelector('[data-burger]');
  const panel = document.querySelector('[data-mobile]');
  if(btn && panel){
    btn.addEventListener('click', ()=>{
      panel.classList.toggle('open');
    });
  }
})();
