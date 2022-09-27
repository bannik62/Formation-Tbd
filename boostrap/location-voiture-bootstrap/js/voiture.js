let voitures = [
    {
        nom: "Fiat 500",
        couleur: ["gris", "blanc"],
        prix: { location: 70, vente: 19000 },
        href: "img/fiat500.png",
    },
    {
        nom: "MClaren ",
        couleur: ["blanc", "noir "],
        prix: { location: 1670, vente: 150000 },
        href: "img/mclaren.png ",
    },
    {
        nom: "Subaru",
        couleur: ["rouge", "noir "],
        prix: { location: 150, vente: 16900 },
        href: "img/subaru.png",
    },
    {
        nom: "Mercedes Classe-C ",
        couleur: ["blanc", "noir "],
        prix: { location: 150, vente: 62000 },
        href: "img/mercedes.png",

    },


];

let motos = [
    {
        nom: "Suzuki GSX-S750",
        couleur: ["gris", "blanc"],
        prix: { location: 70, vente: 19000 },
        href: " img/moto/gsx.jpg",
    },
    {
        nom: "Suzuki VStrome ",
        couleur: ["blanc", "noir "],
        prix: { location: 1670, vente: 150000 },
        href: "img/moto/vstrom.png ",
    },
    {
        nom: "Yamaha Tracer 9",
        couleur: ["rouge", "noir "],
        prix: { location: 150, vente: 16900 },
        href: "img/moto/tracer.jpg",
    },
    {
        nom: "KTM Duke  ",
        couleur: ["blanc", "noir "],
        prix: { location: 150, vente: 62000 },
        href: "img/moto/KTM.png",

    },
]

let camions = [
    {
        nom: "Suzuki GSX-S750",
        couleur: ["gris", "blanc"],
        prix: { location: 70, vente: 19000 },
        href: " img/moto/gsx.jpg",
    },
    {
        nom: "Suzuki VStrome ",
        couleur: ["blanc", "noir "],
        prix: { location: 1670, vente: 150000 },
        href: "img/moto/vstrom.jpg ",
    },
    {
        nom: "Yamaha Tracer 9",
        couleur: ["rouge", "noir "],
        prix: { location: 150, vente: 16900 },
        href: "img/moto/tracer.jpg",
    },
    {
        nom: "KTM Duke  ",
        couleur: ["blanc", "noir "],
        prix: { location: 150, vente: 62000 },
        href: "img/moto/KTM.webp",

    },



]




const vil = document.querySelector("#villes").value;
function dat() {

    const vil = document.querySelector("#villes").value;
    const textDate1 = document.querySelector("#depart").value;
    const textDate2 = document.querySelector("#arrive").value;


    const alea = Math.floor(Math.random() * 12);

    const words1 = textDate1.split('-');
    const words2 = textDate2.split('-');
    let diff = ((words2[2] - words1[2]) * 14);
    if (diff == 0) {
        diff = 14
    }


    console.log(diff);
    console.log(words1);
    console.log(words2);
    console.log();


    let affiches = document.querySelector("#affiche");
    affiches.innerHTML = "";

    if (words2[1] > alea) {
        affiches.innerHTML += `<p class="inner"> <strong> La location de ${document.querySelector(`input[type="radio"]:checked`).value} au départ de ${vil} a la date du  ${textDate1} ne sera pas possible  </strong></p<> `;

    }
    else {
        affiches.innerHTML += `<p class="inner" > <strong> La location de ${document.querySelector(`input[type="radio"]:checked`).value} au départ de la  ville de ${vil} le ${textDate1} au ${textDate2} vous est accéssible a partir de ${diff}€  </p>`;
    };

};

function voitureRefresh() {
    let garage = document.querySelector("#garage");
    garage.innerHTML = "";


    voitures.map((voiture) => {
        let card = `
        <div class="voiture">
            <img 
                src=" ${voiture.href}"
                class="img1 d-flex d-inline  Clio m-5 "
                alt="Renault"  
                height=" 100"
            >
            <p>
                <h4>${voiture.nom}</h4>
                à partir de ${voiture.prix.vente}€ a la vente <br> location ${voiture.prix.location} 
            </p>
        </div>
    `;
        garage.innerHTML += card;
    })
};
function motoRefresh() {
    let garage = document.querySelector("#garage");
    garage.innerHTML = "";


    motos.map((moto) => {
        let card = `
        <div class="voiture">
            <img 
                src=" ${moto.href}"
                class="img1 d-flex d-inline" alt="Renault Clio m-5 " 
               height=" 100">
            <p>
                <h4>${moto.nom}</h4>
                à partir de ${moto.prix.vente}€ a la vente <br> location ${moto.prix.location} 
            </p>
        </div>
    `;
        garage.innerHTML += card;
    })
};

let test41 = () => {
    let radios = [];

    radios = document.querySelector(`input[type="radio"]:checked`);

    // for (let i = 1; i < 5; i++) {
    //     radios.push(document.querySelectorAll(`#myCheckbox${i}`));
    // }

    for (let i = 2; i < 100; i *= 2) {
        console.log(i);
    }

    console.log(radios);


}
