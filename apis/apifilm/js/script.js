
const key = "ba8eb959";
let error = "encore ratée"
const search = $('#search');
const date = $('#date')

$(search).on('input', find)
$(date).on('input', find)






function find() {


    $.ajax({
        url: 'http://www.omdbapi.com/',// La ressource ciblée
        type: 'GET', // Le type de la requête HTTP
        data: { val1: 'hello', val2: 'hello2' },
        data: {
            apiKey: key,
            s: $(this).val()

        },

        // Fonction en cas de success de la requête
        success: function (reponse) {
            console.log(reponse);
            console.log(search.val());

            // Si l'utilisateur a saisi plus de 3 caractères
            if (search.val().length >= 3) {
                date.val()>=4
                console.log($("#search").val().length);
                // On vide la div d'affichage des résultats
                $('#results').html('');

                // Si le résultat nous retourne des films
               if  (reponse.Search && reponse.Search.length > 0) {


                    // On fait un foreach des films
                    reponse.Search.forEach(function (movie) {
                        // L'équivalent de cette boucle en PHP serait : foreach ($response['Search'] as $movie)

                        // On créée le HTML d'un film (une bootstrap card)
                        let movieHtml = '<div class="card  align-items-center mt-3 ">'+
                            '<div class="card-header"> Titre: &nbsp' + movie.Title + '<br/> date de sortie ' + movie.Year + '</div>' +
                            '<div class="card-body text-center"><img src="' + movie.Poster + '" height="200"></div>' +
                            '<div class="card-header">Type : ' + movie.Type +'<br/> Acteur: '+movie.Actors+'</div></div>';

                        // On l'ajoute au div de résultats
                        $('#results').append(movieHtml);
                    });
                }

            }
            else {
                $('#results').html('');
            }
    
         (reponse) => {


                if (date.val() !== reponse.search.movie.year) {
                    $('.card').Show

                }
                else if (date.val() = "") {
                    alert("cc")

                }
            }
        },



        error: function (error) {
            // Fonction en cas d'erreur
        },



        complete: function (result, status) {
            // Fonction à executer une fois l'appel Ajax effectué (par exemple, retirer le spinner de chargement)
        }
    })
};