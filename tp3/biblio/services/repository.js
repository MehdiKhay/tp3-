"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = void 0;
var repository = /** @class */ (function () {
    function repository() {
        this.elements = [];
    }
    repository.prototype.ajouter = function (element) {
        this.elements.push(element);
    };
    repository.prototype.supprimer = function (id) {
        var index = this.elements.findIndex(function (e) { return e.id === id; });
        if (index > -1) {
            this.elements.splice(index, 1);
            return true;
        }
        return false;
    };
    repository.prototype.trouverparid = function (id) {
        return this.elements.find(function (e) { return e.id === id; });
    };
    repository.prototype.trouvertous = function () {
        return __spreadArray([], this.elements, true);
    };
    repository.prototype.rechercher = function (critere) {
        return this.elements.filter(critere);
    };
    repository.prototype.compter = function () {
        return this.elements.length;
    };
    return repository;
}());
exports.repository = repository;
