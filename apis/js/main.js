
function requete() {
   
    let request = $.ajax( ()=>{
        var url = "https://api.m3o.com/v1/ip/Lookup";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer NmEwOTY4NjEtODA5My00MGQzLWEwM2MtMTI3MzFmYWM3NWN");
        
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
           }};

        }  )  

    
    request.done(function (response) {
        console.log(response)
      console.log(  "response");
    });


    request.fail(function (http_error) {
        let server_msg = http_error.responseText;
        let code = http_error.status;
        let code_label = http_error.statusText;
        alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
    });
}



requete()

// $(document).ready(function () {
//     const apiURL = "https//geo.api.gouv.fr/communes?codePostal=" ;
//     const format = "&format=json";


//     let zipcode = $("#zipcode"); 

//         $("#zipcode").on('blur', function () {
//             let code = $(this).val();
//             let url = apiURL+code+format;
//             console.log(url);

//             fetch(url ,{method: 'get'}).then(response => response.json.json()).then(results => {console.log(results); })
//         })
    
// });

