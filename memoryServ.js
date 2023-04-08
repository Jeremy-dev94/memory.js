const table = document.querySelector("#tableauLivres");

var l1 = {
    nom : "L'algotithmique selon H2PROG",
    auteur : "Matthieu GASTON",
    pages: 200
}

var l2 = {
    nom : "La france du 19ème",
    auteur : "Albert PATRICK",
    pages: 500
}

var l3 = {
    nom : "Le monde des animaux",
    auteur : "Marc MERLIN",
    pages: 200
}

var l4 = {
    nom : "Le virus d'asie",
    auteur : "Tya milo",
    pages: 120
}

var biblio = [l1,l2,l3,l4];
for (i = 0 ; i <= biblio.length -1 ; i++) {
    var livre1 = document.createElement("tr");
    livre1.innerHTML = `<td>${biblio[i].nom}</td>
                <td>${biblio[i].auteur}</td>
                <td>${biblio[i].pages}</td>
                <button type="button" class="btn btn-warning m-4">Modifier</button>
                <button type="button" class="btn btn-danger m-4">Supprimer</button>`;
    table.appendChild(livre1);
}

function ajoutFormulaire() {
   document.querySelector("#ajoutForm").removeAttribute("class")
}

document.querySelector("#validationFormAjout").addEventListener("click", function(event){
    event.preventDefault()
    var titre = document.querySelector("#ajoutForm #titre").Value;
    var auteur = document.querySelector("#ajoutForm #auteur").value;
    var pages = document.querySelector("#ajoutForm #pages").value;
    ajoutLivre(titre, auteur, pages)
});

function ajoutLivre(titre, auteur, pages) {
    var livre = {
        nom : titre,
        auteur : auteur,
        pages : pages
    }
biblio.push(livre);
console.log(biblio);
}
