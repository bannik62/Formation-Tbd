let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");
let ul = document.querySelector("#users");
document.querySelector("#users").innerHTML = localStorage.getItem("users");
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p6 = document.getElementById("p6")
let p7 = document.getElementById("p7")
let p8 = document.getElementById("p8")








function couleurPv() {
    let paragraphes = document.querySelectorAll("p"); // creation d une collection html 

    for (const paragraphe of paragraphes) {
        paragraphe.style.color = "#ff0000"
    }
}

function couleurPn() {
    let paragraphes = document.querySelectorAll("p"); // creation d une collection html 

    for (const paragraphe of paragraphes) {
        paragraphe.style.color = "#abff2e"
    }
}
(function labelg() {
    let label = document.querySelectorAll("label"); // creation d une collection html 

    for (const lab of label) {
        lab.style.color = "#0000ff"
    }
})()



function suppression() {
    //   //    if (!document.querySelector(".suppression")) == false  //  document.querySelector(".suppression") renvoie null
    // dans un contexte booleen, null ets evaluée à false (utiliser le == et non pas ===)

    if (!document.querySelector(".suppression")) {
        if (localStorage.getItem("users") !== null) {
            let button = document.createElement("span");
            button.innerHTML = "<a class='btn suppression success'>supprimer </a>";
            myForm.appendChild(button);
            button.addEventListener("click",
                () => {
                    localStorage.removeItem("users");
                    ul.innerHTML = "";
                    myForm.removeChild(button);
                }
            );
        }
    }
}

const myForm = document.querySelector("#my-form");
myForm.addEventListener("submit", onSubmit);

suppression();
//fonsction  d'envois 
function onSubmit(e) {
    e.preventDefault();

    // cas d'erreur
    if (nameInput.value === "" || emailInput.value === "") {
        msg.innerHTML = " Merci de compléter tous les champs";
        msg.classList.add("error");

        setTimeout(
            () => {
                msg.innerHTML = "";
                msg.classList.remove("error");
            }
            , 2000);

    }

    // cas pas d'erreur
    else {
        //stocker
        // localStorage.setItem("cle", "valeur");
        // recuperer
        // localStorage.getItem("cle");

        // 1- recupérer les données du localStorage
        // 2- ajouter un nouvel element aux données récupérées
        // 3- enregistrer les données dans le ls (y compris le nouveau)
        // 4- actualiser le visuel

        // 1 - 
        let users = localStorage.getItem("users") !== null ? localStorage.getItem("users") : "";


        // 2-
        users += `<li class="success"><strong>Nom:</strong>${nameInput.value}  <strong>Email:</strong> ${emailInput.value}</li>`;

        // 3-  écraser l'ancien contenu du ls
        localStorage.setItem("users", users);

        //4 - 
        ul.innerHTML = users;

        suppression()


        nameInput.value = "";
        emailInput.value = "";
    }
}






//parcourir le tab ==> boucle

// tester si la valeur en cours  = 9
// si oui : on quitte la boucle (et non pas la fonction)
// sinon on affiche la valeur
//fin de boucle

// afficher un message

function trouve() {
    let nombre = prompt('voir si notre tableau contient la  valeur demander appuyez sur le bouton "chercher la valeur" aprés ce prompt  :                               le tableau [12, 2, 5, 9, 41, 56, 78, 36, 54]');

    let tabNombres = [12, 2, 5, 9, 41, 56, 78, 36, 54];

    let tab = tabNombres;

    // let index = -1;



    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == nombre) {
            index = i + 1;
            break;
        }

        else {
            p1.innerHTML = (` <br/>la recherche a était  stopé a la valeur précédant votre requéte  ${tab[i]}`);
        }

        let message = index === -1 ? `votre recherche ne se trouve pas dans le tableau` : `le chiffre recherché existe à la position ${index}`;
        p1.innerHTML += ` le nombre ${nombre} ${message} `
    }



}








