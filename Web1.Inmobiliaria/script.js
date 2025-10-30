function openGallery(src){
  const modal=document.getElementById('modal');
  const img=document.getElementById('modalImg');
  img.src=src;
  modal.classList.add('open');
}

function closeModal(e){
  if(e.target.id==='modal'){
    document.getElementById('modal').classList.remove('open');
    document.getElementById('modalImg').src='';
  }
}

document.getElementById('btnSearch').addEventListener('click',()=>{
  const q=document.getElementById('q').value.trim();
  if(!q) return alert('Escribe barrio o referencia.');
  alert('Buscando: '+q+' — (simulación)');
});

function sendForm(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const msg=document.getElementById('msg').value.trim();
  if(!name||!email||!msg){alert('Completa todos los campos.');return}
  alert('Gracias '+name+'! Su mensaje ha sido recibido (simulado).\nNos contactaremos a: '+email);
  e.target.reset();
}
