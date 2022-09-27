/* jQuery
en j query il y a toujours 
la selection  et ensuite la manipulation 
Framework par abus de langage, en réalité c'est une bibliothèque (comme Bootstrap). C'est 
comme pour les constantes que d'une manière générale on met dans la catégorie des variables
alors que ce sont des constantes.
On généralise avec le terme framework.

Le framework a un cadre plus rigide qu'une bibliothèque.
jQuery n'a pas de règles strictes donc c'est une bibliothèque.

Télécharger le fichier jQuery sur https://jquery.com/download/ prendre la version compressée (https://code.jquery.com/jquery-3.6.1.min.js)
et la sauvegarder dans le dossier du projet.

Le symbole de jQuery est le $: il est suivi d'un sélecteur ou d'un objet. On fait précéder l'élément de $() .
Ex: $(".para1")
*/
console.log($(".para1"));

/*La console affiche le noeud para1 (un noeud est un objet).

$("")  Le sélecteur est entre des doubles côtes
$(objet) l'objet est inséré directement*/

//Exo: sélectionner l'élément qui a la classe .liens-each
console.log($(".liens-each"));

/*fonction $(document).ready(cb)
Quand la page html a été chargée, on exécute la callback*/

$(document).ready(function () {
  console.log("execution apres chargement du DOM");
});

//Sur la console on voit qu'il a écrit la phrase "exécution après chargement du DOM" une fois la page chargée

/*Chaînage de fonction : quand on applique une fonction l'une à la suite de l'autre. Le .text s'applique sur un noeud (node), 
//on ne peut pas l'appliquer sur un nombre par exemple. 
$(".para1").text("cours jQuery");

//On enchaîne la fonction $(".para1") et .text("cours jQuery")
//Les fonctions s'exécutent dans l'ordre. 
//À chaque point la nouvelle fonction reprend tout ce qu'il y a avant le point

$(".para1").text("cours jQuery").css("color", "skyblue");
//On ajoute la fonction pour ajouter le style. 
//On voit le changement sur la page html, les éléments sont en bleu.

$(".para1").text("cours jQuery").css("color", "skyblue").fadeIn("slow");
//Finalement, on ajoute un fadeIn pour que l'élément apparaisse graduellement
*/

//On ajoute toute la chaîne de fonctions dans le traitement de $(document).ready
$(document).ready(function () {
  $(".para1").text("cours jQuery").css("color", "skyblue").fadeIn("slow");
});
//Une fois que la page sera chargée, le traitement que nous avons ajouté sera exécuté.
//JQuery, au final, ce sont des fonctions prédéfinies.

/*la methode css() : exo => ajouter du style en ligne à un élément
Syntaxe : variante 1 
$(selecteur).css("prop", "valeur");
Variante 2 avec objet json
$(selecteur).css({"propriete":"valeur"," propriete ":" valeur ",...});
Ex:
$("p").css("background-color", "skyblue");
$("p").css({"background-color": "yellow", "font-size": "200%"});*/

//En reprenant les éléments css dans le fichier html :
$(".on-btn").css("background-color", "green");
$(".trigger-para").css("background-color", "red");
$(".change-style").css("background-color", "skyblue");
//Ajouter plusieurs styles .css({“prop1" : "valeur”, “prop2" : "valeur”})
$("li").css({
  "background-color": "rgb(16,183,233)",
  color: "white",
  "font-size": "2rem",
});
//On peut ajouter plusieurs éléments qui vont adopter le style css en les séparant par des virgules

/*Les fonctions du parcours du DOM
La fonction find() retourne tous les descendants d'un sélecteur
$(selecteur).find(selecteur).fonction ();
Exemple: 
<ul>
       <li>
          <span>span petit fils</span>
       </li>
</ul>
On veut trouver le span dans l'ul*/
$("ul").find("span").css({ color: "red", border: "2px solid red" });

//La fonction children() : retourne les enfants DIRECTS d’un selecteur
//syntaxe: $(selecteur).children (selecteur).fonction ();
//Exemple:
$("ul").children("li").css({ color: "blue", border: "2px solid greenyellow" });
/* 
  Question :
  Si on tape :
  $("ul").children("a");

  Est-ce que la fonction renvoie quelque chose avec cette structure :
  <ul>
    <li>
      <a></a>
    </li>
  </ul>

  Non, parce qu'on demande l'enfant <a> de la balise <ul> et qu'il y a <li> entre les deux. Donc <a> n'est pas un enfant direct.
  */

