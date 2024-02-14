// Rempli la liste déroulante
function afficheVille() {
    let nomVilleChoisie = document.getElementById('listeDeroul').value;
    let villes = document.getElementsByClassName('nomVille');
    for (let i = 0; i < villes.length; i++) {
        if (villes[i].id.toLowerCase() === nomVilleChoisie.toLowerCase()) {
            villes[i].style.display = "";
        } else {
            villes[i].style.display = "none";
                }
            }
        }
// Met la ville de Niort par défaut
window.onload = function() {
    document.getElementById("listeDeroul").value = "niort";
    afficheVille();
};