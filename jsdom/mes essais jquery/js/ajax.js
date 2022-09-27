// $("#ajax").click(function () {
//     let request = $.ajax({
//         type: "GET",
//         url: "https://jsonplaceholder.typicode.com/todos",
//         dataType: "json",
//     })

//     request.done(function (response) {
//         console.log(response)
//         response.map((element) => {


//             $("#card").append(`
//                 <div class="card m-5" style="width: 18rem;">
//   <div class="card-header">
//     Requéte ajax 
//   </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item"> id de la tache : ${element.id}</li>
//                 <li class="list-group-item">titre : ${element.title} </li>
//                 <li class="list-group-item  completed "><button class="btn ">${element.completed}</button>  </li>
//             </ul>
// </div>`


//  ) }

  
//  )  });


//     request.fail(function (http_error) {
//         let server_msg = http_error.responseText;
//         let code = http_error.status;
//         let code_label = http_error.statusText;
//         alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
//     })
// });

$("#ajax").click(function () {

    let request = $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/todos",
        dataType: "json",
      });
    
      request.done(function (response) {
        let html = "";
        response.map(function (tache) {
    
          let suffixe = tache.completed ? "success" : "warning";
          let texte = tache.completed ? "Terminée" : "En cours";
    
          html += `
        <div class="card m-5" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Tache N° ${tache.id}</h5>
            <p class="card-text"> ${tache.title}</p>
    
            <button class="btn btn-${suffixe} ms-5"> ${texte}</button>
          </div>
        </div>
      `;
    
        })
    
        $("#card").append(html);
    

   
})})
