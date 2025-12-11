function ajouter(nb1: number, nb2: number): number {
    let calcul = nb1 + nb2;
    return calcul;
}
let test1 = ajouter(7, 3);
console.log(test1);
function saluer(personne: string, age?: number): string {
    if (age !== undefined) {
        return `marhbe ${personne}`;
    } else {
        return `salut ${personne}`;}
}
let message1 = saluer("mehdi", 22);
let message2 = saluer("mahdy");
console.log(message1);
console.log(message2);
function calculerpuissance(nb: number, expo: number = 2): number {
    let resultat = 1;
    for (let i = 0; i < expo; i++) {
        resultat = resultat * nb;
    }
    return resultat;
}
let p1 = calculerpuissance(4, 3);
let p2 = calculerpuissance(6); 
console.log(p1);
console.log(p2);
function fusionner(a: string, b: string): string;
function fusionner(a: number, b: number): number;
function fusionner(a: any, b: any): any {
    if (typeof a === "string") {
        return a + " " + b;
    } else {
        return a + b;
    }
}
let fusionNombres = fusionner(50, 25);
let fusionTextes = fusionner("al selemou", "alaikom");
console.log("nombres:", fusionNombres);
console.log("string:", fusionTextes);
