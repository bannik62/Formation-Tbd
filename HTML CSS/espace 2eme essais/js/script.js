let planetes = [
    {
        nom: "Mercure",
        href: " img/mercure.png",
        description:"",
    },
    {
        nom: "Vénus",
        href: "img/venus.png ",
        description:"",
    },
    {
        nom: "Terre",
        href: "img/terrer.png",
        description:"",
    },
    { 
        nom: "Mars",
        href: "img/mars.png",
         description:"",
    },
    {
        nom: "Jupiter",
        href: "img/jupiter.png",
        description:""
    },
    {
        nom: "Saturne ",
        href: "img/saturner.webp",
        description:"",
    },
    {
        nom: "Uranus",
        href: "img/uranus.png",
        description:"",
    },
    {
        nom: "Neptune",
        href: "img/neptune.png",
        description: "terre rempli d eau "
    },
    {
        nom: "Soleil",
        href: "img/soleil.png",
         description:" notre etoile  une enorme boule de plasma au centre de notre galaxie   ",
    },

];

function affiche () {
    

let description = document.querySelector(`.inner`);
// let image = document.querySelector(".innerimg");
const collection  = document.getElementsByName(`inner`)

  for (let i = 0; i <= collection.lenght; i++) {
    console.log(i);
    

// for ( let  planete of planetes ) {


// if (
    planete .description == document.collection.querySelector(`.dropdown-item`)
    description.innerHTML = `${planete[13]}`
    


// };
}}   

// }
 



// function so() {
//     let soleil = document.querySelector("#soleil").value;
//    
//     let ecris = document.querySelector(".inner");
//     let ti = planetes.nom == soleil;
 
//     fond = `<img src="img/soleil.png>"`;
//     titre = `<h4>${ti}</h4> <p>  le soleil cette boule de feu </p>`;

//     image.innerHTML = ` ${fond}`;
//     ecris.innerHTML = `${titre} `;
// };





