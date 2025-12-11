"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bibliotheque = void 0;
var repository_js_1 = require("./repository.js");
var bibliotheque = /** @class */ (function () {
    function bibliotheque() {
        this.livrerepo = new repository_js_1.repository();
        this.utilisateurrepo = new repository_js_1.repository();
        this.livresempruntes = new Map();
    }
    bibliotheque.prototype.ajouterlivre = function (livre) {
        this.livrerepo.ajouter(livre);
        console.log("livreajou: \"".concat(livre.titre, "\""));
    };
    bibliotheque.prototype.supprimerlivre = function (id) {
        var succes = this.livrerepo.supprimer(id);
        if (succes) {
            console.log("ivresupp ".concat(id));
        }
        return succes;
    };
    bibliotheque.prototype.emprunterlivre = function (livreid, userid) {
        var livre = this.livrerepo.trouverparid(livreid);
        var utilisateur = this.utilisateurrepo.trouverparid(userid);
        if (!livre || !utilisateur) {
            console.log('erreur');
            return false;
        }
        if (!livre.disponible) {
            console.log('livre non dispo');
            return false;
        }
        if (!utilisateur.peutemprunter()) {
            console.log('impo a enprunter');
            return false;
        }
        livre.disponible = false;
        this.livresempruntes.set(livreid, userid);
        console.log("\"".concat(livre.titre, "\" emprunte par ").concat(utilisateur.nom));
        return true;
    };
    bibliotheque.prototype.rendrelivre = function (livreid) {
        var livre = this.livrerepo.trouverparid(livreid);
        if (!livre) {
            console.log('erreur');
            return false;
        }
        if (livre.disponible) {
            console.log('non dispo');
            return false;
        }
        livre.disponible = true;
        this.livresempruntes.delete(livreid);
        console.log("\"".concat(livre.titre, "\" rendu"));
        return true;
    };
    bibliotheque.prototype.rechercherlivres = function (motcle) {
        return this.livrerepo.rechercher(function (livre) {
            return livre.titre.toLowerCase().includes(motcle.toLowerCase()) ||
                livre.auteur.toLowerCase().includes(motcle.toLowerCase());
        });
    };
    bibliotheque.prototype.listerlivresdisponibles = function () {
        return this.livrerepo.rechercher(function (livre) { return livre.disponible; });
    };
    bibliotheque.prototype.listerlivresempruntes = function () {
        return this.livrerepo.rechercher(function (livre) { return !livre.disponible; });
    };
    bibliotheque.prototype.ajouterutilisateur = function (user) {
        this.utilisateurrepo.ajouter(user);
    };
    return bibliotheque;
}());
exports.bibliotheque = bibliotheque;
