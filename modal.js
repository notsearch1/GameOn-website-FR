// DOM Elements
const topnavIcon = document.querySelector(".topnav-icon");
const navList = document.getElementById('navlist')
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formulaire = document.getElementById('formulaire');


// apparition du menu au click sur le menu burger
topnavIcon.addEventListener("click", () =>{
  navList.classList.toggle('responsive')
})
// écoute du click pour ouvrir la modal formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ouverture de la modal formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// fonction pour fermer la modal avec la croix
closeBtn.addEventListener("click", closeModal);
function closeModal(){
  
  modalbg.style.display= "none";
}



// fonction validation de formulaire
i=1;
let formData=document.querySelectorAll('.formData');
let fields= document.querySelectorAll('input[required]')

formulaire.addEventListener('submit', (e) =>{
  let valid=true;
  //annuler le comportement par défaut
    e.preventDefault();
  //trouver chaque champs input required
    fields.forEach((field, i)=>{
      // si le champs n'est pas valide renvoie faux
      if(!validateField(field, i)){
          i++
          valid=false
      }
  })
  //si valid est true envoie le formulaire
    if(valid){
      e.target.submit();
      alert('Votre inscription est validée');
    }
}, false);

// fonction qui vérifie chaque champas du formulaire
function validateField(field, i){
  console.log(field)
  // si le champ est valide retire la classe invalid et supprime le text dans le span
    if(field.checkValidity()){
      field.classList.remove('invalid');
      formData[i].lastElementChild.innerHTML= " ";
      return true;
    }else{
      //si le champ n'est pas valide ajoute la classe invalid et insere le message prévu par le navigateur en cas d'erreur dans le span
      field.classList.add('invalid');
      formData[i].lastElementChild.innerHTML=field.validationMessage;
      return false;
    };
}



