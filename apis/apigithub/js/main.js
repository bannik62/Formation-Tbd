
// doc : https://docs.github.com/en/rest

$(document).on("click", ".btnFetch", fetchin)
$(document).on("click", ".btnFetchTable", table)
$(document).on("click", ".btnMap", requete)
$('#names').on('input', refresh)

let error = "aucune correspondance  "


function refresh() {
    console.log($(this).val());
};



function fetchin() {

    fetch("https:api.github.com/users/" + names.value)
        .then(reponse => reponse = reponse.json())
        // .then( reponse2 =>console.table(reponse2)
        .then(reponse3 => $(".affichage").html(`<p>le contributeur <strong> ${reponse3.name}</strong><small> (id$: ${reponse3.id})</small> posséde <strong> ${reponse3.public_repos}</strong> repository depuis le ${reponse3.created_at} </p>`) && $(".affichageimg").html(`<img src="${reponse3.avatar_url}" alt="avatar"  class="img"> `))
    console.table(`https:api.github.com/users/${names.value}`)

}

////////tableau  log ////////////
function table() {

    // let contributeur = names.value;

    fetch("https:api.github.com/users/" + names.value)
        .then(reponse => reponse = reponse.json())
        .then(reponselog => console.table(reponselog))

}

// parcoors des objet user github 


function requete() {
    const key = "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"

    $.ajax({
        url: `https:api.github.com/users/${names.value}`, // La ressource ciblée
        type: 'GET', // Le type de la requête HTTP
        dataType: "json",
        data: {
            apiKey: key,

        },

        success: function (reponse) {

            //   rep = JSON.parse(reponse)
            //   rep = JSON.stringify(reponse)
            console.table(reponse);
            //   let rep = Object.entries(reponse)
            //   let rep = Object.keys(reponse) 
            // let rep = Object.values(reponse)

            console.log(reponse);
            if (names.value == "") {
                $(".affichage2").html(''),
                    $(".bio").html("bigraphie")
            }

            else {
                let html =
                    `<div class="span" >
                <ul>
                  <li>nom : ${reponse.name}</li>
                     <li>prenom :${reponse.id}</li>
                     <li> login : ${reponse.login}</li>
                     <li>nombre de followers : ${reponse.followers}</li>
                     <li>url : <a href="${reponse.html_url}">${reponse.html_url}</a></li>
                     <li>location :  ${reponse.location}</li>
                 </ul>
            </div>`;

                $(".affichage2").html(html) && $(".bio").text(reponse.bio)
            }
        },

        error: function (reponse) {
            alert("La requête  s'est terminée en échec. Infos : " + error);
        },

        complete: function (reponse) {
            // Fonction à executer une fois l'appel Ajax effectué (par exemple, retirer le spinner de chargement)
        }
    });
};








// exemple metode json 

// let stringJson =JSON.stringify(json);
// let parsedString = JSON.parse(stringJson)
// // $(document).ready(function () {
// //     const apiURL = "https//geo.api.gouv.fr/communes?codePostal=" ;
// //     const format = "&format=json";
// //     let zipcode = $("#zipcode"); 

// //         $("#zipcode").on('blur', function () {
// //             let code = $(this).val();
// //             let url = apiURL+code+format;
// //             console.log(url);

// //             fetch(url ,{method: 'get'}).then(response => response.json.json()).then(results => {console.log(results); })
// //         })

// // });

function mul(nb1, nb2) {
    let total = nb1 * nb2
    console.log(total);
}