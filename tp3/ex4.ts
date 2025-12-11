interface user {
    id: number;
    name: string;
    email?: string;  
    readonly isadmin: boolean;  
}
let user1: user = {
    id: 1,
    name: "mehdi",
    email: "mmm@gmail.com",
    isadmin: false
};

interface admin extends user {
    permissions: string[];
}


let admin1: admin = {
    id: 2,
    name: "mahdy", 
    isadmin: true,
    permissions: ["a", "b"]
};

console.log("user1:", user1);
console.log("admin1:", admin1);