//La fonction parent() : retourne le parent direct d’un selecteur
//syntaxe
//$(selecteur).parent().fonction ();
//Exemple :
$("span").parent().css({ color: "red", border: "2px solid red" });

//La fonction closest() : retourne le parent le PLUS PROCHE d’un selecteur
//syntaxe
//$(selecteur).closest(selecteur).fonction ();
//Exemple :
$("span").closest("ul").css({ color: "black", border: "2px solid black" });
//Cette fonction va trouver l'ul PARENTE la plus proche du span. 
//Si l'ordi remonte mais ne trouve pas l'élément, il ne renvoie rien, c'est vide

//La fonction next() : retourne le FRERE SUIVANT d’un selecteur
//syntaxe
//$(selecteur).next().fonction ();
//exemple:
$("li:nth-child(2)").next().css({ color: "green", border: "2px solid green" });

//La fonction prev() : retourne le FRERE PRECEDENT  d’un selecteur
//syntaxe
//$(selecteur).prev().fonction ();
//exemple
$("li:nth-child(2)").prev().css({ color: "blue", border: "2px solid blue" });

//La fonction first() : retourne la 1ERE OCCURENCE d’un selecteur
//syntaxe
//$(selecteur).first().fonction ();
//Exemple :
$("li").first().css({ color: "red", border: "2px solid red" });
//Il sélectionne la première puce

//La fonction last() : retourne la derniere occurence d’un selecteur
//syntaxe
//$(selecteur).last().fonction ();
//Exemple :
$("li").last().css({ color: "yellow", border: "2px solid yellow" });
//Il sélectionne la dernière puce

//La fonction siblings() : retourne tous les freres (donc au même niveau) d’un selecteur (le selecteur en lui-même non compris)
//syntaxe
//$(selecteur).siblings().fonction ();
//Exemple :
$("li:nth-child(2)")
  .siblings()
  .css({ color: "gray", border: "2px solid gray" });

//liste de toutes les fonctions du parcours du DOM
//https://www.w3schools.com/jquery/jquery_ref_traversing.asp

/*
Manipulation du DOM
Il s’agit d’ajouter, supprimer des elements ou modifier leur contenu
La fonction text() : Elle retourne ou modifie le contenu textuel d’un selecteur
.text ne récupère QUE le texte, il faut faire attention si on a une grappe html.
recupération
syntaxe
console.log($(".para1").text());
*/
$(".para1").text("texte para 1 modifié");
console.log(`texte apres modif : ${$(".para1").text()}`);

//La fonction html()
//Pareil que la fonction text(), mais elle recupère ou modifie le contenu html d’un élément

/*recupération et modification*/

// structure
// console.log($("ul").html());
// modifier le contenu
// $("ul").html(`
// <li><a href="https://www.google.com/" target="_blank">lien vers Google</a></li>
//     `);
//ATTENTION: les li disparaissent et sont remplacées par le lien vers Google

//Appliquer un evenement à un element
//Syntaxe
//$(selecteur).evenement(cb);

//NB : la cb admet un paramètre qui represente l’evenement.
//Exp :

$(".bc-btn").click(function (e) {
  console.log("élément bc-btn cliqué");
  console.log(e); // e  est l'evenement : click
});
//par convention on appelle (e) ou (event) le paramètre d'une fonction qui contient un événement

//Val sert à récupérer et modifier une valeur dans un input
//$(selecteur).val();
//si l'on ne met rien dans les paramètres on ne fait que récupérer la valeur
//Ex :
$("#nom").val();

//Si l'on ajoute une valeur dans les paramètres, la valeur de l'input va être modifiée.
//Souvent associé à un événement sur un bouton.
//$(selecteur).val(nouvelleValeur);
//Ex:
$("#nom").val("XXXXX");

