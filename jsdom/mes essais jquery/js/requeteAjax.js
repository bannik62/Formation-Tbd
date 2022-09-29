
// dans les api  on peut avoir la meme route  mes un comportement different ce qui defini c 'et le verbe get ou post 
// get  /post recuperation de la liste des posts 
// post /post  creation d 'un nouveau poste 
// const $= require('jquery')

let request = $.ajax({  
    type: "GET",
     //url: "https://api.m3o.com/v1/user/Create",
    dataType: "json",
    // headers: {"Authorization":('Bearer NjcxYjk2NzUtZjE3Yy00OGJlLWFhY2UtNWQzMDUzNDJmZmYz' 
    // )}
});
    
request.done(function (response) {
console.log();
      
    });
    

request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
});
///////////////////////////////FETCH///////////////////////////////////////////////////
// fetch(`https://world.openfoodfacts.org/api/v0/product/737628064502.json`)

// .then(res=> console.log(res))
// let doc = document.getElementById("nbEssais")
// .then(res => res.json())
// .then(data => console.log(res));
// NjcxYjk2NzUtZjE3Yy00OGJlLWFhY2UtNWQzMDUzNDJmZmYz




// $(document).on("event", "selecteur",cb )
// Ca répond à la problématique de gestion des évènements sur des éléments qui n'existent pas encore sur le DOM,
// (mais qui peuvent se générer après exécution d'autres scripts)