let voitures = [
    {
        id: 1,
        marquee: "Mercedes",
        puissances: 10,
    },
    {
        id: 2,
        marquee: "Renault",
        puissances: 8,
    },
    {
        id: 3,
        marquee: "BMW",
        puissances: 12,
    },
    {
        id: 4,
        marquee: "Ferrari",
        puissances: 30,
    },
    {
        id: 5,
        marquee: "Maserati",
        puissances: 20,
    },
];



function recherche() {
    let villes = [
        { id: 1, nom: "Paris", nbHabitants: 12365541 },
        { id: 2, nom: "Lille", nbHabitants: 1051609 },
        { id: 3, nom: "Toulon", nbHabitants: 575347 },
        { id: 4, nom: "Marseille", nbHabitants: 1614501 },
        { id: 5, nom: "Nice", nbHabitants: 942886 },
        { id: 6, nom: "Cannes", nbHabitants: 74545 },
        { id: 7, nom: "Toulouse", nbHabitants: 1035280 }
    ];

    villes.forEach(
        (ville) => {
            if (ville.nbHabitants > 1000000) {
                p2.innerHTML = (`ville dépassant le millions dhabitant: ${ville.nom} : ${ville.nbHabitants} /`);
            }
        }
    );
}






// let affiche = document.getElementById("affichage")



function puissance(tab) {
    //parcourir le tableau d'objet avec foreach
    tab.forEach(voiture => {
        //  chercher les voitures dont l puissance et superieur ou egale a 10
        if (voiture.puissances >= 10) {
            //les afficher 
            p5.innerHTML = (` 
       ${voiture.marquee} <br/> avec une puissance total  de : ${voiture.puissances} <br/> `);

        }
    });
}



// function pair() {


//     // cree un tableau 
//     //let tab1 = []
//     //cree compteur jusqu a 0 en partant de 100 avec for 
//     for (let i = 100; i > 0; i = i - 2) {
//         //    mettre i dans un tableau 


//         // afficher le tableau 
//         document.write(`${i} `)
//     }
// }
// pair()


// function impair() {
//    let i = 1;
//     while (i<100) {
//         if (i%2 !== 0) {
//             document.write(`${i}`)

//         }
//         else{

//         }
//            i=i+2; 
//     }

// }

// impair()

//pour dynamiser le nombre et redre la fonctin portable

// function impair(nb) {
//     for (let i=1; i< nb ; i=i+2) {

//  document.write(`${i} <br/>`);
//     }

// }


////////////////////////////:boucle for ///////////////////////////////////////:

const tabI = [3, 4, 10, 16, 11, 12, 24, 85, 160, 220, 400, 20, 78, 906, 123, 126, 672, 1900]; // Je déclare ma variable<tableau pour mes fonction 

function maxiFor() {
    p3.innerHTML = (``);


    let max = tabI[0]; //declaration d'une variable contenant l index 0 valeur de base 3 de mon tableau 
    let min = tabI[0]; //400
    for (let i = 1; i < tabI.length; i++)//parcourir tous le tableaux 
    {
        if (tabI[i] > max) {//chaque fois que je trouve un element plus grand que l'iteration precedente  de tab[0] effectué par i 
            max = tabI[i]//je le stoque 
        }
    }
    for (let i = 1; i > tabI.length; i++)//parcourir tous le tableaux 
    {
        if (tabI[i] < min) {//chaque fois que je trouve un element plus grand que l'iteration precedente  de tab[0] effectué par i 
            min = tabI[i]//je le stoque 
        }
    }
    //j affiche le plus grand nombre  

    p3.innerHTML += (`<br/> le chiffre min est ${min} <br/>`);
    p3.innerHTML += (`<br/> le chiffre max est ${max} <br/>`);
}

///////////////////////////////////math.max/////////////////////////////
function maxiMath() {


    let maxMath = Math.max(...tabI)//// création d une variable contenant la valeur la plus grande trouver par la methode math.max

    document.write(`<br/> version mat.max le chiffre max est ${maxMath} <br/>`);//j affiche le plus grand nombre  
}
maxiMath()


