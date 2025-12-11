var nom = "mehdi";
var age = 20;
var admin = false;
var notes = [10, 15, 12, 18];
var eleve = ["mahdy", 21];
var role;
(function (role) {
    role[role["user"] = 0] = "user";
    role[role["admin"] = 1] = "admin";
    role[role["superadmin"] = 2] = "superadmin";
})(role || (role = {}));
var role1 = role.user;
console.log("nom", nom);
console.log("age", age);
console.log("admin", admin);
console.log("notes", notes);
console.log("eleve", eleve);
console.log("role", role1);
