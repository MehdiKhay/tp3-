let id: number | string = 5;
console.log(id);
id = "mehdi";
console.log(id);
type premier = {name: string;};
type deuxieme = {number: number;};
type combine = premier & deuxieme;
let person: combine = {
    name: "mahdy",
    number: 20
};
console.log("combine", person);
type status = "pending" | "done" | "canceled";
let status1: status = "pending";
console.log("status1:", status1);
status1 = "termine";
console.log("status2:", status1);

let unk: unknown = "gkgksgsgs";

let l1 = (unk as string).length;
console.log("lenght", l1);
unk = 100;
console.log(unk);