
function requete() {
    

let request = $.ajax({  
    type: "GET",
     url: "https://bano.openstreetmap.fr/data/full.sjson.gz",
    dataType: "json",
// headers: {"Authorization":('Bearer NjcxYjk2NzUtZjE3Yy00OGJlLWFhY2UtNWQzMDUzNDJmZmYz')},
});
    
request.done(function (response) {
console.log(response);
      console.log("response");
    });
    

request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
});
}

requete()