let nom: string = "mehdi";
let age: number = 20;
let admin: boolean = false;

let notes: number[] = [10, 15, 12, 18];
let eleve: [string, number] = ["mahdy", 21];
enum role {
    user,
    admin,
    superadmin
}

let role1: role = role.user;
console.log("nom", nom);
console.log("age", age); 
console.log("admin", admin);
console.log("notes", notes);
console.log("eleve", eleve);
console.log("role", role1);