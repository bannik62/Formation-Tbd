// https://geo.api.gouv.fr/decoupage-administratif/communes
// la mp https://leafletjs.com/
// 
// let parsedString = JSON.parse(stringJson)
$(document).ready(function () {
    let id = Date.now();
    $(document).on('click', '#localisation', local)
    $(document).on('click', '#affiche', affichage)
    $(document).on('click', '#maj',ajoute)
    $(document).on('click', '.supp',suppression)
    let population1;
    let population2;
    let maPosition;
    let lati;
    let longi;
    let marker
    let map
    let html
    let pays =$("#pays").val()
    let ville = $("#ville").val()
    let code =$("#codepostal").val()
    let visited =$("#visited").val()


    $("#zipcode").on('blur', function (e) {
        e.preventDefault()
        const apiURL = "https://geo.api.gouv.fr/communes?nom=";
        const format = "&boost=population&limit=5&format=json";
        let ville = $("#ville")
        let code = $(this).val();
        let url = apiURL + code + format;

        ville.html("")
        console.log(url);

        fetch(url, { method: 'get' }).then(response => response.json()).then(results1 => {

            if (results1.length) {
                console.log(results1);
                results1.forEach(function (key) {
                    console.log(key);

                    $('.affichage').text('la ville de :' + key.nom + ' possede une poupulation de ' + key.population + ' habitant');

                    $('#ville').append('<option value=' + key.nom + '> regions de :' + key.nom + ' ' + key.codesPostaux + ' <option/>')

                    // console.log(population1);
                })

            };
        })
    })
    //:::::::::::::::::::::::::::::::::::::Population::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    $(document).on('click', '#btnpopu1', function () {

        const apiURLP = 'https://geo.api.gouv.fr/communes?codePostal=';
        const formatP = "&field&format=json";
        let codeP = $('#ville1pop').val();
        let url = apiURLP + codeP + formatP;


        console.log(url);
        fetch(url, { method: 'get' }).then(response => response.json()).then(function (results) {
            if (results.length) {
                results.forEach(function (value) {
                    // console.log(value.population);
                    population1 = value.population;
                    console.log(population1);
                    $(".pop1").html("<p> la ville de " + value.nom + " possede une population de " + population1 + " citoyens<p/>")
                    return population1
                })


            };
        });

    });
    // trouver une facon d isoler les variable de population pour les soustraire
    //------------------------------------------------------------------------------------------------------

    $(document).on('click', '#btnpopu2', function () {

        const apiURLP = 'https://geo.api.gouv.fr/communes?codePostal=';
        const formatP = "&field&format=json";
        let codeP = $('#ville2pop').val();
        let url = apiURLP + codeP + formatP;

        console.log(url);
        fetch(url, { method: 'get' }).then(response => response.json()).then(function (results) {
            if (results.length) {
                results.forEach(function (value) {
                    // console.log(value.population);
                    population2 = value.population;
                    console.log(population2);
                    $(".pop2").html("<p> la ville de " + value.nom + " possede une population de " + population2 + " citoyens<p/>")
                    return population2

                });
            }
            console.log(population2, population1);
            let total = (population2 - population1);
            console.log(total);
            $(".total").text("la difference de population et de : " + total + " citoyens");
        });

    });

    function local() {
        console.log("bonjour");

        navigator.geolocation.getCurrentPosition(function (position) {
            console.table(position); // console.log(maPosition.coords);

            maPosition = position;

            $(".info").html(`<p class="text-center">Mes coordonnés :latitude ${maPosition.coords.latitude} longitude ${maPosition.coords.longitude} </p>`)

            lati = maPosition.coords.latitude, longi = maPosition.coords.longitude;

            // console.log(marker);
            map = L.map('map').setView([48.52, 2.19], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: ' <a  class="mb-5" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


            // marker = L.marker([lati, longi]).addTo(map)

            map.panTo(new L.LatLng(lati, longi))

            L.marker([lati, longi]).addTo(map)
                .bindPopup('vous etes ici .')
                .openPopup();

            console.log(longi, lati);

        })

    }

    // les fonctions

//compteur
function compteur(incremente) {
    for (let i = 0; i < incremente.length; i++ +1) {
      let total = [i] ;
      return total
  
    }
  };
  // ajouts
  function ajoute(e) { // activation du bouton au click 
    e.preventDefault
 console.log("bonjour"); //verification de la validité  de #save afin d envoyer la requete
    //  je log  une variable contenant un timestamp
     console.log(id);
    // je crée une variable contenant l objet de la futur requete poste 

   let objet = {
        "id": id,
      "pays":pays,
      "ville": ville,
      "code postal":code,
      "visité":visited
      };
   //si ce n 'est pas le cas  nous créons la requete ajax 
     
       $.ajax({
        url: "http://localhost:3000/villes/",
        type: "POST",
        data: objet,
      })
  
        .done(function (response) {
            console.log(objet);
          //et nous l affichons avec message en resonce en paramete afin de (logiquement ) l afficher
          $(".info2").html("<span>Votre ajout " + response + " a etait pris en compte veuillez femer la fenetre</span>");
            affichage(e)
        }
  
  
        )
    
  };
  
  //affichage
  function affichage(e) {
    e.preventDefault();
    let request = $.ajax({
      type: "GET",
      url: "http://localhost:3000/villes",
      dataType: "json",
    });
  
    request.done(function (response) {
     html = "";
      if (response.length === 0) {
        html = `<h2 class="py-4 h1 ">Aucune villes n'a été trouvé.  </h2>`;
      }
      else {
        html += `
      <h2 class="py-4 h1 ">Liste des villes </h2>
      <table class="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">pays</th>
            <th scope="col">ville</th>
            <th scope="col">code postal</th>
             <th scope="col">enregistré</th>
            </tr>
        </thead>
        <tbody>`;
  
        response.map((villes) => {
  
          html += `
          <tr>
            <th scope="row">${villes.id}</th>
           
            <td>${villes.pays}</td>
            <td>${villes.ville}</td>
            <td>${villes.codepostal}</td>
               <td>${villes.visited}</td>

           
            <td>
              <button type="button" data-id="${villes.id}" class="btn btn-info text-white maj"><i class="fa-solid fa-pen-to-square"></i> Modifier</button>
              <button type="button" data-id="${villes.id}" class="btn btn-danger supp"><i class="fa-solid fa-trash-can"></i> Supprimer</button>
            </td>
          </tr>`
        }
        );
  
        html += `</tbody>
              </table>
      `;
      }
  
  console.log(html);
      $("#affichage").html(html);
  
  
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
    id = $(e.target).data("id");
    let request = $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/villes/" + id,
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




  
})







  // je cree la fonction pour  l'affichage des toast 
//   function toast(response) {
  
//     // je verifie les entrés
//     if ($("#prenom").val().length === 0 || $("#nom").val().length === 0) {
//       // si les entrees sont  vide on affiche 
//       let toast = `
//   <div class=" bg-info ms-1 toasty rounded-1 mt-2 p-1 " role="alert" aria-live="assertive" aria-atomic="true"  >
//     <div class="bg-dark  ">
//        <button type="button" class="btn-close btn-close-white  "  data-bs-dismiss="toasty" aria-label="Close"></button>
//     </div>
//     <div class="toast-header">
//    <p class="text-center "> <strong> mise a jour </strong> <p/> </br> 
//     </div> 
//     <div>
//    <p class="bg-danger text-center ">invalid &nbsp; &nbsp; <i class="fa-solid fa-xmark"></i></p> 
//     </div>
//   </div>`
//       $(".message2").append(toast);
  
  
//     }
//     // si elle ne le sont pas on affiche 
//     else {
//       let toast = `<div class=" bg-info mt-2  p-1 ms-1 toasty rounded-1 " role="alert" aria-live="assertive" aria-atomic="true"  >
//      <div class="bg-black w-100">
//      <button type="button" class="btn-close btn-close-white bg-bg-black  "  data-bs-dismiss="toasty" aria-label="Close"></button>
//    </div>
//      <div class="toast-header">
//    <p class="text-center  "> <strong> mise a jour  </strong> <p/> </br> 
//      </div> 
//      <div>
//    <p class="bg-success text-center ">id: ${id} valider &nbsp; &nbsp; <i class="fa-solid fa-check"></i> </p> 
//       </div>
  
//      <div class="toast-body">
//    `+ response + ` 
//      </div>
   
//    </div>`
//       $(".message2").append(toast);
  
//     }
//   }
//   // fonction tableau de bord 
//   function tbord() {
//     let request = $.ajax({
//       type: "GET",
//       url: "http://localhost:3000/villes",
//       dataType: "json",
//     });
//     request.done(function (response) {
  
//       for (let i = 1; i < response.length; i++ ) {
//                  let total= [i +1];
//       // compteur(response)
//       $("section[data-cible=tab-bord ]").toggle().html("<h2>Tableau de bord </h2> <p> votre repertoire contient " + total  + " villes </p>")
//       //  }
//     }})
//     // )
//     request.fail(function (http_error) {
//       let server_msg = http_error.responseText;
//       let code = http_error.status;
//       let code_label = http_error.statusText;
//       alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
//     });
//   };



















//     function affiche(e) {
//         e.preventDefault()
//         console.log("bonjour");
//         let url = 'http://localhost:3000/villes/';

//         fetch(url, { method: 'get' }).then(response => response.json()).then((tab) => {

//             if (tab.length) {
//                 $("#affichage").html("")
//                 //  affichage.html('')s
//                 tab.map(objet => {
//                     // console.log(objet.ville, objet.pays, objet.codepostal, objet.visited);
//                     let html = `<div class="span bg-light m-3" >

//                     <ul class="m-3">
//                     <li>id: ${objet.id}</li>
//                       <li>pays: ${objet.pays}</li>
//                          <li>ville :${objet.ville}</li>
//                          <li> code postal : ${objet.codepostal}</li>
//                          <li>visité : ${objet.visited}</li>
//                      </ul>
//                 </div>`;

//                     $("#affichage").append(html)
//                     return tab 
//                 })
//             }
//         })
//     }

//      function post() {
//         let reponseServeur 
//         // url de l api 
//         let url = 'http://localhost:3000/villes';
//         // mon objet json rempli par des inputs selctioner par jquery avec les ide
//         let rec = {
//             "id": id,
//             "pays": $('#pays').val(),
//             "ville": $('#ville').val(),
//             "codepostal": $('#codepostal').val(),
//             "visited": $('#visited').val
//         }
//         console.log(rec);
//        fetch(url, {
//             method: "POST",
//             dataType: "json",
//             ContentType: " application/json;charset=utf-8",
//             data: rec,
//         }).then(reponse => reponse.json()).then(promesse => {
//             if (promesse.length) {
//                 reponseServeur = promesse;
//                 console.log(reponseServeur);
//                 affiche()
//             }
//         })
//     }

// })

// function suppression(e) {
//     console.log("bonjour");
//     console.log(id);
//     let id = data("id");

//     let request = $.ajax({
//         type: "DELETE",
//         url: "http://localhost:3000/villes/" + id ,
//     });

//     request.done(function (reponse) {
//         affiche(e)
//     });
//     request.fail(function (http_error) {
//         let server_msg = http_error.responseText;
//         let code = http_error.status;
//         let code_label = http_error.statusText;
//         alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
//     });
// }


// const url = 'https://geo.api.gouv.fr/communes?';
// const geo = '=code,nom,codesPostaux,surface,population,centre,contour';
// let code = 'lat=50.94613411928827&lon=1.8229451943823&fields';
// let urlgeo = url + geo + code;console.log(urlgeo);