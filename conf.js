//ELEMENTS DU DOM
const topnavIcon = document.querySelector(".topnav-icon")//ICON BURGER
const navList = document.getElementById('navlist'); //MENU MENU BURGER OUVERT
const closeConf =document.querySelector(".closeConf");//croix sur la modal de confirmation
const btnConf = document.getElementById('btnConf');//bouton fermer sur modal conf



// apparition du menu au click sur le menu burger
topnavIcon.addEventListener("click", () =>{
  navList.classList.toggle('responsive')
})
//écoute le clique sur la croix
btnConf.addEventListener('click', closeModalConf);

//écoute le clique sur le bouton fermer
closeConf.addEventListener("click", closeModalConf);

// fonction redirigeant vers index.html
function closeModalConf(){
  document.location.href="index.html";
}