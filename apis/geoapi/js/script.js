// https://geo.api.gouv.fr/decoupage-administratif/communes
// la mp https://leafletjs.com/
// 
// let parsedString = JSON.parse(stringJson)
$(document).ready(function () {
    $(document).on('click','#localisation',local)
    $(document).on('click', '#affiche',affiche )
    let population1;
    let population2;
    let maPosition;
    let lati;
    let longi;
    let marker
    let map
    let bindPopup

    $("#zipcode").on('blur', function () {
        const apiURL = "https://geo.api.gouv.fr/communes?nom=";
        const format = "&boost=population&limit=5&format=json";
        let ville = $("#ville")
        let code = $(this).val();
        let url = apiURL + code + format;

        ville.html("")
        console.log(url);

        fetch(url, { method: 'get' }).then(response => response.json()).then(results1 => {

            if (results1.length) {
                console.log(results1);
                results1.forEach(function (key) {
                    console.log(key);

                    $('.affichage').text('la ville de :' + key.nom + ' possede une poupulation de ' + key.population + ' habitant');

                    $('#ville').append('<option value=' + key.nom + '> regions de :' + key.nom + ' ' + key.codesPostaux + ' <option/>')

                    // console.log(population1);
                })

            };
        })
    })
    //:::::::::::::::::::::::::::::::::::::Population::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    $(document).on('click', '#btnpopu1', function () {

        const apiURLP = 'https://geo.api.gouv.fr/communes?codePostal=';
        const formatP = "&field&format=json";
        let codeP = $('#ville1pop').val();
        let url = apiURLP + codeP + formatP;


        console.log(url);
        fetch(url, { method: 'get' }).then(response => response.json()).then(function (results) {
            if (results.length) {
                results.forEach(function (value) {
                    // console.log(value.population);
                    population1 = value.population;
                    console.log(population1);
                    $(".pop1").html("<p> la ville de " + value.nom + " possede une population de " + population1 + " citoyens<p/>")
                    return population1
                })


            };
        });

    });
    // trouver une facon d isoler les variable de population pour les soustraire
    //------------------------------------------------------------------------------------------------------

    $(document).on('click', '#btnpopu2', function () {

        const apiURLP = 'https://geo.api.gouv.fr/communes?codePostal=';
        const formatP = "&field&format=json";
        let codeP = $('#ville2pop').val();
        let url = apiURLP + codeP + formatP;


        console.log(url);
        fetch(url, { method: 'get' }).then(response => response.json()).then(function (results) {
            if (results.length) {
                results.forEach(function (value) {
                    // console.log(value.population);
                    population2 = value.population;
                    console.log(population2);
                    $(".pop2").html("<p> la ville de " + value.nom + " possede une population de " + population2 + " citoyens<p/>")
                    return population2

                });

            }
            console.log(population2, population1);
            let total = (population2 - population1)
            console.log(total);
            $(".total").text("la difference de population et de : " + total + " citoyens")
        });

    });

    function local() {
        console.log("bonjour");

        navigator.geolocation.getCurrentPosition(function (position) {
            console.table(position); // console.log(maPosition.coords);
           
            maPosition = position;

            $(".info").html(`<p class="text-center">Mes coordonnés :latitude ${maPosition.coords.latitude} longitude ${maPosition.coords.longitude} </p>`)

            lati = maPosition.coords.latitude, longi = maPosition.coords.longitude;

            // console.log(marker);
            map = L.map('map').setView([lati, longi], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: ' <a  class="mb-5" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


            marker = L.marker([lati, longi]).addTo(map)
           
            map.panTo(new L.LatLng(lati, longi))
           
            L.marker([lati, longi]).addTo(map)
                .bindPopup('vous etes ici .')
                .openPopup();

            console.log(longi, lati);

        })

    }

    function affiche(e) {
        e.preventDefault();
        console.log("bonjour");
        const url = "http://localhost:3000/villes";

        fetch(url, { method: 'get' }).then(response => response.json()).then(function (tab) {
            if (tab.lenght) {
                console.log(tab);
                
            }
        }

        
    }

   
      
      
    })

  

        // const url = 'https://geo.api.gouv.fr/communes?';
        // const geo = '=code,nom,codesPostaux,surface,population,centre,contour';
        // let code = 'lat=50.94613411928827&lon=1.8229451943823&fields';
        // let urlgeo = url + geo + code;console.log(urlgeo);
