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

var livres = [l1,l2,l3,l4];
for (i = 0 ; i <= livres.length -1 ; i++) {
    var livre1 = document.createElement("tr");
    livre1.innerHTML = `<td>${livres[i].nom}</td>
                <td>${livres[i].auteur}</td>
                <td>${livres[i].pages}</td>
                <td><button class="btn btn-warning">Modifier</button></td>
                <td><button class="btn btn-danger">Supprimer</button></td>`;
    table.appendChild(livre1);
}



