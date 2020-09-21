class  Sejour {
    constructor(private _nom: string, private _prix: number){
    }
    get nom(){
        return this._nom;
    }

    get prix(){
        return this._prix;
    }
}

class SejourService{
    private _sejours:Sejour[] = [];
    constructor(){
        this._sejours.push(new Sejour('Montpellier', 300));
        this._sejours.push(new Sejour('Paris', 800));
        this._sejours.push(new Sejour('Strasbourg', 400));
        this._sejours.push(new Sejour('Lyon', 600));
    }

    rechercherSejour(nom:string): Sejour|void{
        for (let element of this._sejours){
            if (element.nom == nom){
                return element;
            }
        }
    }

    
}

const ss = new SejourService();
console.log(ss.rechercherSejour('Strasbourg'));