/*Ex : 
Il y a dans le html un input qui demande la capitale de la France et ensuite, deux div ayant les classes 
réponse et résultat ainsi d'un bouton submit.
1) Le bouton doit, lorsque l'on clique dessus, tester si la valeur tapée est "Paris", 
et 
2) afficher en conséquence dans la div réponse soit : "Votre réponse est correcte" en cas de bonne réponse, soit :
"Réponse erronée !" avec une écriture et une bordure rouge.
3) Enfin, il faut afficher le score 10/10 ou 0/10 dans la div resultat.*/

/* //Solution Marina
$(".buttonSubmit").click(function (e) {
  let textValue = $("#capitale").val();

  if (textValue === "Paris") {
    $(".reponse").html("Votre réponse est correcte");
    $(".resultat").html("10/10");
  } else {
    $(".reponse").html("Votre réponse est incorrecte");
    $(".resultat").html("0/10");
  }
});
*/

//pour styliser .reponse selon qu'elle est correcte ou pas, on peut ajouter un span après.html 
//par exemple .html(`<span style= "color : green;"> Votre réponse est correcte`) 
//ou ajouter un span avec une classe CSS prédéterminée : ex: (`<span class="success"`)

$(document).ready( //la fonction ne pourra être exécutée que quand la page html sera chargée
  function () {
    $("input[type=submit]").click(
      function (e) {
        if ($("#capitale").val().toLowerCase() === "paris") {
          //solution 1 .css puis html pour reprendre le style css et y ajouter du texte
          //$(".reponse").css("color","green").html(`Votre réponse est correcte`);

          //solution 2
          // admettons que j'ai defini dans le css une classe succes: un span avec une class 
          //$(".reponse").html(`<span class="succes">Votre réponse est correcte </span>`);

          //solution3
          // appliquer .text puis .css

          //solution 4 un .html qui comprend un span avec un style en ligne
          $(".reponse").html(`<span style="color : green;">Votre réponse est correcte </span>`);
          $(".resultat").html("10/10");
        }
        else {
          $(".reponse").html(`<span style="color : red;">Votre réponse est incorrecte </span>`);
          $(".resultat").html("0/10");
        }
        //On vide les champs à la fin
        $("#capitale").val("");
      }
    );
  }
);

/*Ajout d'éléments au DOM*/

//prepend : ajoute du contenu au debut du selecteur (à l’intérieur et en premier lieu)
//<p class="extensible">para extensible</p>
$(".extensible").prepend("contenu d'extension au debut prepend() <br/>");
//S'il y a du contenu dans l'élément html, le prepend ajoute du contenu tout au début du contenu déjà présent.
//S'il y a deux prepend. La fonction reprend tout ce qui précède, donc le 2e prepend se positionne avant le premier.

//La fonction append() : ajoute du contenu à la fin du selecteur (à l’intérieur et en dernier lieu)
$(".extensible").append("<br/>contenu d'extension à la fin , append()");
//S'il y a du contenu dans l'élément html, l'append ajoute du contenu tout à la fin du contenu déjà présent.

//La fonction before() : ajoute du contenu avant le selecteur (à l’extérieur et avant )
$(".extensible").before("<p>para externe avant, before() </p>");

//La fonction after() : ajoute du contenu apres le selecteur (à l’extérieur et apres)
$(".extensible").after("<p>para externe apres after()</p>");

//Suppression des elements
//La fonction remove() : supprime un element du DOM
//<p class="supprimer">Lorem ipsum dolor quidem Aut.</p>
$(".supprimer").remove();




/*Accès et modification des attributs*/

//Pour accéder et pour modifier les attributs d’un élément, on utilise la fonction attr() 
//Pour récupérer la valeur de l’attribut, on le lui passe en paramètre.

//<a href="https://www.google.com/">lien vers google</a>
console.log($("a").attr("href"));
//La console affiche le lien Google

//pour modifier sa valeur, on lui passe deux paramètres, le premier est le nom de l’attribut, et le 2eme la nouvelle valeur.
//$("selecteur").attr("attribut", "nouvelle valeur")
$("a").attr("href", "https://www.w3schools.com/jquery/default.asp")
console.log($("a").attr("href"));
//Si l'on affecte une nouvelle valeur à l'attribut, la valeur précédente est remplacée.

