function identite<T>(valeur: T): T {
    return valeur;
}
let id1 = identite(5);        
let id2 = identite("salut");  
let id3 = identite(true);   
console.log(id1);
console.log(id2);
console.log(id3);
function premier<T>(tableau: T[]): T {
    return tableau[0];
}
let int = [1, 2, 3];
let str = ["a", "bc", "c"];

let pr1 = premier(int);
let pr2 = premier(str);
console.log(pr1);
console.log(pr2);
class repository<T> {
    private contenu: T[] = [];
    add(dedans: T): void {
        this.contenu.push(dedans);
        console.log(`content : ${dedans}`);
    }
    remove(hors: T): void {
        let position = this.contenu.indexOf(hors);
        if (position > -1) {
            this.contenu.splice(position, 1);
            console.log(`deleted: ${hors}`);
        }
    }
    getall(): T[] {
        return this.contenu;}
}
interface apireponse<T> {
    donnees: T;        
    erreur?: string; 
}
let apireponse1: apireponse<string> = {
    donnees: "abc"
};

let apireponse2: apireponse<{nom: string, ville: string}> = {
    donnees: {
        nom: "mehdi",
        ville: "manar"
    },
    erreur: "404"
};
console.log(apireponse1);
console.log( apireponse2);