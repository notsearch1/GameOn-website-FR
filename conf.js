//ELEMENTS DU DOM
const closeConf =document.querySelector(".closeConf");//croix sur la modal de confirmation
const btnConf = document.getElementById('btnConf');//bouton fermer sur modal conf


//écoute le clique sur la croix
btnConf.addEventListener('click', closeModalConf);

//écoute le clique sur le bouton fermer
closeConf.addEventListener("click", closeModalConf);

// fonction redirigeant vers index.html
function closeModalConf(){
  document.location.href="index.html";
}