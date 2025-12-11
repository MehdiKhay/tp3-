"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creerlivre = creerlivre;
function creerlivre(id, titre, auteur, annee) {
    return {
        id: id,
        titre: titre,
        auteur: auteur,
        annee: annee,
        disponible: true
    };
}
