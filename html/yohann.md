yohann
#9683

rayen hidri
—
16/05/2022
Type de fichier joint : acrobat
Nursery-ateliers-2.pdf
4.55 MB
rayen hidri
—
16/05/2022
https://github.com/
GitHub
GitHub: Where the world builds software
GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...
GitHub: Where the world builds software
rayen hidri
—
17/05/2022

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cours HTML</title>
    </head>
    <body>
        <h1>Mon 1er cours HTML</h1>
    </body>
</html>

rayen hidri
—
17/05/2022
=============
les attributs
il y a des attributs génériques : qui s'appliquent à tous les elements

<p class="para1" id="p1">Un paragraphe</p>

d'autres qui sont spécifiques :
rayen hidri
—
17/05/2022
exemple : l'attribut href ne s'applique qu'à une balise a

        <a href="https://www.google.com" target="_blank" title="Lien vers Google"> Lien vers Google </a>

rayen hidri
—
17/05/2022

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

rayen hidri
—
17/05/2022

        <meta name="keywords" content="cours html, dev web">

rayen hidri
—
17/05/2022

        <meta name="description" content="Le meilleur site pour les tuto web">

Dalian
—
17/05/2022

<a href="https://www.google.fr/" target="_blank" title="Lien vers google"> Lien vers google </a>

Allan || Rocket
—
17/05/2022

  <a href="https://getbootstrap.com" target="_blank">
        <img src="logo_bootstrap.png" alt="LogoBootstrap">
    </a>

rayen hidri
—
17/05/2022
=====================
créer un dossier clients et qui contient un fichier fiche-client.html
dans le fichier fiche-client.html, mettre un h1
dans index, mettre un lien vers fiche-client
et dans fiche-client, mettre un lien vers index
rayen hidri
—
18/05/2022

---

faire un lien vers son adresse mail
un lien vers son num de tel
un lien vers un num de fax
un lien vers un id skype
rayen hidri
—
18/05/2022

    <a href="mailto:contact@example.com">lien vers mail</a><br>
        <a href="mailto:recrutement@example.com?subject=demande d'emploi&cc=admin@example.com&bcc=direction@example.com&body=Vous trouverez en pièce jointe mon CV">lien mail complet</a><br>
        <a href="tel:0627675565">lien vers tel</a><br>
        <a href="fax:+33500000000">lien vers fax</a><br>
        <a href="callto:rayan_hidri">lien vers skype</a><br>

https://wprock.fr/blog/liens-html-mail-telephone-fax-skype-ts3/
wpRock
Julien .MA Jacob
HTML ☎️ Liens pour e-mail, téléphone, fax, skype et TeamSpeak (TS3)
Créer des liens pour adresse mail, skype, téléphone et fax qui, une fois cliqué, s'ouvre avec l'application appropriée pré-remplis chez l'utilisateur.
HTML ☎️ Liens pour e-mail, téléphone, fax, skype et TeamSpeak (TS3)
rayen hidri
—
18/05/2022
=========
les tab
réaliser le tab de cette capture
Image
rayen hidri
—
18/05/2022

table>(tr>th*5)+(tr>td*5)\*3

rayen hidri
—
18/05/2022

<table>
            <tr>
                <th>Eleve</th>
                <th>Matière 1</th>
                <th>Matière 2</th>
                <th>Matière 3</th>
                <th>Matière 4</th>
            </tr>
            <tr>
                <td>Eric</td>
                <td>12</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
            </tr>
            <tr>
                <td>Stéphane</td>
                <td>14</td>
                <td>11</td>
                <td>13</td>
                <td>17</td>
            </tr>
            <tr>
                <td>Lucie</td>
                <td>16</td>
                <td>5</td>
                <td>15</td>
                <td>7</td>
            </tr>
        </table>

rayen hidri
—
18/05/2022

---

les listes ordonnées

<ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>test</li>
        </ol>

        <ol type="A" start="10">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>test</li>
        </ol>

rayen hidri
—
18/05/2022

---

ul : unordered list

<ul>
            <li>
                <ul>
                    <li>Café crème</li>
                    <li>Café Noisette</li>
                    <li>Café Noir</li>
                    <li>Expresso</li>
                </ul>
            </li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>

rayen hidri
—
18/05/2022

