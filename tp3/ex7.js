function identite(valeur) {
    return valeur;
}
var id1 = identite(5);
var id2 = identite("salut");
var id3 = identite(true);
console.log(id1);
console.log(id2);
console.log(id3);
function premier(tableau) {
    return tableau[0];
}
var int = [1, 2, 3];
var str = ["a", "bc", "c"];
var pr1 = premier(int);
var pr2 = premier(str);
console.log(pr1);
console.log(pr2);
var repository = /** @class */ (function () {
    function repository() {
        this.contenu = [];
    }
    repository.prototype.add = function (dedans) {
        this.contenu.push(dedans);
        console.log("content : ".concat(dedans));
    };
    repository.prototype.remove = function (hors) {
        var position = this.contenu.indexOf(hors);
        if (position > -1) {
            this.contenu.splice(position, 1);
            console.log("deleted: ".concat(hors));
        }
    };
    repository.prototype.getall = function () {
        return this.contenu;
    };
    return repository;
}());
var apireponse1 = {
    donnees: "abc"
};
var apireponse2 = {
    donnees: {
        nom: "mehdi",
        ville: "manar"
    },
    erreur: "404"
};
console.log(apireponse1);
console.log(apireponse2);
