// DOM Elements
const topnavIcon = document.querySelector(".topnav-icon")//ICON BURGER
const navList = document.getElementById('navlist'); //MENU MENU BURGER OUVERT
const modalbg = document.querySelector(".bground");//MODAL DU FORMULAIRE
const modalBtn = document.querySelectorAll(".modal-btn");//BOUTON JE M INSCRIS
const closeBtn = document.querySelector(".close");//BOUTON FERMETURE MODAL FORM
const formulaire = document.getElementById('formulaire');//FORMULAIRE
const btnSubmit = document.getElementById('btnSubmit');//BOUTON ENVOIE FORMULAIRE
const formData=document.querySelectorAll('.formData');//DIV CONTENANT CHAQUE INPUT
const fields= document.querySelectorAll('input[required]');//INPUT AVEC ATTRIBUT REQUIRED
const birthdate=document.getElementById('birthdate');// INPUT BIRTHDATE
const birthdateError= document.getElementById('birthdateError');//SPAN ERROR INPUT BIRTHDATE
const heroImg = document.querySelector('.hero-img');

i=1;//COMPTEUR POUR ITERER LES INPUTS

// apparition du menu au click sur le menu burger
topnavIcon.addEventListener("click", () =>{
    navList.classList.toggle('responsive')
})
// écoute du click pour ouvrir la modal formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ouverture de la modal formulaire
function launchModal() {
    modalbg.style.display = "block";
    heroImg.style.display = "none";
}

// fonction pour fermer la modal formulaire avec la croix
closeBtn.addEventListener("click", closeModal);
function closeModal(){
    modalbg.style.display= "none";
    heroImg.style.display = "flex";
  
}

// fonction validation de formulaire
function validate(event){
    valid = true;
    event.preventDefault;

    //trouver chaque champs input required
    fields.forEach((field, i)=>{
        if(!validateField(field, i)){
            i++
            valid=false
            console.log(valid)
        }
    })
        if(valid){ 
          return true;
        } else{
          return false;
        }
  }
  
  // fonction qui vérifie chaque champs du formulaire et gère messages d'erreur
  function validateField(field, i){
    // si le champ est valide retire la classe invalid et supprime le text dans le span
    if(field.checkValidity()){
        field.classList.remove('invalid');
        formData[i].lastElementChild.innerHTML= " ";

        verifBirthdate();
        return true;
    }else{
      //si le champ n'est pas valide ajoute la classe invalid et insere le message prévu par le navigateur en cas d'erreur dans le span
      field.classList.add('invalid');
      formData[i].lastElementChild.innerHTML=field.validationMessage;
      return false;
    };
  }

  //fonction qui vérifie que la date de naissance saisie est sup à la date du jour
  function verifBirthdate(){
  //récupération de la date du jour
        let date = new Date()
        let birthdateValue= birthdate.value;
        console.log(birthdateValue)
        console.log(date)
        let month='' + (date.getMonth() + 1);
        let day= '' + date.getDate();
        let year= date.getFullYear();
        
        if (month.length < 2) 
              month = '0' + month;
        if (day.length < 2) 
              day = '0' + day;
        let dateFormatValid= [year, month, day].join('-');
        console.log(dateFormatValid)

  // si > ajoute la classe invalid et met un message d'erreur
      if(birthdateValue > dateFormatValid){
          birthdate.classList.add('invalid');
          birthdateError.innerHTML="Le date de naissance doit être inférieure à la date du jour";
          return false;
      }else{
          return true;
    }}
  
