var table = document.querySelector("#tableauLivres");

var livre1 = document.createElement("tr");
livre1.innerHTML = `<td>L'algorithmique selon H2PROG</td>
                <td>Matthieu GASTON</td>
                <td>200</td>
                <td><button class="btn btn-warning">Modifier</button></td>
                <td><button class="btn btn-danger">Supprimer</button></td>`;
table.appendChild(livre1);