//NB : il est possible d’ajouter des attributs qui n'existent pas au préalable en utilisant la même syntaxe. 
//Structure : ($("selecteur").attr("attribut", "valeur")
$("a").attr("target", "_blank")
console.log($("a").attr("target"));
//Ajoute l'attribut target et l'ouvre dans une nouvelle fenêtre.


//Sans nouvelle valeur, on se contente de récupérer l'attribut existant.
//$("selecteur").attr("attribut")
console.log($("a").attr("href"));
//Récupère l'attribut dans href, donc l'url du lien.

//Si l'on ajoute des attributs contenant des attributs supplémentaires, on l'ajoute comme valeur sous forme d'objet Json.

//Résumé :
//recupération
console.log($("a").attr("href"));
// modification
$("a").attr("href", "https://www.w3schools.com/jquery/default.asp")
console.log($("a").attr("href"));
// ajout
$("a").attr("target", "_blank")
console.log($("a").attr("target"));

//la fonction data() : elle permet de récupérer ou de modifier les attributs data-
//Structure
//$(selecteur).data("suffixe");// lecture
//$(selecteur).data("suffixe", "nvValeur");// modification
//Exemple :
//<div class='div-data' data-role='user' data-info='{"nom":"HIDRI", "prenom":"Ryan"}' ></div>
console.log($(".div-data").data("role"));//chaine
console.log($(".div-data").data("info").nom);//objet
//On peut utiliser .attr pour afficher sur console log l'attribut data, par contre, il faut mentionner le nom complet de l’attribut :
console.log($(".div-data").attr("data-role"));


//Différence entre récupération avec .data et .attr : On récupère la même information, mais .data est plus spécifique.
//.Attr permet de récupérer les attributs classiques et data.
//<div data-role="user"></div>
$("div").data("role");
//Pour .data on ne met que le suffixe, ici "role". On ne peut pas récupérer un attribut autre que data.
$("div").attr("data-role");
//Pour .attr on récupère tout type d'attribut, mais doit taper l'attribut complet comme paramètre, ici data-role. 

//Exo : changer le role de user à admin, puis afficher la nouvelle valeur.
$("div").attr("data-role", "admin");
console.log($("div").attr("data-role"));

//Exo : changer le prénom de Ryan à Ryan Junior.
//1- récupérer l'objet json et le mettre dans la variable
let fullName = $(".div-data").data("info");
//2- modifier la valeur dans l'objet json à l'intérieur de la variable
fullName.prenom = "Ryan Junior";
//3- réinsérer la variable dans l'attribut
$(".div-data").data("info", fullName);
console.log($(".div-data").data("info"));

//Important: Quand on manipule des objets JSON à l'intérieur d'un attribut data, 
//il faut le cibler avec data et non attr, car attr va changer le contenu json en chaîne de caractères.
console.log($(".div-data").attr("data-info")); // chaine
console.log($(".div-data").data("info")); // objet

//Autres fonctions des attributs
//removeAttr () : supprime un attribut
//Dans le html, ajouter au lien une classe
//class="lien-supp"
//$(".lien-supp").removeAttr("class")
console.log($(".lien-supp "));


//.hasClass() : retourne true si l’element a la classe passée en param, false sinon
//structure: $(selecteur).hasClass("classe");
$(".btn-style").prev().hasClass("para-style");//true
//Le frère juste avant .btn-style porte la classe .para-style
$(".div-eleve").hasClass("recherche"); //false
//la .div-eleve dans le html ne porte pas la classe .recherche

//exo : tester si le lien a la classe  "lien-supp".
//tester si le lien a la classe  "lien-autre".
// commenter la ligne de removeAttr pour que l'exo fonctionne, sinon la classe étant supprimée, 
//il ne pourra pas la trouver.
$(".div-data").prev().hasClass("lien-supp");
console.log($(".div-data").prev().hasClass("lien-supp"));//true
$(".div-data").prev().hasClass("lien-autre");
console.log($(".div-data").prev().hasClass("lien-autre"));//false

//.addClass : ajoute une classe à un element
//ajouter la classe "lien-autre"
$("a").addClass("lien-autre");
console.log($("a"));

//.removeClass() : supprime une classe
//supprimer la classe "lien-autre"
$("a").removeClass("lien-autre");
console.log($("a"));

