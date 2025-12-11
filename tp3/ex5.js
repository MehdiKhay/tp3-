function ajouter(nb1, nb2) {
    var calcul = nb1 + nb2;
    return calcul;
}
var test1 = ajouter(7, 3);
console.log(test1);
function saluer(personne, age) {
    if (age !== undefined) {
        return "marhbe ".concat(personne);
    }
    else {
        return "salut ".concat(personne);
    }
}
var message1 = saluer("mehdi", 22);
var message2 = saluer("mahdy");
console.log(message1);
console.log(message2);
function calculerpuissance(nb, expo) {
    if (expo === void 0) { expo = 2; }
    var resultat = 1;
    for (var i = 0; i < expo; i++) {
        resultat = resultat * nb;
    }
    return resultat;
}
var p1 = calculerpuissance(4, 3);
var p2 = calculerpuissance(6);
console.log(p1);
console.log(p2);
function fusionner(a, b) {
    if (typeof a === "string") {
        return a + " " + b;
    }
    else {
        return a + b;
    }
}
var fusionNombres = fusionner(50, 25);
var fusionTextes = fusionner("al selemou", "alaikom");
console.log("nombres:", fusionNombres);
console.log("string:", fusionTextes);
