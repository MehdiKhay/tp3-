"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personne = void 0;
var personne = /** @class */ (function () {
    function personne(id, nom) {
        this.id = id;
        this.nom = nom;
    }
    personne.prototype.sepresenter = function () {
        return "esmi ".concat(this.nom, " (").concat(this.getrole(), ")");
    };
    return personne;
}());
exports.personne = personne;