<style>
            body {
                width: 60%;
                margin: 0 20%;
            }
            h1 {
                text-align: center;
            }
            p {
                font-size: 1.5rem;
            }
            
            img {
                display: block;
                width: 100%;
            }
            table {
                width: 100%;
                border: 3px solid black;
            }
            th,
            td {
                padding: 12px;
                text-align: center;
                border: 1px solid black;
            }
            th {
                background: #ccc;
            }
            th:first-child,
            td:first-child {
                text-align: left;
            }
        </style>

rayen hidri
—
Hier à 08:59

git config --global user.name "your_github_username"
git config --global user.email "your_github_email"

rayen hidri
—
Hier à 10:21
https://www.atlassian.com/git/tutorials/git-ssh
Atlassian
Git SSH Keys | Atlassian Git Tutorial
SSH Keys are used as credentials for remote login and management. Learn more about their purpose and how to generate SSH keys for Mac, Linux, and Windows.
rayen hidri
—
Hier à 11:44
git config --global core.editor notepad.exe
rayen hidri
—
Hier à 14:41
index.html?nom=hidri&prenom=Ryan&Valider=Valider
=========
formulaires

<form action="index.html">
            Nom : <input type="text" name="nom" id="nom" /> <br />
            Prenom : <input type="text" name="prenom" id="prenom" /> <br />
            <input type="submit" name="Valider" id="Valider" value="Valider" />
        </form>

rayen hidri
—
Hier à 17:21

<label for="cars">choisir une voiture:</label>
<select id="cars" name="cars" required>

<option value="">Veuillez choisir</option>
<option value="volvo">Voiture Volvo</option>
<option value="saab">Voiture Saab</option>
<option value="fiat" selected>Voiture Fiat</option>
<option value="audi">Voiture Audi</option>
</select>

rayen hidri
—
Aujourd’hui à 12:15

<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords" content="cours html, dev web" />

Afficher plus
index.html3 Ko

<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords" content="cours html, dev web" />
		<meta name="description" content="Le meilleur site pour les tuto web" />
		<title>Cours HTML</title>
		<style>
			body {
				width: 80%;
				margin: 0 auto;
			}
		</style>
	</head>
	<body style="background: silver">
		<h1>Votre réservation d'hotel</h1>
		<h2>* champs obligatorires</h2>
		<br /><br /><br />
		<form action="" method="post" enctype="multipart/form-data">
			<label for="nom">Votre nom* :</label>
			<input type="text" name="nom" id="nom" placeholder="nom de famille" /><br /><br />

<label for="prenom">Prénom\* :</label>
<input type="text" name="prenom" id="prenom" placeholder="prénom" /><br /><br />
<label for="tel">Tel* :</label>
<input type="tel" name="tel" id="tel" placeholder="Num de tel à 10 chiffres" /><br /><br />
<label for="mail">Adresse mail* :</label>
<input type="email" name="mail" id="mail" placeholder="login@domaine.extension" /><br /><br />
<label for="ville">Ville* :</label>
<select name="ville" id="ville">
<option value="">Veuillez choisir</option>
<option value="paris">Paris</option>
<option value="lille">Lille</option>
<option value="marseille">Marseille</option></select
    		><br /><br />
<label for="date">Date d'arrivée* :</label>
<input type="date" name="date" id="date" /><br /><br />
<label for="nb">Nombre de personnes* :</label>
<input type="number" name="nb" id="nb" min="1" max="100" value="1" /><br /><br />
<label for="choix">Vos options</label><br />
<input type="checkbox" name="choix" id="clim" value="clim" /> Climatisation
<input type="checkbox" name="choix" id="bar" value="bar" /> Mini bar
<input type="checkbox" name="choix" id="jacuzzi" value="jacuzzi" /> Jacuzzi <br /><br />
<label for="msg">Ajouter un commentaire : </label>
<textarea name="msg" id="msg" cols="30" rows="10">Ajouter un commentaire</textarea><br /><br />
<label for="cgv">Acceptation des CGV* : </label>
<input type="radio" name="cgv" id="oui" value="oui" /> OUI <input type="radio" name="cgv" id="non" value="non" /> NON <br /><br />
<input type="submit" value="Valider" />
<input type="reset" value="Réinitialiser" />
<br /><br /><br /><br /><br /><br />
</form>
</body>

</html>
