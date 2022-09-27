//prérequis
$("[data-cible=tab-bord]").hide
let id = Date.now();
// $("section[data-cible='liste']").hide()
// gestion des evenements

$(document).on("click", "a[data-source=liste]", affichage);
$(document).on("click", ".supp", suppression)
$(document).on("click", ".close", affichage)
$(document).on("click", ".close", toast)
$(document).on("click", "[data-source=tab-bord]", tbord)
// $(document).on("click", "#ajouteMaj", maj)
$(document).on("click", ".btn-close", closed)
$(document).on("click", "#ajoute",ajoute)

// les fonctions

//compteur
function compteur(incremente) {
  for (let i = 0; i < incremente.length; i++ + 1) {
    let total = [i];
    return total

  }
};
// ajouts
function ajoute(e) { // activation du bouton au click 
  e.preventDefault()

  console.log("bonjour"); //verification de la validité  de #save afin d envoyer la requete
  //  je cree une variable contenant un timestamp

  console.log(id);
  // je crée une variable contenant l objet de la futur requete poste 
  let objet = {
    "nom": $("#nom").val(),
    "prenom": $("#prenom").val(),
    "id": id
  }
  //je verifie si les entrés  ne sont pas egal a zero 
  if ($("#prenom").val().length === 0 || $("#nom").val().length === 0) {
    //mesages si les entrés sont vide
    $(".message").html(`<span class=" mb-1 ">Merci de remplir les champs &nbsp </span> <i class="fa fa-address-card-o mt-1" aria-hidden="true"></i>`);
    e.preventDefault();

  }
  else {
    //si ce n 'est pas le cas  nous créons la requete ajax 
    $.ajax({
      url: "http://localhost:3000/contacts/",
      type: "POST",
      data: objet,
    })

      .done(function (response) {
        //et nous l affichons avec message en resonce en paramete afin de  l afficher
        $(".message").html("<span>Votre ajout " + response + " a etait pris en compte veuillez femer la fenetre</span>");

      }


      )
  }
};

//affichage
function affichage(e) {
  e.preventDefault();
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/contacts",
    dataType: "json",
  });

  request.done(function (response) {
    let html = "";
    if (response.length === 0) {
      html = `<h2 class="py-4 h1">Aucun contact n'a été trouvé.  </h2>`;
    }
    else {
      html += `
    <h2 class="py-4 h1 ">Liste des contacts </h2>
    <table class="table table-striped ">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>`;

      response.map((contact) => {

        html += `
        <tr>
          <th scope="row">${contact.id}</th>
          <td>${contact.nom}</td>
          <td>${contact.prenom}</td>
          <td>
            <button type="button" data-id="${contact.id}" data-bs-toggle="modal" data-bs-target="#Modal" class="btn btn-info text-white maj"><i class="fa-solid fa-pen-to-square"></i> Modifier</button>
            <button type="button" data-id="${contact.id}" class="btn btn-danger supp"><i class="fa-solid fa-trash-can"></i> Supprimer</button>
          </td>
        </tr>`
      }
      );

      html += `</tbody>
            </table>
    `;
    }


    $("section[data-cible='liste']").show().html(html);


  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}
// suppression

function suppression(e) {

  let request = $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/contacts/" + id,
  });

  request.done(function (response) {
    
    
    affichage(e)
    
  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}
// je cree la fonction pour  l'affichage des toast 
function toast(response) {
  const userStr = (response);

 
  localStorage.setItem("response", userStr );
  console.log(localStorage.getItem("reponse"));

  // je verifie les entrés
  if ($("#prenom").val().length === 0 || $("#nom").val().length === 0) {
    // si les entrees sont  vide on affiche 
    let toast = `
<div class=" bg-info ms-1 toasty rounded-1 mt-2 p-1 " role="alert" aria-live="assertive" aria-atomic="true"  >
  <div class="bg-dark  ">
     <button type="button" class="btn-close btn-close-white  "  data-bs-dismiss="toasty" aria-label="Close"></button>
  </div>
  <div class="toast-header">
 <p class="text-center "> <strong> mise a jour </strong> <p/> </br> 
  </div> 
  <div>
 <p class="bg-danger text-center ">invalid &nbsp; &nbsp; <i class="fa-solid fa-xmark"></i></p> 
  </div>
</div>`
    $(".message2").append(toast);


  }
  // si elle ne le sont pas on affiche 
  else {
    let toast = `<div class=" bg-info mt-2  p-1 ms-1 toasty rounded-1 " role="alert" aria-live="assertive" aria-atomic="true"  >
   <div class="bg-black w-100">
   <button type="button" class="btn-close btn-close-white bg-bg-black  "  data-bs-dismiss="toasty" aria-label="Close"></button>
 </div>
   <div class="toast-header">
 <p class="text-center  "> <strong> mise a jour  </strong> <p/> </br> 
   </div> 
   <div>
 <p class="bg-success text-center ">id: ${id} valider &nbsp; &nbsp; <i class="fa-solid fa-check"></i> </p> 
    </div>

   <div class="toast-body">
 `+ response + ` 
   </div>
 
 </div>`
    $(".message2").append(toast);

  }
}
// fonction tableau de bord 
function tbord() {
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/contacts",
    dataType: "json",
  });
  request.done(function (response) {

    for (let i = 1; i < response.length; i++) {
      let total = [i + 1];
      // compteur(response)
      $("section[data-cible=tab-bord ]").toggle().html("<h2>Tableau de bord </h2> <p> votre repertoire contient " + total + " contacts </p>")
      //  }
    }
  })
  // )
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
};

/////////close toast 
function closed() {
  console.log("close");
  let ferme = $(".message2")
  ferme.html("")

}
//  ///mise a jour
//   function maj(e) {

//   e.preventDefault();
//   $(document).ready(function () {
//     let objet = {
//       "nom": $("#nomMaj").val(),
//       "prenom": $("#prenom.maj").val(),
//       "id": id,
//     }
//     $.ajax({
//       //L'URL de la requête 
//       url: "http://localhost:3000/contacts/" ,

//       //La méthode d'envoi (type de requête)
//       method: "PATCh",

//       //Le format de réponse attendu
//       dataType: "json",
//       data: objet
//     })
//       //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
//       /*On peut par exemple convertir cette réponse en chaine JSON et insérer
//        * cette chaine dans un div id="res"*/
//       .done(function (response) {
        
//         response.map((contact) => {
//           contact.id
//         })})
//           //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
//           //On peut afficher les informations relatives à la requête et à l'erreur
//           .fail(function (error) {
//             alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
//           })

// })
      
//   };