//.addClass et .removeClass sont beaucoup utilisés dans des événements quand on veut filtrer des éléments. 
//On ajoute à l'intérieur de l'événement la classe active 
//et on l'enlève pour tous les autres éléments que l'on souhaite ignorer.

//.toggleClass : lorsque l'on clique une première fois, 
//on ajoute une classe, et si l'on reclique, on la supprime. (pratique pour afficher et masquer, ex: accordéons)
//ajouter une classe para-rouge dans le button en dessous de div-eleve
$(".toggleBtn").click(function () {
  $("div-eleve").next$("p").addClass("para-rouge");
});

/*Exo :
 créer un paragraphe qui a comme texte "para non cliqué" et qui a comme style 
une couleur et une bordure bleu ciel.
Créer un bouton qui, lorsqu’on clique dessus, change le texte du paragraphe 
en "para cliqué", change le style de couleur et la bordure en gris.
Si on clique dessus une nouvelle fois, il doit reprendre son style initial.
Appliquer les styles avec des classes dans le html
*/
$(".btn-yo").click(function () //je donne le role a ce boutton  en l apelant par ca classe 
{//au click je pointe la valeurde l attribut class 
  attribut
  $(".para-style").text(`Para cliqué `).toggleClass("para-style-clique");
})


// $("p").each (
//   function (index ,element ) 
//   { 
//     let elemClass = $(element).attr("class");
//     console.log(elemClass);
//     console.log("index", index);
//   }

//  );


// $(".bc-btn").click(function () {
//   $("li").addClass("bg-bc");

//   $("li").each(
//     function (index, element) {
//       $(element).text(`each : li--${index + 1}`)
//     }
//   );
// })

// ////////////////////////
// $("ul").one("mouseenter", function () 
// {
//   console.log("message une seule fois");
// });
// //Variante 2 : la cb s’exécute une seule fois pour CHACUN des evenements
// $("ul").one("click mouseleave", function () {
//   console.log("message une seule fois");
// });
// //Empecher le comportement par defaut d’un element
// $(".no-link").click(function (e) {
//   e.preventDefault();
//   console.log("pas de redirection");

// })
//Declencher un evenement (artificiel)
/*{ <a class="trigger-link" href="https://www.google.com/"> redirection artifielle</a>
<button class="trigger-btn">trigger bouton</button> }*/
// $(".trigger-btn").click(function () {
//   console.log("avant");
//   $(".trigger-link").trigger("click");
//   console.log("apres");
// });

// $(".trigger-link").click(function (e) {
//   console.log("lien cliqué");
//   console.log(e.type);
// });$("ul").one("mouseenter", function () {
//   console.log("message une seule fois");
// });
// //Variante 2 : la cb s’exécute une seule fois pour CHACUN des evenements
// $("ul").one("click mouseleave", function () {
//   console.log("message une seule fois");
// });
// //mpecher le comportement par defaut d’un element
$(".no-link").click(function (e) {
  e.preventDefault();
  console.log("pas de redirection");

})
//Declencher un evenement (artificiel)
/* {<a class="trigger-link" href="https://www.google.com/"> redirection artificielle</a>
<button class="trigger-btn">trigger bouton</button>} */
$(".trigger-btn").click(function () {
  console.log("avant");
  $(".trigger-link").trigger("click");
  console.log("apres");
});

// $(".trigger-link").click(function (e) {
//   console.log("lien cliqué");
//   console.log(e.type);
// });

// //////////////////////////// ////////////////////////
//la methode on() : Avec la methode on(), on peut rattacher à un seul element un ou plusieurs evenements et une seule action,  ou bien une action par evenement.
//$(selecteur).on("evenement", cb);
//Exp 1:
$(".maj-form-btn").on("click", function () {
  console.log("evenement click seul");
})
//Exp 2 :
$("ul").on("mouseenter mouseleave click", function () {
  console.log("survolé ou quitté la ul");
});
//exp 3 : la mathode on() admet comme param un json.
$("ul").on(
  {
    mouseenter: function () {
      console.log("survolé  la ul");
    },
    mouseleave: function () {
      console.log(" quitté la ul");
    },
    click: function () {
      console.log("clic sur la ul")
    }
  }
);

$(".maj-form-btn").click(function () {

  $("#nom").val("yohann")
  $("#prenom").val("vanhs")

}
);