//////////////////////////////for of //////////////////////////////////////////////////

function maxiForOf() {

    let max = tabI[0]       //declaration d'une variable contenant l index 0 de mon tableau 
    for (cell of tabI) {    //itéré chaque valeur des cellules du tableauX  
        if (cell > max)     // chaque fois que je trouve un element plus grand que l'iteration precedente  de tab[0] effectué par for of 
            max = cell     //je stoque la valeur la plus haute dans max 
    }


    document.write(`<br/> chiffre max avec la boucle for of ${max} `);

}
maxiForOf()



//////////////////////////////////////////////explication for of for in /////////////////////////////////////
// let arr = [3, 5, 7];
// arr.toto= "coucou";

// for (let i in arr) {
//     console.log(i); // affiche 0, 1, 2, "toto" dans la console
// }

// for (const i of arr) {
//     console.log(i); // affiche 3, 5, 7 dans la console
// }
// La différence avec la boucle for..in est que cette dernière parcourt les noms des propriétés
// alors que la boucle for..of itère sur les valeurs des propriétés.De plus les ajouts
// manuels ne sont pas pris en compte dans la boucle for..of(à l’inverse de la boucle for..in)






//// trouver le plus grand et le plus petit nombre 


// max dans un tab de nombres

let nb = [12, 36, 54, 78, 36, 4546, 46, 9999, 654, 32];

function maxMin(tab) {
    let max = tab[0], min = tab[0];
    for (let i = 1; i < nb.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
        if (tab[i] < min) {
            min = tab[i];
        }
    }
    return [max, min];
}

let [maxi, mini] = maxMin(nb);
document.write(`${maxi} -- ${mini}`);


/////////////////////////switch 

let verif = document.querySelectorAll("vehicule");

function name1(verif) {




    for (var i = 0; i < verif.length; i++) {
        if (verif[i].checked.value) {
            cas = verif[i].checked.value
            switch (cas) {
                case 2:
                    console.log("moto");
                    break;
                case 4:
                    console.log("voiture");
                    break;
                case 6:
                    console.log("camion");
                    break;
                default:
                    console.log("autres");
            }

            return cas
        };

    }
}
// console.log('value => '+cas);
///////////////////////////////chiffre au hasard dans un tableau ///////////////////////
function hasard() {
    let tableau = [3, 4, 10, 16, 11, 12, 24, 85, 160, 220, 400, 12, 2, 5, 9, 41, 56, 78, 36, 54]
    let rand = tableau[Math.floor(Math.random() * tableau.length)];
    p4.innerHTML = (`chiffre au hasard : ${rand}`);
}




function find() {
    p6.innerHTML = "";

    let tableFind = [5, 12, 8, 130, 44];
    let found = tableFind.find(tab => { tab = 44 });


    p6.innerHTML += (`<p>affichage de la valeur recherché : ${found}</p>`);

}


function multi(nbrutilisateur) {


    let resultat = "";
    let nombre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < nombre.length; i++) {

        nbrutilisateur;
        let chiffre = nombre[i]

        resultat = (nbrutilisateur * chiffre);
      
        console.log(`${resultat}`)  ;

    }

    p7.innerHTML += (`<p>la tables par ${nbrutilisateur} multiplications ${resultat}</p> `)

}

multi(10)

$(document).ready(
    function () {
        $("input[type=submit]").click(
            function (e) {
                if ($("#capitale").val().toLowerCase() === "paris") {
                    //$(".reponse").css("color","green").html(`Votre réponse est correcte`);
                    // admettons que j'ai defini dans le css une classe succes
                    //$(".reponse").html(`<span class="succes">Votre réponse est correcte </span>`);
                    $(".reponse").html(`<span style="color : green;">Votre réponse est correcte </span>`);
                    $(".resultat").html("10/10");
                }
                else {
                    $(".reponse").html(`<span style="color : red;">Votre réponse est incorrecte </span>`);
                    $(".resultat").html("0/10");
                }
                $("#capitale").val("");
            }
        );
    }
);

