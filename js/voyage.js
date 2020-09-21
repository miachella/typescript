"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour('Montpellier', 300));
        this._sejours.push(new Sejour('Paris', 800));
        this._sejours.push(new Sejour('Strasbourg', 400));
        this._sejours.push(new Sejour('Lyon', 600));
    }
    SejourService.prototype.rechercherSejour = function (nom) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.nom == nom) {
                return element;
            }
        }
    };
    return SejourService;
}());
var ss = new SejourService();
console.log(ss.rechercherSejour('Strasbourg'));
