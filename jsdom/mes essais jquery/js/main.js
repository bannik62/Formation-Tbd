


$(document).ready(function () {

    $(".cacher").hide()
    $(".jeu").hide()
    $(".generateur").hide()
  
    $(".affichemenu").on(
        {
            mouseenter: function () {
                $(".affichemenu").css("background-color", "yellow")
                console.log("survol du para");
            },
            mouseleave: function () {
                $(".affichemenu").css("background-color", "white")

                console.log(" depart du para");
            }
        }
    )
});

$(".affichemenu").click(function () {
    $(".cacher").delay("slow").slideDown()
});

$("#afficheFenetre").click(
    function () {
        $(".jeu").delay("slow").fadeToggle()

    }
)

$("#tag").click(
    function () {  
            $(".generateur ").delay("slow").fadeToggle()
}
)



////////////////////////////////////////////////////////
let dansLeJeux = true;
let label = document.querySelector("label")

$("#form").submit(function (e) {

    if (dansLeJeux = true) {

        e.preventDefault();
        let nbMax = $("input[type=text]").val();

        let end = Math.floor(Math.random() * nbMax);
        let numero = prompt(`cherchez le numero entre 0 et ${$("input[type=text]").val()} `)
           label.innerHTML += end 
           localStorage.setItem("resultat", end);
         
           $(".nbEssais").html(localStorage.getItem("resultat"));

       
          

        if (numero == end) {
            alert("gagner");
            dansLeJeux = false



        }
        else if (numero > end) {
            alert("visez plus bas");
            dansLeJeux = true
        }
        else if (numero < end) {
            alert("visez plus haut");
            dansLeJeux = true
        }
    }
    else {
        alert("au revoir")
    }
})
///generateur //////////////////////////////////////////////////////////////


$(".genere").click(function (e) {
    e.preventDefault();
//    let choix1= if ($("#choix"== imprimante)) {
        
   
    //je crée 4 tableau de specification 
    let  specificationTab= [
        ["imprimante"],
        ["noir", "blanc", "beige", "gris"],
        ["canon", "hp", "philips", "samsung"],
        ["5200", "6400", "rf200", "b-52"]
    ]
    

    // let specificationTabPc = [
    //     ["ordinateur"]
    //             ["noir", "blanc", "beige", "gris"],
    //     ["siemens ", "hp", "philips", "samsung"],

    // ]

    let resultat =
             // je crée une variable  indexR qui me donne un index au hasard dans les quatres tableaux 
        specificationTab.map((parcours) => {
            //  console.log(indexR); je verifie ma valeursi elle est definie je continue 
            let indexR = Math.floor(Math.random() * parcours.length);
            // je renvois l'index 
            return parcours[indexR]

        })


    let baliseMeta = $("#meta");//simplification ${meta}
    // j'insere l'attribut grace a attr() et je joins les tableaux avecla methode join() au caractere "," join() qui est l'inverse de split()         
     baliseMeta.attr("content", resultat.join(", "));
     //j'affiche le contenu de l attribut  dans un paragphe pour verification du deroulement du code 
    $("#affichage").text(baliseMeta.attr('content'));
});

//////////////:ajax/////////////////////////////////////////
















// function verif(valeur) {
//     for (let i = 0; i < valeur; i++) {
//         const element = valeur[i];
//         return element;
//     }
// }
