import { log } from "console";
import fs from "fs";

class User {
  constructor(name, cNO, Adrs) {
    this.name = name;
    this.cNO = cNO;
    this.Adrs = Adrs;
    this.roles = [];
  }
  addRole(role) {
    this.roles.push(role);
    // return true;
    // this.saveFile();
  }
  removeRole(role) {
    this.roles.filter((r) => {
      r.name !== role;
      // this.saveFile();
    });
  }
  // hasrole() {
  //   return this.roles;
  // }
  hasPermission() {
    // console.log(this.roles);
    // console.log(this.roles.permission.pname);
    for (const i of this.roles) {
      //   console.log(i, this.name);
      for (const j of i.permission) {
        // console.log(j);
        if (j.includes("edit")) {
          console.log("Has Permission to edit");
        }
        if (j.includes("delete")) {
          console.log("Has Permission to delete");
        }
        if (j.includes("add")) {
          console.log("Has Permission to Add");
        }
      }
    }
  }
  //   hasPermission() {
  // console.log(this.role);
  // for (let i = 0; i < this.roles.length; i++) {
  //   if (this.roles[i] == "edit") {
  //     console.log("has permision to edit");
  //   }
  //   if (this.roles[i] == "delete") {
  //     console.log("Has permision to Delete");
  //   }
  //   if (this.roles[i] == "add") {
  //     console.log("HAs permisision to Add");
  //   }

  // }
  // console.log("sdfghjk");
  // const count = 0;
  // for (const i of this.roles) {
  //   if (i.permission.) {
  //     console.log("sdfghjkl");
  //   }
  //   console.log(i.permission[0].pname);

  //   if (i.permission.includes("edit")) {
  //     console.log("has permision to edit");
  //   }
  //   if (i.permission.includes("delete")) {
  //     console.log("Has permision to Delete");
  //   }
  //   if (i.permission.includes("add")) {
  //     console.log("HAs permisision to Add");
  //   }
  // }

  // hasPermission() {
  //   console.log(this.roles);
  // }
}

// ========test Data ===================
// const user1 = new User("Admin", 8881705760, "NRK Bussiness park");
// const user2 = new User("Viewer", 111111111, "NRK Bussiness park 2");

// user1.addRole("edit");
// user1.addRole("delete");
// // user1.addRole("add");
// // user1.saveFile();

// user1.hasrole();

export default User;
