import User from "./Services/USer.js";
import { Permission } from "./Services/Permission.js";
import Role from "./Services/Role.js";
import { saveFile } from "./utills/FileSystem.js";
import readline from "readline";

// Permisssions
const Edit = new Permission("edit");
const Delete = new Permission("delete");
const Add = new Permission("add");
// ROle
const Admin = new Role(); //Admin
Admin.addPermissions(Edit.pname);
Admin.addPermissions(Delete.pname);
Admin.addPermissions(Add.pname);

const View = new Role(); //Viwer
View.addPermissions(Add.pname);
View.addPermissions(Delete.pname);

// Users
const user1 = new User("YAdaav Ji", 8817057601, "NRK Bussiness park, Indore");
const user2 = new User("Lokesh", 78327894272, "Reddiosion blue, Indore");
const user3 = new User("Shashank", 9387654367, "Vijay Nagar, Indore");

// user1.addRole(Admin);
// console.log(user1);
const user4 = new User("Ramesh", 8877665544, "Palasia, Indore");

user2.addRole(Admin);

user1.addRole(View);

saveFile(user1);

// console.log(user2);
// console.log(user2.roles[0]);
// user2.hasPermission();
// user1.hasPermission();
// user2.hasPermission();
// user1.hasPermission();
// console.log(user2.hasPermission());

// console.log(user1.hasPermission());
// =========================================================================
// cli code for user managemant system

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function menu() {
//   console.log("1. To Add user\n", "2. To Add Role\n", "3. Check Permissions\n");
// }

// function promptMenu() {
//   menu();
//   rl.question("Enter YOu choise", (choise) => {
//     switch (choise) {
//       case "1":
//         addUser();
//         break;

//       default:
//         break;
//     }
//   });
// }
// promptMenu();

// function addUser() {
//   r1.question("Enter the Name of the USer: ",())
// }

// menu();
